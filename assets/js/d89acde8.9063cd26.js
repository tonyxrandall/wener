"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[33412],{49613:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return v}});var r=n(59496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(n),v=i,b=u["".concat(p,".").concat(v)]||u[v]||s[v]||a;return n?r.createElement(b,l(l({ref:t},d),{},{components:n})):r.createElement(b,l({ref:t},d))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},78499:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return v},default:function(){return h},frontMatter:function(){return u},metadata:function(){return b},toc:function(){return f}});var r=n(49613),i=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(o)for(var n of o(t))c.call(t,n)&&d(e,n,t[n]);return e};const u={title:"Libvirt \u7f51\u7edc"},v="Libvirt \u7f51\u7edc",b={unversionedId:"os/virt/libvirt/libvirt-net",id:"os/virt/libvirt/libvirt-net",title:"Libvirt \u7f51\u7edc",description:"* Networking",source:"@site/../notes/os/virt/libvirt/libvirt-net.md",sourceDirName:"os/virt/libvirt",slug:"/os/virt/libvirt/net",permalink:"/notes/os/virt/libvirt/net",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/virt/libvirt/libvirt-net.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1667482099,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{title:"Libvirt \u7f51\u7edc"},sidebar:"docs",previous:{title:"Libvirt\u5e38\u89c1\u95ee\u9898",permalink:"/notes/os/virt/libvirt/faq"},next:{title:"Virsh",permalink:"/notes/os/virt/libvirt/virsh"}},m={},f=[{value:"NAT",id:"nat",level:2},{value:"\u6865\u63a5",id:"\u6865\u63a5",level:2},{value:"\u7cfb\u7edf\u521b\u5efa\u6865\u63a5",id:"\u7cfb\u7edf\u521b\u5efa\u6865\u63a5",level:3},{value:"Libvirt \u5b9a\u4e49\u6865\u63a5",id:"libvirt-\u5b9a\u4e49\u6865\u63a5",level:3},{value:"\u4f7f\u7528\u6865\u63a5",id:"\u4f7f\u7528\u6865\u63a5",level:3},{value:"QEMU \u6865\u63a5",id:"qemu-\u6865\u63a5",level:3},{value:"\u900f\u4f20",id:"\u900f\u4f20",level:2}],g={toc:f};function h(e){var t,n=e,{components:i}=n,d=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=s(s({},g),d),a(t,l({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("h1",s({},{id:"libvirt-\u7f51\u7edc"}),"Libvirt \u7f51\u7edc"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://wiki.libvirt.org/page/Networking"}),"Networking"))),(0,r.kt)("h2",s({},{id:"nat"}),"NAT"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7f51\u7edc"),(0,r.kt)("li",{parentName:"ul"},"\u7b80\u5355\u6613\u7528"),(0,r.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u76f4\u63a5\u8bbf\u95ee\uff0c\u591a\u4e00\u5c42 NAT \u8f6c\u6362")),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"# \u5982\u679c\u6ca1\u6709\u53ef\u4ee5\u914d\u7f6e\nvirsh net-define /usr/share/libvirt/networks/default.xml\nvirsh net-autostart default\nvirsh net-start default\n")),(0,r.kt)("h2",s({},{id:"\u6865\u63a5"}),"\u6865\u63a5"),(0,r.kt)("h3",s({},{id:"\u7cfb\u7edf\u521b\u5efa\u6865\u63a5"}),"\u7cfb\u7edf\u521b\u5efa\u6865\u63a5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://wiki.libvirt.org/page/Net.bridge.bridge-nf-call_and_sysctl.conf"}),"net.bridge.bridge-nf-call"))),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"# alpine 3.13 \u8fd8\u9700\u8981\u5b89\u88c5 bridge \u5305 - \u867d\u7136 ifupdown-ng \u652f\u6301\napk add bridge\n")),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{}),"auto eth0\niface eth0 inet manual\n\nauto vmbr0\niface vmbr0 inet dhcp\n        bridge-ports eth0\n        bridge-stp on\n        post-up iptables -I FORWARD -m physdev --physdev-is-bridged -j ACCEPT\n        pre-down iptables -D FORWARD -m physdev --physdev-is-bridged -j ACCEPT\n")),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"echo br_netfilter >> /etc/modules-load.d/kvm.conf\nmodprobe br_netfilter\n\ncat <<CONF >> /etc/sysctl.d/kvm.conf\nnet.bridge.bridge-nf-call-ip6tables = 0\nnet.bridge.bridge-nf-call-iptables = 0\nnet.bridge.bridge-nf-call-arptables = 0\nCONF\nsysctl -p /etc/sysctl.d/kvm.conf\n")),(0,r.kt)("p",null,"veth \u53ef\u672c\u5730\u521b\u5efa\u591a\u4e2a\u865a\u62df\u7f51\u5361\u6765\u63a5\u5165\u6865\u63a5"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{}),"auto veth0\niface veth0 inet manual\n    pre-up ip tuntap add dev $IFACE mode tap\n    post-down ip tuntap del dev $IFACE mode tap\n")),(0,r.kt)("h3",s({},{id:"libvirt-\u5b9a\u4e49\u6865\u63a5"}),"Libvirt \u5b9a\u4e49\u6865\u63a5"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-xml"}),"<network>\n  <name>br10</name>\n  <forward mode='nat'>\n    <nat>\n      <port start='1024' end='65535'/>\n    </nat>\n  </forward>\n  <bridge name='br10' stp='on' delay='0'/>\n  <ip address='192.168.30.1' netmask='255.255.255.0'>\n    <dhcp>\n      <range start='192.168.30.50' end='192.168.30.200'/>\n    </dhcp>\n  </ip>\n</network>\n")),(0,r.kt)("h3",s({},{id:"\u4f7f\u7528\u6865\u63a5"}),"\u4f7f\u7528\u6865\u63a5"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-xml"}),"<interface type='bridge'>\n  <source bridge='vmbr0'/>\n  <mac address='00:16:3e:1a:b3:4a'/>\n  <model type='virtio'/>\n</interface>\n")),(0,r.kt)("h3",s({},{id:"qemu-\u6865\u63a5"}),"QEMU \u6865\u63a5"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),'# /etc/qemu/bridge.conf root:qemu 0640\necho allow vmbr0 >> /etc/qemu/bridge.conf\n\n# /usr/lib/qemu/qemu-bridge-helper\n# qemu linux.img -netdev bridge,id=hn0 -device virtio-net-pci,netdev=hn0,id=nic1\n# qemu linux.img -netdev tap,helper=/usr/local/libexec/qemu-bridge-helper,id=hn0 -device virtio-net-pci,netdev=hn0,id=nic1\n\nqemu-system-x86_64 -accel kvm -m 4G -smp 2 base.qcow2  -vnc :1 -serial stdio \\\n  -device virtio-net-pci,netdev=n1 -netdev tap,id=n1,"helper=/usr/lib/qemu/qemu-bridge-helper"\n\n# -netdev bridge,br=vmbr0,id=n1 -device virtio-net,netdev=n1\n')),(0,r.kt)("h2",s({},{id:"\u900f\u4f20"}),"\u900f\u4f20"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u8bbf\u95ee\u8bbe\u5907")),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-xml"}),"<devices>\n  <interface type='hostdev' managed='yes'>\n    <source>\n      <address type='pci' domain='0x0' bus='0x00' slot='0x07' function='0x0'/>\n    </source>\n    <mac address='52:54:00:6d:90:02'>\n    <virtualport type='802.1Qbh'>\n      <parameters profileid='finance'/>\n    </virtualport>\n  </interface>\n</devices>\n")))}h.isMDXComponent=!0}}]);