/* ===== BÀI 3: TÌM HIỂU THIẾT KẾ ===== */
const META = { key: 'bai3', num: 3, title: 'Bài 3. Tìm hiểu thiết kế', big: 'TÌM HIỂU<br>THIẾT KẾ',
  st2: 'Công nghệ 5 • 5 hoạt động • 10 câu đố • nhận giấy chứng nhận',
  hello: 'Cùng tìm hiểu thiết kế – bước đầu tiên để làm ra sản phẩm nhé!',
  cert: 'CÔNG NGHỆ 5 – BÀI 3: TÌM HIỂU THIẾT KẾ', file: 'CN5_Bai3', pass: 8 };

const STEP4 = (y0, gap, w = 380) => [['#FF7F11', 'Hình thành ý tưởng'], ['#1982C4', 'Phác thảo, chọn vật liệu'], ['#2DA44E', 'Làm sản phẩm mẫu'], ['#8338EC', 'Đánh giá, hoàn thiện']]
  .map(([c, t], i) => `${ball(190, y0 + i*gap + 22, 24, '#FFD60A', i + 1, 24)}${pillS(226, y0 + i*gap, w, 44, c, t, 22)}`).join('');

const ILL_T = {
  t1: () => svg(`${watch(130, 210, .9, '#FF006E')}${watch(300, 210, .9, '#1982C4')}${watch(470, 210, .9, '#2DA44E')}
    ${star(40, 40, 14, '#FFD60A')}${star(560, 40, 14, '#FF006E')}${star(300, 40, 12, '#8338EC')}`),
  t2: () => svg(`${pillS(20, 60, 260, 48, '#FF7F11', '1. Thiết kế', 24)}${pillS(320, 60, 260, 48, '#1982C4', '2. Sản xuất', 24)}
    ${pillS(20, 250, 260, 48, '#8338EC', '4. Bảo dưỡng', 24)}${pillS(320, 250, 260, 48, '#2DA44E', '3. Sử dụng', 24)}
    ${arr(285, 84, 312, 84, '#FF006E', 7)}${arr(450, 118, 450, 240, '#FF006E', 7)}${arr(312, 274, 290, 274, '#FF006E', 7)}
    ${pencil(120, 180, .5, -20)}${gear(480, 180, 26, '#FFD60A')}${pillS(150, 340, 300, 46, '#FF006E', 'Thiết kế đi đầu!', 24)}`),
  t3: () => svg(`${STEP4(30, 90)}${bulb(70, 100, .45)}${pencil(30, 270, .35, -40)}${star(60, 380, 14, '#FFD60A')}`),
  t4: () => svg(`${paper(40, 40, 240, 280, `<rect x="80" y="110" width="160" height="150" rx="16" fill="#FFD6E7" stroke="${O}" stroke-width="4" stroke-dasharray="10 8"/><line x1="160" y1="110" x2="160" y2="260" stroke="${O}" stroke-width="4" stroke-dasharray="10 8"/>`)}
    ${arr(300, 180, 350, 180, '#FF006E')}<rect x="380" y="110" width="170" height="160" rx="18" fill="#FF5DA2" ${ST}/><line x1="465" y1="110" x2="465" y2="270" stroke="${O}" stroke-width="5"/>
    ${pencil(420, 100, .35, -90)}${pencil(500, 100, .35, -90, '#1982C4')}${pillS(330, 320, 250, 44, '#8338EC', 'Túi đựng bút', 24)}`),
  t5: () => svg(`${kid(120, 200, .9, '#1982C4')}${paper(240, 60, 300, 230, `${bulb(390, 170, .6)}`)}
    ${pillS(170, 340, 300, 46, '#FF7F11', 'Nhà thiết kế nhí', 24)}${star(560, 360, 14, '#FFD60A')}${star(40, 40, 14, '#FF006E')}`),
};

