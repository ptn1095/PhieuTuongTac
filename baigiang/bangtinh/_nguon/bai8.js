const META = { key: 'b8-sap-xep-loc', num: 8, lop: 'Tin học 8', ic: '🔽', ten: 'Sắp xếp và lọc dữ liệu',
  st1: 'SẮP XẾP VÀ<br>LỌC DỮ LIỆU', big: 'SẮP XẾP<br>VÀ LỌC', cert: 'SẮP XẾP VÀ LỌC DỮ LIỆU',
  hello: 'Xin chào! Mình là Bít 🤖 Cùng sắp xếp và lọc dữ liệu thật nhanh nhé!' };
const funnel = (x, y, s, c = '#1982C4') => `<path transform="translate(${x} ${y}) scale(${s})" d="M0 0 H100 L62 46 V88 L38 100 V46Z" fill="${c}" stroke="${O}" stroke-width="${6/s}" stroke-linejoin="round"/>`;
const TOPICS = [
  { title: 'Vì sao cần sắp xếp, lọc?', tip: 'Danh sách 40 bạn mà muốn tìm 5 bạn điểm cao nhất? Sắp xếp là ra ngay!',
    key: '<b>Sắp xếp</b>: theo thứ tự<br><b>Lọc</b>: chỉ hiện dòng<br>thoả điều kiện',
    ill: () => svg(`${grid(30, 40, [['Chi', '7'], ['An', '9'], ['Bình', '6']], { cw: 100, rh: 52, fs: 24, head: false })}
      ${arrow(250, 118, 330, 118, '#FF006E', 8)}
      ${grid(350, 40, [['An', '9'], ['Chi', '7'], ['Bình', '6']], { cw: 100, rh: 52, fs: 24, head: false, fill: { '0-0': '#FFE066', '0-1': '#FFE066' } })}
      ${funnel(250, 240, 1.1, '#8338EC')}
      ${pillS(30, 260, 200, 56, '#FF006E', 'Sắp xếp', 28)}${pillS(400, 260, 170, 56, '#8338EC', 'Lọc', 28)}
      ${stars3([570, 220], [30, 380], [570, 390])}`),
    html: `<ul>
      <li>Dữ liệu nhiều → khó tìm, khó so sánh.</li>
      <li><span class="k">Sắp xếp</span>: đổi thứ tự các hàng theo giá trị một cột (tăng dần / giảm dần).</li>
      <li><span class="k">Lọc</span>: chỉ <b>hiện</b> những hàng thoả điều kiện, ẩn các hàng khác.</li>
      <li>Lệnh nằm trong thẻ <b>Data</b> (nhóm Sort &amp; Filter).</li></ul>`,
    quiz: [
      { q: 'Muốn chỉ hiện các bạn lớp 8A trong danh sách cả khối, em dùng:', o: ['Sắp xếp', 'Biểu đồ', 'Lọc dữ liệu', 'Gộp ô'], a: 2, why: 'Lọc chỉ hiện các hàng thoả điều kiện (lớp 8A).' },
      { q: 'Các lệnh sắp xếp và lọc nằm ở thẻ nào?', o: ['Data', 'Insert', 'Page Layout', 'Formulas'], a: 0, why: 'Thẻ Data → nhóm Sort & Filter.' } ] },
  { title: 'Sắp xếp tăng, giảm', tip: 'A→Z là tăng dần, Z→A là giảm dần. Muốn điểm cao lên đầu thì chọn giảm dần!',
    key: '<b>A→Z</b>: tăng dần<br><b>Z→A</b>: giảm dần',
    ill: () => svg(`${key3d(40, 40, 230, 110, '#2DA44E', '#1B7A35', 'A → Z ↑', 40)}${key3d(330, 40, 230, 110, '#E5383B', '#A4161A', 'Z → A ↓', 40)}
      ${[60, 110, 160, 210].map((h, i) => `<rect x="${60 + i*50}" y="${380 - h}" width="38" height="${h}" rx="6" fill="#8AC926" stroke="${O}" stroke-width="4"/>`).join('')}
      ${[210, 160, 110, 60].map((h, i) => `<rect x="${350 + i*50}" y="${380 - h}" width="38" height="${h}" rx="6" fill="#FF595E" stroke="${O}" stroke-width="4"/>`).join('')}
      ${stars3([300, 200], [30, 200], [575, 190])}`),
    html: `<ul>
      <li>Nháy chọn <b>một ô</b> trong cột cần sắp xếp.</li>
      <li>Data → <span class="k">A→Z</span>: <b>tăng dần</b> (số nhỏ → lớn, chữ A → Z).</li>
      <li>Data → <span class="k">Z→A</span>: <b>giảm dần</b>.</li>
      <li>Cả hàng dữ liệu đi theo nhau, không bị xáo trộn.</li>
      <li>Không chọn riêng một cột rồi sắp xếp kẻo lệch dữ liệu!</li></ul>`,
    quiz: [
      { q: 'Muốn bạn có điểm cao nhất lên đầu danh sách, em sắp xếp cột điểm:', o: ['Tăng dần (A→Z)', 'Theo màu', 'Giảm dần (Z→A)', 'Không sắp xếp được'], a: 2, why: 'Giảm dần: số lớn nhất lên đầu.' },
      { q: 'Sắp xếp tên học sinh theo bảng chữ cái từ A đến Z là sắp xếp:', o: ['Tăng dần', 'Giảm dần', 'Lọc dữ liệu', 'Ngẫu nhiên'], a: 0, why: 'A → Z là tăng dần.' } ] },
  { title: 'Sắp xếp nhiều tiêu chí', tip: 'Hai bạn bằng điểm thì xếp theo tên. Thêm mức sắp xếp bằng Add Level!',
    key: 'Data → <b>Sort</b><br><b>Add Level</b>: thêm<br>tiêu chí phụ',
    ill: () => svg(`<rect x="40" y="40" width="520" height="260" rx="20" fill="#fff" stroke="${O}" stroke-width="6"/>
      <rect x="40" y="40" width="520" height="56" rx="20" fill="#1982C4" stroke="${O}" stroke-width="6"/>${T(300, 78, 'Sort', 30, '#fff')}
      ${pillS(60, 110, 200, 46, '#2DA44E', '+ Add Level', 22)}
      ${T(60, 200, 'Sort by', 24, O, 'start', 800)}<rect x="200" y="172" width="160" height="40" rx="8" fill="#E7F5FF" stroke="${O}" stroke-width="3"/>${T(220, 200, 'Điểm', 22, '#1864AB', 'start')}<rect x="380" y="172" width="160" height="40" rx="8" fill="#FFE3E3" stroke="${O}" stroke-width="3"/>${T(396, 200, 'Lớn → nhỏ', 20, '#C92A2A', 'start')}
      ${T(60, 262, 'Then by', 24, O, 'start', 800)}<rect x="200" y="234" width="160" height="40" rx="8" fill="#E7F5FF" stroke="${O}" stroke-width="3"/>${T(220, 262, 'Tên', 22, '#1864AB', 'start')}<rect x="380" y="234" width="160" height="40" rx="8" fill="#D3F9D8" stroke="${O}" stroke-width="3"/>${T(396, 262, 'A → Z', 20, '#2B8A3E', 'start')}
      ${ball(130, 360, 36, '#FF006E', '1', 34)}${ball(230, 360, 36, '#FF7F11', '2', 34)}
      ${stars3([570, 340], [400, 370], [30, 300])}`),
    html: `<ul>
      <li>Data → <span class="k">Sort</span> (hộp thoại sắp xếp).</li>
      <li><b>Sort by</b>: cột sắp xếp chính, chọn tăng / giảm.</li>
      <li><span class="k">Add Level</span> → <b>Then by</b>: tiêu chí phụ, dùng khi giá trị chính bằng nhau.</li>
      <li>Tích <b>My data has headers</b> để giữ hàng tiêu đề.</li></ul>`,
    quiz: [
      { q: 'Trong hộp thoại Sort, nút nào dùng để thêm tiêu chí sắp xếp thứ hai?', o: ['Delete Level', 'Options', 'Copy Level', 'Add Level'], a: 3, why: 'Add Level thêm một mức (Then by).' },
      { q: 'Sắp xếp theo điểm giảm dần, rồi theo tên A→Z. Tên được xét khi nào?', o: ['Luôn xét trước điểm', 'Khi hai bạn bằng điểm', 'Không bao giờ', 'Khi điểm trống'], a: 1, why: 'Tiêu chí phụ chỉ dùng khi tiêu chí chính bằng nhau.' } ] },
  { title: 'Lọc dữ liệu – Filter', tip: 'Bật Filter là đầu mỗi cột có nút ▾ nhỏ xinh để chọn lọc!',
    key: 'Data → <b>Filter</b><br>Nút <b>▾</b> → chọn giá trị',
    ill: () => svg(`${grid(30, 30, [['Tên ▾', 'Lớp ▾'], ['An', '8A'], ['Chi', '8A']], { cw: 150, rh: 54, fs: 24, bold: [0], fill: { '0-0': '#E7F5FF', '0-1': '#E7F5FF' } })}
      <rect x="250" y="130" width="300" height="210" rx="16" fill="#fff" stroke="${O}" stroke-width="5"/>
      ${['(Select All)', '8A', '8B', '8C'].map((t, i) => `<rect x="270" y="${150 + i*46}" width="28" height="28" rx="6" fill="${i === 1 ? '#2DA44E' : '#fff'}" stroke="${O}" stroke-width="3"/>${i === 1 ? `<path d="M275 ${164 + i*46} l7 7 l12 -14" stroke="#fff" stroke-width="5" fill="none"/>` : ''}${T(314, 172 + i*46, t, 22, O, 'start', 700)}`).join('')}
      ${funnel(40, 250, 1, '#8338EC')}${T(90, 390, 'Lọc 8A', 26, '#8338EC')}
      ${stars3([570, 40], [570, 380], [200, 400])}`),
    html: `<ul>
      <li>Chọn một ô trong bảng → Data → <span class="k">Filter</span>.</li>
      <li>Ô tiêu đề mỗi cột hiện nút <span class="k">▾</span></li>
      <li>Nháy <b>▾</b> → bỏ chọn (Select All) → tích giá trị cần xem → OK.</li>
      <li>Cột đang lọc có biểu tượng <b>phễu</b>.</li>
      <li>Số thứ tự hàng bị ẩn sẽ nhảy cóc, hiện màu xanh.</li></ul>`,
    quiz: [
      { q: 'Sau khi bật Filter, ô tiêu đề mỗi cột xuất hiện gì?', o: ['Nút ▾', 'Dấu $', 'Dấu =', 'Biểu đồ nhỏ'], a: 0, why: 'Nút ▾ để chọn điều kiện lọc.' },
      { q: 'Lọc dữ liệu thì các hàng không thoả điều kiện sẽ:', o: ['Bị xoá vĩnh viễn', 'Bị đổi màu đỏ', 'Chuyển sang trang khác', 'Bị ẩn tạm thời'], a: 3, why: 'Lọc chỉ ẩn hàng, không xoá dữ liệu.' } ] },
  { title: 'Lọc theo điều kiện số', tip: 'Muốn tìm các bạn từ 8 điểm trở lên? Dùng Number Filters!',
    key: '<b>Number Filters</b>:<br>&gt;, &lt;, Between…<br><b>Top 10</b>',
    ill: () => svg(`<rect x="40" y="40" width="300" height="300" rx="18" fill="#fff" stroke="${O}" stroke-width="5"/>${T(60, 84, 'Number Filters ▸', 26, '#1864AB', 'start')}
      ${['Equals…', 'Greater Than…', 'Less Than…', 'Between…', 'Top 10…'].map((t, i) => `${i === 1 ? '<rect x="52" y="108" width="276" height="42" rx="8" fill="#D0EBFF"/>' : ''}${T(70, 138 + i*46, t, 22, O, 'start', 700)}`).join('')}
      <rect x="360" y="110" width="210" height="110" rx="16" fill="#FFF3BF" stroke="${O}" stroke-width="5"/>${T(465, 180, '≥ 8', 52, '#E5383B')}
      ${grid(360, 250, [['9'], ['8.5'], ['10']], { cw: 140, rh: 44, fs: 24, head: false, fill: { '0-0': '#D3F9D8', '1-0': '#D3F9D8', '2-0': '#D3F9D8' } })}
      ${stars3([30, 380], [300, 390], [570, 60])}`),
    html: `<ul>
      <li>Nháy ▾ ở cột số → <span class="k">Number Filters</span>:</li>
      <li><b>Greater Than</b> (lớn hơn), <b>Less Than</b> (nhỏ hơn), <b>Between</b> (trong khoảng)…</li>
      <li><span class="k">Top 10</span>: lọc N giá trị lớn nhất / nhỏ nhất.</li>
      <li>Cột chữ có <b>Text Filters</b>: Begins With, Contains…</li></ul>`,
    quiz: [
      { q: 'Lọc các bạn có điểm từ 5 đến 7, em chọn điều kiện nào?', o: ['Top 10', 'Equals', 'Between', 'Less Than'], a: 2, why: 'Between = nằm trong khoảng.' },
      { q: 'Muốn lọc ra 3 bạn có điểm cao nhất, em dùng:', o: ['Top 10 (chọn 3, Top)', 'Less Than', 'Sort A→Z', 'Text Filters'], a: 0, why: 'Top 10 cho phép chọn số lượng N giá trị lớn nhất.' } ] },
  { title: 'Bỏ lọc', tip: 'Lọc xong nhớ bỏ lọc để thấy lại cả bảng nha!',
    key: '<b>Clear</b>: bỏ điều kiện<br>Nháy lại <b>Filter</b>: tắt',
    ill: () => svg(`${funnel(110, 60, 1.6, '#8338EC')}<line x1="80" y1="50" x2="300" y2="250" stroke="#E5383B" stroke-width="16" stroke-linecap="round"/>
      ${key3d(340, 60, 220, 100, '#FF7F11', '#C85A00', 'Clear', 40)}${key3d(340, 200, 220, 100, '#1982C4', '#0F5A8A', 'Filter', 40)}
      ${pillS(60, 330, 480, 60, '#2DA44E', 'Hiện lại toàn bộ dữ liệu', 26)}
      ${stars3([40, 40], [300, 300], [580, 320])}`),
    html: `<ul>
      <li>Bỏ lọc một cột: nháy ▾ → <b>Clear Filter From…</b></li>
      <li>Bỏ mọi điều kiện lọc: Data → <span class="k">Clear</span>.</li>
      <li>Tắt hẳn chế độ lọc (mất nút ▾): nháy lại <span class="k">Filter</span>.</li>
      <li>Dữ liệu ẩn sẽ <b>hiện lại đầy đủ</b>.</li></ul>`,
    quiz: [
      { q: 'Muốn tắt hẳn chế độ lọc, mất các nút ▾ ở tiêu đề, em làm gì?', o: ['Nhấn Delete', 'Nháy lại nút Filter', 'Sắp xếp A→Z', 'Đóng tệp'], a: 1, why: 'Nháy lại Filter để tắt chế độ lọc.' },
      { q: 'Sau khi chọn Clear, các hàng bị ẩn do lọc sẽ thế nào?', o: ['Mất luôn', 'Chuyển sang Sheet2', 'Bị sắp xếp lại', 'Hiện lại đầy đủ'], a: 3, why: 'Clear bỏ điều kiện lọc → hiện lại mọi hàng.' } ] },
];
