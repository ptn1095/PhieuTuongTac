/* ===== BÀI 6: CHĂM SÓC HOA, CÂY CẢNH TRONG CHẬU ===== */
const META = { key: 'bai6', num: 6, title: 'Bài 6. Chăm sóc hoa, cây cảnh trong chậu', big: 'CHĂM SÓC<br>CÂY TRONG CHẬU',
  st2: 'Công nghệ 4 • 5 hoạt động • 10 câu đố • nhận giấy chứng nhận',
  hello: 'Cùng học cách chăm cho cây luôn xanh tốt nhé!',
  cert: 'CÔNG NGHỆ 4 – BÀI 6: CHĂM SÓC CÂY TRONG CHẬU', file: 'CN4_Bai6', pass: 8 };

const plant = (pc = '#FFD60A', cc = '#FF7F11') => daisy(0, -120, .9, pc, cc, 120);

const ILL_T = {
  t1: () => svg(`${pot(140, 240, .85, '#E76F51', rose(0, -120, .9, '#E5383B', 120))}${pot(440, 240, .85, '#ADB5BD', wilted(0, -12, 1.2))}${ball(290, 130, 40, '#8338EC', '?', 50)}
    ${pillS(50, 355, 180, 44, '#2DA44E', 'Tươi tốt', 24)}${pillS(350, 355, 180, 44, '#E5383B', 'Héo úa', 24)}`),
  t2: () => svg(`${sun(60, 64, 28)}${pillS(140, 20, 330, 44, '#FF7F11', 'Sáng sớm, chiều mát', 22)}${pot(230, 270, .8, '#E76F51', plant())}${can(420, 200, .62, '#1982C4', true, true)}${bag(520, 310, .48, '#2DA44E', 'Phân', 26)}
    ${star(560, 120, 12, '#FFD60A')}`),
  t3: () => svg(`${pot(150, 250, .9, '#E76F51', plant('#FF8FAB', '#FFD60A') + leaf(0, -50, 1.1, 25).replace(/#8AC926/, '#C9B458'))}${scissors(310, 120, .8)}${rake(500, 200, .75, 20)}
    ${pillS(290, 350, 140, 44, '#FF006E', 'Tỉa lá', 22)}${pillS(445, 350, 140, 44, '#2DA44E', 'Xới đất', 22)}`),
  t4: () => svg(`${paper(30, 40, 290, 320, `${txt(175, 90, 'LỊCH CHĂM CÂY', 26, '#8338EC')}${drop(70, 145, 1.2)}${txt(100, 154, 'Tưới nước', 24, O, 'start')}${ball(70, 220, 16, '#2DA44E', '', 10)}${txt(100, 229, 'Xới, nhổ cỏ', 24, O, 'start')}${ball(70, 295, 16, '#FF006E', '', 10)}${txt(100, 304, 'Tỉa lá héo', 24, O, 'start')}`)}
    ${pot(470, 250, .8, '#1982C4', kimtien(0, -12, 1))}${bug(470, 110, .8)}${pillS(380, 352, 180, 44, '#E5383B', 'Bắt sâu', 22)}`),
  t5: () => svg(`${ball(50, 60, 26, '#1982C4', '1', 28)}${pillS(90, 38, 300, 44, '#1982C4', 'Tưới nước', 22)}
    ${ball(50, 150, 26, '#2DA44E', '2', 28)}${pillS(90, 128, 300, 44, '#2DA44E', 'Bón phân', 22)}
    ${ball(50, 240, 26, '#FF006E', '3', 28)}${pillS(90, 218, 300, 44, '#FF006E', 'Tỉa cành, lá', 22)}
    ${ball(50, 330, 26, '#FF7F11', '4', 28)}${pillS(90, 308, 300, 44, '#FF7F11', 'Vun xới đất', 22)}
    ${pot(500, 270, .7, '#8338EC', daisy(0, -120, 1, '#FFD60A', '#8D5524', 110))}${star(560, 50, 14, '#FFD60A')}`),
};

