/* ===== BÀI 8: LOGIC – LOGIC ===== */
const META = { key: 'logic', num: 8, title: 'Nhóm lệnh Logic', big: 'NHÓM LỆNH<br>LOGIC',
  st2: 'Điều kiện và so sánh — 5 nội dung • 10 câu đố • nhận giấy chứng nhận',
  hello: 'Cùng dạy máy tính biết "nếu… thì…" với nhóm Logic (màu xanh mòng két) nhé!',
  cert: 'NHÓM LỆNH LOGIC – ĐIỀU KIỆN', file: 'Logic', pass: 8 };

const fork = (yes, no) => `<path d="M300 90 V150 M300 150 L160 220 M300 150 L440 220" stroke="${O}" stroke-width="8" fill="none" stroke-linecap="round"/>
  <polygon points="300,40 380,90 300,140 220,90" fill="#459197" stroke="${O}" stroke-width="5"/>${txt(300, 100, '?', 36, '#fff')}
  ${pillS(60, 220, 200, 50, '#2DA44E', yes, 24)}${pillS(340, 220, 200, 50, '#E5383B', no, 24)}`;
const ILL_T = {
  t1: () => svg(`${pillS(60, 60, 220, 70, '#459197', 'true', 36)}${pillS(320, 60, 220, 70, '#459197', 'false', 36)}
    ${txt(170, 190, 'Đúng ✔', 40, '#2DA44E')}${txt(430, 190, 'Sai ✘', 40, '#E5383B')}
    ${pillS(80, 280, 440, 56, '#FF7F11', 'Câu trả lời Có / Không', 26)}${stars([40, 380, 12], [560, 380, 12], [300, 240, 10])}`),
  t2: () => svg(`${VX([...GR(3, 2), ...BOT(0, 0, 0), [2, 0, 0, 'stone']], 160, 260, 40)}
    ${pillS(30, 30, 540, 52, '#459197', 'if gặp đá then phá đá', 24)}${arr(320, 250, 430, 250, '#FF006E', 8)}
    ${VX([...GR(3, 2), ...BOT(0, 0, 0)], 470, 260, 40)}${stars([560, 380, 12], [40, 380, 12])}`),
  t3: () => svg(`${fork('then: ngày', 'else: đêm')}
    ${pillS(150, 320, 300, 52, '#8F6D40', 'is time day', 26)}${stars([60, 60], [540, 60, 12])}`),
  t4: () => svg(`${[['5 &gt; 3', '#2DA44E', 'true'], ['2 = 7', '#E5383B', 'false'], ['4 ≤ 4', '#2DA44E', 'true']].map(([e, c, r], i) => `${pillS(60, 50 + i*100, 220, 66, '#6C6EA0', e, 32)}${txt(310, 95 + i*100, '→', 40)}${pillS(360, 50 + i*100, 180, 66, c, r, 30)}`).join('')}
    ${pillS(70, 350, 460, 48, '#459197', '=  ≠  &lt;  ≤  &gt;  ≥', 28)}`),
  t5: () => svg(`<circle cx="230" cy="190" r="120" fill="#FF006E" opacity=".35" stroke="${O}" stroke-width="5"/><circle cx="370" cy="190" r="120" fill="#1982C4" opacity=".35" stroke="${O}" stroke-width="5"/>
    ${txt(300, 200, 'and', 40, O)}${txt(160, 200, 'A', 40, '#C2185B')}${txt(440, 200, 'B', 40, '#145DA0')}
    ${pillS(40, 340, 160, 50, '#459197', 'and', 28)}${pillS(220, 340, 160, 50, '#459197', 'or', 28)}${pillS(400, 340, 160, 50, '#459197', 'not', 28)}`),
};

