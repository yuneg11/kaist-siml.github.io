import{S as e,i as a,s as t,g as n,t as s,h as l,j as r,c as i,d as o,b as c,l as m,e as g,m as f,n as h,k as u,o as d,z as v,r as p,u as y,v as $,B as k,C as E,q as D,w,x as I,y as V,D as B,A as S}from"./client.fed1ad34.js";var x=[{name:"Juho Lee",email:"juholee@kaist.ac.kr",interests:["Bayesian deep learning & Deep bayesian learning","Bayesian nonparametric models","Random graph models"],image:"image/people/jhlee.png"}],H=[{name:"Jungwon Choi",email:"jungwon.choi@kaist.ac.kr",interests:["Meta-Learning","Causal inference"],image:"image/dummy.svg"},{name:"Balhae Kim",email:"balhaekim@kaist.ac.kr",interests:["Meta-Learning"],image:"image/dummy.svg"},{name:"Jongmin Yoon",email:"jm.yoon@kaist.ac.kr",interests:["Generative modeling","Adversarial robustness"],image:"image/dummy.svg"}],L=[{name:"Hyungi Lee",email:"lhk2708@kaist.ac.kr",interests:["Neural Network Gaussian Process"],image:"image/dummy.svg"},{name:"Giung Nam",email:"giung@kaist.ac.kr",interests:["Bayesian inference"],image:"image/dummy.svg"},{name:"Hyun Mog Kim",email:"hyunmog2020@kaist.ac.kr",interests:["Equivariant representations for deep learning"],image:"image/dummy.svg"},{name:"Sunguk Jang",email:"tommy9773@kaist.ac.kr",interests:["Bayesian deep learning"],image:"image/dummy.svg"},{name:"Hyemin Lee",email:"hyemin.lee@kaist.ac.kr",interests:["Generative modeling","Self-supervised learning"],image:"image/dummy.svg"},{name:"Eunggu Yun",email:"eunggu.yun@kaist.ac.kr",interests:["Neural Processes"],image:"image/dummy.svg"}];function M(e,a,t){const n=e.slice();return n[4]=a[t],n}function P(e){let a,t,f=e[4]+"";return{c(){a=n("li"),t=s(f)},l(e){a=l(e,"LI",{});var n=r(a);t=i(n,f),n.forEach(o)},m(e,n){c(e,a,n),m(a,t)},p(e,a){8&a&&f!==(f=e[4]+"")&&g(t,f)},d(e){e&&o(a)}}}function j(e){let a,t,p,y,$,k,E,D,w,I,V,B,S,x,H,L=e[3],j=[];for(let a=0;a<L.length;a+=1)j[a]=P(M(e,L,a));return{c(){a=n("div"),t=n("div"),p=n("img"),$=f(),k=n("div"),E=n("h5"),D=s(e[1]),w=f(),I=n("p"),V=n("a"),B=s(e[2]),x=f(),H=n("ul");for(let e=0;e<j.length;e+=1)j[e].c();this.h()},l(n){a=l(n,"DIV",{class:!0});var s=r(a);t=l(s,"DIV",{class:!0});var c=r(t);p=l(c,"IMG",{src:!0,class:!0,alt:!0}),$=h(c),k=l(c,"DIV",{class:!0});var m=r(k);E=l(m,"H5",{class:!0});var g=r(E);D=i(g,e[1]),g.forEach(o),w=h(m),I=l(m,"P",{class:!0});var f=r(I);V=l(f,"A",{href:!0,class:!0});var u=r(V);B=i(u,e[2]),u.forEach(o),f.forEach(o),x=h(m),H=l(m,"UL",{class:!0});var d=r(H);for(let e=0;e<j.length;e+=1)j[e].l(d);d.forEach(o),m.forEach(o),c.forEach(o),s.forEach(o),this.h()},h(){p.src!==(y=e[0])&&u(p,"src",y),u(p,"class","card-img-top svelte-y5mgue"),u(p,"alt","..."),u(E,"class","card-title"),u(V,"href",S="mailto:"+e[2]),u(V,"class","svelte-y5mgue"),u(I,"class","card-text"),u(H,"class","svelte-y5mgue"),u(k,"class","card-body svelte-y5mgue"),u(t,"class","card svelte-y5mgue"),u(a,"class","profile col-12 col-sm-6 col-md-4 col-lg-3 svelte-y5mgue")},m(e,n){c(e,a,n),m(a,t),m(t,p),m(t,$),m(t,k),m(k,E),m(E,D),m(k,w),m(k,I),m(I,V),m(V,B),m(k,x),m(k,H);for(let e=0;e<j.length;e+=1)j[e].m(H,null)},p(e,[a]){if(1&a&&p.src!==(y=e[0])&&u(p,"src",y),2&a&&g(D,e[1]),4&a&&g(B,e[2]),4&a&&S!==(S="mailto:"+e[2])&&u(V,"href",S),8&a){let t;for(L=e[3],t=0;t<L.length;t+=1){const n=M(e,L,t);j[t]?j[t].p(n,a):(j[t]=P(n),j[t].c(),j[t].m(H,null))}for(;t<j.length;t+=1)j[t].d(1);j.length=L.length}},i:d,o:d,d(e){e&&o(a),v(j,e)}}}function b(e,a,t){let{image:n}=a,{name:s}=a,{email:l}=a,{interests:r}=a;return e.$$set=e=>{"image"in e&&t(0,n=e.image),"name"in e&&t(1,s=e.name),"email"in e&&t(2,l=e.email),"interests"in e&&t(3,r=e.interests)},[n,s,l,r]}class G extends e{constructor(e){super(),a(this,e,b,j,t,{image:0,name:1,email:2,interests:3})}}function N(e,a,t){const n=e.slice();return n[0]=a[t],n}function A(e,a,t){const n=e.slice();return n[0]=a[t],n}function J(e,a,t){const n=e.slice();return n[0]=a[t],n}function C(e){let a,t;const n=[e[0]];let s={};for(let e=0;e<n.length;e+=1)s=B(s,n[e]);return a=new G({props:s}),{c(){p(a.$$.fragment)},l(e){y(a.$$.fragment,e)},m(e,n){$(a,e,n),t=!0},p(e,t){const s=0&t?k(n,[E(e[0])]):{};a.$set(s)},i(e){t||(D(a.$$.fragment,e),t=!0)},o(e){w(a.$$.fragment,e),t=!1},d(e){I(a,e)}}}function q(e){let a,t;const n=[e[0]];let s={};for(let e=0;e<n.length;e+=1)s=B(s,n[e]);return a=new G({props:s}),{c(){p(a.$$.fragment)},l(e){y(a.$$.fragment,e)},m(e,n){$(a,e,n),t=!0},p(e,t){const s=0&t?k(n,[E(e[0])]):{};a.$set(s)},i(e){t||(D(a.$$.fragment,e),t=!0)},o(e){w(a.$$.fragment,e),t=!1},d(e){I(a,e)}}}function K(e){let a,t;const n=[e[0]];let s={};for(let e=0;e<n.length;e+=1)s=B(s,n[e]);return a=new G({props:s}),{c(){p(a.$$.fragment)},l(e){y(a.$$.fragment,e)},m(e,n){$(a,e,n),t=!0},p(e,t){const s=0&t?k(n,[E(e[0])]):{};a.$set(s)},i(e){t||(D(a.$$.fragment,e),t=!0)},o(e){w(a.$$.fragment,e),t=!1},d(e){I(a,e)}}}function Y(e){let a,t,g,d,p,y,$,k,E,I,B,M,P,j,b,G,Y,z,R,U,F=x,O=[];for(let a=0;a<F.length;a+=1)O[a]=C(J(e,F,a));const Q=e=>w(O[e],1,1,(()=>{O[e]=null}));let T=H,W=[];for(let a=0;a<T.length;a+=1)W[a]=q(A(e,T,a));const X=e=>w(W[e],1,1,(()=>{W[e]=null}));let Z=L,_=[];for(let a=0;a<Z.length;a+=1)_[a]=K(N(e,Z,a));const ee=e=>w(_[e],1,1,(()=>{_[e]=null}));return{c(){a=n("main"),t=n("div"),g=n("div"),d=n("h3"),p=s("Professor"),y=f(),$=n("div");for(let e=0;e<O.length;e+=1)O[e].c();k=f(),E=n("div"),I=n("h3"),B=s("PhD Students"),M=f(),P=n("div");for(let e=0;e<W.length;e+=1)W[e].c();j=f(),b=n("div"),G=n("h3"),Y=s("MS Students"),z=f(),R=n("div");for(let e=0;e<_.length;e+=1)_[e].c();this.h()},l(e){a=l(e,"MAIN",{class:!0});var n=r(a);t=l(n,"DIV",{class:!0});var s=r(t);g=l(s,"DIV",{});var c=r(g);d=l(c,"H3",{});var m=r(d);p=i(m,"Professor"),m.forEach(o),y=h(c),$=l(c,"DIV",{class:!0});var f=r($);for(let e=0;e<O.length;e+=1)O[e].l(f);f.forEach(o),c.forEach(o),k=h(s),E=l(s,"DIV",{});var u=r(E);I=l(u,"H3",{});var v=r(I);B=i(v,"PhD Students"),v.forEach(o),M=h(u),P=l(u,"DIV",{class:!0});var D=r(P);for(let e=0;e<W.length;e+=1)W[e].l(D);D.forEach(o),u.forEach(o),j=h(s),b=l(s,"DIV",{});var w=r(b);G=l(w,"H3",{});var V=r(G);Y=i(V,"MS Students"),V.forEach(o),z=h(w),R=l(w,"DIV",{class:!0});var S=r(R);for(let e=0;e<_.length;e+=1)_[e].l(S);S.forEach(o),w.forEach(o),s.forEach(o),n.forEach(o),this.h()},h(){u($,"class","row"),u(P,"class","row"),u(R,"class","row row-cols-auto"),u(t,"class","content svelte-1iw03xy"),u(a,"class","svelte-1iw03xy")},m(e,n){c(e,a,n),m(a,t),m(t,g),m(g,d),m(d,p),m(g,y),m(g,$);for(let e=0;e<O.length;e+=1)O[e].m($,null);m(t,k),m(t,E),m(E,I),m(I,B),m(E,M),m(E,P);for(let e=0;e<W.length;e+=1)W[e].m(P,null);m(t,j),m(t,b),m(b,G),m(G,Y),m(b,z),m(b,R);for(let e=0;e<_.length;e+=1)_[e].m(R,null);U=!0},p(e,[a]){if(0&a){let t;for(F=x,t=0;t<F.length;t+=1){const n=J(e,F,t);O[t]?(O[t].p(n,a),D(O[t],1)):(O[t]=C(n),O[t].c(),D(O[t],1),O[t].m($,null))}for(S(),t=F.length;t<O.length;t+=1)Q(t);V()}if(0&a){let t;for(T=H,t=0;t<T.length;t+=1){const n=A(e,T,t);W[t]?(W[t].p(n,a),D(W[t],1)):(W[t]=q(n),W[t].c(),D(W[t],1),W[t].m(P,null))}for(S(),t=T.length;t<W.length;t+=1)X(t);V()}if(0&a){let t;for(Z=L,t=0;t<Z.length;t+=1){const n=N(e,Z,t);_[t]?(_[t].p(n,a),D(_[t],1)):(_[t]=K(n),_[t].c(),D(_[t],1),_[t].m(R,null))}for(S(),t=Z.length;t<_.length;t+=1)ee(t);V()}},i(e){if(!U){for(let e=0;e<F.length;e+=1)D(O[e]);for(let e=0;e<T.length;e+=1)D(W[e]);for(let e=0;e<Z.length;e+=1)D(_[e]);U=!0}},o(e){O=O.filter(Boolean);for(let e=0;e<O.length;e+=1)w(O[e]);W=W.filter(Boolean);for(let e=0;e<W.length;e+=1)w(W[e]);_=_.filter(Boolean);for(let e=0;e<_.length;e+=1)w(_[e]);U=!1},d(e){e&&o(a),v(O,e),v(W,e),v(_,e)}}}export default class extends e{constructor(e){super(),a(this,e,null,Y,t,{})}}
