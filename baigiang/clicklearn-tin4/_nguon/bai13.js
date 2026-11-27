/* ===== BÀI 13: CHƠI VỚI MÁY TÍNH ===== */
const META = { key: 'bai13', num: 13, theme: 'mausac', ic: '🎮', cd: 6, en: 'Chơi với máy tính',
  title: 'Bài 13. Chơi với máy tính', big: 'Chơi với<br>máy tính',
  st2: 'Chủ đề 6 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Thế giới đầy màu sắc của Scratch đang chờ em! Cùng chơi và học nhé!',
  cert: 'Tin học 4 – Bài 13. Chơi với máy tính', file: 'Tin4_Bai13', pass: 8 };

const flag = (x, y, s = 1) => G(x, y, s, `<line x1="0" y1="-30" x2="0" y2="34" stroke="${O}" stroke-width="7" stroke-linecap="round"/><path d="M0 -30 Q20 -40 40 -30 Q60 -20 76 -28 V10 Q60 18 40 8 Q20 -2 0 8Z" fill="#2DA44E" ${ST}/>`);
const stopB = (x, y, s = 1) => G(x, y, s, `<path d="M-14 -34 H14 L34 -14 V14 L14 34 H-14 L-34 14 V-14Z" fill="#E5383B" ${ST}/>`);
const COVER = () => svgC(`${stageB(60, 40, 340, 230, `${sprite(230, 170, .8)}`)}${flag(470, 110, 1.1)}${stopB(500, 220, .9)}${star(560, 320, 14, '#FFD60A')}`);
const ILL_T = {
  t1: () => svg(`${winbox(30, 30, 540, 270, 'Scratch', `${sblock(60, 100, 170, '#FFAB19', 'khi bấm', 20)}${sblock(60, 160, 170, '#4C97FF', 'di chuyển', 20)}${stageB(290, 90, 250, 180, `${sprite(410, 200, .5)}`)}`, '#8338EC')}
    ${pillS(60, 330, 480, 54, '#8338EC', 'Phần mềm lập trình Scratch', 24)}`),
  t2: () => svg(`${winbox(40, 30, 520, 270, 'Settings', `${globe(140, 170, 50)}${pillS(220, 110, 300, 50, '#fff', 'English ▾', 22, 0, O)}${arr(370, 170, 370, 200, O, 6)}${pillS(220, 210, 300, 50, '#2DA44E', 'Tiếng Việt', 22)}`, '#1982C4')}
    ${pillS(40, 330, 520, 54, '#1982C4', 'Đổi ngôn ngữ sang tiếng Việt', 24)}`),
  t3: () => svg(`${winbox(40, 30, 520, 270, 'Tệp', `${pillS(80, 100, 300, 50, '#fff', 'Mở từ máy tính', 22, 0, O)}${cursor(340, 135, .8)}${fileI(470, 180, .9, '#8338EC', 'Trochoi')}`, '#8338EC')}
    ${pillS(40, 330, 520, 54, '#8338EC', 'Tệp → Mở từ máy tính', 26)}`),
  t4: () => svg(`${stageB(40, 30, 340, 250, `${sprite(160, 200, .7)}${star(300, 90, 26, '#FFD60A')}`)}${flag(440, 90, 1.2)}${stopB(470, 210, 1)}
    ${pillS(20, 320, 270, 50, '#2DA44E', 'Cờ xanh: bắt đầu', 22)}${pillS(310, 320, 270, 50, '#E5383B', 'Nút đỏ: dừng', 22)}`),
  t5: () => svg(`${vflow([['#8338EC', 'Mở Scratch, tiếng Việt'], ['#1982C4', 'Mở tệp trò chơi'], ['#2DA44E', 'Cờ xanh: chơi']], 130, 40, 340, 110, 24)}${star(60, 60, 14, '#FFD60A')}`),
};

