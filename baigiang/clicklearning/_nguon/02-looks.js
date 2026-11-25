/* ===== NHÁNH 2: LOOKS – HIỂN THỊ ===== */
const META = { key: 'looks', num: 2, title: 'Nhóm lệnh Looks', big: 'NHÓM LỆNH<br>LOOKS',
  st2: 'Hiển thị (Ngoại hình) — 5 nội dung • 10 câu đố • nhận giấy chứng nhận',
  hello: 'Cùng khám phá nhóm lệnh Hiển thị (màu tím) nhé!',
  cert: 'NHÓM LỆNH LOOKS – HIỂN THỊ', file: 'Looks', pass: 8 };

const bubble = (x, y, w, h, t, fs, think) => think
  ? `<g><ellipse cx="${x + w/2}" cy="${y + h/2}" rx="${w/2}" ry="${h/2}" fill="#fff" stroke="${O}" stroke-width="5"/><circle cx="${x + 30}" cy="${y + h + 22}" r="13" fill="#fff" stroke="${O}" stroke-width="4"/><circle cx="${x + 10}" cy="${y + h + 48}" r="8" fill="#fff" stroke="${O}" stroke-width="4"/>${txt(x + w/2, y + h/2 + fs*.36, t, fs)}</g>`
  : `<g><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="26" fill="#fff" stroke="${O}" stroke-width="5"/><path d="M${x + 40} ${y + h - 3} L${x + 26} ${y + h + 36} L${x + 74} ${y + h - 3}Z" fill="#fff" stroke="${O}" stroke-width="5" stroke-linejoin="round"/><rect x="${x + 36}" y="${y + h - 8}" width="44" height="10" fill="#fff"/>${txt(x + w/2, y + h/2 + fs*.36, t, fs)}</g>`;
const cat = (x, y, s = 1, c = '#FF7F11', leg = 0, op = 1) => `<g transform="translate(${x} ${y}) scale(${s})" opacity="${op}">
  <rect x="-34" y="10" width="68" height="62" rx="26" fill="${c}" stroke="${O}" stroke-width="5"/>
  <rect x="${-26 - leg}" y="62" width="18" height="30" rx="8" fill="${c}" stroke="${O}" stroke-width="5" transform="rotate(${leg} -17 62)"/><rect x="${8 + leg}" y="62" width="18" height="30" rx="8" fill="${c}" stroke="${O}" stroke-width="5" transform="rotate(${-leg} 17 62)"/>
  <path d="M-36 -30 L-30 -66 L-8 -44Z M36 -30 L30 -66 L8 -44Z" fill="${c}" stroke="${O}" stroke-width="5" stroke-linejoin="round"/>
  <circle r="42" fill="${c}" stroke="${O}" stroke-width="5"/><circle cx="-15" cy="-6" r="7" fill="${O}"/><circle cx="15" cy="-6" r="7" fill="${O}"/>
  <path d="M-10 14 Q0 22 10 14" stroke="${O}" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="0" cy="6" r="5" fill="#FF006E"/></g>`;

