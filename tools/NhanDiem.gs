/**
 * NHẬN ĐIỂM PHIẾU BÀI TẬP – Cô Thùy Tin
 * Dán toàn bộ mã này vào Google Sheet (Tiện ích mở rộng → Apps Script), thay mật khẩu bên dưới, bấm Lưu,
 * rồi Triển khai → Quản lý triển khai → Chỉnh sửa (bút chì) → Phiên bản: Phiên bản mới → Triển khai.
 * (Chọn "Phiên bản mới" trên triển khai cũ thì link nhận điểm GIỮ NGUYÊN, các phiếu cũ vẫn chạy.)
 *
 * - Mỗi phiếu tự tạo một trang tính riêng (tên = tên phiếu). Mỗi học sinh chỉ nộp 1 lần / phiếu.
 * - Trang tổng hợp điểm của cô (…/giaovien/) đọc điểm qua mã này, cần đúng MAT_KHAU.
 * - Muốn biết em nào CHƯA nộp: tạo trang tính tên "DanhSach", cột A = Lớp, cột B = Họ và tên (dòng 1 là tiêu đề).
 * - Tên học sinh gõ được tự khớp với DanhSach (cột "Tên trong danh sách", "Mức khớp"); cô ghép tay ở trang tổng hợp → trang tính "GhepTen".
 * - Tin nhắn học sinh gửi cô (nút trên phiếu) tự ghi vào trang tính "TinNhan" – chỉ cô đọc được.
 * - Giao phiếu: trang tổng hợp tự tạo trang tính "GiaoPhieu". Cô "Công bố lên web" RIÊNG trang tính này (dạng CSV)
 *   và gửi link cho Claude để trang của học sinh đọc được lịch giao.
 */
const MAT_KHAU = 'doi-mat-khau-nay';   // ← CÔ ĐỔI thành mật khẩu riêng (ít nhất 6 ký tự), chỉ cô biết
const CHAN_NOP_TRUNG = true;           // true: mỗi em chỉ nộp được 1 lần cho mỗi phiếu
const TIEU_DE = ['Thời gian nộp', 'Họ và tên', 'Lớp', 'Điểm', 'Số câu đúng', 'Nhận xét', 'Chi tiết đúng/sai', 'Tên trong danh sách', 'Mức khớp'];
const MUC_KHOP = { chac: 'Chắc chắn', gan: 'Gần đúng – cần cô xác nhận', khong: 'Không thấy trong danh sách', co: 'Cô đã ghép' };
const TRANG_GHEP = 'GhepTen';   // tên em gõ → tên trong danh sách (cô ghép tay ở trang tổng hợp)

/* ===== Tin nhắn học sinh gửi cô =====
 * Nút "Gửi tới cô Thùy Tin" trên phiếu gửi (POST) tới đây; ghi vào trang tính "TinNhan".
 * Không trả lại nội dung tin nhắn cho bất kì ai: chỉ cô đọc trên Google Sheet.
 */
const TRANG_TIN = 'TinNhan';
function doPost(e) {
  const p = (e && e.parameter) || {};
  if (p.action === 'tinnhan') return nhanTin_(p);
  return ContentService.createTextOutput('ok');
}
function an_(s, n) {   // cắt độ dài + chặn công thức (=, +, -, @ ở đầu) để Sheet không chạy nội dung học sinh gõ
  s = String(s || '').replace(/\s+$/, '').slice(0, n);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}
