/* ===== NHÁNH 7: VARIABLES – BIẾN ===== */
const META = { key: 'variables', num: 7, title: 'Nhóm lệnh Variables', big: 'NHÓM LỆNH<br>VARIABLES',
  st2: 'Biến và danh sách — 5 nội dung • 10 câu đố • nhận giấy chứng nhận',
  hello: 'Cùng khám phá nhóm lệnh Biến (màu cam đậm) nhé!',
  cert: 'NHÓM LỆNH VARIABLES – BIẾN', file: 'Variables', pass: 8 };

const box = (x, y, lab, v, c = '#FF8C1A') => `<path d="M${x} ${y + 40} L${x + 30} ${y} H${x + 190} L${x + 220} ${y + 40}Z" fill="#FFC078" stroke="${O}" stroke-width="5" stroke-linejoin="round"/><rect x="${x}" y="${y + 40}" width="220" height="150" rx="16" fill="${c}" stroke="${O}" stroke-width="6"/>${txt(x + 110, y + 100, lab, 30, '#fff')}<rect x="${x + 50}" y="${y + 118}" width="120" height="56" rx="28" fill="#fff" stroke="${O}" stroke-width="4"/>${txt(x + 110, y + 157, v, 32)}`;
const monV = (x, y, lab, v) => `<rect x="${x}" y="${y}" width="250" height="66" rx="14" fill="#E9EEF2" stroke="#C6D0DA" stroke-width="4"/>${txt(x + 18, y + 43, lab, 26, '#575E75', 'start')}<rect x="${x + 158}" y="${y + 13}" width="78" height="40" rx="20" fill="#FF8C1A"/>${txt(x + 197, y + 42, v, 24, '#fff')}`;

const ILL_T = {
  t1: () => svg(`${box(60, 90, 'điểm', '0')}${box(320, 90, 'tên', 'An', '#DB6E00')}
    ${pillS(100, 330, 400, 54, '#FF8C1A', 'Biến = chiếc hộp có tên', 26)}${star(40, 50, 16, '#FFD60A')}${star(560, 50, 14, '#8338EC')}`),
  t2: () => svg(`${box(40, 70, 'điểm', '3')}
    ${pillS(300, 70, 270, 52, '#FF8C1A', 'set điểm to 0', 24)}${pillS(300, 150, 270, 52, '#DB6E00', 'change điểm by 1', 22)}
    ${txt(435, 250, '0 → 1 → 2 → 3', 32, '#FF006E')}${pillS(300, 300, 270, 52, '#2DA44E', '3 lần +1 = 3', 24)}${star(560, 390, 12, '#FFD60A')}`),
  t3: () => svg(`${stg(40, 30, 520, 360, false)}${monV(60, 50, 'điểm', '12')}${monV(60, 130, 'mạng', '3')}
    ${spr(400, 270, 0, '#FF7F11', 1)}<rect x="350" y="140" width="190" height="70" rx="22" fill="#fff" stroke="${O}" stroke-width="5"/>${txt(445, 186, '12', 32)}
    ${pillS(70, 310, 200, 44, '#FF8C1A', '☑ hiện biến', 22)}`),
  t4: () => svg(`<circle cx="160" cy="210" r="90" fill="#FF595E" stroke="${O}" stroke-width="6"/><path d="M160 120 Q170 90 195 85" stroke="#2DA44E" stroke-width="8" fill="none"/><ellipse cx="190" cy="92" rx="22" ry="11" fill="#8AC926" stroke="${O}" stroke-width="4"/><circle cx="130" cy="180" r="18" fill="#fff" opacity=".5"/>
    <g transform="translate(220 250) rotate(-20)"><path d="M0 0 L0 56 L14 44 L25 66 L36 61 L25 39 L43 39Z" fill="#fff" stroke="${O}" stroke-width="5" stroke-linejoin="round"/></g>
    ${pillS(320, 70, 250, 52, '#FF8C1A', 'điểm +1', 28)}${pillS(320, 160, 250, 52, '#59C059', 'điểm = 10 ?', 26)}${pillS(320, 250, 250, 52, '#FFC300', '🏆 Thắng!', 28, 0, O)}
    ${arr(445, 124, 445, 156, O, 5)}${arr(445, 214, 445, 246, O, 5)}${star(50, 50, 16, '#FFD60A')}`),
  t5: () => svg(`<rect x="60" y="40" width="260" height="340" rx="20" fill="#E9EEF2" stroke="#C6D0DA" stroke-width="5"/>${txt(190, 82, 'giỏ hàng', 28, '#575E75')}
    ${['Táo', 'Cam', 'Chuối', 'Nho'].map((t, i) => `${txt(90, 140 + i*60, i + 1, 26, '#575E75', 'start')}<rect x="124" y="${110 + i*60}" width="176" height="46" rx="10" fill="#FF661A"/>${txt(212, 142 + i*60, t, 26, '#fff')}`).join('')}
    ${pillS(350, 80, 220, 50, '#FF661A', 'add … to', 26)}${pillS(350, 170, 220, 50, '#DB6E00', 'item 2 = Cam', 22)}${pillS(350, 260, 220, 50, '#FF8C1A', 'length = 4', 24)}`),
};

