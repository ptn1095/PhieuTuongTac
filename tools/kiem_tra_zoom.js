// Kiểm tra bài giảng zoom: node tools/kiem_tra_zoom.js baigiang/<tên> [thư-mục-ảnh]
// Chụp tổng quan, khung tiêu đề, mọi chủ đề, một câu đố đã trả lời, khung Tổng kết, Về đích, giấy chứng nhận.
// Báo chữ tràn khung và lỗi trang. Thêm HIENHET=1 phía trước để chụp bảng 4 bước đã hiện hết đáp án.
const path = require('path'), fs = require('fs');
const { chromium } = require('playwright');
const dir = path.resolve(process.argv[2] || 'baigiang/bang-tinh-thcs');
const OUT = process.argv[3] || path.join(require('os').tmpdir(), 'kiem_tra_zoom');
fs.mkdirSync(OUT, { recursive: true });
(async () => {
  const b = await chromium.launch(fs.existsSync('/usr/bin/google-chrome') ? { executablePath: '/usr/bin/google-chrome' } : {});
  const p = await b.newPage({ viewport: { width: 1366, height: 768 } });
  const loi = []; p.on('pageerror', e => loi.push(e.message));
  await p.goto('file://' + path.join(dir, 'index.html'));
  await p.waitForTimeout(800); await p.screenshot({ path: `${OUT}/00_batdau.png` });
  await p.click('#go', { force: true }); await p.waitForTimeout(3000);
  const shot = async (id, ten) => { await p.evaluate(i => goId(i), id); await p.waitForTimeout(2300); await p.screenshot({ path: `${OUT}/${ten}.png` }); };
  await shot('title', '01_tieude');
  // HIENHET=1: hiện sẵn mọi câu hỏi, đáp án, Ghi nhớ (kiểu 4 bước hiện dần) để xem bảng đầy đủ
  if (process.env.HIENHET) await p.evaluate(() => document.querySelectorAll('.rv').forEach(e => e.classList.add('on')));
  const ids = await p.evaluate(() => PATH.filter(id => !QUIZ[id] && !['overview', 'title', 'recap', 'result'].includes(id)));
  for (const [i, id] of ids.entries()) await shot(id, `02_chude_${String(i + 1).padStart(2, '0')}`);
  const q = await p.evaluate(() => Object.keys(QUIZ));
  await shot(q[0], '03_cauhoi'); await p.evaluate(i => choose(i, (QUIZ[i].q.a + 1) % 4), q[0]); await p.waitForTimeout(700); await p.screenshot({ path: `${OUT}/03_cauhoi_sai.png` });
  await shot('recap', '04_tongket');
  await p.evaluate(() => Object.keys(QUIZ).forEach(id => { ans[id] = QUIZ[id].q.a; }));
  await shot('result', '05_vedich');
  await p.evaluate(() => go(0)); await p.waitForTimeout(2300); await p.screenshot({ path: `${OUT}/06_tongquan.png` });
  await p.evaluate(async () => { const u = await drawCert('Nguyễn Thị Ánh Dương', '9A1', score()); window.__u = u; });
  fs.writeFileSync(`${OUT}/07_chungnhan.png`, Buffer.from((await p.evaluate(() => window.__u)).split(',')[1], 'base64'));
  const tran = await p.evaluate(() => [...document.querySelectorAll('.panel,.qtext,.opts,.rk,.rcard,.fb')]
    .filter(e => e.scrollHeight > e.clientHeight + 3).map(e => (e.closest('.frame') || {}).dataset?.id + ' ' + e.className));
  console.log('Số câu đố:', q.length, '| Số chủ đề:', ids.length);
  console.log(tran.length ? 'CHỮ TRÀN: ' + tran.join(', ') : 'Không có chữ tràn khung.');
  console.log(loi.length ? 'LỖI TRANG: ' + loi.join(' | ') : 'Không có lỗi trang.');
  console.log('Ảnh chụp ở:', OUT);
  await b.close();
})();
