/* ===== BÀI 10: HOÀN THIỆN BẢNG TÍNH ===== */
const META = { key: 'bai10', num: 10, theme: 'chibi', title: 'Bài 10. Hoàn thiện bảng tính', big: 'Hoàn thiện<br>bảng tính',
  st2: 'Chủ đề 4 • 5 phần kiến thức cần nhớ • 10 câu đố • giấy chứng nhận',
  hello: 'Cùng các bạn thú cưng hoàn thiện và in bảng tính nhé!',
  cert: 'Tin học 7 – Bài 10. Hoàn thiện bảng tính', file: 'Tin7_Bai10', pass: 8 };

const tab = (x, y, t, on) => `<path d="M${x} ${y} h150 l-14 40 h-122Z" fill="${on ? '#fff' : '#CED4DA'}" stroke="${O}" stroke-width="4" stroke-linejoin="round" transform="scale(1 -1) translate(0 ${-2*y})"/><text x="${x + 75}" y="${y - 12}" text-anchor="middle" font-size="22" fill="${on ? '#2DA44E' : O}" ${F}>${t}</text>`;
const ILL_T = {
  t1: () => svg(`${winbox(30, 30, 540, 220, 'Bảng tính', grid(50, 90, [['', 'A', 'B'], ['1', '', ''], ['2', '', '']], [40, 220, 220], 46, 20), '#2DA44E')}
    ${tab(40, 300, 'Sheet1', true)}${tab(190, 300, 'Lop7A', false)}${tab(340, 300, 'Lop7B', false)}${ball(530, 285, 24, '#2DA44E', '+', 34)}
    ${pillS(80, 345, 440, 50, '#8338EC', 'Nhiều trang tính', 26)}`),
  t2: () => svg(`${tab(60, 90, 'Sheet1', true)}${arr(230, 70, 300, 70, O, 6)}${tab(320, 90, 'Lop7A', true)}
    ${[['#2DA44E', 'Insert: thêm'], ['#1982C4', 'Rename: đổi tên'], ['#E5383B', 'Delete: xoá'], ['#FF7F11', 'Kéo thả: đổi vị trí']].map(([c, t], i) => pillS(30 + (i % 2)*280, 160 + Math.floor(i/2)*90, 260, 56, c, t, 22)).join('')}`),
  t3: () => svg(`${grid(30, 30, [['', 'A', 'B'], ['1', 'Toán', '9'], ['2', 'Văn', '8']], [50, 140, 100], 56, 22)}${arr(330, 110, 380, 110, '#FF7F11', 7)}${grid(390, 30, [['', 'A', 'B'], ['1', 'Toán', '9'], ['2', 'Văn', '8']], [40, 80, 60], 56, 20)}
    ${pillS(30, 250, 540, 54, '#1982C4', 'Ctrl + C rồi Ctrl + V (cả sang trang khác)', 22)}${pillS(80, 330, 440, 50, '#2DA44E', 'Sao chép dữ liệu', 26)}`),
  t4: () => svg(`${paper(60, 40, 170, 230)}${txt(145, 300, 'Portrait', 26)}${paper(300, 80, 240, 170)}${txt(420, 300, 'Landscape', 26)}
    ${pillS(80, 340, 440, 54, '#8338EC', 'Page Layout: hướng giấy, lề', 24)}`),
  t5: () => svg(`${printer(150, 170, 1.1)}${monitor(430, 150, .8, '#fff', `${[-40, -18, 4, 26].map(d => `<rect x="-70" y="${d}" width="140" height="10" rx="5" fill="#ADB5BD"/>`).join('')}`)}
    ${pillS(30, 320, 260, 54, '#1982C4', 'Ctrl + P', 30)}${pillS(310, 320, 260, 54, '#2DA44E', 'Xem trước khi in', 24)}`),
};

