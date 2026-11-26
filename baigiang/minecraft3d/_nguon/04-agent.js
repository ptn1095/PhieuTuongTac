/* ===== BÀI 4: AGENT – TÁC TỬ ===== */
const META = { key: 'agent', num: 4, title: 'Nhóm lệnh Agent', big: 'NHÓM LỆNH<br>AGENT',
  st2: 'Tác tử (robot trợ lý) — 5 nội dung • 10 câu đố • nhận giấy chứng nhận',
  hello: 'Cùng điều khiển robot trợ lý Agent (màu đỏ cam) đi, xây và đào nhé!',
  cert: 'NHÓM LỆNH AGENT – TÁC TỬ', file: 'Agent', pass: 8 };

const ILL_T = {
  t1: () => svg(`${VX([...GR(5, 3), ...MAN(0, 0, 0), ...BOT(1, 0, 1)], 290, 170, 42)}
    ${arr(...PT(2.2, .5, 1.5, 290, 170, 42), ...PT(4.3, .5, 1.5, 290, 170, 42), '#FF006E', 8)}
    ${pillS(16, 26, 300, 48, '#D83B01', 'agent move forward', 22)}${pillS(330, 26, 250, 48, '#D83B01', 'agent turn left', 22)}${stars([560, 380, 12], [40, 380, 12])}`),
  t2: () => svg(`${VX([...GR(3, 3), ...BOT(1, 0, 1)], 300, 160, 46)}
    ${arr(...PT(1.5, .6, 1.5, 300, 160, 46), ...PT(3.4, .6, 1.5, 300, 160, 46), '#1982C4', 7)}${arr(...PT(1.5, .6, 1.5, 300, 160, 46), ...PT(1.5, .6, 3.4, 300, 160, 46), '#2DA44E', 7)}${arr(...PT(1.5, 1.1, 1.5, 300, 160, 46), ...PT(1.5, 2.8, 1.5, 300, 160, 46), '#FF006E', 7)}
    ${pillS(430, 250, 150, 44, '#1982C4', 'forward', 22)}${pillS(30, 250, 130, 44, '#2DA44E', 'right', 22)}${pillS(350, 30, 100, 44, '#FF006E', 'up', 22)}
    ${pillS(14, 360, 572, 46, '#D83B01', 'forward • back • left • right • up • down', 20)}`),
  t3: () => svg(`${VX([...GR(5, 2), [0, 0, 0, 'stone'], [1, 0, 0, 'stone'], [2, 0, 0, 'stone'], ...BOT(3, 0, 0), [4, 0, 0, 'cobble'], [0, 0, 1, 'dirt'], [1, 0, 1, 'dirt']], 290, 200, 46)}
    ${pillS(16, 26, 186, 46, '#D83B01', 'agent place', 22)}${pillS(208, 26, 196, 46, '#D83B01', 'agent destroy', 22)}${pillS(410, 26, 176, 46, '#D83B01', 'agent till', 22)}
    ${pillS(130, 360, 340, 46, '#FF7F11', 'place on move: xây khi đi', 21)}`),
  t4: () => svg(`${VX([...GR(4, 2), ...BOT(0, 0, 0), [2, 0, 0, 'stone'], [2, 1, 0, 'stone']], 260, 200, 50)}
    ${arr(...PT(1, .6, .5, 260, 200, 50), ...PT(1.9, .6, .5, 260, 200, 50), '#FF006E', 6)}
    ${pillS(330, 40, 250, 54, '#459197', 'true ✔', 30)}${pillS(330, 104, 250, 46, '#D83B01', 'agent detect', 24)}
    ${pillS(40, 360, 300, 46, '#D83B01', 'agent inspect block', 21)}${stars([40, 60], [570, 380, 12])}`),
  t5: () => svg(`${[0, 1, 2, 3, 4].map(i => `<rect x="${60 + i*98}" y="120" width="86" height="86" rx="10" fill="${i === 1 ? '#FFE066' : '#E9ECEF'}" stroke="${O}" stroke-width="5"/>${txt(78 + i*98, 144, i + 1, 18, '#868E96', 'start')}`).join('')}
    ${VX([[0, 0, 0, 'grass']], 103, 150, 22, { sw: 2 })}${VX([[0, 0, 0, 'gold']], 201, 150, 22, { sw: 2 })}${VX([[0, 0, 0, 'stone']], 299, 150, 22, { sw: 2 })}
    ${txt(140, 200, '64', 20)}${txt(238, 200, '10', 20)}${txt(336, 200, '5', 20)}
    ${pillS(60, 40, 480, 50, '#D83B01', 'Túi đồ của Agent: 27 ô', 26)}${pillS(80, 260, 440, 48, '#D83B01', 'agent set active slot (2)', 22)}
    ${pillS(130, 340, 340, 46, '#FF7F11', 'ô 2 đang được chọn', 22)}`),
};

