// Chạy thử mã Apps Script (NhanDiem.gs) với một Google Sheet giả lập: node tools/kiem_tra_gs.js
const fs=require('fs'),vm=require('vm');
const src=fs.readFileSync(process.argv[2] || require('path').join(__dirname, 'NhanDiem.gs'),'utf8').replace("const MAT_KHAU = 'doi-mat-khau-nay'","const MAT_KHAU = 'matkhau123'");
function Sheet(name){this.name=name;this.rows=[];}
Sheet.prototype={getName(){return this.name},getLastRow(){return this.rows.length},appendRow(r){this.rows.push(r)},
 getRange(r,c,nr,nc){const sh=this;nr=nr||1;nc=nc||1;return{getValues(){return sh.rows.slice(r-1,r-1+nr).map(x=>x.slice(c-1,c-1+nc))},getDisplayValues(){return this.getValues().map(x=>x.map(v=>v==null?'':String(v)))},
 setValues(v){v.forEach((row,i)=>{sh.rows[r-1+i]=sh.rows[r-1+i]||[];row.forEach((x,j)=>sh.rows[r-1+i][c-1+j]=x);});return this},setNumberFormat(){return this},getValue(){return (sh.rows[r-1]||[])[c-1]},setFontWeight(){return this},setBackground(){return this}}},
 setFrozenRows(){},setColumnWidths(){},setColumnWidth(){}};
const sheets=[new Sheet('Trang tính1'),new Sheet('GiaoPhieu')];  // GiaoPhieu: cô tạo sẵn, còn trốngconst ds=new Sheet('DanhSach');ds.rows=[['Lớp','Họ và tên'],['5A1','An'],['5A1','Bình']];sheets.push(ds);
const ss={getSheetByName:n=>sheets.find(s=>s.name===n)||null,insertSheet:n=>{const s=new Sheet(n);sheets.push(s);return s},getSheets:()=>sheets};
let slept=0;
const ctx={process,Session:{getScriptTimeZone:()=>'Asia/Ho_Chi_Minh'},SpreadsheetApp:{getActiveSpreadsheet:()=>ss},LockService:{getScriptLock:()=>({waitLock(){},releaseLock(){}})},Utilities:{sleep:ms=>slept+=ms},
 ContentService:{MimeType:{JSON:'json'},createTextOutput:t=>({t,setMimeType(){return this}})},
 HtmlService:{createHtmlOutput:h=>({h,setTitle(){return this},addMetaTag(){return this}})}};
vm.createContext(ctx);vm.runInContext(src+';this.doGet=doGet;',ctx);
const ok=(c,m)=>{console.log((c?'  ✓ ':'  ✗ ')+m);if(!c)process.exitCode=1;};
const g=p=>ctx.doGet({parameter:p});
let r=g({phieu:'Phiếu A',ten:'An',lop:'5A1',diem:'8,5',dung:'17/20',nhanxet:'Giỏi',chitiet:'B1.1 Đ; B1.2 S'});
ok(r.h.includes('thành công'),'nhận điểm như cũ');
r=g({phieu:'Phiếu A',ten:' an ',lop:'5A1',diem:'9'});ok(r.h.includes('đã nộp bài này rồi'),'chặn nộp trùng như cũ');
ok(JSON.parse(g({action:'tonghop',mk:'x'}).t).ok===false&&slept>0,'sai mật khẩu → từ chối, có làm chậm');
const t=JSON.parse(g({action:'tonghop',mk:'matkhau123'}).t);
ok(t.ok&&t.phieu.length===1&&t.phieu[0].ten==='Phiếu A'&&t.phieu[0].hang[0][3]===8.5&&t.phieu[0].hang[0][6]==='B1.1 Đ; B1.2 S','tổng hợp: trả đúng 1 phiếu, điểm 8.5, chi tiết');
ok(t.danhSach.length===2&&t.danhSach[1][1]==='Bình','tổng hợp: đọc trang DanhSach (bỏ qua "Trang tính1")');
ok(JSON.parse(g({action:'kiemtra',mk:'matkhau123'}).t).ok===true,'kiểm tra mật khẩu đúng → ok');

// Giao phiếu
ctx.Utilities.formatDate=()=>'2026-11-11 08:00';
let gg=JSON.parse(ctx.doGet({parameter:{action:'datgiao',mk:'sai',ds:'[]'}}).t);ok(!gg.ok,'giao phiếu: sai mật khẩu → từ chối');
gg=JSON.parse(ctx.doGet({parameter:{action:'datgiao',mk:'matkhau123',ds:JSON.stringify([{slug:'tin9-a',khoi:'khoi-9',mo:'2026-11-16',dong:'2026-11-22'},{slug:'tin9-b',khoi:'khoi-5'}])}}).t);
ok(gg.ok&&gg.giao.length===2&&gg.giao[0].join('|')==='tin9-a|khoi-9|2026-11-16|2026-11-22||2026-11-11 08:00','giao 2 phiếu một lần (hàng loạt) → trang tính GiaoPhieu có 2 dòng');
gg=JSON.parse(ctx.doGet({parameter:{action:'datgiao',mk:'matkhau123',ds:JSON.stringify([{slug:'tin9-a',thuhoi:true}])}}).t);
ok(gg.giao.length===2&&gg.giao[0][4]==='1','thu hồi phiếu → ghi đè đúng dòng cũ, không thêm dòng');
const t2=JSON.parse(ctx.doGet({parameter:{action:'tonghop',mk:'matkhau123'}}).t);
ok(t2.giao.length===2&&!t2.phieu.some(p=>p.ten==='GiaoPhieu'),'tổng hợp trả kèm lịch giao, không coi GiaoPhieu là phiếu');