const TOPICS = [
  { id: 't1', c: ['#FFC300', '#FF7F11'], dk: '#D9480F', title: 'Biến là gì?',
    tip: 'Biến giống chiếc hộp có dán nhãn tên, bên trong cất một giá trị!',
    html: `<div class="blocks">${B('Make a Variable', 'va')}${RP('điểm', 'va')}</div><ul>
      <li>Nhóm <span class="k">Variables</span> (Biến) màu <b style="color:#DB6E00">cam đậm</b>.</li>
      <li><span class="k">Biến</span> là nơi <b>lưu trữ</b> một giá trị (số hoặc chữ) có thể thay đổi.</li>
      <li>Bấm <b>Make a Variable</b>, đặt <b>tên</b> dễ hiểu: <code>điểm</code>, <code>mạng</code>.</li>
      <li><b>For all sprites</b>: mọi nhân vật dùng chung.</li></ul>`,
    quiz: [
      { q: 'Biến trong Scratch dùng để:', o: ['Vẽ nhân vật mới', 'Phát âm thanh', 'Lưu trữ một giá trị có thể thay đổi', 'Đổi phông nền'], a: 2, why: 'Biến giống chiếc hộp có tên, cất một giá trị.' },
      { q: 'Để tạo biến mới, em bấm nút:', o: ['Make a Variable', 'Make a Block', 'Choose a Sprite', 'Add Extension'], a: 0, why: 'Nút Make a Variable nằm trong nhóm Variables.' } ] },
  { id: 't2', c: ['#3A8DFF', '#00C2D1'], dk: '#1864AB', title: 'Đặt và thay đổi biến',
    tip: 'set là ĐẶT LẠI giá trị, change là CỘNG THÊM vào giá trị cũ!',
    html: `<div class="blocks">${B(`set ${D('điểm')} to ${N(0)}`, 'va')}${B(`change ${D('điểm')} by ${N(1)}`, 'va')}</div><ul>
      <li><b>set … to</b>: <span class="k">gán</span> giá trị mới cho biến.</li>
      <li><b>change … by</b>: <span class="k">cộng thêm</span> (số âm thì giảm).</li>
      <li>Đầu trò chơi thường <b>set điểm to 0</b>.</li></ul>`,
    quiz: [
      { q: 'set (điểm) to (0) rồi chạy 3 lần change (điểm) by (1). điểm bằng:', o: ['1', '0', '4', '3'], a: 3, why: 'Bắt đầu từ 0, cộng 1 ba lần: 0 + 1 + 1 + 1 = 3.' },
      { q: 'Biến mạng đang là 3. Muốn mất 1 mạng, em dùng:', o: ['set (mạng) to (1)', 'change (mạng) by (−1)', 'change (mạng) by (1)', 'set (mạng) to (−1)'], a: 1, why: 'change by −1 giảm biến đi 1: 3 → 2.' } ] },
  { id: 't3', c: ['#7AD86F', '#14A0A0'], dk: '#087F5B', title: 'Hiện biến, dùng biến',
    tip: 'Tích ô ☑ cạnh biến là thấy bảng điểm trên sân khấu ngay!',
    html: `<div class="blocks">${B(`show variable ${D('điểm')}`, 'va')}${B(`hide variable ${D('điểm')}`, 'va')}${B(`say ${RP('điểm', 'va')}`, 'lk')}</div><ul>
      <li>Tích ô <b>☑</b> hoặc dùng <b>show variable</b>: hiện <span class="k">bảng giá trị</span>.</li>
      <li>Khối tròn <code>điểm</code> đặt vào ô lệnh khác để <b>dùng giá trị</b>.</li>
      <li>Ví dụ: <b>say (điểm)</b> nói ra số điểm hiện tại.</li></ul>`,
    quiz: [
      { q: 'Biến điểm đang bằng 12. Lệnh say (điểm) làm nhân vật nói:', o: ['điểm', '12', '0', 'say'], a: 1, why: 'Khối tròn điểm cho ra giá trị bên trong là 12.' },
      { q: 'Muốn ẨN bảng giá trị biến khỏi sân khấu, em dùng:', o: ['hide', 'set (điểm) to (0)', 'hide variable (điểm)', 'delete this clone'], a: 2, why: 'hide variable ẩn bảng hiển thị biến; hide ẩn nhân vật.' } ] },
  { id: 't4', c: ['#4F7CFF', '#B06BFF'], dk: '#5F3DC4', title: 'Trò chơi tính điểm',
    tip: 'Biến + if là bí quyết làm trò chơi có điểm và chiến thắng!',
    html: `<div class="prog">${STK(B('when this sprite clicked', 'hat ev'), B(`change ${D('điểm')} by ${N(1)}`, 'va'), `<div class="cb"><span class="sb ctop ct">if ${BO(`${RP('điểm', 'va')} = ${N(10)}`)} then</span><div class="cmid"><div class="carm"></div>${STK(B(`say ${T('Thắng!')}`, 'lk'))}</div><span class="sb cbot ct"></span></div>`)}</div><ul>
      <li>Mỗi lần bấm trúng: <b>điểm +1</b>.</li>
      <li>Đủ <code>10</code> điểm thì <span class="k">chiến thắng</span>.</li></ul>`,
    quiz: [
      { q: 'Khi bấm cờ xanh bắt đầu trò chơi, nên đặt lệnh nào cho biến điểm?', o: ['set (điểm) to (0)', 'change (điểm) by (10)', 'hide variable (điểm)', 'say (điểm)'], a: 0, why: 'Ván mới phải đưa điểm về 0.' },
      { q: 'Trong ví dụ, nhân vật nói “Thắng!” khi:', o: ['Bấm cờ xanh', 'điểm bằng 1', 'Chạm cạnh', 'điểm bằng 10'], a: 3, why: 'Điều kiện if là (điểm) = 10.' } ] },
  { id: 't5', c: ['#FF7F11', '#FF006E'], dk: '#C2255C', title: 'Danh sách: List',
    tip: 'Biến cất 1 giá trị, danh sách cất được cả một hàng giá trị!',
    html: `<div class="blocks">${B('Make a List', 'va')}${B(`add ${T('Táo')} to ${D('giỏ hàng')}`, 'va')}${RP(`item ${N(1)} of ${D('giỏ hàng')}`, 'va')}${RP(`length of ${D('giỏ hàng')}`, 'va')}</div><ul>
      <li><span class="k">Danh sách</span> lưu <b>nhiều giá trị</b>, đánh số từ <code>1</code>.</li>
      <li><b>add</b>: thêm vào cuối; <b>item</b>: lấy phần tử.</li>
      <li><b>length of</b>: số phần tử trong danh sách.</li></ul>`,
    quiz: [
      { q: 'Danh sách giỏ hàng: Táo, Cam, Chuối, Nho. item (2) of (giỏ hàng) là:', o: ['Táo', 'Chuối', 'Cam', 'Nho'], a: 2, why: 'Phần tử thứ 2 trong danh sách là Cam.' },
      { q: 'Danh sách có 4 món, thêm 1 món bằng add. length of danh sách là:', o: ['4', '5', '1', '3'], a: 1, why: 'Thêm 1 phần tử: 4 + 1 = 5.' } ] },
];

const KEY = ['<b>Biến</b>: hộp có tên<br>lưu 1 giá trị', '<b>set</b>: gán mới<br><b>change</b>: cộng thêm', '<b>show / hide variable</b><br>khối tròn = giá trị',
  'Biến + <b>if</b><br>= trò chơi tính điểm', '<b>List</b>: nhiều giá trị<br><b>add</b> • <b>item</b> • <b>length</b>'];
