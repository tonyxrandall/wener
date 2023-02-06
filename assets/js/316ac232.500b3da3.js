"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[72461],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=s(n),d=a,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||o;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},40079:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return f},metadata:function(){return m},toc:function(){return k}});var r=n(49613),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&p(e,n,t[n]);return e};const f={title:"Anaconda"},d="anaconda",m={unversionedId:"os/rhel/anaconda",id:"os/rhel/anaconda",title:"Anaconda",description:"* \u662f\u4ec0\u4e48",source:"@site/../notes/os/rhel/anaconda.md",sourceDirName:"os/rhel",slug:"/os/rhel/anaconda",permalink:"/notes/os/rhel/anaconda",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/rhel/anaconda.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1603471693,formattedLastUpdatedAt:"Oct 23, 2020",frontMatter:{title:"Anaconda"},sidebar:"docs",previous:{title:"OS Glossary",permalink:"/notes/os/glossary"},next:{title:"Synology",permalink:"/notes/os/synology"}},b={},k=[{value:"Kickstart",id:"kickstart",level:2}],y={toc:k};function h(e){var t,n=e,{components:a}=n,p=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},y),p),o(t,l({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",u({},{id:"anaconda"}),"anaconda"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"RHEL \u7cfb\u5217\u7684 Linux \u7cfb\u7edf\u5b89\u88c5\u5668"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/rhinstaller/anaconda"}),"rhinstaller/anaconda")),(0,r.kt)("li",{parentName:"ul"},"wikipedia ",(0,r.kt)("a",u({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Anaconda_(installer)"}),"Anaconda"))),(0,r.kt)("h2",u({},{id:"kickstart"}),"Kickstart"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5feb\u901f\u5b89\u88c5\u914d\u7f6e"),(0,r.kt)("li",{parentName:"ul"},"\u81ea\u52a8\u5316\u7cfb\u7edf\u5b89\u88c5"),(0,r.kt)("li",{parentName:"ul"},"\u5b89\u88c5\u5668\u53c2\u6570\u914d\u7f6e"))),(0,r.kt)("li",{parentName:"ul"},"\u751f\u6210\u5668 ",(0,r.kt)("a",u({parentName:"li"},{href:"https://access.redhat.com/labs/kickstartconfig/"}),"https://access.redhat.com/labs/kickstartconfig/"))),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"yum install pykickstart\n# \u6821\u9a8c\nksvalidator ks.conf\n")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-shell"}),'lang en_US\nkeyboard us\ntimezone Asia/Shanghai --isUtc\n# root:root\nrootpw $1$k5y95rV/$IXnt41W62IefrGconPHUP/ --iscrypted\n#platform x86, AMD64, or Intel EM64T\ntext\ncdrom\nbootloader --location=mbr --append="rhgb quiet crashkernel=auto"\nzerombr\nclearpart --all --initlabel\nautopart\nauth --passalgo=sha512 --useshadow\nselinux --disabled\nfirewall --enabled --ssh\nskipx\nfirstboot --disable\n%packages\n@^minimal-environment\nkexec-tools\n%end\n')))}h.isMDXComponent=!0}}]);