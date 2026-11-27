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
    html: S4Q(['Đố: "Hoa gì nở giữa mùa hè, trong đầm mà vẫn <b>thơm ghê lạ thường</b>?"', ''],
      ['Đó là hoa gì?', '<b>Hoa sen</b>.'],
      ['Em còn biết những loài hoa nào khác?', 'Hoa hồng, cúc, đào, mai, ly…'],
      ['Mỗi loài hoa có <b>đặc điểm riêng</b>.', 'Nhận biết qua <b>màu sắc, hình dạng</b>.', 'Hoa sen là <span class="k">quốc hoa</span> Việt Nam.']),
    quiz: [
      { q: 'Hoa gì mọc trong đầm, nở vào mùa hè, rất thơm?', o: ['Hoa đào', 'Hoa sen', 'Hoa mai', 'Hoa cúc'], a: 1, why: 'Hoa sen mọc trong đầm, nở vào mùa hè, hương rất thơm.' },
      { q: 'Hoa nào thường nở vào dịp Tết ở miền Bắc?', o: ['Hoa sen', 'Hoa hướng dương', 'Hoa đào', 'Hoa súng'], a: 2, why: 'Hoa đào màu hồng nở vào mùa xuân, dịp Tết ở miền Bắc.' } ] },
  { id: 't2', name: 'Một số loại hoa', tip: 'Nhìn màu sắc, hình dạng cánh hoa là đoán ra ngay!',
    html: S4Q(['Quan sát tranh: <b>tên, màu, hình dạng</b> mỗi loài hoa.', ''],
      ['Hoa hồng và hoa cúc có đặc điểm gì?', 'Hồng: nhiều màu, nhiều lớp cánh, thân có gai; cúc: nhiều cánh nhỏ.'],
      ['Hoa nào nở dịp Tết?', 'Hoa đào hồng (miền Bắc), hoa mai vàng (miền Nam).'],
      ['<b>Hoa hồng</b>: nhiều lớp cánh, có gai.', '<b>Hoa cúc</b>: nhiều cánh nhỏ.', '<b>Đào, mai</b>: <span class="k">hoa ngày Tết</span>.']),
    quiz: [
      { q: 'Loài hoa nào thân có gai, cánh xếp nhiều lớp?', o: ['Hoa hồng', 'Hoa cúc', 'Hoa mai', 'Hoa sen'], a: 0, why: 'Hoa hồng có nhiều lớp cánh, thân cây có gai.' },
      { q: 'Hoa mai ngày Tết ở miền Nam thường có màu gì?', o: ['Tím', 'Đỏ', 'Xanh', 'Vàng'], a: 3, why: 'Hoa mai ngày Tết có màu vàng tươi.' } ] },
  { id: 't3', name: 'Một số cây cảnh', tip: 'Cây cảnh đẹp nhờ dáng cây và màu lá!',
    html: S4Q(['Quan sát tranh một số <b>cây cảnh</b>.', ''],
      ['Cây lưỡi hổ có đặc điểm gì?', 'Lá dài, dày, cứng, mép lá có viền vàng.'],
      ['Cây kim tiền, hoa giấy có gì đặc biệt?', 'Kim tiền: lá xanh bóng; hoa giấy: hoa nhiều màu, mỏng như giấy.'],
      ['<b>Lưỡi hổ</b>: lá dài, viền vàng.', '<b>Kim tiền</b>: lá xanh bóng.', 'Cây cảnh đẹp nhờ <span class="k">dáng, lá, hoa</span>.']),
    quiz: [
      { q: 'Cây nào có lá dài, cứng, mép lá có viền vàng?', o: ['Cây kim tiền', 'Cây lưỡi hổ', 'Cây hoa giấy', 'Cây đào'], a: 1, why: 'Cây lưỡi hổ có lá dài, dày, cứng, mép lá viền vàng.' },
      { q: 'Cây cảnh trồng trong nhà thường đẹp nhờ:', o: ['Rễ cây to', 'Có nhiều gai', 'Dáng cây, màu lá', 'Quả thật to'], a: 2, why: 'Người ta trồng cây cảnh để ngắm dáng cây, màu lá.' } ] },
  { id: 't4', name: 'Chọn hoa, cây cảnh', tip: 'Mỗi nơi hợp với một loại cây khác nhau đấy!',
    html: S4Q(['Chọn hoa, cây cảnh <b>hợp với từng nơi</b>.', ''],
      ['Bàn học nên đặt cây gì?', 'Cây nhỏ, dễ chăm: lưỡi hổ, kim tiền.'],
      ['Ban công nhiều nắng nên trồng gì?', 'Hoa hồng, hoa cúc, hoa giấy.'],
      ['Bàn học: cây <b>nhỏ, dễ chăm</b>.', 'Nơi nắng: cây <b>ưa sáng</b>.', 'Chọn cây <span class="k">hợp nơi trồng</span>.']),
    quiz: [
      { q: 'Cây nào phù hợp đặt trên bàn học?', o: ['Cây đào to', 'Cây bàng', 'Cây lưỡi hổ nhỏ', 'Cây dừa'], a: 2, why: 'Cây lưỡi hổ nhỏ, dễ chăm, đặt vừa trên bàn học.' },
      { q: 'Ngày Tết ở miền Bắc, nhiều nhà mua cành hoa gì?', o: ['Hoa đào', 'Hoa sen', 'Hoa súng', 'Hoa hướng dương'], a: 0, why: 'Cành đào là hoa quen thuộc ngày Tết ở miền Bắc.' } ] },
  { id: 't5', name: 'Ai nhanh tay hơn?', tip: 'Thi kể tên hoa, cây cảnh xem ai nhớ nhiều nhất!',
    html: S4Q(['Thi kể tên hoa, cây cảnh theo <b>đặc điểm</b>.', ''],
      ['Kể tên các loài hoa đã học.', 'Hồng, cúc, đào, mai, sen…'],
      ['Kể tên các cây cảnh đã học.', 'Lưỡi hổ, kim tiền, hoa giấy…'],
      ['Biết tên nhiều <b>loài hoa</b>.', 'Biết tên nhiều <b>cây cảnh</b>.', 'Về nhà tìm <span class="k">1 loài hoa</span> trong vườn.']),
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
