"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[15878],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(r),m=a,b=f["".concat(u,".").concat(m)]||f[m]||s[m]||i;return r?n.createElement(b,o(o({ref:t},p),{},{components:r})):n.createElement(b,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},89099:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return f},metadata:function(){return b},toc:function(){return y}});var n=r(49613),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&p(e,r,t[r]);return e};const f={title:"TiDB"},m="TiDB",b={unversionedId:"db/relational/tidb",id:"db/relational/tidb",title:"TiDB",description:"- \u4ee3\u7801\u89e3\u91ca",source:"@site/../notes/db/relational/tidb.md",sourceDirName:"db/relational",slug:"/db/relational/tidb",permalink:"/notes/db/relational/tidb",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/relational/tidb.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1649946978,formattedLastUpdatedAt:"Apr 14, 2022",frontMatter:{title:"TiDB"},sidebar:"docs",previous:{title:"SQLite",permalink:"/notes/db/relational/sqlite"},next:{title:"groonga",permalink:"/notes/db/search/groonga"}},d={},y=[],O={toc:y};function g(e){var t,r=e,{components:a}=r,p=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},O),p),i(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",s({},{id:"tidb"}),"TiDB"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://pingcap.github.io/blog/2017/01/06/about-the-tidb-source-code/"}),"\u4ee3\u7801\u89e3\u91ca")),(0,n.kt)("li",{parentName:"ul"},"SQL -> TiDB -> TiKV"),(0,n.kt)("li",{parentName:"ul"},"TiDB",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"OLAP \u4e3b\u8981 + OLAP \u6b21\u8981"),(0,n.kt)("li",{parentName:"ul"},"MySQL \u534f\u8bae\u5c42"),(0,n.kt)("li",{parentName:"ul"},"SQL \u5c42"),(0,n.kt)("li",{parentName:"ul"},"\u6267\u884c\u4f18\u5316"),(0,n.kt)("li",{parentName:"ul"},"\u62bd\u8c61\u7684\u5e95\u5c42 KV \u5b58\u50a8"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 mem,hbase,goleveldb,boltdb"),(0,n.kt)("li",{parentName:"ul"},"\u89e3\u6790\u4f7f\u7528 goyacc + golex"),(0,n.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u4e86 infoschema + perfschema"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u57fa\u672c\u7684\u5206\u5e03\u5f0f SQL, \u901a\u8fc7\u5c06\u67e5\u8be2\u5e8f\u5217\u5316\u540e\u53d1\u9001\u5230 region server"))),(0,n.kt)("li",{parentName:"ul"},"TiKV",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5206\u5e03\u5f0f KV \u5b58\u50a8"))),(0,n.kt)("li",{parentName:"ul"},"Features",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u53d8\u66f4\u901a\u77e5"),(0,n.kt)("li",{parentName:"ul"},"Stream SQL"),(0,n.kt)("li",{parentName:"ul"},"Binlog server"),(0,n.kt)("li",{parentName:"ul"},"Binlog client")))))}g.isMDXComponent=!0}}]);