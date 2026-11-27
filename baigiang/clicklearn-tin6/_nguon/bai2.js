/* ===== BÀI 2: XỬ LÍ THÔNG TIN ===== */
const META = { key: 'bai2', theme: 'vutru', num: 2, title: 'Bài 2. Xử lí thông tin', big: 'Xử lí<br>thông tin',
  st2: 'Chủ đề 1 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Cùng xem con người và máy tính xử lí thông tin thế nào nhé!',
  cert: 'Tin học 6 – Bài 2. Xử lí thông tin', file: 'Tin6_Bai2', pass: 8 };

const ILL_T = {
  t1: () => svg(`${eye(110, 110, 1.1)}${ear(110, 270, 1.1)}${G(380, 190, 1, `<ellipse cx="0" cy="0" rx="110" ry="80" fill="#FF8FAB" ${ST}/><path d="M-60 -20 Q-30 -50 0 -20 Q30 -50 60 -20 M-60 20 Q-30 -10 0 20 Q30 -10 60 20" fill="none" stroke="${O}" stroke-width="5" stroke-linecap="round"/>`)}
    ${arr(180, 120, 260, 160, '#FF7F11')}${arr(180, 260, 260, 220, '#FF7F11')}${pillS(270, 320, 220, 50, '#8338EC', 'Bộ não', 26)}${star(560, 50, 14, '#FFD60A')}`),
  t2: () => svg(`${vflow([['#1982C4', '1. Thu nhận'], ['#FF7F11', '2. Xử lí'], ['#2DA44E', '3. Lưu trữ'], ['#8338EC', '4. Truyền']], 150, 26, 300, 98, 28)}${star(540, 60, 14, '#FFD60A')}${star(60, 380, 12, '#FF006E')}`),
  t3: () => svg(`${laptop(180, 60, 1)}
    ${pillS(10, 250, 180, 46, '#1982C4', 'Bàn phím', 22)}${pillS(10, 310, 180, 46, '#1982C4', 'Chuột', 22)}
    ${pillS(210, 250, 180, 46, '#FF7F11', 'Bộ xử lí', 22)}${pillS(210, 310, 180, 46, '#2DA44E', 'Bộ nhớ', 22)}
    ${pillS(410, 250, 180, 46, '#8338EC', 'Màn hình', 22)}${pillS(410, 310, 180, 46, '#8338EC', 'Loa, máy in', 22)}
    ${txt(100, 390, 'Vào', 26)}${txt(300, 390, 'Xử lí – lưu', 26)}${txt(500, 390, 'Ra', 26)}`),
  t4: () => svg(`${tlist([[1, '#2DA44E', 'Tính toán rất nhanh'], [1, '#1982C4', 'Chính xác, lưu được nhiều'], [1, '#FF7F11', 'Làm việc liên tục, tự động'], [0, '#E5383B', 'Không thay thế hoàn toàn con người']], 60, 96, 22)}`),
  t5: () => svg(`${hflow([['#1982C4', 'Thu nhận'], ['#FF7F11', 'Xử lí'], ['#2DA44E', 'Lưu trữ'], ['#8338EC', 'Truyền']], 60, 20)}
    ${gear(200, 270, 56, '#FFD60A')}${gear(330, 300, 40, '#2EC4B6')}${pillS(370, 220, 210, 50, '#FF006E', 'Máy tính', 26)}${star(560, 380, 14, '#FFD60A')}`),
};

