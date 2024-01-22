import{r as ye,s as le,n as O,f as pe,h as Pe,i as Be}from"../chunks/scheduler.b0999281.js";import{d as te,S as se,i as ne,g as u,h as d,y as U,k as i,a as B,f as h,s as x,j as $,c as M,l as G,x as n,z as Q,e as be,m as J,n as K,o as fe,A as we,r as re,u as ae,v as ce,t as ue,w as de}from"../chunks/index.590e822c.js";function he(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}function He(s,e){s.d(1),e.delete(s.key)}function Ne(s,e,t,l,c,a,r,y,p,S,P,E){let f=s.length,C=a.length,I=f;const g={};for(;I--;)g[s[I].key]=I;const k=[],w=new Map,_=new Map,T=[];for(I=C;I--;){const o=E(c,a,I),L=t(o);let j=r.get(L);j?l&&T.push(()=>j.p(o,e)):(j=S(L,o),j.c()),w.set(L,k[I]=j),L in g&&_.set(L,Math.abs(I-g[L]))}const v=new Set,b=new Set;function m(o){te(o,1),o.m(y,P),r.set(o.key,o),P=o.first,C--}for(;f&&C;){const o=k[C-1],L=s[f-1],j=o.key,H=L.key;o===L?(P=o.first,f--,C--):w.has(H)?!r.has(j)||v.has(j)?m(o):b.has(H)?f--:_.get(j)>_.get(H)?(b.add(j),m(o)):(v.add(H),f--):(p(L,r),f--)}for(;f--;){const o=s[f];w.has(o.key)||p(o,r)}for(;C;)m(k[C-1]);return ye(T),k}function Ae(s){let e,t="<p>I am a third year computer engineering at Boston University. Currently, I am on a software track that focuses on backend development and machine learning.</p>";return{c(){e=u("section"),e.innerHTML=t,this.h()},l(l){e=d(l,"SECTION",{id:!0,class:!0,"data-svelte-h":!0}),U(e)!=="svelte-1jbyhtu"&&(e.innerHTML=t),this.h()},h(){i(e,"id","about"),i(e,"class","about svelte-tbsw7a")},m(l,c){B(l,e,c)},p:O,i:O,o:O,d(l){l&&h(e)}}}class De extends se{constructor(e){super(),ne(this,e,null,Ae,le,{})}}function Ue(s){let e,t,l,c,a,r,y="Cole Resurreccion",p,S,P='<img src="/github-mark-white.png" alt="logo" class="logo svelte-11l4i0o"/>',E,f,C='<img style="width:25px; height:auto; margin-top:7px;" src="/moon-svgrepo-com.svg" alt="nightmode"/>',I,g,k,w,_,T="Home",v,b,m,o="About",L,j,H,R="Skills",N,Y,z,W="Projects",ie,oe;return{c(){e=u("nav"),t=u("ul"),l=u("li"),c=u("ul"),a=u("li"),r=u("button"),r.textContent=y,p=x(),S=u("a"),S.innerHTML=P,E=x(),f=u("button"),f.innerHTML=C,I=x(),g=u("li"),k=u("ul"),w=u("li"),_=u("button"),_.textContent=T,v=x(),b=u("li"),m=u("button"),m.textContent=o,L=x(),j=u("li"),H=u("button"),H.textContent=R,N=x(),Y=u("li"),z=u("button"),z.textContent=W,this.h()},l(Z){e=d(Z,"NAV",{class:!0,id:!0});var X=$(e);t=d(X,"UL",{class:!0});var ee=$(t);l=d(ee,"LI",{class:!0});var A=$(l);c=d(A,"UL",{class:!0});var D=$(c);a=d(D,"LI",{style:!0});var V=$(a);r=d(V,"BUTTON",{id:!0,style:!0,class:!0,"data-svelte-h":!0}),U(r)!=="svelte-1c1evpa"&&(r.textContent=y),p=M(V),S=d(V,"A",{href:!0,target:!0,rel:!0,class:!0,"data-svelte-h":!0}),U(S)!=="svelte-1l8wojf"&&(S.innerHTML=P),E=M(V),f=d(V,"BUTTON",{tabindex:!0,style:!0,"data-svelte-h":!0}),U(f)!=="svelte-3sklx7"&&(f.innerHTML=C),V.forEach(h),D.forEach(h),A.forEach(h),I=M(ee),g=d(ee,"LI",{class:!0});var F=$(g);k=d(F,"UL",{class:!0});var q=$(k);w=d(q,"LI",{class:!0});var ve=$(w);_=d(ve,"BUTTON",{class:!0,"data-svelte-h":!0}),U(_)!=="svelte-h0hnf8"&&(_.textContent=T),ve.forEach(h),v=M(q),b=d(q,"LI",{class:!0});var me=$(b);m=d(me,"BUTTON",{class:!0,"data-svelte-h":!0}),U(m)!=="svelte-boz1gc"&&(m.textContent=o),me.forEach(h),L=M(q),j=d(q,"LI",{class:!0});var ge=$(j);H=d(ge,"BUTTON",{class:!0,"data-svelte-h":!0}),U(H)!=="svelte-1h8k1pc"&&(H.textContent=R),ge.forEach(h),N=M(q),Y=d(q,"LI",{class:!0});var _e=$(Y);z=d(_e,"BUTTON",{class:!0,"data-svelte-h":!0}),U(z)!=="svelte-e0lc88"&&(z.textContent=W),_e.forEach(h),q.forEach(h),F.forEach(h),ee.forEach(h),X.forEach(h),this.h()},h(){i(r,"id","mainBut"),G(r,"font-weight","500"),i(r,"class","svelte-11l4i0o"),i(S,"href","https://github.com/calsfu"),i(S,"target","_blank"),i(S,"rel","noopener noreferrer"),i(S,"class","svelte-11l4i0o"),i(f,"tabindex","0"),G(f,"background-color","transparent"),G(f,"border","0px"),G(f,"cursor","pointer"),G(a,"display","flex"),G(a,"flex-direction","row"),G(a,"align-items","center"),G(a,"justify-content","center"),i(c,"class","guide svelte-11l4i0o"),i(l,"class","topLeft svelte-11l4i0o"),i(_,"class","svelte-11l4i0o"),i(w,"class","guideItem svelte-11l4i0o"),i(m,"class","svelte-11l4i0o"),i(b,"class","guideItem svelte-11l4i0o"),i(H,"class","svelte-11l4i0o"),i(j,"class","guideItem svelte-11l4i0o"),i(z,"class","svelte-11l4i0o"),i(Y,"class","guideItem svelte-11l4i0o"),i(k,"class","guide svelte-11l4i0o"),i(g,"class","topRight svelte-11l4i0o"),i(t,"class","headerItems svelte-11l4i0o"),i(e,"class","header svelte-11l4i0o"),i(e,"id","header")},m(Z,X){B(Z,e,X),n(e,t),n(t,l),n(l,c),n(c,a),n(a,r),n(a,p),n(a,S),n(a,E),n(a,f),n(t,I),n(t,g),n(g,k),n(k,w),n(w,_),n(k,v),n(k,b),n(b,m),n(k,L),n(k,j),n(j,H),n(k,N),n(k,Y),n(Y,z),ie||(oe=[Q(r,"click",Te),Q(f,"click",s[0]),Q(_,"click",Te),Q(m,"click",Oe),Q(H,"click",Ve),Q(z,"click",Re)],ie=!0)},p:O,i:O,o:O,d(Z){Z&&h(e),ie=!1,ye(oe)}}}function Te(){window.scrollTo({top:0,behavior:"smooth"})}function Oe(){const s=document.getElementById("about"),e=document.getElementById("header");s&&e&&window.scrollTo({top:s.offsetTop-e.offsetHeight,behavior:"smooth"})}function Ve(){const s=document.getElementById("skills"),e=document.getElementById("header");s&&e&&window.scrollTo({top:s.offsetTop-e.offsetHeight*3,behavior:"smooth"})}function Re(){const s=document.getElementById("projects"),e=document.getElementById("header");s&&e&&window.scrollTo({top:s.offsetTop-e.offsetHeight,behavior:"smooth"})}function Ge(s,e,t){let{darkMode:l=!1}=e;function c(){t(1,l=!l),l?document.documentElement.setAttribute("data-theme","light"):document.documentElement.setAttribute("data-theme","dark")}return s.$$set=a=>{"darkMode"in a&&t(1,l=a.darkMode)},[c,l]}class Fe extends se{constructor(e){super(),ne(this,e,Ge,Ue,le,{darkMode:1})}}function ze(s){let e,t='<h1 style="font-weight: 400; font-family: &#39;Poppins&#39;, sans-serif;" class="svelte-1f0iedy">Hello, I&#39;m <span class="color_name svelte-1f0iedy">Cole Resurreccion</span></h1> <h4 style="font-weight: 400;">Boston University Computer Engineering 25&#39;</h4>';return{c(){e=u("section"),e.innerHTML=t,this.h()},l(l){e=d(l,"SECTION",{id:!0,class:!0,"data-svelte-h":!0}),U(e)!=="svelte-19cmc1q"&&(e.innerHTML=t),this.h()},h(){i(e,"id","home"),i(e,"class","home svelte-1f0iedy")},m(l,c){B(l,e,c)},p:O,i:O,o:O,d(l){l&&h(e)}}}class Qe extends se{constructor(e){super(),ne(this,e,null,ze,le,{})}}function Ee(s,e,t){const l=s.slice();return l[8]=e[t],l}function qe(s){let e,t,l,c,a,r,y,p=s[8].title+"",S,P,E,f=s[8].subtitle+"",C,I,g,k=s[8].description+"",w,_,T,v,b=s[8].link&&Ie(s);return{c(){e=u("div"),t=u("img"),a=x(),r=u("div"),y=u("h2"),S=J(p),P=x(),E=u("h4"),C=J(f),I=x(),g=u("p"),w=J(k),_=x(),T=u("div"),b&&b.c(),v=x(),this.h()},l(m){e=d(m,"DIV",{class:!0});var o=$(e);t=d(o,"IMG",{src:!0,alt:!0,class:!0}),o.forEach(h),a=M(m),r=d(m,"DIV",{class:!0});var L=$(r);y=d(L,"H2",{class:!0});var j=$(y);S=K(j,p),j.forEach(h),P=M(L),E=d(L,"H4",{class:!0});var H=$(E);C=K(H,f),H.forEach(h),I=M(L),g=d(L,"P",{class:!0});var R=$(g);w=K(R,k),R.forEach(h),_=M(L),T=d(L,"DIV",{class:!0});var N=$(T);b&&b.l(N),N.forEach(h),v=M(L),L.forEach(h),this.h()},h(){pe(t.src,l=s[8].image)||i(t,"src",l),i(t,"alt",c=s[8].title),i(t,"class","projectImg svelte-idptvj"),i(e,"class","imgBox svelte-idptvj"),i(y,"class","svelte-idptvj"),i(E,"class","svelte-idptvj"),i(g,"class","svelte-idptvj"),i(T,"class","projectInfo svelte-idptvj"),i(r,"class","textBox svelte-idptvj")},m(m,o){B(m,e,o),n(e,t),B(m,a,o),B(m,r,o),n(r,y),n(y,S),n(r,P),n(r,E),n(E,C),n(r,I),n(r,g),n(g,w),n(r,_),n(r,T),b&&b.m(T,null),n(r,v)},p(m,o){o&1&&!pe(t.src,l=m[8].image)&&i(t,"src",l),o&1&&c!==(c=m[8].title)&&i(t,"alt",c),o&1&&p!==(p=m[8].title+"")&&fe(S,p),o&1&&f!==(f=m[8].subtitle+"")&&fe(C,f),o&1&&k!==(k=m[8].description+"")&&fe(w,k),m[8].link?b?b.p(m,o):(b=Ie(m),b.c(),b.m(T,null)):b&&(b.d(1),b=null)},d(m){m&&(h(e),h(a),h(r)),b&&b.d()}}}function We(s){let e,t,l=s[8].title+"",c,a,r,y=s[8].subtitle+"",p,S,P,E=s[8].description+"",f,C,I,g,k,w,_,T,v,b=s[8].link&&$e(s);return{c(){e=u("div"),t=u("h2"),c=J(l),a=x(),r=u("h4"),p=J(y),S=x(),P=u("p"),f=J(E),C=x(),I=u("div"),b&&b.c(),g=x(),k=u("div"),w=u("img"),v=x(),this.h()},l(m){e=d(m,"DIV",{class:!0});var o=$(e);t=d(o,"H2",{class:!0});var L=$(t);c=K(L,l),L.forEach(h),a=M(o),r=d(o,"H4",{class:!0});var j=$(r);p=K(j,y),j.forEach(h),S=M(o),P=d(o,"P",{class:!0});var H=$(P);f=K(H,E),H.forEach(h),C=M(o),I=d(o,"DIV",{class:!0});var R=$(I);b&&b.l(R),R.forEach(h),o.forEach(h),g=M(m),k=d(m,"DIV",{class:!0});var N=$(k);w=d(N,"IMG",{src:!0,alt:!0,class:!0}),v=M(N),N.forEach(h),this.h()},h(){i(t,"class","svelte-idptvj"),i(r,"class","svelte-idptvj"),i(P,"class","svelte-idptvj"),i(I,"class","projectInfo svelte-idptvj"),i(e,"class","textBox svelte-idptvj"),pe(w.src,_=s[8].image)||i(w,"src",_),i(w,"alt",T=s[8].title),i(w,"class","projectImg svelte-idptvj"),i(k,"class","imgBox svelte-idptvj")},m(m,o){B(m,e,o),n(e,t),n(t,c),n(e,a),n(e,r),n(r,p),n(e,S),n(e,P),n(P,f),n(e,C),n(e,I),b&&b.m(I,null),B(m,g,o),B(m,k,o),n(k,w),n(k,v)},p(m,o){o&1&&l!==(l=m[8].title+"")&&fe(c,l),o&1&&y!==(y=m[8].subtitle+"")&&fe(p,y),o&1&&E!==(E=m[8].description+"")&&fe(f,E),m[8].link?b?b.p(m,o):(b=$e(m),b.c(),b.m(I,null)):b&&(b.d(1),b=null),o&1&&!pe(w.src,_=m[8].image)&&i(w,"src",_),o&1&&T!==(T=m[8].title)&&i(w,"alt",T)},d(m){m&&(h(e),h(g),h(k)),b&&b.d()}}}function Ie(s){let e,t,l;return{c(){e=u("a"),t=J("See More"),this.h()},l(c){e=d(c,"A",{href:!0,target:!0,rel:!0,id:!0});var a=$(e);t=K(a,"See More"),a.forEach(h),this.h()},h(){i(e,"href",l=s[8].link),i(e,"target","_blank"),i(e,"rel","noopener noreferrer"),i(e,"id","seemorebutton")},m(c,a){B(c,e,a),n(e,t)},p(c,a){a&1&&l!==(l=c[8].link)&&i(e,"href",l)},d(c){c&&h(e)}}}function $e(s){let e,t,l;return{c(){e=u("a"),t=J("See More"),this.h()},l(c){e=d(c,"A",{href:!0,target:!0,rel:!0,id:!0});var a=$(e);t=K(a,"See More"),a.forEach(h),this.h()},h(){i(e,"href",l=s[8].link),i(e,"target","_blank"),i(e,"rel","noopener noreferrer"),i(e,"id","seemorebutton")},m(c,a){B(c,e,a),n(e,t)},p(c,a){a&1&&l!==(l=c[8].link)&&i(e,"href",l)},d(c){c&&h(e)}}}function Le(s,e){let t,l;function c(y,p){return y[8].id%2===0?We:qe}let a=c(e),r=a(e);return{key:s,first:null,c(){t=be(),r.c(),l=be(),this.h()},l(y){t=be(),r.l(y),l=be(),this.h()},h(){this.first=t},m(y,p){B(y,t,p),r.m(y,p),B(y,l,p)},p(y,p){e=y,a===(a=c(e))&&r?r.p(e,p):(r.d(1),r=a(e),r&&(r.c(),r.m(l.parentNode,l)))},d(y){y&&(h(t),h(l)),r.d(y)}}}function Je(s){let e,t,l="PROJECTS",c,a,r,y,p,S="Systems",P,E,f,C="OS",I,g,k,w="Machine Learning",_,T,v,b="Web",m,o,L,j="Hardware/Embedded",H,R,N=[],Y=new Map,z,W,ie='Find more <a href="https://github.com/calsfu" target="_blank" rel="noopener noreferrer">here</a>',oe,Z,X=he(s[1].filter(s[7]));const ee=A=>A[8].id;for(let A=0;A<X.length;A+=1){let D=Ee(s,X,A),V=ee(D);Y.set(V,N[A]=Le(V,D))}return{c(){e=u("section"),t=u("h1"),t.textContent=l,c=x(),a=u("div"),r=u("ul"),y=u("li"),p=u("button"),p.textContent=S,P=x(),E=u("li"),f=u("button"),f.textContent=C,I=x(),g=u("li"),k=u("button"),k.textContent=w,_=x(),T=u("li"),v=u("button"),v.textContent=b,m=x(),o=u("li"),L=u("button"),L.textContent=j,H=x(),R=u("div");for(let A=0;A<N.length;A+=1)N[A].c();z=x(),W=u("p"),W.innerHTML=ie,this.h()},l(A){e=d(A,"SECTION",{class:!0,id:!0});var D=$(e);t=d(D,"H1",{class:!0,"data-svelte-h":!0}),U(t)!=="svelte-gc70j8"&&(t.textContent=l),c=M(D),a=d(D,"DIV",{class:!0});var V=$(a);r=d(V,"UL",{style:!0});var F=$(r);y=d(F,"LI",{});var q=$(y);p=d(q,"BUTTON",{class:!0,"data-svelte-h":!0}),U(p)!=="svelte-s9xrvx"&&(p.textContent=S),q.forEach(h),P=M(F),E=d(F,"LI",{});var ve=$(E);f=d(ve,"BUTTON",{class:!0,"data-svelte-h":!0}),U(f)!=="svelte-1nsjdvo"&&(f.textContent=C),ve.forEach(h),I=M(F),g=d(F,"LI",{});var me=$(g);k=d(me,"BUTTON",{class:!0,"data-svelte-h":!0}),U(k)!=="svelte-12x6xgw"&&(k.textContent=w),me.forEach(h),_=M(F),T=d(F,"LI",{});var ge=$(T);v=d(ge,"BUTTON",{class:!0,"data-svelte-h":!0}),U(v)!=="svelte-xak7pd"&&(v.textContent=b),ge.forEach(h),m=M(F),o=d(F,"LI",{});var _e=$(o);L=d(_e,"BUTTON",{class:!0,"data-svelte-h":!0}),U(L)!=="svelte-dgin4d"&&(L.textContent=j),_e.forEach(h),F.forEach(h),V.forEach(h),H=M(D),R=d(D,"DIV",{class:!0});var Ce=$(R);for(let ke=0;ke<N.length;ke+=1)N[ke].l(Ce);Ce.forEach(h),z=M(D),W=d(D,"P",{style:!0,"data-svelte-h":!0}),U(W)!=="svelte-zp5245"&&(W.innerHTML=ie),D.forEach(h),this.h()},h(){i(t,"class","projectTitle svelte-idptvj"),i(p,"class","button-62 svelte-idptvj"),i(f,"class","button-62 svelte-idptvj"),i(k,"class","button-62 svelte-idptvj"),i(v,"class","button-62 svelte-idptvj"),i(L,"class","button-62 svelte-idptvj"),G(r,"display","flex"),G(r,"flex-direction","row"),G(r,"align-items","center"),G(r,"justify-content","center"),G(r,"list-style","none"),G(r,"border","none"),G(r,"gap","15px"),i(a,"class","chooseProject"),i(R,"class","projectBox svelte-idptvj"),G(W,"color","var(--text-color)"),i(e,"class","projects svelte-idptvj"),i(e,"id","projects")},m(A,D){B(A,e,D),n(e,t),n(e,c),n(e,a),n(a,r),n(r,y),n(y,p),n(r,P),n(r,E),n(E,f),n(r,I),n(r,g),n(g,k),n(r,_),n(r,T),n(T,v),n(r,m),n(r,o),n(o,L),n(e,H),n(e,R);for(let V=0;V<N.length;V+=1)N[V]&&N[V].m(R,null);n(e,z),n(e,W),oe||(Z=[Q(p,"click",s[2]),Q(f,"click",s[3]),Q(k,"click",s[4]),Q(v,"click",s[5]),Q(L,"click",s[6])],oe=!0)},p(A,[D]){D&3&&(X=he(A[1].filter(A[7])),N=Ne(N,D,ee,1,A,X,Y,R,He,Le,null,Ee))},i:O,o:O,d(A){A&&h(e);for(let D=0;D<N.length;D+=1)N[D].d();oe=!1,ye(Z)}}}function Ke(s,e,t){let l=1;return[l,[{id:1,title:"Model Processor",subtitle:"Verilog Digital Logic",description:"Created a model CPU with 8 registers and a 16-bit bus. Supports 8 functions lie, ADD, SUB, MULT, JUMP. Recieved information from ROM storage and a program conter. Supports FPGA.",link:"https://github.com/calsfu/verilog_processor",image:"/modelProcessor.png",group:4},{id:2,title:"Bike Light",subtitle:"Microcontroller Intergration",description:"A bike light that turns off in bright settings and gets brighter as speed increases. Collaborated in a group to create a circuit diagram, reasearch and purchase parts, and wrote code for an Arduino microcontroller.",link:"",image:"/BikeLightPhoto.png",group:4},{id:11,title:"Training App",subtitle:"Typescript, React Native, PostgreSQL, Python, Flask, AWS",description:"Created a mobile app using React Native and Typescript. Utilized a PostgreSQL database to store user information and a Flask server to handle requests. Deployed server on AWS EC2 instance.",link:"",image:"/trainingapp.png",group:1},{id:12,title:"Scheduling Discord Bot",subtitle:"Typescript, SQLite, Discord.js",description:"Engineered a custom Discord bot for scheduling events and activities using the discord.js API. Utilized a SQLite database to store server specific events and send reminders an hour before an even",link:"https://github.com/calsfu/scheduling-bot",image:"/scheduling-2.png",group:1},{id:13,title:"ASCII Pokemon Game",subtitle:"C++ Terminal Game",description:"Pokemon game using C++ in the terminal. Uses classes, inheritance, polymorphism, and more.",link:"https://github.com/calsfu/Terminal-Pokemon-Game",image:"/pokemon.png",group:1},{id:21,title:"Reinforcement Learning Driving Game",subtitle:"PyTorch Neural Network",description:"Created a Deep Q Learning (DQN) Neural Network with PyTorch to finish a race. Optimized network to receive maximum reward from the OpenAI Gymnasium API.",link:"https://github.com/calsfu/ASCII-Pokemon-Game",image:"/Steps_2000.gif",group:3},{id:22,title:"Street Sign Image Classifier",subtitle:"PyTorch Neural Network",description:"Created a Convolutional Neural Network (CNN) with PyTorch to classify street signs. Optimized network to receive 99% accuracy on the German Traffic Sign Recognition Benchmark (GTSRB).",link:"https://github.com/calsfu/streetsign-image-detection",image:"/gtsrb.jpg",group:3},{id:31,title:"Threading Library",subtitle:"C",description:"Created a threading library in C that supports mutexes, semaphores, and condition variables. Implemented a scheduler that supports round robin, priority, and lottery scheduling.",link:"",image:"/thread.png",group:2},{id:32,title:"Virtual File System",subtitle:"C",description:"Created a file system in C that supports multiple files, directories, and permissions.",link:"",image:"/vfs.png",group:2},{id:33,title:"Linux Shell",subtitle:"C",description:"Created a shell in C that supports multiple commands, pipes, and redirection. Followed REPL design pattern.",link:"",image:"/shell.png",group:2},{id:41,title:"Food Compare",subtitle:"Svelte, Javascript, Python, Flask",description:"30 minute challenge to create a web app that lets the user choose between two foods. Uses the elo rating system to rank foods.",link:"https://github.com/calsfu/foodCompare",image:"/foodCompare.png",group:5}],()=>t(0,l=1),()=>t(0,l=2),()=>t(0,l=3),()=>t(0,l=5),()=>t(0,l=4),E=>E.group===l]}class Ye extends se{constructor(e){super(),ne(this,e,Ke,Je,le,{})}}function Se(s,e,t){const l=s.slice();return l[2]=e[t].name,l[3]=e[t].icon,l}function je(s,e,t){const l=s.slice();return l[2]=e[t].name,l[3]=e[t].icon,l}function Xe(s){let e,t;return{c(){e=u("img"),this.h()},l(l){e=d(l,"IMG",{src:!0,alt:!0,id:!0,class:!0}),this.h()},h(){pe(e.src,t="/"+s[3]+".svg")||i(e,"src",t),i(e,"alt",""),i(e,"id","toobig"),i(e,"class","svelte-7863wf")},m(l,c){B(l,e,c)},p:O,d(l){l&&h(e)}}}function Ze(s){let e;return{c(){e=u("i"),this.h()},l(t){e=d(t,"I",{class:!0}),$(e).forEach(h),this.h()},h(){i(e,"class",Pe(s[3])+" svelte-7863wf")},m(t,l){B(t,e,l)},p:O,d(t){t&&h(e)}}}function xe(s){let e,t,l,c,a,r=s[2]+"",y,p;function S(f,C){return f[3].startsWith("devicon")?Ze:Xe}let E=S(s)(s);return{c(){e=u("div"),t=u("li"),l=u("div"),E.c(),c=x(),a=u("p"),y=J(r),p=x(),this.h()},l(f){e=d(f,"DIV",{class:!0});var C=$(e);t=d(C,"LI",{class:!0});var I=$(t);l=d(I,"DIV",{class:!0});var g=$(l);E.l(g),g.forEach(h),c=M(I),a=d(I,"P",{class:!0});var k=$(a);y=K(k,r),k.forEach(h),I.forEach(h),p=M(C),C.forEach(h),this.h()},h(){i(l,"class","picture svelte-7863wf"),i(a,"class","skillText svelte-7863wf"),i(t,"class","wholeIcon svelte-7863wf"),i(e,"class","poopy")},m(f,C){B(f,e,C),n(e,t),n(t,l),E.m(l,null),n(t,c),n(t,a),n(a,y),n(e,p)},p(f,C){E.p(f,C)},d(f){f&&h(e),E.d()}}}function et(s){let e,t;return{c(){e=u("img"),this.h()},l(l){e=d(l,"IMG",{src:!0,alt:!0,id:!0,class:!0}),this.h()},h(){pe(e.src,t="/"+s[3]+".svg")||i(e,"src",t),i(e,"alt",""),i(e,"id","toobig"),i(e,"class","svelte-7863wf")},m(l,c){B(l,e,c)},p:O,d(l){l&&h(e)}}}function tt(s){let e;return{c(){e=u("i"),this.h()},l(t){e=d(t,"I",{class:!0}),$(e).forEach(h),this.h()},h(){i(e,"class",Pe(s[3])+" svelte-7863wf")},m(t,l){B(t,e,l)},p:O,d(t){t&&h(e)}}}function Me(s){let e,t,l,c,a,r=s[2]+"",y,p;function S(f,C){return f[3].startsWith("devicon")?tt:et}let E=S(s)(s);return{c(){e=u("div"),t=u("li"),l=u("div"),E.c(),c=x(),a=u("p"),y=J(r),p=x(),this.h()},l(f){e=d(f,"DIV",{class:!0});var C=$(e);t=d(C,"LI",{class:!0});var I=$(t);l=d(I,"DIV",{class:!0});var g=$(l);E.l(g),g.forEach(h),c=M(I),a=d(I,"P",{class:!0});var k=$(a);y=K(k,r),k.forEach(h),I.forEach(h),p=M(C),C.forEach(h),this.h()},h(){i(l,"class","picture svelte-7863wf"),i(a,"class","skillText svelte-7863wf"),i(t,"class","wholeIcon svelte-7863wf"),i(e,"class","poopy")},m(f,C){B(f,e,C),n(e,t),n(t,l),E.m(l,null),n(t,c),n(t,a),n(a,y),n(e,p)},p(f,C){E.p(f,C)},d(f){f&&h(e),E.d()}}}function lt(s){let e,t,l="SKILLS",c,a,r="Know",y,p,S,P,E="Learning",f,C,I=he(s[0]),g=[];for(let _=0;_<I.length;_+=1)g[_]=xe(je(s,I,_));let k=he(s[1]),w=[];for(let _=0;_<k.length;_+=1)w[_]=Me(Se(s,k,_));return{c(){e=u("section"),t=u("h1"),t.textContent=l,c=x(),a=u("p"),a.textContent=r,y=x(),p=u("ul");for(let _=0;_<g.length;_+=1)g[_].c();S=x(),P=u("p"),P.textContent=E,f=x(),C=u("ul");for(let _=0;_<w.length;_+=1)w[_].c();this.h()},l(_){e=d(_,"SECTION",{class:!0,id:!0});var T=$(e);t=d(T,"H1",{"data-svelte-h":!0}),U(t)!=="svelte-1jjldi"&&(t.textContent=l),c=M(T),a=d(T,"P",{"data-svelte-h":!0}),U(a)!=="svelte-9quf05"&&(a.textContent=r),y=M(T),p=d(T,"UL",{class:!0});var v=$(p);for(let m=0;m<g.length;m+=1)g[m].l(v);v.forEach(h),S=M(T),P=d(T,"P",{"data-svelte-h":!0}),U(P)!=="svelte-m7xmsu"&&(P.textContent=E),f=M(T),C=d(T,"UL",{class:!0});var b=$(C);for(let m=0;m<w.length;m+=1)w[m].l(b);b.forEach(h),T.forEach(h),this.h()},h(){i(p,"class","skillList svelte-7863wf"),i(C,"class","skillList svelte-7863wf"),i(e,"class","skills svelte-7863wf"),i(e,"id","skills")},m(_,T){B(_,e,T),n(e,t),n(e,c),n(e,a),n(e,y),n(e,p);for(let v=0;v<g.length;v+=1)g[v]&&g[v].m(p,null);n(e,S),n(e,P),n(e,f),n(e,C);for(let v=0;v<w.length;v+=1)w[v]&&w[v].m(C,null)},p(_,[T]){if(T&1){I=he(_[0]);let v;for(v=0;v<I.length;v+=1){const b=je(_,I,v);g[v]?g[v].p(b,T):(g[v]=xe(b),g[v].c(),g[v].m(p,null))}for(;v<g.length;v+=1)g[v].d(1);g.length=I.length}if(T&2){k=he(_[1]);let v;for(v=0;v<k.length;v+=1){const b=Se(_,k,v);w[v]?w[v].p(b,T):(w[v]=Me(b),w[v].c(),w[v].m(C,null))}for(;v<w.length;v+=1)w[v].d(1);w.length=k.length}},i:O,o:O,d(_){_&&h(e),we(g,_),we(w,_)}}}function st(s){return[[{name:"C++",icon:"devicon-cplusplus-plain-wordmark"},{name:"Python",icon:"devicon-python-plain"},{name:"MATLAB",icon:"devicon-matlab-plain"},{name:"Typescript",icon:"devicon-typescript-plain"},{name:"Algorithms",icon:"devicon-thealgorithms-plain"},{name:"Data Structures",icon:"data-structure"},{name:"Arduino",icon:"devicon-arduino-plain"},{name:"Rust",icon:"devicon-rust-plain"},{name:"Svelte",icon:"devicon-svelte-plain"},{name:"Python",icon:"devicon-python-plain"},{name:"OS",icon:"operating-systems"},{name:"Statistics",icon:"statistics"}],[{name:"Computer Architecture",icon:"computer-arch"},{name:"Machine Learning",icon:"machine-learning"},{name:"Deep Learning",icon:"deep-learning-project"},{name:"Computer Vision",icon:"eye"}]]}class nt extends se{constructor(e){super(),ne(this,e,st,lt,le,{})}}function it(s){let e,t='<div class="footerInfo svelte-il79ro"><a href="https://github.com/calsfu" target="_blank" rel="noopener noreferrer"><img src="/github-mark-white.png" alt="logo" class="logo svelte-il79ro"/></a> <p>Made by Cole Resurreccion</p> <a href="mailto::coler2366@gmail.com" target="_blank" rel="noopener noreferrer">Contact Me</a></div>';return{c(){e=u("section"),e.innerHTML=t,this.h()},l(l){e=d(l,"SECTION",{class:!0,"data-svelte-h":!0}),U(e)!=="svelte-148bf46"&&(e.innerHTML=t),this.h()},h(){i(e,"class","footer svelte-il79ro")},m(l,c){B(l,e,c)},p:O,i:O,o:O,d(l){l&&h(e)}}}class ot extends se{constructor(e){super(),ne(this,e,null,it,le,{})}}function rt(s){let e=!1,t=()=>{e=!1},l,c,a='<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/> <meta charset="utf-8"/> <meta name="viewport" content="width=device-width, initial-scale=1"/> <title>Cole Resurreccion</title>',r,y,p,S,P,E,f,C,I,g,k,w,_,T,v,b,m;return Be(s[1]),S=new Fe({}),E=new Qe({}),C=new De({}),g=new nt({}),w=new Ye({}),T=new ot({}),{c(){c=u("header"),c.innerHTML=a,r=x(),y=u("body"),p=u("div"),re(S.$$.fragment),P=x(),re(E.$$.fragment),f=x(),re(C.$$.fragment),I=x(),re(g.$$.fragment),k=x(),re(w.$$.fragment),_=x(),re(T.$$.fragment),this.h()},l(o){c=d(o,"HEADER",{"data-svelte-h":!0}),U(c)!=="svelte-d6mwu2"&&(c.innerHTML=a),r=M(o),y=d(o,"BODY",{class:!0});var L=$(y);p=d(L,"DIV",{class:!0});var j=$(p);ae(S.$$.fragment,j),P=M(j),ae(E.$$.fragment,j),f=M(j),ae(C.$$.fragment,j),I=M(j),ae(g.$$.fragment,j),k=M(j),ae(w.$$.fragment,j),_=M(j),ae(T.$$.fragment,j),j.forEach(h),L.forEach(h),this.h()},h(){i(p,"class","main svelte-1x5ucp7"),i(y,"class","svelte-1x5ucp7")},m(o,L){B(o,c,L),B(o,r,L),B(o,y,L),n(y,p),ce(S,p,null),n(p,P),ce(E,p,null),n(p,f),ce(C,p,null),n(p,I),ce(g,p,null),n(p,k),ce(w,p,null),n(p,_),ce(T,p,null),v=!0,b||(m=Q(window,"scroll",()=>{e=!0,clearTimeout(l),l=setTimeout(t,100),s[1]()}),b=!0)},p(o,[L]){L&1&&!e&&(e=!0,clearTimeout(l),scrollTo(window.pageXOffset,o[0]),l=setTimeout(t,100))},i(o){v||(te(S.$$.fragment,o),te(E.$$.fragment,o),te(C.$$.fragment,o),te(g.$$.fragment,o),te(w.$$.fragment,o),te(T.$$.fragment,o),v=!0)},o(o){ue(S.$$.fragment,o),ue(E.$$.fragment,o),ue(C.$$.fragment,o),ue(g.$$.fragment,o),ue(w.$$.fragment,o),ue(T.$$.fragment,o),v=!1},d(o){o&&(h(c),h(r),h(y)),de(S),de(E),de(C),de(g),de(w),de(T),b=!1,m()}}}function at(s,e,t){let l=50;function c(){t(0,l=window.pageYOffset)}return[l,c]}class dt extends se{constructor(e){super(),ne(this,e,at,rt,le,{})}}export{dt as component};
