/* ===== BÀI 7: SẮP XẾP ĐỂ DỄ TÌM ===== */
const META = { key: 'bai7', num: 7, theme: 'samac', ic: '🗂️', cd: 3, en: 'Sắp xếp để dễ tìm',
  title: 'Bài 7. Sắp xếp để dễ tìm', big: 'Sắp xếp<br>để dễ tìm',
  st2: 'Chủ đề 3 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Giữa sa mạc mênh mông, đồ đạc gọn gàng thì mới dễ tìm! Bắt đầu nào!',
  cert: 'Tin học 3 – Bài 7. Sắp xếp để dễ tìm', file: 'Tin3_Bai7', pass: 8 };

const shelf = (x, y, w, rows) => `<rect x="${x}" y="${y}" width="${w}" height="${rows.length*80 + 20}" rx="10" fill="#C68B59" ${ST}/>${rows.map((r, i) => `<rect x="${x + 10}" y="${y + 10 + i*80}" width="${w - 20}" height="70" fill="#FFF3BF" stroke="${O}" stroke-width="4"/>${r.map((c, k) => `<rect x="${x + 20 + k*30}" y="${y + 20 + i*80}" width="24" height="56" rx="4" fill="${c}" stroke="${O}" stroke-width="3"/>`).join('')}`).join('')}`;
const COVER = () => svgC(`${shelf(80, 40, 230, [['#FF006E', '#FF006E', '#FF006E', '#1982C4', '#1982C4', '#1982C4'], ['#2DA44E', '#2DA44E', '#FFC300', '#FFC300', '#FFC300', '#8338EC']])}${mag(450, 150, 1)}${star(560, 40, 14, '#FFD60A')}${pillS(330, 270, 240, 50, '#FF7F11', 'Gọn gàng', 24)}`);
const ILL_T = {
  t1: () => svg(`${book(150, 150, .7)}${pencil(110, 250, .6, -30)}${apple(230, 230, .8)}${cross(230, 80, .9)}
    ${shelf(350, 50, 200, [['#FF006E', '#FF006E', '#1982C4', '#1982C4', '#2DA44E'], ['#FFC300', '#FFC300', '#8338EC', '#8338EC', '#FF7F11']])}${tick(560, 40, .8)}
    ${pillS(20, 340, 250, 50, '#E5383B', 'Lộn xộn', 24)}${pillS(330, 340, 250, 50, '#2DA44E', 'Gọn gàng', 24)}`),
  t2: () => svg(`${shelf(60, 40, 260, [['#FF006E', '#FF006E', '#FF006E', '#FF006E'], ['#1982C4', '#1982C4', '#1982C4'], ['#2DA44E', '#2DA44E', '#2DA44E', '#2DA44E', '#2DA44E']])}
    ${pillS(350, 60, 220, 50, '#FF006E', 'Tiếng Việt', 22)}${pillS(350, 140, 220, 50, '#1982C4', 'Toán', 22)}${pillS(350, 220, 220, 50, '#2DA44E', 'Tin học', 22)}
    ${pillS(110, 345, 380, 50, '#8338EC', 'Xếp theo nhóm', 26)}`),
  t3: () => svg(`${['An', 'Bình', 'Cúc', 'Dũng', 'Hoa'].map((t, i) => pillS(60 + i*20, 30 + i*58, 230, 48, ['#FF006E', '#FF7F11', '#2DA44E', '#1982C4', '#8338EC'][i], t, 24)).join('')}
    ${pillS(370, 120, 200, 70, '#FFC300', 'A → Z', 34, 0, O)}${pillS(70, 345, 460, 50, '#1982C4', 'Xếp theo bảng chữ cái', 24)}`),
  t4: () => svg(`${folder(140, 120, 1.2, '#FFC300', 'Ảnh')}${folder(440, 120, 1.2, '#FF7F11', 'Bài học')}${fileI(90, 270, .7, '#2DA44E')}${fileI(190, 270, .7, '#2DA44E')}${fileI(400, 270, .7, '#1982C4')}${fileI(490, 270, .7, '#1982C4')}
    ${pillS(110, 350, 380, 46, '#8338EC', 'Máy tính cũng sắp xếp', 22)}`),
  t5: () => svg(`${vflow([['#FF7F11', 'Chia nhóm'], ['#1982C4', 'Xếp theo thứ tự'], ['#2DA44E', 'Tìm nhanh, dễ dàng']], 150, 40, 300, 110, 26)}${star(60, 60, 14, '#FFD60A')}`),
};

