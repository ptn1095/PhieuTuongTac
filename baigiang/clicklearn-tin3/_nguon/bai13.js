/* ===== BÀI 13: LUYỆN TẬP SỬ DỤNG CHUỘT ===== */
const META = { key: 'bai13', num: 13, theme: 'chibi', ic: '🐭', cd: 5, en: 'Luyện tập sử dụng chuột',
  title: 'Bài 13. Luyện tập sử dụng chuột', big: 'Luyện tập<br>sử dụng chuột',
  st2: 'Chủ đề 5 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Các bạn thú cưng thách em: ai dùng chuột khéo nhất nào?',
  cert: 'Tin học 3 – Bài 13. Luyện tập sử dụng chuột', file: 'Tin3_Bai13', pass: 8 };

const aim = (x, y, r = 40) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#fff" ${ST}/><circle cx="${x}" cy="${y}" r="${r*.66}" fill="#E5383B"/><circle cx="${x}" cy="${y}" r="${r*.33}" fill="#fff"/>`;
const COVER = () => svgC(`${mouseI(160, 190, 1.2, 'L')}${aim(400, 150, 70)}${cursor(400, 150, 1)}${star(560, 40, 14, '#FFD60A')}${star(40, 40, 12, '#FF006E')}`);
const ILL_T = {
  t1: () => svg(`${monitor(60, 50, 260, 170, `${pillS(90, 80, 200, 44, '#2DA44E', 'Mức 1', 22)}${pillS(90, 140, 200, 44, '#FF7F11', 'Mức 2', 22)}${cursor(260, 110, .7)}`)}${mouseI(470, 170, 1, 'L')}
    ${pillS(60, 330, 480, 54, '#8338EC', 'Phần mềm luyện chuột', 26)}`),
  t2: () => svg(`${aim(150, 150, 60)}${cursor(150, 150, 1)}${aim(400, 110, 40)}${aim(480, 230, 30)}
    ${pillS(40, 320, 520, 54, '#FF006E', 'Di chuyển, nháy trúng đích', 24)}`),
  t3: () => svg(`${folder(160, 150, 1.3, '#FFC300')}${cursor(180, 160, 1)}${pillS(300, 90, 260, 54, '#FF7F11', 'Nháy, nháy!', 26)}${arr(300, 200, 250, 170, O, 6)}
    ${pillS(40, 320, 520, 54, '#1982C4', 'Nháy đúp: 2 lần thật nhanh', 24)}`),
  t4: () => svg(`${apple(120, 150, 1.4)}${dline(160, 150, 420, 150, '#FF006E')}${arrowHead(420, 150, 0, '#FF006E')}${basket(400, 140, 160, '#FFC300', 'Giỏ')}
    ${pillS(40, 320, 520, 54, '#2DA44E', 'Kéo thả quả táo vào giỏ', 24)}`),
  t5: () => svg(`${vflow([['#1982C4', 'Di chuyển chuột'], ['#FF006E', 'Nháy, nháy đúp'], ['#2DA44E', 'Kéo thả']], 150, 40, 300, 110, 26)}${star(60, 60, 14, '#FFD60A')}`),
};

