// KHUÔN CHUNG cho các app bài giảng zoom tiểu học (ClickLearn Tin học 3, 4…)
// Dùng trong <app>/_nguon/build.js:
//   require('../../_khuonzoom/taotrang.js')({ dir: __dirname, app: 'Tin học 3', skey: 'cl3', sub: '…', cds: ['Máy tính và em', …] })
// Mỗi bài: _nguon/baiN.js (hoặc baiNa.js) có const META = { key, num, theme, path?, title, big, st2, hello, cert, file, pass, ic, en, cd }
//   theme: 1 trong 9 phong cách (so le: hai bài liền nhau không trùng)
//   path : lối đi zoom 'zigzag' | 'xoanoc' | 'cauvong' | 'elip' (bỏ trống thì tự xoay vòng theo thứ tự bài)
const fs = require('fs'), path = require('path'), vm = require('vm');
const K = f => fs.readFileSync(path.join(__dirname, f), 'utf8');
const PC = require('../_phongcach/phongcach.js');
const LOIDI = ['zigzag', 'xoanoc', 'cauvong', 'elip'];
module.exports = function (cfg) {
  const D = cfg.dir, OUT = path.join(D, '..'), rd = f => fs.readFileSync(path.join(D, f), 'utf8');
  const KH = K('khuon.html'), H = K('hinh.js') + (fs.existsSync(path.join(D, 'hinh_them.js')) ? '\n' + rd('hinh_them.js') : ''), CHUNG = K('chung.css'), CERT = K('cert.js');
  const only = process.argv[2], DS = [];
  const ord = f => { const m = f.match(/^bai(\d+)([a-z]?)\.js$/); return +m[1]*10 + (m[2] ? m[2].charCodeAt(0) - 96 : 0); };
  const files = fs.readdirSync(D).filter(f => /^bai\d+[a-z]?\.js$/.test(f)).sort((a, b) => ord(a) - ord(b));
  files.forEach((f, idx) => {
    const src = rd(f);
    const M = vm.runInNewContext('(' + src.match(/const META = (\{[\s\S]*?\});/)[1] + ')');
    const th = M.theme, lab = `Bài ${M.num}`, lay = M.path || LOIDI[idx % LOIDI.length];
    const out = KH.replace('@@TITLE@@', () => M.title).replace('@@FONTS@@', () => PC.fonts(th))
      .replace('/*@@THEMECSS@@*/', () => PC.css(th)).replace('/*@@CHUNGCSS@@*/', () => CHUNG)
      .split('@@APP@@').join(cfg.app).split('@@SKEY@@').join(cfg.skey)
      .split('@@LAB@@').join(lab).replace('@@LABU@@', () => lab.toLocaleUpperCase('vi'))
      .replace('@@ST1@@', () => M.big).replace('@@ST2@@', () => M.st2)
      .replace('/*@@THEME@@*/', () => PC.js(th)).replace('/*@@CERT@@*/', () => CERT)
      .replace('/*@@HINH@@*/', () => H).replace('/*@@CONTENT@@*/', () => src + `\nMETA.path = META.path || '${lay}';`);
    fs.mkdirSync(path.join(OUT, M.key), { recursive: true });
    if (!only || only === M.key) fs.writeFileSync(path.join(OUT, M.key, 'index.html'), out);
    const names = [...src.matchAll(/\bname: '([^']+)'/g)].map(m => m[1]);
    DS.push({ key: M.key, num: M.num, title: M.title, en: M.en || M.title.replace(/^Bài \S+\.\s*/, ''), ic: M.ic || '📘', cd: M.cd || 1,
      theme: th, tname: PC.INFO[th].ten, path: lay, topics: names });
    console.log('✔', M.key, th, lay, names.length, 'hoạt động');
  });
  PC.soLe(DS.map(d => d.theme));
  fs.writeFileSync(path.join(OUT, 'ds.js'), '// Tự sinh bởi _nguon/build.js – không sửa tay\nconst DS = ' + JSON.stringify(DS, null, 1) + ';\n');
  // trang chủ app
  const TC = K('trangchu.html').split('@@APP@@').join(cfg.app).split('@@SKEY@@').join(cfg.skey)
    .replace('@@SUB@@', () => cfg.sub).replace('@@LOP@@', () => cfg.lop || '').replace('/*@@CDS@@*/', () => JSON.stringify(cfg.cds));
  fs.writeFileSync(path.join(OUT, 'index.html'), TC);
};