function nhanTin_(p) {
  const ten = an_(p.ten, 80), lop = an_(p.lop, 30), tin = an_(p.tin, 1000), phieu = an_(p.phieu, 120);
  if (!ten || !tin) return ContentService.createTextOutput('thieu');
  const cache = CacheService.getScriptCache(), khoa = 'tin_' + Utilities.base64Encode(ten + '|' + lop).slice(0, 200);
  if (cache.get(khoa)) return ContentService.createTextOutput('cham');   // chống bấm gửi liên tục: 20 giây / em
  cache.put(khoa, '1', 20);
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sh = ss.getSheetByName(TRANG_TIN);
    if (!sh) {
      sh = ss.insertSheet(TRANG_TIN);
      sh.appendRow(['Thời gian', 'Họ và tên', 'Lớp', 'Đang làm phiếu', 'Tin nhắn', 'Đã đọc']);
      sh.getRange(1, 1, 1, 6).setFontWeight('bold').setBackground('#FDE7F0');
      sh.setFrozenRows(1); sh.setColumnWidth(1, 150); sh.setColumnWidth(2, 180); sh.setColumnWidth(4, 220); sh.setColumnWidth(5, 480);
    }
    sh.appendRow([new Date(), ten, lop, phieu, tin, false]);
    sh.getRange(sh.getLastRow(), 6).insertCheckboxes();
    sh.getRange(sh.getLastRow(), 5).setWrap(true);
    return ContentService.createTextOutput('ok');
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  const p = (e && e.parameter) || {};
  if (p.action === 'kiemtra' || p.action === 'tonghop' || p.action === 'datgiao' || p.action === 'ghepten') return docDiem_(p);
  if (!p.phieu || !p.ten) return trang_('Trang nhận điểm đang hoạt động', 'Chưa có dữ liệu bài làm được gửi tới.', '#168DCE');
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const tenTrang = String(p.phieu).replace(/[\[\]\*\?\/\\:]/g, ' ').slice(0, 90).trim() || 'Phieu';
    let sh = ss.getSheetByName(tenTrang);
    if (!sh) {
      sh = ss.insertSheet(tenTrang);
      sh.appendRow(TIEU_DE);
      sh.getRange(1, 1, 1, TIEU_DE.length).setFontWeight('bold').setBackground('#FFF3E6');
      sh.setFrozenRows(1);
      sh.setColumnWidths(1, 1, 150); sh.setColumnWidths(2, 1, 190); sh.setColumnWidth(6, 320); sh.setColumnWidth(7, 520);
    }
    if (sh.getRange(1, 8).getValue() !== TIEU_DE[7]) sh.getRange(1, 8, 1, 2).setValues([TIEU_DE.slice(7)]).setFontWeight('bold').setBackground('#FFF3E6');
    // Khớp tên em gõ với danh sách lớp (DanhSach + các tên cô đã ghép)
    const dsLop = docDanhSach_(), k = dsLop.length ? khopTen(p.ten, p.lop, dsLop, docGhep_()) : { ten: '', muc: '' };
    const tenChuan = k.muc === 'chac' ? k.ten : '';
    if (CHAN_NOP_TRUNG && sh.getLastRow() > 1) {
      // chặn nộp trùng theo tên chuẩn (nếu khớp chắc chắn), không thì theo tên em gõ
      // (chỉ tin tên chuẩn của bài "Chắc chắn" / "Cô đã ghép" – bài "Gần đúng" có thể đoán nhầm sang bạn khác)
      const ds = sh.getRange(2, 2, sh.getLastRow() - 1, 8).getValues();
      const khoa = chuan_(tenChuan || p.ten) + '|' + chuan_(p.lop).replace(/\s+/g, '');
      const tenCua = r => (r[7] === MUC_KHOP.chac || r[7] === MUC_KHOP.co) && r[6] ? r[6] : r[0];
      if (ds.some(r => chuan_(tenCua(r)) + '|' + chuan_(r[1]).replace(/\s+/g, '') === khoa || chuan_(r[0]) + '|' + chuan_(r[1]).replace(/\s+/g, '') === chuan_(p.ten) + '|' + chuan_(p.lop).replace(/\s+/g, ''))) {
        return trang_('Em đã nộp bài này rồi', 'Bài của ' + p.ten + ' – lớp ' + p.lop + ' đã được cô nhận trước đó. Em không cần nộp lại.', '#F28C28');
      }
    }
    const diem = Number(String(p.diem || '').replace(',', '.'));
    sh.appendRow([new Date(), p.ten, p.lop || '', isNaN(diem) ? (p.diem || '') : diem, p.dung || '', p.nhanxet || '', p.chitiet || '',
      k.muc === 'chac' || k.muc === 'gan' ? k.ten : '', MUC_KHOP[k.muc] || '']);
    return trang_('Em đã nộp bài thành công!', p.ten + ' – lớp ' + p.lop + ' • Điểm: ' + (p.diem || '') + ' (' + (p.dung || '') + ' câu đúng). Em đóng trang này lại là xong.', '#2E9E4F');
  } finally {
    lock.releaseLock();
  }
}

