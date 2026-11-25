/* ===== BÀI 3: SỬ DỤNG QUẠT ĐIỆN ===== */
const META = { key: 'bai3', num: 3, title: 'Bài 3. Sử dụng quạt điện', big: 'SỬ DỤNG<br>QUẠT ĐIỆN',
  st2: 'Công nghệ 3 • 5 hoạt động • 10 câu đố • nhận giấy chứng nhận',
  hello: 'Vù vù vù… cùng khám phá chiếc quạt điện nhé!',
  cert: 'CÔNG NGHỆ 3 – BÀI 3: SỬ DỤNG QUẠT ĐIỆN', file: 'Bai3', pass: 8 };

const wind = (x, y, n, c = '#3A8DFF') => [...Array(n)].map((_, i) => `<path d="M${x - 30} ${y - i*26} q20 -12 40 0 t40 0" fill="none" stroke="${c}" stroke-width="7" stroke-linecap="round"/>`).join('');
const ILL_T = {
  t1: () => svg(`${fan(250, 150, .88)}${ball(500, 110, 44, '#FF006E', '?', 56)}
    ${pillS(14, 16, 300, 44, '#8338EC', 'Có cánh mà không bay…', 20)}${wind(450, 260, 3)}
    ${star(560, 360, 14, '#FFD60A')}${star(60, 360, 12, '#2EC4B6')}`),
  t2: () => svg(`${fan(250, 140, .85)}
    ${lab(262, 104, 420, 14, 160, '#3A8DFF', 'Cánh quạt')}${lab(326, 168, 430, 92, 160, '#8338EC', 'Lồng quạt')}
    ${lab(282, 230, 430, 176, 150, '#2EC4B6', 'Động cơ')}${lab(250, 290, 30, 230, 160, '#6C757D', 'Thân quạt')}
    ${lab(196, 345, 20, 300, 140, '#1982C4', 'Đế quạt')}${lab(286, 330, 380, 354, 200, '#FF7F11', 'Nút điều khiển', 20)}`),
  t3: () => svg(`${pillS(60, 20, 480, 46, '#FF006E', 'Số càng lớn – gió càng mạnh', 22)}
    <rect x="30" y="270" width="540" height="120" rx="30" fill="#1982C4" ${ST}/>
    ${key3d(60, 290, 100, 70, '#E5383B', '#A4161A', '0', 40)}${key3d(190, 290, 100, 70, '#FFD60A', '#E09F00', '1', 40, O)}${key3d(320, 290, 100, 70, '#FF7F11', '#C2410C', '2', 40)}${key3d(450, 290, 100, 70, '#2DA44E', '#1E7B38', '3', 40)}
    ${txt(110, 230, 'TẮT', 26, '#E5383B')}${wind(250, 230, 1)}${wind(380, 230, 2)}${wind(510, 230, 3)}`),
  t4: () => svg(`${fan(160, 140, .7)}${hand(310, 140, 1, 180)}${cross(340, 70, .9)}
    ${pillS(320, 196, 264, 44, '#E5383B', 'Không thò tay!', 22)}${pillS(320, 256, 264, 44, '#1982C4', 'Ngồi cách xa quạt', 22)}${pillS(320, 316, 264, 44, '#FF7F11', 'Kêu lạ → báo người lớn', 19)}`),
  t5: () => svg(`${fan(140, 140, .62)}<g transform="translate(330 50) scale(.9)">${robot()}</g>${mic(500, 210, .7, 20)}
    ${pillS(290, 330, 290, 46, '#8338EC', 'Chuyên gia quạt nhí', 22)}${star(560, 50, 14, '#FFD60A')}`),
};

