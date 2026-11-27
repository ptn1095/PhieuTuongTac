/* ===== BÀI 4: LÀM VIỆC VỚI MÁY TÍNH ===== */
const META = { key: 'bai4', num: 4, theme: 'lauda', ic: '🖱️', cd: 1, en: 'Làm việc với máy tính',
  title: 'Bài 4. Làm việc với máy tính', big: 'Làm việc<br>với máy tính',
  st2: 'Chủ đề 1 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Chào mừng đến lâu đài! Hôm nay ta học bật, tắt máy và dùng chuột nhé!',
  cert: 'Tin học 3 – Bài 4. Làm việc với máy tính', file: 'Tin3_Bai4', pass: 8 };

const pwr = (x, y, s = 1, c = '#2DA44E') => G(x, y, s, `<circle r="46" fill="${c}" ${ST}/><path d="M-18 -16 A26 26 0 1 0 18 -16" fill="none" stroke="#fff" stroke-width="9" stroke-linecap="round"/><line x1="0" y1="-30" x2="0" y2="2" stroke="#fff" stroke-width="9" stroke-linecap="round"/>`);
const COVER = () => svgC(`${monitor(60, 60, 220, 140, `${cursor(170, 110, .8)}`)}${mouseI(420, 170, .9, 'L')}${pwr(540, 80, .7)}${star(560, 300, 14, '#FFD60A')}${star(330, 40, 12, '#FF006E')}`);
const ILL_T = {
  t1: () => svg(`${casePC(80, 60, 1.2)}${pwr(380, 140, 1.4)}${arr(200, 220, 310, 170, O, 7)}
    ${pillS(40, 330, 520, 54, '#2DA44E', 'Bật máy: nhấn nút nguồn', 26)}${star(560, 40, 14, '#FFD60A')}`),
  t2: () => svg(`${winbox(40, 40, 520, 260, 'Start', `${pillS(90, 120, 180, 50, '#1982C4', 'Start', 24)}${arr(280, 145, 330, 145, O, 6)}${pillS(340, 120, 190, 50, '#E5383B', 'Shut down', 22)}${pwr(310, 240, .6, '#E5383B')}`, '#1982C4')}
    ${pillS(60, 330, 480, 54, '#E5383B', 'Tắt máy đúng cách', 26)}`),
  t3: () => svg(`${mouseI(170, 200, 1.4, 'L')}${hand(330, 210, .8, 10)}
    ${pillS(330, 60, 240, 50, '#FF006E', 'Nút trái', 24)}${pillS(330, 130, 240, 50, '#1982C4', 'Nút phải', 24)}${pillS(40, 345, 520, 50, '#8338EC', 'Úp tay lên chuột, ngón trỏ ở nút trái', 20)}`),
  t4: () => svg(`${monitor(40, 50, 300, 190, `${folder(110, 120, .7, '#FFC300')}${cursor(150, 130, .7)}${folder(250, 120, .7, '#FF7F11')}`)}
    ${pillS(390, 40, 190, 46, '#1982C4', 'Di chuyển', 22)}${pillS(390, 100, 190, 46, '#FF006E', 'Nháy chuột', 22)}${pillS(390, 160, 190, 46, '#FF7F11', 'Nháy đúp', 22)}${pillS(390, 220, 190, 46, '#2DA44E', 'Kéo thả', 22)}`),
  t5: () => svg(`${vflow([['#2DA44E', 'Bật máy'], ['#8338EC', 'Dùng chuột'], ['#E5383B', 'Tắt máy đúng cách']], 150, 40, 300, 110, 26)}${star(60, 60, 14, '#FFD60A')}${star(550, 360, 12, '#FF006E')}`),
};

