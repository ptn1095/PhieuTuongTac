/* ===== BÀI 13: BIỂU DIỄN DỮ LIỆU ===== */
const META = { key: 'bai13', num: 13, theme: 'nghinle', title: 'Bài 13. Biểu diễn dữ liệu', big: 'Biểu diễn<br>dữ liệu',
  st2: 'Chủ đề 5 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Mở chiếc rương thần xem máy tính cất giữ dữ liệu thế nào nhé!',
  cert: 'Tin học 8 – Bài 13. Biểu diễn dữ liệu', file: 'Tin8_Bai13', pass: 8 };

const SC = { ev: '#FFBF00', mo: '#4C97FF', lo: '#9966FF', ct: '#FFAB19', va: '#FF8C1A', op: '#59C059' };
const box = (x, y, name, val, c = '#FF8C1A') => `<path d="M${x} ${y + 30} L${x + 40} ${y} H${x + 180} L${x + 140} ${y + 30}Z" fill="#FFD8A8" stroke="${O}" stroke-width="5" stroke-linejoin="round"/><rect x="${x}" y="${y + 30}" width="140" height="110" fill="${c}" stroke="${O}" stroke-width="5"/><path d="M${x + 140} ${y + 30} L${x + 180} ${y} V${y + 110} L${x + 140} ${y + 140}Z" fill="#C2410C" stroke="${O}" stroke-width="5" stroke-linejoin="round"/>
  ${txt(x + 70, y + 76, name, 22, '#fff')}${txt(x + 70, y + 124, val, 36, '#fff')}`;
const ILL_T = {
  t1: () => svg(`${box(60, 90, 'diem', '5')}${star(330, 110, 30, '#FFD60A')}${star(420, 170, 22, '#FFD60A')}${star(500, 100, 26, '#FFD60A')}${arr(310, 200, 250, 200, '#FF006E', 7)}
    ${pillS(60, 330, 480, 54, '#8338EC', 'Biến: chiếc hộp có tên', 26)}`),
  t2: () => svg(`${sblock(40, 40, 300, SC.va, 'đặt diem thành 0', 22)}${sblock(40, 104, 330, SC.va, 'thay đổi diem một lượng 1', 20)}${winbox(400, 40, 170, 110, 'Biến', `${pillS(415, 95, 140, 40, SC.va, 'diem = 1', 20)}`, '#FF8C1A')}
    ${ball(130, 260, 56, '#1982C4', 'π', 56)}${txt(330, 255, 'π ≈ 3,14', 34)}${txt(330, 295, 'không đổi: hằng', 24, '#E5383B')}`),
  t3: () => svg(`${[['15 ; 3.5', '#1982C4', 'Số'], ['"Hà Nội"', '#2DA44E', 'Xâu kí tự'], ['đúng / sai', '#8338EC', 'Logic']].map(([a, c, t], i) => pillS(30, 40 + i*110, 210, 64, '#fff', a, 26, 0, O) + arr(250, 72 + i*110, 310, 72 + i*110, O, 6) + pillS(320, 40 + i*110, 250, 64, c, t, 28)).join('')}`),
  t4: () => svg(`${pillS(30, 40, 540, 60, '#1982C4', 'Số học: (dai + rong) * 2', 26)}${pillS(30, 130, 540, 60, '#FF7F11', 'So sánh: diem > 8', 26)}${pillS(30, 220, 540, 60, '#8338EC', 'Logic: and, or, not', 26)}
    ${tick(170, 340, .8)}${txt(330, 350, 'Kết quả: đúng / sai', 26)}`),
  t5: () => svg(`${sblock(40, 30, 280, SC.ev, 'khi bấm vào lá cờ ⚑', 20)}${sblock(40, 88, 260, SC.va, 'đặt sao thành 0', 20)}${scwrap(40, 146, 330, 160, '#FFAB19', 'liên tục', 20)}${sblock(70, 204, 300, SC.va, 'nếu chạm sao: tăng sao 1', 18)}
    ${star(470, 120, 34, '#FFD60A')}${box(400, 190, 'sao', '7', '#8338EC')}`),
};

