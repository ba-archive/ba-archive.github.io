import{d as t,c as e,a as l,t as a,n,u as i,s as r,_ as o,b as s,r as c,o as u,e as d,f,g as v,w as m,v as p,h,F as g,i as y,j as b,k,l as C,m as w,p as x,q as A,x as S,y as T}from"./index.143ae30a.js";import{a as F}from"./axios.be23cc29.js";const _=new Uint32Array(65536),j=(t,e)=>{if(t.length<e.length){const l=e;e=t,t=l}return 0===e.length?t.length:t.length<=32?((t,e)=>{const l=t.length,a=e.length,n=1<<l-1;let i=-1,r=0,o=l,s=l;for(;s--;)_[t.charCodeAt(s)]|=1<<s;for(s=0;s<a;s++){let t=_[e.charCodeAt(s)];const l=t|r;t|=(t&i)+i^i,r|=~(t|i),i&=t,r&n&&o++,i&n&&o--,r=r<<1|1,i=i<<1|~(l|r),r&=l}for(s=l;s--;)_[t.charCodeAt(s)]=0;return o})(t,e):((t,e)=>{const l=e.length,a=t.length,n=[],i=[],r=Math.ceil(l/32),o=Math.ceil(a/32);for(let m=0;m<r;m++)i[m]=-1,n[m]=0;let s=0;for(;s<o-1;s++){let r=0,o=-1;const c=32*s,u=Math.min(32,a)+c;for(let e=c;e<u;e++)_[t.charCodeAt(e)]|=1<<e;for(let t=0;t<l;t++){const l=_[e.charCodeAt(t)],a=i[t/32|0]>>>t&1,s=n[t/32|0]>>>t&1,c=l|r,u=((l|s)&o)+o^o|l|s;let d=r|~(u|o),f=o&u;d>>>31^a&&(i[t/32|0]^=1<<t),f>>>31^s&&(n[t/32|0]^=1<<t),d=d<<1|a,f=f<<1|s,o=f|~(c|d),r=d&c}for(let e=c;e<u;e++)_[t.charCodeAt(e)]=0}let c=0,u=-1;const d=32*s,f=Math.min(32,a-d)+d;for(let m=d;m<f;m++)_[t.charCodeAt(m)]|=1<<m;let v=a;for(let m=0;m<l;m++){const t=_[e.charCodeAt(m)],l=i[m/32|0]>>>m&1,r=n[m/32|0]>>>m&1,o=t|c,s=((t|r)&u)+u^u|t|r;let d=c|~(s|u),f=u&s;v+=d>>>a-1&1,v-=f>>>a-1&1,d>>>31^l&&(i[m/32|0]^=1<<m),f>>>31^r&&(n[m/32|0]^=1<<m),d=d<<1|l,f=f<<1|r,u=f|~(o|d),c=d&o}for(let m=d;m<f;m++)_[t.charCodeAt(m)]=0;return v})(t,e)};function I(t,e){let l=!1;const a=new RegExp(/[，。！“”/《》？：；「」{}｜\\"$&+,:;=?@#|'<>.^*()%!\-\s]/g),n=t.toLowerCase().replaceAll(a,""),i=null==e?void 0:e.map((t=>t.toString().toLowerCase().replaceAll(a,"")));return null==i||i.forEach((t=>{var e,a;t&&(1-j(e=n,a=t)/Math.max(e.length,a.length)>.66||n.includes(t)||t.includes(n)||t.startsWith(n)||t.endsWith(n)||""===n)&&(l=!0)})),l}function L(t,e,l){return l.filter((l=>e.includes(l[t])))}const $=["src","alt"],M={class:"name-tag"},E=o(t({__name:"StudentShowbox",props:{studentInfo:{type:Object,required:!0,default:()=>({id:0,familyName:{cn:"",jp:"",en:""},name:{cn:"",jp:"",en:""},nickname:[],rarity:1,club:"",affiliation:"",type:"Main",armorType:"LightArmor",weapon:"AR",availability:{momotalk:!1,story:!1}})}},setup(t){const o=t;const s=e((()=>o.studentInfo.availability.momotalk||o.studentInfo.availability.story));return(e,o)=>{return o[0]||(r(-1),o[0]=l("div",{class:n(["student-container rounded-small",i(s)?"":"unavailable"])},[l("img",{class:"student-avatar",src:(c=t.studentInfo.id,`/image/avatar_students/${c}.webp`),alt:t.studentInfo.name.cn},null,8,$),l("div",M,a(t.studentInfo.name.cn),1)],2),r(1),o[0]);var c}}}),[["__scopeId","data-v-99a966eb"]]),N=t=>(x("data-v-d75506f7"),t=t(),A(),t),z={key:0,class:"loading"},H={class:"spinner"},W={key:1,id:"student-selector-container"},R={class:"filter-banner"},U=["placeholder"],q={src:"/assets/clear-filter.e675c05c.svg",alt:"Clear all filters"},D=[N((()=>l("img",{src:"/assets/filter-options.ac505d64.svg",alt:"Filter options"},null,-1)))],O={class:"student-filter"},P={class:"filter-group"},V={class:"filter-label"},B=N((()=>l("span",null,"稀有度",-1))),G={class:"filter-options"},J=["onClick"],K={class:"filter-group"},Q={class:"filter-label"},X=N((()=>l("span",null,"学校",-1))),Y={class:"filter-options"},Z=["onClick"],tt={class:"filter-group"},et={class:"filter-label"},lt=N((()=>l("span",null,"战术作用",-1))),at={class:"filter-options"},nt=["onClick"],it={class:"filter-group"},rt={class:"filter-label"},ot=N((()=>l("span",null,"装甲类型",-1))),st={class:"filter-options"},ct=["onClick"],ut={class:"filter-group"},dt={class:"filter-label"},ft=N((()=>l("span",null,"社团",-1))),vt={class:"filter-options"},mt=["onClick"],pt={id:"student-list"},ht=o(t({__name:"StudentSelector",setup(t){const r=S(),o=s(),x=c(!1),A=c([]),_=c(0),j=e((()=>!/\/archive\/?$/.test(r.path)));F.get("/config/json/students.json",{onDownloadProgress:t=>{_.value=Math.floor(100*(t.loaded||0)/(t.total||1))}}).then((t=>{try{A.value=t.data.sort(((t,e)=>t.name.cn.localeCompare(e.name.cn,"zh-Hans-CN",{sensitivity:"accent"}))).sort(((t,e)=>(t.availability.story||t.availability.momotalk)&&(e.availability.story||e.availability.momotalk)?0:t.availability.story||t.availability.momotalk?-1:e.availability.story||e.availability.momotalk?1:0))}catch(e){A.value=t.data}x.value=!0})).catch((t=>{console.log(t)}));const $=e((()=>A.value.map((t=>({id:t.id,allNames:[t.name.cn,t.name.jp,t.name.en,...t.nickname]})))));function M(t,e=!0){const l=[];if(A.value.forEach((e=>{l.includes(e[t])||l.push(e[t])})),e)try{return l.sort(((t,e)=>t.toString().localeCompare(e.toString(),"zh-Hans-CN",{sensitivity:"accent"})))}catch(a){return l}return l}const N=[{string:"LightArmor",name:"轻装甲",order:1},{string:"HeavyArmor",name:"重装甲",order:2},{string:"Unarmed",name:"神秘装甲",order:3}];const ht=e((()=>M("rarity",!1))),gt=e((()=>M("club"))),yt=e((()=>M("affiliation"))),bt=e((()=>M("type",!1))),kt=e((()=>M("armorType",!1).sort(((t,e)=>function(t,e){const l=N.find((e=>e.string===t))||{name:"0"},a=N.find((t=>t.string===e))||{name:"1"};return l.name.localeCompare(a.name,"zh-Hans-CN",{sensitivity:"accent"})}(t,e))))),Ct=c(""),wt=e((()=>({searchString:Ct.value,rarity:o.getRarityFilter,club:o.getClubFilter,affiliation:o.getAffiliationFilter,type:o.getTypeFilter,armorType:o.getArmorTypeFilter}))),xt=e((()=>0===wt.value.rarity.length&&0===wt.value.club.length&&0===wt.value.affiliation.length&&0===wt.value.type.length&&0===wt.value.armorType.length));function At(t,e){return wt.value[t].includes(e)?"active":""}function St(t,e){wt.value[t].includes(e)?wt.value[t]=wt.value[t].filter((t=>t!==e)):wt.value[t].push(e),o.setStudentFilters(wt.value)}const Tt=e((()=>function(t,e,l){if(""===t.searchString&&0===t.rarity.length&&0===t.club.length&&0===t.affiliation.length&&0===t.type.length&&0===t.armorType.length)return l.map((t=>t.id));let a=l;if(t.searchString){const n=[];l.forEach((l=>{var a;I(t.searchString,null==(a=e.find((t=>t.id===l.id)))?void 0:a.allNames)&&n.push(l)})),a=n}return 0!==t.rarity.length&&(a=L("rarity",t.rarity,a)),0!==t.club.length&&(a=L("club",t.club,a)),0!==t.affiliation.length&&(a=L("affiliation",t.affiliation,a)),0!==t.type.length&&(a=L("type",t.type,a)),0!==t.armorType.length&&(a=L("armorType",t.armorType,a)),a.map((t=>t.id))}(wt.value,$.value,A.value)));function Ft(t){t.target.select()}const _t=c(!0);function jt(){_t.value=window.innerWidth>768}function It(t){o.clearStudentFilter(t)}return u((()=>{window.innerWidth<=768&&(_t.value=!1),window.addEventListener("resize",jt)})),d((()=>{window.removeEventListener("resize",jt)})),(t,e)=>{const r=T("router-link"),s=T("router-view");return k(),f(g,null,[x.value?v("",!0):(k(),f("div",z,[l("div",H,[l("span",null,a(_.value)+"%",1)])])),x.value&&!i(j)?(k(),f("div",W,[l("div",R,[m(l("input",{type:"text",id:"name-filter",placeholder:Ct.value?"":"在学生姓名/黑话内搜索…","onUpdate:modelValue":e[0]||(e[0]=t=>Ct.value=t),onFocus:Ft,autocomplete:"off"},null,40,U),[[p,Ct.value]]),i(xt)?v("",!0):(k(),f("div",{key:0,class:"clear-filter-icon",onClick:e[1]||(e[1]=(...t)=>i(o).clearStudentFilters&&i(o).clearStudentFilters(...t))},[m(l("img",q,null,512),[[h,!i(xt)]])])),l("div",{class:"filter-options-icon-mobile rounded-small",onClick:e[2]||(e[2]=t=>_t.value=!_t.value)},D)]),m(l("div",O,[l("div",P,[l("h2",V,[B,m(l("span",{class:"clear-filter-button",role:"button",tabindex:"0",onClick:e[3]||(e[3]=t=>It("rarity"))},null,512),[[h,0!==i(wt).rarity.length]])]),l("div",G,[(k(!0),f(g,null,y(i(ht),(t=>(k(),f("div",{class:n(["filter-tag rounded-small",At("rarity",t)]),role:"checkbox",key:t,onClick:e=>St("rarity",t)}," ★ "+a(t),11,J)))),128))])]),l("div",K,[l("h2",Q,[X,m(l("span",{class:"clear-filter-button",role:"button",tabindex:"0",onClick:e[4]||(e[4]=t=>It("affiliation"))},null,512),[[h,0!==i(wt).affiliation.length]])]),l("div",Y,[(k(!0),f(g,null,y(i(yt),(t=>(k(),f("div",{class:n(["filter-tag rounded-small",At("affiliation",t)]),role:"checkbox",key:t,onClick:e=>St("affiliation",t)},a(t),11,Z)))),128))])]),l("div",tt,[l("h2",et,[lt,m(l("span",{class:"clear-filter-button",role:"button",tabindex:"0",onClick:e[5]||(e[5]=t=>It("type"))},null,512),[[h,0!==i(wt).type.length]])]),l("div",at,[(k(!0),f(g,null,y(i(bt),(t=>(k(),f("div",{class:n(["filter-tag tactic-type rounded-small",`${t.toString().toLowerCase()} ${At("type",t)}`]),role:"checkbox",key:t,onClick:e=>St("type",t)},a(t),11,nt)))),128))])]),l("div",it,[l("h2",rt,[ot,m(l("span",{class:"clear-filter-button",role:"button",tabindex:"0",onClick:e[6]||(e[6]=t=>It("armorType"))},null,512),[[h,0!==i(wt).armorType.length]])]),l("div",st,[(k(!0),f(g,null,y(i(kt),(t=>{var e;return k(),f("div",{class:n(["filter-tag armor-type rounded-small",`${t.toString().toLowerCase()} ${At("armorType",t)}`]),role:"checkbox",key:t,onClick:e=>St("armorType",t)},a((null==(e=N.find((e=>t===e.string)))?void 0:e.name)||t),11,ct)})),128))])]),l("div",ut,[l("h2",dt,[ft,m(l("span",{class:"clear-filter-button",role:"button",tabindex:"0",onClick:e[7]||(e[7]=t=>It("club"))},null,512),[[h,0!==i(wt).club.length]])]),l("div",vt,[(k(!0),f(g,null,y(i(gt),(t=>(k(),f("div",{class:n(["filter-tag rounded-small",At("club",t)]),role:"checkbox",key:t,onClick:e=>St("club",t)},a(t),11,mt)))),128))])])],512),[[h,_t.value]]),l("div",pt,[(k(!0),f(g,null,y(A.value,(t=>m((k(),b(r,{class:"student-showcase rounded-small",key:t.id,to:`/archive/${t.id}/momotalk`},{default:C((()=>[w(E,{"student-info":t},null,8,["student-info"])])),_:2},1032,["to"])),[[h,i(Tt).includes(t.id)]]))),128))])])):v("",!0),i(j)?(k(),b(s,{key:2})):v("",!0)],64)}}}),[["__scopeId","data-v-d75506f7"]]);export{ht as default};
