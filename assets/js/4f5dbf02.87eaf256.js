"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[62861],{49613:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return g}});var r=a(59496);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(a),g=l,f=c["".concat(o,".").concat(g)]||c[g]||s[g]||n;return a?r.createElement(f,u(u({ref:t},m),{},{components:a})):r.createElement(f,u({ref:t},m))}));function g(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,u=new Array(n);u[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,u[1]=i;for(var p=2;p<n;p++)u[p]=a[p];return r.createElement.apply(null,u)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},38249:function(e,t,a){a.r(t),a.d(t,{assets:function(){return k},contentTitle:function(){return g},default:function(){return d},frontMatter:function(){return c},metadata:function(){return f},toc:function(){return h}});var r=a(49613),l=Object.defineProperty,n=Object.defineProperties,u=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,s=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&m(e,a,t[a]);if(i)for(var a of i(t))p.call(t,a)&&m(e,a,t[a]);return e};const c={title:"Lua Awesome",tags:["Awesome"]},g="Lua Awesome",f={unversionedId:"languages/lua/lua-awesome",id:"languages/lua/lua-awesome",title:"Lua Awesome",description:"- \u53c2\u8003",source:"@site/../notes/languages/lua/lua-awesome.md",sourceDirName:"languages/lua",slug:"/languages/lua/awesome",permalink:"/notes/languages/lua/awesome",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/languages/lua/lua-awesome.md",tags:[{label:"Awesome",permalink:"/notes/tags/awesome"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1638548289,formattedLastUpdatedAt:"Dec 3, 2021",frontMatter:{title:"Lua Awesome",tags:["Awesome"]},sidebar:"docs",previous:{title:"Lua",permalink:"/notes/languages/lua/"},next:{title:"Lua \u7248\u672c",permalink:"/notes/languages/lua/version"}},k={},h=[{value:"Runtime",id:"runtime",level:2},{value:"Lua VM Internal",id:"lua-vm-internal",level:2},{value:"Run In Other Language",id:"run-in-other-language",level:2},{value:"Language",id:"language",level:2},{value:"stdlib",id:"stdlib",level:2},{value:"Library",id:"library",level:2},{value:"\u5b66\u4e60",id:"\u5b66\u4e60",level:2}],b={toc:h};function d(e){var t,a=e,{components:l}=a,m=((e,t)=>{var a={};for(var r in e)o.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=s(s({},b),m),n(t,u({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("h1",s({},{id:"lua-awesome"}),"Lua Awesome"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/MegaBedder/my-awesome-lua"}),"MegaBedder/my-awesome-lua"))))),(0,r.kt)("h2",s({},{id:"runtime"}),"Runtime"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/LuaJIT/LuaJIT"}),"LuaJIT/LuaJIT"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Lua 5.1"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/openresty/luajit2"}),"openresty/luajit2"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"OpenResty fork LuaJIT"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/akkartik/teliva"}),"akkartik/teliva"))),(0,r.kt)("h2",s({},{id:"lua-vm-internal"}),"Lua VM Internal"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://gist.github.com/zeux/bb646a63c02ff2828117092036d2d174"}),"Lua VM FAQ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://the-ravi-programming-language.readthedocs.io/en/latest/lua_bytecode_reference.html"}),"Lua 5.3 Bytecode Reference")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://www.luac.nl/"}),"Lua Bytecode Explorer"))),(0,r.kt)("h2",s({},{id:"run-in-other-language"}),"Run In Other Language"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/Shopify/go-lua"}),"Shopify/go-lua"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Lua 5.2 VM in Go"),(0,r.kt)("li",{parentName:"ul"},"\u6267\u884c luac \u7f16\u8bd1\u7ed3\u679c"),(0,r.kt)("li",{parentName:"ul"},"fib(35) 6x \u6162\u4e8e lua, 20% \u5feb\u4e8e gopher-lua",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"tail-recursive"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/yuin/gopher-lua"}),"yuin/gopher-lua"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Lua 5.1 VM and Compiler"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/aarzilli/golua"}),"aarzilli/golua"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Go bindings for Lua C API")))),(0,r.kt)("h2",s({},{id:"language"}),"Language"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/leafo/moonscript"}),"leafo/moonscript")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/teal-language/tl"}),"teal-language/tl"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"typed dialect of Lua"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/hengestone/lua-languages"}),"hengestone/lua-languages"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Languages that compile to Lua")))),(0,r.kt)("h2",s({},{id:"stdlib"}),"stdlib"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"http://lua-users.org/wiki/OsLibraryTutorial"}),"os")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"http://lua-users.org/wiki/IoLibraryTutorial"}),"io")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"http://lua-users.org/wiki/MathLibraryTutorial"}),"math")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"http://lua-users.org/wiki/TableLibraryTutorial"}),"table")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"http://lua-users.org/wiki/StringLibraryTutorial"}),"string")),(0,r.kt)("li",{parentName:"ul"},"Lua 5.3 ",(0,r.kt)("a",s({parentName:"li"},{href:"https://www.lua.org/manual/5.3/manual.html#6"}),"stdlib"))),(0,r.kt)("h2",s({},{id:"library"}),"Library"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"http://www.inf.puc-rio.br/~roberto/lpeg/"}),"http://www.inf.puc-rio.br/~roberto/lpeg/"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"PEG for Lua")))),(0,r.kt)("h2",s({},{id:"\u5b66\u4e60"}),"\u5b66\u4e60"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://www.lua.org/pil/"}),"Programming in Lua"))))}d.isMDXComponent=!0}}]);