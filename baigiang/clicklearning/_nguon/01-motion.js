/* ===== NHÁNH 1: MOTION – CHUYỂN ĐỘNG ===== */
const META = { key: 'motion', num: 1, title: 'Nhóm lệnh Motion', big: 'NHÓM LỆNH<br>MOTION',
  st2: 'Chuyển động — 5 nội dung • 10 câu đố • nhận giấy chứng nhận',
  hello: 'Cùng khám phá nhóm lệnh Chuyển động (màu xanh dương) nhé!',
  cert: 'NHÓM LỆNH MOTION – CHUYỂN ĐỘNG', file: 'Motion', pass: 8 };

const ILL_T = {
  t1: () => svg(`${stg(60, 40, 480, 330)}
    ${txt(548, 214, 'x', 28, '#1982C4', 'start')}${txt(312, 36, 'y', 28, '#1982C4', 'start')}
    ${txt(518, 232, '240', 20, '#1982C4')}${txt(90, 232, '−240', 20, '#1982C4')}${txt(330, 68, '180', 20, '#1982C4', 'start')}${txt(330, 360, '−180', 20, '#1982C4', 'start')}
    ${spr(300, 205, 0, '#FF7F11', .75)}${pillS(232, 248, 136, 44, '#FF006E', '(0, 0)', 24)}
    <circle cx="540" cy="40" r="12" fill="#FFD60A" stroke="${O}" stroke-width="4"/>${pillS(392, 56, 140, 40, '#8338EC', '(240, 180)', 20)}
    <circle cx="60" cy="370" r="12" fill="#FFD60A" stroke="${O}" stroke-width="4"/>${pillS(72, 318, 160, 40, '#2DA44E', '(−240, −180)', 20)}
    ${star(28, 70, 14, '#FF006E')}${star(574, 390, 12, '#8338EC')}`),
  t2: () => svg(`<circle cx="300" cy="200" r="118" fill="#F1F8FF" stroke="#CFE0F5" stroke-width="4" stroke-dasharray="10 8"/>
    ${arc(300, 200, 140, -40, 50, 1, '#FF7F11')}${arc(300, 200, 140, 220, 130, 0, '#FF006E')}
    ${spr(300, 200, 0, '#4C97FF', 1.3)}${arr(350, 200, 430, 200, '#4C97FF', 8)}
    ${pillS(440, 300, 140, 54, '#FF7F11', '↻ 15°', 30)}${pillS(20, 300, 140, 54, '#FF006E', '↺ 15°', 30)}
    ${pillS(380, 130, 180, 46, '#4C97FF', 'move 10', 24)}${pillS(200, 356, 200, 46, '#8338EC', '1 vòng = 360°', 22)}
    ${star(60, 60, 16, '#FFD60A')}${star(540, 50, 14, '#2EC4B6')}`),
  t3: () => svg(`<circle cx="300" cy="210" r="150" fill="#F1F8FF" stroke="${O}" stroke-width="5"/>
    ${arr(300, 160, 300, 82, '#1982C4')}${arr(350, 210, 430, 210, '#FF006E')}${arr(300, 260, 300, 338, '#2DA44E')}${arr(250, 210, 170, 210, '#FF7F11')}
    ${spr(300, 210, 0, '#4C97FF', 1)}
    ${pillS(254, 14, 92, 48, '#1982C4', '0', 28)}${pillS(462, 186, 92, 48, '#FF006E', '90', 28)}${pillS(244, 360, 112, 48, '#2DA44E', '180', 28)}${pillS(38, 186, 104, 48, '#FF7F11', '−90', 28)}
    ${star(70, 60, 16, '#FFD60A')}${star(530, 370, 14, '#8338EC')}`),
  t4: () => svg(`${stg(40, 30, 520, 360, false)}
    <line x1="110" y1="320" x2="470" y2="110" stroke="#9BB7E0" stroke-width="5" stroke-dasharray="10 9"/>
    ${spr(110, 320, -30, '#FF7F11', .8, .2)}${spr(230, 250, -30, '#FF7F11', .8, .4)}${spr(350, 180, -30, '#FF7F11', .8, .65)}${spr(470, 110, -30, '#FF7F11', .8)}
    <circle cx="130" cy="110" r="52" fill="#fff" stroke="${O}" stroke-width="6"/><line x1="130" y1="110" x2="130" y2="76" stroke="${O}" stroke-width="6" stroke-linecap="round"/><line x1="130" y1="110" x2="156" y2="122" stroke="#FF006E" stroke-width="6" stroke-linecap="round"/><circle cx="130" cy="110" r="6" fill="${O}"/>
    ${pillS(70, 176, 120, 46, '#FF006E', '1 giây', 24)}${pillS(300, 320, 240, 48, '#4C97FF', 'glide: trượt từ từ', 22)}
    ${star(540, 60, 14, '#FFD60A')}`),
  t5: () => svg(`${stg(40, 30, 520, 360, false)}
    <rect x="534" y="40" width="20" height="340" rx="8" fill="#FF006E" opacity=".8"/>
    <path d="M90 300 L520 150 L200 80" fill="none" stroke="#8338EC" stroke-width="7" stroke-dasharray="3 14" stroke-linecap="round" stroke-linejoin="round"/>
    ${spr(90, 300, -19, '#FF7F11', .8, .35)}${spr(200, 82, 192, '#FF7F11', .8)}
    ${star(522, 150, 34, '#FFD60A')}${pillS(380, 200, 140, 46, '#FF006E', 'BẬT!', 26)}
    ${pillS(70, 330, 230, 44, '#4C97FF', 'left-right', 24)}`),
};

