import{d as t,c as e,t as l,s as a,_ as n,u as i,r,a as o,o as s,b as c,e as u,f as d,g as f,w as v,v as p,h,F as m,i as g,j as y,k as b,n as k,l as C,m as w,p as x,q as A,x as S,y as T}from"./index.ecf8ffcb.js";import{a as F}from"./axios.be23cc29.js";const _=new Uint32Array(65536),j=(t,e)=>{if(t.length<e.length){const l=e;e=t,t=l}return 0===e.length?t.length:t.length<=32?((t,e)=>{const l=t.length,a=e.length,n=1<<l-1;let i=-1,r=0,o=l,s=l;for(;s--;)_[t.charCodeAt(s)]|=1<<s;for(s=0;s<a;s++){let t=_[e.charCodeAt(s)];const l=t|r;t|=(t&i)+i^i,r|=~(t|i),i&=t,r&n&&o++,i&n&&o--,r=r<<1|1,i=i<<1|~(l|r),r&=l}for(s=l;s--;)_[t.charCodeAt(s)]=0;return o})(t,e):((t,e)=>{const l=e.length,a=t.length,n=[],i=[],r=Math.ceil(l/32),o=Math.ceil(a/32);for(let p=0;p<r;p++)i[p]=-1,n[p]=0;let s=0;for(;s<o-1;s++){let r=0,o=-1;const c=32*s,u=Math.min(32,a)+c;for(let e=c;e<u;e++)_[t.charCodeAt(e)]|=1<<e;for(let t=0;t<l;t++){const l=_[e.charCodeAt(t)],a=i[t/32|0]>>>t&1,s=n[t/32|0]>>>t&1,c=l|r,u=((l|s)&o)+o^o|l|s;let d=r|~(u|o),f=o&u;d>>>31^a&&(i[t/32|0]^=1<<t),f>>>31^s&&(n[t/32|0]^=1<<t),d=d<<1|a,f=f<<1|s,o=f|~(c|d),r=d&c}for(let e=c;e<u;e++)_[t.charCodeAt(e)]=0}let c=0,u=-1;const d=32*s,f=Math.min(32,a-d)+d;for(let p=d;p<f;p++)_[t.charCodeAt(p)]|=1<<p;let v=a;for(let p=0;p<l;p++){const t=_[e.charCodeAt(p)],l=i[p/32|0]>>>p&1,r=n[p/32|0]>>>p&1,o=t|c,s=((t|r)&u)+u^u|t|r;let d=c|~(s|u),f=u&s;v+=d>>>a-1&1,v-=f>>>a-1&1,d>>>31^l&&(i[p/32|0]^=1<<p),f>>>31^r&&(n[p/32|0]^=1<<p),d=d<<1|l,f=f<<1|r,u=f|~(o|d),c=d&o}for(let p=d;p<f;p++)_[t.charCodeAt(p)]=0;return v})(t,e)};function L(t,e){let l=!1;const a=new RegExp(/[，。！“”/《》？：；「」{}｜\\"$&+,:;=?@#|'<>.^*()%!\-\s]/g),n=t.toLowerCase().replaceAll(a,""),i=null==e?void 0:e.map((t=>t.toString().toLowerCase().replaceAll(a,"")));return null==i||i.forEach((t=>{var e,a;t&&(1-j(e=n,a=t)/Math.max(e.length,a.length)>.66||n.includes(t)||t.includes(n)||t.startsWith(n)||t.endsWith(n)||""===n)&&(l=!0)})),l}function $(t,e,l){return l.filter((l=>e.includes(l[t])))}const M=["src","alt"],E={class:"name-tag"},I=n(t({__name:"StudentShowbox",props:{studentInfo:{type:Object,required:!0,default:()=>({id:0,familyName:{cn:"",jp:"",en:""},name:{cn:"",jp:"",en:""},nickname:[],rarity:1,club:"",affiliation:"",type:"Main",armorType:"LightArmor",weapon:"AR",availability:{momotalk:!1,story:!1}})}},setup:t=>(n,i)=>{return i[0]||(a(-1),i[0]=e("div",{class:"student-container rounded-small"},[e("img",{class:"student-avatar",src:(r=t.studentInfo.id,`/image/avatar_students/${r}.webp`),alt:t.studentInfo.name.cn},null,8,M),e("div",E,l(t.studentInfo.name.cn),1)]),a(1),i[0]);var r}}),[["__scopeId","data-v-77937d70"]]),N=t=>(x("data-v-d75506f7"),t=t(),A(),t),z={key:0,class:"loading"},H={class:"spinner"},W={key:1,id:"student-selector-container"},R={class:"filter-banner"},U=["placeholder"],q={src:"/assets/clear-filter.e675c05c.svg",alt:"Clear all filters"},D=[N((()=>e("img",{src:"/assets/filter-options.ac505d64.svg",alt:"Filter options"},null,-1)))],O={class:"student-filter"},P={class:"filter-group"},V={class:"filter-label"},B=N((()=>e("span",null,"稀有度",-1))),G={class:"filter-options"},J=["onClick"],K={class:"filter-group"},Q={class:"filter-label"},X=N((()=>e("span",null,"学校",-1))),Y={class:"filter-options"},Z=["onClick"],tt={class:"filter-group"},et={class:"filter-label"},lt=N((()=>e("span",null,"战术作用",-1))),at={class:"filter-options"},nt=["onClick"],it={class:"filter-group"},rt={class:"filter-label"},ot=N((()=>e("span",null,"装甲类型",-1))),st={class:"filter-options"},ct=["onClick"],ut={class:"filter-group"},dt={class:"filter-label"},ft=N((()=>e("span",null,"社团",-1))),vt={class:"filter-options"},pt=["onClick"],ht={id:"student-list"},mt=n(t({__name:"StudentSelector",setup(t){const a=S(),n=i(),x=r(!1),A=r([]),_=r(0),j=o((()=>!/\/archive\/?$/.test(a.path)));F.get("/config/json/students.json",{onDownloadProgress:t=>{_.value=Math.floor(100*(t.loaded||0)/(t.total||1))}}).then((t=>{try{A.value=t.data.sort(((t,e)=>t.name.cn.localeCompare(e.name.cn,"zh-Hans-CN",{sensitivity:"accent"}))).sort(((t,e)=>(t.availability.story||t.availability.momotalk)&&(e.availability.story||e.availability.momotalk)?0:t.availability.story||t.availability.momotalk?-1:e.availability.story||e.availability.momotalk?1:0))}catch(e){A.value=t.data}x.value=!0})).catch((t=>{console.log(t)}));const M=o((()=>A.value.map((t=>({id:t.id,allNames:[t.name.cn,t.name.jp,t.name.en,...t.nickname]})))));function E(t,e=!0){const l=[];if(A.value.forEach((e=>{l.includes(e[t])||l.push(e[t])})),e)try{return l.sort(((t,e)=>t.toString().localeCompare(e.toString(),"zh-Hans-CN",{sensitivity:"accent"})))}catch(a){return l}return l}const N=[{string:"LightArmor",name:"轻装甲",order:1},{string:"HeavyArmor",name:"重装甲",order:2},{string:"Unarmed",name:"神秘装甲",order:3}];const mt=o((()=>E("rarity",!1))),gt=o((()=>E("club"))),yt=o((()=>E("affiliation"))),bt=o((()=>E("type",!1))),kt=o((()=>E("armorType",!1).sort(((t,e)=>function(t,e){const l=N.find((e=>e.string===t))||{name:"0"},a=N.find((t=>t.string===e))||{name:"1"};return l.name.localeCompare(a.name,"zh-Hans-CN",{sensitivity:"accent"})}(t,e))))),Ct=r(""),wt=o((()=>({searchString:Ct.value,rarity:n.getRarityFilter,club:n.getClubFilter,affiliation:n.getAffiliationFilter,type:n.getTypeFilter,armorType:n.getArmorTypeFilter}))),xt=o((()=>0===wt.value.rarity.length&&0===wt.value.club.length&&0===wt.value.affiliation.length&&0===wt.value.type.length&&0===wt.value.armorType.length));function At(t,e){return wt.value[t].includes(e)?"active":""}function St(t,e){wt.value[t].includes(e)?wt.value[t]=wt.value[t].filter((t=>t!==e)):wt.value[t].push(e),n.setStudentFilters(wt.value)}const Tt=o((()=>function(t,e,l){if(""===t.searchString&&0===t.rarity.length&&0===t.club.length&&0===t.affiliation.length&&0===t.type.length&&0===t.armorType.length)return l.map((t=>t.id));let a=l;if(t.searchString){const n=[];l.forEach((l=>{var a;L(t.searchString,null==(a=e.find((t=>t.id===l.id)))?void 0:a.allNames)&&n.push(l)})),a=n}return 0!==t.rarity.length&&(a=$("rarity",t.rarity,a)),0!==t.club.length&&(a=$("club",t.club,a)),0!==t.affiliation.length&&(a=$("affiliation",t.affiliation,a)),0!==t.type.length&&(a=$("type",t.type,a)),0!==t.armorType.length&&(a=$("armorType",t.armorType,a)),a.map((t=>t.id))}(wt.value,M.value,A.value)));function Ft(t){t.target.select()}const _t=r(!0);function jt(){_t.value=window.innerWidth>768}function Lt(t){n.clearStudentFilter(t)}return s((()=>{window.innerWidth<=768&&(_t.value=!1),window.addEventListener("resize",jt)})),c((()=>{window.removeEventListener("resize",jt)})),(t,a)=>{const i=T("router-link"),r=T("router-view");return b(),u(m,null,[x.value?d("",!0):(b(),u("div",z,[e("div",H,[e("span",null,l(_.value)+"%",1)])])),x.value&&!f(j)?(b(),u("div",W,[e("div",R,[v(e("input",{type:"text",id:"name-filter",placeholder:Ct.value?"":"在学生姓名/黑话内搜索…","onUpdate:modelValue":a[0]||(a[0]=t=>Ct.value=t),onFocus:Ft,autocomplete:"off"},null,40,U),[[p,Ct.value]]),f(xt)?d("",!0):(b(),u("div",{key:0,class:"clear-filter-icon",onClick:a[1]||(a[1]=(...t)=>f(n).clearStudentFilters&&f(n).clearStudentFilters(...t))},[v(e("img",q,null,512),[[h,!f(xt)]])])),e("div",{class:"filter-options-icon-mobile rounded-small",onClick:a[2]||(a[2]=t=>_t.value=!_t.value)},D)]),v(e("div",O,[e("div",P,[e("h2",V,[B,v(e("span",{class:"clear-filter-button",role:"button",tabindex:"0",onClick:a[3]||(a[3]=t=>Lt("rarity"))},null,512),[[h,0!==f(wt).rarity.length]])]),e("div",G,[(b(!0),u(m,null,g(f(mt),(t=>(b(),u("div",{class:k(["filter-tag rounded-small",At("rarity",t)]),role:"checkbox",key:t,onClick:e=>St("rarity",t)}," ★ "+l(t),11,J)))),128))])]),e("div",K,[e("h2",Q,[X,v(e("span",{class:"clear-filter-button",role:"button",tabindex:"0",onClick:a[4]||(a[4]=t=>Lt("affiliation"))},null,512),[[h,0!==f(wt).affiliation.length]])]),e("div",Y,[(b(!0),u(m,null,g(f(yt),(t=>(b(),u("div",{class:k(["filter-tag rounded-small",At("affiliation",t)]),role:"checkbox",key:t,onClick:e=>St("affiliation",t)},l(t),11,Z)))),128))])]),e("div",tt,[e("h2",et,[lt,v(e("span",{class:"clear-filter-button",role:"button",tabindex:"0",onClick:a[5]||(a[5]=t=>Lt("type"))},null,512),[[h,0!==f(wt).type.length]])]),e("div",at,[(b(!0),u(m,null,g(f(bt),(t=>(b(),u("div",{class:k(["filter-tag tactic-type rounded-small",`${t.toString().toLowerCase()} ${At("type",t)}`]),role:"checkbox",key:t,onClick:e=>St("type",t)},l(t),11,nt)))),128))])]),e("div",it,[e("h2",rt,[ot,v(e("span",{class:"clear-filter-button",role:"button",tabindex:"0",onClick:a[6]||(a[6]=t=>Lt("armorType"))},null,512),[[h,0!==f(wt).armorType.length]])]),e("div",st,[(b(!0),u(m,null,g(f(kt),(t=>{var e;return b(),u("div",{class:k(["filter-tag armor-type rounded-small",`${t.toString().toLowerCase()} ${At("armorType",t)}`]),role:"checkbox",key:t,onClick:e=>St("armorType",t)},l((null==(e=N.find((e=>t===e.string)))?void 0:e.name)||t),11,ct)})),128))])]),e("div",ut,[e("h2",dt,[ft,v(e("span",{class:"clear-filter-button",role:"button",tabindex:"0",onClick:a[7]||(a[7]=t=>Lt("club"))},null,512),[[h,0!==f(wt).club.length]])]),e("div",vt,[(b(!0),u(m,null,g(f(gt),(t=>(b(),u("div",{class:k(["filter-tag rounded-small",At("club",t)]),role:"checkbox",key:t,onClick:e=>St("club",t)},l(t),11,pt)))),128))])])],512),[[h,_t.value]]),e("div",ht,[(b(!0),u(m,null,g(A.value,(t=>v((b(),y(i,{class:"student-showcase rounded-small",key:t.id,to:`/archive/${t.id}/momotalk`},{default:C((()=>[w(I,{"student-info":t},null,8,["student-info"])])),_:2},1032,["to"])),[[h,f(Tt).includes(t.id)]]))),128))])])):d("",!0),f(j)?(b(),y(r,{key:2})):d("",!0)],64)}}}),[["__scopeId","data-v-d75506f7"]]);export{mt as default};
