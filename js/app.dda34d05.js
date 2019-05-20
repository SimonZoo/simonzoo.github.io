(function(t){function e(e){for(var i,s,o=e[0],l=e[1],c=e[2],u=0,d=[];u<o.length;u++)s=o[u],a[s]&&d.push(a[s][0]),a[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);v&&v(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(i=!1)}i&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},a={app:0},r=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var v=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("64a9"),a=n.n(i);a.a},"04a6":function(t,e,n){},"3cb4":function(t,e,n){"use strict";var i=n("da9b"),a=n.n(i);a.a},"47e9":function(t,e,n){"use strict";var i=n("d863"),a=n.n(i);a.a},"51fd":function(t,e,n){},"53a7":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Nav"),n("router-view")],1)},r=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",[n("router-link",{staticClass:"link",attrs:{to:"/demo"}},[t._v("Demo")]),n("router-link",{staticClass:"link",attrs:{to:"/notes"}},[t._v("Notes")]),n("router-link",{staticClass:"link",attrs:{to:"/",id:"about"}},[t._v("About Me")])],1)])},o=[],l=(n("28a5"),{name:"Nav",watch:{$route:function(){for(var t=this.$route.path.split("/")[1],e=document.getElementsByClassName("link"),n=0;n<e.length;n++)e[n].setAttribute("style","border: none;");document.getElementById(t).setAttribute("style"," border-bottom: 2px solid green;")}}}),c=l,v=(n("5b49"),n("2877")),u=Object(v["a"])(c,s,o,!1,null,null,null),d=u.exports,_={name:"app",components:{Nav:d}},p=_,f=(n("034f"),Object(v["a"])(p,a,r,!1,null,null,null)),h=f.exports,m=n("8c4f"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"left"}},[n("router-link",{staticClass:"list",attrs:{to:"/notes/optimization"}},[t._v("CSS优化")]),n("router-link",{staticClass:"list",attrs:{to:"/notes/eventloop"}},[t._v("事件循环")]),n("router-link",{staticClass:"list",attrs:{to:"/notes/closure"}},[t._v("闭包")]),n("router-link",{staticClass:"list",attrs:{to:"/notes/prototype"}},[t._v("原型")]),n("router-link",{staticClass:"list",attrs:{to:"/notes/toolfunction"}},[t._v("工具函数")])],1),n("div",{attrs:{id:"content"}},[n("router-view")],1)])},g=[],x={name:"Notes"},C=x,w=(n("7c03"),Object(v["a"])(C,b,g,!1,null,"4c18b9ab",null)),y=w.exports,E=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span"),n("h3",[t._v("变量作用域")]),n("ul",[n("li",[t._v("全局变量：在全局环境中用 var 关键字声明。如果不带 var，隐式声明默认是一个全局变量。")]),n("li",[t._v("函数作用域内变量：局部变量，外部无法访问，可以通过"),n("strong",[t._v("闭包")]),t._v("获得。")]),n("li",[t._v("立即执行函数内变量：函数作用域。")]),n("li",[t._v("ES6后使用 let 关键字形成块级作用域，在最近的{}范围内部。")])]),n("h3",[t._v("闭包")]),n("p",[t._v("可以访问到某函数内部变量的函数。")]),n("div",{staticClass:"code"},[n("code",[t._v("\n        function f1() {\n            var a = 1\n            function f2() {\n                return a\n            }\n            return f2\n        }\n        var t = f1()\n        t() //  1\n    ")])])])}],k={},j=k,O=(n("ed6f"),Object(v["a"])(j,E,$,!1,null,"69dae224",null)),S=O.exports,N=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},F=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v("对象")]),n("ul",[n("li",[t._v("普通对象")]),n("li",[t._v("函数对象：通过 new Funciton 创建, var F = new Funciton()")])]),n("h3",[t._v("prototype")]),n("ul",[n("li",[t._v("只有"),n("strong",[t._v("函数对象")]),t._v("才有的属性")]),n("li",[t._v("函数对象的 Prototype 指向其原型对象，其原型对象是一个普通函数")]),n("li",[t._v("原型对象的 constructor 仍指向该函数：F.prototype.constructor === F //true")]),n("li",[t._v("将该函数作为原型可创造实例")])]),n("h3",[t._v("__proto__")]),n("ul",[n("li",[t._v("每个对象都有该属性")]),n("li",[t._v("某个实例的__proto__指向其构造函数的原型对象")]),n("li",[t._v("实例 var f1 = new F()")]),n("li",[t._v("f1.__proto__ === F.prototype //true")])])])}],B={},T=B,L=Object(v["a"])(T,N,F,!1,null,"5d8e525f",null),M=L.exports,P=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},A=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span"),n("div",[n("h3",[t._v("执行栈与消息队列")]),n("ul",[n("li",[t._v("同步事件依次进入执行栈执行")]),n("li",[t._v("异步事件的回调结果进入消息队列中，当前执行栈为空时再将消息队列中的事件放入执行栈执行")]),n("li",[t._v("以上步骤循环的过程即事件循环")])]),n("h3",[t._v("异步事件")]),n("p",[t._v("消息队列中的任务可以分为宏任务和微任务，同一次事件循环中，微任务执行总是先于宏任务")]),n("h4",[t._v("宏任务（Macro Task）")]),n("ul",[n("li",[t._v("setInterval()")]),n("li",[t._v("setTimeout()")])]),n("h4",[t._v("微任务（Micro Task）")]),n("ul",[n("li",[t._v("new Promise()")])])])])}],I={},z=I,J=(n("b440"),Object(v["a"])(z,P,A,!1,null,"e02d757e",null)),D=J.exports,H=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},G=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span"),n("h4",[t._v("防抖函数 debounce")]),n("p",[t._v("多次触发事件，但只需要执行一次，可用于防止多次提交重复表单")]),n("p",[t._v("代码参考"),n("a",{attrs:{href:"https://rockjins.js.org/2017/02/21/2017-02-21-debounce-function/"}},[t._v("Rockjins Blog")])]),n("div",{staticClass:"code"},[n("code",[t._v("\n        function debounce(fn, interval, immediate) {\n            //fn为要执行的函数\n            //interval为等待的时间\n            //immediate判断是否立即执行\n            var timeout;  //定时器\n            return function() { //返回一个闭包\n                var context = this, args = arguments; //先把变量缓存\n                var later = function() {  //把稍后要执行的代码封装起来\n                timeout = null; //成功调用后清除定时器\n                if(!immediate) fn.apply(context, args); //不立即执行时才可以调用\n                };\n                var callNow = immediate && !timeout;  //判断是否立即调用，并且如果定时器存在，则不立即调用\n                clearTimeout(timeout);  //不管什么情况，先清除定时器，这是最稳妥的\n                timeout = setTimeout(later, interval);  //延迟执行\n                if(callNow) fn.apply(context, args);  //如果是第一次触发，并且immediate为true，则立即执行\n            };\n            };\n            //使用\n            var myEfficientFn = debounce(function() {\n            //你要做的事\n            }, 250);\n            window.addEventListener('resize', myEfficientFn);\n    ")])])])}],Q={},R=Q,V=(n("be23"),Object(v["a"])(R,H,G,!1,null,"15806f8d",null)),W=V.exports,X=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Z=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("span"),n("h3",[t._v("#内联CSS")]),n("h4",[t._v("原理")]),n("p",[t._v("相较于link引入CSS文件，内联CSS下载更快。页面渲染时间提前。")]),n("h4",[t._v("缺陷")]),n("p",[t._v("内联CSS文件由于拥塞机制不可过大。")])]),n("div",[n("span"),n("h3",[t._v("#文件压缩")]),n("h4",[t._v("工具")]),n("p",[t._v("Webpack、Grunt等工具提供压缩功能。")])]),n("div",[n("span"),n("h3",[t._v("#减少重排、重绘")]),n("h4",[t._v("重排")]),n("p",[t._v("重排即重新计算渲染文档，避免频繁出发此类操作。\n            "),n("a",{attrs:{href:"https://csstriggers.com/font-family",target:"_blank"}},[t._v("CSS Triggers")]),t._v("\n            可以查询重排重绘属性。    \n        ")]),n("h4",[t._v("重绘")]),n("p",[t._v("元素样式改变带来的改变。")])])])}],q={},K=q,U=(n("d4f2"),Object(v["a"])(K,X,Z,!1,null,"56d7028e",null)),Y=U.exports,tt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},et=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v("Info")]),n("p",[t._v("求职中 | Base北京")]),n("p",[t._v("2019应届 | 本科 | 计算机科学与技术专业")]),n("a",{attrs:{href:"https://github.com/SimonZoo"}},[t._v("GitHub链接")]),n("h3",[t._v("Skill")]),n("h4",[t._v("FrontEnd")]),n("ul",[n("li",[t._v("熟悉CSS/HTML/JavaScript，了解CSS3/HTML5")]),n("li",[t._v("jQuery/AJAX/Bootstrap实际开发经验")]),n("li",[t._v("Node/Vue项目开发经验")])]),n("h4",[t._v("BackEnd")]),n("ul",[n("li",[t._v("Python Django后端实际开发经验")]),n("li",[t._v("前后端分离项目经验")])])])}],nt={name:"About"},it=nt,at=(n("b21c"),Object(v["a"])(it,tt,et,!1,null,"d6025c14",null)),rt=at.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"left"}},[n("router-link",{staticClass:"list",attrs:{to:"/demo/layout",id:"css"}},[t._v("布局")]),n("router-link",{staticClass:"list",attrs:{to:"/demo/animation",id:"list-three"}},[t._v("动画")])],1),n("div",{attrs:{id:"right"}},[n("router-view")],1)])},ot=[],lt={name:"Demo",methods:{}},ct=lt,vt=(n("47e9"),Object(v["a"])(ct,st,ot,!1,null,"9466a5f8",null)),ut=vt.exports,dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("select",{attrs:{name:"",id:"select"},on:{change:t.changeOption}},[n("option",{attrs:{value:"cup"}},[t._v("圣杯三列")]),n("option",{attrs:{value:"three"}},[t._v("Flex三列")]),n("option",{attrs:{value:"nine"}},[t._v("Flex九格")])]),n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:this.cup,expression:"this.cup"}],attrs:{id:"cup"}},[t._m(0),t._m(1),t._m(2)]),n("div",{directives:[{name:"show",rawName:"v-show",value:this.three,expression:"this.three"}],attrs:{id:"three"}},[n("div",{attrs:{id:"a"}}),n("div",{attrs:{id:"b"}}),n("div",{attrs:{id:"c"}})]),n("div",{directives:[{name:"show",rawName:"v-show",value:this.nine,expression:"this.nine"}],attrs:{id:"nine"}},[t._m(3),t._m(4),t._m(5)])])])},_t=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"center"}},[n("p",[t._v("父元素")]),n("p",[t._v("box-sizing: border-box;")]),n("p",[t._v("padding: 0 200px 0 450px;")]),n("p",[t._v("padding 腾出位置")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"cup-left"}},[n("p",[t._v("margin-left: -100%;")]),n("p",[t._v("//左边部分向上推")]),n("p",[t._v(" width: 200px;")]),n("p",[t._v("float: left;")]),n("p",[t._v("left: -200px; ")]),n("p",[t._v("// 到center的左边")]),n("p",[t._v("position: relative;")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"cup-right"}},[n("p",[t._v("position: relative;")]),n("p",[t._v("left: 200px;")]),n("p",[t._v("width: 180px;")]),n("p",[t._v("margin-left: -200px; ")]),n("p",[t._v(" //右边部分上移")]),n("p",[t._v("float: left;")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"item"},[n("p",[t._v("父元素")]),n("p",[t._v("display: flex;")]),n("p",[t._v("flex-direction: column;")])]),n("div",{staticClass:"item"},[n("p",[t._v("行元素")]),n("p",[t._v("display: flex;")]),n("p",[t._v("flex: 1;")])]),n("div",{staticClass:"item"},[n("p",[t._v("行内项目元素")]),n("p",[t._v("flex: 1")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"item"}),n("div",{staticClass:"item"}),n("div",{staticClass:"item"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"item"}),n("div",{staticClass:"item"}),n("div",{staticClass:"item"})])}],pt={name:"Layout",data:function(){return{cup:!0,three:!1,nine:!1}},methods:{clear:function(){this.cup=!1,this.three=!1,this.nine=!1},changeOption:function(){var t=document.getElementById("select"),e=t.selectedIndex,n=t.options[e].value;this.clear(),"cup"==n?this.cup=!0:"three"==n?this.three=!0:"nine"==n&&(this.nine=!0)}}},ft=pt,ht=(n("a91c"),Object(v["a"])(ft,dt,_t,!1,null,"a4cdf7de",null)),mt=ht.exports,bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:""}},[n("div",[n("select",{attrs:{name:"",id:"select"},on:{change:t.changeOption}},[n("option",{attrs:{value:"transition"}},[t._v("过渡 transition")]),n("option",{attrs:{value:"loading"}},[t._v("加载 loading")])])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.transition,expression:"transition"}],attrs:{id:"transition"}},[t._m(0),n("div",[n("h4",[t._v("手风琴效果")]),n("ul",{attrs:{id:"list"}},t._l(t.lists,function(e){return n("li",{key:e.id,staticClass:"list-item",on:{click:t.changeList}},[t._v(t._s(e.index))])}),0)])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{id:"loading"}},[t._m(1)])])},gt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h4",[t._v("按钮")]),n("button",[t._v("Button")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h4",[t._v("Loading A")]),n("div",{staticClass:"parant"},[n("div",{staticClass:"loading-one"})]),n("div",{staticClass:"parant"},[n("div",{staticClass:"loading-two"})]),n("div",{staticClass:"parant"},[n("div",{staticClass:"loading-three"})]),n("h4",[t._v("Loading B")]),n("div",{staticClass:"loading-four"},[n("div",{staticClass:"dot-one"}),n("div",{staticClass:"dot-two"}),n("div",{staticClass:"dot-three"}),n("div",{staticClass:"dot-four"})]),n("div",{staticClass:"loading-five"},[n("div",{staticClass:"white-circle"})])])}],xt={name:"Animation",data:function(){return{transition:!0,loading:!1,lists:[{index:""},{index:""},{index:""}]}},methods:{clear:function(){this.transition=!1,this.loading=!1},changeOption:function(){var t=document.getElementById("select"),e=t.selectedIndex,n=t.options[e].value;this.clear(),"transition"==n?this.transition=!0:"loading"==n&&(this.loading=!0)},changeList:function(t){for(var e=document.getElementsByClassName("list-item"),n=0;n<e.length;n++)e[n].classList.remove("li-hover");t.target.classList.add("class","li-hover")}}},Ct=xt,wt=(n("3cb4"),Object(v["a"])(Ct,bt,gt,!1,null,"5d203f96",null)),yt=wt.exports;i["a"].use(m["a"]),i["a"].config.productionTip=!1;var Et=[{path:"/",redirect:"/about"},{path:"/notes",redirect:"notes/closure"},{path:"/demo",redirect:"demo/animation"},{path:"/about",component:rt},{path:"/demo",component:ut,children:[{path:"layout",component:mt},{path:"animation",component:yt}]},{path:"/notes",component:y,children:[{path:"closure",component:S},{path:"prototype",component:M},{path:"eventloop",component:D},{path:"toolfunction",component:W},{path:"optimization",component:Y}]}],$t=new m["a"]({routes:Et});new i["a"]({render:function(t){return t(h)},router:$t}).$mount("#app")},"5b49":function(t,e,n){"use strict";var i=n("5d26"),a=n.n(i);a.a},"5b66":function(t,e,n){},"5d26":function(t,e,n){},"64a9":function(t,e,n){},"7c03":function(t,e,n){"use strict";var i=n("04a6"),a=n.n(i);a.a},"8b33":function(t,e,n){},9127:function(t,e,n){},a91c:function(t,e,n){"use strict";var i=n("9127"),a=n.n(i);a.a},b21c:function(t,e,n){"use strict";var i=n("fce4"),a=n.n(i);a.a},b440:function(t,e,n){"use strict";var i=n("5b66"),a=n.n(i);a.a},be23:function(t,e,n){"use strict";var i=n("51fd"),a=n.n(i);a.a},d4f2:function(t,e,n){"use strict";var i=n("53a7"),a=n.n(i);a.a},d863:function(t,e,n){},da9b:function(t,e,n){},ed6f:function(t,e,n){"use strict";var i=n("8b33"),a=n.n(i);a.a},fce4:function(t,e,n){}});
//# sourceMappingURL=app.dda34d05.js.map