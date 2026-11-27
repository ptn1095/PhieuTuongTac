/* ===== BÀI 8: ĐỊNH DẠNG VĂN BẢN TRÊN TRANG CHIẾU ===== */
const META = { key: 'bai8', num: 8, theme: 'mausac', ic: '🎨', cd: 5, en: 'Định dạng văn bản trên trang chiếu',
  title: 'Bài 8. Định dạng văn bản trên trang chiếu', big: 'Định dạng<br>văn bản<br>trên trang chiếu',
  st2: 'Chủ đề 5 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Chào mừng đến thế giới màu sắc! Cùng tô điểm chữ trên trang chiếu nhé!',
  cert: 'Tin học 4 – Bài 8. Định dạng văn bản trên trang chiếu', file: 'Tin4_Bai8', pass: 8 };

const fmtBtn = (x, y, t, st = '', c = '#fff') => `<rect x="${x}" y="${y}" width="60" height="60" rx="12" fill="${c}" ${ST}/><text x="${x + 30}" y="${y + 42}" text-anchor="middle" font-size="36" fill="${O}" font-family="Inter,sans-serif" font-weight="900" ${st}>${t}</text>`;
const COVER = () => svgC(`${slide(40, 40, 360, 220, '#fff', `${txt(220, 120, 'Mùa xuân', 48, '#FF006E')}<text x="220" y="190" text-anchor="middle" font-size="34" fill="#1982C4" font-family="Inter" font-weight="900" font-style="italic">đẹp quá!</text>`)}${fmtBtn(440, 60, 'B')}${fmtBtn(510, 60, 'I', 'font-style="italic"')}${fmtBtn(440, 140, 'U', 'text-decoration="underline"')}${G(540, 170, 1, `<rect x="-30" y="-30" width="60" height="60" rx="12" fill="#fff" ${ST}/><text x="0" y="8" text-anchor="middle" font-size="30" fill="${O}" ${F}>A</text><rect x="-20" y="14" width="40" height="8" fill="#FF006E"/>`)}${star(560, 320, 14, '#FFD60A')}`);
const ILL_T = {
  t1: () => svg(`${slide(60, 40, 480, 240, '#fff', `<rect x="120" y="110" width="360" height="70" fill="#8ECAE6" opacity=".6"/>${txt(300, 160, 'Trường em', 44)}${cursor(470, 170, .8)}`)}
    ${pillS(60, 320, 480, 54, '#1982C4', 'Chọn chữ trước khi định dạng', 24)}`),
  t2: () => svg(`${txt(150, 110, 'Aa', 40)}${txt(300, 120, 'Aa', 64)}${txt(470, 130, 'Aa', 90)}
    ${pillS(40, 190, 250, 50, '#FF7F11', 'Phông: Arial', 22)}${pillS(310, 190, 250, 50, '#8338EC', 'Cỡ chữ: 40', 22)}${pillS(60, 320, 480, 54, '#2DA44E', 'Đổi phông, cỡ chữ', 26)}`),
  t3: () => svg(`${fmtBtn(80, 70, 'B')}${fmtBtn(170, 70, 'I', 'font-style="italic"')}${fmtBtn(260, 70, 'U', 'text-decoration="underline"')}
    ${['#E5383B', '#FF7F11', '#FFC300', '#2DA44E', '#1982C4', '#8338EC'].map((c, i) => `<rect x="${360 + (i % 3)*64}" y="${60 + Math.floor(i/3)*64}" width="52" height="52" rx="10" fill="${c}" ${ST}/>`).join('')}
    ${txt(300, 250, 'Đậm – Nghiêng – Gạch chân', 30)}${pillS(60, 320, 480, 54, '#FF006E', 'Kiểu chữ và màu chữ', 26)}`),
  t4: () => svg(`${[0, 1, 2].map(i => { const x0 = 50 + i*180; return `<rect x="${x0}" y="60" width="150" height="150" rx="12" fill="#fff" ${ST}/>` + [100, 70, 86].map((w, k) => `<rect x="${[x0 + 18, x0 + 75 - w/2, x0 + 132 - w][i]}" y="${90 + k*34}" width="${w}" height="14" rx="7" fill="${['#1982C4', '#FF7F11', '#2DA44E'][i]}"/>`).join(''); }).join('')}
    ${pillS(40, 230, 150, 46, '#1982C4', 'Trái', 22)}${pillS(225, 230, 150, 46, '#FF7F11', 'Giữa', 22)}${pillS(410, 230, 150, 46, '#2DA44E', 'Phải', 22)}${pillS(110, 320, 380, 54, '#8338EC', 'Căn lề đoạn văn', 26)}`),
  t5: () => svg(`${vflow([['#1982C4', 'Chọn chữ'], ['#FF7F11', 'Phông, cỡ, màu'], ['#8338EC', 'Đậm, nghiêng, căn lề']], 140, 40, 320, 110, 24)}${star(60, 60, 14, '#FFD60A')}`),
};

