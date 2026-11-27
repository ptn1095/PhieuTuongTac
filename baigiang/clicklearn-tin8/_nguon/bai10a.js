/* ===== BÀI 10a: ĐỊNH DẠNG NÂNG CAO CHO TRANG CHIẾU ===== */
const META = { key: 'bai10a', num: '10a', theme: 'chibi', title: 'Bài 10a. Định dạng nâng cao cho trang chiếu', big: 'Định dạng nâng cao<br>cho trang chiếu',
  st2: 'Chủ đề 4 • Trình chiếu • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Cùng các bạn thú cưng trang trí trang chiếu thật xinh nào!',
  cert: 'Tin học 8 – Bài 10a. Định dạng nâng cao cho trang chiếu', file: 'Tin8_Bai10a', pass: 8 };

const ILL_T = {
  t1: () => svg(`${slide(30, 50, 250, 180, '#FFFF00', `${['#FF006E', '#00FF00', '#0000FF', '#FF7F11', '#FF006E', '#00FF00'].map((c, i) => `<rect x="${46 + (i % 2)*20}" y="${70 + i*24}" width="${200 - (i % 2)*40}" height="10" rx="4" fill="${c}"/>`).join('')}`)}
    ${slide(320, 50, 250, 180, '#1D3557', `${txt(445, 110, 'Mùa xuân', 30, '#FFD60A')}<rect x="370" y="140" width="150" height="10" rx="5" fill="#fff"/><rect x="370" y="166" width="110" height="10" rx="5" fill="#fff"/>`)}
    ${cross(155, 280, .9)}${tick(445, 280, .9)}${pillS(60, 340, 480, 50, '#FF006E', 'Gọn, tương phản, dễ đọc', 24)}`),
  t2: () => svg(`${winbox(30, 30, 330, 130, 'Design', `${pillS(50, 90, 290, 50, '#8338EC', 'Format Background', 22)}`, '#FF006E')}${slide(390, 40, 180, 120, '#FFE0EC', txt(480, 110, 'Aa', 40, '#C2577F'))}
    ${['Mali', 'Baloo', 'Arial'].map((t, i) => pillS(40 + i*180, 210, 160, 50, ['#1982C4', '#2DA44E', '#ADB5BD'][i], t, 24)).join('')}${cross(560, 235, .6)}${pillS(80, 310, 440, 52, '#FF7F11', 'Chỉ 2 – 3 phông chữ', 26)}`),
  t3: () => svg(`${winbox(30, 30, 300, 180, 'Shape Format', `${pillS(50, 90, 260, 46, '#FF7F11', 'Shape Fill', 22)}${pillS(50, 148, 260, 46, '#1982C4', 'Shape Outline', 22)}`, '#2DA44E')}
    <rect x="360" y="60" width="210" height="90" rx="45" fill="#FFB3C7" stroke="#8338EC" stroke-width="10"/>${txt(465, 116, 'Tiêu đề', 28, O)}${star(470, 250, 50, '#FFD60A')}${G(400, 250, 1, `<path d="M0 -40 L40 30 H-40Z" fill="#8FE3CF" ${ST}/>`)}
    ${pillS(40, 330, 520, 52, '#8338EC', 'Insert → Shapes', 26)}`),
  t4: () => svg(`${G(170, 170, 1, `<rect x="-110" y="-90" width="160" height="120" rx="10" fill="#8ECAE6" ${ST}/><rect x="-70" y="-50" width="160" height="120" rx="10" fill="#FFD60A" ${ST}/><rect x="-30" y="-10" width="160" height="120" rx="10" fill="#FF8FAB" ${ST}/>`)}
    ${pillS(370, 50, 200, 48, '#2DA44E', 'Bring to Front', 20)}${pillS(370, 120, 200, 48, '#E5383B', 'Send to Back', 20)}${pillS(370, 190, 200, 48, '#1982C4', 'Align', 22)}
    ${pillS(60, 330, 480, 52, '#8338EC', 'Sắp xếp lớp, căn thẳng hàng', 24)}`),
  t5: () => svg(`${slide(70, 30, 460, 300, '#FFF0F5', `<rect x="100" y="56" width="400" height="66" rx="33" fill="#FF8FB1" stroke="${O}" stroke-width="5"/>${txt(300, 100, 'Thú cưng của em', 30, '#fff')}${chibi(190, 230, .9, 'cat')}${chibi(410, 230, .9, 'bunny')}`)}
    ${heartP(40, 360, 1.2, '#FF6F9F')}${heartP(560, 360, 1.2, '#8FE3CF')}`),
};

