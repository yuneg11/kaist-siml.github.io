import{S as e,i as a,s as t,e as n,t as i,a as s,b as r,f as l,g as o,d as c,c as d,j as h,m,k as g,l as u,n as f,q as p,o as v}from"./client.89c4729c.js";var b=[{name:"Bayesian Deep Learning",image:"image/research/bayesian.png",description:"Modern deep neural networks are typically overparameterized and thus under-specified by the available data.\nIn other words, deep neural networks often contain multiple solutions which can express hypotheses describing the data.\nWhile the classical training of deep neural networks aims to find a single solution, the Bayesian approach considers multiple possible solutions by performing marginalization.\nWe are studying various sub-fields involving deep neural networks from the Bayesian perspective.\n"},{name:"Diffusion",image:"image/dummy_wide.svg",description:"Diffusion probabilistic models, or score-based generative models, are a class of generative models that have been achieving the state-of-the-art image generating quality, beating existing generative models such as GANs and variational autoencoders.\nDiffusion model recover the data distribution from a simple and tractable distribution such as normal, by learning the score function to reverse the diffusion process from the data to noise distributions.\nOur group is interested in both theoretical and applications of the diffusion models, such as the fast generation of high-quality samples and the downstream tasks involving the diffusion model such as adversarial robustness, few-shot learning, and the text-to-image generation.\n"},{name:"Meta-Learning",image:"image/research/meta-learning.png",description:"Meta-learning refers to algorithms that learn how to learn; more broadly, any algorithm that uses meta-knowledge to facilitate other learning tasks is an instance of meta-learning.\nUnlike hand-designed learning algorithms, meta-learned algorithms can directly leverage common structure or inherent knowledge extracted from multiple related tasks.\nThis is essential for human-like AI capabilities such as continuously learning or processing multimodal data.\nIn our lab, we are interested in the fundamentals of meta-learning and its applications.\nSpecifically, we develop general meta-learning algorithms that learn meta-knowledge under real-world constraints, such as in settings with limited data.\nWe also formulate domain-specific meta-learning methods for problem settings such as domain generalization, generative modeling, and Bayesian learning.\n"},{name:"Healthcare",image:"image/research/healthcare.png",description:"Detecting cancer was doctors’ exclusive work before. Nowadays, thanks to the development of WSI(whole slide image), AI can detect cancer either.\nAS WSI is too big to fit into modern CNN architectures, it is divided into thousand of patches.\nAlso, there are only about 1000 WSI labels per dataset which easily provokes an over-fitting problem.\nOur lab focuses on multiple instance learning, where only slide-level labels are given.\nWe are trying to make pseudo-WSI labels by using information between patches. Furthermore, we are interested in self-supervised learning to extract adequate features for WSI.\nWe are also studying a reliable medical classification model based on multimodal data (MRI, natural language, omics, etc.) by applying confidence estimation through Bayesian deep learning and interpretability using explainable AI techniques.\n"}];function y(e,a,t){const n=e.slice();return n[0]=a[t],n}function w(e){let a,t,p,v,b,y,w,k,I,W,x=e[0].name+"",S=e[0].description+"";return{c(){a=n("div"),t=n("h2"),p=i(x),v=s(),b=n("p"),y=i(S),w=s(),k=n("img"),W=s(),this.h()},l(e){a=r(e,"DIV",{});var n=l(a);t=r(n,"H2",{class:!0});var i=l(t);p=o(i,x),i.forEach(c),v=d(n),b=r(n,"P",{class:!0});var s=l(b);y=o(s,S),s.forEach(c),w=d(n),k=r(n,"IMG",{src:!0,alt:!0,class:!0}),W=d(n),n.forEach(c),this.h()},h(){h(t,"class","svelte-18ll25p"),h(b,"class","svelte-18ll25p"),m(k.src,I=e[0].image||"image/dummy_wide.svg")||h(k,"src",I),h(k,"alt","..."),h(k,"class","svelte-18ll25p")},m(e,n){g(e,a,n),u(a,t),u(t,p),u(a,v),u(a,b),u(b,y),u(a,w),u(a,k),u(a,W)},p:f,d(e){e&&c(a)}}}function k(e){let a,t,i,o=b,m=[];for(let a=0;a<o.length;a+=1)m[a]=w(y(e,o,a));return{c(){a=s(),t=n("main"),i=n("div");for(let e=0;e<m.length;e+=1)m[e].c();this.h()},l(e){p('[data-svelte="svelte-2sbtyy"]',document.head).forEach(c),a=d(e),t=r(e,"MAIN",{});var n=l(t);i=r(n,"DIV",{class:!0});var s=l(i);for(let e=0;e<m.length;e+=1)m[e].l(s);s.forEach(c),n.forEach(c),this.h()},h(){document.title="SIML - Research",h(i,"class","content svelte-18ll25p")},m(e,n){g(e,a,n),g(e,t,n),u(t,i);for(let e=0;e<m.length;e+=1)m[e].m(i,null)},p(e,[a]){if(0&a){let t;for(o=b,t=0;t<o.length;t+=1){const n=y(e,o,t);m[t]?m[t].p(n,a):(m[t]=w(n),m[t].c(),m[t].m(i,null))}for(;t<m.length;t+=1)m[t].d(1);m.length=o.length}},i:f,o:f,d(e){e&&c(a),e&&c(t),v(m,e)}}}class I extends e{constructor(e){super(),a(this,e,null,k,t,{})}}export{I as default};