/* ===== BÀI 9a: TẠO ĐẦU TRANG, CHÂN TRANG CHO VĂN BẢN ===== */
const META = { key: 'bai9a', num: '9a', theme: 'lauda', title: 'Bài 9a. Tạo đầu trang, chân trang cho văn bản', big: 'Đầu trang,<br>chân trang',
  st2: 'Chủ đề 4 • Soạn thảo văn bản • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Mỗi trang sách như một tầng lâu đài – cùng gắn biển tên cho từng tầng nhé!',
  cert: 'Tin học 8 – Bài 9a. Đầu trang, chân trang', file: 'Tin8_Bai9a', pass: 8 };

const lines = (x, y, w, n, gap = 24) => [...Array(n)].map((_, i) => `<rect x="${x}" y="${y + i*gap}" width="${i === n - 1 ? w*.6 : w}" height="9" rx="4" fill="#ADB5BD"/>`).join('');
const page = (x, y, head, foot, hc = '#8338EC', fc = '#FF7F11') => `<rect x="${x + 7}" y="${y + 7}" width="160" height="220" rx="10" fill="#000" opacity=".15"/><rect x="${x}" y="${y}" width="160" height="220" rx="10" fill="#fff" ${ST}/>
  <rect x="${x + 6}" y="${y + 6}" width="148" height="30" rx="6" fill="${hc}" opacity=".25"/>${txt(x + 80, y + 28, head, 16, hc)}${lines(x + 16, y + 52, 128, 5, 22)}
  <rect x="${x + 6}" y="${y + 184}" width="148" height="30" rx="6" fill="${fc}" opacity=".25"/>${txt(x + 80, y + 206, foot, 16, fc)}`;
const ILL_T = {
  t1: () => svg(`${book(300, 150, 2.2)}${pillS(150, 40, 300, 46, '#8338EC', 'Tin học 8', 24)}${pillS(240, 300, 120, 46, '#FF7F11', '- 25 -', 24)}${arr(470, 63, 520, 63, O, 5)}${txt(528, 71, 'Đầu', 22, O, 'start')}${arr(370, 323, 420, 323, O, 5)}${txt(428, 331, 'Chân', 22, O, 'start')}`),
  t2: () => svg(`${page(40, 40, 'Báo cáo Tin học', 'Trang 1')}${page(220, 40, 'Báo cáo Tin học', 'Trang 2')}${page(400, 40, 'Báo cáo Tin học', 'Trang 3')}
    ${pillS(60, 300, 230, 48, '#8338EC', 'Header', 26)}${pillS(310, 300, 230, 48, '#FF7F11', 'Footer', 26)}${star(570, 380, 12, '#FFD60A')}`),
  t3: () => svg(`${winbox(30, 30, 540, 150, 'Insert', `${pillS(50, 90, 150, 50, '#8338EC', 'Header', 24)}${pillS(220, 90, 150, 50, '#FF7F11', 'Footer', 24)}${pillS(390, 90, 165, 50, '#2DA44E', 'Page Number', 20)}`, '#1982C4')}
    ${pillS(60, 220, 480, 52, '#8338EC', 'Nháy đúp để sửa', 26)}${pillS(30, 300, 540, 52, '#E5383B', 'Close Header and Footer', 26)}`),
  t4: () => svg(`${page(40, 30, 'Top of Page', '', '#1982C4', '#fff')}${txt(120, 140, '1', 60, '#1982C4')}${page(240, 30, '', 'Bottom of Page', '#fff', '#2DA44E')}${txt(320, 140, '2', 60, '#2DA44E')}
    ${G(500, 130, 1, `<rect x="-60" y="-60" width="120" height="120" rx="16" fill="#FFF3BF" ${ST}/><text x="0" y="-10" text-anchor="middle" font-size="22" fill="${O}" ${F}>Bắt đầu</text><text x="0" y="32" text-anchor="middle" font-size="40" fill="#E5383B" ${F}>5</text>`)}
    ${pillS(60, 310, 480, 52, '#8338EC', 'Format Page Numbers', 26)}`),
  t5: () => svg(`${page(50, 30, 'Trường THCS', 'Trang 1')}${crownI(400, 80, 1.2)}${[['#8338EC', 'Header: tên tài liệu'], ['#FF7F11', 'Footer: số trang']].map(([c, t], i) => tick(250, 190 + i*80, .8) + pillS(290, 164 + i*80, 280, 52, c, t, 22)).join('')}${star(560, 380, 12, '#FFD60A')}`),
};

