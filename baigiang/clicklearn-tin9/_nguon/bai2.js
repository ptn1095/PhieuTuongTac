/* ===== BÀI 2: THÔNG TIN TRONG GIẢI QUYẾT VẤN ĐỀ ===== */
const META = { key: 'bai2', num: 2, title: 'Bài 2. Thông tin trong giải quyết vấn đề', big: 'GIẢI QUYẾT<br>VẤN ĐỀ',
  st2: 'Tin học 9 • 5 hoạt động • 10 câu đố • nhận giấy chứng nhận',
  hello: 'Thông tin tốt giúp ta quyết định đúng. Cùng tìm hiểu nhé!',
  cert: 'TIN HỌC 9 – BÀI 2: THÔNG TIN TRONG GIẢI QUYẾT VẤN ĐỀ', file: 'Tin9_Bai2', pass: 8 };

const ILL_T = {
  t1: () => svg(`${sun(90, 90, 36)}${cloud(250, 100, .7)}${car(450, 200, .8)}${tree(150, 210, .5)}
    ${pillS(10, 300, 138, 48, '#FF7F11', 'Thời tiết', 21)}${pillS(156, 300, 138, 48, '#1982C4', 'Địa điểm', 21)}${pillS(302, 300, 138, 48, '#2DA44E', 'Chi phí', 21)}${pillS(448, 300, 144, 48, '#8338EC', 'Phương tiện', 19)}
    ${star(560, 50, 14, '#FFD60A')}${star(370, 50, 12, '#FF006E')}${star(300, 395, 12, '#2EC4B6')}`),
  t2: () => svg(`${pillS(14, 24, 330, 54, '#FF006E', '1. Xác định vấn đề', 24)}${arr(120, 84, 140, 112, '#FF006E')}
    ${pillS(80, 118, 340, 54, '#1982C4', '2. Thu thập thông tin', 24)}${arr(200, 178, 220, 206, '#1982C4')}
    ${pillS(146, 212, 360, 54, '#2DA44E', '3. Xử lí, chọn giải pháp', 24)}${arr(280, 272, 300, 300, '#2DA44E')}
    ${pillS(212, 306, 370, 54, '#FF7F11', '4. Thực hiện, đánh giá', 24)}
    ${star(530, 60, 16, '#FFD60A')}${star(60, 330, 14, '#FF006E')}${star(570, 180, 12, '#8338EC')}`),
  t3: () => svg(`${pillS(24, 50, 264, 64, '#FF006E', 'Tính mới', 28)}${pillS(312, 50, 264, 64, '#1982C4', 'Tính chính xác', 26)}
    ${pillS(24, 160, 264, 64, '#2DA44E', 'Tính đầy đủ', 28)}${pillS(312, 160, 264, 64, '#FF7F11', 'Sử dụng được', 26)}
    ${tick(120, 330, 1.1)}${pillS(170, 304, 340, 54, '#8338EC', 'Thông tin chất lượng', 24)}${star(560, 380, 12, '#FFD60A')}`),
  t4: () => svg(`${smart(140, 200, .9, `<text x="0" y="-10" text-anchor="middle" font-size="26" fill="#E5383B" ${F}>TIN</text><text x="0" y="24" text-anchor="middle" font-size="26" fill="#E5383B" ${F}>LẠ?</text>`)}
    ${mag(380, 150, 1)}${pillS(270, 290, 310, 52, '#2DA44E', 'Đối chiếu nhiều nguồn', 22)}${pillS(270, 350, 310, 52, '#1982C4', 'Xem tác giả, ngày đăng', 21)}
    ${star(560, 40, 14, '#FFD60A')}${star(40, 40, 12, '#FF006E')}`),
  t5: () => svg(`${bulb(300, 140, 1.1)}${pillS(14, 300, 250, 54, '#1982C4', 'Thông tin tốt', 26)}${arr(272, 327, 326, 327, '#FF006E')}${pillS(336, 300, 250, 54, '#2DA44E', 'Quyết định đúng', 24)}
    ${star(90, 80, 16, '#FFD60A')}${star(510, 80, 14, '#FF006E')}${star(300, 395, 12, '#8338EC')}`),
};

