"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[98169],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(r),f=a,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},94722:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return f},default:function(){return v},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return b}});var n=r(49613),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&s(e,r,t[r]);if(u)for(var r of u(t))c.call(t,r)&&s(e,r,t[r]);return e};const p={title:"auditd"},f="auditd",m={unversionedId:"os/linux/admin/auditd",id:"os/linux/admin/auditd",title:"auditd",description:"- /etc/audit/rules.d/audit.rules",source:"@site/../notes/os/linux/admin/auditd.md",sourceDirName:"os/linux/admin",slug:"/os/linux/admin/auditd",permalink:"/notes/os/linux/admin/auditd",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/admin/auditd.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1639484090,formattedLastUpdatedAt:"Dec 14, 2021",frontMatter:{title:"auditd"},sidebar:"docs",previous:{title:"Linux Admin",permalink:"/notes/os/linux/admin/"},next:{title:"Filesystem Hierarchy Standard",permalink:"/notes/os/linux/admin/fhs"}},y={},b=[],O={toc:b};function v(e){var t,r=e,{components:a}=r,s=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=d(d({},O),s),i(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",d({},{id:"auditd"}),"auditd"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"/etc/audit/rules.d/audit.rules"),(0,n.kt)("li",{parentName:"ul"},"/var/log/audit/audit.log")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"# -w file -p permissions -k key_name\nauditctl -w /etc/passwd -p wa -k user-modify\n# useradd testuser # \u4f1a\u4fee\u6539 /etc/passwd\ncat /var/log/audit/audit.log | grep user-modify\n\nausearch -i -k user-modify\naureport -x\n")))}v.isMDXComponent=!0}}]);