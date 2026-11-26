/* ===== BÀI 9: VARIABLES – BIẾN ===== */
const META = { key: 'variables', num: 9, title: 'Nhóm lệnh Variables', big: 'NHÓM LỆNH<br>VARIABLES',
  st2: 'Biến – chiếc hộp nhớ — 5 nội dung • 10 câu đố • nhận giấy chứng nhận',
  hello: 'Cùng làm những chiếc hộp nhớ thần kì với nhóm Variables (màu đỏ) nhé!',
  cert: 'NHÓM LỆNH VARIABLES – BIẾN', file: 'Variables', pass: 8 };

const box = (x, y, lab, v, c = '#EA2B1F') => `<path d="M${x} ${y + 30} L${x + 30} ${y} H${x + 190} L${x + 160} ${y + 30}Z" fill="${shade(c, 1.15)}" stroke="${O}" stroke-width="5" stroke-linejoin="round"/>
  <rect x="${x}" y="${y + 30}" width="160" height="110" fill="${c}" stroke="${O}" stroke-width="5"/><path d="M${x + 160} ${y + 30} L${x + 190} ${y} V${y + 110} L${x + 160} ${y + 140}Z" fill="${shade(c, .75)}" stroke="${O}" stroke-width="5" stroke-linejoin="round"/>
  ${txt(x + 80, y + 104, v, 46, '#fff')}${pillS(x - 10, y + 156, 200, 44, '#1D3557', lab, 22)}`;
const ILL_T = {
  t1: () => svg(`${box(60, 60, 'diem', '0')}${box(330, 60, 'nha', 'x y z', '#C02319')}
    ${pillS(110, 330, 380, 52, '#EA2B1F', 'Make a Variable...', 26)}${stars([40, 40], [560, 40, 12], [300, 120, 10])}`),
  t2: () => svg(`${box(60, 80, 'diem', '0')}${arr(290, 150, 370, 150, '#FF006E', 9)}${box(390, 80, 'diem', '10')}
    ${pillS(110, 340, 380, 52, '#EA2B1F', 'set diem to 10', 26)}${stars([40, 40], [560, 40, 12])}`),
  t3: () => svg(`${box(60, 80, 'diem', '10')}${txt(300, 140, '+1', 46, '#2DA44E')}${arr(260, 170, 370, 170, '#2DA44E', 9)}${box(390, 80, 'diem', '11')}
    ${pillS(100, 340, 400, 52, '#EA2B1F', 'change diem by 1', 26)}${stars([40, 40], [560, 40, 12])}`),
  t4: () => svg(`${VX([...GR(4, 3), ...MAN(0, 0, 1), ...HEN(2, 0, 0), ...HEN(3, 0, 2)], 300, 210, 40)}
    ${CHAT(20, 30, 340, 'Số gà: 2', 26)}${pillS(380, 30, 200, 50, '#EA2B1F', 'so_ga', 26)}${stars([40, 380, 12], [560, 380, 12])}`),
  t5: () => svg(`${VX([...GR(6, 3), [0, 0, 0, 'plank'], [0, 1, 0, 'plank'], [1, 0, 0, 'plank'], [1, 1, 0, 'red', 1, .4, 1], ...MAN(4, 0, 2)], 280, 180, 38)}
    ${arr(...PT(4.5, 2.4, 2.5, 280, 180, 38), ...PT(1.6, 2.4, .5, 280, 180, 38), '#FF006E', 7)}
    ${pillS(20, 28, 260, 48, '#EA2B1F', 'set nha to …', 24)}${pillS(300, 358, 280, 46, '#0078D7', 'teleport to nha', 22)}`),
};

