/* ===== BÀI 7: LOOPS – VÒNG LẶP ===== */
const META = { key: 'loops', num: 7, title: 'Nhóm lệnh Loops', big: 'NHÓM LỆNH<br>LOOPS',
  st2: 'Vòng lặp — 5 nội dung • 10 câu đố • nhận giấy chứng nhận',
  hello: 'Cùng làm việc lặp đi lặp lại thật nhanh với nhóm Loops (màu xanh lá đậm) nhé!',
  cert: 'NHÓM LỆNH LOOPS – VÒNG LẶP', file: 'Loops', pass: 8 };

const ILL_T = {
  t1: () => svg(`${pillS(30, 40, 250, 56, '#569138', 'on start', 30)}${txt(155, 140, 'Chạy 1 lần', 30)}${txt(155, 180, 'khi bắt đầu', 26, '#495057')}
    ${pillS(320, 40, 250, 56, '#569138', 'forever', 30)}${arc(445, 210, 70, -60, 230, 1, '#569138')}${txt(445, 220, '∞', 54, O)}
    ${pillS(130, 340, 340, 50, '#FF7F11', 'pause (ms) 1000 = 1 giây', 22)}${stars([40, 300], [560, 300, 12])}`),
  t2: () => svg(`${VX([...GR(5, 2), [0, 0, 0, 'gold'], [1, 0, 0, 'gold'], [2, 0, 0, 'gold'], [3, 0, 0, 'gold'], ...BOT(4, 0, 0)], 290, 190, 46)}
    ${[0, 1, 2, 3].map(i => ball(...PT(i + .5, 1.8, .5, 290, 190, 46), 17, '#569138', i + 1, 18)).join('')}
    ${pillS(20, 30, 290, 50, '#569138', 'repeat 4 times', 26)}${pillS(330, 360, 250, 46, '#D83B01', 'agent move', 24)}`),
  t3: () => svg(`${VX([...GR(6, 2), [0, 0, 0, 'red'], [1, 0, 0, 'orange'], [1, 1, 0, 'orange'], [2, 0, 0, 'yellow'], [2, 1, 0, 'yellow'], [2, 2, 0, 'yellow'], [3, 0, 0, 'lime'], [3, 1, 0, 'lime'], [3, 2, 0, 'lime'], [3, 3, 0, 'lime'], [4, 0, 0, 'blue'], [4, 1, 0, 'blue'], [4, 2, 0, 'blue'], [4, 3, 0, 'blue'], [4, 4, 0, 'blue']], 250, 240, 36)}
    ${pillS(20, 24, 330, 50, '#569138', 'for index 0 → 4', 26)}${[0, 1, 2, 3, 4].map(i => txt(...PT(i + .5, -0.3, 1.9, 250, 240, 36), i, 22, '#EA2B1F')).join('')}
    ${stars([560, 60], [560, 300, 12])}`),
  t4: () => svg(`${VX([...GR(6, 2), ...BOT(0, 0, 0), [4, 0, 0, 'stone'], [4, 1, 0, 'stone']], 260, 200, 44)}
    ${[1, 2, 3].map(i => arr(...PT(i - .1, .5, .5, 260, 200, 44), ...PT(i + .6, .5, .5, 260, 200, 44), '#569138', 6)).join('')}
    ${pillS(20, 26, 560, 50, '#569138', 'while KHÔNG có khối phía trước', 22)}${pillS(310, 352, 270, 46, '#E5383B', 'gặp tường → dừng', 22)}`),
  t5: () => svg(`${[HEN(0, 0, 0), PIG(0, 0, 0), [[.1, 0, .2, 'hair', .8, .6, .6], [.78, .2, .3, 'white', .3, .4, .4]], [[.1, 0, .2, 'snow', .8, .6, .6], [.78, .2, .3, 'gray', .3, .4, .4]]].map((a, i) => `<rect x="${40 + i*134}" y="110" width="116" height="110" rx="20" fill="#FFF3BF" stroke="${O}" stroke-width="5"/>${VX(a, 86 + i*134, 160, 46, { sw: 2 })}`).join('')}
    ${pillS(40, 30, 520, 52, '#EA2B1F', 'list = [gà, heo, bò, cừu]', 24)}${pillS(60, 260, 480, 50, '#569138', 'for element value of list', 22)}
    ${pillS(140, 340, 320, 46, '#FF7F11', 'lần lượt từng con', 22)}`),
};