const TOPICS = [
  { id: 't1', name: 'Bật máy tính', tip: 'Tìm nút có kí hiệu vòng tròn và vạch thẳng – đó là nút nguồn!',
    html: S4Q(['Em muốn dùng máy tính. Em phải làm gì <b>đầu tiên</b>?', 'Gợi ý: tìm nút nguồn.'],
      ['Nút nguồn có kí hiệu gì?', 'Hình <b>vòng tròn</b> có một <b>vạch thẳng</b> ở trên.'],
      ['Bật máy xong, màn hình hiện gì?', 'Hiện <b>màn hình nền</b> với các biểu tượng.'],
      ['Nhấn <span class="k">nút nguồn</span> để bật máy.', 'Chờ máy khởi động <b>xong</b>.', 'Màn hình nền có các <b>biểu tượng</b>.']),
    quiz: [
      { q: 'Để bật máy tính, em nhấn vào:', o: ['Phím Enter', 'Nút chuột phải', 'Nút nguồn', 'Màn hình'], a: 2, why: 'Nút nguồn dùng để bật máy tính.' },
      { q: 'Sau khi khởi động xong, màn hình máy tính hiện:', o: ['Màn hình nền', 'Tờ giấy trắng', 'Bàn phím', 'Không có gì'], a: 0, why: 'Máy khởi động xong sẽ hiện màn hình nền.' } ] },
  { id: 't2', name: 'Tắt máy đúng cách', tip: 'Không rút điện đột ngột – máy có thể bị hỏng!',
    html: S4Q(['Học xong, em <b>tắt máy</b> thế nào cho đúng?', ''],
      ['Các bước tắt máy là gì?', 'Nháy <b>Start</b> → chọn <b>Power</b> → chọn <b>Shut down</b>.'],
      ['Vì sao không nên rút điện để tắt máy?', 'Máy dễ <b>hỏng</b>, mất dữ liệu đang làm.'],
      ['Nháy <b>Start</b> rồi <b>Power</b>.', 'Chọn <span class="k">Shut down</span>.', '<b>Không</b> rút điện đột ngột.']),
    quiz: [
      { q: 'Để tắt máy tính đúng cách, em chọn:', o: ['Rút phích điện', 'Start → Power → Shut down', 'Tắt màn hình', 'Nhấn phím cách'], a: 1, why: 'Tắt máy qua Start → Power → Shut down là đúng cách.' },
      { q: 'Rút điện để tắt máy tính có thể làm:', o: ['Máy chạy nhanh hơn', 'Máy sạch hơn', 'Máy hỏng, mất dữ liệu', 'Không sao'], a: 2, why: 'Tắt máy đột ngột có thể làm hỏng máy và mất dữ liệu.' } ] },
  { id: 't3', name: 'Cầm chuột đúng cách', tip: 'Úp bàn tay lên chuột, ngón trỏ đặt lên nút trái nhé!',
    html: S4Q(['Quan sát con chuột: chuột có những <b>nút</b> nào?', ''],
      ['Chuột có mấy nút chính?', 'Có <b>nút trái</b>, <b>nút phải</b> và <b>con lăn</b> ở giữa.'],
      ['Đặt tay lên chuột thế nào cho đúng?', 'Úp tay phải lên chuột, <b>ngón trỏ</b> trên nút trái, <b>ngón giữa</b> trên nút phải.'],
      ['Chuột có <b>nút trái, nút phải</b>.', '<span class="k">Ngón trỏ</span> đặt lên nút trái.', 'Cổ tay <b>thả lỏng</b>, chạm mặt bàn.']),
    quiz: [
      { q: 'Khi cầm chuột, ngón trỏ đặt lên:', o: ['Nút phải', 'Con lăn', 'Dây chuột', 'Nút trái'], a: 3, why: 'Ngón trỏ đặt lên nút trái của chuột.' },
      { q: 'Phần nằm giữa nút trái và nút phải của chuột là:', o: ['Con lăn', 'Nút nguồn', 'Phím cách', 'Màn hình'], a: 0, why: 'Con lăn chuột nằm ở giữa hai nút.' } ] },
  { id: 't4', name: 'Các thao tác với chuột', tip: 'Nháy chuột, nháy đúp, kéo thả – thử ngay nào!',
    html: S4Q(['Thử dùng chuột: <b>chọn</b> và <b>mở</b> một biểu tượng trên màn hình nền.', ''],
      ['Nháy chuột và nháy đúp khác nhau thế nào?', 'Nháy chuột: nhấn nút trái <b>1 lần</b>; nháy đúp: nhấn <b>2 lần</b> thật nhanh.'],
      ['Kéo thả chuột là gì?', 'Nhấn <b>giữ</b> nút trái, <b>di chuyển</b> chuột rồi <b>thả</b> tay.'],
      ['<b>Nháy chuột</b>: chọn đối tượng.', '<span class="k">Nháy đúp</span>: mở đối tượng.', '<b>Kéo thả</b>: di chuyển đối tượng.']),
    quiz: [
      { q: 'Để mở một biểu tượng trên màn hình nền, em thường:', o: ['Nháy đúp chuột', 'Nhấn phím cách', 'Lăn chuột', 'Tắt máy'], a: 0, why: 'Nháy đúp vào biểu tượng để mở nó.' },
      { q: 'Nhấn giữ nút trái, di chuyển chuột rồi thả tay gọi là:', o: ['Nháy chuột', 'Nháy đúp', 'Kéo thả', 'Nháy nút phải'], a: 2, why: 'Đó là thao tác kéo thả chuột.' } ] },
  { id: 't5', name: 'Em làm chủ máy tính', tip: 'Ôn lại: bật máy – dùng chuột – tắt máy!',
    html: S4Q(['Nói lại các bước một buổi học với <b>máy tính</b>.', ''],
      ['Bắt đầu và kết thúc buổi học, em làm gì?', 'Đầu buổi <b>bật máy</b>; cuối buổi <b>tắt máy đúng cách</b>.'],
      ['Em đã biết những thao tác chuột nào?', 'Di chuyển, nháy chuột, nháy đúp, kéo thả.'],
      ['Bật máy bằng <b>nút nguồn</b>.', 'Dùng chuột <span class="k">thành thạo</span>.', 'Tắt máy bằng <b>Shut down</b>.']),
    quiz: [
      { q: 'Nháy chuột là:', o: ['Nhấn nút trái 2 lần', 'Nhấn nút trái 1 lần rồi thả', 'Lăn con lăn', 'Kéo chuột'], a: 1, why: 'Nháy chuột: nhấn nút trái một lần rồi thả.' },
      { q: 'Thao tác nào nên làm cuối buổi học?', o: ['Rút dây chuột', 'Đập nhẹ màn hình', 'Để máy chạy cả đêm', 'Tắt máy đúng cách'], a: 3, why: 'Tắt máy đúng cách giúp máy bền và tiết kiệm điện.' } ] },
];

const KEY = [
  'Nhấn <b>nút nguồn</b><br>để bật máy.',
  'Start → Power<br>→ <b>Shut down</b>.',
  'Ngón trỏ ở<br><b>nút trái</b>.',
  'Nháy, <b>nháy đúp</b>,<br>kéo thả.',
  'Bật – dùng chuột<br>– <b>tắt đúng cách</b>.',
];
