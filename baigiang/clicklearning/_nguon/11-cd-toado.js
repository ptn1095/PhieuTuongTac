/* ===== CHUYÊN ĐỀ 1: TOẠ ĐỘ TRONG SCRATCH ===== */
const META = { key: 'toado', num: 11, lab: 'Chuyên đề 1/3', title: 'Chuyên đề Toạ độ', big: 'CHUYÊN ĐỀ<br>TOẠ ĐỘ',
  st2: 'Toạ độ trên sân khấu Scratch — 5 nội dung • 10 câu đố • nhận giấy chứng nhận',
  hello: 'Cùng làm chủ toạ độ x, y trên sân khấu Scratch nhé!',
  cert: 'CHUYÊN ĐỀ TOẠ ĐỘ TRONG SCRATCH', file: 'ToaDo', pass: 8 };

const grid = (x, y, w, h) => { let g = `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="#F1F8FF" stroke="${O}" stroke-width="6"/>`;
  for (let i = 1; i < 8; i++) g += `<line x1="${x + i*w/8}" y1="${y + 6}" x2="${x + i*w/8}" y2="${y + h - 6}" stroke="#DCE8F7" stroke-width="2"/>`;
  for (let i = 1; i < 6; i++) g += `<line x1="${x + 6}" y1="${y + i*h/6}" x2="${x + w - 6}" y2="${y + i*h/6}" stroke="#DCE8F7" stroke-width="2"/>`;
  return g + `<line x1="${x + 6}" y1="${y + h/2}" x2="${x + w - 6}" y2="${y + h/2}" stroke="#1982C4" stroke-width="4"/><line x1="${x + w/2}" y1="${y + 6}" x2="${x + w/2}" y2="${y + h - 6}" stroke="#FF006E" stroke-width="4"/>`; };
const dot = (x, y, c, t, dx = 14, dy = -14) => `<circle cx="${x}" cy="${y}" r="11" fill="${c}" stroke="${O}" stroke-width="4"/>${pillS(x + dx, y + dy - 34, t.length*13 + 30, 38, c, t, 20)}`;

const ILL_T = {
  t1: () => svg(`${grid(60, 40, 480, 340)}${txt(552, 218, 'x', 30, '#1982C4', 'start')}${txt(310, 34, 'y', 30, '#FF006E', 'start')}
    ${spr(300, 210, 0, '#FF7F11', .6)}${pillS(234, 244, 132, 40, '#8338EC', '(0, 0)', 22)}
    ${txt(70, 236, '−240', 20, '#1982C4', 'start')}${txt(530, 236, '240', 20, '#1982C4', 'end')}${txt(312, 70, '180', 20, '#FF006E', 'start')}${txt(312, 372, '−180', 20, '#FF006E', 'start')}`),
  t2: () => svg(`${grid(60, 40, 480, 340)}
    ${txt(420, 120, 'x+, y+', 30, '#2DA44E')}${txt(180, 120, 'x−, y+', 30, '#8338EC')}${txt(180, 310, 'x−, y−', 30, '#FF7F11')}${txt(420, 310, 'x+, y−', 30, '#1982C4')}
    ${dot(420, 160, '#2DA44E', '(120, 60)', -60, 0)}${dot(180, 270, '#FF7F11', '(−120, −60)', -70, 0)}`),
  t3: () => svg(`${grid(60, 40, 480, 340)}
    ${spr(170, 290, 0, '#FF7F11', .7, .3)}<path d="M190 270 L420 120" stroke="#8338EC" stroke-width="6" stroke-dasharray="4 12" stroke-linecap="round"/>
    ${spr(420, 120, 0, '#FF7F11', .7)}${pillS(330, 150, 200, 40, '#4C97FF', 'go to x:120 y:90', 18)}
    ${pillS(70, 330, 210, 38, '#1982C4', 'set x to −130', 18)}`),
  t4: () => svg(`${spr(300, 210, 0, '#4C97FF', 1)}${arr(350, 210, 480, 210, '#2DA44E')}${arr(250, 210, 120, 210, '#FF006E')}${arr(300, 160, 300, 70, '#1982C4')}${arr(300, 260, 300, 350, '#FF7F11')}
    ${key3d(470, 150, 80, 70, '#2DA44E', '#1E7B38', '→', 40)}${key3d(50, 150, 80, 70, '#FF006E', '#B0004C', '←', 40)}${key3d(340, 30, 80, 70, '#1982C4', '#0F5B8C', '↑', 40)}${key3d(340, 310, 80, 70, '#FF7F11', '#C25A00', '↓', 40)}`),
  t5: () => svg(`${grid(60, 40, 480, 340)}<rect x="66" y="340" width="468" height="34" fill="#FF006E" opacity=".35"/>
    ${spr(400, 300, 90, '#2EC4B6', .7)}${arr(400, 110, 400, 250, '#8338EC', 7)}${pillS(80, 70, 230, 42, '#4C97FF', 'y position < −150', 20)}
    ${pillS(330, 330, 200, 40, '#E5383B', 'Chạm đáy!', 20)}`),
};

