/* ===== BÀI 11: BÀI TRÌNH CHIẾU CỦA EM ===== */
const META = { key: 'bai11', num: 11, theme: 'nghinle', ic: '📽️', cd: 5, en: 'Bài trình chiếu của em',
  title: 'Bài 11. Bài trình chiếu của em', big: 'Bài trình chiếu<br>của em',
  st2: 'Chủ đề 5 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Đêm nay trong cung điện, em sẽ kể chuyện bằng bài trình chiếu thật hay!',
  cert: 'Tin học 3 – Bài 11. Bài trình chiếu của em', file: 'Tin3_Bai11', pass: 8 };

const COVER = () => svgC(`${slideT(60, 50, 300, 200, '#FF7F11', 'Gia đình em', 26, 3)}${slideT(330, 120, 220, 150, '#1982C4', 'Bố em', 22, 2)}${star(560, 40, 14, '#FFD60A')}${star(40, 320, 12, '#FF006E')}`);
const ILL_T = {
  t1: () => svg(`${monitor(60, 50, 240, 150, `${slideT(80, 65, 200, 120, '#8338EC', 'Lớp 3A', 20, 2)}`)}${slideT(370, 40, 180, 110, '#FF7F11', 'Trang 1', 20, 1)}${slideT(400, 170, 180, 110, '#2DA44E', 'Trang 2', 20, 1)}
    ${pillS(60, 330, 480, 54, '#8338EC', 'Phần mềm trình chiếu', 26)}`),
  t2: () => svg(`${slide(60, 40, 480, 270, '#fff', `<rect x="100" y="80" width="400" height="80" rx="8" fill="none" stroke="${O}" stroke-width="4" stroke-dasharray="10 8"/>${txt(300, 132, 'Click to add title', 30, '#6C757D')}<rect x="150" y="200" width="300" height="60" rx="8" fill="none" stroke="${O}" stroke-width="4" stroke-dasharray="10 8"/>${txt(300, 240, 'Click to add subtitle', 22, '#6C757D')}`)}
    ${pillS(80, 335, 440, 50, '#FF7F11', 'Trang tiêu đề', 26)}`),
  t3: () => svg(`${pillS(40, 50, 220, 60, '#2DA44E', '+ New Slide', 26)}${cursor(210, 90, .8)}${arr(270, 80, 330, 80, O, 7)}
    ${slideT(350, 40, 200, 120, '#1982C4', 'Trang 2', 20, 2)}${slideT(370, 180, 200, 120, '#FF006E', 'Trang 3', 20, 2)}${pillS(60, 335, 480, 50, '#2DA44E', 'Thêm trang chiếu mới', 24)}`),
  t4: () => svg(`${monitor(130, 40, 340, 210, `${slideT(140, 50, 320, 190, '#FF7F11', 'Gia đình em', 30, 3)}`)}${key3d(30, 120, 80, 80, '#FFC300', '#B4520A', 'F5', 34, O)}
    ${pillS(80, 340, 440, 50, '#8338EC', 'Trình chiếu toàn màn hình', 22)}`),
  t5: () => svg(`${vflow([['#8338EC', 'Mở phần mềm'], ['#FF7F11', 'Gõ tiêu đề, nội dung'], ['#2DA44E', 'Trình chiếu (F5)']], 140, 40, 320, 110, 24)}${star(60, 60, 14, '#FFD60A')}`),
};

