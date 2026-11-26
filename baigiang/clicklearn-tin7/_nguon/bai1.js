/* ===== BÀI 1: THIẾT BỊ VÀO – RA ===== */
const META = { key: 'bai1', num: 1, theme: 'vutru', title: 'Bài 1. Thiết bị vào – ra', big: 'Thiết bị<br>vào – ra',
  st2: 'Chủ đề 1 • 5 phần kiến thức cần nhớ • 10 câu đố • giấy chứng nhận',
  hello: 'Cùng bay vào vũ trụ thiết bị máy tính nhé!',
  cert: 'Tin học 7 – Bài 1. Thiết bị vào – ra', file: 'Tin7_Bai1', pass: 8 };

const ILL_T = {
  t1: () => svg(`${keyb(150, 90, .9)}${mouse(370, 110, .75)}${mic(500, 100, .9)}${scanner(150, 230, .8)}${webcam(380, 240, .8)}
    ${arr(250, 300, 250, 340, O, 6)}${pillS(60, 345, 480, 54, '#1982C4', 'Đưa thông tin VÀO máy tính', 26)}`),
  t2: () => svg(`${monitor(140, 120, .8)}${printer(370, 110, .75)}${speaker(530, 110, .65)}${headset(470, 260, .7)}
    ${pillS(60, 345, 480, 54, '#FF7F11', 'Đưa thông tin RA ngoài', 26)}`),
  t3: () => svg(`${smart(130, 160, .95)}${arr(205, 110, 270, 110, '#1982C4', 7)}${arr(270, 200, 205, 200, '#FF7F11', 7)}${usb(370, 160, .9, '#2DA44E')}
    ${G(500, 150, .9, `<rect x="-50" y="-70" width="100" height="130" rx="10" fill="#3D405B" ${ST}/><rect x="-36" y="-52" width="72" height="20" rx="5" fill="#FFD60A"/>`)}${txt(500, 245, 'Đĩa cứng', 24)}
    ${pillS(40, 330, 520, 54, '#2DA44E', 'Vừa vào vừa ra / lưu trữ', 26)}`),
  t4: () => svg(`${thermo(110, 150, .9)}${arr(150, 150, 250, 150, O, 6)}${laptop(260, 80, .7)}${arr(440, 150, 500, 150, O, 6)}${fan(540, 150, .6)}
    ${pillS(40, 270, 520, 50, '#8338EC', 'Cảm biến, máy tính, thiết bị', 24)}${pillS(80, 340, 440, 50, '#FF006E', 'Tự động bật quạt khi nóng', 24)}`),
  t5: () => svg(`${tlist([[true, '#2DA44E', 'Tắt máy bằng Shut down'], [true, '#2DA44E', 'Tháo USB an toàn (Eject)'], [false, '#E5383B', 'Rút điện khi máy đang chạy'], [false, '#E5383B', 'Để nước gần bàn phím']], 60, 92, 24)}`),
};

