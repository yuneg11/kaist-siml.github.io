import{S as a,i as s,s as e,g as t,h as l,j as c,d as r,k as o,E as n,b as i,o as h,m as d,n as u,l as f,t as v,c as g,z as b}from"./client.72c35e5f.js";var p=["image/home/1.jpg","image/home/2.jpeg","image/home/3.jpeg"];function m(a,s,e){const t=a.slice();return t[0]=s[e],t[2]=e,t}function E(a,s,e){const t=a.slice();return t[0]=s[e],t[2]=e,t}function x(a){let s;return{c(){s=t("button"),this.h()},l(a){s=l(a,"BUTTON",{type:!0,"data-bs-target":!0,"data-bs-slide-to":!0,"aria-label":!0}),c(s).forEach(r),this.h()},h(){o(s,"type","button"),o(s,"data-bs-target","#carousel"),o(s,"data-bs-slide-to",a[2]),o(s,"aria-label","Slide "+(a[2]+1)),n(s,"active",0===a[2])},m(a,e){i(a,s,e)},p:h,d(a){a&&r(s)}}}function j(a){let s,e,v,g;return{c(){s=t("div"),e=t("img"),g=d(),this.h()},l(a){s=l(a,"DIV",{class:!0});var t=c(s);e=l(t,"IMG",{src:!0,class:!0,alt:!0}),g=u(t),t.forEach(r),this.h()},h(){e.src!==(v=a[0])&&o(e,"src",v),o(e,"class","d-block w-100 svelte-1xjz8cu"),o(e,"alt","..."),o(s,"class","carousel-item"),n(s,"active",0===a[2])},m(a,t){i(a,s,t),f(s,e),f(s,g)},p:h,d(a){a&&r(s)}}}function I(a){let s,e,n,I,N,y,S,z,D,P,T,V,A,L,M,B,O,U,k,H,W,w,G,q,C,F=p,J=[];for(let s=0;s<F.length;s+=1)J[s]=x(E(a,F,s));let K=p,Q=[];for(let s=0;s<K.length;s+=1)Q[s]=j(m(a,K,s));return{c(){s=t("main"),e=t("div"),n=t("div"),I=t("h2"),N=v("Welcome to"),y=d(),S=t("h1"),z=v("Statistical Inference and Machine Learning Lab."),D=d(),P=t("div"),T=t("div");for(let a=0;a<J.length;a+=1)J[a].c();V=d(),A=t("div");for(let a=0;a<Q.length;a+=1)Q[a].c();L=d(),M=t("button"),B=t("span"),O=d(),U=t("span"),k=v("Previous"),H=d(),W=t("button"),w=t("span"),G=d(),q=t("span"),C=v("Next"),this.h()},l(a){s=l(a,"MAIN",{class:!0});var t=c(s);e=l(t,"DIV",{class:!0});var o=c(e);n=l(o,"DIV",{class:!0});var i=c(n);I=l(i,"H2",{});var h=c(I);N=g(h,"Welcome to"),h.forEach(r),y=u(i),S=l(i,"H1",{});var d=c(S);z=g(d,"Statistical Inference and Machine Learning Lab."),d.forEach(r),i.forEach(r),D=u(o),P=l(o,"DIV",{id:!0,class:!0,"data-bs-ride":!0});var f=c(P);T=l(f,"DIV",{class:!0});var v=c(T);for(let a=0;a<J.length;a+=1)J[a].l(v);v.forEach(r),V=u(f),A=l(f,"DIV",{class:!0});var b=c(A);for(let a=0;a<Q.length;a+=1)Q[a].l(b);b.forEach(r),L=u(f),M=l(f,"BUTTON",{class:!0,type:!0,"data-bs-target":!0,"data-bs-slide":!0});var p=c(M);B=l(p,"SPAN",{class:!0,"aria-hidden":!0}),c(B).forEach(r),O=u(p),U=l(p,"SPAN",{class:!0});var m=c(U);k=g(m,"Previous"),m.forEach(r),p.forEach(r),H=u(f),W=l(f,"BUTTON",{class:!0,type:!0,"data-bs-target":!0,"data-bs-slide":!0});var E=c(W);w=l(E,"SPAN",{class:!0,"aria-hidden":!0}),c(w).forEach(r),G=u(E),q=l(E,"SPAN",{class:!0});var x=c(q);C=g(x,"Next"),x.forEach(r),E.forEach(r),f.forEach(r),o.forEach(r),t.forEach(r),this.h()},h(){o(n,"class","title svelte-1xjz8cu"),o(T,"class","carousel-indicators"),o(A,"class","carousel-inner"),o(B,"class","carousel-control-prev-icon"),o(B,"aria-hidden","true"),o(U,"class","visually-hidden svelte-1xjz8cu"),o(M,"class","carousel-control-prev"),o(M,"type","button"),o(M,"data-bs-target","#carousel"),o(M,"data-bs-slide","prev"),o(w,"class","carousel-control-next-icon"),o(w,"aria-hidden","true"),o(q,"class","visually-hidden svelte-1xjz8cu"),o(W,"class","carousel-control-next"),o(W,"type","button"),o(W,"data-bs-target","#carousel"),o(W,"data-bs-slide","next"),o(P,"id","carousel"),o(P,"class","carousel slide"),o(P,"data-bs-ride","carousel"),o(e,"class","content svelte-1xjz8cu"),o(s,"class","svelte-1xjz8cu")},m(a,t){i(a,s,t),f(s,e),f(e,n),f(n,I),f(I,N),f(n,y),f(n,S),f(S,z),f(e,D),f(e,P),f(P,T);for(let a=0;a<J.length;a+=1)J[a].m(T,null);f(P,V),f(P,A);for(let a=0;a<Q.length;a+=1)Q[a].m(A,null);f(P,L),f(P,M),f(M,B),f(M,O),f(M,U),f(U,k),f(P,H),f(P,W),f(W,w),f(W,G),f(W,q),f(q,C)},p(a,[s]){if(0&s){let e;for(K=p,e=0;e<K.length;e+=1){const t=m(a,K,e);Q[e]?Q[e].p(t,s):(Q[e]=j(t),Q[e].c(),Q[e].m(A,null))}for(;e<Q.length;e+=1)Q[e].d(1);Q.length=K.length}},i:h,o:h,d(a){a&&r(s),b(J,a),b(Q,a)}}}export default class extends a{constructor(a){super(),s(this,a,null,I,e,{})}}