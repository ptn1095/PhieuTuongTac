/* ===== NHÁNH 10: PEN – BÚT VẼ (tiện ích mở rộng) ===== */
const META = { key: 'pen', num: 10, title: 'Nhóm lệnh Pen (Bút vẽ)', big: 'NHÓM LỆNH<br>PEN – BÚT VẼ',
  st2: 'Bút vẽ (tiện ích mở rộng) — 5 nội dung • 10 câu đố • nhận giấy chứng nhận',
  hello: 'Cùng biến nhân vật thành chiếc bút vẽ hình thật đẹp nhé!',
  cert: 'TIỆN ÍCH PEN – BÚT VẼ', file: 'Pen', pass: 8 };

const pencil = (x, y, a = 0, s = 1) => `<g transform="translate(${x} ${y}) rotate(${a}) scale(${s})"><rect x="-14" y="-110" width="28" height="90" rx="4" fill="#FFC300" stroke="${O}" stroke-width="5"/><rect x="-14" y="-122" width="28" height="16" rx="4" fill="#FF8FAB" stroke="${O}" stroke-width="5"/><path d="M-14 -20 L0 10 L14 -20Z" fill="#F5D7A1" stroke="${O}" stroke-width="5" stroke-linejoin="round"/><path d="M-5 -1 L0 10 L5 -1Z" fill="${O}"/></g>`;
const poly = (cx, cy, r, n, c, w = 8, rot = -90) => `<polygon points="${[...Array(n)].map((_, i) => { const a = (rot + i*360/n)*Math.PI/180; return `${cx + r*Math.cos(a)},${cy + r*Math.sin(a)}`; }).join(' ')}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linejoin="round"/>`;

const ILL_T = {
  t1: () => svg(`<rect x="40" y="60" width="300" height="300" rx="24" fill="#fff" stroke="${O}" stroke-width="6"/>
    <rect x="70" y="90" width="240" height="150" rx="16" fill="#0FBD8C"/>${pencil(190, 220, 30, 1)}${txt(190, 300, 'Pen', 40, O)}
    <rect x="390" y="270" width="150" height="90" rx="22" fill="#4C97FF" stroke="${O}" stroke-width="6"/>${txt(465, 330, '⊕', 56, '#fff')}
    ${arr(465, 250, 380, 190, '#FF006E', 8)}${pillS(370, 60, 200, 46, '#FF006E', 'Add Extension', 22)}`),
  t2: () => svg(`${stg(40, 40, 520, 340, false)}<path d="M80 300 Q200 120 300 220" fill="none" stroke="#0FBD8C" stroke-width="10" stroke-linecap="round"/>
    <path d="M300 220 Q360 280 420 220" fill="none" stroke="#0FBD8C" stroke-width="6" stroke-dasharray="4 14" stroke-linecap="round" opacity=".7"/>${pencil(430, 230, 20, .8)}
    ${pillS(70, 60, 170, 46, '#0FBD8C', 'pen down ✏️', 22)}${pillS(340, 60, 170, 46, '#0B8E69', 'pen up', 22)}${pillS(200, 320, 200, 44, '#E5383B', 'erase all', 22)}`),
  t3: () => svg(`<line x1="60" y1="90" x2="540" y2="90" stroke="#FF006E" stroke-width="6" stroke-linecap="round"/><line x1="60" y1="170" x2="540" y2="170" stroke="#1982C4" stroke-width="14" stroke-linecap="round"/><line x1="60" y1="260" x2="540" y2="260" stroke="#2DA44E" stroke-width="26" stroke-linecap="round"/>
    ${pillS(60, 110, 140, 40, '#FF006E', 'size 2', 20)}${pillS(60, 196, 140, 40, '#1982C4', 'size 6', 20)}${pillS(60, 290, 150, 40, '#2DA44E', 'size 12', 20)}
    ${[0,1,2,3,4,5,6].map(i => `<circle cx="${250 + i*44}" cy="350" r="18" fill="hsl(${i*50},90%,55%)" stroke="${O}" stroke-width="3"/>`).join('')}`),
  t4: () => svg(`${poly(170, 210, 120, 4, '#0FBD8C', 10, -45)}${poly(440, 230, 110, 3, '#FF006E', 10)}
    ${pillS(70, 350, 200, 44, '#0FBD8C', '4 × 90°', 24)}${pillS(340, 350, 200, 44, '#FF006E', '3 × 120°', 24)}${pencil(255, 125, 0, .6)}`),
  t5: () => svg(`${poly(150, 180, 100, 6, '#8338EC', 9)}${pillS(60, 310, 180, 44, '#8338EC', '6 × 60°', 24)}
    ${spr(360, 120, 0, '#FF7F11', .7, .35)}${spr(430, 120, 0, '#FF7F11', .7, .55)}${spr(500, 120, 0, '#FF7F11', .7)}
    ${spr(360, 230, 0, '#2EC4B6', .7, .35)}${spr(430, 230, 0, '#2EC4B6', .7, .55)}${spr(500, 230, 0, '#2EC4B6', .7)}${pillS(350, 310, 180, 44, '#0FBD8C', 'stamp', 24)}`),
};

