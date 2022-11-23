!function(){function t(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,n)}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var a=0,o=function(){};return{s:o,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return l=t.done,t},e:function(t){c=!0,i=t},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw i}}}}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}System.register(["./axios-legacy.c095afd6.js","./index-legacy.212d9e36.js"],(function(e,n){"use strict";var r,a,o,i,l,c,d,u,s,f,v,m,p,g,h,y,b,w,x,k,C,S=document.createElement("style");return S.textContent=".archive-title[data-v-c6ff9cb6]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;cursor:pointer;box-shadow:.2rem .2rem 1rem rgba(0,0,0,.2);background:var(--color-title-container);padding:.5rem;width:100%;color:var(--color-text-ingame);font-weight:700;font-size:1.25rem;user-select:none}.archive-title .section-title[data-v-c6ff9cb6]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.archive-title .section-title .ordered-list[data-v-c6ff9cb6]{border-right:.1rem solid lightgray;padding-right:.5rem}.archive-title .section-title .title[data-v-c6ff9cb6]{padding-left:.5rem}.archive-title .navigate-arrow[data-v-c6ff9cb6]{transform:rotate(90deg);cursor:pointer;width:1.25rem;height:1.25rem}.archive-title .navigate-arrow path[data-v-c6ff9cb6]{fill:var(--color-text-ingame)}.archive-title .navigate-arrow.open[data-v-c6ff9cb6]{transform:rotate(0)}.momotalk-component-container[data-v-e377b47d]{grid-gap:1rem;display:grid;grid-auto-flow:row;place-items:center}.momotalks-view-container[data-v-e377b47d]{width:30rem}.momotalk-indicator[data-v-e377b47d]{display:flex;flex-direction:row;justify-content:space-between;width:100%;font-size:1.25rem}.momotalk-indicator .momotalk-title[data-v-e377b47d]:before{content:attr(order)}.momotalk-indicator .navigate[data-v-e377b47d]{transform:rotate(90deg);cursor:pointer;width:1.25rem;height:1.25rem}.momotalk-indicator .navigate.open[data-v-e377b47d]{transform:rotate(0)}@media screen and (max-width: 768px){.momotalks-view-container[data-v-e377b47d]{max-width:calc(100vw - 2rem)}}\n",document.head.appendChild(S),{setters:[function(t){r=t.a},function(t){a=t.d,o=t.a,i=t.k,l=t.e,c=t.c,d=t.t,u=t.g,s=t.n,f=t.A,v=t.p,m=t.q,p=t._,g=t.F,h=t.u,y=t.r,b=t.i,w=t.x,x=t.m,k=t.j,C=t.f}],execute:function(){var n=["onKeydown"],S={class:"section-title"},I={class:"ordered-list"},j={class:"title"},M=[function(t){return v("data-v-c6ff9cb6"),t=t(),m(),t}((function(){return c("path",{fill:"#344A6E",d:"M225.9 354.7c-8.1 0-16.2-3.1-22.4-9.3L9.3 151.2c-12.4-12.4-12.4-32.4 0-44.8C21.7 94 41.7 94 54 106.4l171.9 171.9 171.9-171.9c12.4-12.4 32.4-12.4 44.7 0 12.4 12.4 12.4 32.4 0 44.8L248.3 345.4c-6.2 6.2-14.3 9.3-22.4 9.3z"},null,-1)}))],A=a({__name:"StudentArchiveTitle",props:{title:{type:Object,required:!0},index:{type:Number,required:!1},language:{type:String,required:!0},isActive:{type:Boolean,required:!1}},emits:["clicked"],setup:function(t,e){var r=e.emit,a=t;function v(){r("clicked")}var m=o((function(){return"zh"===a.language?a.title.TextCn||void 0:"jp"===a.language?a.title.TextJp||void 0:a.title.TextEn||void 0}));return function(e,r){var a;return i(),l("div",{class:"archive-title rounded-small",tabindex:"0",onClick:v,onKeydown:[f(v,["enter"]),f(v,["space"])]},[c("p",S,[c("span",I,d("".concat(parseInt((null===(a=t.index)||void 0===a?void 0:a.toString())||"0")+1).padStart(2,"0")),1),c("span",j,d(u(m)||"!StoryTitleMissing"),1)]),(i(),l("svg",{class:s(["navigate-arrow",t.isActive?"open":""]),xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",viewBox:"0 0 451.8 451.8"},M,2))],40,n)}}}),_=p(A,[["__scopeId","data-v-c6ff9cb6"]]),G=a({__name:"MomotalkViewer",props:{messageGroup:null,content:null},setup:function(t){return function(e,n){return i(),l(g,null,[c("div",null,d(t.messageGroup),1),c("div",null,d(t.content),1)],64)}}}),T={class:"momotalk-component-container"};e("default",p(a({__name:"MomotalkContainer",setup:function(e){var n=h(),a=o((function(){return n.getLang})),c=y({CharacterId:0,title:[],content:[],splitMomotalk:[]}),d=y([]),s=w();return r.get("/config/json/momotalk/".concat(s.params.id,".json")).then((function(e){var n=e.data;c.value.CharacterId=n.CharacterId,c.value.title=n.title,c.value.content=n.content,c.value.splitMomotalk=function(e){var n,r=[],a=t(e);try{for(a.s();!(n=a.n()).done;){var o=n.value;0===r.length?r.push({FavorScheduleId:parseInt(o.CharacterId.toString()+o.ConditionValue.toString().padStart(2,"0")),splitMomotalkContent:[o]}):0===o.ConditionValue?r[r.length-1].splitMomotalkContent.push(o):r.push({FavorScheduleId:parseInt(o.CharacterId.toString()+o.ConditionValue.toString().padStart(2,"0")),splitMomotalkContent:[o]})}}catch(i){a.e(i)}finally{a.f()}return r}(n.content)})),function(t,e){return i(),l("div",T,[(i(!0),l(g,null,b(c.value.title,(function(t,e){return i(),l("div",{class:"momotalks-view-container flex-vertical",key:e},[x(_,{onClicked:function(t){return function(t){d.value.includes(t)?d.value=d.value.filter((function(e){return e!==t})):d.value.push(t)}(e)},title:t,language:u(a),index:e,"is-active":d.value.includes(e)},null,8,["onClicked","title","language","index","is-active"]),d.value.includes(e)?(i(),k(G,{key:0,messageGroup:t.GroupId,content:(n=t.GroupId,null===(r=c.value.splitMomotalk.find((function(t){return t.FavorScheduleId===n})))||void 0===r?void 0:r.splitMomotalkContent)},null,8,["messageGroup","content"])):C("",!0)]);var n,r})),128))])}}}),[["__scopeId","data-v-e377b47d"]]))}}}))}();
