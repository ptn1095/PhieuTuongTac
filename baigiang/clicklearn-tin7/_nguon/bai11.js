/* ===== BÀI 11: TẠO BÀI TRÌNH CHIẾU ===== */
const META = { key: 'bai11', num: 11, theme: 'lauda', title: 'Bài 11. Tạo bài trình chiếu', big: 'Tạo bài<br>trình chiếu',
  st2: 'Chủ đề 4 • 5 phần kiến thức cần nhớ • 10 câu đố • giấy chứng nhận',
  hello: 'Cùng dựng bài trình chiếu lộng lẫy như lâu đài nhé!',
  cert: 'Tin học 7 – Bài 11. Tạo bài trình chiếu', file: 'Tin7_Bai11', pass: 8 };

const bar = (x, y, w, c = '#ADB5BD') => `<rect x="${x}" y="${y}" width="${w}" height="12" rx="6" fill="${c}"/>`;
const ILL_T = {
  t1: () => svg(`${slide(40, 30, 520, 300, '#fff', `${txt(300, 120, 'Tin học 7', 52, '#8338EC')}${txt(300, 180, 'Nhóm 1 – Lớp 7A', 30)}${bar(200, 220, 200)}`)}
    ${pillS(80, 350, 440, 50, '#FF7F11', 'Trang tiêu đề (trang đầu)', 24)}`),
  t2: () => svg(`${slide(40, 20, 520, 320, '#fff', `${txt(80, 70, 'Tiêu đề trang', 30, '#1982C4', 'start')}
      ${circleB(80, 120)}${txt(100, 128, 'Ý cấp 1', 26, O, 'start')}${circleB(130, 175, '#FF7F11')}${txt(150, 183, 'Ý cấp 2', 24, O, 'start')}${circleB(130, 225, '#FF7F11')}${txt(150, 233, 'Ý cấp 2', 24, O, 'start')}${circleB(80, 280)}${txt(100, 288, 'Ý cấp 1', 26, O, 'start')}`)}
    ${key3d(400, 140, 130, 70, '#2DA44E', '#1D3557', 'Tab', 32)}${pillS(80, 355, 440, 48, '#8338EC', 'Cấu trúc phân cấp', 26)}`),
  t3: () => svg(`${[['Title Slide', 0], ['Title and Content', 1], ['Two Content', 2], ['Blank', 3]].map(([t, k], i) => {
      const x = 30 + (i % 2)*285, y = 30 + Math.floor(i/2)*165; return slide(x, y, 255, 130, '#fff', k === 0 ? bar(x + 50, y + 50, 155, '#8338EC') + bar(x + 80, y + 76, 95) : k === 1 ? bar(x + 20, y + 22, 120, '#8338EC') + bar(x + 20, y + 50, 210) + bar(x + 20, y + 72, 180) : k === 2 ? bar(x + 20, y + 22, 120, '#8338EC') + bar(x + 20, y + 50, 100) + bar(x + 135, y + 50, 100) : '') + txt(x + 127, y + 122, t, 20); }).join('')}
    ${pillS(80, 355, 440, 48, '#FF7F11', 'Layout: bố cục trang', 26)}`),
  t4: () => svg(`${slide(40, 30, 300, 200, '#fff', `${txt(190, 80, 'Bảo vệ môi trường', 22, '#2DA44E')}${tree(190, 170, .6)}`)}${G(450, 120, .9, `<rect x="-70" y="-60" width="140" height="120" rx="12" fill="#D3F9D8" ${ST}/>${mountain(0, 40, .4)}${sun(40, -30, 16)}`)}
    ${pillS(40, 270, 520, 54, '#1982C4', 'Insert → Pictures', 28)}${pillS(80, 345, 440, 48, '#2DA44E', 'Ảnh minh hoạ phù hợp', 24)}`),
  t5: () => svg(`${vflow([['#8338EC', 'Trang tiêu đề'], ['#1982C4', 'Các trang nội dung'], ['#FF7F11', 'Trang kết thúc']], 150, 30, 300, 100, 28)}
    ${key3d(80, 320, 180, 70, '#2DA44E', '#1D3557', 'F5', 34)}${pillS(300, 330, 260, 54, '#FF006E', 'Trình chiếu', 28)}`),
};
function circleB(x, y, c = '#1982C4') { return `<circle cx="${x}" cy="${y}" r="9" fill="${c}"/>`; }

