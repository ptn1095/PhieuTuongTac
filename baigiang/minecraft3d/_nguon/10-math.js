/* ===== BÀI 10: MATH – TOÁN ===== */
const META = { key: 'math', num: 10, title: 'Nhóm lệnh Math', big: 'NHÓM LỆNH<br>MATH',
  st2: 'Toán học — 5 nội dung • 10 câu đố • nhận giấy chứng nhận',
  hello: 'Cùng tính toán cho các công trình Minecraft với nhóm Math (màu tím than) nhé!',
  cert: 'NHÓM LỆNH MATH – TOÁN HỌC', file: 'Math', pass: 8 };

const ILL_T = {
  t1: () => svg(`${[['+', '#FF006E'], ['−', '#1982C4'], ['×', '#2DA44E'], ['÷', '#FF7F11']].map(([t, c], i) => ball(105 + i*130, 110, 52, c, t, 60)).join('')}
    ${pillS(60, 220, 480, 60, '#6C6EA0', '3 × 4 = 12', 34)}${pillS(120, 320, 360, 50, '#FF7F11', 'Tính trước, xây sau!', 24)}`),
  t2: () => svg(`${[0, 1, 2, 3, 4, 5, 6].map(i => VX([[0, 0, 0, i < 6 ? (i < 3 ? 'gold' : 'blue') : 'red']], 80 + i*74, 140, 30, { sw: 2 })).join('')}
    ${txt(160, 230, '3', 40, '#B8860B')}${txt(380, 230, '3', 40, '#1982C4')}${txt(524, 230, 'dư 1', 30, '#E5383B')}
    ${pillS(40, 290, 520, 56, '#6C6EA0', 'remainder of 7 / 3 = 1', 28)}${stars([40, 40], [560, 40, 12])}`),
  t3: () => svg(`${VX([[0, 0, 0, 'stone'], [0, 1, 0, 'stone'], [0, 2, 0, 'stone'], [2, 0, 0, 'gold'], [2, 1, 0, 'gold'], [2, 2, 0, 'gold'], [2, 3, 0, 'gold'], [2, 4, 0, 'gold']], 270, 280, 42)}
    ${pillS(20, 30, 230, 50, '#6C6EA0', 'min = 3', 28)}${pillS(350, 30, 230, 50, '#6C6EA0', 'max = 5', 28)}${pillS(150, 350, 300, 50, '#6C6EA0', 'absolute of -4 = 4', 24)}`),
  t4: () => svg(`<rect x="200" y="60" width="200" height="200" rx="34" fill="#fff" stroke="${O}" stroke-width="7"/>
    ${[[250, 110], [350, 110], [300, 160], [250, 210], [350, 210]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="17" fill="#6C6EA0"/>`).join('')}
    ${pillS(80, 300, 440, 56, '#6C6EA0', 'pick random 1 to 6', 30)}${stars([80, 80], [520, 90, 14], [100, 250, 10])}`),
  t5: () => { const a = []; for (let x = 0; x < 4; x++) for (let z = 0; z < 3; z++) for (let y = 0; y < 2; y++) a.push([x, y, z, 'brick']); return svg(`${VX([...GR(5, 4), ...a], 300, 160, 36)}
    ${pillS(20, 24, 560, 52, '#6C6EA0', '4 × 3 × 2 = 24 khối', 28)}${pillS(140, 360, 320, 46, '#FF7F11', 'dài × rộng × cao', 22)}`); },
};

const TOPICS = [
  { id: 't1', c: ['#B65CFF', '#5A189A'], dk: '#4A148C', title: 'Bốn phép tính',
    tip: 'Dấu nhân trong máy tính là ×, dấu chia là /!',
    html: `<div class="blocks">${MR('ma', `${n(0)} ${dd('+')} ${n(0)}`)}${MR('ma', `${n(3)} ${dd('×')} ${n(4)}`)}${MR('ma', `${n(8)} ${dd('/')} ${n(2)}`)}</div><ul>
      <li>Nhóm <span class="k">Math</span> (Toán) có màu <b style="color:#6C6EA0">tím than</b>.</li>
      <li>Bấm vào dấu để đổi: <code>+</code> <code>-</code> <code>×</code> <code>/</code>.</li>
      <li>Khối tròn → lắp vào ô số, ô toạ độ của khối khác.</li></ul>`,
    quiz: [
      { q: 'Khối (6) × (5) trả về số nào?', o: ['11', '30', '1', '65'], a: 1, why: '6 × 5 = 30.' },
      { q: 'Khối lệnh nhóm Math có màu gì?', o: ['Tím than', 'Đỏ', 'Xanh lá', 'Nâu'], a: 0, why: 'Nhóm Math có màu tím than (xanh tím).' } ] },
  { id: 't2', c: ['#FFA62B', '#FF5DA2'], dk: '#D9480F', title: 'Số dư và làm tròn',
    tip: 'remainder of … / 2 bằng 0 là số chẵn, bằng 1 là số lẻ!',
    html: `<div class="blocks">${MR('ma', `remainder of ${n(7)} / ${n(3)}`)}${MR('ma', `${dd('round')} ${n(2.6)}`)}</div><ul>
      <li><b>remainder of</b>: lấy <span class="k">số dư</span> của phép chia: <code>7 / 3</code> dư <b>1</b>.</li>
      <li><b>round</b>: <span class="k">làm tròn</span>: <code>2.6</code> → <b>3</b>; <code>2.4</code> → <b>2</b>.</li>
      <li>Dùng số dư để kiểm tra <b>chẵn – lẻ</b>.</li></ul>`,
    quiz: [
      { q: 'remainder of 10 / 4 bằng:', o: ['4', '0', '2.5', '2'], a: 3, why: '10 = 4 × 2 + 2, số dư là 2.' },
      { q: 'round (4.7) cho kết quả:', o: ['4', '7', '5', '4.7'], a: 2, why: '4.7 làm tròn lên thành 5.' } ] },
  { id: 't3', c: ['#3A8DFF', '#00C2D1'], dk: '#1864AB', title: 'min, max, absolute',
    tip: 'absolute of biến số âm thành số dương – rất hay khi tính khoảng cách!',
    html: `<div class="blocks">${MR('ma', `${dd('min')} of ${n(3)} and ${n(5)}`)}${MR('ma', `absolute of ${n(-4)}`)}${MR('ma', `${dd('square root')} ${n(16)}`)}</div><ul>
      <li><b>min</b>: số <span class="k">nhỏ hơn</span> • <b>max</b>: số <span class="k">lớn hơn</span>.</li>
      <li><b>absolute of</b>: bỏ dấu âm: <code>-4</code> → <b>4</b>.</li>
      <li><b>square root</b>: căn bậc hai: <code>16</code> → <b>4</b>.</li></ul>`,
    quiz: [
      { q: 'max of 8 and 12 bằng:', o: ['12', '8', '20', '4'], a: 0, why: 'max lấy số lớn hơn: 12.' },
      { q: 'absolute of (-9) bằng:', o: ['-9', '9', '0', '81'], a: 1, why: 'absolute bỏ dấu âm: 9.' } ] },
  { id: 't4', c: ['#7AD86F', '#14A0A0'], dk: '#087F5B', title: 'Số ngẫu nhiên',
    tip: 'Mỗi lần chạy ra một số khác – giống tung xúc xắc!',
    html: `<div class="blocks">${MR('ma', `pick random ${n(0)} to ${n(10)}`)}${M('bl', `place ${PK('gold')} at ${MR('po', `~ ${MR('ma', `pick random ${n(-5)} to ${n(5)}`)} ~ ${n(0)} ~ ${n(0)}`, 'sd')}`)}</div><ul>
      <li><b>pick random a to b</b>: chọn <span class="k">ngẫu nhiên</span> một số từ a đến b (có cả a và b).</li>
      <li>Lắp vào toạ độ → khối vàng xuất hiện ở chỗ <b>bất ngờ</b>.</li></ul>`,
    quiz: [
      { q: 'pick random 1 to 6 KHÔNG thể ra số nào?', o: ['1', '6', '3', '7'], a: 3, why: 'Kết quả chỉ nằm từ 1 đến 6; 7 nằm ngoài.' },
      { q: 'Muốn mô phỏng tung đồng xu (0 hoặc 1), em dùng:', o: ['pick random 0 to 1', 'pick random 1 to 6', 'round 0.5', 'max of 0 and 1'], a: 0, why: 'pick random 0 to 1 cho ngẫu nhiên 0 hoặc 1.' } ] },
  { id: 't5', c: ['#FF595E', '#FFB14E'], dk: '#C92A2A', title: 'Toán khi xây dựng',
    tip: 'Tính trước số khối cần dùng để không bị thiếu nha!',
    html: `<div class="blocks">${M('va', `set ${VR('so_khoi')} to ${MR('ma', `${MR('ma', `${n(4)} ${dd('×')} ${n(3)}`)} ${dd('×')} ${n(2)}`)}`)}</div><ul>
      <li>Hộp gạch dài <b>4</b>, rộng <b>3</b>, cao <b>2</b> cần: <code>4 × 3 × 2 = 24</code> khối.</li>
      <li>Lắp khối tròn <b>lồng nhau</b> để tính nhiều bước.</li>
      <li>Toán giúp tính <span class="k">số khối</span>, <span class="k">toạ độ</span>, <span class="k">kích thước</span>.</li></ul>`,
    quiz: [
      { q: 'Một bức tường dài 5, cao 3, dày 1 khối cần bao nhiêu khối?', o: ['8', '9', '15', '53'], a: 2, why: '5 × 3 × 1 = 15 khối.' },
      { q: 'Khối (2 + 3) × 4 cho kết quả:', o: ['14', '20', '9', '24'], a: 1, why: 'Tính trong ngoặc trước: 2 + 3 = 5, rồi 5 × 4 = 20.' } ] },
];

const KEY = ['<b>+ − × /</b><br>khối tròn lắp vào ô', '<b>remainder of</b>: số dư<br><b>round</b>: làm tròn', '<b>min</b> • <b>max</b><br><b>absolute</b> • <b>square root</b>',
  '<b>pick random</b> a to b<br>có cả a và b', 'Số khối = <b>dài × rộng × cao</b>'];
