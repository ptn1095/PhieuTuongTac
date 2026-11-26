/* ===== BÀI 2: MỘT SỐ LOẠI HOA, CÂY CẢNH PHỔ BIẾN ===== */
const META = { key: 'bai2', num: 2, title: 'Bài 2. Một số loại hoa, cây cảnh phổ biến', big: 'HOA, CÂY CẢNH<br>PHỔ BIẾN',
  st2: 'Công nghệ 4 • 5 hoạt động • 10 câu đố • nhận giấy chứng nhận',
  hello: 'Cùng làm quen với những loài hoa, cây cảnh quen thuộc nhé!',
  cert: 'CÔNG NGHỆ 4 – BÀI 2: HOA, CÂY CẢNH PHỔ BIẾN', file: 'CN4_Bai2', pass: 8 };

const desk = (x, y) => `<rect x="${x}" y="${y}" width="250" height="22" rx="8" fill="#C68B59" ${ST}/><rect x="${x + 16}" y="${y + 22}" width="20" height="90" fill="#C68B59" ${ST}/><rect x="${x + 214}" y="${y + 22}" width="20" height="90" fill="#C68B59" ${ST}/>`;

const ILL_T = {
  t1: () => svg(`${lotus(170, 230, 1.35)}${ball(440, 170, 72, '#8338EC', '?', 96)}
    ${pillS(300, 320, 270, 46, '#FF006E', 'Hoa gì đây nhỉ?', 24)}${star(560, 60, 16, '#FFD60A')}${star(60, 60, 12, '#FF006E')}${star(320, 70, 12, '#FFD60A')}`),
  t2: () => svg(`${rose(80, 120, 1, '#E5383B', 140)}${daisy(220, 120, 1, '#FFD60A', '#FF7F11', 140)}${G(370, 120, 1, stemL(140, '#8D5524'))}${blossom(370, 120, 38, '#FF8FAB', '#E5383B')}${G(510, 120, 1, stemL(140, '#8D5524'))}${blossom(510, 120, 38, '#FFD60A', '#FF7F11')}
    ${pillS(20, 300, 120, 44, '#E5383B', 'Hồng', 24)}${pillS(160, 300, 120, 44, '#FF7F11', 'Cúc', 24)}${pillS(310, 300, 120, 44, '#FF5DA2', 'Đào', 24)}${pillS(450, 300, 120, 44, '#E09F00', 'Mai', 24)}
    ${star(300, 390, 14, '#FFD60A')}${star(150, 40, 12, '#FF006E')}${star(440, 40, 12, '#FFD60A')}`),
  t3: () => svg(`${pot(120, 250, .8, '#1982C4', snake(0, -12, 1))}${pot(300, 250, .8, '#E76F51', kimtien(0, -12, 1))}${pot(480, 250, .8, '#2EC4B6', bush(0, -12, 1))}
    ${pillS(40, 360, 160, 42, '#2DA44E', 'Lưỡi hổ', 22)}${pillS(220, 360, 160, 42, '#1982C4', 'Kim tiền', 22)}${pillS(400, 360, 160, 42, '#FF006E', 'Hoa giấy', 22)}`),
  t4: () => svg(`${desk(30, 250)}${book(110, 236, .6)}${pot(220, 205, .4, '#FF006E', snake(0, -12, 1))}${sun(540, 60, 28)}
    ${pot(380, 260, .6, '#E76F51', rose(0, -120, .9, '#E5383B', 120))}${pot(500, 260, .6, '#8338EC', daisy(0, -120, .9, '#FFD60A', '#FF7F11', 120))}
    ${pillS(40, 365, 220, 44, '#1982C4', 'Bàn học', 24)}${pillS(320, 365, 250, 44, '#FF7F11', 'Ban công nắng', 24)}`),
  t5: () => svg(`${rose(90, 100, .85)}${daisy(230, 100, .85, '#fff', '#FFC300')}${blossom(370, 100, 34, '#FF8FAB', '#E5383B')}${blossom(510, 100, 34, '#FFD60A', '#FF7F11')}
    ${pot(150, 300, .55, '#1982C4', snake(0, -12, 1))}${pot(300, 300, .55, '#E76F51', kimtien(0, -12, 1))}${pot(450, 300, .55, '#2EC4B6', bush(0, -12, 1))}
    ${star(40, 200, 14, '#FFD60A')}${star(565, 210, 14, '#FF006E')}`),
};

