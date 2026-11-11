/**
 * NHẬN ĐIỂM PHIẾU BÀI TẬP – Cô Thùy Tin
 * Dán toàn bộ mã này vào Google Sheet (Tiện ích mở rộng → Apps Script), thay mật khẩu bên dưới, bấm Lưu,
 * rồi Triển khai → Quản lý triển khai → Chỉnh sửa (bút chì) → Phiên bản: Phiên bản mới → Triển khai.
 * (Chọn "Phiên bản mới" trên triển khai cũ thì link nhận điểm GIỮ NGUYÊN, các phiếu cũ vẫn chạy.)
 *
 * - Mỗi phiếu tự tạo một trang tính riêng (tên = tên phiếu). Mỗi học sinh chỉ nộp 1 lần / phiếu.
 * - Trang tổng hợp điểm của cô (…/giaovien/) đọc điểm qua mã này, cần đúng MAT_KHAU.
 * - Muốn biết em nào CHƯA nộp: tạo trang tính tên "DanhSach", cột A = Lớp, cột B = Họ và tên (dòng 1 là tiêu đề).
 * - Tin nhắn học sinh gửi cô (nút trên phiếu) tự ghi vào trang tính "TinNhan" – chỉ cô đọc được.
 * - Giao phiếu: trang tổng hợp tự tạo trang tính "GiaoPhieu". Cô "Công bố lên web" RIÊNG trang tính này (dạng CSV)
 *   và gửi link cho Claude để trang của học sinh đọc được lịch giao.
 */
const MAT_KHAU = 'doi-mat-khau-nay';   // ← CÔ ĐỔI thành mật khẩu riêng (ít nhất 6 ký tự), chỉ cô biết
const CHAN_NOP_TRUNG = true;           // true: mỗi em chỉ nộp được 1 lần cho mỗi phiếu
const TIEU_DE = ['Thời gian nộp', 'Họ và tên', 'Lớp', 'Điểm', 'Số câu đúng', 'Nhận xét', 'Chi tiết đúng/sai'];

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
  if (p.action === 'kiemtra' || p.action === 'tonghop' || p.action === 'datgiao') return docDiem_(p);
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
      sh.getRange(1, 1, 1, 7).setFontWeight('bold').setBackground('#FFF3E6');
      sh.setFrozenRows(1);
      sh.setColumnWidths(1, 1, 150); sh.setColumnWidths(2, 1, 190); sh.setColumnWidth(6, 320); sh.setColumnWidth(7, 520);
    }
    if (CHAN_NOP_TRUNG && sh.getLastRow() > 1) {
      const ds = sh.getRange(2, 2, sh.getLastRow() - 1, 2).getValues();
      if (ds.some(r => chuan_(r[0]) === chuan_(p.ten) && chuan_(r[1]) === chuan_(p.lop))) {
        return trang_('Em đã nộp bài này rồi', 'Bài của ' + p.ten + ' – lớp ' + p.lop + ' đã được cô nhận trước đó. Em không cần nộp lại.', '#F28C28');
      }
    }
    const diem = Number(String(p.diem || '').replace(',', '.'));
    sh.appendRow([new Date(), p.ten, p.lop || '', isNaN(diem) ? (p.diem || '') : diem, p.dung || '', p.nhanxet || '', p.chitiet || '']);
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
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const phieu = [];
  let danhSach = [];
  ss.getSheets().forEach(sh => {
    const ten = sh.getName(), n = sh.getLastRow();
    if (ten === TRANG_GIAO || ten === TRANG_TIN) return;
    if (ten === 'DanhSach') {
      if (n > 1) danhSach = sh.getRange(2, 1, n - 1, 2).getValues().filter(r => r[0] && r[1]).map(r => [String(r[0]).trim(), String(r[1]).trim()]);
      return;
    }
    if (n < 1 || sh.getRange(1, 1).getValue() !== TIEU_DE[0]) return;   // bỏ qua trang tính không phải của phiếu
    const hang = n > 1 ? sh.getRange(2, 1, n - 1, 7).getValues().map(r => [
      r[0] instanceof Date ? r[0].toISOString() : String(r[0]), String(r[1]), String(r[2]), r[3], String(r[4]), String(r[5]), String(r[6])]) : [];
    phieu.push({ ten, hang });
  });
  return json_({ ok: true, phieu, danhSach, giao: docGiao_(), luc: new Date().toISOString() });
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

function chuan_(s) { return String(s || '').normalize('NFC').toLowerCase().replace(/\s+/g, ' ').trim(); }
function json_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }
function trang_(tieuDe, noiDung, mau) {
  const h = '<div style="font-family:Arial,sans-serif;max-width:520px;margin:60px auto;padding:28px;border:3px solid ' + mau +
    ';border-radius:16px;text-align:center"><div style="font-size:26px;font-weight:bold;color:' + mau + '">' + esc_(tieuDe) +
    '</div><p style="font-size:18px;color:#222;line-height:1.5">' + esc_(noiDung) + '</p><div style="color:#F28C28;font-weight:bold">Cô Thùy Tin</div></div>';
  return HtmlService.createHtmlOutput(h).setTitle(tieuDe).addMetaTag('viewport', 'width=device-width, initial-scale=1');
}
function esc_(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
