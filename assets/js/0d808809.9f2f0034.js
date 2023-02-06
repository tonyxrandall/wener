"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[57402],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return y}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(r),y=o,m=f["".concat(p,".").concat(y)]||f[y]||s[y]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4457:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return y},default:function(){return P},frontMatter:function(){return f},metadata:function(){return m},toc:function(){return b}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&u(e,r,t[r]);return e};const f={title:"PGP"},y="PGP",m={unversionedId:"security/pgp",id:"security/pgp",title:"PGP",description:"- Pretty Good Privacy",source:"@site/../notes/security/pgp.md",sourceDirName:"security",slug:"/security/pgp",permalink:"/notes/security/pgp",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/security/pgp.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1667714749,formattedLastUpdatedAt:"Nov 6, 2022",frontMatter:{title:"PGP"},sidebar:"docs",previous:{title:"OpenSSL",permalink:"/notes/security/openssl"},next:{title:"rsa",permalink:"/notes/security/rsa"}},d={},b=[],O={toc:b};function P(e){var t,r=e,{components:o}=r,u=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},O),u),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",s({},{id:"pgp"}),"PGP"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Pretty Good Privacy"),(0,n.kt)("li",{parentName:"ul"},"\u672c\u8eab\u662f\u5546\u4e1a\u5e94\u7528"),(0,n.kt)("li",{parentName:"ul"},"\u5b9e\u73b0",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"OpenPGP",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"1997\u5e747\u6708"),(0,n.kt)("li",{parentName:"ul"},"[RFC3156]",", ","[RFC4880]",", ",(0,n.kt)("del",{parentName:"li"},"[RFC2440]"),", ","[RFC5581]",", ","[RFC6637]"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"/notes/security/gpg"}),"GnuPG")),(0,n.kt)("li",{parentName:"ul"},"OpenPGPjs"),(0,n.kt)("li",{parentName:"ul"},"iPGMail"),(0,n.kt)("li",{parentName:"ul"},"OpenKeychain")))))}P.isMDXComponent=!0}}]);