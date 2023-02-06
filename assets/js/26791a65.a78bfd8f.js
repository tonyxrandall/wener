"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[66076],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return y}});var n=r(59496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),y=i,k=m["".concat(s,".").concat(y)]||m[y]||c[y]||a;return r?n.createElement(k,o(o({ref:t},p),{},{components:r})):n.createElement(k,o({ref:t},p))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},56019:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return y},default:function(){return h},frontMatter:function(){return m},metadata:function(){return k},toc:function(){return d}});var n=r(49613),i=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&p(e,r,t[r]);return e};const m={id:"grsecurity",title:"Grsecurity"},y="Grsecurity",k={unversionedId:"os/linux/security/grsecurity",id:"os/linux/security/grsecurity",title:"Grsecurity",description:"https://grsecurity.net/",source:"@site/../notes/os/linux/security/grsecurity.md",sourceDirName:"os/linux/security",slug:"/os/linux/security/grsecurity",permalink:"/notes/os/linux/security/grsecurity",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/security/grsecurity.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1603205276,formattedLastUpdatedAt:"Oct 20, 2020",frontMatter:{id:"grsecurity",title:"Grsecurity"},sidebar:"docs",previous:{title:"ACL",permalink:"/notes/os/linux/security/chmod"},next:{title:"Bash",permalink:"/notes/os/linux/shell/bash"}},f={},d=[],g={toc:d};function h(e){var t,r=e,{components:i}=r,p=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=c(c({},g),p),a(t,o({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("h1",c({},{id:"grsecurity"}),"Grsecurity"),(0,n.kt)("p",null,(0,n.kt)("a",c({parentName:"p"},{href:"https://grsecurity.net/"}),"https://grsecurity.net/")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u7ba1\u7406\u5de5\u5177"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://en.wikibooks.org/wiki/Grsecurity/The_Administration_Utility"}),"Grsecurity/The Administration Utility")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u9644\u52a0\u5de5\u5177"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",c({parentName:"p"},{href:"https://en.wikibooks.org/wiki/Grsecurity/Additional_Utilities"}),"Grsecurity/Additional Utilities"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"paxctl"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Controlling PaX Flags"),(0,n.kt)("li",{parentName:"ul"},"\u63a7\u5236\u53ef\u6267\u884c\u6587\u4ef6\u7684 PaX \u6807\u8bb0"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"pspax"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Displaying Program Capabilities")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",c({parentName:"p"},{href:"https://en.wikibooks.org/wiki/Grsecurity/Application-specific_Settings"}),"https://en.wikibooks.org/wiki/Grsecurity/Application-specific_Settings")))))),(0,n.kt)("p",null,(0,n.kt)("a",c({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Grsecurity"}),"https://en.wikipedia.org/wiki/Grsecurity")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/moby/moby/issues/20303"}),"https://github.com/moby/moby/issues/20303"))),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"grep -e PAX_MPROTECT= -e GRKERNSEC= /boot/config-hardened\nsysctl kernel.grsecurity.chroot_deny_chmod\n\ngrep -e GRKERNSEC_CHROOT /boot/config-hardened\n\n\n# https://pkgs.alpinelinux.org/package/v3.7/main/x86_64/paxctl\napk add paxctl\n\n# https://pkgs.alpinelinux.org/package/v3.7/main/x86_64/gradm\n# https://en.wikibooks.org/wiki/Grsecurity/The_Administration_Utility\n# gradm grsecurity RBAC administration and policy analysis utility\napk add gradm\n")),(0,n.kt)("p",null,"sysctl -w kernel.pax.softmode=1\necho 'kernel.pax.softmode=1' >> /etc/sysctl.conf"),(0,n.kt)("p",null,(0,n.kt)("a",c({parentName:"p"},{href:"https://wiki.gentoo.org/wiki/Hardened/PaX_Quickstart"}),"https://wiki.gentoo.org/wiki/Hardened/PaX_Quickstart")),(0,n.kt)("p",null,(0,n.kt)("a",c({parentName:"p"},{href:"https://hardenedlinux.github.io/system-security/2016/08/10/grsec-kernel-full-commentary.html"}),"https://hardenedlinux.github.io/system-security/2016/08/10/grsec-kernel-full-commentary.html")),(0,n.kt)("p",null,"use of CAP_SYS_ADMIN in chroot denied"),(0,n.kt)("p",null,"sysctl -w kernel.grsecurity.chroot_caps=0\nsysctl -w kernel.grsecurity.chroot_deny_mount=0"),(0,n.kt)("p",null,(0,n.kt)("a",c({parentName:"p"},{href:"https://en.wikibooks.org/wiki/Grsecurity/Appendix/Grsecurity_and_PaX_Configuration_Options"}),"https://en.wikibooks.org/wiki/Grsecurity/Appendix/Grsecurity_and_PaX_Configuration_Options")),(0,n.kt)("p",null,"PAX_MPROTECT\nEnabling this option will prevent programs from"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"changing the executable status of memory pages that were\nnot originally created as executable,"),(0,n.kt)("li",{parentName:"ul"},"making read-only executable pages writable again,"),(0,n.kt)("li",{parentName:"ul"},"creating executable pages from anonymous memory,"),(0,n.kt)("li",{parentName:"ul"},"making read-only-after-relocations (RELRO) data pages writable again.")),(0,n.kt)("p",null,"You should say Y here to complete the protection provided by\nthe enforcement of non-executable pages."),(0,n.kt)("p",null,"NOTE: you can use the 'chpax' or 'paxctl' utilities to control\nthis feature on a per file basis."),(0,n.kt)("p",null,"PAX_SOFTMODE\nEnabling this option will allow you to run PaX in soft mode, that\nis, PaX features will not be enforced by default, only on executables\nmarked explicitly.  You must also enable PT_PAX_FLAGS or XATTR_PAX_FLAGS\nsupport as they are the only way to mark executables for soft mode use."),(0,n.kt)("p",null,'Soft mode can be activated by using the "pax_softmode=1" kernel command\nline option on boot.  Furthermore you can control various PaX features\nat runtime via the entries in /proc/sys/kernel/pax.'))}h.isMDXComponent=!0}}]);