"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[32931],{49613:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=p(n),d=o,b=f["".concat(u,".").concat(d)]||f[d]||s[d]||i;return n?r.createElement(b,a(a({ref:t},l),{},{components:n})):r.createElement(b,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},88317:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return f},metadata:function(){return b},toc:function(){return g}});var r=n(49613),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,l=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&l(e,n,t[n]);if(c)for(var n of c(t))p.call(t,n)&&l(e,n,t[n]);return e};const f={title:"Nginx \u8c03\u4f18"},d="Nginx \u8c03\u4f18",b={unversionedId:"devops/web/nginx-tuning",id:"devops/web/nginx-tuning",title:"Nginx \u8c03\u4f18",description:"- Performance Tuning \u2013 Tips & Tricks",source:"@site/../notes/devops/web/nginx-tuning.md",sourceDirName:"devops/web",slug:"/devops/web/nginx-tuning",permalink:"/notes/devops/web/nginx-tuning",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/web/nginx-tuning.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1627904182,formattedLastUpdatedAt:"Aug 2, 2021",frontMatter:{title:"Nginx \u8c03\u4f18"},sidebar:"docs",previous:{title:"Nginx Modules",permalink:"/notes/devops/web/nginx-modules"},next:{title:"Nginx",permalink:"/notes/devops/web/nginx"}},m={},g=[{value:"proxy_buffer",id:"proxy_buffer",level:2}],y={toc:g};function v(e){var t,n=e,{components:o}=n,l=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=s(s({},y),l),i(t,a({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("h1",s({},{id:"nginx-\u8c03\u4f18"}),"Nginx \u8c03\u4f18"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://www.nginx.com/blog/performance-tuning-tips-tricks/"}),"Performance Tuning \u2013 Tips & Tricks")),(0,r.kt)("li",{parentName:"ul"},"listen\u200280\u2002reuseport")),(0,r.kt)("h2",s({},{id:"proxy_buffer"}),"proxy_buffer"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Disabling response buffering is necessary only for applications that need immediate access to the data stream.")))}v.isMDXComponent=!0}}]);