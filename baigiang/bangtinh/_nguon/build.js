// Sinh các bài Bảng tính THCS + ds.js cho trang chủ: node baigiang/bangtinh/_nguon/build.js
const fs = require('fs'), path = require('path'), vm = require('vm');
const D = __dirname, K = fs.readFileSync(path.join(D, 'khuon.html'), 'utf8'), H = fs.readFileSync(path.join(D, 'hinh.js'), 'utf8');
const POST = `
const ILL = {}, KEY = [];
TOPICS.forEach((t, i) => { t.id = 't' + (i + 1); ILL[t.id] = t.ill; KEY.push(t.key);
  const p = PAL[(i + META.num*3) % PAL.length]; t.c = [p[0], p[1]]; t.dk = p[2]; });`;
const DS = [];
const files = fs.readdirSync(D).filter(f => /^bai\d+\.js$/.test(f)).sort((a, b) => parseInt(a.slice(3)) - parseInt(b.slice(3)));
for (const f of files) {
  const src = fs.readFileSync(path.join(D, f), 'utf8');
  const M = vm.runInNewContext('(' + src.match(/const META = (\{[\s\S]*?\});/)[1] + ')');
  const so = M.so || M.num;
  const nt = (src.match(/\bill: /g) || []).length, nq = (src.match(/\{ q: /g) || []).length;
  const rep = { TITLE: `Bài ${so}. ${M.ten}`, ST1: M.st1, ST2: `Bài ${so} • ${M.lop}`, NT: nt, NQ: nq, PILL: `BÀI ${so} • BẢNG TÍNH THCS • ${M.lop.toLocaleUpperCase('vi')}`,
    BIG: M.big, HELLO: M.hello, CERT: M.cert, CERTLINE: `Đã hoàn thành Bài ${so} (${M.lop}) – chuỗi Bảng tính THCS` };
  let out = K.replace('/*@@CONTENT@@*/', () => H + '\n' + src + POST);
  for (const k in rep) out = out.split('@@' + k + '@@').join(rep[k]);
  if (/@@[A-Z]+@@/.test(out)) throw new Error('Còn chỗ trống trong ' + f);
  fs.mkdirSync(path.join(D, '..', M.key), { recursive: true });
  fs.writeFileSync(path.join(D, '..', M.key, 'index.html'), out);
  const names = [...src.matchAll(/\btitle: '([^']+)'/g)].map(m => m[1]);
  DS.push({ key: M.key, num: M.num, so, lop: M.lop, title: `Bài ${so}. ${M.ten}`, ic: M.ic, topics: names, nq });
  console.log('✔', M.key, nt, 'chủ đề', nq, 'câu đố');
}
fs.writeFileSync(path.join(D, '..', 'ds.js'), '// Tự sinh bởi _nguon/build.js – không sửa tay\nconst DS = ' + JSON.stringify(DS, null, 1) + ';\n');
