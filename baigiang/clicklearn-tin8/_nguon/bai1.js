/* ===== BÀI 1: LƯỢC SỬ CÔNG CỤ TÍNH TOÁN ===== */
const META = { key: 'bai1', num: 1, theme: 'go', title: 'Bài 1. Lược sử công cụ tính toán', big: 'Lược sử công cụ<br>tính toán',
  st2: 'Chủ đề 1 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Cùng ngược dòng lịch sử, từ que tính, bàn tính bằng gỗ đến máy tính hiện đại nhé!',
  cert: 'Tin học 8 – Bài 1. Lược sử công cụ tính toán', file: 'Tin8_Bai1', pass: 8 };

const pebbles = (x, y) => [[0, 0, '#ADB5BD'], [34, 6, '#868E96'], [66, -4, '#CED4DA'], [18, 30, '#868E96'], [52, 32, '#ADB5BD'], [86, 26, '#CED4DA']].map(([dx, dy, c]) => `<ellipse cx="${x + dx}" cy="${y + dy}" rx="16" ry="12" fill="${c}" stroke="${O}" stroke-width="4"/>`).join('');
const ILL_T = {
  t1: () => svg(`${kid(110, 200, 1)}${hand(300, 120, .8, -10)}${pebbles(380, 90)}${[0, 1, 2, 3, 4].map(i => `<rect x="${300 + i*26}" y="190" width="12" height="90" rx="6" fill="#C68B59" stroke="${O}" stroke-width="4" transform="rotate(${i*4 - 8} ${306 + i*26} 235)"/>`).join('')}
    ${pillS(60, 330, 480, 54, '#8338EC', 'Đếm bằng ngón tay, que, sỏi', 26)}${star(560, 50, 14, '#FFD60A')}`),
  t2: () => svg(`${abacus(150, 150, .85)}${mech(445, 160, .8)}${pillS(40, 270, 220, 50, '#FF7F11', 'Bàn tính', 24)}${pillS(330, 270, 240, 50, '#1982C4', 'Pascaline 1642', 24)}
    ${pillS(110, 345, 380, 50, '#8338EC', 'Leibniz: nhân, chia', 24)}${star(570, 40, 12, '#FFD60A')}${star(30, 30, 12, '#FF006E')}`),
  t3: () => svg(`${tube(90, 150, .95)}${arr(140, 150, 175, 150, O, 6)}${trans(230, 150, 1.1)}${arr(285, 150, 320, 150, O, 6)}${chip(390, 150, .65, '#2EC4B6', 'IC')}${arr(455, 150, 490, 150, O, 6)}${chip(530, 150, .5, '#8338EC', 'VLSI')}
    ${['1', '2', '3', '4'].map((t, i) => ball([90, 230, 390, 530][i], 290, 28, ['#FF7F11', '#1982C4', '#2DA44E', '#8338EC'][i], t, 28)).join('')}${pillS(110, 345, 380, 50, '#FF006E', 'Thế hệ 5: trí tuệ nhân tạo', 22)}`),
  t4: () => svg(`<rect x="30" y="60" width="300" height="170" rx="12" fill="#ADB5BD" stroke="${O}" stroke-width="6"/>${[0, 1, 2, 3, 4].map(i => `<rect x="${48 + i*56}" y="80" width="40" height="130" rx="6" fill="#E9ECEF" stroke="${O}" stroke-width="4"/>${[0, 1, 2].map(k => `<circle cx="${68 + i*56}" cy="${104 + k*36}" r="7" fill="${k === 1 ? '#FF006E' : '#FFD60A'}"/>`).join('')}`).join('')}
    ${smart(470, 150, .8)}${txt(180, 275, 'ENIAC ~ 30 tấn', 28)}${txt(470, 275, '~ 200 g', 28)}${pillS(70, 330, 460, 54, '#2DA44E', 'Nhỏ hơn, nhanh hơn, rẻ hơn', 26)}`),
  t5: () => svg(`${hflow([['#8D5524', 'Thô sơ'], ['#FF7F11', 'Cơ học'], ['#1982C4', 'Điện tử']], 70, 26)}${abacus(110, 230, .45)}${mech(300, 230, .45)}${laptop(430, 190, .45)}
    ${pillS(70, 330, 460, 54, '#8338EC', 'Ngày càng mạnh, tiện lợi', 26)}${star(570, 380, 12, '#FFD60A')}`),
};

