/* ===== NHÁNH 5: SENSING – CẢM BIẾN ===== */
const META = { key: 'sensing', num: 6, title: 'Nhóm lệnh Sensing', big: 'NHÓM LỆNH<br>SENSING',
  st2: 'Cảm biến — 5 nội dung • 10 câu đố • nhận giấy chứng nhận',
  hello: 'Cùng khám phá nhóm lệnh Cảm biến (màu xanh da trời) nhé!',
  cert: 'NHÓM LỆNH SENSING – CẢM BIẾN', file: 'Sensing', pass: 8 };

const hexS = (x, y, w, h, c, t, fs = 24) => `<polygon points="${x + h/2},${y} ${x + w - h/2},${y} ${x + w},${y + h/2} ${x + w - h/2},${y + h} ${x + h/2},${y + h} ${x},${y + h/2}" fill="${c}" stroke="${O}" stroke-width="5" stroke-linejoin="round"/>${txt(x + w/2, y + h/2 + fs*.36, t, fs, '#fff')}`;
const mouseI = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-34" y="-50" width="68" height="100" rx="34" fill="#fff" stroke="${O}" stroke-width="6"/><line x1="0" y1="-50" x2="0" y2="-10" stroke="${O}" stroke-width="5"/><rect x="-5" y="-36" width="10" height="18" rx="5" fill="#5CB1D6"/></g>`;

const ILL_T = {
  t1: () => svg(`${stg(30, 30, 540, 300, false)}<rect x="534" y="34" width="32" height="292" fill="#FF006E" opacity=".75"/>
    ${spr(470, 180, 0, '#FF7F11', 1.1)}${star(530, 180, 30, '#FFD60A')}
    <rect x="80" y="250" width="200" height="40" rx="10" fill="#2DA44E"/>${spr(150, 210, 0, '#2EC4B6', .8)}
    ${hexS(110, 346, 380, 56, '#5CB1D6', 'touching edge? → ĐÚNG', 22)}`),
  t2: () => svg(`${stg(30, 30, 540, 360)}
    ${spr(170, 270, -35, '#FF7F11', .9)}
    <g transform="translate(430 110)"><path d="M0 0 L0 56 L14 44 L25 66 L36 61 L25 39 L43 39Z" fill="#fff" stroke="${O}" stroke-width="5" stroke-linejoin="round"/></g>
    <line x1="200" y1="250" x2="425" y2="115" stroke="#8338EC" stroke-width="5" stroke-dasharray="10 8"/>
    ${pillS(230, 150, 160, 42, '#5CB1D6', 'distance', 22, -30)}${pillS(380, 190, 180, 40, '#2E8EB8', 'mouse x, y', 20)}`),
  t3: () => svg(`${cat2(120, 200)}<rect x="220" y="60" width="330" height="90" rx="26" fill="#fff" stroke="${O}" stroke-width="5"/>${txt(385, 115, 'Bạn tên là gì?', 30)}
    <rect x="60" y="320" width="480" height="64" rx="32" fill="#fff" stroke="#5CB1D6" stroke-width="6"/>${txt(90, 362, 'An', 30, O, 'start')}
    <circle cx="505" cy="352" r="22" fill="#5CB1D6"/><path d="M494 352 l8 8 l14 -16" stroke="#fff" stroke-width="5" fill="none"/>
    ${pillS(330, 200, 210, 50, '#5CB1D6', 'answer = An', 26)}${star(40, 40, 14, '#FFD60A')}`),
  t4: () => svg(`${key3d(140, 60, 320, 90, '#5CB1D6', '#2E8EB8', 'space', 46)}
    ${hexS(70, 220, 460, 70, '#5CB1D6', 'key space pressed?', 30)}
    ${pillS(110, 330, 160, 50, '#2DA44E', 'Đang bấm', 22)}${pillS(330, 330, 160, 50, '#E5383B', 'Không', 22)}
    ${txt(190, 318, 'ĐÚNG', 22, '#2DA44E')}${txt(410, 318, 'SAI', 22, '#E5383B')}${star(40, 60, 14, '#FFD60A')}${star(560, 60, 12, '#8338EC')}`),
  t5: () => svg(`<circle cx="200" cy="215" r="130" fill="#fff" stroke="${O}" stroke-width="7"/><rect x="180" y="58" width="40" height="30" rx="8" fill="${O}"/>
    <line x1="200" y1="215" x2="200" y2="120" stroke="#5CB1D6" stroke-width="10" stroke-linecap="round"/><line x1="200" y1="215" x2="270" y2="250" stroke="#FF006E" stroke-width="8" stroke-linecap="round"/><circle cx="200" cy="215" r="12" fill="${O}"/>
    ${pillS(370, 80, 200, 56, '#5CB1D6', 'timer', 30)}${pillS(370, 170, 200, 56, '#2E8EB8', 'reset timer', 24)}${pillS(370, 260, 200, 56, '#FF7F11', '12.5 giây', 26)}
    ${star(40, 380, 14, '#FFD60A')}`),
};
function cat2(x, y) { return `<g transform="translate(${x} ${y})"><path d="M-36 -30 L-30 -66 L-8 -44Z M36 -30 L30 -66 L8 -44Z" fill="#FFB14E" stroke="${O}" stroke-width="5"/><circle r="50" fill="#FFB14E" stroke="${O}" stroke-width="5"/><circle cx="-17" cy="-6" r="7" fill="${O}"/><circle cx="17" cy="-6" r="7" fill="${O}"/><path d="M-12 16 Q0 26 12 16" stroke="${O}" stroke-width="4" fill="none"/></g>`; }

