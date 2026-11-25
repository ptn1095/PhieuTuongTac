/* ===== NHÁNH 9: MY BLOCKS – KHỐI CỦA TÔI ===== */
const META = { key: 'myblocks', num: 9, title: 'Nhóm lệnh My Blocks', big: 'NHÓM LỆNH<br>MY BLOCKS',
  st2: 'Khối của tôi — 5 nội dung • 10 câu đố • nhận giấy chứng nhận',
  hello: 'Cùng học cách tự tạo khối lệnh của riêng mình (màu hồng) nhé!',
  cert: 'MY BLOCKS – KHỐI CỦA TÔI', file: 'MyBlocks', pass: 8 };

const blk = (x, y, w, c, d, t, fs = 24) => `<rect x="${x}" y="${y}" width="${w}" height="52" rx="8" fill="${c}" stroke="${d}" stroke-width="4"/>${txt(x + 16, y + 35, t, fs, '#fff', 'start')}`;
const hatM = (x, y, w, t) => `<path d="M${x} ${y + 30} Q${x} ${y} ${x + 30} ${y} H${x + w - 30} Q${x + w} ${y} ${x + w} ${y + 30} V${y + 82} H${x}Z" fill="#FF6680" stroke="#FF4D6A" stroke-width="4"/><rect x="${x + 14}" y="${y + 16}" width="${w - 28}" height="52" rx="12" fill="#FF4D6A"/>${txt(x + 28, y + 51, t, 24, '#fff', 'start')}`;

const ILL_T = {
  t1: () => svg(`${blk(40, 60, 220, '#4C97FF', '#3373CC', 'move 10')}${blk(40, 114, 220, '#4C97FF', '#3373CC', 'turn 15')}${blk(40, 168, 220, '#9966FF', '#774DCB', 'next costume')}
    ${arr(280, 140, 350, 140, '#FF006E', 9)}<rect x="370" y="100" width="190" height="80" rx="10" fill="#FF6680" stroke="#FF4D6A" stroke-width="5"/>${txt(465, 151, 'nhảy múa', 30, '#fff')}
    ${pillS(70, 300, 460, 56, '#FF6680', 'Nhiều lệnh → 1 khối mới', 28)}${star(560, 50, 14, '#FFD60A')}${star(540, 240, 12, '#8338EC')}`),
  t2: () => svg(`${hatM(60, 30, 300, 'define nhảy')}${blk(60, 112, 300, '#4C97FF', '#3373CC', 'change y by 50')}${blk(60, 166, 300, '#FFAB19', '#CF8B17', 'wait 0.3 seconds')}${blk(60, 220, 300, '#4C97FF', '#3373CC', 'change y by −50')}
    ${pillS(390, 60, 180, 46, '#FF006E', 'Đầu mũ', 24)}${pillS(390, 170, 180, 46, '#8338EC', 'Nội dung', 24)}
    <rect x="60" y="320" width="160" height="56" rx="8" fill="#FF6680" stroke="#FF4D6A" stroke-width="4"/>${txt(140, 357, 'nhảy', 28, '#fff')}${pillS(240, 324, 300, 48, '#2DA44E', '← gọi khối để dùng', 22)}`),
  t3: () => svg(`<rect x="40" y="60" width="520" height="90" rx="12" fill="#FF6680" stroke="#FF4D6A" stroke-width="5"/>${txt(70, 118, 'vẽ hình vuông cạnh', 30, '#fff', 'start')}
    <rect x="410" y="78" width="120" height="54" rx="27" fill="#fff"/>${txt(470, 116, '100', 30, '#575E75')}
    ${arr(470, 160, 470, 210, '#FF006E', 8)}<rect x="370" y="220" width="160" height="160" fill="none" stroke="#FF6680" stroke-width="10"/>${txt(450, 310, '100', 30, '#FF006E')}
    <rect x="120" y="260" width="90" height="90" fill="none" stroke="#FF6680" stroke-width="8"/>${txt(165, 312, '50', 24, '#FF006E')}${pillS(60, 196, 260, 44, '#8338EC', 'tham số = cạnh', 22)}`),
  t4: () => svg(`${ball(120, 130, 70, '#2DA44E', '✓', 70)}${ball(300, 130, 70, '#1982C4', '♻', 64)}${ball(480, 130, 70, '#FF7F11', '✎', 64)}
    ${pillS(40, 230, 160, 46, '#2DA44E', 'Gọn gàng', 22)}${pillS(220, 230, 160, 46, '#1982C4', 'Dùng lại', 22)}${pillS(400, 230, 160, 46, '#FF7F11', 'Dễ sửa', 22)}
    ${pillS(110, 320, 380, 54, '#FF6680', 'Sửa 1 nơi – đổi mọi nơi', 26)}`),
  t5: () => svg(`${stg(40, 40, 520, 340, false)}<rect x="44" y="300" width="512" height="76" rx="14" fill="#C9F2C7"/>
    ${spr(160, 260, -20, '#FF7F11', .9, .3)}${spr(300, 150, 0, '#FF7F11', 1)}${spr(440, 260, 20, '#FF7F11', .9, .3)}
    <path d="M170 230 Q300 60 430 230" fill="none" stroke="#8338EC" stroke-width="6" stroke-dasharray="4 12" stroke-linecap="round"/>${pillS(200, 320, 200, 46, '#FF6680', 'nhảy', 28)}`),
};

