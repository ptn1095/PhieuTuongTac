/* ---- giấy chứng nhận: nền + khung do phong cách vẽ (TH.cert.bg), chữ vẽ chung ---- */
function fitText(g, t, maxW, size, weight, fam) { let s = size; do { g.font = `${weight} ${s}px ${fam}`; s -= 2; } while (g.measureText(t).width > maxW && s > 20); }
function grad(g, y0, y1, c0, c1) { const gr = g.createLinearGradient(0, y0, 0, y1); gr.addColorStop(0, c0); gr.addColorStop(1, c1); return gr; }
async function drawCert(name, cls, sc) {
  const C = TH.cert, FH = `'${C.fh}', 'Baloo 2', sans-serif`, FB = `'${C.fb}', 'Baloo 2', sans-serif`, FN = `'${C.fn || C.fh}', 'Baloo 2', sans-serif`;
  try { await Promise.all([C.fh, C.fb, C.fn || C.fh].flatMap(f => ['900', '800', '700', '600'].map(w => document.fonts.load(`${w} 40px '${f}'`, 'GIẤY CHỨNG NHẬN Được ấữỹ')))); } catch (e) {}
  const Wd = 1600, Hd = 1130, cv = document.createElement('canvas'); cv.width = Wd; cv.height = Hd;
  const g = cv.getContext('2d');
  const bg = await svgImg(C.bg(Wd, Hd), `0 0 ${Wd} ${Hd}`);
  if (bg) g.drawImage(bg, 0, 0, Wd, Hd); else { g.fillStyle = C.panel || '#fff'; g.fillRect(0, 0, Wd, Hd); }
  g.textAlign = 'center'; g.textBaseline = 'alphabetic'; g.lineJoin = 'round';
  // biển tên "GIẤY CHỨNG NHẬN"
  if (C.plq) {
    g.save(); g.shadowColor = 'rgba(0,0,0,.35)'; g.shadowOffsetY = 10; rr(g, Wd/2 - 370, 46, 740, 118, C.prad ?? 22);
    g.fillStyle = grad(g, 46, 164, C.plq[0], C.plq[1]); g.fill(); g.restore();
    rr(g, Wd/2 - 370, 46, 740, 118, C.prad ?? 22); g.lineWidth = 8; g.strokeStyle = C.plq[2]; g.stroke();
  }
  const TT = C.ttext || 'GIẤY CHỨNG NHẬN';
  fitText(g, TT, 660, C.tsize || 64, C.tw || 800, FH);
  if (C.tglow) { g.save(); g.shadowColor = C.tglow; g.shadowBlur = 24; g.fillStyle = C.tink; g.fillText(TT, Wd/2, 132); g.restore(); }
  g.fillStyle = C.tsh; g.fillText(TT, Wd/2, 138); g.fillStyle = C.tink; g.fillText(TT, Wd/2, 132);
  // dải "Hoàn thành bài học"
  rr(g, Wd/2 - 250, 196, 500, 74, 37); g.fillStyle = grad(g, 196, 270, C.rib[0], C.rib[1]); g.fill(); g.lineWidth = 5; g.strokeStyle = C.rib[2]; g.stroke();
  g.font = `800 38px ${FB}`; g.fillStyle = C.rib[2]; g.fillText('Hoàn thành bài học', Wd/2, 250); g.fillStyle = '#fff'; g.fillText('Hoàn thành bài học', Wd/2, 247);
  g.fillStyle = C.ink; g.font = `600 38px ${FB}`; g.fillText('Chứng nhận học sinh', Wd/2, 340);
  fitText(g, name, 760, C.nsize || 96, C.nw || 800, FN);
  if (C.nglow) { g.save(); g.shadowColor = C.nglow; g.shadowBlur = 26; g.fillStyle = C.name; g.fillText(name, Wd/2, 448); g.restore(); }
  g.lineWidth = 14; g.strokeStyle = C.nstroke; g.strokeText(name, Wd/2, 448); g.fillStyle = C.name; g.fillText(name, Wd/2, 448);
  g.setLineDash([4, 14]); g.lineCap = 'round'; g.lineWidth = 6; g.strokeStyle = C.line; g.beginPath(); g.moveTo(Wd/2 - 420, 482); g.lineTo(Wd/2 + 420, 482); g.stroke(); g.setLineDash([]);
  g.fillStyle = C.ink; g.font = `700 46px ${FB}`; g.fillText('Lớp: ' + cls, Wd/2, 550);
  g.font = `600 34px ${FB}`; g.fillText('Đã hoàn thành bài học tương tác', Wd/2, 612);
  g.fillStyle = C.accent; fitText(g, META.cert, 1060, 46, 800, FB); g.fillText(META.cert, Wd/2, 676);
  const TQ = Object.keys(QUIZ).length, rank = sc >= TQ ? 'Xuất sắc tuyệt đối' : sc >= Math.ceil(TQ*.9) ? 'Xuất sắc' : 'Hoàn thành tốt';
  rr(g, Wd/2 - 360, 712, 720, 96, 48); g.fillStyle = C.pill; g.fill(); g.lineWidth = 6; g.strokeStyle = C.line; g.stroke();
  cStar(g, Wd/2 - 300, 760, 32, '#FFCF2F', '#9C5A00');
  g.textAlign = 'left'; g.fillStyle = C.ink; g.font = `800 46px ${FB}`; g.fillText(`${sc}/${TQ} sao`, Wd/2 - 250, 776);
  g.fillStyle = C.rank; fitText(g, rank, 340, 44, 800, FB); g.textAlign = 'right'; g.fillText(rank, Wd/2 + 330, 776); g.textAlign = 'center';
  const d = new Date();
  g.fillStyle = C.ink; g.font = `600 32px ${FB}`; g.fillText(`Ngày ${d.getDate()} tháng ${d.getMonth() + 1} năm ${d.getFullYear()}`, 420, 925);
  g.font = `700 32px ${FB}`; g.fillText('Giáo viên', 1180, 880);
  g.font = `${C.nw || 800} 54px ${FN}`; g.fillStyle = C.teacher; g.fillText('Cô Thùy Tin', 1180, 948);
  const [bot, cup] = await Promise.all([svgImg(robot(), '0 0 200 240'), svgImg(ILL.trophy().replace(/^<svg[^>]*>|<\/svg>$/g, ''), '0 0 300 300')]);
  if (bot) g.drawImage(bot, 170, 300, 210, 252);
  if (cup) g.drawImage(cup, 1215, 290, 240, 240);
  cStar(g, 196, 790, 18, '#FFCF2F', '#9C5A00'); cStar(g, 1420, 600, 16, '#FFCF2F', '#9C5A00'); cStar(g, 1250, 280, 14, '#FFCF2F', '#9C5A00');
  return cv.toDataURL('image/png');
}
