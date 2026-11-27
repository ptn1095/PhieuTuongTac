/* ===== BÀI 1: VAI TRÒ CỦA CÔNG NGHỆ ===== */
const META = { key: 'bai1', num: 1, title: 'Bài 1. Vai trò của công nghệ', big: 'VAI TRÒ CỦA<br>CÔNG NGHỆ',
  st2: 'Công nghệ 5 • 5 hoạt động • 10 câu đố • nhận giấy chứng nhận',
  hello: 'Cùng khám phá công nghệ giúp ích gì cho cuộc sống nhé!',
  cert: 'CÔNG NGHỆ 5 – BÀI 1: VAI TRÒ CỦA CÔNG NGHỆ', file: 'CN5_Bai1', pass: 8 };

const ILL_T = {
  t1: () => svg(`${sun(70, 70, 30)}${smart(170, 200, .8, apps())}${bike(390, 260, .8)}${fridge(480, 60, .7)}
    ${pillS(120, 350, 360, 46, '#8338EC', 'Một ngày cùng công nghệ', 24)}${star(560, 380, 14, '#FFD60A')}${star(290, 60, 14, '#FF006E')}`),
  t2: () => svg(`${fridge(40, 50, .7)}${tractor(300, 250, .8)}${tree(500, 180, .6)}
    ${pillS(10, 320, 180, 44, '#3A8DFF', 'Nhu cầu', 24)}${pillS(208, 320, 190, 44, '#FF7F11', 'Năng suất', 24)}${pillS(416, 320, 174, 44, '#2DA44E', 'Môi trường', 22)}
    ${star(300, 40, 16, '#FFD60A')}${star(570, 40, 12, '#FF006E')}`),
  t3: () => svg(`${factory(160, 300, .9)}${smart(440, 190, .75, `<circle cx="0" cy="-10" r="28" fill="#E5383B"/><text x="0" y="0" text-anchor="middle" font-size="28" fill="#fff" ${F}>!</text>`)}
    ${warn(560, 80, 1)}${pillS(60, 340, 210, 44, '#495057', 'Ô nhiễm', 24)}${pillS(330, 340, 230, 44, '#E5383B', 'Hại sức khoẻ', 24)}`),
  t4: () => svg(`${kid(120, 200, .9)}${smart(300, 180, .7, apps())}${clock(470, 130, 1)}
    ${pillS(390, 220, 170, 44, '#2DA44E', 'Có giờ giấc', 22)}${pillS(130, 350, 340, 46, '#8338EC', 'Dùng công nghệ hợp lí', 24)}${star(40, 40, 14, '#FFD60A')}`),
  t5: () => svg(`${tick(80, 90, 1)}${pillS(130, 66, 420, 48, '#2DA44E', 'Đáp ứng nhu cầu, tăng năng suất', 22)}
    ${tick(80, 190, 1)}${pillS(130, 166, 420, 48, '#1982C4', 'Cải thiện môi trường sống', 22)}
    ${cross(80, 290, 1)}${pillS(130, 266, 420, 48, '#E5383B', 'Dùng sai cách: có thể gây hại', 22)}
    ${star(560, 380, 14, '#FFD60A')}${star(40, 380, 12, '#FF006E')}`),
};

