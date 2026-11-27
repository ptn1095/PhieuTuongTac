/* ===== BÀI 6: KHÁM PHÁ THÔNG TIN TRÊN INTERNET ===== */
const META = { key: 'bai6', num: 6, theme: 'daiduong', ic: '🌐', cd: 2, en: 'Khám phá thông tin trên Internet',
  title: 'Bài 6. Khám phá thông tin trên Internet', big: 'Khám phá<br>thông tin<br>trên Internet',
  st2: 'Chủ đề 2 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Internet rộng như đại dương! Cùng lặn xuống khám phá thật an toàn nhé!',
  cert: 'Tin học 3 – Bài 6. Khám phá thông tin trên Internet', file: 'Tin3_Bai6', pass: 8 };

const COVER = () => svgC(`${browser(60, 40, 480, 250, `${globe(300, 170, 70)}`, 'www.…')}${star(560, 30, 14, '#FFD60A')}${star(40, 320, 12, '#FF006E')}`);
const ILL_T = {
  t1: () => svg(`${globe(300, 160, 90)}${[[110, 70, '#FF006E', 'Tin tức'], [490, 70, '#1982C4', 'Học tập'], [110, 260, '#2DA44E', 'Giải trí'], [490, 260, '#FF7F11', 'Trò chuyện']].map(([x, y, c, t]) => dline(300, 160, x, y) + pillS(x - 90, y - 24, 180, 48, c, t, 22)).join('')}
    ${pillS(110, 345, 380, 50, '#8338EC', 'Kho thông tin khổng lồ', 24)}`),
  t2: () => svg(`${browser(40, 30, 520, 280, `${cloud(160, 170, .6, '#FFD60A')}${sun(400, 160, 34)}${tree(300, 220, .5)}`, 'Trang web cho thiếu nhi')}
    ${pillS(100, 340, 400, 50, '#2DA44E', 'Đọc, xem tranh, video', 24)}`),
  t3: () => svg(`${monitor(60, 70, 220, 140, `${pillS(80, 120, 180, 40, '#1982C4', 'Thời tiết', 20)}`)}${sun(440, 110, 40)}${cloud(470, 230, .6)}
    ${pillS(60, 330, 480, 54, '#FF7F11', 'Thông tin có ích cho em', 26)}`),
  t4: () => svg(`${warn(150, 140, 2)}${person(420, 180, 1.1, '#2DA44E')}${kid(320, 200, .8)}
    ${pillS(30, 330, 540, 54, '#E5383B', 'Gặp nội dung lạ → báo người lớn', 22)}`),
  t5: () => svg(`${vflow([['#1982C4', 'Internet: nhiều thông tin'], ['#2DA44E', 'Chọn thông tin phù hợp'], ['#E5383B', 'Có người lớn hướng dẫn']], 130, 40, 340, 110, 24)}${star(60, 60, 14, '#FFD60A')}`),
};

