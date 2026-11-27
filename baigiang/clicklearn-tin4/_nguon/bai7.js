/* ===== BÀI 7: TẠO BÀI TRÌNH CHIẾU ===== */
const META = { key: 'bai7', num: 7, theme: 'nghinle', ic: '📽️', cd: 5, en: 'Tạo bài trình chiếu',
  title: 'Bài 7. Tạo bài trình chiếu', big: 'Tạo bài<br>trình chiếu',
  st2: 'Chủ đề 5 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Đêm nay trong cung điện, em sẽ tạo bài trình chiếu kể chuyện thật hay!',
  cert: 'Tin học 4 – Bài 7. Tạo bài trình chiếu', file: 'Tin4_Bai7', pass: 8 };

const COVER = () => svgC(`${slideT(50, 40, 300, 190, '#8338EC', 'Trường em', 28, 3)}${slideT(330, 110, 230, 150, '#FF7F11', 'Lớp 4A', 22, 2)}${star(560, 40, 14, '#FFD60A')}${star(50, 300, 12, '#FF006E')}`);
const ILL_T = {
  t1: () => svg(`${winbox(30, 30, 540, 280, 'PowerPoint', `${[0, 1, 2].map(i => slide(50, 90 + i*65, 90, 55, ['#8338EC', '#FF7F11', '#2DA44E'][i])).join('')}${slideT(170, 90, 370, 200, '#fff', 'Trang đang soạn', 22, 3)}`, '#E5383B')}
    ${pillS(20, 330, 270, 50, '#FF7F11', 'Bên trái: các trang', 20)}${pillS(310, 330, 270, 50, '#1982C4', 'Giữa: soạn trang', 20)}`),
  t2: () => svg(`${slideT(40, 40, 250, 170, '#8338EC', 'Tiêu đề', 24, 1)}${slideT(320, 40, 250, 170, '#1982C4', 'Tiêu đề + ND', 22, 3)}
    ${pillS(40, 240, 250, 46, '#8338EC', 'Title Slide', 22)}${pillS(320, 240, 250, 46, '#1982C4', 'Title and Content', 20)}${pillS(110, 330, 380, 50, '#2DA44E', 'Chọn bố cục: Layout', 24)}`),
  t3: () => svg(`${slide(60, 40, 480, 260, '#fff', `${txt(300, 100, 'Trường em', 36, '#8338EC')}${[0, 1, 2].map(i => `<circle cx="110" cy="${160 + i*44}" r="9" fill="#FF7F11"/><rect x="130" y="${152 + i*44}" width="${340 - i*60}" height="16" rx="8" fill="#ADB5BD"/>`).join('')}`)}
    ${pillS(60, 330, 480, 54, '#FF7F11', 'Gõ nội dung vào khung', 26)}`),
  t4: () => svg(`${key3d(60, 90, 220, 110, '#1982C4', '#145A8C', 'Ctrl + S', 40)}${fileI(430, 150, 1.2, '#E5383B', 'pptx')}
    ${pillS(60, 320, 480, 54, '#1982C4', 'Lưu bài với tên rõ nghĩa', 24)}`),
  t5: () => svg(`${vflow([['#E5383B', 'Mở PowerPoint'], ['#8338EC', 'Thêm trang, chọn bố cục'], ['#1982C4', 'Gõ nội dung, lưu']], 130, 40, 340, 110, 24)}${star(60, 60, 14, '#FFD60A')}`),
};