const TOPICS = [
  { id: 't1', name: 'Đoán đồ vật', tip: 'Đố em: “Có cánh mà chẳng biết bay, đứng yên một chỗ quay quay mát người” là gì?',
    html: S4('Giải câu đố: <i>“Có cánh mà chẳng biết bay, đứng yên một chỗ quay quay mát người.”</i>',
      'Đoán xem đó là đồ vật gì.',
      'Kể quạt nhà em là loại quạt nào.',
      'Đó là <span class="k">quạt điện</span> – tạo gió làm mát.'),
    quiz: [
      { q: 'Quạt điện có tác dụng gì?', o: ['Chiếu sáng', 'Tạo gió làm mát', 'Nấu chín thức ăn', 'Giữ đồ ăn tươi'], a: 1, why: 'Quạt điện tạo ra gió giúp làm mát.' },
      { q: 'Loại quạt nào được gắn trên trần nhà?', o: ['Quạt bàn', 'Quạt cây', 'Quạt tích điện', 'Quạt trần'], a: 3, why: 'Quạt trần được treo trên trần nhà.' } ] },
  { id: 't2', name: 'Các bộ phận của quạt', tip: 'Cánh quạt quay tạo gió, lồng quạt bảo vệ tay em!',
    html: S4('Quan sát quạt cây, tìm tên các bộ phận.',
      '<span class="k">Cánh quạt</span>, <span class="k">lồng quạt</span>, <span class="k">động cơ</span>, <span class="k">thân quạt</span>, <span class="k">đế quạt</span>, <span class="k">nút điều khiển</span>.',
      'Chỉ và nói tên bộ phận cho bạn nghe.',
      '<b>Động cơ</b> làm cánh quay; <b>lồng quạt</b> bảo vệ.'),
    quiz: [
      { q: 'Bộ phận nào quay để tạo ra gió?', o: ['Đế quạt', 'Thân quạt', 'Cánh quạt', 'Nút bấm'], a: 2, why: 'Cánh quạt quay tạo ra gió.' },
      { q: 'Lồng quạt có tác dụng gì?', o: ['Làm quạt nặng hơn', 'Phát ra ánh sáng', 'Chọn tốc độ gió', 'Che chắn, bảo vệ cánh quạt'], a: 3, why: 'Lồng quạt che chắn để tay, đồ vật không chạm vào cánh quạt.' } ] },
  { id: 't3', name: 'Bật quạt, chọn gió', tip: 'Gió số 1 nhẹ nhàng, số 3 mạnh nhất!',
    html: S4('Thực hành bật quạt và chọn tốc độ gió.',
      'Cắm điện → bấm số <b>1, 2, 3</b> (nhẹ → mạnh) → bấm <b>nút quay</b> nếu cần.',
      'Thử từng nút, nói cảm nhận về gió.',
      'Tắt: bấm <span class="k">nút 0 (Tắt)</span>, rút phích cắm.'),
    quiz: [
      { q: 'Muốn gió nhẹ nhất, em bấm nút số:', o: ['3', '2', '1', '0'], a: 2, why: 'Số 1 là gió nhẹ nhất; số càng lớn gió càng mạnh.' },
      { q: 'Nút số 0 (nút Tắt) dùng để:', o: ['Tắt quạt', 'Tăng gió', 'Cho quạt quay', 'Hẹn giờ'], a: 0, why: 'Bấm nút 0 để tắt quạt.' } ] },
  { id: 't4', name: 'Dùng quạt an toàn', tip: 'Tay xinh tránh xa lồng quạt nhé!',
    html: S4('Xem tranh: tình huống nào nguy hiểm?',
      '<b>Không</b> thò tay, que vào lồng quạt; không ngồi <b>quá gần</b> quạt.',
      'Nhắc nhau: tắt quạt khi ra khỏi phòng.',
      'Quạt kêu lạ, có mùi khét → <span class="k">tắt quạt, báo người lớn</span>.'),
    quiz: [
      { q: 'Em bé định thò tay vào lồng quạt. Em sẽ:', o: ['Cổ vũ em bé', 'Bật gió mạnh hơn', 'Ngăn lại và nhắc em bé', 'Đi chỗ khác'], a: 2, why: 'Thò tay vào lồng quạt rất nguy hiểm, cần ngăn ngay.' },
      { q: 'Quạt đang chạy bỗng có mùi khét, em cần:', o: ['Tăng gió lên số 3', 'Tắt quạt, báo người lớn', 'Lấy nước dội vào quạt', 'Để quạt chạy tiếp'], a: 1, why: 'Mùi khét là dấu hiệu hỏng – tắt quạt và báo người lớn.' } ] },
  { id: 't5', name: 'Chuyên gia quạt nhí', tip: 'Em hãy làm chuyên gia, hướng dẫn bạn dùng quạt nhé!',
    html: S4('Đóng vai: hướng dẫn bạn dùng quạt điện.',
      'Nói tên bộ phận, cách bật, chọn gió, tắt quạt.',
      'Bạn nhận xét, bổ sung.',
      'Dùng quạt <span class="k">đúng cách, an toàn, tiết kiệm điện</span>.'),
    quiz: [
      { q: 'Ngủ trưa, em nên để quạt:', o: ['Gió nhẹ, cách xa người', 'Số 3 thổi thẳng vào mặt', 'Thật sát giường', 'Chạy cả ngày'], a: 0, why: 'Để gió nhẹ, cách xa người cho dễ chịu, không bị ốm.' },
      { q: 'Đâu KHÔNG phải bộ phận của quạt điện?', o: ['Cánh quạt', 'Lồng quạt', 'Động cơ', 'Chụp đèn'], a: 3, why: 'Chụp đèn là bộ phận của đèn học.' } ] },
];

const KEY = [
  'Quạt điện <b>tạo gió</b>, làm mát.',
  '<b>Cánh, lồng, động cơ</b>, thân, đế, nút điều khiển.',
  'Số <b>1 → 3</b>: gió nhẹ → mạnh. <b>0</b>: tắt.',
  'Không <b>thò tay</b> vào lồng quạt; kêu lạ thì <b>báo người lớn</b>.',
  'Dùng quạt <b>đúng, an toàn, tiết kiệm</b>.',
];
