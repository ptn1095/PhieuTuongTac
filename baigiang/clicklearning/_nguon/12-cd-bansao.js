/* ===== CHUYÊN ĐỀ 2: BẢN SAO (CLONE) ===== */
const META = { key: 'bansao', num: 12, lab: 'Chuyên đề 2/3', title: 'Chuyên đề Bản sao (Clone)', big: 'CHUYÊN ĐỀ<br>BẢN SAO',
  st2: 'Bản sao – Clone — 5 nội dung • 10 câu đố • nhận giấy chứng nhận',
  hello: 'Cùng học cách “nhân bản” nhân vật thành thật nhiều nhé!',
  cert: 'CHUYÊN ĐỀ BẢN SAO (CLONE)', file: 'BanSao', pass: 8 };

const flake = (x, y, r, c = '#4FC3F7', op = 1) => `<g transform="translate(${x} ${y})" opacity="${op}">${[0, 60, 120].map(a => `<line x1="${-r}" y1="0" x2="${r}" y2="0" stroke="${c}" stroke-width="${r/4}" stroke-linecap="round" transform="rotate(${a})"/>`).join('')}<circle r="${r/3}" fill="#fff" stroke="${c}" stroke-width="3"/></g>`;

const ILL_T = {
  t1: () => svg(`${spr(130, 200, 0, '#FF7F11', 1.4)}${pillS(60, 290, 150, 44, '#FF7F11', 'Bản gốc', 22)}
    ${arr(200, 200, 290, 200, '#8338EC', 9)}
    ${spr(380, 110, 0, '#FF7F11', .9, .8)}${spr(500, 170, 0, '#FF7F11', .9, .8)}${spr(380, 250, 0, '#FF7F11', .9, .8)}${spr(500, 310, 0, '#FF7F11', .9, .8)}
    ${pillS(330, 360, 200, 44, '#8338EC', 'Các bản sao', 22)}${star(40, 50, 16, '#FFD60A')}`),
  t2: () => svg(`<rect x="40" y="60" width="240" height="64" rx="10" fill="#FFAB19" stroke="#CF8B17" stroke-width="5"/>${txt(60, 102, 'create clone of', 26, '#fff', 'start')}
    <rect x="40" y="150" width="240" height="56" rx="28" fill="#fff" stroke="#CF8B17" stroke-width="5"/>${txt(160, 188, 'myself ▾', 26, '#575E75')}
    <rect x="40" y="226" width="240" height="56" rx="28" fill="#fff" stroke="#CF8B17" stroke-width="5"/>${txt(160, 264, 'Ball ▾', 26, '#575E75')}
    ${spr(420, 130, 0, '#FF7F11', 1)}${txt(420, 200, 'chính mình', 26)}<circle cx="420" cy="300" r="42" fill="#FF006E" stroke="${O}" stroke-width="6"/>${txt(420, 370, 'nhân vật khác', 26)}`),
  t3: () => svg(`<path d="M80 60 Q60 60 60 100 V140 H330 V100 Q330 60 300 60Z" fill="#FFAB19" stroke="#CF8B17" stroke-width="5"/>${txt(80, 116, 'when I start as a clone', 22, '#fff', 'start')}
    ${blkC(60, 144, 270, 'show')}${blkC(60, 198, 270, 'go to random')}${blkC(60, 252, 270, 'glide …')}
    ${stg(370, 60, 200, 270, false)}${spr(420, 120, 0, '#FF7F11', .55)}${spr(520, 200, 0, '#FF7F11', .55)}${spr(440, 280, 0, '#FF7F11', .55)}${star(560, 380, 14, '#FFD60A')}`),
  t4: () => svg(`${stg(40, 40, 520, 320, false)}<rect x="44" y="300" width="512" height="56" fill="#FF006E" opacity=".3"/>
    ${spr(200, 150, 90, '#FF7F11', .8)}${spr(380, 280, 90, '#FF7F11', .8, .35)}
    <circle cx="380" cy="280" r="50" fill="none" stroke="#E5383B" stroke-width="6" stroke-dasharray="8 8"/>${txt(470, 250, '💨', 50)}
    ${pillS(120, 370, 360, 44, '#E5383B', 'delete this clone', 24)}`),
  t5: () => svg(`<rect x="30" y="30" width="540" height="360" rx="22" fill="#1B2A49" stroke="${O}" stroke-width="6"/><rect x="34" y="320" width="532" height="66" rx="16" fill="#fff"/>
    ${flake(100, 90, 20)}${flake(200, 160, 16)}${flake(300, 80, 22)}${flake(400, 200, 18)}${flake(500, 110, 20)}${flake(150, 260, 14)}${flake(460, 280, 16)}${flake(330, 260, 20)}
    ${pillS(150, 330, 300, 46, '#4FC3F7', 'Mưa tuyết ❄', 26)}`),
};
function blkC(x, y, w, t) { return `<rect x="${x}" y="${y}" width="${w}" height="52" rx="8" fill="${t === 'show' ? '#9966FF' : '#4C97FF'}" stroke="${O}" stroke-width="3"/>${txt(x + 18, y + 35, t, 24, '#fff', 'start')}`; }

