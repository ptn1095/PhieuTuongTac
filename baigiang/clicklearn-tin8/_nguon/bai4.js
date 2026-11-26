/* ===== BÀI 4: ĐẠO ĐỨC VÀ VĂN HOÁ TRONG SỬ DỤNG CÔNG NGHỆ KĨ THUẬT SỐ ===== */
const META = { key: 'bai4', num: 4, theme: 'nghinle', title: 'Bài 4. Đạo đức và văn hoá trong sử dụng công nghệ kĩ thuật số', big: 'Đạo đức và<br>văn hoá số',
  st2: 'Chủ đề 3 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Mỗi đêm một câu chuyện: cùng học cách cư xử đẹp trên mạng nhé!',
  cert: 'Tin học 8 – Bài 4. Đạo đức và văn hoá số', file: 'Tin8_Bai4', pass: 8 };

const ILL_T = {
  t1: () => svg(`${person(130, 220, 1, '#FF006E')}${smart(300, 200, .7)}${person(470, 220, 1, '#1982C4', '#8D5524')}${bubble(380, 40, 190, 70, '#FFE0DC', 'Buồn quá…', 24)}
    ${pillS(70, 340, 460, 52, '#E5383B', 'Bắt nạt trên mạng là sai', 26)}`),
  t2: () => svg(`${tlist([[0, '#E5383B', 'Dùng tác phẩm không xin phép'], [0, '#E5383B', 'Quay lén, phát tán tin sai'], [0, '#E5383B', 'Truy cập trái phép tài khoản'], [0, '#E5383B', 'Gian lận thi cử bằng thiết bị']], 60, 96, 22)}`),
  t3: () => svg(`${doc(150, 170, 1.4)}${ball(150, 170, 46, '#8338EC', '©', 50)}${G(380, 160, 1, `<rect x="-80" y="-70" width="160" height="120" rx="14" fill="#8ECAE6" stroke="${O}" stroke-width="6"/><path d="M-70 40 L-20 -10 L20 30 L40 10 L72 40Z" fill="#2DA44E" stroke="${O}" stroke-width="5" stroke-linejoin="round"/><circle cx="40" cy="-34" r="16" fill="#FFD60A" stroke="${O}" stroke-width="5"/>`)}
    ${pillS(270, 250, 240, 46, '#FF7F11', 'Nguồn: tác giả A', 22)}${pillS(50, 330, 500, 54, '#2DA44E', 'Xin phép và ghi rõ nguồn', 26)}`),
  t4: () => svg(`${bubble(40, 40, 380, 70, '#DDF6C8', 'Bài viết hay quá bạn ơi!', 24)}${bubble(150, 150, 400, 70, '#FFF3BF', 'Mình góp ý nhỏ nhé…', 24)}
    ${tick(530, 75)}${tick(90, 185)}${pillS(60, 320, 480, 54, '#FF006E', 'Lịch sự, tôn trọng', 28)}${star(570, 380, 12, '#FFD60A')}`),
  t5: () => svg(`${shieldI(105, 210, 1.1, '#2EC4B6')}${[['#FF006E', 'Không bắt nạt'], ['#1982C4', 'Tôn trọng bản quyền'], ['#2DA44E', 'Không phát tán tin sai'], ['#8338EC', 'Giữ kín thông tin riêng']].map(([c, t], i) => tick(230, 70 + i*92, .8) + pillS(270, 44 + i*92, 300, 52, c, t, 22)).join('')}`),
};

