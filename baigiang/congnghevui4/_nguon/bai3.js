/* ===== BÀI 3: VẬT LIỆU VÀ DỤNG CỤ TRỒNG HOA, CÂY CẢNH TRONG CHẬU ===== */
const META = { key: 'bai3', num: 3, title: 'Bài 3. Vật liệu và dụng cụ trồng hoa, cây cảnh trong chậu', big: 'VẬT LIỆU<br>VÀ DỤNG CỤ',
  st2: 'Công nghệ 4 • 5 hoạt động • 10 câu đố • nhận giấy chứng nhận',
  hello: 'Cùng chuẩn bị đồ nghề để trồng cây trong chậu nhé!',
  cert: 'CÔNG NGHỆ 4 – BÀI 3: VẬT LIỆU VÀ DỤNG CỤ TRỒNG CÂY', file: 'CN4_Bai3', pass: 8 };

const bottle = (x, y, s = 1) => G(x, y, s, `${sprout(0, -40, 1.1)}<path d="M-56 -50 L56 -50 L56 60 Q56 76 40 76 L-40 76 Q-56 76 -56 60Z" fill="#D0EBFF" ${ST}/><rect x="-56" y="-46" width="112" height="40" fill="#8D5524" opacity=".85"/><path d="M-56 -50 L56 -50" stroke="${O}" stroke-width="6"/><rect x="-40" y="0" width="12" height="60" rx="6" fill="#fff" opacity=".7"/>`);

const ILL_T = {
  t1: () => svg(`${pillS(140, 24, 320, 46, '#8338EC', 'Cần chuẩn bị gì?', 24)}${pot(130, 240, 1, '#E76F51')}${bag(320, 250, .8, '#8D5524', 'Đất', 26)}${can(460, 270, .62, '#1982C4')}
    ${ball(130, 160, 40, '#FF006E', '?', 50)}${star(560, 380, 14, '#FFD60A')}${star(40, 380, 12, '#FF006E')}`),
  t2: () => svg(`${pot(110, 200, .9, '#E76F51')}${drop(95, 320)}${drop(125, 340)}${pillS(10, 360, 200, 42, '#1982C4', 'Lỗ thoát nước', 20)}
    ${bag(300, 210, .72, '#8D5524', 'Đất', 26)}${bag(420, 210, .72, '#2DA44E', 'Phân', 26)}${bag(540, 210, .72, '#FF8FAB', 'Hạt', 26)}
    ${pillS(290, 320, 270, 44, '#FF7F11', 'Vật liệu trồng cây', 22)}${star(220, 60, 12, '#FFD60A')}`),
  t3: () => svg(`${trowel(80, 220, .85, -12)}${rake(195, 220, .85, 12)}${can(320, 240, .6, '#1982C4')}${scissors(445, 100, .85)}${glove(520, 250, .7)}
    ${pillS(25, 340, 110, 42, '#FF7F11', 'Xẻng', 22)}${pillS(145, 340, 100, 42, '#2DA44E', 'Cào', 22)}${pillS(258, 340, 150, 42, '#1982C4', 'Bình tưới', 22)}${pillS(420, 340, 170, 42, '#FF006E', 'Kéo, găng', 22)}`),
  t4: () => svg(`${bottle(140, 230, 1.15)}${drop(125, 345)}${drop(155, 362)}
    ${tick(310, 90, .8)}${pillS(350, 68, 220, 44, '#2DA44E', 'Rửa sạch', 22)}${tick(310, 190, .8)}${pillS(350, 168, 220, 44, '#1982C4', 'Cất gọn', 22)}
    ${warn(310, 296, 1)}${pillS(350, 268, 220, 44, '#E5383B', 'Cẩn thận kéo', 22)}`),
  t5: () => svg(`${pot(95, 175, .42, '#E76F51')}${bag(195, 165, .45, '#8D5524', 'Đất', 26)}${trowel(385, 160, .6, -20)}${can(495, 185, .42, '#1982C4')}
    ${basket(25, 200, 260, '#FFD60A', 'Vật liệu')}${basket(315, 200, 260, '#8ECAE6', 'Dụng cụ')}${star(300, 60, 14, '#FF006E')}`),
};

