/* ===== BÀI 10: SƠ ĐỒ TƯ DUY ===== */
const META = { key: 'bai10', theme: 'go', num: 10, title: 'Bài 10. Sơ đồ tư duy', big: 'Sơ đồ<br>tư duy',
  st2: 'Chủ đề 5 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Cùng vẽ sơ đồ tư duy cho dễ nhớ nhé!',
  cert: 'Tin học 6 – Bài 10. Sơ đồ tư duy', file: 'Tin6_Bai10', pass: 8 };

const ILL_T = {
  t1: () => svg(`${paper(40, 50, 220, 300)}${txt(150, 380, 'Chữ dài', 26)}${arr(280, 200, 330, 200, '#FF7F11')}${mindmap(460, 200, .5, 'Bài học')}${txt(460, 380, 'Dễ nhớ', 26, '#2DA44E')}`),
  t2: () => svg(`${mindmap(300, 200, 1, 'Chủ đề')}${txt(300, 40, 'Nhánh – từ khoá – màu – hình', 22, '#8338EC')}`),
  t3: () => svg(`${tlist([[1, '#2DA44E', 'Dễ nhớ, dễ ôn bài'], [1, '#1982C4', 'Thấy rõ mối liên hệ'], [1, '#FF7F11', 'Sáng tạo, sinh động'], [1, '#8338EC', 'Vẽ tay hoặc bằng phần mềm']], 60, 96, 24)}`),
  t4: () => svg(`${laptop(180, 60, 1, `${mindmap(120, 75, .26, 'Gia đình')}`)}${pillS(30, 260, 260, 50, '#1982C4', 'Thêm chủ đề chính', 22)}${pillS(310, 260, 260, 50, '#2DA44E', 'Thêm nhánh con', 22)}
    ${pillS(120, 330, 360, 50, '#FF7F11', 'Định dạng → Lưu', 24)}`),
  t5: () => svg(`${mindmap(300, 210, .9, 'Tin học 6')}${star(40, 40, 14, '#FFD60A')}${star(560, 40, 12, '#FF006E')}`),
};