const TOPICS = [
  { id: 't1', name: 'Bài trình chiếu và trang tiêu đề', tip: 'Trang tiêu đề như “tấm danh thiếp” của bài trình chiếu!',
    html: KT([
      '<b>Phần mềm trình chiếu</b> (VD <b>PowerPoint</b>) giúp tạo bài trình chiếu gồm nhiều <b>trang chiếu</b> (slide).',
      '<b>Trang tiêu đề</b> là trang đầu tiên: có <b>tên chủ đề</b>, tên người/nhóm trình bày, lớp…',
      'Tiêu đề cần <b>ngắn gọn</b>, nổi bật, thể hiện đúng nội dung.',
      'Tệp trình chiếu có phần mở rộng <b>.pptx</b>.',
    ], 'Trang đầu tiên là <span class="k">trang tiêu đề</span>.'),
    quiz: [
      { q: 'Trang đầu tiên của bài trình chiếu thường là:', o: ['Trang kết thúc', 'Trang tiêu đề', 'Trang trống', 'Trang ảnh'], a: 1, why: 'Trang tiêu đề là trang mở đầu bài trình chiếu.' },
      { q: 'Tệp PowerPoint có phần mở rộng:', o: ['.pptx', '.xlsx', '.docx', '.mp3'], a: 0, why: 'Tệp trình chiếu có đuôi .pptx.' } ] },
  { id: 't2', name: 'Cấu trúc phân cấp', tip: 'Ý lớn ôm ý nhỏ – người xem nhìn là hiểu ngay!',
    html: KT([
      'Nội dung trang chiếu nên trình bày theo <b>cấu trúc phân cấp</b>: ý chính (cấp 1), ý chi tiết (cấp 2)…',
      'Tăng mức (lùi vào): nhấn <b>Tab</b> hoặc nút <b>Increase List Level</b>.',
      'Giảm mức: nhấn <b>Shift + Tab</b> hoặc <b>Decrease List Level</b>.',
      'Giúp nội dung <b>rõ ràng, mạch lạc</b>, dễ theo dõi, dễ ghi nhớ.',
    ], '<span class="k">Tab</span> tăng mức, <span class="k">Shift + Tab</span> giảm mức.'),
    quiz: [
      { q: 'Muốn chuyển một ý thành ý cấp 2 (lùi vào), em nhấn:', o: ['Enter', 'Tab', 'Delete', 'Esc'], a: 1, why: 'Nhấn Tab để tăng mức phân cấp.' },
      { q: 'Lợi ích của cấu trúc phân cấp là:', o: ['Nội dung rõ ràng, dễ theo dõi', 'Chữ to hơn', 'Tự thêm hình ảnh', 'Tự trình chiếu'], a: 0, why: 'Phân cấp giúp nội dung mạch lạc, dễ hiểu.' } ] },
  { id: 't3', name: 'Bố cục trang chiếu', tip: 'Chọn bố cục phù hợp, trang chiếu sẽ gọn gàng!',
    html: KT([
      '<b>Bố cục</b> (Layout) là cách sắp xếp các khung tiêu đề, nội dung, hình ảnh trên trang.',
      'Thêm trang mới: <b>Home → New Slide</b> và chọn bố cục.',
      'Đổi bố cục: <b>Home → Layout</b>. VD: Title Slide, Title and Content, Two Content.',
      'Gõ nội dung vào các <b>khung văn bản</b> có sẵn (placeholder).',
    ], 'Chọn <span class="k">Layout</span> phù hợp với nội dung từng trang.'),
    quiz: [
      { q: 'Lệnh thêm trang chiếu mới là:', o: ['New Slide', 'Delete Slide', 'Print', 'Save'], a: 0, why: 'Home → New Slide để thêm trang.' },
      { q: 'Bố cục dành cho trang tiêu đề là:', o: ['Blank', 'Two Content', 'Title Slide', 'Picture'], a: 2, why: 'Title Slide là bố cục trang tiêu đề.' } ] },
  { id: 't4', name: 'Chèn hình ảnh minh hoạ', tip: 'Một bức hình bằng cả trăm chữ!',
    html: KT([
      'Chèn ảnh: <b>Insert → Pictures</b>, chọn tệp ảnh rồi nháy <b>Insert</b>.',
      'Ảnh minh hoạ giúp bài trình chiếu <b>sinh động, hấp dẫn</b>, dễ hiểu hơn.',
      'Chọn ảnh <b>phù hợp nội dung</b>, rõ nét; không quá nhiều ảnh trên một trang.',
      'Khi dùng ảnh của người khác cần <b>ghi nguồn</b>, tôn trọng bản quyền.',
    ], 'Ảnh phải <span class="k">phù hợp nội dung</span>, có ghi nguồn.'),
    quiz: [
      { q: 'Lệnh chèn hình ảnh từ máy tính vào trang chiếu là:', o: ['Home → New Slide', 'Insert → Pictures', 'File → Print', 'Design → Themes'], a: 1, why: 'Insert → Pictures để chèn ảnh.' },
      { q: 'Khi chọn ảnh minh hoạ, em cần chú ý:', o: ['Càng nhiều ảnh càng tốt', 'Ảnh phù hợp nội dung, rõ nét', 'Ảnh mờ cũng được', 'Không cần liên quan'], a: 1, why: 'Ảnh cần phù hợp nội dung và rõ nét.' } ] },
  { id: 't5', name: 'Tạo và trình chiếu bài', tip: 'Nhấn F5 – sân khấu là của em!',
    html: KT([
      'Bài trình chiếu thường có: <b>trang tiêu đề</b> → các <b>trang nội dung</b> → <b>trang kết thúc</b>.',
      'Mỗi trang nên có <b>tiêu đề</b> và nội dung <b>ngắn gọn</b> (các ý chính).',
      'Trình chiếu từ đầu: nhấn <b>F5</b>; từ trang hiện tại: <b>Shift + F5</b>. Thoát: <b>Esc</b>.',
      'Lưu bài: <b>Ctrl + S</b>.',
    ], 'Nhấn <span class="k">F5</span> để trình chiếu, <span class="k">Esc</span> để thoát.'),
    quiz: [
      { q: 'Phím để trình chiếu từ trang đầu tiên là:', o: ['F2', 'F5', 'Esc', 'Tab'], a: 1, why: 'F5 trình chiếu từ đầu.' },
      { q: 'Nội dung trên mỗi trang chiếu nên:', o: ['Ngắn gọn, nêu ý chính', 'Chép cả bài văn dài', 'Không có tiêu đề', 'Toàn chữ in hoa'], a: 0, why: 'Trang chiếu nên ngắn gọn, nêu ý chính.' } ] },
];

const KEY = [
  'PowerPoint (<b>.pptx</b>); trang đầu là <b>trang tiêu đề</b>.',
  'Phân cấp: <b>Tab</b> tăng mức, <b>Shift+Tab</b> giảm.',
  '<b>New Slide</b>, <b>Layout</b>: bố cục trang.',
  '<b>Insert → Pictures</b> chèn ảnh phù hợp.',
  '<b>F5</b> trình chiếu, <b>Esc</b> thoát.',
];
