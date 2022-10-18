import{_ as e,c as t,s as a,a as l,t as r,n,u as i,b as o,r as s,w as c,d as u,o as d,e as f,f as p,g as v,v as h,F as m,h as y,i as g,j as b,k,l as C,p as A,m as S}from"./index.45a33179.js";import{a as w}from"./axios.be23cc29.js";const x=new Uint32Array(65536),T=(e,t)=>{if(e.length<t.length){const a=t;t=e,e=a}return 0===t.length?e.length:e.length<=32?((e,t)=>{const a=e.length,l=t.length,r=1<<a-1;let n=-1,i=0,o=a,s=a;for(;s--;)x[e.charCodeAt(s)]|=1<<s;for(s=0;s<l;s++){let e=x[t.charCodeAt(s)];const a=e|i;e|=(e&n)+n^n,i|=~(e|n),n&=e,i&r&&o++,n&r&&o--,i=i<<1|1,n=n<<1|~(a|i),i&=a}for(s=a;s--;)x[e.charCodeAt(s)]=0;return o})(e,t):((e,t)=>{const a=t.length,l=e.length,r=[],n=[],i=Math.ceil(a/32),o=Math.ceil(l/32);for(let v=0;v<i;v++)n[v]=-1,r[v]=0;let s=0;for(;s<o-1;s++){let i=0,o=-1;const c=32*s,u=Math.min(32,l)+c;for(let t=c;t<u;t++)x[e.charCodeAt(t)]|=1<<t;for(let e=0;e<a;e++){const a=x[t.charCodeAt(e)],l=n[e/32|0]>>>e&1,s=r[e/32|0]>>>e&1,c=a|i,u=((a|s)&o)+o^o|a|s;let d=i|~(u|o),f=o&u;d>>>31^l&&(n[e/32|0]^=1<<e),f>>>31^s&&(r[e/32|0]^=1<<e),d=d<<1|l,f=f<<1|s,o=f|~(c|d),i=d&c}for(let t=c;t<u;t++)x[e.charCodeAt(t)]=0}let c=0,u=-1;const d=32*s,f=Math.min(32,l-d)+d;for(let v=d;v<f;v++)x[e.charCodeAt(v)]|=1<<v;let p=l;for(let v=0;v<a;v++){const e=x[t.charCodeAt(v)],a=n[v/32|0]>>>v&1,i=r[v/32|0]>>>v&1,o=e|c,s=((e|i)&u)+u^u|e|i;let d=c|~(s|u),f=u&s;p+=d>>>l-1&1,p-=f>>>l-1&1,d>>>31^a&&(n[v/32|0]^=1<<v),f>>>31^i&&(r[v/32|0]^=1<<v),d=d<<1|a,f=f<<1|i,u=f|~(o|d),c=d&o}for(let v=d;v<f;v++)x[e.charCodeAt(v)]=0;return p})(e,t)};function _(e,t){let a=!1;const l=new RegExp(/[，。！“”/《》？：；「」{}｜\\"$&+,:;=?@#|'<>.^*()%!\-\s]/g),r=e.toLowerCase().replaceAll(l,"");return t.map((e=>e.toString().toLowerCase().replaceAll(l,""))).forEach((e=>{var t,l;e&&(1-T(t=r,l=e)/Math.max(t.length,l.length)>.7||r.includes(e)||e.includes(r)||e.startsWith(r)||e.endsWith(r)||""===r)&&(a=!0)})),a}function I(e,t,a){return a.filter((a=>t.includes(a[e])))}const j=["src","alt"],$={class:"name-tag"},M=e({__name:"StudentShowbox",props:{studentInfo:{type:Object,required:!0,default:()=>({id:0,familyName:{cn:"",jp:"",en:""},name:{cn:"",jp:"",en:""},nickname:[],rarity:1,club:"",affiliation:"",type:"Main",armorType:"LightArmor",weapon:"AR",availability:{momotalk:!1,story:!1}})}},setup(e){const o=e;const s=t((()=>!(!o.studentInfo.availability.momotalk&&!o.studentInfo.availability.story)));return(t,o)=>{return o[0]||(a(-1),o[0]=l("div",{class:n(["student-container",i(s)?"":"unavailable"])},[l("img",{class:"student-avatar",src:(c=e.studentInfo.id,`/image/avatar_students/${c}.webp`),alt:e.studentInfo.name.cn},null,8,j),l("div",$,r(e.studentInfo.name.cn),1)],2),a(1),o[0]);var c}}},[["__scopeId","data-v-d5b2db5c"]]),N=e=>(A("data-v-bd7f640d"),e=e(),S(),e),L={class:"fill-screen center"},E={class:"content-wrapper flex-vertical acrylic rounded"},F={key:0,class:"loading"},H={class:"spinner"},O={key:1,id:"student-selector-container"},U=["placeholder"],z={id:"student-filter"},J={class:"filter-group"},R=N((()=>l("h2",{class:"filter-label"},"稀有度",-1))),W={class:"filter-options"},q=["onClick"],D={class:"filter-group"},P=N((()=>l("h2",{class:"filter-label"},"学校",-1))),V={class:"filter-options"},B=["onClick"],G={class:"filter-group"},K=N((()=>l("h2",{class:"filter-label"},"战术作用",-1))),Q={class:"filter-options"},X=["onClick"],Y={class:"filter-group"},Z=N((()=>l("h2",{class:"filter-label"},"装甲类型",-1))),ee={class:"filter-options"},te=["onClick"],ae={class:"filter-group"},le=N((()=>l("h2",{class:"filter-label"},"社团",-1))),re={class:"filter-options"},ne=["onClick"],ie={id:"student-list"},oe=e({__name:"StudentSelector",setup(e){const a=o(),A=s(!1),S=s([]),x=s(0),T=s(!1);T.value=!1,w.get("/config/json/students.json",{onDownloadProgress:e=>{x.value=Math.floor(100*e.loaded/e.total)}}).then((e=>{try{S.value=e.data.sort(((e,t)=>e.name.cn.localeCompare(t.name.cn,"zh-Hans-CN",{sensitivity:"accent"})))}catch(t){S.value=e.data}A.value=!0})).catch((e=>{console.log(e)})),c((()=>a.path),(e=>{console.log(e),T.value=!/\/archive\/?$/.test(e)}));const j=t((()=>S.value.map((e=>({id:e.id,allNames:[e.name.cn,e.name.jp,e.name.en,...e.nickname]})))));function $(e,t=!0){const a=[];if(S.value.forEach((t=>{a.includes(t[e])||a.push(t[e])})),t)try{return a.sort(((e,t)=>e.localeCompare(t,"zh-Hans-CN",{sensitivity:"accent"})))}catch(l){return a}return a}const N={LightArmor:{name:"轻装甲",order:1},HeavyArmor:{name:"重装甲",order:2},Unarmed:{name:"神秘装甲",order:3}};function oe(e,t){return N[e].order-N[t].order||-1}const se=t((()=>$("rarity",!1))),ce=t((()=>$("club"))),ue=t((()=>$("affiliation"))),de=t((()=>$("type",!1))),fe=t((()=>$("armorType",!1).sort(oe))),pe=s(""),ve=s({searchString:pe,rarity:[],club:[],affiliation:[],type:[],armorType:[]}),he=JSON.parse(localStorage.getItem("appliedFilters"));function me(e,t){return ve.value[e].includes(t)?"active":""}function ye(e,t){ve.value[e].includes(t)?ve.value[e]=ve.value[e].filter((e=>e!==t)):ve.value[e].push(t)}he&&(ve.value.searchString=he.searchString||"",ve.value.rarity=he.rarity||[],ve.value.club=he.club||[],ve.value.affiliation=he.affiliation||[],ve.value.type=he.type||[],ve.value.armorType=he.armorType||[]);const ge=t((()=>(localStorage.setItem("appliedFilters",JSON.stringify(ve.value)),function(e,t,a){if(""===e.searchString&&0===e.rarity.length&&0===e.club.length&&0===e.affiliation.length&&0===e.type.length&&0===e.armorType.length)return a.map((e=>e.id));let l=a;if(e.searchString){const r=[];a.forEach((a=>{_(e.searchString,t.find((e=>e.id===a.id)).allNames)&&r.push(a)})),l=r}return 0!==e.rarity.length&&(l=I("rarity",e.rarity,l)),0!==e.club.length&&(l=I("club",e.club,l)),0!==e.affiliation.length&&(l=I("affiliation",e.affiliation,l)),0!==e.type.length&&(l=I("type",e.type,l)),0!==e.armorType.length&&(l=I("armorType",e.armorType,l)),l.map((e=>e.id))}(ve.value,j.value,S.value))));return(e,t)=>{const a=u("router-link"),o=u("router-view");return d(),f("div",L,[l("div",E,[A.value?p("",!0):(d(),f("div",F,[l("div",H,[l("span",null,r(x.value)+"%",1)])])),A.value&&!T.value?(d(),f("div",O,[v(l("input",{type:"text",id:"name-filter",placeholder:pe.value?"":"在学生姓名/黑话内搜索…","onUpdate:modelValue":t[0]||(t[0]=e=>pe.value=e),onFocus:t[1]||(t[1]=e=>e.target.select()),autocomplete:"off"},null,40,U),[[h,pe.value]]),l("div",z,[l("div",J,[R,l("div",W,[(d(!0),f(m,null,y(i(se),(e=>(d(),f("div",{class:n(["filter-tag",me("rarity",e)]),role:"checkbox",key:e,onClick:t=>ye("rarity",e)}," ★ "+r(e),11,q)))),128))])]),l("div",D,[P,l("div",V,[(d(!0),f(m,null,y(i(ue),(e=>(d(),f("div",{class:n(["filter-tag",me("affiliation",e)]),role:"checkbox",key:e,onClick:t=>ye("affiliation",e)},r(e),11,B)))),128))])]),l("div",G,[K,l("div",Q,[(d(!0),f(m,null,y(i(de),(e=>(d(),f("div",{class:n(["filter-tag tactic-type",`${e.toLowerCase()} ${me("type",e)}`]),role:"checkbox",key:e,onClick:t=>ye("type",e)},r(e),11,X)))),128))])]),l("div",Y,[Z,l("div",ee,[(d(!0),f(m,null,y(i(fe),(e=>(d(),f("div",{class:n(["filter-tag armor-type",`${e.toLowerCase()} ${me("armorType",e)}`]),role:"checkbox",key:e,onClick:t=>ye("armorType",e)},r(N[e].name||e),11,te)))),128))])]),l("div",ae,[le,l("div",re,[(d(!0),f(m,null,y(i(ce),(e=>(d(),f("div",{class:n(["filter-tag",me("club",e)]),role:"checkbox",key:e,onClick:t=>ye("club",e)},r(e),11,ne)))),128))])])]),l("div",ie,[(d(!0),f(m,null,y(S.value,(e=>v((d(),g(a,{class:"student-showcase",key:e.id,to:`/archive/${e.id}/momotalk`,onClick:t[2]||(t[2]=e=>T.value=!0)},{default:k((()=>[C(M,{"student-info":e},null,8,["student-info"])])),_:2},1032,["to"])),[[b,i(ge).includes(e.id)]]))),128))])])):p("",!0),T.value?(d(),g(o,{key:2})):p("",!0)])])}}},[["__scopeId","data-v-bd7f640d"]]);export{oe as default};