const TOPICS = [
  { id: 't1', c: ['#FF7F11', '#FF006E'], dk: '#C2185B', title: 'Gọi và di chuyển Agent',
    tip: 'Agent đứng xa quá thì dùng agent teleport to player gọi về nhé!',
    html: `<div class="blocks">${M('ag', 'agent teleport to player')}${M('ag', `agent move ${dd('forward')} by ${n(1)}`)}${M('ag', `agent turn ${dd('left')}`)}</div><ul>
      <li>Nhóm <span class="k">Agent</span> (Tác tử) có màu <b style="color:#D83B01">đỏ cam</b>: điều khiển <b>robot trợ lý</b>.</li>
      <li><b>agent teleport to player</b>: gọi Agent về cạnh em.</li>
      <li><b>agent move</b>: đi theo hướng, số bước • <b>agent turn</b>: quay trái/phải.</li></ul>`,
    quiz: [
      { q: 'Lệnh nào gọi Agent về đứng cạnh người chơi?', o: ['agent move forward', 'agent teleport to player', 'agent turn left', 'agent place'], a: 1, why: 'agent teleport to player đưa Agent về cạnh người chơi.' },
      { q: 'agent move (forward) by (3) làm Agent:', o: ['Quay trái 3 lần', 'Bay lên 3 khối', 'Đi thẳng 3 bước', 'Đặt 3 khối'], a: 2, why: 'forward là phía trước, by 3 là đi 3 bước.' } ] },
  { id: 't2', c: ['#3A8DFF', '#00C2D1'], dk: '#1864AB', title: 'Hướng đi của Agent',
    tip: 'Hướng tính theo mặt Agent đang nhìn, không phải theo em!',
    html: `<div class="blocks">${MR('ag', 'forward ▾')}${MR('ag', 'agent position')}${MR('ag', 'agent orientation')}</div>
      <div class="chips"><span class="chip" style="background:#1982C4">forward: trước</span><span class="chip" style="background:#FF7F11">back: sau</span><span class="chip" style="background:#2DA44E">left / right</span><span class="chip" style="background:#FF006E">up / down</span></div><ul>
      <li>Hướng đi <span class="k">tính theo mặt Agent</span> đang nhìn.</li>
      <li><b>agent position</b>: vị trí • <b>agent orientation</b>: hướng nhìn.</li></ul>`,
    quiz: [
      { q: 'Muốn Agent đi LÙI, em chọn hướng:', o: ['forward', 'up', 'left', 'back'], a: 3, why: 'back nghĩa là phía sau.' },
      { q: 'Agent đang nhìn hướng Bắc. agent turn (right) thì Agent nhìn hướng:', o: ['Đông', 'Tây', 'Nam', 'Vẫn hướng Bắc'], a: 0, why: 'Đang nhìn Bắc, quay phải sẽ nhìn sang Đông.' } ] },
  { id: 't3', c: ['#FFB14E', '#FF5E78'], dk: '#C2255C', title: 'Xây, đào và cày đất',
    tip: 'Agent cần có khối trong túi đồ thì mới đặt (place) được!',
    html: `<div class="blocks">${M('ag', `agent place ${dd('forward')}`)}${M('ag', `agent destroy ${dd('forward')}`)}${M('ag', `agent till ${dd('forward')}`)}${M('ag', `agent ${dd('place on move')} ${MH('lg', 'OFF', 'sd')}`)}</div><ul>
      <li><b>place</b>: đặt khối • <b>destroy</b>: phá khối • <b>till</b>: cày đất.</li>
      <li><b>place on move</b> bật <code>ON</code>: vừa đi vừa <span class="k">đặt khối</span> phía dưới.</li></ul>`,
    quiz: [
      { q: 'Lệnh agent destroy (forward) làm gì?', o: ['Đặt khối phía trước', 'Phá khối phía trước', 'Đi tới trước', 'Cày đất'], a: 1, why: 'destroy là phá khối theo hướng đã chọn.' },
      { q: 'Muốn Agent vừa đi vừa xây đường, em bật:', o: ['agent till', 'agent collect all', 'place on move', 'agent turn'], a: 2, why: 'place on move = ON thì Agent đặt khối mỗi bước đi.' } ] },
  { id: 't4', c: ['#2EC4B6', '#1982C4'], dk: '#145DA0', title: 'Agent dò tìm: detect',
    tip: 'Dò trước khi đi – Agent sẽ không đâm vào tường!',
    html: `<div class="blocks">${MH('ag', `agent detect ${dd('block')} ${dd('forward')}`)}${MR('ag', `agent inspect block ${dd('forward')}`)}</div><ul>
      <li><b>agent detect</b>: phía trước <span class="k">có khối không?</span> → <b>true</b> / <b>false</b>.</li>
      <li><b>agent inspect block</b>: cho biết <span class="k">đó là khối gì</span>.</li>
      <li>Hay dùng với <b>if</b>: có khối thì phá, không có thì đi tiếp.</li></ul>`,
    quiz: [
      { q: 'agent detect (block) (forward) trả về gì khi phía trước là bức tường?', o: ['false', 'Tên bức tường', 'Số 0', 'true'], a: 3, why: 'Có khối phía trước nên kết quả là true (đúng).' },
      { q: 'Muốn biết khối trước mặt Agent LÀ LOẠI GÌ, em dùng:', o: ['agent inspect block', 'agent detect', 'agent place', 'agent position'], a: 0, why: 'inspect cho biết loại khối, detect chỉ cho biết có hay không.' } ] },
  { id: 't5', c: ['#4F7CFF', '#B06BFF'], dk: '#5F3DC4', title: 'Túi đồ của Agent',
    tip: 'Agent đặt khối ở ô đang chọn – chọn đúng ô trước khi xây nha!',
    html: `<div class="blocks">${M('ag', `agent set active slot ${n(2)}`)}${M('ag', `agent set block or item ${PK('gold')} count ${n(64)} in slot ${n(1)}`)}${MR('ag', `agent get item count from slot ${n(1)}`)}</div><ul>
      <li>Túi đồ Agent có <span class="k">27 ô</span> (slot).</li>
      <li><b>set active slot</b>: chọn ô dùng để đặt khối.</li>
      <li><b>set block or item</b>: bỏ khối vào ô • <b>get item count</b>: đếm số lượng.</li></ul>`,
    quiz: [
      { q: 'Túi đồ của Agent có bao nhiêu ô?', o: ['9', '64', '27', '10'], a: 2, why: 'Túi đồ của Agent có 27 ô.' },
      { q: 'Lệnh nào chọn ô số 3 để Agent lấy khối ra đặt?', o: ['agent get item count from slot 3', 'agent set active slot 3', 'agent place forward', 'agent drop all'], a: 1, why: 'set active slot chọn ô đang dùng.' } ] },
];

const KEY = ['<b>teleport to player</b><br><b>move</b> • <b>turn</b>', 'forward • back • left<br>right • up • down', '<b>place</b> • <b>destroy</b> • <b>till</b><br>place on move',
  '<b>detect</b> → true/false<br><b>inspect</b> → loại khối', 'Túi đồ <b>27 ô</b><br><b>set active slot</b>'];
