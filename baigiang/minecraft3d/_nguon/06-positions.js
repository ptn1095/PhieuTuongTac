/* ===== BÀI 6: POSITIONS – VỊ TRÍ ===== */
const META = { key: 'positions', num: 6, title: 'Nhóm lệnh Positions', big: 'NHÓM LỆNH<br>POSITIONS',
  st2: 'Vị trí, toạ độ x y z — 5 nội dung • 10 câu đố • nhận giấy chứng nhận',
  hello: 'Cùng tìm hiểu toạ độ x, y, z trong thế giới 3D với nhóm Positions (màu xanh ngọc) nhé!',
  cert: 'NHÓM LỆNH POSITIONS – VỊ TRÍ', file: 'Positions', pass: 8 };

const AX = (ox, oy, S) => { const o = PT(0, 0, 0, ox, oy, S);
  return `${arr(...o, ...PT(3.6, 0, 0, ox, oy, S), '#E5383B', 8)}${arr(...o, ...PT(0, 3.4, 0, ox, oy, S), '#2DA44E', 8)}${arr(...o, ...PT(0, 0, 3.6, ox, oy, S), '#1982C4', 8)}
  ${txt(...PT(4.1, 0, 0, ox, oy, S), 'x', 34, '#E5383B')}${txt(...PT(0, 3.9, 0, ox, oy, S), 'y', 34, '#2DA44E')}${txt(...PT(0, 0, 4.2, ox, oy, S), 'z', 34, '#1982C4')}`; };
const ILL_T = {
  t1: () => svg(`${VX(GR(4, 4), 300, 170, 40)}${AX(300, 210, 40)}
    ${pillS(390, 300, 196, 44, '#E5383B', 'x: Đông – Tây', 20)}${pillS(14, 70, 196, 44, '#2DA44E', 'y: lên – xuống', 20)}${pillS(14, 300, 196, 44, '#1982C4', 'z: Nam – Bắc', 20)}${stars([560, 60], [300, 400, 10])}`),
  t2: () => svg(`${VX([...GR(5, 4), [0, 0, 0, 'gold']], 300, 150, 40)}${ball(...PT(.5, 1.6, .5, 300, 150, 40), 22, '#FF006E', '★', 20)}
    ${pillS(330, 40, 250, 50, '#69B090', 'world 0 0 0', 26)}${txt(150, 70, 'Mốc cố định', 30, O)}
    ${pillS(60, 350, 480, 46, '#FF7F11', 'Ở đâu cũng chỉ đúng 1 chỗ', 22)}`),
  t3: () => svg(`${VX([...GR(5, 4), ...MAN(1, 0, 1), [3, 0, 1, 'diamond']], 300, 160, 40)}
    ${arr(...PT(1.9, .5, 1.5, 300, 160, 40), ...PT(2.9, .5, 1.5, 300, 160, 40), '#FF006E', 7)}
    ${pillS(330, 40, 250, 50, '#69B090', '~2 ~0 ~0', 26)}${txt(150, 70, 'Theo người chơi', 28, O)}
    ${pillS(40, 350, 520, 46, '#FF7F11', 'Em đi đâu, ~ đi theo em', 22)}`),
  t4: () => svg(`${VX([...GR(4, 4), ...MAN(1, 0, 1)], 300, 170, 42)}
    ${arr(...PT(1.8, 1.4, 1.5, 300, 170, 42), ...PT(3.8, 1.4, 1.5, 300, 170, 42), '#FF006E', 8)}${txt(...PT(4.4, 1.6, 1.5, 300, 170, 42), 'trước', 24, '#FF006E')}
    ${pillS(20, 30, 260, 50, '#69B090', '^0 ^0 ^5', 28)}${pillS(296, 30, 290, 50, '#69B090', 'in front 5', 26)}
    ${pillS(60, 356, 480, 44, '#FF7F11', 'Theo hướng mắt nhìn', 22)}`),
  t5: () => svg(`${pillS(30, 50, 240, 56, '#69B090', '~1 ~0 ~2', 28)}${txt(300, 92, '+', 50, O)}${pillS(330, 50, 240, 56, '#69B090', '~3 ~1 ~0', 28)}
    ${txt(300, 170, '=', 50, O)}${pillS(170, 200, 260, 60, '#FF006E', '~4 ~1 ~2', 30)}
    ${pillS(60, 310, 480, 50, '#69B090', 'pick random position', 26)}${stars([40, 200], [560, 200, 12], [300, 400, 10])}`),
};

