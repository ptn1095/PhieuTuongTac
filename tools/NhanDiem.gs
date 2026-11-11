/**
 * NHẬN ĐIỂM PHIẾU BÀI TẬP – Cô Thùy Tin
 * Dán toàn bộ mã này vào Google Sheet (Tiện ích mở rộng → Apps Script), thay mật khẩu bên dưới, bấm Lưu,
 * rồi Triển khai → Quản lý triển khai → Chỉnh sửa (bút chì) → Phiên bản: Phiên bản mới → Triển khai.
 * (Chọn "Phiên bản mới" trên triển khai cũ thì link nhận điểm GIỮ NGUYÊN, các phiếu cũ vẫn chạy.)
 *
 * - Mỗi phiếu tự tạo một trang tính riêng (tên = tên phiếu). Mỗi học sinh chỉ nộp 1 lần / phiếu.
 * - Trang tổng hợp điểm của cô (…/giaovien/) đọc điểm qua mã này, cần đúng MAT_KHAU.
 * - Muốn biết em nào CHƯA nộp: tạo trang tính tên "DanhSach", cột A = Lớp, cột B = Họ và tên (dòng 1 là tiêu đề).
 */
const MAT_KHAU = 'doi-mat-khau-nay';   // ← CÔ ĐỔI thành mật khẩu riêng (ít nhất 6 ký tự), chỉ cô biết
const CHAN_NOP_TRUNG = true;           // true: mỗi em chỉ nộp được 1 lần cho mỗi phiếu
const TIEU_DE = ['Thời gian nộp', 'Họ và tên', 'Lớp', 'Điểm', 'Số câu đúng', 'Nhận xét', 'Chi tiết đúng/sai'];

function doGet(e) {
  const p = (e && e.parameter) || {};
  if (p.action === 'kiemtra' || p.action === 'tonghop') return docDiem_(p);
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
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const phieu = [];
  let danhSach = [];
  ss.getSheets().forEach(sh => {
    const ten = sh.getName(), n = sh.getLastRow();
    if (ten === 'DanhSach') {
      if (n > 1) danhSach = sh.getRange(2, 1, n - 1, 2).getValues().filter(r => r[0] && r[1]).map(r => [String(r[0]).trim(), String(r[1]).trim()]);
      return;
    }
    if (n < 1 || sh.getRange(1, 1).getValue() !== TIEU_DE[0]) return;   // bỏ qua trang tính không phải của phiếu
    const hang = n > 1 ? sh.getRange(2, 1, n - 1, 7).getValues().map(r => [
      r[0] instanceof Date ? r[0].toISOString() : String(r[0]), String(r[1]), String(r[2]), r[3], String(r[4]), String(r[5]), String(r[6])]) : [];
    phieu.push({ ten, hang });
  });
  return json_({ ok: true, phieu, danhSach, luc: new Date().toISOString() });
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
