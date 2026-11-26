/* ===== BÀI 15: TEXT – VĂN BẢN ===== */
const META = { key: 'text', num: 15, title: 'Nhóm lệnh Text', big: 'NHÓM LỆNH<br>TEXT',
  st2: 'Văn bản, chuỗi chữ — 5 nội dung • 10 câu đố • nhận giấy chứng nhận',
  hello: 'Cùng ghép chữ, đếm chữ, cắt chữ với nhóm Text (màu cam vàng, mục Advanced) nhé!',
  cert: 'NHÓM LỆNH TEXT – VĂN BẢN', file: 'Text', pass: 8 };

const CH = (x, y, word, hi = [], w = 62) => [...word].map((c, i) => `<rect x="${x + i*w}" y="${y}" width="${w - 8}" height="70" rx="10" fill="${hi.includes(i) ? '#FFE066' : '#FFF3D6'}" stroke="${O}" stroke-width="4"/>${txt(x + i*w + (w - 8)/2, y + 48, c, 32)}${txt(x + i*w + (w - 8)/2, y + 98, i, 20, '#E89005')}`).join('');
const ILL_T = {
  t1: () => svg(`${CH(150, 70, 'Hello')}${pillS(120, 240, 360, 54, '#E89005', 'length of "Hello" → 5', 26)}${stars([60, 60], [550, 60, 12], [300, 360, 10])}`),
  t2: () => svg(`<rect x="20" y="50" width="220" height="60" rx="30" fill="#fff" stroke="${O}" stroke-width="5"/>${txt(130, 92, '"Xin "', 32)}${txt(300, 92, '+', 44, '#E89005')}
    <rect x="360" y="50" width="220" height="60" rx="30" fill="#fff" stroke="${O}" stroke-width="5"/>${txt(470, 92, '"chào"', 32)}
    ${arr(300, 140, 300, 200, '#FF006E', 8)}${pillS(150, 210, 300, 64, '#E89005', '"Xin chào"', 32)}
    ${pillS(120, 330, 360, 50, '#E89005', 'join', 28)}`),
  t3: () => svg(`<rect x="60" y="70" width="200" height="80" rx="40" fill="#fff" stroke="${O}" stroke-width="5"/>${txt(160, 122, '"10"', 36)}
    ${arr(275, 110, 335, 110, '#FF006E', 8)}${ball(420, 110, 52, '#6C6EA0', '10', 38)}
    ${txt(160, 200, 'chữ', 26, '#E89005')}${txt(420, 200, 'số', 26, '#6C6EA0')}${pillS(110, 260, 380, 54, '#E89005', 'parse to number', 28)}
    ${CHAT(130, 340, 340, 'ga 10 → 10 con gà', 22)}`),
  t4: () => svg(`${CH(48, 40, 'Minecraft', [4, 5, 6, 7, 8], 56)}${pillS(30, 210, 540, 52, '#E89005', '"Minecraft" includes "craft"', 22)}
    ${pillS(190, 290, 220, 54, '#459197', 'true', 30)}${pillS(80, 362, 440, 44, '#E89005', 'find index of "craft" → 4', 20)}`),
  t5: () => svg(`${CH(48, 40, 'Minecraft', [0, 1, 2, 3], 56)}${pillS(30, 210, 540, 52, '#E89005', 'substring of … from 0 of length 4', 18)}
    ${pillS(190, 290, 220, 58, '#FFC300', '"Mine"', 32)}${pillS(110, 364, 380, 42, '#E89005', 'char from … at 0 → "M"', 20)}`),
};

