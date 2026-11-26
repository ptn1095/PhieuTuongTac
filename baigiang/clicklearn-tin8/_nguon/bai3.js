/* ===== BÀI 3: THỰC HÀNH – KHAI THÁC THÔNG TIN SỐ ===== */
const META = { key: 'bai3', num: 3, theme: 'daiduong', title: 'Bài 3. Thực hành: Khai thác thông tin số', big: 'Khai thác<br>thông tin số',
  st2: 'Chủ đề 2 • Thực hành • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Cùng lặn xuống đại dương thông tin để tìm “ngọc quý” nhé!',
  cert: 'Tin học 8 – Bài 3. Thực hành: Khai thác thông tin số', file: 'Tin8_Bai3', pass: 8 };

const searchBar = (y, t) => `<rect x="60" y="${y}" width="420" height="56" rx="28" fill="#fff" stroke="${O}" stroke-width="5"/>${txt(84, y + 37, t, 24, '#1982C4', 'start')}<circle cx="520" cy="${y + 28}" r="28" fill="#FF7F11" stroke="${O}" stroke-width="5"/><circle cx="516" cy="${y + 24}" r="10" fill="none" stroke="#fff" stroke-width="5"/><line x1="523" y1="${y + 31}" x2="532" y2="${y + 40}" stroke="#fff" stroke-width="5" stroke-linecap="round"/>`;
const ILL_T = {
  t1: () => svg(`${person(130, 230, 1.1, '#1982C4')}${bubble(240, 50, 320, 80, '#FFF3BF', 'Mình cần tìm gì?', 28)}${mag(330, 210, .9)}
    ${pillS(60, 340, 480, 52, '#2DA44E', 'Xác định rõ mục đích', 26)}${star(560, 180, 12, '#FFD60A')}`),
  t2: () => svg(`${searchBar(60, '"thời tiết Hà Nội"')}${tlist([[1, '#2DA44E', 'Ngắn gọn, đúng trọng tâm'], [1, '#1982C4', 'Dùng "…" tìm cụm chính xác'], [0, '#E5383B', 'Gõ câu dài lan man']], 190, 80, 22)}`),
  t3: () => svg(`${winbox(30, 30, 540, 330, 'sogd.gov.vn', `${['Trang chủ', 'Tuyển sinh', 'Tin tức'].map((t, i) => pillS(50 + i*170, 90, 160, 46, i === 1 ? '#FF7F11' : '#1982C4', t, 22)).join('')}
    ${paper(60, 160, 480, 170, `${txt(80, 210, 'Kế hoạch tuyển sinh lớp 10', 24, O, 'start')}${txt(80, 250, 'Ngày đăng: 15/3', 22, '#E5383B', 'start')}${shieldI(480, 280, .45, '#2DA44E')}`)}`, '#2DA44E')}`),
  t4: () => svg(`<rect x="30" y="30" width="540" height="300" rx="20" fill="#D8F3DC" stroke="${O}" stroke-width="6"/><path d="M30 200 H570 M260 30 V330 M30 90 Q300 130 570 70" fill="none" stroke="#fff" stroke-width="22"/><path d="M90 250 Q200 240 260 200 T470 110" fill="none" stroke="#3A8DFF" stroke-width="10" stroke-dasharray="4 16" stroke-linecap="round"/>
    ${G(90, 250, 1, `<path d="M0 0 C-30 -30 -26 -62 0 -62 C26 -62 30 -30 0 0Z" fill="#E5383B" stroke="${O}" stroke-width="5"/><circle cx="0" cy="-40" r="9" fill="#fff"/>`)}${G(470, 110, 1, `<path d="M0 0 C-30 -30 -26 -62 0 -62 C26 -62 30 -30 0 0Z" fill="#2DA44E" stroke="${O}" stroke-width="5"/><circle cx="0" cy="-40" r="9" fill="#fff"/>`)}
    ${pillS(90, 350, 420, 52, '#8338EC', '2,5 km • khoảng 10 phút', 24)}`),
  t5: () => svg(`${vflow([['#1982C4', '1. Xác định nhu cầu'], ['#FF7F11', '2. Chọn từ khoá'], ['#2DA44E', '3. Chọn trang tin cậy'], ['#8338EC', '4. Chọn lọc, ghi nguồn']], 140, 16, 320, 100, 22)}`),
};

