/* ===== BÀI 16: CÔNG VIỆC CỦA EM VÀ SỰ TRỢ GIÚP CỦA MÁY TÍNH ===== */
const META = { key: 'bai16', num: 16, theme: 'tuyet', ic: '🤝', cd: 6, en: 'Công việc của em và máy tính',
  title: 'Bài 16. Công việc của em và sự trợ giúp của máy tính', big: 'Máy tính<br>giúp em<br>làm việc',
  st2: 'Chủ đề 6 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Mùa đông lạnh giá, có máy tính bên cạnh việc gì cũng nhanh gọn!',
  cert: 'Tin học 3 – Bài 16. Công việc của em và máy tính', file: 'Tin3_Bai16', pass: 8 };

const calc = (x, y, s = 1) => G(x, y, s, `<rect x="-60" y="-90" width="120" height="180" rx="16" fill="#3D405B" ${ST}/><rect x="-44" y="-74" width="88" height="40" rx="6" fill="#B5E48C"/>${txt(0, -44, '12', 30)}${[0, 1, 2].map(r => [0, 1, 2].map(c => `<rect x="${-44 + c*32}" y="${-20 + r*34}" width="24" height="26" rx="6" fill="#fff"/>`).join('')).join('')}`);
const COVER = () => svgC(`${kid(110, 150, 1)}${laptop(220, 70, .8, `${mindmap(120, 75, .4)}`)}${star(560, 40, 14, '#FFD60A')}${star(40, 300, 12, '#FF006E')}`);
const ILL_T = {
  t1: () => svg(`${book(130, 160, .8)}${pencil(140, 260, .7, -20)}${laptop(300, 60, .9, `${doc(120, 75, .8)}`)}
    ${pillS(40, 330, 520, 54, '#1982C4', 'Học tập cùng máy tính', 26)}`),
  t2: () => svg(`${calc(130, 170, 1)}${laptop(280, 70, .9, `${grid(30, 20, [['A', 'B'], ['5', '7'], ['=', '12']], 90, 36, 20)}`)}
    ${pillS(40, 330, 520, 54, '#FF7F11', 'Tính toán nhanh, chính xác', 24)}`),
  t3: () => svg(`${monitor(70, 50, 260, 160, `${flower(150, 180, .8, '#FF006E')}${sun(260, 100, 26)}`)}${phone(480, 150, .9)}
    ${pillS(20, 330, 270, 50, '#2DA44E', 'Vẽ, soạn bài', 22)}${pillS(310, 330, 270, 50, '#8338EC', 'Liên lạc', 22)}`),
  t4: () => svg(`${kid(140, 160, 1)}${laptop(280, 60, .9)}${cross(110, 70, .9)}
    ${pillS(20, 330, 560, 54, '#E5383B', 'Máy tính giúp – em vẫn phải nghĩ', 22)}`),
  t5: () => svg(`${vflow([['#1982C4', 'Học tập'], ['#FF7F11', 'Tính toán, vẽ'], ['#8338EC', 'Liên lạc, giải trí']], 150, 40, 300, 110, 26)}${star(60, 60, 14, '#FFD60A')}`),
};