const ILL_T = {
  t1: () => svg(`${cat(140, 300, 1.25)}${bubble(220, 50, 230, 90, 'Xin chào!', 34)}${bubble(330, 190, 230, 100, 'Hmm…', 34, true)}
    ${pillS(206, 150, 120, 40, '#9966FF', 'say', 22)}${pillS(440, 330, 130, 40, '#9966FF', 'think', 22)}
    ${star(40, 50, 16, '#FFD60A')}${star(560, 40, 12, '#FF006E')}`),
  t2: () => svg(`<rect x="40" y="70" width="220" height="230" rx="26" fill="#F3EDFF" stroke="${O}" stroke-width="5"/><rect x="340" y="70" width="220" height="230" rx="26" fill="#F3EDFF" stroke="${O}" stroke-width="5"/>
    ${cat(150, 170, 1, '#FF7F11', 0)}${cat(450, 170, 1, '#FF7F11', 20)}
    ${ball(70, 95, 22, '#9966FF', '1', 24)}${ball(370, 95, 22, '#9966FF', '2', 24)}
    ${arr(270, 185, 330, 185, '#FF006E', 9)}
    ${pillS(150, 330, 300, 50, '#9966FF', 'next costume', 28)}${star(560, 380, 12, '#FFD60A')}${star(30, 30, 14, '#2EC4B6')}`),
  t3: () => svg(`<rect x="30" y="60" width="250" height="200" rx="20" fill="#8AD3FF" stroke="${O}" stroke-width="5"/><rect x="33" y="200" width="244" height="57" fill="#8AC926"/><circle cx="230" cy="105" r="24" fill="#FFD60A"/>
    <rect x="320" y="60" width="250" height="200" rx="20" fill="#2B2D6E" stroke="${O}" stroke-width="5"/><rect x="323" y="200" width="244" height="57" fill="#3A5A40"/><circle cx="520" cy="105" r="22" fill="#FFF3BF"/>${star(380, 100, 10, '#fff')}${star(440, 130, 8, '#fff')}
    ${arr(284, 160, 316, 160, '#FF006E', 7)}
    ${pillS(30, 290, 250, 46, '#9966FF', 'Ban ngày', 24)}${pillS(320, 290, 250, 46, '#5A189A', 'Ban đêm', 24)}
    ${pillS(120, 356, 360, 48, '#FF006E', 'next backdrop', 26)}`),
  t4: () => svg(`${cat(100, 250, .6, '#FF7F11')}${cat(260, 230, 1, '#FF7F11')}${cat(460, 200, 1.4, '#FF7F11')}
    ${pillS(50, 340, 110, 42, '#9966FF', '50%', 24)}${pillS(205, 340, 110, 42, '#9966FF', '100%', 24)}${pillS(400, 340, 120, 42, '#9966FF', '150%', 24)}
    ${pillS(150, 30, 300, 46, '#FF006E', 'set size to … %', 24)}${star(560, 40, 14, '#FFD60A')}${star(40, 60, 12, '#2EC4B6')}`),
  t5: () => svg(`${cat(170, 230, 1.15, '#2EC4B6')}${cat(300, 250, 1.15, '#FF7F11')}${cat(450, 230, 1.15, '#8338EC', 0, .25)}
    <rect x="390" y="150" width="120" height="170" rx="20" fill="none" stroke="#8338EC" stroke-width="5" stroke-dasharray="10 9"/>
    ${pillS(390, 340, 120, 44, '#8338EC', 'hide', 24)}${pillS(170, 30, 300, 46, '#FF006E', 'go to front layer', 24)}
    ${arr(300, 84, 300, 150, '#FF006E', 7)}${star(40, 50, 14, '#FFD60A')}`),
};

