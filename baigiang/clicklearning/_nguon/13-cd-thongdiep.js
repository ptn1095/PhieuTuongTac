/* ===== CHUYÊN ĐỀ 3: THÔNG ĐIỆP (BROADCAST) ===== */
const META = { key: 'thongdiep', num: 13, lab: 'Chuyên đề 3/3', title: 'Chuyên đề Thông điệp', big: 'CHUYÊN ĐỀ<br>THÔNG ĐIỆP',
  st2: 'Phát và nhận thông điệp — 5 nội dung • 10 câu đố • nhận giấy chứng nhận',
  hello: 'Cùng học cách cho các nhân vật “nói chuyện” với nhau nhé!',
  cert: 'CHUYÊN ĐỀ PHÁT THÔNG ĐIỆP', file: 'ThongDiep', pass: 8 };

const env = (x, y, s = 1, c = '#FFD60A') => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-38" y="-26" width="76" height="52" rx="8" fill="${c}" stroke="${O}" stroke-width="5"/><path d="M-36 -22 L0 6 L36 -22" fill="none" stroke="${O}" stroke-width="5" stroke-linejoin="round"/></g>`;
const bub = (x, y, w, t) => `<rect x="${x}" y="${y}" width="${w}" height="66" rx="22" fill="#fff" stroke="${O}" stroke-width="5"/>${txt(x + w/2, y + 43, t, 26)}`;

const ILL_T = {
  t1: () => svg(`${spr(110, 210, 0, '#FF7F11', 1.1)}${env(300, 130, 1.2)}<path d="M160 190 Q230 120 260 130" fill="none" stroke="#FF006E" stroke-width="5" stroke-dasharray="6 8"/>
    ${spr(490, 140, 180, '#2EC4B6', .9)}${spr(490, 300, 180, '#8338EC', .9)}<rect x="250" y="250" width="140" height="100" rx="12" fill="#8AD3FF" stroke="${O}" stroke-width="5"/>${txt(320, 310, 'Stage', 26)}
    <path d="M340 130 Q420 120 450 140 M340 140 Q400 220 450 290 M300 170 Q310 210 316 246" fill="none" stroke="#FF006E" stroke-width="5" stroke-dasharray="6 8"/>
    ${pillS(30, 330, 190, 44, '#FFBF00', 'Gửi cho tất cả', 22)}`),
  t2: () => svg(`<rect x="60" y="50" width="300" height="64" rx="10" fill="#FFBF00" stroke="#CC9900" stroke-width="5"/>${txt(80, 92, 'broadcast', 26, '#fff', 'start')}<rect x="220" y="62" width="128" height="40" rx="20" fill="#CC9900"/>${txt(284, 90, 'msg ▾', 22, '#fff')}
    <rect x="200" y="120" width="230" height="190" rx="14" fill="#fff" stroke="${O}" stroke-width="5"/>${txt(220, 165, 'message1', 24, O, 'start')}${txt(220, 215, 'bắt đầu', 24, O, 'start')}<rect x="206" y="240" width="218" height="56" rx="10" fill="#FFF3BF"/>${txt(220, 278, 'New message', 24, '#D9480F', 'start')}
    ${arr(520, 300, 440, 272, '#FF006E', 8)}${pillS(400, 320, 180, 44, '#FF006E', 'Đặt tên mới', 22)}`),
  t3: () => svg(`${pillS(40, 50, 260, 52, '#FFBF00', 'broadcast', 26)}${arr(170, 112, 170, 170, '#2DA44E', 8)}${pillS(40, 180, 260, 48, '#2DA44E', 'chạy tiếp NGAY', 24)}
    ${pillS(320, 50, 260, 52, '#CC9900', '… and wait', 26)}<circle cx="450" cy="180" r="44" fill="#fff" stroke="${O}" stroke-width="6"/><line x1="450" y1="180" x2="450" y2="150" stroke="${O}" stroke-width="6" stroke-linecap="round"/><line x1="450" y1="180" x2="472" y2="190" stroke="#FF006E" stroke-width="6" stroke-linecap="round"/>
    ${pillS(320, 250, 260, 48, '#E5383B', 'ĐỢI bên nhận xong', 22)}${star(40, 360, 14, '#FFD60A')}${star(560, 360, 12, '#8338EC')}`),
  t4: () => svg(`${env(110, 210, 1.3)}<path d="M170 200 L300 90 M170 210 L300 210 M170 220 L300 330" stroke="#FF006E" stroke-width="5" stroke-dasharray="6 8"/>
    ${spr(350, 90, 0, '#2EC4B6', .7)}${spr(350, 210, 0, '#8338EC', .7)}${spr(350, 330, 0, '#FF7F11', .7)}
    ${pillS(400, 66, 170, 44, '#CC9900', 'nhảy', 22)}${pillS(400, 186, 170, 44, '#CC9900', 'hát', 22)}${pillS(400, 306, 170, 44, '#CC9900', 'vỗ tay', 22)}`),
  t5: () => svg(`<rect x="30" y="30" width="540" height="360" rx="22" fill="#FFF3E0" stroke="${O}" stroke-width="6"/>
    ${spr(130, 290, 0, '#FF7F11', 1)}${spr(470, 290, 180, '#2EC4B6', 1)}
    ${bub(50, 60, 250, 'Chào Mèo Xanh!')}${bub(300, 150, 250, 'Chào bạn nhé!')}${env(300, 100, .7)}
    ${pillS(170, 340, 260, 40, '#FFBF00', 'đến lượt B', 22)}`),
};

