/* ===== BÀI 14: THỰC HÀNH TỔNG HỢP – HOÀN THIỆN SỔ LƯU NIỆM ===== */
const META = { key: 'bai14', theme: 'laudai', num: 14, title: 'Bài 14. Thực hành tổng hợp: Hoàn thiện sổ lưu niệm', big: 'Hoàn thiện<br>sổ lưu niệm',
  st2: 'Chủ đề 5 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Cùng làm một cuốn sổ lưu niệm thật đẹp cho lớp nhé!',
  cert: 'Tin học 6 – Bài 14. Hoàn thiện sổ lưu niệm', file: 'Tin6_Bai14', pass: 8 };

const album = (x, y, s = 1) => G(x, y, s, `<rect x="-110" y="-80" width="220" height="160" rx="14" fill="#FF7F11" ${ST}/><rect x="-96" y="-66" width="192" height="132" rx="8" fill="#FFF3BF" ${ST}/>
  <text x="0" y="-22" text-anchor="middle" font-size="26" fill="${O}" ${F}>Sổ lưu niệm</text><text x="0" y="14" text-anchor="middle" font-size="22" fill="#E5383B" ${F}>Lớp 6A</text>
  <path d="M-30 40 Q0 26 30 40" fill="none" stroke="#FF006E" stroke-width="6" stroke-linecap="round"/>`);
const ILL_T = {
  t1: () => svg(`${album(300, 170, 1.4)}${pillS(30, 340, 170, 46, '#1982C4', 'Ảnh lớp', 22)}${pillS(215, 340, 170, 46, '#2DA44E', 'Lời chúc', 22)}${pillS(400, 340, 170, 46, '#8338EC', 'Kỉ niệm', 22)}${star(60, 60, 16, '#FFD60A')}${star(540, 60, 14, '#FF006E')}`),
  t2: () => svg(`${mindmap(300, 190, .95, 'Sổ lưu niệm')}${pillS(160, 350, 280, 46, '#8338EC', 'Lên kế hoạch', 24)}`),
  t3: () => svg(`${tlist([[1, '#1982C4', 'Định dạng kí tự, đoạn văn'], [1, '#2DA44E', 'Bảng thông tin các bạn'], [1, '#FF7F11', 'Chèn hình ảnh minh hoạ'], [1, '#8338EC', 'Trình bày hài hoà']], 60, 96, 22)}`),
  t4: () => svg(`${vflow([['#1982C4', 'Tìm, thay thế sửa lỗi'], ['#FF7F11', 'Định dạng trang'], ['#2DA44E', 'Lưu tệp (Ctrl + S)'], ['#8338EC', 'In (Ctrl + P)']], 130, 26, 340, 98, 24)}`),
  t5: () => svg(`${album(190, 190, 1)}${pillS(340, 90, 230, 50, '#2DA44E', 'Đẹp, đủ ý', 24)}${pillS(340, 180, 230, 50, '#1982C4', 'Hợp tác tốt', 24)}${pillS(340, 270, 230, 50, '#FF7F11', 'Chia sẻ', 24)}${star(560, 380, 14, '#FFD60A')}`),
};

