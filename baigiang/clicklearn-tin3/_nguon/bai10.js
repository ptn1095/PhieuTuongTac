/* ===== BÀI 10: BẢO VỆ THÔNG TIN KHI DÙNG MÁY TÍNH ===== */
const META = { key: 'bai10', num: 10, theme: 'lauda', ic: '🔒', cd: 4, en: 'Bảo vệ thông tin khi dùng máy tính',
  title: 'Bài 10. Bảo vệ thông tin khi dùng máy tính', big: 'Bảo vệ<br>thông tin',
  st2: 'Chủ đề 4 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Lâu đài có tường thành bảo vệ – thông tin của em cũng cần được bảo vệ!',
  cert: 'Tin học 3 – Bài 10. Bảo vệ thông tin khi dùng máy tính', file: 'Tin3_Bai10', pass: 8 };

const COVER = () => svgC(`${shieldI(170, 170, 1.4, '#2EC4B6')}${lock(400, 170, 1.2)}${star(560, 40, 14, '#FFD60A')}${star(40, 300, 12, '#FF006E')}${pillS(250, 290, 300, 50, '#8338EC', 'Giữ bí mật', 24)}`);
const ILL_T = {
  t1: () => svg(`${paper(60, 40, 300, 250, `${person(130, 140, .6)}${pillS(190, 80, 150, 32, '#1982C4', 'Họ tên', 16)}${pillS(190, 130, 150, 32, '#FF7F11', 'Địa chỉ', 16)}${pillS(190, 180, 150, 32, '#2DA44E', 'Điện thoại', 16)}`)}
    ${lock(470, 160, 1.1)}${pillS(60, 330, 480, 54, '#8338EC', 'Thông tin cá nhân', 26)}`),
  t2: () => svg(`${kid(120, 160, 1)}${laptop(250, 60, .7, `${bubble(20, 20, 200, 60, '#FF5E78', 'Cho tớ địa chỉ?', 18)}`)}${cross(500, 110, 1.3)}
    ${pillS(40, 330, 520, 54, '#E5383B', 'Không chia sẻ cho người lạ', 24)}`),
  t3: () => svg(`${laptop(90, 60, .9, `${pillS(30, 50, 180, 40, '#fff', '● ● ● ● ● ●', 20, 0, O)}`)}${lock(470, 140, 1)}
    ${pillS(60, 330, 480, 54, '#1982C4', 'Mật khẩu: giữ bí mật', 26)}`),
  t4: () => svg(`${folder(150, 140, 1.2, '#FF7F11', 'Của bạn An')}${hand(330, 140, .7, 0)}${cross(470, 140, 1.4)}
    ${pillS(30, 320, 540, 54, '#E5383B', 'Không tự ý xem, xoá, sửa', 24)}`),
  t5: () => svg(`${vflow([['#8338EC', 'Giữ kín thông tin'], ['#1982C4', 'Bí mật mật khẩu'], ['#2DA44E', 'Tôn trọng của người khác']], 140, 40, 320, 110, 24)}${star(60, 60, 14, '#FFD60A')}`),
};

