/* ===== BÀI 4: GIEO HẠT HOA, CÂY CẢNH TRONG CHẬU ===== */
const META = { key: 'bai4', num: 4, title: 'Bài 4. Gieo hạt hoa, cây cảnh trong chậu', big: 'GIEO HẠT<br>TRONG CHẬU',
  st2: 'Công nghệ 4 • 5 hoạt động • 10 câu đố • nhận giấy chứng nhận',
  hello: 'Cùng gieo hạt và chờ mầm xanh nhú lên nhé!',
  cert: 'CÔNG NGHỆ 4 – BÀI 4: GIEO HẠT TRONG CHẬU', file: 'CN4_Bai4', pass: 8 };

const pile = (w = 40, h = 46) => `<path d="M${-w} -14 Q0 ${-14 - h*2} ${w} -14Z" fill="#8D5524" stroke="${O}" stroke-width="4"/>`;
const seeds3 = (y) => `${seed(-22, y, 1, 20)}${seed(4, y - 14, 1, -30)}${seed(26, y + 2, 1, 40)}`;
const sprouts = () => `${sprout(-34, -14, .55)}${sprout(0, -14, .7)}${sprout(34, -14, .55)}`;

const ILL_T = {
  t1: () => svg(`<rect x="0" y="318" width="600" height="30" rx="10" fill="#8D5524" opacity=".85"/>${seed(80, 300, 2, 15)}${sprout(240, 318, 1.2)}${daisy(450, 160, 1.05, '#FF8FAB', '#FFD60A', 150)}
    ${arr(120, 290, 175, 290, '#FF7F11')}${arr(300, 250, 370, 220, '#FF7F11')}${pillS(80, 362, 440, 44, '#2DA44E', 'Hạt → Cây con → Ra hoa', 22)}${sun(560, 50, 24)}`),
  t2: () => svg(`${pot(100, 220, .8, '#E76F51')}${bag(245, 210, .65, '#8D5524', 'Đất', 26)}${bag(370, 210, .65, '#FF8FAB', 'Hạt', 26)}${trowel(500, 210, .65, 18)}${can(500, 330, .35, '#1982C4')}
    ${pillS(40, 350, 260, 44, '#2DA44E', 'Hạt chắc, mẩy', 22)}${seed(330, 372, 1.5, 20)}${seed(372, 362, 1.5, -20)}${seed(412, 374, 1.5, 30)}`),
  t3: () => svg(`${stepN(80, 1, '#FF006E', 'Cho đất', pot(80, 240, .68, '#E76F51', pile()))}${stepN(225, 2, '#FF7F11', 'Gieo hạt', pot(225, 240, .68, '#E76F51', seeds3(-60) + seeds3(-110)))}
    ${stepN(370, 3, '#2DA44E', 'Phủ đất', pot(370, 240, .68, '#E76F51', pile(56, 14)))}${stepN(515, 4, '#1982C4', 'Tưới nước', pot(515, 240, .68, '#E76F51', drop(-30, -60, 1.3) + drop(10, -90, 1.3) + drop(34, -50, 1.3)))}`),
  t4: () => svg(`${pot(140, 250, 1, '#E76F51', sprouts())}${sun(530, 60, 30)}${can(380, 250, .7, '#1982C4', true)}
    ${pillS(320, 345, 250, 46, '#1982C4', 'Giữ đất ẩm', 24)}${star(40, 60, 14, '#FFD60A')}${star(300, 80, 12, '#FF006E')}`),
  t5: () => svg(`${ball(50, 60, 26, '#FF006E', '1', 28)}${pillS(90, 38, 310, 44, '#FF006E', 'Cho đất vào chậu', 22)}
    ${ball(50, 150, 26, '#FF7F11', '2', 28)}${pillS(90, 128, 310, 44, '#FF7F11', 'Gieo hạt đều', 22)}
    ${ball(50, 240, 26, '#2DA44E', '3', 28)}${pillS(90, 218, 310, 44, '#2DA44E', 'Phủ lớp đất mỏng', 22)}
    ${ball(50, 330, 26, '#1982C4', '4', 28)}${pillS(90, 308, 310, 44, '#1982C4', 'Tưới nhẹ nước', 22)}
    ${pot(505, 250, .75, '#8338EC', sprouts())}${star(560, 60, 14, '#FFD60A')}`),
};