const TOPICS = [
  { id: 't1', name: 'Một ngày cùng công nghệ', tip: 'Từ sáng đến tối, em dùng bao nhiêu sản phẩm công nghệ nhỉ?',
    html: S4Q(['Kể các <b>sản phẩm công nghệ</b> em dùng trong một ngày.', 'Gợi ý: buổi sáng, ở trường, buổi tối…'],
      ['Em dùng những sản phẩm nào?', 'Sáng: đèn, bàn chải; đến lớp: xe đạp; tối: ti vi, tủ lạnh.'],
      ['Không có chúng, cuộc sống sẽ ra sao?', 'Rất bất tiện, mất nhiều thời gian, công sức.'],
      ['Công nghệ có mặt <b>khắp nơi</b>.', 'Giúp cuộc sống <b>tiện lợi</b>.', 'Gắn liền với <span class="k">mỗi ngày</span> của em.']),
    quiz: [
      { q: 'Chiếc tủ lạnh có vai trò gì trong gia đình?', o: ['Giúp đi lại', 'Bảo quản thực phẩm', 'Chiếu sáng', 'Nghe nhạc'], a: 1, why: 'Tủ lạnh giữ lạnh nên thực phẩm tươi lâu hơn.' },
      { q: 'Xe đạp, xe máy, ô tô đáp ứng nhu cầu nào của con người?', o: ['Ăn uống', 'Học tập', 'Đi lại', 'Ngủ nghỉ'], a: 2, why: 'Các phương tiện giao thông giúp con người đi lại.' } ] },
  { id: 't2', name: 'Lợi ích của công nghệ', tip: 'Ba lợi ích lớn: nhu cầu – năng suất – môi trường!',
    html: S4Q(['Tìm hiểu: công nghệ đem lại <b>lợi ích</b> gì?', ''],
      ['Công nghệ đáp ứng những nhu cầu nào?', 'Ăn, mặc, ở, đi lại, học tập, giải trí.'],
      ['Công nghệ giúp gì cho lao động, môi trường?', 'Tăng năng suất (máy cày, máy gặt); cải thiện môi trường sống.'],
      ['Đáp ứng <b>nhu cầu</b> con người.', 'Nâng cao <b>năng suất</b> lao động.', 'Cải thiện <span class="k">môi trường sống</span>.']),
    quiz: [
      { q: 'Sản phẩm nào giúp tăng năng suất lao động trong nông nghiệp?', o: ['Máy gặt', 'Ti vi', 'Điện thoại', 'Bút chì'], a: 0, why: 'Máy gặt gặt lúa nhanh hơn nhiều so với gặt tay.' },
      { q: 'Máy hút bụi, bếp năng lượng mặt trời giúp con người:', o: ['Đi lại nhanh hơn', 'Giải trí', 'Liên lạc', 'Cải thiện môi trường sống'], a: 3, why: 'Chúng giúp nhà sạch sẽ, giảm khói bụi, bảo vệ môi trường.' } ] },
  { id: 't3', name: 'Khi dùng chưa đúng', tip: 'Công nghệ rất hay, nhưng dùng sai cũng có thể gây hại đấy!',
    html: S4Q(['Công nghệ có thể gây <b>tác hại</b> gì?', ''],
      ['Công nghệ ảnh hưởng xấu đến môi trường thế nào?', 'Nước thải, khói nhà máy chưa xử lí gây ô nhiễm.'],
      ['Dùng ti vi, điện thoại quá lâu thì sao?', 'Hại mắt, sức khoẻ; ít trò chuyện, phụ thuộc.'],
      ['Gây <b>ô nhiễm</b> nếu không xử lí.', 'Dùng lâu <b>hại sức khoẻ</b>.', 'Tránh <span class="k">phụ thuộc</span> công nghệ.']),
    quiz: [
      { q: 'Nước thải nhà máy chưa xử lí đổ ra sông sẽ:', o: ['Làm sông sạch hơn', 'Gây ô nhiễm môi trường', 'Giúp cá lớn nhanh', 'Không sao cả'], a: 1, why: 'Nước thải chưa xử lí làm bẩn nước, hại cây cối và con vật.' },
      { q: 'Việc nào có hại cho sức khoẻ của em?', o: ['Đọc sách đủ ánh sáng', 'Ngủ đúng giờ', 'Chơi điện thoại đến khuya', 'Tập thể dục'], a: 2, why: 'Thức khuya dùng điện thoại hại mắt và làm em mệt mỏi.' } ] },
  { id: 't4', name: 'Dùng công nghệ hợp lí', tip: 'Dùng đúng lúc, đúng cách, đúng thời gian – em là người dùng thông minh!',
    html: S4Q(['Lập kế hoạch dùng ti vi, điện thoại <b>hợp lí</b>.', ''],
      ['Dùng thiết bị thế nào cho đúng?', 'Có giờ giấc, ngồi đúng tư thế, đủ ánh sáng.'],
      ['Còn điều gì cần tránh?', 'Không dùng trước khi ngủ; dành thời gian chơi cùng bạn.'],
      ['Dùng có <b>giờ giấc</b>.', 'Đúng <b>tư thế</b>, đủ ánh sáng.', 'Dùng công nghệ <span class="k">hợp lí</span>.']),
    quiz: [
      { q: 'Ý kiến nào ĐÚNG?', o: ['Công nghệ chỉ có lợi', 'Cần dùng công nghệ hợp lí', 'Nên xem ti vi cả ngày', 'Công nghệ chỉ có hại'], a: 1, why: 'Công nghệ có lợi nhưng dùng sai sẽ gây hại, nên cần dùng hợp lí.' },
      { q: 'Trước khi đi ngủ, em nên:', o: ['Cất điện thoại, đi ngủ', 'Tắt đèn, xem điện thoại', 'Chơi trò chơi điện tử', 'Xem ti vi thật khuya'], a: 0, why: 'Không dùng điện thoại trước khi ngủ giúp mắt khoẻ, ngủ ngon.' } ] },
  { id: 't5', name: 'Nhà thông thái công nghệ', tip: 'Ôn lại thật nhanh: lợi ích và tác hại của công nghệ!',
    html: S4Q(['Chia bảng 2 cột: <b>Lợi ích – Tác hại</b>.', ''],
      ['Công nghệ có những lợi ích nào?', 'Đáp ứng nhu cầu, tăng năng suất, cải thiện môi trường sống.'],
      ['Dùng sai có tác hại gì?', 'Ô nhiễm, hại sức khoẻ, phụ thuộc.'],
      ['<b>Lợi ích</b>: nhu cầu, năng suất.', '<b>Tác hại</b> khi dùng sai.', 'Nhắc người thân <span class="k">dùng hợp lí</span>.']),
    quiz: [
      { q: 'Đâu là tác động KHÔNG mong muốn của công nghệ?', o: ['Giúp đi lại nhanh', 'Bảo quản thực phẩm', 'Tăng năng suất', 'Giảm giao tiếp trực tiếp'], a: 3, why: 'Mải dùng thiết bị khiến mọi người ít trò chuyện với nhau.' },
      { q: 'Sản phẩm công nghệ giúp đáp ứng … của con người.', o: ['bệnh tật', 'nhu cầu', 'ô nhiễm', 'mệt mỏi'], a: 1, why: 'Sản phẩm công nghệ được làm ra để đáp ứng nhu cầu của con người.' } ] },
];

const KEY = [
  'Công nghệ có mặt<br>ở <b>khắp nơi</b> quanh em.',
  'Đáp ứng <b>nhu cầu</b>, tăng <b>năng suất</b>,<br>cải thiện <b>môi trường</b>.',
  'Dùng sai: <b>ô nhiễm</b>,<br>hại <b>sức khoẻ</b>.',
  'Dùng công nghệ<br>một cách <b>hợp lí</b>.',
  'Biết <b>lợi ích</b> và<br><b>tác hại</b> của công nghệ.',
];
