if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let o={};const a=e=>i(e,r),c={module:{uri:r},exports:o,require:a};s[r]=Promise.all(n.map((e=>c[e]||a(e)))).then((e=>(l(...e),o)))}}define(["./workbox-51483c59"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/GroupStoryHome-legacy.6f3e26f7.js",revision:null},{url:"assets/GroupStoryHome.d1d4f779.js",revision:null},{url:"assets/index-legacy.3fb2f756.js",revision:null},{url:"assets/index.4803d640.css",revision:null},{url:"assets/index.d56594a5.js",revision:null},{url:"assets/MainStoryHome-legacy.756f8736.js",revision:null},{url:"assets/MainStoryHome.323c335e.js",revision:null},{url:"assets/MiniStoryHome-legacy.d637acc0.js",revision:null},{url:"assets/MiniStoryHome.632e4687.js",revision:null},{url:"assets/polyfills-legacy.89007107.js",revision:null},{url:"assets/StudentPersonalHome-legacy.6706de4c.js",revision:null},{url:"assets/StudentPersonalHome.680cf131.js",revision:null},{url:"assets/StudentSelector-legacy.13155a99.js",revision:null},{url:"assets/StudentSelector.116c0b44.css",revision:null},{url:"assets/StudentSelector.987a8ce7.js",revision:null},{url:"index.html",revision:"c57ff3f098e360dde743689731f807ef"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon/apple-touch-icon.png",revision:"eaf08579656b93da12e78678967b4f90"},{url:"favicon/android-chrome-192x192.png",revision:"48986230eb51310352d47e2ee59782b2"},{url:"favicon/android-chrome-512x512.png",revision:"995468e1a2008c610cac64bf575f6aaa"},{url:"favicon/favicon-16x16.png",revision:"618998e00d924c82e7962953170f5a55"},{url:"favicon/favicon-32x32.png",revision:"fd421bfe934f2aca2347229cc775eb40"},{url:"favicon/maskable-192x192.png",revision:"a5f45daa499a2d4e332a809af04755ce"},{url:"manifest.webmanifest",revision:"02b3bc8cd0785e3d61299295c47f9a44"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/(.*?)\.(mp4|mp3|wav)$/i,new e.CacheFirst({cacheName:"multimedia-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|webp|ico)$/i,new e.StaleWhileRevalidate({cacheName:"image-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(js|css|json)$/i,new e.NetworkFirst({cacheName:"asset-cache",networkTimeoutSeconds:5,plugins:[]}),"GET")}));
