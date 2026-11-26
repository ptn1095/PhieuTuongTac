/* ===== BÀI 3: MOBS – SINH VẬT ===== */
const META = { key: 'mobs', num: 3, title: 'Nhóm lệnh Mobs', big: 'NHÓM LỆNH<br>MOBS',
  st2: 'Sinh vật — 5 nội dung • 10 câu đố • nhận giấy chứng nhận',
  hello: 'Cùng gọi gà, gọi heo và chọn đúng mục tiêu với nhóm Mobs (màu tím) nhé!',
  cert: 'NHÓM LỆNH MOBS – SINH VẬT', file: 'Mobs', pass: 8 };

const ILL_T = {
  t1: () => svg(`${VX([...GR(5, 4), ...MAN(0, 0, 1), ...HEN(2, 0, 0), ...HEN(3, 0, 2), ...HEN(4, 0, 1)], 290, 160, 40)}
    ${pillS(20, 26, 180, 50, '#764BCC', 'spawn', 28)}${pillS(330, 356, 250, 48, '#59967A', '~3 ~0 ~0', 26)}${stars([560, 50], [40, 380, 12])}`),
  t2: () => svg(`${VX([...GR(3, 2), ...PIG(0, 0, 0), ...HEN(2, 0, 1)], 150, 170, 40)}
    ${VX([...GR(3, 2), [1, 0, 0, 'purple', .7, 1.3, .6], [1.05, 1.3, .05, 'purple', .6, .6, .5]], 450, 170, 40)}
    ${pillS(40, 330, 220, 52, '#764BCC', 'animal', 28)}${pillS(340, 330, 220, 52, '#764BCC', 'monster', 28)}
    ${txt(150, 80, 'Động vật', 28, '#2DA44E')}${txt(450, 80, 'Quái vật', 28, '#E5383B')}${stars([300, 60], [300, 390, 12])}`),
  t3: () => svg(`${VX([...GR(5, 4), ...MAN(1, 0, 1), ...MAN(3, 0, 0), ...MAN(4, 0, 3)], 300, 170, 38)}
    ${ball(...PT(1.5, 2.6, 1.5, 300, 170, 38), 22, '#FF006E', '@p', 18)}
    ${pillS(14, 28, 140, 46, '#764BCC', '@p', 26)}${pillS(164, 28, 140, 46, '#764BCC', '@a', 26)}${pillS(314, 28, 130, 46, '#764BCC', '@e', 26)}${pillS(454, 28, 130, 46, '#764BCC', '@r', 26)}
    ${pillS(140, 360, 320, 46, '#FF7F11', 'gần nhất • tất cả', 22)}`),
  t4: () => svg(`${VX([...GR(5, 3), ...MAN(0, 0, 1), ...HEN(3, 0, 1)], 300, 180, 42)}
    <circle cx="${PT(3.5, .5, 1.5, 300, 180, 42)[0]}" cy="${PT(3.5, .5, 1.5, 300, 180, 42)[1]}" r="44" fill="none" stroke="#E5383B" stroke-width="7" stroke-dasharray="12 8"/>
    ${pillS(20, 28, 160, 48, '#764BCC', 'kill', 28)}${pillS(196, 28, 200, 48, '#764BCC', 'teleport', 26)}${pillS(300, 356, 280, 48, '#764BCC', 'on animal killed', 22)}${stars([560, 60], [40, 380, 12])}`),
  t5: () => svg(`${VX([...GR(4, 3), ...MAN(1, 0, 1)], 300, 200, 44)}
    ${[[200, 120], [420, 110], [250, 60], [380, 170]].map(([x, y], i) => star(x, y, 18 - i*2, ['#FFD60A', '#2EC4B6', '#FF006E', '#8338EC'][i])).join('')}
    ${pillS(20, 26, 230, 48, '#764BCC', 'apply Speed', 24)}${pillS(350, 26, 230, 48, '#764BCC', 'give', 26)}${pillS(180, 360, 240, 46, '#FF7F11', 'chạy nhanh hơn!', 22)}`),
};

