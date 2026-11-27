/* ===== BÀI 9: HIỆU ỨNG CHUYỂN TRANG ===== */
const META = { key: 'bai9', num: 9, theme: 'tuyet', ic: '✨', cd: 5, en: 'Hiệu ứng chuyển trang',
  title: 'Bài 9. Hiệu ứng chuyển trang', big: 'Hiệu ứng<br>chuyển trang',
  st2: 'Chủ đề 5 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Như bông tuyết bay lả tả, trang chiếu cũng có thể chuyển thật đẹp!',
  cert: 'Tin học 4 – Bài 9. Hiệu ứng chuyển trang', file: 'Tin4_Bai9', pass: 8 };

const COVER = () => svgC(`${slideT(40, 60, 240, 160, '#1982C4', 'Trang 1', 24, 2)}<g transform="rotate(12 440 150)">${slideT(320, 70, 240, 160, '#FF006E', 'Trang 2', 24, 2)}</g>${arc(300, 150, 60, 200, 340, 1, '#FFC300')}${star(560, 320, 14, '#FFD60A')}${star(40, 320, 12, '#8338EC')}`);
const ILL_T = {
  t1: () => svg(`${slideT(40, 60, 230, 150, '#1982C4', 'Trang 1', 22, 2)}${arr(285, 135, 330, 135, O, 7)}<g opacity=".9" transform="rotate(-8 450 135)">${slideT(340, 60, 230, 150, '#FF006E', 'Trang 2', 22, 2)}</g>
    ${pillS(40, 320, 520, 54, '#8338EC', 'Hiệu ứng khi sang trang mới', 24)}`),
  t2: () => svg(`${winbox(40, 30, 520, 260, 'Transitions', `${['Fade', 'Push', 'Wipe', 'Split'].map((t, i) => pillS(60 + i*122, 110, 110, 70, ['#FF006E', '#1982C4', '#2DA44E', '#FF7F11'][i], t, 22)).join('')}${cursor(200, 160, .8)}`, '#8338EC')}
    ${pillS(60, 320, 480, 54, '#8338EC', 'Dải Transitions: chọn hiệu ứng', 22)}`),
  t3: () => svg(`${clock(140, 150, 1.6)}${pillS(260, 90, 300, 54, '#FF7F11', 'Duration: 02.00', 24)}${pillS(260, 170, 300, 54, '#2DA44E', 'Preview: xem thử', 24)}
    ${pillS(60, 320, 480, 54, '#1982C4', 'Thời gian và xem thử', 26)}`),
  t4: () => svg(`${[0, 1, 2, 3].map(i => slide(60 + i*125, 80, 105, 70, ['#FF006E', '#1982C4', '#2DA44E', '#FF7F11'][i], `${star(112 + i*125, 115, 14, '#fff')}`)).join('')}
    ${pillS(140, 190, 320, 54, '#8338EC', 'Apply To All', 26)}${pillS(40, 320, 520, 54, '#2DA44E', 'Áp dụng cho tất cả các trang', 22)}`),
  t5: () => svg(`${vflow([['#1982C4', 'Chọn trang'], ['#8338EC', 'Chọn hiệu ứng'], ['#2DA44E', 'Thời gian, xem thử']], 150, 40, 300, 110, 26)}${star(60, 60, 14, '#FFD60A')}`),
};