const TOPICS = [
  { id: 't1', name: 'Bảng tính nhiều trang tính', tip: 'Một tệp có nhiều trang, mỗi trang một lớp – thật gọn!',
    html: KT([
      'Một <b>tệp bảng tính</b> (bảng tính) có thể gồm <b>nhiều trang tính</b>.',
      'Tên trang tính hiện trên các <b>thẻ (tab)</b> ở phía dưới, VD Sheet1, Sheet2.',
      'Trang tính đang làm việc là <b>trang tính hoạt động</b>, thẻ của nó có màu khác.',
      'Nháy chuột vào thẻ để <b>chuyển</b> sang trang tính khác.',
    ], 'Dùng nhiều trang tính để <span class="k">tổ chức dữ liệu</span> gọn gàng.'),
    quiz: [
      { q: 'Một tệp bảng tính có thể có:', o: ['Chỉ một trang tính', 'Nhiều trang tính', 'Không có trang tính', 'Chỉ hai trang tính'], a: 1, why: 'Một bảng tính có thể gồm nhiều trang tính.' },
      { q: 'Muốn chuyển sang trang tính khác, em:', o: ['Nháy vào thẻ tên trang tính', 'Nhấn Delete', 'Tắt máy', 'Nhấn F2'], a: 0, why: 'Nháy vào thẻ tên trang tính phía dưới.' } ] },
  { id: 't2', name: 'Làm việc với trang tính', tip: 'Đặt tên trang tính rõ ràng thì tìm dữ liệu nhanh!',
    html: KT([
      '<b>Thêm</b> trang tính: nháy nút <b>⊕</b> cạnh các thẻ (hoặc chuột phải → Insert).',
      '<b>Đổi tên</b>: nháy đúp thẻ hoặc chuột phải → <b>Rename</b>, gõ tên mới.',
      '<b>Xoá</b>: chuột phải vào thẻ → <b>Delete</b>.',
      '<b>Đổi vị trí</b>: kéo thả thẻ sang trái/phải; <b>sao chép</b>: chuột phải → Move or Copy.',
    ], 'Chuột phải vào thẻ trang tính để <span class="k">thêm, đổi tên, xoá</span>.'),
    quiz: [
      { q: 'Lệnh đổi tên trang tính là:', o: ['Delete', 'Insert', 'Rename', 'Print'], a: 2, why: 'Rename là đổi tên.' },
      { q: 'Để đổi vị trí trang tính, em:', o: ['Gõ lại toàn bộ', 'Kéo thả thẻ trang tính', 'Nhấn Ctrl + P', 'Xoá trang tính'], a: 1, why: 'Kéo thả thẻ để đổi vị trí trang tính.' } ] },
  { id: 't3', name: 'Sao chép, di chuyển dữ liệu', tip: 'Ctrl+C, Ctrl+X, Ctrl+V – bộ ba phím thần kì!',
    html: KT([
      '<b>Sao chép</b>: chọn ô/khối ô → <b>Ctrl + C</b> → chọn ô đích → <b>Ctrl + V</b>.',
      '<b>Di chuyển</b>: chọn ô/khối ô → <b>Ctrl + X</b> → chọn ô đích → <b>Ctrl + V</b>.',
      'Có thể sao chép, di chuyển dữ liệu <b>sang trang tính khác</b>.',
      'Sao chép ô chứa công thức thì <b>công thức</b> cũng được sao chép (địa chỉ tự điều chỉnh).',
    ], 'Sao chép <span class="k">giữ bản gốc</span>; di chuyển <span class="k">bỏ bản gốc</span>.'),
    quiz: [
      { q: 'Sau khi di chuyển (Ctrl + X, Ctrl + V), dữ liệu ở ô cũ:', o: ['Vẫn còn', 'Không còn', 'Nhân đôi', 'Thành công thức'], a: 1, why: 'Di chuyển thì ô cũ không còn dữ liệu.' },
      { q: 'Có thể sao chép dữ liệu sang trang tính khác không?', o: ['Được', 'Không được', 'Chỉ được với số', 'Chỉ được với chữ'], a: 0, why: 'Có thể sao chép, di chuyển dữ liệu sang trang tính khác.' } ] },
  { id: 't4', name: 'Thiết lập trang in', tip: 'Bảng nhiều cột thì xoay ngang trang giấy nhé!',
    html: KT([
      'Thẻ <b>Page Layout</b> để thiết lập trang in.',
      '<b>Orientation</b>: hướng giấy – <b>Portrait</b> (đứng) hoặc <b>Landscape</b> (ngang).',
      '<b>Margins</b>: lề trang; <b>Size</b>: khổ giấy (thường A4).',
      'Bảng có <b>nhiều cột</b> nên chọn giấy <b>nằm ngang</b> để in đủ.',
    ], 'Thiết lập trang in ở thẻ <span class="k">Page Layout</span>.'),
    quiz: [
      { q: 'Hướng giấy nằm ngang là:', o: ['Portrait', 'Landscape', 'Margins', 'Size'], a: 1, why: 'Landscape là hướng giấy ngang.' },
      { q: 'Lệnh thay đổi lề trang in là:', o: ['Margins', 'Orientation', 'Merge', 'Borders'], a: 0, why: 'Margins là lề trang.' } ] },
  { id: 't5', name: 'In bảng tính', tip: 'Xem trước khi in để tiết kiệm giấy!',
    html: KT([
      'Mở lệnh in: <b>File → Print</b> hoặc nhấn <b>Ctrl + P</b>.',
      '<b>Xem trước</b> khi in (Print Preview) để kiểm tra bố cục.',
      'Chọn <b>máy in</b>, <b>số bản in</b> (Copies), trang cần in, rồi nháy <b>Print</b>.',
      'Kiểm tra kĩ để <b>tiết kiệm giấy, mực</b>.',
    ], 'In: <span class="k">Ctrl + P</span> → xem trước → Print.'),
    quiz: [
      { q: 'Tổ hợp phím mở hộp thoại in là:', o: ['Ctrl + S', 'Ctrl + C', 'Ctrl + P', 'Ctrl + V'], a: 2, why: 'Ctrl + P (Print) để in.' },
      { q: 'Vì sao nên xem trước khi in?', o: ['Để kiểm tra bố cục, tiết kiệm giấy', 'Để xoá dữ liệu', 'Để máy in nhanh hơn', 'Để đổi tên tệp'], a: 0, why: 'Xem trước giúp phát hiện lỗi, tránh in hỏng.' } ] },
];

const KEY = [
  'Một bảng tính có <b>nhiều trang tính</b> (Sheet).',
  'Chuột phải vào thẻ: <b>Insert, Rename, Delete</b>.',
  '<b>Ctrl+C/X/V</b> sao chép, di chuyển dữ liệu.',
  '<b>Page Layout</b>: hướng giấy, lề, khổ giấy.',
  '<b>Ctrl + P</b>, xem trước rồi in.',
];
