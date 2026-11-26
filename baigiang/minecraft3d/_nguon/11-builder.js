/* ===== BÀI 11: BUILDER – THỢ XÂY ===== */
const META = { key: 'builder', num: 11, title: 'Nhóm lệnh Builder', big: 'NHÓM LỆNH<br>BUILDER',
  st2: 'Thợ xây vô hình — 5 nội dung • 10 câu đố • nhận giấy chứng nhận',
  hello: 'Builder là cây bút vẽ 3D vô hình! Cùng xây với nhóm Builder (màu hồng tím, mục Advanced) nhé!',
  cert: 'NHÓM LỆNH BUILDER – THỢ XÂY', file: 'Builder', pass: 8 };

const pen = (x, y) => `<g transform="translate(${x} ${y}) rotate(35)"><rect x="-12" y="-70" width="24" height="56" rx="6" fill="#CB48B7" stroke="${O}" stroke-width="5"/><path d="M-12 -14 L0 10 L12 -14Z" fill="#FFE066" stroke="${O}" stroke-width="5" stroke-linejoin="round"/></g>`;
const ILL_T = {
  t1: () => svg(`${VX(GR(5, 3), 300, 190, 40)}${pen(...PT(1, .2, 1.5, 300, 190, 40))}
    ${[1, 2, 3].map(i => arr(...PT(i + .2, 0.05, 1.5, 300, 190, 40), ...PT(i + .9, 0.05, 1.5, 300, 190, 40), '#CB48B7', 6)).join('')}
    ${pillS(14, 26, 330, 48, '#CB48B7', 'builder move forward', 22)}${pillS(360, 26, 226, 48, '#CB48B7', 'builder turn', 22)}
    ${pillS(110, 360, 380, 44, '#FF7F11', 'Bút vô hình, đi đến đâu…', 20)}`),
  t2: () => svg(`${VX([...GR(6, 2), [0, 0, 0, 'lime'], [1, 0, 0, 'lime'], [2, 0, 0, 'lime'], [3, 0, 0, 'lime'], [4, 0, 0, 'lime']], 270, 200, 40)}
    ${ball(...PT(.5, 1.5, .5, 270, 200, 40), 18, '#FF006E', 'M', 18)}${pen(...PT(5.2, .4, .5, 270, 200, 40))}
    ${pillS(14, 26, 290, 48, '#CB48B7', 'builder place mark', 22)}${pillS(312, 26, 274, 48, '#CB48B7', 'line from mark', 22)}
    ${pillS(150, 360, 300, 44, '#FF7F11', 'M = điểm đánh dấu', 20)}`),
  t3: () => { const a = []; for (let x = 0; x < 4; x++) for (let z = 0; z < 3; z++) a.push([x, 0, z, 'sand']); return svg(`${VX([...GR(5, 4), ...a], 300, 170, 38)}
    ${ball(...PT(.5, 1.5, .5, 300, 170, 38), 18, '#FF006E', 'M', 18)}${pen(...PT(4, .4, 3, 300, 170, 38))}
    ${pillS(20, 26, 560, 48, '#CB48B7', 'builder fill from mark with', 22)}${pillS(130, 360, 340, 44, '#FF7F11', 'tô kín cả hình hộp', 20)}`); },
  t4: () => { const a = []; for (let x = 0; x < 5; x++) for (let y = 0; y < 3; y++) a.push([x, y, 0, 'cobble']); for (let z = 1; z < 3; z++) for (let y = 0; y < 3; y++) a.push([4, y, z, 'cobble']); return svg(`${VX([...GR(6, 4), ...a], 270, 220, 36)}
    ${pillS(20, 24, 560, 48, '#CB48B7', 'builder raise wall from mark with … of 3', 19)}${pillS(150, 362, 300, 44, '#FF7F11', 'tường cao 3 khối', 20)}`); },
  t5: () => svg(`${VX([...GR(7, 2), [0, 0, 0, 'red'], [1, 0, 0, 'red'], [0, 1, 0, 'yellow'], [4, 0, 0, 'red'], [5, 0, 0, 'red'], [4, 1, 0, 'yellow']], 250, 220, 40)}
    ${arr(...PT(2.2, 1.2, .5, 250, 220, 40), ...PT(3.8, 1.2, .5, 250, 220, 40), '#1982C4', 8)}
    ${pillS(14, 26, 280, 48, '#CB48B7', 'builder copy from mark', 20)}${pillS(310, 26, 276, 48, '#CB48B7', 'builder paste', 22)}
    ${pillS(140, 362, 320, 44, '#CB48B7', 'builder set origin', 20)}`),
};

