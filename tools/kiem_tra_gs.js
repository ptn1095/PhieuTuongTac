// Chạy thử mã Apps Script (NhanDiem.gs) với một Google Sheet giả lập: node tools/kiem_tra_gs.js
const fs=require('fs'),vm=require('vm');
const src=fs.readFileSync(process.argv[2] || require('path').join(__dirname, 'NhanDiem.gs'),'utf8').replace("const MAT_KHAU = 'doi-mat-khau-nay'","const MAT_KHAU = 'matkhau123'");
function Sheet(name){this.name=name;this.rows=[];}
Sheet.prototype={getName(){return this.name},getLastRow(){return this.rows.length},appendRow(r){this.rows.push(r)},
 getRange(r,c,nr,nc){const sh=this;nr=nr||1;nc=nc||1;return{getValues(){return sh.rows.slice(r-1,r-1+nr).map(x=>x.slice(c-1,c-1+nc))},getDisplayValues(){return this.getValues().map(x=>x.map(v=>v==null?'':String(v)))},
 setValues(v){v.forEach((row,i)=>{sh.rows[r-1+i]=sh.rows[r-1+i]||[];row.forEach((x,j)=>sh.rows[r-1+i][c-1+j]=x);});return this},setNumberFormat(){return this},insertCheckboxes(){return this},setWrap(){return this},getValue(){return (sh.rows[r-1]||[])[c-1]},setFontWeight(){return this},setBackground(){return this}}},
 setFrozenRows(){},setColumnWidths(){},setColumnWidth(){}};