const TOPICS = [
  { id: 't1', c: ['#FFC300', '#FF7F11'], dk: '#D9480F', title: 'Thông điệp là gì?',
    tip: 'Thông điệp giống lá thư gửi cho cả lớp – ai đang chờ thì mở ra đọc!',
    html: `<ul>
      <li><span class="k">Thông điệp</span> giúp các nhân vật và sân khấu <b>“nói chuyện”</b> với nhau.</li>
      <li>Một bên <b>phát</b> (broadcast), các bên khác <b>nhận</b> (when I receive).</li>
      <li>Thông điệp được gửi tới <span class="k">tất cả</span> nhân vật và sân khấu.</li>
      <li>Lệnh nằm trong nhóm <b>Events</b> (màu vàng).</li></ul>`,
    quiz: [
      { q: 'Thông điệp (broadcast) dùng để:', o: ['Đổi màu nhân vật', 'Các nhân vật báo hiệu cho nhau', 'Tạo biến mới', 'Vẽ hình'], a: 1, why: 'Thông điệp giúp nhân vật và sân khấu phối hợp với nhau.' },
      { q: 'Khi một nhân vật phát thông điệp, ai nhận được?', o: ['Chỉ nhân vật gần nhất', 'Chỉ sân khấu', 'Chỉ chính nó', 'Tất cả nhân vật và sân khấu'], a: 3, why: 'broadcast gửi đến mọi nhân vật và sân khấu.' } ] },
  { id: 't2', c: ['#3A8DFF', '#00C2D1'], dk: '#1864AB', title: 'Tạo thông điệp mới',
    tip: 'Đặt tên thông điệp rõ nghĩa như “bắt đầu”, “thắng” để dễ nhớ!',
    html: `<div class="blocks">${B(`broadcast ${D('message1')}`, 'ev')}</div><ul>
      <li>Bấm mũi tên <b>▾</b> trên khối broadcast.</li>
      <li>Chọn <span class="k">New message</span>, gõ tên rồi bấm <b>OK</b>.</li>
      <li>Nên đặt tên <span class="k">dễ hiểu</span>: <code>bắt đầu</code>, <code>màn 2</code>, <code>thắng</code>.</li>
      <li>Tên bên phát và bên nhận phải <b>giống nhau</b>.</li></ul>`,
    quiz: [
      { q: 'Muốn tạo thông điệp mới, trong menu ▾ của khối broadcast em chọn:', o: ['New message', 'Make a Variable', 'Rename', 'Delete'], a: 0, why: 'New message tạo thông điệp mới.' },
      { q: 'A phát “bắt đầu”, B có khối when I receive (message1). B có chạy không?', o: ['Có, chạy ngay', 'Có, sau 1 giây', 'Không, vì khác tên thông điệp', 'Chạy 2 lần'], a: 2, why: 'Chỉ nhận đúng thông điệp có cùng tên.' } ] },
  { id: 't3', c: ['#7AD86F', '#14A0A0'], dk: '#087F5B', title: 'broadcast và and wait',
    tip: 'Cần đợi người kia làm xong thì nhớ chọn “and wait” nha!',
    html: `<div class="blocks">${B(`broadcast ${D('bắt đầu')}`, 'ev')}${B(`broadcast ${D('bắt đầu')} and wait`, 'ev')}</div><table class="tb"><tr><th>Lệnh</th><th>Sau khi gửi</th></tr>
      <tr><td>broadcast</td><td>Chạy tiếp <b>ngay</b></td></tr><tr><td>… and wait</td><td><b>Đợi</b> bên nhận làm xong</td></tr></table>`,
    quiz: [
      { q: 'A muốn đợi B nói xong rồi mới nói tiếp. A dùng:', o: ['broadcast', 'broadcast and wait', 'when I receive', 'wait (1) seconds'], a: 1, why: 'and wait đợi mọi bên nhận chạy xong kịch bản.' },
      { q: 'Sau lệnh broadcast (không có and wait), lệnh tiếp theo chạy:', o: ['Sau 1 giây', 'Không bao giờ', 'Khi bấm cờ xanh', 'Ngay lập tức'], a: 3, why: 'broadcast gửi đi rồi chạy tiếp ngay.' } ] },
  { id: 't4', c: ['#4F7CFF', '#B06BFF'], dk: '#5F3DC4', title: 'Nhận thông điệp',
    tip: 'Một thông điệp – nhiều bạn cùng nhận – mỗi bạn làm một việc riêng!',
    html: `<div class="blocks">${STK(B(`when I receive ${D('bắt đầu')}`, 'hat ev'), B('show', 'lk'), B(`say ${T('Sẵn sàng!')}`, 'lk'))}</div><ul>
      <li><b>when I receive</b>: chạy khi <span class="k">nhận đúng</span> thông điệp.</li>
      <li><b>Nhiều nhân vật</b> có thể cùng nhận và làm việc khác nhau.</li>
      <li><b>Sân khấu</b> cũng nhận được, ví dụ để đổi phông nền.</li></ul>`,
    quiz: [
      { q: '3 nhân vật đều có when I receive (bắt đầu). Khi phát “bắt đầu”, có bao nhiêu nhân vật chạy?', o: ['3', '1', '0', '2'], a: 0, why: 'Mọi nhân vật có khối nhận đúng tên đều chạy.' },
      { q: 'Muốn đổi sang “Màn 2” khi nhận thông điệp, kịch bản đặt ở:', o: ['Thẻ Sounds', 'Bảng biến', 'Sân khấu (Stage) với switch backdrop', 'Thẻ Costumes'], a: 2, why: 'Sân khấu nhận thông điệp rồi đổi phông nền.' } ] },
  { id: 't5', c: ['#FF7F11', '#FF006E'], dk: '#C2255C', title: 'Ví dụ: hai bạn trò chuyện',
    tip: 'Thông điệp giúp hai nhân vật nói lần lượt, không bị nói chồng lên nhau!',
    html: `<div class="blocks">${STK(B(`when ${FLAG} clicked`, 'hat ev'), B(`say ${T('Chào Mèo Xanh!')} for ${N(2)} seconds`, 'lk'), B(`broadcast ${D('đến lượt B')}`, 'ev'))}${STK(B(`when I receive ${D('đến lượt B')}`, 'hat ev'), B(`say ${T('Chào bạn nhé!')} for ${N(2)} seconds`, 'lk'))}</div><ul>
      <li>Nhân vật A nói xong mới <b>phát</b>; nhân vật B <b>nhận</b> rồi trả lời.</li></ul>`,
    quiz: [
      { q: 'Trong ví dụ, B nói “Chào bạn nhé!” khi nào?', o: ['Khi bấm cờ xanh', 'Sau khi A nói xong và phát “đến lượt B”', 'Khi bấm vào B', 'Cùng lúc với A'], a: 1, why: 'A nói 2 giây, rồi broadcast; B nhận và trả lời.' },
      { q: 'Nếu B dùng khối when green flag clicked thay cho when I receive thì:', o: ['B không bao giờ nói', 'B nói sau A', 'A không nói', 'A và B nói cùng lúc, chồng lên nhau'], a: 3, why: 'Cả hai cùng bắt đầu khi bấm cờ xanh.' } ] },
];

const KEY = ['Nhân vật “nói chuyện”<br>gửi tới <b>tất cả</b>', '<b>New message</b><br>tên phải giống nhau', '<b>broadcast</b>: chạy tiếp<br><b>and wait</b>: đợi',
  '<b>when I receive</b><br>nhiều bên cùng nhận', 'A nói → <b>broadcast</b><br>B nhận → trả lời'];
