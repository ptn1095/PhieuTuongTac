/* ===== BÀI 5: TRỒNG HOA, CÂY CẢNH TRONG CHẬU ===== */
const META = { key: 'bai5', num: 5, title: 'Bài 5. Trồng hoa, cây cảnh trong chậu', big: 'TRỒNG CÂY<br>TRONG CHẬU',
  st2: 'Công nghệ 4 • 5 hoạt động • 10 câu đố • nhận giấy chứng nhận',
  hello: 'Cùng trồng cây con vào chậu thật khéo nhé!',
  cert: 'CÔNG NGHỆ 4 – BÀI 5: TRỒNG CÂY TRONG CHẬU', file: 'CN4_Bai5', pass: 8 };

const plant = (pc = '#FFD60A', cc = '#FF7F11') => daisy(0, -120, .9, pc, cc, 120);
const layer = `<ellipse cx="0" cy="-8" rx="58" ry="10" fill="#8D5524"/>`;
const pile = `<path d="M-60 -14 Q-40 -50 -14 -20 M14 -20 Q40 -50 60 -14" fill="#8D5524" stroke="${O}" stroke-width="4"/>`;

const ILL_T = {
  t1: () => svg(`${pillS(140, 24, 320, 46, '#8338EC', 'Từ bầu sang chậu', 24)}${bau(130, 300, 1, plant())}${arr(220, 260, 320, 260, '#FF7F11')}${pot(440, 260, .9, '#E76F51', plant())}
    ${star(560, 380, 14, '#FFD60A')}${star(40, 120, 12, '#FF006E')}`),
  t2: () => svg(`${pot(95, 230, .8, '#E76F51')}${bag(235, 220, .65, '#8D5524', 'Đất', 26)}${bau(370, 270, .75, plant('#FF8FAB', '#FFD60A'))}${trowel(510, 200, .65, 18)}${glove(515, 320, .45)}
    ${pillS(150, 352, 300, 44, '#2DA44E', 'Cây khỏe, lá xanh', 22)}`),
  t3: () => svg(`${stepN(80, 1, '#FF006E', 'Lót đất', pot(80, 240, .68, '#E76F51', layer))}${stepN(225, 2, '#FF7F11', 'Đặt cây', pot(225, 240, .68, '#E76F51', plant()))}
    ${stepN(370, 3, '#2DA44E', 'Thêm đất', pot(370, 240, .68, '#E76F51', plant() + pile))}${stepN(515, 4, '#1982C4', 'Tưới nước', pot(515, 240, .68, '#E76F51', plant() + drop(-44, -40, 1.3) + drop(46, -60, 1.3)))}`),
  t4: () => svg(`${kid(100, 230, 1)}${pot(300, 270, .8, '#FF006E', rose(0, -120, .9, '#E5383B', 120))}${heart(450, 90, 1.1)}${heart(520, 140, .7, '#FF8FAB')}${glove(480, 250, .6)}
    ${pillS(380, 340, 200, 44, '#1982C4', 'Rửa tay sạch', 22)}${star(200, 60, 14, '#FFD60A')}`),
  t5: () => svg(`${ball(50, 60, 26, '#FF006E', '1', 28)}${pillS(90, 38, 320, 44, '#FF006E', 'Lót đất vào chậu', 22)}
    ${ball(50, 150, 26, '#FF7F11', '2', 28)}${pillS(90, 128, 320, 44, '#FF7F11', 'Đặt cây giữa chậu', 22)}
    ${ball(50, 240, 26, '#2DA44E', '3', 28)}${pillS(90, 218, 320, 44, '#2DA44E', 'Thêm đất, ấn nhẹ', 22)}
    ${ball(50, 330, 26, '#1982C4', '4', 28)}${pillS(90, 308, 320, 44, '#1982C4', 'Tưới nước', 22)}
    ${pot(510, 270, .7, '#8338EC', plant('#FF8FAB', '#FFD60A'))}${star(560, 50, 14, '#FFD60A')}`),
};

