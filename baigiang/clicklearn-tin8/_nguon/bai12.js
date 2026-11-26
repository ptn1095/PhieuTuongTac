/* ===== BÀI 12: THUẬT TOÁN, CHƯƠNG TRÌNH MÁY TÍNH ===== */
const META = { key: 'bai12', num: 12, theme: 'samac', title: 'Bài 12. Thuật toán, chương trình máy tính', big: 'Thuật toán,<br>chương trình máy tính',
  st2: 'Chủ đề 5 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Dẫn lạc đà robot băng qua sa mạc bằng thuật toán nào!',
  cert: 'Tin học 8 – Bài 12. Thuật toán, chương trình máy tính', file: 'Tin8_Bai12', pass: 8 };

const SC = { ev: '#FFBF00', mo: '#4C97FF', lo: '#9966FF', ct: '#FFAB19', va: '#FF8C1A', op: '#59C059' };
const ILL_T = {
  t1: () => svg(`${[0, 1, 2, 3].map(r => [0, 1, 2, 3, 4].map(c => `<rect x="${40 + c*80}" y="${30 + r*70}" width="80" height="70" fill="${(r + c) % 2 ? '#FCE0B8' : '#FFF3D6'}" stroke="#D9A86B" stroke-width="2"/>`).join('')).join('')}
    <path d="M80 240 H240 V110" fill="none" stroke="#E5383B" stroke-width="8" stroke-dasharray="4 14" stroke-linecap="round"/>${camel(80, 262, .5)}<ellipse cx="240" cy="90" rx="34" ry="16" fill="#3A8DFF" stroke="${O}" stroke-width="4"/>${tree(240, 60, .4)}
    ${vflow([['#1982C4', 'Tiến 2 ô'], ['#FF7F11', 'Rẽ trái'], ['#1982C4', 'Tiến 2 ô']], 450, 40, 130, 80, 20)}${pillS(40, 340, 520, 52, '#2DA44E', 'Dãy lệnh rõ ràng, đúng thứ tự', 24)}`),
  t2: () => svg(`${vflow([['#2DA44E', 'Bắt đầu'], ['#1982C4', 'Nhập dài, rộng'], ['#FF7F11', 'S = dài × rộng'], ['#8338EC', 'In S, kết thúc']], 40, 20, 290, 100, 22)}
    ${pillS(370, 60, 200, 50, '#1982C4', 'Đầu vào', 24)}${pillS(370, 300, 200, 50, '#8338EC', 'Đầu ra', 24)}${arr(470, 120, 470, 290, O, 6)}`),
  t3: () => svg(`${paper(30, 60, 200, 220, `${txt(130, 110, 'Thuật toán', 24, '#FF7F11')}${['Bước 1', 'Bước 2', 'Bước 3'].map((t, i) => txt(60, 160 + i*40, t, 20, O, 'start')).join('')}`)}${arr(240, 170, 300, 170, O, 8)}
    ${laptop(320, 90, 1, `<text x="16" y="44" font-size="20" fill="${O}" ${F}>d = 5</text><text x="16" y="80" font-size="20" fill="${O}" ${F}>r = 3</text><text x="16" y="116" font-size="20" fill="#8338EC" ${F}>in(d * r)</text>`)}
    ${pillS(60, 330, 480, 52, '#1982C4', 'Ngôn ngữ lập trình', 26)}`),
  t4: () => svg(`${sblock(60, 50, 330, SC.ev, 'khi bấm vào lá cờ ⚑', 22)}${sblock(60, 108, 300, SC.mo, 'di chuyển 10 bước', 22)}${sblock(60, 166, 330, SC.lo, 'nói Xin chào! trong 2 giây', 20)}
    ${cat(470, 200, 1)}${bubble(410, 40, 160, 60, '#fff', 'Xin chào!', 22)}${pillS(60, 320, 480, 52, '#FF7F11', 'Kéo thả khối lệnh', 26)}`),
  t5: () => svg(`${hflow([['#E5383B', 'Bài toán'], ['#FF7F11', 'Thuật toán'], ['#1982C4', 'Chương trình']], 70, 21)}${laptop(180, 170, .7)}${tick(470, 240, 1.1)}
    ${pillS(60, 340, 480, 50, '#2DA44E', 'Máy tính thực hiện', 26)}`),
};

