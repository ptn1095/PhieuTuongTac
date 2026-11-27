/* ===== BÀI 8: THƯ ĐIỆN TỬ ===== */
const META = { key: 'bai8', theme: 'daiduong', num: 8, title: 'Bài 8. Thư điện tử', big: 'Thư<br>điện tử',
  st2: 'Chủ đề 3 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Cùng gửi một lá thư bay qua Internet nhé!',
  cert: 'Tin học 6 – Bài 8. Thư điện tử', file: 'Tin6_Bai8', pass: 8 };

const env = (x, y, s = 1, c = '#FFD60A') => G(x, y, s, `<rect x="-80" y="-52" width="160" height="104" rx="12" fill="${c}" ${ST}/><path d="M-80 -46 L0 12 L80 -46" fill="none" ${ST}/>`);
const ILL_T = {
  t1: () => svg(`${env(140, 150, 1, '#FFF3BF')}${txt(140, 260, 'Thư tay', 30)}${txt(140, 300, 'vài ngày', 24, '#E5383B')}
    ${env(450, 150, 1, '#8ECAE6')}${txt(450, 260, 'Thư điện tử', 30)}${txt(450, 300, 'vài giây', 24, '#2DA44E')}${arr(240, 150, 350, 150, '#FF7F11')}${star(560, 380, 14, '#FFD60A')}`),
  t2: () => svg(`${tlist([[1, '#2DA44E', 'Nhanh, gửi nhiều người'], [1, '#1982C4', 'Đính kèm tệp, ít tốn kém'], [0, '#E5383B', 'Cần có Internet'], [0, '#FF7F11', 'Có thể nhận thư rác']], 60, 96, 24)}`),
  t3: () => svg(`${pillS(30, 80, 540, 70, '#1982C4', 'an.nguyen@gmail.com', 34)}
    ${pillS(40, 200, 220, 50, '#2DA44E', 'Tên đăng nhập', 22)}${pillS(340, 200, 220, 50, '#FF7F11', 'Máy chủ thư', 22)}${arr(150, 196, 140, 158, '#2DA44E')}${arr(450, 196, 440, 158, '#FF7F11')}
    ${pillS(150, 310, 300, 54, '#8338EC', 'Không trùng nhau', 26)}${lock(530, 340, .5)}`),
  t4: () => svg(`${winbox(40, 30, 520, 360, 'Soạn thư', `${[['Người nhận', 100], ['Chủ đề', 160]].map(([t, y]) => `<text x="64" y="${y}" font-size="22" fill="${O}" ${F}>${t}:</text><rect x="200" y="${y - 28}" width="330" height="38" rx="10" fill="#F1F3F5" stroke="${O}" stroke-width="3"/>`).join('')}
    <rect x="64" y="200" width="466" height="110" rx="10" fill="#F1F3F5" stroke="${O}" stroke-width="3"/><text x="80" y="240" font-size="22" fill="${O}" ${F}>Nội dung thư…</text>
    <rect x="400" y="326" width="130" height="46" rx="23" fill="#2DA44E" stroke="${O}" stroke-width="4"/><text x="465" y="357" text-anchor="middle" font-size="22" fill="#fff" ${F}>Gửi</text>`, '#FF7F11')}`),
  t5: () => svg(`${shieldI(130, 200, 1)}${pillS(240, 70, 340, 50, '#E5383B', 'Không mở thư lạ', 24)}${pillS(240, 160, 340, 50, '#FF7F11', 'Không nháy liên kết lạ', 22)}
    ${pillS(240, 250, 340, 50, '#1982C4', 'Giữ kín mật khẩu', 24)}${pillS(240, 340, 340, 50, '#2DA44E', 'Đăng xuất khi xong', 24)}`),
};

