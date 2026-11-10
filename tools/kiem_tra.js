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
    await page.screenshot({ path: path.join(OUT, '_trang_chu.png'), fullPage: true });
    await page.close();
  }

  for (const p of ds.filter(p => p.link.startsWith('phieu/'))) {
    console.log(p.link);
    for (const [ten, vp] of [['may_tinh', { width: 900, height: 1200 }], ['dien_thoai', { width: 390, height: 844 }]]) {
      const page = await browser.newPage({ viewport: vp });
      const gui = [], hong = [];
      page.on('pageerror', e => hong.push(e.message));
      page.on('response', r => { if (r.status() >= 400 && r.url().startsWith(base)) hong.push(r.status() + ' ' + r.url()); });
      await page.route(/script\.google\.com|docs\.google\.com/, route => { gui.push(route.request().url()); route.fulfill({ status: 200, body: 'ok' }); });
      await page.goto(base + p.link);
      await page.waitForLoadState('networkidle');
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
