/* ===== BÀI 4: THIẾT KẾ SẢN PHẨM ===== */
const META = { key: 'bai4', num: 4, title: 'Bài 4. Thiết kế sản phẩm', big: 'THIẾT KẾ<br>SẢN PHẨM',
  st2: 'Công nghệ 5 • 5 hoạt động • 10 câu đố • nhận giấy chứng nhận',
  hello: 'Hôm nay mình cùng thiết kế chong chóng và đồng hồ đồ chơi nhé!',
  cert: 'CÔNG NGHỆ 5 – BÀI 4: THIẾT KẾ SẢN PHẨM', file: 'CN5_Bai4', pass: 8 };

const ILL_T = {
  t1: () => svg(`${pinwheel(170, 150, .9)}${watch(430, 200, .9, '#8338EC')}
    ${pillS(40, 350, 240, 44, '#FF006E', 'Chong chóng', 24)}${pillS(330, 350, 240, 44, '#8338EC', 'Đồng hồ giấy', 24)}${star(300, 60, 16, '#FFD60A')}`),
  t2: () => svg(`${paper(30, 30, 250, 260, `${pinwheel(155, 140, .55)}`)}
    <rect x="330" y="50" width="120" height="120" rx="8" fill="#FFD60A" ${ST}/><rect x="460" y="70" width="110" height="110" rx="8" fill="#FF8FAB" ${ST}/>
    ${scissors(360, 260, .6)}${glue(520, 250, .8)}${pencil(320, 340, .5, 0)}${pillS(30, 350, 250, 44, '#1982C4', 'Vật liệu, dụng cụ', 22)}`),
  t3: () => svg(`${ball(70, 70, 28, '#FF7F11', 1, 26)}${pillS(110, 48, 200, 44, '#FF7F11', 'Mặt đồng hồ', 22)}
    ${ball(70, 150, 28, '#1982C4', 2, 26)}${pillS(110, 128, 200, 44, '#1982C4', 'Dây đeo, viền', 22)}
    ${ball(70, 230, 28, '#2DA44E', 3, 26)}${pillS(110, 208, 200, 44, '#2DA44E', 'Kim giờ, phút', 22)}
    ${ball(70, 310, 28, '#8338EC', 4, 26)}${pillS(110, 288, 200, 44, '#8338EC', 'Lắp ráp', 22)}
    ${watch(460, 210, 1.05, '#FF006E')}`),
  t4: () => svg(`${pinwheel(130, 130, .75)}
    ${tick(270, 60, .7)}${pillS(300, 38, 280, 44, '#2DA44E', 'Đúng hình dạng', 22)}${tick(270, 140, .7)}${pillS(300, 118, 280, 44, '#1982C4', 'Chắc chắn', 22)}
    ${tick(270, 220, .7)}${pillS(300, 198, 280, 44, '#FF7F11', 'Đẹp, cân đối', 22)}${tick(270, 300, .7)}${pillS(300, 278, 280, 44, '#8338EC', 'Quay đều', 22)}
    ${star(60, 380, 14, '#FFD60A')}`),
  t5: () => svg(`<rect x="30" y="250" width="540" height="40" rx="12" fill="#C68B59" ${ST}/>${pinwheel(140, 120, .6)}${watch(300, 160, .6, '#2DA44E')}${pinwheel(460, 120, .6)}
    ${pillS(150, 330, 300, 46, '#FF006E', 'Triển lãm đồ chơi', 24)}${star(40, 40, 14, '#FFD60A')}${star(560, 40, 14, '#8338EC')}`),
};

