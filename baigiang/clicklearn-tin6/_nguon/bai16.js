/* ===== BÀI 16: CÁC CẤU TRÚC ĐIỀU KHIỂN ===== */
const META = { key: 'bai16', theme: 'nghinle', num: 16, title: 'Bài 16. Các cấu trúc điều khiển', big: 'Các cấu trúc<br>điều khiển',
  st2: 'Chủ đề 6 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Tuần tự, rẽ nhánh, lặp – ba cấu trúc thần kì đây!',
  cert: 'Tin học 6 – Bài 16. Các cấu trúc điều khiển', file: 'Tin6_Bai16', pass: 8 };

const dia = (x, y, w, h, c, t, fs = 22) => `<path d="M${x} ${y - h/2} L${x + w/2} ${y} L${x} ${y + h/2} L${x - w/2} ${y}Z" fill="${c}" ${ST}/>${txt(x, y + fs*.36, t, fs, '#fff')}`;
const ILL_T = {
  t1: () => svg(`${clock(90, 90, 1)}${pillS(170, 66, 400, 50, '#1982C4', 'Thức dậy → ăn sáng → đi học', 22)}
    ${pillS(30, 170, 540, 50, '#FF7F11', 'Nếu trời mưa thì mang áo mưa', 22)}${pillS(30, 260, 540, 50, '#2DA44E', 'Lặp lại: đánh răng mỗi sáng', 22)}
    ${star(560, 380, 14, '#FFD60A')}`),
  t2: () => svg(`${vflow([['#1982C4', 'Bước 1'], ['#1982C4', 'Bước 2'], ['#1982C4', 'Bước 3']], 80, 50, 220, 120, 26)}${pillS(330, 170, 250, 60, '#8338EC', 'Tuần tự', 30)}`),
  t3: () => svg(`${dia(300, 80, 260, 110, '#E5383B', 'Trời mưa?', 26)}${arr(170, 80, 110, 160, O, 7)}${arr(430, 80, 490, 160, O, 7)}${txt(120, 110, 'Đúng', 22, '#2DA44E')}${txt(480, 110, 'Sai', 22, '#E5383B')}
    ${pillS(20, 170, 190, 56, '#2DA44E', 'Mang áo mưa', 22)}${pillS(390, 170, 190, 56, '#FF7F11', 'Đội mũ', 24)}
    ${pillS(100, 300, 400, 54, '#8338EC', 'Nếu… thì… nếu không thì…', 22)}`),
  t4: () => svg(`${pillS(140, 90, 320, 60, '#2DA44E', 'Đánh răng', 30)}<path d="M470 120 Q560 120 560 220 Q560 320 300 320 Q60 320 60 220 Q60 120 130 120" fill="none" stroke="#FF7F11" stroke-width="10" stroke-linecap="round"/>${arrowHead(134, 120, 0, '#FF7F11')}
    ${pillS(150, 280, 300, 54, '#FF7F11', 'Lặp lại 3 lần', 28)}${pillS(130, 360, 340, 46, '#8338EC', 'Cấu trúc lặp', 24)}`),
  t5: () => svg(`${ball(110, 170, 80, '#1982C4', 'Tuần tự', 24)}${ball(300, 170, 80, '#E5383B', 'Rẽ nhánh', 24)}${ball(490, 170, 80, '#2DA44E', 'Lặp', 30)}
    ${pillS(70, 310, 460, 54, '#8338EC', '3 cấu trúc cơ bản', 28)}${star(560, 40, 14, '#FFD60A')}`),
};

