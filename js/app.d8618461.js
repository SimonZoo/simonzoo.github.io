(function(t){function e(e){for(var i,r,o=e[0],l=e[1],c=e[2],u=0,_=[];u<o.length;u++)r=o[u],s[r]&&_.push(s[r][0]),s[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);v&&v(e);while(_.length)_.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,o=1;o<n.length;o++){var l=n[o];0!==s[l]&&(i=!1)}i&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},s={app:0},a=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var v=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("64a9"),s=n.n(i);s.a},"122a":function(t,e,n){"use strict";var i=n("5aee"),s=n.n(i);s.a},"1dd0":function(t,e,n){},"2c8b":function(t,e,n){},"36f3":function(t,e,n){},"3a27":function(t,e,n){},"3a45":function(t,e,n){"use strict";var i=n("c44c"),s=n.n(i);s.a},"3cb4":function(t,e,n){"use strict";var i=n("da9b"),s=n.n(i);s.a},"4fd2":function(t,e,n){"use strict";var i=n("2c8b"),s=n.n(i);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Nav"),n("router-view")],1)},a=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{staticClass:"nav"},[n("router-link",{staticClass:"link",attrs:{to:"/demo",id:"demo"}},[t._v("Demo")]),n("router-link",{staticClass:"link",attrs:{to:"/notes",id:"notes"}},[t._v("Notes")]),n("router-link",{staticClass:"link",attrs:{to:"/",id:"about"}},[t._v("About Me")])],1)])},o=[],l=(n("28a5"),{name:"Nav",watch:{$route:function(){for(var t=this.$route.path.split("/")[1],e=document.getElementsByClassName("link"),n=0;n<e.length;n++)e[n].setAttribute("style","border: none;");document.getElementById(t).setAttribute("style"," border-bottom: 2px solid green;")}}}),c=l,v=(n("5b49"),n("2877")),u=Object(v["a"])(c,r,o,!1,null,null,null),_=u.exports,d={name:"app",components:{Nav:_}},f=d,p=(n("034f"),Object(v["a"])(f,s,a,!1,null,null,null)),h=p.exports,m=n("8c4f"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"left"}},[n("router-link",{staticClass:"list",attrs:{to:"/notes/optimization"}},[t._v("CSS优化")]),n("router-link",{staticClass:"list",attrs:{to:"/notes/eventloop"}},[t._v("异步和事件循环")]),n("router-link",{staticClass:"list",attrs:{to:"/notes/closure"}},[t._v("变量和闭包")]),n("router-link",{staticClass:"list",attrs:{to:"/notes/prototype"}},[t._v("原型和this")]),n("router-link",{staticClass:"list",attrs:{to:"/notes/toolfunction"}},[t._v("工具函数")])],1),n("div",{attrs:{id:"content"}},[n("router-view")],1)])},g=[],C={name:"Notes"},x=C,w=(n("c7d4"),Object(v["a"])(x,b,g,!1,null,"5771de2a",null)),y=w.exports,E=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("h3",[t._v("变量作用域")]),n("ul",[n("li",[t._v("全局变量：在全局环境中用 var 关键字声明。如果不带 var，隐式声明默认是一个全局变量。")]),n("li",[t._v("函数作用域内变量：局部变量，外部无法访问，可以通过"),n("strong",[t._v("闭包")]),t._v("获得。")]),n("li",[t._v("立即执行函数内变量：函数作用域。")]),n("li",[t._v("ES6后使用 let 关键字形成块级作用域，在最近的{}范围内部。")])])]),n("h3",[t._v("变量提升 Hoisting ")]),n("ul",[n("li",[t._v("JavaScript 会提升变量，将 var 声明提到最前端，但不会赋值。")]),n("li",[t._v("函数也有这种待遇，且函数会被赋值。")]),n("li",[t._v("如果函数声明与函数表达式同时出现，"),n("strong",[t._v("函数声明")]),t._v("优先于表达式。"),n("a",{attrs:{href:"https://www.cnblogs.com/liuhe688/p/5891273.html"}},[t._v("具体例子可参考这里。")])])]),n("div",{staticClass:"code"},[n("code",[t._v("\n        function a (){\n            console.log(b)\n            var b = 1\n            function b() {console.log(2)}\n\n        }\n        a() // b() {console.log(2)}\n        ")])]),n("p",[t._v("等同于：")]),n("div",{staticClass:"code"},[n("code",[t._v("\n        function a (){\n            var b\n            function b() {console.log(2)}\n            console.log(b)\n            b = 1\n        }\n        a() // b() {console.log(2)}\n        ")])]),n("h3",[t._v("闭包")]),n("p",[t._v("可以访问到某函数内部变量的函数。")]),n("div",{staticClass:"code"},[n("code",[t._v("\n        function f1() {\n            var a = 1\n            function f2() {\n                return a\n            }\n            return f2\n        }\n        var t = f1()\n        t() //  1\n        ")])]),n("h3",[t._v("执行上下文")]),n("p",[n("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog/issues/8"}},[t._v("参考代码和详解")])]),n("p",[t._v("执行上下文可以解释如何通过闭包访问函数内部变量。")]),n("p",[t._v("运行代码时会根据作用域创建不同的执行上下文，也就是目前代码所处的一种"),n("strong",[t._v("环境")]),t._v("。执行上下文会被保存在栈中。")]),n("div",{staticClass:"code"},[n("code",[t._v('\n        var scope = "global scope";\n        function checkscope(){\n            var scope = "local scope";\n            function f(){\n                return scope;\n            }\n            return f();\n        }\n        checkscope();\n        ')])]),n("p",[t._v("例如以上代码中存在\n        "),n("strong",[t._v("全局")]),t._v("、\n        "),n("strong",[t._v("checkscope")]),t._v("、\n        "),n("strong",[t._v("f")]),t._v("三个不同的执行上下文。\n    ")]),n("p",[t._v("一个在全局中定义的函数，在函数初始化的时候会将全局执行上下文（也就是上一层环境）放到 [[scope]] 这个属性中。")]),n("p",[t._v("之后函数的执行上下文初始化做这四件事：")]),n("ul",[n("li",[t._v("复制函数 [[scope]] 属性创建作用域链")]),n("li",[t._v("用 arguments 创建活动对象")]),n("li",[t._v("初始化活动对象，即加入形参、函数声明、变量声明")]),n("li",[t._v("将活动对象压入 checkscope 作用域链顶端")])]),n("p",[t._v("调用 f() 函数时，未能找到变量，则通过作用域链到上一级的执行上下文中去寻找变量。")])])}],S={},$=S,j=(n("3a45"),Object(v["a"])($,E,k,!1,null,"aafd59e2",null)),O=j.exports,R=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},B=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v("对象")]),n("ul",[n("li",[t._v("普通对象")]),n("li",[t._v("函数对象：通过 new Funciton 创建, var F = new Funciton()")])]),n("h3",[t._v("prototype")]),n("ul",[n("li",[t._v("只有"),n("strong",[t._v("函数对象")]),t._v("才有的属性")]),n("li",[t._v("函数对象的 Prototype 指向其原型对象，其原型对象是一个普通函数")]),n("li",[t._v("原型对象的 constructor 仍指向该函数：F.prototype.constructor === F //true")]),n("li",[t._v("将该函数作为原型可创造实例")])]),n("h3",[t._v("__proto__")]),n("ul",[n("li",[t._v("每个对象都有该属性")]),n("li",[t._v("某个实例的__proto__指向其构造函数的原型对象")]),n("li",[t._v("实例 var f1 = new F()")]),n("li",[t._v("f1.__proto__ === F.prototype //true")])]),n("h3",[t._v("JS中的 this 指向")]),n("p",[t._v("和往常文章不同的一个学习思路，"),n("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog/issues/7"}},[t._v("参考链接这里，一定要看，很酷。")])]),n("p",[t._v("一般常见的 this 指向大概是这样的：")]),n("div",{staticClass:"code"},[n("code",[t._v("\n        var a = 2\n        var o = {\n            a: 1,\n            b: function() {\n                console.log(this.a)\n            } \n        }\n        o.b() // 1 this指向的是这个对象\n        \n        var ob = o.b\n        ob() // 2 this指向全局\n        ")])]),n("p",[t._v("上面的参考链接从语言规范的角度来描述 this 是怎么工作，首先明确这样几个概念。")]),n("ul",[n("li",[t._v("同时引入"),n("strong",[t._v(" MemberExpression ")]),t._v("这个概念，简单来说就是括号的左边部分。")]),n("li",[n("strong",[t._v("Reference")]),t._v(" 类型，存在于规范中的抽象概念，目的是帮助更好理解 JS 的各类机制，在实际代码开发中不会用到它。")]),n("li",[t._v("Reference 类型中有三个值，"),n("strong",[t._v("1：base value；2：referenced name；3：strict reference")]),t._v("。")]),n("li",[t._v("base 的值可以理解为当前的变量存在于何处，一般存在于对象中或者是 Environment Record 里，后者可以理解为是储存数据的一个环境。\n            根据规范，base value 的值一定在 undefined, an Object, a Boolean, a String, a Symbol, a Number, or an Environment Record 中。")]),n("li",[t._v("name 的值就是变量的名称，是字符串类型。")]),n("li",[t._v("string 的值是布尔，应该对应是否开启严格模式。")]),n("li",[t._v("Reference 类型提供"),n("strong",[t._v(" GetBase ")]),t._v("方法来获取 Reference 的 base 值。")]),n("li",[n("strong",[t._v(" IsPropertyReference ")]),t._v(" 方法判断 base 值是否为一个对象。")])]),n("div",{staticClass:"code"},[n("code",[t._v("\n        //举例\n        foo（） // MemberExpression -> foo。\n\n        var o = { a: 1 }\n        var a_reference = {\n            base: o,\n            name: 'a',\n            strict: false\n        }\n        ")])]),n("p",[t._v("this 判断指向的流程如下：")]),n("ol",[n("li",[t._v("计算 MemberExpression 的值给 ref")]),n("li",[t._v("判断 ref 是否为 Reference 类型\n            "),n("ol",[n("li",{staticClass:"sub-ol"},[t._v("如果 ref 是 Reference 类型，且 IsPropertyReference(ref) 返回 true，即 base 是一个对象，则 this = GetBase（ref）")]),n("li",{staticClass:"sub-ol"},[t._v("如果 ref 是 Reference 类型，且 IsPropertyReference(ref) 返回 falze，即 base 不是一个对象，则 this = "),n("strong",[t._v("ImplicitThisValue(ref)")]),t._v("，该函数始终返回 undefined")])])]),n("li",[t._v("如果 ref 不是 Reference 类型，则 this = undefined，非严格模式下指向全局")])]),n("p",[t._v("上述流程还存在的一个问题："),n("strong",[t._v("如何判断 MemberExpression 返回的值是否为 Reference 类型。")])]),n("p",[t._v("不同的操作，如赋值、逻辑运算，查找规范中的详细描述，运算步骤出现为"),n("strong",[t._v(" return a value of type Reference")]),t._v(" 或者是"),n("strong",[t._v(" let rval be GetValue(rref) 。")]),t._v("前者返回的就是 Reference 类型，后者因为用了 GetValue 方法，返回值，不是 Reference。")]),n("p",[t._v("上文给出链接中有更详细的例子。")])])}],N={},M=N,F=(n("eaa2"),Object(v["a"])(M,R,B,!1,null,"417438ee",null)),P=F.exports,T=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},I=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("h3",[t._v("事件")]),n("p",[t._v("事件可以分为"),n("strong",[t._v("同步事件")]),t._v("和"),n("strong",[t._v("异步事件")]),t._v("。同步即按照顺序执行，谁先来谁先运行；异步则要等前置任务完全后再执行。")]),n("h3",[t._v("执行栈与消息队列")]),n("ul",[n("li",[t._v("同步事件依次进入执行栈执行")]),n("li",[t._v("异步事件的回调结果进入消息队列中，当前执行栈为空时再将消息队列中的事件放入执行栈执行")]),n("li",[t._v("以上步骤循环的过程即事件循环")])]),n("h3",[t._v("异步事件")]),n("p",[t._v("消息队列中的任务还可以分为宏任务和微任务，同一次事件循环中，微任务执行总是先于宏任务")]),n("h4",[t._v("宏任务（Macro Task）")]),n("ul",[n("li",[t._v("setInterval()")]),n("li",[t._v("setTimeout()")])]),n("h4",[t._v("微任务（Micro Task）")]),n("ul",[n("li",[t._v("new Promise()")])])])])}],L={},A=L,J=Object(v["a"])(A,T,I,!1,null,"85b82150",null),G=J.exports,z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},q=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span"),n("h3",[t._v("防抖函数 debounce")]),n("p",[t._v("多次触发事件，但只需要执行一次，可用于防止多次提交重复表单")]),n("p",[t._v("代码参考"),n("a",{attrs:{href:"https://rockjins.js.org/2017/02/21/2017-02-21-debounce-function/"}},[t._v("Rockjins Blog")])]),n("div",{staticClass:"code"},[n("code",[t._v("\n        function debounce(fn, interval, immediate) {\n            //fn为要执行的函数\n            //interval为等待的时间\n            //immediate判断是否立即执行\n            var timeout;  //定时器\n            return function() { //返回一个闭包\n                var context = this, args = arguments; //先把变量缓存\n                var later = function() {  //把稍后要执行的代码封装起来\n                timeout = null; //成功调用后清除定时器\n                if(!immediate) fn.apply(context, args); //不立即执行时才可以调用\n                };\n                var callNow = immediate && !timeout;  //判断是否立即调用，并且如果定时器存在，则不立即调用\n                clearTimeout(timeout);  //不管什么情况，先清除定时器，这是最稳妥的\n                timeout = setTimeout(later, interval);  //延迟执行\n                if(callNow) fn.apply(context, args);  //如果是第一次触发，并且immediate为true，则立即执行\n            };\n            };\n            //使用\n            var myEfficientFn = debounce(function() {\n            //你要做的事\n            }, 250);\n            window.addEventListener('resize', myEfficientFn);\n    ")])])])}],H={},V=H,D=(n("f61b"),Object(v["a"])(V,z,q,!1,null,"fb678ee2",null)),Q=D.exports,W=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},X=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"list"},[n("span"),n("h3",[t._v("#内联CSS")]),n("h4",[t._v("原理")]),n("p",[t._v("相较于link引入CSS文件，内联CSS下载更快。页面渲染时间提前。")]),n("h4",[t._v("缺陷")]),n("p",[t._v("内联CSS文件由于拥塞机制不可过大。")])]),n("div",{staticClass:"list"},[n("span"),n("h3",[t._v("#文件压缩")]),n("h4",[t._v("工具")]),n("p",[t._v("Webpack、Grunt等工具提供压缩功能。")])]),n("div",{staticClass:"list"},[n("span"),n("h3",[t._v("#减少重排、重绘")]),n("h4",[t._v("重排")]),n("p",[t._v("重排即重新计算渲染文档，避免频繁出发此类操作。\n            "),n("a",{attrs:{href:"https://csstriggers.com/font-family",target:"_blank"}},[t._v("CSS Triggers")]),t._v("\n            可以查询重排重绘属性。    \n        ")]),n("h4",[t._v("重绘")]),n("p",[t._v("元素样式改变带来的改变。")])])])}],Z={},K=Z,U=(n("122a"),Object(v["a"])(K,W,X,!1,null,"5ba9bab2",null)),Y=U.exports,tt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},et=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"info"},[n("h3",[t._v("Info")]),n("p",[t._v("求职中 | Base北京")]),n("p",[t._v("2019应届 | 本科 | 计算机科学与技术专业")]),n("a",{attrs:{href:"https://github.com/SimonZoo"}},[t._v("GitHub链接")]),n("h3",[t._v("Skill")]),n("h4",[t._v("FrontEnd")]),n("ul",[n("li",[t._v("熟悉CSS/HTML/JavaScript，了解CSS3/HTML5")]),n("li",[t._v("jQuery/AJAX/Bootstrap实际开发经验")]),n("li",[t._v("Node/Vue项目开发经验")])]),n("h4",[t._v("BackEnd")]),n("ul",[n("li",[t._v("Python Django后端实际开发经验")]),n("li",[t._v("前后端分离项目经验")])])])}],nt={name:"About"},it=nt,st=(n("f923"),Object(v["a"])(it,tt,et,!1,null,"51d21cce",null)),at=st.exports,rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"left"}},[n("router-link",{staticClass:"list",attrs:{to:"/demo/layout",id:"css"}},[t._v("布局")]),n("router-link",{staticClass:"list",attrs:{to:"/demo/animation",id:"list-three"}},[t._v("动画")])],1),n("div",{attrs:{id:"right"}},[n("router-view")],1)])},ot=[],lt={name:"Demo",methods:{}},ct=lt,vt=(n("8dfe"),Object(v["a"])(ct,rt,ot,!1,null,"89667464",null)),ut=vt.exports,_t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("select",{attrs:{name:"",id:"select"},on:{change:t.changeOption}},[n("option",{attrs:{value:"cup"}},[t._v("圣杯三列")]),n("option",{attrs:{value:"three"}},[t._v("Flex三列")]),n("option",{attrs:{value:"nine"}},[t._v("Flex九格")])]),n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:this.cup,expression:"this.cup"}],attrs:{id:"cup"}},[t._m(0),t._m(1),t._m(2)]),n("div",{directives:[{name:"show",rawName:"v-show",value:this.three,expression:"this.three"}],attrs:{id:"three"}},[n("div",{attrs:{id:"a"}}),n("div",{attrs:{id:"b"}}),n("div",{attrs:{id:"c"}})]),n("div",{directives:[{name:"show",rawName:"v-show",value:this.nine,expression:"this.nine"}],attrs:{id:"nine"}},[t._m(3),t._m(4),t._m(5)])])])},dt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"center"}},[n("p",[t._v("父元素")]),n("p",[t._v("box-sizing: border-box;")]),n("p",[t._v("padding: 0 200px 0 200px;")]),n("p",[t._v("padding 腾出位置")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"cup-left"}},[n("p",[t._v("margin-left: -100%;")]),n("p",[t._v("//左边部分向上推")]),n("p",[t._v(" width: 200px;")]),n("p",[t._v("float: left;")]),n("p",[t._v("left: -200px; ")]),n("p",[t._v("// 到center的左边")]),n("p",[t._v("position: relative;")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"cup-right"}},[n("p",[t._v("position: relative;")]),n("p",[t._v("left: 200px;")]),n("p",[t._v("width: 180px;")]),n("p",[t._v("margin-left: -200px; ")]),n("p",[t._v(" //右边部分上移")]),n("p",[t._v("float: left;")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"item"},[n("p",[t._v("父元素")]),n("p",[t._v("display: flex;")]),n("p",[t._v("flex-direction: column;")])]),n("div",{staticClass:"item"},[n("p",[t._v("行元素")]),n("p",[t._v("display: flex;")]),n("p",[t._v("flex: 1;")])]),n("div",{staticClass:"item"},[n("p",[t._v("行内项目元素")]),n("p",[t._v("flex: 1")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"item"}),n("div",{staticClass:"item"}),n("div",{staticClass:"item"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"item"}),n("div",{staticClass:"item"}),n("div",{staticClass:"item"})])}],ft={name:"Layout",data:function(){return{cup:!0,three:!1,nine:!1}},methods:{clear:function(){this.cup=!1,this.three=!1,this.nine=!1},changeOption:function(){var t=document.getElementById("select"),e=t.selectedIndex,n=t.options[e].value;this.clear(),"cup"==n?this.cup=!0:"three"==n?this.three=!0:"nine"==n&&(this.nine=!0)}}},pt=ft,ht=(n("4fd2"),Object(v["a"])(pt,_t,dt,!1,null,"322a5a98",null)),mt=ht.exports,bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:""}},[n("div",[n("select",{attrs:{name:"",id:"select"},on:{change:t.changeOption}},[n("option",{attrs:{value:"transition"}},[t._v("过渡 transition")]),n("option",{attrs:{value:"loading"}},[t._v("加载 loading")])])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.transition,expression:"transition"}],attrs:{id:"transition"}},[t._m(0),n("div",[n("h4",[t._v("手风琴效果")]),n("ul",{attrs:{id:"list"}},t._l(t.lists,function(e){return n("li",{key:e.id,staticClass:"list-item",on:{click:t.changeList}},[t._v(t._s(e.index))])}),0)])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{id:"loading"}},[t._m(1)])])},gt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h4",[t._v("按钮")]),n("button",[t._v("Button")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h4",[t._v("Loading A")]),n("div",{staticClass:"parant"},[n("div",{staticClass:"loading-one"})]),n("div",{staticClass:"parant"},[n("div",{staticClass:"loading-two"})]),n("div",{staticClass:"parant"},[n("div",{staticClass:"loading-three"})]),n("h4",[t._v("Loading B")]),n("div",{staticClass:"loading-four"},[n("div",{staticClass:"dot-one"}),n("div",{staticClass:"dot-two"}),n("div",{staticClass:"dot-three"}),n("div",{staticClass:"dot-four"})]),n("div",{staticClass:"loading-five"},[n("div",{staticClass:"white-circle"})])])}],Ct={name:"Animation",data:function(){return{transition:!0,loading:!1,lists:[{index:""},{index:""},{index:""}]}},methods:{clear:function(){this.transition=!1,this.loading=!1},changeOption:function(){var t=document.getElementById("select"),e=t.selectedIndex,n=t.options[e].value;this.clear(),"transition"==n?this.transition=!0:"loading"==n&&(this.loading=!0)},changeList:function(t){for(var e=document.getElementsByClassName("list-item"),n=0;n<e.length;n++)e[n].classList.remove("li-hover");t.target.classList.add("class","li-hover")}}},xt=Ct,wt=(n("3cb4"),Object(v["a"])(xt,bt,gt,!1,null,"5d203f96",null)),yt=wt.exports;i["a"].use(m["a"]),i["a"].config.productionTip=!1;var Et=[{path:"/",redirect:"/about"},{path:"/notes",redirect:"notes/closure"},{path:"/demo",redirect:"demo/animation"},{path:"/about",component:at},{path:"/demo",component:ut,children:[{path:"layout",component:mt},{path:"animation",component:yt}]},{path:"/notes",component:y,children:[{path:"closure",component:O},{path:"prototype",component:P},{path:"eventloop",component:G},{path:"toolfunction",component:Q},{path:"optimization",component:Y}]}],kt=new m["a"]({routes:Et});new i["a"]({render:function(t){return t(h)},router:kt}).$mount("#app")},"5aee":function(t,e,n){},"5b49":function(t,e,n){"use strict";var i=n("5d26"),s=n.n(i);s.a},"5d26":function(t,e,n){},"64a9":function(t,e,n){},"8dfe":function(t,e,n){"use strict";var i=n("c421"),s=n.n(i);s.a},b045:function(t,e,n){},c421:function(t,e,n){},c44c:function(t,e,n){},c7d4:function(t,e,n){"use strict";var i=n("b045"),s=n.n(i);s.a},da9b:function(t,e,n){},eaa2:function(t,e,n){"use strict";var i=n("1dd0"),s=n.n(i);s.a},f61b:function(t,e,n){"use strict";var i=n("3a27"),s=n.n(i);s.a},f923:function(t,e,n){"use strict";var i=n("36f3"),s=n.n(i);s.a}});
//# sourceMappingURL=app.d8618461.js.map