/* ===== BÀI 2: GÕ BÀN PHÍM ĐÚNG CÁCH ===== */
const META = { key: 'bai2', num: 2, theme: 'chibi', ic: '⌨️', cd: 1, en: 'Gõ bàn phím đúng cách',
  title: 'Bài 2. Gõ bàn phím đúng cách', big: 'Gõ bàn phím<br>đúng cách',
  st2: 'Chủ đề 1 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Mèo, thỏ, gấu đều muốn gõ phím giỏi như em! Cùng luyện nào!',
  cert: 'Tin học 4 – Bài 2. Gõ bàn phím đúng cách', file: 'Tin4_Bai2', pass: 8 };

const HOME = { A: '#FFD60A', S: '#FFD60A', D: '#FFD60A', F: '#FF7F11', G: '#FFD60A', H: '#FFD60A', J: '#FF7F11', K: '#FFD60A', L: '#FFD60A' };
const TOPR = { Q: '#8ECAE6', W: '#8ECAE6', E: '#8ECAE6', R: '#8ECAE6', T: '#8ECAE6', Y: '#8ECAE6', U: '#8ECAE6', I: '#8ECAE6', O: '#8ECAE6', P: '#8ECAE6' };
const BOT = { Z: '#B5E48C', X: '#B5E48C', C: '#B5E48C', V: '#B5E48C', B: '#B5E48C', N: '#B5E48C', M: '#B5E48C' };
const COVER = () => svgC(`${kbd(70, 60, 1, Object.assign({}, TOPR, HOME, BOT))}${star(560, 40, 14, '#FFD60A')}${pillS(120, 290, 360, 50, '#FF006E', 'Gõ 10 ngón', 26)}`);
const ILL_T = {
  t1: () => svg(`${person(150, 200, 1.1, '#FF006E')}${monitor(320, 80, 200, 120)}${G(300, 260, .45, kbd(0, 0))}
    ${pillS(40, 340, 520, 50, '#8338EC', 'Thẳng lưng, cổ tay thả lỏng', 24)}`),
  t2: () => svg(`${kbd(70, 50, 1, HOME)}${[0, 1, 2, 3, 6, 7, 8].map((j, i) => finger(105 + j*44, 115, ['#FF006E', '#8338EC', '#1982C4', '#2DA44E', '#2DA44E', '#1982C4', '#8338EC'][i])).join('')}
    ${pillS(60, 320, 480, 54, '#FF7F11', 'Hàng cơ sở: A S D F – J K L ;', 22)}`),
  t3: () => svg(`${kbd(70, 50, 1, TOPR)}${arr(130, 190, 130, 110, '#1982C4', 6)}${arr(480, 190, 480, 110, '#1982C4', 6)}
    ${pillS(40, 320, 520, 54, '#1982C4', 'Vươn lên hàng trên, rồi về lại', 24)}`),
  t4: () => svg(`${kbd(70, 50, 1, BOT)}${arr(150, 110, 170, 170, '#2DA44E', 6)}${arr(440, 110, 420, 170, '#2DA44E', 6)}
    ${pillS(40, 320, 520, 54, '#2DA44E', 'Co xuống hàng dưới, rồi về lại', 24)}`),
  t5: () => svg(`${vflow([['#8338EC', 'Ngồi đúng tư thế'], ['#FF7F11', 'Đặt tay hàng cơ sở'], ['#2DA44E', 'Gõ đúng ngón']], 150, 40, 300, 110, 26)}${star(60, 60, 14, '#FFD60A')}`),
};

