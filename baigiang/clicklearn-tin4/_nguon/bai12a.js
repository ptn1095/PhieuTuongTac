/* ===== BÀI 12A: THỰC HÀNH SỬ DỤNG CÔNG CỤ ĐA PHƯƠNG TIỆN ===== */
const META = { key: 'bai12a', num: '12A', theme: 'daiduong', ic: '🎬', cd: 5, en: 'Công cụ đa phương tiện',
  title: 'Bài 12A. Thực hành sử dụng công cụ đa phương tiện', big: 'Công cụ<br>đa phương tiện',
  st2: 'Chủ đề 5 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Lặn xuống đại dương video – cùng xem phim về lịch sử dân tộc ta nhé!',
  cert: 'Tin học 4 – Bài 12A. Công cụ đa phương tiện', file: 'Tin4_Bai12A', pass: 8 };

const player = (x, y, w, h, inner = '') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="#1B2A49" ${ST}/>${inner}<rect x="${x}" y="${y + h - 44}" width="${w}" height="44" fill="#3D405B" stroke="${O}" stroke-width="5"/>
  <path d="M${x + 22} ${y + h - 34} L${x + 44} ${y + h - 22} L${x + 22} ${y + h - 10}Z" fill="#fff"/><rect x="${x + 60}" y="${y + h - 25}" width="${w - 170}" height="8" rx="4" fill="#ADB5BD"/><rect x="${x + 60}" y="${y + h - 25}" width="${(w - 170)*.4}" height="8" rx="4" fill="#FF006E"/>
  <path d="M${x + w - 96} ${y + h - 28} h8 l10 -8 v24 l-10 -8 h-8Z" fill="#fff"/><rect x="${x + w - 46}" y="${y + h - 32}" width="26" height="20" fill="none" stroke="#fff" stroke-width="3"/>`;
const COVER = () => svgC(`${player(60, 40, 400, 250, `${star(260, 130, 50, '#FFD60A')}`)}${note(510, 120, '#FF006E', 1.2)}${star(560, 320, 14, '#FFD60A')}`);
const ILL_T = {
  t1: () => svg(`${player(40, 30, 340, 230, `<path d="M190 100 L240 135 L190 170Z" fill="#fff"/>`)}${note(450, 90, '#8338EC', 1)}${sun(470, 210, 34)}
    ${pillS(40, 320, 520, 54, '#1982C4', 'Chữ, hình, âm thanh, video', 24)}`),
  t2: () => svg(`${player(80, 30, 440, 260, `${flower(300, 180, 1, '#FF006E')}`)}
    ${pillS(40, 320, 260, 50, '#2DA44E', '▶ Phát / ⏸ Dừng', 22)}${pillS(320, 320, 240, 50, '#FF7F11', '⛶ Toàn màn hình', 20)}`),
  t3: () => svg(`${player(60, 30, 480, 250, `${person(220, 140, .8, '#E5383B')}${person(380, 140, .8, '#2DA44E')}`)}
    ${pillS(40, 320, 520, 54, '#E5383B', 'Xem video lịch sử dân tộc', 24)}`),
  t4: () => svg(`${kid(120, 160, 1)}${bubble(200, 50, 360, 70, '#FFD60A', 'Em kể lại câu chuyện…', 22)}${book(400, 230, .6)}
    ${pillS(40, 330, 520, 54, '#2DA44E', 'Kể lại điều em học được', 24)}`),
  t5: () => svg(`${vflow([['#1982C4', 'Mở video'], ['#FF7F11', 'Điều khiển phát, âm lượng'], ['#2DA44E', 'Kể lại nội dung']], 130, 40, 340, 110, 24)}${star(60, 60, 14, '#FFD60A')}`),
};

const TOPICS = [
  { id: 't1', name: 'Đa phương tiện là gì?', tip: 'Đa phương tiện = chữ + hình + âm thanh + video cùng nhau!',
    html: S4Q(['Xem một đoạn phim hoạt hình: em thấy có <b>những gì</b>?', ''],
      ['Đa phương tiện gồm những dạng thông tin nào?', '<b>Chữ</b>, <b>hình ảnh</b>, <b>âm thanh</b>, <b>video</b> kết hợp với nhau.'],
      ['Đa phương tiện giúp gì cho việc học?', 'Bài học <b>sinh động</b>, dễ hiểu, dễ nhớ.'],
      ['Kết hợp <span class="k">nhiều dạng</span> thông tin.', 'Chữ, hình, <b>âm thanh, video</b>.', 'Giúp học <b>sinh động</b>.']),
    quiz: [
      { q: 'Đa phương tiện là kết hợp:', o: ['Chỉ chữ', 'Chữ, hình ảnh, âm thanh, video', 'Chỉ âm thanh', 'Chỉ con số'], a: 1, why: 'Đa phương tiện kết hợp nhiều dạng thông tin.' },
      { q: 'Một video phim hoạt hình có:', o: ['Hình ảnh và âm thanh', 'Chỉ có chữ', 'Chỉ có số', 'Không có gì'], a: 0, why: 'Video có hình ảnh chuyển động và âm thanh.' } ] },
  { id: 't2', name: 'Phần mềm xem video', tip: 'Nút ▶ để phát, ⏸ để dừng – dễ như ăn kẹo!',
    html: S4Q(['Mở một <b>video</b> trong máy tính bằng phần mềm xem phim.', ''],
      ['Các nút điều khiển chính là gì?', '<b>▶ Phát</b>, <b>⏸ Tạm dừng</b>, thanh <b>tiến trình</b>, nút <b>âm lượng</b>.'],
      ['Xem video to hơn bằng cách nào?', 'Nháy nút <b>toàn màn hình</b> ⛶; nhấn <b>Esc</b> để thoát.'],
      ['<span class="k">▶ / ⏸</span>: phát, tạm dừng.', 'Thanh tiến trình: <b>tua</b> video.', '⛶ <b>toàn màn hình</b>, Esc thoát.']),
    quiz: [
      { q: 'Nút ⏸ trong phần mềm xem video dùng để:', o: ['Phát video', 'Xoá video', 'Tạm dừng video', 'Tăng âm lượng'], a: 2, why: '⏸ là nút tạm dừng.' },
      { q: 'Để thoát chế độ toàn màn hình, em nhấn:', o: ['Enter', 'Delete', 'Ctrl + S', 'Esc'], a: 3, why: 'Esc thoát chế độ toàn màn hình.' } ] },
  { id: 't3', name: 'Xem video lịch sử', tip: 'Cùng xem video về truyền thống chống giặc ngoại xâm!',
    html: S4Q(['Xem video về <b>truyền thống chống giặc ngoại xâm</b> của dân tộc.', 'Gợi ý: Hai Bà Trưng, Ngô Quyền, Trần Hưng Đạo…'],
      ['Video kể về nhân vật lịch sử nào?', 'Ví dụ: <b>Hai Bà Trưng</b>, <b>Ngô Quyền</b>, <b>Trần Hưng Đạo</b>.'],
      ['Xem video giúp em điều gì?', 'Hiểu <b>lịch sử</b> sinh động, thêm <b>tự hào</b> về dân tộc.'],
      ['Video giúp học <span class="k">lịch sử</span> sinh động.', 'Biết thêm <b>anh hùng</b> dân tộc.', 'Thêm yêu <b>quê hương</b>.']),
    quiz: [
      { q: 'Vị anh hùng nào đánh tan quân Nam Hán trên sông Bạch Đằng năm 938?', o: ['Ngô Quyền', 'Lý Thường Kiệt', 'Lê Lợi', 'Quang Trung'], a: 0, why: 'Ngô Quyền chiến thắng Bạch Đằng năm 938.' },
      { q: 'Xem video lịch sử giúp em:', o: ['Quên bài', 'Hiểu lịch sử sinh động hơn', 'Mỏi mắt hơn', 'Không học được gì'], a: 1, why: 'Video có hình ảnh, âm thanh giúp hiểu bài.' } ] },
  { id: 't4', name: 'Kể lại nội dung video', tip: 'Xem xong, kể lại để nhớ thật lâu!',
    html: S4Q(['Kể cho bạn nghe <b>nội dung</b> video em vừa xem.', ''],
      ['Khi kể lại, em nên nói những gì?', 'Tên nhân vật, <b>sự việc chính</b>, điều em <b>ấn tượng</b> nhất.'],
      ['Muốn xem lại một đoạn, em làm gì?', 'Kéo <b>thanh tiến trình</b> về đoạn cần xem.'],
      ['Kể <b>nhân vật, sự việc</b>.', 'Nói điều em <span class="k">ấn tượng</span>.', 'Tua lại bằng <b>thanh tiến trình</b>.']),
    quiz: [
      { q: 'Muốn xem lại một đoạn video, em kéo:', o: ['Nút âm lượng', 'Thanh tiến trình', 'Nút đóng', 'Con lăn bàn phím'], a: 1, why: 'Thanh tiến trình giúp tua đến đoạn cần xem.' },
      { q: 'Khi kể lại nội dung video, em nên:', o: ['Nói tên nhân vật, sự việc chính', 'Kể chuyện khác', 'Im lặng', 'Chỉ nói “hay”'], a: 0, why: 'Kể nhân vật, sự việc chính giúp bạn hiểu.' } ] },
  { id: 't5', name: 'Em dùng đa phương tiện', tip: 'Ôn lại: mở video – điều khiển – kể lại!',
    html: S4Q(['Nêu cách em xem video để <b>học tập</b> hiệu quả.', ''],
      ['Em điều khiển video thế nào?', 'Dùng nút <b>phát, dừng</b>, âm lượng, toàn màn hình, thanh tiến trình.'],
      ['Xem video cần chú ý gì?', 'Chọn video <b>phù hợp</b>, âm lượng vừa phải, không xem quá lâu.'],
      ['Điều khiển video <b>thành thạo</b>.', 'Chọn video <span class="k">phù hợp</span>.', 'Xem có <b>giới hạn</b>, kể lại.']),
    quiz: [
      { q: 'Khi xem video trong lớp, âm lượng nên:', o: ['Thật to', 'Vừa phải', 'Tắt hẳn khi cần nghe', 'To nhất có thể'], a: 1, why: 'Âm lượng vừa phải để không ảnh hưởng người khác.' },
      { q: 'Nút ▶ dùng để:', o: ['Tạm dừng', 'Tắt máy', 'Phát video', 'Xoá video'], a: 2, why: '▶ là nút phát (Play).' } ] },
];

const KEY = [
  'Chữ, hình,<br><b>âm thanh, video</b>.',
  '▶ ⏸, <b>tiến trình</b>,<br>⛶ toàn màn hình.',
  'Video học<br><b>lịch sử</b>.',
  'Kể lại<br><b>nội dung</b>.',
  'Video <b>phù hợp</b>,<br>có giới hạn.',
];
