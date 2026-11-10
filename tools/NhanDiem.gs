/**
 * NHẬN ĐIỂM PHIẾU BÀI TẬP – dán vào Google Sheet trống (Tiện ích mở rộng → Apps Script).
 * Mỗi phiếu tự tạo một trang tính riêng (tên = tên phiếu). Mỗi học sinh chỉ nộp 1 lần / phiếu.
 */
const CHAN_NOP_TRUNG = true;   // true: mỗi em chỉ nộp được 1 lần cho mỗi phiếu

function doGet(e) {
  const p = (e && e.parameter) || {};
  if (!p.phieu || !p.ten) return trang_('Trang nhận điểm đang hoạt động', 'Chưa có dữ liệu bài làm được gửi tới.', '#168DCE');
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const tenTrang = String(p.phieu).replace(/[\[\]\*\?\/\\:]/g, ' ').slice(0, 90).trim() || 'Phieu';
    let sh = ss.getSheetByName(tenTrang);
    if (!sh) {
      sh = ss.insertSheet(tenTrang);
      sh.appendRow(['Thời gian nộp', 'Họ và tên', 'Lớp', 'Điểm', 'Số câu đúng', 'Nhận xét', 'Chi tiết đúng/sai']);
      sh.getRange(1, 1, 1, 7).setFontWeight('bold').setBackground('#FFF3E6');
      sh.setFrozenRows(1);
      sh.setColumnWidths(1, 1, 150); sh.setColumnWidths(2, 1, 190); sh.setColumnWidth(6, 320); sh.setColumnWidth(7, 520);
    }
    const chuan = s => String(s || '').normalize('NFC').toLowerCase().replace(/\s+/g, ' ').trim();
    if (CHAN_NOP_TRUNG && sh.getLastRow() > 1) {
      const ds = sh.getRange(2, 2, sh.getLastRow() - 1, 2).getValues();
      if (ds.some(r => chuan(r[0]) === chuan(p.ten) && chuan(r[1]) === chuan(p.lop))) {
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

function trang_(tieuDe, noiDung, mau) {
  const h = '<div style="font-family:Arial,sans-serif;max-width:520px;margin:60px auto;padding:28px;border:3px solid ' + mau +
    ';border-radius:16px;text-align:center"><div style="font-size:26px;font-weight:bold;color:' + mau + '">' + esc_(tieuDe) +
    '</div><p style="font-size:18px;color:#222;line-height:1.5">' + esc_(noiDung) + '</p><div style="color:#F28C28;font-weight:bold">Cô Thùy Tin</div></div>';
  return HtmlService.createHtmlOutput(h).setTitle(tieuDe).addMetaTag('viewport', 'width=device-width, initial-scale=1');
}
function esc_(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