const TOPICS = [
  { id: 't1', name: 'Vì sao cây héo?', tip: 'Cây cũng cần được quan tâm như chúng mình đấy!',
    html: S4Q(['Quan sát: một chậu cây <b>tươi tốt</b>, một chậu <b>héo úa</b>.', ''],
      ['Vì sao chậu cây bị héo?', 'Thiếu nước, thiếu ánh sáng, không được chăm.'],
      ['Làm gì để cây luôn xanh tốt?', 'Tưới nước, bón phân, tỉa lá, vun xới.'],
      ['Cây cần <b>nước, ánh sáng</b>.', 'Cần <b>chăm sóc</b> thường xuyên.', 'Chăm tốt, cây <span class="k">xanh tốt</span>.']),
    quiz: [
      { q: 'Cây trong chậu bị héo, lá rũ xuống có thể do:', o: ['Được tưới đủ nước', 'Thiếu nước', 'Được bón phân', 'Có đủ ánh sáng'], a: 1, why: 'Thiếu nước làm cây héo, lá rũ xuống.' },
      { q: 'Cây cần những gì để sống và lớn lên?', o: ['Chỉ cần đất', 'Bóng tối hoàn toàn', 'Nước, ánh sáng, chất dinh dưỡng', 'Chỉ cần nước'], a: 2, why: 'Cây cần nước, ánh sáng, không khí và chất dinh dưỡng.' } ] },
  { id: 't2', name: 'Tưới nước, bón phân', tip: 'Tưới lúc sáng sớm hoặc chiều mát là chuẩn nhất!',
    html: S4Q(['Tìm hiểu cách <b>tưới nước</b> và <b>bón phân</b>.', ''],
      ['Tưới nước thế nào cho đúng?', 'Sáng sớm hoặc chiều mát, tưới vào gốc, vừa đủ ẩm.'],
      ['Bón phân thế nào?', 'Định kì, rải quanh gốc (không sát gốc) rồi tưới.'],
      ['Tưới <b>sáng sớm, chiều mát</b>.', 'Bón phân <b>quanh gốc</b>.', '<span class="k">Đúng lúc, đúng lượng</span>.']),
    quiz: [
      { q: 'Nên tưới nước cho cây vào lúc nào?', o: ['Sáng sớm hoặc chiều mát', 'Giữa trưa nắng gắt', 'Nửa đêm', 'Lúc trời mưa to'], a: 0, why: 'Sáng sớm, chiều mát trời dịu, cây hút nước tốt.' },
      { q: 'Khi bón phân cho cây trong chậu, em nên:', o: ['Bón thật nhiều', 'Đổ phân lên lá', 'Bón sát gốc cây', 'Rải quanh gốc rồi tưới nước'], a: 3, why: 'Rải phân quanh gốc rồi tưới để phân tan, rễ dễ hút.' } ] },
  { id: 't3', name: 'Tỉa lá, vun xới', tip: 'Cắt lá héo, xới đất tơi – cây khỏe re!',
    html: S4Q(['Thực hành <b>chăm sóc</b> chậu cây của em.', ''],
      ['Tỉa lá thế nào?', 'Dùng kéo tỉa lá già, héo, cành sâu bệnh.'],
      ['Vun xới đất thế nào?', 'Xới nhẹ cho tơi xốp, nhổ cỏ dại.'],
      ['<b>Tỉa</b> lá già, cành sâu.', '<b>Xới</b> đất, nhổ cỏ.', 'Làm <span class="k">nhẹ tay</span>, không đứt rễ.']),
    quiz: [
      { q: 'Lá vàng, héo trên cây cần được:', o: ['Giữ lại', 'Cắt tỉa bỏ', 'Sơn cho xanh', 'Tưới thật nhiều'], a: 1, why: 'Tỉa bỏ lá héo giúp cây gọn đẹp, ra lá mới khỏe.' },
      { q: 'Xới đất trong chậu giúp:', o: ['Đất cứng lại', 'Cây bị đổ', 'Đất tơi xốp, thoáng khí', 'Rễ bị khô'], a: 2, why: 'Đất tơi xốp giúp rễ thở và hút nước dễ hơn.' } ] },
  { id: 't4', name: 'Lịch chăm cây', tip: 'Lập lịch chăm cây để không quên ngày nào nhé!',
    html: S4Q(['Lập <b>lịch chăm cây</b> trong 1 tuần.', ''],
      ['Việc nào làm hằng ngày, hằng tuần?', 'Hằng ngày: tưới; mỗi tuần: xới đất, nhổ cỏ, tỉa lá.'],
      ['Thấy sâu trên lá thì làm gì?', 'Bắt bỏ sâu, báo người lớn.'],
      ['<b>Hằng ngày</b>: tưới nước.', '<b>Hằng tuần</b>: xới, nhổ cỏ, tỉa lá.', 'Đặt chậu nơi <span class="k">có ánh sáng</span>.']),
    quiz: [
      { q: 'Phát hiện sâu ăn lá cây, em nên:', o: ['Mặc kệ', 'Bẻ hết cành', 'Bắt bỏ sâu, báo người lớn', 'Đổ thật nhiều phân'], a: 2, why: 'Bắt sâu sớm và nhờ người lớn giúp để cây không bị hại.' },
      { q: 'Việc nào nên làm hằng ngày với chậu cây?', o: ['Kiểm tra, tưới nước', 'Thay chậu mới', 'Bón thật nhiều phân', 'Cắt hết lá'], a: 0, why: 'Mỗi ngày kiểm tra đất và tưới nước khi đất khô.' } ] },
  { id: 't5', name: 'Người bạn của cây', tip: 'Ôn lại 4 việc chăm sóc cây thật nhanh nào!',
    html: S4Q(['Kể các việc <b>chăm sóc</b> hoa, cây cảnh.', ''],
      ['Chăm sóc cây gồm những việc nào?', 'Tưới nước, bón phân, tỉa cành lá, vun xới.'],
      ['Chăm cây xong em làm gì?', 'Cất dụng cụ, rửa tay sạch.'],
      ['Tưới nước, <b>bón phân</b>.', 'Tỉa lá, <b>vun xới</b>.', 'Cây xanh tốt, <span class="k">ra nhiều hoa</span>.']),
    quiz: [
      { q: 'Việc nào KHÔNG phải chăm sóc cây trong chậu?', o: ['Tưới nước', 'Tỉa lá héo', 'Vun xới đất', 'Bẻ cành để chơi'], a: 3, why: 'Bẻ cành làm cây bị thương, không phải chăm sóc cây.' },
      { q: 'Chăm sóc cây đúng cách giúp cây:', o: ['Héo úa', 'Xanh tốt, ra nhiều hoa', 'Bị sâu bệnh', 'Rụng hết lá'], a: 1, why: 'Được chăm sóc đúng cách, cây xanh tốt và ra nhiều hoa.' } ] },
];

const KEY = [
  'Cây cần <b>nước, ánh sáng</b>,<br><b>chất dinh dưỡng</b>.',
  'Tưới <b>sáng sớm, chiều mát</b>;<br>bón phân <b>quanh gốc</b>.',
  '<b>Tỉa</b> lá héo,<br><b>xới</b> đất tơi xốp.',
  'Lập <b>lịch chăm cây</b>,<br>bắt <b>sâu</b>.',
  'Tưới – Bón –<br>Tỉa – Xới.',
];