const TOPICS = [
  { id: 't1', c: ['#FF7F11', '#FF006E'], dk: '#C2185B', title: 'Builder: cây bút 3D',
    tip: 'Builder nằm ở mục Advanced – bấm Advanced để mở ra nhé!',
    html: `<div class="blocks">${M('bu', `builder teleport to ${P3('~', 0, 0, 0)}`)}${M('bu', `builder face ${dd('West (negative X)')}`)}${M('bu', `builder move ${dd('forward')} by ${n(1)}`)}${M('bu', `builder turn ${dd('left')}`)}</div><ul>
      <li>Nhóm <span class="k">Builder</span> (Thợ xây) màu <b style="color:#CB48B7">hồng tím</b>, nằm trong mục <b>Advanced</b>.</li>
      <li>Builder là <span class="k">cây bút vô hình</span>: đặt chỗ đứng, chọn hướng rồi di chuyển.</li></ul>`,
    quiz: [
      { q: 'Nhóm lệnh Builder nằm ở đâu trong hộp công cụ?', o: ['Ngay đầu danh sách', 'Trong mục Advanced', 'Trong nhóm Loops', 'Không có sẵn'], a: 1, why: 'Builder nằm trong mục Advanced (Nâng cao).' },
      { q: 'Lệnh builder face dùng để:', o: ['Đặt một khối', 'Xây tường', 'Chọn hướng nhìn của Builder', 'Sao chép công trình'], a: 2, why: 'face chọn hướng Builder đang hướng tới.' } ] },
  { id: 't2', c: ['#22C493', '#1E9BD7'], dk: '#0B7285', title: 'Đánh dấu và vẽ đường',
    tip: 'place mark như cắm một lá cờ: sau đó vẽ đường từ lá cờ tới chỗ mới!',
    html: `<div class="blocks">${STK(M('bu', 'builder place mark'), M('bu', `builder move ${dd('forward')} by ${n(5)}`), M('bu', `builder line from mark with ${PK('lime')}`))}${M('bu', `place ${PK('gold')}`)}</div><ul>
      <li><b>place mark</b>: <span class="k">đánh dấu</span> điểm bắt đầu.</li>
      <li><b>line from mark</b>: vẽ <span class="k">đường thẳng</span> từ dấu tới chỗ Builder.</li>
      <li><b>place</b>: đặt 1 khối tại chỗ Builder.</li></ul>`,
    quiz: [
      { q: 'Lệnh nào dùng để ĐÁNH DẤU điểm bắt đầu?', o: ['builder place mark', 'builder paste', 'builder turn', 'place'], a: 0, why: 'place mark đánh dấu điểm để vẽ / lấp sau đó.' },
      { q: 'Mark ở đầu, Builder đi tới 5 bước rồi line from mark. Đường dài:', o: ['1 khối', '5 khối', '10 khối', '6 khối'], a: 3, why: 'Đường gồm ô mark và 5 ô đi tới: 6 khối.' } ] },
  { id: 't3', c: ['#FFB14E', '#FF5E78'], dk: '#C2255C', title: 'Lấp và vẽ lối đi',
    tip: 'trace path vẽ theo đúng đường Builder đã đi – kể cả khúc quanh!',
    html: `<div class="blocks">${M('bu', `builder fill from mark with ${PK('sand')}`)}${M('bu', `builder trace path from mark with ${PK('cobble')}`)}</div><ul>
      <li><b>fill from mark</b>: lấp kín <span class="k">hình hộp</span> từ dấu tới Builder.</li>
      <li><b>trace path</b>: vẽ lại <span class="k">đúng lối đi</span> Builder đã đi qua.</li>
      <li>Dùng để làm sân, nền nhà, đường đi uốn lượn.</li></ul>`,
    quiz: [
      { q: 'Muốn lát nền hình chữ nhật từ dấu đến Builder, dùng:', o: ['builder trace path', 'builder place mark', 'builder fill from mark', 'builder turn'], a: 2, why: 'fill from mark lấp kín hình hộp giữa hai điểm.' },
      { q: 'builder trace path from mark vẽ khối theo:', o: ['Lối đi Builder đã đi', 'Đường thẳng', 'Hình tròn', 'Ngẫu nhiên'], a: 0, why: 'trace path vẽ lại chính lối đi của Builder.' } ] },
  { id: 't4', c: ['#4F7CFF', '#B06BFF'], dk: '#5F3DC4', title: 'Dựng tường: raise wall',
    tip: 'Đi một vòng hình vuông rồi raise wall là có ngay 4 bức tường!',
    html: `<div class="blocks">${M('bu', `builder raise wall from mark with ${PK('cobble')} of ${n(3)}`)}</div><ul>
      <li><b>raise wall</b>: dựng <span class="k">tường</span> theo lối đi từ dấu.</li>
      <li>Số cuối <b>of 3</b>: tường <span class="k">cao 3 khối</span>.</li>
      <li>Kết hợp <b>repeat 4</b> + <b>move</b> + <b>turn</b> → 4 bức tường của ngôi nhà.</li></ul>`,
    quiz: [
      { q: 'Trong lệnh raise wall … of 5, số 5 là:', o: ['Chiều dài tường', 'Chiều cao tường', 'Số bức tường', 'Số giây'], a: 1, why: 'of 5 nghĩa là tường cao 5 khối.' },
      { q: 'Để Builder đi một vòng hình vuông, em lặp mấy lần (move + turn)?', o: ['2', '3', '8', '4'], a: 3, why: 'Hình vuông có 4 cạnh, mỗi cạnh: đi rồi rẽ.' } ] },
  { id: 't5', c: ['#2EC4B6', '#1982C4'], dk: '#145DA0', title: 'Sao chép và điểm gốc',
    tip: 'Xây một cái cây đẹp, copy rồi paste thành cả khu rừng!',
    html: `<div class="blocks">${M('bu', 'builder copy from mark')}${M('bu', 'builder paste')}${M('bu', 'builder set origin')}${M('bu', 'builder teleport to origin')}</div><ul>
      <li><b>copy from mark</b>: <span class="k">sao chép</span> vùng từ dấu tới Builder • <b>paste</b>: <span class="k">dán</span> ra chỗ mới.</li>
      <li><b>set origin</b>: lưu <b>điểm gốc</b> • <b>teleport to origin</b>: quay về điểm gốc.</li></ul>`,
    quiz: [
      { q: 'Sau builder copy from mark, lệnh nào đặt bản sao ra?', o: ['builder paste', 'builder set origin', 'builder place mark', 'builder face'], a: 0, why: 'paste dán bản đã copy tại vị trí Builder.' },
      { q: 'builder teleport to origin đưa Builder:', o: ['Về chỗ người chơi', 'Về điểm gốc đã lưu', 'Lên trời', 'Về toạ độ 0 0 0'], a: 1, why: 'origin là điểm gốc đã lưu bằng set origin.' } ] },
];

const KEY = ['Bút 3D vô hình<br><b>move</b> • <b>turn</b> • <b>face</b>', '<b>place mark</b><br><b>line from mark</b>', '<b>fill from mark</b>: lấp<br><b>trace path</b>: lối đi',
  '<b>raise wall</b> … <b>of</b> độ cao', '<b>copy</b> • <b>paste</b><br><b>set origin</b>'];