const TOPICS = [
  { id: 't1', c: ['#2EC4B6', '#1982C4'], dk: '#145DA0', title: 'Ba trục x, y, z',
    tip: 'Nhớ: y là chiều CAO – số y lớn là ở trên trời!',
    html: `<div class="blocks">${MR('po', `world ${n(0)} ${n(64)} ${n(0)}`)}</div><ul>
      <li>Nhóm <span class="k">Positions</span> (Vị trí) có màu <b style="color:#4F9A78">xanh ngọc</b>.</li>
      <li>Thế giới 3D dùng <b>3 số</b> để chỉ một vị trí:</li>
      <li><b style="color:#E5383B">x</b>: Đông (+) – Tây (−) • <b style="color:#2DA44E">y</b>: lên (+) – xuống (−)</li>
      <li><b style="color:#1982C4">z</b>: Nam (+) – Bắc (−)</li></ul>`,
    quiz: [
      { q: 'Trong Minecraft, số nào cho biết độ CAO của một vị trí?', o: ['x', 'z', 'y', 'Không số nào'], a: 2, why: 'y là trục lên – xuống, cho biết độ cao.' },
      { q: 'Một vị trí trong thế giới 3D cần mấy số?', o: ['1', '2', '4', '3'], a: 3, why: 'Cần 3 số: x, y, z.' } ] },
  { id: 't2', c: ['#FFA62B', '#FF5DA2'], dk: '#D9480F', title: 'Toạ độ thế giới: world',
    tip: 'Bật Show Coordinates trong cài đặt để xem toạ độ của em!',
    html: `<div class="blocks">${MR('po', `world ${n(0)} ${n(0)} ${n(0)}`)}</div><ul>
      <li><b>world</b>: toạ độ <span class="k">tuyệt đối</span>, tính từ mốc cố định của thế giới.</li>
      <li>Em đứng ở đâu thì <code>world 10 64 5</code> vẫn chỉ <b>đúng một chỗ</b>.</li>
      <li>Dùng khi muốn xây ở một <b>địa điểm cố định</b>.</li></ul>`,
    quiz: [
      { q: 'Toạ độ world 5 70 5 thay đổi thế nào khi người chơi đi chỗ khác?', o: ['Không đổi, vẫn đúng chỗ cũ', 'Đi theo người chơi', 'Biến mất', 'Đổi ngẫu nhiên'], a: 0, why: 'Toạ độ world là tuyệt đối, không phụ thuộc người chơi.' },
      { q: 'Toạ độ world còn được gọi là toạ độ:', o: ['Tương đối', 'Theo hướng nhìn', 'Tuyệt đối', 'Ngẫu nhiên'], a: 2, why: 'world là toạ độ tuyệt đối.' } ] },
  { id: 't3', c: ['#7AD86F', '#14A0A0'], dk: '#087F5B', title: 'Toạ độ tương đối: ~',
    tip: '~0 ~0 ~0 chính là chỗ em đang đứng!',
    html: `<div class="blocks">${MR('po', `~ ${n(2)} ~ ${n(0)} ~ ${n(0)}`)}</div><ul>
      <li>Dấu <code>~</code>: <span class="k">tương đối</span> – tính từ chỗ <b>người chơi</b> đứng.</li>
      <li><code>~2 ~0 ~0</code>: cách em 2 khối về phía Đông.</li>
      <li><code>~0 ~-1 ~0</code>: khối <b>ngay dưới chân</b> em.</li></ul>`,
    quiz: [
      { q: 'Vị trí ~0 ~-1 ~0 là ở đâu?', o: ['Trên đầu người chơi', 'Ngay dưới chân người chơi', 'Mốc 0 0 0 của thế giới', 'Phía trước 1 khối'], a: 1, why: 'y = −1 là thấp hơn 1 khối, tức ngay dưới chân.' },
      { q: 'Người chơi đi sang chỗ khác thì vị trí ~3 ~0 ~0 sẽ:', o: ['Đứng yên chỗ cũ', 'Về 0 0 0', 'Biến mất', 'Đi theo người chơi'], a: 3, why: '~ tính theo người chơi nên đi theo người chơi.' } ] },
  { id: 't4', c: ['#4F7CFF', '#B06BFF'], dk: '#5F3DC4', title: 'Theo hướng nhìn: ^',
    tip: 'Xoay mặt hướng nào, khối "phía trước" sẽ ở hướng đó!',
    html: `<div class="blocks">${MR('po', `^ ${n(0)} ^ ${n(0)} ^ ${n(5)}`)}${MR('po', `right ${n(0)} above ${n(0)} in front ${n(5)}`)}</div><ul>
      <li>Dấu <code>^</code>: tính theo <span class="k">hướng mắt nhìn</span> của người chơi.</li>
      <li><code>^0 ^0 ^5</code>: <b>phía trước</b> mặt em 5 khối.</li>
      <li>Khối <b>right / above / in front</b>: phải • trên • trước – dễ đọc hơn.</li></ul>`,
    quiz: [
      { q: 'Toạ độ ^0 ^0 ^3 là vị trí:', o: ['Phía trước mặt 3 khối', 'Phía trên 3 khối', 'Phía Đông 3 khối', 'Mốc thế giới'], a: 0, why: 'Số thứ ba của ^ là phía trước theo hướng nhìn.' },
      { q: 'Khác biệt của ^ so với ~ là:', o: ['^ không dùng số', '^ tính theo hướng nhìn', '^ là toạ độ thế giới', 'Không khác gì'], a: 1, why: '^ tính theo hướng mắt nhìn; ~ tính theo hướng Đông/Nam cố định.' } ] },
  { id: 't5', c: ['#FF595E', '#FFB14E'], dk: '#C92A2A', title: 'Cộng và chọn vị trí',
    tip: 'pick random position giúp gà xuất hiện lung tung rất vui!',
    html: `<div class="blocks">${MR('po', `${P3('~', 1, 0, 2)}<br>+ ${P3('~', 3, 1, 0)}`)}${MR('po', `pick random position<br>from ${P3('~', -5, 0, -5)}<br>to ${P3('~', 5, 0, 5)}`)}</div><ul>
      <li><b>+</b>: <span class="k">cộng</span> từng số x, y, z: <code>(1,0,2) + (3,1,0) = (4,1,2)</code>.</li>
      <li><b>pick random position</b>: chọn <span class="k">ngẫu nhiên</span> một vị trí trong vùng.</li></ul>`,
    quiz: [
      { q: '~2 ~0 ~1 + ~1 ~3 ~1 bằng:', o: ['~3 ~3 ~2', '~2 ~0 ~1', '~1 ~3 ~0', '~3 ~0 ~2'], a: 0, why: 'Cộng từng số: 2+1=3, 0+3=3, 1+1=2.' },
      { q: 'Muốn gà xuất hiện ở chỗ bất kỳ quanh em, lắp vào spawn khối:', o: ['world 0 0 0', '~ + ~', 'player name', 'pick random position'], a: 3, why: 'pick random position cho vị trí ngẫu nhiên trong vùng.' } ] },
];

const KEY = ['<b>x</b> Đông–Tây<br><b>y</b> lên–xuống<br><b>z</b> Nam–Bắc', '<b>world</b>: tuyệt đối<br>chỗ cố định', '<b>~</b> tương đối<br>theo người chơi',
  '<b>^</b> theo hướng nhìn<br>right • above • in front', '<b>+</b> cộng vị trí<br><b>pick random position</b>'];
