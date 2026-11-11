// Tự làm thử mọi phiếu: node tools/kiem_tra.js [thư-mục-ảnh-chụp]
// Không gửi điểm thật: mọi yêu cầu tới Google bị chặn và chỉ ghi lại để kiểm tra.
const http = require('http'), fs = require('fs'), path = require('path');
const { chromium } = require('playwright');
const GOC = path.resolve(__dirname, '..');
const OUT = process.argv[2] || path.join(require('os').tmpdir(), 'kiem_tra_phieu');
fs.mkdirSync(OUT, { recursive: true });
const MIME = { '.html': 'text/html; charset=utf-8', '.json': 'application/json', '.jpg': 'image/jpeg', '.png': 'image/png', '.js': 'text/javascript' };

const server = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p.endsWith('/')) p += 'index.html';
  const f = path.join(GOC, p);
  if (!f.startsWith(GOC) || !fs.existsSync(f)) { res.writeHead(404); return res.end('404'); }
  res.writeHead(200, { 'Content-Type': MIME[path.extname(f)] || 'application/octet-stream' });
  fs.createReadStream(f).pipe(res);
});

(async () => {
  await new Promise(r => server.listen(0, r));
  const base = 'http://localhost:' + server.address().port + '/';
  const browser = await chromium.launch();
  let loi = 0;
  const bao = (ok, msg) => { console.log((ok ? '  ✓ ' : '  ✗ ') + msg); if (!ok) loi++; };

  // Trang chủ
  const ds = JSON.parse(fs.readFileSync(path.join(GOC, 'phieu.json'), 'utf8'));
  {
    const page = await browser.newPage({ viewport: { width: 900, height: 1200 } });
    await page.goto(base);
    await page.waitForTimeout(800);
    console.log('Trang chủ');
    for (const k of [...new Set(ds.map(p => p.khoi))]) {
      await page.evaluate(k => { location.hash = k; }, k);
      await page.waitForTimeout(200);
      const n = await page.locator('.card').count();
      bao(n === ds.filter(p => p.khoi === k).length, `${k}: ${n} phiếu hiển thị`);
    }
    await page.evaluate(k => { location.hash = k; }, ds[0].khoi);
    await page.waitForTimeout(200);
    const the = page.locator('.card').first();
    bao(await the.locator('.meta').textContent().then(t => /\d+ câu/.test(t) && /phút/.test(t)), 'thẻ phiếu có số câu và thời gian làm');
    await page.screenshot({ path: path.join(OUT, '_trang_chu.png'), fullPage: true });
    await the.locator('.qr').click();
    await page.waitForTimeout(400);
    const coQR = await page.locator('#qrMa svg').count();
    bao(coQR > 0 && await page.locator('#qrNen').isVisible(), 'bấm "Mã QR" → hiện hộp mã QR' + (coQR ? ' có mã' : ' NHƯNG KHÔNG CÓ MÃ'));
    await page.screenshot({ path: path.join(OUT, '_ma_qr.png') });
    await page.keyboard.press('Escape');
    bao(!(await page.locator('#qrNen').isVisible()), 'bấm Esc → đóng hộp mã QR');
    await page.close();
  }

  // Nút Trở về, xóa bài khi chưa nộp, nhớ tên + lớp
  {
    const cacPhieu = [...new Set(ds.filter(p => p.link.startsWith('phieu/')).map(p => p.link))];
    const ctx = await browser.newContext({ viewport: { width: 900, height: 1000 } });
    await ctx.route(/script\.google\.com|docs\.google\.com/, route => route.fulfill({ status: 200, body: 'ok' }));
    const page = await ctx.newPage();
    console.log('Nút Trở về + nhớ tên');
    await page.goto(base + cacPhieu[0]);
    await page.waitForLoadState('networkidle');
    const n = await page.evaluate(() => window.__PHIEU_TEST__.sels.length);
    bao((await page.locator('#tdChu').textContent()).includes('0/' + n), 'thanh tiến độ: 0/' + n + ' câu');
    await page.locator('.topbar [data-tro-ve]').click();
    bao(page.url() === base, 'chưa làm câu nào → bấm Trở về về thẳng trang chủ');
    await page.goto(base + cacPhieu[0]);
    await page.evaluate(() => { const s = window.__PHIEU_TEST__.sels[0]; s.value = window.__PHIEU_TEST__.ANS[s.dataset.k]; s.dispatchEvent(new Event('change', { bubbles: true })); });
    bao((await page.locator('#tdChu').textContent()).includes('1/' + n), 'làm 1 câu → tiến độ 1/' + n);
    await page.locator('.topbar [data-tro-ve]').click();
    bao(await page.locator('#hopNen').isVisible(), 'đã làm dở → bấm Trở về hiện hộp hỏi lại');
    await page.screenshot({ path: path.join(OUT, '_hop_tro_ve.png') });
    await page.locator('#oLai').click();
    bao(!(await page.locator('#hopNen').isVisible()) && page.url() === base + cacPhieu[0], '"Ở lại làm tiếp" → vẫn ở phiếu, bài còn nguyên');
    await page.locator('.paper [data-tro-ve]').click();
    await page.locator('#diVe').click();
    await page.waitForURL(base);
    bao(true, 'nút Trở về cuối phiếu + "Xóa bài và về trang chủ" → về trang chủ');
    await page.goBack();
    await page.waitForLoadState('networkidle');
    bao(await page.evaluate(() => window.__PHIEU_TEST__.sels.every(s => !s.value)), 'mở lại phiếu (nút Back) → bài trắng, làm lại từ đầu');
    // nộp bài để máy nhớ tên, rồi mở phiếu khác
    await page.evaluate(() => { const T = window.__PHIEU_TEST__; T.sels.forEach(s => { s.value = T.ANS[s.dataset.k]; s.dispatchEvent(new Event('change', { bubbles: true })); });
      document.getElementById('ten').value = 'Bé Nhớ Tên'; const l = document.getElementById('lop'); l.value = l.options[1].value; });
    await page.locator('#check').click();
    await page.waitForTimeout(500);
    bao((await page.locator('#tdChu').textContent()).includes('đã nộp'), 'sau khi nộp: thanh trên cùng báo "Em đã nộp bài"');
    await page.locator('.topbar [data-tro-ve]').click();
    bao(page.url() === base, 'đã nộp → bấm Trở về không hỏi lại');
    if (cacPhieu[1]) {
      await page.goto(base + cacPhieu[1]);
      await page.waitForLoadState('networkidle');
      bao(await page.inputValue('#ten') === 'Bé Nhớ Tên' && await page.locator('#nho').isVisible(), 'phiếu sau tự điền tên đã nhớ, có nhắc "Không phải em"');
      await page.locator('#khongPhai').click();
      bao(await page.inputValue('#ten') === '', 'bấm "Không phải em" → xóa tên');
    }
    await ctx.close();
  }

  for (const p of ds.filter((p, i) => p.link.startsWith('phieu/') && ds.findIndex(q => q.link === p.link) === i)) {
    console.log(p.link);
    for (const [ten, vp] of [['may_tinh', { width: 900, height: 1200 }], ['dien_thoai', { width: 390, height: 844 }]]) {
      const page = await browser.newPage({ viewport: vp });
      const gui = [], hong = [];
      page.on('pageerror', e => hong.push(e.message));
      page.on('response', r => { if (r.status() >= 400 && r.url().startsWith(base)) hong.push(r.status() + ' ' + r.url()); });
      await page.route(/script\.google\.com|docs\.google\.com/, route => { gui.push(route.request().url()); route.fulfill({ status: 200, body: 'ok' }); });
      await page.goto(base + p.link);
      await page.waitForLoadState('networkidle');
      if (ten === 'may_tinh') {
        // Thử bấm thật với 2 dạng mới (A/B/C/D và nối chấm tròn)
        const g = page.locator('[data-abcd]').first();
        if (await g.count()) {
          await g.locator('.opt').nth(1).click();
          bao(await g.locator('select').inputValue() === 'B', 'bấm phương án B ở câu A/B/C/D → ghi nhận B');
        }
        const n = page.locator('[data-noi]').first();
        if (await n.count()) {
          await n.locator('.it.L').first().click();
          await n.locator('.it.R').last().click();
          const v = await n.locator('.an-box select').first().inputValue();
          const lines = await n.locator('svg line').count();
          bao(!!v && lines === 1, `bấm nối chấm tròn → có 1 đường nối ("${v.slice(0, 30)}")`);
        }
      }
      const r = await page.evaluate(lop => {
        const T = window.__PHIEU_TEST__;
        T.sels.forEach(s => { s.value = T.ANS[s.dataset.k]; s.dispatchEvent(new Event('change')); });
        document.getElementById('ten').value = 'Học Sinh Thử';
        const l = document.getElementById('lop'); l.value = lop; l.dispatchEvent(new Event('change'));
        const kq = T.tinh();
        document.getElementById('check').click();
        return { so: T.sels.length, diem: kq.diem, du: kq.du, bg: [...document.images].length };
      }, p.lop[0]);
      await page.waitForTimeout(1500);
      if (ten === 'may_tinh') {
        bao(r.du && r.diem === 10, `làm đúng hết ${r.so} câu → ${r.diem} điểm`);
        bao(gui.length === 1, `gửi điểm ${gui.length} lần`);
        if (gui[0]) {
          const q = new URL(gui[0]).searchParams;
          bao(q.get('diem') === '10' && q.get('ten') === 'Học Sinh Thử' && q.get('lop') === p.lop[0] && !!q.get('phieu'),
            `tham số gửi: phieu="${q.get('phieu')}", diem=${q.get('diem')}, dung=${q.get('dung')}`);
        }
        const sent = await page.locator('#sent').textContent();
        bao(sent.includes('đã được gửi'), 'báo "đã được gửi cho cô"');
        const anh = await page.evaluate(() => document.getElementById('anh').naturalWidth);
        bao(anh > 0, 'ảnh kết quả hiện');
      }
      bao(hong.length === 0, `${ten}: không lỗi tải trang/ảnh` + (hong.length ? ' — ' + hong.join('; ') : ''));
      await page.screenshot({ path: path.join(OUT, p.link.split('/')[1] + '_' + ten + '.png'), fullPage: true });
      await page.close();
    }
  }
  await browser.close();
  server.close();
  console.log(loi ? `\n${loi} lỗi` : '\nTất cả đều ổn.', '\nẢnh chụp:', OUT);
  process.exit(loi ? 1 : 0);
})();