const TOPICS = [
  { id: 't1', name: 'Cây con về nhà', tip: 'Cây con trong bầu cần một chiếc chậu để lớn khỏe!',
    html: S4Q(['Mẹ mua <b>cây hoa con</b> trong bầu, em giúp mẹ trồng.', ''],
      ['Vì sao phải trồng cây con sang chậu?', 'Để cây có đủ đất, lớn khỏe.'],
      ['Em đã từng trồng cây chưa? Làm thế nào?', 'Đào hố, đặt cây, lấp đất, tưới nước…'],
      ['Cây con cần <b>chậu đủ lớn</b>.', 'Trồng đúng giúp cây <b>khỏe</b>.', 'Học cách <span class="k">trồng cây vào chậu</span>.']),
    quiz: [
      { q: 'Cây con mua về đựng trong túi bầu, em nên:', o: ['Để mãi trong bầu', 'Trồng sang chậu', 'Vứt bỏ cả cây', 'Cất vào tủ'], a: 1, why: 'Trồng sang chậu để rễ có chỗ phát triển, cây lớn khỏe.' },
      { q: 'Trồng hoa, cây cảnh trong chậu giúp:', o: ['Cây chết nhanh', 'Nhà bẩn hơn', 'Trang trí nhà, cây lớn khỏe', 'Tốn nước vô ích'], a: 2, why: 'Chậu cây vừa làm đẹp nhà, vừa giúp cây phát triển.' } ] },
  { id: 't2', name: 'Chuẩn bị trồng cây', tip: 'Chọn cây con khỏe mạnh, lá xanh tươi nhé!',
    html: S4Q(['Chuẩn bị <b>vật liệu, dụng cụ</b> trồng cây.', ''],
      ['Trồng cây con cần những gì?', 'Chậu có lỗ, đất, giá thể, cây con; xẻng, bình tưới, găng tay.'],
      ['Chọn cây con thế nào?', 'Khỏe, lá xanh, không sâu bệnh.'],
      ['Chậu có <b>lỗ thoát nước</b>.', 'Đất, giá thể, <b>cây con</b>.', 'Chọn <span class="k">cây khỏe</span>.']),
    quiz: [
      { q: 'Nên chọn cây con như thế nào?', o: ['Lá xanh, khỏe, không sâu', 'Lá vàng, héo', 'Bị sâu ăn lá', 'Gãy ngọn'], a: 0, why: 'Cây con khỏe, lá xanh, không sâu bệnh sẽ dễ sống.' },
      { q: 'Chậu trồng cây cần có:', o: ['Nắp đậy kín', 'Màu đỏ', 'Bánh xe', 'Lỗ thoát nước ở đáy'], a: 3, why: 'Lỗ ở đáy chậu giúp thoát nước thừa, rễ không bị úng.' } ] },
  { id: 't3', name: '4 bước trồng cây', tip: 'Nhớ nhé: Lót đất – Đặt cây – Thêm đất – Tưới!',
    html: S4Q(['Thực hành trồng cây theo <b>4 bước</b>.', ''],
      ['Hai bước đầu là gì?', '① Cho lớp đất vào chậu. ② Đặt cây vào giữa chậu.'],
      ['Hai bước sau là gì?', '③ Thêm đất, ấn nhẹ quanh gốc. ④ Tưới nước.'],
      ['Lót đất, <b>đặt cây giữa chậu</b>.', 'Thêm đất, <b>ấn nhẹ</b> gốc.', 'Tưới nước; cây <span class="k">đứng thẳng</span>.']),
    quiz: [
      { q: 'Khi đặt cây con vào chậu, cần đặt:', o: ['Sát mép chậu', 'Thẳng, ở giữa chậu', 'Nằm nghiêng', 'Úp ngược'], a: 1, why: 'Cây đặt thẳng, giữa chậu thì đứng vững và cân đối.' },
      { q: 'Sau khi thêm đất quanh gốc cây, em cần:', o: ['Nhổ cây lên', 'Đổ thêm cát', 'Ấn nhẹ rồi tưới nước', 'Để ra nắng gắt'], a: 2, why: 'Ấn nhẹ cho cây đứng vững, rồi tưới nước cho đất ẩm.' } ] },
  { id: 't4', name: 'Chậu cây tặng mẹ', tip: 'Một chậu cây tự tay trồng là món quà thật ý nghĩa!',
    html: S4Q(['Trồng một chậu cây nhỏ <b>tặng người thân</b>.', ''],
      ['Lấy cây ra khỏi bầu thế nào?', 'Nhẹ tay, giữ nguyên bầu đất.'],
      ['Trồng xong đặt chậu ở đâu?', 'Nơi có ánh sáng phù hợp; trang trí chậu cho đẹp.'],
      ['Lấy cây <b>nhẹ tay</b>.', 'Giữ nguyên <b>bầu đất</b>.', 'Đeo găng, <span class="k">rửa tay</span> sau khi trồng.']),
    quiz: [
      { q: 'Khi lấy cây ra khỏi túi bầu, em cần:', o: ['Kéo mạnh thân cây', 'Rũ sạch hết đất ở rễ', 'Bẻ bớt rễ', 'Nhẹ tay, giữ bầu đất'], a: 3, why: 'Giữ nguyên bầu đất để rễ không bị đứt, cây mau sống.' },
      { q: 'Sau khi trồng cây xong, em nên:', o: ['Rửa tay sạch sẽ', 'Dụi mắt ngay', 'Để tay bẩn ăn cơm', 'Lau tay lên tường'], a: 0, why: 'Rửa tay sạch sau khi làm việc với đất để giữ vệ sinh.' } ] },
  { id: 't5', name: 'Thợ trồng cây nhí', tip: 'Kể lại 4 bước trồng cây cho bạn bên cạnh nghe nào!',
    html: S4Q(['Kể lại <b>4 bước</b> trồng cây trong chậu.', ''],
      ['4 bước trồng cây là gì?', 'Lót đất → đặt cây → thêm đất, ấn nhẹ → tưới nước.'],
      ['Chậu cây đạt yêu cầu là thế nào?', 'Cây thẳng, chắc gốc, đất thấp hơn miệng chậu.'],
      ['<b>4 bước</b> trồng cây.', 'Cây <b>thẳng, chắc gốc</b>.', 'Trồng đúng, cây <span class="k">lớn nhanh</span>.']),
    quiz: [
      { q: 'Bước cuối cùng khi trồng cây trong chậu là:', o: ['Cho đất vào chậu', 'Tưới nước', 'Đặt cây vào chậu', 'Chọn chậu'], a: 1, why: 'Trồng xong, em tưới nước để cây không bị héo.' },
      { q: 'Chậu cây trồng đạt yêu cầu là:', o: ['Cây nghiêng, lỏng gốc', 'Đất tràn ra ngoài', 'Cây thẳng, chắc gốc', 'Rễ lộ lên trên'], a: 2, why: 'Cây đứng thẳng, chắc gốc, đất gọn trong chậu là đạt.' } ] },
];

const KEY = [
  'Trồng cây con<br>từ <b>bầu</b> sang <b>chậu</b>.',
  'Chậu có <b>lỗ</b>; cây con<br><b>khỏe, lá xanh</b>.',
  'Lót đất → Đặt cây →<br><b>Thêm đất</b> → <b>Tưới</b>.',
  'Lấy cây <b>nhẹ tay</b>,<br>giữ <b>bầu đất</b>.',
  'Cây <b>thẳng</b>,<br><b>chắc gốc</b>.',
];
