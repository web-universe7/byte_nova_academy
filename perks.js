/* Student Perks page. Edit the three lists to use your own photos and text. */
const $=id=>document.getElementById(id);

/* ===== 1) WHAT WE PROVIDE: [image, title, text, fallback design] =====
   Put your real photos in the images folder with these names (case-sensitive on GitHub). */
const SLIDES=[
["images/provide_id.jpg","Student ID Card","Every enrolled student receives an official ID card.","id"],
["images/provide_certificate.jpg","Verified Certificate","ISO 9001:2015 certificate with a QR code that employers can scan.","cert"],
["images/provide_ebook.jpg","E-Book","Course e-books included with your course.","ebook"],
["images/provide_portal.jpg","Student Login Portal","Check results, download admit cards and see exam schedules in one place.","portal"]
];
/* ===== 2) STUDY MATERIAL (notes photos): [image, caption, subtitle, emoji] ===== */
const NOTES=[
["images/notes_1.jpg","MS Word & Excel Notes","Formulas, shortcuts, practice sheets","&#128221;"],
["images/notes_2.jpg","Tally Prime Notes","Vouchers, ledgers and GST steps","&#129534;"],
["images/notes_3.jpg","Python Notes","Syntax, loops, functions, mini projects","&#128013;"],
["images/notes_4.jpg","C & C++ Notes","Logic building and programs","&#9881;"],
["images/notes_5.jpg","HTML & CSS Notes","Tags, layouts, responsive design","&#127760;"],
["images/notes_6.jpg","Typing Practice Sheets","English and Hindi speed practice","&#9000;"]
];
/* ===== 3) CLASS POSTERS: [image, title, text, badge, emoji, gradient, course name for WhatsApp] ===== */
const POSTERS=[
["images/poster_python.jpg","Python Classes","3 months of practical lab training, from first program to real scripts.","PYTHON","&#128013;","linear-gradient(160deg,#0070f3,#00d2ff)","Python"],
["images/poster_c_cpp.jpg","C & C++ Programming","Build your logic and learn object-oriented programming the right way.","C / C++","&#9881;","linear-gradient(160deg,#7c3aed,#ff5fa2)","C Programming / C++"],
["images/poster_tally.jpg","Tally Prime with GST","Ledgers, vouchers, GST returns, inventory and reports.","TALLY","&#129534;","linear-gradient(160deg,#0f766e,#22c55e)","Tally Prime with GST"],
["images/poster_web.jpg","Web Designing","Build responsive websites with HTML5, CSS3 and JavaScript.","WEB","&#127760;","linear-gradient(160deg,#f59e0b,#ef4444)","Web Designing"],
["images/poster_demo.jpg","Free Demo Class","Admissions open. Attend a demo before you enrol.","ADMISSIONS OPEN","&#127873;","linear-gradient(160deg,#be185d,#7c3aed)","a free demo class"]
];

/* ---------- designed fallbacks (shown until your photo file exists) ---------- */
const LOGO='<span class="logo" role="img" aria-label="logo"></span>';
const VIS={
id:()=>`<div class="vis v-id"><div class="top">${LOGO}Byte Nova Academy</div><div class="mid"><div class="ph"><span>&#128100;</span></div><div class="lns"><i style="width:90%"></i><i style="width:65%"></i><i style="width:45%"></i></div></div><div class="bot"><span>STUDENT ID CARD &middot; SAMPLE</span><span>EMAX/A20392</span></div></div>`,
cert:()=>`<div class="vis v-cert"><span class="m">&#127941;</span><b>Certificate of Completion</b><i></i><i style="width:9em"></i><small>ISO 9001:2015 &middot; QR VERIFIED &middot; SAMPLE</small></div>`,
ebook:()=>`<div class="vis v-book"><span class="m">&#128216;</span><b>Byte Nova<br>E-Book</b><small>Notes &middot; Practice &middot; Projects<br>SAMPLE COVER</small></div>`,
portal:()=>`<div class="vis v-portal"><div class="bar"><i></i><i></i><i></i>&nbsp; student portal</div><div class="bd"><div class="fm"><b>Student Login</b><i>Roll number</i><i>Password</i><u>Login</u></div></div></div>`
};
const swap=(im,html)=>{im.outerHTML=html};

