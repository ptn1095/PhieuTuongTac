/* ===== NHÁNH 3: SOUND – ÂM THANH ===== */
const META = { key: 'sound', num: 3, title: 'Nhóm lệnh Sound', big: 'NHÓM LỆNH<br>SOUND',
  st2: 'Âm thanh — 5 nội dung • 10 câu đố • nhận giấy chứng nhận',
  hello: 'Cùng khám phá nhóm lệnh Âm thanh (màu hồng tím) nhé!',
  cert: 'NHÓM LỆNH SOUND – ÂM THANH', file: 'Sound', pass: 8 };

const spk = (x, y, s = 1, c = '#CF63CF') => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-60" y="-30" width="44" height="60" rx="8" fill="${c}" stroke="${O}" stroke-width="6"/><path d="M-18 -30 L30 -66 V66 L-18 30Z" fill="${c}" stroke="${O}" stroke-width="6" stroke-linejoin="round"/></g>`;
const wave = (x, y, n, c = '#CF63CF') => [...Array(n)].map((_, i) => `<path d="M${x + i*26} ${y - 30 - i*14} Q${x + 24 + i*30} ${y} ${x + i*26} ${y + 30 + i*14}" fill="none" stroke="${c}" stroke-width="8" stroke-linecap="round"/>`).join('');
const note = (x, y, c = '#8338EC', s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><ellipse cx="0" cy="0" rx="16" ry="12" fill="${c}" stroke="${O}" stroke-width="4" transform="rotate(-20)"/><line x1="13" y1="-4" x2="13" y2="-56" stroke="${O}" stroke-width="6" stroke-linecap="round"/><path d="M13 -56 Q36 -48 32 -28" fill="none" stroke="${O}" stroke-width="6" stroke-linecap="round"/></g>`;
const bar = (x, y, w, h, p, c) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h/2}" fill="#EEE" stroke="${O}" stroke-width="5"/><rect x="${x + 5}" y="${y + 5}" width="${(w - 10)*p}" height="${h - 10}" rx="${(h - 10)/2}" fill="${c}"/>`;

const ILL_T = {
  t1: () => svg(`${spk(180, 190, 1.3)}${wave(250, 190, 3)}${note(470, 120, '#FF006E')}${note(520, 250, '#1982C4', .9)}
    ${pillS(60, 330, 230, 48, '#CF63CF', 'start sound', 24)}${pillS(310, 330, 260, 48, '#BD42BD', 'play … until done', 22)}`),
  t2: () => svg(`<rect x="40" y="40" width="520" height="70" rx="20" fill="#F3E8FF" stroke="${O}" stroke-width="5"/>
    ${pillS(60, 52, 140, 46, '#9AA5B1', 'Code', 22)}${pillS(220, 52, 160, 46, '#9AA5B1', 'Costumes', 22)}${pillS(400, 52, 140, 46, '#CF63CF', '🔊 Sounds', 22)}
    <circle cx="160" cy="250" r="70" fill="#CF63CF" stroke="${O}" stroke-width="6"/>${txt(160, 270, '🎤', 60)}${pillS(80, 340, 160, 44, '#FF006E', 'Record', 22)}
    <rect x="320" y="180" width="220" height="140" rx="20" fill="#fff" stroke="${O}" stroke-width="5"/>${note(390, 270, '#8338EC')}${note(460, 250, '#2EC4B6')}${pillS(340, 340, 180, 44, '#CF63CF', 'Thư viện', 22)}`),
  t3: () => svg(`${spk(130, 160, 1)}<line x1="200" y1="110" x2="280" y2="210" stroke="#E5383B" stroke-width="12" stroke-linecap="round"/><line x1="280" y1="110" x2="200" y2="210" stroke="#E5383B" stroke-width="12" stroke-linecap="round"/>
    ${pillS(330, 80, 240, 50, '#CF63CF', 'stop all sounds', 24)}${pillS(330, 160, 240, 50, '#BD42BD', 'pitch +10 ↑', 26)}
    <path d="M60 330 Q120 270 180 330 T300 330 T420 330 T540 330" fill="none" stroke="#FF006E" stroke-width="8" stroke-linecap="round"/>${txt(300, 395, 'Cao độ (pitch): giọng cao – thấp', 26, O)}`),
  t4: () => svg(`${spk(110, 120, .8)}${wave(160, 120, 3)}${bar(300, 95, 260, 50, 1, '#CF63CF')}${txt(430, 80, '100%', 28)}
    ${spk(110, 290, .8, '#C9C9D6')}${bar(300, 265, 260, 50, .02, '#CF63CF')}${txt(430, 250, '0% = im lặng', 26)}
    <line x1="170" y1="255" x2="230" y2="325" stroke="#E5383B" stroke-width="9" stroke-linecap="round"/><line x1="230" y1="255" x2="170" y2="325" stroke="#E5383B" stroke-width="9" stroke-linecap="round"/>`),
  t5: () => svg(`<circle cx="160" cy="210" r="90" fill="#FFB14E" stroke="${O}" stroke-width="6"/><path d="M95 150 L100 90 L135 128Z M225 150 L220 90 L185 128Z" fill="#FFB14E" stroke="${O}" stroke-width="6" stroke-linejoin="round"/>
    <circle cx="130" cy="200" r="10" fill="${O}"/><circle cx="190" cy="200" r="10" fill="${O}"/><path d="M140 240 Q160 256 180 240" stroke="${O}" stroke-width="6" fill="none"/>
    <rect x="290" y="80" width="260" height="90" rx="28" fill="#fff" stroke="${O}" stroke-width="5"/>${txt(420, 138, 'Meo meo!', 38)}
    ${note(330, 280, '#FF006E')}${note(400, 250, '#8338EC')}${note(470, 290, '#1982C4')}${pillS(300, 330, 260, 46, '#CF63CF', 'start sound Meow', 22)}`),
};

const TOPICS = [
  { id: 't1', c: ['#B65CFF', '#5A189A'], dk: '#5A189A', title: 'Phát âm thanh',
    tip: 'start sound chạy tiếp ngay, play … until done thì đợi phát xong!',
    html: `<div class="blocks">${B(`start sound ${D('Meow')}`, 'sn')}${B(`play sound ${D('Meow')} until done`, 'sn')}</div><ul>
      <li>Nhóm <span class="k">Sound</span> (Âm thanh) có màu <b style="color:#BD42BD">hồng tím</b>.</li>
      <li><b>start sound</b>: bắt đầu phát rồi <span class="k">chạy tiếp ngay</span> lệnh sau.</li>
      <li><b>play sound … until done</b>: <span class="k">đợi phát xong</span> mới chạy tiếp.</li></ul>`,
    quiz: [
      { q: 'Lệnh nào phát âm thanh và ĐỢI phát xong mới chạy lệnh tiếp theo?', o: ['start sound', 'play sound until done', 'stop all sounds', 'set volume to'], a: 1, why: 'until done = cho đến khi xong.' },
      { q: 'Nhóm lệnh Sound có màu gì?', o: ['Xanh dương', 'Vàng', 'Hồng tím', 'Xanh lá'], a: 2, why: 'Các khối Âm thanh có màu hồng tím.' } ] },
  { id: 't2', c: ['#FF7F11', '#FF006E'], dk: '#C2255C', title: 'Thêm âm thanh mới',
    tip: 'Có thể tự ghi âm giọng nói của mình làm âm thanh cho nhân vật!',
    html: `<ul>
      <li>Mở thẻ <span class="k">Sounds</span> (Âm thanh) ở góc trên bên trái.</li>
      <li><b>Choose a Sound</b>: chọn từ <b>thư viện</b> có sẵn.</li>
      <li><b>Record</b>: <span class="k">ghi âm</span> bằng micro.</li>
      <li><b>Upload Sound</b>: tải tệp âm thanh từ máy tính.</li>
      <li>Mỗi nhân vật có <b>âm thanh riêng</b> của mình.</li></ul>`,
    quiz: [
      { q: 'Muốn thêm âm thanh cho nhân vật, em mở thẻ:', o: ['Code', 'Costumes', 'Backdrops', 'Sounds'], a: 3, why: 'Thẻ Sounds chứa các âm thanh của nhân vật.' },
      { q: 'Muốn dùng giọng nói của chính mình, em chọn:', o: ['Record (ghi âm)', 'Choose a Sound', 'Paint', 'Surprise'], a: 0, why: 'Record dùng micro để ghi âm giọng nói.' } ] },
  { id: 't3', c: ['#3A8DFF', '#00C2D1'], dk: '#1864AB', title: 'Dừng và hiệu ứng',
    tip: 'pitch giống như giọng chuột (cao) hay giọng gấu (trầm) đó!',
    html: `<div class="blocks">${B('stop all sounds', 'sn')}${B(`change ${D('pitch')} effect by ${N(10)}`, 'sn')}${B('clear sound effects', 'sn')}</div><ul>
      <li><b>stop all sounds</b>: <span class="k">dừng</span> mọi âm thanh đang phát.</li>
      <li><b>pitch</b>: cao độ, số dương thì giọng <b>cao hơn</b>.</li>
      <li><b>clear sound effects</b>: trở về âm thanh gốc.</li></ul>`,
    quiz: [
      { q: 'Muốn tắt hết các âm thanh đang phát, em dùng:', o: ['clear sound effects', 'set volume to (100) %', 'stop all sounds', 'hide'], a: 2, why: 'stop all sounds dừng mọi âm thanh.' },
      { q: 'change (pitch) effect by (50) làm âm thanh:', o: ['To hơn', 'Cao hơn (giọng chuột)', 'Nhỏ hơn', 'Phát chậm lại 50 giây'], a: 1, why: 'pitch là cao độ: tăng thì giọng cao hơn.' } ] },
  { id: 't4', c: ['#7AD86F', '#14A0A0'], dk: '#087F5B', title: 'Âm lượng: volume',
    tip: '100% là to bình thường, 0% là im lặng luôn!',
    html: `<div class="blocks">${B(`set volume to ${N(100)} %`, 'sn')}${B(`change volume by ${N(-10)}`, 'sn')}${RP('volume', 'sn')}</div><ul>
      <li><b>set volume to</b>: đặt <span class="k">âm lượng</span> theo <code>%</code>.</li>
      <li><b>change volume by</b>: tăng / giảm âm lượng.</li>
      <li><b>volume</b>: khối tròn cho biết âm lượng hiện tại.</li></ul>`,
    quiz: [
      { q: 'Lệnh set volume to (0) % làm nhân vật:', o: ['Phát rất to', 'Phát nhanh hơn', 'Đổi giọng', 'Im lặng (không nghe thấy)'], a: 3, why: 'Âm lượng 0% là không có tiếng.' },
      { q: 'Âm lượng đang là 80%. Sau change volume by (−10), âm lượng là:', o: ['70%', '90%', '10%', '80%'], a: 0, why: '80 − 10 = 70%.' } ] },
  { id: 't5', c: ['#FFB14E', '#FF5E78'], dk: '#C2255C', title: 'Chương trình mẫu',
    tip: 'Nhạc nền thì dùng forever + play until done để không bị chồng tiếng!',
    html: `<div class="prog">${STK(B('when this sprite clicked', 'hat ev'), B(`start sound ${D('Meow')}`, 'sn'), B(`say ${T('Meo meo!')}`, 'lk'))}${STK(B(`when ${FLAG} clicked`, 'hat ev'), FOREVER(B(`play sound ${D('Nhạc')} until done`, 'sn')))}</div><ul>
      <li>Bấm vào mèo: <span class="k">kêu</span> và nói cùng lúc.</li><li>Nhạc nền phát <span class="k">lặp lại mãi</span>.</li></ul>`,
    quiz: [
      { q: 'Để nhạc nền lặp mãi mà không bị chồng tiếng, trong forever em dùng:', o: ['start sound (Nhạc)', 'stop all sounds', 'play sound (Nhạc) until done', 'set volume to (0) %'], a: 2, why: 'until done đợi bài hát hết rồi mới phát lại.' },
      { q: 'Vì sao mèo vừa kêu vừa nói “Meo meo!” CÙNG LÚC?', o: ['Vì dùng start sound', 'Vì dùng forever', 'Vì dùng stop all sounds', 'Vì bấm cờ xanh'], a: 0, why: 'start sound không đợi, lệnh say chạy ngay sau đó.' } ] },
];

const KEY = ['<b>start sound</b>: chạy tiếp<br><b>play … until done</b>: đợi', 'Thẻ <b>Sounds</b><br>thư viện • <b>Record</b>', '<b>stop all sounds</b><br><b>pitch</b>: cao độ',
  '<b>volume</b>: 100% to<br>0% im lặng', 'Nhạc nền: <b>forever</b><br>+ <b>play until done</b>'];