const TOPICS = [
  { id: 't1', c: ['#FF595E', '#FFB14E'], dk: '#C92A2A', title: 'Biến là gì?',
    tip: 'Đặt tên biến dễ hiểu như diem, so_ga, nha – nhìn là biết!',
    html: `<div class="blocks">${MR('va', 'diem')}${MR('va', 'nha')}</div><ul>
      <li>Nhóm <span class="k">Variables</span> (Biến) có màu <b style="color:#EA2B1F">đỏ</b>.</li>
      <li><b>Biến</b> giống <span class="k">chiếc hộp có tên</span>, dùng để <b>nhớ</b> một giá trị.</li>
      <li>Tạo biến: bấm <code>Make a Variable...</code> rồi đặt tên.</li>
      <li>Biến có thể nhớ số, chữ, vị trí…</li></ul>`,
    quiz: [
      { q: 'Biến dùng để làm gì?', o: ['Vẽ hình tròn', 'Đổi thời tiết', 'Gọi sinh vật', 'Ghi nhớ một giá trị'], a: 3, why: 'Biến là chiếc hộp có tên để ghi nhớ giá trị.' },
      { q: 'Muốn tạo một biến mới, em bấm nút:', o: ['Make a Variable...', 'on start', 'Extensions', 'forever'], a: 0, why: 'Make a Variable... dùng để tạo biến mới.' } ] },
  { id: 't2', c: ['#3A8DFF', '#00C2D1'], dk: '#1864AB', title: 'Gán giá trị: set … to',
    tip: 'set là "xoá cũ, ghi mới" – giá trị cũ mất luôn đó!',
    html: `<div class="blocks">${M('va', `set ${VR('diem')} to ${n(0)}`)}</div><ul>
      <li><b>set … to</b>: <span class="k">đặt</span> giá trị mới cho biến.</li>
      <li>Giá trị cũ bị <span class="k">thay thế</span> hoàn toàn.</li>
      <li>Thường đặt trong <b>on start</b> để cho điểm bằng 0 lúc bắt đầu.</li></ul>`,
    quiz: [
      { q: 'diem đang là 7. Chạy set diem to 2 thì diem bằng:', o: ['9', '2', '7', '5'], a: 1, why: 'set thay giá trị cũ bằng giá trị mới: 2.' },
      { q: 'Muốn điểm về 0 khi bắt đầu trò chơi, đặt set diem to 0 trong:', o: ['forever', 'on player died', 'on start', 'while'], a: 2, why: 'on start chạy 1 lần lúc bắt đầu.' } ] },
  { id: 't3', c: ['#7AD86F', '#14A0A0'], dk: '#087F5B', title: 'Thay đổi: change … by',
    tip: 'change by số âm là bớt đi đó: change diem by -1!',
    html: `<div class="blocks">${M('va', `change ${VR('diem')} by ${n(1)}`)}</div><ul>
      <li><b>change … by</b>: <span class="k">cộng thêm</span> vào giá trị đang có.</li>
      <li>Số âm thì <span class="k">bớt đi</span>: <code>change diem by -1</code>.</li>
      <li>Rất hay dùng để <b>đếm</b>: đếm điểm, đếm số gà…</li></ul>`,
    quiz: [
      { q: 'diem đang là 10. Chạy change diem by 5 thì diem bằng:', o: ['5', '10', '50', '15'], a: 3, why: 'change cộng thêm: 10 + 5 = 15.' },
      { q: 'diem đang là 4. Chạy change diem by -1 hai lần, diem bằng:', o: ['2', '3', '6', '4'], a: 0, why: '4 − 1 − 1 = 2.' } ] },
  { id: 't4', c: ['#FFA62B', '#FF5DA2'], dk: '#D9480F', title: 'Dùng biến để đếm',
    tip: 'Mỗi lần gọi gà thì change so_ga by 1 – không sót con nào!',
    html: `<div class="blocks">${MC('pl', `on chat command ${s('ga')}`, [M('mo', `spawn ${MR('mo', `animal ${PK('white')}`, 'sd')} at ${P3('~', 2, 0, 0)}`), M('va', `change ${VR('so_ga')} by ${n(1)}`), M('pl', `say ${MR('va', 'so_ga')}`)], true)}</div><ul>
      <li>Mỗi lần gõ <code>ga</code>: gọi 1 con gà và <b>tăng so_ga</b> thêm 1.</li>
      <li>Khối tròn <b style="color:#EA2B1F">so_ga</b> lắp vào <b>say</b> để hiện số gà.</li></ul>`,
    quiz: [
      { q: 'so_ga bắt đầu bằng 0. Em gõ lệnh ga 3 lần, so_ga bằng:', o: ['1', '0', '3', '6'], a: 2, why: 'Mỗi lần tăng 1, gõ 3 lần → 3.' },
      { q: 'Lắp khối biến so_ga vào lệnh say để:', o: ['Xoá biến', 'Hiện giá trị của biến', 'Gọi thêm gà', 'Đổi tên biến'], a: 1, why: 'say hiện giá trị biến đang nhớ.' } ] },
  { id: 't5', c: ['#4F7CFF', '#B06BFF'], dk: '#5F3DC4', title: 'Biến nhớ vị trí',
    tip: 'Đi phiêu lưu xa cỡ nào, một lệnh là về nhà ngay!',
    html: `<div class="blocks">${M('va', `set ${VR('nha')} to ${MR('pl', 'player world position')}`)}${M('pl', `teleport to ${MR('va', 'nha')}`)}</div><ul>
      <li>Biến cũng nhớ được <span class="k">vị trí</span>.</li>
      <li>Lệnh 1: <b>ghi nhớ</b> chỗ đang đứng vào biến <b>nha</b>.</li>
      <li>Lệnh 2: <b>teleport</b> về đúng chỗ đã nhớ.</li></ul>`,
    quiz: [
      { q: 'set nha to (player world position) làm gì?', o: ['Xây một ngôi nhà', 'Dịch chuyển về nhà', 'Ghi nhớ vị trí đang đứng', 'Xoá ngôi nhà'], a: 2, why: 'Biến nha ghi nhớ vị trí hiện tại của người chơi.' },
      { q: 'Để quay về chỗ đã nhớ trong biến nha, dùng:', o: ['teleport to (nha)', 'set nha to 0', 'change nha by 1', 'say nha'], a: 0, why: 'teleport to (nha) đưa người chơi về vị trí đã nhớ.' } ] },
];

const KEY = ['Biến = <b>hộp có tên</b><br>để ghi nhớ', '<b>set … to</b><br>thay giá trị mới', '<b>change … by</b><br>cộng thêm (âm: bớt)',
  'Đếm: <b>change by 1</b><br>hiện bằng <b>say</b>', 'Nhớ vị trí<br><b>teleport to</b> biến'];