const TOPICS = [
  { id: 't1', c: ['#FF7F11', '#FF006E'], dk: '#C2255C', title: 'Khối của tôi là gì?',
    tip: 'Mình được tự “phát minh” ra lệnh mới cho Scratch đó!',
    html: `<div class="blocks">${B('Make a Block', 'my')}${B('nhảy', 'my')}</div><ul>
      <li>Nhóm <span class="k">My Blocks</span> (Khối của tôi) màu <b style="color:#FF4D6A">hồng</b>.</li>
      <li>Em <span class="k">tự tạo lệnh mới</span>, gom nhiều lệnh thành 1 khối.</li>
      <li>Bấm <b>Make a Block</b>, gõ <b>tên khối</b> rồi bấm <b>OK</b>.</li></ul>`,
    quiz: [
      { q: 'Nhóm My Blocks dùng để:', o: ['Đổi màu nhân vật', 'Tự tạo khối lệnh mới', 'Phát âm thanh', 'Thêm phông nền'], a: 1, why: 'My Blocks cho phép tự tạo lệnh mới của riêng mình.' },
      { q: 'Để tạo khối mới, em bấm nút:', o: ['Make a Variable', 'Make a List', 'Make a Block', 'Add Extension'], a: 2, why: 'Make a Block nằm trong nhóm My Blocks.' } ] },
  { id: 't2', c: ['#3A8DFF', '#00C2D1'], dk: '#1864AB', title: 'Định nghĩa: define',
    tip: 'define là “công thức”, còn khối hồng nhỏ là lúc mình “nấu” theo công thức!',
    html: `<div class="prog">${STK(B('define nhảy', 'hat my'), B(`change y by ${N(50)}`), B(`wait ${N(0.3)} seconds`, 'ct'), B(`change y by ${N(-50)}`))}
      <ul class="side"><li>Khối mũ <b>define</b> tự hiện ra.</li><li>Ghép lệnh <span class="k">bên dưới</span> để định nghĩa.</li></ul></div><ul>
      <li>Kéo khối <b>nhảy</b> vào kịch bản để <span class="k">gọi</span> (chạy) nó.</li></ul>`,
    quiz: [
      { q: 'Các lệnh bên dưới khối define (nhảy) là:', o: ['Nội dung việc khối nhảy sẽ làm', 'Lệnh chạy khi bấm cờ xanh', 'Lệnh bị bỏ qua', 'Âm thanh của khối'], a: 0, why: 'define định nghĩa khối nhảy sẽ làm những gì.' },
      { q: 'Muốn nhân vật nhảy 3 lần, em dùng:', o: ['3 khối define', 'repeat (3) { nhảy }', 'define nhảy 3', 'Make a Block 3 lần'], a: 1, why: 'Gọi khối nhảy trong repeat 3 là xong.' } ] },
  { id: 't3', c: ['#7AD86F', '#14A0A0'], dk: '#087F5B', title: 'Tham số (input)',
    tip: 'Tham số là “ô trống” để mỗi lần dùng mình điền một số khác!',
    html: `<div class="blocks">${B(`vẽ hình vuông cạnh ${N(100)}`, 'my')}${B(`define vẽ hình vuông cạnh ${RP('cạnh', 'my')}`, 'hat my')}</div><ul>
      <li>Khi tạo khối, bấm <b>Add an input</b> để thêm <span class="k">tham số</span>.</li>
      <li>Kéo khối tròn <code>cạnh</code> vào lệnh bên dưới define.</li>
      <li>Gọi với số khác nhau → kết quả khác nhau.</li></ul>`,
    quiz: [
      { q: 'Gọi vẽ hình vuông cạnh (50) thì hình vuông có cạnh dài:', o: ['100', '4', '200', '50'], a: 3, why: 'Số điền vào ô tham số chính là độ dài cạnh.' },
      { q: 'Để khối của em có ô điền số, khi tạo khối em bấm:', o: ['Add a label', 'Run without screen refresh', 'Add an input', 'Cancel'], a: 2, why: 'Add an input (number or text) tạo ô tham số.' } ] },
  { id: 't4', c: ['#4F7CFF', '#B06BFF'], dk: '#5F3DC4', title: 'Vì sao nên dùng?',
    tip: 'Chương trình gọn như phòng ngăn nắp – tìm gì cũng thấy ngay!',
    html: `<ul>
      <li><span class="k">Gọn gàng</span>: chương trình ngắn, dễ đọc.</li>
      <li><span class="k">Dùng lại</span>: tạo 1 lần, gọi nhiều lần.</li>
      <li><span class="k">Dễ sửa</span>: sửa trong define là mọi nơi gọi khối đều đổi theo.</li>
      <li>Khối của tôi chỉ dùng cho <b>nhân vật đã tạo</b> ra nó.</li></ul>`,
    quiz: [
      { q: 'Khối nhảy được gọi ở 5 chỗ. Muốn nhảy cao hơn, em sửa ở đâu?', o: ['Sửa cả 5 chỗ', 'Chỉ sửa trong define nhảy', 'Tạo khối mới', 'Không sửa được'], a: 1, why: 'Sửa định nghĩa một lần, mọi nơi gọi đều thay đổi.' },
      { q: 'Điều nào KHÔNG phải lợi ích của Khối của tôi?', o: ['Chương trình gọn hơn', 'Dùng lại nhiều lần', 'Làm nhân vật to hơn', 'Dễ sửa lỗi'], a: 2, why: 'Kích thước nhân vật là việc của nhóm Looks.' } ] },
  { id: 't5', c: ['#22C493', '#1E9BD7'], dk: '#0B7285', title: 'Ví dụ: khối nhảy',
    tip: 'Bấm phím cách là nhân vật bật lên – như trò chơi thật luôn!',
    html: `<div class="prog">${STK(B(`when ${D('space')} key pressed`, 'hat ev'), B('nhảy', 'my'), B('start sound Pop', 'sn'))}${STK(B('define nhảy', 'hat my'), CB(`repeat ${N(10)}`, 'ct', B(`change y by ${N(10)}`)), CB(`repeat ${N(10)}`, 'ct', B(`change y by ${N(-10)}`)))}</div>`,
    quiz: [
      { q: 'Trong ví dụ, khi bấm phím space nhân vật sẽ:', o: ['Đi sang phải', 'Biến mất', 'Đổi trang phục', 'Bật lên rồi rơi xuống'], a: 3, why: 'Khối nhảy cho y tăng 100 rồi giảm 100.' },
      { q: 'Sau một lần nhảy, toạ độ y của nhân vật so với lúc đầu:', o: ['Bằng lúc đầu', 'Cao hơn 100', 'Thấp hơn 100', 'Bằng 0'], a: 0, why: 'Lên 10 × 10 = 100 rồi xuống 100, nên y như cũ.' } ] },
];

const KEY = ['<b>Make a Block</b><br>tự tạo lệnh mới', '<b>define</b>: nội dung<br>khối hồng: gọi chạy', '<b>Add an input</b><br>= tham số (ô trống)',
  'Gọn • Dùng lại<br>• Dễ sửa', '<b>define nhảy</b><br>+ phím space'];