const TOPICS = [
  { id: 't1', name: 'Hạt nảy mầm', tip: 'Từ một hạt nhỏ xíu sẽ thành cây hoa đẹp đấy!',
    html: S4Q(['Quan sát: <b>hạt</b> lớn lên thành cây hoa thế nào?', ''],
      ['Hạt phát triển qua những giai đoạn nào?', 'Hạt → nảy mầm → cây con → cây ra hoa.'],
      ['Muốn có chậu hoa từ hạt, em làm gì?', 'Gieo hạt vào chậu và chăm sóc.'],
      ['Hạt <b>nảy mầm</b> thành cây con.', 'Cây con lớn lên <b>ra hoa</b>.', 'Có thể trồng hoa <span class="k">bằng hạt</span>.']),
    quiz: [
      { q: 'Hạt muốn nảy mầm cần có:', o: ['Đất khô, tối hoàn toàn', 'Nước, không khí, độ ấm', 'Chỉ cần ánh đèn', 'Chỉ cần phân bón'], a: 1, why: 'Hạt cần đủ nước, không khí và độ ấm để nảy mầm.' },
      { q: 'Thứ tự lớn lên đúng của cây hoa là:', o: ['Hoa → hạt → cây con', 'Cây con → hạt → hoa', 'Hạt → cây con → ra hoa', 'Hoa → cây con → hạt'], a: 2, why: 'Hạt nảy mầm thành cây con, cây lớn lên rồi ra hoa.' } ] },
  { id: 't2', name: 'Chuẩn bị gieo hạt', tip: 'Chọn hạt chắc, mẩy thì mầm mới khỏe!',
    html: S4Q(['Chuẩn bị <b>vật liệu, dụng cụ</b> để gieo hạt.', ''],
      ['Gieo hạt cần những gì?', 'Chậu, đất, giá thể, hạt giống; xẻng nhỏ, bình tưới, găng tay.'],
      ['Chọn hạt giống thế nào?', 'Hạt chắc, mẩy, không sâu, không mốc.'],
      ['Chuẩn bị <b>chậu, đất, hạt</b>.', 'Dụng cụ: <b>xẻng, bình tưới</b>.', 'Chọn <span class="k">hạt chắc, mẩy</span>.']),
    quiz: [
      { q: 'Nên chọn hạt giống như thế nào?', o: ['Hạt chắc, mẩy, không mốc', 'Hạt lép, nhỏ', 'Hạt bị mốc', 'Hạt bị sâu ăn'], a: 0, why: 'Hạt chắc, mẩy, không sâu mốc mới nảy mầm tốt.' },
      { q: 'Dụng cụ nào dùng để xúc đất vào chậu?', o: ['Kéo', 'Bình tưới', 'Găng tay', 'Xẻng nhỏ'], a: 3, why: 'Xẻng nhỏ dùng để xúc đất cho vào chậu.' } ] },
  { id: 't3', name: '4 bước gieo hạt', tip: 'Nhớ nhé: Đất – Hạt – Phủ – Tưới!',
    html: S4Q(['Thực hành gieo hạt theo <b>4 bước</b>.', ''],
      ['Hai bước đầu là gì?', '① Cho đất vào chậu. ② Gieo hạt đều trên mặt đất.'],
      ['Hai bước sau là gì?', '③ Phủ lớp đất mỏng lên hạt. ④ Tưới nhẹ nước.'],
      ['① Đất → ② <b>Gieo hạt</b>.', '③ <b>Phủ đất mỏng</b>.', '④ <span class="k">Tưới nhẹ</span>.']),
    quiz: [
      { q: 'Bước đầu tiên khi gieo hạt trong chậu là:', o: ['Tưới nước', 'Cho đất vào chậu', 'Phủ đất lên hạt', 'Bón phân'], a: 1, why: 'Phải cho đất vào chậu trước rồi mới gieo hạt.' },
      { q: 'Sau khi gieo hạt và phủ đất mỏng, em cần:', o: ['Để chậu khô', 'Đập mạnh đất', 'Tưới nhẹ nước', 'Đào hạt lên xem'], a: 2, why: 'Tưới nhẹ nước giúp đất ẩm, hạt mau nảy mầm.' } ] },
  { id: 't4', name: 'Chăm hạt mới gieo', tip: 'Mỗi ngày tưới nhẹ, chờ mầm xanh nhú lên nào!',
    html: S4Q(['Chăm sóc <b>chậu hạt vừa gieo</b> ở nhà.', ''],
      ['Đặt chậu ở đâu?', 'Nơi thoáng mát, có ánh sáng nhẹ.'],
      ['Tưới nước thế nào?', 'Tưới nhẹ, đều mỗi ngày; giữ ẩm, không úng.'],
      ['Đặt chậu nơi <b>thoáng mát</b>.', 'Tưới <b>nhẹ, đều</b> mỗi ngày.', 'Ghi <span class="k">ngày nảy mầm</span>.']),
    quiz: [
      { q: 'Nên tưới chậu hạt mới gieo như thế nào?', o: ['Đổ thật nhiều nước', 'Tưới nhẹ, giữ đất ẩm', 'Không tưới', 'Tưới nước nóng'], a: 1, why: 'Tưới nhẹ để hạt không bị trôi, đất luôn ẩm.' },
      { q: 'Đặt chậu hạt mới gieo ở đâu?', o: ['Trong tủ lạnh', 'Trong tủ tối', 'Nơi nắng gắt cả ngày', 'Nơi thoáng mát, có ánh sáng'], a: 3, why: 'Nơi thoáng mát, có ánh sáng giúp mầm lớn khỏe.' } ] },
  { id: 't5', name: 'Nhà gieo hạt nhí', tip: 'Sắp xếp lại 4 bước gieo hạt thật nhanh nào!',
    html: S4Q(['Sắp xếp lại <b>4 bước gieo hạt</b>.', ''],
      ['Gieo hạt thế nào cho đúng?', 'Gieo đều, không quá dày.'],
      ['Vì sao phủ đất mỏng?', 'Để mầm dễ nhô lên.'],
      ['Đất → gieo → <b>phủ đất</b> → tưới.', 'Gieo <b>đều</b>, phủ <b>mỏng</b>.', 'Xong <span class="k">rửa tay sạch</span>.']),
    quiz: [
      { q: 'Vì sao lớp đất phủ lên hạt phải mỏng?', o: ['Để mầm dễ nhô lên', 'Để chậu nặng hơn', 'Để hạt bị chôn sâu', 'Để chim ăn hạt'], a: 0, why: 'Lớp đất mỏng giúp mầm non dễ nhô lên khỏi mặt đất.' },
      { q: 'Sau khi gieo hạt xong, em nên làm gì?', o: ['Lau tay vào áo', 'Để dụng cụ bừa bãi', 'Cất dụng cụ, rửa tay', 'Đi ăn ngay'], a: 2, why: 'Cất gọn dụng cụ và rửa tay sạch để giữ vệ sinh.' } ] },
];

const KEY = [
  'Hạt → <b>nảy mầm</b> →<br>cây con → <b>ra hoa</b>.',
  'Chọn <b>hạt chắc, mẩy</b>,<br>không sâu mốc.',
  'Đất → Gieo hạt →<br><b>Phủ đất</b> → <b>Tưới</b>.',
  'Nơi <b>thoáng mát</b>,<br>giữ đất <b>ẩm</b>.',
  'Gieo <b>đều</b>, phủ <b>mỏng</b>,<br><b>rửa tay</b>.',
];
