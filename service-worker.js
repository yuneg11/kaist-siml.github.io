!function(){"use strict";const t=1657029050791,i="cache"+t,n=["/client/client.aae54561.js","/client/inject_styles.803b7e80.js","/client/index.fa8b32f5.js","/client/publication.351dee0c.js","/client/research.1785534d.js","/client/people.9f22ccf5.js","/client/about.2ebc620d.js"].concat(["/service-worker-index.html","/CNAME","/bootstrap.bundle.min.js","/bootstrap.bundle.min.js.map","/favicon.png","/fonts/rubik-latin-300.woff","/fonts/rubik-latin-300.woff2","/fonts/rubik-latin-300italic.woff","/fonts/rubik-latin-300italic.woff2","/fonts/rubik-latin-400.woff","/fonts/rubik-latin-400.woff2","/fonts/rubik-latin-400italic.woff","/fonts/rubik-latin-400italic.woff2","/fonts/rubik-latin-500.woff","/fonts/rubik-latin-500.woff2","/fonts/rubik-latin-500italic.woff","/fonts/rubik-latin-500italic.woff2","/fonts/rubik-latin-700.woff","/fonts/rubik-latin-700.woff2","/fonts/rubik-latin-700italic.woff","/fonts/rubik-latin-700italic.woff2","/fonts/rubik-latin-900.woff","/fonts/rubik-latin-900.woff2","/fonts/rubik-latin-900italic.woff","/fonts/rubik-latin-900italic.woff2","/fonts.css","/kaist-gsai-bg.jpg","/kaist.jpg","/manifest.json"]),e=new Set(n);self.addEventListener("install",t=>{t.waitUntil(caches.open(i).then(t=>t.addAll(n)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",t=>{t.waitUntil(caches.keys().then(async t=>{for(const n of t)n!==i&&await caches.delete(n);self.clients.claim()}))}),self.addEventListener("fetch",i=>{if("GET"!==i.request.method||i.request.headers.has("range"))return;const n=new URL(i.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&e.has(n.pathname)?i.respondWith(caches.match(i.request)):"only-if-cached"!==i.request.cache&&i.respondWith(caches.open("offline"+t).then(async t=>{try{const n=await fetch(i.request);return t.put(i.request,n.clone()),n}catch(n){const e=await t.match(i.request);if(e)return e;throw n}}))))})}();