// Sinh các bài ClickLearn Tin học 9 + danh sách ds.js cho trang chủ: node baigiang/clicklearn-tin9/_nguon/build.js
const fs = require('fs'), path = require('path'), vm = require('vm');
const D = __dirname, K = fs.readFileSync(path.join(D, 'khuon.html'), 'utf8'), H = fs.readFileSync(path.join(D, 'hinh.js'), 'utf8');
const DS = [];
for (const f of fs.readdirSync(D).filter(f => /^bai\d+\.js$/.test(f)).sort((a, b) => parseInt(a.slice(3)) - parseInt(b.slice(3)))) {
  const src = fs.readFileSync(path.join(D, f), 'utf8');
  const M = vm.runInNewContext('(' + src.match(/const META = (\{[\s\S]*?\});/)[1] + ')');
  const lab = `Bài ${M.num}`;
  const out = K.replace('@@TITLE@@', () => M.title).replace('@@LAB@@', () => lab).replace('@@LABU@@', () => lab.toLocaleUpperCase('vi'))
    .replace('@@ST1@@', () => M.big).replace('@@ST2@@', () => M.st2)
    .replace('/*@@HINH@@*/', () => H).replace('/*@@CONTENT@@*/', () => src);
  fs.mkdirSync(path.join(D, '..', M.key), { recursive: true });
  fs.writeFileSync(path.join(D, '..', M.key, 'index.html'), out);
  const names = [...src.matchAll(/\bname: '([^']+)'/g)].map(m => m[1]);
  DS.push({ key: M.key, num: M.num, title: M.title, topics: names });
  console.log('✔', M.key, names.length, 'hoạt động');
}
fs.writeFileSync(path.join(D, '..', 'ds.js'), '// Tự sinh bởi _nguon/build.js – không sửa tay\nconst DS = ' + JSON.stringify(DS, null, 1) + ';\n');
