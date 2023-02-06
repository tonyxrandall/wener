"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[38722],{49613:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return f}});var n=r(59496);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=n.createContext({}),m=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},s=function(t){var e=m(t.components);return n.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,u=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),p=m(r),f=a,d=p["".concat(u,".").concat(f)]||p[f]||c[f]||i;return r?n.createElement(d,o(o({ref:e},s),{},{components:r})):n.createElement(d,o({ref:e},s))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var m=2;m<i;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},26528:function(t,e,r){r.r(e),r.d(e,{assets:function(){return h},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return b}});var n=r(49613),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,s=(t,e,r)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,c=(t,e)=>{for(var r in e||(e={}))u.call(e,r)&&s(t,r,e[r]);if(l)for(var r of l(e))m.call(e,r)&&s(t,r,e[r]);return t};const p={title:"multiformats",tags:["Codec"]},f="multiformats",d={unversionedId:"algorithm/multiformats",id:"algorithm/multiformats",title:"multiformats",description:"- multiformats/unsigned-varint",source:"@site/../notes/algorithm/multiformats.md",sourceDirName:"algorithm",slug:"/algorithm/multiformats",permalink:"/notes/algorithm/multiformats",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/algorithm/multiformats.md",tags:[{label:"Codec",permalink:"/notes/tags/codec"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1657531736,formattedLastUpdatedAt:"Jul 11, 2022",frontMatter:{title:"multiformats",tags:["Codec"]},sidebar:"docs",previous:{title:"stable-diffusion",permalink:"/notes/algorithm/ml/stable-diffusion-awesome"},next:{title:"\u4e2d\u6587\u5206\u8bcd",permalink:"/notes/algorithm/nlp/chinese-tokenizer"}},h={},b=[{value:"multihash",id:"multihash",level:2}],g={toc:b};function y(t){var e,r=t,{components:a}=r,s=((t,e)=>{var r={};for(var n in t)u.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&l)for(var n of l(t))e.indexOf(n)<0&&m.call(t,n)&&(r[n]=t[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(e=c(c({},g),s),i(e,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",c({},{id:"multiformats"}),"multiformats"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/multiformats/unsigned-varint"}),"multiformats/unsigned-varint"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8e Go varint, \u57fa\u4e8e PB int"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/multiformats/multicodec/blob/master/table.csv"}),"table.csv"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7f16\u7801\u5217\u8868")))),(0,n.kt)("h2",c({},{id:"multihash"}),"multihash"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/multiformats/multihash"}),"multiformats/multihash"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"hash \u7ed3\u679c\u5305\u542b\u4f7f\u7528\u7684 hash \u7b97\u6cd5")))),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{}),"<hash-func-type><digest-length><digest-value>\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"hash-func-type - uvarint"),(0,n.kt)("li",{parentName:"ul"},"digest-length - uvarint")))}y.isMDXComponent=!0}}]);