const TOPICS = [
  { id: 't1', name: 'Gọn gàng thì dễ tìm', tip: 'Đồ đạc lộn xộn thì tìm mãi không ra!',
    html: S4Q(['So sánh: tìm bút trong cặp <b>lộn xộn</b> và cặp <b>gọn gàng</b>.', ''],
      ['Cặp nào giúp em tìm bút nhanh hơn?', 'Cặp <b>gọn gàng</b>, đồ được xếp đúng chỗ.'],
      ['Vì sao cần sắp xếp đồ vật?', 'Để <b>dễ tìm</b>, <b>tiết kiệm thời gian</b>, nhìn đẹp mắt.'],
      ['Sắp xếp giúp <span class="k">dễ tìm</span>.', 'Tiết kiệm <b>thời gian</b>.', 'Nhà cửa, cặp sách <b>gọn đẹp</b>.']),
    quiz: [
      { q: 'Vì sao nên sắp xếp sách vở gọn gàng?', o: ['Để sách nặng hơn', 'Để dễ tìm khi cần', 'Để mất sách', 'Để đỡ phải học'], a: 1, why: 'Sắp xếp gọn gàng giúp tìm nhanh khi cần.' },
      { q: 'Đồ đạc để lộn xộn sẽ:', o: ['Khó tìm, mất thời gian', 'Dễ tìm hơn', 'Đẹp hơn', 'Không ảnh hưởng gì'], a: 0, why: 'Đồ lộn xộn khiến em mất nhiều thời gian tìm kiếm.' } ] },
  { id: 't2', name: 'Xếp theo nhóm', tip: 'Sách cùng môn để cùng một ngăn nhé!',
    html: S4Q(['Xếp sách vở trên giá sao cho <b>dễ tìm</b> nhất.', 'Gợi ý: nghĩ về các môn học.'],
      ['Em có thể chia sách thành những nhóm nào?', 'Chia theo <b>môn học</b>: Tiếng Việt, Toán, Tin học…'],
      ['Sau khi chia nhóm, tìm sách thế nào?', 'Tìm đúng <b>ngăn</b> của môn đó là thấy ngay.'],
      ['Chia đồ vật thành <span class="k">các nhóm</span>.', 'Mỗi nhóm để <b>một chỗ</b>.', 'Tìm đúng nhóm là <b>thấy ngay</b>.']),
    quiz: [
      { q: 'Cách xếp sách nào giúp tìm nhanh nhất?', o: ['Để chung một đống', 'Xếp theo màu bìa ngẫu nhiên', 'Xếp theo môn học', 'Để rải khắp nhà'], a: 2, why: 'Xếp theo môn học giúp tìm đúng sách nhanh.' },
      { q: 'Ở thư viện, sách được xếp:', o: ['Ngẫu nhiên', 'Theo chiều cao người đọc', 'Theo ngày mua', 'Theo từng loại, từng chủ đề'], a: 3, why: 'Thư viện xếp sách theo loại, chủ đề để dễ tìm.' } ] },
  { id: 't3', name: 'Xếp theo thứ tự', tip: 'Từ điển xếp theo A, B, C – tìm từ cực nhanh!',
    html: S4Q(['Danh sách lớp được xếp theo <b>thứ tự</b> nào?', ''],
      ['Từ điển xếp các từ theo thứ tự gì?', 'Theo <b>bảng chữ cái</b> A, B, C…'],
      ['Xếp theo thứ tự giúp gì?', 'Tìm <b>nhanh hơn</b>, không phải xem từng thứ một.'],
      ['Xếp theo <span class="k">bảng chữ cái</span>.', 'Hoặc theo <b>số thứ tự</b>, kích thước.', 'Có thứ tự → <b>tìm nhanh</b>.']),
    quiz: [
      { q: 'Từ điển tiếng Việt sắp xếp các từ theo:', o: ['Bảng chữ cái', 'Độ dài của từ', 'Màu sắc', 'Ngẫu nhiên'], a: 0, why: 'Từ điển xếp theo thứ tự bảng chữ cái.' },
      { q: 'Xếp các tên: Hoa, An, Dũng theo bảng chữ cái, tên đứng đầu là:', o: ['Hoa', 'An', 'Dũng', 'Không xếp được'], a: 1, why: 'Chữ A đứng trước D và H.' } ] },
  { id: 't4', name: 'Sắp xếp trong máy tính', tip: 'Máy tính cũng có "ngăn kéo" để cất thông tin!',
    html: S4Q(['Máy tính có rất nhiều bài vẽ, bài viết. Làm sao để <b>dễ tìm</b>?', ''],
      ['Thông tin trong máy tính cần sắp xếp không?', '<b>Có</b>, giống như sách vở, đồ dùng của em.'],
      ['Máy tính cất thông tin vào đâu?', 'Vào các <b>thư mục</b> – giống những chiếc ngăn kéo.'],
      ['Thông tin cũng cần <b>sắp xếp</b>.', 'Cất vào các <span class="k">thư mục</span>.', 'Đặt tên rõ ràng, <b>dễ tìm</b>.']),
    quiz: [
      { q: 'Trong máy tính, thông tin được sắp xếp vào:', o: ['Bàn phím', 'Màn hình', 'Thư mục', 'Con chuột'], a: 2, why: 'Thư mục giống ngăn kéo để cất thông tin.' },
      { q: 'Nên đặt tên thư mục chứa ảnh gia đình là:', o: ['abc', '123', 'xyz', 'Ảnh gia đình'], a: 3, why: 'Tên rõ nghĩa giúp dễ nhận ra và dễ tìm.' } ] },
  { id: 't5', name: 'Em là nhà sắp xếp', tip: 'Ôn lại: chia nhóm – xếp thứ tự – dễ tìm!',
    html: S4Q(['Nêu cách em <b>sắp xếp</b> góc học tập của mình.', ''],
      ['Có những cách sắp xếp nào?', 'Xếp theo <b>nhóm</b>, theo <b>thứ tự</b> (chữ cái, số).'],
      ['Sắp xếp mang lại lợi ích gì?', 'Tìm <b>nhanh</b>, <b>dễ dàng</b>, gọn đẹp.'],
      ['Chia <b>nhóm</b> hợp lí.', 'Xếp theo <span class="k">thứ tự</span>.', 'Tìm kiếm <b>nhanh, dễ</b>.']),
    quiz: [
      { q: 'Lợi ích của việc sắp xếp là:', o: ['Tìm kiếm nhanh, dễ dàng', 'Mất nhiều thời gian hơn', 'Làm đồ vật hỏng', 'Không có lợi ích'], a: 0, why: 'Sắp xếp hợp lí giúp tìm kiếm nhanh, dễ dàng.' },
      { q: 'Danh sách học sinh thường được xếp theo:', o: ['Chiều cao', 'Tên theo bảng chữ cái', 'Màu áo', 'Cân nặng'], a: 1, why: 'Danh sách lớp xếp theo tên theo bảng chữ cái.' } ] },
];

const KEY = [
  'Gọn gàng<br>→ <b>dễ tìm</b>.',
  'Chia thành<br><b>các nhóm</b>.',
  'Xếp theo<br><b>bảng chữ cái</b>.',
  'Máy tính cất vào<br><b>thư mục</b>.',
  'Nhóm + thứ tự<br>→ <b>tìm nhanh</b>.',
];