const TOPICS = [
  { id: 't1', name: 'Đi dã ngoại cần biết gì?', tip: 'Muốn chuyến đi vui, trước hết phải có đủ thông tin!',
    html: S4('Lớp em định đi dã ngoại cuối tuần. Cần chuẩn bị gì?',
      'Cần thông tin: <b>thời tiết</b>, <b>địa điểm</b>, <b>chi phí</b>, <b>phương tiện</b>.',
      'Nếu không xem dự báo thời tiết mà trời mưa to thì sao?',
      'Thông tin giúp ta <span class="k">đưa ra quyết định</span> đúng đắn.'),
    quiz: [
      { q: 'Trước khi đi dã ngoại, thông tin nào em cần tra cứu nhất?', o: ['Dự báo thời tiết', 'Giá vàng hôm nay', 'Kết quả bóng đá', 'Lịch chiếu phim'], a: 0, why: 'Thời tiết ảnh hưởng trực tiếp đến chuyến đi ngoài trời.' },
      { q: 'Thông tin có vai trò gì khi giải quyết vấn đề?', o: ['Không cần thiết', 'Làm vấn đề khó hơn', 'Giúp quyết định đúng đắn', 'Chỉ để giải trí'], a: 2, why: 'Có thông tin, ta mới chọn được giải pháp phù hợp.' } ] },
  { id: 't2', name: 'Các bước giải quyết vấn đề', tip: 'Xác định – thu thập – xử lí – thực hiện: 4 bước thần kì!',
    html: S4('Sắp xếp các bước giải quyết một vấn đề.',
      '<b>Xác định vấn đề</b> → <b>thu thập</b> thông tin → <b>xử lí</b>, chọn giải pháp → <b>thực hiện</b>, đánh giá.',
      'Bước nào cần dùng máy tính, Internet để hỗ trợ?',
      'Thông tin là <span class="k">nguyên liệu</span> trong mọi bước.'),
    quiz: [
      { q: 'Bước đầu tiên khi giải quyết một vấn đề là:', o: ['Thực hiện giải pháp', 'Đánh giá kết quả', 'Thu thập thông tin', 'Xác định vấn đề'], a: 3, why: 'Phải hiểu rõ vấn đề là gì rồi mới tìm thông tin.' },
      { q: 'Sau khi thu thập thông tin, em cần làm gì?', o: ['Xoá hết thông tin', 'Xử lí, phân tích thông tin', 'Bỏ qua, làm theo ý mình', 'Chia sẻ ngay lên mạng'], a: 1, why: 'Thông tin cần được xử lí để chọn ra giải pháp tốt nhất.' } ] },
  { id: 't3', name: 'Chất lượng thông tin', tip: 'Bốn tiêu chí: mới – chính xác – đầy đủ – sử dụng được!',
    html: S4('Thế nào là thông tin <b>có chất lượng</b>?',
      '<span class="k">Tính mới</span> (cập nhật) • <span class="k">Tính chính xác</span> • <span class="k">Tính đầy đủ</span> • <span class="k">Tính sử dụng được</span>.',
      'Bản tin thời tiết của năm ngoái thiếu tiêu chí nào?',
      'Thông tin tốt phải đạt đủ <b>4 tiêu chí</b> trên.'),
    quiz: [
      { q: 'Dùng bản tin thời tiết tuần trước để chuẩn bị đi chơi là thiếu tính:', o: ['Đầy đủ', 'Mới (cập nhật)', 'Hấp dẫn', 'Bí mật'], a: 1, why: 'Thông tin đã cũ, không còn đúng với thời điểm hiện tại.' },
      { q: 'Thông tin phản ánh đúng sự thật là thông tin có tính:', o: ['Mới', 'Đầy đủ', 'Chính xác', 'Ngắn gọn'], a: 2, why: 'Tính chính xác: thông tin đúng với thực tế.' } ] },
  { id: 't4', name: 'Kiểm chứng nguồn tin', tip: 'Gặp tin lạ, đừng vội tin, đừng vội chia sẻ – hãy kiểm tra trước!',
    html: S4('Trên mạng có tin: "Uống nước chanh chữa khỏi mọi bệnh". Em làm gì?',
      'Xem <b>nguồn</b> (trang chính thống?), <b>tác giả</b>, <b>ngày đăng</b>; <b>đối chiếu</b> nhiều nguồn.',
      'Có nên chia sẻ ngay tin chưa được kiểm chứng không?',
      '<span class="k">Kiểm chứng</span> trước khi tin và trước khi chia sẻ.'),
    quiz: [
      { q: 'Cách tốt để kiểm tra độ tin cậy của một tin trên mạng là:', o: ['Xem số lượt thích', 'Tin ngay vì bạn gửi', 'Xem ảnh có đẹp không', 'Đối chiếu với nguồn chính thống'], a: 3, why: 'Nguồn chính thống, nhiều nguồn cùng xác nhận thì đáng tin hơn.' },
      { q: 'Nguồn nào đáng tin cậy nhất về lịch thi học kì?', o: ['Tin nhắn lạ', 'Bài đăng ẩn danh', 'Thông báo của nhà trường', 'Lời đồn của bạn'], a: 2, why: 'Nhà trường là nơi chính thức đưa ra lịch thi.' } ] },
  { id: 't5', name: 'Thông tin tốt, quyết định đúng', tip: 'Ôn nhanh: 4 bước giải quyết vấn đề và 4 tiêu chí chất lượng!',
    html: S4('Tóm tắt bài bằng sơ đồ.',
      '4 bước: xác định → thu thập → xử lí → thực hiện, đánh giá.',
      '4 tiêu chí: <b>mới</b>, <b>chính xác</b>, <b>đầy đủ</b>, <b>sử dụng được</b>.',
      'Thông tin có chất lượng → <span class="k">giải pháp hiệu quả</span>.'),
    quiz: [
      { q: 'Thông tin "đầy đủ" nghĩa là:', o: ['Có đủ dữ kiện cần để quyết định', 'Viết thật dài', 'Có nhiều hình ảnh', 'Được nhiều người xem'], a: 0, why: 'Đầy đủ là không thiếu dữ kiện quan trọng cho việc ra quyết định.' },
      { q: 'Thông tin có tính "sử dụng được" khi:', o: ['Đã rất cũ', 'Phù hợp, hữu ích cho vấn đề', 'Viết bằng tiếng nước ngoài', 'Rất khó hiểu'], a: 1, why: 'Thông tin phải phù hợp và giúp ích cho việc cần giải quyết.' } ] },
];

const KEY = [
  'Thông tin giúp<br><b>quyết định đúng</b>.',
  '<b>4 bước</b>: xác định → thu thập<br>→ xử lí → thực hiện.',
  'Mới • Chính xác<br>• Đầy đủ • <b>Sử dụng được</b>.',
  '<b>Kiểm chứng</b> trước<br>khi tin, khi chia sẻ.',
  'Thông tin tốt →<br><b>giải pháp hiệu quả</b>.',
];
