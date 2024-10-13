import{r as ge,s as ee,n as D,f as pe,h as je,i as Le}from"../chunks/scheduler.b0999281.js";import{d as Z,S as te,i as le,g as d,h,y as U,k as o,a as A,f,s as S,j as $,c as x,l as R,x as i,z as J,e as me,m as Y,n as W,o as ue,A as Se,r as ie,u as oe,v as re,t as ae,w as ce}from"../chunks/index.590e822c.js";function ve(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function xe(n,e){n.d(1),e.delete(n.key)}function Me(n,e,l,t,c,a,r,_,p,T,w,v){let u=n.length,m=a.length,C=u;const E={};for(;C--;)E[n[C].key]=C;const y=[],j=new Map,M=new Map,L=[];for(C=m;C--;){const s=v(c,a,C),k=l(s);let I=r.get(k);I?t&&L.push(()=>I.p(s,e)):(I=T(k,s),I.c()),j.set(k,y[C]=I),k in E&&M.set(k,Math.abs(C-E[k]))}const N=new Set,b=new Set;function g(s){Z(s,1),s.m(_,w),r.set(s.key,s),w=s.first,m--}for(;u&&m;){const s=y[m-1],k=n[u-1],I=s.key,H=k.key;s===k?(w=s.first,u--,m--):j.has(H)?!r.has(I)||N.has(I)?g(s):b.has(H)?u--:M.get(I)>M.get(H)?(b.add(I),g(s)):(N.add(H),u--):(p(k,r),u--)}for(;u--;){const s=n[u];j.has(s.key)||p(s,r)}for(;m;)g(y[m-1]);return ge(L),y}function Ne(n){let e,l=`<p>I am a senior at Boston University studying Computer Engineering with a concentration in Machine Learning. 
        I am currently learning about robotics, machine learning, and aerospace. 
        I am motivated to learn about new technologies and build tools to be used at scale</p> <p>I enjoy working in a place that allows me to take pride in my work and contributions and also allows me to experiement with different ideas and to find the best ways to complete a task.</p>`;return{c(){e=d("section"),e.innerHTML=l,this.h()},l(t){e=h(t,"SECTION",{id:!0,class:!0,"data-svelte-h":!0}),U(e)!=="svelte-15nqgtv"&&(e.innerHTML=l),this.h()},h(){o(e,"id","about"),o(e,"class","about svelte-tbsw7a")},m(t,c){A(t,e,c)},p:D,i:D,o:D,d(t){t&&f(e)}}}class Be extends te{constructor(e){super(),le(this,e,null,Ne,ee,{})}}function He(n){let e,l,t,c,a,r,_="Cole Resurreccion",p,T,w='<img src="/github-mark-white.png" alt="logo" class="logo svelte-11l4i0o"/>',v,u,m='<img style="width:25px; height:auto; margin-top:7px;" src="/moon-svgrepo-com.svg" alt="nightmode"/>',C,E,y,j,M,L="Home",N,b,g,s="About",k,I,H,O="Skills",z,K,F,X="Projects",se,P;return{c(){e=d("nav"),l=d("ul"),t=d("li"),c=d("ul"),a=d("li"),r=d("button"),r.textContent=_,p=S(),T=d("a"),T.innerHTML=w,v=S(),u=d("button"),u.innerHTML=m,C=S(),E=d("li"),y=d("ul"),j=d("li"),M=d("button"),M.textContent=L,N=S(),b=d("li"),g=d("button"),g.textContent=s,k=S(),I=d("li"),H=d("button"),H.textContent=O,z=S(),K=d("li"),F=d("button"),F.textContent=X,this.h()},l(B){e=h(B,"NAV",{class:!0,id:!0});var V=$(e);l=h(V,"UL",{class:!0});var G=$(l);t=h(G,"LI",{class:!0});var de=$(t);c=h(de,"UL",{class:!0});var he=$(c);a=h(he,"LI",{style:!0});var Q=$(a);r=h(Q,"BUTTON",{id:!0,style:!0,class:!0,"data-svelte-h":!0}),U(r)!=="svelte-1c1evpa"&&(r.textContent=_),p=x(Q),T=h(Q,"A",{href:!0,target:!0,rel:!0,class:!0,"data-svelte-h":!0}),U(T)!=="svelte-1l8wojf"&&(T.innerHTML=w),v=x(Q),u=h(Q,"BUTTON",{tabindex:!0,style:!0,"data-svelte-h":!0}),U(u)!=="svelte-3sklx7"&&(u.innerHTML=m),Q.forEach(f),he.forEach(f),de.forEach(f),C=x(G),E=h(G,"LI",{class:!0});var fe=$(E);y=h(fe,"UL",{class:!0});var q=$(y);j=h(q,"LI",{class:!0});var ne=$(j);M=h(ne,"BUTTON",{class:!0,"data-svelte-h":!0}),U(M)!=="svelte-h0hnf8"&&(M.textContent=L),ne.forEach(f),N=x(q),b=h(q,"LI",{class:!0});var _e=$(b);g=h(_e,"BUTTON",{class:!0,"data-svelte-h":!0}),U(g)!=="svelte-boz1gc"&&(g.textContent=s),_e.forEach(f),k=x(q),I=h(q,"LI",{class:!0});var be=$(I);H=h(be,"BUTTON",{class:!0,"data-svelte-h":!0}),U(H)!=="svelte-1h8k1pc"&&(H.textContent=O),be.forEach(f),z=x(q),K=h(q,"LI",{class:!0});var ke=$(K);F=h(ke,"BUTTON",{class:!0,"data-svelte-h":!0}),U(F)!=="svelte-e0lc88"&&(F.textContent=X),ke.forEach(f),q.forEach(f),fe.forEach(f),G.forEach(f),V.forEach(f),this.h()},h(){o(r,"id","mainBut"),R(r,"font-weight","500"),o(r,"class","svelte-11l4i0o"),o(T,"href","https://github.com/calsfu"),o(T,"target","_blank"),o(T,"rel","noopener noreferrer"),o(T,"class","svelte-11l4i0o"),o(u,"tabindex","0"),R(u,"background-color","transparent"),R(u,"border","0px"),R(u,"cursor","pointer"),R(a,"display","flex"),R(a,"flex-direction","row"),R(a,"align-items","center"),R(a,"justify-content","center"),o(c,"class","guide svelte-11l4i0o"),o(t,"class","topLeft svelte-11l4i0o"),o(M,"class","svelte-11l4i0o"),o(j,"class","guideItem svelte-11l4i0o"),o(g,"class","svelte-11l4i0o"),o(b,"class","guideItem svelte-11l4i0o"),o(H,"class","svelte-11l4i0o"),o(I,"class","guideItem svelte-11l4i0o"),o(F,"class","svelte-11l4i0o"),o(K,"class","guideItem svelte-11l4i0o"),o(y,"class","guide svelte-11l4i0o"),o(E,"class","topRight svelte-11l4i0o"),o(l,"class","headerItems svelte-11l4i0o"),o(e,"class","header svelte-11l4i0o"),o(e,"id","header")},m(B,V){A(B,e,V),i(e,l),i(l,t),i(t,c),i(c,a),i(a,r),i(a,p),i(a,T),i(a,v),i(a,u),i(l,C),i(l,E),i(E,y),i(y,j),i(j,M),i(y,N),i(y,b),i(b,g),i(y,k),i(y,I),i(I,H),i(y,z),i(y,K),i(K,F),se||(P=[J(r,"click",ye),J(u,"click",n[0]),J(M,"click",ye),J(g,"click",Pe),J(H,"click",Ae),J(F,"click",Ue)],se=!0)},p:D,i:D,o:D,d(B){B&&f(e),se=!1,ge(P)}}}function ye(){window.scrollTo({top:0,behavior:"smooth"})}function Pe(){const n=document.getElementById("about"),e=document.getElementById("header");n&&e&&window.scrollTo({top:n.offsetTop-e.offsetHeight,behavior:"smooth"})}function Ae(){const n=document.getElementById("skills"),e=document.getElementById("header");n&&e&&window.scrollTo({top:n.offsetTop-e.offsetHeight*3,behavior:"smooth"})}function Ue(){const n=document.getElementById("projects"),e=document.getElementById("header");n&&e&&window.scrollTo({top:n.offsetTop-e.offsetHeight,behavior:"smooth"})}function De(n,e,l){let{darkMode:t=!1}=e;function c(){l(1,t=!t),t?document.documentElement.setAttribute("data-theme","light"):document.documentElement.setAttribute("data-theme","dark")}return n.$$set=a=>{"darkMode"in a&&l(1,t=a.darkMode)},[c,t]}class Oe extends te{constructor(e){super(),le(this,e,De,He,ee,{darkMode:1})}}function Re(n){let e,l='<h1 style="font-weight: 400; font-family: &#39;Poppins&#39;, sans-serif;" class="svelte-1f0iedy">Hello, I&#39;m <span class="color_name svelte-1f0iedy" style="font-weight: 500">Cole Resurreccion</span></h1> <h4 style="font-weight: 400;">Boston University Computer Engineering 25&#39;</h4>';return{c(){e=d("section"),e.innerHTML=l,this.h()},l(t){e=h(t,"SECTION",{id:!0,class:!0,"data-svelte-h":!0}),U(e)!=="svelte-1i4wkpv"&&(e.innerHTML=l),this.h()},h(){o(e,"id","home"),o(e,"class","home svelte-1f0iedy")},m(t,c){A(t,e,c)},p:D,i:D,o:D,d(t){t&&f(e)}}}class Ve extends te{constructor(e){super(),le(this,e,null,Re,ee,{})}}function we(n,e,l){const t=n.slice();return t[7]=e[l],t}function ze(n){let e,l,t,c,a,r,_,p=n[7].title+"",T,w,v,u=n[7].subtitle+"",m,C,E,y=n[7].description+"",j,M,L,N,b=n[7].link&&Ce(n);return{c(){e=d("div"),l=d("img"),a=S(),r=d("div"),_=d("h2"),T=Y(p),w=S(),v=d("h4"),m=Y(u),C=S(),E=d("p"),j=Y(y),M=S(),L=d("div"),b&&b.c(),N=S(),this.h()},l(g){e=h(g,"DIV",{class:!0});var s=$(e);l=h(s,"IMG",{src:!0,alt:!0,class:!0}),s.forEach(f),a=x(g),r=h(g,"DIV",{class:!0});var k=$(r);_=h(k,"H2",{class:!0});var I=$(_);T=W(I,p),I.forEach(f),w=x(k),v=h(k,"H4",{class:!0});var H=$(v);m=W(H,u),H.forEach(f),C=x(k),E=h(k,"P",{class:!0});var O=$(E);j=W(O,y),O.forEach(f),M=x(k),L=h(k,"DIV",{class:!0});var z=$(L);b&&b.l(z),z.forEach(f),N=x(k),k.forEach(f),this.h()},h(){pe(l.src,t=n[7].image)||o(l,"src",t),o(l,"alt",c=n[7].title),o(l,"class","projectImg svelte-idptvj"),o(e,"class","imgBox svelte-idptvj"),o(_,"class","svelte-idptvj"),o(v,"class","svelte-idptvj"),o(E,"class","svelte-idptvj"),o(L,"class","projectInfo svelte-idptvj"),o(r,"class","textBox svelte-idptvj")},m(g,s){A(g,e,s),i(e,l),A(g,a,s),A(g,r,s),i(r,_),i(_,T),i(r,w),i(r,v),i(v,m),i(r,C),i(r,E),i(E,j),i(r,M),i(r,L),b&&b.m(L,null),i(r,N)},p(g,s){s&1&&!pe(l.src,t=g[7].image)&&o(l,"src",t),s&1&&c!==(c=g[7].title)&&o(l,"alt",c),s&1&&p!==(p=g[7].title+"")&&ue(T,p),s&1&&u!==(u=g[7].subtitle+"")&&ue(m,u),s&1&&y!==(y=g[7].description+"")&&ue(j,y),g[7].link?b?b.p(g,s):(b=Ce(g),b.c(),b.m(L,null)):b&&(b.d(1),b=null)},d(g){g&&(f(e),f(a),f(r)),b&&b.d()}}}function Ge(n){let e,l,t=n[7].title+"",c,a,r,_=n[7].subtitle+"",p,T,w,v=n[7].description+"",u,m,C,E,y,j,M,L,N,b=n[7].link&&Te(n);return{c(){e=d("div"),l=d("h2"),c=Y(t),a=S(),r=d("h4"),p=Y(_),T=S(),w=d("p"),u=Y(v),m=S(),C=d("div"),b&&b.c(),E=S(),y=d("div"),j=d("img"),N=S(),this.h()},l(g){e=h(g,"DIV",{class:!0});var s=$(e);l=h(s,"H2",{class:!0});var k=$(l);c=W(k,t),k.forEach(f),a=x(s),r=h(s,"H4",{class:!0});var I=$(r);p=W(I,_),I.forEach(f),T=x(s),w=h(s,"P",{class:!0});var H=$(w);u=W(H,v),H.forEach(f),m=x(s),C=h(s,"DIV",{class:!0});var O=$(C);b&&b.l(O),O.forEach(f),s.forEach(f),E=x(g),y=h(g,"DIV",{class:!0});var z=$(y);j=h(z,"IMG",{src:!0,alt:!0,class:!0}),N=x(z),z.forEach(f),this.h()},h(){o(l,"class","svelte-idptvj"),o(r,"class","svelte-idptvj"),o(w,"class","svelte-idptvj"),o(C,"class","projectInfo svelte-idptvj"),o(e,"class","textBox svelte-idptvj"),pe(j.src,M=n[7].image)||o(j,"src",M),o(j,"alt",L=n[7].title),o(j,"class","projectImg svelte-idptvj"),o(y,"class","imgBox svelte-idptvj")},m(g,s){A(g,e,s),i(e,l),i(l,c),i(e,a),i(e,r),i(r,p),i(e,T),i(e,w),i(w,u),i(e,m),i(e,C),b&&b.m(C,null),A(g,E,s),A(g,y,s),i(y,j),i(y,N)},p(g,s){s&1&&t!==(t=g[7].title+"")&&ue(c,t),s&1&&_!==(_=g[7].subtitle+"")&&ue(p,_),s&1&&v!==(v=g[7].description+"")&&ue(u,v),g[7].link?b?b.p(g,s):(b=Te(g),b.c(),b.m(C,null)):b&&(b.d(1),b=null),s&1&&!pe(j.src,M=g[7].image)&&o(j,"src",M),s&1&&L!==(L=g[7].title)&&o(j,"alt",L)},d(g){g&&(f(e),f(E),f(y)),b&&b.d()}}}function Ce(n){let e,l,t;return{c(){e=d("a"),l=Y("See More"),this.h()},l(c){e=h(c,"A",{href:!0,target:!0,rel:!0,id:!0});var a=$(e);l=W(a,"See More"),a.forEach(f),this.h()},h(){o(e,"href",t=n[7].link),o(e,"target","_blank"),o(e,"rel","noopener noreferrer"),o(e,"id","seemorebutton")},m(c,a){A(c,e,a),i(e,l)},p(c,a){a&1&&t!==(t=c[7].link)&&o(e,"href",t)},d(c){c&&f(e)}}}function Te(n){let e,l,t;return{c(){e=d("a"),l=Y("See More"),this.h()},l(c){e=h(c,"A",{href:!0,target:!0,rel:!0,id:!0});var a=$(e);l=W(a,"See More"),a.forEach(f),this.h()},h(){o(e,"href",t=n[7].link),o(e,"target","_blank"),o(e,"rel","noopener noreferrer"),o(e,"id","seemorebutton")},m(c,a){A(c,e,a),i(e,l)},p(c,a){a&1&&t!==(t=c[7].link)&&o(e,"href",t)},d(c){c&&f(e)}}}function $e(n,e){let l,t;function c(_,p){return _[7].id%2===0?Ge:ze}let a=c(e),r=a(e);return{key:n,first:null,c(){l=me(),r.c(),t=me(),this.h()},l(_){l=me(),r.l(_),t=me(),this.h()},h(){this.first=l},m(_,p){A(_,l,p),r.m(_,p),A(_,t,p)},p(_,p){e=_,a===(a=c(e))&&r?r.p(e,p):(r.d(1),r=a(e),r&&(r.c(),r.m(t.parentNode,t)))},d(_){_&&(f(l),f(t)),r.d(_)}}}function Fe(n){let e,l,t="PROJECTS",c,a,r,_,p,T="Robotics/ML/Autonomous Systems",w,v,u,m="Systems and Applications",C,E,y,j="OS",M,L,N,b="Logic Design",g,s,k=[],I=new Map,H,O,z='Find more <a href="https://github.com/calsfu" target="_blank" rel="noopener noreferrer">here</a>',K,F,X=ve(n[1].filter(n[6]));const se=P=>P[7].id;for(let P=0;P<X.length;P+=1){let B=we(n,X,P),V=se(B);I.set(V,k[P]=$e(V,B))}return{c(){e=d("section"),l=d("h1"),l.textContent=t,c=S(),a=d("div"),r=d("ul"),_=d("li"),p=d("button"),p.textContent=T,w=S(),v=d("li"),u=d("button"),u.textContent=m,C=S(),E=d("li"),y=d("button"),y.textContent=j,M=S(),L=d("li"),N=d("button"),N.textContent=b,g=S(),s=d("div");for(let P=0;P<k.length;P+=1)k[P].c();H=S(),O=d("p"),O.innerHTML=z,this.h()},l(P){e=h(P,"SECTION",{class:!0,id:!0});var B=$(e);l=h(B,"H1",{class:!0,"data-svelte-h":!0}),U(l)!=="svelte-gc70j8"&&(l.textContent=t),c=x(B),a=h(B,"DIV",{class:!0});var V=$(a);r=h(V,"UL",{style:!0});var G=$(r);_=h(G,"LI",{});var de=$(_);p=h(de,"BUTTON",{class:!0,"data-svelte-h":!0}),U(p)!=="svelte-1msou17"&&(p.textContent=T),de.forEach(f),w=x(G),v=h(G,"LI",{});var he=$(v);u=h(he,"BUTTON",{class:!0,"data-svelte-h":!0}),U(u)!=="svelte-sx99w1"&&(u.textContent=m),he.forEach(f),C=x(G),E=h(G,"LI",{});var Q=$(E);y=h(Q,"BUTTON",{class:!0,"data-svelte-h":!0}),U(y)!=="svelte-1nsjdvo"&&(y.textContent=j),Q.forEach(f),M=x(G),L=h(G,"LI",{});var fe=$(L);N=h(fe,"BUTTON",{class:!0,"data-svelte-h":!0}),U(N)!=="svelte-1jnvkh0"&&(N.textContent=b),fe.forEach(f),G.forEach(f),V.forEach(f),g=x(B),s=h(B,"DIV",{class:!0});var q=$(s);for(let ne=0;ne<k.length;ne+=1)k[ne].l(q);q.forEach(f),H=x(B),O=h(B,"P",{style:!0,"data-svelte-h":!0}),U(O)!=="svelte-zp5245"&&(O.innerHTML=z),B.forEach(f),this.h()},h(){o(l,"class","projectTitle svelte-idptvj"),o(p,"class","button-62 svelte-idptvj"),o(u,"class","button-62 svelte-idptvj"),o(y,"class","button-62 svelte-idptvj"),o(N,"class","button-62 svelte-idptvj"),R(r,"display","flex"),R(r,"flex-direction","row"),R(r,"align-items","center"),R(r,"justify-content","center"),R(r,"list-style","none"),R(r,"border","none"),R(r,"gap","15px"),o(a,"class","chooseProject"),o(s,"class","projectBox svelte-idptvj"),R(O,"color","var(--text-color)"),o(e,"class","projects svelte-idptvj"),o(e,"id","projects")},m(P,B){A(P,e,B),i(e,l),i(e,c),i(e,a),i(a,r),i(r,_),i(_,p),i(r,w),i(r,v),i(v,u),i(r,C),i(r,E),i(E,y),i(r,M),i(r,L),i(L,N),i(e,g),i(e,s);for(let V=0;V<k.length;V+=1)k[V]&&k[V].m(s,null);i(e,H),i(e,O),K||(F=[J(p,"click",n[2]),J(u,"click",n[3]),J(y,"click",n[4]),J(N,"click",n[5])],K=!0)},p(P,[B]){B&3&&(X=ve(P[1].filter(P[6])),k=Me(k,B,se,1,P,X,I,s,xe,$e,null,we))},i:D,o:D,d(P){P&&f(e);for(let B=0;B<k.length;B+=1)k[B].d();K=!1,ge(F)}}}function qe(n,e,l){let t=3;return[t,[{id:1,title:"Model Processor",subtitle:"Verilog Digital Logic",description:"Created a model CPU with 8 registers and a 16-bit bus. Supports 8 functions lie, ADD, SUB, MULT, JUMP. Recieved information from ROM storage and a program conter. Supports FPGA.",link:"https://github.com/calsfu/verilog_processor",image:"/modelProcessor.png",group:4},{id:2,title:"Autonomous Bike Light",subtitle:"C++, Arduino, Circuits, Sensors",description:"A bike light that turns off in bright settings and gets brighter as speed increases. Collaborated in a group to create a circuit diagram, reasearch and purchase parts, and wrote code for an Arduino microcontroller.",link:"https://github.com/calsfu/autonomous-bike-light",image:"/BikeLightPhoto.png",group:3},{id:12,title:"Scheduling Discord Bot",subtitle:"Typescript, SQLite, Discord.js",description:"Engineered a custom Discord bot for scheduling events and activities using the discord.js API. Utilized a SQLite database to store server specific events and send reminders an hour before an even",link:"https://github.com/calsfu/scheduling-bot",image:"/scheduling-2.png",group:1},{id:13,title:"ASCII Pokemon Game",subtitle:"C++ Terminal Game",description:"Pokemon game using C++ in the terminal. Uses classes, inheritance, polymorphism, and more.",link:"https://github.com/calsfu/Terminal-Pokemon-Game",image:"/pokemon.png",group:1},{id:14,title:"Casino",subtitle:"Rust, Svelte, Tauri",description:"Casino app that allows users to play games like blackjack, slots, and roulette. Uses Rust for backend, Svelte for frontend, and Tauri to connect them.",link:"https://github.com/calsfu/rust-casino",image:"/casino.png",group:1},{id:23,title:"Self-Driving Car",subtitle:"Python, PyTorch, NVIDA Jetson Nano",description:"Created a self-driving car using a Jetson Nano and a PyTorch Neural Network. The car is able to drive around a track and avoid obstacles.",link:"",image:"/car.jpg",group:3},{id:24,title:"Lip Reading Neural Network",subtitle:"PyTorch Neural Network",description:"Utlizied two lip reading datasets to create a transformer based and CNN based Neural Networks.",link:"https://github.com/chris-krenz/ec523-lip-reading-project",image:"/small_report.png",group:3},{id:27,title:"Street Sign Image Classifier",subtitle:"PyTorch Neural Network",description:"Created a Convolutional Neural Network (CNN) with PyTorch to classify street signs. Optimized network to receive 99% accuracy on the German Traffic Sign Recognition Benchmark (GTSRB).",link:"https://github.com/calsfu/streetsign-image-detection",image:"/gtsrb.jpg",group:3},{id:31,title:"Threading Library",subtitle:"C",description:"Created a threading library in C that supports mutexes, semaphores, and condition variables. Implemented a scheduler that supports round robin, priority, and lottery scheduling.",link:"https://github.com/calsfu/mini-os",image:"/thread.png",group:2},{id:32,title:"Virtual File System",subtitle:"C",description:"Created a file system in C that supports multiple files, directories, and permissions.",link:"https://github.com/calsfu/mini-os",image:"/vfs.png",group:2},{id:33,title:"Linux Shell",subtitle:"C",description:"Created a shell in C that supports multiple commands, pipes, and redirection. Followed REPL design pattern.",link:"https://github.com/calsfu/mini-os",image:"/shell.png",group:2}],()=>l(0,t=3),()=>l(0,t=1),()=>l(0,t=2),()=>l(0,t=4),w=>w.group===t]}class Je extends te{constructor(e){super(),le(this,e,qe,Fe,ee,{})}}function Ee(n,e,l){const t=n.slice();return t[2]=e[l].name,t[3]=e[l].icon,t}function Ke(n){let e,l;return{c(){e=d("img"),this.h()},l(t){e=h(t,"IMG",{src:!0,alt:!0,id:!0,class:!0}),this.h()},h(){pe(e.src,l="/"+n[3]+".svg")||o(e,"src",l),o(e,"alt",""),o(e,"id","toobig"),o(e,"class","svelte-7863wf")},m(t,c){A(t,e,c)},p:D,d(t){t&&f(e)}}}function Qe(n){let e;return{c(){e=d("i"),this.h()},l(l){e=h(l,"I",{class:!0}),$(e).forEach(f),this.h()},h(){o(e,"class",je(n[3])+" svelte-7863wf")},m(l,t){A(l,e,t)},p:D,d(l){l&&f(e)}}}function Ie(n){let e,l,t,c,a,r=n[2]+"",_,p;function T(u,m){return u[3].startsWith("devicon")?Qe:Ke}let v=T(n)(n);return{c(){e=d("div"),l=d("li"),t=d("div"),v.c(),c=S(),a=d("p"),_=Y(r),p=S(),this.h()},l(u){e=h(u,"DIV",{class:!0});var m=$(e);l=h(m,"LI",{class:!0});var C=$(l);t=h(C,"DIV",{class:!0});var E=$(t);v.l(E),E.forEach(f),c=x(C),a=h(C,"P",{class:!0});var y=$(a);_=W(y,r),y.forEach(f),C.forEach(f),p=x(m),m.forEach(f),this.h()},h(){o(t,"class","picture svelte-7863wf"),o(a,"class","skillText svelte-7863wf"),o(l,"class","wholeIcon svelte-7863wf"),o(e,"class","poopy")},m(u,m){A(u,e,m),i(e,l),i(l,t),v.m(t,null),i(l,c),i(l,a),i(a,_),i(e,p)},p(u,m){v.p(u,m)},d(u){u&&f(e),v.d()}}}function Ye(n){let e,l,t="SKILLS",c,a,r="Know",_,p,T=ve(n[0]),w=[];for(let v=0;v<T.length;v+=1)w[v]=Ie(Ee(n,T,v));return{c(){e=d("section"),l=d("h1"),l.textContent=t,c=S(),a=d("p"),a.textContent=r,_=S(),p=d("ul");for(let v=0;v<w.length;v+=1)w[v].c();this.h()},l(v){e=h(v,"SECTION",{class:!0,id:!0});var u=$(e);l=h(u,"H1",{"data-svelte-h":!0}),U(l)!=="svelte-1jjldi"&&(l.textContent=t),c=x(u),a=h(u,"P",{"data-svelte-h":!0}),U(a)!=="svelte-9quf05"&&(a.textContent=r),_=x(u),p=h(u,"UL",{class:!0});var m=$(p);for(let C=0;C<w.length;C+=1)w[C].l(m);m.forEach(f),u.forEach(f),this.h()},h(){o(p,"class","skillList svelte-7863wf"),o(e,"class","skills svelte-7863wf"),o(e,"id","skills")},m(v,u){A(v,e,u),i(e,l),i(e,c),i(e,a),i(e,_),i(e,p);for(let m=0;m<w.length;m+=1)w[m]&&w[m].m(p,null)},p(v,[u]){if(u&1){T=ve(v[0]);let m;for(m=0;m<T.length;m+=1){const C=Ee(v,T,m);w[m]?w[m].p(C,u):(w[m]=Ie(C),w[m].c(),w[m].m(p,null))}for(;m<w.length;m+=1)w[m].d(1);w.length=T.length}},i:D,o:D,d(v){v&&f(e),Se(w,v)}}}function We(n){return[[{name:"C++",icon:"devicon-cplusplus-plain-wordmark"},{name:"Python",icon:"devicon-python-plain"},{name:"Machine Learning",icon:"machine-learning"},{name:"Deep Learning",icon:"deep-learning-project"},{name:"Computer Vision",icon:"eye"},{name:"MATLAB",icon:"devicon-matlab-plain"},{name:"Rust",icon:"devicon-rust-plain"},{name:"Typescript",icon:"devicon-typescript-plain"},{name:"Svelte",icon:"devicon-svelte-plain"},{name:"Arduino",icon:"devicon-arduino-plain"},{name:"OS",icon:"operating-systems"},{name:"Statistics",icon:"statistics"}]]}class Xe extends te{constructor(e){super(),le(this,e,We,Ye,ee,{})}}function Ze(n){let e,l='<div class="footerInfo svelte-irr6yz"><a href="https://github.com/calsfu" target="_blank" rel="noopener noreferrer"><img src="/github-mark-white.png" alt="logo" class="logo svelte-irr6yz"/></a> <p class="text svelte-irr6yz">Made by Cole Resurreccion</p> <a href="mailto::coler2366@gmail.com" target="_blank" rel="noopener noreferrer">Contact Me</a></div>';return{c(){e=d("section"),e.innerHTML=l,this.h()},l(t){e=h(t,"SECTION",{class:!0,"data-svelte-h":!0}),U(e)!=="svelte-1nm6gsk"&&(e.innerHTML=l),this.h()},h(){o(e,"class","footer svelte-irr6yz")},m(t,c){A(t,e,c)},p:D,i:D,o:D,d(t){t&&f(e)}}}class et extends te{constructor(e){super(),le(this,e,null,Ze,ee,{})}}function tt(n){let e=!1,l=()=>{e=!1},t,c,a='<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/> <meta charset="utf-8"/> <meta name="viewport" content="width=device-width, initial-scale=1"/> <title>Cole Resurreccion</title>',r,_,p,T,w,v,u,m,C,E,y,j,M,L,N,b,g;return Le(n[1]),T=new Oe({}),v=new Ve({}),m=new Be({}),E=new Xe({}),j=new Je({}),L=new et({}),{c(){c=d("header"),c.innerHTML=a,r=S(),_=d("body"),p=d("div"),ie(T.$$.fragment),w=S(),ie(v.$$.fragment),u=S(),ie(m.$$.fragment),C=S(),ie(E.$$.fragment),y=S(),ie(j.$$.fragment),M=S(),ie(L.$$.fragment),this.h()},l(s){c=h(s,"HEADER",{"data-svelte-h":!0}),U(c)!=="svelte-d6mwu2"&&(c.innerHTML=a),r=x(s),_=h(s,"BODY",{class:!0});var k=$(_);p=h(k,"DIV",{class:!0});var I=$(p);oe(T.$$.fragment,I),w=x(I),oe(v.$$.fragment,I),u=x(I),oe(m.$$.fragment,I),C=x(I),oe(E.$$.fragment,I),y=x(I),oe(j.$$.fragment,I),M=x(I),oe(L.$$.fragment,I),I.forEach(f),k.forEach(f),this.h()},h(){o(p,"class","main svelte-1x5ucp7"),o(_,"class","svelte-1x5ucp7")},m(s,k){A(s,c,k),A(s,r,k),A(s,_,k),i(_,p),re(T,p,null),i(p,w),re(v,p,null),i(p,u),re(m,p,null),i(p,C),re(E,p,null),i(p,y),re(j,p,null),i(p,M),re(L,p,null),N=!0,b||(g=J(window,"scroll",()=>{e=!0,clearTimeout(t),t=setTimeout(l,100),n[1]()}),b=!0)},p(s,[k]){k&1&&!e&&(e=!0,clearTimeout(t),scrollTo(window.pageXOffset,s[0]),t=setTimeout(l,100))},i(s){N||(Z(T.$$.fragment,s),Z(v.$$.fragment,s),Z(m.$$.fragment,s),Z(E.$$.fragment,s),Z(j.$$.fragment,s),Z(L.$$.fragment,s),N=!0)},o(s){ae(T.$$.fragment,s),ae(v.$$.fragment,s),ae(m.$$.fragment,s),ae(E.$$.fragment,s),ae(j.$$.fragment,s),ae(L.$$.fragment,s),N=!1},d(s){s&&(f(c),f(r),f(_)),ce(T),ce(v),ce(m),ce(E),ce(j),ce(L),b=!1,g()}}}function lt(n,e,l){let t=50;function c(){l(0,t=window.pageYOffset)}return[t,c]}class it extends te{constructor(e){super(),le(this,e,lt,tt,ee,{})}}export{it as component};