/* ---------- Section 1: slider ---------- */
(()=>{
  const tr=$("sl-track"),dots=$("sl-dots"),bar=$("sl-bar"),sl=$("slider");let i=0,timer;
  SLIDES.forEach((s,k)=>{
    const d=document.createElement("div");d.className="sl";d.setAttribute("aria-label",(k+1)+" of "+SLIDES.length);
    const im=new Image();im.src=s[0];im.alt=s[1];im.onerror=()=>swap(im,VIS[s[3]]());
    d.appendChild(im);d.insertAdjacentHTML("beforeend",`<div class="cap"><b>${s[1]}</b><span>${s[2]}</span></div>`);tr.appendChild(d);
    const b=document.createElement("button");b.type="button";b.setAttribute("aria-label","Go to slide "+(k+1));b.onclick=()=>{go(k);play()};dots.appendChild(b);
  });
  const calm=matchMedia("(prefers-reduced-motion:reduce)").matches,GAP=4200;
  function go(n){i=(n+SLIDES.length)%SLIDES.length;tr.style.transform=`translateX(-${i*100}%)`;[...dots.children].forEach((b,k)=>b.classList.toggle("on",k===i));
    bar.style.transition="none";bar.style.width="0";if(!calm){void bar.offsetWidth;bar.style.transition=`width ${GAP}ms linear`;bar.style.width="100%"}}
  function play(){clearInterval(timer);if(!calm)timer=setInterval(()=>go(i+1),GAP)}
  $("sl-prev").onclick=()=>{go(i-1);play()};$("sl-next").onclick=()=>{go(i+1);play()};
  sl.addEventListener("mouseenter",()=>{clearInterval(timer);bar.style.transition="none";bar.style.width="0"});sl.addEventListener("mouseleave",()=>{go(i);play()});
  let x0=null;sl.addEventListener("touchstart",e=>{x0=e.touches[0].clientX;clearInterval(timer)},{passive:true});
  sl.addEventListener("touchend",e=>{if(x0!==null){const dx=e.changedTouches[0].clientX-x0;if(Math.abs(dx)>40)go(i+(dx<0?1:-1));x0=null}play()});
  go(0);play();
})();

/* ---------- Section 2: notes photos marquee ---------- */
(()=>{
  const tr=document.createElement("div");tr.className="mq-track";
  [false,true].forEach(copy=>NOTES.forEach(n=>{
    const f=document.createElement("figure");f.className="mq-item";if(copy)f.setAttribute("aria-hidden","true");
    const im=new Image();im.src=n[0];im.alt=n[1];im.onerror=()=>swap(im,`<div class="nt"><b>${n[1]}</b><span>${n[2]}</span><span class="st">${n[3]}</span></div>`);
    f.appendChild(im);f.insertAdjacentHTML("beforeend",`<figcaption>${n[1]}</figcaption>`);tr.appendChild(f);
  }));
  $("mq-notes").appendChild(tr);
})();

/* ---------- Section 3: class poster deck ---------- */
(()=>{
  const deck=$("deck"),N=POSTERS.length;let cur=0,timer;
  const els=POSTERS.map((p,k)=>{
    const d=document.createElement("div");d.className="poster";d.setAttribute("role","img");d.setAttribute("aria-label",p[1]);
    const im=new Image();im.src=p[0];im.alt=p[1];
    im.onerror=()=>swap(im,`<div class="pst" style="background:${p[5]}"><span class="tag">${p[3]}</span><i>${p[4]}</i><h3>${p[1]}</h3><p>${p[2]}</p><small>Byte Nova Academy, Atpadi &middot; +91 7745036055</small></div>`);
    d.appendChild(im);d.addEventListener("click",()=>{show(cur+1);auto()});deck.appendChild(d);return d});
  function show(n){
    cur=(n+N)%N;
    els.forEach((d,k)=>{const r=(k-cur+N)%N;
      d.style.zIndex=N-r;d.style.opacity=r<3?1:0;d.style.pointerEvents=r===0?"auto":"none";
      const q=Math.min(r,2);d.style.transform=`translate(${q*28}px,${-q*10}px) scale(${1-q*.06}) rotate(${q*3}deg)`});
    const p=POSTERS[cur];$("dk-t").textContent=p[1];$("dk-p").textContent=p[2];
    $("dk-wa").href=`https://wa.me/917745036055?text=${encodeURIComponent("Hi Byte Nova Academy, I want to enroll in "+p[6])}`}
  function auto(){clearInterval(timer);if(!matchMedia("(prefers-reduced-motion:reduce)").matches)timer=setInterval(()=>show(cur+1),3600)}
  $("dk-prev").onclick=()=>{show(cur-1);auto()};$("dk-next").onclick=()=>{show(cur+1);auto()};
  deck.addEventListener("mouseenter",()=>clearInterval(timer));deck.addEventListener("mouseleave",auto);
  show(0);auto();
})();
