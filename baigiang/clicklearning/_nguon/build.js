// Sinh các nhánh ClickLearning + danh sách ds.js cho trang chủ: node baigiang/clicklearning/_nguon/build.js
const fs = require('fs'), path = require('path'), vm = require('vm');
const D = __dirname, FILES = fs.readdirSync(__dirname).filter(f => /^\d+-.*\.js$/.test(f)), NB = FILES.filter(f => !/cd-/.test(f)).length, K = fs.readFileSync(path.join(D, 'khuon.html'), 'utf8');
const DS = [];
for (const f of fs.readdirSync(D).filter(f => /^\d+-.*\.js$/.test(f)).sort()) {
  const src = fs.readFileSync(path.join(D, f), 'utf8');
  const m = src.match(/const META = (\{[\s\S]*?\});/);
  const M = vm.runInNewContext('(' + m[1] + ')');
  const lab = M.lab || `Nhánh ${M.num}/${NB}`;
  const out = K.replace('@@TITLE@@', () => M.title).replace('@@LAB@@', () => lab).replace('@@LABU@@', () => lab.toLocaleUpperCase('vi')).replace('@@NUM@@', () => M.num)
    .replace('@@ST1@@', () => M.big).replace('@@ST2@@', () => M.st2)
    .replace('/*@@CONTENT@@*/', () => src);
  fs.mkdirSync(path.join(D, '..', M.key), { recursive: true });
  fs.writeFileSync(path.join(D, '..', M.key, 'index.html'), out);
  const T = vm.runInNewContext(src.replace(/^const /gm, 'var ') + ';({topics: TOPICS.map(t => t.title)})', { svg: () => '', B: () => '', N: () => '', D: () => '', T: () => '', R: () => '', RP: () => '', BO: () => '', STK: () => '', CB: () => '', FOREVER: () => '', IFELSE: () => '', HX: '', FLAG: '', O: '', F: '' });
  DS.push({ key: M.key, num: M.num, lab, title: M.title, cd: !!M.lab, topics: T.topics });
  console.log('✔', M.key);
}
fs.writeFileSync(path.join(D, '..', 'ds.js'), '// Tự sinh bởi _nguon/build.js – không sửa tay\nconst DS = ' + JSON.stringify(DS, null, 1) + ';\n');