const TOPICS = [
  { id: 't1', c: ['#FFA62B', '#FF5DA2'], dk: '#D9480F', title: 'Chuỗi chữ và độ dài',
    tip: 'Dấu cách cũng là một ký tự – "a b" dài 3 đó!',
    html: `<div class="blocks">${MR('tx', s('Hello'))}${MR('tx', `length of ${s('Hello')}`)}</div><ul>
      <li>Nhóm <span class="k">Text</span> (Văn bản) màu <b style="color:#C57A04">cam vàng</b>, trong mục <b>Advanced</b>.</li>
      <li><b>Chuỗi</b> (text): chữ nằm trong <span class="k">dấu ngoặc kép</span> <code>"…"</code>.</li>
      <li><b>length of</b>: đếm <span class="k">số ký tự</span>, kể cả dấu cách.</li>
      <li>Ký tự đầu tiên có số thứ tự <b>0</b>.</li></ul>`,
    quiz: [
      { q: 'length of "Hello" cho kết quả:', o: ['4', '5', '6', 'Hello'], a: 1, why: 'H-e-l-l-o có 5 ký tự.' },
      { q: 'length of "Hi bạn" (có 1 dấu cách) bằng:', o: ['5', '4', '2', '6'], a: 3, why: 'H, i, dấu cách, b, ạ, n → 6 ký tự.' } ] },
  { id: 't2', c: ['#3A8DFF', '#00C2D1'], dk: '#1864AB', title: 'Ghép chữ: join',
    tip: 'Nhớ thêm dấu cách vào cuối "Xin chào " để chữ không dính nhau!',
    html: `<div class="blocks">${MR('tx', `join ${s('Hello')} ${s('World')} ⊖ ⊕`)}${M('pl', `say ${MR('tx', `join ${s('Xin chào ')} ${MR('pl', 'player name')}`)}`)}</div><ul>
      <li><b>join</b>: <span class="k">ghép</span> nhiều chuỗi thành một.</li>
      <li><code>join "Hello" "World"</code> → <b>"HelloWorld"</b> (không tự thêm dấu cách).</li>
      <li>Ghép với <b>player name</b> để chào đúng tên người chơi.</li></ul>`,
    quiz: [
      { q: 'join "Mine" "craft" cho kết quả:', o: ['"Minecraft"', '"Mine craft"', '"craftMine"', '9'], a: 0, why: 'join ghép liền hai chuỗi theo thứ tự.' },
      { q: 'Người chơi tên An. say (join "Chào " player name) hiện:', o: ['Chào player name', 'ChàoAn', 'Chào An', 'An Chào'], a: 2, why: '"Chào " có dấu cách ở cuối, ghép với tên An → "Chào An".' } ] },
  { id: 't3', c: ['#7AD86F', '#14A0A0'], dk: '#087F5B', title: 'Chữ thành số',
    tip: '"10" là chữ, 10 mới là số – muốn tính toán phải đổi sang số!',
    html: `<div class="blocks">${MR('tx', `parse to number ${s('123')}`)}${MC('pl', `on chat command ${s('ga')} ${MR('va', 'num1', 'sd')}`, [MC('lo', `repeat ${MR('va', 'num1', 'sd')} times`, [M('mo', `spawn ${MR('mo', `animal ${PK('white')}`, 'sd')} at ${P3('~', 2, 0, 0)}`)])], true)}</div><ul>
      <li><b>parse to number</b>: đổi chuỗi <code>"123"</code> thành <span class="k">số 123</span>.</li>
      <li>Lệnh chat có tham số: gõ <code>ga 10</code> → gọi <b>10</b> con gà.</li></ul>`,
    quiz: [
      { q: 'parse to number "25" cho kết quả:', o: ['Chữ "25"', 'Số 25', 'Số 7', 'true'], a: 1, why: 'parse to number đổi chuỗi "25" thành số 25.' },
      { q: 'Với chương trình mẫu, em gõ chat "ga 3" thì có mấy con gà?', o: ['1', '10', '0', '3'], a: 3, why: 'num1 nhận số 3 → lặp 3 lần → 3 con gà.' } ] },
  { id: 't4', c: ['#4F7CFF', '#B06BFF'], dk: '#5F3DC4', title: 'Tìm trong chuỗi',
    tip: 'find index of trả về -1 là không tìm thấy, giống bên mảng!',
    html: `<div class="blocks">${MH('tx', `${s('Minecraft')} includes ${s('craft')}`)}${MR('tx', `${s('Minecraft')} find index of ${s('craft')}`)}${MH('tx', `${s('this')} is empty`)}</div><ul>
      <li><b>includes</b>: chuỗi <span class="k">có chứa</span> chữ đó không? → true / false.</li>
      <li><b>find index of</b>: chữ đó <span class="k">bắt đầu ở vị trí</span> số mấy (không có → -1).</li>
      <li><b>is empty</b>: chuỗi có <span class="k">rỗng</span> không?</li></ul>`,
    quiz: [
      { q: '"Minecraft" includes "mine" (chữ m thường) cho kết quả:', o: ['true', 'false', '0', '4'], a: 1, why: 'Phân biệt chữ hoa – thường: "Mine" khác "mine" → false.' },
      { q: '"Minecraft" find index of "craft" bằng:', o: ['4', '5', '0', '-1'], a: 0, why: 'M-i-n-e là 0-3, chữ c ở vị trí 4.' } ] },
  { id: 't5', c: ['#FF595E', '#FFB14E'], dk: '#C92A2A', title: 'Cắt chữ: substring',
    tip: 'substring giống dùng kéo cắt một khúc chữ ra!',
    html: `<div class="blocks">${MR('tx', `substring of ${s('Minecraft')} from ${n(0)} of length ${n(4)}`)}${MR('tx', `char from ${s('Minecraft')} at ${n(0)}`)}${MR('tx', `split ${s('a,b,c')} at ${s(',')}`)}</div><ul>
      <li><b>substring</b>: lấy <span class="k">một đoạn</span> chữ: từ vị trí, dài bao nhiêu → <b>"Mine"</b>.</li>
      <li><b>char from … at</b>: lấy <span class="k">1 ký tự</span> → <b>"M"</b>.</li>
      <li><b>split</b>: <span class="k">tách</span> chuỗi thành mảng → ["a","b","c"].</li></ul>`,
    quiz: [
      { q: 'substring of "Minecraft" from 4 of length 5 cho kết quả:', o: ['"Mine"', '"necra"', '"craft"', '"ecraf"'], a: 2, why: 'Từ vị trí 4 (chữ c), lấy 5 ký tự → "craft".' },
      { q: 'char from "Agent" at 1 cho kết quả:', o: ['"g"', '"A"', '"e"', '"t"'], a: 0, why: 'A ở vị trí 0, g ở vị trí 1.' } ] },
];

const KEY = ['Chuỗi trong <b>"…"</b><br><b>length of</b>: số ký tự', '<b>join</b>: ghép chữ<br>nhớ dấu cách', '<b>parse to number</b><br>"10" → 10',
  '<b>includes</b> → true/false<br><b>find index of</b>', '<b>substring</b> • <b>char from</b><br><b>split</b>'];
