// Sinh các bài ClickLearn Tin học 7 + danh sách ds.js cho trang chủ: node baigiang/clicklearn-tin7/_nguon/build.js
// Mỗi bài chọn một phong cách (META.theme): vutru, daiduong, samac, chibi, lauda, tuyet → theme_<tên>.css + theme_<tên>.js
const fs = require('fs'), path = require('path'), vm = require('vm');
const D = __dirname, rd = f => fs.readFileSync(path.join(D, f), 'utf8');
const K = rd('khuon.html'), H = rd('hinh.js'), CHUNG = rd('chung.css'), CERT = rd('cert.js');
const FONTS = {
  vutru: ['Chakra+Petch:wght@500;600;700', 'Exo+2:wght@500;600;700;800'],
  daiduong: ['Paytone+One', 'Nunito:wght@600;700;800;900'],
  samac: ['Rowdies:wght@400;700', 'Baloo+2:wght@500;600;700;800'],
  chibi: ['Mali:wght@500;600;700', 'Baloo+2:wght@500;600;700;800'],
  lauda: ['Playfair+Display:wght@700;800;900', 'Grenze+Gotisch:wght@600;700;800', 'Baloo+2:wght@500;600;700;800'],
  tuyet: ['Lobster', 'Nunito:wght@600;700;800;900'],
};
const NAME = { vutru: 'Vũ trụ', daiduong: 'Đại dương', samac: 'Sa mạc', chibi: 'Thú cưng chibi', lauda: 'Lâu đài châu Âu', tuyet: 'Tuyết mùa đông' };
const DS = [];
const only = process.argv[2];
for (const f of fs.readdirSync(D).filter(f => /^bai\d+a?\.js$/.test(f)).sort((a, b) => parseInt(a.slice(3)) - parseInt(b.slice(3)))) {
  const src = rd(f);
  const M = vm.runInNewContext('(' + src.match(/const META = (\{[\s\S]*?\});/)[1] + ')');
  const th = M.theme, lab = `Bài ${M.num}`;
  if (!FONTS[th]) throw new Error(f + ': chưa có phong cách ' + th);
  const fonts = 'https://fonts.googleapis.com/css2?' + [...new Set([...FONTS[th], 'Baloo+2:wght@500;600;700;800', 'Inter:wght@700;800;900'])].map(x => 'family=' + x).join('&') + '&display=swap';
  const out = K.replace('@@TITLE@@', () => M.title).replace('@@FONTS@@', () => fonts)
    .replace('/*@@THEMECSS@@*/', () => rd(`theme_${th}.css`)).replace('/*@@CHUNGCSS@@*/', () => CHUNG)
    .split('@@LAB@@').join(lab).replace('@@LABU@@', () => lab.toLocaleUpperCase('vi'))
    .replace('@@ST1@@', () => M.big).replace('@@ST2@@', () => M.st2)
    .replace('/*@@THEME@@*/', () => rd(`theme_${th}.js`)).replace('/*@@CERT@@*/', () => CERT)
    .replace('/*@@HINH@@*/', () => H).replace('/*@@CONTENT@@*/', () => src);
  fs.mkdirSync(path.join(D, '..', M.key), { recursive: true });
  if (!only || only === M.key) fs.writeFileSync(path.join(D, '..', M.key, 'index.html'), out);
  const names = [...src.matchAll(/\bname: '([^']+)'/g)].map(m => m[1]);
  DS.push({ key: M.key, num: M.num, title: M.title, theme: th, tname: NAME[th], topics: names });
  console.log('✔', M.key, th, names.length, 'hoạt động');
}
fs.writeFileSync(path.join(D, '..', 'ds.js'), '// Tự sinh bởi _nguon/build.js – không sửa tay\nconst DS = ' + JSON.stringify(DS, null, 1) + ';\n');
