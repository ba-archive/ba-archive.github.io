System.register(["./axios-legacy.c095afd6.js","./index-legacy.8e7c39d3.js"],(function(e,t){"use strict";var a,i,n,r,o,c,l,d,s,u,m,v,f,p,g,h,w,x,k,y,b=document.createElement("style");return b.textContent=".archive-title[data-v-5aacdaaf]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;cursor:pointer;box-shadow:.2rem .2rem 1rem rgba(0,0,0,.2);background:var(--color-title-container);padding:.5rem;width:100%;color:var(--color-text-ingame);font-weight:700;font-size:1.25rem;user-select:none}.archive-title .section-title[data-v-5aacdaaf]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.archive-title .section-title .ordered-list[data-v-5aacdaaf]{border-right:.1rem solid lightgray;padding-right:.5rem}.archive-title .section-title .title[data-v-5aacdaaf]{padding-left:.5rem}.archive-title .navigate-arrow[data-v-5aacdaaf]{transform:rotate(90deg);cursor:pointer;width:1.25rem;height:1.25rem}.archive-title .navigate-arrow path[data-v-5aacdaaf]{fill:var(--color-text-ingame)}.archive-title .navigate-arrow.open[data-v-5aacdaaf]{transform:rotate(0)}.momotalks-view-container[data-v-9b8d758e]{width:30rem}.momotalk-indicator[data-v-9b8d758e]{display:flex;flex-direction:row;justify-content:space-between;width:100%;font-size:1.25rem}.momotalk-indicator .momotalk-title[data-v-9b8d758e]:before{content:attr(order)}.momotalk-indicator .navigate[data-v-9b8d758e]{transform:rotate(90deg);cursor:pointer;width:1.25rem;height:1.25rem}.momotalk-indicator .navigate.open[data-v-9b8d758e]{transform:rotate(0)}@media screen and (max-width: 768px){.momotalks-view-container[data-v-9b8d758e]{max-width:calc(100vw - 2rem)}}\n",document.head.appendChild(b),{setters:[function(e){a=e.a},function(e){i=e.d,n=e.x,r=e.r,o=e.k,c=e.f,l=e.t,d=e.a,s=e.n,u=e.A,m=e.p,v=e.q,f=e._,p=e.b,g=e.F,h=e.i,w=e.m,x=e.u,k=e.j,y=e.g}],execute:function(){var t=i({__name:"MomotalkViewer",props:{momotalk:{type:Object,required:!0}},setup:function(e){var t=e,i=n(),d=r([]),s="/config/json/archive/".concat(i.params.id,"/momotalk/").concat(t.momotalk.file,".json");return a.get(s).then((function(e){d.value=e.data})),function(e,t){return o(),c("div",null,l(d.value),1)}}}),b=["onKeydown"],j={class:"section-title"},_={class:"ordered-list"},C={class:"title"},q=[function(e){return m("data-v-5aacdaaf"),e=e(),v(),e}((function(){return d("path",{fill:"#344A6E",d:"M225.9 354.7c-8.1 0-16.2-3.1-22.4-9.3L9.3 151.2c-12.4-12.4-12.4-32.4 0-44.8C21.7 94 41.7 94 54 106.4l171.9 171.9 171.9-171.9c12.4-12.4 32.4-12.4 44.7 0 12.4 12.4 12.4 32.4 0 44.8L248.3 345.4c-6.2 6.2-14.3 9.3-22.4 9.3z"},null,-1)}))],A=i({__name:"StudentArchiveTitle",props:{title:{type:String,required:!0},index:{type:Number,required:!1},isActive:{type:Boolean,required:!1}},emits:["clicked"],setup:function(e,t){var a=t.emit;function i(){a("clicked")}return function(t,a){return o(),c("div",{class:"archive-title rounded-small",tabindex:"0",onClick:i,onKeydown:[u(i,["enter"]),u(i,["space"])]},[d("p",j,[d("span",_,l((e.index?"".concat(e.index+1):"").toString().padStart(2,"0")),1),d("span",C,l(e.title),1)]),(o(),c("svg",{class:s(["navigate-arrow",e.isActive?"open":""]),xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",viewBox:"0 0 451.8 451.8"},q,2))],40,b)}}}),S=f(A,[["__scopeId","data-v-5aacdaaf"]]),z={class:"flex-vertical rounded-small"};e("default",f(i({__name:"MomotalkContainer",setup:function(e){var i=p(),l=r({chats:[{file:"",title:{zh:"",jp:""}}],student_id:0}),d=r([]),s=n();return a.get("/config/json/archive/".concat(s.params.id,"/momotalk/index.json")).then((function(e){l.value=e.data})),function(e,a){return o(),c("div",z,[(o(!0),c(g,null,h(l.value.chats,(function(e,a){return o(),c("div",{class:"momotalks-view-container flex-vertical",key:a},[w(S,{onClicked:function(e){return function(e){d.value.includes(e)?d.value=d.value.filter((function(t){return t!==e})):d.value.push(e)}(a)},title:e.title[x(i).getLang],index:a,"is-active":d.value.includes(a)},null,8,["onClicked","title","index","is-active"]),d.value.includes(a)?(o(),k(t,{key:0,momotalk:e},null,8,["momotalk"])):y("",!0)])})),128))])}}}),[["__scopeId","data-v-9b8d758e"]]))}}}));