const TOPICS = [
  { id: 't1', name: 'Đồng hồ muôn kiểu', tip: 'Cùng là đồng hồ mà mỗi chiếc một vẻ – đó là nhờ thiết kế!',
    html: S4('Quan sát các chiếc đồng hồ khác nhau.',
      'Chúng khác nhau về <b>hình dạng</b>, <b>màu sắc</b>, kích thước.',
      'Vì sao mỗi chiếc lại khác nhau?',
      'Đó là nhờ hoạt động <span class="k">thiết kế</span>.'),
    quiz: [
      { q: 'Những chiếc đồng hồ có hình dạng, màu sắc khác nhau là nhờ:', o: ['Sửa chữa', 'Thiết kế', 'Bảo dưỡng', 'May mắn'], a: 1, why: 'Người thiết kế tạo ra hình dạng, màu sắc cho từng sản phẩm.' },
      { q: 'Sản phẩm được thiết kế ra để đáp ứng … của con người.', o: ['nhu cầu', 'tác hại', 'nỗi buồn', 'bệnh tật'], a: 0, why: 'Thiết kế nhằm làm ra sản phẩm đáp ứng nhu cầu của con người.' } ] },
  { id: 't2', name: 'Thiết kế là gì?', tip: 'Muốn có sản phẩm, phải thiết kế trước tiên!',
    html: S4('Tìm hiểu: thiết kế có vai trò gì?',
      'Thiết kế là hoạt động <span class="k">đầu tiên</span> để tạo ra sản phẩm công nghệ.',
      'Thứ tự: <b>thiết kế → sản xuất → sử dụng → bảo dưỡng, sửa chữa</b>.',
      'Thiết kế cần sự <span class="k">sáng tạo</span> của con người.'),
    quiz: [
      { q: 'Hoạt động đầu tiên khi tạo ra sản phẩm công nghệ là:', o: ['Sản xuất', 'Sử dụng', 'Sửa chữa', 'Thiết kế'], a: 3, why: 'Phải thiết kế trước rồi mới sản xuất được sản phẩm.' },
      { q: 'Sau khi thiết kế, sản phẩm được đưa đi:', o: ['Sửa chữa', 'Bảo dưỡng', 'Sản xuất', 'Vứt bỏ'], a: 2, why: 'Thiết kế xong thì sản xuất, rồi mới sử dụng và bảo dưỡng.' } ] },
  { id: 't3', name: '4 bước thiết kế', tip: 'Ý tưởng → phác thảo → làm mẫu → đánh giá. Nhớ nhé!',
    html: S4('Ghi nhớ 4 bước chính khi thiết kế sản phẩm.',
      '<b>1.</b> Hình thành <span class="k">ý tưởng</span>. <b>2.</b> Vẽ <span class="k">phác thảo</span>, chọn vật liệu, dụng cụ.',
      '<b>3.</b> Làm <span class="k">sản phẩm mẫu</span>. <b>4.</b> <span class="k">Đánh giá</span>, hoàn thiện.',
      'Đi đúng thứ tự, sản phẩm sẽ đẹp và dùng tốt.'),
    quiz: [
      { q: 'Bước đầu tiên khi thiết kế một sản phẩm là:', o: ['Làm sản phẩm mẫu', 'Hình thành ý tưởng', 'Đánh giá sản phẩm', 'Sơn màu'], a: 1, why: 'Phải có ý tưởng trước rồi mới phác thảo và làm.' },
      { q: 'Làm xong sản phẩm mẫu, bước tiếp theo là:', o: ['Hình thành ý tưởng', 'Vẽ phác thảo', 'Bán ngay', 'Đánh giá, hoàn thiện'], a: 3, why: 'Bước cuối là đánh giá rồi hoàn thiện sản phẩm.' } ] },
  { id: 't4', name: 'Túi đựng bút của An', tip: 'Áp dụng 4 bước vào chiếc túi đựng bút của bạn An nào!',
    html: S4('Xem bạn An thiết kế túi vải đựng bút, thước.',
      'Ý tưởng: túi đựng bút cho <b>gọn</b>; phác thảo túi <b>2 ngăn</b>, chọn vải, kéo, kim chỉ.',
      'Làm mẫu: <b>cắt, khâu, dán</b> thành túi.',
      'Đánh giá: bỏ thử bút vào, <span class="k">khâu lại</span> chỗ chưa chắc.'),
    quiz: [
      { q: 'An vẽ hình chiếc túi 2 ngăn, chọn vải, kéo. Đó là bước:', o: ['Phác thảo, chọn vật liệu', 'Hình thành ý tưởng', 'Làm sản phẩm mẫu', 'Đánh giá'], a: 0, why: 'Vẽ hình và chọn vật liệu, dụng cụ là bước phác thảo.' },
      { q: 'An bỏ thử bút vào túi, khâu lại chỗ chưa chắc. Đó là bước:', o: ['Hình thành ý tưởng', 'Phác thảo', 'Đánh giá, hoàn thiện', 'Làm mẫu'], a: 2, why: 'Thử và sửa cho tốt hơn là đánh giá, hoàn thiện sản phẩm.' } ] },
  { id: 't5', name: 'Nhà thiết kế nhí', tip: 'Em cũng là nhà thiết kế! Nghĩ một ý tưởng thật hay nào!',
    html: S4('Nghĩ ý tưởng một đồ dùng học tập em muốn làm.',
      'VD: hộp bút, giá sách mini, thước kẻ hình con vật.',
      'Vẽ phác thảo, kể vật liệu và dụng cụ cần dùng.',
      'Thiết kế cần <span class="k">sáng tạo</span> và đi đúng <b>4 bước</b>.'),
    quiz: [
      { q: 'Ở bước vẽ phác thảo, em cần làm thêm việc gì?', o: ['Bán sản phẩm', 'Chọn vật liệu, dụng cụ', 'Sửa chữa', 'Đóng gói'], a: 1, why: 'Vẽ phác thảo đi cùng với lựa chọn vật liệu và dụng cụ.' },
      { q: 'Ý nào SAI?', o: ['Thiết kế cần sáng tạo', 'Thiết kế có 4 bước chính', 'Phác thảo xong làm hàng loạt luôn', 'Thiết kế là hoạt động đầu tiên'], a: 2, why: 'Phải làm mẫu và đánh giá trước, không sản xuất ngay.' } ] },
];

const KEY = [
  'Sản phẩm khác nhau<br>nhờ <b>thiết kế</b>.',
  'Thiết kế là hoạt động<br><b>đầu tiên</b>, cần <b>sáng tạo</b>.',
  '<b>Ý tưởng → Phác thảo</b><br><b>→ Làm mẫu → Đánh giá</b>.',
  'Làm mẫu xong phải<br><b>thử</b> và <b>hoàn thiện</b>.',
  'Em cũng là<br><b>nhà thiết kế nhí</b>!',
];
