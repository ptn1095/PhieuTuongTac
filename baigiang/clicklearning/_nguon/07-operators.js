/* ===== NHÁNH 6: OPERATORS – CÁC PHÉP TOÁN ===== */
const META = { key: 'operators', num: 7, title: 'Nhóm lệnh Operators', big: 'NHÓM LỆNH<br>OPERATORS',
  st2: 'Các phép toán — 5 nội dung • 10 câu đố • nhận giấy chứng nhận',
  hello: 'Cùng khám phá nhóm lệnh Các phép toán (màu xanh lá) nhé!',
  cert: 'NHÓM LỆNH OPERATORS – PHÉP TOÁN', file: 'Operators', pass: 8 };

const hexO = (x, y, w, h, t, fs = 28, c = '#59C059') => `<polygon points="${x + h/2},${y} ${x + w - h/2},${y} ${x + w},${y + h/2} ${x + w - h/2},${y + h} ${x + h/2},${y + h} ${x},${y + h/2}" fill="${c}" stroke="${O}" stroke-width="5" stroke-linejoin="round"/>${txt(x + w/2, y + h/2 + fs*.36, t, fs, '#fff')}`;
const dice = (x, y, s, n) => { const P = { 1: [[0,0]], 2: [[-1,-1],[1,1]], 3: [[-1,-1],[0,0],[1,1]], 4: [[-1,-1],[1,-1],[-1,1],[1,1]], 5: [[-1,-1],[1,-1],[0,0],[-1,1],[1,1]], 6: [[-1,-1],[1,-1],[-1,0],[1,0],[-1,1],[1,1]] };
  return `<rect x="${x - s/2}" y="${y - s/2}" width="${s}" height="${s}" rx="${s*.2}" fill="#fff" stroke="${O}" stroke-width="6"/>${P[n].map(([a, b]) => `<circle cx="${x + a*s*.27}" cy="${y + b*s*.27}" r="${s*.09}" fill="#FF006E"/>`).join('')}`; };

const ILL_T = {
  t1: () => svg(`${ball(110, 110, 62, '#59C059', '+', 70)}${ball(250, 110, 62, '#1982C4', '−', 70)}${ball(390, 110, 62, '#FF7F11', '×', 70)}${ball(520, 110, 56, '#8338EC', '÷', 66)}
    ${pillS(60, 230, 480, 64, '#59C059', '(3 + 4) × 2 = 14', 36)}${pillS(140, 320, 320, 56, '#389438', '10 / 4 = 2.5', 30)}`),
  t2: () => svg(`${ball(130, 140, 70, '#FF006E', '7', 70)}${ball(470, 140, 55, '#1982C4', '5', 56)}${txt(300, 175, '&gt;', 110, '#59C059')}
    ${pillS(150, 260, 300, 60, '#2DA44E', 'ĐÚNG (true)', 32)}${txt(110, 370, '&lt;  nhỏ hơn', 30, O, 'start')}${txt(330, 370, '=  bằng', 30, O, 'start')}${star(560, 40, 14, '#FFD60A')}`),
  t3: () => svg(`${hexO(30, 50, 250, 70, 'and', 34)}${txt(420, 98, 'cả hai đúng', 32)}
    ${hexO(30, 165, 250, 70, 'or', 34)}${txt(420, 213, 'một cái đúng', 32)}
    ${hexO(30, 280, 250, 70, 'not', 34)}${txt(420, 328, 'đảo ngược', 32)}${star(570, 30, 12, '#FFD60A')}${star(570, 390, 12, '#FF006E')}`),
  t4: () => svg(`${dice(150, 150, 130, 3)}${dice(330, 190, 110, 6)}${dice(480, 130, 90, 1)}
    ${pillS(80, 300, 440, 60, '#59C059', 'pick random 1 to 6', 32)}${star(50, 50, 16, '#FFD60A')}${star(560, 380, 12, '#8338EC')}`),
  t5: () => svg(`${pillS(30, 40, 150, 58, '#FF7F11', 'Xin', 30)}${txt(205, 80, '+', 40)}${pillS(230, 40, 150, 58, '#1982C4', 'chào', 30)}${txt(405, 80, '=', 40)}${pillS(430, 40, 150, 58, '#59C059', 'Xinchào', 26)}
    ${pillS(40, 150, 520, 56, '#389438', 'length of (Scratch) = 7', 28)}
    ${pillS(40, 230, 250, 56, '#8338EC', '10 mod 3 = 1', 26)}${pillS(310, 230, 250, 56, '#FF006E', 'round 3.6 = 4', 26)}
    ${pillS(40, 310, 520, 56, '#1982C4', 'letter 1 of (Mèo) = M', 28)}`),
};

