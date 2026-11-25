/* ===== NHÁNH 3: EVENTS – SỰ KIỆN ===== */
const META = { key: 'events', num: 4, title: 'Nhóm lệnh Events', big: 'NHÓM LỆNH<br>EVENTS',
  st2: 'Sự kiện — 5 nội dung • 10 câu đố • nhận giấy chứng nhận',
  hello: 'Cùng khám phá nhóm lệnh Sự kiện (màu vàng) nhé!',
  cert: 'NHÓM LỆNH EVENTS – SỰ KIỆN', file: 'Events', pass: 8 };

const hatS = (x, y, w, t, fs = 26) => `<path d="M${x} ${y + 24} Q${x + 60} ${y - 22} ${x + 120} ${y + 24} H${x + w} a10 10 0 0 1 10 10 V${y + 84} a10 10 0 0 1 -10 10 H${x}Z" fill="#FFBF00" stroke="#CC9900" stroke-width="4"/>${txt(x + 18, y + 72, t, fs, '#fff', 'start')}`;
const env = (x, y, s = 1, c = '#FFD60A') => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-38" y="-26" width="76" height="52" rx="8" fill="${c}" stroke="${O}" stroke-width="5"/><path d="M-36 -22 L0 6 L36 -22" fill="none" stroke="${O}" stroke-width="5" stroke-linejoin="round"/></g>`;

const ILL_T = {
  t1: () => svg(`${hatS(70, 40, 300, 'when')}${flagI(170, 92, .9)}${txt(225, 112, 'clicked', 26, '#fff', 'start')}
    <rect x="70" y="140" width="300" height="56" rx="8" fill="#4C97FF" stroke="#3373CC" stroke-width="4"/>${txt(88, 177, 'move 10 steps', 24, '#fff', 'start')}
    <rect x="70" y="200" width="300" height="56" rx="8" fill="#9966FF" stroke="#774DCB" stroke-width="4"/>${txt(88, 237, 'say Hello!', 24, '#fff', 'start')}
    <circle cx="480" cy="110" r="56" fill="#4CBF56" stroke="${O}" stroke-width="6"/>${flagI(466, 86, 1.1)}
    <polygon points="450,230 510,230 540,260 540,320 510,350 450,350 420,320 420,260" fill="#E5383B" stroke="${O}" stroke-width="6"/>
    ${pillS(400, 176, 160, 40, '#2DA44E', 'Chạy', 22)}${pillS(400, 364, 160, 40, '#E5383B', 'Dừng', 22)}${star(40, 360, 16, '#FFD60A')}`),
  t2: () => svg(`${key3d(240, 60, 120, 100, '#FFBF00', '#CC9900', '↑', 60)}${key3d(100, 190, 120, 100, '#FFBF00', '#CC9900', '←', 60)}${key3d(240, 190, 120, 100, '#FFBF00', '#CC9900', '↓', 60)}${key3d(380, 190, 120, 100, '#FFBF00', '#CC9900', '→', 60)}
    ${key3d(150, 318, 300, 70, '#FF006E', '#B0004C', 'space', 32)}${star(60, 70, 16, '#8338EC')}${star(540, 80, 14, '#2EC4B6')}`),
  t3: () => svg(`<rect x="40" y="40" width="520" height="340" rx="24" fill="#F1F8FF" stroke="${O}" stroke-width="6"/>
    ${spr(260, 210, 0, '#FF7F11', 1.6)}
    <g transform="translate(300 230) rotate(-20)"><path d="M0 0 L0 64 L16 50 L28 76 L40 70 L28 44 L48 44Z" fill="#fff" stroke="${O}" stroke-width="5" stroke-linejoin="round"/></g>
    <circle cx="300" cy="230" r="30" fill="none" stroke="#FF006E" stroke-width="5" stroke-dasharray="6 6"/>
    ${pillS(330, 70, 210, 46, '#FFBF00', 'Bấm vào tớ!', 24)}${star(80, 80, 16, '#FFD60A')}${star(520, 340, 14, '#8338EC')}`),
  t4: () => svg(`<rect x="40" y="70" width="220" height="170" rx="20" fill="#8AD3FF" stroke="${O}" stroke-width="5"/><rect x="43" y="190" width="214" height="47" fill="#8AC926"/>
    <rect x="340" y="70" width="220" height="170" rx="20" fill="#FFB4A2" stroke="${O}" stroke-width="5"/><rect x="343" y="190" width="214" height="47" fill="#9C6644"/>
    ${txt(150, 140, 'Màn 1', 34)}${txt(450, 140, 'Màn 2', 34)}${arr(266, 155, 334, 155, '#FF006E', 8)}
    ${pillS(60, 290, 480, 56, '#FFBF00', 'when backdrop switches to', 26)}${star(560, 40, 14, '#FFD60A')}${star(40, 380, 12, '#8338EC')}`),
  t5: () => svg(`${spr(110, 210, 0, '#FF7F11', 1.2)}
    <path d="M160 190 L230 150 L230 270 L160 230Z" fill="#FFBF00" stroke="${O}" stroke-width="5" stroke-linejoin="round"/>
    ${env(320, 110, 1)}${env(320, 300, 1, '#FFC300')}
    <path d="M250 180 Q290 130 300 120 M250 240 Q290 290 300 296" stroke="#FF006E" stroke-width="5" fill="none" stroke-dasharray="6 8"/>
    ${spr(490, 110, 180, '#2EC4B6', .9)}${spr(490, 300, 180, '#8338EC', .9)}
    ${pillS(30, 330, 170, 44, '#FFBF00', 'broadcast', 22)}${pillS(370, 190, 210, 42, '#CC9900', 'when I receive', 20)}`),
};