const TOPICS = [
  { id: 't1', c: ['#FFC300', '#FF7F11'], dk: '#D9480F', title: 'Bản sao là gì?',
    tip: 'Bản sao giống như dùng máy photo – ra nhiều nhân vật giống hệt!',
    html: `<ul>
      <li><span class="k">Bản sao</span> (clone) là nhân vật <b>giống hệt</b> bản gốc, tạo ra khi chương trình chạy.</li>
      <li>Bản sao có cùng <b>trang phục, vị trí, hướng, kích thước</b> như gốc lúc được tạo.</li>
      <li>Bản sao <span class="k">tự biến mất</span> khi bấm nút đỏ.</li>
      <li>Các lệnh bản sao ở nhóm <b>Control</b> (màu cam).</li></ul>`,
    quiz: [
      { q: 'Bản sao (clone) trong Scratch là:', o: ['Một phông nền mới', 'Nhân vật giống hệt bản gốc, tạo ra khi chạy', 'Một âm thanh', 'Một biến'], a: 1, why: 'Clone là bản sao của nhân vật, xuất hiện khi chương trình chạy.' },
      { q: 'Khi bấm nút đỏ (dừng), các bản sao sẽ:', o: ['Biến mất hết', 'Trở thành nhân vật mới', 'Đứng yên mãi', 'Được lưu lại'], a: 0, why: 'Dừng chương trình thì mọi bản sao bị xoá.' } ] },
  { id: 't2', c: ['#3A8DFF', '#00C2D1'], dk: '#1864AB', title: 'Tạo bản sao',
    tip: 'Thường thì mình ẩn bản gốc đi, chỉ cho bản sao xuất hiện!',
    html: `<div class="blocks">${B(`create clone of ${D('myself')}`, 'ct')}</div><div class="prog">${STK(B(`when ${FLAG} clicked`, 'hat ev'), B('hide', 'lk'), CB(`repeat ${N(5)}`, 'ct', B(`create clone of ${D('myself')}`, 'ct'), B(`wait ${N(1)} seconds`, 'ct')))}
      <ul class="side"><li><b>myself</b>: sao chính mình.</li><li>Có thể sao <b>nhân vật khác</b>.</li></ul></div>`,
    quiz: [
      { q: 'Đoạn lệnh mẫu tạo ra bao nhiêu bản sao?', o: ['1', '10', '5', 'Vô số'], a: 2, why: 'repeat 5, mỗi lần tạo 1 bản sao → 5 bản sao.' },
      { q: 'Vì sao bản gốc thường dùng lệnh hide?', o: ['Để xoá bản sao', 'Để chương trình dừng', 'Để tạo âm thanh', 'Để chỉ thấy các bản sao'], a: 3, why: 'Ẩn bản gốc, các bản sao sẽ tự show khi xuất hiện.' } ] },
  { id: 't3', c: ['#7AD86F', '#14A0A0'], dk: '#087F5B', title: 'Khi là bản sao',
    tip: 'Mỗi bản sao vừa “ra đời” sẽ chạy kịch bản này một mình!',
    html: `<div class="prog">${STK(B('when I start as a clone', 'hat ct'), B('show', 'lk'), B(`go to ${D('random position')}`), B(`glide ${N(2)} secs to x: ${N(0)} y: ${N(0)}`))}</div><ul>
      <li><b>when I start as a clone</b>: lệnh mỗi <span class="k">bản sao</span> làm khi vừa được tạo.</li>
      <li>Mỗi bản sao chạy <b>riêng</b>, không ảnh hưởng nhau.</li></ul>`,
    quiz: [
      { q: 'Kịch bản dưới khối when I start as a clone được chạy bởi:', o: ['Mỗi bản sao vừa được tạo', 'Chỉ bản gốc', 'Sân khấu', 'Nhân vật khác'], a: 0, why: 'Khối này chỉ kích hoạt cho bản sao.' },
      { q: 'Bản gốc đang ẩn. Bản sao muốn hiện ra, trong kịch bản bản sao cần lệnh:', o: ['hide', 'show', 'stamp', 'next backdrop'], a: 1, why: 'Bản sao cũng bị ẩn như gốc, cần show để hiện.' } ] },
  { id: 't4', c: ['#FF7F11', '#FF006E'], dk: '#C2255C', title: 'Xoá bản sao',
    tip: 'Xoá bản sao không dùng nữa để máy chạy nhẹ nhàng nhé!',
    html: `<div class="prog">${STK(B('when I start as a clone', 'hat ct'), CB(`repeat until ${BO(`touching ${D('edge')} ?`, 'se')}`, 'ct', B(`change y by ${N(-5)}`)), B('delete this clone', 'ct cap'))}</div><ul>
      <li><b>delete this clone</b>: <span class="k">xoá bản sao</span> đang chạy lệnh này.</li>
      <li>Scratch cho tối đa <code>300</code> bản sao cùng lúc.</li></ul>`,
    quiz: [
      { q: 'Trong ví dụ, bản sao bị xoá khi nào?', o: ['Ngay khi được tạo', 'Sau 5 giây', 'Khi rơi chạm cạnh sân khấu', 'Không bao giờ'], a: 2, why: 'repeat until chạm cạnh, sau đó delete this clone.' },
      { q: 'Lệnh delete this clone có tác dụng với:', o: ['Bản gốc', 'Tất cả nhân vật', 'Sân khấu', 'Chính bản sao chạy lệnh đó'], a: 3, why: 'Chỉ bản sao đang chạy lệnh mới bị xoá.' } ] },
  { id: 't5', c: ['#4F7CFF', '#B06BFF'], dk: '#5F3DC4', title: 'Ví dụ: mưa tuyết',
    tip: 'Một bông tuyết + clone = cả bầu trời tuyết rơi!',
    html: `<div class="prog" style="zoom:.74">${STK(B(`when ${FLAG} clicked`, 'hat ev'), B('hide', 'lk'), FOREVER(B(`create clone of ${D('myself')}`, 'ct'), B(`wait ${N(0.3)} seconds`, 'ct')))}${STK(B('when I start as a clone', 'hat ct'), B(`go to x: ${RP(`pick random ${N(-240)} to ${N(240)}`, 'op')} y: ${N(180)}`), B('show', 'lk'), B(`glide ${N(3)} secs to x: …  y: ${N(-180)}`), B('delete this clone', 'ct cap'))}</div>`,
    quiz: [
      { q: 'Vì sao bông tuyết xuất hiện ở nhiều vị trí khác nhau phía trên?', o: ['Vì dùng hide', 'Vì x là pick random −240 đến 240', 'Vì y = 180', 'Vì dùng forever'], a: 1, why: 'x ngẫu nhiên nên mỗi bản sao rơi ở một chỗ khác.' },
      { q: 'Muốn tuyết rơi DÀY hơn, em sửa:', o: ['wait (0.3) → wait (0.1)', 'wait (0.3) → wait (2)', 'Xoá lệnh show', 'y: 180 → y: 0'], a: 0, why: 'Chờ ít hơn thì tạo bản sao nhanh hơn, tuyết dày hơn.' } ] },
];

const KEY = ['<b>Clone</b>: bản sao<br>giống hệt bản gốc', '<b>create clone of</b><br>gốc thường <b>hide</b>', '<b>when I start<br>as a clone</b>',
  '<b>delete this clone</b><br>tối đa 300 bản sao', 'Mưa tuyết:<br><b>forever</b> + <b>clone</b>'];
