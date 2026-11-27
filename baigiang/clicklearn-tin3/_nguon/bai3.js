/* ===== BÀI 3: MÁY TÍNH VÀ EM ===== */
const META = { key: 'bai3', num: 3, theme: 'vutru', ic: '🖥️', cd: 1, en: 'Máy tính và em',
  title: 'Bài 3. Máy tính và em', big: 'Máy tính<br>và em',
  st2: 'Chủ đề 1 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Phi hành gia nhí ơi, cùng bay vào vũ trụ máy tính nhé!',
  cert: 'Tin học 3 – Bài 3. Máy tính và em', file: 'Tin3_Bai3', pass: 8 };

const COVER = () => svgC(`${desk(150, 50, .95, `${star(260, 110, 30, '#FFD60A')}`)}${star(60, 60, 16, '#FFD60A')}${star(560, 300, 14, '#FF006E')}${star(80, 300, 12, '#2EC4B6')}`);
const ILL_T = {
  t1: () => svg(`${desk(170, 40, .9)}
    ${lab(250, 100, 20, 20, 140, '#1982C4', 'Màn hình')}${lab(430, 150, 440, 10, 140, '#8338EC', 'Thân máy')}
    ${pillS(20, 340, 160, 46, '#FF7F11', 'Bàn phím', 22)}${pillS(420, 340, 150, 46, '#2DA44E', 'Chuột', 22)}`),
  t2: () => svg(`${monitor(40, 60, 140, 90)}${laptop(260, 60, .6)}${smart(500, 130, .55)}
    ${pillS(20, 230, 180, 46, '#1982C4', 'Để bàn', 22)}${pillS(230, 230, 190, 46, '#FF7F11', 'Xách tay', 22)}${pillS(440, 230, 150, 46, '#2DA44E', 'Bảng, ĐT', 20)}
    ${pillS(110, 330, 380, 50, '#8338EC', 'Đều là máy tính', 26)}`),
  t3: () => svg(`${person(170, 210, 1.1, '#FF006E')}${monitor(330, 110, 180, 110)}${dline(200, 180, 330, 165, '#E5383B')}
    ${pillS(190, 110, 130, 40, '#E5383B', '50–80 cm', 20)}${pillS(40, 345, 520, 50, '#2DA44E', 'Ngồi thẳng lưng, mắt nhìn ngang', 22)}`),
  t4: () => svg(`${socket(140, 170, 1)}${cross(220, 100, 1.2)}${bolt(140, 300, .9)}${hand(400, 170, .8, 0)}${tick(500, 100, 1.2)}
    ${pillS(20, 340, 260, 50, '#E5383B', 'Không chạm ổ điện', 22)}${pillS(310, 340, 270, 50, '#2DA44E', 'Tay khô, sạch', 22)}`),
  t5: () => svg(`${vflow([['#1982C4', '4 bộ phận chính'], ['#FF7F11', 'Ngồi đúng tư thế'], ['#2DA44E', 'An toàn điện']], 150, 40, 300, 110, 26)}${star(60, 60, 14, '#FFD60A')}${star(550, 360, 12, '#FF006E')}`),
};

