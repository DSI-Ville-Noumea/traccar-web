if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const c=e=>i(e,o),t={module:{uri:o},exports:l,require:c};s[o]=Promise.all(n.map((e=>t[e]||c(e)))).then((e=>(r(...e),l)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/alarm-DM0YUa2r.mp3",revision:null},{url:"assets/index-B8653DHw.js",revision:null},{url:"assets/index-DdCJoL7_.css",revision:null},{url:"assets/mapbox-gl-rtl-text.min-yre_e0Y0.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"index.html",revision:"19fe534ea8e15de488e6dd2f5cf88d5b"},{url:"styles.css",revision:"22808aa9ddac6c0183191614b7953e5f"},{url:"apple-touch-icon-180x180.png",revision:"27527b05315b4bcaa27183d0c99178d6"},{url:"favicon.ico",revision:"03d55280cc7e16907f90d7d152111869"},{url:"pwa-192x192.png",revision:"3b1e4bbecc729dd5ba5c67eb273f91ee"},{url:"pwa-512x512.png",revision:"9e98c5c9167e3577609ac44b27c5be45"},{url:"pwa-64x64.png",revision:"bb08d4ffe204a919b06960e1a96caea7"},{url:"manifest.webmanifest",revision:"1123cccfccba50daabe98ea77d27eb56"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/^\/api/]}))}));