const TOPICS = [
  { id: 't1', c: ['#B65CFF', '#5A189A'], dk: '#4A148C', title: 'Gọi sinh vật: spawn',
    tip: 'Đặt gà cách xa người chơi một chút để dễ nhìn nha!',
    html: `<div class="blocks">${M('mo', `spawn ${MR('mo', `animal ${PK('white')}`, 'sd')} at ${P3('~', 3, 0, 0)}`)}</div><ul>
      <li>Nhóm <span class="k">Mobs</span> (Sinh vật) có màu <b style="color:#764BCC">tím</b>.</li>
      <li><b>spawn</b>: <span class="k">gọi ra</span> một sinh vật tại vị trí chọn.</li>
      <li>Bấm vào ô sinh vật để đổi: gà (<b>chicken</b>), heo (<b>pig</b>), bò (<b>cow</b>)…</li>
      <li>Đặt trong vòng lặp để gọi <b>nhiều con</b>.</li></ul>`,
    quiz: [
      { q: 'Lệnh nào dùng để gọi một con gà xuất hiện?', o: ['place', 'spawn', 'fill with', 'say'], a: 1, why: 'spawn gọi sinh vật xuất hiện trong thế giới.' },
      { q: 'Nhóm lệnh Mobs có màu gì?', o: ['Xanh lá', 'Nâu', 'Xanh dương', 'Tím'], a: 3, why: 'Nhóm Mobs có màu tím.' } ] },
  { id: 't2', c: ['#7AD86F', '#14A0A0'], dk: '#087F5B', title: 'Ba loại sinh vật',
    tip: 'Thử nghiệm quái vật thì nhớ ở chế độ Hoà bình hoặc Sáng tạo nhé!',
    html: `<div class="blocks">${MR('mo', `animal ${PK('white')}`)}${MR('mo', `monster ${PK('purple')}`)}${MR('mo', `projectile ${dd('primed tnt')}`)}</div><ul>
      <li><b>animal</b>: <span class="k">động vật</span> hiền – gà, heo, bò, cừu…</li>
      <li><b>monster</b>: <span class="k">quái vật</span> – zombie, nhện…</li>
      <li><b>projectile</b>: vật <span class="k">bay ra</span> – mũi tên, tuyết, TNT đã châm…</li></ul>`,
    quiz: [
      { q: 'Con heo (pig) thuộc loại nào?', o: ['animal', 'monster', 'projectile', 'item'], a: 0, why: 'Heo là động vật hiền → animal.' },
      { q: 'Zombie thuộc loại sinh vật nào?', o: ['animal', 'projectile', 'monster', 'block'], a: 2, why: 'Zombie là quái vật → monster.' } ] },
  { id: 't3', c: ['#3A8DFF', '#00C2D1'], dk: '#1864AB', title: 'Chọn mục tiêu: selector',
    tip: '@p là "người gần nhất" – thường chính là em!',
    html: `<div class="blocks">${MR('mo', 'nearest player (@p) ▾')}${MR('mo', `all ${MR('mo', `animal ${PK('white')}`, 'sd')}`)}</div>
      <table class="tb"><tr><th>Ký hiệu</th><th>Nghĩa</th></tr><tr><td>@p</td><td>Người chơi gần nhất</td></tr><tr><td>@a</td><td>Tất cả người chơi</td></tr>
      <tr><td>@e</td><td>Tất cả thực thể (cả sinh vật)</td></tr><tr><td>@r</td><td>Một người chơi ngẫu nhiên</td></tr></table>`,
    quiz: [
      { q: 'Muốn chọn TẤT CẢ người chơi, em dùng:', o: ['@p', '@a', '@r', '@s'], a: 1, why: '@a = all players, tất cả người chơi.' },
      { q: 'Ký hiệu @p nghĩa là:', o: ['Tất cả sinh vật', 'Một người ngẫu nhiên', 'Con heo', 'Người chơi gần nhất'], a: 3, why: '@p = nearest player, người chơi gần nhất.' } ] },
  { id: 't4', c: ['#FF595E', '#FFB14E'], dk: '#C92A2A', title: 'kill, teleport và sự kiện',
    tip: 'kill (@p) là… chính em đó! Chọn mục tiêu thật cẩn thận nha!',
    html: `<div class="blocks">${M('mo', `kill ${MR('mo', `all ${MR('mo', `animal ${PK('white')}`, 'sd')}`, 'sd')}`)}${M('mo', `teleport ${SEL()} to ${P3('~', 0, 5, 0)}`)}${MC('mo', `on ${MR('mo', `animal ${PK('white')}`, 'sd')} killed`, [], true)}</div><ul>
      <li><b>kill</b>: loại bỏ các mục tiêu được chọn.</li>
      <li><b>teleport</b>: đưa mục tiêu tới vị trí mới.</li>
      <li><b>on … killed</b>: chạy khi một con vật bị hạ.</li></ul>`,
    quiz: [
      { q: 'Lệnh kill (all animal chicken) sẽ:', o: ['Gọi thêm gà', 'Loại bỏ tất cả gà', 'Dịch chuyển gà', 'Cho gà ăn'], a: 1, why: 'kill loại bỏ mọi mục tiêu đã chọn: tất cả con gà.' },
      { q: 'Khối nào chạy khi một con gà bị hạ?', o: ['on animal chicken killed', 'spawn chicken', 'on player died', 'on chat command'], a: 0, why: 'on … killed chạy khi sinh vật đó bị hạ.' } ] },
  { id: 't5', c: ['#4F7CFF', '#B06BFF'], dk: '#5F3DC4', title: 'Hiệu ứng và vật phẩm',
    tip: 'Speed cho chạy nhanh, Jump Boost cho nhảy cao – thử ngay!',
    html: `<div class="blocks">${M('mo', `apply ${dd('Speed')} to ${SEL()}<br>duration ${n(10)} amplifier ${n(1)}`)}${M('mo', `give ${SEL()}<br>block or item ${PK('diamond')}<br>amount ${n(1)}`)}</div><ul>
      <li><b>apply</b>: tặng <span class="k">hiệu ứng</span> (Speed, Jump Boost…).</li>
      <li><b>duration</b>: số <b>giây</b> • <b>amplifier</b>: <b>độ mạnh</b>.</li>
      <li><b>give</b>: tặng <span class="k">khối / vật phẩm</span> vào túi đồ.</li></ul>`,
    quiz: [
      { q: 'Trong lệnh apply, ô duration là:', o: ['Độ mạnh hiệu ứng', 'Tên người chơi', 'Thời gian hiệu ứng (giây)', 'Số con gà'], a: 2, why: 'duration là thời gian hiệu ứng kéo dài.' },
      { q: 'Muốn tặng 64 khối đá cho người chơi, em dùng lệnh:', o: ['place', 'spawn', 'kill', 'give'], a: 3, why: 'give đưa khối / vật phẩm vào túi đồ người chơi.' } ] },
];

const KEY = ['<b>spawn</b>: gọi sinh vật<br>tại vị trí', '<b>animal</b> • <b>monster</b><br><b>projectile</b>', '<b>@p</b> gần nhất • <b>@a</b> tất cả<br><b>@e</b> thực thể • <b>@r</b> ngẫu nhiên',
  '<b>kill</b> • <b>teleport</b><br><b>on … killed</b>', '<b>apply</b> hiệu ứng<br><b>give</b> vật phẩm'];