const TOPICS = [
  { id: 't1', name: 'Điều gì lặp lại mỗi trang?', tip: 'Lật sách thử xem – có những dòng chữ trang nào cũng có đấy!',
    html: S4Q(['Lật SGK: tìm những gì <b>lặp lại</b> ở trên, dưới mỗi trang.', ''],
      ['Phía trên, phía dưới mỗi trang có gì?', 'Trên: tên sách, chủ đề; dưới: số trang.'],
      ['Những thông tin đó giúp gì người đọc?', 'Biết đang đọc phần nào, dễ tìm trang.'],
      ['Phần trên: <b>đầu trang</b>.', 'Phần dưới: <b>chân trang</b>.', 'Giúp <span class="k">dễ theo dõi</span>.']),
    quiz: [
      { q: 'Phần lề trên cùng, lặp lại ở mọi trang gọi là:', o: ['Chân trang', 'Đầu trang', 'Tiêu đề bảng', 'Chú thích'], a: 1, why: 'Đầu trang (Header) nằm ở lề trên của mọi trang.' },
      { q: 'Số trang thường được đặt ở:', o: ['Đầu trang hoặc chân trang', 'Giữa đoạn văn', 'Trong bảng', 'Trong hình ảnh'], a: 0, why: 'Số trang thường nằm ở đầu trang hoặc chân trang.' } ] },
  { id: 't2', name: 'Header và Footer', tip: 'Gõ một lần, hiện ở mọi trang – tiện như phép thuật!',
    html: S4Q(['Tìm hiểu nội dung thường có ở <b>Header</b> và <b>Footer</b>.', ''],
      ['Header, Footer thường chứa gì?', 'Tên tài liệu, tác giả, logo, ngày, số trang.'],
      ['Gõ một lần mà hiện ở mọi trang – tiện thế nào?', 'Không phải gõ lại từng trang.'],
      ['<b>Header</b>: đầu trang.', '<b>Footer</b>: chân trang.', 'Nội dung <span class="k">tự lặp lại</span> mọi trang.']),
    quiz: [
      { q: 'Footer là phần nào của trang văn bản?', o: ['Đầu trang', 'Lề trái', 'Chân trang', 'Giữa trang'], a: 2, why: 'Footer là chân trang, nằm ở lề dưới.' },
      { q: 'Nội dung trong đầu trang sẽ:', o: ['Chỉ hiện ở trang 1', 'Bị in ngược', 'Không in ra được', 'Hiện ở mọi trang'], a: 3, why: 'Đầu trang tự lặp lại trên tất cả các trang.' } ] },
  { id: 't3', name: 'Tạo đầu trang, chân trang', tip: 'Nhớ đóng Header and Footer để quay lại soạn thảo nhé!',
    html: S4Q(['Thêm <b>tên trường</b> vào đầu trang bài báo cáo.', ''],
      ['Các bước tạo đầu trang là gì?', 'Insert → <code>Header</code> → chọn mẫu → gõ nội dung.'],
      ['Sửa đầu trang và thoát ra thế nào?', 'Nháy đúp vào vùng đầu trang; xong bấm Close.'],
      ['Insert → <b>Header / Footer</b>.', 'Nháy đúp để <b>sửa</b>.', '<span class="k">Close Header and Footer</span>.']),
    quiz: [
      { q: 'Lệnh tạo đầu trang nằm ở:', o: ['Insert → Header', 'Home → Font', 'File → Print', 'View → Zoom'], a: 0, why: 'Thẻ Insert có nút Header và Footer.' },
      { q: 'Để sửa nội dung chân trang đã tạo, em:', o: ['Xoá trang', 'Nháy đúp vào vùng chân trang', 'Đổi phông chữ', 'Lưu tệp mới'], a: 1, why: 'Nháy đúp vào vùng chân trang để mở chế độ sửa.' } ] },
  { id: 't4', name: 'Đánh số trang', tip: 'Số trang tự tăng, không cần gõ từng trang!',
    html: S4Q(['Đánh số trang cho bài báo cáo <b>10 trang</b>.', ''],
      ['Chèn số trang thế nào?', 'Insert → <code>Page Number</code> → Top / Bottom of Page.'],
      ['Muốn số trang bắt đầu từ 5 thì làm gì?', 'Format Page Numbers → Start at: 5.'],
      ['<b>Page Number</b>: số trang.', '<b>Top</b>: đầu; <b>Bottom</b>: cuối trang.', 'Số trang <span class="k">tự động tăng</span>.']),
    quiz: [
      { q: 'Đặt số trang ở cuối trang, em chọn:', o: ['Top of Page', 'Page Margins', 'Bottom of Page', 'Page Color'], a: 2, why: 'Bottom of Page đặt số trang ở chân trang.' },
      { q: 'Muốn số trang bắt đầu từ 5, em dùng:', o: ['Insert Picture', 'Bullets', 'Sort', 'Format Page Numbers'], a: 3, why: 'Format Page Numbers → Start at để chọn số bắt đầu.' } ] },
  { id: 't5', name: 'Tổng kết bài học', tip: 'Đầu trang, chân trang làm văn bản sang trọng như lâu đài!',
    html: S4Q(['Hoàn thiện báo cáo có <b>đầu trang, chân trang, số trang</b>.', ''],
      ['Nên đặt gì ở Header, gì ở Footer?', 'Header: tên tài liệu; Footer: tác giả, số trang.'],
      ['Văn bản có đầu, chân trang trông thế nào?', 'Chuyên nghiệp, dễ tra cứu.'],
      ['<b>Header</b>: tên tài liệu.', '<b>Footer</b>: tác giả, số trang.', 'Văn bản <span class="k">chuyên nghiệp</span>.']),
    quiz: [
      { q: 'Header và Footer giúp văn bản:', o: ['Rối mắt hơn', 'Chuyên nghiệp, dễ theo dõi', 'Mất số trang', 'Không in được'], a: 1, why: 'Thông tin lặp lại giúp người đọc dễ theo dõi.' },
      { q: 'Lệnh Page Number nằm trong thẻ:', o: ['Insert', 'Home', 'Review', 'Data'], a: 0, why: 'Page Number nằm trong nhóm Header & Footer của thẻ Insert.' } ] },
];

const KEY = [
  '<b>Đầu trang</b> trên,<br><b>chân trang</b> dưới.',
  'Nội dung <b>lặp lại</b><br>mọi trang.',
  '<b>Insert → Header /<br>Footer</b>.',
  '<b>Page Number</b>:<br>số trang tự động.',
  'Văn bản<br><b>chuyên nghiệp</b>.',
];
