/* ===== BÀI 9: AN TOÀN THÔNG TIN TRÊN INTERNET ===== */
const META = { key: 'bai9', num: 9, title: 'Bài 9. An toàn thông tin trên Internet', big: 'An toàn<br>thông tin',
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
    html: S4('Đọc tin nhắn: "Bạn trúng thưởng, hãy gửi <b>mật khẩu</b> để nhận quà".',
      'Đây có thể là tin nhắn <b>lừa đảo</b> để lấy thông tin của em.',
      'Em sẽ làm gì khi nhận được tin nhắn như vậy?',
      'Không làm theo, <span class="k">báo cho người lớn</span>.'),
    quiz: [
      { q: 'Tin nhắn lạ báo em trúng thưởng và xin mật khẩu. Em nên:', o: ['Gửi mật khẩu ngay', 'Gửi cho bạn bè', 'Không trả lời, báo người lớn', 'Trả lời hỏi thêm'], a: 2, why: 'Đó là dấu hiệu lừa đảo, cần báo người lớn.' },
      { q: 'Kẻ xấu xin mật khẩu của em để:', o: ['Tặng quà thật', 'Chiếm tài khoản của em', 'Giúp em học', 'Sửa máy tính'], a: 1, why: 'Có mật khẩu, kẻ xấu có thể chiếm tài khoản của em.' } ] },
  { id: 't2', name: 'Những nguy cơ trên mạng', tip: 'Biết nguy cơ là bước đầu để tránh nguy cơ!',
    html: S4('Kể các <b>tác hại, nguy cơ</b> khi dùng Internet.',
      'Bị <b>lừa đảo</b>, lộ thông tin cá nhân, bị <b>bắt nạt</b> trên mạng.',
      'Máy nhiễm <b>virus</b>; gặp tin giả; nghiện Internet. Em đã gặp chưa?',
      'Cần <span class="k">cảnh giác</span> khi dùng Internet.'),
    quiz: [
      { q: 'Đâu là nguy cơ khi dùng Internet?', o: ['Bị bắt nạt trên mạng', 'Tra cứu bài học', 'Đọc báo thiếu nhi', 'Học tiếng Anh'], a: 0, why: 'Bắt nạt trên mạng là một nguy cơ cần đề phòng.' },
      { q: 'Virus máy tính có thể:', o: ['Làm máy chạy nhanh hơn', 'Giúp diệt rác', 'Tự học bài cho em', 'Phá hỏng dữ liệu'], a: 3, why: 'Virus có thể làm hỏng dữ liệu, lấy cắp thông tin.' } ] },
  { id: 't3', name: 'Mật khẩu mạnh', tip: 'Mật khẩu như chìa khoá nhà – không đưa cho ai nhé!',
    html: S4('Đặt một <b>mật khẩu mạnh</b> cho tài khoản.',
      'Gồm chữ hoa, chữ thường, chữ số, kí hiệu; <b>ít nhất 8 kí tự</b>.',
      'Mật khẩu "123456" có an toàn không? Vì sao?',
      'Giữ <span class="k">bí mật</span> mật khẩu và thông tin cá nhân.'),
    quiz: [
      { q: 'Mật khẩu nào mạnh nhất?', o: ['123456', 'abcdef', 'Meo#Con2024', 'matkhau'], a: 2, why: 'Có chữ hoa, chữ thường, số và kí hiệu, đủ dài.' },
      { q: 'Thông tin nào em không nên chia sẻ lên mạng?', o: ['Món ăn em thích', 'Địa chỉ nhà và mật khẩu', 'Tên bộ phim hay', 'Màu em yêu thích'], a: 1, why: 'Địa chỉ nhà, mật khẩu là thông tin cá nhân cần giữ kín.' } ] },
  { id: 't4', name: 'Ứng xử an toàn', tip: 'Gặp chuyện lạ trên mạng – kể ngay với bố mẹ, thầy cô!',
    html: S4('Đưa ra cách xử lí khi bị <b>bắt nạt</b> hoặc gặp người lạ trên mạng.',
      'Không kết bạn, <b>không gặp</b> người lạ quen qua mạng; không mở tệp lạ.',
      'Cài <b>phần mềm diệt virus</b>; bị bắt nạt thì làm gì?',
      'Luôn <span class="k">báo bố mẹ, thầy cô</span> khi gặp điều bất thường.'),
    quiz: [
      { q: 'Người lạ quen qua mạng hẹn gặp, em nên:', o: ['Đi gặp một mình', 'Không đi, báo bố mẹ', 'Cho họ địa chỉ nhà', 'Giữ bí mật'], a: 1, why: 'Gặp người lạ rất nguy hiểm, cần báo bố mẹ.' },
      { q: 'Để bảo vệ máy tính khỏi virus, em nên:', o: ['Cài phần mềm diệt virus', 'Mở mọi tệp lạ', 'Tắt màn hình', 'Tải trò chơi lạ'], a: 0, why: 'Phần mềm diệt virus giúp phát hiện và chặn virus.' } ] },
  { id: 't5', name: 'Tổng kết bài học', tip: 'Ôn nhanh: nguy cơ – mật khẩu – báo người lớn!',
    html: S4('Tóm tắt bài bằng 3 ý chính.',
      'Internet có nguy cơ: lừa đảo, bắt nạt, virus, tin giả.',
      'Đặt <b>mật khẩu mạnh</b>, giữ kín thông tin cá nhân.',
      'Gặp điều lạ: <span class="k">báo người lớn</span> ngay.'),
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