const TOPICS = [
  { id: 't1', name: 'Phần mềm trình chiếu', tip: 'Bài trình chiếu giúp em kể chuyện bằng chữ và hình!',
    html: S4Q(['Em muốn giới thiệu <b>gia đình em</b> cho cả lớp. Dùng gì cho hấp dẫn?', ''],
      ['Phần mềm trình chiếu dùng để làm gì?', 'Tạo các <b>trang chiếu</b> có chữ, hình ảnh để trình bày.'],
      ['Kể tên một phần mềm trình chiếu?', '<b>PowerPoint</b> (Microsoft PowerPoint).'],
      ['Bài trình chiếu gồm nhiều <span class="k">trang chiếu</span>.', 'Có <b>chữ, hình ảnh</b>.', 'Phần mềm: <b>PowerPoint</b>.']),
    quiz: [
      { q: 'Phần mềm nào dùng để tạo bài trình chiếu?', o: ['Paint', 'PowerPoint', 'Máy tính bỏ túi', 'File Explorer'], a: 1, why: 'PowerPoint là phần mềm trình chiếu.' },
      { q: 'Bài trình chiếu được tạo thành từ các:', o: ['Trang chiếu', 'Con chuột', 'Bàn phím', 'Thư mục'], a: 0, why: 'Bài trình chiếu gồm nhiều trang chiếu (slide).' } ] },
  { id: 't2', name: 'Trang tiêu đề', tip: 'Trang đầu tiên ghi tên bài thật nổi bật nhé!',
    html: S4Q(['Mở PowerPoint, tạo <b>trang tiêu đề</b> cho bài “Gia đình em”.', ''],
      ['Gõ tiêu đề vào đâu?', 'Nháy vào khung <b>Click to add title</b> rồi gõ.'],
      ['Khung “Click to add subtitle” để làm gì?', 'Gõ <b>tiêu đề phụ</b>, ví dụ tên em, lớp em.'],
      ['Trang đầu là <span class="k">trang tiêu đề</span>.', 'Gõ vào khung <b>title</b>.', 'Khung <b>subtitle</b>: tên, lớp em.']),
    quiz: [
      { q: 'Để gõ tên bài, em nháy vào khung:', o: ['Click to add subtitle', 'Thanh công cụ', 'Click to add title', 'Nút đóng'], a: 2, why: 'Khung Click to add title dùng để gõ tiêu đề.' },
      { q: 'Trang chiếu đầu tiên của bài trình chiếu thường là:', o: ['Trang cuối', 'Trang hình ảnh', 'Trang trống', 'Trang tiêu đề'], a: 3, why: 'Trang đầu tiên thường là trang tiêu đề.' } ] },
  { id: 't3', name: 'Thêm trang chiếu', tip: 'Muốn kể thêm? Thêm trang mới thôi!',
    html: S4Q(['Thêm trang giới thiệu <b>bố, mẹ</b> của em.', 'Gợi ý: tìm nút New Slide.'],
      ['Thêm trang chiếu mới bằng cách nào?', 'Chọn <b>Home</b> → nháy <b>New Slide</b>.'],
      ['Trang mới có những khung nào?', 'Khung <b>tiêu đề</b> và khung <b>nội dung</b>.'],
      ['Nháy <span class="k">New Slide</span>.', 'Gõ tiêu đề và <b>nội dung</b>.', 'Mỗi trang <b>một ý</b>.']),
    quiz: [
      { q: 'Nút dùng để thêm trang chiếu mới là:', o: ['New Slide', 'Delete', 'Save', 'Close'], a: 0, why: 'New Slide nghĩa là trang chiếu mới.' },
      { q: 'Mỗi trang chiếu nên trình bày:', o: ['Thật nhiều chữ', 'Một ý chính', 'Không có chữ', 'Mọi thứ cùng lúc'], a: 1, why: 'Mỗi trang một ý giúp người xem dễ hiểu.' } ] },
  { id: 't4', name: 'Trình chiếu và lưu bài', tip: 'Nhấn F5 – bài của em hiện to trên màn hình!',
    html: S4Q(['Trình chiếu bài “Gia đình em” cho các bạn xem.', ''],
      ['Trình chiếu bằng cách nào?', 'Nhấn phím <b>F5</b>; nhấn → hoặc nháy chuột để sang trang.'],
      ['Lưu bài trình chiếu thế nào?', 'Nhấn <b>Ctrl + S</b> (hoặc File → Save), đặt tên rồi lưu.'],
      ['<span class="k">F5</span>: trình chiếu.', 'Phím <b>Esc</b>: thoát trình chiếu.', '<b>Ctrl + S</b>: lưu bài.']),
    quiz: [
      { q: 'Để trình chiếu từ trang đầu, em nhấn phím:', o: ['F5', 'Enter', 'Delete', 'Phím cách'], a: 0, why: 'Phím F5 trình chiếu từ trang đầu.' },
      { q: 'Để thoát khỏi chế độ trình chiếu, em nhấn:', o: ['F5', 'A', 'Esc', 'Ctrl + S'], a: 2, why: 'Phím Esc để thoát trình chiếu.' } ] },
  { id: 't5', name: 'Em là người thuyết trình', tip: 'Ôn lại: mở – gõ – thêm trang – trình chiếu!',
    html: S4Q(['Nêu các bước tạo <b>bài trình chiếu</b> của em.', ''],
      ['Các bước tạo bài trình chiếu là gì?', 'Mở PowerPoint → trang tiêu đề → <b>thêm trang</b> → gõ nội dung → <b>lưu</b>.'],
      ['Khi trình bày trước lớp, em cần gì?', 'Nói <b>to, rõ</b>, nhìn các bạn, tự tin.'],
      ['Tạo <b>trang tiêu đề</b>.', 'Thêm trang, gõ <span class="k">nội dung</span>.', 'Lưu và <b>trình chiếu</b>.']),
    quiz: [
      { q: 'Phím tắt để lưu bài trình chiếu là:', o: ['F5', 'Esc', 'Delete', 'Ctrl + S'], a: 3, why: 'Ctrl + S dùng để lưu bài.' },
      { q: 'Khi thuyết trình, em nên:', o: ['Nói nhỏ, cúi đầu', 'Nói to, rõ, tự tin', 'Quay lưng lại lớp', 'Đọc thật nhanh'], a: 1, why: 'Nói to, rõ và tự tin giúp các bạn dễ theo dõi.' } ] },
];

const KEY = [
  'Phần mềm<br><b>PowerPoint</b>.',
  'Gõ vào<br><b>Click to add title</b>.',
  'Nháy<br><b>New Slide</b>.',
  '<b>F5</b> trình chiếu,<br>Ctrl + S lưu.',
  'Thuyết trình<br><b>tự tin</b>.',
];
