if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,c)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let r={};const t=e=>i(e,o),d={module:{uri:o},exports:r,require:t};s[o]=Promise.all(n.map((e=>d[e]||t(e)))).then((e=>(c(...e),r)))}}define(["./workbox-e69989d3"],(function(e){"use strict";self.skipWaiting(),e.precacheAndRoute([{url:"2022/03/06/hello-world/index.html",revision:"e137918c7bb59e12e026cea2675bad0c"},{url:"archives/2022/03/index.html",revision:"e137918c7bb59e12e026cea2675bad0c"},{url:"archives/2022/index.html",revision:"e137918c7bb59e12e026cea2675bad0c"},{url:"archives/index.html",revision:"e137918c7bb59e12e026cea2675bad0c"},{url:"css/pages/index.css",revision:"1a4400f2142d922363c7d8e7d2bc712d"},{url:"css/phosphorus.css",revision:"4028bb080177d925952292beeae84b17"},{url:"css/tailwind.css",revision:"ca1202e18ede997db376e5af59de5c23"},{url:"experience/index-1.html",revision:"e137918c7bb59e12e026cea2675bad0c"},{url:"experience/index.html",revision:"bc724590ad2419f2bb1bfe96d7f4b0a7"},{url:"index.html",revision:"e137918c7bb59e12e026cea2675bad0c"},{url:"js/info.js",revision:"29be3fd9b0d26b81ee29e66b6f5d63b0"},{url:"js/minimasonry.min.js",revision:"e2b83790fe961f78b47dede5d08c6efb"},{url:"js/proton.min.js",revision:"9c10a6e06e48e4e53068bf76384e4acd"},{url:"js/stats.min.js",revision:"51add810e791d5bcd0668baea217ce5a"},{url:"list-of-post/index.html",revision:"5ce690e1c8a45651680bfd29603b218c"},{url:"manifest.json",revision:"774bb4c5fc8e0ad7ffb1506d54b7ebae"}],{}),e.registerRoute("/",new e.NetworkFirst({cacheName:"index",plugins:[]}),"GET"),e.registerRoute(/\.(?:js|css)$/,new e.StaleWhileRevalidate({cacheName:"js-css",plugins:[]}),"GET"),e.registerRoute(/\.(?:png|gif|jpg|jpeg|svg)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]}),new e.ExpirationPlugin({maxEntries:60,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]}),new e.ExpirationPlugin({maxAgeSeconds:31536e3})]}),"GET")}));
//# sourceMappingURL=sw.js.map