/** Trả điểm cho trang tổng hợp (action=tonghop) hoặc chỉ kiểm tra mật khẩu (action=kiemtra). */
function docDiem_(p) {
  if (!MAT_KHAU || MAT_KHAU === 'doi-mat-khau-nay' || MAT_KHAU.length < 6) {
    return json_({ ok: false, loi: 'Cô chưa đặt mật khẩu trong mã Apps Script (dòng MAT_KHAU).' });
  }
  if (String(p.mk || '') !== MAT_KHAU) {
    Utilities.sleep(1500);   // làm chậm việc đoán mật khẩu
    return json_({ ok: false, loi: 'Sai mật khẩu.' });
  }
  if (p.action === 'kiemtra') return json_({ ok: true });
  if (p.action === 'datgiao') return datGiao_(p);
  if (p.action === 'ghepten') return ghepTen_(p);
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const phieu = [];
  let danhSach = [];
  ss.getSheets().forEach(sh => {
    const ten = sh.getName(), n = sh.getLastRow();
    if (ten === TRANG_GIAO || ten === TRANG_TIN || ten === TRANG_GHEP) return;
    if (ten === 'DanhSach') {
      if (n > 1) danhSach = sh.getRange(2, 1, n - 1, 2).getValues().filter(r => r[0] && r[1]).map(r => [String(r[0]).trim(), String(r[1]).trim()]);
      return;
    }
    if (n < 1 || sh.getRange(1, 1).getValue() !== TIEU_DE[0]) return;   // bỏ qua trang tính không phải của phiếu
    const hang = n > 1 ? sh.getRange(2, 1, n - 1, 9).getValues().map(r => [
      r[0] instanceof Date ? r[0].toISOString() : String(r[0]), String(r[1]), String(r[2]), r[3], String(r[4]), String(r[5]), String(r[6]), String(r[7] || ''), String(r[8] || '')]) : [];
    phieu.push({ ten, hang });
  });
  return json_({ ok: true, phieu, danhSach, giao: docGiao_(), ghep: docGhep_(), luc: new Date().toISOString() });
}

/* ===== Lịch giao phiếu =====
 * Trang tính "GiaoPhieu": mỗi phiếu một dòng: slug | khoi | mo | dong | thuhoi | capnhat.
 * Trang tổng hợp ghi vào đây (cần mật khẩu). Trang của học sinh đọc bản "Công bố lên web" (CSV) của RIÊNG trang tính này.
 */
const TRANG_GIAO = 'GiaoPhieu';
const COT_GIAO = ['slug', 'khoi', 'mo', 'dong', 'thuhoi', 'capnhat'];
function trangGiao_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(TRANG_GIAO);
  if (!sh) sh = ss.insertSheet(TRANG_GIAO);
  if (sh.getRange(1, 1).getValue() !== 'slug') {   // trang tính cô tạo sẵn còn trống → ghi dòng tiêu đề
    sh.getRange(1, 1, 1, COT_GIAO.length).setValues([COT_GIAO]).setFontWeight('bold').setBackground('#E8F4FC');
    sh.setFrozenRows(1);
  }
  return sh;
}
function docGiao_() {
  const sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(TRANG_GIAO);
  if (!sh || sh.getLastRow() < 2) return [];
  return sh.getRange(2, 1, sh.getLastRow() - 1, COT_GIAO.length).getDisplayValues().filter(r => r[0]);
}
/** p.ds = JSON: [{slug, khoi, mo, dong, thuhoi}] – ghi đè dòng cũ của cùng phiếu. */
function datGiao_(p) {
  let ds;
  try { ds = JSON.parse(p.ds || '[]'); } catch (e) { return json_({ ok: false, loi: 'Dữ liệu giao phiếu bị lỗi.' }); }
  if (!Array.isArray(ds) || !ds.length) return json_({ ok: false, loi: 'Chưa chọn phiếu nào.' });
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const sh = trangGiao_();
    const n = sh.getLastRow();
    const slugs = n > 1 ? sh.getRange(2, 1, n - 1, 1).getValues().map(r => String(r[0])) : [];
    const luc = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd HH:mm');
    ds.forEach(g => {
      const slug = String(g.slug || '').replace(/[^a-z0-9-]/gi, '');
      if (!slug) return;
      const dong = [slug, String(g.khoi || ''), String(g.mo || ''), String(g.dong || ''), g.thuhoi ? '1' : '', luc];
      const i = slugs.indexOf(slug);
      const r = i >= 0 ? i + 2 : sh.getLastRow() + 1;
      if (i < 0) slugs.push(slug);
      sh.getRange(r, 1, 1, dong.length).setNumberFormat('@').setValues([dong]);   // '@' = giữ nguyên chữ, không đổi thành ngày
    });
    return json_({ ok: true, giao: docGiao_() });
  } finally {
    lock.releaseLock();
  }
}

