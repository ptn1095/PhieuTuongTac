// Khớp tên học sinh tự gõ với danh sách lớp (trang tính DanhSach).
// Dùng chung cho trang tổng hợp (trình duyệt) và mã Google Sheet (NhanDiem.gs có bản sao y hệt hàm khopTen).
//   khopTen(tenGo, lop, danhSach, ghep) → { ten: tên chuẩn | '', muc: 'chac' | 'gan' | 'khong', goiY: [tên…] }
//   danhSach: [[lớp, họ tên], …]   ghep: [[lớp, tên em gõ, tên chuẩn], …] (cô đã ghép tay)
// Mức "chac": tự ghép được; "gan": gần đúng – cần cô xác nhận; "khong": không tìm thấy.
function khopTen(tenGo, lop, danhSach, ghep) {
  const thuong = s => String(s || '').normalize('NFC').toLowerCase().replace(/\s+/g, ' ').trim();
  const boDau = s => thuong(s).normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd');
  const lopChuan = s => thuong(s).replace(/\s+/g, '');
  const L = lopChuan(lop), go = thuong(tenGo), goKD = boDau(tenGo);
  const ra = (ten, muc, goiY) => ({ ten: ten || '', muc, goiY: goiY || (ten ? [ten] : []) });
  if (!go) return ra('', 'khong', []);
  const ds = (danhSach || []).filter(r => lopChuan(r[0]) === L).map(r => String(r[1]).trim());
  // 0. cô đã ghép tay trước đó
  const g = (ghep || []).find(r => lopChuan(r[0]) === L && thuong(r[1]) === go);
  if (g && String(g[2]).trim()) return ra(String(g[2]).trim(), 'chac');
  if (!ds.length) return ra('', 'khong', []);
  const duy = (arr, muc) => arr.length === 1 ? ra(arr[0], muc) : arr.length > 1 ? ra('', 'gan', arr.slice(0, 3)) : null;
  // 1. giống hệt (bỏ qua hoa thường, khoảng trắng thừa)
  let k = duy(ds.filter(t => thuong(t) === go), 'chac'); if (k) return k;
  // 2. giống khi bỏ dấu tiếng Việt
  k = duy(ds.filter(t => boDau(t) === goKD), 'chac'); if (k) return k;
  // 3. cùng các chữ, khác thứ tự ("An Nguyễn Văn")
  const tu = s => boDau(s).split(' ').filter(Boolean);
  const goTu = tu(tenGo), sx = a => a.slice().sort().join(' ');
  k = duy(ds.filter(t => sx(tu(t)) === sx(goTu)), 'chac'); if (k) return k;
  // 4. gõ thiếu chữ (thiếu tên đệm / chỉ gõ tên gọi) – tên gọi (chữ cuối) phải có trong chữ em gõ
  const conDu = ds.filter(t => { const a = tu(t); return goTu.every(x => a.includes(x)) && goTu.includes(a[a.length - 1]); });
  if (conDu.length === 1) return ra(conDu[0], goTu.length >= 2 ? 'chac' : 'gan');
  if (conDu.length > 1) return ra('', 'gan', conDu.slice(0, 3));
  // 5. gõ sai vài chữ cái (khoảng cách chỉnh sửa nhỏ)
  const kc = (a, b) => { const m = a.length, n = b.length, d = Array.from({ length: m + 1 }, (_, i) => [i]);
    for (let j = 1; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++) d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    return d[m][n]; };
  const xep = ds.map(t => ({ t, d: Math.min(kc(boDau(t), goKD), kc(sx(tu(t)), sx(goTu))) })).sort((a, b) => a.d - b.d);
  const nguong = Math.min(3, Math.max(1, Math.floor(goKD.length * 0.15)));
  if (xep[0].d <= nguong && (xep.length === 1 || xep[1].d > xep[0].d)) return ra(xep[0].t, 'gan');
  return ra('', 'khong', xep.slice(0, 3).filter(x => x.d <= goKD.length / 2).map(x => x.t));
}
if (typeof window !== 'undefined') window.khopTen = khopTen;
if (typeof module !== 'undefined') module.exports = khopTen;