const TOPICS = [
  { id: 't1', name: 'Thư tay và thư điện tử', tip: 'Thư điện tử bay đến nơi chỉ trong vài giây!',
    html: S4Q(['So sánh gửi <b>thư tay</b> và gửi <b>thư điện tử</b>.', ''],
      ['Thư nào đến nhanh hơn? Vì sao?', 'Thư điện tử: gửi qua Internet, đến ngay; thư tay mất vài ngày.'],
      ['Gửi thư điện tử cần những gì?', 'Máy tính (điện thoại), Internet, tài khoản thư.'],
      ['<b>Thư điện tử</b> (email) gửi qua Internet.', 'Đến nơi <b>gần như ngay lập tức</b>.', 'Cần có <span class="k">tài khoản thư</span>.']),
    quiz: [
      { q: 'Thư điện tử được gửi qua:', o: ['Bưu điện', 'Internet', 'Xe đưa thư', 'Bồ câu đưa thư'], a: 1, why: 'Thư điện tử được gửi và nhận qua Internet.' },
      { q: 'Thư điện tử còn gọi là:', o: ['Email', 'Website', 'Wi-Fi', 'USB'], a: 0, why: 'Thư điện tử trong tiếng Anh là email.' } ] },
  { id: 't2', name: 'Ưu và nhược điểm', tip: 'Gửi một lần mà nhiều bạn cùng nhận – tiện quá!',
    html: S4Q(['Liệt kê <b>ưu điểm</b> và <b>nhược điểm</b> của thư điện tử.', ''],
      ['Thư điện tử có ưu điểm gì?', 'Nhanh, gửi nhiều người, đính kèm tệp, ít tốn kém.'],
      ['Thư điện tử có nhược điểm gì?', 'Cần Internet; có thể gặp thư rác, thư lừa đảo.'],
      ['Ưu điểm: <b>nhanh, tiện, rẻ</b>.', 'Gửi được <b>tệp đính kèm</b>.', 'Cảnh giác <span class="k">thư rác, lừa đảo</span>.']),
    quiz: [
      { q: 'Đâu là ưu điểm của thư điện tử?', o: ['Không cần Internet', 'Mất nhiều ngày', 'Gửi kèm được tệp', 'Phải dán tem'], a: 2, why: 'Thư điện tử có thể đính kèm tệp: ảnh, tài liệu…' },
      { q: 'Nhược điểm của thư điện tử là:', o: ['Gửi rất nhanh', 'Gửi được nhiều người', 'Rẻ tiền', 'Có thể nhận thư rác, lừa đảo'], a: 3, why: 'Hộp thư có thể nhận thư rác, thư lừa đảo.' } ] },
  { id: 't3', name: 'Địa chỉ thư điện tử', tip: 'Mỗi hộp thư có một địa chỉ riêng, có dấu @ ở giữa!',
    html: S4Q(['Tìm hiểu <b>cấu tạo</b> một địa chỉ thư điện tử.', ''],
      ['Địa chỉ thư điện tử có dạng thế nào?', 'tên đăng nhập<b>@</b>tên máy chủ thư, vd an.nguyen@gmail.com'],
      ['Hai người dùng chung một địa chỉ thư được không?', 'Không. Mỗi địa chỉ là <b>duy nhất</b>.'],
      ['Địa chỉ: <b>tên đăng nhập@máy chủ</b>.', 'Mỗi địa chỉ là <b>duy nhất</b>.', 'Có <span class="k">mật khẩu</span> riêng.']),
    quiz: [
      { q: 'Địa chỉ thư điện tử nào viết đúng?', o: ['an.nguyen.gmail.com', 'an nguyen@gmail', 'an.nguyen@gmail.com', '@an.nguyen'], a: 2, why: 'Địa chỉ đúng có dạng tên@tên máy chủ thư.' },
      { q: 'Kí hiệu luôn có trong địa chỉ thư điện tử là:', o: ['@', '#', '$', '&'], a: 0, why: 'Địa chỉ thư luôn có kí hiệu @ ngăn cách hai phần.' } ] },
  { id: 't4', name: 'Soạn và gửi thư', tip: 'Ghi đủ người nhận, chủ đề, nội dung rồi bấm Gửi!',
    html: S4Q(['Thực hành <b>gửi thư</b> cho cô giáo.', ''],
      ['Các bước soạn và gửi thư là gì?', 'Đăng nhập → Soạn thư: người nhận, chủ đề, nội dung → Gửi.'],
      ['Nhận được thư rồi, em có thể làm gì?', 'Trả lời (Reply) hoặc chuyển tiếp (Forward).'],
      ['Soạn thư: <b>người nhận, chủ đề, nội dung</b>.', 'Có thể <b>trả lời, chuyển tiếp</b> thư.', 'Dùng xong nhớ <span class="k">đăng xuất</span>.']),
    quiz: [
      { q: 'Trước khi soạn thư, em cần:', o: ['Tắt Internet', 'Xoá hộp thư', 'Đổi máy tính', 'Đăng nhập hộp thư'], a: 3, why: 'Phải đăng nhập vào hộp thư mới soạn và gửi thư được.' },
      { q: 'Gửi lại một thư đã nhận cho người khác gọi là:', o: ['Chuyển tiếp', 'Trả lời', 'Xoá thư', 'Lưu nháp'], a: 0, why: 'Chuyển tiếp là gửi thư đã nhận cho người khác.' } ] },
  { id: 't5', name: 'Dùng thư an toàn', tip: 'Thư lạ, liên kết lạ – đừng mở nhé!',
    html: S4Q(['Nêu các quy tắc dùng thư điện tử <b>an toàn</b>.', ''],
      ['Gặp thư lạ, em nên làm gì?', 'Không mở thư, tệp đính kèm, liên kết từ người lạ.'],
      ['Làm gì để bảo vệ tài khoản thư?', 'Giữ kín mật khẩu; đăng xuất khi dùng máy chung.'],
      ['Không mở <b>thư lạ</b>, liên kết lạ.', 'Giữ kín <b>mật khẩu</b>.', '<span class="k">Đăng xuất</span> khi dùng máy chung.']),
    quiz: [
      { q: 'Nhận thư lạ có tệp đính kèm, em nên:', o: ['Mở ngay', 'Không mở, báo người lớn', 'Gửi cho cả lớp', 'Trả lời ngay'], a: 1, why: 'Tệp lạ có thể chứa virus hoặc là thư lừa đảo.' },
      { q: 'Dùng thư điện tử trên máy tính chung xong, em cần:', o: ['Để nguyên', 'Ghi mật khẩu ra giấy', 'Đăng xuất', 'Tắt màn hình'], a: 2, why: 'Đăng xuất để người khác không đọc được thư của em.' } ] },
];

const KEY = [
  'Email gửi<br>qua <b>Internet</b>.',
  '<b>Nhanh</b>, đính<br>kèm được tệp.',
  '<b>tên@máy chủ</b><br>là duy nhất.',
  'Người nhận –<br>chủ đề – <b>nội dung</b>.',
  'Không mở<br><b>thư lạ</b>.',
];

// tranh bìa
const COVER = () => svgC(`${[0, 1, 2].map(i => `<line x1="${40 + i*14}" y1="${100 + i*36}" x2="${100 + i*14}" y2="${100 + i*36}" stroke="#8ECAE6" stroke-width="9" stroke-linecap="round"/>`).join('')}
  <g transform="rotate(-8 200 135)">${env(200, 135, 1.15, '#FFF3BF')}</g>${arr(320, 135, 400, 135, '#FF7F11')}${laptop(410, 60, .62)}${ball(480, 105, 30, '#FF006E', '@', 34)}
  ${pillS(60, 270, 480, 56, '#1982C4', 'Gửi thư đi khắp nơi trong vài giây', 24)}${star(560, 40, 14, '#FFD60A')}${star(50, 40, 12, '#2DA44E')}`);
