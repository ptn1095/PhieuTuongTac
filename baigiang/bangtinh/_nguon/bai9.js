const META = { key: 'b9-bieu-do', num: 9, lop: 'Tin học 8', ic: '📈', ten: 'Trình bày dữ liệu bằng biểu đồ',
  st1: 'TRÌNH BÀY DỮ LIỆU<br>BẰNG BIỂU ĐỒ', big: 'BIỂU ĐỒ', cert: 'TRÌNH BÀY DỮ LIỆU BẰNG BIỂU ĐỒ',
  hello: 'Xin chào! Mình là Bít 🤖 Cùng biến những con số khô khan thành biểu đồ đẹp mắt nhé!' };
const bars = (x, y, hs, cs, w = 46, g = 20) => hs.map((h, i) => `<rect x="${x + i*(w + g)}" y="${y - h}" width="${w}" height="${h}" rx="6" fill="${cs[i % cs.length]}" stroke="${O}" stroke-width="4"/>`).join('') + `<line x1="${x - 14}" y1="${y}" x2="${x + hs.length*(w + g)}" y2="${y}" stroke="${O}" stroke-width="5" stroke-linecap="round"/>`;
const pie = (cx, cy, r) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#FFC300" stroke="${O}" stroke-width="5"/><path d="M${cx} ${cy} L${cx} ${cy - r} A${r} ${r} 0 0 1 ${cx + r*.95} ${cy + r*.31}Z" fill="#FF006E" stroke="${O}" stroke-width="5"/><path d="M${cx} ${cy} L${cx + r*.95} ${cy + r*.31} A${r} ${r} 0 0 1 ${cx - r*.59} ${cy + r*.81}Z" fill="#1982C4" stroke="${O}" stroke-width="5"/>`;
const TOPICS = [
  { title: 'Biểu đồ để làm gì?', tip: 'Nhìn biểu đồ là biết ngay ai cao nhất, tháng nào nhiều nhất!',
    key: 'Trình bày dữ liệu<br><b>trực quan</b>, dễ so sánh',
    ill: () => svg(`${grid(30, 50, [['Tháng', 'Sách'], ['1', '12'], ['2', '20'], ['3', '8']], { cw: 100, rh: 50, fs: 22, head: false, bold: [0] })}
      ${arrow(250, 150, 310, 150, '#FF006E', 8)}
      <rect x="320" y="40" width="250" height="230" rx="18" fill="#fff" stroke="${O}" stroke-width="5"/>
      ${bars(360, 240, [90, 150, 60], ['#1982C4', '#FF006E', '#FFC300'], 46, 22)}
      ${pillS(80, 320, 440, 64, '#8338EC', 'Dễ nhìn • Dễ so sánh', 30)}
      ${stars3([30, 30], [570, 300], [260, 260])}`),
    html: `<ul>
      <li><span class="k">Biểu đồ</span> trình bày dữ liệu bằng <b>hình ảnh</b>.</li>
      <li>Giúp <b>dễ so sánh</b>, thấy nhanh lớn nhất, nhỏ nhất.</li>
      <li>Thấy được <b>xu hướng</b> tăng, giảm theo thời gian.</li>
      <li>Biểu đồ <b>tự cập nhật</b> khi dữ liệu thay đổi.</li></ul>`,
    quiz: [
      { q: 'Ưu điểm chính của biểu đồ so với bảng số liệu là gì?', o: ['Tính toán nhanh hơn', 'Trực quan, dễ so sánh', 'Tốn ít giấy hơn', 'Không cần dữ liệu'], a: 1, why: 'Biểu đồ trình bày trực quan, dễ so sánh và thấy xu hướng.' },
      { q: 'Sửa số liệu trong bảng thì biểu đồ đã vẽ sẽ thế nào?', o: ['Không đổi', 'Bị xoá', 'Tự động cập nhật', 'Báo lỗi'], a: 2, why: 'Biểu đồ liên kết với dữ liệu nên tự cập nhật.' } ] },
  { title: 'Các dạng biểu đồ', tip: 'Cột để so sánh, đường xem xu hướng, tròn xem tỉ lệ phần trăm!',
    key: '<b>Cột</b>: so sánh<br><b>Đường</b>: xu hướng<br><b>Tròn</b>: tỉ lệ %',
    ill: () => svg(`<rect x="20" y="40" width="180" height="200" rx="18" fill="#fff" stroke="${O}" stroke-width="5"/>${bars(50, 210, [80, 130, 60], ['#1982C4', '#FF006E', '#FFC300'], 32, 14)}
      <rect x="210" y="40" width="180" height="200" rx="18" fill="#fff" stroke="${O}" stroke-width="5"/><polyline points="236,190 276,150 316,170 362,90" fill="none" stroke="#2DA44E" stroke-width="8" stroke-linejoin="round" stroke-linecap="round"/>${[[236, 190], [276, 150], [316, 170], [362, 90]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="9" fill="#fff" stroke="${O}" stroke-width="4"/>`).join('')}
      <rect x="400" y="40" width="180" height="200" rx="18" fill="#fff" stroke="${O}" stroke-width="5"/>${pie(490, 140, 70)}
      ${pillS(20, 270, 180, 56, '#1982C4', 'Cột', 30)}${pillS(210, 270, 180, 56, '#2DA44E', 'Đường', 30)}${pillS(400, 270, 180, 56, '#FF006E', 'Tròn', 30)}
      ${stars3([60, 380], [300, 380], [540, 380])}`),
    html: `<table class="tb"><tr><th>Dạng</th><th>Dùng khi</th></tr>
      <tr><td><b>Cột</b> (Column)</td><td>So sánh các giá trị</td></tr>
      <tr><td><b>Thanh</b> (Bar)</td><td>So sánh, tên dài</td></tr>
      <tr><td><b>Đường</b> (Line)</td><td>Xu hướng theo thời gian</td></tr>
      <tr><td><b>Tròn</b> (Pie)</td><td>Tỉ lệ các phần của tổng thể</td></tr></table>`,
    quiz: [
      { q: 'Muốn thể hiện tỉ lệ % các loại sách trong thư viện, nên dùng biểu đồ:', o: ['Đường', 'Cột', 'Thanh', 'Tròn'], a: 3, why: 'Biểu đồ tròn thể hiện tỉ lệ các phần của tổng thể.' },
      { q: 'Theo dõi nhiệt độ trong 7 ngày tăng hay giảm, nên dùng biểu đồ:', o: ['Đường', 'Tròn', 'Không cần biểu đồ', 'Bảng'], a: 0, why: 'Biểu đồ đường cho thấy xu hướng theo thời gian.' } ] },
  { title: 'Tạo biểu đồ', tip: 'Nhớ chọn cả hàng tiêu đề khi chọn dữ liệu, biểu đồ sẽ có tên đầy đủ!',
    key: '① Chọn dữ liệu<br>② <b>Insert</b> → chọn dạng',
    ill: () => svg(`${grid(30, 40, [['Lớp', 'Số HS'], ['8A', '38'], ['8B', '35'], ['8C', '40']], { cw: 100, rh: 50, fs: 22, box: [0, 0, 3, 1], bold: [0] })}
      ${ball(56, 330, 26, '#FF006E', '1', 26)}
      <rect x="340" y="40" width="230" height="70" rx="16" fill="#2DA44E" stroke="${O}" stroke-width="5"/>${T(455, 86, 'Insert', 32, '#fff')}
      ${ball(308, 75, 24, '#FF7F11', '2', 24)}
      <rect x="320" y="130" width="250" height="200" rx="18" fill="#fff" stroke="${O}" stroke-width="5"/>${bars(360, 300, [110, 90, 140], ['#1982C4', '#FF006E', '#FFC300'], 46, 22)}
      ${cursor(500, 70, 0.8)}
      ${pillS(110, 340, 180, 52, '#1982C4', 'Chọn A1:B4', 22)}
      ${stars3([30, 380], [570, 380], [270, 260])}`),
    html: `<ul>
      <li>① <span class="k">Chọn khối dữ liệu</span> cần vẽ (gồm cả hàng / cột tiêu đề).</li>
      <li>② Thẻ <span class="k">Insert</span> → nhóm <b>Charts</b> → chọn dạng biểu đồ.</li>
      <li>Hoặc <b>Recommended Charts</b> để xem gợi ý.</li>
      <li>Biểu đồ xuất hiện ngay trên trang tính.</li></ul>`,
    quiz: [
      { q: 'Bước đầu tiên khi tạo biểu đồ là gì?', o: ['Chọn Insert', 'Đặt tiêu đề', 'Chọn khối dữ liệu', 'In ra giấy'], a: 2, why: 'Phải chọn dữ liệu trước rồi mới chèn biểu đồ.' },
      { q: 'Nhóm lệnh Charts để chèn biểu đồ nằm ở thẻ nào?', o: ['Home', 'Insert', 'Data', 'View'], a: 1, why: 'Insert → Charts.' } ] },
  { title: 'Thành phần biểu đồ', tip: 'Biểu đồ đầy đủ phải có tiêu đề để người xem biết nó nói về gì!',
    key: 'Tiêu đề • Trục<br>Chú giải • Nhãn dữ liệu',
    ill: () => svg(`<rect x="30" y="20" width="540" height="380" rx="20" fill="#fff" stroke="${O}" stroke-width="6"/>
      ${T(300, 64, 'SỐ HỌC SINH', 30, '#8338EC')}
      <line x1="110" y1="90" x2="110" y2="320" stroke="${O}" stroke-width="5"/>${['40', '20', '0'].map((t, i) => T(96, 108 + i*105, t, 20, '#495057', 'end', 700)).join('')}
      ${bars(140, 320, [190, 170, 210], ['#1982C4', '#1982C4', '#1982C4'], 56, 30)}
      ${['38', '35', '40'].map((t, i) => T(168 + i*86, 318 - [190, 170, 210][i] - 8, t, 22, '#E5383B')).join('')}
      ${['8A', '8B', '8C'].map((t, i) => T(168 + i*86, 350, t, 22, O, 'middle', 800)).join('')}
      <rect x="430" y="170" width="24" height="24" fill="#1982C4" stroke="${O}" stroke-width="3"/>${T(462, 190, 'Số HS', 20, O, 'start', 800)}
      ${pillS(380, 90, 170, 44, '#FF006E', 'Tiêu đề', 22)}${pillS(420, 230, 130, 44, '#FF7F11', 'Chú giải', 20)}${pillS(400, 330, 150, 44, '#2DA44E', 'Trục', 22)}`),
    html: `<ul>
      <li><span class="k">Tiêu đề</span> (Chart Title): tên biểu đồ.</li>
      <li><b>Trục ngang, trục đứng</b> (Axis) và tên trục.</li>
      <li><span class="k">Chú giải</span> (Legend): màu nào ứng với dãy dữ liệu nào.</li>
      <li><b>Nhãn dữ liệu</b> (Data Labels): số ghi trên cột.</li>
      <li>Vùng vẽ: phần chứa các cột, đường, hình tròn.</li></ul>`,
    quiz: [
      { q: 'Thành phần nào cho biết mỗi màu trên biểu đồ ứng với dữ liệu nào?', o: ['Tiêu đề', 'Trục đứng', 'Nhãn dữ liệu', 'Chú giải (Legend)'], a: 3, why: 'Chú giải giải thích ý nghĩa màu sắc.' },
      { q: 'Data Labels là gì?', o: ['Giá trị số ghi trên cột / điểm', 'Tên biểu đồ', 'Đường lưới', 'Màu nền'], a: 0, why: 'Nhãn dữ liệu hiện giá trị ngay trên biểu đồ.' } ] },
  { title: 'Chỉnh sửa biểu đồ', tip: 'Nút dấu cộng ➕ cạnh biểu đồ giúp bật tắt tiêu đề, chú giải siêu nhanh!',
    key: 'Nút <b>➕</b> Chart Elements<br><b>Change Chart Type</b><br>Kéo để di chuyển',
    ill: () => svg(`<rect x="40" y="40" width="360" height="270" rx="10" fill="#fff" stroke="${O}" stroke-width="5" stroke-dasharray="14 8"/>
      ${bars(90, 280, [120, 180, 90], ['#FF006E', '#FFC300', '#2EC4B6'], 60, 30)}
      ${[[40, 40], [400, 40], [40, 310], [400, 310], [220, 40], [220, 310]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="10" fill="#fff" stroke="${O}" stroke-width="4"/>`).join('')}
      ${key3d(430, 50, 80, 76, '#2DA44E', '#1B7A35', '+', 54)}${key3d(430, 150, 80, 76, '#8338EC', '#5A189A', '🖌', 36)}${key3d(430, 250, 80, 76, '#1982C4', '#0F5A8A', '▼', 34)}
      ${pillS(60, 340, 340, 56, '#FF7F11', 'Change Chart Type', 24)}
      ${stars3([560, 40], [560, 380], [30, 210])}`),
    html: `<ul>
      <li>Nháy chọn biểu đồ → xuất hiện thẻ <b>Chart Design</b>, <b>Format</b>.</li>
      <li>Nút <span class="k">➕</span>: thêm / bớt tiêu đề, chú giải, nhãn dữ liệu.</li>
      <li><span class="k">Change Chart Type</span>: đổi dạng biểu đồ.</li>
      <li><b>Kéo thả</b> để di chuyển; kéo nút tròn ở góc để đổi kích thước.</li>
      <li>Chọn biểu đồ rồi nhấn <code>Delete</code> để xoá.</li></ul>`,
    quiz: [
      { q: 'Đã vẽ biểu đồ cột, muốn đổi sang biểu đồ tròn, em dùng lệnh:', o: ['Insert Table', 'Sort', 'Change Chart Type', 'Merge & Center'], a: 2, why: 'Change Chart Type đổi dạng biểu đồ.' },
      { q: 'Nút ➕ cạnh biểu đồ (Chart Elements) dùng để làm gì?', o: ['Thêm/bớt tiêu đề, chú giải…', 'Tăng số liệu', 'Thêm trang tính', 'Phóng to cửa sổ'], a: 0, why: 'Chart Elements bật tắt các thành phần của biểu đồ.' } ] },
  { title: 'Chọn biểu đồ phù hợp', tip: 'Chọn đúng biểu đồ là kể đúng câu chuyện của dữ liệu!',
    key: 'So sánh → <b>Cột</b><br>Theo thời gian → <b>Đường</b><br>Phần trăm → <b>Tròn</b>',
    ill: () => svg(`${pillS(30, 40, 300, 60, '#FFC300', 'Điểm 3 tổ?', 28, 0, O)}${arrow(340, 70, 400, 70, O, 6)}${pillS(410, 40, 160, 60, '#1982C4', 'Cột', 30)}
      ${pillS(30, 160, 300, 60, '#FFC300', 'Cân nặng 12 tháng?', 24, 0, O)}${arrow(340, 190, 400, 190, O, 6)}${pillS(410, 160, 160, 60, '#2DA44E', 'Đường', 30)}
      ${pillS(30, 280, 300, 60, '#FFC300', 'Tỉ lệ % chi tiêu?', 26, 0, O)}${arrow(340, 310, 400, 310, O, 6)}${pillS(410, 280, 160, 60, '#FF006E', 'Tròn', 30)}
      ${stars3([580, 130], [30, 250], [570, 390])}`),
    html: `<ul>
      <li>Tự hỏi: <b>muốn người xem thấy điều gì?</b></li>
      <li><span class="k">So sánh</span> số lượng giữa các nhóm → <b>Cột / Thanh</b>.</li>
      <li><span class="k">Thay đổi theo thời gian</span> → <b>Đường</b>.</li>
      <li><span class="k">Tỉ lệ</span> các phần trong tổng (cộng lại 100%) → <b>Tròn</b>.</li>
      <li>Đặt tiêu đề rõ ràng, có đơn vị.</li></ul>`,
    quiz: [
      { q: 'So sánh số cây trồng được của 4 lớp, nên dùng biểu đồ nào?', o: ['Tròn', 'Đường', 'Cột', 'Không cần'], a: 2, why: 'So sánh giữa các nhóm → biểu đồ cột.' },
      { q: 'Biểu đồ tròn phù hợp nhất với dữ liệu nào?', o: ['Chiều cao qua các năm', 'Số HS từng lớp', 'Nhiệt độ hằng ngày', 'Tỉ lệ % các khoản chi tiêu'], a: 3, why: 'Biểu đồ tròn thể hiện tỉ lệ các phần của một tổng.' } ] },
];