const TOPICS = [
  { id: 't1', c: ['#2EC4B6', '#1982C4'], dk: '#145DA0', title: 'Đúng và Sai: true, false',
    tip: 'Khối hình lục giác luôn trả lời true hoặc false!',
    html: `<div class="blocks">${MH('lg', 'true ▾')}${MH('lg', 'false ▾')}${MH('bl', `test for ${PK('stone')} at ${P3('~', 0, -1, 0)}`)}</div><ul>
      <li>Nhóm <span class="k">Logic</span> có màu <b style="color:#459197">xanh mòng két</b>.</li>
      <li><b>true</b> = <span class="k">đúng</span> • <b>false</b> = <span class="k">sai</span>.</li>
      <li>Khối <b>hình lục giác</b> trả về true / false – lắp vào ô lục giác.</li></ul>`,
    quiz: [
      { q: 'Khối có hình lục giác trả về loại giá trị nào?', o: ['Một con số', 'Một vị trí', 'true hoặc false', 'Một loại khối'], a: 2, why: 'Khối lục giác là khối đúng / sai.' },
      { q: '"false" có nghĩa là:', o: ['Sai', 'Đúng', 'Số 10', 'Lặp lại'], a: 0, why: 'false nghĩa là sai.' } ] },
  { id: 't2', c: ['#7AD86F', '#14A0A0'], dk: '#087F5B', title: 'Nếu… thì…: if then',
    tip: 'if giống như "Nếu trời mưa thì mang ô" vậy đó!',
    html: `<div class="blocks">${MC('lg', `if ${MH('ag', `agent detect ${dd('block')} ${dd('forward')}`)} then`, [M('ag', `agent destroy ${dd('forward')}`)])}</div><ul>
      <li><b>if … then</b>: <span class="k">nếu</span> điều kiện đúng <span class="k">thì</span> chạy lệnh bên trong.</li>
      <li>Điều kiện sai → <b>bỏ qua</b>, không làm gì.</li>
      <li>Ví dụ: nếu phía trước có khối thì Agent phá khối.</li></ul>`,
    quiz: [
      { q: 'Điều kiện trong if … then là SAI thì các lệnh bên trong:', o: ['Chạy 2 lần', 'Không được chạy', 'Chạy mãi mãi', 'Báo lỗi'], a: 1, why: 'if chỉ chạy lệnh bên trong khi điều kiện đúng.' },
      { q: 'Ô điều kiện của if nhận khối có hình:', o: ['Tròn', 'Chữ nhật', 'Chữ C', 'Lục giác'], a: 3, why: 'Ô điều kiện nhận khối lục giác true / false.' } ] },
  { id: 't3', c: ['#FFB14E', '#FF5E78'], dk: '#C2255C', title: 'Hai ngả: if then else',
    tip: 'Đúng đi đường này, sai đi đường kia – không bao giờ đứng yên!',
    html: `<div class="blocks">${MIF(MH('ga', `is time ${dd('day')}`), [M('pl', `say ${s('Đi chơi thôi!')}`)], [M('ga', `time set ${dd('day')}`)])}</div><ul>
      <li>Đúng → chạy nhánh <b>then</b> • Sai → chạy nhánh <b>else</b>.</li>
      <li>Luôn có <span class="k">đúng một nhánh</span> được chạy.</li></ul>`,
    quiz: [
      { q: 'Trong chương trình mẫu, nếu đang là ban đêm thì:', o: ['Chat "Đi chơi thôi!"', 'Không làm gì', 'Đổi sang ban ngày', 'Chạy cả hai nhánh'], a: 2, why: 'is time day sai → chạy nhánh else: time set day.' },
      { q: 'if … then … else chạy bao nhiêu nhánh mỗi lần?', o: ['Đúng 1 nhánh', '2 nhánh', 'Không nhánh nào', 'Tuỳ số lần lặp'], a: 0, why: 'Hoặc then hoặc else – luôn đúng một nhánh.' } ] },
  { id: 't4', c: ['#4F7CFF', '#B06BFF'], dk: '#5F3DC4', title: 'So sánh: = ≠ < >',
    tip: 'Mỏ chữ < luôn há về phía số lớn hơn!',
    html: `<div class="blocks">${MH('lg', `${n(0)} ${dd('=')} ${n(0)}`)}${MH('lg', `${n(5)} ${dd('&gt;')} ${n(3)}`)}</div>
      <table class="tb"><tr><th>Dấu</th><th>Nghĩa</th><th>Ví dụ</th></tr><tr><td>=  ≠</td><td>bằng / khác</td><td>2 = 2 → true</td></tr>
      <tr><td>&lt;  ≤</td><td>nhỏ hơn (hoặc bằng)</td><td>4 ≤ 4 → true</td></tr><tr><td>&gt;  ≥</td><td>lớn hơn (hoặc bằng)</td><td>1 &gt; 6 → false</td></tr></table>`,
    quiz: [
      { q: 'Kết quả của phép so sánh 7 < 3 là:', o: ['true', '7', '3', 'false'], a: 3, why: '7 không nhỏ hơn 3 nên kết quả là false.' },
      { q: 'Phép so sánh nào cho kết quả true?', o: ['5 ≠ 5', '6 ≥ 6', '2 > 9', '4 = 1'], a: 1, why: '6 ≥ 6 đúng vì 6 bằng 6.' } ] },
  { id: 't5', c: ['#FF595E', '#FFB14E'], dk: '#C92A2A', title: 'Kết hợp: and, or, not',
    tip: 'and khó tính (cần cả hai), or dễ tính (một là đủ)!',
    html: `<div class="blocks">${MH('lg', `${TRUE()} ${dd('and')} ${TRUE('false')}`)}${MH('lg', `not ${TRUE()}`)}</div><ul>
      <li><b>and</b> (và): <span class="k">cả hai</span> đúng mới đúng.</li>
      <li><b>or</b> (hoặc): <span class="k">chỉ cần một</span> đúng là đúng.</li>
      <li><b>not</b> (không): <span class="k">đảo ngược</span> – true ↔ false.</li></ul>`,
    quiz: [
      { q: 'true and false cho kết quả:', o: ['true', 'false', 'and', 'Báo lỗi'], a: 1, why: 'and cần cả hai đúng; ở đây có một sai → false.' },
      { q: 'not (false) cho kết quả:', o: ['true', 'false', 'not', '0'], a: 0, why: 'not đảo ngược: false → true.' } ] },
];

const KEY = ['<b>true</b> đúng • <b>false</b> sai<br>khối lục giác', '<b>if … then</b><br>đúng mới chạy', '<b>then</b> khi đúng<br><b>else</b> khi sai',
  '= ≠ &lt; ≤ &gt; ≥<br>→ true / false', '<b>and</b> cả hai • <b>or</b> một<br><b>not</b> đảo ngược'];
