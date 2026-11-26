/* ===== BÀI 1: PLAYER – NGƯỜI CHƠI ===== */
const META = { key: 'player', num: 1, title: 'Nhóm lệnh Player', big: 'NHÓM LỆNH<br>PLAYER',
  st2: 'Người chơi — 5 nội dung • 10 câu đố • nhận giấy chứng nhận',
  hello: 'Cùng khám phá nhóm lệnh Người chơi (màu xanh dương) trong Minecraft nhé!',
  cert: 'NHÓM LỆNH PLAYER – NGƯỜI CHƠI', file: 'Player', pass: 8 };

const ILL_T = {
  t1: () => svg(`${VX([...GR(4, 4), ...MAN(1, 0, 1)], 330, 150, 42)}
    ${CHAT(30, 330, 250, 'run', 28)}${pillS(300, 334, 270, 50, '#0078D7', 'Gõ T → run ↵', 26)}
    ${BK(24, 30, 'pl', 'on chat command "run"', 20)}
    ${stars([560, 50], [40, 250, 12], [580, 260, 12])}`),
  t2: () => svg(`${VX([...GR(4, 3), ...MAN(1, 0, 1)], 330, 190, 42)}
    <rect x="300" y="26" width="270" height="96" rx="22" fill="#fff" stroke="${O}" stroke-width="5"/><path d="M360 120 L372 152 L392 120Z" fill="#fff" stroke="${O}" stroke-width="5" stroke-linejoin="round"/><rect x="306" y="110" width="80" height="12" fill="#fff"/>
    ${txt(435, 88, 'Xin chào! :)', 34, '#0078D7')}
    ${CHAT(24, 352, 330, '&lt;Em&gt; Xin chào! :)', 22)}
    ${stars([40, 60], [570, 300, 12], [250, 40, 10])}`),
  t3: () => svg(`${VX([...GR(5, 4), ...MAN(0, 0, 1), [3, 2.4, 1, 'glass', 1, .2, 1], ...MAN(3, 2.6, 1)], 300, 210, 40)}
    ${arr(...PT(1, 1.2, 1.5, 300, 210, 40), ...PT(3, 3.6, 1.5, 300, 210, 40), '#FF006E', 8)}
    ${pillS(26, 26, 250, 50, '#0078D7', 'teleport to', 26)}${pillS(320, 360, 250, 48, '#59967A', '~0 ~3 ~0', 26)}
    ${stars([560, 40], [40, 380, 12])}`),
  t4: () => svg(`${VX([...GR(5, 3, 'grass'), [3, 0, 0, 'water'], [4, 0, 0, 'water'], [3, 0, 1, 'water'], [4, 0, 1, 'water'], ...MAN(1, 0, 1)], 320, 170, 40)}
    ${pillS(24, 26, 140, 46, '#0078D7', 'walk', 24)}${pillS(176, 26, 150, 46, '#0078D7', 'sprint', 24)}${pillS(338, 26, 120, 46, '#0078D7', 'fly', 24)}${pillS(470, 26, 112, 46, '#0078D7', 'swim', 24)}
    ${pillS(40, 350, 240, 48, '#FF006E', 'on player died', 22)}${pillS(300, 350, 270, 48, '#FF7F11', 'on item used', 22)}
    ${stars([30, 120, 12], [575, 130, 12])}`),
  t5: () => svg(`${VX([...GR(4, 4), ...MAN(1, 0, 1)], 300, 200, 40)}
    ${pillS(14, 24, 300, 46, '#0078D7', 'player world position', 19)}${pillS(330, 24, 256, 46, '#0078D7', 'player name', 20)}
    ${pillS(14, 360, 270, 46, '#0078D7', 'player orientation', 20)}${pillS(300, 360, 286, 46, '#59967A', 'world 12 64 -5', 20)}
    ${stars([570, 110], [30, 120, 12])}`),
};