const TOPICS = [
  { id: 't1', name: 'Máy tính giúp em học', tip: 'Máy tính là người bạn học tập chăm chỉ!',
    html: S4Q(['Kể những lần em dùng máy tính để <b>học tập</b>.', ''],
      ['Máy tính giúp em học những gì?', 'Luyện gõ, <b>luyện chuột</b>, xem bài giảng, làm bài tập.'],
      ['Vì sao học với máy tính thấy thú vị?', 'Có <b>hình ảnh, âm thanh</b>, trò chơi sinh động.'],
      ['Máy tính giúp em <span class="k">học tập</span>.', 'Bài học <b>sinh động</b>, dễ nhớ.', 'Có thể <b>tự luyện tập</b>.']),
    quiz: [
      { q: 'Máy tính giúp em học tập bằng cách:', o: ['Làm bài thay em', 'Cung cấp bài học sinh động', 'Ngủ thay em', 'Đi học thay em'], a: 1, why: 'Máy tính có bài học, phần mềm sinh động giúp em học.' },
      { q: 'Phần mềm nào giúp em luyện gõ bàn phím?', o: ['Phần mềm luyện gõ', 'Phần mềm nghe nhạc', 'Máy tính bỏ túi', 'Trình chiếu'], a: 0, why: 'Phần mềm luyện gõ giúp em gõ phím đúng cách.' } ] },
  { id: 't2', name: 'Tính toán nhanh', tip: 'Máy tính cộng trừ nhanh như chớp!',
    html: S4Q(['Tính tổng điểm của cả lớp: làm tay hay dùng máy tính <b>nhanh hơn</b>?', ''],
      ['Máy tính giúp gì khi tính toán?', 'Tính <b>rất nhanh</b> và <b>chính xác</b>.'],
      ['Ai cần máy tính để tính toán?', 'Cô giáo tính điểm, người bán hàng, <b>ngân hàng</b>…'],
      ['Máy tính <span class="k">tính nhanh</span>.', 'Kết quả <b>chính xác</b>.', 'Giúp nhiều <b>nghề nghiệp</b>.']),
    quiz: [
      { q: 'Ưu điểm của máy tính khi tính toán là:', o: ['Chậm và hay sai', 'Chỉ tính được số nhỏ', 'Nhanh và chính xác', 'Cần nhiều giấy'], a: 2, why: 'Máy tính tính toán nhanh và chính xác.' },
      { q: 'Người bán hàng dùng máy tính để:', o: ['Nấu ăn', 'Quét nhà', 'Trồng cây', 'Tính tiền cho khách'], a: 3, why: 'Máy tính giúp tính tiền nhanh, đúng.' } ] },
  { id: 't3', name: 'Vẽ, soạn bài và liên lạc', tip: 'Máy tính giúp em vẽ tranh và gọi video cho ông bà!',
    html: S4Q(['Kể thêm những việc máy tính <b>giúp em và gia đình</b>.', ''],
      ['Máy tính giúp em làm gì ngoài học?', '<b>Vẽ tranh</b>, soạn bài trình chiếu, nghe nhạc, xem phim.'],
      ['Gia đình dùng máy tính để liên lạc thế nào?', '<b>Gọi video</b>, nhắn tin với người thân ở xa.'],
      ['Giúp em <b>vẽ tranh</b>, soạn bài.', 'Giúp <span class="k">liên lạc</span> người thân.', 'Giúp <b>giải trí</b> lành mạnh.']),
    quiz: [
      { q: 'Muốn nói chuyện và nhìn thấy ông bà ở xa, em dùng:', o: ['Gọi video', 'Máy tính bỏ túi', 'Phần mềm vẽ', 'Bàn phím'], a: 0, why: 'Gọi video giúp vừa nghe vừa nhìn thấy người thân.' },
      { q: 'Việc nào máy tính KHÔNG làm thay em được?', o: ['Vẽ tranh', 'Nghe nhạc', 'Tính toán', 'Ăn cơm, ngủ nghỉ'], a: 3, why: 'Ăn, ngủ là việc em phải tự làm.' } ] },
  { id: 't4', name: 'Em vẫn phải tự suy nghĩ', tip: 'Máy tính là trợ thủ – người chủ là em!',
    html: S4Q(['Máy tính có làm <b>thay hết</b> mọi việc cho em không?', ''],
      ['Việc nào em cần tự làm?', '<b>Suy nghĩ</b>, đặt câu hỏi, sáng tạo, quyết định.'],
      ['Dùng máy tính quá nhiều có sao không?', 'Hại <b>mắt</b>, ít vận động; cần dùng <b>có giới hạn</b>.'],
      ['Máy tính là <span class="k">trợ thủ</span>.', 'Em tự <b>suy nghĩ, quyết định</b>.', 'Dùng máy <b>có giới hạn</b>.']),
    quiz: [
      { q: 'Câu nào ĐÚNG?', o: ['Máy tính làm thay em mọi việc', 'Máy tính trợ giúp, em vẫn phải tự suy nghĩ', 'Không cần học nữa', 'Dùng máy tính càng lâu càng tốt'], a: 1, why: 'Máy tính chỉ trợ giúp, em vẫn phải tự suy nghĩ.' },
      { q: 'Dùng máy tính liên tục quá lâu có thể:', o: ['Làm mắt tốt hơn', 'Giúp cao lớn', 'Hại mắt, ít vận động', 'Không ảnh hưởng gì'], a: 2, why: 'Cần nghỉ giải lao, dùng máy có giới hạn.' } ] },
  { id: 't5', name: 'Máy tính – người bạn', tip: 'Ôn lại: học, tính toán, vẽ, liên lạc!',
    html: S4Q(['Vẽ sơ đồ những việc <b>máy tính giúp em</b>.', ''],
      ['Máy tính trợ giúp em những việc nào?', '<b>Học tập</b>, tính toán, vẽ, soạn bài, liên lạc, giải trí.'],
      ['Em dùng máy tính thế nào cho tốt?', 'Đúng mục đích, <b>an toàn</b>, có thời gian nghỉ.'],
      ['Máy tính giúp <b>nhiều việc</b>.', 'Dùng <span class="k">đúng mục đích</span>.', 'An toàn, <b>có giới hạn</b>.']),
    quiz: [
      { q: 'Máy tính trợ giúp con người trong việc:', o: ['Học tập, làm việc, liên lạc', 'Chỉ chơi trò chơi', 'Chỉ xem phim', 'Không việc gì'], a: 0, why: 'Máy tính giúp học tập, làm việc, liên lạc, giải trí.' },
      { q: 'Dùng máy tính đúng cách là:', o: ['Chơi suốt đêm', 'Đúng mục đích, có giới hạn', 'Dùng khi đang ăn', 'Không nghỉ giải lao'], a: 1, why: 'Dùng đúng mục đích, có giới hạn để học tốt, khoẻ mạnh.' } ] },
];

const KEY = [
  'Giúp em<br><b>học tập</b>.',
  'Tính toán<br><b>nhanh, đúng</b>.',
  'Vẽ, soạn bài,<br><b>liên lạc</b>.',
  'Em vẫn tự<br><b>suy nghĩ</b>.',
  'Dùng <b>đúng<br>mục đích</b>.',
];