const TOPICS = [
  { id: 't1', name: 'Hiệu ứng chuyển trang là gì?', tip: 'Trang chiếu có thể trượt, mờ dần, lật… thật vui mắt!',
    html: S4Q(['Xem hai bài trình chiếu: bài nào <b>sinh động</b> hơn khi sang trang?', ''],
      ['Hiệu ứng chuyển trang là gì?', 'Là cách trang chiếu <b>xuất hiện</b> khi chuyển từ trang trước sang.'],
      ['Hiệu ứng giúp gì cho bài trình chiếu?', 'Bài <b>sinh động</b>, thu hút người xem hơn.'],
      ['Hiệu ứng khi <span class="k">sang trang mới</span>.', 'Giúp bài <b>sinh động</b>.', 'Không nên dùng <b>quá rối mắt</b>.']),
    quiz: [
      { q: 'Hiệu ứng chuyển trang xuất hiện khi:', o: ['Gõ chữ', 'Chuyển sang trang chiếu mới', 'Lưu bài', 'Tắt máy'], a: 1, why: 'Hiệu ứng xuất hiện khi trang mới hiện ra.' },
      { q: 'Hiệu ứng chuyển trang giúp bài trình chiếu:', o: ['Sinh động, hấp dẫn', 'Mất chữ', 'Nặng hơn', 'Không mở được'], a: 0, why: 'Hiệu ứng làm bài sinh động hơn.' } ] },
  { id: 't2', name: 'Chọn hiệu ứng', tip: 'Dải Transitions là nơi chứa các hiệu ứng!',
    html: S4Q(['Thêm hiệu ứng <b>Push</b> cho trang 2.', ''],
      ['Các hiệu ứng nằm ở dải lệnh nào?', 'Dải <b>Transitions</b>.'],
      ['Các bước thêm hiệu ứng là gì?', 'Chọn <b>trang</b> bên trái → dải <b>Transitions</b> → nháy <b>hiệu ứng</b>.'],
      ['Chọn trang ở <b>bên trái</b>.', 'Mở dải <span class="k">Transitions</span>.', 'Nháy chọn <b>hiệu ứng</b>.']),
    quiz: [
      { q: 'Hiệu ứng chuyển trang nằm ở dải lệnh:', o: ['Home', 'Insert', 'File', 'Transitions'], a: 3, why: 'Transitions chứa các hiệu ứng chuyển trang.' },
      { q: 'Trước khi chọn hiệu ứng, em cần:', o: ['Chọn trang chiếu', 'Tắt máy', 'Đóng PowerPoint', 'Xoá trang'], a: 0, why: 'Chọn trang cần áp dụng hiệu ứng trước.' } ] },
  { id: 't3', name: 'Thời gian và xem thử', tip: 'Đặt thời gian vừa phải – không nhanh quá, không chậm quá!',
    html: S4Q(['Đặt hiệu ứng chạy trong <b>2 giây</b> và xem thử.', ''],
      ['Đặt thời gian hiệu ứng ở đâu?', 'Ô <b>Duration</b> trên dải Transitions.'],
      ['Xem thử hiệu ứng bằng nút nào?', 'Nút <b>Preview</b>.'],
      ['<span class="k">Duration</span>: thời gian chạy.', '<b>Preview</b>: xem thử.', 'Thời gian <b>vừa phải</b>.']),
    quiz: [
      { q: 'Ô Duration dùng để đặt:', o: ['Màu chữ', 'Cỡ chữ', 'Thời gian hiệu ứng', 'Tên tệp'], a: 2, why: 'Duration là thời gian chạy hiệu ứng.' },
      { q: 'Nút Preview dùng để:', o: ['Lưu bài', 'Xem thử hiệu ứng', 'Xoá hiệu ứng', 'Thêm trang'], a: 1, why: 'Preview để xem thử hiệu ứng.' } ] },
  { id: 't4', name: 'Áp dụng cho mọi trang', tip: 'Một nút bấm – tất cả các trang đều có hiệu ứng!',
    html: S4Q(['Cho <b>tất cả các trang</b> cùng một hiệu ứng.', ''],
      ['Dùng nút nào?', 'Nút <b>Apply To All</b> trên dải Transitions.'],
      ['Muốn bỏ hiệu ứng của một trang thì sao?', 'Chọn trang đó, chọn hiệu ứng <b>None</b>.'],
      ['<span class="k">Apply To All</span>: mọi trang.', '<b>None</b>: bỏ hiệu ứng.', 'Trình chiếu <b>F5</b> để xem.']),
    quiz: [
      { q: 'Để mọi trang chiếu có cùng hiệu ứng, em nháy:', o: ['Preview', 'None', 'Duration', 'Apply To All'], a: 3, why: 'Apply To All áp dụng cho tất cả các trang.' },
      { q: 'Muốn bỏ hiệu ứng của một trang, em chọn hiệu ứng:', o: ['None', 'Push', 'Fade', 'Wipe'], a: 0, why: 'None nghĩa là không có hiệu ứng.' } ] },
  { id: 't5', name: 'Bài trình chiếu sinh động', tip: 'Ôn lại: chọn trang – hiệu ứng – thời gian – xem!',
    html: S4Q(['Thêm hiệu ứng cho bài “<b>Gia đình em</b>” rồi trình chiếu.', ''],
      ['Nêu các bước thêm hiệu ứng?', 'Chọn trang → <b>Transitions</b> → chọn hiệu ứng → <b>Duration</b> → Preview.'],
      ['Nên dùng hiệu ứng thế nào?', '<b>Nhẹ nhàng</b>, ít loại, không làm người xem rối mắt.'],
      ['Chọn hiệu ứng ở <b>Transitions</b>.', 'Đặt <span class="k">thời gian</span>, xem thử.', 'Dùng hiệu ứng <b>vừa phải</b>.']),
    quiz: [
      { q: 'Sử dụng hiệu ứng chuyển trang hợp lí là:', o: ['Mỗi trang một hiệu ứng rối mắt', 'Hiệu ứng nhẹ nhàng, vừa phải', 'Thời gian thật dài', 'Không bao giờ dùng'], a: 1, why: 'Hiệu ứng vừa phải giúp bài đẹp mà không rối.' },
      { q: 'Để xem hiệu ứng khi trình chiếu, em nhấn:', o: ['Ctrl + S', 'Delete', 'F5', 'Ctrl + C'], a: 2, why: 'F5 để trình chiếu bài.' } ] },
];

const KEY = [
  'Hiệu ứng khi<br><b>sang trang</b>.',
  'Dải<br><b>Transitions</b>.',
  '<b>Duration</b>,<br>Preview.',
  '<b>Apply To All</b>,<br>None.',
  'Hiệu ứng<br><b>vừa phải</b>.',
];
