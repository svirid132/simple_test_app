(this.webpackJsonpsimple_test_app=this.webpackJsonpsimple_test_app||[]).push([[0],{28:function(t,e,n){},35:function(t){t.exports=JSON.parse('{"name":"Find the -ing form","img":"./images/image1.jpg","task":"Select the verbs that are in the -ing form.","lines":[{"words":["I","heaed","you\'re","buying","a","house!"],"right":["buying"]},{"words":["Yeah","we","found","one","we","like","so","we\'re","applying","for","a","home","loan","It\'s","taking","a","long","time.","I\'m","still","waiting","to","hear","from","the","bank."],"right":["applying","waiting","taking"]},{"words":["I","hope","it","all","goes","well."],"right":[]},{"words":["I","am","genius","mazafaka","ok!"],"right":["genius"]}]}')},38:function(t){t.exports=JSON.parse('{"name":"Complete the sentences","img":null,"task":"Put the words in the right order","lines":[{"begin":"A:","words":["What ","are ","you","doing","tonight"],"end":"?"},{"begin":"B: We\'re","words":["going ","to a restaurant."]}]}')},39:function(t){t.exports=JSON.parse('{"name":" Complete the conversation","img":null,"task":"Complete the telephone conversation. Use am, is or are.","lines":[{"begin":"A: How ","words":["are"],"end":" you doing?"},{"begin":"B: We ","words":["are","is"],"contine":"getting ready for a party tonight. It\'s Dad\'s birthday. He ","end":"turning 60 tomorrow!"},{"begin":"A: Sounds good. ","words":["are"],"end":"many people coming?"},{"begin":"B: About 30 I think. Mostly family. We\'re all pretty busy. I ","words":["am","is"],"contine":"making a cake now. Mom ","end":"you doing?"},{"default":"A: Sounds great. I\'ll talk to you later then. "}]}')},48:function(t,e,n){},49:function(t,e,n){},54:function(t,e,n){},55:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),i=n(10),s=n.n(i),o=(n(48),n(6)),c=(n(49),n(14)),d=n(8),u=n(9),l=n(12),p=n(11),h=(n(28),n(23)),b=n.n(h),j="def",f="ch",g="sol",m=n(61),O="un",x="sel",v="p",w="m",D="sol",k=n(1),y=function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(){return Object(d.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t="word";switch(this.props.mode){case O:t+=" unselect";break;case x:t+=" select";break;case v:t+=" plus";break;case w:t+=" minus",Object(k.jsx)("span",{className:"minus",children:"-1"});break;case D:t+=" solution"}return Object(k.jsxs)("li",{className:t,"data-type":"selectWord",onClick:this.props.onClick,children:[this.props.value,Object(k.jsx)(m.a,{in:this.props.mode===v,unmountOnExit:!0,timeout:200*this.props.id,classNames:"raiting",children:Object(k.jsx)("span",{className:"plus",children:"+1"})}),Object(k.jsx)(m.a,{in:this.props.mode===w,unmountOnExit:!0,timeout:200*this.props.id,classNames:"raiting",children:Object(k.jsx)("span",{className:"minus",children:"-1"})})]})}}]),n}(r.Component),S=function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(t){var r;return Object(d.a)(this,n),(r=e.call(this,t)).selectStar=0,r.allStar=r.props.data.reduce((function(t,e){return e.right.length+t}),0),r.handleStar=r.handleStar.bind(Object(c.a)(r)),r}return Object(u.a)(n,[{key:"handleStar",value:function(t){this.selectStar+=t;var e=this.selectStar;this.selectStar<0&&(e=0),this.props.mode===j&&this.props.onStar([e,this.allStar])}},{key:"componentDidMount",value:function(){this.props.onStar([0,this.allStar])}},{key:"componentDidUpdate",value:function(t){t.mode!==this.props.mode&&this.props.mode===j&&(this.selectStar=0,this.props.onStar([this.selectStar,this.allStar]))}},{key:"render",value:function(){var t=this;return this.props.data.map((function(e,n){return Object(k.jsx)(I,{words:e.words,right:e.right,mode:t.props.mode,onClick:t.handleStar},n)}))}}]),n}(r.Component),I=function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(t){var r;return Object(d.a)(this,n),(r=e.call(this,t)).handleClick=r.handleClick.bind(Object(c.a)(r)),r.state={selectIds:new Array(r.props.words.length).fill(!1)},r.rightIds=new Array(r.props.words.length).fill(!1).map((function(t,e){return-1!==r.props.right.findIndex((function(t){return t===r.props.words[e]}))})),r}return Object(u.a)(n,[{key:"handleClick",value:function(t){this.props.mode===j&&(this.state.selectIds[t]?(this.setState(b()(this.state,{selectIds:{$splice:[[t,1,!1]]}})),this.props.onClick(this.rightIds[t]?-1:1)):(this.setState(b()(this.state,{selectIds:{$splice:[[t,1,!0]]}})),this.props.onClick(this.rightIds[t]?1:-1)))}},{key:"componentDidUpdate",value:function(t){t.mode!==this.props.mode&&this.props.mode===j&&this.setState(Object.assign({},this.state).selectIds.fill(!1))}},{key:"render",value:function(){var t=this,e=this.props.words.map((function(e,n){var r;return t.props.mode===j?r=t.state.selectIds[n]?x:O:t.props.mode===g?r=t.rightIds[n]?D:O:t.props.mode===f&&(r=t.state.selectIds[n]?t.rightIds[n]?v:w:O),Object(k.jsx)(y,{id:n,value:e,mode:r,onClick:function(){return t.handleClick(n)}},n)}));return Object(k.jsx)("ul",{className:"lineWord",children:e})}}]),n}(a.a.Component),N=n(3),C=n(4);function E(){return(E=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function M(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var A=r.createElement("path",{fill:"#878787",stroke:"#FFFFFF",strokeWidth:4.0016,strokeMiterlimit:10,d:"M27.1,3.8l5.1,10.9c0.3,0.7,1,1.2,1.7,1.3 l11.6,1.8c1.8,0.3,2.6,2.5,1.3,3.9l-8.6,8.8c-0.5,0.5-0.7,1.3-0.6,2l2,12.3c0.3,1.9-1.7,3.3-3.4,2.4l-10.2-5.7 c-0.7-0.4-1.5-0.4-2.2,0l-10.2,5.7c-1.7,0.9-3.7-0.5-3.4-2.4l2-12.3c0.1-0.7-0.1-1.5-0.6-2l-8.6-8.8c-1.3-1.3-0.5-3.6,1.3-3.9 l11.6-1.8c0.8-0.1,1.4-0.6,1.7-1.3l5.1-10.9C23.7,2.1,26.3,2.1,27.1,3.8z"});function U(t,e){var n=t.title,a=t.titleId,i=M(t,["title","titleId"]);return r.createElement("svg",E({baseProfile:"tiny",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 50 50",overflow:"visible",xmlSpace:"preserve",ref:e,"aria-labelledby":a},i),n?r.createElement("title",{id:a},n):null,A)}var F,L,W,B=r.forwardRef(U),J=(n.p,C.b.span(F||(F=Object(N.a)(['\n    height: 15px;\n    position: absolute;\n    background-color: #DDDDDD;\n    border-radius: 5px;\n    top: 11px;\n    left: 25px;\n    width: 220px;\n    \n    &::before {\n        content: "";\n        height: inherit;\n        border-radius: 5px;\n        background-color: green;\n        position: absolute;\n        width: ',"px;\n        transition: width 2s ease-out;\n    }\n\n    &.sliderBar-appear {\n        &::before {\n            width: 0px;\n        }\n    }\n"])),(function(t){return t.width}))),P=Object(C.b)(B)(L||(L=Object(N.a)(["\n    width: 38px;\n    height: 30px;\n    position: absolute;\n    left: 220px;\n    top: 2px;\n\n    path {\n        fill: #DDDDDD;\n        stroke-width: 5px;\n        ","\n    }\n\n    &.star-appear {\n        path {\n            fill: #DDDDDD;\n            stroke-width: 5px;\n        }\n    }\n"])),(function(t){return t.gold&&Object(C.a)(W||(W=Object(N.a)([" transition: fill 0s 1.6s; fill: gold;"])))})),_=(n(54),function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(t){var r;return Object(d.a)(this,n),(r=e.call(this,t)).widthScale=220,r}return Object(u.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t=this.widthScale/this.props.countStar*this.props.fillStar,e=this.props.countStar===this.props.fillStar;return Object(k.jsx)("div",{className:"starSlider",children:Object(k.jsxs)("div",{className:"border",children:[Object(k.jsx)(m.a,{in:!0,appear:!0,timeout:200,classNames:"sliderBar",children:Object(k.jsx)(J,{width:t})}),Object(k.jsx)(m.a,{in:!0,appear:!0,timeout:200,classNames:"star",children:e?Object(k.jsx)(P,{gold:!0}):Object(k.jsx)(P,{})}),Object(k.jsxs)("span",{className:"counter",children:[this.props.fillStar,Object(k.jsx)("span",{className:"seperate",children:"/"}),this.props.countStar]})]})})}}]),n}(a.a.Component)),z=n(35),H=n(36),R=n(59),$=n(40),T=n(62),X=n(63),Y="drag",q="drop",G=function(){function t(e,n){Object(d.a)(this,t),this.dropData=e.map((function(t){return t.words.map((function(t,e){return{index:-e-1,word:""}}))}));var r=0;this.dragData=e.map((function(t){return t.words.map((function(t){return{index:r++,word:t}}))})).reduce((function(t,e){return t.concat(e)}),[]),this.dragData.sort((function(t,e){return t.word[0]<e.word[0]?(console.log("1"),1):t.word[0]>e.word[0]?(console.log("-1"),-1):0})),console.log(this.dragData),this.observ={},this.observ[q]={},this.originDragData=Object.assign([],this.dragData),this.originDropData=Object.assign([],this.dropData),this.data=e,this.name=n}return Object(u.a)(t,[{key:"setObserv",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;null===n?this.observ[e]=t:this.observ[e][n]=t}},{key:"canDrop",value:function(t,e,n,r,a,i){return!(t===e&&n===r&&a===i)}},{key:"move",value:function(t,e,n,r,a,i){var s,o=this;if(n===r)if(n===q){var c=Object.assign({},this.dropData[a].find((function(e){return e.index===t}))),d=Object.assign({},this.dropData[i].find((function(t){return t.index===e})));this.dropData[a]=this.dropData[a].map((function(e,n){return e.index===t?{index:-n-1,word:""}:e})),this.dropData[i]=this.dropData[i].map((function(t){return t.index===e?c:t})),""!==d.word&&(this.dragData.unshift(d),this.singleUpdate(this.dragData,this.observ[Y])),this.update(this.dropData[a],this.observ[q][a],this.dropData[i],this.observ[q][i])}else{var u=Object.assign({},this.dragData.find((function(e){return e.index===t}))),l=Object.assign({},this.dragData.find((function(t){return t.index===e})));this.dragData=this.dragData.map((function(n){return n.index===e?u:n.index===t?l:n})),this.singleUpdate(this.dragData,this.observ[Y])}else{if(r===q){if(""!==this.dropData[i].find((function(t){return t.index===e})).word){var p=Object.assign({},this.dropData[i].find((function(t){return t.index===e})));this.dragData.unshift(p)}var h=this.dragData.find((function(e){return e.index===t}));this.dropData[i]=this.dropData[i].map((function(t){return e===t.index?Object.assign([],h):t})),s=function(t,e){return o.update(t,e,o.dropData[i],o.observ[q][i])}}else this.dragData.splice(this.dragData.findIndex((function(t){return t.index===e})),0,this.dropData[a].find((function(e){return e.index===t}))),s=function(t,e){return o.update(t,e,o.dragData,o.observ[Y])};n===Y?(this.dragData=this.dragData.filter((function(e){return e.index!==t})),s(this.dragData,this.observ[Y])):(this.dropData[a]=this.dropData[a].map((function(e,n){return e.index===t?{index:-n-1,word:""}:e})),s(this.dropData[a],this.observ[q][a]))}}},{key:"singleUpdate",value:function(t,e){e(Object.assign([],t))}},{key:"update",value:function(t,e,n,r){e(Object.assign([],t)),r(Object.assign([],n))}},{key:"getStars",value:function(){var t=0,e=0;return this.dropData.forEach((function(n){for(var r=0;r<n.length;++r)n[r].index===e&&++t,++e})),t}},{key:"solution",value:function(){var t=0;this.dropData=this.data.map((function(e){return e.words.map((function(e){return{index:t++,word:e}}))}));for(var e=0;e<this.dropData.length;++e)this.singleUpdate(this.dropData[e],this.observ[q][e]);this.dragData=[],this.singleUpdate(this.dragData,this.observ[Y])}},{key:"reset",value:function(){this.dropData=this.data.map((function(t){return t.words.map((function(t,e){return{index:-e-1,word:""}}))}));var t=0;this.dragData=this.data.map((function(e){return e.words.map((function(e){return{index:t++,word:e}}))})).reduce((function(t,e){return t.concat(e)}),[]).sort((function(t,e){return t.word[0]>e.word[0]})),this.dragData.sort((function(t,e){return t.word[0]<e.word[0]?(console.log("1"),1):t.word[0]>e.word[0]?(console.log("-1"),-1):0}));for(var e=0;e<this.dropData.length;++e)this.singleUpdate(this.dropData[e],this.observ[q][e]);this.singleUpdate(this.dragData,this.observ[Y])}},{key:"check",value:function(t,e,n){for(var r=0,a=0;a<t;++a)r+=this.data[a].words.length;return n===r+e}}]),t}(),K="def",Q="p",V="m",Z="sol",tt=j;function et(t){var e=t.data,n=t.mode,a=t.onStar,i=Object(r.useMemo)((function(){return e.reduce((function(t,e){return e.words.length+t}),0)}),[]),s=Object(r.useState)(new G(e,"current")),c=Object(o.a)(s,2),d=c[0];c[1];Object(r.useEffect)((function(){if(n===f&&tt!==n){var t=d.getStars();a([t,i])}else n===j&&tt!==n?d.reset():n===g&&tt!==n&&d.solution();tt=n}),[n]);var u=e.map((function(t,e){return Object(k.jsx)(rt,{index:e,beginLine:t.begin,endLine:t.end,observ:d,mode:n},e)}));return Object(k.jsxs)(R.a,{backend:$.a,children:[u,Object(k.jsx)(nt,{observ:d,mode:n})]})}function nt(t){var e=t.observ,n=(t.mode,Object(r.useState)(e.dragData)),a=Object(o.a)(n,2),i=a[0],s=a[1];Object(r.useEffect)((function(){e.setObserv(s,Y)}),[e]);var c=i.map((function(t){return Object(k.jsx)(at,{dragItem:{index:t.index,type:Y,LineIndex:null},index:t.index,word:t.word,type:null,canDrop:function(n,r,a){return e.canDrop(n,t.index,r,Y,a,null)},observMove:function(n,r,a){return e.move(n,t.index,r,Y,a,null)}},t.index)}));return Object(k.jsx)("ul",{className:"line","data-type":"drag",children:c})}function rt(t){var e=t.index,n=t.beginLine,a=t.endLine,i=t.observ,s=t.mode,c=Object(r.useState)(i.dropData[e]),d=Object(o.a)(c,2),u=d[0],l=d[1];Object(r.useEffect)((function(){i.setObserv(l,q,e)}),[i]);var p=u.map((function(t,n){var r;switch(s){case j:r=K;break;case f:r=i.check(e,n,t.index)?Q:V;break;case g:r=Z}return Object(k.jsx)(at,{dragItem:{index:t.index,type:q,LineIndex:e},word:t.word,canDrop:function(n,r,a){return i.canDrop(n,t.index,r,q,a,e)},observMove:function(n,r,a){return i.move(n,t.index,r,q,a,e)},mode:r},t.index)}));return Object(k.jsxs)("ul",{className:"line","data-type":"drop",children:[n&&Object(k.jsx)("li",{className:"word","data-type":"default",children:n}),p,a&&Object(k.jsx)("li",{className:"word","data-type":"default",children:a})]})}function at(t){var e=t.dragItem,n=t.word,a=t.observMove,i=t.canDrop,s=t.mode,c=Object(r.useRef)(null),d=Object(T.a)((function(){return{accept:"word",canDrop:function(t){return i(t.index,t.type,t.LineIndex)},drop:function(t){return a(t.index,t.type,t.LineIndex)},collect:function(t){return{handlerId:t.getHandlerId()}}}}),[]),u=Object(o.a)(d,2),l=(u[0].handlerId,u[1]),p=Object(X.a)((function(){return{type:"word",canDrag:function(){return""!==n},item:e}}),[]),h=Object(o.a)(p,2);Object(H.a)(h[0]),(0,h[1])(l(c));var b="word";switch(s){case Q:b+=" plus";break;case V:b+=" minus";break;case Z:b+=" solution"}return Object(k.jsxs)("li",{className:b,"data-type":"DnDWord",ref:c,children:[n,Object(k.jsx)(m.a,{in:s===Q,unmountOnExit:!0,timeout:200,classNames:"raiting",children:Object(k.jsx)("span",{className:"plus",children:"+1"})}),Object(k.jsx)(m.a,{in:s===V,unmountOnExit:!0,timeout:200,classNames:"raiting",children:Object(k.jsx)("span",{className:"minus",children:"-1"})})]})}var it,st,ot,ct,dt,ut,lt,pt,ht,bt,jt=n(38),ft="def",gt="pl",mt="min",Ot="sol",xt=C.b.input(it||(it=Object(N.a)(["\n    width: 50px;\n    ",";\n    ",";\n    ",";\n"])),(function(t){return t.mode===mt&&Object(C.a)(st||(st=Object(N.a)(["\n            background-color: rgb(231, 15, 15);"])))}),(function(t){return t.mode===gt&&Object(C.a)(ot||(ot=Object(N.a)(["\n            background-color: rgb(58, 187, 47);"])))}),(function(t){return t.mode===Ot&&Object(C.a)(ct||(ct=Object(N.a)(["\n            background-color: rgb(77, 216, 209);\n            border: 2px dotted rgb(58, 83, 20);\n            text-align: center;"])))})),vt=C.b.span(dt||(dt=Object(N.a)(["\n        position: relative;\n        display: inline-block;\n        top: -10px;\n        right: 10px;\n        font-size: 1.2rem;\n        text-align: center;\n        width: 2rem;\n        border-radius: 5px;\n\n        ",";\n        ",";\n\n        &.transition-enter {\n            opacity: 0%;\n        }\n        &.transition-enter-active {\n            opacity: 100%;\n            transition: opacity 200ms ",";\n        }\n"])),(function(t){return t.mode===gt&&Object(C.a)(ut||(ut=Object(N.a)(["\n                background-color: rgb(33, 190, 33);\n                border: 0.2rem solid #146822;\n            "])))}),(function(t){return t.mode===mt&&Object(C.a)(lt||(lt=Object(N.a)(["\n                background-color: #ff453e;\n                border: 0.2rem solid #d6302a;"])))}),(function(t){return Object(C.a)(pt||(pt=Object(N.a)(["","ms"])),200*t.index)})),wt=C.b.ul(ht||(ht=Object(N.a)(["\n    margin: 0;\n    padding: 0;\n"]))),Dt=C.b.li(bt||(bt=Object(N.a)(["\n    display: inline-block;\n    margin-right: 10px;\n    margin-bottom: 5px; \n    list-style-type: none;\n"]))),kt=j;function yt(t){return t.map((function(t){return t.words?Array(t.words.length).fill(""):null}))}function St(t){return t.map((function(t){return Array.isArray(t)?Object.assign([],t).fill(ft):null}))}function It(t){var e=t.data,n=t.mode,a=t.onStar,i=Object(r.useState)(yt(e)),s=Object(o.a)(i,2),c=s[0],d=s[1],u=Object(r.useState)(St(c)),l=Object(o.a)(u,2),p=l[0],h=l[1];Object(r.useEffect)((function(){if(n===f&&kt!==f){var t=e.reduce((function(t,e){return e.words&&(t+=e.words.length),t}),0),r=e.reduce((function(t,e,n){return e.words&&(t+=e.words.reduce((function(t,e,r){return c[n][r]===e?t+=1:t}),0)),t}),0);a([r,t]);var i=e.map((function(t,e){return t.words?t.words.map((function(t,n){return c[e][n]===t?gt:mt})):null}));h(i)}else if(n===g&&kt!==g){var s=e.map((function(t){return t.words?Object.assign([],t.words):null}));d(s);var o=c.map((function(t){return Array.isArray(t)?Object.assign([],t).fill(Ot):null}));h(o)}else n===j&&kt!==j&&(d(yt(e)),h(St(c)));kt=n}),[n]);var b=e.map((function(t,e){return t.words?Object(k.jsx)(Nt,{index:e,begin:t.begin,end:t.end,contine:t.contine,inputData:c[e],onChange:function(t,n){var r=Object.assign([],c);r[e][n]=t,d(r)},modes:p[e]},e):Object(k.jsx)(wt,{children:Object(k.jsx)(Dt,{children:t.default},e)})}));return Object(k.jsx)(k.Fragment,{children:b})}function Nt(t){var e=t.index,n=t.begin,r=t.end,a=t.contine,i=t.inputData,s=t.onChange,o=t.modes,c=e,d=function(t){if(o[0]===j){var e=t.target.value.slice(-1);if(isNaN(e)||""===e){var n=t.target.value,r=t.target.getAttribute("data-index");s(n,r)}}},u=i.map((function(t,e){return Object(k.jsxs)(Dt,{children:[Object(k.jsx)(xt,{type:"text",mode:o[e],"data-index":e,value:t,onChange:d}),Object(k.jsx)(m.a,{in:o[e]===gt||o[e]===mt,unmountOnExit:!0,timeout:{enter:500*c,exit:0},classNames:"transition",children:Object(k.jsx)(vt,{index:c,mode:o[e],children:o[e]===gt?"+1":"-1"})})]})}));return Object(k.jsxs)("ul",{children:[Object(k.jsx)(Dt,{children:n},0),u[0],a&&Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(Dt,{children:a},2),u[1]]}),Object(k.jsx)(Dt,{children:r},4)]})}var Ct=n(39),Et="sel",Mt="dnd",At="inp";function Ut(t){var e=t.currentMode,n=t.onMode,r=null;switch(e){case j:r=Object(k.jsx)("button",{name:"check",onClick:function(){return n(f)},children:"check"});break;case f:r=Object(k.jsxs)("ul",{className:"btns",children:[Object(k.jsx)("li",{children:Object(k.jsx)("button",{name:"reset",onClick:function(){return n(j)},children:"reset"})},0),Object(k.jsx)("li",{children:Object(k.jsx)("button",{name:"solution",onClick:function(){return n(g)},children:"solution"})},1)]});break;case g:r=Object(k.jsx)("button",{name:"reset",onClick:function(){return n(j)},children:"reset"})}return r}function Ft(t){var e,n=t.type,a=t.data,i=Object(r.useState)(j),s=Object(o.a)(i,2),c=s[0],d=s[1],u=Object(r.useState)([5,10]),l=Object(o.a)(u,2),p=Object(o.a)(l[0],2),h=p[0],b=p[1],f=l[1];switch(n){case Et:e=Object(k.jsx)(S,{data:a.lines,mode:c,onStar:f});break;case Mt:e=Object(k.jsx)(et,{data:a.lines,mode:c,onStar:f});break;case At:e=Object(k.jsx)(It,{data:a.lines,mode:c,onStar:f});break;default:e=null}return Object(k.jsxs)("div",{className:"task",style:{position:"relative"},children:[Object(k.jsx)("h2",{children:a.name}),a.img&&Object(k.jsx)("img",{src:a.img,alt:"optional picture"}),Object(k.jsx)("p",{children:a.task}),e,Object(k.jsx)(Ut,{currentMode:c,onMode:d}),c!==j&&Object(k.jsx)(_,{fillStar:h,countStar:b})]})}var Lt=function(){return Object(k.jsxs)("div",{children:[Object(k.jsx)("header",{children:Object(k.jsxs)("h1",{children:["Test",Object(k.jsx)("span",{children:"English"})]})}),Object(k.jsx)(Ft,{type:Et,data:z}),Object(k.jsx)(Ft,{type:Mt,data:jt}),Object(k.jsx)(Ft,{type:At,data:Ct})]})};s.a.render(Object(k.jsx)(Lt,{}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.b51f0b26.chunk.js.map