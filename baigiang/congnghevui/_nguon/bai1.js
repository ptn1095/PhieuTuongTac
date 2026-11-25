/* ===== BÀI 1: TỰ NHIÊN VÀ CÔNG NGHỆ ===== */
const META = { key: 'bai1', num: 1, title: 'Bài 1. Tự nhiên và công nghệ', big: 'TỰ NHIÊN VÀ<br>CÔNG NGHỆ',
  st2: 'Công nghệ 3 • 5 hoạt động • 10 câu đố • nhận giấy chứng nhận',
  hello: 'Cùng tìm xem đâu là tự nhiên, đâu là sản phẩm công nghệ nhé!',
  cert: 'CÔNG NGHỆ 3 – BÀI 1: TỰ NHIÊN VÀ CÔNG NGHỆ', file: 'Bai1', pass: 8 };

const ILL_T = {
  t1: () => svg(`${sun(300, 78, 34)}${tree(110, 250, .9)}${cat(300, 300, .8)}${fan(490, 150, .62)}
    ${pillS(170, 366, 260, 44, '#8338EC', 'Xếp thành 2 nhóm nào!', 22)}${star(40, 50, 16, '#FF006E')}${star(560, 380, 14, '#FFD60A')}`),
  t2: () => svg(`<rect x="0" y="0" width="300" height="420" fill="#EAF8E4"/><rect x="300" y="0" width="300" height="420" fill="#FFF0F6"/><line x1="300" y1="0" x2="300" y2="420" stroke="${O}" stroke-width="5" stroke-dasharray="12 10"/>
    ${pillS(40, 16, 220, 44, '#2DA44E', 'TỰ NHIÊN', 24)}${pillS(340, 16, 220, 44, '#FF006E', 'CÔNG NGHỆ', 24)}
    ${sun(70, 118, 26)}${mountain(195, 150, .7)}${tree(85, 300, .7)}${flower(220, 300, .75)}
    ${tv(332, 96, .5)}${fan(545, 180, .4)}${bike(450, 345, .7)}`),
  t3: () => svg(`${lamp(110, 262, .55)}${fan(300, 140, .45)}${fridge(440, 60, .85)}
    ${pillS(20, 318, 180, 46, '#FF7F11', 'Chiếu sáng', 24)}${pillS(212, 318, 170, 46, '#2EC4B6', 'Làm mát', 24)}${pillS(394, 318, 196, 46, '#3A8DFF', 'Giữ đồ tươi', 24)}
    ${star(560, 40, 14, '#FF006E')}${star(40, 40, 14, '#8338EC')}`),
  t4: () => svg(`${tv(60, 80, .8)}<g transform="translate(300 190) rotate(-18)"><rect x="-44" y="-30" width="88" height="60" rx="14" fill="#FFD60A" ${ST}/></g>
    ${star(250, 110, 16, '#FFD60A')}${star(90, 260, 12, '#fff')}${star(300, 270, 12, '#FF006E')}
    ${tick(400, 92, .7)}${pillS(430, 70, 160, 46, '#2DA44E', 'Lau sạch', 24)}${tick(400, 182, .7)}${pillS(430, 160, 160, 46, '#1982C4', 'Nhẹ nhàng', 24)}${tick(400, 272, .7)}${pillS(430, 250, 160, 46, '#FF7F11', 'Cất gọn', 24)}
    ${pillS(150, 350, 300, 46, '#8338EC', 'Giữ gìn đồ dùng', 24)}`),
  t5: () => svg(`${sun(100, 120, 28)}${tree(210, 135, .5)}${tv(345, 98, .3)}${radio(462, 128, .33)}
    ${basket(40, 196, 240, '#8AC926', 'TỰ NHIÊN')}${basket(320, 196, 240, '#FF5DA2', 'CÔNG NGHỆ')}
    ${star(300, 50, 16, '#FFD60A')}${star(570, 40, 12, '#FF006E')}`),
};

