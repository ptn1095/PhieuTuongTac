/* ===== BÀI 12: TÌM HIỂU VỀ THẾ GIỚI TỰ NHIÊN ===== */
const META = { key: 'bai12', num: 12, theme: 'daiduong', ic: '🦋', cd: 5, en: 'Tìm hiểu về thế giới tự nhiên',
  title: 'Bài 12. Tìm hiểu về thế giới tự nhiên', big: 'Tìm hiểu<br>thế giới<br>tự nhiên',
  st2: 'Chủ đề 5 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Thế giới tự nhiên rộng như đại dương! Máy tính sẽ giúp em khám phá nhé!',
  cert: 'Tin học 3 – Bài 12. Tìm hiểu về thế giới tự nhiên', file: 'Tin3_Bai12', pass: 8 };

const planet = (x, y, r, c, ring) => `${ring ? `<ellipse cx="${x}" cy="${y}" rx="${r*1.8}" ry="${r*.5}" fill="none" stroke="${O}" stroke-width="8"/><ellipse cx="${x}" cy="${y}" rx="${r*1.8}" ry="${r*.5}" fill="none" stroke="#FFD60A" stroke-width="4"/>` : ''}<circle cx="${x}" cy="${y}" r="${r}" fill="${c}" ${ST}/><circle cx="${x - r*.35}" cy="${y - r*.35}" r="${r*.2}" fill="#fff" opacity=".5"/>`;
const rocket = (x, y, s = 1, r = 0) => G(x, y, s, `<g transform="rotate(${r})"><path d="M-14 40 L0 80 L14 40Z" fill="#FF7F11" ${ST}/><path d="M0 -70 Q34 -30 26 40 H-26 Q-34 -30 0 -70Z" fill="#fff" ${ST}/><circle cy="-10" r="12" fill="#8ECAE6" stroke="${O}" stroke-width="5"/><path d="M-26 20 L-46 50 L-24 44Z M26 20 L46 50 L24 44Z" fill="#E5383B" ${ST}/></g>`);
const butterfly = (x, y, s = 1) => G(x, y, s, `<ellipse cx="-34" cy="-20" rx="34" ry="28" fill="#FF7F11" ${ST}/><ellipse cx="34" cy="-20" rx="34" ry="28" fill="#FF7F11" ${ST}/><ellipse cx="-26" cy="22" rx="22" ry="18" fill="#FFC300" ${ST}/><ellipse cx="26" cy="22" rx="22" ry="18" fill="#FFC300" ${ST}/><rect x="-7" y="-40" width="14" height="76" rx="7" fill="#3D405B" ${ST}/>`);
const egg = (x, y, s = 1) => G(x, y, s, `<ellipse rx="22" ry="28" fill="#FFF3BF" ${ST}/>`);
const worm = (x, y, s = 1) => G(x, y, s, `${[-36, -12, 12, 36].map(d => `<circle cx="${d}" cy="0" r="18" fill="#8AC926" ${ST}/>`).join('')}<circle cx="44" cy="-6" r="4" fill="${O}"/>`);
const pupa = (x, y, s = 1) => G(x, y, s, `<path d="M0 -44 Q30 0 0 44 Q-30 0 0 -44Z" fill="#B5838D" ${ST}/>`);
const COVER = () => svgC(`${planet(140, 160, 60, '#FF7F11', true)}${rocket(300, 160, .8, 30)}${butterfly(470, 150, 1)}${star(560, 310, 14, '#FFD60A')}${star(40, 40, 12, '#FF006E')}`);
const ILL_T = {
  t1: () => svg(`${monitor(140, 50, 320, 200, `${planet(230, 150, 40, '#FFC300')}${planet(380, 130, 30, '#3A8DFF')}${butterfly(330, 200, .4)}`, '#1B2A49')}
    ${pillS(60, 330, 480, 54, '#2DA44E', 'Máy tính giúp em quan sát', 24)}`),
  t2: () => svg(`<rect x="20" y="20" width="560" height="290" rx="20" fill="#1B2A49" ${ST}/>${planet(470, 120, 60, '#E9C46A')}${planet(130, 230, 30, '#FF7F11')}${rocket(250, 170, .9, 60)}
    ${[[380, 240], [330, 70]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="20" fill="#868E96" ${ST}/>`).join('')}${star(80, 60, 10, '#fff')}${star(560, 270, 10, '#fff')}
    ${pillS(60, 335, 480, 54, '#8338EC', 'Lái tên lửa, né thiên thạch', 24)}`),
  t3: () => svg(`${planet(110, 160, 70, '#FFC300')}${planet(300, 160, 40, '#E9C46A')}${planet(460, 160, 56, '#FF7F11', true)}
    ${pillS(20, 300, 180, 46, '#FF7F11', 'Mặt Trời', 22)}${pillS(210, 300, 180, 46, '#E9C46A', 'Sao Kim', 22, 0, O)}${pillS(400, 300, 180, 46, '#8338EC', 'Sao Mộc', 22)}`),
  t4: () => svg(`${egg(80, 150, 1)}${arr(115, 150, 165, 150, O, 6)}${worm(240, 150, .9)}${arr(300, 150, 350, 150, O, 6)}${pupa(390, 150, 1)}${arr(420, 150, 460, 150, O, 6)}${butterfly(520, 150, .8)}
    ${pillS(10, 230, 140, 44, '#FFC300', 'Trứng', 20, 0, O)}${pillS(160, 230, 150, 44, '#2DA44E', 'Sâu', 20)}${pillS(320, 230, 130, 44, '#B5838D', 'Nhộng', 20)}${pillS(460, 230, 130, 44, '#FF7F11', 'Bướm', 20)}
    ${pillS(110, 330, 380, 50, '#1982C4', 'Vòng đời của bướm', 24)}`),
  t5: () => svg(`${vflow([['#1982C4', 'Mở phần mềm'], ['#8338EC', 'Quan sát, khám phá'], ['#2DA44E', 'Kể lại cho bạn']], 150, 40, 300, 110, 26)}${star(60, 60, 14, '#FFD60A')}`),
};

const TOPICS = [
  { id: 't1', name: 'Máy tính giúp em quan sát', tip: 'Ngồi tại lớp mà vẫn ngắm được cả vũ trụ!',
    html: S4Q(['Em muốn ngắm <b>các hành tinh</b>, nhưng không bay vào vũ trụ được. Làm sao?', ''],
      ['Máy tính giúp gì cho việc tìm hiểu tự nhiên?', 'Có <b>phần mềm</b> cho em xem hình ảnh, video, mô phỏng sinh động.'],
      ['Ngoài vũ trụ, em có thể tìm hiểu gì?', 'Cây cối, <b>con vật</b>, vòng đời côn trùng…'],
      ['Phần mềm giúp em <span class="k">quan sát</span>.', 'Hình ảnh, video <b>sinh động</b>.', 'Thấy được điều <b>khó nhìn thấy</b>.']),
    quiz: [
      { q: 'Phần mềm máy tính giúp em tìm hiểu thế giới tự nhiên bằng:', o: ['Hình ảnh, mô phỏng sinh động', 'Tiếng ồn', 'Chỉ con số', 'Không giúp gì'], a: 0, why: 'Phần mềm có hình ảnh, video, mô phỏng sinh động.' },
      { q: 'Nhờ máy tính, em có thể quan sát:', o: ['Bên trong ổ điện', 'Các hành tinh trong Hệ Mặt Trời', 'Nhà của người lạ', 'Mật khẩu của bạn'], a: 1, why: 'Phần mềm mô phỏng giúp em quan sát Hệ Mặt Trời.' } ] },
  { id: 't2', name: 'Kích hoạt phần mềm', tip: 'Nháy đúp vào biểu tượng là phần mềm mở ra!',
    html: S4Q(['Mở phần mềm, điều khiển <b>tên lửa</b> bay vào vũ trụ.', 'Gợi ý: nháy chuột để tên lửa né thiên thạch.'],
      ['Mở phần mềm bằng cách nào?', '<b>Nháy đúp</b> vào biểu tượng phần mềm trên màn hình nền.'],
      ['Khi chơi, em điều khiển tên lửa thế nào?', 'Dùng <b>chuột</b> để tên lửa <b>tránh thiên thạch</b> và về đích.'],
      ['<span class="k">Nháy đúp</span> để mở phần mềm.', 'Dùng chuột <b>điều khiển</b>.', 'Về đích để xem <b>hành tinh</b>.']),
    quiz: [
      { q: 'Để mở phần mềm trên màn hình nền, em:', o: ['Nhấn phím cách', 'Rút điện', 'Nháy đúp vào biểu tượng', 'Tắt màn hình'], a: 2, why: 'Nháy đúp vào biểu tượng để mở phần mềm.' },
      { q: 'Trong trò chơi, tên lửa cần tránh:', o: ['Mặt Trời', 'Ngôi sao', 'Đích đến', 'Thiên thạch'], a: 3, why: 'Tên lửa phải né thiên thạch để về đích.' } ] },
  { id: 't3', name: 'Khám phá Hệ Mặt Trời', tip: 'Sao Mộc là hành tinh lớn nhất Hệ Mặt Trời đấy!',
    html: S4Q(['Quan sát <b>Sao Kim</b> và <b>Sao Mộc</b> trong phần mềm.', ''],
      ['Hệ Mặt Trời có Mặt Trời ở đâu?', 'Ở <b>chính giữa</b>, các hành tinh quay quanh Mặt Trời.'],
      ['Hành tinh nào lớn nhất?', '<b>Sao Mộc</b> là hành tinh lớn nhất Hệ Mặt Trời.'],
      ['<b>Mặt Trời</b> ở giữa.', 'Các hành tinh <span class="k">quay quanh</span> Mặt Trời.', '<b>Sao Mộc</b> lớn nhất.']),
    quiz: [
      { q: 'Hành tinh lớn nhất trong Hệ Mặt Trời là:', o: ['Sao Mộc', 'Trái Đất', 'Sao Kim', 'Sao Hoả'], a: 0, why: 'Sao Mộc là hành tinh lớn nhất.' },
      { q: 'Các hành tinh trong Hệ Mặt Trời quay quanh:', o: ['Mặt Trăng', 'Mặt Trời', 'Sao Kim', 'Trái Đất'], a: 1, why: 'Các hành tinh đều quay quanh Mặt Trời.' } ] },
  { id: 't4', name: 'Vòng đời của bướm', tip: 'Con sâu bé xíu sẽ hoá thành bướm xinh!',
    html: S4Q(['Xem phần mềm, sắp xếp các giai đoạn <b>vòng đời của bướm</b>.', ''],
      ['Vòng đời của bướm gồm những giai đoạn nào?', '<b>Trứng</b> → <b>sâu</b> → <b>nhộng</b> → <b>bướm</b>.'],
      ['Phần mềm giúp em hiểu điều này thế nào?', 'Xem được cả quá trình <b>rất nhanh</b>, dù ngoài đời mất nhiều ngày.'],
      ['Trứng → sâu → <b>nhộng</b> → bướm.', 'Phần mềm giúp xem <span class="k">cả quá trình</span>.', 'Học tự nhiên <b>vui, dễ nhớ</b>.']),
    quiz: [
      { q: 'Thứ tự đúng trong vòng đời của bướm là:', o: ['Bướm – sâu – trứng – nhộng', 'Sâu – trứng – bướm – nhộng', 'Nhộng – bướm – sâu – trứng', 'Trứng – sâu – nhộng – bướm'], a: 3, why: 'Bướm đẻ trứng, trứng nở thành sâu, sâu hoá nhộng, nhộng thành bướm.' },
      { q: 'Giai đoạn ngay trước khi thành bướm là:', o: ['Trứng', 'Sâu', 'Nhộng', 'Hạt'], a: 2, why: 'Nhộng hoá thành bướm.' } ] },
  { id: 't5', name: 'Kể chuyện khám phá', tip: 'Ôn lại: mở phần mềm – quan sát – kể lại!',
    html: S4Q(['Kể với bạn điều thú vị em vừa <b>khám phá</b>.', ''],
      ['Em đã khám phá được những gì?', 'Hệ Mặt Trời, các hành tinh, <b>vòng đời của bướm</b>.'],
      ['Ngoài phần mềm, còn cách nào tìm hiểu?', 'Xem <b>sách</b>, quan sát <b>thực tế</b>, hỏi thầy cô.'],
      ['Máy tính giúp em <b>khám phá</b>.', 'Quan sát rồi <span class="k">kể lại</span>.', 'Yêu thiên nhiên, <b>ham học hỏi</b>.']),
    quiz: [
      { q: 'Sau khi khám phá bằng phần mềm, em nên:', o: ['Kể lại cho bạn nghe', 'Quên ngay', 'Xoá phần mềm', 'Tắt điện'], a: 0, why: 'Kể lại giúp em nhớ lâu và chia sẻ với bạn.' },
      { q: 'Máy tính giúp em học về tự nhiên vì:', o: ['Có nhiều tiếng ồn', 'Có hình ảnh, mô phỏng sinh động', 'Làm thay em', 'Không cần suy nghĩ'], a: 1, why: 'Hình ảnh, mô phỏng giúp em hiểu nhanh, dễ nhớ.' } ] },
];

const KEY = [
  'Phần mềm giúp<br><b>quan sát</b>.',
  '<b>Nháy đúp</b><br>để mở phần mềm.',
  'Hành tinh quay<br>quanh <b>Mặt Trời</b>.',
  'Trứng → sâu →<br>nhộng → <b>bướm</b>.',
  'Khám phá<br>rồi <b>kể lại</b>.',
];
