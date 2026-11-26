// Sinh các bài ClickLearn Tin học 8 + danh sách ds.js cho trang chủ: node baigiang/clicklearn-tin8/_nguon/build.js
// Mỗi bài chọn một phong cách (META.theme) trong thư viện chung baigiang/_phongcach (8 phong cách, so le không trùng bài liền nhau)
const fs = require('fs'), path = require('path'), vm = require('vm');
const D = __dirname, rd = f => fs.readFileSync(path.join(D, f), 'utf8');
const K = rd('khuon.html'), H = rd('hinh.js'), CHUNG = rd('chung.css'), CERT = rd('cert.js');
const PC = require('../../_phongcach/phongcach.js');
const DS = [];
const only = process.argv[2];
for (const f of fs.readdirSync(D).filter(f => /^bai\d+a?\.js$/.test(f)).sort((a, b) => parseInt(a.slice(3)) - parseInt(b.slice(3)))) {
  const src = rd(f);
  const M = vm.runInNewContext('(' + src.match(/const META = (\{[\s\S]*?\});/)[1] + ')');
  const th = M.theme, lab = `Bài ${M.num}`;
  const fonts = PC.fonts(th);
  const out = K.replace('@@TITLE@@', () => M.title).replace('@@FONTS@@', () => fonts)
    .replace('/*@@THEMECSS@@*/', () => PC.css(th)).replace('/*@@CHUNGCSS@@*/', () => CHUNG)
    .split('@@LAB@@').join(lab).replace('@@LABU@@', () => lab.toLocaleUpperCase('vi'))
    .replace('@@ST1@@', () => M.big).replace('@@ST2@@', () => M.st2)
    .replace('/*@@THEME@@*/', () => PC.js(th)).replace('/*@@CERT@@*/', () => CERT)
    .replace('/*@@HINH@@*/', () => H).replace('/*@@CONTENT@@*/', () => src);
  fs.mkdirSync(path.join(D, '..', M.key), { recursive: true });
  if (!only || only === M.key) fs.writeFileSync(path.join(D, '..', M.key, 'index.html'), out);
  const names = [...src.matchAll(/\bname: '([^']+)'/g)].map(m => m[1]);
  DS.push({ key: M.key, num: M.num, title: M.title, theme: th, tname: PC.INFO[th].ten, topics: names });
  console.log('✔', M.key, th, names.length, 'hoạt động');
}
PC.soLe(DS.map(d => d.theme));
fs.writeFileSync(path.join(D, '..', 'ds.js'), '// Tự sinh bởi _nguon/build.js – không sửa tay\nconst DS = ' + JSON.stringify(DS, null, 1) + ';\n');