const TOPICS = [
  { id: 't1', c: ['#FFA62B', '#FF5DA2'], dk: '#D9480F', title: 'Sân khấu và toạ độ',
    tip: 'Nhớ nha: x là ngang (trái – phải), y là dọc (trên – dưới)!',
    html: `<ul>
      <li>Nhóm <span class="k">Motion</span> (Chuyển động) có màu <b style="color:#4C97FF">xanh dương</b>.</li>
      <li><span class="k">Sân khấu</span> rộng 480, cao 360 bước; tâm là <code>(0, 0)</code>.</li>
      <li><b>x</b>: từ <code>−240</code> (trái) đến <code>240</code> (phải).</li>
      <li><b>y</b>: từ <code>−180</code> (dưới) đến <code>180</code> (trên).</li>
      <li>Rê chuột trên sân khấu để xem toạ độ <b>x, y</b>.</li></ul>`,
    quiz: [
      { q: 'Tâm sân khấu Scratch có toạ độ là:', o: ['(240, 180)', '(0, 0)', '(−240, 0)', '(0, 180)'], a: 1, why: 'Tâm sân khấu là gốc toạ độ: x = 0, y = 0.' },
      { q: 'Nhân vật ở góc TRÊN, bên PHẢI sân khấu có toạ độ gần với:', o: ['(−240, 180)', '(240, −180)', '(240, 180)', '(−240, −180)'], a: 2, why: 'Bên phải → x dương (240); phía trên → y dương (180).' } ] },
  { id: 't2', c: ['#3A8DFF', '#00C2D1'], dk: '#1864AB', title: 'Đi và xoay: move, turn',
    tip: 'Nhân vật nhìn hướng nào thì move đi hướng đó!',
    html: `<div class="blocks">${B(`move ${N(10)} steps`)}${B(`turn <b class="ic">↻</b> ${N(15)} degrees`)}${B(`turn <b class="ic">↺</b> ${N(15)} degrees`)}</div><ul>
      <li><b>move</b>: đi theo <span class="k">hướng đang nhìn</span>; số âm thì đi lùi.</li>
      <li><b>↻</b> xoay <span class="k">cùng chiều</span>, <b>↺</b> xoay <span class="k">ngược chiều</span> kim đồng hồ.</li>
      <li>Xoay 1 vòng = <code>360</code> độ.</li></ul>`,
    quiz: [
      { q: 'Nhân vật nhìn sang phải, đang ở x = 0. Sau lệnh move (50) steps, x bằng:', o: ['−50', '0', '90', '50'], a: 3, why: 'Đi sang phải 50 bước nên x tăng từ 0 lên 50.' },
      { q: 'Thực hiện 4 lần lệnh turn ↻ (90) degrees, nhân vật sẽ:', o: ['Quay lại hướng ban đầu', 'Xoay nửa vòng', 'Xoay 90 độ', 'Đi được 360 bước'], a: 0, why: '4 × 90 = 360 độ = đúng 1 vòng, nên về hướng cũ.' } ] },
  { id: 't3', c: ['#7AD86F', '#14A0A0'], dk: '#087F5B', title: 'Chọn hướng: point',
    tip: 'Nhớ 4 số: lên 0, phải 90, xuống 180, trái −90!',
    html: `<div class="blocks">${B(`point in direction ${N(90)}`)}${B(`point towards ${D('mouse-pointer')}`)}</div>
      <div class="chips"><span class="chip" style="background:#1982C4">↑ Lên: 0</span><span class="chip" style="background:#FF006E">→ Phải: 90</span><span class="chip" style="background:#2DA44E">↓ Xuống: 180</span><span class="chip" style="background:#FF7F11">← Trái: −90</span></div><ul>
      <li><b>point in direction</b>: quay theo số đo độ.</li>
      <li><b>point towards</b>: quay mặt về chuột hoặc nhân vật khác.</li></ul>`,
    quiz: [
      { q: 'Để nhân vật quay sang TRÁI, em dùng point in direction với số:', o: ['0', '−90', '90', '180'], a: 1, why: 'Hướng trái trong Scratch là −90 độ.' },
      { q: 'Lệnh point towards (mouse-pointer) làm nhân vật:', o: ['Đi đến con trỏ chuột', 'Biến mất', 'Quay mặt về con trỏ chuột', 'Đổi màu'], a: 2, why: 'point towards chỉ quay hướng, không di chuyển nhân vật.' } ] },
  { id: 't4', c: ['#4F7CFF', '#B06BFF'], dk: '#5F3DC4', title: 'Đến vị trí: go to, glide',
    tip: 'go to tới ngay, glide trượt từ từ, change là cộng thêm!',
    html: `<div class="blocks">${B(`go to x: ${N(0)} y: ${N(0)}`)}${B(`glide ${N(1)} secs to x: ${N(0)} y: ${N(0)}`)}${B(`set x to ${N(0)}`)}${B(`change x by ${N(10)}`)}</div><ul>
      <li><b>go to</b>: đến <span class="k">ngay lập tức</span>; <b>glide</b>: <span class="k">trượt từ từ</span> trong số giây.</li>
      <li><b>set x/y to</b>: đặt lại 1 toạ độ.</li>
      <li><b>change x/y by</b>: cộng thêm (số âm: trái/xuống).</li></ul>`,
    quiz: [
      { q: 'Nhân vật đang ở (50, 30). Sau lệnh set x to (0), nhân vật ở:', o: ['(0, 0)', '(50, 0)', '(0, 30)', '(50, 30)'], a: 2, why: 'set x to chỉ đổi x thành 0, y vẫn giữ là 30.' },
      { q: 'Lệnh nào giúp ta THẤY nhân vật trượt dần đến vị trí mới?', o: ['glide (2) secs to x: y:', 'go to x: y:', 'set x to', 'point in direction'], a: 0, why: 'glide di chuyển từ từ trong một khoảng thời gian.' } ] },
  { id: 't5', c: ['#22C493', '#1E9BD7'], dk: '#0B7285', title: 'Chạm cạnh và bật lại',
    tip: 'Chọn left-right thì nhân vật không bị lộn ngược đầu nữa!',
    html: `<div class="prog">${STK(B(`when ${FLAG} clicked`, 'hat ev'), B(`set rotation style ${D('left-right')}`), FOREVER(B(`move ${N(10)} steps`), B('if on edge, bounce')))}
      <ul class="side"><li><b>if on edge, bounce</b>: chạm cạnh thì <span class="k">bật lại</span>.</li><li><b>left-right</b>: chỉ quay trái – phải.</li><li>Nhân vật đi qua lại mãi.</li></ul></div>`,
    quiz: [
      { q: 'Trong chương trình mẫu, nếu bỏ lệnh if on edge, bounce thì nhân vật:', o: ['Bật lại như cũ', 'Đứng yên', 'Xoay tròn', 'Đi tới mép rồi kẹt ở đó'], a: 3, why: 'Không có lệnh bật lại, nhân vật đi thẳng và dừng ở mép sân khấu.' },
      { q: 'Nhân vật bị lộn ngược đầu khi bật lại. Em chọn kiểu xoay:', o: ['all around', 'left-right', 'mouse-pointer', 'random position'], a: 1, why: 'left-right chỉ cho quay trái – phải nên không bị lộn ngược.' } ] },
];

const KEY = ['Tâm <b>(0, 0)</b><br>x: −240 → 240<br>y: −180 → 180', '<b>move</b>: đi theo hướng<br><b>↻</b> cùng / <b>↺</b> ngược chiều', 'Lên <b>0</b> • Phải <b>90</b><br>Xuống <b>180</b> • Trái <b>−90</b>',
  '<b>go to</b>: tới ngay<br><b>glide</b>: trượt từ từ<br><b>change</b>: cộng thêm', '<b>if on edge, bounce</b><br>kiểu xoay <b>left-right</b>'];
