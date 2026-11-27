/* ===== BÀI 5: SỬ DỤNG BÀN PHÍM ===== */
const META = { key: 'bai5', num: 5, theme: 'chibi', ic: '⌨️', cd: 1, en: 'Sử dụng bàn phím',
  title: 'Bài 5. Sử dụng bàn phím', big: 'Sử dụng<br>bàn phím',
  st2: 'Chủ đề 1 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Meo meo! Các bạn thú cưng sẽ cùng em làm quen với bàn phím nhé!',
  cert: 'Tin học 3 – Bài 5. Sử dụng bàn phím', file: 'Tin3_Bai5', pass: 8 };

const ROWC = { Q: '#8ECAE6', W: '#8ECAE6', E: '#8ECAE6', R: '#8ECAE6', T: '#8ECAE6', Y: '#8ECAE6', U: '#8ECAE6', I: '#8ECAE6', O: '#8ECAE6', P: '#8ECAE6' };
const HOME = { A: '#FFD60A', S: '#FFD60A', D: '#FFD60A', F: '#FF7F11', G: '#FFD60A', H: '#FFD60A', J: '#FF7F11', K: '#FFD60A', L: '#FFD60A' };
const BOT = { Z: '#B5E48C', X: '#B5E48C', C: '#B5E48C', V: '#B5E48C', B: '#B5E48C', N: '#B5E48C', M: '#B5E48C' };
const COVER = () => svgC(`${kbd(70, 70, 1, HOME)}${star(560, 40, 14, '#FFD60A')}${star(40, 40, 12, '#FF006E')}${pillS(140, 290, 320, 50, '#FF7F11', 'Hàng phím cơ sở', 24)}`);
const ILL_T = {
  t1: () => svg(`${kbd(70, 60, 1, Object.assign({}, ROWC, HOME, BOT, { ' ': '#FFC2D6' }))}
    ${pillS(20, 300, 180, 44, '#1982C4', 'Hàng trên', 20)}${pillS(210, 300, 180, 44, '#FF7F11', 'Hàng cơ sở', 20)}${pillS(400, 300, 180, 44, '#2DA44E', 'Hàng dưới', 20)}${pillS(170, 358, 260, 44, '#FF006E', 'Phím cách', 20)}`),
  t2: () => svg(`${key3d(110, 90, 150, 150, '#FF7F11', '#B4520A', 'F', 90)}${key3d(340, 90, 150, 150, '#FF7F11', '#B4520A', 'J', 90)}
    <rect x="155" y="210" width="60" height="10" rx="5" fill="${O}"/><rect x="385" y="210" width="60" height="10" rx="5" fill="${O}"/>
    ${pillS(70, 330, 460, 54, '#8338EC', 'Hai phím có gờ nổi', 26)}`),
  t3: () => svg(`${kbd(70, 60, 1, HOME)}${[0, 1, 2, 3, 6, 7, 8].map((j, i) => finger(105 + j*44, 125, ['#FF006E', '#8338EC', '#1982C4', '#2DA44E', '#2DA44E', '#1982C4', '#8338EC'][i])).join('')}
    ${pillS(60, 320, 480, 54, '#FF7F11', 'Đặt 8 ngón trên hàng cơ sở', 24)}`),
  t4: () => svg(`${kid(120, 170, 1.1, '#FF006E')}${laptop(260, 70, .9, `${txt(120, 90, 'meo meo', 36)}`)}
    ${pillS(40, 340, 520, 50, '#2DA44E', 'Gõ bằng 10 ngón, mắt nhìn màn hình', 21)}${star(560, 40, 14, '#FFD60A')}`),
  t5: () => svg(`${vflow([['#1982C4', 'Nhận biết các hàng phím'], ['#FF7F11', 'Tìm phím F, J'], ['#2DA44E', 'Đặt tay hàng cơ sở']], 140, 40, 320, 110, 24)}${star(60, 60, 14, '#FFD60A')}${star(550, 360, 12, '#FF006E')}`),
};