const TOPICS = [
  { id: 't1', c: ['#3A8DFF', '#00C2D1'], dk: '#1864AB', title: 'Lệnh chat: on chat command',
    tip: 'Gõ phím T để mở khung chat rồi gõ đúng tên lệnh nha!',
    html: `<div class="blocks">${MC('pl', `on chat command ${s('run')}`, [M('pl', `say ${s(':)')}`)], true)}</div><ul>
      <li>Nhóm <span class="k">Player</span> (Người chơi) có màu <b style="color:#0078D7">xanh dương</b>.</li>
      <li><b>on chat command</b>: chạy các lệnh bên trong khi em <span class="k">gõ tên lệnh</span> vào khung chat.</li>
      <li>Trong game: bấm <code>T</code>, gõ <code>run</code> rồi bấm <code>Enter</code>.</li></ul>`,
    quiz: [
      { q: 'Muốn chạy khối on chat command "run", trong Minecraft em làm gì?', o: ['Bấm phím Space', 'Mở chat, gõ run rồi Enter', 'Bấm chuột phải', 'Đi bộ 10 bước'], a: 1, why: 'on chat command chạy khi em gõ đúng tên lệnh vào khung chat.' },
      { q: 'Các khối lệnh nhóm Player có màu gì?', o: ['Xanh lá', 'Tím', 'Xanh dương', 'Cam'], a: 2, why: 'Nhóm Player có màu xanh dương.' } ] },
  { id: 't2', c: ['#7AD86F', '#14A0A0'], dk: '#087F5B', title: 'Nói và nhắn: say, tell',
    tip: 'say thì ai cũng thấy, tell là nhắn riêng cho một người!',
    html: `<div class="blocks">${M('pl', `say ${s(':)')}`)}${M('pl', `tell ${SEL()} ${s('Hi!')}`)}</div><ul>
      <li><b>say</b>: hiện một <span class="k">tin nhắn</span> lên khung chat.</li>
      <li><b>tell</b>: <span class="k">nhắn riêng</span> cho người chơi được chọn.</li>
      <li>Chữ trong ô trắng là <b>văn bản</b> – em sửa thành câu mình muốn.</li></ul>`,
    quiz: [
      { q: 'Lệnh say "Xin chào" sẽ làm gì?', o: ['Đổi tên người chơi', 'Dịch chuyển người chơi', 'Đặt một khối', 'Hiện "Xin chào" trong khung chat'], a: 3, why: 'say hiện tin nhắn lên khung chat.' },
      { q: 'Muốn nhắn riêng cho người chơi gần nhất, em dùng lệnh:', o: ['tell (nearest player) "Hi!"', 'say "Hi!"', 'teleport to', 'player name'], a: 0, why: 'tell gửi tin nhắn tới người chơi được chọn.' } ] },
  { id: 't3', c: ['#FFB14E', '#FF5E78'], dk: '#C2255C', title: 'Dịch chuyển: teleport to',
    tip: 'Dấu ~ nghĩa là "tính từ chỗ em đang đứng"!',
    html: `<div class="blocks">${M('pl', `teleport to ${P3('~', 0, 10, 0)}`)}</div><ul>
      <li><b>teleport to</b>: đưa người chơi <span class="k">tới ngay</span> vị trí mới.</li>
      <li><code>~0 ~10 ~0</code>: lên cao <b>10 khối</b> so với chỗ đang đứng.</li>
      <li>Thứ tự 3 số: <b>x</b> (Đông–Tây), <b>y</b> (lên–xuống), <b>z</b> (Nam–Bắc).</li>
      <li>Cẩn thận: lên quá cao rồi rơi xuống sẽ bị mất máu!</li></ul>`,
    quiz: [
      { q: 'teleport to (~0 ~5 ~0) đưa người chơi đi đâu?', o: ['Xuống 5 khối', 'Lên cao 5 khối', 'Sang phải 5 khối', 'Về toạ độ 0 0 0'], a: 1, why: 'Số thứ hai là y (lên – xuống); +5 là lên cao 5 khối.' },
      { q: 'Dấu ~ trong toạ độ ~0 ~0 ~0 có nghĩa là:', o: ['Toạ độ thế giới', 'Hướng mắt nhìn', 'Tính từ vị trí người chơi', 'Số ngẫu nhiên'], a: 2, why: '~ là toạ độ tương đối, tính từ chỗ người chơi đang đứng.' } ] },
  { id: 't4', c: ['#4F7CFF', '#B06BFF'], dk: '#5F3DC4', title: 'Sự kiện của người chơi',
    tip: 'Sự kiện giống cái chuông: có chuyện xảy ra là chương trình chạy!',
    html: `<div class="blocks">${MC('pl', `on player ${dd('walk')}`, [], true)}${MC('pl', 'on player died', [], true)}${MC('pl', `on ${MR('bl', `item ${PK('stone')}`, 'sd')} used`, [], true)}</div><ul>
      <li><b>on player walk</b>: chạy khi em đi; đổi thành <b>sprint</b>, <b>fly</b>, <b>swim</b>…</li>
      <li><b>on player died</b>: chạy khi người chơi bị chết.</li>
      <li><b>on item used</b>: chạy khi dùng một vật phẩm.</li></ul>`,
    quiz: [
      { q: 'Khối nào chạy mỗi khi người chơi bị chết?', o: ['on player walk', 'on chat command', 'on player died', 'on item used'], a: 2, why: 'on player died chạy khi người chơi chết.' },
      { q: 'Muốn chương trình chạy khi người chơi BƠI, em chọn on player với:', o: ['swim', 'walk', 'fly', 'sprint'], a: 0, why: 'swim nghĩa là bơi.' } ] },
  { id: 't5', c: ['#22C493', '#1E9BD7'], dk: '#0B7285', title: 'Thông tin người chơi',
    tip: 'Khối tròn là khối giá trị: nó trả lời một câu hỏi!',
    html: `<div class="blocks">${MR('pl', 'player world position')}${MR('pl', 'player name')}${MR('pl', 'player orientation')}</div><ul>
      <li><b>player world position</b>: <span class="k">vị trí</span> người chơi trong thế giới.</li>
      <li><b>player name</b>: <span class="k">tên</span> người chơi.</li>
      <li><b>player orientation</b>: <span class="k">hướng</span> đang nhìn.</li>
      <li>Khối tròn được <b>lắp vào ô</b> của khối khác, ví dụ: <code>say (player name)</code>.</li></ul>`,
    quiz: [
      { q: 'Khối nào cho biết người chơi đang ở đâu?', o: ['player name', 'player world position', 'say', 'on player walk'], a: 1, why: 'player world position trả về vị trí của người chơi.' },
      { q: 'Lắp player name vào khối say thì khung chat hiện:', o: ['Chữ "player name"', 'Vị trí người chơi', 'Tên của người chơi', 'Không hiện gì'], a: 2, why: 'player name trả về tên người chơi, say hiện tên đó.' } ] },
];

const KEY = ['<b>on chat command</b><br>gõ T → tên lệnh', '<b>say</b>: chat cho mọi người<br><b>tell</b>: nhắn riêng', '<b>teleport to</b><br>~ = tính từ chỗ đứng<br>x • y • z',
  'walk • sprint • fly • swim<br><b>died</b> • <b>item used</b>', 'Khối tròn trả lời:<br><b>vị trí</b> • <b>tên</b> • <b>hướng</b>'];
