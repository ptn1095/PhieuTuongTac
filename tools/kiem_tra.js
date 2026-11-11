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
  const P = { slug, tron: true, web: { khoi: 'khoi-3', ngay: ng(0), ...MAU[slug] }, ma: 'Phiếu mẫu', mon: 'MẪU', tieuDe: 'Phiếu mẫu', lop: ['3A1'],
    guiB: 'https://script.google.com/macros/s/MAU/exec', bai: [
      { loai: 'ds', yc: 'Đúng hay sai?', cau: [{ text: '1 + 1 = 2', da: 'Đ' }, { text: '2 + 2 = 5', da: 'S' }] },
      { loai: 'abcd', yc: 'Chọn đáp án.', cau: [{ text: '3 × 3 = ?', lc: ['6', '9', '12', '33'], da: '9' }] },
      { loai: 'go', yc: 'Gõ đáp án.', cau: [{ text: '5 + 2 = {}', da: '7' }, { text: 'Thủ đô Việt Nam là {}', da: ['Hà Nội', 'Ha Noi'] }] },
      { loai: 'nhieu', yc: 'Chọn tất cả.', cau: [{ text: 'Số chẵn là', lc: ['2', '3', '4', '5'], da: ['2', '4'] }] },
      { loai: 'sapxep', yc: 'Sắp xếp từ bé đến lớn.', cau: [{ text: 'một' }, { text: 'hai' }, { text: 'ba' }] },
      { loai: 'dien', yc: 'Điền.', lc: ['đỏ', 'xanh', 'vàng'], cau: [{ text: 'Lá cây màu {}.', da: ['xanh'] }, { text: 'Mặt trời màu {}.', da: ['đỏ'] }] }] };
  return ENGINE.replace('/*__PHIEU__*/', 'const PHIEU = ' + JSON.stringify(P) + ';');
}
const server = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  const mm = p.match(/^\/phieu\/(__mau_\w+__)\/$/);
  if (mm && MAU[mm[1]]) { res.writeHead(200, { 'Content-Type': MIME['.html'] }); return res.end(phieuMau(mm[1])); }
  // Khi thử: mặc định coi như chưa cài link lịch giao (phần thử lịch giao tự giả lập link riêng)
  if (p === '/cauhinh.json') { res.writeHead(200, { 'Content-Type': MIME['.json'] }); return res.end('{"giaoCsv": ""}'); }
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
  const homNay0 = new Date();
  const hsThay = p => !p.chuaGiao && !(p.mo && new Date(String(p.mo).replace(' ', 'T')) > homNay0);  // phiếu học sinh đang thấy
  const choPhieu = pg => pg.waitForFunction(() => window.__PHIEU_TEST__, null, { timeout: 15000 }).catch(() => {});  // phiếu đọc lịch giao xong mới hiện
  const bao = (ok, msg) => { console.log((ok ? '  ✓ ' : '  ✗ ') + msg); if (!ok) loi++; };

  // Trang chủ
  const ds = JSON.parse(fs.readFileSync(path.join(GOC, 'phieu.json'), 'utf8'));
  {
    const page = await browser.newPage({ viewport: { width: 900, height: 1200 } });
    await page.addInitScript(() => localStorage.setItem('coThuyTin_gv', '{"url":"x","mk":"x"}'));  // máy cô: thấy nút Mã QR
    await page.goto(base);
    await page.waitForTimeout(800);
    console.log('Trang chủ');
    for (const k of [...new Set(ds.map(p => p.khoi))]) {
      await page.evaluate(k => { location.hash = k + ':tatca'; }, k);
      await page.waitForTimeout(200);
      const n = await page.locator('.card').count();
      bao(n === ds.filter(p => p.khoi === k).length, `${k}: máy cô thấy ${n} phiếu` + (ds.some(p => p.khoi === k && !hsThay(p)) ? ` (gồm ${ds.filter(p => p.khoi === k && !hsThay(p)).length} phiếu chưa giao – học sinh không thấy)` : ''));
    }
    await page.evaluate(k => { location.hash = k + ':tatca'; }, ds[0].khoi);
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
    const cacPhieu = [...new Set(ds.filter(p => p.link.startsWith('phieu/') && hsThay(p)).map(p => p.link))];
    const ctx = await browser.newContext({ viewport: { width: 900, height: 1000 } });
    await ctx.route(/script\.google\.com|docs\.google\.com/, route => route.fulfill({ status: 200, body: 'ok' }));
    const page = await ctx.newPage();
    console.log('Nút Trở về + nhớ tên');
    await page.goto(base + cacPhieu[0]);
    await choPhieu(page);
    await page.waitForLoadState('networkidle');
    const n = await page.evaluate(() => window.__PHIEU_TEST__.sels.length);
    bao((await page.locator('#tdChu').textContent()).includes('0/' + n), 'thanh tiến độ: 0/' + n + ' câu');
    await page.locator('.topbar [data-tro-ve]').click();
    bao(page.url() === base, 'chưa làm câu nào → bấm Trở về về thẳng trang chủ');
    await page.goto(base + cacPhieu[0]);
    await choPhieu(page);
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
    await choPhieu(page);
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
      await choPhieu(page);
      await page.waitForLoadState('networkidle');
      bao(await page.inputValue('#ten') === 'Bé Nhớ Tên' && await page.locator('#nho').isVisible(), 'phiếu sau tự điền tên đã nhớ, có nhắc "Không phải em"');
      await page.locator('#khongPhai').click();
      bao(await page.inputValue('#ten') === '', 'bấm "Không phải em" → xóa tên');
    }
    // Trang chủ: dấu "Đã làm"
    await page.goto(base + '#' + ds.find(p => p.link === cacPhieu[0]).khoi + ':tatca');
    await page.waitForTimeout(600);
    bao(await page.locator('.dalam').count() >= 1, 'trang chủ: phiếu vừa nộp có dấu "✓ Đã làm"');
    // Trang chủ: chọn khối → xổ xuống lớp → chọn lớp
    const LOPJ = JSON.parse(fs.readFileSync(path.join(GOC, 'lop.json'), 'utf8'));
    await page.evaluate(() => sessionStorage.removeItem('coThuyTin_chon'));
    await page.goto(base); await page.waitForTimeout(500);
    bao(await page.locator('#khuPhieu').isHidden() && await page.locator('#chonLop').isHidden() && await page.locator('#chonLai').isHidden() && await page.locator('.tab').count() === 4,
      'mở trang lần đầu → chỉ có nền, lời chào và 4 nút khối');
    bao(await page.locator('.tab .dem').count() === 0, 'màn hình đầu không hiện số lượng phiếu');
    await page.screenshot({ path: path.join(OUT, '_man_hinh_dau.png') });
    const tenTab = await page.locator('.tab .ten').allTextContents();
    bao(tenTab.join('|') === 'Khối 3|Khối 5|Khối 9|Đội tuyển Tin học', 'nút khối: ' + tenTab.join(', '));
    await page.click('.tab[data-id="khoi-5"]'); await page.waitForTimeout(300);
    const nutLop = await page.locator('#chonLop .nut-lop:not(.tat-ca)').allTextContents();
    bao(nutLop.join(',') === LOPJ['khoi-5'].join(','), 'bấm Khối 5 → xổ xuống lớp: ' + nutLop.join(', '));
    bao(await page.locator('.tab').count() === 1 && (await page.locator('.tab').textContent()).includes('Khối 5') && await page.locator('button.tab').count() === 0,
      'đã chọn Khối 5 → các khối khác ẩn, không còn nút khối nào bấm được');
    bao(await page.locator('.card').count() === 0, 'chưa chọn lớp → chưa hiện phiếu');
    await page.screenshot({ path: path.join(OUT, '_chon_lop.png') });
    await page.click('#chonLop .nut-lop[data-l="5A2"]'); await page.waitForTimeout(300);
    const the5 = ds.filter(p => p.khoi === 'khoi-5' && p.lop.includes('5A2')).length;
    bao(await page.locator('.card').count() === the5 && (await page.locator('#chonLop').textContent()).includes('5A2'), `chọn lớp 5A2 → hiện ${the5} phiếu, thanh "Lớp 5A2 · Đổi lớp"`);
    bao(await page.locator('.card .chips').count() === 0 && await page.locator('.card .qr').count() === 0 && await page.locator('.tab .dem').count() === 0,
      'học sinh: thẻ phiếu KHÔNG hiện các lớp được giao, không có nút Mã QR, không hiện số phiếu');
    await page.locator('.card a.go').first().click(); await page.waitForLoadState('networkidle');
    const oLop = await page.locator('#lop option').allTextContents();
    bao(oLop.filter(x => !x.includes('chọn')).join(',') === '5A2' && await page.inputValue('#lop') === '5A2', 'vào phiếu: ô Lớp chỉ có đúng lớp 5A2 (đã chọn sẵn)');
    await page.locator('.topbar [data-tro-ve]').click(); await page.waitForURL(u => u.toString().startsWith(base) && !u.toString().includes('/phieu/'));
    await page.evaluate(() => localStorage.setItem('coThuyTin_gv', '{"url":"x","mk":"x"}')); await page.reload(); await page.waitForTimeout(500);
    bao((await page.locator('.chip.cua-em').allTextContents()).every(t => t === '5A2') && await page.locator('.chip.cua-em').count() === the5 && await page.locator('.card .qr').count() === the5,
      'máy cô: thấy các lớp (5A2 tô đậm) và nút Mã QR');
    await page.evaluate(() => localStorage.removeItem('coThuyTin_gv')); await page.reload(); await page.waitForTimeout(400);
    await page.click('#chonLai'); await page.waitForTimeout(300);
    bao(await page.locator('button.tab').count() === 4 && await page.locator('#khuPhieu').isHidden(), 'bấm "Chọn nhầm khối?" → về lại màn hình chọn khối');
    await page.click('.tab[data-id="doi-tuyen"]'); await page.waitForTimeout(300);
    const nutDT = await page.locator('#chonLop .nut-lop:not(.tat-ca)').allTextContents();
    bao(nutDT.join(',') === 'ĐT Tin - K2,ĐT Tin - K3', 'bấm Đội tuyển Tin học → xổ xuống: ' + nutDT.join(', '));
    await page.click('#chonLai'); await page.click('.tab[data-id="khoi-5"]'); await page.click('#chonLop .nut-lop[data-l="5A2"]');
    await page.goto(base); await page.waitForTimeout(500);
    bao(page.url().endsWith('#khoi-5:5A2') && await page.locator('.card').count() === the5, 'về trang chủ trong cùng phiên → vẫn đúng Khối 5, lớp 5A2');
    { const tabMoi = await ctx.newPage(); await tabMoi.goto(base); await tabMoi.waitForTimeout(500);
      bao(await tabMoi.locator('button.tab').count() === 4, 'mở trang ở tab/phiên mới → bắt đầu lại từ màn hình chọn khối'); await tabMoi.close(); }
    await page.click('#doiLop'); await page.waitForTimeout(200);
    bao(await page.locator('#chonLop .nut-lop').count() === LOPJ['khoi-5'].length + 1, 'bấm "Đổi lớp" → xổ lại danh sách lớp');
    await page.screenshot({ path: path.join(OUT, '_trang_chu_lop.png'), fullPage: true });
    await ctx.close();
  }

  // Hạn làm bài trên trang chủ (giả lập phieu.json có hạn)
  {
    const page = await browser.newPage({ viewport: { width: 900, height: 1200 } });
    const gia = JSON.parse(JSON.stringify(ds));
    const kh = ['khoi-5', 'doi-tuyen', 'khoi-9', 'khoi-3'].find(k => gia.filter(p => p.khoi === k && hsThay(p)).length >= 2) || gia[0].khoi;
    const cung = gia.filter(p => p.khoi === kh && hsThay(p));
    cung.forEach((p, i) => { if (i === 0) p.dong = ng(-1); else if (i === 1) p.mo = ng(3); else p.dong = ng(5); });
    await page.route(/phieu\.json/, r => r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(gia) }));
    await page.goto(base + '#' + kh + ':tatca'); await page.waitForTimeout(600);
    console.log('Hạn làm bài (trang chủ)');
    const nhan = await page.locator('.nhan').allTextContents();
    bao(nhan.includes('ĐÃ ĐÓNG'), 'phiếu quá hạn → nhãn "ĐÃ ĐÓNG", nút "Đã hết hạn"');
    if (cung.length > 1) {
      bao(!nhan.some(t => t.startsWith('SẮP MỞ')) && await page.locator('.card').count() === cung.length - 1, 'học sinh: phiếu chưa tới ngày mở bị ẩn (' + await page.locator('.card').count() + '/' + cung.length + ' phiếu)');
      // máy cô: thấy cả phiếu chưa mở, có nút "Cô xem trước"
      await page.evaluate(() => localStorage.setItem('coThuyTin_gv', JSON.stringify({ url: 'x', mk: 'x' })));
      await page.reload(); await page.waitForTimeout(600);
      const nhanCo = await page.locator('.nhan').allTextContents();
      bao(nhanCo.some(t => t.includes('SẮP MỞ') && t.includes('chỉ cô thấy')) && await page.locator('a.go', { hasText: 'Cô xem trước' }).count() === 1, 'máy cô: thấy phiếu sắp mở ("chỉ cô thấy") + nút "Cô xem trước"');
      await page.screenshot({ path: path.join(OUT, '_trang_chu_han.png'), fullPage: true });
      await page.evaluate(() => localStorage.removeItem('coThuyTin_gv'));
      // phiếu đặt hienTruoc: học sinh thấy trước với nhãn SẮP MỞ, nút khóa
      cung[1].hienTruoc = true;
      await page.reload(); await page.waitForTimeout(600);
      bao((await page.locator('.nhan').allTextContents()).some(t => t.startsWith('SẮP MỞ')) && (await page.locator('.go.tat').allTextContents()).some(t => t.startsWith('Mở ngày')), 'phiếu "hienTruoc": học sinh thấy nhãn SẮP MỞ, nút "Mở ngày …" bị khóa');
    }
    await page.close();
  }

  // Trang tổng hợp điểm của cô (Sheet giả lập)
  {
    console.log('Trang tổng hợp điểm');
    // dữ liệu giả dùng nhãn B1.1, B1.2, B2.1 → chọn phiếu có Bài 1 dạng nối (nhãn số)
    const ph = ds.find(p => p.link.includes('scratch-variables-2')) || ds.find(p => p.link.startsWith('phieu/') && p.ma);
    const L = ph.lop;
    const hang = [['2026-11-11T02:00:00Z', 'An', L[0], 10, '23/23', '', 'B1.1 Đ; B1.2 Đ; B2.1 Đ'],
      ['2026-11-11T02:05:00Z', 'Bình', L[0], 6.5, '15/23', '', 'B1.1 S; B1.2 Đ; B2.1 S'],
      ['2026-11-11T02:07:00Z', 'Chi', L[1] || L[0], 4, '9/23', '', 'B1.1 S; B1.2 S; B2.1 Đ']];
    const gia = { ok: true, luc: '2026-11-11T03:00:00Z', phieu: [{ ten: ph.ma, hang }], danhSach: [[L[0], 'An'], [L[0], 'Bình'], [L[0], 'Dũng']] };
    const page = await browser.newPage({ viewport: { width: 1100, height: 1300 } });
    const loiGV = []; page.on('pageerror', e => loiGV.push(e.message));
    await page.route(/action=tonghop/, r => r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(r.request().url().includes('mk=dung') ? gia : { ok: false, loi: 'Sai mật khẩu.' }) }));
    await page.goto(base + 'giaovien/');
    await page.fill('#mk', 'sai'); await page.click('#nutDN'); await page.waitForTimeout(400);
    bao((await page.locator('#dnLoi').textContent()).includes('Sai mật khẩu'), 'sai mật khẩu → báo lỗi, không hiện điểm');
    await page.fill('#mk', 'dung'); await page.click('#nutDN'); await page.waitForTimeout(1500);
    const tiles = await page.locator('.o-so .gia').allTextContents();
    bao(await page.locator('#noiDung').isVisible() && tiles[0].replace(/\s/g, '').startsWith('3'), 'đúng mật khẩu → hiện tổng hợp (đã nộp: ' + tiles[0].replace(/\s+/g, ' ') + ')');
    bao(tiles[1] === '6,83', 'điểm trung bình (10 + 6,5 + 4)/3 = ' + tiles[1]);
    const cot = await page.locator('.cot .so').allTextContents();
    bao(cot.join('|') === '1|1|||1', 'biểu đồ phân bố: dưới 5 = 1, 5–6,5 = 1, 10 = 1');
    const sai1 = await page.locator('#caiSai li').first().textContent();
    bao(sai1.includes('B1.1') && sai1.includes('67% sai'), 'câu sai nhiều nhất: B1.1 – 67% sai');
    bao((await page.locator('#caiSai .nd').first().textContent()).length > 3, 'câu sai có kèm nội dung câu hỏi: "' + (await page.locator('#caiSai .nd').first().textContent()).slice(0, 50) + '"');
    await page.selectOption('#chonLop', L[0]); await page.waitForTimeout(200);
    bao((await page.locator('#chuaNop').textContent()).includes('Dũng') && !(await page.locator('#chuaNop').textContent()).includes('Bình'), 'lọc lớp ' + L[0] + ' → "chưa nộp" có Dũng, không có Bình');
    bao((await page.getAttribute('#chieuDA', 'href')).endsWith('?dapan=1'), 'nút "Chiếu đáp án" mở phiếu ở chế độ chiếu đáp án');
    await page.selectOption('#chonLop', '');
    await page.screenshot({ path: path.join(OUT, '_giao_vien.png'), fullPage: true });
    await page.reload(); await page.waitForTimeout(1200);
    bao(await page.locator('#noiDung').isVisible(), 'tải lại trang → vẫn đăng nhập (máy cô)');
    await page.click('#dangXuat'); await page.waitForTimeout(400);
    bao(await page.locator('#dangNhap').isVisible() && await page.evaluate(() => !localStorage.getItem('coThuyTin_gv')), 'Đăng xuất → xóa đăng nhập trên máy');
    bao(loiGV.length === 0, 'trang tổng hợp không lỗi' + (loiGV.length ? ': ' + loiGV.join('; ') : ''));
    await page.close();
  }

  // Tổng hợp theo tuần / tháng / khoảng thời gian (Sheet giả lập, giờ nộp rải ra)
  {
    console.log('Tổng hợp theo thời gian');
    const hai = [...new Map(ds.filter(p => p.link.startsWith('phieu/') && p.lop.includes('5A1')).map(p => [p.link, p])).values()].slice(0, 2);
    const bay = Date.now(), t = ms => new Date(ms).toISOString();
    const d0 = new Date(); const thu2 = new Date(d0.getFullYear(), d0.getMonth(), d0.getDate() - ((d0.getDay() + 6) % 7));
    const tuanTruoc = t(thu2.getTime() - 3 * 864e5 + 10 * 36e5), cach40 = t(bay - 40 * 864e5), vuaXong = t(bay - 6e4);
    const gia = { ok: true, luc: t(bay), danhSach: [['5A1', 'An'], ['5A1', 'Bình'], ['5A1', 'Cường']], phieu: [
      { ten: hai[0].ma, hang: [[vuaXong, 'An', '5A1', 9, '', '', 'B1.1 Đ'], [tuanTruoc, 'Bình', '5A1', 6, '', '', 'B1.1 S'], [cach40, 'Cường', '5A1', 4, '', '', 'B1.1 S']] },
      { ten: hai[1].ma, hang: [[vuaXong, 'Bình', '5A1', 10, '', '', 'B1.1 Đ']] }] };
    const page = await browser.newPage({ viewport: { width: 1100, height: 1300 }, acceptDownloads: true });
    const loi = []; page.on('pageerror', e => loi.push(e.message));
    await page.route(/action=tonghop/, r => r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(gia) }));
    await page.goto(base + 'giaovien/'); await page.fill('#mk', 'x'); await page.click('#nutDN'); await page.waitForTimeout(1200);
    await page.click('.tab-xem[data-xem="th"]'); await page.waitForTimeout(300);
    const luot = async () => (await page.locator('#thSo .o-so .gia').first().textContent()).trim();
    bao(await page.locator('#xemTH').isVisible() && await page.locator('#xemPhieu').isHidden(), 'tab "Tổng hợp nhiều phiếu" → hiện bảng tổng hợp');
    await page.click('.chip[data-tg="tatca"]'); bao(await luot() === '4', 'Đến nay: 4 lượt nộp');
    await page.click('.chip[data-tg="tuan"]'); bao(await luot() === '2', 'Tuần này: 2 lượt nộp (' + await page.locator('#nhanTG').textContent() + ')');
    await page.click('.chip[data-tg="tuantruoc"]'); bao(await luot() === '1', 'Tuần trước: 1 lượt nộp');
    await page.click('.chip[data-tg="tuy"]');
    const ymd = ms => { const d = new Date(ms); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
    await page.fill('#tuNgay', ymd(bay - 50 * 864e5)); await page.fill('#denNgay', ymd(bay - 30 * 864e5)); await page.dispatchEvent('#denNgay', 'change');
    bao(await luot() === '1' && (await page.locator('#thHS').textContent()).includes('Cường'), 'Tùy chọn (50–30 ngày trước): 1 lượt, em Cường');
    await page.click('.chip[data-tg="tatca"]'); await page.selectOption('#chonLop', '5A1'); await page.waitForTimeout(200);
    const dongAn = await page.locator('#thHS tr', { hasText: 'An' }).first().textContent();
    bao(dongAn.includes('1 / 2') && dongAn.includes(hai[1].ten), 'em An: đã làm 1/2 phiếu, ghi rõ phiếu chưa làm');
    bao((await page.locator('#thLop').textContent()).includes('5A1'), 'bảng theo lớp có 5A1');
    bao(await page.locator('#thBD .cot').count() > 1, 'biểu đồ số bài nộp có ' + await page.locator('#thBD .cot').count() + ' cột (' + await page.locator('#thBDTieuDe').textContent() + ')');
    const [tai] = await Promise.all([page.waitForEvent('download'), page.click('#taiCSV')]);
    const noi = fs.readFileSync(await tai.path(), 'utf8');
    bao(tai.suggestedFilename().endsWith('.csv') && noi.includes('Phiếu chưa làm') && noi.includes('"Cường"'), 'tải Excel (CSV): ' + tai.suggestedFilename());
    await page.screenshot({ path: path.join(OUT, '_tong_hop_thoi_gian.png'), fullPage: true });
    await page.click('.tab-xem[data-xem="phieu"]'); await page.click('.chip[data-tg="tuan"]'); await page.waitForTimeout(200);
    const p0 = await page.inputValue('#chonPhieu');
    const soTuan = gia.phieu.find(x => x.ten === p0).hang.filter(h => h[0] === vuaXong).length;
    bao(await page.locator('#bang tr').count() === (soTuan || 1), 'tab "Theo từng phiếu" + Tuần này: bảng điểm chỉ còn ' + soTuan + ' bài');
    bao(loi.length === 0, 'không lỗi' + (loi.length ? ': ' + loi.join('; ') : ''));
    await page.close();
  }

  // Lịch giao phiếu (trang tổng hợp)
  {
    console.log('Lịch giao phiếu');
    const gia = JSON.parse(JSON.stringify(ds)), mot = [...new Map(gia.map(p => [p.link, p])).values()];
    const dangMo = mot.filter(hsThay).length, sap = mot.find(hsThay).link; gia.filter(p => p.link === sap).forEach(p => { p.mo = ng(4) + ' 07:00'; p.dong = ng(10); });
    const page = await browser.newPage({ viewport: { width: 1100, height: 1200 } });
    const loiL = []; page.on('pageerror', e => loiL.push(e.message));
    await page.route(/phieu\.json/, r => r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(gia) }));
    await page.route(/action=tonghop/, r => r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ ok: true, phieu: [], danhSach: [], luc: new Date().toISOString() }) }));
    await page.goto(base + 'giaovien/'); await page.fill('#mk', 'x'); await page.click('#nutDN'); await page.waitForTimeout(1200);
    await page.click('.tab-xem[data-xem="lich"]'); await page.waitForTimeout(300);
    const so = await page.locator('#lichSo .gia').allTextContents();
    bao(so[1].trim() === '1' && so[0].trim() === String(dangMo - 1), 'tab Lịch: đang mở ' + so[0] + ', sắp mở ' + so[1]);
    const dong1 = await page.locator('#lichBang tr', { hasText: 'Sắp mở' }).first().textContent();
    bao(dong1.includes('Sắp mở') && dong1.includes('7:00') && dong1.includes('Xem trước'), 'phiếu sắp mở có giờ mở 7:00 và link "Xem trước"');
    const chuaGiao = mot.filter(p => p.chuaGiao).length;
    if (chuaGiao) bao((await page.locator('#bangChuaGiao .chon-giao').count()) === chuaGiao, `${chuaGiao} phiếu nằm ở bảng "Chưa giao"`);
    bao(await page.locator('.tg').isHidden(), 'tab Lịch ẩn thanh chọn thời gian (lịch luôn hiện đủ)');
    await page.screenshot({ path: path.join(OUT, '_lich_giao.png'), fullPage: true });
    bao(loiL.length === 0, 'tab Lịch không lỗi' + (loiL.length ? ': ' + loiL.join('; ') : ''));
    await page.close();
  }

  // Tab Giao phiếu (trang tổng hợp): giao 1 phiếu, giao hàng loạt, thu hồi
  {
    console.log('Giao phiếu (trang tổng hợp)');
    const mot = [...new Map(ds.map(p => [p.link, p])).values()], chua = mot.filter(p => p.chuaGiao);
    let giao = [], guiDi = [];
    const page = await browser.newPage({ viewport: { width: 1150, height: 1300 } });
    const loiG = []; page.on('pageerror', e => loiG.push(e.message)); page.on('dialog', d => d.accept());
    await page.route(/action=tonghop/, r => r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ ok: true, phieu: [], danhSach: [], giao, luc: new Date().toISOString() }) }));
    await page.route(/action=datgiao/, r => { const q = JSON.parse(new URL(r.request().url()).searchParams.get('ds')); guiDi.push(q);
      q.forEach(g => { const row = [g.slug, g.khoi || '', g.mo || '', g.dong || '', g.thuhoi ? '1' : '', 'x']; const i = giao.findIndex(x => x[0] === g.slug); if (i >= 0) giao[i] = row; else giao.push(row); });
      r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ ok: true, giao }) }); });
    await page.goto(base + 'giaovien/'); await page.fill('#mk', 'x'); await page.click('#nutDN'); await page.waitForTimeout(1200);
    await page.click('.tab-xem[data-xem="lich"]'); await page.waitForTimeout(300);
    bao(await page.locator('#bangChuaGiao .chon-giao').count() === chua.length && await page.locator('#chuaCsv').isVisible(),
      `tab Giao phiếu: ${chua.length} phiếu chưa giao + nhắc "chưa cài link công bố"`);
    { // đã cài link nhưng chưa đọc được → dòng kiểm tra báo rõ
      const p2 = await browser.newPage();
      await p2.route(/cauhinh\.json/, r => r.fulfill({ status: 200, contentType: 'application/json', body: '{"giaoCsv":"https://docs.google.com/spreadsheets/d/e/X/pub?output=csv"}' }));
      await p2.route(/docs\.google\.com/, r => r.fulfill({ status: 403, body: '' }));
      await p2.route(/action=tonghop/, r => r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ ok: true, phieu: [], danhSach: [], giao: [['a', 'khoi-5', '', '', '', 'x']], luc: new Date().toISOString() }) }));
      await p2.goto(base + 'giaovien/'); await p2.fill('#mk', 'x'); await p2.click('#nutDN'); await p2.waitForTimeout(1000);
      await p2.click('.tab-xem[data-xem="lich"]'); await p2.waitForTimeout(800);
      bao(await p2.locator('#chuaCsv').isHidden() && (await p2.textContent('#ktCsv')).includes('chưa đọc được'), 'đã cài link mà chưa đọc được → báo "Học sinh chưa đọc được lịch giao"');
      await p2.close();
    }
    // giao 1 phiếu cho Khối 5, mở ngay, không hạn
    const p1 = chua[0];
    await page.click(`[data-giao="${p1.link}"]`); await page.waitForTimeout(200);
    for (const k of await page.locator('#hgKhoi .chip-khoi[aria-pressed="true"]').evaluateAll(a => a.map(x => x.dataset.k))) await page.click(`#hgKhoi .chip-khoi[data-k="${k}"]`);
    await page.click('#hgOK'); await page.waitForTimeout(200);
    bao((await page.textContent('#hgLoi')).includes('ít nhất một khối') && guiDi.length === 0, 'chưa chọn khối → nhắc "chọn ít nhất một khối", không gửi');
    await page.click('#hgKhoi .chip-khoi[data-k="khoi-5"]');
    await page.screenshot({ path: path.join(OUT, '_hop_giao.png') });
    await page.click('#hgOK'); await page.waitForTimeout(500);
    const g1 = guiDi[0] && guiDi[0][0];
    bao(g1 && g1.khoi === 'khoi-5' && g1.slug === p1.link.split('/')[1] && /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/.test(g1.mo) && g1.dong === '', 'bấm Giao → chọn Khối 5, mở ngay → gửi lệnh giao đúng (' + (g1 && g1.mo) + ')');
    const hang1 = await page.locator('#lichBang tr', { hasText: p1.ten }).first().textContent();
    bao(hang1.includes('Khối 5') && hang1.includes('Đang mở') && await page.locator('#hopGiao').isHidden(), 'phiếu chuyển sang "Đã giao": Khối 5, Đang mở');
    // giao hàng loạt 3 phiếu: mỗi tuần 1 phiếu, hạn sau 6 ngày, đổi thứ tự
    const ba = chua.slice(1, 4);
    for (const p of ba) await page.check(`.chon-giao[value="${p.link}"]`);
    bao((await page.textContent('#nutHangLoat')).includes('3 phiếu'), 'tích 3 phiếu → nút "Giao hàng loạt (3 phiếu)"');
    await page.click('#nutHangLoat'); await page.waitForTimeout(200);
    if ((await page.getAttribute('#hgKhoi .chip-khoi[data-k="khoi-9"]', 'aria-pressed')) !== 'true') await page.click('#hgKhoi .chip-khoi[data-k="khoi-9"]');
    await page.fill('#hlDau', '2026-12-07T07:00'); await page.dispatchEvent('#hlDau', 'input');
    const xem = await page.locator('#hlXem tr').allTextContents();
    bao(xem.length === 3 && xem[0].includes('07/12/2026 7:00') && xem[0].includes('13/12/2026') && xem[1].includes('14/12/2026') && xem[2].includes('21/12/2026'),
      'xem trước lịch: 07/12 → 14/12 → 21/12, hạn sau 6 ngày');
    await page.click('#hlXem [data-xuong="0"]');
    await page.screenshot({ path: path.join(OUT, '_giao_hang_loat.png') });
    await page.click('#hgOK'); await page.waitForTimeout(500);
    const g2 = guiDi[1] || [];
    bao(g2.length === 3 && g2.every(g => g.khoi === 'khoi-9') && g2[0].slug === ba[1].link.split('/')[1] && g2[0].mo === '2026-12-07 07:00' && g2[2].mo === '2026-12-21 07:00' && g2[0].dong === '2026-12-13',
      'giao hàng loạt → 1 lệnh cho 3 phiếu, đúng thứ tự đã đổi, đúng ngày mở/hạn');
    bao((await page.locator('#lichBang tr', { hasText: 'Sắp mở' }).count()) === 3, '3 phiếu hiện "Sắp mở" trong bảng Đã giao');
    // sửa lịch: giao cho 2 khối cùng lúc
    await page.click(`#lichBang [data-giao="${p1.link}"]`); await page.waitForTimeout(200);
    await page.click('#hgKhoi .chip-khoi[data-k="doi-tuyen"]'); await page.click('#hgOK'); await page.waitForTimeout(500);
    const g3 = guiDi[2] && guiDi[2][0];
    bao(g3 && g3.khoi === 'khoi-5|doi-tuyen' && (await page.locator('#lichBang tr', { hasText: p1.ten }).first().textContent()).includes('Khối 5, Đội tuyển Tin học'), 'Sửa → giao thêm Đội tuyển: "Khối 5, Đội tuyển Tin học"');
    // thu hồi
    await page.click(`[data-thuhoi="${p1.link}"]`); await page.waitForTimeout(500);
    bao(guiDi[3] && guiDi[3][0].thuhoi === true && await page.locator(`.chon-giao[value="${p1.link}"]`).count() === 1, 'Thu hồi → phiếu trở lại nhóm "Chưa giao"');
    await page.screenshot({ path: path.join(OUT, '_tab_giao.png'), fullPage: true });
    bao(loiG.length === 0, 'tab Giao phiếu không lỗi' + (loiG.length ? ': ' + loiG.join('; ') : ''));
    await page.close();

    // Phía học sinh: đọc lịch giao từ Sheet công bố (CSV)
    const CSV = 'https://docs.google.com/spreadsheets/d/e/THU/pub?gid=1&single=true&output=csv';
    const moi = chua[0], cu = mot.find(p => hsThay(p) && p.khoi === 'khoi-9');
    const csv = 'slug,khoi,mo,dong,thuhoi,capnhat\n' + moi.link.split('/')[1] + ',khoi-5|doi-tuyen,' + ng(-1) + ' 07:00,,,x\n' + (cu ? cu.link.split('/')[1] + ',,,,1,x\n' : '');
    const hs = await browser.newPage({ viewport: { width: 900, height: 1200 } });
    let csvLoi = false;
    await hs.route(/cauhinh\.json/, r => r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ giaoCsv: CSV }) }));
    await hs.route(/docs\.google\.com\/spreadsheets/, r => csvLoi ? r.fulfill({ status: 500, body: 'loi' }) : r.fulfill({ status: 200, contentType: 'text/csv', body: csv }));
    await hs.goto(base + '#khoi-5:5A3'); await hs.reload(); await hs.waitForTimeout(800);
    bao(await hs.locator('.card', { hasText: moi.ten }).count() === 1, `học sinh 5A3: thấy phiếu vừa giao cho Khối 5 ("${moi.ten.slice(0, 30)}…")`);
    await hs.goto(base + '#doi-tuyen:tatca'); await hs.reload(); await hs.waitForTimeout(800);
    bao(await hs.locator('.card', { hasText: moi.ten }).count() === 1, 'phiếu giao cho 2 khối → cũng hiện ở Đội tuyển Tin học');
    await hs.goto(base + moi.link); await choPhieu(hs);
    bao(await hs.locator('#khoa').isHidden() && !(await hs.locator('#check').isDisabled()) && (await hs.locator('#lop option').allTextContents()).includes('5A3'),
      'mở phiếu: không còn khóa "chưa giao", ô Lớp là các lớp Khối 5');
    if (cu) {
      await hs.goto(base + '#khoi-9:tatca'); await hs.reload(); await hs.waitForTimeout(800);
      bao(await hs.locator('.card', { hasText: cu.ten }).count() === 0, `phiếu bị thu hồi ("${cu.ten.slice(0, 25)}…") biến mất với học sinh`);
    }
    csvLoi = true;
    await hs.goto(base + '#khoi-5:5A3'); await hs.reload(); await hs.waitForTimeout(800);
    bao(await hs.locator('.card', { hasText: moi.ten }).count() === 0 && await hs.locator('.card').count() > 0, 'không đọc được Sheet → dùng lại lịch trong config.json (trang vẫn chạy)');
    await hs.close();
  }

  // Phiếu mẫu: Đúng/Sai bằng nút, xem lại bài, pháo giấy, phiếu đóng/chưa mở
  {
    console.log('Phiếu mẫu (Đúng/Sai, xem lại bài, hạn làm bài)');
    const page = await browser.newPage({ viewport: { width: 900, height: 1100 } });
    const loiMau = []; page.on('pageerror', e => loiMau.push(e.message));
    await page.route(/script\.google\.com/, r => r.fulfill({ status: 200, body: 'ok' }));
    await page.goto(base + 'phieu/__mau_mo__/'); await page.waitForLoadState('networkidle');
    await choPhieu(page);
    const ds1 = page.locator('.opts.ds').first();
    await ds1.locator('.opt[data-v="S"]').click();
    bao(await ds1.locator('select').inputValue() === 'S', 'Đúng/Sai: bấm nút "Sai" → ghi nhận S');
    await ds1.locator('.opt[data-v="Đ"]').click();
    bao(await ds1.locator('select').inputValue() === 'Đ', 'Đúng/Sai: đổi sang "Đúng" → ghi nhận Đ');
    bao((await page.locator('#huongDan').textContent()).includes('Hạn nộp'), 'phiếu còn hạn → ghi "Hạn nộp" dưới nút Tính điểm');
    // Gõ đáp án: không phân biệt hoa thường, chấp nhận nhiều cách viết
    await page.locator('.go-o').nth(1).fill('  ha   NOI ');
    bao(await page.evaluate(() => { const T = window.__PHIEU_TEST__, s = document.querySelectorAll('.go-o')[1]; return T.tinh().det.find(x => x.startsWith(T.LAB[s.dataset.k] + ' ')).endsWith('Đ'); }), 'gõ "  ha   NOI " được chấm đúng (Hà Nội / Ha Noi)');
    // Chọn nhiều đáp án
    const nh = page.locator('[data-nhieu]').first();
    const lcs = await nh.locator('.opt').allTextContents();
    for (let i = 0; i < lcs.length; i++) if (/[24]$/.test(lcs[i].trim())) await nh.locator('.opt').nth(i).click();
    bao(await page.evaluate(() => { const s = document.querySelector('[data-nhieu] [data-k]'); return s.value === window.__PHIEU_TEST__.ANS[s.dataset.k]; }), 'chọn nhiều: bấm 2 và 4 → đúng');
    // Kéo thả sắp xếp: dùng mũi tên rồi kéo bằng chuột
    const ol = page.locator('[data-sx]').first();
    const thuTu = async () => (await ol.locator('.nd').allTextContents()).join(',');
    const truoc = await thuTu();
    await ol.locator('li').nth(1).locator('button[data-d="-1"]').click();
    bao((await thuTu()) !== truoc, 'sắp xếp: bấm ▲ đổi chỗ (' + truoc + ' → ' + (await thuTu()) + ')');
    const tay = ol.locator('li').first().locator('.tay'), cuoi = await ol.locator('li').last().boundingBox();
    const bb = await tay.boundingBox();
    await page.mouse.move(bb.x + bb.width / 2, bb.y + bb.height / 2); await page.mouse.down();
    await page.mouse.move(bb.x + bb.width / 2, cuoi.y + cuoi.height - 2, { steps: 8 }); await page.mouse.up();
    bao((await ol.locator('[data-k]').evaluateAll(a => a.every(s => s.value))), 'sắp xếp: kéo bằng chuột → ghi nhận thứ tự (' + (await thuTu()) + ')');
    // Trộn phương án: đáp án vẫn chấm đúng
    bao(await page.evaluate(() => { const T = window.__PHIEU_TEST__; return T.sels.every(s => typeof T.ANS[s.dataset.k] === 'string'); }), 'trộn phương án: mọi câu vẫn có đáp án');
    bao(await page.evaluate(() => window.__PHIEU_TEST__.moTa('b1_a').includes('1 + 1')), 'mô tả câu cho trang tổng hợp: "' + await page.evaluate(() => window.__PHIEU_TEST__.moTa('b1_a')) + '"');
    await page.evaluate(() => { const T = window.__PHIEU_TEST__; T.sels.forEach((s, i) => { s.value = i === T.sels.length - 1 ? 'vàng' : T.ANS[s.dataset.k]; s.dispatchEvent(new Event('change', { bubbles: true })); });
      document.getElementById('ten').value = 'Mẫu'; document.getElementById('lop').value = '3A1'; });
    await page.locator('#check').click();
    await page.waitForTimeout(700);
    bao(await page.locator('#xemLai').isVisible() && (await page.locator('.dapan').allTextContents()).includes('✓ đỏ'), 'xem lại bài: câu sai ghi kèm đáp án đúng "✓ đỏ"');
    bao(await page.locator('#phaoGiay').count() === 1, 'điểm ≥ 8 → có pháo giấy');
    await page.screenshot({ path: path.join(OUT, '_mau_xem_lai.png'), fullPage: true });
    bao(await page.evaluate(() => !!JSON.parse(localStorage.getItem('coThuyTin_daLam') || '{}').__mau_mo__), 'lưu "đã làm" cho trang chủ');
    // Mất mạng khi nộp → lưu hàng chờ, có mạng lại thì tự gửi
    {
      const p2 = await browser.newPage({ viewport: { width: 900, height: 1000 } });
      let lan = 0; const daNhan = [];
      await p2.route(/script\.google\.com/, r => { lan++; if (lan === 1) return r.abort('internetdisconnected'); daNhan.push(r.request().url()); r.fulfill({ status: 200, body: 'ok' }); });
      await p2.goto(base + 'phieu/__mau_mo__/'); await p2.waitForLoadState('networkidle');
      await choPhieu(p2);
      await p2.evaluate(() => { const T = window.__PHIEU_TEST__; T.sels.forEach(s => { s.value = T.ANS[s.dataset.k]; s.dispatchEvent(new Event('change', { bubbles: true })); });
        document.getElementById('ten').value = 'Mất Mạng'; document.getElementById('lop').value = '3A1'; });
      await p2.locator('#check').click(); await p2.waitForTimeout(500);
      bao((await p2.locator('#sent').textContent()).includes('tự gửi lại') && await p2.evaluate(() => JSON.parse(localStorage.getItem('coThuyTin_choGui') || '[]').length === 1), 'mất mạng khi nộp → báo "tự gửi lại", lưu hàng chờ');
      await p2.evaluate(() => window.dispatchEvent(new Event('online'))); await p2.waitForTimeout(500);
      bao(daNhan.length === 1 && (await p2.locator('#sent').textContent()).includes('đã được gửi') && await p2.evaluate(() => !localStorage.getItem('coThuyTin_choGui')), 'có mạng lại → tự gửi, báo "đã được gửi", xóa hàng chờ');
      await p2.screenshot({ path: path.join(OUT, '_mau_day_du.png'), fullPage: true });
      // Chế độ chiếu đáp án
      await p2.route(/action=kiemtra/, r => r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ ok: r.request().url().includes('mk=dung') }) }));
      await p2.goto(base + 'phieu/__mau_mo__/?dapan=1'); await p2.waitForLoadState('networkidle');
      await choPhieu(p2);
      bao((await p2.locator('#khoa').textContent()).includes('Chỉ dành cho cô'), 'chiếu đáp án khi chưa đăng nhập → không hiện đáp án');
      await p2.evaluate(() => localStorage.setItem('coThuyTin_gv', JSON.stringify({ url: 'https://script.google.com/macros/s/MAU/exec', mk: 'dung' })));
      await p2.reload(); await p2.waitForTimeout(800);
      const daDien = await p2.evaluate(() => window.__PHIEU_TEST__.sels.every(s => s.value === window.__PHIEU_TEST__.ANS[s.dataset.k]));
      bao(daDien && (await p2.locator('#khoa').textContent()).includes('Chế độ chiếu đáp án') && await p2.locator('#check').isHidden(), 'chiếu đáp án (cô đã đăng nhập) → điền sẵn mọi đáp án, ẩn nút Tính điểm');
      await p2.screenshot({ path: path.join(OUT, '_mau_chieu_dap_an.png'), fullPage: true });
      await p2.evaluate(() => localStorage.setItem('coThuyTin_gv', JSON.stringify({ url: 'https://script.google.com/macros/s/MAU/exec', mk: 'sai' })));
      await p2.reload(); await p2.waitForTimeout(800);
      bao((await p2.locator('#khoa').textContent()).includes('Không mở được'), 'sai mật khẩu → không hiện đáp án');
      await p2.close();
    }
    for (const [slug, chu] of [['__mau_dong__', 'đã đóng'], ['__mau_chua__', 'chưa mở']]) {
      await page.goto(base + 'phieu/' + slug + '/'); await page.waitForLoadState('networkidle');
      await choPhieu(page);
      const t = (await page.locator('#khoa').textContent()).toLowerCase();
      bao(t.includes(chu) && await page.locator('#check').isDisabled() && await page.locator('.opt').first().isDisabled(), `phiếu ${chu} → báo "${chu}", khóa nút Tính điểm và các ô`);
    }
    await page.screenshot({ path: path.join(OUT, '_mau_khoa.png') });
    {
      const gui = []; await page.route(/script\.google\.com/, r => { gui.push(r.request().url()); r.fulfill({ status: 200, body: 'ok' }); });
      await page.evaluate(() => localStorage.setItem('coThuyTin_gv', JSON.stringify({ url: 'x', mk: 'x' })));
      await page.goto(base + 'phieu/__mau_chua__/'); await page.waitForLoadState('networkidle');
      await choPhieu(page);
      bao((await page.locator('#khoa').textContent()).includes('Cô đang xem trước') && !(await page.locator('#check').isDisabled()), 'máy cô mở phiếu chưa mở → "Cô đang xem trước", làm thử được');
      await page.evaluate(() => { const T = window.__PHIEU_TEST__; T.sels.forEach(s => { s.value = T.ANS[s.dataset.k]; s.dispatchEvent(new Event('change', { bubbles: true })); });
        document.getElementById('ten').value = 'Cô'; document.getElementById('lop').value = '3A1'; });
      await page.locator('#check').click(); await page.waitForTimeout(500);
      bao(gui.length === 0 && (await page.locator('#sent').textContent()).includes('không gửi'), 'cô bấm Tính điểm khi xem trước → KHÔNG gửi điểm về Sheet');
      await page.evaluate(() => localStorage.removeItem('coThuyTin_gv'));
    }
    bao(loiMau.length === 0, 'phiếu mẫu không lỗi' + (loiMau.length ? ': ' + loiMau.join('; ') : ''));
    await page.close();
  }

  for (const p of ds.filter((p, i) => p.link.startsWith('phieu/') && ds.findIndex(q => q.link === p.link) === i)) {
    console.log(p.link);
    for (const [ten, vp] of [['may_tinh', { width: 900, height: 1200 }], ['dien_thoai', { width: 390, height: 844 }]]) {
      const page = await browser.newPage({ viewport: vp });
      const xemTruoc = !hsThay(p);   // phiếu chưa giao / chưa mở → thử bằng máy cô (xem trước, không gửi điểm)
      if (xemTruoc) await page.addInitScript(() => localStorage.setItem('coThuyTin_gv', '{"url":"x","mk":"x"}'));
      const gui = [], hong = [];
      page.on('pageerror', e => hong.push(e.message));
      page.on('response', r => { if (r.status() >= 400 && r.url().startsWith(base)) hong.push(r.status() + ' ' + r.url()); });
      await page.route(/script\.google\.com|docs\.google\.com/, route => { gui.push(route.request().url()); route.fulfill({ status: 200, body: 'ok' }); });
      await page.goto(base + p.link);
      await choPhieu(page);
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
        if (xemTruoc) {
          bao(gui.length === 0 && (await page.locator('#sent').textContent()).includes('không gửi'), 'phiếu chưa giao: cô xem trước được, KHÔNG gửi điểm');
          const hs = await browser.newPage(); await hs.goto(base + p.link); await hs.waitForLoadState('networkidle');
          await choPhieu(hs);
          bao((await hs.locator('#khoa').textContent()).includes('chưa được giao') && await hs.locator('#check').isDisabled(), 'học sinh mở link → báo "Phiếu chưa được giao", khóa nộp');
          await hs.close();
        } else {
        bao(gui.length === 1, `gửi điểm ${gui.length} lần`);
        if (gui[0]) {
          const q = new URL(gui[0]).searchParams;
          bao(q.get('diem') === '10' && q.get('ten') === 'Học Sinh Thử' && q.get('lop') === p.lop[0] && !!q.get('phieu'),
            `tham số gửi: phieu="${q.get('phieu')}", diem=${q.get('diem')}, dung=${q.get('dung')}`);
        }
        const sent = await page.locator('#sent').textContent();
        bao(sent.includes('đã được gửi'), 'báo "đã được gửi cho cô"');
        }
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