const TOPICS = [
  { id: 't1', name: 'Ra lệnh cho robot', tip: 'Lạc đà robot chỉ hiểu lệnh rõ ràng thôi – đừng nói vòng vo nhé!',
    html: S4('Dẫn <b>lạc đà robot</b> đến ốc đảo bằng các lệnh: tiến, rẽ trái, rẽ phải.',
      'Mỗi lệnh phải <b>rõ ràng</b>, đúng <b>thứ tự</b> thì robot mới đến đích.',
      'Đổi chỗ hai lệnh thì robot còn đến đúng nơi không?',
      'Dãy chỉ dẫn rõ ràng để giải bài toán là <span class="k">thuật toán</span>.'),
    quiz: [
      { q: 'Thuật toán là:', o: ['Một loại máy tính', 'Dãy chỉ dẫn rõ ràng giải bài toán', 'Một phần mềm vẽ', 'Một trang web'], a: 1, why: 'Thuật toán là dãy các chỉ dẫn rõ ràng, có thứ tự.' },
      { q: 'Nếu đổi thứ tự các bước của thuật toán thì:', o: ['Kết quả có thể sai', 'Luôn đúng', 'Máy chạy nhanh hơn', 'Không ảnh hưởng gì'], a: 0, why: 'Thứ tự các bước quyết định kết quả.' } ] },
  { id: 't2', name: 'Mô tả thuật toán', tip: 'Đầu vào là “hành lí”, đầu ra là “kho báu” cuối chặng!',
    html: S4('Mô tả thuật toán <b>tính diện tích hình chữ nhật</b>.',
      'Mô tả bằng <b>ngôn ngữ tự nhiên</b> (liệt kê các bước) hoặc <b>sơ đồ khối</b>.',
      'Đầu vào của bài toán là gì? Đầu ra là gì?',
      'Thuật toán có <span class="k">đầu vào</span> và <span class="k">đầu ra</span>.'),
    quiz: [
      { q: 'Thuật toán tính diện tích HCN có đầu vào là:', o: ['Diện tích', 'Chu vi', 'Chiều dài và chiều rộng', 'Màu của hình'], a: 2, why: 'Cần biết chiều dài, chiều rộng để tính diện tích.' },
      { q: 'Cách nào dùng để mô tả thuật toán?', o: ['Hình vẽ tự do', 'Một bài hát', 'Ảnh chụp', 'Ngôn ngữ tự nhiên, sơ đồ khối'], a: 3, why: 'Thuật toán được mô tả bằng lời hoặc bằng sơ đồ khối.' } ] },
  { id: 't3', name: 'Chương trình máy tính', tip: 'Máy tính không hiểu tiếng Việt – cần “phiên dịch” bằng ngôn ngữ lập trình!',
    html: S4('Máy tính có hiểu tiếng Việt như con người không?',
      '<b>Chương trình</b> là thuật toán viết bằng <b>ngôn ngữ lập trình</b> để máy thực hiện.',
      'Kể tên ngôn ngữ lập trình em biết (Scratch, Python…).',
      'Thuật toán → <span class="k">chương trình</span> → máy tính thực hiện.'),
    quiz: [
      { q: 'Chương trình máy tính là:', o: ['Thuật toán viết bằng ngôn ngữ lập trình', 'Một bức tranh', 'Một bài báo', 'Một bàn phím'], a: 0, why: 'Chương trình mô tả thuật toán để máy tính hiểu và làm theo.' },
      { q: 'Scratch là:', o: ['Hệ điều hành', 'Ngôn ngữ lập trình trực quan', 'Trình duyệt web', 'Phần mềm bảng tính'], a: 1, why: 'Scratch là ngôn ngữ lập trình trực quan, kéo thả khối lệnh.' } ] },
  { id: 't4', name: 'Lập trình kéo thả với Scratch', tip: 'Ghép khối lệnh như xếp gạch – nhân vật chạy ngay!',
    html: S4('Cho nhân vật <b>đi 10 bước rồi nói “Xin chào!”</b>.',
      'Kéo thả <b>khối lệnh</b>: khi bấm lá cờ, <code>di chuyển 10 bước</code>, <code>nói</code>.',
      'Các khối lệnh được thực hiện theo thứ tự nào?',
      'Scratch: <span class="k">kéo thả</span> khối lệnh thành chương trình.'),
    quiz: [
      { q: 'Trong Scratch, chương trình được tạo bằng cách:', o: ['Gõ mã thật dài', 'Vẽ tay', 'Kéo thả, ghép các khối lệnh', 'Chụp ảnh màn hình'], a: 2, why: 'Scratch là lập trình trực quan bằng khối lệnh.' },
      { q: 'Khối “di chuyển 10 bước” làm nhân vật:', o: ['Đổi màu', 'Nói xin chào', 'Phát nhạc', 'Di chuyển 10 bước'], a: 3, why: 'Khối chuyển động (Motion) di chuyển nhân vật.' } ] },
  { id: 't5', name: 'Tổng kết bài học', tip: 'Thuật toán là bản đồ, chương trình là chuyến đi!',
    html: S4('Nêu quan hệ giữa <b>bài toán, thuật toán, chương trình</b>.',
      'Bài toán → tìm <b>thuật toán</b> → viết <b>chương trình</b> → máy tính chạy.',
      'Vì sao cần có thuật toán trước khi lập trình?',
      'Thuật toán là <span class="k">bản đồ</span> để viết chương trình.'),
    quiz: [
      { q: 'Thứ tự đúng để máy tính giải bài toán:', o: ['Chương trình → thuật toán', 'Bài toán → thuật toán → chương trình', 'Thuật toán → bài toán', 'Chương trình → bài toán'], a: 1, why: 'Hiểu bài toán, tìm thuật toán rồi viết chương trình.' },
      { q: 'Máy tính thực hiện được thuật toán khi:', o: ['Thuật toán được viết thành chương trình', 'Thuật toán viết trên giấy', 'Thuật toán được đọc to', 'Thuật toán được tô màu'], a: 0, why: 'Máy tính chỉ thực hiện được chương trình.' } ] },
];

const KEY = [
  '<b>Thuật toán</b>: dãy<br>chỉ dẫn rõ ràng.',
  'Có <b>đầu vào</b>,<br><b>đầu ra</b>.',
  '<b>Chương trình</b>:<br>viết bằng ngôn<br>ngữ lập trình.',
  'Scratch:<br><b>kéo thả</b> khối.',
  'Bài toán → thuật<br>toán → <b>chương trình</b>.',
];
