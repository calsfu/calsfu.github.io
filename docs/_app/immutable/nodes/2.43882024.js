import{r as de,s as ee,n as F,f as ce,h as we}from"../chunks/scheduler.8ea2a124.js";import{d as Z,S as te,i as le,g as f,s as A,h as p,j as T,y as O,c as S,f as h,k as o,l as U,a as B,x as i,z as G,e as se,m as q,n as Q,o as X,r as ie,u as ne,v as oe,t as re,w as ae}from"../chunks/index.1a58b1fe.js";function ge(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function Te(n,e){n.d(1),e.delete(n.key)}function je(n,e,s,t,a,c,l,g,m,C,$,j){let _=n.length,I=c.length,L=_;const y={};for(;L--;)y[n[L].key]=L;const b=[],w=new Map,M=new Map,v=[];for(L=I;L--;){const r=j(a,c,L),k=s(r);let N=l.get(k);N?t&&v.push(()=>N.p(r,e)):(N=C(k,r),N.c()),w.set(k,b[L]=N),k in y&&M.set(k,Math.abs(L-y[k]))}const E=new Set,u=new Set;function d(r){Z(r,1),r.m(g,$),l.set(r.key,r),$=r.first,I--}for(;_&&I;){const r=b[I-1],k=n[_-1],N=r.key,H=k.key;r===k?($=r.first,_--,I--):w.has(H)?!l.has(N)||E.has(N)?d(r):u.has(H)?_--:M.get(N)>M.get(H)?(u.add(N),d(r)):(E.add(H),_--):(m(k,l),_--)}for(;_--;){const r=n[_];w.has(r.key)||m(r,l)}for(;I;)d(b[I-1]);return de(v),b}function Le(n){let e,s,t,a,c,l,g="Cole Resurreccion",m,C,$='<img src="/github-mark-white.png" alt="logo" class="logo svelte-11l4i0o"/>',j,_,I='<img style="width:25px; height:auto; margin-top:7px;" src="/moon-svgrepo-com.svg" alt="nightmode"/>',L,y,b,w,M,v="Home",E,u,d,r="Projects",k,N;return{c(){e=f("nav"),s=f("ul"),t=f("li"),a=f("ul"),c=f("li"),l=f("button"),l.textContent=g,m=A(),C=f("a"),C.innerHTML=$,j=A(),_=f("button"),_.innerHTML=I,L=A(),y=f("li"),b=f("ul"),w=f("li"),M=f("button"),M.textContent=v,E=A(),u=f("li"),d=f("button"),d.textContent=r,this.h()},l(H){e=p(H,"NAV",{class:!0,id:!0});var D=T(e);s=p(D,"UL",{class:!0});var R=T(s);t=p(R,"LI",{class:!0});var Y=T(t);a=p(Y,"UL",{class:!0});var K=T(a);c=p(K,"LI",{style:!0});var z=T(c);l=p(z,"BUTTON",{id:!0,style:!0,class:!0,"data-svelte-h":!0}),O(l)!=="svelte-1c1evpa"&&(l.textContent=g),m=S(z),C=p(z,"A",{href:!0,target:!0,rel:!0,class:!0,"data-svelte-h":!0}),O(C)!=="svelte-1l8wojf"&&(C.innerHTML=$),j=S(z),_=p(z,"BUTTON",{tabindex:!0,style:!0,"data-svelte-h":!0}),O(_)!=="svelte-3sklx7"&&(_.innerHTML=I),z.forEach(h),K.forEach(h),Y.forEach(h),L=S(R),y=p(R,"LI",{class:!0});var W=T(y);b=p(W,"UL",{class:!0});var P=T(b);w=p(P,"LI",{class:!0});var x=T(w);M=p(x,"BUTTON",{class:!0,"data-svelte-h":!0}),O(M)!=="svelte-h0hnf8"&&(M.textContent=v),x.forEach(h),E=S(P),u=p(P,"LI",{class:!0});var V=T(u);d=p(V,"BUTTON",{class:!0,"data-svelte-h":!0}),O(d)!=="svelte-e0lc88"&&(d.textContent=r),V.forEach(h),P.forEach(h),W.forEach(h),R.forEach(h),D.forEach(h),this.h()},h(){o(l,"id","mainBut"),U(l,"font-weight","500"),o(l,"class","svelte-11l4i0o"),o(C,"href","https://github.com/calsfu"),o(C,"target","_blank"),o(C,"rel","noopener noreferrer"),o(C,"class","svelte-11l4i0o"),o(_,"tabindex","0"),U(_,"background-color","transparent"),U(_,"border","0px"),U(_,"cursor","pointer"),U(c,"display","flex"),U(c,"flex-direction","row"),U(c,"align-items","center"),U(c,"justify-content","center"),o(a,"class","guide svelte-11l4i0o"),o(t,"class","topLeft svelte-11l4i0o"),o(M,"class","svelte-11l4i0o"),o(w,"class","guideItem svelte-11l4i0o"),o(d,"class","svelte-11l4i0o"),o(u,"class","guideItem svelte-11l4i0o"),o(b,"class","guide svelte-11l4i0o"),o(y,"class","topRight svelte-11l4i0o"),o(s,"class","headerItems svelte-11l4i0o"),o(e,"class","header svelte-11l4i0o"),o(e,"id","header")},m(H,D){B(H,e,D),i(e,s),i(s,t),i(t,a),i(a,c),i(c,l),i(c,m),i(c,C),i(c,j),i(c,_),i(s,L),i(s,y),i(y,b),i(b,w),i(w,M),i(b,E),i(b,u),i(u,d),k||(N=[G(l,"click",_e),G(_,"click",n[0]),G(M,"click",_e),G(d,"click",Ee)],k=!0)},p:F,i:F,o:F,d(H){H&&h(e),k=!1,de(N)}}}function _e(){window.scrollTo({top:0,behavior:"smooth"})}function Ee(){const n=document.getElementById("projects"),e=document.getElementById("header");n&&e&&window.scrollTo({top:n.offsetTop-e.offsetHeight,behavior:"smooth"})}function Ie(n,e,s){let{darkMode:t=!1}=e;function a(){s(1,t=!t),t?document.documentElement.setAttribute("data-theme","light"):document.documentElement.setAttribute("data-theme","dark")}return n.$$set=c=>{"darkMode"in c&&s(1,t=c.darkMode)},[a,t]}class Me extends te{constructor(e){super(),le(this,e,Ie,Le,ee,{darkMode:1})}}function $e(n){let e,s=`<h1 style="font-weight: 400; font-family: &#39;Poppins&#39;, sans-serif;" class="svelte-14siov4">Hello, I&#39;m <span class="color_name svelte-14siov4" style="font-weight: 500">Cole Resurreccion</span></h1> <p class="svelte-14siov4">I am a senior at Boston University studying Computer Engineering with a concentration in Machine Learning. 
        I am currently learning about robotics, machine learning, and aerospace. 
        I am motivated to learn about new technologies and build tools to be used at scale</p> <p class="svelte-14siov4">I enjoy working in a place that allows me to take pride in my work and contributions and also allows me to experiement with different ideas and to find the best ways to complete a task.</p>`;return{c(){e=f("section"),e.innerHTML=s,this.h()},l(t){e=p(t,"SECTION",{id:!0,class:!0,"data-svelte-h":!0}),O(e)!=="svelte-eywz1o"&&(e.innerHTML=s),this.h()},h(){o(e,"id","home"),o(e,"class","home svelte-14siov4")},m(t,a){B(t,e,a)},p:F,i:F,o:F,d(t){t&&h(e)}}}class Pe extends te{constructor(e){super(),le(this,e,null,$e,ee,{})}}function be(n,e,s){const t=n.slice();return t[7]=e[s],t}function Ae(n){let e,s,t,a,c,l,g,m=n[7].title+"",C,$,j,_=n[7].subtitle+"",I,L,y,b=n[7].description+"",w,M,v,E,u=n[7].link&&ke(n);return{c(){e=f("div"),s=f("img"),c=A(),l=f("div"),g=f("h2"),C=q(m),$=A(),j=f("h4"),I=q(_),L=A(),y=f("p"),w=q(b),M=A(),v=f("div"),u&&u.c(),E=A(),this.h()},l(d){e=p(d,"DIV",{class:!0});var r=T(e);s=p(r,"IMG",{src:!0,alt:!0,class:!0}),r.forEach(h),c=S(d),l=p(d,"DIV",{class:!0});var k=T(l);g=p(k,"H2",{class:!0});var N=T(g);C=Q(N,m),N.forEach(h),$=S(k),j=p(k,"H4",{class:!0});var H=T(j);I=Q(H,_),H.forEach(h),L=S(k),y=p(k,"P",{class:!0});var D=T(y);w=Q(D,b),D.forEach(h),M=S(k),v=p(k,"DIV",{class:!0});var R=T(v);u&&u.l(R),R.forEach(h),E=S(k),k.forEach(h),this.h()},h(){ce(s.src,t=n[7].image)||o(s,"src",t),o(s,"alt",a=n[7].title),o(s,"class","projectImg svelte-idptvj"),o(e,"class","imgBox svelte-idptvj"),o(g,"class","svelte-idptvj"),o(j,"class","svelte-idptvj"),o(y,"class","svelte-idptvj"),o(v,"class","projectInfo svelte-idptvj"),o(l,"class","textBox svelte-idptvj")},m(d,r){B(d,e,r),i(e,s),B(d,c,r),B(d,l,r),i(l,g),i(g,C),i(l,$),i(l,j),i(j,I),i(l,L),i(l,y),i(y,w),i(l,M),i(l,v),u&&u.m(v,null),i(l,E)},p(d,r){r&1&&!ce(s.src,t=d[7].image)&&o(s,"src",t),r&1&&a!==(a=d[7].title)&&o(s,"alt",a),r&1&&m!==(m=d[7].title+"")&&X(C,m),r&1&&_!==(_=d[7].subtitle+"")&&X(I,_),r&1&&b!==(b=d[7].description+"")&&X(w,b),d[7].link?u?u.p(d,r):(u=ke(d),u.c(),u.m(v,null)):u&&(u.d(1),u=null)},d(d){d&&(h(e),h(c),h(l)),u&&u.d()}}}function Se(n){let e,s,t=n[7].title+"",a,c,l,g=n[7].subtitle+"",m,C,$,j=n[7].description+"",_,I,L,y,b,w,M,v,E,u=n[7].link&&ye(n);return{c(){e=f("div"),s=f("h2"),a=q(t),c=A(),l=f("h4"),m=q(g),C=A(),$=f("p"),_=q(j),I=A(),L=f("div"),u&&u.c(),y=A(),b=f("div"),w=f("img"),E=A(),this.h()},l(d){e=p(d,"DIV",{class:!0});var r=T(e);s=p(r,"H2",{class:!0});var k=T(s);a=Q(k,t),k.forEach(h),c=S(r),l=p(r,"H4",{class:!0});var N=T(l);m=Q(N,g),N.forEach(h),C=S(r),$=p(r,"P",{class:!0});var H=T($);_=Q(H,j),H.forEach(h),I=S(r),L=p(r,"DIV",{class:!0});var D=T(L);u&&u.l(D),D.forEach(h),r.forEach(h),y=S(d),b=p(d,"DIV",{class:!0});var R=T(b);w=p(R,"IMG",{src:!0,alt:!0,class:!0}),E=S(R),R.forEach(h),this.h()},h(){o(s,"class","svelte-idptvj"),o(l,"class","svelte-idptvj"),o($,"class","svelte-idptvj"),o(L,"class","projectInfo svelte-idptvj"),o(e,"class","textBox svelte-idptvj"),ce(w.src,M=n[7].image)||o(w,"src",M),o(w,"alt",v=n[7].title),o(w,"class","projectImg svelte-idptvj"),o(b,"class","imgBox svelte-idptvj")},m(d,r){B(d,e,r),i(e,s),i(s,a),i(e,c),i(e,l),i(l,m),i(e,C),i(e,$),i($,_),i(e,I),i(e,L),u&&u.m(L,null),B(d,y,r),B(d,b,r),i(b,w),i(b,E)},p(d,r){r&1&&t!==(t=d[7].title+"")&&X(a,t),r&1&&g!==(g=d[7].subtitle+"")&&X(m,g),r&1&&j!==(j=d[7].description+"")&&X(_,j),d[7].link?u?u.p(d,r):(u=ye(d),u.c(),u.m(L,null)):u&&(u.d(1),u=null),r&1&&!ce(w.src,M=d[7].image)&&o(w,"src",M),r&1&&v!==(v=d[7].title)&&o(w,"alt",v)},d(d){d&&(h(e),h(y),h(b)),u&&u.d()}}}function ke(n){let e,s,t;return{c(){e=f("a"),s=q("See More"),this.h()},l(a){e=p(a,"A",{href:!0,target:!0,rel:!0,id:!0});var c=T(e);s=Q(c,"See More"),c.forEach(h),this.h()},h(){o(e,"href",t=n[7].link),o(e,"target","_blank"),o(e,"rel","noopener noreferrer"),o(e,"id","seemorebutton")},m(a,c){B(a,e,c),i(e,s)},p(a,c){c&1&&t!==(t=a[7].link)&&o(e,"href",t)},d(a){a&&h(e)}}}function ye(n){let e,s,t;return{c(){e=f("a"),s=q("See More"),this.h()},l(a){e=p(a,"A",{href:!0,target:!0,rel:!0,id:!0});var c=T(e);s=Q(c,"See More"),c.forEach(h),this.h()},h(){o(e,"href",t=n[7].link),o(e,"target","_blank"),o(e,"rel","noopener noreferrer"),o(e,"id","seemorebutton")},m(a,c){B(a,e,c),i(e,s)},p(a,c){c&1&&t!==(t=a[7].link)&&o(e,"href",t)},d(a){a&&h(e)}}}function Ce(n,e){let s,t;function a(g,m){return g[7].id%2===0?Se:Ae}let c=a(e),l=c(e);return{key:n,first:null,c(){s=se(),l.c(),t=se(),this.h()},l(g){s=se(),l.l(g),t=se(),this.h()},h(){this.first=s},m(g,m){B(g,s,m),l.m(g,m),B(g,t,m)},p(g,m){e=g,c===(c=a(e))&&l?l.p(e,m):(l.d(1),l=c(e),l&&(l.c(),l.m(t.parentNode,t)))},d(g){g&&(h(s),h(t)),l.d(g)}}}function xe(n){let e,s,t="PROJECTS",a,c,l,g,m,C="Robotics/ML/Autonomous Systems",$,j,_,I="Systems and Applications",L,y,b,w="OS",M,v,E,u="Logic Design",d,r,k=[],N=new Map,H,D,R='Find more <a href="https://github.com/calsfu" target="_blank" rel="noopener noreferrer">here</a>',Y,K,z=ge(n[1].filter(n[6]));const W=P=>P[7].id;for(let P=0;P<z.length;P+=1){let x=be(n,z,P),V=W(x);N.set(V,k[P]=Ce(V,x))}return{c(){e=f("section"),s=f("h1"),s.textContent=t,a=A(),c=f("div"),l=f("ul"),g=f("li"),m=f("button"),m.textContent=C,$=A(),j=f("li"),_=f("button"),_.textContent=I,L=A(),y=f("li"),b=f("button"),b.textContent=w,M=A(),v=f("li"),E=f("button"),E.textContent=u,d=A(),r=f("div");for(let P=0;P<k.length;P+=1)k[P].c();H=A(),D=f("p"),D.innerHTML=R,this.h()},l(P){e=p(P,"SECTION",{class:!0,id:!0});var x=T(e);s=p(x,"H1",{class:!0,"data-svelte-h":!0}),O(s)!=="svelte-gc70j8"&&(s.textContent=t),a=S(x),c=p(x,"DIV",{class:!0});var V=T(c);l=p(V,"UL",{style:!0});var J=T(l);g=p(J,"LI",{});var he=T(g);m=p(he,"BUTTON",{class:!0,"data-svelte-h":!0}),O(m)!=="svelte-1msou17"&&(m.textContent=C),he.forEach(h),$=S(J),j=p(J,"LI",{});var fe=T(j);_=p(fe,"BUTTON",{class:!0,"data-svelte-h":!0}),O(_)!=="svelte-sx99w1"&&(_.textContent=I),fe.forEach(h),L=S(J),y=p(J,"LI",{});var pe=T(y);b=p(pe,"BUTTON",{class:!0,"data-svelte-h":!0}),O(b)!=="svelte-1nsjdvo"&&(b.textContent=w),pe.forEach(h),M=S(J),v=p(J,"LI",{});var me=T(v);E=p(me,"BUTTON",{class:!0,"data-svelte-h":!0}),O(E)!=="svelte-1jnvkh0"&&(E.textContent=u),me.forEach(h),J.forEach(h),V.forEach(h),d=S(x),r=p(x,"DIV",{class:!0});var ve=T(r);for(let ue=0;ue<k.length;ue+=1)k[ue].l(ve);ve.forEach(h),H=S(x),D=p(x,"P",{style:!0,"data-svelte-h":!0}),O(D)!=="svelte-zp5245"&&(D.innerHTML=R),x.forEach(h),this.h()},h(){o(s,"class","projectTitle svelte-idptvj"),o(m,"class","button-62 svelte-idptvj"),o(_,"class","button-62 svelte-idptvj"),o(b,"class","button-62 svelte-idptvj"),o(E,"class","button-62 svelte-idptvj"),U(l,"display","flex"),U(l,"flex-direction","row"),U(l,"align-items","center"),U(l,"justify-content","center"),U(l,"list-style","none"),U(l,"border","none"),U(l,"gap","15px"),o(c,"class","chooseProject"),o(r,"class","projectBox svelte-idptvj"),U(D,"color","var(--text-color)"),o(e,"class","projects svelte-idptvj"),o(e,"id","projects")},m(P,x){B(P,e,x),i(e,s),i(e,a),i(e,c),i(c,l),i(l,g),i(g,m),i(l,$),i(l,j),i(j,_),i(l,L),i(l,y),i(y,b),i(l,M),i(l,v),i(v,E),i(e,d),i(e,r);for(let V=0;V<k.length;V+=1)k[V]&&k[V].m(r,null);i(e,H),i(e,D),Y||(K=[G(m,"click",n[2]),G(_,"click",n[3]),G(b,"click",n[4]),G(E,"click",n[5])],Y=!0)},p(P,[x]){x&3&&(z=ge(P[1].filter(P[6])),k=je(k,x,W,1,P,z,N,r,Te,Ce,null,be))},i:F,o:F,d(P){P&&h(e);for(let x=0;x<k.length;x+=1)k[x].d();Y=!1,de(K)}}}function Ne(n,e,s){let t=3;return[t,[{id:1,title:"Model Processor",subtitle:"Verilog Digital Logic",description:"Created a model CPU with 8 registers and a 16-bit bus. Supports 8 functions lie, ADD, SUB, MULT, JUMP. Recieved information from ROM storage and a program conter. Supports FPGA.",link:"https://github.com/calsfu/verilog_processor",image:"/modelProcessor.png",group:4},{id:12,title:"Scheduling Discord Bot",subtitle:"Typescript, SQLite, Discord.js",description:"Engineered a custom Discord bot for scheduling events and activities using the discord.js API. Utilized a SQLite database to store server specific events and send reminders an hour before an even",link:"https://github.com/calsfu/scheduling-bot",image:"/scheduling-2.png",group:1},{id:13,title:"ASCII Pokemon Game",subtitle:"C++ Terminal Game",description:"Pokemon game using C++ in the terminal. Uses classes, inheritance, polymorphism, and more.",link:"https://github.com/calsfu/Terminal-Pokemon-Game",image:"/pokemon.png",group:1},{id:14,title:"Casino",subtitle:"Rust, Svelte, Tauri",description:"Casino app that allows users to play games like blackjack, slots, and roulette. Uses Rust for backend, Svelte for frontend, and Tauri to connect them.",link:"https://github.com/calsfu/rust-casino",image:"/casino.png",group:1},{id:22,title:"CARLA Modular Pipeline",subtitle:"Python, CARLA, Perception, Motion Planning, Control",description:" Modular pipeline consisting of a perception, path planning, and a control unit.",link:"https://github.com/calsfu/carla-modular-pipeline",image:"/mod-pipe.png",group:3},{id:23,title:"CARLA Imitation Learning",subtitle:"Python, PyTorch, CARLA, Deep Learning, CNN",description:'Adapted "End to End Learning for Self-Driving Cars" by NVIDIA. Trained and evaluated on the CARLA. Placed 5th out of 30 teams in competition.',link:"https://github.com/calsfu/carla-imitation-learning",image:"/imi-learn.png",group:3},{id:24,title:"Self-Driving Car",subtitle:"Python, PyTorch, NVIDA Jetson Nano",description:"Created a self-driving car using a Jetson Nano and a PyTorch Neural Network. The car is able to drive around a track and avoid obstacles.",link:"",image:"/car.jpg",group:3},{id:25,title:"Lip Reading Neural Network",subtitle:"Python, PyTorch, Deep Learning, CNN, Transformer",description:"Utlizied two lip reading datasets to create a transformer based and CNN based Neural Networks.",link:"https://github.com/chris-krenz/ec523-lip-reading-project",image:"/small_report.png",group:3},{id:2,title:"Autonomous Bike Light",subtitle:"C++, Arduino, Circuits, Sensors",description:"A bike light that turns off in bright settings and gets brighter as speed increases. Collaborated in a group to create a circuit diagram, reasearch and purchase parts, and wrote code for an Arduino microcontroller.",link:"https://github.com/calsfu/autonomous-bike-light",image:"/BikeLightPhoto.png",group:3},{id:31,title:"Threading Library",subtitle:"C",description:"Created a threading library in C that supports mutexes, semaphores, and condition variables. Implemented a scheduler that supports round robin, priority, and lottery scheduling.",link:"https://github.com/calsfu/mini-os",image:"/thread.png",group:2},{id:32,title:"Virtual File System",subtitle:"C",description:"Created a file system in C that supports multiple files, directories, and permissions.",link:"https://github.com/calsfu/mini-os",image:"/vfs.png",group:2},{id:33,title:"Linux Shell",subtitle:"C",description:"Created a shell in C that supports multiple commands, pipes, and redirection. Followed REPL design pattern.",link:"https://github.com/calsfu/mini-os",image:"/shell.png",group:2}],()=>s(0,t=3),()=>s(0,t=1),()=>s(0,t=2),()=>s(0,t=4),$=>$.group===t]}class He extends te{constructor(e){super(),le(this,e,Ne,xe,ee,{})}}function De(n){let e,s='<div class="footerInfo svelte-irr6yz"><a href="https://github.com/calsfu" target="_blank" rel="noopener noreferrer"><img src="/github-mark-white.png" alt="logo" class="logo svelte-irr6yz"/></a> <p class="text svelte-irr6yz">Made by Cole Resurreccion</p> <a href="mailto::coler2366@gmail.com" target="_blank" rel="noopener noreferrer">Contact Me</a></div>';return{c(){e=f("section"),e.innerHTML=s,this.h()},l(t){e=p(t,"SECTION",{class:!0,"data-svelte-h":!0}),O(e)!=="svelte-1nm6gsk"&&(e.innerHTML=s),this.h()},h(){o(e,"class","footer svelte-irr6yz")},m(t,a){B(t,e,a)},p:F,i:F,o:F,d(t){t&&h(e)}}}class Be extends te{constructor(e){super(),le(this,e,null,De,ee,{})}}function Ue(n){let e=!1,s=()=>{e=!1},t,a,c='<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/> <meta charset="utf-8"/> <meta name="viewport" content="width=device-width, initial-scale=1"/> <title>Cole Resurreccion</title>',l,g,m,C,$,j,_,I,L,y,b,w,M;return we(n[1]),C=new Me({}),j=new Pe({}),I=new He({}),y=new Be({}),{c(){a=f("header"),a.innerHTML=c,l=A(),g=f("body"),m=f("div"),ie(C.$$.fragment),$=A(),ie(j.$$.fragment),_=A(),ie(I.$$.fragment),L=A(),ie(y.$$.fragment),this.h()},l(v){a=p(v,"HEADER",{"data-svelte-h":!0}),O(a)!=="svelte-d6mwu2"&&(a.innerHTML=c),l=S(v),g=p(v,"BODY",{class:!0});var E=T(g);m=p(E,"DIV",{class:!0});var u=T(m);ne(C.$$.fragment,u),$=S(u),ne(j.$$.fragment,u),_=S(u),ne(I.$$.fragment,u),L=S(u),ne(y.$$.fragment,u),u.forEach(h),E.forEach(h),this.h()},h(){o(m,"class","main svelte-1x5ucp7"),o(g,"class","svelte-1x5ucp7")},m(v,E){B(v,a,E),B(v,l,E),B(v,g,E),i(g,m),oe(C,m,null),i(m,$),oe(j,m,null),i(m,_),oe(I,m,null),i(m,L),oe(y,m,null),b=!0,w||(M=G(window,"scroll",()=>{e=!0,clearTimeout(t),t=setTimeout(s,100),n[1]()}),w=!0)},p(v,[E]){E&1&&!e&&(e=!0,clearTimeout(t),scrollTo(window.pageXOffset,v[0]),t=setTimeout(s,100))},i(v){b||(Z(C.$$.fragment,v),Z(j.$$.fragment,v),Z(I.$$.fragment,v),Z(y.$$.fragment,v),b=!0)},o(v){re(C.$$.fragment,v),re(j.$$.fragment,v),re(I.$$.fragment,v),re(y.$$.fragment,v),b=!1},d(v){v&&(h(a),h(l),h(g)),ae(C),ae(j),ae(I),ae(y),w=!1,M()}}}function Re(n,e,s){let t=50;function a(){s(0,t=window.pageYOffset)}return[t,a]}class ze extends te{constructor(e){super(),le(this,e,Re,Ue,ee,{})}}export{ze as component};