!function(){function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,r){if(!t)return;if("string"==typeof t)return e(t,r);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return e(t,r)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,a=new Array(e);r<e;r++)a[r]=t[r];return a}System.register(["./index-legacy.cbc1eaf6.js","./axios-legacy.c095afd6.js"],(function(e,r){"use strict";var a,n,o,i,l,c,u,s,d,f,v,m,p,h,g,y,b,k,w,x,C,A,S,j,I,T=document.createElement("style");return T.innerHTML='.student-container[data-v-d5b2db5c]{display:grid;position:relative;grid-template-areas:"avatar";place-items:center;border-radius:.5rem;overflow:hidden}.student-container.unavailable[data-v-d5b2db5c]{cursor:not-allowed}.student-container.unavailable[data-v-d5b2db5c]:before{position:absolute;top:0;left:0;background-color:rgba(0,0,0,.3);width:100%;height:100%;content:""}.student-container.unavailable[data-v-d5b2db5c]:after{position:absolute;opacity:.8;filter:drop-shadow(0 0 1rem #fff);width:25%;height:25%;content:url(/assets/padlock.9aea6eca.svg)}.student-avatar[data-v-d5b2db5c]{grid-area:avatar;width:100%;height:100%;object-fit:cover}.name-tag[data-v-d5b2db5c]{grid-area:avatar;align-self:end;border-radius:0 0 .5rem .5rem;background-color:var(--color-name-tag);padding:.2rem 0;width:100%;color:var(--color-text-dark);font-weight:700;text-align:center}#student-selector-container[data-v-93734177]{display:grid;grid-template-columns:min-content auto;grid-template-areas:"name-filter name-filter" "filter list";justify-items:center;width:100%;height:100%;overflow-y:scroll}#name-filter[data-v-93734177]{grid-area:name-filter;transition:all .125s ease-in-out;margin-top:1.5rem;margin-bottom:1rem;border:none;border-radius:1rem;background-color:rgba(215,217,225,.7);padding:.5rem;width:calc(100% - 2rem);color:var(--color-text-glass-panel);font-size:1.5rem;text-align:center}#name-filter[data-v-93734177]:focus{outline:none;box-shadow:var(--style-shadow-component-near) inset}#student-container[data-v-93734177]{display:flex;flex:1;flex-direction:row;width:100%}#student-filter[data-v-93734177]{display:flex;grid-area:filter;flex-direction:column;padding-left:1rem;width:20rem;overflow-y:scroll}.filter-group[data-v-93734177]{display:flex;flex-direction:column;margin-bottom:1rem}.filter-options[data-v-93734177]{display:flex;flex-wrap:wrap;margin-top:.5rem}.filter-tag[data-v-93734177]{transition:all .175s ease-in-out;cursor:pointer;margin:.25rem;box-shadow:var(--style-shadow-component-far);border-radius:.5rem;background-color:var(--color-tag-background);padding:.25rem .5rem;color:var(--color-text-dark);font-weight:700;font-size:1rem;user-select:none}.filter-tag.active[data-v-93734177]{box-shadow:0 0 0 transparent;background-color:var(--color-text-dark);color:var(--color-text-light)}.tactic-type[data-v-93734177]{font-weight:bolder;font-family:Bender,sans-serif;text-transform:uppercase}.tactic-type.striker[data-v-93734177]{color:var(--color-text-striker)}.tactic-type.striker.active[data-v-93734177]{background-color:var(--color-text-striker);color:var(--color-text-light)}.tactic-type.special[data-v-93734177]{color:var(--color-text-special)}.tactic-type.special.active[data-v-93734177]{background-color:var(--color-text-special);color:var(--color-text-light)}.armor-type.lightarmor[data-v-93734177]{color:var(--color-text-light-armor)}.armor-type.lightarmor.active[data-v-93734177]{background-color:var(--color-text-light-armor);color:var(--color-text-light)}.armor-type.heavyarmor[data-v-93734177]{color:var(--color-text-heavy-armor)}.armor-type.heavyarmor.active[data-v-93734177]{background-color:var(--color-text-heavy-armor);color:var(--color-text-light)}.armor-type.unarmed[data-v-93734177]{color:var(--color-text-unarmed)}.armor-type.unarmed.active[data-v-93734177]{background-color:var(--color-text-unarmed);color:var(--color-text-light)}#student-list[data-v-93734177]{grid-gap:1.5rem;display:grid;grid-template-columns:repeat(auto-fill,7rem);grid-auto-rows:min-content;grid-area:list;justify-content:space-between;content-visibility:auto;padding:0 1rem 1rem;width:100%;height:available;overflow-y:scroll}.student-showcase[data-v-93734177]{display:inline-block;transition:all .375s ease-in-out;box-shadow:var(--style-shadow-component-far);border-radius:.5rem;width:fit-content;height:fit-content;text-decoration:none}.student-showcase[data-v-93734177]:hover{scale:1.01;box-shadow:var(--style-shadow-component-farther)}.loading[data-v-93734177]{display:flex;justify-content:center;align-items:center;width:100%;height:100%}.loading .spinner[data-v-93734177]{display:flex;justify-content:center;align-items:center;animation:spin-93734177 1s linear infinite;border:.2rem solid;border-color:var(--color-text-dark) transparent;border-radius:50%;width:4rem;height:4rem}.loading .spinner span[data-v-93734177]{animation:spin-93734177 1s linear infinite;animation-direction:reverse}@keyframes spin-93734177{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n',document.head.appendChild(T),{setters:[function(t){a=t._,n=t.c,o=t.s,i=t.a,l=t.t,c=t.n,u=t.u,s=t.b,d=t.r,f=t.w,v=t.d,m=t.o,p=t.e,h=t.f,g=t.g,y=t.v,b=t.F,k=t.h,w=t.i,x=t.j,C=t.k,A=t.l,S=t.p,j=t.m},function(t){I=t.a}],execute:function(){var r=new Uint32Array(65536),T=function(t,e){if(t.length<e.length){var a=e;e=t,t=a}return 0===e.length?t.length:t.length<=32?function(t,e){for(var a=t.length,n=e.length,o=1<<a-1,i=-1,l=0,c=a,u=a;u--;)r[t.charCodeAt(u)]|=1<<u;for(u=0;u<n;u++){var s=r[e.charCodeAt(u)],d=s|l;(l|=~((s|=(s&i)+i^i)|i))&o&&c++,(i&=s)&o&&c--,i=i<<1|~(d|(l=l<<1|1)),l&=d}for(u=a;u--;)r[t.charCodeAt(u)]=0;return c}(t,e):function(t,e){for(var a=e.length,n=t.length,o=[],i=[],l=Math.ceil(a/32),c=Math.ceil(n/32),u=0;u<l;u++)i[u]=-1,o[u]=0;for(var s=0;s<c-1;s++){for(var d=0,f=-1,v=32*s,m=Math.min(32,n)+v,p=v;p<m;p++)r[t.charCodeAt(p)]|=1<<p;for(var h=0;h<a;h++){var g=r[e.charCodeAt(h)],y=i[h/32|0]>>>h&1,b=o[h/32|0]>>>h&1,k=g|d,w=((g|b)&f)+f^f|g|b,x=d|~(w|f),C=f&w;x>>>31^y&&(i[h/32|0]^=1<<h),C>>>31^b&&(o[h/32|0]^=1<<h),f=(C=C<<1|b)|~(k|(x=x<<1|y)),d=x&k}for(var A=v;A<m;A++)r[t.charCodeAt(A)]=0}for(var S=0,j=-1,I=32*s,T=Math.min(32,n-I)+I,_=I;_<T;_++)r[t.charCodeAt(_)]|=1<<_;for(var M=n,L=0;L<a;L++){var N=r[e.charCodeAt(L)],E=i[L/32|0]>>>L&1,O=o[L/32|0]>>>L&1,z=N|S,F=((N|O)&j)+j^j|N|O,H=S|~(F|j),U=j&F;M+=H>>>n-1&1,M-=U>>>n-1&1,H>>>31^E&&(i[L/32|0]^=1<<L),U>>>31^O&&(o[L/32|0]^=1<<L),j=(U=U<<1|O)|~(z|(H=H<<1|E)),S=H&z}for(var $=I;$<T;$++)r[t.charCodeAt($)]=0;return M}(t,e)};function _(t,e){var r=!1,a=new RegExp(/[，。！“”/《》？：；「」{}｜\\"$&+,:;=?@#|'<>.^*()%!\-\s]/g),n=t.toLowerCase().replaceAll(a,"");return e.map((function(t){return t.toString().toLowerCase().replaceAll(a,"")})).forEach((function(t){var e,a;t&&(1-T(e=n,a=t)/Math.max(e.length,a.length)>.7||n.includes(t)||t.includes(n)||t.startsWith(n)||t.endsWith(n)||""===n)&&(r=!0)})),r}function M(t,e,r){return r.filter((function(r){return e.includes(r[t])}))}var L=["src","alt"],N={class:"name-tag"},E=a({__name:"StudentShowbox",props:{studentInfo:{type:Object,required:!0,default:function(){return{id:0,familyName:{cn:"",jp:"",en:""},name:{cn:"",jp:"",en:""},nickname:[],rarity:1,club:"",affiliation:"",type:"Main",armorType:"LightArmor",weapon:"AR",availability:{momotalk:!1,story:!1}}}}},setup:function(t){var e=t;var r=n((function(){return!(!e.studentInfo.availability.momotalk&&!e.studentInfo.availability.story)}));return function(e,a){return a[0]||(o(-1),a[0]=i("div",{class:c(["student-container",u(r)?"":"unavailable"])},[i("img",{class:"student-avatar",src:(n=t.studentInfo.id,"/image/avatar_students/".concat(n,".webp")),alt:t.studentInfo.name.cn},null,8,L),i("div",N,l(t.studentInfo.name.cn),1)],2),o(1),a[0]);var n}}},[["__scopeId","data-v-d5b2db5c"]]),O=function(t){return S("data-v-93734177"),t=t(),j(),t},z={key:0,class:"loading"},F={class:"spinner"},H={key:1,id:"student-selector-container"},U=["placeholder"],$={id:"student-filter"},J={class:"filter-group"},R=O((function(){return i("h2",{class:"filter-label"},"稀有度",-1)})),W={class:"filter-options"},q=["onClick"],B={class:"filter-group"},D=O((function(){return i("h2",{class:"filter-label"},"学校",-1)})),P={class:"filter-options"},V=["onClick"],G={class:"filter-group"},K=O((function(){return i("h2",{class:"filter-label"},"战术作用",-1)})),Q={class:"filter-options"},X=["onClick"],Y={class:"filter-group"},Z=O((function(){return i("h2",{class:"filter-label"},"装甲类型",-1)})),tt={class:"filter-options"},et=["onClick"],rt={class:"filter-group"},at=O((function(){return i("h2",{class:"filter-label"},"社团",-1)})),nt={class:"filter-options"},ot=["onClick"],it={id:"student-list"},lt={__name:"StudentSelector",setup:function(e){var r=s(),a=d(!1),o=d([]),S=d(0),j=d(!1);j.value=!1,I.get("/config/json/students.json",{onDownloadProgress:function(t){S.value=Math.floor(100*t.loaded/t.total)}}).then((function(t){try{o.value=t.data.sort((function(t,e){return t.name.cn.localeCompare(e.name.cn,"zh-Hans-CN",{sensitivity:"accent"})}))}catch(e){o.value=t.data}a.value=!0})).catch((function(t){console.log(t)})),f((function(){return r.path}),(function(t){console.log(t),j.value=!/\/archive\/?$/.test(t)}));var T=n((function(){return o.value.map((function(e){return{id:e.id,allNames:[e.name.cn,e.name.jp,e.name.en].concat(t(e.nickname))}}))}));function L(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=[];if(o.value.forEach((function(e){r.includes(e[t])||r.push(e[t])})),e)try{return r.sort((function(t,e){return t.localeCompare(e,"zh-Hans-CN",{sensitivity:"accent"})}))}catch(a){return r}return r}var N={LightArmor:{name:"轻装甲",order:1},HeavyArmor:{name:"重装甲",order:2},Unarmed:{name:"神秘装甲",order:3}};function O(t,e){return N[t].order-N[e].order||-1}var lt=n((function(){return L("rarity",!1)})),ct=n((function(){return L("club")})),ut=n((function(){return L("affiliation")})),st=n((function(){return L("type",!1)})),dt=n((function(){return L("armorType",!1).sort(O)})),ft=d(""),vt=d({searchString:ft,rarity:[],club:[],affiliation:[],type:[],armorType:[]}),mt=JSON.parse(localStorage.getItem("appliedFilters"));function pt(t,e){return vt.value[t].includes(e)?"active":""}function ht(t,e){vt.value[t].includes(e)?vt.value[t]=vt.value[t].filter((function(t){return t!==e})):vt.value[t].push(e)}mt&&(vt.value.searchString=mt.searchString||"",vt.value.rarity=mt.rarity||[],vt.value.club=mt.club||[],vt.value.affiliation=mt.affiliation||[],vt.value.type=mt.type||[],vt.value.armorType=mt.armorType||[]);var gt=n((function(){return localStorage.setItem("appliedFilters",JSON.stringify(vt.value)),function(t,e,r){if(""===t.searchString&&0===t.rarity.length&&0===t.club.length&&0===t.affiliation.length&&0===t.type.length&&0===t.armorType.length)return r.map((function(t){return t.id}));var a=r;if(t.searchString){var n=[];r.forEach((function(r){_(t.searchString,e.find((function(t){return t.id===r.id})).allNames)&&n.push(r)})),a=n}return 0!==t.rarity.length&&(a=M("rarity",t.rarity,a)),0!==t.club.length&&(a=M("club",t.club,a)),0!==t.affiliation.length&&(a=M("affiliation",t.affiliation,a)),0!==t.type.length&&(a=M("type",t.type,a)),0!==t.armorType.length&&(a=M("armorType",t.armorType,a)),a.map((function(t){return t.id}))}(vt.value,T.value,o.value)}));return function(t,e){var r=v("router-link"),n=v("router-view");return m(),p(b,null,[a.value?h("",!0):(m(),p("div",z,[i("div",F,[i("span",null,l(S.value)+"%",1)])])),a.value&&!j.value?(m(),p("div",H,[g(i("input",{type:"text",id:"name-filter",placeholder:ft.value?"":"在学生姓名/黑话内搜索…","onUpdate:modelValue":e[0]||(e[0]=function(t){return ft.value=t}),onFocus:e[1]||(e[1]=function(t){return t.target.select()}),autocomplete:"off"},null,40,U),[[y,ft.value]]),i("div",$,[i("div",J,[R,i("div",W,[(m(!0),p(b,null,k(u(lt),(function(t){return m(),p("div",{class:c(["filter-tag",pt("rarity",t)]),role:"checkbox",key:t,onClick:function(e){return ht("rarity",t)}}," ★ "+l(t),11,q)})),128))])]),i("div",B,[D,i("div",P,[(m(!0),p(b,null,k(u(ut),(function(t){return m(),p("div",{class:c(["filter-tag",pt("affiliation",t)]),role:"checkbox",key:t,onClick:function(e){return ht("affiliation",t)}},l(t),11,V)})),128))])]),i("div",G,[K,i("div",Q,[(m(!0),p(b,null,k(u(st),(function(t){return m(),p("div",{class:c(["filter-tag tactic-type","".concat(t.toLowerCase()," ").concat(pt("type",t))]),role:"checkbox",key:t,onClick:function(e){return ht("type",t)}},l(t),11,X)})),128))])]),i("div",Y,[Z,i("div",tt,[(m(!0),p(b,null,k(u(dt),(function(t){return m(),p("div",{class:c(["filter-tag armor-type","".concat(t.toLowerCase()," ").concat(pt("armorType",t))]),role:"checkbox",key:t,onClick:function(e){return ht("armorType",t)}},l(N[t].name||t),11,et)})),128))])]),i("div",rt,[at,i("div",nt,[(m(!0),p(b,null,k(u(ct),(function(t){return m(),p("div",{class:c(["filter-tag",pt("club",t)]),role:"checkbox",key:t,onClick:function(e){return ht("club",t)}},l(t),11,ot)})),128))])])]),i("div",it,[(m(!0),p(b,null,k(o.value,(function(t){return g((m(),w(r,{class:"student-showcase",key:t.id,to:"/archive/".concat(t.id,"/momotalk"),onClick:e[2]||(e[2]=function(t){return j.value=!0})},{default:C((function(){return[A(E,{"student-info":t},null,8,["student-info"])]})),_:2},1032,["to"])),[[x,u(gt).includes(t.id)]])})),128))])])):h("",!0),j.value?(m(),w(n,{key:2})):h("",!0)],64)}}};e("default",a(lt,[["__scopeId","data-v-93734177"]]))}}}))}();