const TOPICS = [
  { id: 't1', name: 'Em cần tìm gì?', tip: 'Biết rõ mình cần gì thì “lặn” một lần là bắt được ngọc!',
    html: S4('Em muốn biết <b>thời tiết ngày mai</b> hoặc <b>lịch tuyển sinh lớp 10</b>.',
      'Trước khi tìm, xác định rõ <b>câu hỏi</b> và <b>loại thông tin</b> cần có.',
      'Nên tìm ở trang web nào để có thông tin chính xác?',
      'Xác định rõ <span class="k">mục đích</span> giúp tìm nhanh và đúng.'),
    quiz: [
      { q: 'Bước đầu tiên khi khai thác thông tin số là:', o: ['Chia sẻ ngay', 'Xác định rõ thông tin cần tìm', 'Mở thật nhiều trang', 'Tắt máy tính'], a: 1, why: 'Biết rõ cần tìm gì giúp tìm nhanh và đúng.' },
      { q: 'Muốn biết thời tiết chính xác, em nên xem ở đâu?', o: ['Trang dự báo khí tượng chính thức', 'Bình luận trên mạng', 'Tin nhắn lạ', 'Trò chơi trực tuyến'], a: 0, why: 'Trang của cơ quan khí tượng là nguồn chính thống.' } ] },
  { id: 't2', name: 'Chọn từ khoá thông minh', tip: 'Từ khoá như chiếc lưới: đúng kích cỡ mới bắt đúng cá!',
    html: S4('Gõ từ khoá vào <b>máy tìm kiếm</b> (Google, Bing, Cốc Cốc…).',
      'Từ khoá ngắn gọn, đúng trọng tâm: <code>thời tiết Hà Nội</code>.',
      'Đặt cụm từ trong dấu <code>"…"</code> để tìm đúng cụm từ đó. Hãy thử!',
      'Từ khoá <span class="k">phù hợp</span> cho kết quả chính xác hơn.'),
    quiz: [
      { q: 'Từ khoá nào tốt nhất để tìm thời tiết Đà Nẵng?', o: ['tôi muốn biết nhiều thứ', 'trời', 'thời tiết Đà Nẵng', 'xem cái này'], a: 2, why: 'Từ khoá ngắn gọn, nêu đúng điều cần tìm.' },
      { q: 'Để tìm chính xác một cụm từ, em đặt nó trong:', o: ['Dấu ngoặc tròn ( )', 'Dấu chấm than !', 'Dấu phẩy ,', 'Dấu ngoặc kép " "'], a: 3, why: 'Dấu ngoặc kép giúp tìm đúng cả cụm từ.' } ] },
  { id: 't3', name: 'Khai thác trang web tin cậy', tip: 'Trang chính thống giống rạn san hô – nơi có nhiều “ngọc thật”!',
    html: S4('Tra cứu thông tin <b>tuyển sinh</b> trên trang web của Sở Giáo dục.',
      'Dùng <b>thanh menu</b>, ô <b>tìm kiếm</b> của trang web; đọc kĩ <b>ngày đăng</b>.',
      'Thông tin của năm trước có dùng được cho năm nay không?',
      'Chọn trang <span class="k">chính thống</span>, thông tin còn mới.'),
    quiz: [
      { q: 'Tra cứu tuyển sinh lớp 10, nguồn tin cậy nhất là:', o: ['Diễn đàn ẩn danh', 'Video không rõ nguồn', 'Trang web Sở Giáo dục', 'Tin nhắn chuyển tiếp'], a: 2, why: 'Trang của Sở Giáo dục là nguồn chính thống.' },
      { q: 'Khi đọc tin trên web, em cần chú ý:', o: ['Màu chữ đẹp', 'Ngày đăng thông tin', 'Số quảng cáo', 'Hình nền trang'], a: 1, why: 'Ngày đăng cho biết thông tin còn mới hay đã cũ.' } ] },
  { id: 't4', name: 'Bản đồ số chỉ đường', tip: 'Bản đồ số giống la bàn của thuyền trưởng đó!',
    html: S4('Tìm đường từ <b>nhà em</b> đến <b>thư viện</b> bằng bản đồ số.',
      'Nhập <b>điểm đi, điểm đến</b>; chọn phương tiện; xem <b>quãng đường, thời gian</b>.',
      'Bản đồ số giúp gì khi đi du lịch, khi đường bị tắc?',
      'Bản đồ số là <span class="k">thông tin số</span> rất hữu ích.'),
    quiz: [
      { q: 'Bản đồ số cho em biết điều gì?', o: ['Điểm thi của em', 'Mật khẩu wifi', 'Bài hát hay nhất', 'Đường đi, thời gian dự kiến'], a: 3, why: 'Bản đồ số chỉ đường đi, quãng đường và thời gian.' },
      { q: 'Để tìm đường trên bản đồ số, em cần nhập:', o: ['Điểm đi và điểm đến', 'Tên bài hát', 'Số điện thoại', 'Ngày sinh'], a: 0, why: 'Cần có điểm đi và điểm đến để bản đồ tìm đường.' } ] },
  { id: 't5', name: 'Tổng kết bài học', tip: 'Bốn bước khai thác thông tin – nhớ kĩ nhé!',
    html: S4('Nêu các bước <b>khai thác thông tin số</b>.',
      'Xác định nhu cầu → chọn <b>từ khoá</b> → chọn <b>trang tin cậy</b>.',
      'Đọc, chọn lọc, <b>đối chiếu</b>; ghi rõ nguồn khi sử dụng.',
      'Khai thác thông tin số <span class="k">có trách nhiệm</span>.'),
    quiz: [
      { q: 'Khi dùng thông tin từ Internet cho bài làm, em nên:', o: ['Ghi rõ nguồn', 'Nhận là của mình', 'Không cần ghi gì', 'Xoá tên tác giả'], a: 0, why: 'Ghi nguồn là tôn trọng tác giả và bản quyền.' },
      { q: 'Thứ tự hợp lí khi khai thác thông tin số:', o: ['Chia sẻ → tìm → đọc', 'Đọc → xác định nhu cầu → tìm', 'Xác định nhu cầu → tìm → chọn lọc', 'Tìm → chia sẻ → kiểm tra'], a: 2, why: 'Xác định nhu cầu, tìm kiếm rồi chọn lọc thông tin.' } ] },
];

const KEY = [
  'Xác định rõ<br><b>mục đích</b> tìm.',
  'Từ khoá ngắn,<br>dùng <b>"…"</b>.',
  'Trang <b>chính thống</b>,<br>tin còn mới.',
  '<b>Bản đồ số</b><br>chỉ đường đi.',
  'Chọn lọc,<br><b>ghi nguồn</b>.',
];
