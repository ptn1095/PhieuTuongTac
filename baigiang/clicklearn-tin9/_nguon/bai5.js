/* ===== BÀI 5: TÌM HIỂU PHẦN MỀM MÔ PHỎNG ===== */
const META = { key: 'bai5', num: 5, title: 'Bài 5. Tìm hiểu phần mềm mô phỏng', big: 'PHẦN MỀM<br>MÔ PHỎNG',
  st2: 'Tin học 9 • 5 hoạt động • 10 câu đố • nhận giấy chứng nhận',
  hello: 'Chào mừng đến phòng thí nghiệm ảo! Cùng khám phá phần mềm mô phỏng nhé!',
  cert: 'TIN HỌC 9 – BÀI 5: TÌM HIỂU PHẦN MỀM MÔ PHỎNG', file: 'Tin9_Bai5', pass: 8 };

const ILL_T = {
  t1: () => svg(`${laptop(180, 70, 1, `<ellipse cx="120" cy="75" rx="92" ry="42" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="6 8"/><circle cx="120" cy="75" r="26" fill="#FFD60A" stroke="${O}" stroke-width="4"/><circle cx="210" cy="80" r="13" fill="#3A8DFF" stroke="${O}" stroke-width="4"/>`)}
    ${pillS(90, 340, 420, 54, '#8338EC', 'Phòng thí nghiệm ảo', 26)}${star(80, 80, 16, '#FFD60A')}${star(540, 60, 14, '#FF006E')}${star(60, 260, 12, '#2EC4B6')}`),
  t2: () => svg(`${atom(150, 160, 1)}${bulb(450, 140, .8)}
    <path d="M410 200 V250 H380 M490 200 V250 H520" stroke="${O}" stroke-width="6" fill="none" stroke-linecap="round"/><rect x="380" y="234" width="140" height="40" rx="8" fill="#FF7F11" ${ST}/>${txt(450, 263, '+  PIN  −', 22, '#fff')}
    ${pillS(14, 310, 180, 50, '#FF006E', 'Hoá học', 24)}${pillS(210, 310, 180, 50, '#FF7F11', 'Vật lí', 24)}${pillS(406, 310, 180, 50, '#2DA44E', 'Sinh học', 24)}
    ${star(300, 50, 14, '#FFD60A')}${star(570, 40, 12, '#8338EC')}`),
  t3: () => svg(`${cloud(110, 80, .5)}${cloud(500, 70, .45)}${plane(300, 160, 1.1)}
    ${pillS(14, 300, 180, 50, '#2DA44E', 'An toàn', 24)}${pillS(210, 300, 180, 50, '#FF7F11', 'Tiết kiệm', 24)}${pillS(406, 300, 180, 50, '#1982C4', 'Làm lại được', 22)}
    ${star(560, 390, 12, '#FFD60A')}${star(40, 390, 12, '#FF006E')}`),
  t4: () => svg(`${sun(330, 90, 36)}${cloud(200, 120, 1, '#E9ECEF')}
    ${[130, 180, 230].map(x => `<path d="M${x} 170 q-8 16 0 22 q8 -6 0 -22Z" fill="#3A8DFF" stroke="${O}" stroke-width="3"/>`).join('')}
    ${pillS(330, 170, 250, 64, '#FF7F11', '≈ Gần đúng', 30)}${pillS(50, 320, 500, 54, '#1982C4', 'Kết hợp mô phỏng + thực tế', 24)}
    ${star(560, 50, 14, '#FFD60A')}${star(40, 260, 12, '#FF006E')}`),
  t5: () => svg(`${kid(120, 200, 1, '#2DA44E')}${atom(410, 160, .85)}
    ${pillS(40, 350, 520, 50, '#8338EC', 'Đổi thông số → quan sát kết quả', 22)}${star(560, 330, 14, '#FFD60A')}${star(250, 50, 12, '#FF006E')}`),
};