const TOPICS = [
  { id: 't1', name: 'Trang chiếu nào đẹp hơn?', tip: 'Ít chữ, màu hài hoà – trang chiếu sẽ đáng yêu ngay!',
    html: S4Q(['So sánh trang chiếu <b>loè loẹt</b> và trang <b>gọn, hài hoà</b>.', ''],
      ['Trang chiếu thế nào là đẹp?', 'Ít chữ, chữ to rõ, màu tương phản với nền.'],
      ['Chữ vàng trên nền trắng có dễ đọc không?', 'Không – màu không tương phản.'],
      ['Mỗi trang <b>ít chữ</b>, ý chính.', 'Chữ <b>tương phản</b> với nền.', 'Trình bày <span class="k">hài hoà</span>.']),
    quiz: [
      { q: 'Trang chiếu dễ đọc khi:', o: ['Chữ nhỏ, thật nhiều chữ', 'Màu chữ tương phản với nền', 'Dùng 10 phông chữ', 'Chữ vàng trên nền trắng'], a: 1, why: 'Chữ tương phản với nền giúp người xem đọc rõ.' },
      { q: 'Mỗi trang chiếu nên có:', o: ['Ít chữ, ý chính ngắn gọn', 'Cả bài văn dài', 'Không có tiêu đề', 'Thật nhiều màu'], a: 0, why: 'Trang chiếu chỉ nên nêu ý chính ngắn gọn.' } ] },
  { id: 't2', name: 'Màu nền và phông chữ', tip: 'Chọn 2 – 3 phông chữ thôi, nhiều quá sẽ rối mắt đó!',
    html: S4Q(['Đổi <b>màu nền</b> và <b>phông chữ</b> cho bài trình chiếu.', ''],
      ['Đổi màu nền ở đâu?', 'Design → <code>Format Background</code>: màu, ảnh nền.'],
      ['Nên dùng bao nhiêu phông chữ?', 'Chỉ 2 – 3 phông, thống nhất cả bài.'],
      ['<b>Format Background</b>: nền.', '<b>Home</b>: phông, cỡ, màu chữ.', 'Dùng <span class="k">2 – 3 phông</span>.']),
    quiz: [
      { q: 'Lệnh đổi màu nền trang chiếu là:', o: ['Insert Picture', 'New Slide', 'Format Background', 'Slide Show'], a: 2, why: 'Format Background (thẻ Design) định dạng nền trang chiếu.' },
      { q: 'Một bài trình chiếu nên dùng khoảng:', o: ['10 phông chữ', 'Mỗi trang một phông', 'Không cần phông chữ', '2 – 3 phông chữ'], a: 3, why: 'Ít phông chữ giúp bài thống nhất, dễ đọc.' } ] },
  { id: 't3', name: 'Chèn và định dạng hình', tip: 'Hình khối là “chiếc nơ” làm trang chiếu nổi bật!',
    html: S4Q(['Vẽ <b>khung tiêu đề</b> bằng hình khối.', ''],
      ['Chèn và tô màu hình khối thế nào?', 'Insert → <code>Shapes</code>; <code>Shape Fill</code> tô, <code>Shape Outline</code> viền.'],
      ['Có gõ chữ vào hình khối được không?', 'Được – chọn hình rồi gõ chữ.'],
      ['Chèn: <b>Insert → Shapes</b>.', '<b>Shape Fill</b>, <b>Shape Outline</b>.', 'Hình khối làm trang <span class="k">nổi bật</span>.']),
    quiz: [
      { q: 'Shape Fill dùng để:', o: ['Tô màu bên trong hình', 'Xoá hình', 'Đổi phông chữ', 'Thêm trang chiếu'], a: 0, why: 'Shape Fill chọn màu tô cho phần bên trong hình.' },
      { q: 'Shape Outline dùng để định dạng:', o: ['Màu nền trang', 'Đường viền của hình', 'Hiệu ứng âm thanh', 'Số trang'], a: 1, why: 'Shape Outline chọn màu, độ dày đường viền.' } ] },
  { id: 't4', name: 'Sắp xếp các đối tượng', tip: 'Đối tượng xếp chồng như bánh nhiều tầng – chọn tầng nào lên trên nhé!',
    html: S4Q(['Đưa <b>chữ</b> lên trên <b>hình ảnh</b> để không bị che.', ''],
      ['Đổi lớp trên – dưới bằng lệnh gì?', '<code>Bring to Front</code> lên trên; <code>Send to Back</code> xuống dưới.'],
      ['Căn thẳng hàng nhiều hình thế nào?', 'Chọn các hình → <code>Align</code> (trái, giữa, phải…).'],
      ['<b>Bring to Front</b>: lên trên.', '<b>Send to Back</b>: xuống dưới.', '<span class="k">Align</span>: căn thẳng hàng.']),
    quiz: [
      { q: 'Hình bị che khuất, muốn đưa lên trên cùng, chọn:', o: ['Send to Back', 'Delete', 'Bring to Front', 'Copy'], a: 2, why: 'Bring to Front đưa đối tượng lên lớp trên cùng.' },
      { q: 'Lệnh Align dùng để:', o: ['Đổi màu hình', 'Thêm âm thanh', 'Xoá trang', 'Căn thẳng hàng đối tượng'], a: 3, why: 'Align căn trái, giữa, phải… cho các đối tượng.' } ] },
  { id: 't5', name: 'Tổng kết bài học', tip: 'Thiết kế một trang chiếu về thú cưng của em nào!',
    html: S4Q(['Thiết kế trang chiếu giới thiệu <b>thú cưng</b> của em.', ''],
      ['Cần chú ý gì về màu và chữ?', 'Nền hài hoà, chữ tương phản, ít chữ.'],
      ['Làm gì cho trang gọn gàng?', 'Sắp xếp lớp, căn thẳng hàng các đối tượng.'],
      ['Màu nền, chữ <b>hài hoà</b>.', 'Hình khối làm <b>điểm nhấn</b>.', 'Bài trình chiếu <span class="k">thu hút</span>.']),
    quiz: [
      { q: 'Bring to Front và Send to Back dùng để:', o: ['Đổi màu chữ', 'Đổi thứ tự lớp đối tượng', 'Chèn bảng', 'Lưu bài'], a: 1, why: 'Hai lệnh này đổi thứ tự trên – dưới của đối tượng.' },
      { q: 'Điều nào KHÔNG nên làm khi thiết kế trang chiếu?', o: ['Chữ tương phản với nền', 'Căn thẳng hàng', 'Dùng quá nhiều màu, phông', 'Dùng hình làm điểm nhấn'], a: 2, why: 'Quá nhiều màu, phông làm trang chiếu rối mắt.' } ] },
];

const KEY = [
  'Ít chữ, <b>tương<br>phản</b>, hài hoà.',
  '<b>Format<br>Background</b>;<br>2 – 3 phông.',
  '<b>Shapes</b>: Fill,<br>Outline.',
  '<b>Bring to Front</b>,<br>Send to Back, Align.',
  'Trang chiếu<br><b>thu hút</b>.',
];
