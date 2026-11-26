/* ===== BÀI 4: MẠNG XÃ HỘI VÀ MỘT SỐ KÊNH TRAO ĐỔI THÔNG TIN TRÊN INTERNET ===== */
const META = { key: 'bai4', num: 4, theme: 'chibi', title: 'Bài 4. Mạng xã hội và một số kênh trao đổi thông tin trên Internet', big: 'Mạng xã hội và<br>kênh trao đổi thông tin',
  st2: 'Chủ đề 2 • 5 phần kiến thức cần nhớ • 10 câu đố • giấy chứng nhận',
  hello: 'Cùng các bạn thú cưng tìm hiểu mạng xã hội nhé!',
  cert: 'Tin học 7 – Bài 4. Mạng xã hội và kênh trao đổi thông tin', file: 'Tin7_Bai4', pass: 8 };

const heartI = (x, y, s, c = '#FF006E') => `<path transform="translate(${x} ${y}) scale(${s})" d="M0 14 C-26 -2 -22 -26 -8 -24 Q0 -22 0 -14 Q0 -22 8 -24 C22 -26 26 -2 0 14Z" fill="${c}" stroke="${O}" stroke-width="4"/>`;
const ILL_T = {
  t1: () => svg(`${globe(300, 160, 70)}${[[90, 70, '#FF006E'], [510, 70, '#1982C4'], [90, 260, '#2DA44E'], [510, 260, '#FF7F11']].map(([x, y, c]) => `${dline(300, 160, x, y)}${person(x, y, .6, c)}`).join('')}
    ${pillS(80, 345, 440, 54, '#8338EC', 'Kết nối, chia sẻ', 28)}`),
  t2: () => svg(`${smart(140, 190, 1.2)}${heartI(140, 190, 1.6)}${[['#1982C4', '👍 Thích'], ['#2DA44E', '💬 Bình luận'], ['#FF7F11', '↪ Chia sẻ'], ['#8338EC', '✉ Nhắn tin']].map(([c, t], i) => pillS(270, 40 + i*82, 290, 56, c, t, 26)).join('')}
    ${star(560, 380, 12, '#FFD60A')}`),
  t3: () => svg(`${G(130, 110, 1, `<rect x="-80" y="-56" width="160" height="112" rx="10" fill="#fff" ${ST}/><path d="M-80 -56 L0 10 L80 -56" fill="none" ${ST}/>`)}${txt(130, 210, 'Thư điện tử', 26)}
    ${bubble(330, 50, 220, 70, '#FFD6E7', 'Diễn đàn', 26)}${bubble(360, 150, 200, 64, '#D0EBFF', 'Nhắn tin', 24)}
    ${pillS(40, 270, 250, 54, '#1982C4', 'Blog, trang web', 24)}${pillS(310, 270, 250, 54, '#FF7F11', 'Gọi video', 24)}${pillS(80, 345, 440, 50, '#2DA44E', 'Học trực tuyến', 24)}`),
  t4: () => svg(`${pillS(40, 30, 240, 56, '#2DA44E', 'Lợi ích', 30)}${pillS(320, 30, 240, 56, '#E5383B', 'Tác hại', 30)}
    ${['Kết nối bạn bè', 'Học tập, tin tức', 'Giải trí'].map((t, i) => tick(60, 140 + i*80, .6) + txt(90, 150 + i*80, t, 22, O, 'start')).join('')}
    ${['Nghiện mạng', 'Tin giả, lừa đảo', 'Lộ thông tin'].map((t, i) => cross(340, 140 + i*80, .6) + txt(370, 150 + i*80, t, 22, O, 'start')).join('')}`),
  t5: () => svg(`${lock(90, 200, 1)}${[[true, '#2DA44E', 'Mật khẩu mạnh, bí mật'], [true, '#2DA44E', 'Chỉ kết bạn người quen'], [false, '#E5383B', 'Đăng địa chỉ, số ĐT'], [false, '#E5383B', 'Bấm link lạ']].map(([ok, c, t], i) => (ok ? tick(200, 70 + i*92, .8) : cross(200, 70 + i*92, .8)) + pillS(240, 44 + i*92, 330, 52, c, t, 22)).join('')}`),
};

