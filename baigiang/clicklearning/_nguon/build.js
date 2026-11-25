// Sinh 7 nhánh ClickLearning: node baigiang/clicklearning/_nguon/build.js
const fs = require('fs'), path = require('path'), vm = require('vm');
const D = __dirname, K = fs.readFileSync(path.join(D, 'khuon.html'), 'utf8');
for (const f of fs.readdirSync(D).filter(f => /^\d-.*\.js$/.test(f)).sort()) {
  const src = fs.readFileSync(path.join(D, f), 'utf8');
  const m = src.match(/const META = (\{[\s\S]*?\});/);
  const M = vm.runInNewContext('(' + m[1] + ')');
  const out = K.replace('@@TITLE@@', () => M.title).replace('@@NUM@@', () => M.num)
    .replace('@@ST1@@', () => M.big).replace('@@ST2@@', () => M.st2)
    .replace('/*@@CONTENT@@*/', () => src);
  fs.mkdirSync(path.join(D, '..', M.key), { recursive: true });
  fs.writeFileSync(path.join(D, '..', M.key, 'index.html'), out);
  console.log('✔', M.key);
}
