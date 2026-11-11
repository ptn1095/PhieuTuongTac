// Tự làm thử mọi phiếu: node tools/kiem_tra.js [thư-mục-ảnh-chụp]
// Không gửi điểm thật: mọi yêu cầu tới Google bị chặn và chỉ ghi lại để kiểm tra.
const http = require('http'), fs = require('fs'), path = require('path');
const { chromium } = require('playwright');
const GOC = path.resolve(__dirname, '..');
const OUT = process.argv[2] || path.join(require('os').tmpdir(), 'kiem_tra_phieu');
fs.mkdirSync(OUT, { recursive: true });
const MIME = { '.html': 'text/html; charset=utf-8', '.json': 'application/json', '.jpg': 'image/jpeg', '.png': 'image/png', '.js': 'text/javascript' };

// Phiếu mẫu chỉ dùng khi thử (không đăng): có Đúng/Sai, A/B/C/D, điền; 3 trạng thái hạn làm bài
const ENGINE = fs.readFileSync(path.join(GOC, 'tools', 'engine.html'), 'utf8');
const homNay = new Date(), ng = d => new Date(homNay.getTime() + d * 864e5).toISOString().slice(0, 10);
const MAU = {
  __mau_mo__: { dong: ng(3) }, __mau_dong__: { dong: ng(-2) }, __mau_chua__: { mo: ng(2) },
};
function phieuMau(slug) {
  const P = { slug, web: { khoi: 'khoi-3', ngay: ng(0), ...MAU[slug] }, ma: 'Phiếu mẫu', mon: 'MẪU', tieuDe: 'Phiếu mẫu', lop: ['3A1'],
    guiB: 'https://script.google.com/macros/s/MAU/exec', bai: [
      { loai: 'ds', yc: 'Đúng hay sai?', cau: [{ text: '1 + 1 = 2', da: 'Đ' }, { text: '2 + 2 = 5', da: 'S' }] },
      { loai: 'abcd', yc: 'Chọn đáp án.', cau: [{ text: '3 × 3 = ?', lc: ['6', '9', '12', '33'], da: '9' }] },
      { loai: 'dien', yc: 'Điền.', lc: ['đỏ', 'xanh', 'vàng'], cau: [{ text: 'Lá cây màu {}.', da: ['xanh'] }, { text: 'Mặt trời màu {}.', da: ['đỏ'] }] }] };
  return ENGINE.replace('/*__PHIEU__*/', 'const PHIEU = ' + JSON.stringify(P) + ';');
}
const server = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  const mm = p.match(/^\/phieu\/(__mau_\w+__)\/$/);
  if (mm && MAU[mm[1]]) { res.writeHead(200, { 'Content-Type': MIME['.html'] }); return res.end(phieuMau(mm[1])); }
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
    // Trang chủ: dấu "Đã làm", lọc theo lớp
    await page.goto(base);
    await page.waitForTimeout(600);
    bao(await page.locator('.dalam').count() >= 1, 'trang chủ: phiếu vừa nộp có dấu "✓ Đã làm"');
    const lop9 = ds.find(p => p.khoi === 'khoi-9');
    const lopLoc = ds.find(p => p.khoi !== 'khoi-9').lop[0];
    await page.selectOption('#locLop', lopLoc);
    await page.waitForTimeout(200);
    const dem9 = await page.locator('.tab[data-id="khoi-9"] .dem').textContent();
    bao(!lop9 || dem9.startsWith('0'), `chọn lớp ${lopLoc} → khối 9 còn ${dem9}`);
    bao(await page.locator('.chip.cua-em').count() >= 1, 'lớp của em được tô đậm trên thẻ phiếu');
    await page.reload(); await page.waitForTimeout(500);
    bao(await page.inputValue('#locLop') === lopLoc, 'tải lại trang chủ → vẫn nhớ lớp đã chọn');
    await page.selectOption('#locLop', '');
    await ctx.close();
  }

  // Hạn làm bài trên trang chủ (giả lập phieu.json có hạn)
  {
    const page = await browser.newPage({ viewport: { width: 900, height: 1200 } });
    const gia = JSON.parse(JSON.stringify(ds));
    gia.filter(p => p.khoi === gia[0].khoi).forEach((p, i) => { if (i === 0) p.dong = ng(-1); else if (i === 1) p.mo = ng(3); else p.dong = ng(5); });
    await page.route(/phieu\.json/, r => r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(gia) }));
    await page.goto(base + '#' + gia[0].khoi); await page.waitForTimeout(600);
    console.log('Hạn làm bài (trang chủ)');
    const nhan = await page.locator('.nhan').allTextContents();
    bao(nhan.includes('ĐÃ ĐÓNG'), 'phiếu quá hạn → nhãn "ĐÃ ĐÓNG", nút "Đã hết hạn"');
    if (gia.filter(p => p.khoi === gia[0].khoi).length > 1) bao(nhan.includes('SẮP MỞ'), 'phiếu chưa tới ngày mở → nhãn "SẮP MỞ"');
    await page.screenshot({ path: path.join(OUT, '_trang_chu_han.png'), fullPage: true });
    await page.close();
  }

  // Phiếu mẫu: Đúng/Sai bằng nút, xem lại bài, pháo giấy, phiếu đóng/chưa mở
  {
    console.log('Phiếu mẫu (Đúng/Sai, xem lại bài, hạn làm bài)');
    const page = await browser.newPage({ viewport: { width: 900, height: 1100 } });
    const loiMau = []; page.on('pageerror', e => loiMau.push(e.message));
    await page.route(/script\.google\.com/, r => r.fulfill({ status: 200, body: 'ok' }));
    await page.goto(base + 'phieu/__mau_mo__/'); await page.waitForLoadState('networkidle');
    const ds1 = page.locator('.opts.ds').first();
    await ds1.locator('.opt[data-v="S"]').click();
    bao(await ds1.locator('select').inputValue() === 'S', 'Đúng/Sai: bấm nút "Sai" → ghi nhận S');
    await ds1.locator('.opt[data-v="Đ"]').click();
    bao(await ds1.locator('select').inputValue() === 'Đ', 'Đúng/Sai: đổi sang "Đúng" → ghi nhận Đ');
    bao((await page.locator('#huongDan').textContent()).includes('Hạn nộp'), 'phiếu còn hạn → ghi "Hạn nộp" dưới nút Tính điểm');
    await page.evaluate(() => { const T = window.__PHIEU_TEST__; T.sels.forEach((s, i) => { s.value = i === T.sels.length - 1 ? 'vàng' : T.ANS[s.dataset.k]; s.dispatchEvent(new Event('change', { bubbles: true })); });
      document.getElementById('ten').value = 'Mẫu'; document.getElementById('lop').value = '3A1'; });
    await page.locator('#check').click();
    await page.waitForTimeout(700);
    bao(await page.locator('#xemLai').isVisible() && (await page.locator('.dapan').allTextContents()).includes('✓ đỏ'), 'xem lại bài: câu sai ghi kèm đáp án đúng "✓ đỏ"');
    bao(await page.locator('#phaoGiay').count() === 1, 'điểm ≥ 8 → có pháo giấy');
    await page.screenshot({ path: path.join(OUT, '_mau_xem_lai.png'), fullPage: true });
    bao(await page.evaluate(() => !!JSON.parse(localStorage.getItem('coThuyTin_daLam') || '{}').__mau_mo__), 'lưu "đã làm" cho trang chủ');
    for (const [slug, chu] of [['__mau_dong__', 'đã đóng'], ['__mau_chua__', 'chưa mở']]) {
      await page.goto(base + 'phieu/' + slug + '/'); await page.waitForLoadState('networkidle');
      const t = (await page.locator('#khoa').textContent()).toLowerCase();
      bao(t.includes(chu) && await page.locator('#check').isDisabled() && await page.locator('.opt').first().isDisabled(), `phiếu ${chu} → báo "${chu}", khóa nút Tính điểm và các ô`);
    }
    await page.screenshot({ path: path.join(OUT, '_mau_khoa.png') });
    bao(loiMau.length === 0, 'phiếu mẫu không lỗi' + (loiMau.length ? ': ' + loiMau.join('; ') : ''));
    await page.close();
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
          const v = await g.locator('.opt').nth(1).getAttribute('data-v');
          bao(await g.locator('select').inputValue() === v, `bấm phương án ${v} ở câu A/B/C/D → ghi nhận ${v}`);
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