const TOPICS = [
  { id: 't1', name: 'Đồ chơi tự làm', tip: 'Đồ chơi tự làm vừa vui vừa tiết kiệm!',
    html: S4Q(['Kể tên đồ chơi em có thể <b>tự làm bằng giấy</b>.', ''],
      ['Hôm nay ta làm đồ chơi gì?', 'Chong chóng 4 cánh và đồng hồ đồ chơi.'],
      ['Làm theo cách nào?', 'Theo đúng 4 bước thiết kế.'],
      ['Tự làm <b>đồ chơi</b> từ giấy.', 'Theo <b>4 bước</b> thiết kế.', 'Vừa vui vừa <span class="k">sáng tạo</span>.']),
    quiz: [
      { q: 'Thiết kế chong chóng, bước đầu tiên là:', o: ['Làm sản phẩm mẫu', 'Đánh giá', 'Hình thành ý tưởng', 'Thổi thử'], a: 2, why: 'Thiết kế nào cũng bắt đầu từ ý tưởng.' },
      { q: 'Bước cuối cùng khi thiết kế sản phẩm là:', o: ['Đánh giá, hoàn thiện', 'Vẽ phác thảo', 'Chọn vật liệu', 'Hình thành ý tưởng'], a: 0, why: 'Sau khi làm mẫu thì đánh giá và hoàn thiện sản phẩm.' } ] },
  { id: 't2', name: 'Phác thảo & vật liệu', tip: 'Vẽ phác thảo giúp em thấy trước sản phẩm sẽ trông thế nào!',
    html: S4Q(['Vẽ <b>phác thảo</b> chong chóng, chọn vật liệu.', ''],
      ['Cần vật liệu và dụng cụ gì?', 'Giấy bìa màu, que tre; kéo, keo, thước, bút chì.'],
      ['Vì sao cần phác thảo trước?', 'Để hình dung rõ sản phẩm trước khi làm.'],
      ['<b>Phác thảo</b> trước khi làm.', 'Chọn <b>vật liệu, dụng cụ</b>.', 'Dùng kéo <span class="k">cẩn thận</span>.']),
    quiz: [
      { q: 'Bước vẽ phác thảo giúp em:', o: ['Bán được sản phẩm', 'Hình dung rõ sản phẩm', 'Không cần làm mẫu', 'Sản phẩm tự quay'], a: 1, why: 'Phác thảo cho em thấy hình dạng sản phẩm trước khi làm.' },
      { q: 'Vật liệu nào KHÔNG cần để làm đồng hồ giấy?', o: ['Giấy bìa', 'Keo dán', 'Màu vẽ', 'Xi măng'], a: 3, why: 'Đồng hồ giấy làm từ giấy bìa, keo, màu – không cần xi măng.' } ] },
  { id: 't3', name: 'Làm sản phẩm mẫu', tip: 'Làm từng bộ phận rồi mới lắp ráp – thật gọn gàng!',
    html: S4Q(['Làm <b>đồng hồ đồ chơi</b> bằng giấy bìa.', ''],
      ['Hai bước đầu làm đồng hồ là gì?', '1. Làm mặt đồng hồ. 2. Làm dây đeo, viền khung.'],
      ['Hai bước sau là gì?', '3. Làm kim giờ, kim phút. 4. Lắp ráp các bộ phận.'],
      ['Làm <b>từng bộ phận</b>.', 'Rồi <b>lắp ráp</b>.', 'Xong <span class="k">dọn sạch chỗ ngồi</span>.']),
    quiz: [
      { q: 'Làm đồng hồ giấy, việc làm CUỐI CÙNG là:', o: ['Làm mặt đồng hồ', 'Làm kim', 'Làm dây đeo', 'Lắp ráp các bộ phận'], a: 3, why: 'Làm xong từng bộ phận mới lắp ráp thành đồng hồ.' },
      { q: 'Làm đồng hồ giấy, việc làm ĐẦU TIÊN là:', o: ['Làm mặt đồng hồ', 'Lắp ráp', 'Làm kim', 'Tô màu dây'], a: 0, why: 'Đầu tiên làm mặt đồng hồ, sau đó mới làm dây, kim, lắp ráp.' } ] },
  { id: 't4', name: 'Đánh giá sản phẩm', tip: 'Thử, xem, sửa – sản phẩm sẽ tốt hơn mỗi lần!',
    html: S4Q(['<b>Đánh giá</b> sản phẩm theo tiêu chí.', ''],
      ['Sản phẩm tốt cần đạt gì?', 'Đúng thiết kế; chắc chắn; đẹp, cân đối.'],
      ['Chong chóng đạt yêu cầu khi nào?', 'Đủ bộ phận, quay đều khi thổi.'],
      ['Đúng <b>thiết kế</b>, chắc chắn.', '<b>Đẹp, cân đối</b>.', 'Chưa đạt thì <span class="k">sửa lại</span>.']),
    quiz: [
      { q: 'Chong chóng quay không đều. Em nên:', o: ['Vứt đi', 'Chỉnh lại cánh cho cân đối', 'Thêm thật nhiều keo', 'Để nguyên'], a: 1, why: 'Cánh cân đối thì chong chóng sẽ quay đều.' },
      { q: 'Tiêu chí nào KHÔNG dùng để đánh giá đồ chơi?', o: ['Chắc chắn', 'Đẹp, cân đối', 'Càng tốn vật liệu càng tốt', 'Đúng hình dạng'], a: 2, why: 'Sản phẩm tốt là sản phẩm dùng vật liệu tiết kiệm, hợp lí.' } ] },
  { id: 't5', name: 'Triển lãm đồ chơi', tip: 'Giới thiệu sản phẩm thật tự tin nhé, nhà thiết kế nhí!',
    html: S4Q(['Trưng bày và <b>giới thiệu</b> sản phẩm của em.', ''],
      ['Giới thiệu sản phẩm gồm những gì?', 'Tên, vật liệu, các bước đã làm.'],
      ['Nhận góp ý của bạn rồi làm gì?', 'Ghi lại, chỉnh sửa cho tốt hơn.'],
      ['Giới thiệu <b>rõ ràng</b>.', 'Nhận xét theo <b>tiêu chí</b>.', 'Ý tưởng → phác thảo → <span class="k">làm mẫu → đánh giá</span>.']),
    quiz: [
      { q: 'Bước nào giúp em biết sản phẩm đạt yêu cầu hay chưa?', o: ['Hình thành ý tưởng', 'Chọn vật liệu', 'Vẽ phác thảo', 'Đánh giá sản phẩm'], a: 3, why: 'Đánh giá theo tiêu chí cho biết sản phẩm đạt hay chưa.' },
      { q: 'Khi dùng kéo để cắt giấy bìa, em cần:', o: ['Cầm kéo chạy nhảy', 'Chĩa kéo vào bạn', 'Cẩn thận, cất gọn sau khi dùng', 'Cắt thật nhanh'], a: 2, why: 'Dùng kéo cẩn thận và cất gọn giúp an toàn cho em và các bạn.' } ] },
];

const KEY = [
  'Làm đồ chơi theo<br><b>4 bước thiết kế</b>.',
  '<b>Phác thảo</b> để hình dung;<br>chọn <b>vật liệu, dụng cụ</b>.',
  'Làm <b>từng bộ phận</b><br>rồi <b>lắp ráp</b>.',
  'Tiêu chí: <b>đúng hình</b>, <b>chắc</b>,<br><b>đẹp</b>, hoạt động tốt.',
  'Tự tin <b>giới thiệu</b><br>sản phẩm của em.',
];
