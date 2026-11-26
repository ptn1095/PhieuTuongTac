/* ===== BÀI 12: TRÌNH BÀY THÔNG TIN Ở DẠNG BẢNG ===== */
const META = { key: 'bai12', theme: 'tuyet', num: 12, title: 'Bài 12. Trình bày thông tin ở dạng bảng', big: 'Thông tin<br>dạng bảng',
  st2: 'Chủ đề 5 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Cùng xếp thông tin vào bảng cho gọn gàng nhé!',
  cert: 'Tin học 6 – Bài 12. Trình bày thông tin ở dạng bảng', file: 'Tin6_Bai12', pass: 8 };

const grid = (x, y, r, c, cw, rh, head = '#1982C4', hl) => { let s = ''; for (let i = 0; i < r; i++) for (let j = 0; j < c; j++) { const f = i === 0 ? head : (hl && hl(i, j)) || '#fff'; s += `<rect x="${x + j*cw}" y="${y + i*rh}" width="${cw}" height="${rh}" fill="${f}" stroke="${O}" stroke-width="4"/>`; } return s; };
const ILL_T = {
  t1: () => svg(`${grid(60, 60, 5, 4, 120, 56)}${['Thứ', 'Tiết 1', 'Tiết 2', 'Tiết 3'].map((t, j) => txt(120 + j*120, 96, t, 22, '#fff')).join('')}
    ${['Hai', 'Ba', 'Tư', 'Năm'].map((t, i) => txt(120, 152 + i*56, t, 22)).join('')}${pillS(150, 360, 300, 46, '#2DA44E', 'Thời khoá biểu', 24)}`),
  t2: () => svg(`${grid(80, 60, 4, 4, 110, 60, '#2DA44E', (i, j) => i === 2 ? '#FFF3BF' : j === 2 ? '#E7F5FF' : null)}
    ${pillS(20, 300, 170, 48, '#FF7F11', 'Hàng', 24)}${pillS(215, 300, 170, 48, '#1982C4', 'Cột', 24)}${pillS(410, 300, 170, 48, '#8338EC', 'Ô', 24)}
    ${pillS(110, 360, 380, 46, '#2DA44E', 'Insert → Table', 24)}`),
  t3: () => svg(`${grid(40, 60, 3, 3, 80, 56, '#1982C4')}${arr(290, 140, 330, 140, '#FF7F11')}${grid(350, 60, 3, 3, 70, 56, '#1982C4', (i, j) => i === 1 ? '#FFD60A' : null)}
    ${pillS(40, 260, 250, 48, '#2DA44E', 'Chèn hàng, cột', 22)}${pillS(310, 260, 250, 48, '#E5383B', 'Xoá hàng, cột', 22)}
    ${pillS(40, 330, 250, 48, '#FF7F11', 'Gộp ô', 24)}${pillS(310, 330, 250, 48, '#8338EC', 'Tách ô', 24)}`),
  t4: () => svg(`${grid(60, 80, 3, 3, 120, 60, '#2DA44E')}<line x1="300" y1="60" x2="300" y2="280" stroke="#E5383B" stroke-width="6" stroke-dasharray="10 8"/>${arr(270, 300, 340, 300, '#E5383B')}
    ${pillS(60, 340, 230, 48, '#1982C4', 'Kéo đường biên', 22)}${pillS(320, 340, 230, 48, '#FF7F11', 'Tab: ô kế tiếp', 22)}`),
  t5: () => svg(`${tlist([[1, '#1982C4', 'Bảng: hàng, cột, ô'], [1, '#2DA44E', 'Tạo: Insert → Table'], [1, '#FF7F11', 'Chèn, xoá, gộp, tách'], [1, '#8338EC', 'Dễ đọc, dễ so sánh']], 60, 96, 24)}`),
};