const TOPICS = [
  { id: 't1', name: 'Chọn văn bản', tip: 'Muốn tô màu chữ nào – phải chọn chữ đó trước!',
    html: S4Q(['Làm cho tiêu đề <b>Trường em</b> nổi bật. Việc đầu tiên là gì?', ''],
      ['Chọn văn bản bằng cách nào?', '<b>Kéo thả chuột</b> từ đầu đến cuối phần chữ cần chọn.'],
      ['Chữ được chọn trông thế nào?', 'Có <b>nền màu xanh nhạt</b> phía sau.'],
      ['Định dạng phải <span class="k">chọn chữ</span> trước.', 'Kéo thả chuột để <b>chọn</b>.', 'Chữ được chọn có <b>nền xanh</b>.']),
    quiz: [
      { q: 'Muốn định dạng một đoạn chữ, việc đầu tiên là:', o: ['Tắt máy', 'Chọn đoạn chữ đó', 'Lưu bài', 'Trình chiếu'], a: 1, why: 'Phải chọn chữ trước rồi mới định dạng.' },
      { q: 'Để chọn một dòng chữ, em:', o: ['Nháy đúp màn hình nền', 'Nhấn F5', 'Kéo thả chuột qua dòng chữ', 'Nhấn Delete'], a: 2, why: 'Kéo thả chuột qua phần chữ để chọn.' } ] },
  { id: 't2', name: 'Phông chữ và cỡ chữ', tip: 'Cỡ chữ to thì người ngồi cuối lớp cũng đọc được!',
    html: S4Q(['Đổi <b>phông chữ</b> và làm tiêu đề <b>to hơn</b>.', ''],
      ['Đổi phông chữ ở đâu?', 'Dải <b>Home</b> → ô <b>Font</b> (phông chữ), chọn phông em thích.'],
      ['Đổi cỡ chữ ở đâu?', 'Ô <b>Font Size</b> bên cạnh, chọn số càng lớn chữ càng to.'],
      ['Ô <b>Font</b>: đổi phông.', 'Ô <span class="k">Font Size</span>: đổi cỡ.', 'Tiêu đề nên <b>to, rõ</b>.']),
    quiz: [
      { q: 'Muốn chữ to hơn, em thay đổi:', o: ['Cỡ chữ (Font Size)', 'Màu nền', 'Bố cục', 'Tên tệp'], a: 0, why: 'Cỡ chữ càng lớn thì chữ càng to.' },
      { q: 'Ô Font dùng để:', o: ['Lưu bài', 'Thêm trang', 'Xoá chữ', 'Chọn phông chữ'], a: 3, why: 'Font là phông chữ.' } ] },
  { id: 't3', name: 'Kiểu chữ và màu chữ', tip: 'B đậm, I nghiêng, U gạch chân – nhớ nhé!',
    html: S4Q(['Làm chữ <b>đậm</b>, <i>nghiêng</i> và đổi <b>màu</b> cho đẹp.', ''],
      ['Các nút B, I, U có tác dụng gì?', '<b>B</b>: đậm; <b>I</b>: nghiêng; <b>U</b>: gạch chân.'],
      ['Đổi màu chữ bằng nút nào?', 'Nút <b>chữ A có gạch màu</b> (Font Color), chọn màu.'],
      ['<b>B</b> đậm, <i>I</i> nghiêng, <u>U</u> gạch chân.', '<span class="k">Font Color</span>: màu chữ.', 'Màu chữ <b>nổi trên nền</b>.']),
    quiz: [
      { q: 'Nút B dùng để làm chữ:', o: ['Nghiêng', 'Gạch chân', 'Đậm', 'To hơn'], a: 2, why: 'B (Bold) làm chữ đậm.' },
      { q: 'Nút I dùng để làm chữ:', o: ['Nghiêng', 'Đậm', 'Gạch chân', 'Đổi màu'], a: 0, why: 'I (Italic) làm chữ nghiêng.' } ] },
  { id: 't4', name: 'Căn lề văn bản', tip: 'Tiêu đề thường căn giữa cho cân đối!',
    html: S4Q(['Căn tiêu đề vào <b>giữa</b> trang chiếu.', ''],
      ['Có những kiểu căn lề nào?', 'Căn <b>trái</b>, căn <b>giữa</b>, căn <b>phải</b>, căn <b>đều hai bên</b>.'],
      ['Tiêu đề nên căn thế nào?', 'Thường căn <b>giữa</b> cho cân đối, đẹp mắt.'],
      ['Căn <b>trái, giữa, phải</b>, đều.', 'Tiêu đề: <span class="k">căn giữa</span>.', 'Nút căn lề ở dải <b>Home</b>.']),
    quiz: [
      { q: 'Tiêu đề trang chiếu thường được căn:', o: ['Trái', 'Phải', 'Đều hai bên', 'Giữa'], a: 3, why: 'Căn giữa giúp tiêu đề cân đối.' },
      { q: 'Các nút căn lề nằm ở dải lệnh:', o: ['Home', 'File', 'Transitions', 'View'], a: 0, why: 'Nút căn lề nằm trong nhóm Paragraph của dải Home.' } ] },
  { id: 't5', name: 'Trang chiếu thật đẹp', tip: 'Ôn lại: chọn chữ – phông, cỡ, màu – kiểu – căn lề!',
    html: S4Q(['Trang trí trang “<b>Gia đình em</b>” thật đẹp, dễ đọc.', ''],
      ['Em định dạng tiêu đề thế nào?', 'Cỡ <b>to</b>, chữ <b>đậm</b>, màu nổi, <b>căn giữa</b>.'],
      ['Không nên làm gì?', 'Dùng <b>quá nhiều màu</b>, chữ quá nhỏ, khó đọc.'],
      ['Chọn chữ rồi <b>định dạng</b>.', 'Tiêu đề <span class="k">to, đậm, căn giữa</span>.', 'Màu sắc <b>hài hoà</b>, dễ đọc.']),
    quiz: [
      { q: 'Trang chiếu đẹp, dễ đọc nên có:', o: ['Rất nhiều màu sặc sỡ', 'Màu hài hoà, chữ rõ ràng', 'Chữ thật nhỏ', 'Không có tiêu đề'], a: 1, why: 'Màu hài hoà, chữ rõ giúp dễ đọc.' },
      { q: 'Nút U dùng để:', o: ['Làm chữ đậm', 'Đổi màu', 'Gạch chân chữ', 'Căn giữa'], a: 2, why: 'U (Underline) gạch chân chữ.' } ] },
];

const KEY = [
  'Phải <b>chọn chữ</b><br>trước.',
  'Font và<br><b>Font Size</b>.',
  '<b>B</b> đậm, <b>I</b> nghiêng,<br><b>U</b> gạch chân.',
  'Tiêu đề<br><b>căn giữa</b>.',
  'Màu <b>hài hoà</b>,<br>dễ đọc.',
];