const TOPICS = [
  { id: 't1', name: 'Người xưa tính toán thế nào?', tip: 'Ngày xưa chưa có máy tính, người ta đếm bằng cả… hòn sỏi đấy!',
    html: S4Q(['Không có máy tính, em đếm <b>25 viên bi</b> bằng cách nào?', 'Gợi ý: dùng ngón tay, que tính…'],
      ['Người xưa dùng gì để đếm, tính toán?', 'Ngón tay, que tính, hòn sỏi, thắt nút dây.'],
      ['Đếm bằng sỏi có gì bất tiện khi số rất lớn?', 'Chậm, dễ nhầm, khó ghi lại kết quả.'],
      ['Công cụ đầu tiên: <b>ngón tay, que, sỏi, nút dây</b>.', 'Công cụ thô sơ <b>chậm, dễ sai</b>.', 'Con người luôn tìm <span class="k">công cụ tốt hơn</span>.']),
    quiz: [
      { q: 'Khi chưa có máy tính, người xưa đếm bằng:', o: ['Điện thoại', 'Que tính, hòn sỏi', 'Máy tính bỏ túi', 'Phần mềm bảng tính'], a: 1, why: 'Ngón tay, que tính, hòn sỏi, nút dây là công cụ thô sơ.' },
      { q: 'Vì sao con người cần công cụ tính toán?', o: ['Để tính nhanh, chính xác hơn', 'Để trang trí nhà cửa', 'Để chơi cho vui', 'Để đỡ phải học'], a: 0, why: 'Công cụ giúp tính toán nhanh và chính xác hơn.' } ] },
  { id: 't2', name: 'Bàn tính và máy cơ học', tip: 'Pascal, Leibniz, Babbage – ba nhà phát minh châu Âu lừng danh!',
    html: S4Q(['Quan sát <b>bàn tính</b> và các <b>máy tính cơ học</b>.', ''],
      ['Bàn tính và máy Pascaline xuất hiện thế nào?', 'Bàn tính có từ rất sớm; năm 1642 Pascal làm máy cộng trừ Pascaline.'],
      ['Máy của Leibniz, Babbage tiến bộ ở đâu?', 'Leibniz: nhân, chia được; Babbage: thiết kế máy phân tích.'],
      ['<b>Bàn tính</b>: công cụ tính rất sớm.', '<b>Pascal</b> (1642) cộng trừ; <b>Leibniz</b> nhân chia.', '<b>Babbage</b>: ý tưởng <span class="k">máy tính hiện đại</span>.']),
    quiz: [
      { q: 'Máy tính cơ học Pascaline do ai chế tạo?', o: ['Leibniz', 'Babbage', 'Blaise Pascal', 'Ada Lovelace'], a: 2, why: 'Blaise Pascal chế tạo máy Pascaline năm 1642.' },
      { q: 'Máy của Leibniz làm được thêm phép tính nào?', o: ['Chỉ phép cộng', 'Vẽ hình', 'Gửi thư', 'Nhân và chia'], a: 3, why: 'Máy của Leibniz thực hiện được cả phép nhân và chia.' } ] },
  { id: 't3', name: 'Các thế hệ máy tính điện tử', tip: 'Linh kiện càng nhỏ, máy tính càng nhanh và gọn!',
    html: S4Q(['Xếp các <b>linh kiện</b> theo thứ tự xuất hiện.', ''],
      ['Thế hệ 1, 2 dùng linh kiện gì?', 'Thế hệ 1: đèn điện tử chân không; thế hệ 2: bóng bán dẫn.'],
      ['Thế hệ 3, 4, 5 thì sao?', 'Mạch tích hợp → mạch tích hợp cỡ rất lớn → AI, xử lí song song.'],
      ['Thế hệ 1–2: <b>đèn chân không</b>, <b>bóng bán dẫn</b>.', 'Thế hệ 3–4: <b>mạch tích hợp</b> (IC, VLSI).', 'Thế hệ 5: <span class="k">trí tuệ nhân tạo</span>.']),
    quiz: [
      { q: 'Máy tính điện tử thế hệ thứ nhất dùng linh kiện nào?', o: ['Bóng bán dẫn', 'Đèn điện tử chân không', 'Mạch tích hợp', 'Bộ vi xử lí'], a: 1, why: 'Thế hệ 1 (1945–1955) dùng đèn điện tử chân không.' },
      { q: 'Máy tính thế hệ thứ hai dùng linh kiện chính là:', o: ['Bóng bán dẫn', 'Đèn dầu', 'Bánh răng', 'Trí tuệ nhân tạo'], a: 0, why: 'Thế hệ 2 (1955–1965) dùng bóng bán dẫn (tranzito).' } ] },
  { id: 't4', name: 'Máy tính đổi thay cuộc sống', tip: 'Chiếc điện thoại của em còn mạnh hơn cỗ máy nặng cả chục tấn ngày xưa!',
    html: S4Q(['So sánh máy <b>ENIAC</b> (gần 30 tấn) với điện thoại của em.', ''],
      ['Máy tính thay đổi thế nào qua thời gian?', 'Ngày càng nhỏ gọn, nhanh, rẻ và tiết kiệm điện hơn.'],
      ['Máy tính giúp gì cho học tập, y tế, giao thông?', 'Học trực tuyến, khám bệnh, chỉ đường, mua sắm…'],
      ['Máy tính ngày càng <b>nhỏ, nhanh, rẻ</b>.', 'Có mặt trong <b>mọi lĩnh vực</b>.', 'Góp phần <span class="k">thay đổi xã hội</span>.']),
    quiz: [
      { q: 'Xu hướng phát triển của máy tính là:', o: ['To hơn, chậm hơn', 'Đắt hơn, tốn điện hơn', 'Nhỏ gọn, nhanh và rẻ hơn', 'Không thay đổi'], a: 2, why: 'Máy tính ngày càng nhỏ gọn, nhanh, rẻ và tiết kiệm điện.' },
      { q: 'Ví dụ nào cho thấy máy tính thay đổi cuộc sống?', o: ['Đếm bằng que tính', 'Đun nước bằng bếp củi', 'Viết thư bằng bút lông', 'Học trực tuyến qua mạng'], a: 3, why: 'Nhờ máy tính và Internet, em có thể học trực tuyến.' } ] },
  { id: 't5', name: 'Tổng kết bài học', tip: 'Nhớ trục thời gian: thô sơ → cơ học → điện tử!',
    html: S4Q(['Vẽ <b>trục thời gian</b> các công cụ tính toán.', ''],
      ['Công cụ tính toán phát triển qua những giai đoạn nào?', 'Thô sơ → cơ học → điện tử.'],
      ['Kể các mốc chính của giai đoạn điện tử.', 'Đèn chân không → bóng bán dẫn → mạch tích hợp → AI.'],
      ['<b>Thô sơ</b>: que, sỏi, bàn tính.', '<b>Cơ học</b>: Pascal, Leibniz, Babbage.', '<b>Điện tử</b>: ngày càng <span class="k">mạnh, tiện lợi</span>.']),
    quiz: [
      { q: 'Thứ tự đúng về sự phát triển công cụ tính toán:', o: ['Điện tử → cơ học → thô sơ', 'Thô sơ → cơ học → điện tử', 'Cơ học → thô sơ → điện tử', 'Điện tử → thô sơ → cơ học'], a: 1, why: 'Từ thô sơ, đến máy cơ học, rồi máy tính điện tử.' },
      { q: 'Ai thiết kế máy phân tích – ý tưởng máy tính hiện đại?', o: ['Pascal', 'Leibniz', 'Newton', 'Charles Babbage'], a: 3, why: 'Charles Babbage thiết kế máy phân tích (Analytical Engine).' } ] },
];

const KEY = [
  'Que, sỏi, nút dây:<br>công cụ <b>thô sơ</b>.',
  'Pascal, Leibniz,<br>Babbage: máy<br><b>cơ học</b>.',
  'Đèn chân không →<br>bán dẫn → <b>IC</b>.',
  'Máy tính <b>nhỏ,<br>nhanh, rẻ</b> hơn.',
  'Thô sơ → cơ học<br>→ <b>điện tử</b>.',
];
