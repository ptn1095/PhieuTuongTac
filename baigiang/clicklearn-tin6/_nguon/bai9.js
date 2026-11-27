/* ===== BÀI 9: AN TOÀN THÔNG TIN TRÊN INTERNET ===== */
const META = { key: 'bai9', theme: 'lauda', num: 9, title: 'Bài 9. An toàn thông tin trên Internet', big: 'An toàn<br>thông tin',
  st2: 'Chủ đề 4 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Cùng học cách tự bảo vệ mình trên Internet nhé!',
  cert: 'Tin học 6 – Bài 9. An toàn thông tin trên Internet', file: 'Tin6_Bai9', pass: 8 };

const ILL_T = {
  t1: () => svg(`${smart(170, 200, .95)}${G(170, 160, 1, `<rect x="-40" y="-40" width="80" height="60" rx="12" fill="#fff" stroke="${O}" stroke-width="4"/><text x="0" y="0" text-anchor="middle" font-size="28" fill="#E5383B" ${F}>?!</text>`)}
    ${warn(170, 260, 1)}${pillS(300, 80, 280, 50, '#E5383B', 'Trúng thưởng?', 24)}${pillS(300, 170, 280, 50, '#FF7F11', 'Gửi mật khẩu?', 24)}${pillS(300, 260, 280, 50, '#8338EC', 'Người lạ?', 24)}`),
  t2: () => svg(`${tlist([[0, '#E5383B', 'Lừa đảo, lộ thông tin'], [0, '#FF7F11', 'Bắt nạt trên mạng'], [0, '#8338EC', 'Virus phá hỏng máy'], [0, '#1982C4', 'Tin giả, nghiện Internet']], 60, 96, 24)}`),
  t3: () => svg(`${lock(120, 220, 1.3)}${pillS(240, 60, 340, 50, '#1982C4', 'Chữ hoa + chữ thường', 22)}${pillS(240, 140, 340, 50, '#2DA44E', 'Chữ số + kí hiệu', 22)}
    ${pillS(240, 220, 340, 50, '#FF7F11', 'Ít nhất 8 kí tự', 24)}${pillS(240, 300, 340, 50, '#8338EC', 'Không cho ai biết', 24)}${txt(120, 380, 'Mật khẩu mạnh', 26)}`),
  t4: () => svg(`${shieldI(130, 200, 1.1, '#2DA44E')}${pillS(250, 50, 330, 50, '#1982C4', 'Không gặp người lạ', 24)}${pillS(250, 130, 330, 50, '#FF7F11', 'Không mở tệp lạ', 24)}
    ${pillS(250, 210, 330, 50, '#2DA44E', 'Cài phần mềm diệt virus', 21)}${pillS(250, 290, 330, 50, '#E5383B', 'Báo bố mẹ, thầy cô', 24)}`),
  t5: () => svg(`${shieldI(300, 170, 1.2, '#2EC4B6')}${pillS(60, 320, 480, 54, '#2DA44E', 'Em là công dân số thông thái', 24)}${star(80, 70, 16, '#FFD60A')}${star(520, 70, 14, '#FF006E')}`),
};