const sheets=[new Sheet('Trang tính1'),new Sheet('GiaoPhieu')];  // GiaoPhieu: cô tạo sẵn, còn trống
const ds=new Sheet('DanhSach');ds.rows=[['Lớp','Họ và tên'],['5A1','An'],['5A1','Bình']];sheets.push(ds);
const ss={getSheetByName:n=>sheets.find(s=>s.name===n)||null,insertSheet:n=>{const s=new Sheet(n);sheets.push(s);return s},getSheets:()=>sheets};
let slept=0;
const cacheMap={};
const ctx={process,CacheService:{getScriptCache:()=>({get:k=>cacheMap[k]||null,put:(k,v)=>{cacheMap[k]=v;}})},Session:{getScriptTimeZone:()=>'Asia/Ho_Chi_Minh'},SpreadsheetApp:{getActiveSpreadsheet:()=>ss},LockService:{getScriptLock:()=>({waitLock(){},releaseLock(){}})},Utilities:{sleep:ms=>slept+=ms},
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
ctx.Utilities.formatDate=()=>'2026-11-11 08:00';ctx.Utilities.base64Encode=x=>Buffer.from(x).toString('base64');
let gg=JSON.parse(ctx.doGet({parameter:{action:'datgiao',mk:'sai',ds:'[]'}}).t);ok(!gg.ok,'giao phiếu: sai mật khẩu → từ chối');
gg=JSON.parse(ctx.doGet({parameter:{action:'datgiao',mk:'matkhau123',ds:JSON.stringify([{slug:'tin9-a',khoi:'khoi-9',mo:'2026-11-16',dong:'2026-11-22'},{slug:'tin9-b',khoi:'khoi-5'}])}}).t);
ok(gg.ok&&gg.giao.length===2&&gg.giao[0].join('|')==='tin9-a|khoi-9|2026-11-16|2026-11-22||2026-11-11 08:00','giao 2 phiếu một lần (hàng loạt) → trang tính GiaoPhieu có 2 dòng');
gg=JSON.parse(ctx.doGet({parameter:{action:'datgiao',mk:'matkhau123',ds:JSON.stringify([{slug:'tin9-a',thuhoi:true}])}}).t);
ok(gg.giao.length===2&&gg.giao[0][4]==='1','thu hồi phiếu → ghi đè đúng dòng cũ, không thêm dòng');
const t2=JSON.parse(ctx.doGet({parameter:{action:'tonghop',mk:'matkhau123'}}).t);
ok(t2.giao.length===2&&!t2.phieu.some(p=>p.ten==='GiaoPhieu'),'tổng hợp trả kèm lịch giao, không coi GiaoPhieu là phiếu');

// Tin nhắn học sinh
vm.runInContext('this.doPost=doPost;',ctx);
const tn=ctx.doPost({parameter:{action:'tinnhan',ten:'Bé An',lop:'5A1',phieu:'Phiếu X',tin:'=HYPERLINK("x") cô ơi em chưa hiểu bài 2'}}).t;
const shT=sheets.find(s=>s.name==='TinNhan');
ok(tn==='ok'&&shT&&shT.rows.length===2&&shT.rows[1][1]==='Bé An'&&shT.rows[1][4].startsWith("'="),'tin nhắn → ghi vào trang tính TinNhan, chặn nội dung bắt đầu bằng "="');
ok(ctx.doPost({parameter:{action:'tinnhan',ten:'Bé An',lop:'5A1',tin:'gửi lại ngay'}}).t==='cham'&&shT.rows.length===2,'gửi liên tục (< 20 giây) → không ghi thêm');
const th=JSON.parse(ctx.doGet({parameter:{action:'tonghop',mk:'matkhau123'}}).t);
ok(!th.phieu.some(p=>p.ten==='TinNhan')&&!JSON.stringify(th).includes('chưa hiểu bài 2'),'tin nhắn KHÔNG lộ ra ở bất kì lệnh đọc nào (kể cả trang tổng hợp)');

// Khớp tên khi nhận bài + cô ghép tay
const shA=sheets.find(s=>s.name==='Phiếu A');
ok(shA.rows[0][7]==='Tên trong danh sách'&&shA.rows[1][7]==='An'&&shA.rows[1][8]==='Chắc chắn','nộp bài "An" → cột Tên trong danh sách = An, Mức khớp = Chắc chắn');
ctx.doGet({parameter:{phieu:'Phiếu A',ten:'Binh',lop:'5A1',diem:'7'}});
ok(shA.rows[2][7]==='Bình'&&shA.rows[2][8]==='Chắc chắn','gõ "Binh" (không dấu) → tự khớp Bình');
let r9=ctx.doGet({parameter:{phieu:'Phiếu A',ten:'Bình',lop:'5A1',diem:'9'}});
ok(r9.h.includes('đã nộp bài này rồi'),'"Bình" nộp lại (lần trước gõ "Binh") → chặn nộp trùng theo tên chuẩn');
ctx.doGet({parameter:{phieu:'Phiếu A',ten:'Bé Su',lop:'5A1',diem:'6'}});
ok(shA.rows[3][8]==='Không thấy trong danh sách','gõ biệt danh "Bé Su" → Không thấy trong danh sách');
let gh=JSON.parse(ctx.doGet({parameter:{action:'ghepten',mk:'sai',lop:'5A1',tengo:'Bé Su',tenchuan:'Bình'}}).t);
ok(!gh.ok,'ghép tên: sai mật khẩu → từ chối');
gh=JSON.parse(ctx.doGet({parameter:{action:'ghepten',mk:'matkhau123',lop:'5A1',tengo:'Bé Su',tenchuan:'An'}}).t);
ok(gh.ok&&gh.ghep.length===1&&shA.rows[3][7]==='An'&&shA.rows[3][8]==='Cô đã ghép','cô ghép "Bé Su" → An: lưu GhepTen + sửa bài đã nộp');
ctx.doGet({parameter:{phieu:'Phiếu B2',ten:'bé su',lop:'5A1',diem:'8'}});
const shB=sheets.find(s=>s.name==='Phiếu B2');
ok(shB.rows[1][7]==='An'&&shB.rows[1][8]==='Chắc chắn','phiếu sau em gõ "bé su" → tự nhận ra là An (nhờ cô đã ghép)');
const th3=JSON.parse(ctx.doGet({parameter:{action:'tonghop',mk:'matkhau123'}}).t);
ok(th3.ghep.length===1&&th3.phieu.find(p=>p.ten==='Phiếu A').hang[0].length===9&&!th3.phieu.some(p=>p.ten==='GhepTen'),'tổng hợp trả kèm bảng ghép tên và 2 cột mới');
// Hai bản hàm khopTen (trang web và Google Sheet) cho cùng kết quả
const kWeb=require('../assets/js/khopten.js');
const DS2=[['5A2','Nguyễn Văn An'],['5A2','Lê Văn Tâm'],['5A2','Lê Văn Tám'],['5A2','Phạm Gia Huy'],['5A2','Đỗ Hoàng Huy']];
const ca=['Nguyen Van An','An Nguyễn','Huy','Le Van Tam','Nguễn Văn An','xyz','Lê Văn Tám'];
ok(ca.every(t=>JSON.stringify(kWeb(t,'5A2',DS2,[]))===JSON.stringify(vm.runInContext('khopTen('+JSON.stringify(t)+',"5A2",'+JSON.stringify(DS2)+',[])',ctx))),'hàm khopTen ở trang web và ở Google Sheet cho cùng kết quả');
