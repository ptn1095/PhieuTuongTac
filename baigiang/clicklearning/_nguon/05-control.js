/* ===== NHÁNH 4: CONTROL – ĐIỀU KHIỂN ===== */
const META = { key: 'control', num: 5, title: 'Nhóm lệnh Control', big: 'NHÓM LỆNH<br>CONTROL',
  st2: 'Điều khiển — 5 nội dung • 10 câu đố • nhận giấy chứng nhận',
  hello: 'Cùng khám phá nhóm lệnh Điều khiển (màu cam) nhé!',
  cert: 'NHÓM LỆNH CONTROL – ĐIỀU KHIỂN', file: 'Control', pass: 8 };

const clock = (x, y, r) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#fff" stroke="${O}" stroke-width="7"/>${[0,1,2,3,4,5,6,7,8,9,10,11].map(i => { const a = i*Math.PI/6; return `<circle cx="${x + Math.sin(a)*(r - 18)}" cy="${y - Math.cos(a)*(r - 18)}" r="${i % 3 ? 3 : 6}" fill="${O}"/>`; }).join('')}<line x1="${x}" y1="${y}" x2="${x}" y2="${y - r*.62}" stroke="${O}" stroke-width="8" stroke-linecap="round"/><line x1="${x}" y1="${y}" x2="${x + r*.45}" y2="${y + r*.2}" stroke="#FF006E" stroke-width="8" stroke-linecap="round"/><circle cx="${x}" cy="${y}" r="9" fill="${O}"/>`;

const ILL_T = {
  t1: () => svg(`${clock(170, 200, 120)}${pillS(80, 346, 180, 48, '#FFAB19', 'wait 1 giây', 24)}
    ${bubbleC(360, 70, 'Chào!')}${bubbleC(360, 240, 'Tạm biệt!')}${arr(450, 150, 450, 226, '#FFAB19', 8)}${pillS(470, 168, 110, 40, '#CF8B17', '⏳ 2s', 20)}
    ${star(40, 50, 14, '#FFD60A')}${star(570, 390, 12, '#8338EC')}`),
  t2: () => svg(`<rect x="170" y="70" width="260" height="260" fill="none" stroke="#FFAB19" stroke-width="9" stroke-dasharray="4 14" stroke-linecap="round"/>
    ${ball(170, 70, 26, '#FF006E', '1', 24)}${ball(430, 70, 26, '#1982C4', '2', 24)}${ball(430, 330, 26, '#2DA44E', '3', 24)}${ball(170, 330, 26, '#8338EC', '4', 24)}
    ${spr(300, 70, 0, '#FF7F11', .7)}${pillS(190, 180, 220, 54, '#FFAB19', 'repeat 4', 28)}
    ${pillS(30, 360, 540, 44, '#CF8B17', 'move 100 + turn 90° → hình vuông', 20)}`),
  t3: () => svg(`<path d="M300 90 A120 110 0 1 1 299 90" fill="none" stroke="#FFAB19" stroke-width="16" stroke-linecap="round"/>${arrowHead(300, 90, 0, '#FFAB19')}
    ${txt(300, 228, '∞', 120, '#FF7F11')}${pillS(200, 330, 200, 50, '#FFAB19', 'forever', 28)}
    <polygon points="480,40 520,40 545,65 545,105 520,130 480,130 455,105 455,65" fill="#E5383B" stroke="${O}" stroke-width="6"/>${txt(500, 95, 'STOP', 20, '#fff')}
    ${star(60, 60, 16, '#FFD60A')}${star(80, 360, 12, '#8338EC')}`),
  t4: () => svg(`<polygon points="300,30 420,110 300,190 180,110" fill="#FFAB19" stroke="${O}" stroke-width="6" stroke-linejoin="round"/>${txt(300, 120, 'Đúng?', 32, '#fff')}
    ${arr(200, 140, 120, 230, '#2DA44E', 9)}${arr(400, 140, 480, 230, '#E5383B', 9)}
    ${pillS(40, 240, 170, 50, '#2DA44E', 'ĐÚNG → if', 22)}${pillS(390, 240, 180, 50, '#E5383B', 'SAI → else', 22)}
    ${spr(125, 350, 0, '#2EC4B6', .7)}${spr(480, 350, 0, '#FF7F11', .7)}${star(560, 40, 14, '#FFD60A')}`),
  t5: () => svg(`${spr(130, 210, 0, '#FF7F11', 1.3)}${spr(330, 120, 0, '#FF7F11', 1, .7)}${spr(330, 300, 0, '#FF7F11', 1, .7)}${spr(500, 210, 0, '#FF7F11', .9, .45)}
    <path d="M180 190 Q240 130 290 125 M180 230 Q240 290 290 295 M380 120 Q440 150 460 190" stroke="#8338EC" stroke-width="5" fill="none" stroke-dasharray="6 8"/>
    ${pillS(30, 340, 220, 46, '#FFAB19', 'create clone', 24)}${pillS(370, 30, 200, 44, '#CF8B17', 'bản sao', 22)}${star(560, 380, 14, '#FFD60A')}`),
};
function bubbleC(x, y, t) { return `<rect x="${x}" y="${y}" width="190" height="76" rx="24" fill="#fff" stroke="${O}" stroke-width="5"/>${txt(x + 95, y + 49, t, 28)}`; }

