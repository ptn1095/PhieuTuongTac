// Lịch giao phiếu do cô bấm "Giao" ở trang tổng hợp.
// Lịch lưu ở trang tính "GiaoPhieu" của Google Sheet; trang của học sinh đọc bản "Công bố lên web" (CSV)
// mà link nằm trong cauhinh.json → "giaoCsv". Lịch này ưu tiên hơn lịch ghi trong config.json của phiếu.
// Không đọc được (chưa cài link, mất mạng…) thì giữ nguyên lịch trong config.json.
window.GiaoPhieu = (function () {
  function csv(t) {
    const rows = []; let r = [], v = '', q = false;
    for (let i = 0; i < t.length; i++) {
      const c = t[i];
      if (q) { if (c === '"') { if (t[i + 1] === '"') { v += '"'; i++; } else q = false; } else v += c; }
      else if (c === '"') q = true;
      else if (c === ',') { r.push(v); v = ''; }
      else if (c === '\n' || c === '\r') { if (c === '\r' && t[i + 1] === '\n') i++; r.push(v); rows.push(r); r = []; v = ''; }
      else v += c;
    }
    if (v !== '' || r.length) { r.push(v); rows.push(r); }
    return rows;
  }
  // [[tiêu đề…], [slug, khoi, mo, dong, thuhoi, capnhat], …] → { slug: {khoi, mo, dong, thuhoi} }
  function tuHang(rows) {
    const h = (rows[0] || []).map(x => String(x).trim().toLowerCase()), o = k => h.indexOf(k), m = {};
    rows.slice(1).forEach(r => {
      const s = String(r[o('slug')] || '').trim(); if (!s) return;
      m[s] = { khoi: String(r[o('khoi')] || '').trim(), mo: String(r[o('mo')] || '').trim(), dong: String(r[o('dong')] || '').trim(),
        thuhoi: /^(1|true|x)$/i.test(String(r[o('thuhoi')] || '').trim()) };
    });
    return m;
  }
  // goc: đường dẫn tới gốc kho ('' ở trang chủ, '../' ở trang tổng hợp, '../../' ở trang phiếu)
  async function tai(goc, ms) {
    try {
      const ch = await fetch(goc + 'cauhinh.json?v=' + Date.now(), { cache: 'no-store' }).then(r => r.json());
      if (!ch || !ch.giaoCsv) return null;
      const ctl = new AbortController(), t = setTimeout(() => ctl.abort(), ms || 5000);
      const txt = await fetch(ch.giaoCsv, { signal: ctl.signal, cache: 'no-store' }).then(r => { if (!r.ok) throw new Error(r.status); return r.text(); });
      clearTimeout(t);
      if (!/slug/i.test(txt.split(/\r?\n/)[0] || '')) return null;   // không phải trang tính GiaoPhieu
      return tuHang(csv(txt));
    } catch (e) { return null; }
  }
  // Áp lịch giao vào phiếu p = {khoi, lop, mo, dong, chuaGiao, …}. Giao cả khối: lớp = mọi lớp của khối (lop.json).
  function apDung(p, g, lopKhoi) {
    if (!g) return p;
    const q = Object.assign({}, p);
    delete q.mo; delete q.dong;
    if (g.thuhoi) { q.chuaGiao = true; return q; }
    q.chuaGiao = false; q.daGiao = true;
    // khoi có thể là nhiều khối, ngăn bởi "|" (ví dụ "khoi-5|doi-tuyen")
    const ks = String(g.khoi || '').split('|').map(x => x.trim()).filter(Boolean);
    if (ks.length) {
      q.khoi = ks.length === 1 ? ks[0] : ks;
      const lop = [].concat(...ks.map(k => (lopKhoi && lopKhoi[k]) || []));
      if (lop.length) q.lop = lop;
    }
    if (g.mo) q.mo = g.mo;
    if (g.dong) q.dong = g.dong;
    return q;
  }
  return { tai, apDung, tuHang, csv };
})();