const TOPICS = [
  { id: 't1', c: ['#B65CFF', '#5A189A'], dk: '#5A189A', title: 'Nói và nghĩ: say, think',
    tip: 'say là bong bóng nói, think là đám mây suy nghĩ!',
    html: `<div class="blocks">${B(`say ${T('Hello!')} for ${N(2)} seconds`, 'lk')}${B(`say ${T('Hello!')}`, 'lk')}${B(`think ${T('Hmm...')}`, 'lk')}</div><ul>
      <li>Nhóm <span class="k">Looks</span> (Hiển thị) có màu <b style="color:#9966FF">tím</b>.</li>
      <li><b>say … for … seconds</b>: nói trong số giây rồi <span class="k">tự tắt</span>.</li>
      <li><b>say</b> / <b>think</b>: bong bóng hiện mãi đến khi có lệnh khác.</li></ul>`,
    quiz: [
      { q: 'Lệnh say (Hello!) for (2) seconds làm nhân vật:', o: ['Nói Hello! mãi mãi', 'Nói Hello! trong 2 giây rồi tắt', 'Phát âm thanh Hello', 'Nghĩ Hello! 2 lần'], a: 1, why: 'for 2 seconds: bong bóng nói hiện 2 giây rồi biến mất.' },
      { q: 'Muốn nhân vật hiện bong bóng hình ĐÁM MÂY suy nghĩ, em dùng:', o: ['say', 'switch costume', 'think', 'show'], a: 2, why: 'think tạo bong bóng suy nghĩ hình đám mây.' } ] },
  { id: 't2', c: ['#FF7F11', '#FF006E'], dk: '#C2255C', title: 'Trang phục: costume',
    tip: 'Đổi trang phục liên tục là nhân vật “cử động” như phim hoạt hình!',
    html: `<div class="blocks">${B(`switch costume to ${D('costume2')}`, 'lk')}${B('next costume', 'lk')}${RP('costume number', 'lk')}</div><ul>
      <li><span class="k">Trang phục</span> là các hình dáng khác nhau của nhân vật (thẻ Costumes).</li>
      <li><b>next costume</b>: chuyển sang trang phục kế tiếp; hết thì <b>quay về đầu</b>.</li>
      <li>Lặp <b>next costume</b> + <b>wait</b> → tạo <span class="k">hoạt hình</span>.</li></ul>`,
    quiz: [
      { q: 'Nhân vật có 2 trang phục, đang ở trang phục 2. Chạy next costume thì:', o: ['Báo lỗi', 'Đứng yên ở trang phục 2', 'Biến mất', 'Quay về trang phục 1'], a: 3, why: 'Hết danh sách thì next costume quay lại trang phục đầu tiên.' },
      { q: 'Để nhân vật trông như đang chạy bộ, em lặp lại:', o: ['next costume và wait (0.2)', 'hide và show', 'say và think', 'change size by (10)'], a: 0, why: 'Đổi trang phục liên tục, có nghỉ ngắn, tạo chuyển động hoạt hình.' } ] },
  { id: 't3', c: ['#3A8DFF', '#00C2D1'], dk: '#1864AB', title: 'Phông nền: backdrop',
    tip: 'Phông nền là “bức tranh phía sau” – thuộc về Sân khấu nha!',
    html: `<div class="blocks">${B(`switch backdrop to ${D('Night')}`, 'lk')}${B('next backdrop', 'lk')}</div><ul>
      <li><span class="k">Phông nền</span> là hình nền của <b>Sân khấu</b> (Stage).</li>
      <li>Chọn phông nền ở góc phải dưới, mục <b>Stage</b>.</li>
      <li>Đổi phông nền để chuyển <b>cảnh</b>: ngày → đêm, màn 1 → màn 2.</li></ul>`,
    quiz: [
      { q: 'Lệnh nào đổi hình nền sân khấu sang cảnh “Night”?', o: ['switch costume to (Night)', 'switch backdrop to (Night)', 'think (Night)', 'go to (Night)'], a: 1, why: 'backdrop là phông nền; costume là trang phục nhân vật.' },
      { q: 'Phông nền (backdrop) thuộc về:', o: ['Mỗi nhân vật', 'Bảng lệnh', 'Sân khấu (Stage)', 'Thanh công cụ'], a: 2, why: 'Phông nền là của Sân khấu, dùng chung cho mọi nhân vật.' } ] },
  { id: 't4', c: ['#7AD86F', '#14A0A0'], dk: '#087F5B', title: 'Kích thước, hiệu ứng',
    tip: '100% là cỡ gốc. 200% là to gấp đôi, 50% là nhỏ một nửa!',
    html: `<div class="blocks">${B(`set size to ${N(100)} %`, 'lk')}${B(`change size by ${N(10)}`, 'lk')}${B(`change ${D('color')} effect by ${N(25)}`, 'lk')}${B('clear graphic effects', 'lk')}</div><ul>
      <li><b>set size</b>: đặt cỡ theo <code>%</code>; <b>change size</b>: tăng/giảm.</li>
      <li><b>effect</b>: đổi màu, làm mờ (ghost), xoáy…</li>
      <li><b>clear graphic effects</b>: xoá hết hiệu ứng.</li></ul>`,
    quiz: [
      { q: 'Lệnh set size to (200) % làm nhân vật:', o: ['Nhỏ đi một nửa', 'Giữ nguyên', 'Đi 200 bước', 'To gấp đôi cỡ gốc'], a: 3, why: '100% là cỡ gốc, 200% là gấp đôi.' },
      { q: 'Nhân vật bị đổi màu lung tung. Lệnh nào đưa về màu gốc?', o: ['clear graphic effects', 'hide', 'next costume', 'set size to (100) %'], a: 0, why: 'clear graphic effects xoá mọi hiệu ứng đồ hoạ.' } ] },
  { id: 't5', c: ['#FFB14E', '#FF5E78'], dk: '#C2255C', title: 'Ẩn, hiện và lớp',
    tip: 'Nhân vật bị ẩn vẫn còn đó, chỉ là mình không nhìn thấy thôi!',
    html: `<div class="blocks">${B('show', 'lk')}${B('hide', 'lk')}${B(`go to ${D('front')} layer`, 'lk')}${B(`go ${D('forward')} ${N(1)} layers`, 'lk')}</div><ul>
      <li><b>hide</b>: <span class="k">ẩn</span> nhân vật; <b>show</b>: hiện lại.</li>
      <li><b>front layer</b>: đứng <b>trước</b> mọi nhân vật khác.</li>
      <li><b>back layer</b>: lùi ra <b>phía sau</b> cùng.</li></ul>`,
    quiz: [
      { q: 'Muốn nhân vật che lên TRƯỚC tất cả nhân vật khác, em dùng:', o: ['hide', 'go to (back) layer', 'go to (front) layer', 'show'], a: 2, why: 'front layer = lớp trên cùng, đứng trước mọi nhân vật.' },
      { q: 'Sau lệnh hide, muốn nhân vật xuất hiện lại em dùng:', o: ['next costume', 'show', 'think', 'clear graphic effects'], a: 1, why: 'show làm nhân vật hiện ra trở lại.' } ] },
];

const KEY = ['<b>say</b>: nói<br><b>think</b>: nghĩ<br>for … seconds: tự tắt', '<b>next costume</b><br>+ <b>wait</b> = hoạt hình', '<b>backdrop</b>: phông nền<br>của Sân khấu',
  '<b>size</b>: 100% = gốc<br><b>clear graphic effects</b>', '<b>show</b> / <b>hide</b><br><b>front</b> / <b>back</b> layer'];