const TOPICS = [
  { id: 't1', name: 'Khu vực chính của bàn phím', tip: 'Bàn phím có các hàng phím xếp như bậc thang!',
    html: S4Q(['Quan sát bàn phím, chỉ ra các <b>hàng phím</b>.', ''],
      ['Khu vực chính có những hàng phím nào?', 'Hàng phím số, <b>hàng trên</b>, <b>hàng cơ sở</b>, <b>hàng dưới</b>, hàng phím cách.'],
      ['Phím dài nhất trên bàn phím là phím gì?', '<b>Phím cách</b> (Space), dùng để gõ dấu cách.'],
      ['Có hàng số, <b>hàng trên</b>, hàng dưới.', 'Hàng ở giữa là <span class="k">hàng cơ sở</span>.', '<b>Phím cách</b> dài nhất.']),
    quiz: [
      { q: 'Hàng phím có chứa phím A, S, D, F là:', o: ['Hàng trên', 'Hàng dưới', 'Hàng cơ sở', 'Hàng phím số'], a: 2, why: 'A, S, D, F nằm ở hàng cơ sở.' },
      { q: 'Phím dài nhất trên bàn phím là:', o: ['Phím cách', 'Phím Enter', 'Phím A', 'Phím số 1'], a: 0, why: 'Phím cách (Space) là phím dài nhất.' } ] },
  { id: 't2', name: 'Hai phím có gờ F và J', tip: 'Sờ thấy gờ nổi là biết tay đặt đúng chỗ!',
    html: S4Q(['Dùng tay sờ nhẹ các phím <b>hàng cơ sở</b>. Em thấy gì lạ?', ''],
      ['Phím nào có gờ nổi?', 'Phím <b>F</b> và phím <b>J</b>.'],
      ['Gờ nổi giúp gì cho em?', 'Giúp đặt tay <b>đúng vị trí</b> mà không cần nhìn.'],
      ['Phím <span class="k">F, J</span> có gờ nổi.', 'Ngón trỏ trái đặt trên <b>F</b>.', 'Ngón trỏ phải đặt trên <b>J</b>.']),
    quiz: [
      { q: 'Hai phím có gờ nổi trên hàng cơ sở là:', o: ['A và L', 'D và K', 'S và H', 'F và J'], a: 3, why: 'Phím F và J có gờ nổi để định vị ngón tay.' },
      { q: 'Ngón trỏ tay phải đặt lên phím:', o: ['F', 'J', 'A', 'Phím cách'], a: 1, why: 'Ngón trỏ phải đặt trên phím J.' } ] },
  { id: 't3', name: 'Đặt tay trên hàng cơ sở', tip: 'Tám ngón trên hàng cơ sở, hai ngón cái cho phím cách!',
    html: S4Q(['Đặt <b>tám ngón tay</b> lên hàng phím cơ sở.', 'Gợi ý: bắt đầu từ hai phím có gờ.'],
      ['Tay trái đặt lên những phím nào?', 'Các phím <b>A, S, D, F</b>.'],
      ['Tay phải đặt lên những phím nào?', 'Các phím <b>J, K, L</b> và <b>;</b>'],
      ['Tay trái: <b>A S D F</b>.', 'Tay phải: <b>J K L ;</b>', 'Hai <span class="k">ngón cái</span> gõ phím cách.']),
    quiz: [
      { q: 'Các ngón tay trái đặt lên các phím:', o: ['J K L ;', 'Q W E R', 'A S D F', 'Z X C V'], a: 2, why: 'Tay trái đặt trên A, S, D, F của hàng cơ sở.' },
      { q: 'Phím cách được gõ bằng ngón nào?', o: ['Ngón út', 'Ngón cái', 'Ngón trỏ', 'Ngón giữa'], a: 1, why: 'Hai ngón cái phụ trách phím cách.' } ] },
  { id: 't4', name: 'Luyện gõ với phần mềm', tip: 'Gõ chậm mà đúng trước, nhanh dần sau nhé!',
    html: S4Q(['Mở <b>phần mềm luyện gõ</b>, gõ theo các phím hiện trên màn hình.', ''],
      ['Khi gõ, mắt em nên nhìn vào đâu?', 'Nhìn <b>màn hình</b>, hạn chế nhìn bàn phím.'],
      ['Gõ xong một phím, ngón tay làm gì?', 'Đưa ngón tay về lại <b>hàng cơ sở</b>.'],
      ['Gõ bằng <b>10 ngón</b>.', 'Mắt nhìn <span class="k">màn hình</span>.', 'Gõ xong về <b>hàng cơ sở</b>.']),
    quiz: [
      { q: 'Khi luyện gõ phím, mắt em nên nhìn vào:', o: ['Màn hình', 'Bàn phím', 'Con chuột', 'Bạn bên cạnh'], a: 0, why: 'Nhìn màn hình giúp em gõ nhanh và đúng hơn.' },
      { q: 'Gõ xong một phím ở hàng trên, ngón tay nên:', o: ['Để nguyên ở đó', 'Nhấc khỏi bàn phím', 'Đặt lên chuột', 'Trở về hàng cơ sở'], a: 3, why: 'Ngón tay luôn trở về hàng cơ sở sau khi gõ.' } ] },
  { id: 't5', name: 'Bàn phím và em', tip: 'Ôn lại: các hàng phím – phím F, J – đặt tay đúng!',
    html: S4Q(['Nhắc lại cách đặt tay và gõ phím <b>đúng cách</b>.', ''],
      ['Vì sao cần đặt tay đúng trên hàng cơ sở?', 'Để gõ <b>nhanh</b>, <b>chính xác</b>, không mỏi tay.'],
      ['Phím F và J giúp gì?', 'Giúp tìm đúng vị trí đặt <b>ngón trỏ</b>.'],
      ['Biết các <b>hàng phím</b>.', 'Phím <span class="k">F, J</span> có gờ.', 'Gõ <b>10 ngón</b> đúng cách.']),
    quiz: [
      { q: 'Phím G nằm ở hàng phím nào?', o: ['Hàng trên', 'Hàng cơ sở', 'Hàng dưới', 'Hàng phím số'], a: 1, why: 'G nằm giữa F và H trên hàng cơ sở.' },
      { q: 'Gõ bàn phím đúng cách giúp em:', o: ['Gõ nhanh, chính xác', 'Làm hỏng bàn phím', 'Mỏi tay hơn', 'Không cần nhìn chữ'], a: 0, why: 'Đặt tay đúng giúp gõ nhanh và chính xác.' } ] },
];

const KEY = [
  'Hàng trên, <b>cơ sở</b>,<br>dưới, phím cách.',
  'Phím <b>F, J</b><br>có gờ nổi.',
  'Trái: A S D F<br>Phải: <b>J K L ;</b>',
  'Mắt nhìn<br><b>màn hình</b>.',
  'Gõ <b>10 ngón</b><br>đúng cách.',
];
