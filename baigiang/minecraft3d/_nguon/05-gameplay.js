/* ===== BÀI 5: GAMEPLAY – TRÒ CHƠI ===== */
const META = { key: 'gameplay', num: 5, title: 'Nhóm lệnh Gameplay', big: 'NHÓM LỆNH<br>GAMEPLAY',
  st2: 'Trò chơi — 5 nội dung • 10 câu đố • nhận giấy chứng nhận',
  hello: 'Cùng làm "phù thuỷ" đổi thời tiết, đổi ngày đêm với nhóm Gameplay (màu nâu) nhé!',
  cert: 'NHÓM LỆNH GAMEPLAY – TRÒ CHƠI', file: 'Gameplay', pass: 8 };

const sun = (x, y, r) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#FFD60A" stroke="${O}" stroke-width="5"/>${[0, 45, 90, 135, 180, 225, 270, 315].map(a => `<line x1="${x + (r + 8)*Math.cos(a*Math.PI/180)}" y1="${y + (r + 8)*Math.sin(a*Math.PI/180)}" x2="${x + (r + 22)*Math.cos(a*Math.PI/180)}" y2="${y + (r + 22)*Math.sin(a*Math.PI/180)}" stroke="#FFB703" stroke-width="7" stroke-linecap="round"/>`).join('')}`;
const cloud = (x, y, c = '#fff') => `<g stroke="${O}" stroke-width="5" fill="${c}"><circle cx="${x}" cy="${y}" r="26"/><circle cx="${x + 30}" cy="${y - 14}" r="32"/><circle cx="${x + 62}" cy="${y}" r="26"/><rect x="${x}" y="${y}" width="62" height="26" stroke="none"/></g><path d="M${x - 26} ${y + 4} H${x + 88}" stroke="${O}" stroke-width="5"/>`;
const ILL_T = {
  t1: () => svg(`<rect x="0" y="0" width="200" height="420" fill="#BDE8F5"/><rect x="200" y="0" width="200" height="420" fill="#A5B4C8"/><rect x="400" y="0" width="200" height="420" fill="#5C6784"/>
    ${sun(100, 130, 40)}${cloud(266, 120, '#E9ECEF')}${[0, 1, 2, 3, 4].map(i => `<line x1="${262 + i*16}" y1="170" x2="${254 + i*16}" y2="196" stroke="#1982C4" stroke-width="5" stroke-linecap="round"/>`).join('')}
    ${cloud(466, 120, '#868E96')}<path d="M500 160 L484 200 H504 L492 236 L526 186 H506 L518 160Z" fill="#FFD60A" stroke="${O}" stroke-width="4" stroke-linejoin="round"/>
    ${pillS(30, 300, 140, 48, '#8F6D40', 'clear', 26)}${pillS(230, 300, 140, 48, '#8F6D40', 'rain', 26)}${pillS(420, 300, 160, 48, '#8F6D40', 'thunder', 24)}`),
  t2: () => svg(`<rect x="0" y="0" width="300" height="420" fill="#BDE8F5"/><rect x="300" y="0" width="300" height="420" fill="#1B2A49"/>
    ${sun(150, 110, 40)}<circle cx="450" cy="110" r="42" fill="#FFF3BF" stroke="${O}" stroke-width="5"/><circle cx="470" cy="96" r="38" fill="#1B2A49"/>
    ${stars([380, 60, 10, '#fff'], [540, 180, 10, '#fff'], [520, 50, 8, '#fff'])}
    ${VX(GR(3, 2), 150, 230, 32)}${VX(GR(3, 2), 450, 230, 32)}
    ${pillS(60, 340, 180, 50, '#8F6D40', 'day', 28)}${pillS(360, 340, 180, 50, '#8F6D40', 'night', 28)}`),
  t3: () => svg(`${[['survival', '#2DA44E', 'Sinh tồn'], ['creative', '#1982C4', 'Sáng tạo'], ['adventure', '#FF7F11', 'Phiêu lưu']].map(([e, c, v], i) => `${pillS(40, 40 + i*80, 250, 60, c, e, 28)}${txt(330, 80 + i*80, v, 30, O, 'start')}`).join('')}
    ${pillS(40, 300, 520, 52, '#8F6D40', 'peaceful • easy • normal • hard', 22)}${stars([560, 60], [560, 200, 12])}`),
  t4: () => svg(`<rect x="20" y="30" width="560" height="300" rx="22" fill="#5C6784" stroke="${O}" stroke-width="6"/>
    ${VX(GR(6, 3), 300, 210, 30)}${txt(300, 120, 'CHIẾN THẮNG!', 52, '#FFD60A')}${txt(300, 170, 'Em đã về đích 🏆', 30, '#fff')}
    ${pillS(110, 350, 380, 50, '#8F6D40', 'show title subtitle', 24)}${stars([60, 70], [540, 70, 12])}`),
  t5: () => svg(`${VX([...GR(4, 3), ...MAN(1, 0, 1)], 300, 210, 42)}
    ${[[200, 120], [250, 80], [330, 70], [400, 110]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="16" fill="#B6EB6A" stroke="${O}" stroke-width="4"/>`).join('')}
    ${pillS(20, 24, 230, 48, '#8F6D40', 'xp give 10', 24)}${pillS(300, 358, 280, 46, '#8F6D40', 'change game rule', 22)}${stars([560, 60], [40, 380, 12])}`),
};

const TOPICS = [
  { id: 't1', c: ['#FFB14E', '#FF5E78'], dk: '#C2255C', title: 'Thời tiết: weather',
    tip: 'Mưa hoài chán quá? Một lệnh weather clear là trời nắng ngay!',
    html: `<div class="blocks">${M('ga', `weather ${dd('clear')}`)}${M('ga', 'toggle downfall')}${MR('ga', 'current weather')}</div><ul>
      <li>Nhóm <span class="k">Gameplay</span> (Trò chơi) có màu <b style="color:#8F6D40">nâu</b>: điều khiển cả thế giới.</li>
      <li><b>weather</b>: <code>clear</code> nắng • <code>rain</code> mưa • <code>thunder</code> giông bão.</li>
      <li><b>toggle downfall</b>: bật / tắt mưa • <b>current weather</b>: thời tiết hiện tại.</li></ul>`,
    quiz: [
      { q: 'Muốn trời có sấm sét, em chọn weather:', o: ['clear', 'rain', 'thunder', 'day'], a: 2, why: 'thunder là giông bão có sấm sét.' },
      { q: 'Khối lệnh nhóm Gameplay có màu gì?', o: ['Nâu', 'Tím', 'Hồng', 'Xanh lá'], a: 0, why: 'Nhóm Gameplay có màu nâu.' } ] },
  { id: 't2', c: ['#3A8DFF', '#00C2D1'], dk: '#1864AB', title: 'Ngày và đêm: time',
    tip: 'Ban đêm quái vật hay xuất hiện – đổi về ban ngày cho an toàn!',
    html: `<div class="blocks">${M('ga', `time set ${dd('day')}`)}${M('ga', `time add ${n(100)}`)}${MH('ga', `is time ${dd('day')}`)}</div><ul>
      <li><b>time set</b>: đặt ngay <code>day</code> (sáng), <code>noon</code> (trưa), <code>night</code> (tối)…</li>
      <li><b>time add</b>: cho thời gian <span class="k">trôi nhanh</span> thêm.</li>
      <li><b>is time day</b>: bây giờ có phải ban ngày? → <b>true / false</b>.</li></ul>`,
    quiz: [
      { q: 'Lệnh nào đổi Minecraft sang ban đêm ngay lập tức?', o: ['weather rain', 'time set night', 'time add 1', 'toggle downfall'], a: 1, why: 'time set night đặt thời gian về ban đêm.' },
      { q: 'is time (day) là khối hình lục giác, nó trả về:', o: ['Số giờ', 'Tên thời tiết', 'Vị trí mặt trời', 'true hoặc false'], a: 3, why: 'Khối lục giác trả về đúng / sai.' } ] },
  { id: 't3', c: ['#7AD86F', '#14A0A0'], dk: '#087F5B', title: 'Chế độ chơi và độ khó',
    tip: 'Đang xây thì dùng creative – có đủ khối và không bị mất máu!',
    html: `<div class="blocks">${M('ga', `change game mode to ${dd('creative')}<br>for ${SEL()}`)}${M('ga', `set difficulty to ${dd('peaceful')}`)}</div><ul>
      <li><code>survival</code>: sinh tồn • <code>creative</code>: sáng tạo (bay, khối vô hạn) • <code>adventure</code>: phiêu lưu.</li>
      <li>Độ khó: <code>peaceful</code> (hoà bình – không có quái vật) → <code>hard</code> (khó).</li></ul>`,
    quiz: [
      { q: 'Chế độ nào cho người chơi bay và có khối vô hạn?', o: ['survival', 'adventure', 'creative', 'hard'], a: 2, why: 'creative (sáng tạo) cho bay và dùng khối thoải mái.' },
      { q: 'Muốn KHÔNG có quái vật, em đặt độ khó:', o: ['peaceful', 'easy', 'normal', 'hard'], a: 0, why: 'peaceful (hoà bình) không có quái vật tấn công.' } ] },
  { id: 't4', c: ['#4F7CFF', '#B06BFF'], dk: '#5F3DC4', title: 'Hiện chữ lớn: show title',
    tip: 'Dùng show title để báo "Bắt đầu!" hoặc "Chiến thắng!" trong trò chơi!',
    html: `<div class="blocks">${M('ga', `show ${SEL()}<br>title ${s('Chiến thắng!')}<br>subtitle ${s('Giỏi quá')}`)}</div><ul>
      <li><b>show title</b>: hiện <span class="k">chữ to</span> giữa màn hình.</li>
      <li><b>title</b>: dòng chữ lớn • <b>subtitle</b>: dòng chữ nhỏ bên dưới.</li>
      <li>Khác <b>say</b>: say chỉ hiện ở khung chat góc màn hình.</li></ul>`,
    quiz: [
      { q: 'Lệnh nào hiện chữ thật TO ở giữa màn hình?', o: ['say', 'tell', 'show title', 'weather'], a: 2, why: 'show title hiện chữ lớn giữa màn hình.' },
      { q: 'Trong lệnh show, ô subtitle là:', o: ['Tên người chơi', 'Dòng chữ nhỏ bên dưới', 'Màu chữ', 'Thời gian'], a: 1, why: 'subtitle là phụ đề nhỏ dưới title.' } ] },
  { id: 't5', c: ['#22C493', '#1E9BD7'], dk: '#0B7285', title: 'Kinh nghiệm và luật chơi',
    tip: 'Tắt daylight cycle là trời đứng yên, không tối nữa!',
    html: `<div class="blocks">${M('ga', `xp give ${n(10)} to ${SEL()}`)}${M('ga', `change game rule ${dd('daylight cycle')} to ${MH('lg', 'false ▾', 'sd')}`)}</div><ul>
      <li><b>xp give</b>: tặng điểm <span class="k">kinh nghiệm</span> (XP).</li>
      <li><b>change game rule</b>: đổi <span class="k">luật chơi</span>.</li>
      <li>VD: <code>daylight cycle</code> false → ngày đêm <b>đứng yên</b>; <code>keep inventory</code> true → chết không mất đồ.</li></ul>`,
    quiz: [
      { q: 'Lệnh xp give 10 to (@p) sẽ:', o: ['Tặng 10 khối', 'Gọi 10 con gà', 'Thêm 10 giờ', 'Tặng 10 điểm kinh nghiệm'], a: 3, why: 'xp give tặng điểm kinh nghiệm.' },
      { q: 'Đặt game rule daylight cycle = false thì:', o: ['Thời gian ngày đêm đứng yên', 'Trời mưa mãi', 'Không có quái vật', 'Người chơi bay được'], a: 0, why: 'Tắt chu kỳ ngày đêm nên thời gian không trôi.' } ] },
];

const KEY = ['<b>weather</b><br>clear • rain • thunder', '<b>time set</b> day / night<br><b>time add</b>', 'survival • <b>creative</b><br>peaceful → hard',
  '<b>show title</b><br>chữ to giữa màn hình', '<b>xp give</b><br><b>change game rule</b>'];