const TOPICS = [
  { id: 't1', name: 'Chuyện gì đang xảy ra?', tip: 'Lời nói trên mạng cũng làm bạn bè vui hoặc buồn đó!',
    html: S4('Đọc tình huống: bạn A <b>đăng ảnh xấu</b> của bạn B lên mạng để trêu.',
      'Bạn B thấy <b>buồn, xấu hổ</b>. Đó là <b>bắt nạt trên mạng</b>.',
      'Nếu là bạn B, em cảm thấy thế nào? Em nên làm gì?',
      'Hành vi trên mạng cũng cần <span class="k">đạo đức</span> như ngoài đời.'),
    quiz: [
      { q: 'Đăng ảnh xấu của bạn lên mạng để trêu chọc là:', o: ['Hành động vui vẻ', 'Bắt nạt trên mạng', 'Việc nên làm', 'Chia sẻ kiến thức'], a: 1, why: 'Trêu chọc, làm bạn xấu hổ trên mạng là bắt nạt.' },
      { q: 'Khi bị bắt nạt trên mạng, em nên:', o: ['Báo với thầy cô, cha mẹ', 'Trả đũa lại ngay', 'Im lặng chịu đựng', 'Đăng bài nói xấu lại'], a: 0, why: 'Người lớn sẽ giúp em xử lí đúng cách.' } ] },
  { id: 't2', name: 'Hành vi vi phạm', tip: 'Có những việc trên mạng không chỉ sai mà còn vi phạm pháp luật!',
    html: S4('Tìm các hành vi <b>sai trái</b> khi dùng công nghệ số.',
      'Dùng tác phẩm <b>không xin phép</b>, quay lén, phát tán tin sai, gian lận thi cử…',
      'Đăng nhập trái phép tài khoản người khác có phạm luật không?',
      'Vi phạm có thể bị xử lí theo <span class="k">pháp luật</span>.'),
    quiz: [
      { q: 'Hành vi nào vi phạm đạo đức, pháp luật?', o: ['Học bài trên mạng', 'Hỏi bài thầy cô qua thư', 'Đăng nhập trái phép tài khoản bạn', 'Xem video khoa học'], a: 2, why: 'Truy cập trái phép tài khoản người khác là vi phạm.' },
      { q: 'Luật nào quy định về an ninh trên không gian mạng?', o: ['Luật Giao thông', 'Luật Đất đai', 'Luật Hôn nhân', 'Luật An ninh mạng'], a: 3, why: 'Luật An ninh mạng quy định về hoạt động trên không gian mạng.' } ] },
  { id: 't3', name: 'Tôn trọng bản quyền', tip: 'Mỗi bức ảnh, bài hát đều có “chủ nhân” – nhớ xin phép nha!',
    html: S4('Em muốn dùng một <b>bức ảnh đẹp</b> trên mạng cho bài thuyết trình.',
      'Ảnh, nhạc, bài viết, phần mềm… đều có <b>bản quyền</b> của tác giả.',
      'Chép bài văn của người khác rồi ghi tên mình là đúng hay sai?',
      '<span class="k">Xin phép</span>, ghi nguồn; không đạo văn, không dùng phần mềm lậu.'),
    quiz: [
      { q: 'Dùng ảnh của người khác trong bài, em cần:', o: ['Ghi rõ nguồn, xin phép khi cần', 'Cắt bỏ tên tác giả', 'Nói là ảnh của mình', 'Bán lại bức ảnh'], a: 0, why: 'Ghi nguồn, xin phép là tôn trọng bản quyền tác giả.' },
      { q: 'Chép bài của người khác rồi nhận là của mình gọi là:', o: ['Sáng tạo', 'Trích dẫn', 'Đạo văn', 'Tham khảo'], a: 2, why: 'Đó là đạo văn – hành vi thiếu trung thực.' } ] },
  { id: 't4', name: 'Ứng xử có văn hoá', tip: 'Một lời khen dễ thương làm cả ngày của bạn vui hơn!',
    html: S4('Viết một <b>bình luận lịch sự</b> dưới bài đăng của bạn.',
      'Lời lẽ <b>tôn trọng</b>; không nói tục, không bôi nhọ người khác.',
      'Trước khi đăng ảnh có bạn bè, em cần làm gì?',
      'Ứng xử trên mạng <span class="k">lịch sự, tôn trọng</span>.'),
    quiz: [
      { q: 'Bình luận nào thể hiện văn hoá trên mạng?', o: ['Chê bai bằng lời nặng nề', 'Dùng từ ngữ thô tục', 'Viết chữ in hoa để quát', 'Góp ý nhẹ nhàng, lịch sự'], a: 3, why: 'Góp ý lịch sự thể hiện văn hoá và sự tôn trọng.' },
      { q: 'Trước khi đăng ảnh có mặt bạn bè, em nên:', o: ['Đăng luôn cho nhanh', 'Hỏi ý kiến các bạn', 'Thêm chú thích chế giễu', 'Gắn thẻ người lạ'], a: 1, why: 'Cần tôn trọng quyền riêng tư của bạn bè.' } ] },
  { id: 't5', name: 'Tổng kết bài học', tip: 'Cùng làm công dân số văn minh nào!',
    html: S4('Lập <b>bộ quy tắc</b> ứng xử trên mạng cho lớp em.',
      'Không bắt nạt, tôn trọng <b>bản quyền</b>, không phát tán tin sai.',
      'Bảo vệ <b>thông tin cá nhân</b> của mình và của người khác.',
      'Là <span class="k">công dân số</span> văn minh, có trách nhiệm.'),
    quiz: [
      { q: 'Việc nào thể hiện công dân số có trách nhiệm?', o: ['Chia sẻ tin chưa kiểm chứng', 'Kiểm chứng tin trước khi chia sẻ', 'Dùng phần mềm bẻ khoá', 'Đăng thông tin riêng của bạn'], a: 1, why: 'Kiểm chứng giúp không lan truyền tin sai.' },
      { q: 'Thông tin nào KHÔNG nên đăng công khai lên mạng?', o: ['Bài học hay', 'Lời chúc sinh nhật', 'Địa chỉ nhà, số điện thoại', 'Ảnh phong cảnh'], a: 2, why: 'Thông tin cá nhân có thể bị kẻ xấu lợi dụng.' } ] },
];

const KEY = [
  'Không <b>bắt nạt</b><br>trên mạng.',
  'Vi phạm có thể<br>bị xử lí theo<br><b>pháp luật</b>.',
  'Tôn trọng<br><b>bản quyền</b>.',
  'Bình luận <b>lịch sự,<br>tôn trọng</b>.',
  'Làm <b>công dân số</b><br>văn minh.',
];