const TOPICS = [
  { id: 't1', name: 'Một ngày của em', tip: 'Có việc làm lần lượt, có việc tuỳ điều kiện, có việc lặp lại!',
    html: S4('Kể các việc em làm vào <b>buổi sáng</b>.',
      'Làm lần lượt: thức dậy → ăn sáng → đi học. <b>Nếu</b> trời mưa <b>thì</b> mang áo mưa.',
      'Việc nào em lặp lại mỗi ngày?',
      'Có 3 kiểu: <span class="k">tuần tự, rẽ nhánh, lặp</span>.'),
    quiz: [
      { q: '"Nếu trời mưa thì mang áo mưa" là kiểu:', o: ['Tuần tự', 'Lặp', 'Rẽ nhánh', 'Kết thúc'], a: 2, why: 'Tuỳ theo điều kiện mà chọn việc làm – đó là rẽ nhánh.' },
      { q: 'Có mấy cấu trúc điều khiển cơ bản?', o: ['2', '3', '4', '5'], a: 1, why: 'Tuần tự, rẽ nhánh và lặp.' } ] },
  { id: 't2', name: 'Cấu trúc tuần tự', tip: 'Tuần tự – cứ lần lượt từ trên xuống dưới!',
    html: S4('Sắp xếp các bước <b>đánh răng</b> theo thứ tự.',
      'Lấy kem → chải răng → súc miệng → cất bàn chải.',
      'Các bước thực hiện <b>lần lượt</b>, hết bước này đến bước kia.',
      '<span class="k">Tuần tự</span>: thực hiện các bước theo thứ tự.'),
    quiz: [
      { q: 'Cấu trúc tuần tự là:', o: ['Các bước làm lần lượt', 'Chọn một trong hai việc', 'Lặp lại nhiều lần', 'Bỏ qua các bước'], a: 0, why: 'Tuần tự: các bước được thực hiện lần lượt.' },
      { q: 'Trong cấu trúc tuần tự, bước 2 được làm:', o: ['Trước bước 1', 'Không bao giờ', 'Cùng lúc bước 3', 'Sau bước 1'], a: 3, why: 'Các bước thực hiện đúng thứ tự từ trên xuống.' } ] },
  { id: 't3', name: 'Cấu trúc rẽ nhánh', tip: 'Đúng thì đi đường này, sai thì đi đường kia!',
    html: S4('Viết quy tắc: trời mưa mang áo mưa, không mưa thì đội mũ.',
      '<b>Rẽ nhánh thiếu</b>: Nếu… thì…',
      '<b>Rẽ nhánh đủ</b>: Nếu… thì…, nếu không thì…',
      'Rẽ nhánh: <span class="k">kiểm tra điều kiện</span> rồi chọn việc.'),
    quiz: [
      { q: '"Nếu… thì…, nếu không thì…" là cấu trúc:', o: ['Tuần tự', 'Rẽ nhánh đủ', 'Rẽ nhánh thiếu', 'Lặp'], a: 1, why: 'Có cả hai nhánh đúng và sai là rẽ nhánh đủ.' },
      { q: 'Trong sơ đồ khối, điều kiện rẽ nhánh vẽ bằng hình:', o: ['Elip', 'Chữ nhật', 'Hình thoi', 'Bình hành'], a: 2, why: 'Hình thoi dùng để kiểm tra điều kiện.' } ] },
  { id: 't4', name: 'Cấu trúc lặp', tip: 'Lặp – làm đi làm lại cho đến khi xong!',
    html: S4('Viết thuật toán: <b>vỗ tay 3 lần</b>.',
      '<b>Lặp với số lần biết trước</b>: lặp lại 3 lần.',
      '<b>Lặp với điều kiện</b>: tưới cây cho đến khi đất ẩm.',
      'Lặp giúp viết thuật toán <span class="k">ngắn gọn</span>.'),
    quiz: [
      { q: '"Lặp lại 10 lần: nhảy dây" là kiểu lặp:', o: ['Với số lần biết trước', 'Với điều kiện', 'Rẽ nhánh', 'Tuần tự'], a: 0, why: 'Biết rõ số lần lặp là 10.' },
      { q: '"Tưới cây cho đến khi đất ẩm" là:', o: ['Tuần tự', 'Rẽ nhánh thiếu', 'Lặp với số lần biết trước', 'Lặp với điều kiện'], a: 3, why: 'Lặp đến khi điều kiện (đất ẩm) đúng thì dừng.' } ] },
  { id: 't5', name: 'Tổng kết bài học', tip: 'Ôn nhanh: tuần tự – rẽ nhánh – lặp!',
    html: S4('Tóm tắt bài bằng 3 ý chính.',
      '<b>Tuần tự</b>: các bước lần lượt. <b>Rẽ nhánh</b>: tuỳ điều kiện.',
      '<b>Lặp</b>: lặp lại với số lần biết trước hoặc theo điều kiện.',
      'Mọi thuật toán đều dùng <span class="k">3 cấu trúc</span> này.'),
    quiz: [
      { q: 'Cấu trúc giúp chọn việc làm theo điều kiện là:', o: ['Tuần tự', 'Lặp', 'Rẽ nhánh', 'Kết thúc'], a: 2, why: 'Rẽ nhánh chọn việc tuỳ theo điều kiện đúng hay sai.' },
      { q: 'Câu nào đúng?', o: ['Lặp làm thuật toán dài hơn', 'Có 3 cấu trúc điều khiển cơ bản', 'Rẽ nhánh không cần điều kiện', 'Tuần tự là lặp lại'], a: 1, why: 'Ba cấu trúc: tuần tự, rẽ nhánh, lặp.' } ] },
];

const KEY = [
  'Tuần tự,<br><b>rẽ nhánh, lặp</b>.',
  '<b>Tuần tự</b>:<br>lần lượt.',
  '<b>Nếu… thì…</b><br>nếu không thì…',
  '<b>Lặp</b>: số lần<br>hoặc điều kiện.',
  'Ba cấu trúc<br><b>cơ bản</b>.',
];