const TOPICS = [
  { id: 't1', name: 'Mạng xã hội là gì?', tip: 'Mạng xã hội giúp kết nối mọi người khắp thế giới!',
    html: KT([
      '<b>Mạng xã hội</b> là ứng dụng trên Internet giúp mọi người <b>kết nối, giao lưu, chia sẻ</b> thông tin.',
      'Một số mạng xã hội: <b>Facebook, Zalo, YouTube, TikTok, Instagram</b>…',
      'Mỗi mạng xã hội có <b>mục đích</b> riêng: kết bạn, chia sẻ video, nhắn tin, học tập…',
      'Thường quy định người dùng từ <b>13 tuổi</b> trở lên mới được tạo tài khoản.',
    ], 'Mạng xã hội giúp <span class="k">kết nối, chia sẻ</span> thông tin trên Internet.'),
    quiz: [
      { q: 'Ứng dụng nào sau đây là mạng xã hội?', o: ['Microsoft Excel', 'Zalo', 'Paint', 'Windows'], a: 1, why: 'Zalo là mạng xã hội giúp nhắn tin, kết nối.' },
      { q: 'Mục đích chính của mạng xã hội là:', o: ['Kết nối, giao lưu, chia sẻ', 'Soạn thảo văn bản', 'Tính toán bảng điểm', 'Diệt virus'], a: 0, why: 'Mạng xã hội giúp mọi người kết nối và chia sẻ thông tin.' } ] },
  { id: 't2', name: 'Chức năng của mạng xã hội', tip: 'Mỗi lượt “thích”, “chia sẻ” đều để lại dấu vết đấy!',
    html: KT([
      'Tạo <b>trang cá nhân</b> (hồ sơ), <b>kết bạn</b>, tham gia <b>nhóm</b>.',
      '<b>Đăng</b> bài viết, ảnh, video; <b>thích, bình luận, chia sẻ</b> bài của người khác.',
      '<b>Nhắn tin</b>, gọi điện, gọi video cho bạn bè.',
      'Thông tin đã đăng có thể <b>lan truyền rất nhanh</b> và <b>khó xoá hẳn</b>.',
    ], 'Suy nghĩ kĩ <span class="k">trước khi đăng</span> và chia sẻ.'),
    quiz: [
      { q: 'Việc nào làm được trên mạng xã hội?', o: ['In bài ra giấy', 'Tắt máy tính', 'Đăng ảnh, bình luận, nhắn tin', 'Cài hệ điều hành'], a: 2, why: 'Mạng xã hội cho phép đăng bài, bình luận, nhắn tin.' },
      { q: 'Vì sao cần suy nghĩ kĩ trước khi đăng bài?', o: ['Vì đăng bài rất tốn tiền', 'Vì thông tin lan nhanh, khó xoá hẳn', 'Vì không ai đọc', 'Vì máy sẽ hỏng'], a: 1, why: 'Thông tin trên mạng lan nhanh và khó xoá hoàn toàn.' } ] },
  { id: 't3', name: 'Các kênh trao đổi khác', tip: 'Ngoài mạng xã hội, còn rất nhiều cách trao đổi trên Internet!',
    html: KT([
      '<b>Thư điện tử (email)</b>: gửi thư, tệp đính kèm; VD Gmail, Outlook.',
      '<b>Diễn đàn</b>: nơi thảo luận theo chủ đề; <b>blog</b>, <b>trang web</b>: đăng tin, bài viết.',
      '<b>Nhắn tin, gọi thoại, gọi video</b> trực tuyến; <b>học trực tuyến</b> (Zoom, Google Meet…).',
      'Mỗi kênh có <b>ưu điểm</b> riêng, chọn kênh <b>phù hợp</b> với mục đích.',
    ], 'Email, diễn đàn, nhắn tin, gọi video… là các <span class="k">kênh trao đổi</span> thông tin.'),
    quiz: [
      { q: 'Muốn gửi bài tập kèm tệp cho thầy cô một cách trang trọng, em nên dùng:', o: ['Thư điện tử (email)', 'Bình luận dạo', 'Trò chơi trực tuyến', 'Máy in'], a: 0, why: 'Thư điện tử gửi được tệp đính kèm, phù hợp trao đổi trang trọng.' },
      { q: 'Nơi mọi người thảo luận theo từng chủ đề trên Internet gọi là:', o: ['Máy quét', 'Thùng rác', 'Diễn đàn', 'Hệ điều hành'], a: 2, why: 'Diễn đàn là nơi trao đổi, thảo luận theo chủ đề.' } ] },
  { id: 't4', name: 'Lợi ích và tác hại', tip: 'Dùng đúng thì có ích, dùng sai thì có hại!',
    html: KT([
      '<b>Lợi ích</b>: kết nối bạn bè, người thân; cập nhật tin tức; học tập, giải trí.',
      '<b>Tác hại</b>: dễ <b>nghiện</b>, mất thời gian, ảnh hưởng sức khoẻ, học tập.',
      'Gặp <b>tin giả</b>, <b>lừa đảo</b>, nội dung xấu; bị <b>lộ thông tin cá nhân</b>.',
      'Có thể bị <b>bắt nạt</b>, xúc phạm trên mạng.',
    ], 'Mạng xã hội có cả <span class="k">lợi ích</span> và <span class="k">tác hại</span>.'),
    quiz: [
      { q: 'Đâu là tác hại khi dùng mạng xã hội không đúng cách?', o: ['Học thêm kiến thức', 'Kết nối người thân', 'Cập nhật tin tức', 'Nghiện mạng, lộ thông tin cá nhân'], a: 3, why: 'Dùng sai cách dễ gây nghiện, lộ thông tin, gặp lừa đảo.' },
      { q: 'Lợi ích của mạng xã hội là:', o: ['Gặp tin giả', 'Kết nối, học tập, giải trí', 'Bị lừa đảo', 'Thức khuya'], a: 1, why: 'Mạng xã hội giúp kết nối, học tập và giải trí.' } ] },
  { id: 't5', name: 'Sử dụng mạng xã hội an toàn', tip: 'Thông tin cá nhân là bí mật, đừng tuỳ tiện chia sẻ!',
    html: KT([
      'Đặt <b>mật khẩu mạnh</b>, không cho người khác biết; đăng xuất khi dùng máy chung.',
      '<b>Không chia sẻ</b> địa chỉ nhà, số điện thoại, trường lớp với người lạ.',
      'Chỉ kết bạn với <b>người quen</b>; không bấm vào <b>đường liên kết lạ</b>.',
      '<b>Kiểm chứng</b> thông tin trước khi chia sẻ; dùng mạng có <b>giới hạn thời gian</b>.',
    ], 'Gặp chuyện bất thường, hãy báo ngay cho <span class="k">bố mẹ, thầy cô</span>.'),
    quiz: [
      { q: 'Người lạ trên mạng hỏi địa chỉ nhà em, em nên:', o: ['Gửi ngay địa chỉ', 'Không cung cấp và báo người lớn', 'Hẹn gặp người đó', 'Gửi kèm số điện thoại'], a: 1, why: 'Không chia sẻ thông tin cá nhân với người lạ, báo người lớn.' },
      { q: 'Việc làm nào giúp dùng mạng xã hội an toàn?', o: ['Đặt mật khẩu mạnh, giữ bí mật', 'Kết bạn với mọi người lạ', 'Bấm mọi đường link', 'Chia sẻ mật khẩu cho bạn'], a: 0, why: 'Mật khẩu mạnh, giữ bí mật giúp bảo vệ tài khoản.' } ] },
];

const KEY = [
  'Mạng xã hội: <b>Facebook, Zalo, YouTube</b>… kết nối, chia sẻ.',
  'Đăng bài, <b>thích, bình luận</b>, nhắn tin, kết bạn.',
  '<b>Email</b>, diễn đàn, nhắn tin, gọi video, học trực tuyến.',
  'Có <b>lợi ích</b> nhưng cũng có <b>tác hại</b>.',
  '<b>Mật khẩu mạnh</b>, giữ bí mật thông tin cá nhân.',
];
