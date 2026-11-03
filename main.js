/* Shared script for all Byte Nova Academy pages. Original code, split into guarded blocks so each page only runs what it contains. */
/* ===== COURSE DATA: edit/add courses here. cat = core | prog | acc | design ===== */
const COURSES=[
["&#127891;","ADCA","core","Advanced Diploma in Computer Applications","12 months","MS Office, Internet, Tally, DTP, programming basics."],
["&#128187;","DCA","core","Diploma in Computer Applications","6 months","Computer fundamentals, Windows, MS Office, internet."],
["&#128196;","DOAP","core","Diploma in Office Automation & Publishing","6 months","Word, Excel, PowerPoint, Photoshop basics, typing."],
["&#127941;","PGDCA","core","Post Graduate Diploma in Computer Applications","12 months","Advanced office, databases, web and programming."],
["&#129534;","Tally Prime with GST","acc","Accounting software with GST returns and billing","3 months","Ledgers, vouchers, GST, inventory, reports."],
["&#128210;","Financial Accounting","acc","Core accounting principles done on a computer","3 months","Journal, ledger, trial balance, final accounts."],
["&#128013;","Python","prog","From first program to real scripts and data work","3 months","Syntax, functions, files, libraries, mini projects."],
["&#9881;","C Programming","prog","Learn logic building the classic way","2 months","Loops, arrays, functions, pointers."],
["&#128295;","C++","prog","Object-oriented programming from the ground up","3 months","Classes, inheritance, STL, projects."],
["&#128200;","Data Analytics","prog","Turn raw data into decisions","3 months","Excel, Power BI, SQL basics, dashboards."],
["&#129489;&#8205;&#128187;","Coding Fundamentals","prog","Perfect first step for school and college students","1 month","Logic, flowcharts, basic code in simple steps."],
["&#127760;","Web Designing","design","Build responsive websites with HTML, CSS, JS","3 months","HTML5, CSS3, JavaScript, hosting a site."],
["&#127912;","Graphic Designing","design","Photoshop and Canva for posters and social media","3 months","Layout, colour, logos, banners, print basics."],
["&#127916;","Video Editing","design","Edit reels, ads and event videos","2 months","Cuts, audio, titles, effects, export."],
["&#129302;","AI Tools & ChatGPT","design","Use AI to study, work and earn faster","1 month","Prompting, content, research, automation."],
["&#128226;","Digital Marketing","design","Promote businesses online","3 months","SEO, social media, ads, analytics."],
["&#9000;","Typing (English & Hindi)","core","Speed and accuracy for exams and jobs","2 months","Touch typing, Hindi Kruti/Mangal, speed tests."],
["&#128483;","Spoken English","design","Speak with confidence","3 months","Grammar, vocabulary, speaking practice."],
["&#129529;","NTT","core","Nursery Teacher Training","12 months","Child psychology, activities, teaching methods."],
["&#129496;","YOGA Certification","core","Certificate course in yoga","6 months","Asanas, pranayama, theory, teaching basics."]
];
const WA="917745036055";
const cards=document.getElementById("cards"),sel=document.getElementById("c");
COURSES.forEach(c=>{
  if(cards)cards.insertAdjacentHTML("beforeend",`<article class="glass course rv" data-c="${c[2]}"><span class="ico">${c[0]}</span><span class="badge">${{core:"Core Diploma",prog:"Programming",acc:"Accounting",design:"Design & Digital"}[c[2]]}</span><h3>${c[1]}</h3><p>${c[3]}. ${c[5]}</p><span class="dur">Duration: ${c[4]}</span><a class="btn" href="https://wa.me/${WA}?text=${encodeURIComponent("Hi Byte Nova Academy, I want to enroll in "+c[1].replace(/&amp;/g,"&"))}" target="_blank" rel="noopener">Enroll Now</a></article>`);
  if(sel)sel.insertAdjacentHTML("beforeend",`<option>${c[1]}</option>`);
});
if(document.getElementById("tabs"))document.getElementById("tabs").addEventListener("click",e=>{
  const t=e.target.closest(".tab");if(!t)return;
  document.querySelectorAll(".tab").forEach(b=>b.classList.toggle("on",b===t));
  document.querySelectorAll(".course").forEach(el=>el.classList.toggle("hide",t.dataset.f!=="all"&&el.dataset.c!==t.dataset.f));
});
/* Mobile menu */
const burger=document.getElementById("burger"),links=document.getElementById("links");
burger.onclick=()=>burger.setAttribute("aria-expanded",links.classList.toggle("open"));
links.addEventListener("click",e=>{if(e.target.tagName==="A")links.classList.remove("open")});
if(document.getElementById("vform")){
/* ===== MOCK CERTIFICATE DATABASE: replace with real records or an API later ===== */
const CERTS={
"BN-2026-001":{name:"Rahul Patil",course:"ADCA",grade:"A+ (87%)",date:"12 Jan 2026"},
"BN-2026-002":{name:"Sneha Jadhav",course:"Tally Prime with GST",grade:"A (81%)",date:"28 Feb 2026"},
"BN-2026-003":{name:"Amit Shinde",course:"Python",grade:"A+ (90%)",date:"15 Mar 2026"}};
document.getElementById("vform").addEventListener("submit",e=>{
  e.preventDefault();
  const id=document.getElementById("vin").value.trim().toUpperCase(),o=document.getElementById("vout"),r=CERTS[id];
  o.innerHTML=r?`<div class="ok"><div class="qr">QR<br>STAMP</div><span class="tag">VERIFIED OFFICIAL</span><dl><dt>Registration</dt><dd>${id}</dd><dt>Student</dt><dd>${r.name}</dd><dt>Course</dt><dd>${r.course}</dd><dt>Grade</dt><dd>${r.grade}</dd><dt>Issue date</dt><dd>${r.date}</dd><dt>Branch code</dt><dd>EMAX/A20392</dd></dl></div>`
  :`<span class="err">No record found for "${id.replace(/</g,"")}". Check the number and try again, or use the E-Max India portal below.</span>`;
});

}
if(document.getElementById("demo")){
/* Demo form: real links (WhatsApp / Email / Copy). EMAILS: edit MAIL */
const MAIL="bytenova777@gmail.com,gauravgardade7@gmail.com";
const form=document.getElementById("demo"),fb=document.getElementById("fb"),wab=document.getElementById("wabtn"),mb=document.getElementById("mailbtn");
const val=i=>document.getElementById(i).value.trim();
const msg=()=>`Hi Byte Nova Academy, I want a free demo.\nName: ${val("n")}\nPhone: ${val("p")}\nCourse: ${val("c")}\nMessage: ${val("m")}`;
const setLinks=()=>{wab.href=`https://api.whatsapp.com/send?phone=${WA}&text=${encodeURIComponent(msg())}`;mb.href=`mailto:${MAIL}?subject=${encodeURIComponent("Free demo request - Byte Nova Academy")}&body=${encodeURIComponent(msg())}`};
form.addEventListener("input",setLinks);setLinks();
form.addEventListener("submit",e=>e.preventDefault());
[wab,mb].forEach(l=>l.addEventListener("click",e=>{if(!form.reportValidity()){e.preventDefault();return}setLinks();fb.textContent="Opening... if nothing opens, use Copy message and send it to +91 7745036055."}));
document.getElementById("cp").addEventListener("click",async()=>{
  if(!form.reportValidity())return;
  try{await navigator.clipboard.writeText(msg());fb.textContent="Message copied. Paste it in WhatsApp or email."}catch(_){fb.textContent="Copy failed. Please call +91 7745036055."}
});

}
if(document.getElementById("maplink")){
/* MAP: change MAPQ to your exact place for a precise pin */
const MAPQ="Atpadi, Sangli, Maharashtra 415208";
document.getElementById("maplink").href="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(MAPQ);
document.getElementById("mapshow").addEventListener("click",()=>{
  const f=document.createElement("iframe");f.title="Map of Byte Nova Academy";f.loading="lazy";
  f.src="https://www.google.com/maps?q="+encodeURIComponent(MAPQ)+"&output=embed";
  document.getElementById("mapbox").prepend(f);document.querySelector("#mapbox svg").remove();document.getElementById("mapshow").remove();
});

}
if(document.getElementById("cards")){
/* SEO: course list for Google (generated from COURSES above) */
(()=>{const d={"@context":"https://schema.org","@type":"ItemList","itemListElement":COURSES.map((c,i)=>({"@type":"ListItem","position":i+1,"item":{"@type":"Course","name":c[1].replace(/&amp;/g,"&"),"description":c[3].replace(/&amp;/g,"&"),"provider":{"@type":"EducationalOrganization","name":"Byte Nova Academy"}}}))};
const t=document.createElement("script");t.type="application/ld+json";t.textContent=JSON.stringify(d);document.head.appendChild(t)})();

}
if(document.getElementById("docgrid")){
/* ===== OWNER DOCUMENTS: edit file names + captions here (names are case-sensitive on GitHub) ===== */
const DOCS=[
["images/cert_iso.jpg","ISO Certificate"],
["images/cert.jpg","Certificate"]
/* ID cards are NOT shown on purpose. To show them, remove the comment markers below, but blur the ID numbers first.
["images/front_id.jpg","ID Card (front)"]
,["images/back_id.jpg","ID Card (back)"] */
];
const dg=document.getElementById("docgrid"),lb=document.getElementById("lb"),lbi=document.getElementById("lbi"),lbc=document.getElementById("lbc");let cur=0;
DOCS.forEach((d,i)=>{
  const b=document.createElement("button");b.type="button";b.className="glass doc";b.setAttribute("aria-label","Open "+d[1]);
  const im=new Image();im.className="thumb";im.src=d[0];im.alt=d[1];im.loading="lazy";
  im.onerror=()=>{const p=document.createElement("span");p.className="ph";p.textContent="Add "+d[0];im.replaceWith(p)};
  b.appendChild(im);b.insertAdjacentHTML("beforeend",`<span class="cap">${d[1]}</span>`);
  b.addEventListener("click",()=>show(i));dg.appendChild(b);
});
function show(i){cur=(i+DOCS.length)%DOCS.length;lbi.src=DOCS[cur][0];lbi.alt=DOCS[cur][1];lbc.textContent=DOCS[cur][1];lb.classList.add("open")}
const hide=()=>lb.classList.remove("open");
document.getElementById("lbx").onclick=hide;document.getElementById("lbp").onclick=()=>show(cur-1);document.getElementById("lbn").onclick=()=>show(cur+1);
lb.addEventListener("click",e=>{if(e.target===lb)hide()});
addEventListener("keydown",e=>{if(!lb.classList.contains("open"))return;if(e.key==="Escape")hide();if(e.key==="ArrowLeft")show(cur-1);if(e.key==="ArrowRight")show(cur+1)});

}
/* Reveal + counters */
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll(".rv").forEach(el=>io.observe(el));
document.querySelectorAll("[data-n]").forEach(el=>{
  const end=+el.dataset.n;let n=0;const step=Math.max(1,Math.ceil(end/40));
  const t=setInterval(()=>{n=Math.min(end,n+step);el.textContent=n;if(n>=end)clearInterval(t)},40);
});
if(document.getElementById("yr")){
document.getElementById("yr").textContent=new Date().getFullYear();

}
if(document.getElementById("grid")){
/* Hero cyber-grid with drifting glow nodes */
(()=>{
  const cv=document.getElementById("grid"),x=cv.getContext("2d");let w,h,P=[];
  const fit=()=>{w=cv.width=cv.offsetWidth;h=cv.height=cv.offsetHeight;P=Array.from({length:Math.min(60,w/20|0)},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4}))};
  fit();addEventListener("resize",fit);
  const calm=matchMedia("(prefers-reduced-motion:reduce)").matches;
  (function draw(){
    x.clearRect(0,0,w,h);x.strokeStyle="rgba(0,210,255,.06)";
    for(let i=0;i<w;i+=48){x.beginPath();x.moveTo(i,0);x.lineTo(i,h);x.stroke()}
    for(let j=0;j<h;j+=48){x.beginPath();x.moveTo(0,j);x.lineTo(w,j);x.stroke()}
    P.forEach((p,i)=>{
      if(!calm){p.x=(p.x+p.vx+w)%w;p.y=(p.y+p.vy+h)%h}
      x.fillStyle="rgba(0,210,255,.8)";x.beginPath();x.arc(p.x,p.y,1.6,0,6.3);x.fill();
      for(let k=i+1;k<P.length;k++){const d=Math.hypot(p.x-P[k].x,p.y-P[k].y);if(d<110){x.strokeStyle=`rgba(0,210,255,${.18*(1-d/110)})`;x.beginPath();x.moveTo(p.x,p.y);x.lineTo(P[k].x,P[k].y);x.stroke()}}
    });
    if(!calm)requestAnimationFrame(draw);
  })();
})();

}

/* highlight current page in the menu */
(()=>{const f=(location.pathname.split("/").pop()||"index.html").toLowerCase();document.querySelectorAll(".links a:not(.btn)").forEach(a=>{if(a.getAttribute("href").toLowerCase()===f)a.classList.add("act")})})();
