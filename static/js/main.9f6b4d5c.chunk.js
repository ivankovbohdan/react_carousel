(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(4),i=n.n(a),c=n(2),s=n(1),l=(n(9),n(10),n(0)),p=function(e){var t=e.images,n=e.itemWidth,a=e.frameSize,i=e.step,p=e.animationDuration,r=e.infinite,u=Object(s.useState)(0),m=Object(c.a)(u,2),o=m[0],j=m[1];return Object(l.jsxs)("div",{className:"Carousel",style:{width:"".concat(n*a,"px")},children:[Object(l.jsx)("ul",{className:"Carousel__list",style:{transform:"translateX(-".concat(o*i*n,"px)"),transition:"transform ".concat(p,"ms")},children:t.map((function(e,t){return Object(l.jsx)("li",{className:"Carousel__item",children:Object(l.jsx)("img",{width:n,height:n,src:e,alt:"".concat(t+1)})},e)}))}),Object(l.jsx)("button",{type:"button",disabled:!r&&o<1,onClick:function(){j(r?o>0?o-1:Math.ceil(t.length/a-1):o-1)},children:"Prev"}),Object(l.jsx)("button",{type:"button","data-cy":"next",disabled:!r&&o+1>=t.length/a,onClick:function(){r?o+1<=t.length/a?j(o+1):j(0):j(o+1)},children:"Next"})]})},r=function(){var e=["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],t=Object(s.useState)(130),n=Object(c.a)(t,2),a=n[0],i=n[1],r=Object(s.useState)(3),u=Object(c.a)(r,2),m=u[0],o=u[1],j=Object(s.useState)(3),b=Object(c.a)(j,2),h=b[0],d=b[1],g=Object(s.useState)(1e3),O=Object(c.a)(g,2),x=O[0],f=O[1],_=Object(s.useState)(!1),y=Object(c.a)(_,2),I=y[0],N=y[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("h1",{className:"App__title","data-cy":"title",children:["Carousel with ",e.length," images"]}),Object(l.jsxs)("div",{className:"App__inputs",children:[Object(l.jsxs)("label",{htmlFor:"itemId",children:["Item Width",Object(l.jsx)("input",{className:"App__input",id:"itemId",onChange:function(e){i(parseInt(e.target.value,10))},type:"number",placeholder:"Type item width",min:130})]}),Object(l.jsxs)("label",{htmlFor:"frameId",children:["Frame Size",Object(l.jsx)("input",{className:"App__input",id:"frameId",onChange:function(e){o(parseInt(e.target.value,10))},type:"number",placeholder:"Type frame size",min:1,max:10})]}),Object(l.jsxs)("label",{htmlFor:"stepId",children:["Scroll Step",Object(l.jsx)("input",{className:"App__input",id:"stepId",onChange:function(e){d(parseInt(e.target.value,10))},type:"number",placeholder:"Type step",min:3})]}),Object(l.jsxs)("label",{children:["Duration",Object(l.jsx)("input",{className:"App__input",onChange:function(e){f(parseInt(e.target.value,10))},type:"number",placeholder:"Type step",min:1e3})]}),Object(l.jsxs)("label",{children:["Infinite",Object(l.jsx)("input",{className:"App__input App__input--checkbox",onChange:function(){N(!I)},type:"checkbox",checked:I})]})]}),Object(l.jsx)(p,{images:e,itemWidth:a,frameSize:m,step:h,animationDuration:x,infinite:I})]})};i.a.render(Object(l.jsx)(r,{}),document.getElementById("root"))},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.9f6b4d5c.chunk.js.map