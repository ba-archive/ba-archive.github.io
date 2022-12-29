import{a as e,E as a}from"./ErrorScreen-2cafd65f.js";import{d as s,c as t,o as n,a as l,b as o,t as r,e as i,n as d,A as u,p as c,q as g,_ as v,u as p,r as m,x as M,i as I,w as h,j as f,F as C,k,m as T,l as b,y as x,h as w,s as y}from"./index-eba88e47.js";import{u as N}from"./students-82a2e9e5.js";const S=["onKeydown"],G={class:"section-title"},F=["src"],_={class:"title"},P={class:"ordered-list"},R={class:"navigation-button rounded-small",role:"button",tabindex:"0"},j=[(e=>(c("data-v-cb69f0bc"),e=e(),g(),e))((()=>o("path",{fill:"#fff",d:"M225.9 354.7c-8.1 0-16.2-3.1-22.4-9.3L9.3 151.2c-12.4-12.4-12.4-32.4 0-44.8C21.7 94 41.7 94 54 106.4l171.9 171.9 171.9-171.9c12.4-12.4 32.4-12.4 44.7 0 12.4 12.4 12.4 32.4 0 44.8L248.3 345.4c-6.2 6.2-14.3 9.3-22.4 9.3z"},null,-1)))],E=v(s({__name:"StudentArchiveTitle",props:{avatar:{type:String,required:!1,default:""},title:{type:Object,required:!0},index:{type:Number,required:!1},language:{type:String,required:!0},isActive:{type:Boolean,required:!1}},emits:["clicked"],setup(e,{emit:a}){const s=e;function c(){a("clicked")}const g={cn:"TextCn",zh:"TextCn",tw:"TextTw",en:"TextEn",jp:"TextJp",kr:"TextKr",th:"TextTh"},v=t((()=>Reflect.get(s.title,Reflect.get(g,s.language))));function p(){for(const e in g){const a=Reflect.get(s.title,Reflect.get(g,e));if(a)return a}return"NoFallbackText"}return(a,t)=>{var g;return n(),l("div",{class:"archive-title rounded-medium shadow-farther",tabindex:"0",onClick:c,onKeydown:[u(c,["enter"]),u(c,["space"])]},[o("div",G,[o("img",{src:s.avatar,class:"avatar rounded-small"},null,8,F),o("span",_,r(i(v)||`!!FallBack: ${p()}`),1),o("span",P,r(`${parseInt((null==(g=e.index)?void 0:g.toString())||"0")+1}`.padStart(2,"0")),1)]),o("div",R,[(n(),l("svg",{class:d(["navigation-arrow",e.isActive?"open":""]),xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",viewBox:"0 0 451.8 451.8"},j,2))])],40,S)}}}),[["__scopeId","data-v-cb69f0bc"]]),A=e=>(c("data-v-691feb28"),e=e(),g(),e),K={key:0,class:"student-reply"},V={class:"message-content-wrap rounded-small"},$={key:0,class:"typing-indicator"},z=[A((()=>o("span",{class:"dot-1"},"·",-1))),A((()=>o("span",{class:"dot-2"},"·",-1))),A((()=>o("span",{class:"dot-3"},"·",-1)))],J={class:"message-content"},q={key:0},H=["src"],W={key:1,class:"user-reply rounded-small"},B=A((()=>o("div",{class:"user-reply-banner"},[o("span",null,"回复")],-1))),L={class:"select-options flex-vertical"},O=["onClick"],U={key:0,class:"momotalk-unit"},D={class:"favor-schedule-unit rounded-small"},Q=A((()=>o("div",{class:"favor-schedule-banner"},[o("span",null,"羁绊事件")],-1))),X=v(s({__name:"MomoTalkComponent",props:{message:Object},emits:["userSelect"],setup(e,{emit:a}){var s,u,c,g;const v=e,w=p(),y=N(),S=t((()=>w.getLang.replace("zh","cn"))),G=(null==(s=v.message)?void 0:s.CharacterId)||1e4,F=y.getStudentById(G),_=t((()=>(null==F?void 0:F.name[S.value])||"")),P=(null==(u=v.message)?void 0:u.MessageCondition)||"None",R=(null==(c=v.message)?void 0:c.MessageType)||"Text",j=`/image/avatar_students/${G}.webp`,E=m(-1),A=m(!1),X=m(!1),Y=(null==(g=v.message)?void 0:g.FeedbackTimeMillisec)||1e3;function Z(e){if(e){return`/image/ScenarioImage/${e.split("/").pop()}.png`}return""}setTimeout((()=>{A.value=!0}),Y),setTimeout((()=>{X.value=!0}),Y+500);const ee={cn:"MessageCN",zh:"MessageCN",tw:"MessageTW",en:"MessageEN",jp:"MessageJP",kr:"MessageKR",th:"MessageTH"};function ae(e){if(e){let t=(a=S.value,s=e,function(e){return e?e.replaceAll(/\[\/?ruby=?.*?]/gi,""):""}(Reflect.get(s,Reflect.get(ee,a))));return t||`!Fallback:${function(e){for(const a in ee){const s=Reflect.get(e,Reflect.get(ee,a));if(s)return s}return"NoFallbackText"}(e)}`}var a,s;return""}return(s,t)=>{var u,c,g,v,p,m;const w=M("router-link");return n(),l(C,null,[o("div",{class:d(["momotalk-unit",(null==(u=e.message)?void 0:u.avatar)||"Answer"===i(P)?"":"condensed"])},["Answer"!==i(P)?(n(),l("div",K,[o("img",{class:d(["student-avatar",(null==(c=e.message)?void 0:c.avatar)?"":"hidden"]),src:j},null,2),o("div",V,[A.value?I("",!0):(n(),l("div",$,z)),h(o("div",J,["Image"!==i(R)?(n(),l("span",q,r(ae(e.message)),1)):(n(),l("img",{key:1,src:Z(null==(g=e.message)?void 0:g.ImagePath)},null,8,H))],512),[[f,A.value]])])])):I("",!0),"Answer"===i(P)?(n(),l("div",W,[B,o("div",L,[(n(!0),l(C,null,k(null==(p=null==(v=e.message)?void 0:v.options)?void 0:p.content,((s,t)=>(n(),l("div",{role:"button",class:d(["rounded-small shadow-near",t===E.value?"selected":""]),key:t,onClick:n=>{var l,o,r,i;return o=t,r=null==(l=e.message)?void 0:l.Id,i=s.NextGroupId,E.value=o,void a("userSelect",r||0,i)}},r(ae(s)),11,O)))),128))])])):I("",!0)],2),0!==(null==(m=e.message)?void 0:m.FavorScheduleId)&&X.value?(n(),l("div",U,[o("div",D,[Q,T(w,{to:`/archive/${i(G)}/story`,role:"button",class:"favor-schedule-button rounded-small shadow-near"},{default:b((()=>[x(" 前往"+r(i(_))+"的羁绊事件 ",1)])),_:1},8,["to"])])])):I("",!0)],64)}}}),[["__scopeId","data-v-691feb28"]]),Y=e=>(c("data-v-cc898bcb"),e=e(),g(),e),Z={class:"momotalk-main-interface flex-vertical"},ee={class:"momotalk-banner flex-horizontal center"},ae=Y((()=>o("svg",{xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",id:"Layer_2_00000033347787382183846980000016369978894466167968_",x:"0",y:"0",viewBox:"0 0 512 477.9"},[o("path",{d:"M101.8 396.4c-53.3 0-98.4 53.8-101.8 79.5 81.4 7.9 196.1-6.8 252.1-65-74.7 13.5-135.9-5.2-150.3-14.5zM281.4 412.5c55.1 73.3 137.7 58.5 230.5 63.3 3.5-42.1-73.2-80.9-103.9-82.2-39.9 28.5-123.3 19.5-126.6 18.9z"}),o("path",{d:"M256.4 0C136.8 45 31.5 151.4 31.5 259.4c0 85 68.4 153.9 195.3 137.3 3.9-.5 7.6-1.1 11.2-1.7-1.1-.4-2.1-.9-2.9-1.3-19.4-9.8-53.4-56.7-39-112.6 1.4 59.3 39.7 102.6 57.1 111 2.7 1.3 11.9 4.6 25.5 6.7 51.9 8 164.9 4.7 187.9-116.7C498.9 111.4 256.4 0 256.4 0z"})],-1))),se={class:"momotalk-title-text"},te=Y((()=>o("span",{class:"title"},"MomoTalk",-1))),ne={class:"credit"},le=Y((()=>o("span",null,"由 ",-1))),oe={key:0},re=Y((()=>o("a",{href:"https://space.bilibili.com/37507923",target:"_blank"}," 碧蓝档案资讯站 ",-1))),ie=Y((()=>o("span",null," 翻译",-1))),de={class:"messages"},ue=v(s({__name:"MomotalkViewer",props:{messageGroup:Number,translator:{type:String,default:"",required:!1},content:Object},setup(e){const a=e;let s=m(0);const t=m([]);async function i(e,a){var n;if(a!==s.value)return;const l=u(e),o=l[0];if(o){if("Answer"===o.MessageCondition){const l=[],r=u(e),i=(null==(n=r.find((e=>0!==e.FavorScheduleId)))?void 0:n.FavorScheduleId)||0;for(const e of r)l.push({MessageCN:e.MessageCN,MessageJP:e.MessageJP,MessageEN:e.MessageEN,MessageKR:e.MessageKR,MessageTH:e.MessageTH,MessageTW:e.MessageTW,NextGroupId:e.NextGroupId});if(a!==s.value)return;return t.value.push({avatar:!1,MessageGroupId:o.MessageGroupId,Id:o.Id,CharacterId:o.CharacterId,ConditionValue:0,PreConditionGroupId:0,FavorScheduleId:i,NextGroupId:0,FeedbackTimeMillisec:0,MessageCondition:"Answer",options:{current:-1,content:l},MessageType:"Text",ImagePath:""}),void(await d(-1e3))}if(a===s.value){t.value.push({avatar:!0,MessageGroupId:o.MessageGroupId,Id:o.Id,CharacterId:o.CharacterId,ConditionValue:o.ConditionValue,PreConditionGroupId:o.PreConditionGroupId,FavorScheduleId:o.FavorScheduleId,NextGroupId:o.NextGroupId,FeedbackTimeMillisec:o.FeedbackTimeMillisec,MessageCondition:o.MessageCondition,MessageType:o.MessageType,ImagePath:o.ImagePath,MessageJP:o.MessageJP,MessageCN:o.MessageCN,MessageEN:o.MessageEN,MessageKR:o.MessageKR,MessageTH:o.MessageTH,MessageTW:o.MessageTW}),await d(o.FeedbackTimeMillisec||1500);for(let e of l.slice(1)){if(a!==s.value)return;t.value.push({avatar:!1,MessageGroupId:e.MessageGroupId,Id:e.Id,CharacterId:e.CharacterId,ConditionValue:e.ConditionValue,PreConditionGroupId:e.PreConditionGroupId,FavorScheduleId:e.FavorScheduleId,NextGroupId:e.NextGroupId,FeedbackTimeMillisec:e.FeedbackTimeMillisec,MessageCondition:e.MessageCondition,MessageType:e.MessageType,ImagePath:e.ImagePath,MessageJP:e.MessageJP,MessageCN:e.MessageCN,MessageEN:e.MessageEN,MessageKR:e.MessageKR,MessageTH:e.MessageTH,MessageTW:e.MessageTW}),await d(e.FeedbackTimeMillisec||1500)}await i(o.NextGroupId,a)}}}function d(e){return new Promise((a=>setTimeout(a,e+1e3)))}function u(e){var s;return null==(s=a.content)?void 0:s.filter((a=>a.MessageGroupId===e))}function c(e,a){const n=t.value.findIndex((a=>a.Id===e));t.value=t.value.slice(0,n+1),s.value++,i(a,s.value)}return i(a.content[0].MessageGroupId,0),(a,s)=>(n(),l("div",Z,[o("div",ee,[ae,o("div",se,[te,o("div",ne,[le,e.translator?(n(),l("span",oe,r(e.translator)+"@",1)):I("",!0),re,ie])])]),o("div",de,[(n(!0),l(C,null,k(t.value,((e,a)=>(n(),w(X,{key:a,message:e,onUserSelect:c},null,8,["message"])))),128))])]))}}),[["__scopeId","data-v-cc898bcb"]]),ce={class:"momotalk-component-container"},ge=v(s({__name:"MomotalkContainer",setup(s){const r=p(),d=t((()=>r.getLang)),u=m({CharacterId:0,translate:"",title:[],content:[],splitMomotalk:[]}),c=m([]),g=y();const v=m(!1),M=m({});return e.get(`/config/json/momotalk/${g.params.id}.json`).then((e=>{const a=e.data;u.value.CharacterId=a.CharacterId,u.value.translator=a.translator,u.value.title=a.title,u.value.content=a.content,u.value.splitMomotalk=function(e){const a=[];if(!e)throw new Error(`Momotalk content cannot be ${e}`);for(const s of e)0===a.length?a.push({FavorScheduleId:parseInt(s.CharacterId.toString()+s.ConditionValue.toString().padStart(2,"0")),splitMomotalkContent:[s]}):0===s.ConditionValue?a[a.length-1].splitMomotalkContent.push(s):a.push({FavorScheduleId:parseInt(s.CharacterId.toString()+s.ConditionValue.toString().padStart(2,"0")),splitMomotalkContent:[s]});return a}(a.content)})).catch((e=>{console.error(e),v.value=!0,M.value=e})),(e,s)=>(n(),l(C,null,[v.value?(n(),w(a,{key:0,"route-path":i(g).path,"error-message":M.value},null,8,["route-path","error-message"])):I("",!0),o("div",ce,[(n(!0),l(C,null,k(u.value.title,((e,a)=>{return n(),l("div",{class:"momotalks-view-container flex-vertical",key:a},[T(E,{onClicked:e=>function(e){c.value.includes(e)?c.value=c.value.filter((a=>a!==e)):c.value.push(e)}(a),avatar:(o=u.value.CharacterId,`/image/avatar_students/${o}.webp`),title:e,language:i(d),index:a,"is-active":c.value.includes(a)},null,8,["onClicked","avatar","title","language","index","is-active"]),c.value.includes(a)?(n(),w(ue,{key:0,messageGroup:e.GroupId,translator:u.value.translator,content:(s=e.GroupId,null==(t=u.value.splitMomotalk.find((e=>e.FavorScheduleId===s)))?void 0:t.splitMomotalkContent)},null,8,["messageGroup","translator","content"])):I("",!0)]);var s,t,o})),128))])],64))}}),[["__scopeId","data-v-a39852fb"]]);export{ge as default};
