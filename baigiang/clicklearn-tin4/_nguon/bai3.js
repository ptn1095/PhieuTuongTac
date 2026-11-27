/* ===== BÀI 3: THÔNG TIN TRÊN TRANG WEB ===== */
const META = { key: 'bai3', num: 3, theme: 'daiduong', ic: '🌐', cd: 2, en: 'Thông tin trên trang web',
  title: 'Bài 3. Thông tin trên trang web', big: 'Thông tin<br>trên trang web',
  st2: 'Chủ đề 2 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Các trang web như những rạn san hô đầy màu sắc – lặn xuống khám phá nhé!',
  cert: 'Tin học 4 – Bài 3. Thông tin trên trang web', file: 'Tin4_Bai3', pass: 8 };

const handC = (x, y, s = 1) => G(x, y, s, `<path d="M0 0 V-40 Q0 -50 9 -50 Q18 -50 18 -40 V-8 Q20 -20 30 -18 Q38 -16 38 -6 Q42 -14 50 -12 Q58 -10 58 0 Q62 -6 68 -4 Q76 -2 76 8 V30 Q76 60 46 66 H18 Q2 62 -6 46 L-24 14 Q-30 2 -20 -2 Q-10 -4 0 8Z" fill="#fff" stroke="${O}" stroke-width="5" stroke-linejoin="round"/>`);
const COVER = () => svgC(`${browser(50, 30, 500, 270, `${pillS(90, 110, 200, 44, '#1982C4', 'Tin tức', 22)}${pillS(90, 170, 200, 44, '#FF006E', 'Truyện', 22)}${sun(430, 170, 46)}${handC(250, 200, .7)}`, 'www.thieunhi…')}${star(570, 330, 14, '#FFD60A')}`);
const ILL_T = {
  t1: () => svg(`${browser(40, 30, 520, 280, `${txt(170, 120, 'Chữ', 34, '#1982C4')}${sun(420, 130, 40)}${note(150, 220, '#8338EC', 1)}${pillS(330, 210, 180, 50, '#FF006E', '▶ Video', 22)}`, 'www.…')}
    ${pillS(60, 335, 480, 50, '#2DA44E', 'Chữ, hình, âm thanh, video', 24)}`),
  t2: () => svg(`${browser(40, 30, 520, 270, `<text x="100" y="140" font-size="32" fill="#1982C4" ${F} text-decoration="underline">Truyện cổ tích</text>${handC(330, 150, .8)}`, 'www.…')}
    ${pillS(60, 330, 480, 54, '#1982C4', 'Siêu liên kết: con trỏ bàn tay', 22)}`),
  t3: () => svg(`${slideT(40, 40, 220, 150, '#FF7F11', 'Trang A', 22, 2)}${arr(270, 115, 330, 115, O, 7)}${slideT(340, 40, 220, 150, '#2DA44E', 'Trang B', 22, 2)}${handC(220, 140, .6)}
    ${pillS(60, 240, 480, 50, '#8338EC', 'Nháy liên kết → sang trang khác', 22)}${pillS(140, 320, 320, 50, '#FF006E', '← Quay lại', 24)}`),
  t4: () => svg(`${warn(150, 140, 2)}${browser(300, 50, 260, 180, `${cross(430, 150, 1)}`, '???')}
    ${pillS(30, 330, 540, 54, '#E5383B', 'Không phù hợp → đóng, báo người lớn', 20)}`),
  t5: () => svg(`${vflow([['#1982C4', 'Trang web: nhiều dạng'], ['#8338EC', 'Siêu liên kết'], ['#2DA44E', 'Chọn thông tin phù hợp']], 140, 40, 320, 110, 24)}${star(60, 60, 14, '#FFD60A')}`),
};