const TOPICS = [
  { id: 't1', c: ['#22C493', '#1E9BD7'], dk: '#0B7285', title: 'Thêm tiện ích Pen',
    tip: 'Pen không có sẵn – phải bấm nút Add Extension để lấy ra nha!',
    html: `<ul>
      <li><span class="k">Pen</span> (Bút vẽ) là <b>tiện ích mở rộng</b>, màu <b style="color:#0B8E69">xanh ngọc</b>.</li>
      <li>Bấm nút <b>Add Extension</b> <code>⊕</code> ở <span class="k">góc trái dưới</span>.</li>
      <li>Chọn <b>Pen</b> → nhóm lệnh Pen hiện ra cuối bảng lệnh.</li>
      <li>Nhân vật thành <b>chiếc bút</b>, để lại nét khi di chuyển.</li></ul>`,
    quiz: [
      { q: 'Để có nhóm lệnh Pen, em bấm nút:', o: ['Choose a Sprite', 'Add Extension (góc trái dưới)', 'Make a Block', 'Thẻ Sounds'], a: 1, why: 'Pen là tiện ích mở rộng, thêm bằng nút Add Extension.' },
      { q: 'Khi dùng Pen, nhân vật giống như:', o: ['Chiếc loa', 'Cục tẩy', 'Chiếc bút vẽ trên sân khấu', 'Phông nền'], a: 2, why: 'Nhân vật di chuyển và để lại nét vẽ.' } ] },
  { id: 't2', c: ['#FF7F11', '#FF006E'], dk: '#C2255C', title: 'Hạ bút, nhấc bút',
    tip: 'pen down là đặt bút xuống giấy, pen up là nhấc bút lên!',
    html: `<div class="blocks">${B('pen down', 'pen')}${B('pen up', 'pen')}${B('erase all', 'pen')}</div><ul>
      <li><b>pen down</b>: <span class="k">hạ bút</span>, đi tới đâu vẽ tới đó.</li>
      <li><b>pen up</b>: <span class="k">nhấc bút</span>, di chuyển không vẽ.</li>
      <li><b>erase all</b>: xoá hết nét vẽ trên sân khấu.</li></ul>`,
    quiz: [
      { q: 'Muốn nhân vật di chuyển mà KHÔNG để lại nét vẽ, em dùng:', o: ['pen up', 'pen down', 'stamp', 'set pen size to (1)'], a: 0, why: 'Nhấc bút lên thì không vẽ nữa.' },
      { q: 'Lệnh nào xoá sạch các nét đã vẽ?', o: ['hide', 'pen up', 'clear graphic effects', 'erase all'], a: 3, why: 'erase all xoá hết nét bút trên sân khấu.' } ] },
  { id: 't3', c: ['#3A8DFF', '#00C2D1'], dk: '#1864AB', title: 'Màu và độ dày nét',
    tip: 'Đổi màu bút trong vòng lặp là vẽ được cầu vồng đó!',
    html: `<div class="blocks">${B('set pen color to <span style="display:inline-block;width:34px;height:34px;border-radius:50%;background:#FF006E;border:3px solid #fff"></span>', 'pen')}${B(`change pen ${D('color')} by ${N(10)}`, 'pen')}${B(`set pen size to ${N(5)}`, 'pen')}${B(`change pen size by ${N(1)}`, 'pen')}</div><ul>
      <li><b>set pen color</b>: chọn <span class="k">màu bút</span>; <b>change pen color</b>: đổi dần màu.</li>
      <li><b>set pen size to</b>: <span class="k">đặt cố định</span> độ dày nét.</li>
      <li><b>change pen size by</b>: <span class="k">tăng / giảm</span> độ dày (số âm: mảnh đi).</li></ul>`,
    quiz: [
      { q: 'Lệnh nào giúp CỐ ĐỊNH độ dày nét bút là 10?', o: ['change pen size by (10)', 'set pen size to (10)', 'change size by (10)', 'set size to (10) %'], a: 1, why: 'set pen size to đặt đúng độ dày 10; change pen size by chỉ cộng thêm vào độ dày cũ.' },
      { q: 'Đặt change pen color by (10) trong vòng lặp vẽ sẽ tạo ra:', o: ['Nét một màu', 'Nét bị xoá', 'Nét đổi màu dần như cầu vồng', 'Nét to dần'], a: 2, why: 'Mỗi vòng màu bút thay đổi một chút.' } ] },
  { id: 't4', c: ['#7AD86F', '#14A0A0'], dk: '#087F5B', title: 'Vẽ hình vuông, tam giác',
    tip: 'Mẹo: số lần lặp × số độ xoay = 360!',
    html: `<div class="prog">${STK(B('pen down', 'pen'), CB(`repeat ${N(4)}`, 'ct', B(`move ${N(100)} steps`), B(`turn <b class="ic">↻</b> ${N(90)} degrees`)))}
      <ul class="side"><li><b>4</b> cạnh × <b>90°</b> = hình vuông.</li><li><b>3</b> cạnh × <b>120°</b> = tam giác đều.</li></ul></div><ul>
      <li>Quy tắc: <code>số cạnh × góc xoay = 360</code></li></ul>`,
    quiz: [
      { q: 'Vẽ tam giác đều: repeat (3) { move (100), turn ↻ (?) }. Số ? là:', o: ['90', '60', '360', '120'], a: 3, why: '3 × 120 = 360 độ.' },
      { q: 'Đoạn lệnh trong ví dụ vẽ ra hình gì?', o: ['Hình vuông cạnh 100', 'Tam giác', 'Hình tròn', 'Đường thẳng'], a: 0, why: '4 cạnh dài 100, mỗi lần rẽ 90°.' } ] },
  { id: 't5', c: ['#4F7CFF', '#B06BFF'], dk: '#5F3DC4', title: 'Đa giác và in hình',
    tip: 'stamp giống con dấu: in hình nhân vật lên sân khấu!',
    html: `<div class="blocks">${B('stamp', 'pen')}${CB(`repeat ${N(6)}`, 'ct', B(`move ${N(60)} steps`), B(`turn <b class="ic">↻</b> ${N(60)} degrees`))}</div><ul>
      <li><b>stamp</b>: <span class="k">in hình</span> nhân vật lên sân khấu.</li>
      <li>Lục giác: <code>6 × 60° = 360°</code>.</li></ul>`,
    quiz: [
      { q: 'Muốn vẽ hình lục giác đều (6 cạnh), mỗi lần em xoay:', o: ['90 độ', '45 độ', '60 độ', '120 độ'], a: 2, why: '360 : 6 = 60 độ.' },
      { q: 'Lệnh stamp dùng để:', o: ['Xoá nét vẽ', 'In hình nhân vật lên sân khấu', 'Nhấc bút', 'Đổi màu bút'], a: 1, why: 'stamp in lại hình dáng nhân vật như con dấu.' } ] },
];

const KEY = ['<b>Add Extension</b><br>→ chọn <b>Pen</b>', '<b>pen down</b>: vẽ<br><b>pen up</b>: không vẽ<br><b>erase all</b>', '<b>pen color</b>: màu<br><b>set pen size</b>: đặt độ dày<br><b>change pen size</b>: tăng/giảm',
  'Số cạnh × góc<br>= <b>360°</b>', '<b>stamp</b>: in hình<br>lục giác: 6 × 60°'];