const TOPICS = [
  { id: 't1', name: 'Ghi nhớ thế nào cho dễ?', tip: 'Một hình vẽ có thể thay cho cả trang chữ!',
    html: S4('So sánh ghi bài bằng <b>chữ dài</b> và bằng <b>sơ đồ</b>.',
      'Sơ đồ có từ khoá, màu sắc, hình ảnh – nhìn là <b>nhớ ngay</b>.',
      'Em đã từng vẽ sơ đồ để ôn bài chưa?',
      '<span class="k">Sơ đồ tư duy</span> giúp ghi nhớ nhanh, lâu.'),
    quiz: [
      { q: 'Sơ đồ tư duy giúp em:', o: ['Ghi nhớ bài dễ hơn', 'Tốn nhiều giấy hơn', 'Quên bài nhanh', 'Viết chữ đẹp hơn'], a: 0, why: 'Từ khoá, màu sắc, hình ảnh giúp ghi nhớ nhanh hơn.' },
      { q: 'So với ghi chữ dài, sơ đồ tư duy:', o: ['Khó nhìn hơn', 'Không có từ khoá', 'Ngắn gọn, trực quan hơn', 'Chỉ có một màu'], a: 2, why: 'Sơ đồ tư duy ngắn gọn, nhìn trực quan.' } ] },
  { id: 't2', name: 'Cấu tạo sơ đồ tư duy', tip: 'Chủ đề chính ở giữa, các nhánh toả ra như cây!',
    html: S4('Quan sát một sơ đồ tư duy mẫu.',
      '<b>Chủ đề chính</b> ở trung tâm; các <b>nhánh</b> là chủ đề con toả ra.',
      'Trên nhánh nên ghi câu dài hay <b>từ khoá</b> ngắn?',
      'Dùng <span class="k">từ khoá, màu sắc, hình ảnh</span>.'),
    quiz: [
      { q: 'Chủ đề chính của sơ đồ tư duy đặt ở:', o: ['Góc trên bên trái', 'Cuối trang', 'Trung tâm', 'Ngoài tờ giấy'], a: 2, why: 'Chủ đề chính đặt ở giữa, các nhánh toả ra xung quanh.' },
      { q: 'Trên mỗi nhánh nên ghi:', o: ['Một đoạn văn dài', 'Từ khoá ngắn gọn', 'Cả bài học', 'Không ghi gì'], a: 1, why: 'Từ khoá ngắn giúp sơ đồ gọn, dễ nhớ.' } ] },
  { id: 't3', name: 'Ưu điểm và cách vẽ', tip: 'Vẽ tay hay dùng máy tính đều được!',
    html: S4('Nêu <b>ưu điểm</b> của sơ đồ tư duy.',
      'Dễ nhớ, thấy rõ <b>mối liên hệ</b> giữa các ý, kích thích sáng tạo.',
      'Có thể vẽ trên <b>giấy</b> hoặc bằng <b>phần mềm</b>. Cách nào dễ sửa hơn?',
      'Vẽ bằng phần mềm: <span class="k">dễ sửa, dễ chia sẻ</span>.'),
    quiz: [
      { q: 'Ưu điểm của vẽ sơ đồ tư duy bằng phần mềm là:', o: ['Không sửa được', 'Tốn nhiều bút màu', 'Phải vẽ lại từ đầu', 'Dễ sửa, dễ chia sẻ'], a: 3, why: 'Phần mềm cho phép sửa, lưu và chia sẻ dễ dàng.' },
      { q: 'Sơ đồ tư duy giúp thấy rõ:', o: ['Mối liên hệ giữa các ý', 'Số trang sách', 'Giá tiền', 'Thời tiết'], a: 0, why: 'Các nhánh cho thấy ý nào liên quan đến ý nào.' } ] },
  { id: 't4', name: 'Vẽ bằng phần mềm', tip: 'Thêm chủ đề chính, thêm nhánh, tô màu – xong!',
    html: S4('Dùng phần mềm vẽ sơ đồ chủ đề <b>"Gia đình em"</b>.',
      'Tạo <b>chủ đề chính</b> → thêm <b>nhánh</b> chủ đề con → thêm nhánh nhỏ.',
      'Đổi màu, phông chữ, chèn hình cho sơ đồ thêm sinh động.',
      'Nhớ <span class="k">lưu</span> sơ đồ vào máy tính.'),
    quiz: [
      { q: 'Bước đầu tiên khi vẽ sơ đồ tư duy là:', o: ['Tô màu', 'Tạo chủ đề chính', 'In ra giấy', 'Lưu tệp'], a: 1, why: 'Có chủ đề chính rồi mới thêm các nhánh.' },
      { q: 'Muốn sơ đồ sinh động hơn, em có thể:', o: ['Xoá hết nhánh', 'Viết thật nhiều chữ', 'Chỉ dùng màu đen', 'Đổi màu, chèn hình ảnh'], a: 3, why: 'Màu sắc và hình ảnh làm sơ đồ sinh động, dễ nhớ.' } ] },
  { id: 't5', name: 'Tổng kết bài học', tip: 'Ôn nhanh: chủ đề chính – nhánh – từ khoá!',
    html: S4('Tóm tắt bài bằng 3 ý chính.',
      'Sơ đồ tư duy: <b>chủ đề chính</b> ở giữa, các <b>nhánh</b> toả ra.',
      'Dùng từ khoá, màu sắc, hình ảnh; vẽ tay hoặc phần mềm.',
      'Giúp <span class="k">ghi nhớ, sắp xếp ý</span> hiệu quả.'),
    quiz: [
      { q: 'Các nhánh trong sơ đồ tư duy thể hiện:', o: ['Các chủ đề con', 'Tên người vẽ', 'Ngày tháng', 'Số trang'], a: 0, why: 'Mỗi nhánh là một chủ đề con của chủ đề chính.' },
      { q: 'Câu nào đúng?', o: ['Sơ đồ chỉ vẽ được trên giấy', 'Sơ đồ không có màu', 'Có thể vẽ sơ đồ bằng phần mềm', 'Sơ đồ phải viết câu dài'], a: 2, why: 'Có thể vẽ trên giấy hoặc bằng phần mềm máy tính.' } ] },
];

const KEY = [
  'Sơ đồ giúp<br><b>dễ nhớ</b>.',
  'Chủ đề chính<br>+ <b>nhánh</b>.',
  'Thấy rõ<br><b>mối liên hệ</b>.',
  'Phần mềm:<br><b>dễ sửa</b>.',
  'Từ khoá, màu,<br><b>hình ảnh</b>.',
];