const TOPICS = [
  { id: 't1', c: ['#7AD86F', '#14A0A0'], dk: '#087F5B', title: 'Phép tính: + − × ÷',
    tip: 'Trong Scratch, dấu nhân là * và dấu chia là /!',
    html: `<div class="blocks">${RP(`${N(3)} + ${N(4)}`, 'op')}${RP(`${N(9)} - ${N(5)}`, 'op')}${RP(`${N(6)} * ${N(2)}`, 'op')}${RP(`${N(10)} / ${N(4)}`, 'op')}</div><ul>
      <li>Nhóm <span class="k">Operators</span> (Phép toán) màu <b style="color:#389438">xanh lá</b>.</li>
      <li>Cộng <code>+</code>, trừ <code>-</code>, nhân <code>*</code>, chia <code>/</code>.</li>
      <li>Khối tròn <b>lồng vào nhau</b>: phép bên trong tính trước.</li>
      <li>Kết quả là <span class="k">một số</span>, đặt vào ô của lệnh khác.</li></ul>`,
    quiz: [
      { q: 'Kết quả của khối ((3) + (4)) * (2) là:', o: ['11', '14', '24', '9'], a: 1, why: 'Khối trong tính trước: 3 + 4 = 7, rồi 7 × 2 = 14.' },
      { q: 'Kết quả của khối (10) / (4) trong Scratch là:', o: ['2', '40', '2.5', '6'], a: 2, why: '10 chia 4 bằng 2,5 (Scratch viết 2.5).' } ] },
  { id: 't2', c: ['#FFA62B', '#FF5DA2'], dk: '#D9480F', title: 'So sánh: &gt; &lt; =',
    tip: 'Phép so sánh cho kết quả đúng/sai – rất hợp để đặt vào if!',
    html: `<div class="blocks">${BO(`${N(60)} &gt; ${N(50)}`)}${BO(`${N(40)} &lt; ${N(50)}`)}${BO(`${N(50)} = ${N(50)}`)}</div><ul>
      <li><code>&gt;</code> lớn hơn, <code>&lt;</code> nhỏ hơn, <code>=</code> bằng.</li>
      <li>Kết quả: <span class="k">true</span> (đúng) hoặc <span class="k">false</span> (sai).</li>
      <li>Ví dụ: <code>if answer = 10 then say Đúng rồi!</code></li></ul>`,
    quiz: [
      { q: 'Khối (7) > (5) cho kết quả:', o: ['7', 'false (sai)', '2', 'true (đúng)'], a: 3, why: '7 lớn hơn 5 nên kết quả đúng.' },
      { q: 'Kiểm tra người chơi trả lời đúng số 10, em dùng điều kiện:', o: ['(answer) = (10)', '(answer) + (10)', '(answer) > (10)', 'pick random 1 to 10'], a: 0, why: 'Dấu = kiểm tra hai giá trị có bằng nhau không.' } ] },
  { id: 't3', c: ['#3A8DFF', '#00C2D1'], dk: '#1864AB', title: 'Logic: and, or, not',
    tip: 'and khó tính (cả hai phải đúng), or dễ tính (một cái đúng là được)!',
    html: `<div class="blocks">${BO(`${HX} and ${HX}`)}${BO(`${HX} or ${HX}`)}${BO(`not ${HX}`)}</div><ul>
      <li><b>and</b>: đúng khi <span class="k">cả hai</span> điều kiện đúng.</li>
      <li><b>or</b>: đúng khi <span class="k">ít nhất một</span> điều kiện đúng.</li>
      <li><b>not</b>: <span class="k">đảo ngược</span>: đúng ↔ sai.</li></ul>`,
    quiz: [
      { q: 'Khối <(5 > 3) and (2 > 4)> cho kết quả:', o: ['Đúng', 'Sai', '5', 'Báo lỗi'], a: 1, why: '2 > 4 sai nên “and” cho kết quả sai.' },
      { q: 'Khối <not <touching edge?>> ĐÚNG khi nhân vật:', o: ['Chạm cạnh', 'Chạm chuột', 'Không chạm cạnh', 'Đang ẩn'], a: 2, why: 'not đảo ngược: không chạm cạnh thì kết quả đúng.' } ] },
  { id: 't4', c: ['#4F7CFF', '#B06BFF'], dk: '#5F3DC4', title: 'Số ngẫu nhiên',
    tip: 'pick random giống tung xúc xắc – mỗi lần ra một số khác!',
    html: `<div class="blocks">${RP(`pick random ${N(1)} to ${N(10)}`, 'op')}</div><ul>
      <li>Chọn <span class="k">ngẫu nhiên</span> một số trong khoảng cho trước.</li>
      <li>Xúc xắc: <code>pick random 1 to 6</code>.</li>
      <li>Vị trí bất kỳ: <code>go to x: (pick random -240 to 240)</code>.</li>
      <li>Giúp trò chơi <b>bất ngờ</b>, mỗi lần chơi một khác.</li></ul>`,
    quiz: [
      { q: 'Mô phỏng tung xúc xắc 6 mặt, em dùng:', o: ['pick random (0) to (6)', 'pick random (1) to (10)', '(1) + (6)', 'pick random (1) to (6)'], a: 3, why: 'Xúc xắc có các mặt từ 1 đến 6.' },
      { q: 'Khối pick random (1) to (3) KHÔNG thể cho kết quả nào?', o: ['4', '1', '2', '3'], a: 0, why: 'Chỉ chọn trong khoảng 1 đến 3, không có 4.' } ] },
  { id: 't5', c: ['#FF7F11', '#FF006E'], dk: '#C2255C', title: 'Chữ, chia dư, làm tròn',
    tip: 'join nối chữ, mod lấy số dư, round làm tròn!',
    html: `<div class="blocks">${RP(`join ${T('Xin ')} ${T('chào')}`, 'op')}${RP(`length of ${T('Mèo')}`, 'op')}${RP(`${N(10)} mod ${N(3)}`, 'op')}${RP(`round ${N(3.6)}`, 'op')}</div><ul>
      <li><b>join</b>: <span class="k">nối</span> hai đoạn chữ; <b>letter … of</b>: lấy 1 chữ cái.</li>
      <li><b>length of</b>: đếm số ký tự.</li>
      <li><b>mod</b>: <span class="k">số dư</span> phép chia; <b>round</b>: làm tròn.</li></ul>`,
    quiz: [
      { q: 'Kết quả của khối (10) mod (3) là:', o: ['3', '1', '30', '0'], a: 1, why: '10 chia 3 được 3, dư 1.' },
      { q: 'Kết quả của join (Xin ) (chào) là:', o: ['Xin', 'chào', 'Xin chào', 'join'], a: 2, why: 'join nối hai đoạn chữ thành “Xin chào”.' } ] },
];

const KEY = ['<b>+ - * /</b><br>khối trong tính trước', '<b>&gt; &lt; =</b><br>cho đúng / sai', '<b>and</b>: cả hai đúng<br><b>or</b>: một cái đúng<br><b>not</b>: đảo ngược',
  '<b>pick random</b><br>a <b>to</b> b', '<b>join</b> • <b>length of</b><br><b>mod</b> • <b>round</b>'];
