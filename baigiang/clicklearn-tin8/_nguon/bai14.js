/* ===== BÀI 14: CẤU TRÚC ĐIỀU KHIỂN ===== */
const META = { key: 'bai14', num: 14, theme: 'daiduong', title: 'Bài 14. Cấu trúc điều khiển', big: 'Cấu trúc<br>điều khiển',
  st2: 'Chủ đề 5 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Cùng điều khiển chú cá bơi khắp đại dương bằng 3 cấu trúc nhé!',
  cert: 'Tin học 8 – Bài 14. Cấu trúc điều khiển', file: 'Tin8_Bai14', pass: 8 };

const SC = { ev: '#FFBF00', mo: '#4C97FF', lo: '#9966FF', ct: '#FFAB19', va: '#FF8C1A', op: '#59C059', se: '#5CB1D6' };
const ILL_T = {
  t1: () => svg(`${[['#1982C4', 'Tuần tự', '1 → 2 → 3'], ['#FF7F11', 'Rẽ nhánh', 'Nếu… thì…'], ['#2DA44E', 'Lặp', 'Lặp lại…']].map(([c, t, d], i) => pillS(30 + i*190, 60, 170, 60, c, t, 26) + txt(115 + i*190, 170, d, 22)).join('')}
    ${fishS(150, 280, .9, '#FFB14E', '#FF7F11', 0)}${fishS(440, 280, .9, '#FF8FAB', '#FF006E', 1)}${bubs([[300, 250, 14], [320, 300, 9]])}`),
  t2: () => svg(`${scwrap(30, 30, 370, 190, SC.ct, 'nếu đang chạm cạnh? thì', 20)}${sblock(60, 88, 320, SC.mo, 'quay 180 độ', 22)}${txt(215, 270, 'Điều kiện: đúng hay sai?', 24, '#E5383B')}
    ${pillS(420, 60, 150, 50, '#2DA44E', 'Đúng: làm', 22)}${pillS(420, 130, 150, 50, '#E5383B', 'Sai: bỏ qua', 22)}${pillS(40, 330, 520, 52, '#8338EC', 'if … then … else: 2 nhánh', 24)}`),
  t3: () => svg(`${scwrap(30, 30, 300, 150, SC.ct, 'lặp lại 10', 22)}${sblock(60, 88, 260, SC.mo, 'di chuyển 10 bước', 20)}${scwrap(30, 210, 300, 150, SC.ct, 'lặp lại cho đến khi …', 18)}${sblock(60, 268, 260, SC.mo, 'bơi tiếp', 20)}
    ${pillS(360, 70, 210, 50, '#1982C4', 'Biết trước số lần', 20)}${pillS(360, 250, 210, 50, '#FF7F11', 'Đến khi đúng thì dừng', 18)}`),
  t4: () => svg(`${sblock(40, 20, 290, SC.ev, 'khi bấm vào lá cờ ⚑', 20)}${scwrap(40, 78, 330, 260, SC.ct, 'liên tục', 22)}${sblock(70, 136, 280, SC.mo, 'di chuyển 5 bước', 20)}${scwrap(70, 194, 300, 100, SC.ct, 'nếu đang chạm cạnh? thì', 18)}${sblock(100, 250, 230, SC.mo, 'quay đầu lại', 20)}
    ${fishS(480, 180, .9, '#FFB14E', '#FF7F11', 0)}`),
  t5: () => svg(`${[['#1982C4', 'Tuần tự', 'Các khối nối tiếp'], ['#FF7F11', 'Rẽ nhánh', 'nếu … thì'], ['#2DA44E', 'Lặp', 'lặp lại, liên tục']].map(([c, a, t], i) => pillS(30, 40 + i*100, 170, 60, c, a, 26) + arr(210, 70 + i*100, 260, 70 + i*100, O, 6) + pillS(270, 40 + i*100, 300, 60, '#fff', t, 22, 0, O)).join('')}${star(560, 380, 12, '#FFD60A')}`),
};

