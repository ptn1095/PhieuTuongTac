/* ===== BÀI 6: SẮP XẾP VÀ LỌC DỮ LIỆU ===== */
const META = { key: 'bai6', num: 6, theme: 'tuyet', title: 'Bài 6. Sắp xếp và lọc dữ liệu', big: 'Sắp xếp và<br>lọc dữ liệu',
  st2: 'Chủ đề 4 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Cùng xếp những quả cầu tuyết dữ liệu cho thật ngăn nắp nào!',
  cert: 'Tin học 8 – Bài 6. Sắp xếp và lọc dữ liệu', file: 'Tin8_Bai6', pass: 8 };

const HL = '#FFF3BF', CW = [70, 170, 110, 120];
const ILL_T = {
  t1: () => svg(`${grid(30, 30, [['', 'Họ tên', 'Tổ', 'Điểm'], ['2', 'An', '1', '7'], ['3', 'Bình', '2', '9'], ['4', 'Chi', '1', '8'], ['5', '…', '…', '…']], CW, 52, 24)}${mag(500, 120, .8)}
    ${pillS(60, 320, 480, 54, '#1982C4', 'Ai điểm cao nhất?', 28)}${star(570, 380, 12, '#FFD60A')}`),
  t2: () => svg(`${grid(30, 30, [['', 'Họ tên', 'Tổ', 'Điểm ▼'], ['2', 'Bình', '2', '9'], ['3', 'Chi', '1', '8'], ['4', 'An', '1', '7'], ['5', 'Dũng', '2', '6']], CW, 52, 24, { '1,3': HL, '2,3': HL, '3,3': HL, '4,3': HL })}
    ${key3d(500, 50, 84, 74, '#3A8DFF', '#1F4E8C', 'Z→A', 24)}${pillS(60, 320, 480, 54, '#2DA44E', 'Sort Z to A: giảm dần', 26)}`),
  t3: () => svg(`${grid(30, 30, [['', 'Họ tên', 'Tổ ▲', 'Điểm ▼'], ['2', 'Chi', '1', '8'], ['3', 'An', '1', '7'], ['4', 'Bình', '2', '9'], ['5', 'Dũng', '2', '6']], CW, 52, 24, { '1,2': '#D0EBFF', '2,2': '#D0EBFF', '3,2': '#FFE0DC', '4,2': '#FFE0DC' })}
    ${pillS(490, 60, 100, 46, '#8338EC', '1. Tổ', 20)}${pillS(490, 120, 100, 46, '#FF7F11', '2. Điểm', 20)}${pillS(60, 320, 480, 54, '#1982C4', 'Add Level: thêm tiêu chí', 26)}`),
  t4: () => svg(`${grid(30, 30, [['', 'Họ tên ▾', 'Tổ ▾', 'Điểm ▾'], ['3', 'Bình', '2', '9'], ['4', 'Chi', '1', '8']], CW, 52, 24, { '0,3': HL })}
    ${G(548, 150, .75, `<path d="M-50 -40 H50 L12 6 V44 L-12 30 V6Z" fill="#3A8DFF" stroke="${O}" stroke-width="6" stroke-linejoin="round"/>`)}${pillS(30, 200, 470, 50, '#E9ECEF', 'Hàng 2, 5 đang bị ẩn tạm', 22, 0, O)}
    ${pillS(60, 320, 480, 54, '#2DA44E', 'Lọc: Điểm ≥ 8', 28)}`),
  t5: () => svg(`${pillS(30, 50, 260, 70, '#1982C4', 'Sắp xếp', 32)}${pillS(310, 50, 260, 70, '#FF7F11', 'Lọc', 32)}${txt(160, 180, 'Đổi thứ tự', 26)}${txt(160, 220, 'các hàng', 26)}${txt(440, 180, 'Chỉ hiện hàng', 26)}${txt(440, 220, 'thoả điều kiện', 26)}
    ${pillS(110, 300, 380, 60, '#2DA44E', 'Thẻ Data', 30)}${flake(40, 380, .5, '#8ECAE6')}${flake(560, 380, .5, '#8ECAE6')}`),
};