const TOPICS = [
  { id: 't1', name: 'Ý tưởng sổ lưu niệm', tip: 'Sổ lưu niệm lưu giữ kỉ niệm đẹp của cả lớp!',
    html: S4('Thảo luận: sổ lưu niệm lớp em gồm <b>những phần nào</b>?',
      'Trang bìa, giới thiệu lớp, thông tin các bạn, ảnh, lời chúc, kỉ niệm.',
      'Em sẽ dùng kiến thức nào đã học để làm sổ?',
      'Vận dụng <span class="k">soạn thảo văn bản</span> để làm sổ lưu niệm.'),
    quiz: [
      { q: 'Sổ lưu niệm của lớp có thể gồm:', o: ['Ảnh, lời chúc, thông tin các bạn', 'Chỉ bảng điểm', 'Chỉ số điện thoại', 'Bài kiểm tra'], a: 0, why: 'Sổ lưu niệm lưu ảnh, lời chúc, kỉ niệm của lớp.' },
      { q: 'Phần mềm phù hợp để làm sổ lưu niệm là:', o: ['Máy tính bỏ túi', 'Phần mềm nghe nhạc', 'Phần mềm soạn thảo văn bản', 'Trình duyệt web'], a: 2, why: 'Phần mềm soạn thảo giúp trình bày chữ, bảng, hình ảnh.' } ] },
  { id: 't2', name: 'Lập kế hoạch', tip: 'Vẽ sơ đồ tư duy trước – làm sau sẽ không bị lạc!',
    html: S4('Lập kế hoạch làm sổ theo <b>nhóm</b>.',
      'Vẽ <b>sơ đồ tư duy</b> các phần của sổ; <b>phân công</b> mỗi bạn một phần.',
      'Thống nhất phông chữ, màu sắc chung cho cả cuốn sổ.',
      'Kế hoạch rõ ràng giúp <span class="k">làm nhanh, đồng bộ</span>.'),
    quiz: [
      { q: 'Công cụ giúp phác thảo các phần của sổ là:', o: ['Bảng tính', 'Sơ đồ tư duy', 'Thư điện tử', 'Máy tìm kiếm'], a: 1, why: 'Sơ đồ tư duy giúp sắp xếp ý tưởng rõ ràng.' },
      { q: 'Làm việc nhóm hiệu quả cần:', o: ['Một bạn làm hết', 'Không cần trao đổi', 'Mỗi bạn làm một kiểu', 'Phân công rõ ràng'], a: 3, why: 'Phân công rõ giúp nhóm làm nhanh và đồng bộ.' } ] },
  { id: 't3', name: 'Trình bày nội dung', tip: 'Chữ đẹp, bảng gọn, ảnh xinh – sổ sẽ thật ấn tượng!',
    html: S4('Soạn trang <b>thông tin các bạn</b> trong lớp.',
      '<b>Định dạng</b> tiêu đề, đoạn văn; dùng <b>bảng</b> cho họ tên, ngày sinh, sở thích.',
      'Chèn <b>hình ảnh</b> minh hoạ cho từng trang. Cách đặt hình nào đẹp?',
      'Trình bày <span class="k">hài hoà, dễ đọc</span>.'),
    quiz: [
      { q: 'Thông tin họ tên, ngày sinh các bạn nên trình bày bằng:', o: ['Bảng', 'Một đoạn văn dài', 'Sơ đồ khối', 'Thư điện tử'], a: 0, why: 'Bảng giúp thông tin gọn, dễ đọc, dễ so sánh.' },
      { q: 'Tiêu đề mỗi trang sổ nên:', o: ['Chữ nhỏ, mờ', 'Ẩn đi', 'To, đậm, nổi bật', 'Viết sai chính tả'], a: 2, why: 'Tiêu đề to, đậm giúp trang sổ rõ ràng.' } ] },
  { id: 't4', name: 'Hoàn thiện và in', tip: 'Soát lỗi, lưu tệp, rồi mới in nhé!',
    html: S4('Hoàn thiện sổ trước khi <b>in</b>.',
      'Dùng <b>tìm kiếm, thay thế</b> để sửa lỗi chính tả lặp lại.',
      'Chọn hướng trang, lề trang; <b>lưu</b> (<code>Ctrl+S</code>) rồi <b>in</b> (<code>Ctrl+P</code>).',
      'Soát lỗi kĩ trước khi in để <span class="k">tiết kiệm giấy</span>.'),
    quiz: [
      { q: 'Tổ hợp phím lưu văn bản là:', o: ['Ctrl + P', 'Ctrl + F', 'Ctrl + H', 'Ctrl + S'], a: 3, why: 'Ctrl+S (Save) để lưu văn bản.' },
      { q: 'Sửa một lỗi gõ sai lặp lại nhiều lần nhanh nhất bằng:', o: ['Sửa từng chỗ', 'Công cụ thay thế', 'Gõ lại cả bài', 'In ra rồi sửa'], a: 1, why: 'Công cụ thay thế sửa mọi chỗ cùng lúc.' } ] },
  { id: 't5', name: 'Đánh giá và chia sẻ', tip: 'Cùng ngắm thành quả và góp ý cho nhau nhé!',
    html: S4('Trình bày sổ lưu niệm của nhóm trước lớp.',
      'Đánh giá: nội dung <b>đủ ý</b>, trình bày <b>đẹp</b>, nhóm <b>hợp tác</b> tốt.',
      'Góp ý cho nhóm bạn một điểm hay, một điểm cần sửa.',
      'Sổ lưu niệm là <span class="k">thành quả chung</span> của cả lớp.'),
    quiz: [
      { q: 'Khi góp ý cho nhóm bạn, em nên:', o: ['Chỉ chê', 'Không nói gì', 'Nêu điểm hay và điểm cần sửa', 'Cười nhạo'], a: 2, why: 'Góp ý chân thành, tôn trọng giúp nhau tiến bộ.' },
      { q: 'Làm sổ lưu niệm, em đã vận dụng:', o: ['Định dạng, bảng, hình ảnh, tìm – thay', 'Chỉ vẽ tranh', 'Chỉ gửi thư', 'Lập trình Scratch'], a: 0, why: 'Sổ lưu niệm tổng hợp các kĩ năng soạn thảo đã học.' } ] },
];

const KEY = [
  'Ý tưởng:<br><b>ảnh, lời chúc</b>.',
  '<b>Sơ đồ tư duy</b>,<br>phân công.',
  'Định dạng,<br><b>bảng, hình ảnh</b>.',
  'Soát lỗi →<br><b>lưu → in</b>.',
  'Đánh giá,<br><b>chia sẻ</b>.',
];
