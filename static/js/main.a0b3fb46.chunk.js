(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var i=n(6),a=n.n(i),c=n(3),s=n(2),r=n(4),l=n(1),m=(n(11),n(12),n(0)),p=function(e){var t=e.images,n=e.itemWidth,i=e.frameSize,a=e.step,c=e.animationDuration,s=e.infinite,p=Object(l.useState)(0),o=Object(r.a)(p,2),u=o[0],h=o[1];return Object(m.jsxs)("div",{className:"Carousel",style:{width:"".concat(n*i,"px")},children:[Object(m.jsx)("ul",{className:"Carousel__list",style:{transform:"translateX(-".concat(u*n,"px)"),transition:"transform ".concat(c,"ms")},children:t.map((function(e,t){return Object(m.jsx)("li",{className:"Carousel__item",children:Object(m.jsx)("img",{width:n,height:n,src:e,alt:"".concat(t+1)})},e)}))}),Object(m.jsx)("button",{type:"button",disabled:!s&&u<1,onClick:function(){return h(s?0!==u?u-a:t.length-1:1===u?0:u-a)},children:"Prev"}),Object(m.jsx)("button",{type:"button","data-cy":"next",disabled:!s&&u+a>=t.length,onClick:function(){return s?u+a<t.length?h(u+a):h(0):h(u+a>=t.length?t.length-i:u+a)},children:"Next"})]})},o=function(){var e=["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],t=Object(l.useState)({itemWidth:130,frameSize:3,step:3,animationDuration:1e3,infinite:!1}),n=Object(r.a)(t,2),i=n[0],a=n[1],o=function(e){var t=e.target,n=t.name,i=t.value;a((function(e){return Object(s.a)(Object(s.a)({},e),{},Object(c.a)({},n,parseInt(i,10)))}))};return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("h1",{className:"App__title","data-cy":"title",children:["Carousel with ",e.length," images"]}),Object(m.jsxs)("div",{className:"App__inputs",children:[Object(m.jsxs)("label",{htmlFor:"itemId",children:["Item Width",Object(m.jsx)("input",{className:"App__input",id:"itemId",name:"itemWidth",value:i.itemWidth,onChange:o,type:"number",placeholder:"Type item width",min:130,step:10,max:500})]}),Object(m.jsxs)("label",{htmlFor:"frameId",children:["Frame Size",Object(m.jsx)("input",{className:"App__input",id:"frameId",name:"frameSize",value:i.frameSize,onChange:o,type:"number",placeholder:"Type frame size",min:1,max:10})]}),Object(m.jsxs)("label",{htmlFor:"stepId",children:["Scroll Step",Object(m.jsx)("input",{className:"App__input",id:"stepId",name:"step",value:i.step,onChange:o,type:"number",placeholder:"Type step",min:1,max:9})]}),Object(m.jsxs)("label",{children:["Duration",Object(m.jsx)("input",{className:"App__input",value:i.animationDuration,name:"animationDuration",onChange:o,type:"number",placeholder:"Type step",min:1e3,step:500})]}),Object(m.jsxs)("label",{children:["Infinite",Object(m.jsx)("input",{className:"App__input App__input--checkbox",onChange:function(){return a((function(e){return Object(s.a)(Object(s.a)({},e),{},{infinite:!e.infinite})}))},type:"checkbox",checked:i.infinite})]})]}),Object(m.jsx)(p,{images:e,itemWidth:i.itemWidth,frameSize:i.frameSize,step:i.step,animationDuration:i.animationDuration,infinite:i.infinite})]})};a.a.render(Object(m.jsx)(o,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a0b3fb46.chunk.js.map