const TOPICS = [
  { id: 't1', name: 'Đoán tên loài hoa', tip: 'Nghe câu đố thật kĩ rồi đoán tên hoa nhé!',
    html: S4('Nghe câu đố, đoán tên loài hoa.',
      '“Hoa gì nở giữa mùa hè, trong đầm mà vẫn thơm ghê lạ thường?”',
      'Em còn biết những loài hoa nào khác?',
      'Mỗi loài hoa có <span class="k">đặc điểm</span> riêng.'),
    quiz: [
      { q: 'Hoa gì mọc trong đầm, nở vào mùa hè, rất thơm?', o: ['Hoa đào', 'Hoa sen', 'Hoa mai', 'Hoa cúc'], a: 1, why: 'Hoa sen mọc trong đầm, nở vào mùa hè, hương rất thơm.' },
      { q: 'Hoa nào thường nở vào dịp Tết ở miền Bắc?', o: ['Hoa sen', 'Hoa hướng dương', 'Hoa đào', 'Hoa súng'], a: 2, why: 'Hoa đào màu hồng nở vào mùa xuân, dịp Tết ở miền Bắc.' } ] },
  { id: 't2', name: 'Một số loại hoa', tip: 'Nhìn màu sắc, hình dạng cánh hoa là đoán ra ngay!',
    html: S4('Quan sát tranh: tên, màu, hình dạng mỗi loài hoa.',
      '<b>Hoa hồng</b>: nhiều màu, nhiều lớp cánh, thân có <span class="k">gai</span>; <b>hoa cúc</b>: nhiều cánh nhỏ.',
      '<b>Hoa đào</b> màu hồng (miền Bắc), <b>hoa mai</b> màu vàng (miền Nam) nở dịp Tết.',
      'Nhận biết hoa qua <span class="k">màu sắc, hình dạng</span>.'),
    quiz: [
      { q: 'Loài hoa nào thân có gai, cánh xếp nhiều lớp?', o: ['Hoa hồng', 'Hoa cúc', 'Hoa mai', 'Hoa sen'], a: 0, why: 'Hoa hồng có nhiều lớp cánh, thân cây có gai.' },
      { q: 'Hoa mai ngày Tết ở miền Nam thường có màu gì?', o: ['Tím', 'Đỏ', 'Xanh', 'Vàng'], a: 3, why: 'Hoa mai ngày Tết có màu vàng tươi.' } ] },
  { id: 't3', name: 'Một số cây cảnh', tip: 'Cây cảnh đẹp nhờ dáng cây và màu lá!',
    html: S4('Quan sát tranh một số cây cảnh.',
      '<b>Cây lưỡi hổ</b>: lá dài, dày, cứng, mép lá có <span class="k">viền vàng</span>.',
      '<b>Cây kim tiền</b>: lá xanh bóng; <b>cây hoa giấy</b>: hoa nhiều màu, mỏng như giấy.',
      'Cây cảnh đẹp nhờ <span class="k">dáng cây, màu lá</span>, màu hoa.'),
    quiz: [
      { q: 'Cây nào có lá dài, cứng, mép lá có viền vàng?', o: ['Cây kim tiền', 'Cây lưỡi hổ', 'Cây hoa giấy', 'Cây đào'], a: 1, why: 'Cây lưỡi hổ có lá dài, dày, cứng, mép lá viền vàng.' },
      { q: 'Cây cảnh trồng trong nhà thường đẹp nhờ:', o: ['Rễ cây to', 'Có nhiều gai', 'Dáng cây, màu lá', 'Quả thật to'], a: 2, why: 'Người ta trồng cây cảnh để ngắm dáng cây, màu lá.' } ] },
  { id: 't4', name: 'Chọn hoa, cây cảnh', tip: 'Mỗi nơi hợp với một loại cây khác nhau đấy!',
    html: S4('Chọn hoa, cây cảnh hợp với từng nơi.',
      'Bàn học: cây nhỏ, <b>dễ chăm</b> như lưỡi hổ, kim tiền.',
      'Ban công nhiều nắng: hoa <b>hồng</b>, hoa <b>cúc</b>, hoa <b>giấy</b>.',
      'Chọn cây <span class="k">phù hợp</span> nơi trồng và sở thích.'),
    quiz: [
      { q: 'Cây nào phù hợp đặt trên bàn học?', o: ['Cây đào to', 'Cây bàng', 'Cây lưỡi hổ nhỏ', 'Cây dừa'], a: 2, why: 'Cây lưỡi hổ nhỏ, dễ chăm, đặt vừa trên bàn học.' },
      { q: 'Ngày Tết ở miền Bắc, nhiều nhà mua cành hoa gì?', o: ['Hoa đào', 'Hoa sen', 'Hoa súng', 'Hoa hướng dương'], a: 0, why: 'Cành đào là hoa quen thuộc ngày Tết ở miền Bắc.' } ] },
  { id: 't5', name: 'Ai nhanh tay hơn?', tip: 'Thi kể tên hoa, cây cảnh xem ai nhớ nhiều nhất!',
    html: S4('Thi kể tên hoa, cây cảnh theo đặc điểm.',
      'Hoa: <b>hồng, cúc, đào, mai, sen</b>…',
      'Cây cảnh: <b>lưỡi hổ, kim tiền, hoa giấy</b>…',
      'Về nhà: tìm tên <span class="k">1 loài hoa</span> trong vườn nhà em.'),
    quiz: [
      { q: 'Hoa cúc có đặc điểm nào?', o: ['Thân có nhiều gai', 'Mọc dưới nước', 'Chỉ có 2 cánh', 'Nhiều cánh nhỏ, xếp tỏa tròn'], a: 3, why: 'Hoa cúc có rất nhiều cánh nhỏ xếp tỏa tròn quanh nhụy.' },
      { q: 'Cây nào là cây cảnh thường trồng trong chậu ở nhà?', o: ['Cây lúa', 'Cây kim tiền', 'Cây ngô', 'Cây sắn'], a: 1, why: 'Kim tiền là cây cảnh, lá xanh bóng, hay trồng trong chậu.' } ] },
];

const KEY = [
  'Mỗi loài hoa có<br><b>đặc điểm</b> riêng.',
  '<b>Hồng</b> có gai, <b>cúc</b> nhiều cánh,<br><b>đào</b> hồng, <b>mai</b> vàng.',
  '<b>Lưỡi hổ</b>, <b>kim tiền</b>,<br><b>hoa giấy</b>.',
  'Chọn cây <b>phù hợp</b><br>nơi trồng.',
  'Nhận biết qua <b>màu sắc,<br>hình dạng</b>.',
];