const TOPICS = [
  { id: 't1', c: ['#FFC300', '#FF7F11'], dk: '#D9480F', title: 'Chờ: wait',
    tip: 'wait giúp chương trình “nghỉ một chút” cho mình kịp nhìn thấy!',
    html: `<div class="blocks">${B(`wait ${N(1)} seconds`, 'ct')}${B(`wait until ${HX}`, 'ct')}</div><ul>
      <li>Nhóm <span class="k">Control</span> (Điều khiển) có màu <b style="color:#E08A00">cam</b>.</li>
      <li><b>wait</b>: tạm dừng một số <span class="k">giây</span> (có thể là <code>0.5</code>).</li>
      <li><b>wait until</b>: chờ đến khi điều kiện <b>đúng</b> mới chạy tiếp.</li></ul>`,
    quiz: [
      { q: 'Trong lệnh wait (2) seconds, số 2 là:', o: ['2 bước', '2 lần', '2 giây', '2 độ'], a: 2, why: 'seconds = giây: chương trình tạm dừng 2 giây.' },
      { q: 'Lệnh wait until <touching edge?> làm chương trình:', o: ['Chờ đến khi chạm cạnh rồi chạy tiếp', 'Chờ 1 giây', 'Dừng hẳn', 'Lặp mãi mãi'], a: 0, why: 'wait until chờ đến lúc điều kiện trở thành đúng.' } ] },
  { id: 't2', c: ['#3A8DFF', '#00C2D1'], dk: '#1864AB', title: 'Lặp có số lần: repeat',
    tip: 'Thay vì kéo 4 lần cùng một lệnh, dùng repeat 4 cho gọn nha!',
    html: `<div class="prog">${CB(`repeat ${N(4)}`, 'ct', B(`move ${N(100)} steps`), B(`turn <b class="ic">↻</b> ${N(90)} degrees`))}
      <ul class="side"><li><b>repeat</b>: lặp các lệnh bên trong <span class="k">đúng số lần</span>.</li><li>Ví dụ này vẽ đường đi <b>hình vuông</b>.</li></ul></div><ul>
      <li><b>repeat until</b>: lặp <span class="k">cho đến khi</span> điều kiện đúng.</li></ul>`,
    quiz: [
      { q: 'x đang bằng 0. Chạy repeat (3) { change x by (10) } thì x bằng:', o: ['10', '13', '3', '30'], a: 3, why: 'Lặp 3 lần, mỗi lần cộng 10: 0 + 10 + 10 + 10 = 30.' },
      { q: 'repeat (4) { move (100) steps, turn ↻ (90) degrees } vẽ đường đi hình:', o: ['Tam giác', 'Hình vuông', 'Hình tròn', 'Đường thẳng'], a: 1, why: '4 cạnh bằng nhau, mỗi lần rẽ 90° → hình vuông.' } ] },
  { id: 't3', c: ['#FF7F11', '#FF006E'], dk: '#C2255C', title: 'Lặp mãi: forever, stop',
    tip: 'forever chạy hoài không nghỉ – nhớ có nút đỏ để dừng nhé!',
    html: `<div class="blocks">${FOREVER(B(`next costume`, 'lk'), B(`wait ${N(0.2)} seconds`, 'ct'))}${B(`stop ${D('all')}`, 'ct cap')}</div><ul>
      <li><b>forever</b>: lặp <span class="k">mãi mãi</span> đến khi dừng chương trình.</li>
      <li>Không ghép được lệnh nào <b>bên dưới</b> forever.</li>
      <li><b>stop all</b> hoặc nút đỏ: dừng tất cả.</li></ul>`,
    quiz: [
      { q: 'Các lệnh trong khối forever sẽ chạy:', o: ['1 lần', '10 lần', 'Mãi mãi đến khi dừng chương trình', 'Chỉ khi bấm phím'], a: 2, why: 'forever = lặp vô hạn, dừng khi bấm nút đỏ hoặc stop all.' },
      { q: 'Lệnh nào dừng TẤT CẢ kịch bản đang chạy?', o: ['stop (all)', 'wait (1) seconds', 'repeat (10)', 'hide'], a: 0, why: 'stop all dừng mọi kịch bản, giống nút đỏ.' } ] },
  { id: 't4', c: ['#7AD86F', '#14A0A0'], dk: '#087F5B', title: 'Rẽ nhánh: if, if-else',
    tip: 'if là “nếu… thì…”: điều kiện đúng mới làm!',
    html: `<div class="prog">${IFELSE(`${BO('touching edge?', 'se')}`, [B(`say ${T('Ối!')}`, 'lk')], [B(`move ${N(5)} steps`)])}
      <ul class="side"><li><b>if … then</b>: điều kiện <span class="k">đúng</span> thì làm.</li><li><b>else</b>: điều kiện <span class="k">sai</span> thì làm phần dưới.</li></ul></div><ul>
      <li>Ô điều kiện hình <b>lục giác</b> ⬡ chỉ nhận <b>đúng / sai</b>.</li></ul>`,
    quiz: [
      { q: 'Trong if <...> then … else …, phần sau else chạy khi:', o: ['Điều kiện đúng', 'Luôn luôn chạy', 'Không bao giờ chạy', 'Điều kiện sai'], a: 3, why: 'else là “nếu không thì”: chạy khi điều kiện sai.' },
      { q: 'Ô điều kiện của khối if nhận loại khối nào?', o: ['Khối mũ', 'Khối lục giác (đúng/sai)', 'Khối lệnh xếp chồng', 'Khối forever'], a: 1, why: 'Điều kiện là khối lục giác cho kết quả đúng hoặc sai.' } ] },
  { id: 't5', c: ['#4F7CFF', '#B06BFF'], dk: '#5F3DC4', title: 'Nhân bản: clone',
    tip: 'Clone giúp có nhiều bông tuyết, nhiều quả bóng mà không cần vẽ thêm!',
    html: `<div class="blocks">${B(`create clone of ${D('myself')}`, 'ct')}${B('when I start as a clone', 'hat ct')}${B('delete this clone', 'ct cap')}</div><ul>
      <li><b>create clone</b>: tạo <span class="k">bản sao</span> của nhân vật.</li>
      <li><b>when I start as a clone</b>: việc bản sao làm khi vừa ra đời.</li>
      <li><b>delete this clone</b>: xoá bản sao khi xong việc.</li></ul>`,
    quiz: [
      { q: 'Muốn tạo thêm một bản sao của chính nhân vật, em dùng:', o: ['next costume', 'show', 'create clone of (myself)', 'broadcast'], a: 2, why: 'create clone of myself tạo ra một bản sao giống hệt.' },
      { q: 'Kịch bản của bản sao bắt đầu bằng khối:', o: ['when I start as a clone', 'when green flag clicked', 'delete this clone', 'when stage clicked'], a: 0, why: 'Bản sao chạy kịch bản dưới khối when I start as a clone.' } ] },
];

const KEY = ['<b>wait</b>: chờ giây<br><b>wait until</b>: chờ<br>đến khi đúng', '<b>repeat N</b>: lặp N lần<br><b>repeat until</b>', '<b>forever</b>: lặp mãi<br><b>stop all</b>: dừng',
  '<b>if</b>: đúng thì làm<br><b>else</b>: sai thì làm', '<b>create clone</b><br><b>when I start as a clone</b>'];