const TOPICS = [
  { id: 't1', name: 'Thông tin cá nhân', tip: 'Họ tên, địa chỉ, số điện thoại… là thông tin cá nhân!',
    html: S4Q(['Kể những thông tin <b>về bản thân em</b>.', 'Gợi ý: tên, nhà ở đâu, số điện thoại.'],
      ['Thông tin cá nhân gồm những gì?', '<b>Họ tên</b>, <b>địa chỉ</b>, <b>số điện thoại</b>, ảnh, tên trường…'],
      ['Vì sao phải giữ kín thông tin cá nhân?', 'Kẻ xấu có thể dùng để <b>lừa đảo</b>, làm hại em.'],
      ['Họ tên, địa chỉ, SĐT là <span class="k">thông tin cá nhân</span>.', 'Cần được <b>giữ kín</b>.', 'Kẻ xấu có thể <b>lợi dụng</b>.']),
    quiz: [
      { q: 'Thông tin nào là thông tin cá nhân của em?', o: ['Tên một bài hát', 'Số điện thoại nhà em', 'Thời tiết hôm nay', 'Tên con vật'], a: 1, why: 'Số điện thoại nhà em là thông tin cá nhân.' },
      { q: 'Vì sao cần giữ kín thông tin cá nhân?', o: ['Để kẻ xấu không lợi dụng', 'Vì nó rất nặng', 'Để quên đi', 'Không cần giữ'], a: 0, why: 'Kẻ xấu có thể dùng thông tin để làm hại em.' } ] },
  { id: 't2', name: 'Không chia sẻ cho người lạ', tip: 'Người lạ hỏi địa chỉ? Không trả lời, báo người lớn!',
    html: S4Q(['Một người lạ trên mạng hỏi <b>địa chỉ nhà</b> em. Em làm gì?', ''],
      ['Em có nên trả lời không?', '<b>Không</b>. Không cho người lạ biết thông tin cá nhân.'],
      ['Sau đó em nên làm gì?', '<b>Báo ngay</b> cho bố mẹ, thầy cô.'],
      ['<span class="k">Không chia sẻ</span> cho người lạ.', 'Không gửi <b>ảnh, địa chỉ</b> lên mạng.', 'Gặp chuyện lạ: <b>báo người lớn</b>.']),
    quiz: [
      { q: 'Người lạ trên mạng hỏi số điện thoại của em. Em nên:', o: ['Trả lời ngay', 'Hỏi lại số của họ', 'Không trả lời, báo người lớn', 'Gửi kèm địa chỉ'], a: 2, why: 'Không chia sẻ với người lạ và báo cho người lớn.' },
      { q: 'Việc làm nào AN TOÀN?', o: ['Đăng địa chỉ nhà lên mạng', 'Gửi ảnh cho người lạ', 'Nói tên trường cho người lạ', 'Giữ kín thông tin cá nhân'], a: 3, why: 'Giữ kín thông tin cá nhân giúp em an toàn.' } ] },
  { id: 't3', name: 'Mật khẩu bí mật', tip: 'Mật khẩu như chìa khoá – không đưa cho ai cả!',
    html: S4Q(['Máy tính hỏi <b>mật khẩu</b>. Mật khẩu dùng để làm gì?', ''],
      ['Mật khẩu có tác dụng gì?', 'Như <b>chìa khoá</b>: chỉ người biết mật khẩu mới vào được.'],
      ['Bạn hỏi mượn mật khẩu, em làm thế nào?', 'Từ chối nhẹ nhàng, <b>không cho</b> ai biết, trừ bố mẹ.'],
      ['Mật khẩu là <span class="k">chìa khoá</span>.', '<b>Không cho</b> người khác biết.', 'Chỉ chia sẻ với <b>bố mẹ</b>.']),
    quiz: [
      { q: 'Mật khẩu giống như:', o: ['Chìa khoá', 'Cái bút', 'Quyển vở', 'Đôi dép'], a: 0, why: 'Mật khẩu như chìa khoá bảo vệ thông tin.' },
      { q: 'Em chỉ nên cho ai biết mật khẩu?', o: ['Mọi bạn trong lớp', 'Người lạ trên mạng', 'Bố mẹ', 'Ai hỏi cũng cho'], a: 2, why: 'Chỉ bố mẹ – người chăm sóc em – được biết mật khẩu.' } ] },
  { id: 't4', name: 'Tôn trọng thông tin của bạn', tip: 'Bài của bạn – không tự ý xem, xoá, sửa nhé!',
    html: S4Q(['Em thấy thư mục <b>bài vẽ của bạn An</b> trên máy. Em làm gì?', ''],
      ['Em có được tự ý mở, xoá, sửa không?', '<b>Không</b>. Đó là thông tin của bạn An.'],
      ['Muốn xem bài của bạn, em làm thế nào?', '<b>Xin phép</b> bạn trước, bạn đồng ý mới xem.'],
      ['<b>Không tự ý</b> xem, xoá, sửa.', 'Muốn xem phải <span class="k">xin phép</span>.', 'Tôn trọng thông tin <b>của người khác</b>.']),
    quiz: [
      { q: 'Em muốn xem bài vẽ của bạn trên máy tính. Em nên:', o: ['Tự mở xem', 'Xoá bài của bạn', 'Sửa bài của bạn', 'Xin phép bạn trước'], a: 3, why: 'Cần xin phép trước khi xem thông tin của người khác.' },
      { q: 'Việc làm nào SAI?', o: ['Tự ý xoá tệp của bạn', 'Xin phép trước khi xem', 'Giữ kín mật khẩu', 'Báo người lớn khi gặp chuyện lạ'], a: 0, why: 'Tự ý xoá tệp của bạn là không tôn trọng bạn.' } ] },
  { id: 't5', name: 'Em là người bảo vệ', tip: 'Ôn lại: giữ kín – bí mật mật khẩu – tôn trọng!',
    html: S4Q(['Nêu <b>3 việc</b> em làm để bảo vệ thông tin.', ''],
      ['Thông tin của em được bảo vệ thế nào?', 'Giữ kín <b>thông tin cá nhân</b>, giữ bí mật <b>mật khẩu</b>.'],
      ['Thông tin của người khác thì sao?', '<b>Tôn trọng</b>, không tự ý xem, xoá, sửa.'],
      ['Giữ kín <b>thông tin cá nhân</b>.', 'Bí mật <span class="k">mật khẩu</span>.', 'Tôn trọng <b>thông tin người khác</b>.']),
    quiz: [
      { q: 'Việc nào giúp bảo vệ thông tin của em?', o: ['Đưa mật khẩu cho bạn', 'Đăng ảnh lên mạng', 'Không chia sẻ cho người lạ', 'Nói địa chỉ cho mọi người'], a: 2, why: 'Không chia sẻ thông tin cho người lạ giúp em an toàn.' },
      { q: 'Câu nào ĐÚNG?', o: ['Được tự ý xoá tệp của bạn', 'Cần tôn trọng thông tin của người khác', 'Mật khẩu nên dán lên màn hình', 'Người lạ hỏi gì cũng trả lời'], a: 1, why: 'Ai cũng cần tôn trọng thông tin của người khác.' } ] },
];

const KEY = [
  'Họ tên, địa chỉ,<br>SĐT: <b>cá nhân</b>.',
  '<b>Không chia sẻ</b><br>cho người lạ.',
  'Mật khẩu<br>là <b>chìa khoá</b>.',
  'Xem bài bạn:<br><b>xin phép</b>.',
  'Giữ kín – bí mật<br>– <b>tôn trọng</b>.',
];
