/* ===== BÀI 12B: PHẦN MỀM LUYỆN GÕ BÀN PHÍM ===== */
const META = { key: 'bai12b', num: '12B', theme: 'vutru', ic: '🚀', cd: 5, en: 'Phần mềm luyện gõ bàn phím',
  title: 'Bài 12B. Phần mềm luyện gõ bàn phím', big: 'Phần mềm<br>luyện gõ<br>bàn phím',
  st2: 'Chủ đề 5 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Tàu vũ trụ chỉ bay khi em gõ đúng phím! Sẵn sàng chưa, phi hành gia?',
  cert: 'Tin học 4 – Bài 12B. Phần mềm luyện gõ bàn phím', file: 'Tin4_Bai12B', pass: 8 };

const gauge = (x, y, r, v, c, t) => `<path d="M${x - r} ${y} A${r} ${r} 0 0 1 ${x + r} ${y}" fill="none" stroke="#E9ECEF" stroke-width="18" stroke-linecap="round"/><path d="M${x - r} ${y} A${r} ${r} 0 0 1 ${x + r*Math.cos(Math.PI*(1 - v))} ${y - r*Math.sin(Math.PI*(1 - v))}" fill="none" stroke="${c}" stroke-width="18" stroke-linecap="round"/>${txt(x, y - 10, t, 30)}`;
const COVER = () => svgC(`${kbd(60, 120, .9)}${G(470, 90, .8, `<path d="M0 -70 Q34 -30 26 40 H-26 Q-34 -30 0 -70Z" fill="#fff" ${ST}/><circle cy="-10" r="12" fill="#8ECAE6" stroke="${O}" stroke-width="5"/><path d="M-14 40 L0 80 L14 40Z" fill="#FF7F11" ${ST}/>`)}${star(560, 320, 14, '#FFD60A')}${star(60, 50, 12, '#FF006E')}`);
const ILL_T = {
  t1: () => svg(`${monitor(60, 40, 300, 180, `${txt(210, 110, 'f j f j', 44, '#fff')}${pillS(110, 140, 200, 40, '#FFC300', 'Bài 1', 20, 0, O)}`, '#1B2A49')}${kbd(390, 120, .4, { F: '#FF7F11', J: '#FF7F11' })}
    ${pillS(40, 320, 520, 54, '#8338EC', 'Phần mềm luyện gõ', 26)}`),
  t2: () => svg(`${[['Bài 1', 'Hàng cơ sở', '#FFD60A'], ['Bài 2', 'Hàng trên', '#8ECAE6'], ['Bài 3', 'Hàng dưới', '#B5E48C'], ['Bài 4', 'Cả bàn phím', '#FFC2D6']].map(([a, b, c], i) => `${pillS(60, 30 + i*68, 130, 52, '#1982C4', a, 22)}${pillS(210, 30 + i*68, 330, 52, c, b, 22, 0, O)}`).join('')}
    ${pillS(60, 320, 480, 54, '#FF7F11', 'Luyện từ dễ đến khó', 26)}`),
  t3: () => svg(`${gauge(160, 200, 100, .7, '#2DA44E', '95%')}${gauge(440, 200, 100, .45, '#1982C4', '20 từ')}
    ${pillS(60, 230, 200, 46, '#2DA44E', 'Chính xác', 22)}${pillS(340, 230, 200, 46, '#1982C4', 'Tốc độ', 22)}${pillS(60, 320, 480, 54, '#8338EC', 'Xem kết quả sau mỗi bài', 24)}`),
  t4: () => svg(`${person(140, 190, 1.1, '#FF006E')}${laptop(270, 70, .9, `${txt(120, 85, 'Đúng trước,', 26)}${txt(120, 120, 'nhanh sau!', 26)}`)}
    ${pillS(40, 330, 520, 54, '#2DA44E', 'Luyện đều 10–15 phút mỗi ngày', 22)}`),
  t5: () => svg(`${vflow([['#8338EC', 'Chọn bài luyện'], ['#FF7F11', 'Gõ đúng ngón'], ['#2DA44E', 'Xem kết quả, cố gắng']], 140, 40, 320, 110, 24)}${star(60, 60, 14, '#FFD60A')}`),
};

