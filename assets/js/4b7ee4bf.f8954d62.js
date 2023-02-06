"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[91285],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(r),f=o,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},94563:function(e,t,r){r.r(t),r.d(t,{assets:function(){return w},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return b}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&s(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&s(e,r,t[r]);return e};const m={title:"temporalite"},f="temporalite",d={unversionedId:"service/workflow/temporalite",id:"service/workflow/temporalite",title:"temporalite",description:"- temporalio/temporalite",source:"@site/../notes/service/workflow/temporalite.md",sourceDirName:"service/workflow",slug:"/service/workflow/temporalite",permalink:"/notes/service/workflow/temporalite",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/workflow/temporalite.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1668620824,formattedLastUpdatedAt:"Nov 16, 2022",frontMatter:{title:"temporalite"},sidebar:"docs",previous:{title:"temporal",permalink:"/notes/service/workflow/temporal"},next:{title:"Workflow Awesome",permalink:"/notes/service/workflow/awesome"}},w={},b=[],v={toc:b};function y(e){var t,r=e,{components:o}=r,s=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},v),s),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"temporalite"}),"temporalite"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/temporalio/temporalite"}),"temporalio/temporalite"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"/notes/service/workflow/temporal"}),"Temporal")," runs as a single process"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 SQLite")))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# macOS\ncurl -LO https://github.com/temporalio/temporalite/releases/download/v0.2.0/temporalite_0.2.0_darwin_amd64.tar.gz\ntar zxvf temporalite_0.2.0_darwin_amd64.tar.gz\n\n# http://127.0.0.1:8233/namespaces/default/workflows\n./temporalite start -f temporalite.db --metrics-port 9090 --ip 0.0.0.0 --port 7233 --ui-port 8233 --sqlite-pragma journal_mode=WAL,synchronous=NORMAL\n\ncurl -LO https://github.com/temporalio/tctl/releases/download/v1.17.1/tctl_1.17.1_darwin_amd64.tar.gz\ntar zxvf tctl_1.17.1_darwin_amd64.tar.gz\n\ntctl namespace register default\ntctl --ns default namespace describe\n")))}y.isMDXComponent=!0}}]);