import{r as me,s as ee,n as D,f as he,h as Ie}from"../chunks/scheduler.8ea2a124.js";import{d as Z,S as te,i as le,g as d,h as u,y as A,k as n,a as O,f as v,s as S,j as C,c as M,l as R,x as s,z as K,e as fe,m as Y,n as X,o as de,r as ae,u as ne,v as oe,t as re,w as ce}from"../chunks/index.1a58b1fe.js";function ke(o){return(o==null?void 0:o.length)!==void 0?o:Array.from(o)}function xe(o,e){o.d(1),e.delete(o.key)}function Ee(o,e,i,t,p,f,l,m,h,I,H,x){let g=o.length,L=f.length,E=g;const b={};for(;E--;)b[o[E].key]=E;const k=[],$=new Map,j=new Map,T=[];for(E=L;E--;){const a=x(p,f,E),r=i(a);let c=l.get(r);c?t&&T.push(()=>c.p(a,e)):(c=I(r,a),c.c()),$.set(r,k[E]=c),r in b&&j.set(r,Math.abs(E-b[r]))}const w=new Set,y=new Set;function _(a){Z(a,1),a.m(m,H),l.set(a.key,a),H=a.first,L--}for(;g&&L;){const a=k[L-1],r=o[g-1],c=a.key,B=r.key;a===r?(H=a.first,g--,L--):$.has(B)?!l.has(c)||w.has(c)?_(a):y.has(B)?g--:j.get(c)>j.get(B)?(y.add(c),_(a)):(w.add(B),g--):(h(r,l),g--)}for(;g--;){const a=o[g];$.has(a.key)||h(a,l)}for(;L;)_(k[L-1]);return me(T),k}function $e(o){let e,i="<p>I am a third year computer engineering at Boston University. Currently, I am on a software track that focuses on backend development and machine learning.</p>";return{c(){e=d("section"),e.innerHTML=i,this.h()},l(t){e=u(t,"SECTION",{id:!0,class:!0,"data-svelte-h":!0}),A(e)!=="svelte-1jbyhtu"&&(e.innerHTML=i),this.h()},h(){n(e,"id","about"),n(e,"class","about svelte-tbsw7a")},m(t,p){O(t,e,p)},p:D,i:D,o:D,d(t){t&&v(e)}}}class Le extends te{constructor(e){super(),le(this,e,null,$e,ee,{})}}function je(o){let e,i,t,p,f,l,m="Cole Resurreccion",h,I,H='<img src="/github-mark-white.png" alt="logo" class="logo svelte-11l4i0o"/>',x,g,L='<img style="width:25px; height:auto; margin-top:7px;" src="/moon-svgrepo-com.svg" alt="nightmode"/>',E,b,k,$,j,T="Home",w,y,_,a="About",r,c,B,U="Skills",Q,z,G,q="Projects",se,N;return{c(){e=d("nav"),i=d("ul"),t=d("li"),p=d("ul"),f=d("li"),l=d("button"),l.textContent=m,h=S(),I=d("a"),I.innerHTML=H,x=S(),g=d("button"),g.innerHTML=L,E=S(),b=d("li"),k=d("ul"),$=d("li"),j=d("button"),j.textContent=T,w=S(),y=d("li"),_=d("button"),_.textContent=a,r=S(),c=d("li"),B=d("button"),B.textContent=U,Q=S(),z=d("li"),G=d("button"),G.textContent=q,this.h()},l(P){e=u(P,"NAV",{class:!0,id:!0});var V=C(e);i=u(V,"UL",{class:!0});var F=C(i);t=u(F,"LI",{class:!0});var ue=C(t);p=u(ue,"UL",{class:!0});var pe=C(p);f=u(pe,"LI",{style:!0});var W=C(f);l=u(W,"BUTTON",{id:!0,style:!0,class:!0,"data-svelte-h":!0}),A(l)!=="svelte-1c1evpa"&&(l.textContent=m),h=M(W),I=u(W,"A",{href:!0,target:!0,rel:!0,class:!0,"data-svelte-h":!0}),A(I)!=="svelte-1l8wojf"&&(I.innerHTML=H),x=M(W),g=u(W,"BUTTON",{tabindex:!0,style:!0,"data-svelte-h":!0}),A(g)!=="svelte-3sklx7"&&(g.innerHTML=L),W.forEach(v),pe.forEach(v),ue.forEach(v),E=M(F),b=u(F,"LI",{class:!0});var ve=C(b);k=u(ve,"UL",{class:!0});var J=C(k);$=u(J,"LI",{class:!0});var ie=C($);j=u(ie,"BUTTON",{class:!0,"data-svelte-h":!0}),A(j)!=="svelte-h0hnf8"&&(j.textContent=T),ie.forEach(v),w=M(J),y=u(J,"LI",{class:!0});var ge=C(y);_=u(ge,"BUTTON",{class:!0,"data-svelte-h":!0}),A(_)!=="svelte-boz1gc"&&(_.textContent=a),ge.forEach(v),r=M(J),c=u(J,"LI",{class:!0});var _e=C(c);B=u(_e,"BUTTON",{class:!0,"data-svelte-h":!0}),A(B)!=="svelte-1h8k1pc"&&(B.textContent=U),_e.forEach(v),Q=M(J),z=u(J,"LI",{class:!0});var be=C(z);G=u(be,"BUTTON",{class:!0,"data-svelte-h":!0}),A(G)!=="svelte-e0lc88"&&(G.textContent=q),be.forEach(v),J.forEach(v),ve.forEach(v),F.forEach(v),V.forEach(v),this.h()},h(){n(l,"id","mainBut"),R(l,"font-weight","500"),n(l,"class","svelte-11l4i0o"),n(I,"href","https://github.com/calsfu"),n(I,"target","_blank"),n(I,"rel","noopener noreferrer"),n(I,"class","svelte-11l4i0o"),n(g,"tabindex","0"),R(g,"background-color","transparent"),R(g,"border","0px"),R(g,"cursor","pointer"),R(f,"display","flex"),R(f,"flex-direction","row"),R(f,"align-items","center"),R(f,"justify-content","center"),n(p,"class","guide svelte-11l4i0o"),n(t,"class","topLeft svelte-11l4i0o"),n(j,"class","svelte-11l4i0o"),n($,"class","guideItem svelte-11l4i0o"),n(_,"class","svelte-11l4i0o"),n(y,"class","guideItem svelte-11l4i0o"),n(B,"class","svelte-11l4i0o"),n(c,"class","guideItem svelte-11l4i0o"),n(G,"class","svelte-11l4i0o"),n(z,"class","guideItem svelte-11l4i0o"),n(k,"class","guide svelte-11l4i0o"),n(b,"class","topRight svelte-11l4i0o"),n(i,"class","headerItems svelte-11l4i0o"),n(e,"class","header svelte-11l4i0o"),n(e,"id","header")},m(P,V){O(P,e,V),s(e,i),s(i,t),s(t,p),s(p,f),s(f,l),s(f,h),s(f,I),s(f,x),s(f,g),s(i,E),s(i,b),s(b,k),s(k,$),s($,j),s(k,w),s(k,y),s(y,_),s(k,r),s(k,c),s(c,B),s(k,Q),s(k,z),s(z,G),se||(N=[K(l,"click",ye),K(g,"click",o[0]),K(j,"click",ye),K(_,"click",Se),K(B,"click",Me),K(G,"click",He)],se=!0)},p:D,i:D,o:D,d(P){P&&v(e),se=!1,me(N)}}}function ye(){window.scrollTo({top:0,behavior:"smooth"})}function Se(){const o=document.getElementById("about"),e=document.getElementById("header");o&&e&&window.scrollTo({top:o.offsetTop-e.offsetHeight,behavior:"smooth"})}function Me(){const o=document.getElementById("skills"),e=document.getElementById("header");o&&e&&window.scrollTo({top:o.offsetTop-e.offsetHeight*3,behavior:"smooth"})}function He(){const o=document.getElementById("projects"),e=document.getElementById("header");o&&e&&window.scrollTo({top:o.offsetTop-e.offsetHeight,behavior:"smooth"})}function Pe(o,e,i){let{darkMode:t=!1}=e;function p(){i(1,t=!t),t?document.documentElement.setAttribute("data-theme","light"):document.documentElement.setAttribute("data-theme","dark")}return o.$$set=f=>{"darkMode"in f&&i(1,t=f.darkMode)},[p,t]}class Be extends te{constructor(e){super(),le(this,e,Pe,je,ee,{darkMode:1})}}function Ne(o){let e,i='<h1 style="font-weight: 400; font-family: &#39;Poppins&#39;, sans-serif;" class="svelte-1f0iedy">Hello, I&#39;m <span class="color_name svelte-1f0iedy">Cole Resurreccion</span></h1> <h4 style="font-weight: 400;">Boston University Computer Engineering 25&#39;</h4>';return{c(){e=d("section"),e.innerHTML=i,this.h()},l(t){e=u(t,"SECTION",{id:!0,class:!0,"data-svelte-h":!0}),A(e)!=="svelte-19cmc1q"&&(e.innerHTML=i),this.h()},h(){n(e,"id","home"),n(e,"class","home svelte-1f0iedy")},m(t,p){O(t,e,p)},p:D,i:D,o:D,d(t){t&&v(e)}}}class Ae extends te{constructor(e){super(),le(this,e,null,Ne,ee,{})}}function Te(o,e,i){const t=o.slice();return t[7]=e[i],t}function Oe(o){let e,i,t,p,f,l,m,h=o[7].title+"",I,H,x,g=o[7].subtitle+"",L,E,b,k=o[7].description+"",$,j,T,w,y=o[7].link&&we(o);return{c(){e=d("div"),i=d("img"),f=S(),l=d("div"),m=d("h2"),I=Y(h),H=S(),x=d("h4"),L=Y(g),E=S(),b=d("p"),$=Y(k),j=S(),T=d("div"),y&&y.c(),w=S(),this.h()},l(_){e=u(_,"DIV",{class:!0});var a=C(e);i=u(a,"IMG",{src:!0,alt:!0,class:!0}),a.forEach(v),f=M(_),l=u(_,"DIV",{class:!0});var r=C(l);m=u(r,"H2",{class:!0});var c=C(m);I=X(c,h),c.forEach(v),H=M(r),x=u(r,"H4",{class:!0});var B=C(x);L=X(B,g),B.forEach(v),E=M(r),b=u(r,"P",{class:!0});var U=C(b);$=X(U,k),U.forEach(v),j=M(r),T=u(r,"DIV",{class:!0});var Q=C(T);y&&y.l(Q),Q.forEach(v),w=M(r),r.forEach(v),this.h()},h(){he(i.src,t=o[7].image)||n(i,"src",t),n(i,"alt",p=o[7].title),n(i,"class","projectImg svelte-idptvj"),n(e,"class","imgBox svelte-idptvj"),n(m,"class","svelte-idptvj"),n(x,"class","svelte-idptvj"),n(b,"class","svelte-idptvj"),n(T,"class","projectInfo svelte-idptvj"),n(l,"class","textBox svelte-idptvj")},m(_,a){O(_,e,a),s(e,i),O(_,f,a),O(_,l,a),s(l,m),s(m,I),s(l,H),s(l,x),s(x,L),s(l,E),s(l,b),s(b,$),s(l,j),s(l,T),y&&y.m(T,null),s(l,w)},p(_,a){a&1&&!he(i.src,t=_[7].image)&&n(i,"src",t),a&1&&p!==(p=_[7].title)&&n(i,"alt",p),a&1&&h!==(h=_[7].title+"")&&de(I,h),a&1&&g!==(g=_[7].subtitle+"")&&de(L,g),a&1&&k!==(k=_[7].description+"")&&de($,k),_[7].link?y?y.p(_,a):(y=we(_),y.c(),y.m(T,null)):y&&(y.d(1),y=null)},d(_){_&&(v(e),v(f),v(l)),y&&y.d()}}}function De(o){let e,i,t=o[7].title+"",p,f,l,m=o[7].subtitle+"",h,I,H,x=o[7].description+"",g,L,E,b,k,$,j,T,w,y,_,a;return{c(){e=d("div"),i=d("h2"),p=Y(t),f=S(),l=d("h4"),h=Y(m),I=S(),H=d("p"),g=Y(x),L=S(),E=d("div"),b=d("a"),k=Y("See More"),j=S(),T=d("div"),w=d("img"),a=S(),this.h()},l(r){e=u(r,"DIV",{class:!0});var c=C(e);i=u(c,"H2",{class:!0});var B=C(i);p=X(B,t),B.forEach(v),f=M(c),l=u(c,"H4",{class:!0});var U=C(l);h=X(U,m),U.forEach(v),I=M(c),H=u(c,"P",{class:!0});var Q=C(H);g=X(Q,x),Q.forEach(v),L=M(c),E=u(c,"DIV",{class:!0});var z=C(E);b=u(z,"A",{href:!0,target:!0,rel:!0,id:!0});var G=C(b);k=X(G,"See More"),G.forEach(v),z.forEach(v),c.forEach(v),j=M(r),T=u(r,"DIV",{class:!0});var q=C(T);w=u(q,"IMG",{src:!0,alt:!0,class:!0}),a=M(q),q.forEach(v),this.h()},h(){n(i,"class","svelte-idptvj"),n(l,"class","svelte-idptvj"),n(H,"class","svelte-idptvj"),n(b,"href",$=o[7].link),n(b,"target","_blank"),n(b,"rel","noopener noreferrer"),n(b,"id","seemorebutton"),n(E,"class","projectInfo svelte-idptvj"),n(e,"class","textBox svelte-idptvj"),he(w.src,y=o[7].image)||n(w,"src",y),n(w,"alt",_=o[7].title),n(w,"class","projectImg svelte-idptvj"),n(T,"class","imgBox svelte-idptvj")},m(r,c){O(r,e,c),s(e,i),s(i,p),s(e,f),s(e,l),s(l,h),s(e,I),s(e,H),s(H,g),s(e,L),s(e,E),s(E,b),s(b,k),O(r,j,c),O(r,T,c),s(T,w),s(T,a)},p(r,c){c&1&&t!==(t=r[7].title+"")&&de(p,t),c&1&&m!==(m=r[7].subtitle+"")&&de(h,m),c&1&&x!==(x=r[7].description+"")&&de(g,x),c&1&&$!==($=r[7].link)&&n(b,"href",$),c&1&&!he(w.src,y=r[7].image)&&n(w,"src",y),c&1&&_!==(_=r[7].title)&&n(w,"alt",_)},d(r){r&&(v(e),v(j),v(T))}}}function we(o){let e,i,t;return{c(){e=d("a"),i=Y("See More"),this.h()},l(p){e=u(p,"A",{href:!0,target:!0,rel:!0,id:!0});var f=C(e);i=X(f,"See More"),f.forEach(v),this.h()},h(){n(e,"href",t=o[7].link),n(e,"target","_blank"),n(e,"rel","noopener noreferrer"),n(e,"id","seemorebutton")},m(p,f){O(p,e,f),s(e,i)},p(p,f){f&1&&t!==(t=p[7].link)&&n(e,"href",t)},d(p){p&&v(e)}}}function Ce(o,e){let i,t;function p(m,h){return m[7].id%2===0?De:Oe}let f=p(e),l=f(e);return{key:o,first:null,c(){i=fe(),l.c(),t=fe(),this.h()},l(m){i=fe(),l.l(m),t=fe(),this.h()},h(){this.first=i},m(m,h){O(m,i,h),l.m(m,h),O(m,t,h)},p(m,h){e=m,f===(f=p(e))&&l?l.p(e,h):(l.d(1),l=f(e),l&&(l.c(),l.m(t.parentNode,t)))},d(m){m&&(v(i),v(t)),l.d(m)}}}function Ue(o){let e,i,t="PROJECTS",p,f,l,m,h,I="Systems",H,x,g,L="OS",E,b,k,$="Machine Learning",j,T,w,y="Hardware/Embedded",_,a,r=[],c=new Map,B,U,Q='Find more <a href="https://github.com/calsfu" target="_blank" rel="noopener noreferrer">here</a>',z,G,q=ke(o[1].filter(o[6]));const se=N=>N[7].id;for(let N=0;N<q.length;N+=1){let P=Te(o,q,N),V=se(P);c.set(V,r[N]=Ce(V,P))}return{c(){e=d("section"),i=d("h1"),i.textContent=t,p=S(),f=d("div"),l=d("ul"),m=d("li"),h=d("button"),h.textContent=I,H=S(),x=d("li"),g=d("button"),g.textContent=L,E=S(),b=d("li"),k=d("button"),k.textContent=$,j=S(),T=d("li"),w=d("button"),w.textContent=y,_=S(),a=d("div");for(let N=0;N<r.length;N+=1)r[N].c();B=S(),U=d("p"),U.innerHTML=Q,this.h()},l(N){e=u(N,"SECTION",{class:!0,id:!0});var P=C(e);i=u(P,"H1",{class:!0,"data-svelte-h":!0}),A(i)!=="svelte-gc70j8"&&(i.textContent=t),p=M(P),f=u(P,"DIV",{class:!0});var V=C(f);l=u(V,"UL",{style:!0});var F=C(l);m=u(F,"LI",{});var ue=C(m);h=u(ue,"BUTTON",{class:!0,"data-svelte-h":!0}),A(h)!=="svelte-s9xrvx"&&(h.textContent=I),ue.forEach(v),H=M(F),x=u(F,"LI",{});var pe=C(x);g=u(pe,"BUTTON",{class:!0,"data-svelte-h":!0}),A(g)!=="svelte-1nsjdvo"&&(g.textContent=L),pe.forEach(v),E=M(F),b=u(F,"LI",{});var W=C(b);k=u(W,"BUTTON",{class:!0,"data-svelte-h":!0}),A(k)!=="svelte-12x6xgw"&&(k.textContent=$),W.forEach(v),j=M(F),T=u(F,"LI",{});var ve=C(T);w=u(ve,"BUTTON",{class:!0,"data-svelte-h":!0}),A(w)!=="svelte-dgin4d"&&(w.textContent=y),ve.forEach(v),F.forEach(v),V.forEach(v),_=M(P),a=u(P,"DIV",{class:!0});var J=C(a);for(let ie=0;ie<r.length;ie+=1)r[ie].l(J);J.forEach(v),B=M(P),U=u(P,"P",{style:!0,"data-svelte-h":!0}),A(U)!=="svelte-zp5245"&&(U.innerHTML=Q),P.forEach(v),this.h()},h(){n(i,"class","projectTitle svelte-idptvj"),n(h,"class","button-62 svelte-idptvj"),n(g,"class","button-62 svelte-idptvj"),n(k,"class","button-62 svelte-idptvj"),n(w,"class","button-62 svelte-idptvj"),R(l,"display","flex"),R(l,"flex-direction","row"),R(l,"align-items","center"),R(l,"justify-content","center"),R(l,"list-style","none"),R(l,"border","none"),R(l,"gap","15px"),n(f,"class","chooseProject"),n(a,"class","projectBox svelte-idptvj"),R(U,"color","var(--text-color)"),n(e,"class","projects svelte-idptvj"),n(e,"id","projects")},m(N,P){O(N,e,P),s(e,i),s(e,p),s(e,f),s(f,l),s(l,m),s(m,h),s(l,H),s(l,x),s(x,g),s(l,E),s(l,b),s(b,k),s(l,j),s(l,T),s(T,w),s(e,_),s(e,a);for(let V=0;V<r.length;V+=1)r[V]&&r[V].m(a,null);s(e,B),s(e,U),z||(G=[K(h,"click",o[2]),K(g,"click",o[3]),K(k,"click",o[4]),K(w,"click",o[5])],z=!0)},p(N,[P]){P&3&&(q=ke(N[1].filter(N[6])),r=Ee(r,P,se,1,N,q,c,a,xe,Ce,null,Te))},i:D,o:D,d(N){N&&v(e);for(let P=0;P<r.length;P+=1)r[P].d();z=!1,me(G)}}}function Re(o,e,i){let t=1;return[t,[{id:1,title:"Model Processor",subtitle:"Verilog Digital Logic",description:"Created a model CPU with 8 registers and a 16-bit bus. Supports 8 functions lie, ADD, SUB, MULT, JUMP. Recieved information from ROM storage and a program conter. Supports FPGA.",link:"https://github.com/calsfu/verilog_processor",image:"/modelProcessor.png",group:4},{id:2,title:"Bike Light",subtitle:"Microcontroller Intergration",description:"A bike light that turns off in bright settings and gets brighter as speed increases. Collaborated in a group to create a circuit diagram, reasearch and purchase parts, and wrote code for an Arduino microcontroller.",link:"",image:"/BikeLightPhoto.png",group:4},{id:11,title:"Training App",subtitle:"Typescript, React Native, PostgreSQL, Python, Flask, AWS",description:"Created a mobile app using React Native and Typescript. Utilized a PostgreSQL database to store user information and a Flask server to handle requests. Deployed server on AWS EC2 instance.",link:"",image:"/trainingapp.png",group:1},{id:12,title:"Scheduling Discord Bot",subtitle:"Typescript, SQLite, Discord.js",description:"Engineered a custom Discord bot for scheduling events and activities using the discord.js API. Utilized a SQLite database to store server specific events and send reminders an hour before an even",link:"https://github.com/calsfu/scheduling-bot",image:"/scheduling-2.png",group:1},{id:13,title:"ASCII Pokemon Game",subtitle:"C++ Terminal Game",description:"Pokemon game using C++ in the terminal. Uses classes, inheritance, polymorphism, and more.",link:"https://github.com/calsfu/Terminal-Pokemon-Game",image:"/pokemon.png",group:1},{id:21,title:"Reinforcement Learning Driving Game",subtitle:"PyTorch Neural Network",description:"Created a Deep Q Learning (DQN) Neural Network with PyTorch to finish a race. Optimized network to receive maximum reward from the OpenAI Gymnasium API.",link:"https://github.com/calsfu/ASCII-Pokemon-Game",image:"/Steps_2000.gif",group:3},{id:22,title:"Street Sign Image Classifier",subtitle:"PyTorch Neural Network",description:"Created a Convolutional Neural Network (CNN) with PyTorch to classify street signs. Optimized network to receive 99% accuracy on the German Traffic Sign Recognition Benchmark (GTSRB).",link:"https://github.com/calsfu/streetsign-image-detection",image:"/gtsrb.jpg",group:3},{id:31,title:"Threading Library",subtitle:"C",description:"Created a threading library in C that supports mutexes, semaphores, and condition variables. Implemented a scheduler that supports round robin, priority, and lottery scheduling.",link:"",image:"/thread.png",group:2},{id:32,title:"Virtual File System",subtitle:"C",description:"Created a file system in C that supports multiple files, directories, and permissions.",link:"",image:"/vfs.png",group:2},{id:33,title:"Linux Shell",subtitle:"C",description:"Created a shell in C that supports multiple commands, pipes, and redirection. Followed REPL design pattern.",link:"",image:"/shell.png",group:2}],()=>i(0,t=1),()=>i(0,t=2),()=>i(0,t=3),()=>i(0,t=4),H=>H.group===t]}class Ve extends te{constructor(e){super(),le(this,e,Re,Ue,ee,{})}}function Ge(o){let e,i='<h1>SKILLS</h1> <p>Know</p> <ul class="skillList svelte-fap70l"><div class="poopy"><li class="wholeIcon svelte-fap70l"><div class="picture svelte-fap70l"><i class="devicon-cplusplus-plain-wordmark"></i></div> <p class="skillText svelte-fap70l">C++</p></li></div> <div class="poopy"><li class="wholeIcon svelte-fap70l"><div class="picture svelte-fap70l"><i class="devicon-python-plain"></i></div> <p class="skillText svelte-fap70l">Python</p></li></div> <div class="poopy"><li class="wholeIcon svelte-fap70l"><div class="picture svelte-fap70l"><i class="devicon-matlab-plain"></i></div> <p class="skillText svelte-fap70l">MATLAB</p></li></div> <div class="poopy"><li class="wholeIcon svelte-fap70l"><div class="picture svelte-fap70l"><i class="devicon-typescript-plain"></i></div> <p class="skillText svelte-fap70l">Typescript</p></li></div> <div class="poopy"><li class="wholeIcon svelte-fap70l"><div class="picture svelte-fap70l"><i class="devicon-thealgorithms-plain"></i></div> <p class="skillText svelte-fap70l">Algorithms</p></li></div> <div class="poopy"><li class="wholeIcon svelte-fap70l"><div class="picture svelte-fap70l"><img src="/data-structure.svg" alt="datas" id="toobig" class="svelte-fap70l"/></div> <p class="skillText svelte-fap70l">Data Structures</p></li></div> <div class="poopy"><li class="wholeIcon svelte-fap70l"><div class="picture svelte-fap70l"><i class="devicon-arduino-plain"></i></div> <p class="skillText svelte-fap70l">Arduino</p></li></div> <div class="poopy"><li class="wholeIcon svelte-fap70l"><div class="picture svelte-fap70l"><i class="devicon-rust-plain"></i></div> <p class="skillText svelte-fap70l">Rust</p></li></div> <div class="poopy"><li class="wholeIcon svelte-fap70l"><div class="picture svelte-fap70l"><i class="devicon-svelte-plain"></i></div> <p class="skillText svelte-fap70l">Svelte</p></li></div></ul> <p>Learning</p> <ul class="skillList svelte-fap70l"><div class="poopy"><li class="wholeIcon svelte-fap70l"><div class="picture svelte-fap70l"><i class="devicon-python-plain"></i></div> <p class="skillText svelte-fap70l">Python</p></li></div> <div class="poopy"><li class="wholeIcon svelte-fap70l"><div class="picture svelte-fap70l"><img src="/operating-systems.svg" alt="datas" id="toobig" class="svelte-fap70l"/></div> <p class="skillText svelte-fap70l">OS</p></li></div> <div class="poopy"><li class="wholeIcon svelte-fap70l"><div class="picture svelte-fap70l"><img src="/computer-arch.svg" alt="datas" id="toobig" class="svelte-fap70l"/></div> <p class="skillText svelte-fap70l">Computer Architecture</p></li></div> <div class="poopy"><li class="wholeIcon svelte-fap70l"><div class="picture svelte-fap70l"><img src="/statistics.svg" alt="datas" id="toobig" class="svelte-fap70l"/></div> <p class="skillText svelte-fap70l">Statistics</p></li></div> <div class="poopy"><li class="wholeIcon svelte-fap70l"><div class="picture svelte-fap70l"><img src="/machine-learning.svg" alt="datas" id="toobig" class="svelte-fap70l"/></div> <p class="skillText svelte-fap70l">Machine Learning</p></li></div> <div class="poopy"><li class="wholeIcon svelte-fap70l"><div class="picture svelte-fap70l"><img src="/deep-learning-project-svgrepo-com.svg" alt="datas" id="toobig" class="svelte-fap70l"/></div> <p class="skillText svelte-fap70l">Deep Learning</p></li></div> <div class="poopy"><li class="wholeIcon svelte-fap70l"><div class="picture svelte-fap70l"><img src="/eye.svg" alt="datas" id="toobig" class="svelte-fap70l"/></div> <p class="skillText svelte-fap70l">Computer Vision</p></li></div></ul>';return{c(){e=d("section"),e.innerHTML=i,this.h()},l(t){e=u(t,"SECTION",{class:!0,id:!0,"data-svelte-h":!0}),A(e)!=="svelte-1inz5gx"&&(e.innerHTML=i),this.h()},h(){n(e,"class","skills svelte-fap70l"),n(e,"id","skills")},m(t,p){O(t,e,p)},p:D,i:D,o:D,d(t){t&&v(e)}}}class ze extends te{constructor(e){super(),le(this,e,null,Ge,ee,{})}}function Fe(o){let e,i='<div class="footerInfo svelte-il79ro"><a href="https://github.com/calsfu" target="_blank" rel="noopener noreferrer"><img src="/github-mark-white.png" alt="logo" class="logo svelte-il79ro"/></a> <p>Made by Cole Resurreccion</p> <a href="mailto::coler2366@gmail.com" target="_blank" rel="noopener noreferrer">Contact Me</a></div>';return{c(){e=d("section"),e.innerHTML=i,this.h()},l(t){e=u(t,"SECTION",{class:!0,"data-svelte-h":!0}),A(e)!=="svelte-148bf46"&&(e.innerHTML=i),this.h()},h(){n(e,"class","footer svelte-il79ro")},m(t,p){O(t,e,p)},p:D,i:D,o:D,d(t){t&&v(e)}}}class Qe extends te{constructor(e){super(),le(this,e,null,Fe,ee,{})}}function qe(o){let e=!1,i=()=>{e=!1},t,p,f='<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/> <meta charset="utf-8"/> <meta name="viewport" content="width=device-width, initial-scale=1"/> <title>Cole Resurreccion</title>',l,m,h,I,H,x,g,L,E,b,k,$,j,T,w,y,_;return Ie(o[1]),I=new Be({}),x=new Ae({}),L=new Le({}),b=new ze({}),$=new Ve({}),T=new Qe({}),{c(){p=d("header"),p.innerHTML=f,l=S(),m=d("body"),h=d("div"),ae(I.$$.fragment),H=S(),ae(x.$$.fragment),g=S(),ae(L.$$.fragment),E=S(),ae(b.$$.fragment),k=S(),ae($.$$.fragment),j=S(),ae(T.$$.fragment),this.h()},l(a){p=u(a,"HEADER",{"data-svelte-h":!0}),A(p)!=="svelte-d6mwu2"&&(p.innerHTML=f),l=M(a),m=u(a,"BODY",{class:!0});var r=C(m);h=u(r,"DIV",{class:!0});var c=C(h);ne(I.$$.fragment,c),H=M(c),ne(x.$$.fragment,c),g=M(c),ne(L.$$.fragment,c),E=M(c),ne(b.$$.fragment,c),k=M(c),ne($.$$.fragment,c),j=M(c),ne(T.$$.fragment,c),c.forEach(v),r.forEach(v),this.h()},h(){n(h,"class","main svelte-1x5ucp7"),n(m,"class","svelte-1x5ucp7")},m(a,r){O(a,p,r),O(a,l,r),O(a,m,r),s(m,h),oe(I,h,null),s(h,H),oe(x,h,null),s(h,g),oe(L,h,null),s(h,E),oe(b,h,null),s(h,k),oe($,h,null),s(h,j),oe(T,h,null),w=!0,y||(_=K(window,"scroll",()=>{e=!0,clearTimeout(t),t=setTimeout(i,100),o[1]()}),y=!0)},p(a,[r]){r&1&&!e&&(e=!0,clearTimeout(t),scrollTo(window.pageXOffset,a[0]),t=setTimeout(i,100))},i(a){w||(Z(I.$$.fragment,a),Z(x.$$.fragment,a),Z(L.$$.fragment,a),Z(b.$$.fragment,a),Z($.$$.fragment,a),Z(T.$$.fragment,a),w=!0)},o(a){re(I.$$.fragment,a),re(x.$$.fragment,a),re(L.$$.fragment,a),re(b.$$.fragment,a),re($.$$.fragment,a),re(T.$$.fragment,a),w=!1},d(a){a&&(v(p),v(l),v(m)),ce(I),ce(x),ce(L),ce(b),ce($),ce(T),y=!1,_()}}}function Je(o,e,i){let t=50;function p(){i(0,t=window.pageYOffset)}return[t,p]}class Ye extends te{constructor(e){super(),le(this,e,Je,qe,ee,{})}}export{Ye as component};