// Sinh các bài Minecraft thế giới 3D + ds.js cho trang chủ: node baigiang/minecraft3d/_nguon/build.js
const fs = require('fs'), path = require('path'), vm = require('vm');
const D = __dirname, K = fs.readFileSync(path.join(D, 'khuon.html'), 'utf8'), H = fs.readFileSync(path.join(D, 'hinh.js'), 'utf8');
const FILES = fs.readdirSync(D).filter(f => /^\d+-.*\.js$/.test(f)).sort(), NB = FILES.length, DS = [];
for (const f of FILES) {
  const src = fs.readFileSync(path.join(D, f), 'utf8');
  const M = vm.runInNewContext('(' + src.match(/const META = (\{[\s\S]*?\});/)[1] + ')');
  const lab = `Bài ${M.num}/${NB}`;
  let out = K.replace('/*@@CONTENT@@*/', () => H + '\n' + src);
  const rep = { TITLE: M.title, LAB: lab, LABU: lab.toLocaleUpperCase('vi'), NUM: M.num, ST1: M.big, ST2: M.st2 };
  for (const k in rep) out = out.split('@@' + k + '@@').join(rep[k]);
  if (/@@[A-Z0-9]+@@/.test(out)) throw new Error('Còn chỗ trống trong ' + f);
  fs.mkdirSync(path.join(D, '..', M.key), { recursive: true });
  fs.writeFileSync(path.join(D, '..', M.key, 'index.html'), out);
  const ts = src.slice(src.indexOf('const TOPICS'));
  const topics = [...ts.matchAll(/\btitle: '([^']+)'/g)].map(m => m[1]), nq = (ts.match(/\{ q: /g) || []).length;
  DS.push({ key: M.key, num: M.num, lab, title: M.title, topics, nq });
  console.log('✔', M.key, topics.length, 'nội dung', nq, 'câu đố');
}
fs.writeFileSync(path.join(D, '..', 'ds.js'), '// Tự sinh bởi _nguon/build.js – không sửa tay\nconst DS = ' + JSON.stringify(DS, null, 1) + ';\n');