const TOPICS = [
  { id: 't1', c: ['#3A8DFF', '#00C2D1'], dk: '#1864AB', title: 'Hệ toạ độ sân khấu',
    tip: 'Sân khấu giống tờ giấy kẻ ô: mỗi điểm có một “địa chỉ” (x, y)!',
    html: `<ul>
      <li>Sân khấu rộng <code>480</code>, cao <code>360</code>.</li>
      <li>Trục <b style="color:#1982C4">x</b> nằm <span class="k">ngang</span>: từ −240 (trái) đến 240 (phải).</li>
      <li>Trục <b style="color:#FF006E">y</b> nằm <span class="k">dọc</span>: từ −180 (dưới) đến 180 (trên).</li>
      <li>Điểm giữa là <span class="k">gốc toạ độ</span> <code>(0, 0)</code>.</li>
      <li>Viết toạ độ: <b>x trước, y sau</b>.</li></ul>`,
    quiz: [
      { q: 'Sân khấu Scratch rộng bao nhiêu bước theo chiều ngang?', o: ['360', '240', '480', '180'], a: 2, why: 'Từ −240 đến 240 là 480 bước.' },
      { q: 'Trong toạ độ (50, −30), số −30 là:', o: ['Toạ độ y', 'Toạ độ x', 'Hướng', 'Kích thước'], a: 0, why: 'Viết x trước, y sau: x = 50, y = −30.' } ] },
  { id: 't2', c: ['#7AD86F', '#14A0A0'], dk: '#087F5B', title: 'Đọc vị trí nhân vật',
    tip: 'Bên phải x dương, bên trái x âm; phía trên y dương, phía dưới y âm!',
    html: `<table class="tb"><tr><th>Vị trí</th><th>x</th><th>y</th></tr>
      <tr><td>Trên – phải</td><td>dương +</td><td>dương +</td></tr><tr><td>Trên – trái</td><td>âm −</td><td>dương +</td></tr>
      <tr><td>Dưới – trái</td><td>âm −</td><td>âm −</td></tr><tr><td>Dưới – phải</td><td>dương +</td><td>âm −</td></tr></table>
      <ul><li>Xem <b>x, y</b> ở ô thông tin nhân vật.</li></ul>`,
    quiz: [
      { q: 'Nhân vật ở (−100, 80) nằm ở phần nào của sân khấu?', o: ['Trên – phải', 'Trên – trái', 'Dưới – trái', 'Dưới – phải'], a: 1, why: 'x âm → bên trái; y dương → phía trên.' },
      { q: 'Điểm nào nằm ở phía DƯỚI, bên PHẢI sân khấu?', o: ['(−150, −90)', '(150, 90)', '(−150, 90)', '(150, −90)'], a: 3, why: 'Bên phải x dương, phía dưới y âm.' } ] },
  { id: 't3', c: ['#FFA62B', '#FF5DA2'], dk: '#D9480F', title: 'Đặt vị trí theo toạ độ',
    tip: 'go to đặt cả x và y; set x / set y chỉ đặt một trục thôi!',
    html: `<div class="blocks">${B(`go to x: ${N(120)} y: ${N(90)}`)}${B(`glide ${N(1)} secs to x: ${N(0)} y: ${N(0)}`)}${B(`set x to ${N(-130)}`)}${B(`set y to ${N(0)}`)}</div><ul>
      <li><b>go to x: y:</b> đến <span class="k">đúng điểm</span> (x, y).</li>
      <li><b>set x to</b>: chỉ đổi x, <b>giữ nguyên y</b>.</li></ul>`,
    quiz: [
      { q: 'Nhân vật ở (40, 70). Sau lệnh set y to (−20), nhân vật ở:', o: ['(−20, 70)', '(40, 50)', '(40, −20)', '(20, 70)'], a: 2, why: 'Chỉ đổi y thành −20, x vẫn là 40.' },
      { q: 'Lệnh nào đưa nhân vật lên GÓC TRÊN BÊN TRÁI sân khấu?', o: ['go to x: (−240) y: (180)', 'go to x: (240) y: (180)', 'go to x: (0) y: (0)', 'go to x: (−240) y: (−180)'], a: 0, why: 'Trái: x = −240; trên: y = 180.' } ] },
  { id: 't4', c: ['#4F7CFF', '#B06BFF'], dk: '#5F3DC4', title: 'Thay đổi toạ độ',
    tip: '4 phím mũi tên + change x / change y = điều khiển nhân vật đi khắp nơi!',
    html: `<div class="blocks">${B(`change x by ${N(10)}`)}${B(`change y by ${N(10)}`)}</div><table class="tb"><tr><th>Phím</th><th>Lệnh</th></tr>
      <tr><td>→</td><td>change x by 10</td></tr><tr><td>←</td><td>change x by −10</td></tr><tr><td>↑</td><td>change y by 10</td></tr><tr><td>↓</td><td>change y by −10</td></tr></table>`,
    quiz: [
      { q: 'Nhân vật ở (0, 0). Chạy change x by (30) rồi change y by (−20). Nhân vật ở:', o: ['(−20, 30)', '(30, 20)', '(−30, −20)', '(30, −20)'], a: 3, why: 'x: 0 + 30 = 30; y: 0 − 20 = −20.' },
      { q: 'Phím ↑ nên ghép với lệnh:', o: ['change x by (10)', 'change y by (10)', 'change y by (−10)', 'set x to (10)'], a: 1, why: 'Đi lên là y tăng.' } ] },
  { id: 't5', c: ['#22C493', '#1E9BD7'], dk: '#0B7285', title: 'Dùng toạ độ trong game',
    tip: 'Dùng y position để biết nhân vật rơi xuống đáy chưa!',
    html: `<div class="blocks">${RP('x position')}${RP('y position')}${RP('mouse x', 'se')}</div><div class="prog">${FOREVER(`<div class="cb"><span class="sb ctop ct">if ${BO(`${RP('y position')} &lt; ${N(-150)}`)} then</span><div class="cmid"><div class="carm"></div>${STK(B(`go to x: ${N(0)} y: ${N(170)}`))}</div><span class="sb cbot ct"></span></div>`)}</div>`,
    quiz: [
      { q: 'Trong ví dụ, khi y position nhỏ hơn −150 thì nhân vật:', o: ['Biến mất', 'Quay lại phía trên (0, 170)', 'Đi sang phải', 'Đứng yên mãi'], a: 1, why: 'Rơi gần đáy thì go to x: 0 y: 170 để rơi lại từ trên.' },
      { q: 'Muốn nhân vật chạy ngang theo chuột nhưng giữ độ cao, em dùng:', o: ['set y to (mouse y)', 'go to (random position)', 'set x to (mouse x)', 'change y by (mouse x)'], a: 2, why: 'Chỉ đặt x theo chuột, y giữ nguyên.' } ] },
];

const KEY = ['480 × 360 • tâm <b>(0, 0)</b><br>x ngang • y dọc', 'Phải <b>x+</b> • Trái <b>x−</b><br>Trên <b>y+</b> • Dưới <b>y−</b>', '<b>go to x: y:</b><br><b>set x</b> / <b>set y</b>',
  '<b>change x</b>: trái/phải<br><b>change y</b>: lên/xuống', '<b>x position</b><br><b>y position</b> trong if'];