const TOPICS = [
  { id: 't1', name: 'Tin nhắn lạ', tip: '"Bạn trúng thưởng!" – coi chừng lừa đảo đấy!',
    html: S4Q(['Đọc tin nhắn: "Bạn <b>trúng thưởng</b>, hãy gửi mật khẩu để nhận quà".', ''],
      ['Tin nhắn này có đáng tin không?', 'Không. Có thể là <b>lừa đảo</b> để lấy thông tin của em.'],
      ['Em sẽ làm gì khi nhận tin nhắn như vậy?', 'Không trả lời, không gửi gì; báo cho người lớn.'],
      ['Cảnh giác tin nhắn <b>"trúng thưởng"</b>.', 'Không gửi <b>mật khẩu</b> cho ai.', 'Gặp chuyện lạ: <span class="k">báo người lớn</span>.']),
    quiz: [
      { q: 'Tin nhắn lạ báo em trúng thưởng và xin mật khẩu. Em nên:', o: ['Gửi mật khẩu ngay', 'Gửi cho bạn bè', 'Không trả lời, báo người lớn', 'Trả lời hỏi thêm'], a: 2, why: 'Đó là dấu hiệu lừa đảo, cần báo người lớn.' },
      { q: 'Kẻ xấu xin mật khẩu của em để:', o: ['Tặng quà thật', 'Chiếm tài khoản của em', 'Giúp em học', 'Sửa máy tính'], a: 1, why: 'Có mật khẩu, kẻ xấu có thể chiếm tài khoản của em.' } ] },
  { id: 't2', name: 'Những nguy cơ trên mạng', tip: 'Biết nguy cơ là bước đầu để tránh nguy cơ!',
    html: S4Q(['Kể các <b>nguy cơ</b> khi dùng Internet.', ''],
      ['Có những nguy cơ nào với thông tin cá nhân?', 'Bị lừa đảo, lộ thông tin, bị bắt nạt trên mạng.'],
      ['Còn nguy cơ nào với máy tính và sức khoẻ?', 'Nhiễm virus; gặp tin giả; nghiện Internet.'],
      ['Nguy cơ: <b>lừa đảo</b>, lộ thông tin.', '<b>Virus</b>, tin giả, bắt nạt.', 'Luôn <span class="k">cảnh giác</span> khi dùng mạng.']),
    quiz: [
      { q: 'Đâu là nguy cơ khi dùng Internet?', o: ['Bị bắt nạt trên mạng', 'Tra cứu bài học', 'Đọc báo thiếu nhi', 'Học tiếng Anh'], a: 0, why: 'Bắt nạt trên mạng là một nguy cơ cần đề phòng.' },
      { q: 'Virus máy tính có thể:', o: ['Làm máy chạy nhanh hơn', 'Giúp diệt rác', 'Tự học bài cho em', 'Phá hỏng dữ liệu'], a: 3, why: 'Virus có thể làm hỏng dữ liệu, lấy cắp thông tin.' } ] },
  { id: 't3', name: 'Mật khẩu mạnh', tip: 'Mật khẩu như chìa khoá nhà – không đưa cho ai nhé!',
    html: S4Q(['Đặt một <b>mật khẩu mạnh</b> cho tài khoản.', ''],
      ['Mật khẩu mạnh gồm những gì?', 'Chữ hoa, chữ thường, chữ số, kí hiệu; ít nhất 8 kí tự.'],
      ['Mật khẩu "123456" có an toàn không? Vì sao?', 'Không. Quá ngắn, quá dễ đoán.'],
      ['Mật khẩu mạnh: <b>ít nhất 8 kí tự</b>.', 'Kết hợp <b>chữ, số, kí hiệu</b>.', '<span class="k">Giữ bí mật</span> mật khẩu.']),
    quiz: [
      { q: 'Mật khẩu nào mạnh nhất?', o: ['123456', 'abcdef', 'Meo#Con2024', 'matkhau'], a: 2, why: 'Có chữ hoa, chữ thường, số và kí hiệu, đủ dài.' },
      { q: 'Thông tin nào em không nên chia sẻ lên mạng?', o: ['Món ăn em thích', 'Địa chỉ nhà và mật khẩu', 'Tên bộ phim hay', 'Màu em yêu thích'], a: 1, why: 'Địa chỉ nhà, mật khẩu là thông tin cá nhân cần giữ kín.' } ] },
  { id: 't4', name: 'Ứng xử an toàn', tip: 'Gặp chuyện lạ trên mạng – kể ngay với bố mẹ, thầy cô!',
    html: S4Q(['Xử lí khi <b>bị bắt nạt</b> hoặc gặp <b>người lạ</b> trên mạng.', ''],
      ['Với người lạ trên mạng, em nên làm gì?', 'Không kết bạn, không hẹn gặp, không mở tệp lạ.'],
      ['Bị bắt nạt trên mạng thì em làm gì?', 'Không đáp trả; lưu bằng chứng; báo bố mẹ, thầy cô.'],
      ['Không gặp <b>người lạ</b> quen qua mạng.', 'Cài phần mềm <b>diệt virus</b>.', 'Luôn <span class="k">báo bố mẹ, thầy cô</span>.']),
    quiz: [
      { q: 'Người lạ quen qua mạng hẹn gặp, em nên:', o: ['Đi gặp một mình', 'Không đi, báo bố mẹ', 'Cho họ địa chỉ nhà', 'Giữ bí mật'], a: 1, why: 'Gặp người lạ rất nguy hiểm, cần báo bố mẹ.' },
      { q: 'Để bảo vệ máy tính khỏi virus, em nên:', o: ['Cài phần mềm diệt virus', 'Mở mọi tệp lạ', 'Tắt màn hình', 'Tải trò chơi lạ'], a: 0, why: 'Phần mềm diệt virus giúp phát hiện và chặn virus.' } ] },
  { id: 't5', name: 'Tổng kết bài học', tip: 'Ôn nhanh: nguy cơ – mật khẩu – báo người lớn!',
    html: S4Q(['Tóm tắt bài học bằng <b>3 ý chính</b>.', ''],
      ['Internet có những nguy cơ nào?', 'Lừa đảo, bắt nạt, virus, tin giả.'],
      ['Em tự bảo vệ mình thế nào?', 'Mật khẩu mạnh, giữ kín thông tin, báo người lớn.'],
      ['Nhận biết <b>nguy cơ</b> trên mạng.', 'Giữ kín <b>thông tin cá nhân</b>.', 'Gặp điều lạ: <span class="k">báo người lớn</span>.']),
    quiz: [
      { q: 'Bị bạn bắt nạt trên mạng, em nên:', o: ['Đáp trả lại', 'Giữ im lặng mãi', 'Xoá máy tính', 'Kể với bố mẹ, thầy cô'], a: 3, why: 'Người lớn sẽ giúp em giải quyết an toàn.' },
      { q: 'Câu nào đúng?', o: ['Nên cho bạn thân biết mật khẩu', 'Mật khẩu càng ngắn càng tốt', 'Giữ kín mật khẩu của mình', 'Dùng chung một mật khẩu dễ đoán'], a: 2, why: 'Mật khẩu phải được giữ kín, không chia sẻ.' } ] },
];

const KEY = [
  'Tin nhắn lạ:<br><b>cảnh giác</b>.',
  'Lừa đảo, bắt nạt,<br><b>virus</b>, tin giả.',
  '<b>Mật khẩu mạnh</b>,<br>giữ bí mật.',
  'Không gặp<br><b>người lạ</b>.',
  'Gặp chuyện lạ:<br><b>báo người lớn</b>.',
];