const TOPICS = [
  { id: 't1', name: 'Phần mềm luyện chuột', tip: 'Chơi mà học – chuột sẽ ngoan ngoãn nghe lời em!',
    html: S4Q(['Mở <b>phần mềm luyện tập chuột</b> theo hướng dẫn của thầy cô.', ''],
      ['Phần mềm luyện chuột giúp gì?', 'Giúp em dùng chuột <b>nhanh, chính xác</b> qua trò chơi.'],
      ['Phần mềm có các mức luyện tập nào?', 'Từ <b>dễ đến khó</b>: di chuyển, nháy, nháy đúp, kéo thả.'],
      ['Luyện chuột qua <span class="k">trò chơi</span>.', 'Đi từ <b>dễ đến khó</b>.', 'Giúp em <b>khéo léo</b> hơn.']),
    quiz: [
      { q: 'Phần mềm luyện tập chuột giúp em:', o: ['Gõ phím nhanh', 'Dùng chuột thành thạo', 'Vẽ tranh', 'Nghe nhạc'], a: 1, why: 'Phần mềm giúp luyện các thao tác chuột.' },
      { q: 'Các mức luyện tập trong phần mềm được sắp xếp:', o: ['Từ dễ đến khó', 'Từ khó đến dễ', 'Ngẫu nhiên', 'Chỉ có 1 mức'], a: 0, why: 'Luyện từ dễ đến khó giúp em tiến bộ dần.' } ] },
  { id: 't2', name: 'Di chuyển và nháy chuột', tip: 'Đưa con trỏ vào đích rồi nháy thật gọn!',
    html: S4Q(['Đưa con trỏ chuột trúng <b>hồng tâm</b> rồi nháy chuột.', ''],
      ['Di chuyển chuột thế nào cho chính xác?', 'Di <b>nhẹ nhàng</b>, mắt theo dõi <b>con trỏ</b> trên màn hình.'],
      ['Nháy chuột là thao tác gì?', 'Nhấn nút <b>trái</b> một lần rồi <b>thả</b> ngay.'],
      ['Di chuyển chuột <span class="k">nhẹ nhàng</span>.', 'Mắt nhìn theo <b>con trỏ</b>.', 'Nháy: nhấn trái <b>1 lần</b>.']),
    quiz: [
      { q: 'Khi di chuyển chuột, mắt em nhìn theo:', o: ['Bàn phím', 'Dây chuột', 'Con trỏ trên màn hình', 'Bạn bên cạnh'], a: 2, why: 'Nhìn theo con trỏ giúp di chuyển chính xác.' },
      { q: 'Nháy chuột là nhấn nút trái:', o: ['3 lần', 'Giữ thật lâu', '2 lần thật nhanh', '1 lần rồi thả'], a: 3, why: 'Nháy chuột là nhấn nút trái một lần rồi thả.' } ] },
  { id: 't3', name: 'Luyện nháy đúp', tip: 'Nháy đúp phải nhanh, không di chuột giữa hai lần nháy!',
    html: S4Q(['Nháy đúp vào biểu tượng để <b>mở</b> nó ra.', 'Gợi ý: giữ chuột thật yên.'],
      ['Nháy đúp thế nào cho thành công?', 'Nhấn nút trái <b>2 lần liên tiếp thật nhanh</b>, chuột không xê dịch.'],
      ['Nháy đúp thường dùng để làm gì?', 'Để <b>mở</b> thư mục, tệp, phần mềm.'],
      ['Nháy <span class="k">2 lần thật nhanh</span>.', 'Giữ chuột <b>yên</b> khi nháy.', 'Dùng để <b>mở</b> đối tượng.']),
    quiz: [
      { q: 'Nháy đúp chuột là:', o: ['Nhấn nút trái 2 lần nhanh', 'Nhấn nút phải 1 lần', 'Lăn con lăn', 'Kéo chuột đi xa'], a: 0, why: 'Nháy đúp: nhấn nút trái hai lần liên tiếp thật nhanh.' },
      { q: 'Nháy đúp không thành công vì em:', o: ['Nháy quá nhanh', 'Giữ chuột yên', 'Nháy chậm hoặc xê dịch chuột', 'Nhìn màn hình'], a: 2, why: 'Hai lần nháy phải nhanh và chuột không xê dịch.' } ] },
  { id: 't4', name: 'Luyện kéo thả', tip: 'Giữ chặt nút trái – kéo đi – thả ra đúng chỗ!',
    html: S4Q(['Kéo thả các quả táo vào <b>giỏ</b>.', ''],
      ['Các bước kéo thả là gì?', 'Đưa trỏ vào vật → <b>nhấn giữ</b> nút trái → <b>di chuyển</b> → <b>thả</b> tay.'],
      ['Nếu thả tay giữa chừng thì sao?', 'Vật sẽ <b>dừng lại</b> giữa đường, phải kéo lại.'],
      ['<b>Nhấn giữ</b> nút trái.', '<span class="k">Di chuyển</span> đến đích.', '<b>Thả</b> tay đúng chỗ.']),
    quiz: [
      { q: 'Khi kéo thả, em phải nhấn giữ:', o: ['Nút phải', 'Phím cách', 'Nút trái', 'Con lăn'], a: 2, why: 'Nhấn giữ nút trái trong khi di chuyển chuột.' },
      { q: 'Thao tác nào dùng để đưa quả táo vào giỏ trên màn hình?', o: ['Nháy đúp', 'Lăn chuột', 'Nhấn Enter', 'Kéo thả'], a: 3, why: 'Kéo thả giúp di chuyển đối tượng đến chỗ mới.' } ] },
  { id: 't5', name: 'Nhà vô địch chuột', tip: 'Ôn lại: di chuyển – nháy – nháy đúp – kéo thả!',
    html: S4Q(['Thi đua với bạn: ai hoàn thành <b>các mức</b> nhanh nhất?', ''],
      ['Em đã luyện những thao tác nào?', 'Di chuyển, <b>nháy chuột</b>, <b>nháy đúp</b>, <b>kéo thả</b>.'],
      ['Làm sao để dùng chuột giỏi hơn?', '<b>Luyện tập</b> thường xuyên, cầm chuột đúng cách.'],
      ['Thành thạo <b>4 thao tác</b> chuột.', 'Cầm chuột <span class="k">đúng cách</span>.', 'Luyện tập <b>thường xuyên</b>.']),
    quiz: [
      { q: 'Thao tác chuột nào dùng để chọn một đối tượng?', o: ['Nháy chuột', 'Kéo thả', 'Lăn chuột', 'Tắt máy'], a: 0, why: 'Nháy chuột vào đối tượng để chọn nó.' },
      { q: 'Để dùng chuột thành thạo, em cần:', o: ['Bấm thật mạnh', 'Luyện tập thường xuyên', 'Đổi chuột mới', 'Dùng hai tay'], a: 1, why: 'Luyện tập thường xuyên giúp em thành thạo.' } ] },
];

const KEY = [
  'Luyện chuột<br>qua <b>trò chơi</b>.',
  'Nháy: trái<br><b>1 lần</b>.',
  'Nháy đúp:<br><b>2 lần nhanh</b>.',
  'Giữ – kéo<br>– <b>thả</b>.',
  'Luyện tập<br><b>thường xuyên</b>.',
];
