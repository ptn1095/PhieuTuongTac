/* ===== BÀI 15: CÔNG VIỆC ĐƯỢC THỰC HIỆN THEO ĐIỀU KIỆN ===== */
const META = { key: 'bai15', num: 15, theme: 'vutru', ic: '🔀', cd: 6, en: 'Công việc thực hiện theo điều kiện',
  title: 'Bài 15. Công việc được thực hiện theo điều kiện', big: 'Làm việc<br>theo điều kiện',
  st2: 'Chủ đề 6 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Nếu em sẵn sàng thì tàu vũ trụ cất cánh! Cùng học “Nếu… thì…” nhé!',
  cert: 'Tin học 3 – Bài 15. Công việc thực hiện theo điều kiện', file: 'Tin3_Bai15', pass: 8 };

const fork = (x, y, q, a, b, cq = '#8338EC') => `${pillS(x - 150, y, 300, 56, cq, q, 24)}<path d="M${x} ${y + 60} V${y + 90} M${x - 150} ${y + 90} H${x + 150} M${x - 150} ${y + 90} V${y + 120} M${x + 150} ${y + 90} V${y + 120}" fill="none" stroke="${O}" stroke-width="5"/>
  ${txt(x - 190, y + 112, 'Đúng', 20, '#2DA44E')}${txt(x + 190, y + 112, 'Sai', 20, '#E5383B')}${pillS(x - 270, y + 124, 240, 52, '#2DA44E', a, 22)}${pillS(x + 30, y + 124, 240, 52, '#E5383B', b, 22)}`;
const COVER = () => svgC(`${fork(300, 40, 'Nếu trời mưa?', 'Mang ô', 'Đội mũ')}${star(560, 330, 14, '#FFD60A')}${star(40, 330, 12, '#FF006E')}`);
const ILL_T = {
  t1: () => svg(`${cloud(150, 110, 1, '#ADB5BD')}${rain(100, 160, 5)}${arr(250, 140, 320, 140, O, 8)}${umbrella(440, 150, 1)}
    ${pillS(30, 320, 540, 54, '#8338EC', 'Nếu trời mưa thì mang ô', 26)}`),
  t2: () => svg(`${fork(300, 40, 'Đèn xanh?', 'Đi tiếp', 'Dừng lại')}${traffic(70, 300, .4, 2)}${star(560, 360, 12, '#FFD60A')}
    ${pillS(110, 340, 380, 50, '#1982C4', 'Điều kiện: đúng hay sai', 22)}`),
  t3: () => svg(`${pillS(40, 50, 520, 60, '#8338EC', 'NẾU  điều kiện đúng', 28)}${arr(300, 120, 300, 170, O, 7)}${pillS(40, 180, 520, 60, '#2DA44E', 'THÌ  làm việc này', 28)}
    ${pillS(110, 300, 380, 54, '#FF7F11', 'Cấu trúc Nếu… thì…', 26)}`),
  t4: () => svg(`${monitor(60, 50, 240, 150, `${pillS(80, 100, 200, 46, '#FFC300', 'Mật khẩu?', 22, 0, O)}`)}${tick(420, 100, 1.2)}${cross(420, 220, 1.2)}
    ${txt(530, 110, 'Vào', 26, '#2DA44E')}${txt(530, 230, 'Báo sai', 26, '#E5383B')}${pillS(40, 330, 520, 54, '#1982C4', 'Máy tính cũng theo điều kiện', 22)}`),
  t5: () => svg(`${vflow([['#8338EC', 'Kiểm tra điều kiện'], ['#2DA44E', 'Đúng → làm việc A'], ['#E5383B', 'Sai → làm việc B']], 140, 40, 320, 110, 24)}${star(60, 60, 14, '#FFD60A')}`),
};