const TOPICS = [
  { id: 't1', name: 'Làm quen phần mềm luyện gõ', tip: 'Phần mềm luyện gõ như huấn luyện viên riêng của em!',
    html: S4Q(['Mở <b>phần mềm luyện gõ</b> theo hướng dẫn của thầy cô.', 'Gợi ý: ví dụ RapidTyping.'],
      ['Phần mềm luyện gõ giúp gì?', 'Giúp em luyện gõ <b>10 ngón</b>, <b>đúng phím</b>, nhanh dần.'],
      ['Trên màn hình luyện tập có gì?', 'Dòng <b>chữ mẫu</b> cần gõ và hình <b>bàn phím</b> chỉ ngón tay.'],
      ['Phần mềm <span class="k">luyện gõ</span> 10 ngón.', 'Có <b>chữ mẫu</b> để gõ theo.', 'Hình bàn phím <b>chỉ ngón</b>.']),
    quiz: [
      { q: 'Phần mềm luyện gõ bàn phím giúp em:', o: ['Vẽ tranh', 'Gõ phím đúng, nhanh', 'Xem phim', 'Tìm kiếm'], a: 1, why: 'Phần mềm giúp luyện gõ đúng, nhanh.' },
      { q: 'Khi luyện gõ, em gõ theo:', o: ['Dòng chữ mẫu', 'Ý thích', 'Bạn bên cạnh', 'Bất kì phím nào'], a: 0, why: 'Phần mềm đưa ra chữ mẫu để em gõ theo.' } ] },
  { id: 't2', name: 'Các bài luyện tập', tip: 'Bắt đầu từ hàng cơ sở, rồi lên dần nhé!',
    html: S4Q(['Chọn <b>bài luyện</b> phù hợp với em.', ''],
      ['Các bài luyện được sắp xếp thế nào?', 'Từ <b>dễ đến khó</b>: hàng cơ sở → hàng trên → hàng dưới → cả bàn phím.'],
      ['Em nên bắt đầu từ bài nào?', 'Bài <b>hàng cơ sở</b>, gõ đúng rồi mới sang bài khó hơn.'],
      ['Bài luyện <span class="k">từ dễ đến khó</span>.', 'Bắt đầu <b>hàng cơ sở</b>.', 'Đạt yêu cầu rồi <b>lên bài mới</b>.']),
    quiz: [
      { q: 'Bài luyện đầu tiên thường là:', o: ['Gõ cả câu dài', 'Hàng phím số', 'Hàng phím cơ sở', 'Hàng phím dưới'], a: 2, why: 'Bắt đầu từ hàng cơ sở – nơi đặt tay.' },
      { q: 'Các bài luyện gõ được sắp xếp:', o: ['Ngẫu nhiên', 'Từ khó đến dễ', 'Chỉ có 1 bài', 'Từ dễ đến khó'], a: 3, why: 'Luyện từ dễ đến khó giúp tiến bộ dần.' } ] },
  { id: 't3', name: 'Tốc độ và độ chính xác', tip: 'Chính xác cao mới là giỏi thật sự!',
    html: S4Q(['Gõ xong một bài, đọc <b>kết quả</b> phần mềm báo.', ''],
      ['Độ chính xác cho biết gì?', 'Tỉ lệ phím gõ <b>đúng</b> (ví dụ 95%).'],
      ['Tốc độ gõ cho biết gì?', 'Số <b>từ</b> em gõ được trong <b>một phút</b>.'],
      ['<span class="k">Chính xác</span>: tỉ lệ gõ đúng.', '<b>Tốc độ</b>: số từ mỗi phút.', 'Ưu tiên <b>chính xác</b> trước.']),
    quiz: [
      { q: 'Độ chính xác 95% nghĩa là:', o: ['Gõ đúng 95 phần trăm số phím', 'Gõ được 95 từ', 'Gõ sai 95 phím', 'Gõ trong 95 phút'], a: 0, why: 'Độ chính xác là tỉ lệ phím gõ đúng.' },
      { q: 'Khi mới luyện gõ, em nên ưu tiên:', o: ['Gõ thật nhanh dù sai', 'Gõ chính xác', 'Nhìn bàn phím', 'Gõ một ngón'], a: 1, why: 'Gõ đúng trước, nhanh dần sau.' } ] },
  { id: 't4', name: 'Luyện tập đều đặn', tip: 'Mỗi ngày một chút – ngón tay sẽ nhớ phím!',
    html: S4Q(['Lập <b>kế hoạch</b> luyện gõ trong một tuần.', ''],
      ['Mỗi lần luyện bao lâu là hợp lí?', 'Khoảng <b>10 – 15 phút</b>, nghỉ mắt giữa giờ.'],
      ['Làm sao để tiến bộ nhanh?', 'Luyện <b>đều đặn</b>, gõ đúng ngón, <b>không nhìn</b> bàn phím.'],
      ['Luyện <span class="k">đều đặn</span> mỗi ngày.', 'Mỗi lần <b>10 – 15 phút</b>.', '<b>Không nhìn</b> bàn phím.']),
    quiz: [
      { q: 'Cách luyện gõ tốt nhất là:', o: ['Luyện 3 giờ liền một lần', 'Luyện đều đặn mỗi ngày', 'Chỉ luyện trước khi kiểm tra', 'Không cần luyện'], a: 1, why: 'Luyện đều đặn giúp tiến bộ bền vững.' },
      { q: 'Khi luyện gõ, em nên:', o: ['Nhìn bàn phím liên tục', 'Gõ bằng một ngón', 'Gõ đúng ngón, nhìn màn hình', 'Gõ thật mạnh'], a: 2, why: 'Đúng ngón, nhìn màn hình là cách gõ đúng.' } ] },
  { id: 't5', name: 'Phi hành gia gõ phím', tip: 'Ôn lại: chọn bài – gõ đúng – xem kết quả!',
    html: S4Q(['Hoàn thành <b>bài luyện hàng cơ sở</b> với độ chính xác trên 90%.', ''],
      ['Gõ xong, phần mềm cho em biết gì?', '<b>Độ chính xác</b> và <b>tốc độ</b> gõ.'],
      ['Chưa đạt yêu cầu thì làm sao?', '<b>Luyện lại</b> bài đó, gõ chậm mà chắc.'],
      ['Chọn bài <b>phù hợp</b>.', 'Gõ <span class="k">đúng ngón</span>.', 'Xem kết quả, <b>cố gắng</b> hơn.']),
    quiz: [
      { q: 'Chưa đạt yêu cầu bài luyện, em nên:', o: ['Bỏ cuộc', 'Xoá phần mềm', 'Nhờ bạn gõ hộ', 'Luyện lại bài đó'], a: 3, why: 'Luyện lại giúp em tiến bộ.' },
      { q: 'Tốc độ gõ được đo bằng:', o: ['Số từ gõ trong một phút', 'Số ngón tay', 'Số phím trên bàn phím', 'Số bài đã học'], a: 0, why: 'Tốc độ là số từ gõ được mỗi phút.' } ] },
];

const KEY = [
  'Phần mềm<br><b>luyện gõ</b>.',
  'Bài luyện<br><b>dễ → khó</b>.',
  '<b>Chính xác</b><br>và tốc độ.',
  'Luyện<br><b>đều đặn</b>.',
  'Gõ đúng,<br><b>cố gắng</b>.',
];
