System.register(["./axios-legacy.c095afd6.js","./index-legacy.bf0173b2.js","./store-legacy.fb9a4fcd.js"],(function(e,t){"use strict";var a,i,n,r,o,c,l,d,s,u,m,v,f,g,p,h,b,k=document.createElement("style");return k.innerHTML=".archive-title[data-v-dfd8e95c]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;cursor:pointer;box-shadow:.2rem .2rem 1rem rgba(0,0,0,.2);border-radius:.5rem;background:var(--color-title-container);padding:.5rem;width:100%;color:var(--color-text-ingame);font-weight:700;font-size:1.25rem;user-select:none}.archive-title .section-title[data-v-dfd8e95c]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.archive-title .section-title .ordered-list[data-v-dfd8e95c]{border-right:.1rem solid lightgray;padding-right:.5rem}.archive-title .section-title .title[data-v-dfd8e95c]{padding-left:.5rem}.archive-title .navigate[data-v-dfd8e95c]{transform:rotate(90deg);cursor:pointer;width:1.25rem;height:1.25rem}.archive-title .navigate.open[data-v-dfd8e95c]{transform:rotate(0)}.momotalks-view-container[data-v-bba6e6c3]{width:30rem}.momotalk-indicator[data-v-bba6e6c3]{display:flex;flex-direction:row;justify-content:space-between;width:100%;font-size:1.25rem}.momotalk-indicator .momotalk-title[data-v-bba6e6c3]:before{content:attr(order)}.momotalk-indicator .navigate[data-v-bba6e6c3]{transform:rotate(90deg);cursor:pointer;width:1.25rem;height:1.25rem}.momotalk-indicator .navigate.open[data-v-bba6e6c3]{transform:rotate(0)}\n",document.head.appendChild(k),{setters:[function(e){a=e.a},function(e){i=e.b,n=e.r,r=e.o,o=e.e,c=e.t,l=e._,d=e.a,s=e.n,u=e.z,m=e.F,v=e.h,f=e.l,g=e.u,p=e.i,h=e.f},function(e){b=e.m}],execute:function(){var t={__name:"MomotalkViewer",props:{momotalk:{type:Object,required:!0}},setup:function(e){var t=e,l=i(),d=n([]),s="/config/json/archive/".concat(l.params.id,"/momotalk/").concat(t.momotalk.file,".json");return a.get(s).then((function(e){d.value=e.data})),function(e,t){return r(),o("div",null,c(d.value),1)}}},k=["onKeydown"],x={class:"section-title"},y={class:"ordered-list"},w={class:"title"},j={__name:"StudentArchiveTitle",props:{title:{type:String,required:!0},index:{type:Number,required:!1},isActive:{type:Boolean,required:!1}},emits:["clicked"],setup:function(e,t){var a=t.emit;function i(){a("clicked")}return function(t,a){return r(),o("div",{class:"archive-title",tabindex:"0",onClick:i,onKeydown:[u(i,["enter"]),u(i,["space"])]},[d("p",x,[d("span",y,c((e.index+1).toString().padStart(2,"0")),1),d("span",w,c(e.title),1)]),d("img",{class:s(["navigate",e.isActive?"open":""]),src:"/assets/navigate-down.b6e6da1a.svg",alt:"navigate",role:"button"},null,2)],40,k)}}},_=l(j,[["__scopeId","data-v-dfd8e95c"]]),C={class:"flex-vertical rounded"};e("default",l({__name:"MomotalkContainer",setup:function(e){var c=b(),l=n([]),d=n([]),s=i();return a.get("/config/json/archive/".concat(s.params.id,"/momotalk/index.json")).then((function(e){l.value=e.data})),function(e,a){return r(),o("div",C,[(r(!0),o(m,null,v(l.value.chats,(function(e,a){return r(),o("div",{class:"momotalks-view-container flex-vertical",key:a},[f(_,{onClicked:function(e){return function(e){d.value.includes(e)?d.value=d.value.filter((function(t){return t!==e})):d.value.push(e)}(a)},title:e.title[g(c).getLang],index:a,"is-active":d.value.includes(a)},null,8,["onClicked","title","index","is-active"]),d.value.includes(a)?(r(),p(t,{key:0,momotalk:e},null,8,["momotalk"])):h("",!0)])})),128))])}}},[["__scopeId","data-v-bba6e6c3"]]))}}}));