const TOPICS = [
  { id: 't1', name: 'Trang web có gì?', tip: 'Trang web có chữ, hình, âm thanh và video!',
    html: S4Q(['Mở một <b>trang web</b> thiếu nhi, quan sát các thông tin trên đó.', ''],
      ['Thông tin trên trang web có những dạng nào?', '<b>Chữ</b>, <b>hình ảnh</b>, <b>âm thanh</b>, <b>video</b>.'],
      ['Dùng phần mềm gì để xem trang web?', '<b>Trình duyệt web</b>: Chrome, Cốc Cốc, Edge…'],
      ['Trang web có <b>chữ, hình ảnh</b>.', 'Có cả <span class="k">âm thanh, video</span>.', 'Xem bằng <b>trình duyệt web</b>.']),
    quiz: [
      { q: 'Thông tin trên trang web có thể ở dạng:', o: ['Chỉ có chữ', 'Chữ, hình ảnh, âm thanh, video', 'Chỉ có hình', 'Chỉ có số'], a: 1, why: 'Trang web có nhiều dạng thông tin.' },
      { q: 'Phần mềm nào dùng để xem trang web?', o: ['Paint', 'Word', 'Máy tính bỏ túi', 'Trình duyệt Chrome'], a: 3, why: 'Chrome là trình duyệt web.' } ] },
  { id: 't2', name: 'Siêu liên kết', tip: 'Con trỏ biến thành bàn tay – đó là siêu liên kết!',
    html: S4Q(['Di chuột trên trang web. Con trỏ <b>đổi hình</b> ở đâu?', ''],
      ['Khi trỏ vào siêu liên kết, con trỏ thế nào?', 'Con trỏ chuột đổi thành hình <b>bàn tay</b> 👆.'],
      ['Siêu liên kết thường trông thế nào?', 'Chữ có <b>gạch chân</b>, màu khác, hoặc là hình ảnh, nút bấm.'],
      ['Con trỏ thành <span class="k">bàn tay</span>.', 'Có thể là <b>chữ hoặc hình</b>.', 'Nháy vào để <b>mở trang khác</b>.']),
    quiz: [
      { q: 'Khi đưa chuột vào siêu liên kết, con trỏ có hình:', o: ['Bàn tay', 'Mũi tên', 'Đồng hồ cát', 'Chữ I'], a: 0, why: 'Con trỏ thành bàn tay khi trỏ vào siêu liên kết.' },
      { q: 'Siêu liên kết có thể là:', o: ['Chỉ là chữ', 'Chỉ là hình', 'Chữ, hình ảnh hoặc nút', 'Bàn phím'], a: 2, why: 'Chữ, hình ảnh, nút đều có thể là siêu liên kết.' } ] },
  { id: 't3', name: 'Di chuyển giữa các trang', tip: 'Nháy liên kết để đi, nháy ← để quay về!',
    html: S4Q(['Nháy vào một liên kết, rồi <b>quay lại</b> trang cũ.', ''],
      ['Nháy vào siêu liên kết thì sao?', 'Trình duyệt <b>mở trang web khác</b>.'],
      ['Muốn quay lại trang trước, em làm gì?', 'Nháy nút <b>← (Back)</b> trên trình duyệt.'],
      ['Nháy liên kết: <b>sang trang mới</b>.', 'Nút <span class="k">← Back</span>: quay lại.', 'Các trang <b>nối với nhau</b>.']),
    quiz: [
      { q: 'Để quay lại trang web vừa xem, em nháy nút:', o: ['→', '←', '⟳', '✕'], a: 1, why: 'Nút ← (Back) quay về trang trước.' },
      { q: 'Nháy vào siêu liên kết sẽ:', o: ['Tắt máy', 'Xoá trang web', 'In trang web', 'Mở trang web khác'], a: 3, why: 'Siêu liên kết dẫn tới trang web khác.' } ] },
  { id: 't4', name: 'Thông tin không phù hợp', tip: 'Gặp trang lạ – đóng ngay và báo người lớn!',
    html: S4Q(['Một trang web hiện <b>quảng cáo lạ</b>, hình ảnh đáng sợ. Em làm gì?', ''],
      ['Thông tin nào không phù hợp với em?', 'Hình ảnh <b>bạo lực</b>, đáng sợ, lời lẽ xấu, quảng cáo lừa đảo.'],
      ['Gặp thông tin đó, em xử lí thế nào?', '<b>Không nháy</b> vào, <b>đóng</b> trang và báo bố mẹ, thầy cô.'],
      ['Có thông tin <span class="k">không phù hợp</span>.', '<b>Không nháy</b> quảng cáo lạ.', 'Đóng trang, <b>báo người lớn</b>.']),
    quiz: [
      { q: 'Trang web hiện quảng cáo “Nháy để nhận quà”. Em nên:', o: ['Nháy ngay', 'Gửi cho bạn', 'Không nháy, báo người lớn', 'Nhập số điện thoại'], a: 2, why: 'Quảng cáo lạ có thể lừa đảo, cần báo người lớn.' },
      { q: 'Thông tin nào PHÙ HỢP với em?', o: ['Truyện thiếu nhi', 'Video bạo lực', 'Trò chơi đáng sợ', 'Quảng cáo lừa đảo'], a: 0, why: 'Truyện thiếu nhi phù hợp với lứa tuổi của em.' } ] },
  { id: 't5', name: 'Em đọc trang web', tip: 'Ôn lại: dạng thông tin – siêu liên kết – an toàn!',
    html: S4Q(['Nêu cách em <b>xem trang web</b> an toàn, hiệu quả.', ''],
      ['Làm sao biết đâu là siêu liên kết?', 'Di chuột thấy con trỏ thành <b>bàn tay</b>.'],
      ['Khi xem trang web, em cần nhớ gì?', 'Chọn thông tin <b>phù hợp</b>, có <b>người lớn</b> hướng dẫn.'],
      ['Trang web có <b>nhiều dạng</b> thông tin.', 'Dùng <span class="k">siêu liên kết</span> để đi.', 'Chọn thông tin <b>phù hợp</b>.']),
    quiz: [
      { q: 'Trên trang web, em có thể xem được:', o: ['Chỉ đọc chữ', 'Đọc chữ, xem tranh, nghe nhạc, xem video', 'Chỉ nghe nhạc', 'Không xem được gì'], a: 1, why: 'Trang web có chữ, hình, âm thanh, video.' },
      { q: 'Xem trang web an toàn là:', o: ['Nháy mọi quảng cáo', 'Kết bạn với người lạ', 'Xem trang không phù hợp', 'Xem trang phù hợp, có người lớn'], a: 3, why: 'Có người lớn hướng dẫn giúp em an toàn.' } ] },
];

const KEY = [
  'Chữ, hình,<br><b>âm thanh, video</b>.',
  'Con trỏ thành<br><b>bàn tay</b>.',
  'Nút <b>←</b><br>quay lại.',
  'Nội dung xấu:<br><b>đóng, báo</b>.',
  'Xem web<br><b>an toàn</b>.',
];