const TOPICS = [
  { id: 't1', name: 'Cần gì để trồng cây?', tip: 'Trồng một chậu hoa cần những gì nhỉ? Cùng kể nào!',
    html: S4Q(['Kể những thứ cần có để <b>trồng một chậu hoa</b>.', ''],
      ['Trồng cây trong chậu cần gì?', 'Chậu, đất, cây giống, bình tưới…'],
      ['Nhà em có đồ dùng nào để trồng cây?', 'Chậu cũ, xẻng nhỏ, bình tưới…'],
      ['Cần <b>vật liệu</b>: chậu, đất, cây giống.', 'Cần <b>dụng cụ</b>: xẻng, bình tưới.', 'Chuẩn bị <span class="k">đủ trước khi trồng</span>.']),
    quiz: [
      { q: 'Muốn trồng hoa trong chậu, em cần chuẩn bị:', o: ['Bút và vở', 'Chậu, đất, cây giống', 'Bóng và lưới', 'Kéo và giấy màu'], a: 1, why: 'Trồng cây trong chậu cần có chậu, đất và cây giống.' },
      { q: 'Bình tưới dùng để làm gì?', o: ['Xới đất', 'Cắt cành', 'Tưới nước cho cây', 'Đựng phân bón'], a: 2, why: 'Bình tưới dùng để tưới nước cho cây.' } ] },
  { id: 't2', name: 'Vật liệu trồng cây', tip: 'Đáy chậu nhớ phải có lỗ để nước thừa chảy ra nhé!',
    html: S4Q(['Quan sát tranh, kể tên các <b>vật liệu</b>.', ''],
      ['Chậu trồng cây cần có đặc điểm gì?', 'Bằng nhựa, sứ, đất nung…; đáy có lỗ thoát nước.'],
      ['Còn những vật liệu nào khác?', 'Đất, giá thể (xơ dừa, trấu), phân bón, hạt, cây giống.'],
      ['Chậu có <b>lỗ thoát nước</b>.', '<b>Đất, giá thể</b>, phân bón.', '<span class="k">Hạt giống, cây giống</span>.']),
    quiz: [
      { q: 'Vì sao đáy chậu trồng cây cần có lỗ?', o: ['Để thoát nước thừa', 'Để chậu nhẹ hơn', 'Để trang trí', 'Để giun chui vào'], a: 0, why: 'Lỗ ở đáy giúp nước thừa chảy ra, rễ cây không bị úng.' },
      { q: 'Đâu là VẬT LIỆU để trồng cây trong chậu?', o: ['Bình tưới', 'Xẻng nhỏ', 'Găng tay', 'Đất trồng'], a: 3, why: 'Đất trồng là vật liệu; bình tưới, xẻng, găng tay là dụng cụ.' } ] },
  { id: 't3', name: 'Dụng cụ trồng cây', tip: 'Mỗi dụng cụ một việc: xúc, xới, tưới, cắt!',
    html: S4Q(['Ghép tên <b>dụng cụ</b> với công dụng.', ''],
      ['Xẻng nhỏ, cào nhỏ dùng để làm gì?', 'Xẻng: xúc đất; cào: xới đất cho tơi xốp.'],
      ['Bình tưới, kéo, găng tay dùng làm gì?', 'Tưới nước; tỉa cành lá; bảo vệ tay.'],
      ['<b>Xẻng</b>: xúc đất; <b>cào</b>: xới đất.', '<b>Bình tưới</b>, <b>kéo</b> tỉa lá.', 'Đeo <span class="k">găng tay</span> cho an toàn.']),
    quiz: [
      { q: 'Dụng cụ nào dùng để xúc đất cho vào chậu?', o: ['Kéo cắt cành', 'Xẻng nhỏ', 'Bình tưới', 'Găng tay'], a: 1, why: 'Xẻng nhỏ dùng để xúc đất.' },
      { q: 'Găng tay giúp em:', o: ['Tưới nước nhanh', 'Cắt cành gọn', 'Bảo vệ tay, giữ tay sạch', 'Xới đất sâu'], a: 2, why: 'Đeo găng tay giúp tay sạch, không bị đau, xước.' } ] },
  { id: 't4', name: 'Đồ trồng cây nhà em', tip: 'Chai nhựa cũ cũng làm được chậu xinh đấy!',
    html: S4Q(['Kiểm tra <b>đồ dùng trồng cây</b> ở nhà em.', ''],
      ['Có thể làm chậu từ đồ cũ không?', 'Được: chai nhựa, vỏ hộp cũ (nhớ đục lỗ).'],
      ['Dùng xong dụng cụ thì làm gì?', 'Rửa sạch, lau khô, cất gọn.'],
      ['Tận dụng <b>đồ cũ</b> làm chậu.', 'Dùng xong <b>rửa sạch, cất gọn</b>.', 'Cẩn thận <span class="k">vật sắc nhọn</span>.']),
    quiz: [
      { q: 'Dùng chai nhựa cũ làm chậu, em cần làm gì?', o: ['Sơn kín đáy', 'Đổ đầy nước', 'Đục lỗ thoát nước ở đáy', 'Không cần làm gì'], a: 2, why: 'Chậu tự làm cũng cần lỗ ở đáy để thoát nước thừa.' },
      { q: 'Sau khi dùng xong dụng cụ, em nên:', o: ['Vứt ngoài sân', 'Rửa sạch, cất gọn', 'Để dính đầy đất', 'Cho em bé chơi'], a: 1, why: 'Rửa sạch, cất gọn giúp dụng cụ bền và an toàn.' } ] },
  { id: 't5', name: 'Nhà vườn nhí', tip: 'Xếp đồ vào đúng giỏ: vật liệu hay dụng cụ?',
    html: S4Q(['Xếp vào 2 nhóm: <b>vật liệu – dụng cụ</b>.', ''],
      ['Vật liệu trồng cây gồm những gì?', 'Chậu, đất, phân bón, hạt giống, cây giống.'],
      ['Dụng cụ trồng cây gồm những gì?', 'Xẻng, cào, bình tưới, kéo, găng tay.'],
      ['<b>Vật liệu</b>: chậu, đất, phân, giống.', '<b>Dụng cụ</b>: xẻng, cào, bình tưới…', 'Chuẩn bị <span class="k">đủ, đúng</span>.']),
    quiz: [
      { q: 'Nhóm nào gồm toàn DỤNG CỤ?', o: ['Đất, phân bón, chậu', 'Hạt giống, đất, cây con', 'Chậu, xơ dừa, phân', 'Xẻng, cào, bình tưới'], a: 3, why: 'Xẻng, cào, bình tưới là dụng cụ để làm việc.' },
      { q: 'Phân bón giúp cây:', o: ['Có thêm chất dinh dưỡng', 'Bị héo', 'Mọc gai', 'Đổi màu chậu'], a: 0, why: 'Phân bón cung cấp chất dinh dưỡng giúp cây lớn nhanh.' } ] },
];

const KEY = [
  'Trồng cây cần <b>vật liệu</b><br>và <b>dụng cụ</b>.',
  '<b>Chậu</b> có lỗ, <b>đất</b>,<br><b>phân bón</b>, <b>hạt, cây giống</b>.',
  '<b>Xẻng</b>, <b>cào</b>, <b>bình tưới</b>,<br><b>kéo</b>, <b>găng tay</b>.',
  'Dùng xong <b>rửa sạch</b>,<br><b>cất gọn</b>.',
  'Phân biệt <b>vật liệu</b><br>– <b>dụng cụ</b>.',
];