const TOPICS = [
  { id: 't1', c: ['#3A8DFF', '#00C2D1'], dk: '#1864AB', title: 'Chạm: touching',
    tip: 'Khối lục giác trả lời câu hỏi “có hay không” – đúng hoặc sai!',
    html: `<div class="blocks">${BO(`touching ${D('edge')} ?`, 'se')}${BO('touching color <span style="display:inline-block;width:34px;height:34px;border-radius:50%;background:#2DA44E;border:3px solid #fff"></span> ?', 'se')}</div><ul>
      <li>Nhóm <span class="k">Sensing</span> (Cảm biến) màu <b style="color:#2E8EB8">xanh da trời</b>.</li>
      <li>Khối <b>lục giác</b> cho kết quả <span class="k">đúng / sai</span>.</li>
      <li><b>touching</b>: chạm chuột, cạnh hoặc nhân vật khác?</li>
      <li><b>touching color</b>: chạm vào màu đã chọn?</li></ul>`,
    quiz: [
      { q: 'Khối touching (edge)? cho kết quả là:', o: ['Một con số', 'Đúng hoặc sai', 'Một câu chữ', 'Một màu'], a: 1, why: 'Khối lục giác chỉ trả về đúng (true) hoặc sai (false).' },
      { q: 'Muốn biết nhân vật có chạm vào bức tường màu xanh lá không, em dùng:', o: ['touching color (xanh lá)?', 'mouse down?', 'distance to', 'timer'], a: 0, why: 'touching color kiểm tra nhân vật có chạm vào màu đó.' } ] },
  { id: 't2', c: ['#7AD86F', '#14A0A0'], dk: '#087F5B', title: 'Chuột và khoảng cách',
    tip: 'mouse x, mouse y cho biết con trỏ chuột đang ở đâu!',
    html: `<div class="blocks">${RP(`distance to ${D('mouse-pointer')}`, 'se')}${RP('mouse x', 'se')}${RP('mouse y', 'se')}${BO('mouse down?', 'se')}</div><ul>
      <li><b>distance to</b>: khoảng cách đến chuột / nhân vật khác.</li>
      <li><b>mouse x, mouse y</b>: <span class="k">toạ độ</span> con trỏ chuột.</li>
      <li><b>mouse down?</b>: đúng khi đang <b>nhấn giữ</b> chuột.</li></ul>`,
    quiz: [
      { q: 'Lệnh go to x: (mouse x) y: (mouse y) đặt trong forever làm nhân vật:', o: ['Đứng yên', 'Chạy trốn chuột', 'Đi theo con trỏ chuột', 'Biến mất'], a: 2, why: 'Liên tục đến đúng toạ độ của con trỏ chuột.' },
      { q: 'Khối mouse down? cho kết quả ĐÚNG khi:', o: ['Rê chuột', 'Chuột ở giữa sân khấu', 'Bấm phím space', 'Đang nhấn giữ nút chuột'], a: 3, why: 'mouse down = nút chuột đang được nhấn.' } ] },
  { id: 't3', c: ['#FF7F11', '#FF006E'], dk: '#C2255C', title: 'Hỏi và trả lời: ask',
    tip: 'ask hỏi, người chơi gõ vào ô, câu trả lời nằm trong answer!',
    html: `<div class="blocks">${B(`ask ${T("Bạn tên là gì?")} and wait`, 'se')}${RP('answer', 'se')}</div><ul>
      <li><b>ask … and wait</b>: hiện câu hỏi và <span class="k">ô nhập</span>, chờ trả lời.</li>
      <li><b>answer</b>: lưu câu trả lời <span class="k">gần nhất</span>.</li>
      <li>Dùng <code>say (join Chào answer)</code> để chào tên người chơi.</li></ul>`,
    quiz: [
      { q: 'Người chơi gõ “An” sau lệnh ask. Khối answer có giá trị:', o: ['An', 'Bạn tên là gì?', 'Trống', 'answer'], a: 0, why: 'answer giữ nội dung người chơi vừa gõ vào.' },
      { q: 'Lệnh ask (…) and wait sẽ:', o: ['Nói câu hỏi rồi chạy tiếp ngay', 'Chờ 1 giây', 'Hỏi và chờ người chơi nhập câu trả lời', 'Gửi thông điệp'], a: 2, why: 'Chương trình dừng đến khi người chơi nhập xong và bấm ✔.' } ] },
  { id: 't4', c: ['#4F7CFF', '#B06BFF'], dk: '#5F3DC4', title: 'Kiểm tra phím bấm',
    tip: 'key pressed? đặt trong if + forever để điều khiển thật mượt!',
    html: `<div class="prog">${FOREVER(`<div class="cb"><span class="sb ctop ct">if ${BO(`key ${D('space')} pressed?`, 'se')} then</span><div class="cmid"><div class="carm"></div>${STK(B(`change y by ${N(10)}`))}</div><span class="sb cbot ct"></span></div>`)}</div><ul>
      <li><b>key … pressed?</b>: đúng khi phím đó <span class="k">đang được bấm</span>.</li>
      <li>Dùng trong <b>if</b> + <b>forever</b> để kiểm tra liên tục.</li></ul>`,
    quiz: [
      { q: 'Khối key (space) pressed? thường được đặt trong:', o: ['Khối mũ', 'Ô điều kiện của khối if', 'Ô số của lệnh move', 'Khối say'], a: 1, why: 'Đây là khối lục giác nên đặt vào ô điều kiện của if.' },
      { q: 'Vì sao cần forever bao ngoài if <key space pressed?>?', o: ['Để nhân vật to ra', 'Để chạy 1 lần', 'Để dừng chương trình', 'Để kiểm tra phím liên tục'], a: 3, why: 'forever giúp kiểm tra phím mọi lúc, không chỉ 1 lần.' } ] },
  { id: 't5', c: ['#22C493', '#1E9BD7'], dk: '#0B7285', title: 'Đồng hồ: timer',
    tip: 'timer đếm giây từ lúc bắt đầu – hợp để làm trò chơi tính giờ!',
    html: `<div class="blocks">${RP('timer', 'se')}${B('reset timer', 'se')}${RP('loudness', 'se')}${RP(`current ${D('year')}`, 'se')}</div><ul>
      <li><b>timer</b>: số <span class="k">giây</span> đã trôi qua.</li>
      <li><b>reset timer</b>: đưa đồng hồ về <code>0</code>.</li>
      <li><b>loudness</b>: độ ồn; <b>current</b>: năm, tháng, giờ…</li></ul>`,
    quiz: [
      { q: 'Muốn đồng hồ bấm giờ đếm lại từ 0, em dùng:', o: ['timer', 'reset timer', 'wait (0) seconds', 'stop all'], a: 1, why: 'reset timer đặt lại đồng hồ về 0.' },
      { q: 'Khối timer cho biết:', o: ['Giờ hiện tại', 'Số nhân vật', 'Độ ồn', 'Số giây từ lần đặt lại gần nhất'], a: 3, why: 'timer đếm giây kể từ khi bắt đầu hoặc reset timer.' } ] },
];

const KEY = ['Khối <b>lục giác</b>: đúng/sai<br><b>touching</b> • <b>touching color</b>', '<b>mouse x, mouse y</b><br><b>distance to</b> • <b>mouse down?</b>', '<b>ask</b>: hỏi và chờ<br><b>answer</b>: câu trả lời',
  '<b>key pressed?</b><br>trong <b>if</b> + <b>forever</b>', '<b>timer</b>: đếm giây<br><b>reset timer</b>: về 0'];