const TOPICS = [
  { id: 't1', name: 'Phòng thí nghiệm ảo', tip: 'Muốn xem Trái Đất quay quanh Mặt Trời? Máy tính làm được ngay!',
    html: S4('Làm sao quan sát Trái Đất quay quanh Mặt Trời ngay trong lớp?',
      '<span class="k">Phần mềm mô phỏng</span> tái hiện hiện tượng, quá trình thực tế trên máy tính.',
      'Kể tên phần mềm mô phỏng em biết: mô phỏng thí nghiệm, tập lái xe, bay…',
      'Phần mềm mô phỏng như một <b>phòng thí nghiệm ảo</b>.'),
    quiz: [
      { q: 'Phần mềm mô phỏng dùng để:', o: ['Soạn thảo văn bản', 'Tái hiện hiện tượng thực tế', 'Diệt virus máy tính', 'Nghe nhạc'], a: 1, why: 'Mô phỏng tái hiện hiện tượng thực tế trên máy tính.' },
      { q: 'Ví dụ nào là phần mềm mô phỏng?', o: ['Phần mềm tập lái ô tô ảo', 'Phần mềm luyện gõ phím', 'Trình duyệt web', 'Phần mềm nghe nhạc'], a: 0, why: 'Tập lái ảo mô phỏng việc lái xe ngoài thực tế.' } ] },
  { id: 't2', name: 'Mô phỏng trong học tập', tip: 'Vật lí, Hoá học, Sinh học, Địa lí… môn nào cũng có mô phỏng!',
    html: S4('Tìm phần mềm mô phỏng cho các môn học.',
      '<b>Vật lí</b>: mạch điện, chuyển động • <b>Hoá học</b>: nguyên tử, phản ứng • <b>Sinh học</b>: cơ thể người.',
      'Thay đổi <b>thông số</b> (số pin, khối lượng…) rồi quan sát kết quả.',
      'Mô phỏng giúp hiểu bài <span class="k">trực quan</span>, sinh động.'),
    quiz: [
      { q: 'Trong mô phỏng mạch điện, khi tăng số pin, em quan sát được:', o: ['Máy tính tắt', 'Không có gì thay đổi', 'Bóng đèn sáng hơn', 'Màn hình đổi màu'], a: 2, why: 'Tăng nguồn điện thì dòng điện mạnh hơn, đèn sáng hơn.' },
      { q: 'Mô phỏng hoạt động của tim, phổi giúp học tốt môn:', o: ['Âm nhạc', 'Thể dục', 'Mĩ thuật', 'Sinh học'], a: 3, why: 'Cơ thể người là nội dung của môn Sinh học.' } ] },
  { id: 't3', name: 'Lợi ích của mô phỏng', tip: 'An toàn – tiết kiệm – làm lại bao nhiêu lần cũng được!',
    html: S4('Vì sao người ta dùng phần mềm mô phỏng?',
      '<b>An toàn</b> với thí nghiệm nguy hiểm; <b>tiết kiệm</b> chi phí, thiết bị.',
      'Quan sát hiện tượng quá nhanh, quá chậm, quá lớn, quá nhỏ; <b>làm lại</b> nhiều lần.',
      'Mô phỏng giúp <span class="k">học và luyện tập</span> hiệu quả.'),
    quiz: [
      { q: 'Vì sao phi công tập lái trên máy mô phỏng trước khi bay thật?', o: ['An toàn, tiết kiệm chi phí', 'Vì máy bay bị hỏng', 'Chỉ để cho vui', 'Vì không có sân bay'], a: 0, why: 'Tập trên mô phỏng không gây nguy hiểm và đỡ tốn kém.' },
      { q: 'Mô phỏng giúp quan sát hiện tượng nào khó thấy trực tiếp?', o: ['Bạn đi bộ', 'Electron chuyển động trong nguyên tử', 'Lá cây rơi', 'Trời mưa'], a: 1, why: 'Electron quá nhỏ, không thể nhìn thấy bằng mắt thường.' } ] },
  { id: 't4', name: 'Hạn chế của mô phỏng', tip: 'Mô phỏng rất hay, nhưng chỉ gần giống thật thôi nhé!',
    html: S4('Dự báo thời tiết bằng mô phỏng có luôn đúng không?',
      'Mô phỏng dựa trên mô hình <b>đơn giản hoá</b>, kết quả phụ thuộc dữ liệu nhập vào.',
      'Mô phỏng có thay thế hoàn toàn thí nghiệm thật được không?',
      'Kết quả mô phỏng <span class="k">chỉ gần đúng</span>; cần kết hợp với thực tế.'),
    quiz: [
      { q: 'Nhận định nào ĐÚNG về phần mềm mô phỏng?', o: ['Luôn đúng 100%', 'Thay thế hoàn toàn thí nghiệm thật', 'Kết quả chỉ gần đúng thực tế', 'Không có ích gì'], a: 2, why: 'Mô phỏng dựa trên mô hình đơn giản hoá nên chỉ gần đúng.' },
      { q: 'Dự báo thời tiết bằng mô phỏng đôi khi sai vì:', o: ['Máy tính lười biếng', 'Không có điện', 'Người xem không tin', 'Mô hình chỉ gần đúng thực tế'], a: 3, why: 'Thời tiết rất phức tạp, mô hình không thể tính hết mọi yếu tố.' } ] },
  { id: 't5', name: 'Nhà khoa học nhí', tip: 'Ôn nhanh: mô phỏng là gì, lợi ích và hạn chế!',
    html: S4('Chọn một mô phỏng, đổi thông số và ghi lại kết quả.',
      'Mô phỏng: tái hiện hiện tượng thực tế trên <b>máy tính</b>.',
      'Lợi ích: <b>an toàn, tiết kiệm, trực quan</b>; hạn chế: chỉ <b>gần đúng</b>.',
      'Dùng mô phỏng để <span class="k">khám phá</span> và kiểm chứng kiến thức.'),
    quiz: [
      { q: 'Tính năng quan trọng của phần mềm mô phỏng là cho phép:', o: ['Đổi thông số, quan sát kết quả', 'Xoá dữ liệu', 'In ấn văn bản', 'Gửi thư điện tử'], a: 0, why: 'Thay đổi thông số giúp thấy rõ nguyên nhân – kết quả.' },
      { q: 'Thí nghiệm dễ cháy nổ nên được làm thử trước ở đâu?', o: ['Phòng ngủ', 'Phần mềm mô phỏng', 'Sân trường', 'Nhà bếp'], a: 1, why: 'Làm trên mô phỏng thì an toàn tuyệt đối.' } ] },
];

const KEY = [
  'Mô phỏng: tái hiện<br><b>hiện tượng thực tế</b>.',
  'Dùng cho Vật lí, Hoá,<br><b>Sinh học</b>…',
  '<b>An toàn</b>, tiết kiệm,<br>làm lại nhiều lần.',
  'Chỉ <b>gần đúng</b>,<br>kết hợp thực tế.',
  'Đổi thông số →<br><b>quan sát kết quả</b>.',
];
