/* ===== BÀI 1: THÔNG TIN VÀ DỮ LIỆU ===== */
const META = { key: 'bai1', theme: 'go', num: 1, title: 'Bài 1. Thông tin và dữ liệu', big: 'Thông tin<br>và dữ liệu',
  st2: 'Chủ đề 1 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Cùng phân biệt thông tin và dữ liệu nhé!',
  cert: 'Tin học 6 – Bài 1. Thông tin và dữ liệu', file: 'Tin6_Bai1', pass: 8 };

const ILL_T = {
  t1: () => svg(`${sun(110, 110, 46)}${cloud(300, 120, .9, '#E7F5FF')}${kid(470, 250, .9)}
    ${pillS(20, 230, 230, 50, '#FF7F11', 'Trời nắng to', 24)}${pillS(80, 330, 440, 54, '#2DA44E', 'Mang mũ khi ra ngoài', 26)}
    ${star(560, 40, 14, '#FFD60A')}${star(40, 390, 12, '#FF006E')}`),
  t2: () => svg(`${pillS(30, 70, 220, 64, '#1982C4', 'Dữ liệu', 32)}${pillS(350, 70, 220, 64, '#2DA44E', 'Thông tin', 32)}${arr(255, 102, 345, 102, '#FF7F11')}
    ${txt(140, 190, '38°C', 44)}${txt(460, 190, 'Bé bị sốt', 34)}
    ${txt(140, 260, '7 giờ 15', 40)}${txt(460, 260, 'Sắp muộn học', 32)}
    ${pillS(70, 330, 460, 54, '#8338EC', 'Dữ liệu → xử lí → thông tin', 26)}${star(570, 390, 12, '#FFD60A')}`),
  t3: () => svg(`${book(110, 170, .9)}${doc(300, 170, 1.1)}${G(470, 170, 1, `<rect x="-60" y="-46" width="120" height="92" rx="12" fill="#FFC300" ${ST}/><circle cx="0" cy="0" r="26" fill="#8ECAE6" ${ST}/><rect x="-46" y="-60" width="34" height="18" rx="6" fill="#FF7F11" ${ST}/>`)}
    ${pillS(130, 320, 340, 56, '#FF7F11', 'Vật mang tin', 30)}${star(40, 50, 14, '#FFD60A')}${star(560, 60, 12, '#FF006E')}`),
  t4: () => svg(`${car(300, 250, 1.1, '#E5383B')}${G(500, 150, 1, `<rect x="-14" y="0" width="28" height="140" fill="#ADB5BD" ${ST}/><rect x="-40" y="-140" width="80" height="150" rx="16" fill="#3D405B" ${ST}/><circle cx="0" cy="-104" r="20" fill="#E5383B"/><circle cx="0" cy="-64" r="20" fill="#555"/><circle cx="0" cy="-24" r="20" fill="#555"/>`)}
    ${pillS(20, 40, 340, 54, '#2DA44E', 'Đèn đỏ → dừng xe', 28)}${pillS(30, 340, 420, 50, '#8338EC', 'Thông tin giúp ra quyết định', 24)}${star(570, 400, 12, '#FFD60A')}`),
  t5: () => svg(`${tlist([[1, '#1982C4', 'Dữ liệu: số, chữ, hình, âm thanh'], [1, '#2DA44E', 'Thông tin: mang lại hiểu biết'], [1, '#FF7F11', 'Vật mang tin: sách, đĩa, thẻ nhớ'], [1, '#8338EC', 'Thông tin giúp ra quyết định']], 60, 96, 22)}`),
};