const TOPICS = [
  { id: 't1', name: 'Các bộ phận của máy tính', tip: 'Máy tính để bàn có 4 bộ phận chính đấy!',
    html: S4Q(['Quan sát máy tính để bàn, kể tên các <b>bộ phận</b> em thấy.', 'Gợi ý: có 4 bộ phận chính.'],
      ['Máy tính để bàn có những bộ phận chính nào?', '<b>Màn hình</b>, <b>thân máy</b>, <b>bàn phím</b>, <b>chuột</b>.'],
      ['Bộ phận nào quan trọng nhất, chứa bộ xử lí?', '<b>Thân máy</b> – nơi xử lí thông tin.'],
      ['<b>Màn hình</b>: hiện kết quả.', '<span class="k">Thân máy</span>: xử lí thông tin.', '<b>Bàn phím, chuột</b>: nhập thông tin.']),
    quiz: [
      { q: 'Bộ phận nào KHÔNG phải bộ phận chính của máy tính để bàn?', o: ['Màn hình', 'Thân máy', 'Bàn phím', 'Bóng đèn'], a: 3, why: 'Bóng đèn không phải bộ phận của máy tính.' },
      { q: 'Bộ phận chứa bộ xử lí của máy tính để bàn là:', o: ['Thân máy', 'Chuột', 'Màn hình', 'Loa'], a: 0, why: 'Thân máy chứa các linh kiện xử lí thông tin.' } ] },
  { id: 't2', name: 'Các loại máy tính', tip: 'Điện thoại thông minh cũng là một chiếc máy tính nhỏ!',
    html: S4Q(['Kể tên các <b>loại máy tính</b> em đã thấy ở nhà, ở trường.', ''],
      ['Có những loại máy tính nào?', 'Máy tính <b>để bàn</b>, <b>xách tay</b>, <b>máy tính bảng</b>, <b>điện thoại thông minh</b>.'],
      ['Máy tính xách tay có gì đặc biệt?', 'Gọn nhẹ, gập lại được, <b>mang đi</b> dễ dàng.'],
      ['Máy tính có <b>nhiều loại</b>.', 'Xách tay, máy tính bảng <b>gọn nhẹ</b>.', '<span class="k">Điện thoại thông minh</span> cũng là máy tính.']),
    quiz: [
      { q: 'Loại máy tính nào gập lại và mang đi được dễ dàng?', o: ['Máy tính để bàn', 'Máy tính xách tay', 'Máy giặt', 'Ti vi'], a: 1, why: 'Máy tính xách tay gọn nhẹ, gập lại được.' },
      { q: 'Thiết bị nào dưới đây cũng là một loại máy tính?', o: ['Quạt điện', 'Nồi cơm', 'Điện thoại thông minh', 'Bàn là'], a: 2, why: 'Điện thoại thông minh có bộ xử lí như một máy tính nhỏ.' } ] },
  { id: 't3', name: 'Ngồi đúng tư thế', tip: 'Ngồi thẳng lưng để mắt và lưng luôn khoẻ nhé!',
    html: S4Q(['Quan sát bạn ngồi máy tính: bạn ngồi <b>đúng</b> hay <b>sai</b>?', ''],
      ['Mắt nên cách màn hình bao xa?', 'Khoảng <b>50 – 80 cm</b>.'],
      ['Ngồi sai tư thế lâu sẽ thế nào?', 'Dễ bị <b>cận thị</b>, <b>cong vẹo cột sống</b>, mỏi tay.'],
      ['Ngồi <b>thẳng lưng</b>, hai chân đặt trên sàn.', 'Mắt cách màn hình <span class="k">50 – 80 cm</span>.', 'Ánh sáng <b>vừa đủ</b>, không chói.']),
    quiz: [
      { q: 'Khi dùng máy tính, mắt nên cách màn hình khoảng:', o: ['5 – 10 cm', '50 – 80 cm', '2 – 3 m', 'Sát màn hình'], a: 1, why: 'Khoảng cách 50 – 80 cm giúp bảo vệ mắt.' },
      { q: 'Tư thế ngồi nào ĐÚNG?', o: ['Nằm bò ra bàn', 'Cúi sát màn hình', 'Ngồi thẳng lưng', 'Gác chân lên ghế'], a: 2, why: 'Ngồi thẳng lưng giúp cột sống khoẻ mạnh.' } ] },
  { id: 't4', name: 'An toàn điện', tip: 'Điện rất nguy hiểm – chỉ chạm vào máy khi tay khô nhé!',
    html: S4Q(['Tìm những việc làm <b>nguy hiểm</b> khi dùng máy tính.', 'Gợi ý: ổ điện, dây điện, tay ướt.'],
      ['Vì sao không chạm vào ổ điện, dây điện?', 'Vì có thể bị <b>điện giật</b> rất nguy hiểm.'],
      ['Thấy dây điện hở, em làm gì?', 'Không chạm vào, <b>báo ngay người lớn</b>.'],
      ['<b>Không chạm</b> ổ điện, dây điện.', 'Dùng máy khi tay <span class="k">khô, sạch</span>.', 'Thấy hỏng hóc: <b>báo người lớn</b>.']),
    quiz: [
      { q: 'Em thấy dây điện máy tính bị hở. Em nên:', o: ['Dùng tay quấn lại', 'Lấy kéo cắt đi', 'Kệ nó', 'Báo ngay cho người lớn'], a: 3, why: 'Dây điện hở rất nguy hiểm, cần người lớn xử lí.' },
      { q: 'Việc nào an toàn khi dùng máy tính?', o: ['Dùng máy khi tay khô', 'Đổ nước lên bàn phím', 'Cắm tay vào ổ điện', 'Ăn uống bên bàn phím'], a: 0, why: 'Tay khô giúp tránh bị điện giật và giữ máy sạch.' } ] },
  { id: 't5', name: 'Em dùng máy tính đúng cách', tip: 'Ôn lại: bộ phận – tư thế – an toàn!',
    html: S4Q(['Nhắc lại những điều cần nhớ khi <b>ngồi vào máy tính</b>.', ''],
      ['Kể tên 4 bộ phận chính của máy tính để bàn?', 'Màn hình, thân máy, bàn phím, chuột.'],
      ['Khi dùng máy tính, em cần chú ý gì?', 'Ngồi <b>đúng tư thế</b> và giữ <b>an toàn điện</b>.'],
      ['Biết <b>4 bộ phận</b> chính.', 'Ngồi <span class="k">đúng tư thế</span>.', 'Luôn <b>an toàn</b> với điện.']),
    quiz: [
      { q: 'Bộ phận dùng để gõ chữ vào máy tính là:', o: ['Màn hình', 'Loa', 'Bàn phím', 'Thân máy'], a: 2, why: 'Em gõ chữ vào máy tính bằng bàn phím.' },
      { q: 'Dùng máy tính quá lâu liên tục sẽ:', o: ['Có hại cho mắt và sức khoẻ', 'Giúp mắt sáng hơn', 'Làm em cao hơn', 'Không sao cả'], a: 0, why: 'Cần nghỉ giải lao để bảo vệ mắt và sức khoẻ.' } ] },
];

const KEY = [
  'Màn hình, <b>thân máy</b>,<br>bàn phím, chuột.',
  'Để bàn, xách tay,<br>bảng, <b>điện thoại</b>.',
  'Thẳng lưng, cách<br>màn hình <b>50–80 cm</b>.',
  '<b>Không chạm</b><br>ổ điện, dây điện.',
  'Bộ phận – <b>tư thế</b><br>– an toàn.',
];