const TOPICS = [
  { id: 't1', name: 'Vì sao cần bảng?', tip: 'Thời khoá biểu là một cái bảng rất quen thuộc!',
    html: S4('Quan sát <b>thời khoá biểu</b> của lớp em.',
      'Thông tin xếp theo <b>hàng</b> và <b>cột</b>, tìm môn học rất nhanh.',
      'Nếu viết thời khoá biểu thành đoạn văn thì sao?',
      'Bảng giúp thông tin <span class="k">gọn, dễ đọc, dễ so sánh</span>.'),
    quiz: [
      { q: 'Trình bày thông tin dạng bảng giúp:', o: ['Khó tìm thông tin hơn', 'Văn bản dài hơn', 'Dễ đọc, dễ so sánh', 'Không có tác dụng'], a: 2, why: 'Bảng sắp xếp thông tin gọn gàng, dễ so sánh.' },
      { q: 'Thông tin nào nên trình bày dạng bảng?', o: ['Thời khoá biểu', 'Bài thơ', 'Lá thư', 'Truyện ngắn'], a: 0, why: 'Thời khoá biểu có nhiều mục xếp theo hàng, cột.' } ] },
  { id: 't2', name: 'Tạo bảng', tip: 'Insert → Table, kéo chọn số hàng số cột là xong!',
    html: S4('Tạo bảng <b>4 cột, 5 hàng</b> trong phần mềm soạn thảo.',
      'Chọn <b>Insert → Table</b>, kéo chọn số cột, số hàng.',
      'Chỗ giao nhau giữa hàng và cột gọi là gì? (<b>ô</b>)',
      'Bảng gồm <span class="k">hàng, cột, ô</span>.'),
    quiz: [
      { q: 'Để tạo bảng, em chọn:', o: ['File → Print', 'Insert → Table', 'Home → Font', 'Layout → Margins'], a: 1, why: 'Lệnh Insert → Table dùng để chèn bảng.' },
      { q: 'Chỗ giao nhau giữa một hàng và một cột là:', o: ['Đường viền', 'Trang', 'Dòng', 'Ô'], a: 3, why: 'Giao của hàng và cột là một ô của bảng.' } ] },
  { id: 't3', name: 'Chỉnh sửa bảng', tip: 'Thiếu thì chèn, thừa thì xoá, gộp ô làm tiêu đề!',
    html: S4('Thêm một bạn mới vào bảng danh sách tổ.',
      'Thẻ <b>Layout</b> của bảng: <b>chèn</b> hàng/cột (Insert), <b>xoá</b> (Delete).',
      '<b>Gộp ô</b> (Merge Cells) để làm tiêu đề; <b>tách ô</b> (Split Cells).',
      'Đặt con trỏ <span class="k">đúng vị trí</span> trước khi chèn, xoá.'),
    quiz: [
      { q: 'Muốn thêm một bạn vào cuối bảng danh sách, em:', o: ['Xoá bảng', 'Gộp ô', 'Chèn thêm hàng', 'Tách ô'], a: 2, why: 'Mỗi bạn một hàng, nên cần chèn thêm hàng.' },
      { q: 'Lệnh gộp nhiều ô thành một ô là:', o: ['Merge Cells', 'Split Cells', 'Delete', 'Insert Above'], a: 0, why: 'Merge Cells gộp các ô đã chọn thành một ô.' } ] },
  { id: 't4', name: 'Nhập dữ liệu và chỉnh độ rộng', tip: 'Nhấn Tab để nhảy sang ô bên cạnh nhanh hơn!',
    html: S4('Nhập danh sách tổ: <b>STT, Họ tên, Ngày sinh</b>.',
      'Nháy vào ô để nhập; nhấn <code>Tab</code> để sang <b>ô kế tiếp</b>.',
      'Cột "Họ tên" quá hẹp: kéo thả <b>đường biên cột</b> để nới rộng.',
      'Bảng cân đối giúp <span class="k">dễ nhìn</span> hơn.'),
    quiz: [
      { q: 'Phím nào giúp chuyển sang ô kế tiếp trong bảng?', o: ['Esc', 'Tab', 'Delete', 'Ctrl'], a: 1, why: 'Nhấn Tab để di chuyển sang ô tiếp theo.' },
      { q: 'Muốn cột rộng hơn, em:', o: ['Xoá cột', 'Gộp ô', 'Nhấn Ctrl+P', 'Kéo thả đường biên cột'], a: 3, why: 'Kéo đường biên cột để thay đổi độ rộng.' } ] },
  { id: 't5', name: 'Tổng kết bài học', tip: 'Ôn nhanh: tạo bảng – chỉnh sửa – nhập dữ liệu!',
    html: S4('Tóm tắt bài bằng 3 ý chính.',
      'Bảng gồm <b>hàng, cột, ô</b>; tạo bằng <b>Insert → Table</b>.',
      'Chèn, xoá hàng cột; gộp, tách ô; kéo đường biên chỉnh độ rộng.',
      'Bảng giúp thông tin <span class="k">rõ ràng, dễ so sánh</span>.'),
    quiz: [
      { q: 'Lệnh Split Cells dùng để:', o: ['Tách một ô thành nhiều ô', 'Gộp các ô', 'Xoá bảng', 'In bảng'], a: 0, why: 'Split Cells tách một ô thành nhiều ô.' },
      { q: 'Bảng có 3 hàng, 4 cột thì có bao nhiêu ô?', o: ['7 ô', '10 ô', '12 ô', '34 ô'], a: 2, why: '3 × 4 = 12 ô.' } ] },
];

const KEY = [
  'Bảng: <b>gọn,<br>dễ so sánh</b>.',
  '<b>Insert → Table</b>:<br>hàng, cột, ô.',
  'Chèn, xoá,<br><b>gộp, tách</b> ô.',
  '<b>Tab</b> sang ô,<br>kéo đường biên.',
  'Bảng giúp<br>thông tin <b>rõ ràng</b>.',
];