const TOPICS = [
  { id: 't1', name: 'Giao diện PowerPoint', tip: 'Bên trái là các trang nhỏ, giữa là trang đang soạn!',
    html: S4Q(['Mở <b>PowerPoint</b>, quan sát các vùng trên màn hình.', ''],
      ['Vùng bên trái màn hình hiện gì?', 'Hiện các <b>trang chiếu thu nhỏ</b> theo thứ tự.'],
      ['Vùng lớn ở giữa dùng để làm gì?', 'Để <b>soạn</b> nội dung trang chiếu đang chọn.'],
      ['Bên trái: <b>danh sách trang</b>.', 'Ở giữa: <span class="k">trang đang soạn</span>.', 'Phía trên: các <b>dải lệnh</b>.']),
    quiz: [
      { q: 'Trong PowerPoint, vùng bên trái hiển thị:', o: ['Các trang chiếu thu nhỏ', 'Bàn phím', 'Trình duyệt', 'Thùng rác'], a: 0, why: 'Bên trái là danh sách trang chiếu thu nhỏ.' },
      { q: 'Phần mềm dùng để tạo bài trình chiếu là:', o: ['Word', 'Paint', 'PowerPoint', 'Google'], a: 2, why: 'PowerPoint là phần mềm trình chiếu.' } ] },
  { id: 't2', name: 'Bố cục trang chiếu', tip: 'Mỗi trang có một cách sắp xếp gọi là bố cục!',
    html: S4Q(['Thêm trang mới và chọn <b>bố cục</b> có tiêu đề và nội dung.', ''],
      ['Bố cục (Layout) là gì?', 'Là cách <b>sắp xếp các khung</b> chữ, hình trên trang chiếu.'],
      ['Trang đầu thường dùng bố cục nào?', '<b>Title Slide</b> – trang tiêu đề.'],
      ['Bố cục = <span class="k">Layout</span>.', 'Trang đầu: <b>Title Slide</b>.', 'Trang sau: <b>Title and Content</b>.']),
    quiz: [
      { q: 'Bố cục dành cho trang tiêu đề là:', o: ['Blank', 'Title and Content', 'Two Content', 'Title Slide'], a: 3, why: 'Title Slide là bố cục trang tiêu đề.' },
      { q: 'Lệnh để chọn bố cục cho trang chiếu là:', o: ['Save', 'Layout', 'Delete', 'Print'], a: 1, why: 'Layout dùng để chọn bố cục.' } ] },
  { id: 't3', name: 'Nhập nội dung', tip: 'Mỗi ý một dòng, ngắn gọn dễ đọc nhé!',
    html: S4Q(['Tạo trang “<b>Trường em</b>” có 3 ý giới thiệu.', 'Gợi ý: tên trường, địa chỉ, điều em thích.'],
      ['Gõ nội dung vào đâu?', 'Nháy vào khung <b>Click to add text</b> rồi gõ.'],
      ['Muốn xuống dòng để viết ý mới, em nhấn gì?', 'Nhấn phím <b>Enter</b>.'],
      ['Gõ vào <span class="k">khung nội dung</span>.', '<b>Enter</b>: sang ý mới.', 'Mỗi ý <b>ngắn gọn</b>.']),
    quiz: [
      { q: 'Để viết ý mới trên dòng mới, em nhấn:', o: ['Phím cách', 'Enter', 'Esc', 'F5'], a: 1, why: 'Enter để xuống dòng, viết ý mới.' },
      { q: 'Nội dung trên trang chiếu nên:', o: ['Ngắn gọn, rõ ý', 'Thật dài, nhiều chữ', 'Không có chữ', 'Viết liền một khối'], a: 0, why: 'Ngắn gọn giúp người xem dễ theo dõi.' } ] },
  { id: 't4', name: 'Lưu bài trình chiếu', tip: 'Lưu ngay để không mất bài nhé!',
    html: S4Q(['Lưu bài trình chiếu với tên <b>Truong_em</b>.', ''],
      ['Lưu bài bằng cách nào?', 'Nhấn <b>Ctrl + S</b> (hoặc File → Save), chọn thư mục, gõ tên → Save.'],
      ['Tệp trình chiếu có phần mở rộng gì?', 'Thường là <b>.pptx</b>.'],
      ['<span class="k">Ctrl + S</span> để lưu.', 'Đặt tên <b>rõ nghĩa</b>.', 'Tệp có đuôi <b>.pptx</b>.']),
    quiz: [
      { q: 'Phím tắt để lưu bài trình chiếu là:', o: ['Ctrl + C', 'Ctrl + V', 'Ctrl + S', 'F5'], a: 2, why: 'Ctrl + S để lưu (Save).' },
      { q: 'Tệp bài trình chiếu PowerPoint thường có đuôi:', o: ['.docx', '.png', '.mp3', '.pptx'], a: 3, why: 'Tệp PowerPoint có đuôi .pptx.' } ] },
  { id: 't5', name: 'Bài trình chiếu của em', tip: 'Ôn lại: mở – bố cục – nội dung – lưu!',
    html: S4Q(['Tạo bài trình chiếu <b>3 trang</b> giới thiệu về em.', ''],
      ['Các bước tạo bài trình chiếu là gì?', 'Mở PowerPoint → <b>trang tiêu đề</b> → <b>New Slide</b>, chọn bố cục → gõ nội dung → <b>lưu</b>.'],
      ['Trình chiếu thử bằng phím nào?', 'Phím <b>F5</b>.'],
      ['<b>New Slide</b> thêm trang.', 'Chọn <span class="k">bố cục</span> phù hợp.', '<b>Ctrl + S</b> lưu, <b>F5</b> trình chiếu.']),
    quiz: [
      { q: 'Lệnh để thêm trang chiếu mới là:', o: ['New Slide', 'Layout', 'Save', 'Close'], a: 0, why: 'New Slide thêm trang chiếu mới.' },
      { q: 'Phím F5 trong PowerPoint dùng để:', o: ['Lưu bài', 'Trình chiếu', 'Xoá trang', 'Đổi phông chữ'], a: 1, why: 'F5 trình chiếu từ trang đầu.' } ] },
];

const KEY = [
  'Trái: trang nhỏ<br>Giữa: <b>soạn</b>.',
  'Bố cục là<br><b>Layout</b>.',
  'Gõ vào khung,<br><b>Enter</b> ý mới.',
  '<b>Ctrl + S</b><br>lưu .pptx.',
  'Thêm trang,<br>lưu, <b>F5</b>.',
];