const TOPICS = [
  { id: 't1', name: 'Chiếc hộp đựng điểm', tip: 'Mỗi lần bắt được sao, chiếc hộp “điểm” lại đầy thêm!',
    html: S4Q(['Điểm trò chơi tăng khi bắt được sao. Máy nhớ <b>điểm ở đâu</b>?', ''],
      ['Máy tính lưu giá trị bằng gì?', 'Bằng <b>biến</b> – như chiếc hộp có tên.'],
      ['Giá trị trong biến có thay đổi được không?', 'Có, khi chương trình chạy.'],
      ['<b>Biến</b>: hộp có tên chứa giá trị.', 'Giá trị <b>thay đổi</b> được.', 'Ví dụ: <span class="k">điểm, thời gian</span>.']),
    quiz: [
      { q: 'Trong trò chơi, điểm số thay đổi được lưu bằng:', o: ['Hằng', 'Biến', 'Hình nền', 'Âm thanh'], a: 1, why: 'Biến lưu giá trị có thể thay đổi như điểm số.' },
      { q: 'Biến giống như:', o: ['Chiếc hộp có tên chứa giá trị', 'Một bức tranh', 'Một nút bấm', 'Một trang web'], a: 0, why: 'Biến có tên và chứa một giá trị.' } ] },
  { id: 't2', name: 'Biến và hằng', tip: 'Biến thì “biến hoá”, hằng thì “hằng định” – dễ nhớ ghê!',
    html: S4Q(['Tạo biến <b>diem</b> trong Scratch.', ''],
      ['Tạo và thay đổi biến bằng lệnh nào?', 'Tạo một biến; <code>đặt diem thành 0</code>, <code>thay đổi diem một lượng 1</code>.'],
      ['Số π ≈ 3,14 có thay đổi không?', 'Không. Đó là <b>hằng</b>.'],
      ['<b>Biến</b>: giá trị thay đổi.', '<b>Hằng</b>: giá trị không đổi.', 'Lệnh <span class="k">đặt, thay đổi</span> biến.']),
    quiz: [
      { q: 'Lệnh “thay đổi diem một lượng 1” làm gì?', o: ['Đặt diem bằng 1', 'Xoá biến diem', 'Tăng diem thêm 1', 'Đổi tên biến'], a: 2, why: 'Lệnh này cộng thêm 1 vào giá trị của diem.' },
      { q: 'Giá trị nào là hằng?', o: ['Điểm trò chơi', 'Thời gian còn lại', 'Số mạng của nhân vật', 'Số π ≈ 3,14'], a: 3, why: 'π luôn có giá trị không đổi.' } ] },
  { id: 't3', name: 'Kiểu dữ liệu', tip: 'Số, chữ, đúng/sai – mỗi loại ở một “khoang tàu” riêng!',
    html: S4Q(['Phân loại: <code>15</code>, <code>"Hà Nội"</code>, <code>đúng</code>, <code>3.5</code>.', ''],
      ['Mỗi giá trị thuộc kiểu dữ liệu nào?', '15, 3.5: số; "Hà Nội": xâu kí tự; đúng: logic.'],
      ['Cộng "Hà" với 5 như hai số được không?', 'Không. Khác kiểu dữ liệu.'],
      ['Kiểu <b>số</b>, <b>xâu kí tự</b>, <b>logic</b>.', 'Logic: <b>đúng / sai</b>.', 'Mỗi kiểu có <span class="k">phép toán riêng</span>.']),
    quiz: [
      { q: '"Xin chào" thuộc kiểu dữ liệu nào?', o: ['Xâu kí tự', 'Số', 'Logic', 'Hình ảnh'], a: 0, why: 'Dãy kí tự đặt trong ngoặc kép là xâu kí tự.' },
      { q: 'Kiểu logic chỉ có hai giá trị:', o: ['0 và 100', 'Đúng và sai', 'A và B', 'Lớn và nhỏ'], a: 1, why: 'Kiểu logic: đúng (true) hoặc sai (false).' } ] },
  { id: 't4', name: 'Biểu thức', tip: 'Biểu thức như câu thần chú – đọc lên là ra kết quả!',
    html: S4Q(['Tính chu vi hình chữ nhật: <code>(dai + rong) * 2</code>.', ''],
      ['Có những loại biểu thức nào?', 'Số học (+ − × ÷), so sánh (&gt; &lt; =), logic (and, or, not).'],
      ['<code>diem &gt; 8</code> cho kết quả kiểu gì?', 'Kiểu logic: đúng hoặc sai.'],
      ['<b>Số học</b>: + − × ÷.', '<b>So sánh</b>, <b>logic</b>: ra đúng / sai.', 'Tính trong <span class="k">ngoặc trước</span>.']),
    quiz: [
      { q: 'Biểu thức 5 > 3 cho kết quả:', o: ['8', '2', 'Đúng', 'Sai'], a: 2, why: '5 lớn hơn 3 nên biểu thức có giá trị đúng.' },
      { q: 'Các phép toán logic gồm:', o: ['+, −, ×, ÷', '>, <, =', 'Sort, Filter', 'and, or, not'], a: 3, why: 'and (và), or (hoặc), not (phủ định) là phép logic.' } ] },
  { id: 't5', name: 'Tổng kết bài học', tip: 'Biến, hằng, kiểu dữ liệu, biểu thức – bộ tứ siêu đẳng!',
    html: S4Q(['Viết chương trình đếm <b>ngôi sao</b> nhân vật bắt được.', ''],
      ['Dùng biến thế nào để đếm sao?', 'Tạo biến sao = 0; mỗi lần chạm sao: tăng 1.'],
      ['Chương trình dùng những kiểu dữ liệu nào?', 'Số (sao), logic (có chạm sao không).'],
      ['<b>Biến</b> lưu số sao.', '<b>Biểu thức</b> tính, so sánh.', 'Nền tảng <span class="k">lập trình</span>.']),
    quiz: [
      { q: 'Để bắt đầu trò chơi với 0 điểm, dùng lệnh:', o: ['thay đổi diem một lượng 1', 'đặt diem thành 0', 'nói diem', 'di chuyển 10 bước'], a: 1, why: '“đặt … thành 0” gán giá trị ban đầu cho biến.' },
      { q: 'Biểu thức (2 + 3) * 4 có giá trị:', o: ['20', '14', '24', '9'], a: 0, why: 'Tính trong ngoặc trước: 5 × 4 = 20.' } ] },
];

const KEY = [
  '<b>Biến</b>: hộp có tên<br>lưu giá trị.',
  'Biến <b>đổi được</b>,<br>hằng không đổi.',
  'Số, <b>xâu kí tự</b>,<br>logic.',
  'Số học, so sánh,<br><b>logic</b>.',
  'Nền tảng<br><b>lập trình</b>.',
];