const TOPICS = [
  { id: 't1', name: 'Internet có gì?', tip: 'Internet như một thư viện khổng lồ nối khắp thế giới!',
    html: S4Q(['Kể những điều em từng <b>xem, đọc, nghe</b> trên Internet.', 'Gợi ý: phim hoạt hình, bài hát, truyện…'],
      ['Trên Internet có những loại thông tin nào?', 'Tin tức, <b>học tập</b>, <b>giải trí</b>, sách truyện, trò chơi…'],
      ['Thông tin trên Internet có dạng gì?', 'Dạng <b>chữ, hình ảnh, âm thanh, video</b>.'],
      ['Internet có <span class="k">rất nhiều</span> thông tin.', 'Thông tin để <b>học tập, giải trí</b>.', 'Có chữ, hình, âm thanh, <b>video</b>.']),
    quiz: [
      { q: 'Trên Internet có thể tìm thấy:', o: ['Chỉ có trò chơi', 'Chỉ có tin tức', 'Rất nhiều loại thông tin', 'Không có gì'], a: 2, why: 'Internet có tin tức, học tập, giải trí và nhiều thông tin khác.' },
      { q: 'Video phim hoạt hình trên Internet gồm thông tin dạng:', o: ['Hình ảnh và âm thanh', 'Chỉ có chữ', 'Chỉ có số', 'Không có dạng nào'], a: 0, why: 'Video có cả hình ảnh chuyển động và âm thanh.' } ] },
  { id: 't2', name: 'Xem trang web cho em', tip: 'Có những trang web dành riêng cho thiếu nhi đấy!',
    html: S4Q(['Cùng thầy cô mở một <b>trang web</b> dành cho thiếu nhi.', ''],
      ['Dùng phần mềm nào để xem trang web?', 'Dùng <b>trình duyệt web</b>, ví dụ Chrome, Cốc Cốc, Edge.'],
      ['Trên trang web em xem được gì?', 'Bài đọc, <b>tranh ảnh</b>, <b>video</b>, câu đố…'],
      ['Xem trang web bằng <span class="k">trình duyệt</span>.', 'Trang web có chữ, hình, <b>video</b>.', 'Chọn trang web <b>cho thiếu nhi</b>.']),
    quiz: [
      { q: 'Phần mềm dùng để xem trang web gọi là:', o: ['Bàn phím', 'Trình duyệt web', 'Máy in', 'Phần mềm vẽ'], a: 1, why: 'Trình duyệt web giúp mở và xem các trang web.' },
      { q: 'Phần mềm nào là trình duyệt web?', o: ['Paint', 'Máy tính bỏ túi', 'Word', 'Cốc Cốc'], a: 3, why: 'Cốc Cốc là một trình duyệt web.' } ] },
  { id: 't3', name: 'Thông tin có ích', tip: 'Biết thời tiết ngày mai để chuẩn bị áo mưa nào!',
    html: S4Q(['Tìm thông tin về <b>thời tiết</b> ngày mai trên Internet.', ''],
      ['Thông tin thời tiết giúp gì cho em?', 'Biết trời mưa hay nắng để <b>chuẩn bị</b> trang phục, áo mưa.'],
      ['Kể thêm thông tin có ích trên Internet?', 'Bài học, <b>truyện thiếu nhi</b>, hướng dẫn vẽ, cách làm đồ chơi…'],
      ['Internet giúp em <b>học tập</b>.', 'Giúp em <span class="k">biết thêm</span> nhiều điều.', 'Giúp em <b>chuẩn bị</b> tốt hơn.']),
    quiz: [
      { q: 'Biết dự báo ngày mai có mưa, em nên:', o: ['Mang áo mưa khi đi học', 'Mặc áo mỏng', 'Đi dép lê', 'Không làm gì'], a: 0, why: 'Thông tin thời tiết giúp em chuẩn bị đồ phù hợp.' },
      { q: 'Thông tin nào trên Internet có ích cho việc học?', o: ['Quảng cáo đồ chơi', 'Tin đồn', 'Bài học, truyện thiếu nhi', 'Trò chơi bạo lực'], a: 2, why: 'Bài học, truyện thiếu nhi giúp em học tập tốt.' } ] },
  { id: 't4', name: 'Thông tin không phù hợp', tip: 'Gặp thứ đáng sợ trên mạng? Báo ngay bố mẹ, thầy cô!',
    html: S4Q(['Nếu thấy hình ảnh <b>đáng sợ</b>, lạ trên mạng, em sẽ làm gì?', ''],
      ['Thông tin như thế nào là không phù hợp?', 'Hình ảnh <b>bạo lực</b>, <b>đáng sợ</b>, lời nói xấu, nội dung người lớn.'],
      ['Gặp thông tin không phù hợp, em làm gì?', '<b>Đóng</b> trang web và <b>báo ngay</b> bố mẹ, thầy cô.'],
      ['Có thông tin <span class="k">không phù hợp</span>.', 'Không xem, <b>đóng ngay</b>.', 'Báo <b>người lớn</b> để được giúp.']),
    quiz: [
      { q: 'Gặp hình ảnh đáng sợ trên Internet, em nên:', o: ['Xem tiếp', 'Đóng lại, báo người lớn', 'Gửi cho bạn', 'Giữ bí mật'], a: 1, why: 'Báo người lớn để được giúp đỡ và bảo vệ.' },
      { q: 'Thông tin nào KHÔNG phù hợp với em?', o: ['Truyện cổ tích', 'Bài hát thiếu nhi', 'Phim hoạt hình', 'Video bạo lực'], a: 3, why: 'Video bạo lực không phù hợp với trẻ em.' } ] },
  { id: 't5', name: 'Lướt web an toàn', tip: 'Ôn lại: nhiều thông tin – chọn phù hợp – có người lớn!',
    html: S4Q(['Nêu <b>quy tắc</b> khi em dùng Internet.', ''],
      ['Em nên dùng Internet khi nào?', 'Khi có <b>bố mẹ, thầy cô</b> cho phép, hướng dẫn.'],
      ['Mỗi lần dùng Internet bao lâu là hợp lí?', 'Thời gian <b>ngắn</b>, nghỉ giải lao cho mắt.'],
      ['Internet có <b>nhiều thông tin</b>.', 'Chọn thông tin <span class="k">phù hợp</span>.', 'Dùng khi có <b>người lớn</b> hướng dẫn.']),
    quiz: [
      { q: 'Khi dùng Internet, em nên:', o: ['Dùng cả ngày', 'Tự mở mọi trang', 'Có người lớn hướng dẫn', 'Nói chuyện với người lạ'], a: 2, why: 'Người lớn hướng dẫn giúp em dùng Internet an toàn.' },
      { q: 'Câu nào ĐÚNG về thông tin trên Internet?', o: ['Có cả thông tin tốt và chưa tốt', 'Tất cả đều đúng', 'Tất cả đều xấu', 'Chỉ có trò chơi'], a: 0, why: 'Internet có thông tin tốt và cả thông tin không phù hợp.' } ] },
];

const KEY = [
  'Internet có <b>rất<br>nhiều</b> thông tin.',
  'Xem web bằng<br><b>trình duyệt</b>.',
  'Thông tin giúp em<br><b>học tập</b>.',
  'Gặp nội dung xấu:<br><b>báo người lớn</b>.',
  'Dùng Internet<br><b>an toàn</b>.',
];