const TOPICS = [
  { id: 't1', c: ['#FFC300', '#FF7F11'], dk: '#D9480F', title: 'Khối mũ và cờ xanh',
    tip: 'Khối sự kiện đội “mũ” – luôn đứng đầu kịch bản nha!',
    html: `<div class="prog">${STK(B(`when ${FLAG} clicked`, 'hat ev'), B(`move ${N(10)} steps`), B(`say ${T('Hello!')}`, 'lk'))}
      <ul class="side"><li>Nhóm <span class="k">Events</span> (Sự kiện) màu <b style="color:#E09F00">vàng</b>.</li><li>Khối có <b>mũ tròn</b>, luôn ở <span class="k">trên cùng</span>.</li></ul></div><ul>
      <li>Bấm <b>cờ xanh</b>: chạy mọi kịch bản bắt đầu bằng khối này.</li>
      <li>Nút <b style="color:#E5383B">đỏ</b>: dừng tất cả.</li></ul>`,
    quiz: [
      { q: 'Khối when green flag clicked được đặt ở vị trí nào trong kịch bản?', o: ['Trên cùng', 'Ở giữa', 'Dưới cùng', 'Ở đâu cũng được'], a: 0, why: 'Khối sự kiện có hình mũ, luôn đứng đầu kịch bản.' },
      { q: 'Khi bấm lá cờ xanh, Scratch sẽ:', o: ['Xoá chương trình', 'Chạy các kịch bản bắt đầu bằng khối cờ xanh', 'Dừng tất cả', 'Thêm nhân vật mới'], a: 1, why: 'Cờ xanh kích hoạt mọi kịch bản có khối when green flag clicked.' } ] },
  { id: 't2', c: ['#3A8DFF', '#00C2D1'], dk: '#1864AB', title: 'Bấm phím trên bàn phím',
    tip: 'Mỗi phím mũi tên một kịch bản – vậy là điều khiển được nhân vật!',
    html: `<div class="prog">${STK(B(`when ${D('right arrow')} key pressed`, 'hat ev'), B(`change x by ${N(10)}`))}</div><ul>
      <li>Chạy khi em <span class="k">bấm phím</span> đã chọn.</li>
      <li>Chọn phím: <code>space</code>, <code>a</code>…<code>z</code>, mũi tên, <code>any</code> (phím bất kỳ).</li>
      <li>Dùng 4 phím mũi tên để <b>điều khiển</b> nhân vật.</li></ul>`,
    quiz: [
      { q: 'Muốn bấm phím → thì nhân vật sang PHẢI, em ghép when (right arrow) key pressed với:', o: ['change y by (10)', 'change x by (−10)', 'turn ↺ (10) degrees', 'change x by (10)'], a: 3, why: 'Sang phải là x tăng: change x by 10.' },
      { q: 'Chọn phím “any” trong khối when key pressed nghĩa là:', o: ['Không phím nào', 'Chỉ phím space', 'Bấm phím bất kỳ', 'Phím chữ a'], a: 2, why: 'any = bất kỳ phím nào cũng kích hoạt kịch bản.' } ] },
  { id: 't3', c: ['#FF7F11', '#FF006E'], dk: '#C2255C', title: 'Bấm vào nhân vật',
    tip: 'Bấm chuột vào nhân vật là “đánh thức” kịch bản của nó!',
    html: `<div class="blocks">${STK(B('when this sprite clicked', 'hat ev'), B(`say ${T('Ui da!')} for ${N(1)} seconds`, 'lk'))}${B('when stage clicked', 'hat ev')}</div><ul>
      <li><b>when this sprite clicked</b>: chạy khi bấm chuột <span class="k">vào nhân vật</span>.</li>
      <li><b>when stage clicked</b>: chạy khi bấm vào <b>sân khấu</b> (chọn Stage).</li></ul>`,
    quiz: [
      { q: 'Em muốn nhân vật nói “Ui da!” khi được bấm chuột vào. Dùng khối:', o: ['when this sprite clicked', 'when green flag clicked', 'when space key pressed', 'when I receive'], a: 0, why: 'when this sprite clicked chạy khi bấm vào chính nhân vật đó.' },
      { q: 'Khối when stage clicked có trong bảng lệnh khi em chọn:', o: ['Một nhân vật', 'Thẻ Costumes', 'Sân khấu (Stage)', 'Thẻ Sounds'], a: 2, why: 'Đây là khối riêng của Sân khấu.' } ] },
  { id: 't4', c: ['#7AD86F', '#14A0A0'], dk: '#087F5B', title: 'Đổi cảnh và âm lượng',
    tip: 'Đổi phông nền là bắt đầu màn chơi mới – rất hợp làm trò chơi!',
    html: `<div class="blocks">${B(`when backdrop switches to ${D('Màn 2')}`, 'hat ev')}${B(`when ${D('loudness')} &gt; ${N(10)}`, 'hat ev')}</div><ul>
      <li><b>when backdrop switches to</b>: chạy khi sân khấu <span class="k">đổi phông nền</span>.</li>
      <li><b>when loudness &gt;</b>: chạy khi tiếng ồn (micro) lớn hơn số cho trước.</li>
      <li>Có thể chọn <b>timer</b> thay cho loudness.</li></ul>`,
    quiz: [
      { q: 'Muốn nhân vật xuất hiện khi chuyển sang “Màn 2”, em dùng:', o: ['when this sprite clicked', 'when backdrop switches to (Màn 2)', 'when space key pressed', 'when stage clicked'], a: 1, why: 'Khối này chạy đúng lúc phông nền đổi sang Màn 2.' },
      { q: 'Khối when (loudness) > (10) chạy khi:', o: ['Bấm cờ xanh', 'Nhân vật chạm cạnh', 'Có 10 nhân vật', 'Âm thanh thu vào lớn hơn 10'], a: 3, why: 'loudness là độ ồn đo bằng micro.' } ] },
  { id: 't5', c: ['#4F7CFF', '#B06BFF'], dk: '#5F3DC4', title: 'Phát thông điệp',
    tip: 'broadcast giống “gửi thư” – ai có when I receive thì nhận được!',
    html: `<div class="blocks">${B(`broadcast ${D('bắt đầu')}`, 'ev')}${B(`broadcast ${D('bắt đầu')} and wait`, 'ev')}${B(`when I receive ${D('bắt đầu')}`, 'hat ev')}</div><ul>
      <li><b>broadcast</b>: <span class="k">gửi thông điệp</span>.</li>
      <li><b>when I receive</b>: nhận thông điệp thì chạy.</li>
      <li><b>and wait</b>: chờ bên nhận làm xong.</li></ul>`,
    quiz: [
      { q: 'Nhân vật B muốn làm việc khi nhân vật A gửi thông điệp “bắt đầu”. B dùng:', o: ['broadcast (bắt đầu)', 'when green flag clicked', 'when I receive (bắt đầu)', 'say (bắt đầu)'], a: 2, why: 'Bên nhận thông điệp dùng khối when I receive.' },
      { q: 'Khác nhau giữa broadcast và broadcast and wait là:', o: ['and wait chờ bên nhận làm xong mới chạy tiếp', 'Không khác gì', 'and wait gửi 2 lần', 'and wait không gửi đi'], a: 0, why: 'broadcast gửi xong chạy tiếp ngay; and wait thì đợi.' } ] },
];

const KEY = ['Khối <b>mũ</b> đứng đầu<br><b>cờ xanh</b>: chạy<br>nút đỏ: dừng', '<b>when key pressed</b><br>mũi tên điều khiển', '<b>when this sprite clicked</b><br><b>when stage clicked</b>',
  '<b>when backdrop<br>switches to</b> • <b>loudness</b>', '<b>broadcast</b>: gửi<br><b>when I receive</b>: nhận'];