const TOPICS = [
  { id: 't1', name: 'Ai tinh mắt?', tip: 'Nhìn kĩ tranh: thứ nào có sẵn, thứ nào do con người làm ra?',
    html: S4('Quan sát tranh: Mặt Trời, cây, con mèo, cái quạt.',
      'Chia các vật thành <span class="k">2 nhóm</span> theo ý em.',
      'Nói với bạn: vì sao em xếp như vậy?',
      'Có thứ <b>có sẵn</b>, có thứ do <b>con người làm ra</b>.'),
    quiz: [
      { q: 'Vật nào do con người làm ra?', o: ['Con mèo', 'Cái quạt điện', 'Cây xoài', 'Ông Mặt Trời'], a: 1, why: 'Quạt điện do con người làm ra để làm mát.' },
      { q: 'Vật nào có sẵn trong tự nhiên?', o: ['Ti vi', 'Xe đạp', 'Dòng sông', 'Đèn học'], a: 2, why: 'Dòng sông có sẵn trong tự nhiên, không do con người làm ra.' } ] },
  { id: 't2', name: 'Tự nhiên và công nghệ', tip: 'Có sẵn là tự nhiên – con người làm ra là sản phẩm công nghệ!',
    html: S4('Tìm hiểu: thế nào là tự nhiên, thế nào là công nghệ?',
      '<span class="k">Đối tượng tự nhiên</span>: có sẵn – cây, núi, sông, con vật.',
      '<span class="k">Sản phẩm công nghệ</span>: do người làm ra – ti vi, quạt, xe đạp.',
      'Con người tạo ra sản phẩm công nghệ để <b>phục vụ cuộc sống</b>.'),
    quiz: [
      { q: 'Sản phẩm công nghệ là những thứ:', o: ['Có sẵn trong tự nhiên', 'Tự mọc lên', 'Chỉ có ở trong rừng', 'Do con người làm ra'], a: 3, why: 'Sản phẩm công nghệ do con người tạo ra.' },
      { q: 'Nhóm nào toàn là sản phẩm công nghệ?', o: ['Bút chì, quạt, ti vi', 'Cây, hoa, chim', 'Núi, sông, mây', 'Con gà, bút, cây'], a: 0, why: 'Bút chì, quạt, ti vi đều do con người làm ra.' } ] },
  { id: 't3', name: 'Sản phẩm công nghệ giúp gì?', tip: 'Mỗi sản phẩm công nghệ giúp một việc – em nối thử xem!',
    html: S4('Nối mỗi sản phẩm với việc nó giúp em.',
      '<b>Đèn</b> chiếu sáng, <b>quạt</b> làm mát, <b>tủ lạnh</b> giữ thức ăn tươi.',
      'Kể thêm một sản phẩm công nghệ ở nhà và công dụng.',
      'Sản phẩm công nghệ giúp cuộc sống <span class="k">tiện lợi</span> hơn.'),
    quiz: [
      { q: 'Tủ lạnh giúp gia đình em:', o: ['Chiếu sáng căn phòng', 'Giữ thực phẩm tươi lâu', 'Làm mát cả nhà', 'Nghe tin tức'], a: 1, why: 'Tủ lạnh giữ lạnh nên thực phẩm tươi lâu hơn.' },
      { q: 'Muốn nghe tin tức, ca nhạc, em dùng:', o: ['Tủ lạnh', 'Nồi cơm điện', 'Máy thu thanh (cái đài)', 'Bàn là'], a: 2, why: 'Máy thu thanh giúp em nghe tin tức, ca nhạc.' } ] },
  { id: 't4', name: 'Giữ gìn đồ dùng', tip: 'Đồ dùng được giữ gìn cẩn thận sẽ bền và đẹp lâu!',
    html: S4('Em làm gì để đồ dùng trong nhà bền, đẹp?',
      'Dùng <b>đúng cách</b>, <b>nhẹ nhàng</b>; lau chùi <b>sạch sẽ</b>.',
      'Kể việc em đã làm để giữ gìn đồ dùng.',
      'Giữ gìn đồ dùng là <span class="k">tiết kiệm</span> và văn minh.'),
    quiz: [
      { q: 'Việc làm nào giúp giữ gìn đồ dùng trong nhà?', o: ['Ném điều khiển ti vi', 'Vẽ bậy lên tủ lạnh', 'Để quạt ngoài mưa', 'Lau sạch, dùng nhẹ nhàng'], a: 3, why: 'Lau sạch và dùng nhẹ nhàng giúp đồ dùng bền lâu.' },
      { q: 'Bạn Nam dùng xong bút để lung tung. Em khuyên Nam:', o: ['Cứ để vậy', 'Cất bút gọn vào hộp', 'Vứt bút đi', 'Bẻ đôi chiếc bút'], a: 1, why: 'Cất gọn gàng giúp bút không hỏng, dễ tìm.' } ] },
  { id: 't5', name: 'Phân loại nhanh', tip: 'Trò chơi tiếp sức: xếp thật nhanh vào hai giỏ nào!',
    html: S4('Xếp nhanh vào 2 giỏ: <b>Tự nhiên</b> – <b>Công nghệ</b>.',
      'Mặt Trời, cây lúa → <b>tự nhiên</b>; nồi cơm, máy tính → <b>công nghệ</b>.',
      'Đổi phiếu, chấm chéo cho bạn.',
      'Về nhà: kể tên <span class="k">5 sản phẩm công nghệ</span> trong nhà.'),
    quiz: [
      { q: 'Ông Mặt Trời thuộc nhóm nào?', o: ['Sản phẩm công nghệ', 'Đồ dùng học tập', 'Đối tượng tự nhiên', 'Đồ chơi'], a: 2, why: 'Mặt Trời có sẵn trong tự nhiên.' },
      { q: 'Chiếc máy tính thuộc nhóm nào?', o: ['Sản phẩm công nghệ', 'Đối tượng tự nhiên', 'Con vật', 'Cây cối'], a: 0, why: 'Máy tính do con người làm ra – là sản phẩm công nghệ.' } ] },
];

const KEY = [
  'Có thứ <b>có sẵn</b>,<br>có thứ do <b>người làm ra</b>.',
  '<b>Tự nhiên</b>: có sẵn.<br><b>Công nghệ</b>: người làm ra.',
  'Sản phẩm công nghệ giúp cuộc sống <b>tiện lợi</b>.',
  'Dùng <b>đúng cách</b>, nhẹ nhàng, lau <b>sạch</b>.',
  'Phân loại đúng: <b>tự nhiên</b> hay <b>công nghệ</b>.',
];
