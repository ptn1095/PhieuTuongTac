// Thử bộ khớp tên: node tools/kiem_tra_khopten.js
const khopTen = require('../assets/js/khopten.js');
const DS = [['5A2', 'Nguyễn Văn An'], ['5A2', 'Lê Thị Bích Ngọc'], ['5A2', 'Trần Minh Khang'], ['5A2', 'Phạm Gia Huy'], ['5A2', 'Đỗ Hoàng Huy'],
  ['5A2', 'Lê Văn Tâm'], ['5A2', 'Lê Văn Tám'], ['5A3', 'Nguyễn Văn An'], ['5A2', 'Vũ Đức Anh'], ['5A2', 'Vũ Đức Ánh']];
let loi = 0;
const thu = (go, lop, ten, muc, ghep, ghiChu) => { const r = khopTen(go, lop, DS, ghep || []);
  const ok = r.ten === ten && r.muc === muc; if (!ok) loi++;
  console.log((ok ? '  ✓ ' : '  ✗ ') + `"${go}" (${lop}) → ${r.ten || '–'} [${r.muc}]` + (ghiChu ? ' – ' + ghiChu : '') + (ok ? '' : `  (mong đợi: ${ten || '–'} [${muc}], gợi ý: ${r.goiY.join(', ')})`)); };
thu('Nguyễn Văn An', '5A2', 'Nguyễn Văn An', 'chac', null, 'đúng chuẩn');
thu('  nguyễn  văn an ', '5a2', 'Nguyễn Văn An', 'chac', null, 'hoa thường, khoảng trắng, lớp viết thường');
thu('Nguyen Van An', '5A2', 'Nguyễn Văn An', 'chac', null, 'không dấu');
thu('An Nguyễn Văn', '5A2', 'Nguyễn Văn An', 'chac', null, 'đảo thứ tự');
thu('Nguyễn An', '5A2', 'Nguyễn Văn An', 'chac', null, 'thiếu tên đệm');
thu('Ngọc', '5A2', 'Lê Thị Bích Ngọc', 'gan', null, 'chỉ gõ tên gọi → cần cô xác nhận');
thu('Huy', '5A2', '', 'gan', null, 'lớp có 2 bạn tên Huy → cần cô chọn');
thu('Nguễn Văn An', '5A2', 'Nguyễn Văn An', 'gan', null, 'gõ sai 1 chữ');
thu('Tran Minh Khanh', '5A2', 'Trần Minh Khang', 'gan', null, 'gõ sai 1 chữ, không dấu');
thu('Le Van Tam', '5A2', '', 'gan', null, 'không dấu trùng 2 bạn Tâm / Tám → cần cô chọn');
thu('Lê Văn Tám', '5A2', 'Lê Văn Tám', 'chac', null, 'có dấu thì phân biệt được Tâm / Tám');
thu('Vu Duc Anh', '5A2', '', 'gan', null, 'Anh / Ánh không dấu → cần cô chọn');
thu('Hoàng Thùy Linh', '5A2', '', 'khong', null, 'không có trong lớp');
thu('Nguyễn Văn An', '5A3', 'Nguyễn Văn An', 'chac', null, 'cùng tên khác lớp: khớp theo đúng lớp');
thu('Nguyễn Văn An', '5A9', '', 'khong', null, 'lớp không có trong danh sách');
thu('bé bi', '5A2', 'Phạm Gia Huy', 'chac', [['5A2', 'Bé Bi', 'Phạm Gia Huy']], 'cô đã ghép tay "Bé Bi" → Phạm Gia Huy');
console.log(loi ? `\n${loi} lỗi` : '\nTất cả đều ổn.'); process.exit(loi ? 1 : 0);
