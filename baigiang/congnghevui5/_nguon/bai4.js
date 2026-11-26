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
    html: S4('Kể tên đồ chơi em có thể tự làm bằng giấy.',
      'Hôm nay: <b>chong chóng 4 cánh</b> và <b>đồng hồ đồ chơi</b>.',
      'Em muốn làm chiếc nào? Vì sao?',
      'Làm theo đúng <span class="k">4 bước thiết kế</span>.'),
    quiz: [
      { q: 'Thiết kế chong chóng, bước đầu tiên là:', o: ['Làm sản phẩm mẫu', 'Đánh giá', 'Hình thành ý tưởng', 'Thổi thử'], a: 2, why: 'Thiết kế nào cũng bắt đầu từ ý tưởng.' },
      { q: 'Bước cuối cùng khi thiết kế sản phẩm là:', o: ['Đánh giá, hoàn thiện', 'Vẽ phác thảo', 'Chọn vật liệu', 'Hình thành ý tưởng'], a: 0, why: 'Sau khi làm mẫu thì đánh giá và hoàn thiện sản phẩm.' } ] },
  { id: 't2', name: 'Phác thảo & vật liệu', tip: 'Vẽ phác thảo giúp em thấy trước sản phẩm sẽ trông thế nào!',
    html: S4('Vẽ phác thảo chong chóng, chọn vật liệu.',
      'Vật liệu: <b>giấy bìa màu</b>, que tre. Dụng cụ: <b>kéo, keo dán, thước, bút chì</b>.',
      'Phác thảo giúp em <b>hình dung</b> rõ sản phẩm trước khi làm.',
      'Dùng kéo cẩn thận, <span class="k">an toàn</span>.'),
    quiz: [
      { q: 'Bước vẽ phác thảo giúp em:', o: ['Bán được sản phẩm', 'Hình dung rõ sản phẩm', 'Không cần làm mẫu', 'Sản phẩm tự quay'], a: 1, why: 'Phác thảo cho em thấy hình dạng sản phẩm trước khi làm.' },
      { q: 'Vật liệu nào KHÔNG cần để làm đồng hồ giấy?', o: ['Giấy bìa', 'Keo dán', 'Màu vẽ', 'Xi măng'], a: 3, why: 'Đồng hồ giấy làm từ giấy bìa, keo, màu – không cần xi măng.' } ] },
  { id: 't3', name: 'Làm sản phẩm mẫu', tip: 'Làm từng bộ phận rồi mới lắp ráp – thật gọn gàng!',
    html: S4('Làm đồng hồ đồ chơi bằng giấy bìa.',
      '<b>1.</b> Làm mặt đồng hồ. <b>2.</b> Làm dây đeo và viền khung.',
      '<b>3.</b> Làm kim giờ, kim phút. <b>4.</b> <span class="k">Lắp ráp</span> các bộ phận.',
      'Làm xong, dọn sạch chỗ ngồi, cất dụng cụ gọn.'),
    quiz: [
      { q: 'Làm đồng hồ giấy, việc làm CUỐI CÙNG là:', o: ['Làm mặt đồng hồ', 'Làm kim', 'Làm dây đeo', 'Lắp ráp các bộ phận'], a: 3, why: 'Làm xong từng bộ phận mới lắp ráp thành đồng hồ.' },
      { q: 'Làm đồng hồ giấy, việc làm ĐẦU TIÊN là:', o: ['Làm mặt đồng hồ', 'Lắp ráp', 'Làm kim', 'Tô màu dây'], a: 0, why: 'Đầu tiên làm mặt đồng hồ, sau đó mới làm dây, kim, lắp ráp.' } ] },
  { id: 't4', name: 'Đánh giá sản phẩm', tip: 'Thử, xem, sửa – sản phẩm sẽ tốt hơn mỗi lần!',
    html: S4('Đánh giá sản phẩm theo tiêu chí.',
      '<b>Đúng hình dạng</b> đã thiết kế; <b>chắc chắn</b>; <b>đẹp, cân đối</b>.',
      'Chong chóng có đủ bộ phận, <b>quay đều</b> khi thổi.',
      'Chưa đạt thì <span class="k">chỉnh sửa</span>, hoàn thiện.'),
    quiz: [
      { q: 'Chong chóng quay không đều. Em nên:', o: ['Vứt đi', 'Chỉnh lại cánh cho cân đối', 'Thêm thật nhiều keo', 'Để nguyên'], a: 1, why: 'Cánh cân đối thì chong chóng sẽ quay đều.' },
      { q: 'Tiêu chí nào KHÔNG dùng để đánh giá đồ chơi?', o: ['Chắc chắn', 'Đẹp, cân đối', 'Càng tốn vật liệu càng tốt', 'Đúng hình dạng'], a: 2, why: 'Sản phẩm tốt là sản phẩm dùng vật liệu tiết kiệm, hợp lí.' } ] },
  { id: 't5', name: 'Triển lãm đồ chơi', tip: 'Giới thiệu sản phẩm thật tự tin nhé, nhà thiết kế nhí!',
    html: S4('Trưng bày và giới thiệu sản phẩm của em.',
      'Kể: tên sản phẩm, vật liệu, các bước đã làm.',
      'Bạn nhận xét theo tiêu chí; em ghi lại để sửa.',
      'Thiết kế sản phẩm: <span class="k">ý tưởng → phác thảo → làm mẫu → đánh giá</span>.'),
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