const TOPICS = [
  { id: 't1', name: 'Thiết bị vào', tip: 'Thiết bị vào giống như “tai, mắt” giúp máy tính nhận thông tin!',
    html: KT([
      '<b>Thiết bị vào</b> dùng để <b>nhập dữ liệu, đưa thông tin vào</b> máy tính.',
      '<b>Bàn phím</b>: gõ chữ, số, kí hiệu, phím tắt.',
      '<b>Chuột</b>: di chuyển con trỏ, nháy chọn, kéo thả, ra lệnh.',
      '<b>Máy quét</b>: đưa ảnh, tài liệu giấy vào máy. <b>Micro</b>: thu âm thanh.',
      '<b>Webcam, máy ảnh số</b>: thu hình ảnh, video. Ngoài ra còn <b>bút cảm ứng, cần điều khiển</b>…',
    ], 'Thiết bị vào biến thông tin thành <span class="k">dữ liệu</span> cho máy tính xử lí.'),
    quiz: [
      { q: 'Thiết bị nào sau đây là thiết bị vào?', o: ['Loa', 'Máy in', 'Bàn phím', 'Màn hình'], a: 2, why: 'Bàn phím dùng để nhập dữ liệu vào máy tính.' },
      { q: 'Muốn đưa một bức ảnh trên giấy vào máy tính, em dùng:', o: ['Máy quét', 'Tai nghe', 'Loa', 'Máy chiếu'], a: 0, why: 'Máy quét chuyển ảnh, tài liệu giấy thành dữ liệu trong máy tính.' } ] },
  { id: 't2', name: 'Thiết bị ra', tip: 'Thiết bị ra giúp máy tính “nói” và “cho xem” kết quả!',
    html: KT([
      '<b>Thiết bị ra</b> đưa <b>kết quả xử lí</b> từ máy tính ra ngoài cho con người.',
      '<b>Màn hình</b>: hiển thị chữ, hình ảnh, video. <b>Máy chiếu</b>: chiếu lên màn lớn.',
      '<b>Máy in</b>: in văn bản, hình ảnh ra giấy.',
      '<b>Loa, tai nghe</b>: phát ra âm thanh, bài hát, lời nói.',
      'Kết quả có thể ở nhiều dạng: <b>chữ, số, hình ảnh, âm thanh</b>.',
    ], 'Thiết bị ra đưa kết quả dưới dạng <span class="k">chữ, hình, âm thanh</span>.'),
    quiz: [
      { q: 'Nhóm nào gồm toàn thiết bị ra?', o: ['Chuột, bàn phím', 'Màn hình, máy in, loa', 'Micro, webcam', 'Máy quét, chuột'], a: 1, why: 'Màn hình, máy in, loa đều đưa kết quả ra ngoài.' },
      { q: 'Để in bài kiểm tra ra giấy, em dùng thiết bị:', o: ['Micro', 'Webcam', 'Máy in', 'Bàn phím'], a: 2, why: 'Máy in là thiết bị ra, đưa văn bản ra giấy.' } ] },
  { id: 't3', name: 'Thiết bị vừa vào vừa ra', tip: 'Có những thiết bị “hai trong một” đấy!',
    html: KT([
      '<b>Màn hình cảm ứng</b> (điện thoại, máy tính bảng): vừa hiển thị (ra), vừa nhận thao tác chạm (vào).',
      '<b>Thiết bị lưu trữ</b>: <b>đĩa cứng, USB, thẻ nhớ</b> – vừa ghi dữ liệu vào, vừa đọc dữ liệu ra.',
      '<b>Tai nghe có micro</b>: vừa nghe (ra), vừa nói (vào).',
      'Thiết bị vào – ra giúp máy tính <b>giao tiếp</b> với con người và thiết bị khác.',
    ], 'Có thiết bị <span class="k">vừa vào vừa ra</span>: màn hình cảm ứng, USB…'),
    quiz: [
      { q: 'Thiết bị nào vừa là thiết bị vào, vừa là thiết bị ra?', o: ['Màn hình cảm ứng', 'Loa', 'Chuột', 'Máy in'], a: 0, why: 'Màn hình cảm ứng vừa hiển thị, vừa nhận thao tác chạm.' },
      { q: 'USB, thẻ nhớ, đĩa cứng thuộc nhóm thiết bị:', o: ['Chỉ để vào', 'Chỉ để ra', 'Dùng để vẽ', 'Lưu trữ (vừa ghi vừa đọc)'], a: 3, why: 'Thiết bị lưu trữ vừa ghi dữ liệu vào, vừa đọc dữ liệu ra.' } ] },
  { id: 't4', name: 'Thiết bị vào – ra rất đa dạng', tip: 'Ngôi nhà thông minh cũng dùng thiết bị vào – ra đấy!',
    html: KT([
      'Thiết bị vào – ra có <b>nhiều loại, hình dạng, kích thước</b> khác nhau.',
      'Mỗi thiết bị chuyển đổi <b>một dạng thông tin</b>: phím → chữ; micro → âm thanh; camera → hình ảnh.',
      '<b>Cảm biến</b> (nhiệt độ, ánh sáng, chuyển động) là thiết bị vào trong hệ thống <b>tự động</b>.',
      'VD: cảm biến báo nóng → máy tính xử lí → <b>bật quạt</b>; camera giao thông ghi hình xe vi phạm.',
    ], 'Thiết bị vào – ra <span class="k">rất đa dạng</span>, có mặt khắp nơi.'),
    quiz: [
      { q: 'Cảm biến nhiệt độ trong ngôi nhà thông minh là:', o: ['Thiết bị ra', 'Thiết bị vào', 'Phần mềm', 'Máy in'], a: 1, why: 'Cảm biến thu thông tin (nhiệt độ) đưa vào máy tính.' },
      { q: 'Micro chuyển dạng thông tin nào vào máy tính?', o: ['Hình ảnh', 'Chữ viết', 'Âm thanh', 'Nhiệt độ'], a: 2, why: 'Micro thu âm thanh đưa vào máy tính.' } ] },
  { id: 't5', name: 'Sử dụng thiết bị an toàn', tip: 'Dùng đúng cách thì máy bền, dữ liệu không bị mất!',
    html: KT([
      'Thao tác <b>sai</b> có thể làm <b>hỏng thiết bị</b>, <b>mất dữ liệu</b>, thậm chí gây nguy hiểm.',
      '<b>Tắt máy đúng cách</b> bằng lệnh <b>Shut down</b>; không rút điện khi máy đang chạy.',
      'Tháo USB bằng lệnh <b>Eject</b> (an toàn); không cắm, rút thiết bị mạnh tay.',
      'Gõ phím, bấm chuột <b>nhẹ nhàng</b>; giữ máy <b>khô ráo, sạch sẽ</b>, tránh nước và đồ ăn.',
    ], 'Sử dụng thiết bị <span class="k">đúng cách, an toàn</span> để bảo vệ máy và dữ liệu.'),
    quiz: [
      { q: 'Cách tắt máy tính đúng là:', o: ['Rút dây điện ngay', 'Dùng lệnh Shut down', 'Tắt màn hình là xong', 'Ấn giữ nút nguồn'], a: 1, why: 'Dùng lệnh Shut down để máy lưu và đóng mọi thứ an toàn.' },
      { q: 'Việc làm nào có thể gây hỏng máy, mất dữ liệu?', o: ['Rút USB khi đang chép dữ liệu', 'Gõ phím nhẹ nhàng', 'Giữ bàn phím sạch sẽ', 'Tháo USB bằng lệnh Eject'], a: 0, why: 'Rút USB khi đang chép dữ liệu có thể làm hỏng, mất dữ liệu.' } ] },
];

const KEY = [
  '<b>Thiết bị vào</b>: bàn phím, chuột, micro, máy quét, webcam.',
  '<b>Thiết bị ra</b>: màn hình, máy in, loa, tai nghe.',
  'Vừa vào vừa ra: <b>màn hình cảm ứng</b>, USB, đĩa cứng.',
  '<b>Cảm biến</b> là thiết bị vào trong hệ thống tự động.',
  'Tắt máy bằng <b>Shut down</b>, tháo USB bằng <b>Eject</b>.',
];