const TOPICS = [
  { id: 't1', name: 'Nếu… thì…', tip: 'Nếu trời mưa thì em mang ô – đó là điều kiện!',
    html: S4Q(['Hoàn thành câu: “<b>Nếu</b> trời mưa <b>thì</b> em …”', ''],
      ['Em sẽ làm gì nếu trời mưa?', 'Nếu trời mưa thì em <b>mang ô</b> (hoặc áo mưa).'],
      ['“Trời mưa” ở đây được gọi là gì?', 'Là <b>điều kiện</b> để quyết định việc làm.'],
      ['Câu <span class="k">Nếu… thì…</span>', 'Sau “Nếu” là <b>điều kiện</b>.', 'Sau “thì” là <b>việc cần làm</b>.']),
    quiz: [
      { q: 'Trong câu “Nếu trời mưa thì em mang ô”, điều kiện là:', o: ['Em mang ô', 'Trời mưa', 'Cái ô', 'Đi học'], a: 1, why: 'Điều kiện là phần sau chữ “Nếu”: trời mưa.' },
      { q: 'Hoàn thành: “Nếu em đói thì em …”', o: ['Ăn cơm', 'Đi ngủ', 'Tắt máy', 'Mang ô'], a: 0, why: 'Khi đói (điều kiện) thì em ăn cơm.' } ] },
  { id: 't2', name: 'Điều kiện đúng hay sai', tip: 'Đèn xanh thì đi, không phải đèn xanh thì dừng!',
    html: S4Q(['Em đi bộ qua đường. Em quyết định <b>đi</b> hay <b>dừng</b>?', ''],
      ['Nếu đèn xanh cho người đi bộ thì sao?', 'Điều kiện <b>đúng</b> → em <b>đi qua</b> đường.'],
      ['Nếu đèn chưa xanh thì sao?', 'Điều kiện <b>sai</b> → em <b>dừng lại</b> chờ.'],
      ['Điều kiện có thể <span class="k">đúng</span> hoặc sai.', 'Đúng → làm <b>việc này</b>.', 'Sai → làm <b>việc khác</b>.']),
    quiz: [
      { q: 'Nếu đèn tín hiệu cho người đi bộ chưa xanh, em:', o: ['Chạy thật nhanh qua', 'Đi bình thường', 'Nhắm mắt đi qua', 'Dừng lại chờ'], a: 3, why: 'Điều kiện chưa đúng thì em dừng lại chờ.' },
      { q: 'Một điều kiện có thể là:', o: ['Chỉ luôn đúng', 'Chỉ luôn sai', 'Đúng hoặc sai', 'Không đúng không sai'], a: 2, why: 'Điều kiện có thể đúng hoặc sai tuỳ lúc.' } ] },
  { id: 't3', name: 'Tìm điều kiện trong câu', tip: 'Tìm chữ “Nếu” – điều kiện nằm ngay sau đó!',
    html: S4Q(['Tìm điều kiện trong câu: “Nếu <b>hết giờ ra chơi</b> thì vào lớp.”', ''],
      ['Điều kiện trong câu là gì?', 'Là “<b>hết giờ ra chơi</b>”.'],
      ['Việc làm khi điều kiện đúng là gì?', 'Là “<b>vào lớp</b>”.'],
      ['Điều kiện đứng <b>sau “Nếu”</b>.', 'Việc làm đứng <span class="k">sau “thì”</span>.', 'Điều kiện đúng mới <b>làm việc đó</b>.']),
    quiz: [
      { q: '“Nếu bài tập khó thì em hỏi cô giáo.” Việc làm là:', o: ['Bài tập khó', 'Nếu', 'Cô giáo', 'Hỏi cô giáo'], a: 3, why: 'Việc làm đứng sau chữ “thì”: hỏi cô giáo.' },
      { q: '“Nếu trời tối thì bật đèn.” Điều kiện là:', o: ['Trời tối', 'Bật đèn', 'Cái đèn', 'Buổi sáng'], a: 0, why: 'Điều kiện đứng sau chữ “Nếu”: trời tối.' } ] },
  { id: 't4', name: 'Máy tính và điều kiện', tip: 'Gõ đúng mật khẩu thì máy mới cho vào!',
    html: S4Q(['Khi em gõ <b>mật khẩu</b>, máy tính kiểm tra điều gì?', ''],
      ['Nếu mật khẩu đúng thì sao?', 'Máy tính <b>cho em vào</b> sử dụng.'],
      ['Nếu mật khẩu sai thì sao?', 'Máy <b>báo sai</b>, yêu cầu gõ lại.'],
      ['Máy tính cũng làm <span class="k">theo điều kiện</span>.', 'Đúng → <b>cho vào</b>.', 'Sai → <b>báo lỗi</b>.']),
    quiz: [
      { q: 'Gõ sai mật khẩu, máy tính sẽ:', o: ['Cho vào ngay', 'Báo sai, yêu cầu gõ lại', 'Tự tắt mãi mãi', 'Đổi mật khẩu mới'], a: 1, why: 'Điều kiện sai thì máy báo lỗi.' },
      { q: 'Trò chơi: “Nếu bắt được ngôi sao thì được cộng điểm.” Khi bắt được sao:', o: ['Bị trừ điểm', 'Trò chơi kết thúc', 'Được cộng điểm', 'Không có gì'], a: 2, why: 'Điều kiện đúng nên được cộng điểm.' } ] },
  { id: 't5', name: 'Quyết định thông minh', tip: 'Ôn lại: kiểm tra điều kiện rồi mới làm!',
    html: S4Q(['Đặt một câu <b>Nếu… thì…</b> về việc học của em.', 'Gợi ý: nếu chưa làm xong bài thì…'],
      ['Ví dụ câu của em?', 'Nếu <b>chưa làm xong bài</b> thì em <b>chưa đi chơi</b>.'],
      ['Làm việc theo điều kiện có lợi gì?', 'Giúp em <b>quyết định đúng</b> trong từng tình huống.'],
      ['Kiểm tra <b>điều kiện</b> trước.', 'Đúng – sai → <span class="k">việc khác nhau</span>.', 'Giúp <b>quyết định đúng</b>.']),
    quiz: [
      { q: 'Câu nào là câu có điều kiện?', o: ['Em đi học', 'Hôm nay trời đẹp', 'Nếu khát thì em uống nước', 'Em thích màu xanh'], a: 2, why: 'Câu có dạng Nếu… thì… là câu có điều kiện.' },
      { q: 'Làm việc theo điều kiện giúp em:', o: ['Quyết định đúng tình huống', 'Làm việc ngẫu nhiên', 'Không cần suy nghĩ', 'Quên việc'], a: 0, why: 'Xét điều kiện giúp chọn việc phù hợp.' } ] },
];

const KEY = [
  '<b>Nếu</b> điều kiện<br><b>thì</b> việc làm.',
  'Điều kiện<br><b>đúng hoặc sai</b>.',
  'Điều kiện đứng<br>sau <b>“Nếu”</b>.',
  'Mật khẩu đúng<br>→ <b>vào máy</b>.',
  'Xét điều kiện<br>→ <b>quyết định</b>.',
];
