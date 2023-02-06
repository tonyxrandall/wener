"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[16570],{49613:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),f=o,y=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(y,a(a({ref:t},l),{},{components:r})):n.createElement(y,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},82018:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return f},default:function(){return b},frontMatter:function(){return p},metadata:function(){return y},toc:function(){return v}});var n=r(49613),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,l=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&l(e,r,t[r]);if(c)for(var r of c(t))u.call(t,r)&&l(e,r,t[r]);return e};const p={title:"Minio FAQ",tags:["FAQ"]},f="Minio FAQ",y={unversionedId:"service/storage/minio/minio-faq",id:"service/storage/minio/minio-faq",title:"Minio FAQ",description:"The Access Key Id you provided does not exist in our records.",source:"@site/../notes/service/storage/minio/minio-faq.md",sourceDirName:"service/storage/minio",slug:"/service/storage/minio/faq",permalink:"/notes/service/storage/minio/faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/storage/minio/minio-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1675652392,formattedLastUpdatedAt:"Feb 6, 2023",frontMatter:{title:"Minio FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"Minio ACL",permalink:"/notes/service/storage/minio/acl"},next:{title:"MinIO Inside",permalink:"/notes/service/storage/minio/inside"}},m={},v=[{value:"The Access Key Id you provided does not exist in our records.",id:"the-access-key-id-you-provided-does-not-exist-in-our-records",level:2},{value:"The request signature we calculated does not match the signature you provided. Check your key and signing method.",id:"the-request-signature-we-calculated-does-not-match-the-signature-you-provided-check-your-key-and-signing-method",level:2}],g={toc:v};function b(e){var t,r=e,{components:o}=r,l=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=d(d({},g),l),i(t,a({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",d({},{id:"minio-faq"}),"Minio FAQ"),(0,n.kt)("h2",d({},{id:"the-access-key-id-you-provided-does-not-exist-in-our-records"}),"The Access Key Id you provided does not exist in our records."),(0,n.kt)("p",null,"\u786e\u8ba4 accessKeyId \u662f\u5426\u6b63\u786e"),(0,n.kt)("h2",d({},{id:"the-request-signature-we-calculated-does-not-match-the-signature-you-provided-check-your-key-and-signing-method"}),"The request signature we calculated does not match the signature you provided. Check your key and signing method."),(0,n.kt)("p",null,"\u786e\u8ba4 secretAccessKey \u662f\u5426\u6b63\u786e"))}b.isMDXComponent=!0}}]);