const TOPICS = [
  { id: 't1', name: 'Ba kiểu chỉ dẫn', tip: 'Tuần tự, rẽ nhánh, lặp – ba “dòng hải lưu” của mọi chương trình!',
    html: S4('Kể việc buổi sáng: dậy → đánh răng → ăn sáng; <b>nếu</b> mưa thì mang áo mưa.',
      'Có 3 cấu trúc điều khiển: <b>tuần tự</b>, <b>rẽ nhánh</b>, <b>lặp</b>.',
      'Tìm thêm một ví dụ đời thường cho mỗi cấu trúc.',
      'Thuật toán được xây từ <span class="k">3 cấu trúc</span> điều khiển.'),
    quiz: [
      { q: '"Nếu trời mưa thì mang áo mưa" là cấu trúc:', o: ['Tuần tự', 'Rẽ nhánh', 'Lặp', 'Không là cấu trúc'], a: 1, why: 'Có điều kiện “nếu… thì…” nên là rẽ nhánh.' },
      { q: 'Các bước làm lần lượt từ trên xuống là cấu trúc:', o: ['Tuần tự', 'Rẽ nhánh', 'Lặp', 'Sắp xếp'], a: 0, why: 'Tuần tự: thực hiện các bước theo đúng thứ tự.' } ] },
  { id: 't2', name: 'Cấu trúc rẽ nhánh', tip: 'Chạm vào rạn san hô thì quay đầu – đó là rẽ nhánh!',
    html: S4('Cho chú cá <b>chạm vào cạnh</b> thì quay lại.',
      '<code>nếu … thì</code>: điều kiện <b>đúng</b> mới làm; <code>nếu … thì … nếu không thì</code>: có 2 nhánh.',
      'Điểm ≥ 5 thì “Đạt”, ngược lại “Chưa đạt” – dùng khối nào?',
      'Rẽ nhánh: chọn việc theo <span class="k">điều kiện</span>.'),
    quiz: [
      { q: 'Khối lệnh có hai nhánh (đúng / sai) là:', o: ['lặp lại 10', 'liên tục', 'nếu … thì … nếu không thì', 'di chuyển 10 bước'], a: 2, why: 'Khối này có một nhánh cho đúng, một nhánh cho sai.' },
      { q: 'Trong khối “nếu … thì”, lệnh bên trong chạy khi:', o: ['Luôn luôn', 'Điều kiện sai', 'Không bao giờ', 'Điều kiện đúng'], a: 3, why: 'Chỉ khi điều kiện đúng, lệnh bên trong mới chạy.' } ] },
  { id: 't3', name: 'Cấu trúc lặp', tip: 'Lặp lại giúp chú cá bơi mãi mà không cần viết lại lệnh!',
    html: S4('Cho cá bơi <b>10 lần</b>, mỗi lần 10 bước.',
      '<code>lặp lại 10</code>: số lần <b>biết trước</b>; <code>lặp lại cho đến khi</code>: đến khi <b>điều kiện đúng</b>; <code>liên tục</code>: lặp mãi.',
      'Bơi cho đến khi chạm cá mập thì dùng khối nào?',
      'Lặp giúp chương trình <span class="k">ngắn gọn</span>.'),
    quiz: [
      { q: 'Lặp với số lần biết trước dùng khối:', o: ['lặp lại 10', 'nếu … thì', 'nói', 'đặt … thành'], a: 0, why: '“lặp lại 10” lặp đúng 10 lần.' },
      { q: 'Lặp đến khi điều kiện đúng thì dừng, dùng khối:', o: ['liên tục', 'lặp lại cho đến khi', 'nếu … thì', 'di chuyển'], a: 1, why: '“lặp lại cho đến khi” dừng khi điều kiện đúng.' } ] },
  { id: 't4', name: 'Kết hợp các cấu trúc', tip: 'Ghép cả ba cấu trúc – chú cá bơi thông minh hẳn!',
    html: S4('Cá bơi mãi; <b>nếu</b> chạm cạnh thì quay đầu.',
      'Đặt <code>nếu … thì</code> <b>bên trong</b> <code>liên tục</code>, cùng các lệnh tuần tự.',
      'Thiếu khối lặp thì chú cá bơi được bao lâu?',
      'Kết hợp <span class="k">tuần tự, rẽ nhánh, lặp</span>.'),
    quiz: [
      { q: 'Muốn kiểm tra điều kiện liên tục, đặt “nếu … thì”:', o: ['Ngoài chương trình', 'Sau lệnh dừng', 'Bên trong khối liên tục', 'Không cần đặt'], a: 2, why: 'Trong khối liên tục, điều kiện được kiểm tra mãi.' },
      { q: 'Một chương trình thường kết hợp:', o: ['Chỉ tuần tự', 'Chỉ lặp', 'Chỉ rẽ nhánh', 'Tuần tự, rẽ nhánh và lặp'], a: 3, why: 'Chương trình thực tế kết hợp cả ba cấu trúc.' } ] },
  { id: 't5', name: 'Tổng kết bài học', tip: 'Ba cấu trúc là xương sống của mọi chương trình!',
    html: S4('Ghép đúng: tuần tự – rẽ nhánh – lặp với khối lệnh Scratch.',
      'Tuần tự: khối nối tiếp; rẽ nhánh: <code>nếu</code>; lặp: <code>lặp lại</code>, <code>liên tục</code>.',
      'Tìm cấu trúc lặp trong cuộc sống (đánh răng, tập thể dục…).',
      '3 cấu trúc là <span class="k">xương sống</span> của chương trình.'),
    quiz: [
      { q: 'Khối “liên tục” thuộc cấu trúc:', o: ['Tuần tự', 'Lặp', 'Rẽ nhánh', 'Biến'], a: 1, why: '“liên tục” lặp lại các lệnh bên trong mãi mãi.' },
      { q: 'Khối “nếu … thì” thuộc cấu trúc:', o: ['Rẽ nhánh', 'Lặp', 'Tuần tự', 'Kiểu dữ liệu'], a: 0, why: '“nếu … thì” chọn việc theo điều kiện.' } ] },
];

const KEY = [
  'Tuần tự, rẽ nhánh,<br><b>lặp</b>.',
  '<b>nếu … thì</b>:<br>theo điều kiện.',
  '<b>lặp lại</b>, lặp đến<br>khi, liên tục.',
  'Kết hợp cả<br><b>3 cấu trúc</b>.',
  '<b>Xương sống</b><br>của chương trình.',
];
