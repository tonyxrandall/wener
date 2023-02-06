"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[68159],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},428:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return d},default:function(){return y},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return b}});var r=n(49613),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))p.call(t,n)&&s(e,n,t[n]);return e};const m={title:"dbus"},d="dbus",f={unversionedId:"os/linux/desktop/dbus",id:"os/linux/desktop/dbus",title:"dbus",description:"- dbus",source:"@site/../notes/os/linux/desktop/dbus.md",sourceDirName:"os/linux/desktop",slug:"/os/linux/desktop/dbus",permalink:"/notes/os/linux/desktop/dbus",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/desktop/dbus.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1638525380,formattedLastUpdatedAt:"Dec 3, 2021",frontMatter:{title:"dbus"},sidebar:"docs",previous:{title:"Desktop",permalink:"/notes/os/linux/desktop/"},next:{title:"Desktop Awesome",permalink:"/notes/os/linux/desktop/awesome"}},k={},b=[{value:"Notes",id:"notes",level:2}],N={toc:b};function y(e){var t,n=e,{components:a}=n,s=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=c(c({},N),s),l(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",c({},{id:"dbus"}),"dbus"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"dbus",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"from freedesktop.org , governace RedHat"),(0,r.kt)("li",{parentName:"ul"},"\u7528\u4e8e \u63a7\u5236"),(0,r.kt)("li",{parentName:"ul"},"IPC",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Shared memory"),(0,r.kt)("li",{parentName:"ul"},"Memory-mapped file"),(0,r.kt)("li",{parentName:"ul"},"Pipe"),(0,r.kt)("li",{parentName:"ul"},"Named Pipe"),(0,r.kt)("li",{parentName:"ul"},"Socket"))),(0,r.kt)("li",{parentName:"ul"},"libdbus"),(0,r.kt)("li",{parentName:"ul"},"dbus-daemon"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://dbus.freedesktop.org/doc/dbus-specification.html"}),"dbus-specification")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://bootlin.com/pub/conferences/2016/meetup/dbus/josserand-dbus-meetup.pdf"}),"Understanding DBus"))),(0,r.kt)("h2",c({},{id:"notes"}),"Notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"System bus",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u7ef4\u5ea6"),(0,r.kt)("li",{parentName:"ul"},"\u8bbe\u5907"))),(0,r.kt)("li",{parentName:"ul"},"Session bus",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7528\u6237\u7ef4\u5ea6"),(0,r.kt)("li",{parentName:"ul"},"\u684c\u9762\u670d\u52a1"),(0,r.kt)("li",{parentName:"ul"},"\u5173\u8054 X session"))),(0,r.kt)("li",{parentName:"ul"},"\u64cd\u4f5c\u5bf9\u8c61",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Services -> Objects -> Interfaces"),(0,r.kt)("li",{parentName:"ul"},"Clients - \u6d88\u8d39\u7aef"),(0,r.kt)("li",{parentName:"ul"},"\u5e94\u7528\u5c06\u5185\u90e8 \u670d\u52a1 \u6ce8\u518c\u5230 DBus"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://dbus.freedesktop.org/doc/dbus-specification.html#message-protocol-names-bus"}),"Bus \u540d\u5b57"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},":")," \u5f00\u5934\u7684\u4e3a\u552f\u4e00\u540d\u5b57",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6570\u5b57\u5f00\u5934 - \u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"1.40")))),(0,r.kt)("li",{parentName:"ul"},"\u975e ",(0,r.kt)("inlineCode",{parentName:"li"},":")," \u5f00\u5934\u4e3a well-known bus names"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".")," \u5206\u5272\u591a\u90e8\u5206 - \u81f3\u5c11 2 \u90e8\u5206"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[A-Z][a-z][0-9]_-"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u65b0\u540d\u5b57\u4e0d\u63a8\u8350 ",(0,r.kt)("inlineCode",{parentName:"li"},"-"))))))))}y.isMDXComponent=!0}}]);