/* ===== Khớp tên học sinh ===== */
function docDanhSach_() {
  const sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('DanhSach');
  if (!sh || sh.getLastRow() < 2) return [];
  return sh.getRange(2, 1, sh.getLastRow() - 1, 2).getValues().filter(r => r[0] && r[1]).map(r => [String(r[0]).trim(), String(r[1]).trim()]);
}
function docGhep_() {
  const sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(TRANG_GHEP);
  if (!sh || sh.getLastRow() < 2) return [];
  return sh.getRange(2, 1, sh.getLastRow() - 1, 3).getDisplayValues().filter(r => r[0] && r[1]);
}
/** Cô ghép tay: p.lop, p.tengo (tên em gõ), p.tenchuan (tên trong danh sách; rỗng = bỏ ghép).
 *  Lưu vào trang tính GhepTen và sửa luôn cột "Tên trong danh sách" ở mọi bài đã nộp của em đó. */
function ghepTen_(p) {
  const lop = String(p.lop || '').trim(), go = String(p.tengo || '').trim(), chuanTen = String(p.tenchuan || '').trim();
  if (!lop || !go) return json_({ ok: false, loi: 'Thiếu lớp hoặc tên.' });
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sh = ss.getSheetByName(TRANG_GHEP);
    if (!sh) {
      sh = ss.insertSheet(TRANG_GHEP);
      sh.getRange(1, 1, 1, 4).setValues([['Lớp', 'Tên học sinh gõ', 'Tên trong danh sách', 'Lúc ghép']]).setFontWeight('bold').setBackground('#EDE7F6');
      sh.setFrozenRows(1);
    }
    const n = sh.getLastRow(), cu = n > 1 ? sh.getRange(2, 1, n - 1, 2).getValues() : [];
    const i = cu.findIndex(r => chuan_(r[0]) === chuan_(lop) && chuan_(r[1]) === chuan_(go));
    const dong = [lop, go, chuanTen, Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd HH:mm')];
    sh.getRange(i >= 0 ? i + 2 : n + 1, 1, 1, 4).setNumberFormat('@').setValues([dong]);
    // sửa các bài đã nộp
    ss.getSheets().forEach(s2 => {
      const m = s2.getLastRow();
      if (m < 2 || s2.getRange(1, 1).getValue() !== TIEU_DE[0]) return;
      const v = s2.getRange(2, 2, m - 1, 2).getValues();
      v.forEach((r, j) => {
        if (chuan_(r[0]) === chuan_(go) && chuan_(r[1]).replace(/\s+/g, '') === chuan_(lop).replace(/\s+/g, ''))
          s2.getRange(j + 2, 8, 1, 2).setValues([[chuanTen, chuanTen ? MUC_KHOP.co : '']]);
      });
    });
    return json_({ ok: true, ghep: docGhep_() });
  } finally {
    lock.releaseLock();
  }
}
// ---- Bản sao của assets/js/khopten.js (giữ y hệt; kiem_tra_gs.js kiểm tra hai bản cho cùng kết quả) ----
function khopTen(tenGo, lop, danhSach, ghep) {
  const thuong = s => String(s || '').normalize('NFC').toLowerCase().replace(/\s+/g, ' ').trim();
  const boDau = s => thuong(s).normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd');
  const lopChuan = s => thuong(s).replace(/\s+/g, '');
  const L = lopChuan(lop), go = thuong(tenGo), goKD = boDau(tenGo);
  const ra = (ten, muc, goiY) => ({ ten: ten || '', muc, goiY: goiY || (ten ? [ten] : []) });
  if (!go) return ra('', 'khong', []);
  const ds = (danhSach || []).filter(r => lopChuan(r[0]) === L).map(r => String(r[1]).trim());
  // 0. cô đã ghép tay trước đó
  const g = (ghep || []).find(r => lopChuan(r[0]) === L && thuong(r[1]) === go);
  if (g && String(g[2]).trim()) return ra(String(g[2]).trim(), 'chac');
  if (!ds.length) return ra('', 'khong', []);
  const duy = (arr, muc) => arr.length === 1 ? ra(arr[0], muc) : arr.length > 1 ? ra('', 'gan', arr.slice(0, 3)) : null;
  // 1. giống hệt (bỏ qua hoa thường, khoảng trắng thừa)
  let k = duy(ds.filter(t => thuong(t) === go), 'chac'); if (k) return k;
  // 2. giống khi bỏ dấu tiếng Việt
  k = duy(ds.filter(t => boDau(t) === goKD), 'chac'); if (k) return k;
  // 3. cùng các chữ, khác thứ tự ("An Nguyễn Văn")
  const tu = s => boDau(s).split(' ').filter(Boolean);
  const goTu = tu(tenGo), sx = a => a.slice().sort().join(' ');
  k = duy(ds.filter(t => sx(tu(t)) === sx(goTu)), 'chac'); if (k) return k;
  // 4. gõ thiếu chữ (thiếu tên đệm / chỉ gõ tên gọi) – tên gọi (chữ cuối) phải có trong chữ em gõ
  const conDu = ds.filter(t => { const a = tu(t); return goTu.every(x => a.includes(x)) && goTu.includes(a[a.length - 1]); });
  if (conDu.length === 1) return ra(conDu[0], goTu.length >= 2 ? 'chac' : 'gan');
  if (conDu.length > 1) return ra('', 'gan', conDu.slice(0, 3));
  // 5. gõ sai vài chữ cái (khoảng cách chỉnh sửa nhỏ)
  const kc = (a, b) => { const m = a.length, n = b.length, d = Array.from({ length: m + 1 }, (_, i) => [i]);
    for (let j = 1; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++) d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    return d[m][n]; };
  const xep = ds.map(t => ({ t, d: Math.min(kc(boDau(t), goKD), kc(sx(tu(t)), sx(goTu))) })).sort((a, b) => a.d - b.d);
  const nguong = Math.min(3, Math.max(1, Math.floor(goKD.length * 0.15)));
  if (xep[0].d <= nguong && (xep.length === 1 || xep[1].d > xep[0].d)) return ra(xep[0].t, 'gan');
  return ra('', 'khong', xep.slice(0, 3).filter(x => x.d <= goKD.length / 2).map(x => x.t));
}

function chuan_(s) { return String(s || '').normalize('NFC').toLowerCase().replace(/\s+/g, ' ').trim(); }
function json_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }
function trang_(tieuDe, noiDung, mau) {
  const h = '<div style="font-family:Arial,sans-serif;max-width:520px;margin:60px auto;padding:28px;border:3px solid ' + mau +
    ';border-radius:16px;text-align:center"><div style="font-size:26px;font-weight:bold;color:' + mau + '">' + esc_(tieuDe) +
    '</div><p style="font-size:18px;color:#222;line-height:1.5">' + esc_(noiDung) + '</p><div style="color:#F28C28;font-weight:bold">Cô Thùy Tin</div></div>';
  return HtmlService.createHtmlOutput(h).setTitle(tieuDe).addMetaTag('viewport', 'width=device-width, initial-scale=1');
}
function esc_(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
