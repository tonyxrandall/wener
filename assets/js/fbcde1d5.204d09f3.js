"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[55462],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(r),d=a,v=p["".concat(u,".").concat(d)]||p[d]||m[d]||i;return r?n.createElement(v,l(l({ref:t},c),{},{components:r})):n.createElement(v,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},49808:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return p},metadata:function(){return v},toc:function(){return h}});var n=r(49613),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&c(e,r,t[r]);if(o)for(var r of o(t))s.call(t,r)&&c(e,r,t[r]);return e};const p={title:"QEMU FAQ",tags:["FAQ"]},d="QEMU FAQ",v={unversionedId:"os/virt/qemu/qemu-faq",id:"os/virt/qemu/qemu-faq",title:"QEMU FAQ",description:"- 7 ways we harden our KVM hypervisor at Google Cloud: security in plaintext",source:"@site/../notes/os/virt/qemu/qemu-faq.md",sourceDirName:"os/virt/qemu",slug:"/os/virt/qemu/faq",permalink:"/notes/os/virt/qemu/faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/virt/qemu/qemu-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1667482099,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{title:"QEMU FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"QEMU \u6587\u6863",permalink:"/notes/os/virt/qemu/doc"},next:{title:"Qemu Image",permalink:"/notes/os/virt/qemu/img"}},f={},h=[{value:"RNG",id:"rng",level:2},{value:"\u8bbf\u95ee\u8fdc\u7a0b\u955c\u50cf",id:"\u8bbf\u95ee\u8fdc\u7a0b\u955c\u50cf",level:2},{value:"qemu: uncaught target signal 4 (Illegal instruction) - core dumped",id:"qemu-uncaught-target-signal-4-illegal-instruction---core-dumped",level:2},{value:"qemu-s390x: warning: &#39;msa5-base&#39; requires &#39;klmd-sha-512&#39;",id:"qemu-s390x-warning-msa5-base-requires-klmd-sha-512",level:2},{value:"virtfs",id:"virtfs",level:2},{value:"convert \u540e\u65e0\u6cd5\u542f\u52a8",id:"convert-\u540e\u65e0\u6cd5\u542f\u52a8",level:2},{value:"Overhead",id:"overhead",level:2},{value:"\u786c\u4ef6\u52a0\u901f",id:"\u786c\u4ef6\u52a0\u901f",level:2},{value:"USB",id:"usb",level:2},{value:"-accel kvm: failed to initialize kvm: Permission denied",id:"-accel-kvm-failed-to-initialize-kvm-permission-denied",level:2}],g={toc:h};function k(e){var t,r=e,{components:a}=r,c=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},g),c),i(t,l({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",m({},{id:"qemu-faq"}),"QEMU FAQ"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://cloudplatform.googleblog.com/2017/01/7-ways-we-harden-our-KVM-hypervisor-at-Google-Cloud-security-in-plaintext.html"}),"7 ways we harden our KVM hypervisor at Google Cloud: security in plaintext"))),(0,n.kt)("h2",m({},{id:"rng"}),"RNG"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"qemu-system-x86_64 -object rng-random,filename=/dev/urandom,id=rng0 -device virtio-rng-pci,rng=rng0,bus=pci.0,addr=0x7\n")),(0,n.kt)("h2",m({},{id:"\u8bbf\u95ee\u8fdc\u7a0b\u955c\u50cf"}),"\u8bbf\u95ee\u8fdc\u7a0b\u955c\u50cf"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# apk add qemu-block-ssh\nqemu -drive file=ssh://host/path/to/file,if=virtio,cache=none\n")),(0,n.kt)("h2",m({},{id:"qemu-uncaught-target-signal-4-illegal-instruction---core-dumped"}),"qemu: uncaught target signal 4 (Illegal instruction) - core dumped"),(0,n.kt)("p",null,"ppc64le \u5f02\u5e38"),(0,n.kt)("h2",m({},{id:"qemu-s390x-warning-msa5-base-requires-klmd-sha-512"}),"qemu-s390x: warning: 'msa5-base' requires 'klmd-sha-512'"),(0,n.kt)("p",null,"s390x \u5f02\u5e38"),(0,n.kt)("h2",m({},{id:"virtfs"}),"virtfs"),(0,n.kt)("p",null,(0,n.kt)("a",m({parentName:"p"},{href:"https://wiki.qemu.org/Documentation/9psetup"}),"https://wiki.qemu.org/Documentation/9psetup")),(0,n.kt)("p",null,"ProjectZero\nQEMU: virtfs permits guest to access entire host filesystem\n",(0,n.kt)("a",m({parentName:"p"},{href:"https://news.ycombinator.com/item?id=13753950"}),"https://news.ycombinator.com/item?id=13753950")),(0,n.kt)("h2",m({},{id:"convert-\u540e\u65e0\u6cd5\u542f\u52a8"}),"convert \u540e\u65e0\u6cd5\u542f\u52a8"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5728 macOS \u4e0b\u4ece qcow2 \u8f6c\u6362\u4e3a raw \u540e\u5206\u533a\u4fe1\u606f\u4e22\u5931"),(0,n.kt)("li",{parentName:"ul"},"Linux \u672a\u9047\u5230\u8fd9\u6837\u7684\u95ee\u9898"),(0,n.kt)("li",{parentName:"ul"},"\u8f6c\u6362\u540e\u53ef\u4f7f\u7528 fdisk \u68c0\u67e5\u5206\u533a\u4fe1\u606f")),(0,n.kt)("h2",m({},{id:"overhead"}),"Overhead"),(0,n.kt)("p",null,(0,n.kt)("a",m({parentName:"p"},{href:"http://www.brightcomputing.com/blog/containerization-vs.-virtualization-more-on-overhead"}),"Containerization vs. Virtualization \u2013 More on Overhead")),(0,n.kt)("h2",m({},{id:"\u786c\u4ef6\u52a0\u901f"}),"\u786c\u4ef6\u52a0\u901f"),(0,n.kt)("p",null,"\u5f00\u542f\u786c\u4ef6\u52a0\u901f\u548c\u4e0d\u5f00\u542f\u6027\u80fd\u53ef\u80fd\u76f8\u5dee 10 \u500d+\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"qemu-system-x86_64 -accel help\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"tcg - JIT \u6a21\u5f0f"),(0,n.kt)("li",{parentName:"ul"},"macOS - hvf, hax",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"hvf \u5b9e\u73b0\u4e0d\u662f\u5f88\u5b8c\u6574\uff0c\u53ef\u80fd\u4f1a\u51fa\u73b0\u65e0\u6cd5\u8fd0\u884c\u7684\u60c5\u51b5"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u52a0\u901f\u6709\u95ee\u9898\uff0c\u5c1d\u8bd5\u4fee\u6539 smp \u4e3a 1"))),(0,n.kt)("li",{parentName:"ul"},"Windows - hyper, hax"),(0,n.kt)("li",{parentName:"ul"},"Linux - kvm")),(0,n.kt)("h2",m({},{id:"usb"}),"USB"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/qemu/qemu/blob/master/docs/usb2.txt"}),"https://github.com/qemu/qemu/blob/master/docs/usb2.txt")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://unix.stackexchange.com/a/251406/47774"}),"https://unix.stackexchange.com/a/251406/47774"))),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"qemu-system-x86_64 \\\n  -enable-kvm \\\n  -M q35 \\\n  -m 2G \\\n  -usb -usbdevice host:16b2:1001 \\\n  -usb -usbdevice host:0529:0001 \\\n  -usbdevice tablet \\\n  -net nic \\\n  -net bridge,br=br0 \\\n  -vga qxl \\\n  -spice port=5930,disable-ticketing \\\n  -device virtio-serial-pci \\\n  -device virtserialport,chardev=spicechannel0,name=com.redhat.spice.0 \\\n  -chardev spicevmc,id=spicechannel0,name=vdagent \\\n  -drive file=/mnt/data/win-patch.img,if=virtio\n")),(0,n.kt)("h2",m({},{id:"-accel-kvm-failed-to-initialize-kvm-permission-denied"}),"-accel kvm: failed to initialize kvm: Permission denied"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"addgroup $USER kvm\n")))}k.isMDXComponent=!0}}]);