const TOPICS = [
  { id: 't1', c: ['#7AD86F', '#14A0A0'], dk: '#087F5B', title: 'on start, forever, pause',
    tip: 'Trong forever nhớ thêm pause để máy không bị lag nha!',
    html: `<div class="blocks">${MC('lo', 'on start', [], true)}${MC('lo', 'forever', [], true)}${M('lo', `pause (ms) ${n(1000)}`)}</div><ul>
      <li>Nhóm <span class="k">Loops</span> (Vòng lặp) có màu <b style="color:#569138">xanh lá đậm</b>.</li>
      <li><b>on start</b>: chạy <span class="k">1 lần</span> khi chương trình bắt đầu.</li>
      <li><b>forever</b>: lặp <span class="k">mãi mãi</span> • <b>pause</b>: nghỉ (1000 ms = 1 giây).</li></ul>`,
    quiz: [
      { q: 'Khối forever chạy các lệnh bên trong bao nhiêu lần?', o: ['1 lần', 'Lặp mãi mãi', '4 lần', '10 lần'], a: 1, why: 'forever lặp lại không ngừng.' },
      { q: 'pause (ms) 2000 nghĩa là nghỉ bao lâu?', o: ['2 phút', '20 giây', '2000 giây', '2 giây'], a: 3, why: '1000 ms = 1 giây, nên 2000 ms = 2 giây.' } ] },
  { id: 't2', c: ['#FFA62B', '#FF5DA2'], dk: '#D9480F', title: 'Lặp số lần: repeat',
    tip: 'Thấy mình kéo cùng một lệnh nhiều lần? Dùng repeat cho nhanh!',
    html: `<div class="blocks">${MC('lo', `repeat ${n(4)} times<br>do`, [M('ag', `agent move ${dd('forward')} by ${n(1)}`), M('ag', `agent place ${dd('down')}`)])}</div><ul>
      <li><b>repeat … times</b>: lặp lại các lệnh bên trong <span class="k">đúng số lần</span>.</li>
      <li>Ví dụ: Agent đi và đặt khối <b>4 lần</b> → con đường dài 4 khối.</li></ul>`,
    quiz: [
      { q: 'repeat 5 times chứa 2 lệnh. Có tất cả bao nhiêu lệnh được chạy?', o: ['5', '7', '10', '2'], a: 2, why: 'Mỗi lần chạy 2 lệnh, lặp 5 lần → 2 × 5 = 10.' },
      { q: 'Muốn Agent đi 8 bước bằng lệnh agent move by 1, em dùng:', o: ['repeat 8 times', 'repeat 1 times', 'forever', 'on start'], a: 0, why: 'Lặp 8 lần, mỗi lần đi 1 bước.' } ] },
  { id: 't3', c: ['#3A8DFF', '#00C2D1'], dk: '#1864AB', title: 'Lặp có đếm: for index',
    tip: 'index tăng dần mỗi vòng – dùng nó để xây cầu thang!',
    html: `<div class="blocks">${MC('lo', `for ${VR('index')} from 0 to ${n(4)}<br>do`, [M('bl', `place ${PK('gold')} at ${MR('po', `~ ${MR('va', 'index')} ~ ${MR('va', 'index')} ~ ${n(0)}`, 'sd')}`)])}</div><ul>
      <li>Biến <b style="color:#EA2B1F">index</b> nhận lần lượt <code>0, 1, 2, 3, 4</code> → <span class="k">5 vòng</span>.</li>
      <li>Dùng <b>index</b> trong toạ độ → mỗi khối lệch đi 1 ô: <b>cầu thang</b>!</li></ul>`,
    quiz: [
      { q: 'for index from 0 to 4 lặp bao nhiêu vòng?', o: ['4', '3', '6', '5'], a: 3, why: 'index = 0, 1, 2, 3, 4 → 5 vòng.' },
      { q: 'Ở vòng lặp đầu tiên, index có giá trị là:', o: ['0', '1', '4', 'Không có'], a: 0, why: 'for index from 0 → bắt đầu từ 0.' } ] },
  { id: 't4', c: ['#FF595E', '#FFB14E'], dk: '#C92A2A', title: 'Lặp khi còn đúng: while',
    tip: 'while giống "trong khi còn…": điều kiện sai là dừng ngay!',
    html: `<div class="blocks">${MC('lo', `while ${MH('lg', `not ${MH('ag', `agent detect ${dd('block')} ${dd('forward')}`)}`)}<br>do`, [M('ag', `agent move ${dd('forward')} by ${n(1)}`)])}</div><ul>
      <li><b>while</b>: lặp <span class="k">khi điều kiện còn đúng</span>, sai thì dừng.</li>
      <li>Ví dụ: Agent cứ đi <b>cho tới khi gặp tường</b>.</li>
      <li>Không biết trước số lần lặp → dùng <b>while</b>.</li></ul>`,
    quiz: [
      { q: 'Vòng lặp while dừng lại khi nào?', o: ['Sau đúng 4 lần', 'Không bao giờ dừng', 'Khi điều kiện trở thành sai', 'Khi người chơi nhảy'], a: 2, why: 'while chỉ lặp khi điều kiện còn đúng.' },
      { q: 'Khi KHÔNG biết trước phải lặp mấy lần, nên dùng:', o: ['repeat 4 times', 'while', 'on start', 'pause'], a: 1, why: 'while lặp theo điều kiện, không cần biết trước số lần.' } ] },
  { id: 't5', c: ['#4F7CFF', '#B06BFF'], dk: '#5F3DC4', title: 'Lặp qua danh sách',
    tip: 'Một danh sách con vật + for element = cả trang trại!',
    html: `<div class="blocks">${MC('lo', `for element ${VR('value')} of ${VR('list')}<br>do`, [M('mo', `spawn ${MR('va', 'value')} at ${P3('~', 2, 0, 0)}`)])}</div><ul>
      <li><b>for element … of list</b>: lấy <span class="k">lần lượt từng phần tử</span> trong danh sách.</li>
      <li><b>break</b>: thoát khỏi vòng lặp • <b>continue</b>: bỏ qua, sang vòng sau.</li></ul>`,
    quiz: [
      { q: 'Danh sách có 4 con vật. for element … of list lặp mấy vòng?', o: ['1', '3', '5', '4'], a: 3, why: 'Mỗi phần tử một vòng → 4 vòng.' },
      { q: 'Lệnh nào dùng để THOÁT ngay khỏi vòng lặp?', o: ['break', 'continue', 'pause', 'forever'], a: 0, why: 'break thoát khỏi vòng lặp.' } ] },
];

const KEY = ['<b>on start</b>: 1 lần<br><b>forever</b>: mãi mãi<br>1000 ms = 1 giây', '<b>repeat … times</b><br>lặp đúng số lần', '<b>for index</b> 0 → 4<br>= 5 vòng',
  '<b>while</b>: lặp khi<br>điều kiện còn đúng', '<b>for element</b> of list<br><b>break</b> • <b>continue</b>'];