const TOPICS = [
  { id: 't1', name: 'Em nhận được gì?', tip: 'Mỗi ngày em nhận rất nhiều thông tin từ mắt, tai… quanh mình đấy!',
    html: S4Q(['Kể những gì em <b>nhìn thấy, nghe thấy</b> trên đường đến trường.', 'Gợi ý: đèn giao thông, tiếng còi xe, biển báo…'],
      ['Nghe bản tin "trời nắng to", em <b>biết thêm điều gì</b>?', 'Em biết thời tiết hôm nay nắng nóng.'],
      ['Biết trời nắng, em sẽ <b>làm gì</b>?', 'Mang mũ, mặc áo chống nắng, mang nước uống.'],
      ['Con người thu nhận thông tin qua các <b>giác quan</b>.', 'Thông tin đem lại <b>hiểu biết</b> cho con người.', 'Hiểu biết giúp em <span class="k">hành động phù hợp</span>.']),
    quiz: [
      { q: 'Nghe dự báo "chiều nay có mưa", em nên làm gì?', o: ['Phơi thêm quần áo', 'Mang theo áo mưa', 'Không làm gì', 'Tắt điện thoại'], a: 1, why: 'Thông tin "có mưa" giúp em quyết định mang áo mưa.' },
      { q: 'Con người thu nhận thông tin chủ yếu nhờ:', o: ['Các giác quan', 'Chỉ đôi tay', 'Quần áo', 'Đồ ăn'], a: 0, why: 'Mắt, tai, mũi, lưỡi, da giúp ta thu nhận thông tin.' } ] },
  { id: 't2', name: 'Thông tin và dữ liệu', tip: 'Dữ liệu là "nguyên liệu", thông tin là "món ăn" đã nấu xong!',
    html: S4Q(['Phân biệt <b>dữ liệu</b> và <b>thông tin</b> qua ví dụ nhiệt kế.', ''],
      ['Nhiệt kế chỉ <b>38°C</b>. Con số đó là gì?', 'Đó là <b>dữ liệu</b>: con số, chữ, hình ảnh, âm thanh…'],
      ['Từ "38°C", em <b>hiểu được điều gì</b>?', '"Bé bị sốt" – đó chính là <b>thông tin</b>.'],
      ['<b>Dữ liệu</b>: số, chữ, hình ảnh, âm thanh ghi lại được.', '<b>Thông tin</b>: những gì đem lại hiểu biết.', 'Dữ liệu được <span class="k">xử lí</span> thành thông tin.']),
    quiz: [
      { q: 'Nhiệt kế chỉ 38°C. Con số "38°C" là:', o: ['Vật mang tin', 'Thông tin', 'Dữ liệu', 'Máy tính'], a: 2, why: 'Con số đo được là dữ liệu; "bị sốt" mới là thông tin.' },
      { q: 'Dữ liệu có thể ở dạng nào?', o: ['Chỉ con số', 'Chỉ chữ viết', 'Chỉ hình ảnh', 'Số, chữ, hình ảnh, âm thanh'], a: 3, why: 'Dữ liệu có nhiều dạng: số, văn bản, hình ảnh, âm thanh…' } ] },
  { id: 't3', name: 'Vật mang tin', tip: 'Quyển vở của em cũng là một vật mang tin đó!',
    html: S4Q(['Tìm các đồ vật dùng để <b>ghi lại, lưu giữ</b> dữ liệu.', 'Gợi ý: nhìn quanh lớp học, cặp sách của em.'],
      ['Những vật nào dùng để <b>lưu giữ</b> dữ liệu?', 'Sách, vở, báo, ảnh, đĩa CD, thẻ nhớ, USB…'],
      ['Vì sao cần <b>vật mang tin</b>?', 'Để lưu lâu dài và chia sẻ cho người khác.'],
      ['Vật mang tin dùng để <b>lưu trữ</b> và <b>truyền</b> dữ liệu.', 'Có vật mang tin truyền thống (sách, vở) và số (USB).', 'Ví dụ: quyển vở, thẻ nhớ là <span class="k">vật mang tin</span>.']),
    quiz: [
      { q: 'Đồ vật nào là vật mang tin?', o: ['Cái thước kẻ trơn', 'Quyển sách', 'Viên phấn', 'Cái ghế'], a: 1, why: 'Quyển sách ghi chữ, hình nên là vật mang tin.' },
      { q: 'Vật mang tin dùng để:', o: ['Lưu trữ và truyền dữ liệu', 'Nấu ăn', 'Trang trí', 'Đo nhiệt độ'], a: 0, why: 'Vật mang tin giúp lưu trữ và chia sẻ dữ liệu.' } ] },
  { id: 't4', name: 'Thông tin giúp em quyết định', tip: 'Đèn đỏ thì dừng – thông tin giúp ta hành động đúng!',
    html: S4Q(['Nêu ví dụ thông tin giúp em <b>ra quyết định</b>.', 'Gợi ý: ở ngã tư, ở trường, ở nhà…'],
      ['Thấy đèn đỏ, nghe trống vào lớp – em <b>làm gì</b>?', 'Đèn đỏ → dừng xe. Trống vào lớp → về chỗ ngồi.'],
      ['Nếu thông tin <b>sai</b> thì quyết định sẽ ra sao?', 'Quyết định cũng có thể sai, gây hậu quả xấu.'],
      ['Thông tin giúp con người <b>ra quyết định</b>.', 'Cần thông tin <b>đúng</b> và <b>kịp thời</b>.', 'Thông tin sai dẫn đến <span class="k">quyết định sai</span>.']),
    quiz: [
      { q: 'Đèn giao thông chuyển màu đỏ, người đi đường cần:', o: ['Đi nhanh hơn', 'Quay đầu xe', 'Dừng lại', 'Bấm còi'], a: 2, why: 'Đèn đỏ là thông tin báo phải dừng lại.' },
      { q: 'Thông tin có vai trò gì với con người?', o: ['Làm ta mệt hơn', 'Không có vai trò gì', 'Chỉ để giải trí', 'Giúp ra quyết định và hành động'], a: 3, why: 'Thông tin đem lại hiểu biết để ta quyết định đúng.' } ] },
  { id: 't5', name: 'Tổng kết bài học', tip: 'Ôn nhanh: dữ liệu – thông tin – vật mang tin!',
    html: S4Q(['Tóm tắt bài học bằng <b>3 ý chính</b>.', ''],
      ['<b>Dữ liệu</b> và <b>thông tin</b> khác nhau thế nào?', 'Dữ liệu: số, chữ, hình, âm thanh; thông tin: hiểu biết rút ra.'],
      ['Thông tin được lưu ở đâu, dùng để làm gì?', 'Lưu trên vật mang tin; giúp ta ra quyết định.'],
      ['Dữ liệu được <b>xử lí</b> thành thông tin.', '<b>Vật mang tin</b>: sách, vở, đĩa, USB…', 'Thông tin giúp <span class="k">ra quyết định đúng</span>.']),
    quiz: [
      { q: 'Câu nào đúng?', o: ['Dữ liệu chỉ là con số', 'Thông tin đem lại hiểu biết', 'Vở không phải vật mang tin', 'Thông tin không cần thiết'], a: 1, why: 'Thông tin là những gì đem lại hiểu biết cho con người.' },
      { q: 'Thẻ nhớ trong máy ảnh là:', o: ['Vật mang tin', 'Thông tin', 'Dữ liệu', 'Bộ xử lí'], a: 0, why: 'Thẻ nhớ dùng để lưu trữ dữ liệu – là vật mang tin.' } ] },
];

const KEY = [
  'Thông tin đem lại<br><b>hiểu biết</b>.',
  '<b>Dữ liệu</b> được xử lí<br>thành <b>thông tin</b>.',
  'Sách, USB… là<br><b>vật mang tin</b>.',
  'Thông tin giúp<br><b>ra quyết định</b>.',
  'Dữ liệu – thông tin<br>– <b>vật mang tin</b>.',
];
