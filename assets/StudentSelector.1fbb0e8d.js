import{d as e,u as t,c as l,o as n,a,b as r,t as i,e as s,_ as o,r as c,f as u,g as d,h as f,w as h,v,i as p,F as g,j as m,k as y,n as b,l as C,m as k,p as w,q as S,s as x,x as A}from"./index.0e3b8145.js";import{a as T}from"./axios.2e5862c3.js";import{u as F}from"./students.0b2b64ae.js";const _=new Uint32Array(65536),z=(e,t)=>{if(e.length<t.length){const l=t;t=e,e=l}return 0===t.length?e.length:e.length<=32?((e,t)=>{const l=e.length,n=t.length,a=1<<l-1;let r=-1,i=0,s=l,o=l;for(;o--;)_[e.charCodeAt(o)]|=1<<o;for(o=0;o<n;o++){let e=_[t.charCodeAt(o)];const l=e|i;e|=(e&r)+r^r,i|=~(e|r),r&=e,i&a&&s++,r&a&&s--,i=i<<1|1,r=r<<1|~(l|i),i&=l}for(o=l;o--;)_[e.charCodeAt(o)]=0;return s})(e,t):((e,t)=>{const l=t.length,n=e.length,a=[],r=[],i=Math.ceil(l/32),s=Math.ceil(n/32);for(let v=0;v<i;v++)r[v]=-1,a[v]=0;let o=0;for(;o<s-1;o++){let i=0,s=-1;const c=32*o,u=Math.min(32,n)+c;for(let t=c;t<u;t++)_[e.charCodeAt(t)]|=1<<t;for(let e=0;e<l;e++){const l=_[t.charCodeAt(e)],n=r[e/32|0]>>>e&1,o=a[e/32|0]>>>e&1,c=l|i,u=((l|o)&s)+s^s|l|o;let d=i|~(u|s),f=s&u;d>>>31^n&&(r[e/32|0]^=1<<e),f>>>31^o&&(a[e/32|0]^=1<<e),d=d<<1|n,f=f<<1|o,s=f|~(c|d),i=d&c}for(let t=c;t<u;t++)_[e.charCodeAt(t)]=0}let c=0,u=-1;const d=32*o,f=Math.min(32,n-d)+d;for(let v=d;v<f;v++)_[e.charCodeAt(v)]|=1<<v;let h=n;for(let v=0;v<l;v++){const e=_[t.charCodeAt(v)],l=r[v/32|0]>>>v&1,i=a[v/32|0]>>>v&1,s=e|c,o=((e|i)&u)+u^u|e|i;let d=c|~(o|u),f=u&o;h+=d>>>n-1&1,h-=f>>>n-1&1,d>>>31^l&&(r[v/32|0]^=1<<v),f>>>31^i&&(a[v/32|0]^=1<<v),d=d<<1|l,f=f<<1|i,u=f|~(s|d),c=d&s}for(let v=d;v<f;v++)_[e.charCodeAt(v)]=0;return h})(e,t)};function j(e,t){const l=null==t?void 0:t.filter((e=>void 0!==e));let n=!1;const a=new RegExp(/[，。！“”/《》？：；「」{}｜\\"$&+,:;=?@#|'<>.^*()%!\-\s]/g),r=e.toLowerCase().replaceAll(a,""),i=null==l?void 0:l.map((e=>(console.log(e),e.toString().toLowerCase().replaceAll(a,""))));return null==i||i.forEach((e=>{var t,l;e&&(1-z(t=r,l=e)/Math.max(t.length,l.length)>.66||r.includes(e)||e.includes(r)||e.startsWith(r)||e.endsWith(r)||""===r)&&(n=!0)})),n}function L(e,t,l){return l.filter((l=>t.includes(l[e])))}const $={class:"student-container rounded-small"},E=["src","alt"],I={class:"name-tag"},M=o(e({__name:"StudentShowbox",props:{studentInfo:Object},setup(e){const o=e,c=t(),u=l((()=>c.getLang.replace("cn","zh"))),d=l((()=>{var e;return(null==(e=o.studentInfo)?void 0:e.name[u.value])||""}));return(t,l)=>{var o,c,u;return n(),a("div",$,[r("img",{class:"student-avatar",src:(u=null==(o=e.studentInfo)?void 0:o.id,`/image/avatar_students/${u}.webp`),alt:null==(c=e.studentInfo)?void 0:c.name.zh},null,8,E),r("div",I,i(s(d)),1)])}}}),[["__scopeId","data-v-2f0cdf89"]]),N=e=>(w("data-v-4a4697e4"),e=e(),S(),e),H={key:0,class:"loading"},W={class:"spinner"},U={key:1,id:"student-selector-container"},R={class:"filter-banner"},q=["placeholder"],D={src:"/assets/clear-filter.e675c05c.svg",alt:"Clear all filters"},O=[N((()=>r("img",{src:"/assets/filter-options.ac505d64.svg",alt:"Filter options"},null,-1)))],P={class:"student-filter"},V={class:"filter-group"},B={class:"filter-label"},G=N((()=>r("span",null,"稀有度",-1))),J={class:"filter-options"},K=["onClick"],Q={class:"filter-group"},X={class:"filter-label"},Y=N((()=>r("span",null,"学校",-1))),Z={class:"filter-options"},ee=["onClick"],te={class:"filter-group"},le={class:"filter-label"},ne=N((()=>r("span",null,"战术作用",-1))),ae={class:"filter-options"},re=["onClick"],ie={class:"filter-group"},se={class:"filter-label"},oe=N((()=>r("span",null,"装甲类型",-1))),ce={class:"filter-options"},ue=["onClick"],de={class:"filter-group"},fe={class:"filter-label"},he=N((()=>r("span",null,"社团",-1))),ve={class:"filter-options"},pe=["onClick"],ge={id:"student-list"},me=o(e({__name:"StudentSelector",setup(e){const o=x(),w=t(),S=F(),_=c(!1),z=c(0),$=l((()=>!/\/archive\/?$/.test(o.path)));T.get("/config/json/students.json",{onDownloadProgress:e=>{z.value=Math.floor(100*(e.loaded||0)/(e.total||1))}}).then((e=>{try{const t=e.data.sort(((e,t)=>e.name.zh.localeCompare(t.name.zh,"zh-Hans-CN",{sensitivity:"accent"})));S.setStudents(t)}catch(t){const l=e.data;S.setStudents(l)}_.value=!0})).catch((e=>{console.log(e)}));const E=l((()=>S.getAllStudents)),I=l((()=>E.value.map((e=>({id:e.id,allNames:[e.name.zh,e.name.jp,e.name.en,...e.nickname]})))));function N(e,t=!0){const l=[];if(E.value.forEach((t=>{l.includes(t[e])||l.push(t[e])})),t)try{return l.sort(((e,t)=>e.toString().localeCompare(t.toString(),"zh-Hans-CN",{sensitivity:"accent"})))}catch(n){return l}return l}const me=[{string:"LightArmor",name:"轻装甲",order:1},{string:"HeavyArmor",name:"重装甲",order:2},{string:"Unarmed",name:"神秘装甲",order:3}];const ye=l((()=>N("rarity",!1))),be=l((()=>N("club"))),Ce=l((()=>N("affiliation"))),ke=l((()=>N("type",!1))),we=l((()=>N("armorType",!1).sort(((e,t)=>function(e,t){const l=me.find((t=>t.string===e))||{name:"0"},n=me.find((e=>e.string===t))||{name:"1"};return l.name.localeCompare(n.name,"zh-Hans-CN",{sensitivity:"accent"})}(e,t))))),Se=c(""),xe=l((()=>({searchString:Se.value,rarity:w.getRarityFilter,club:w.getClubFilter,affiliation:w.getAffiliationFilter,type:w.getTypeFilter,armorType:w.getArmorTypeFilter}))),Ae=l((()=>0===xe.value.rarity.length&&0===xe.value.club.length&&0===xe.value.affiliation.length&&0===xe.value.type.length&&0===xe.value.armorType.length));function Te(e,t){return xe.value[e].includes(t)?"active":""}function Fe(e,t){xe.value[e].includes(t)?xe.value[e]=xe.value[e].filter((e=>e!==t)):xe.value[e].push(t),w.setStudentFilters(xe.value)}const _e=l((()=>function(e,t,l){if(""===e.searchString&&0===e.rarity.length&&0===e.club.length&&0===e.affiliation.length&&0===e.type.length&&0===e.armorType.length)return l.map((e=>e.id));let n=l;if(e.searchString){const a=[];l.forEach((l=>{var n;j(e.searchString,null==(n=t.find((e=>e.id===l.id)))?void 0:n.allNames)&&a.push(l)})),n=a}return 0!==e.rarity.length&&(n=L("rarity",e.rarity,n)),0!==e.club.length&&(n=L("club",e.club,n)),0!==e.affiliation.length&&(n=L("affiliation",e.affiliation,n)),0!==e.type.length&&(n=L("type",e.type,n)),0!==e.armorType.length&&(n=L("armorType",e.armorType,n)),n.map((e=>e.id))}(xe.value,I.value,E.value)));function ze(e){e.target.select()}const je=c(!0);function Le(){je.value=window.innerWidth>768}function $e(e){w.clearStudentFilter(e)}return u((()=>{window.innerWidth<=768&&(je.value=!1),window.addEventListener("resize",Le)})),d((()=>{window.removeEventListener("resize",Le)})),(e,t)=>{const l=A("router-link"),o=A("router-view");return n(),a(g,null,[_.value?f("",!0):(n(),a("div",H,[r("div",W,[r("span",null,i(z.value)+"%",1)])])),_.value&&!s($)?(n(),a("div",U,[r("div",R,[h(r("input",{type:"text",id:"name-filter",placeholder:Se.value?"":"在学生姓名/黑话内搜索…","onUpdate:modelValue":t[0]||(t[0]=e=>Se.value=e),onFocus:ze,autocomplete:"off"},null,40,q),[[v,Se.value]]),s(Ae)?f("",!0):(n(),a("div",{key:0,class:"clear-filter-icon",onClick:t[1]||(t[1]=(...e)=>s(w).clearStudentFilters&&s(w).clearStudentFilters(...e))},[h(r("img",D,null,512),[[p,!s(Ae)]])])),r("div",{class:"filter-options-icon-mobile rounded-small",onClick:t[2]||(t[2]=e=>je.value=!je.value)},O)]),h(r("div",P,[r("div",V,[r("h2",B,[G,h(r("span",{class:"clear-filter-button",role:"button",tabindex:"0",onClick:t[3]||(t[3]=e=>$e("rarity"))},null,512),[[p,0!==s(xe).rarity.length]])]),r("div",J,[(n(!0),a(g,null,m(s(ye),(e=>(n(),a("div",{class:b(["filter-tag rounded-small",Te("rarity",e)]),role:"checkbox",key:e,onClick:t=>Fe("rarity",e)}," ★ "+i(e),11,K)))),128))])]),r("div",Q,[r("h2",X,[Y,h(r("span",{class:"clear-filter-button",role:"button",tabindex:"0",onClick:t[4]||(t[4]=e=>$e("affiliation"))},null,512),[[p,0!==s(xe).affiliation.length]])]),r("div",Z,[(n(!0),a(g,null,m(s(Ce),(e=>(n(),a("div",{class:b(["filter-tag rounded-small",Te("affiliation",e)]),role:"checkbox",key:e,onClick:t=>Fe("affiliation",e)},i(e),11,ee)))),128))])]),r("div",te,[r("h2",le,[ne,h(r("span",{class:"clear-filter-button",role:"button",tabindex:"0",onClick:t[5]||(t[5]=e=>$e("type"))},null,512),[[p,0!==s(xe).type.length]])]),r("div",ae,[(n(!0),a(g,null,m(s(ke),(e=>(n(),a("div",{class:b(["filter-tag tactic-type rounded-small",`${e.toString().toLowerCase()} ${Te("type",e)}`]),role:"checkbox",key:e,onClick:t=>Fe("type",e)},i(e),11,re)))),128))])]),r("div",ie,[r("h2",se,[oe,h(r("span",{class:"clear-filter-button",role:"button",tabindex:"0",onClick:t[6]||(t[6]=e=>$e("armorType"))},null,512),[[p,0!==s(xe).armorType.length]])]),r("div",ce,[(n(!0),a(g,null,m(s(we),(e=>{var t;return n(),a("div",{class:b(["filter-tag armor-type rounded-small",`${e.toString().toLowerCase()} ${Te("armorType",e)}`]),role:"checkbox",key:e,onClick:t=>Fe("armorType",e)},i((null==(t=me.find((t=>e===t.string)))?void 0:t.name)||e),11,ue)})),128))])]),r("div",de,[r("h2",fe,[he,h(r("span",{class:"clear-filter-button",role:"button",tabindex:"0",onClick:t[7]||(t[7]=e=>$e("club"))},null,512),[[p,0!==s(xe).club.length]])]),r("div",ve,[(n(!0),a(g,null,m(s(be),(e=>(n(),a("div",{class:b(["filter-tag rounded-small",Te("club",e)]),role:"checkbox",key:e,onClick:t=>Fe("club",e)},i(e),11,pe)))),128))])])],512),[[p,je.value]]),r("div",ge,[(n(!0),a(g,null,m(s(E),(e=>h((n(),y(l,{class:"student-showcase rounded-small",key:e.id,to:`/archive/${e.id}/momotalk`},{default:C((()=>[k(M,{"student-info":e},null,8,["student-info"])])),_:2},1032,["to"])),[[p,s(_e).includes(e.id)]]))),128))])])):f("",!0),s($)?(n(),y(o,{key:2})):f("",!0)],64)}}}),[["__scopeId","data-v-4a4697e4"]]);export{me as default};