const TOPICS = [
  { id: 't1', name: 'Làm quen với Scratch', tip: 'Scratch là phần mềm lập trình bằng cách ghép các khối lệnh!',
    html: S4Q(['Khởi động phần mềm <b>Scratch</b> trên máy tính.', 'Gợi ý: nháy đúp biểu tượng Scratch.'],
      ['Scratch là phần mềm gì?', 'Phần mềm <b>lập trình</b> bằng cách <b>ghép các khối lệnh</b> nhiều màu.'],
      ['Em dùng Scratch để làm gì?', 'Chơi, tạo <b>trò chơi</b>, câu chuyện, hoạt hình.'],
      ['<span class="k">Scratch</span>: lập trình kéo thả.', 'Khối lệnh <b>nhiều màu</b>.', 'Tạo <b>trò chơi, câu chuyện</b>.']),
    quiz: [
      { q: 'Scratch là phần mềm dùng để:', o: ['Soạn thảo văn bản', 'Lập trình bằng khối lệnh', 'Tìm kiếm thông tin', 'Luyện gõ phím'], a: 1, why: 'Scratch là phần mềm lập trình trực quan.' },
      { q: 'Để khởi động Scratch, em:', o: ['Nháy đúp biểu tượng Scratch', 'Nhấn F5', 'Nhấn Delete', 'Rút điện'], a: 0, why: 'Nháy đúp biểu tượng để mở phần mềm.' } ] },
  { id: 't2', name: 'Chuyển sang tiếng Việt', tip: 'Khối lệnh tiếng Việt – dễ hiểu hơn nhiều!',
    html: S4Q(['Đổi <b>ngôn ngữ</b> của Scratch sang tiếng Việt.', ''],
      ['Đổi ngôn ngữ ở đâu?', 'Nháy biểu tượng <b>quả địa cầu</b> 🌐 (hoặc Settings → Language).'],
      ['Chọn ngôn ngữ nào?', 'Chọn <b>Tiếng Việt</b> trong danh sách.'],
      ['Nháy <span class="k">quả địa cầu</span> 🌐.', 'Chọn <b>Tiếng Việt</b>.', 'Khối lệnh hiện <b>chữ Việt</b>.']),
    quiz: [
      { q: 'Để đổi ngôn ngữ trong Scratch, em nháy vào biểu tượng:', o: ['Cờ xanh', 'Nút đỏ', 'Quả địa cầu', 'Thùng rác'], a: 2, why: 'Biểu tượng quả địa cầu dùng để chọn ngôn ngữ.' },
      { q: 'Sau khi chọn Tiếng Việt, các khối lệnh hiện:', o: ['Chữ tiếng Anh', 'Không có chữ', 'Chữ số', 'Chữ tiếng Việt'], a: 3, why: 'Khối lệnh hiển thị bằng tiếng Việt.' } ] },
  { id: 't3', name: 'Mở tệp trò chơi', tip: 'Tệp → Mở từ máy tính → chọn tệp Trochoi!',
    html: S4Q(['Mở tệp trò chơi <b>Trochoi</b> thầy cô đã chuẩn bị.', ''],
      ['Mở tệp bằng cách nào?', 'Chọn <b>Tệp</b> → <b>Mở từ máy tính của bạn</b> → chọn tệp → <b>Open</b>.'],
      ['Tệp Scratch có đuôi gì?', 'Đuôi <b>.sb3</b>.'],
      ['<span class="k">Tệp → Mở từ máy tính</span>.', 'Chọn tệp rồi nháy <b>Open</b>.', 'Tệp Scratch đuôi <b>.sb3</b>.']),
    quiz: [
      { q: 'Tệp chương trình Scratch có đuôi:', o: ['.sb3', '.docx', '.pptx', '.png'], a: 0, why: 'Tệp Scratch có đuôi .sb3.' },
      { q: 'Để mở tệp trò chơi có sẵn, em chọn:', o: ['Tệp → Lưu về máy', 'Tệp → Mở từ máy tính của bạn', 'Chỉnh sửa', 'Hướng dẫn'], a: 1, why: 'Chọn Tệp → Mở từ máy tính để mở tệp.' } ] },
  { id: 't4', name: 'Chơi trò chơi', tip: 'Cờ xanh để bắt đầu – nút đỏ để dừng!',
    html: S4Q(['Chơi trò chơi điều khiển <b>nhân vật</b> trên sân khấu.', ''],
      ['Bắt đầu chơi bằng nút nào?', 'Nháy <b>lá cờ xanh</b> 🏁 phía trên sân khấu.'],
      ['Dừng trò chơi bằng nút nào?', 'Nháy <b>nút tròn đỏ</b> bên cạnh lá cờ.'],
      ['<span class="k">Cờ xanh</span>: bắt đầu.', '<b>Nút đỏ</b>: dừng lại.', 'Nhân vật hoạt động trên <b>sân khấu</b>.']),
    quiz: [
      { q: 'Để bắt đầu chạy chương trình Scratch, em nháy:', o: ['Nút đỏ', 'Quả địa cầu', 'Lá cờ xanh', 'Thùng rác'], a: 2, why: 'Lá cờ xanh dùng để bắt đầu.' },
      { q: 'Nhân vật trong Scratch hoạt động ở:', o: ['Thanh công cụ', 'Thùng rác', 'Bàn phím', 'Sân khấu'], a: 3, why: 'Nhân vật hoạt động trên sân khấu.' } ] },
  { id: 't5', name: 'Thoát phần mềm', tip: 'Ôn lại: tiếng Việt – mở tệp – cờ xanh – thoát!',
    html: S4Q(['Chơi xong, <b>thoát</b> phần mềm Scratch đúng cách.', ''],
      ['Thoát Scratch bằng cách nào?', 'Nháy nút <b>✕</b> ở góc trên bên phải cửa sổ.'],
      ['Chơi trò chơi trên máy tính cần chú ý gì?', 'Chơi <b>có giới hạn</b> thời gian, ưu tiên trò chơi <b>học tập</b>.'],
      ['Nút <span class="k">✕</span>: thoát phần mềm.', 'Chơi <b>có giới hạn</b>.', 'Chơi mà <b>học</b>.']),
    quiz: [
      { q: 'Để thoát phần mềm Scratch, em nháy:', o: ['Nút ✕ góc trên bên phải', 'Lá cờ xanh', 'Nút đỏ', 'Quả địa cầu'], a: 0, why: 'Nút ✕ đóng cửa sổ phần mềm.' },
      { q: 'Chơi trò chơi trên máy tính, em nên:', o: ['Chơi suốt ngày', 'Chơi có giới hạn, ưu tiên học tập', 'Bỏ học để chơi', 'Chơi trò bạo lực'], a: 1, why: 'Chơi có giới hạn để học tốt và khoẻ mạnh.' } ] },
];

const KEY = [
  'Scratch:<br><b>ghép khối lệnh</b>.',
  '🌐 chọn<br><b>Tiếng Việt</b>.',
  'Tệp → <b>Mở<br>từ máy tính</b>.',
  '<b>Cờ xanh</b> chạy,<br>nút đỏ dừng.',
  'Chơi <b>có<br>giới hạn</b>.',
];
