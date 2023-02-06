"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[47089],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return b}});var n=r(59496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(r),b=i,m=f["".concat(c,".").concat(b)]||f[b]||p[b]||a;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},94744:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return b},default:function(){return O},frontMatter:function(){return f},metadata:function(){return m},toc:function(){return v}});var n=r(49613),i=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))s.call(t,r)&&u(e,r,t[r]);return e};const f={title:"\u53ef\u89c2\u5bdf\u6027"},b="Observability",m={unversionedId:"service/observability/README",id:"service/observability/README",title:"\u53ef\u89c2\u5bdf\u6027",description:"- Logging - \u65e5\u5fd7",source:"@site/../notes/service/observability/README.md",sourceDirName:"service/observability",slug:"/service/observability/",permalink:"/notes/service/observability/",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/observability/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1641638108,formattedLastUpdatedAt:"Jan 8, 2022",frontMatter:{title:"\u53ef\u89c2\u5bdf\u6027"},sidebar:"docs",previous:{title:"Notion",permalink:"/notes/service/notion"},next:{title:"alertmanager",permalink:"/notes/service/observability/alertmanager"}},y={},v=[],d={toc:v};function O(e){var t,r=e,{components:i}=r,u=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},d),u),a(t,o({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("h1",p({},{id:"observability"}),"Observability"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Logging - \u65e5\u5fd7",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6"),(0,n.kt)("li",{parentName:"ul"},"\u6587\u672c"),(0,n.kt)("li",{parentName:"ul"},"\u7ed3\u6784\u5316"),(0,n.kt)("li",{parentName:"ul"},"\u4e8c\u8fdb\u5236"))),(0,n.kt)("li",{parentName:"ul"},"Metrics - \u6307\u6807"),(0,n.kt)("li",{parentName:"ul"},"Tracing - \u8ddf\u8e2a"),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://www.oreilly.com/library/view/distributed-systems-observability/9781492033431/ch04.html"}),"The Three Pillars of Observability"))))))}O.isMDXComponent=!0}}]);