const TOPICS = [
  { id: 't1', name: 'Bộ não xử lí thông tin', tip: 'Mắt, tai thu thông tin – bộ não xử lí – rồi ta hành động!',
    html: S4Q(['Kể lại việc em làm khi nghe <b>tiếng trống vào lớp</b>.', ''],
      ['Bộ phận nào <b>thu nhận</b> tiếng trống?', '<b>Tai</b> nghe tiếng trống (giác quan thu nhận).'],
      ['Bộ phận nào <b>xử lí</b> để biết "đã vào lớp"?', '<b>Bộ não</b> xử lí rồi ra lệnh cho em về chỗ ngồi.'],
      ['<b>Giác quan</b> thu nhận thông tin.', '<b>Bộ não</b> xử lí, ghi nhớ thông tin.', 'Con người <span class="k">xử lí thông tin</span> hằng ngày.']),
    quiz: [
      { q: 'Ở con người, bộ phận nào xử lí thông tin?', o: ['Đôi tay', 'Đôi chân', 'Bộ não', 'Mái tóc'], a: 2, why: 'Bộ não tiếp nhận và xử lí thông tin từ các giác quan.' },
      { q: 'Nghe tiếng trống vào lớp, em đi về chỗ ngồi. Tai làm nhiệm vụ:', o: ['Thu nhận thông tin', 'Lưu trữ thông tin', 'Truyền thông tin', 'Xử lí thông tin'], a: 0, why: 'Tai nghe tiếng trống – đó là thu nhận thông tin.' } ] },
  { id: 't2', name: 'Bốn hoạt động xử lí', tip: 'Thu nhận – xử lí – lưu trữ – truyền: nhớ 4 bước này nhé!',
    html: S4Q(['Sắp xếp các bước khi em <b>làm một bài toán</b>.', 'Gợi ý: đọc đề, giải, ghi vở, đọc cho bạn nghe.'],
      ['Đọc đề, giải, ghi vở ứng với hoạt động nào?', 'Đọc đề: <b>thu nhận</b>; giải: <b>xử lí</b>; ghi vở: <b>lưu trữ</b>.'],
      ['Đọc bài giải cho bạn nghe là hoạt động nào?', 'Đó là hoạt động <b>truyền</b> thông tin.'],
      ['Xử lí thông tin gồm <b>4 hoạt động</b>.', 'Thu nhận → xử lí → lưu trữ → truyền.', 'Cả <span class="k">con người và máy tính</span> đều làm vậy.']),
    quiz: [
      { q: 'Ghi lời giải bài toán vào vở là hoạt động nào?', o: ['Thu nhận', 'Xử lí', 'Truyền', 'Lưu trữ'], a: 3, why: 'Ghi vào vở để giữ lại – đó là lưu trữ thông tin.' },
      { q: 'Quá trình xử lí thông tin gồm mấy hoạt động?', o: ['2 hoạt động', '4 hoạt động', '3 hoạt động', '5 hoạt động'], a: 1, why: 'Gồm thu nhận, xử lí, lưu trữ và truyền thông tin.' } ] },
  { id: 't3', name: 'Máy tính xử lí thông tin', tip: 'Máy tính cũng có "tai mắt" và "bộ não" riêng đấy!',
    html: S4Q(['Ghép các <b>thiết bị máy tính</b> với hoạt động xử lí thông tin.', ''],
      ['Bàn phím, chuột, micro làm nhiệm vụ gì?', 'Là <b>thiết bị vào</b>: thu nhận thông tin.'],
      ['Bộ xử lí, bộ nhớ, màn hình, loa làm gì?', 'Bộ xử lí: <b>xử lí</b>; bộ nhớ: <b>lưu trữ</b>; màn hình, loa: <b>đưa ra</b>.'],
      ['<b>Thiết bị vào</b>: bàn phím, chuột, micro.', '<b>Bộ xử lí</b> xử lí; <b>bộ nhớ</b> lưu trữ.', '<b>Thiết bị ra</b>: màn hình, loa, <span class="k">máy in</span>.']),
    quiz: [
      { q: 'Thiết bị nào dùng để đưa thông tin vào máy tính?', o: ['Màn hình', 'Loa', 'Bàn phím', 'Máy in'], a: 2, why: 'Bàn phím là thiết bị vào, giúp nhập dữ liệu.' },
      { q: 'Thành phần nào của máy tính làm nhiệm vụ lưu trữ?', o: ['Bộ nhớ', 'Chuột', 'Loa', 'Micro'], a: 0, why: 'Bộ nhớ dùng để lưu trữ dữ liệu.' } ] },
  { id: 't4', name: 'Máy tính – trợ thủ đắc lực', tip: 'Máy tính tính nhanh hơn cả nghìn bạn cộng lại!',
    html: S4Q(['So sánh máy tính và con người khi <b>tính tổng điểm cả lớp</b>.', ''],
      ['Máy tính <b>hơn</b> con người ở điểm nào?', 'Tính nhanh, chính xác, lưu rất nhiều, làm việc liên tục.'],
      ['Máy tính có <b>thay thế hoàn toàn</b> con người không?', 'Không. Máy tính chỉ làm theo lệnh do con người tạo ra.'],
      ['Máy tính xử lí <b>nhanh, chính xác</b>.', 'Lưu trữ <b>rất nhiều</b>, làm việc không mệt.', 'Máy tính là <span class="k">công cụ</span> giúp con người.']),
    quiz: [
      { q: 'Ưu điểm của máy tính khi xử lí thông tin là:', o: ['Hay mệt mỏi', 'Dễ quên', 'Nhanh và chính xác', 'Tự suy nghĩ như người'], a: 2, why: 'Máy tính tính toán nhanh, chính xác, không mệt mỏi.' },
      { q: 'Câu nào đúng?', o: ['Máy tính thay thế hoàn toàn con người', 'Máy tính là công cụ hỗ trợ con người', 'Máy tính không lưu được dữ liệu', 'Máy tính không cần điện'], a: 1, why: 'Máy tính hỗ trợ, con người vẫn điều khiển và quyết định.' } ] },
  { id: 't5', name: 'Tổng kết bài học', tip: 'Ôn nhanh: 4 hoạt động và các thành phần của máy tính!',
    html: S4Q(['Tóm tắt bài học bằng <b>3 ý chính</b>.', ''],
      ['Xử lí thông tin gồm những hoạt động nào?', 'Thu nhận – xử lí – lưu trữ – truyền.'],
      ['Máy tính có những thành phần nào để xử lí?', 'Thiết bị vào, bộ xử lí, bộ nhớ, thiết bị ra.'],
      ['<b>4 hoạt động</b>: thu nhận, xử lí, lưu trữ, truyền.', 'Mỗi thành phần máy tính đảm nhận <b>một việc</b>.', 'Máy tính xử lí <span class="k">nhanh, chính xác</span>.']),
    quiz: [
      { q: 'Màn hình máy tính thuộc nhóm thiết bị nào?', o: ['Thiết bị vào', 'Bộ nhớ', 'Bộ xử lí', 'Thiết bị ra'], a: 3, why: 'Màn hình hiển thị kết quả – là thiết bị ra.' },
      { q: 'Gửi tin nhắn cho bạn là hoạt động:', o: ['Lưu trữ', 'Truyền thông tin', 'Thu nhận', 'Xử lí'], a: 1, why: 'Gửi tin nhắn là truyền thông tin đến người khác.' } ] },
];

const KEY = [
  'Giác quan thu nhận,<br><b>bộ não</b> xử lí.',
  'Thu nhận – xử lí<br>– <b>lưu trữ – truyền</b>.',
  'Vào – <b>xử lí</b> –<br>nhớ – ra.',
  'Máy tính: <b>nhanh,<br>chính xác</b>.',
  'Máy tính là<br><b>công cụ</b> hỗ trợ.',
];