const TOPICS = [
  { id: 't1', name: 'Tư thế ngồi gõ phím', tip: 'Lưng thẳng, vai thả lỏng – gõ lâu không mỏi!',
    html: S4Q(['Quan sát bạn đang gõ phím: bạn ngồi đã <b>đúng</b> chưa?', ''],
      ['Tư thế ngồi đúng là thế nào?', 'Lưng <b>thẳng</b>, vai thả lỏng, mắt nhìn ngang màn hình.'],
      ['Tay đặt trên bàn phím thế nào?', 'Cổ tay <b>thả lỏng</b>, ngón tay hơi cong, đặt nhẹ lên phím.'],
      ['Ngồi <span class="k">thẳng lưng</span>.', 'Cổ tay, vai <b>thả lỏng</b>.', 'Ngón tay <b>hơi cong</b>.']),
    quiz: [
      { q: 'Khi gõ phím, các ngón tay nên:', o: ['Duỗi thẳng cứng', 'Hơi cong, đặt nhẹ lên phím', 'Nắm chặt lại', 'Đè mạnh lên phím'], a: 1, why: 'Ngón tay hơi cong giúp gõ nhẹ nhàng, nhanh.' },
      { q: 'Tư thế ngồi nào ĐÚNG khi gõ phím?', o: ['Lưng thẳng, vai thả lỏng', 'Gục đầu xuống bàn', 'Ngồi vắt chân', 'Nghiêng hẳn sang một bên'], a: 0, why: 'Lưng thẳng, vai thả lỏng giúp không mỏi.' } ] },
  { id: 't2', name: 'Gõ hàng phím cơ sở', tip: 'Ngón trỏ tìm F và J trước – có gờ nổi đấy!',
    html: S4Q(['Đặt tay và gõ dòng chữ: <b>asdf jkl;</b>', ''],
      ['Ngón nào gõ phím G và H?', 'Ngón trỏ <b>trái</b> gõ G; ngón trỏ <b>phải</b> gõ H.'],
      ['Phím cách gõ bằng ngón nào?', 'Bằng <b>ngón cái</b>.'],
      ['Tay trái: <b>A S D F</b>, trỏ trái thêm G.', 'Tay phải: <b>J K L ;</b>, trỏ phải thêm H.', '<span class="k">Ngón cái</span> gõ phím cách.']),
    quiz: [
      { q: 'Phím G được gõ bằng ngón nào?', o: ['Ngón út trái', 'Ngón cái', 'Ngón trỏ trái', 'Ngón trỏ phải'], a: 2, why: 'G nằm cạnh F nên ngón trỏ trái gõ G.' },
      { q: 'Phím H được gõ bằng ngón nào?', o: ['Ngón trỏ phải', 'Ngón trỏ trái', 'Ngón giữa phải', 'Ngón út phải'], a: 0, why: 'H nằm cạnh J nên ngón trỏ phải gõ H.' } ] },
  { id: 't3', name: 'Gõ hàng phím trên', tip: 'Vươn ngón lên gõ, xong lại về hàng cơ sở!',
    html: S4Q(['Gõ các chữ ở <b>hàng trên</b>: <b>qwer uiop</b>.', ''],
      ['Ngón nào gõ Q, W, E, R?', 'Lần lượt ngón <b>út, áp út, giữa, trỏ</b> tay trái.'],
      ['Gõ xong phím hàng trên, ngón tay làm gì?', 'Đưa ngón tay về lại <b>hàng cơ sở</b>.'],
      ['Mỗi ngón <span class="k">vươn lên</span> phím trên.', 'Ngón trỏ gõ thêm <b>T, Y</b>.', 'Gõ xong về <b>hàng cơ sở</b>.']),
    quiz: [
      { q: 'Ngón út tay trái gõ phím nào ở hàng trên?', o: ['R', 'P', 'T', 'Q'], a: 3, why: 'Ngón út trái đặt ở A, vươn lên gõ Q.' },
      { q: 'Sau khi gõ phím ở hàng trên, ngón tay cần:', o: ['Ở yên hàng trên', 'Về lại hàng cơ sở', 'Xuống hàng dưới', 'Nhấc khỏi bàn phím'], a: 1, why: 'Luôn đưa ngón tay về hàng cơ sở.' } ] },
  { id: 't4', name: 'Gõ hàng phím dưới', tip: 'Co ngón xuống hàng dưới – nhẹ nhàng thôi!',
    html: S4Q(['Gõ các chữ ở <b>hàng dưới</b>: <b>zxcv nm</b>.', ''],
      ['Ngón nào gõ phím Z?', 'Ngón <b>út trái</b> co xuống gõ Z.'],
      ['Phím B và N do ngón nào gõ?', 'B: ngón trỏ <b>trái</b>; N: ngón trỏ <b>phải</b>.'],
      ['Mỗi ngón <span class="k">co xuống</span> phím dưới.', 'Ngón trỏ gõ thêm <b>B, N</b>.', 'Mắt nhìn <b>màn hình</b>.']),
    quiz: [
      { q: 'Phím Z được gõ bằng ngón:', o: ['Út trái', 'Trỏ phải', 'Cái', 'Giữa phải'], a: 0, why: 'Ngón út trái co xuống gõ phím Z.' },
      { q: 'Phím N được gõ bằng ngón:', o: ['Trỏ trái', 'Út phải', 'Cái', 'Trỏ phải'], a: 3, why: 'N do ngón trỏ phải phụ trách.' } ] },
  { id: 't5', name: 'Gõ 10 ngón thành thạo', tip: 'Ôn lại: tư thế – hàng cơ sở – đúng ngón!',
    html: S4Q(['Gõ câu: <b>Em yeu truong em</b> bằng 10 ngón.', ''],
      ['Gõ 10 ngón có lợi ích gì?', 'Gõ <b>nhanh</b>, <b>chính xác</b>, không phải nhìn bàn phím.'],
      ['Làm thế nào để gõ giỏi hơn?', '<b>Luyện tập</b> đều đặn với phần mềm luyện gõ.'],
      ['Ngồi đúng <b>tư thế</b>.', 'Mỗi ngón gõ <span class="k">đúng phím</span>.', 'Luyện tập <b>đều đặn</b>.']),
    quiz: [
      { q: 'Lợi ích của gõ bàn phím bằng 10 ngón là:', o: ['Gõ chậm hơn', 'Phải nhìn phím nhiều hơn', 'Gõ nhanh, chính xác', 'Mỏi tay hơn'], a: 2, why: 'Gõ 10 ngón giúp nhanh và chính xác.' },
      { q: 'Khi gõ phím, mắt em nhìn:', o: ['Màn hình', 'Bàn phím', 'Ra cửa sổ', 'Con chuột'], a: 0, why: 'Mắt nhìn màn hình để kiểm tra chữ gõ.' } ] },
];

const KEY = [
  'Thẳng lưng,<br><b>thả lỏng</b>.',
  'Trỏ trái G,<br>trỏ phải <b>H</b>.',
  'Vươn lên,<br><b>về hàng cơ sở</b>.',
  'Co xuống,<br>trỏ gõ <b>B, N</b>.',
  'Gõ <b>10 ngón</b><br>nhanh, đúng.',
];