const TOPICS = [
  { id: 't1', name: 'Tìm nhanh trong bảng dài', tip: 'Bảng dài như con đường tuyết – có công cụ thì đi nhanh hơn!',
    html: S4Q(['Bảng điểm có <b>40 bạn</b>. Tìm nhanh bạn điểm cao nhất?', ''],
      ['Bảng tính có công cụ nào giúp?', 'Công cụ <b>sắp xếp</b> và <b>lọc</b> dữ liệu.'],
      ['Chỉ muốn xem các bạn tổ 1 thì làm sao?', 'Dùng <b>lọc</b> theo cột Tổ.'],
      ['<b>Sắp xếp</b>: đổi thứ tự hàng.', '<b>Lọc</b>: chỉ hiện hàng cần xem.', 'Giúp <span class="k">tìm nhanh</span> thông tin.']),
    quiz: [
      { q: 'Muốn tìm nhanh bạn điểm cao nhất, em dùng công cụ:', o: ['Sắp xếp dữ liệu', 'Chèn hình ảnh', 'Đổi màu nền', 'In trang tính'], a: 0, why: 'Sắp xếp giảm dần, bạn điểm cao nhất sẽ ở đầu bảng.' },
      { q: 'Muốn chỉ hiện các bạn tổ 1, em dùng công cụ:', o: ['Xoá hàng', 'Lọc dữ liệu', 'Gộp ô', 'Kẻ khung'], a: 1, why: 'Lọc chỉ hiện các hàng thoả điều kiện Tổ = 1.' } ] },
  { id: 't2', name: 'Sắp xếp dữ liệu', tip: 'A→Z là tăng dần, Z→A là giảm dần – dễ nhớ như bông tuyết rơi!',
    html: S4Q(['Sắp xếp bảng theo cột <b>Điểm</b> từ cao xuống thấp.', ''],
      ['Các bước sắp xếp là gì?', 'Chọn ô trong cột → Data → <code>Sort Z to A</code> (giảm).'],
      ['Sắp xếp cột Họ tên A→Z thì sao?', 'Tên xếp theo bảng chữ cái tăng dần.'],
      ['<code>Sort A to Z</code>: tăng dần.', '<code>Sort Z to A</code>: giảm dần.', 'Cả <span class="k">hàng</span> đổi chỗ theo nhau.']),
    quiz: [
      { q: 'Để xếp điểm từ cao xuống thấp, em chọn:', o: ['Sort A to Z', 'Filter', 'Sort Z to A', 'Insert'], a: 2, why: 'Sort Z to A sắp xếp giảm dần.' },
      { q: 'Khi sắp xếp, các hàng dữ liệu sẽ:', o: ['Bị xoá bớt', 'Đổi màu', 'Bị ẩn đi', 'Đổi thứ tự, giữ nội dung'], a: 3, why: 'Cả hàng được đổi chỗ, nội dung giữ nguyên.' } ] },
  { id: 't3', name: 'Sắp xếp nhiều tiêu chí', tip: 'Xếp theo tổ trước, cùng tổ thì xét điểm – thật gọn gàng!',
    html: S4Q(['Xếp theo <b>Tổ</b>; cùng tổ thì theo <b>Điểm</b> giảm dần.', ''],
      ['Thêm tiêu chí thứ hai bằng cách nào?', 'Data → <code>Sort</code> → <code>Add Level</code>.'],
      ['Tiêu chí nào được xét trước?', 'Tiêu chí ở trên (Tổ); trùng mới xét Điểm.'],
      ['Sắp xếp <b>nhiều tiêu chí</b>.', '<b>Add Level</b> thêm tiêu chí.', 'Tiêu chí trên <span class="k">ưu tiên trước</span>.']),
    quiz: [
      { q: 'Để thêm tiêu chí sắp xếp thứ hai, em bấm:', o: ['Add Level', 'Delete', 'Copy', 'Close'], a: 0, why: 'Add Level thêm một mức (tiêu chí) sắp xếp.' },
      { q: 'Xếp theo Tổ rồi Điểm: khi cùng Tổ, máy sẽ xét:', o: ['Họ tên', 'Điểm', 'Ngày sinh', 'Không xét gì'], a: 1, why: 'Tiêu chí thứ hai (Điểm) dùng khi tiêu chí đầu bằng nhau.' } ] },
  { id: 't4', name: 'Lọc dữ liệu', tip: 'Lọc như chiếc rây: chỉ giữ lại những gì em cần!',
    html: S4Q(['Chỉ hiện các bạn có điểm <b>từ 8 trở lên</b>.', ''],
      ['Lọc dữ liệu thế nào?', 'Data → <code>Filter</code>; bấm ▾ ở tiêu đề; Number Filters.'],
      ['Lọc xong, các hàng khác có bị xoá không?', 'Không. Chỉ bị <b>ẩn tạm</b>; bấm Clear để hiện lại.'],
      ['<b>Filter</b>: nút ▾ ở tiêu đề cột.', '<b>Number Filters</b>: lọc theo số.', 'Lọc chỉ <span class="k">ẩn tạm</span> hàng.']),
    quiz: [
      { q: 'Sau khi lọc, các hàng không thoả điều kiện sẽ:', o: ['Bị xoá vĩnh viễn', 'Bị đổi màu đỏ', 'Bị ẩn tạm thời', 'Chuyển sang trang khác'], a: 2, why: 'Lọc chỉ ẩn tạm, dữ liệu vẫn còn nguyên.' },
      { q: 'Để lọc các điểm từ 8 trở lên, em chọn:', o: ['Sort A to Z', 'Text Filters', 'Chèn biểu đồ', 'Number Filters'], a: 3, why: 'Number Filters → Greater Than Or Equal To (≥) 8.' } ] },
  { id: 't5', name: 'Tổng kết bài học', tip: 'Sắp xếp đổi chỗ, lọc thì ẩn bớt – nhớ nha!',
    html: S4Q(['Phân biệt <b>sắp xếp</b> và <b>lọc</b> dữ liệu.', ''],
      ['Sắp xếp và lọc khác nhau thế nào?', 'Sắp xếp: đổi thứ tự hàng; lọc: chỉ hiện hàng thoả điều kiện.'],
      ['Hai công cụ nằm ở thẻ nào?', 'Thẻ <b>Data</b> (Dữ liệu).'],
      ['<b>Sắp xếp</b>: tăng, giảm, nhiều tiêu chí.', '<b>Lọc</b>: ẩn tạm hàng không hợp.', 'Cả hai ở <span class="k">thẻ Data</span>.']),
    quiz: [
      { q: 'Sắp xếp và lọc dữ liệu nằm trong thẻ nào?', o: ['Home', 'Data', 'Insert', 'View'], a: 1, why: 'Nhóm lệnh Sort & Filter nằm trong thẻ Data.' },
      { q: 'Câu nào ĐÚNG?', o: ['Lọc làm mất dữ liệu', 'Sắp xếp xoá hàng trùng', 'Lọc chỉ hiện hàng thoả điều kiện', 'Chỉ sắp xếp được chữ'], a: 2, why: 'Lọc chỉ hiện những hàng thoả điều kiện đã chọn.' } ] },
];

const KEY = [
  'Sắp xếp, lọc giúp<br><b>tìm nhanh</b>.',
  '<b>A→Z</b> tăng,<br><b>Z→A</b> giảm.',
  '<b>Add Level</b>:<br>nhiều tiêu chí.',
  '<b>Filter</b>: ẩn tạm<br>hàng không hợp.',
  'Cả hai ở<br>thẻ <b>Data</b>.',
];
