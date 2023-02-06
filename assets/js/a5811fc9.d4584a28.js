"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[88304],{49613:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return N}});var n=a(59496);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function k(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),u=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):k(k({},e),t)),a},m=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},o=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),o=u(a),N=r,d=o["".concat(p,".").concat(N)]||o[N]||s[N]||l;return a?n.createElement(d,k(k({ref:e},m),{},{components:a})):n.createElement(d,k({ref:e},m))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,k=new Array(l);k[0]=o;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,k[1]=i;for(var u=2;u<l;u++)k[u]=a[u];return n.createElement.apply(null,k)}return n.createElement.apply(null,a)}o.displayName="MDXCreateElement"},81974:function(t,e,a){a.r(e),a.d(e,{assets:function(){return c},contentTitle:function(){return N},default:function(){return h},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return g}});var n=a(49613),r=Object.defineProperty,l=Object.defineProperties,k=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(t,e,a)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,s=(t,e)=>{for(var a in e||(e={}))p.call(e,a)&&m(t,a,e[a]);if(i)for(var a of i(e))u.call(e,a)&&m(t,a,e[a]);return t};const o={title:"K3S vs K0S",slug:"k3s-vs-k0s",tags:["Kubernetes","DevOps"]},N="K0S vs K3S",d={permalink:"/story/k3s-vs-k0s",editUrl:"https://github.com/wenerme/wener/edit/master/story/../story/2021/2021-07-25-k3s-vs-k0s.md",source:"@site/../story/2021/2021-07-25-k3s-vs-k0s.md",title:"K3S vs K0S",description:"| vs.               | k0s                               | k3s                                   |",date:"2021-07-25T00:00:00.000Z",formattedDate:"July 25, 2021",tags:[{label:"Kubernetes",permalink:"/story/tags/kubernetes"},{label:"DevOps",permalink:"/story/tags/dev-ops"}],readingTime:7.535,hasTruncateMarker:!0,authors:[],frontMatter:{title:"K3S vs K0S",slug:"k3s-vs-k0s",tags:["Kubernetes","DevOps"]},prevItem:{title:"PostgreSQL ORDER BY+LIMIT \u65f6\u7684\u7d22\u5f15\u9009\u62e9",permalink:"/story/postgresql-use-wrong-index-with-order-and-limit"},nextItem:{title:"\u65e5\u5e38\u5de5\u4f5c\u4e4b\u5916",permalink:"/story/out-of-daily-work"}},c={authorsImageUrls:[]},g=[{value:"\u5982\u4f55\u9009\u62e9",id:"\u5982\u4f55\u9009\u62e9",level:2},{value:"\u4e3a\u4ec0\u9009\u62e9 K0S",id:"\u4e3a\u4ec0\u9009\u62e9-k0s",level:2},{value:"\u7ec4\u4ef6\u7b80\u4ecb",id:"\u7ec4\u4ef6\u7b80\u4ecb",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2},{value:"K8S \u8981\u6c42",id:"k8s-\u8981\u6c42",level:2},{value:"K8S \u90e8\u7f72",id:"k8s-\u90e8\u7f72",level:2}],b={toc:g};function h(t){var e,a=t,{components:r}=a,m=((t,e)=>{var a={};for(var n in t)p.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&i)for(var n of i(t))e.indexOf(n)<0&&u.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=s(s({},b),m),l(e,k({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"vs."),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"k0s"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"k3s"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"since"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"2020-06"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"2019-03")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"by"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Mirants"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Rancher/SUSE")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Governance"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Mirants"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"CNCF")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Github"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("a",s({parentName:"td"},{href:"https://github.com/k0sproject/k0s"}),"k0sproject/k0s")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("a",s({parentName:"td"},{href:"https://github.com/k3s-io/k3s"}),"k3s-io/k3s"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Stars"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("a",s({parentName:"td"},{href:"https://github.com/k0sproject/k0s"}),(0,n.kt)("img",s({parentName:"a"},{src:"https://img.shields.io/github/stars/k0sproject/k0s",alt:null})))),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("a",s({parentName:"td"},{href:"https://github.com/k3s-io/k3s"}),(0,n.kt)("img",s({parentName:"a"},{src:"https://img.shields.io/github/stars/k3s-io/k3s",alt:null}))))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Issues"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("a",s({parentName:"td"},{href:"https://github.com/k0sproject/k0s"}),(0,n.kt)("img",s({parentName:"a"},{src:"https://img.shields.io/github/issues/k0sproject/k0s",alt:null})))),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("a",s({parentName:"td"},{href:"https://github.com/k3s-io/k3s"}),(0,n.kt)("img",s({parentName:"a"},{src:"https://img.shields.io/github/issues/k3s-io/k3s",alt:null}))))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"CNI"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"kube-router,calico"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"flannel")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"CRI"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"containerd"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"containerd")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"CSI"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"OpenEBS"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"local-path-provisioner")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Windows"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u2705 - calico"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Arch"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"amd64,arm,arm64"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"amd64,arm,arm64")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"LoadBalancer"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"n/a"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"klipper-lb")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Ingress"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"n/a"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"traefik")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Controller-Worker"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("a",s({parentName:"td"},{href:"https://kubernetes.io/docs/tasks/extend-kubernetes/setup-konnectivity/"}),"konnectivity")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("a",s({parentName:"td"},{href:"https://github.com/rancher/remotedialer"}),"remotedialer")," - WebSocket \u53cd\u5411\u4ee3\u7406")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u6587\u6863"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u2b50\ufe0f\u2b50\ufe0f"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u2b50\ufe0f\u2b50\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u6210\u719f"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u2b50\ufe0f\u2b50\ufe0f"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u56fd\u5185\u73af\u5883\u53cb\u597d"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u2b50\ufe0f"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Pod CIDR"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"10.244.0.0/16"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"10.42.0.0/16")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Service CIDR"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"10.96.0.0/12"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"10.43.0.0/16")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"CoreDNS"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"10.96.0.10"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"10.43.0.10")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"configuration"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"/etc/k0s/k0s.yaml"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"/etc/rancher/k3s/config.yaml")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"registry"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"/etc/k0s/k0s.yaml"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"/etc/rancher/k3s/registry.yaml")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"data-dir"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"/var/lib/k0s"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"/var/lib/rancher/k3s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"bin-dir"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"/var/lib/k0s/bin"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"n/a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"kubeconfig"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"/var/lib/k0s/pki/admin.conf"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"/etc/rancher/k3s/k3s.yaml")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"manifest"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"/var/lib/k0s/manifests"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"/var/lib/rancher/k3s/server/manifests")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"local storage"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"/var/openebs/local"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"/var/lib/rancher/k3s/storage/")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u670d\u52a1\u8fd0\u884c\u65b9\u5f0f"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"supervisor - \u72ec\u7acb\u591a\u8fdb\u7a0b"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"embeded - \u5355\u8fdb\u7a0b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"containerd"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"bundled"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u7cfb\u7edf")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://wener.me/notes/devops/kubernetes/distro/k0s"}),"k0s"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"CIS security benchmark"),(0,n.kt)("li",{parentName:"ul"},"\u7b26\u5408 FIPS 140-2 \u8981\u6c42"),(0,n.kt)("li",{parentName:"ul"},"bundled",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"iptables, containerd, ctr, runc, etcd, kine"),(0,n.kt)("li",{parentName:"ul"},"openebs",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"openebs-hostpath -> /var/openebs/local"))),(0,n.kt)("li",{parentName:"ul"},"kube-router"),(0,n.kt)("li",{parentName:"ul"},"konnectivity"),(0,n.kt)("li",{parentName:"ul"},"helm-controller"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://wener.me/notes/devops/kubernetes/distro/k3s"}),"k3s"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"CNCF \u9879\u76ee - \u8131\u79bb\u4e86 rancher"),(0,n.kt)("li",{parentName:"ul"},"bundled",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"containerd, ctr, runc, etcd, kine"),(0,n.kt)("li",{parentName:"ul"},"helm-controller - \u652f\u6301\u90e8\u7f72 helm chart, CDR \u63a7\u5236"),(0,n.kt)("li",{parentName:"ul"},"traefik - \u63d0\u4f9b ingress \u80fd\u529b - \u901a\u8fc7 helm \u90e8\u7f72"),(0,n.kt)("li",{parentName:"ul"},"local-path-provisioner - \u63d0\u4f9b\u57fa\u4e8e\u672c\u5730\u76ee\u5f55\u7684\u5b58\u50a8\u7c7b",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 /var/lib/rancher/k3s/storage"))),(0,n.kt)("li",{parentName:"ul"},"klipper-lb - \u57fa\u4e8e iptable \u8f6c\u53d1\u7684\u8d1f\u8f7d\u5747\u8861")))))),(0,n.kt)("admonition",s({},{type:"caution"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"k3s \u9ed8\u8ba4\u5305\u542b\u8f83\u591a\u7ec4\u4ef6\uff0c\u90e8\u7f72\u540e \u53ef\u4f7f\u7528\u6027 \u66f4\u9ad8\uff0c\u4f46\u90e8\u5206\u7ec4\u4ef6\uff08 traefik,klipper-lb,local-path-provisioner \uff09\u4e0d\u5efa\u8bae\u751f\u4ea7\u4f7f\u7528\uff0c\u63d0\u4f9b\u8fd9\u4e9b\u7ec4\u4ef6\u66f4\u591a\u662f\u4e3a\u4e86\u4fdd\u8bc1\u529f\u80fd\u5b8c\u6574\uff0c\u5f00\u7bb1\u5373\u7528\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528 k3s \u4e0d\u63a8\u8350\u4f7f\u7528\u5185\u7f6e traefik \u548c klipper-lb",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ingress \u5efa\u8bae\u81ea\u884c\u5b89\u88c5 - \u6bd4\u8f83\u91cd\u8981\u7684\u6838\u5fc3\u7ec4\u4ef6"),(0,n.kt)("li",{parentName:"ul"},"\u5efa\u8bae\u4f7f\u7528 metallb \u66ff\u4ee3 klipper-lb"))),(0,n.kt)("li",{parentName:"ul"},"\u56e0\u4e3a Controller-Worker \u7f51\u7edc\u4e0d\u540c\uff0ck3s \u548c k0s \u65e0\u6cd5\u6df7\u5408\u4f7f\u7528"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u547d\u4ee4\u5bf9\u6bd4")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"k0s"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"k3s"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"k0s systinfo"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"./contrib/util/check-config.sh")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"k0s backup"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"k3s etcd-snapshot")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"k0s restore"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"k3s server --cluster-reset-restore-path")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"k0s controller"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"k3s server")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"k0s worker"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"k3s agent")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"n/a"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"k3s crictl")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"k0s install"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("a",s({parentName:"td"},{href:"https://get.k3s.io"}),"https://get.k3s.io")," \u4f1a\u5b89\u88c5 systemd, openrc \u670d\u52a1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"k0s reset"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"n/a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"k0s kubeconfig create"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"n/a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"k0sctl"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"n/a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"k0sctl apply"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"~autok3s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"k0sctl backup"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"n/a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"---"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"---")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"k0s kubectl"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"k3s kubectl")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"k0s ctr"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"k3s ctr")))),(0,n.kt)("h2",s({},{id:"\u5982\u4f55\u9009\u62e9"}),"\u5982\u4f55\u9009\u62e9"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u76f8\u540c\u70b9")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u9762\u5411\u76f8\u540c\u7528\u6237\u7fa4\u4f53\u548c\u4f7f\u7528\u573a\u666f\uff0c\u975e\u5e38\u7c7b\u4f3c"),(0,n.kt)("li",{parentName:"ul"},"\u6838\u5fc3\u90fd\u4f7f\u7528 kine - \u533a\u522b\u4e0d\u5927"),(0,n.kt)("li",{parentName:"ul"},"\u90fd\u6709\u5927\u7684\u4f01\u4e1a\u652f\u6491\u5f00\u53d1")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u9009\u62e9\u8003\u91cf")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"k3s",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u66f4\u6210\u719f - \u5b58\u5728\u65f6\u95f4\u66f4\u957f\uff0c\u4f7f\u7528\u7684\u66f4\u72ec\u7acb"),(0,n.kt)("li",{parentName:"ul"},"\u793e\u533a\u66f4\u5927 - \u793e\u533a\u8fd8\u4e0e rancher\u3001rke \u6709\u4ea4\u96c6"),(0,n.kt)("li",{parentName:"ul"},"\u4e2d\u6587\u5316\u793e\u533a\u53cb\u597d"))),(0,n.kt)("li",{parentName:"ul"},"k0s",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u66f4\u65b0 - 2020 \u5e74 - \u76ee\u524d\u5df2\u7ecf\u6210\u719f\uff0c\u53ef\u4ee5\u7528\u4e8e\u751f\u4ea7"),(0,n.kt)("li",{parentName:"ul"},"\u7528\u6237\u4f53\u9a8c\u66f4\u597d"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"k0sctl"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u80fd\u66f4\u597d\u7684\u8f85\u52a9\u7ef4\u62a4\u66f4\u591a\u7684\u96c6\u7fa4\uff0c\u51cf\u5c11\u5bf9 \u811a\u672c/ansible \u7684\u4f9d\u8d56\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u66f4\u597d\u5347\u7ea7"),(0,n.kt)("li",{parentName:"ul"},"\u66f4\u597d\u5907\u4efd")))))),(0,n.kt)("h2",s({},{id:"\u4e3a\u4ec0\u9009\u62e9-k0s"}),"\u4e3a\u4ec0\u9009\u62e9 K0S"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"k0s \u4f5c\u4e3a supervisor \u8fd0\u884c - \ud83c\udf1f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u8fdb\u7a0b\u72ec\u7acb - etcd, k0s-api, kube-apiserver",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u65b9\u4fbf\u8c03\u8bd5\uff0c\u6392\u67e5\u95ee\u9898 - \u80fd\u6e05\u695a\u77e5\u9053\u54ea\u4e2a\u8fdb\u7a0b\u542f\u52a8\u4e86\u6ca1\u542f\u52a8"),(0,n.kt)("li",{parentName:"ul"},"\u80fd\u770b\u5230\u6240\u6709\u5b9e\u9645\u8fd0\u884c\u53c2\u6570"),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5355\u72ec kill \u8fdb\u7a0b - \u4f8b\u5982: \u4fee\u6539\u4e86 containerd \u955c\u50cf\u914d\u7f6e\uff0c\u53ea\u80fd\u901a\u8fc7 kill \u6765\u4f7f\u65b0\u7684\u914d\u7f6e\u751f\u6548",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u9700\u8981\u542f\u505c\u5168\u90e8\u670d\u52a1"))))),(0,n.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u90e8\u7f72\u8fd0\u884c\u903b\u8f91\u6e05\u6670 - \u5982\u679c\u9700\u8981\u66f4\u6df1\u5165\u4e86\u89e3"))),(0,n.kt)("li",{parentName:"ul"},"k0s bundled \u4e86\u66f4\u591a\u4f9d\u8d56 - \u2b50\ufe0f - containerd, iptables",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u51e0\u4e4e\u5bf9\u7cfb\u7edf\u6ca1\u4ec0\u4e48\u989d\u5916\u4f9d\u8d56"))),(0,n.kt)("li",{parentName:"ul"},"k0sctl \u8f85\u52a9\u90e8\u7f72",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u9700\u8981\u53ef\u81ea\u884c\u8fdb\u884c\u5b9a\u5236\u5316"),(0,n.kt)("li",{parentName:"ul"},"\u66ff\u4ee3\u90e8\u5206 ansible \u5de5\u4f5c"))),(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 control plane \u548c worker \u5206\u79bb",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u26a0\ufe0f \u90e8\u7f72\u6709\u4e00\u4e9b\u6ce8\u610f\u4e8b\u9879"))),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528 konnectivity - \u76f8\u5bf9\u66f4 kubernetes")),(0,n.kt)("admonition",s({},{type:"caution"}),(0,n.kt)("p",{parentName:"admonition"},"\u9ed8\u8ba4\u7528\u5230\u4e86 k8s.gcr.io \u955c\u50cf - \u56fd\u5185\u73af\u5883\u90e8\u7f72\u9700\u8981\u6ce8\u610f\uff0c\u5efa\u8bae\u7528 airgap \u5305\u5bfc\u5165\u57fa\u7840\u955c\u50cf\u3002")),(0,n.kt)("h2",s({},{id:"\u7ec4\u4ef6\u7b80\u4ecb"}),"\u7ec4\u4ef6\u7b80\u4ecb"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://wener.me/notes/devops/kubernetes/distro/kine"}),"kine"),"\nk3s \u548c k0s \u6700\u6838\u5fc3\u7ec4\u4ef6",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u63d0\u4f9b etcd \u80fd\u529b"),(0,n.kt)("li",{parentName:"ul"},"\u540e\u7aef\u652f\u6301 etcd,sqlite,mysql,postgresql,dqlite"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://wener.me/notes/devops/kubernetes/network/traefik-ingress"}),"traefik"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u63d0\u4f9b Ingress \u80fd\u529b"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/k3s-io/helm-controller"}),"k3s-io/helm-controller"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u90e8\u7f72 helm chart"),(0,n.kt)("li",{parentName:"ul"},"\u901a\u8fc7 CDR \u63a7\u5236"))),(0,n.kt)("li",{parentName:"ul"},"CNI - \u5bb9\u5668\u7f51\u7edc",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://wener.me/notes/devops/kubernetes/network/flannel/"}),"flannel")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://wener.me/notes/devops/kubernetes/network/calico/"}),"calico")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://wener.me/notes/devops/kubernetes/network/kube-router/"}),"kube-router")))),(0,n.kt)("li",{parentName:"ul"},"CSI - \u5bb9\u5668\u5b58\u50a8",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://wener.me/notes/devops/kubernetes/storage/local-path-provisioner/"}),"local-path-provisioner"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u672c\u5730\u8def\u5f84\u63d0\u4f9b volume"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://wener.me/notes/devops/kubernetes/storage/openebs/"}),"openebs")))),(0,n.kt)("li",{parentName:"ul"},"LoadBalancer",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/k3s-io/klipper-lb"}),"k3s-io/klipper-lb"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8e iptable \u63d0\u4f9b ClusterIP \u80fd\u529b"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://wener.me/notes/devops/kubernetes/network/metallb/"}),"metallb"))))),(0,n.kt)("h2",s({},{id:"\u53c2\u8003"}),"\u53c2\u8003"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://landscape.cncf.io/card-mode?category=certified-kubernetes-installer&grouping=category"}),"certified-kubernetes-installer"))),(0,n.kt)("h1",s({},{id:"\u4e3a\u4ec0\u4e48\u4f1a\u5b58\u5728\u4e0d\u540c\u53d1\u884c\u7248"}),"\u4e3a\u4ec0\u4e48\u4f1a\u5b58\u5728\u4e0d\u540c\u53d1\u884c\u7248"),(0,n.kt)("p",null,"K8S \u4f5c\u4e3a\u6700\u539f\u59cb\u7684\u9879\u76ee\uff0c\u6d3e\u751f\u51fa\u6765\u5f88\u591a \u5206\u652f/\u53d1\u5e03\u7248\u3002"),(0,n.kt)("p",null,"Kubernetes \u7684\u6838\u5fc3\u80fd\u529b\u4e3a\u8d44\u6e90\u8c03\u5ea6\uff0c\u4e3b\u8981\u8d44\u6e90\u4e3a Pod/\u5bb9\u5668\u7ec4/\u8ba1\u7b97\u8d44\u6e90\u3002\n\u56e0\u4e3a\u662f\u5206\u5e03\u5f0f\u591a\u8282\u70b9\uff0c\u6240\u4ee5\u5bf9\u7f51\u7edc\u6709\u8981\u6c42\u3002Pod \u8c03\u5ea6\u4e3b\u8981\u63d0\u4f9b\u8ba1\u7b97\u80fd\u529b\uff0c\u5b9e\u9645\u4f7f\u7528\u8fd8\u4f1a\u9700\u8981\u5b58\u50a8\u80fd\u529b\u3002\n\u4e5f\u5c31\u662f\u8bf4 Kubernetes \u6d89\u53ca\u5230\u6838\u5fc3\u7684\u4e09\u5143\u7d20"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u8ba1\u7b97"),(0,n.kt)("li",{parentName:"ul"},"\u7f51\u7edc"),(0,n.kt)("li",{parentName:"ul"},"\u5b58\u50a8")),(0,n.kt)("p",null,"Kubernetes \u6838\u5fc3\u8c03\u5ea6\u8ba1\u7b97\u8d44\u6e90\uff0c\u4f46\u5bf9\u4e8e\u7f51\u7edc\u548c\u5b58\u50a8\u662f \u65e0\u610f\u89c1/Unopinioned \uff0c\u4f46\u5b9e\u9645\u90e8\u7f72\u4f7f\u7528\u65f6\u8fd9\u65f6\u5019\u53c8\u4e0d\u53ef\u907f\u514d\u7684\u8981\u9762\u5bf9\u8fd9\u4e9b\u95ee\u9898\u3002\n\u56e0\u6b64\u4e0d\u540c\u7684 \u53d1\u5e03\u7248/Distribution \u5c31\u662f\u5bf9\u8fd9\u4e9b\u95ee\u9898\u4e0d\u540c\u7684\u770b\u6cd5\u3002"),(0,n.kt)("h2",s({},{id:"k8s-\u8981\u6c42"}),"K8S \u8981\u6c42"),(0,n.kt)("p",null,"Kubernetes \u7531 Google \u5f00\u53d1\uff0c\u4f46\u4e0d\u662f\u6240\u6709\u4eba\u90fd\u6709\u90a3\u4e48\u5927\u89c4\u6a21\u7684\u95ee\u9898\uff0c\u800c\u5927\u591a\u6570\u65f6\u5019\u90fd\u662f\u5c0f\u89c4\u6a21\uff0c\u5148\u8ba9 K8S \u201c\u8dd1\u8d77\u6765\u201d\u3002"),(0,n.kt)("p",null,"Kubernetes \u81ea\u8eab\u56e0\u4e3a\u5bf9\u57fa\u7840\u8bbe\u65bd\u5c42 \u65e0\u610f\u89c1/Unopinioned\uff0c\u56e0\u6b64\u9ed8\u8ba4\u662f\u6ca1\u6709\u90e8\u7f72\u5de5\u5177\uff0c\u53ea\u6709\u8981\u6c42\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u8981\u6c42\u8282\u70b9\u8fd0\u884c\u5728\u5e73\u5766\u7f51\u7edc"),(0,n.kt)("li",{parentName:"ul"},"\u8981\u6c42 etcd \u80fd\u529b\u7684\u72b6\u6001\u5b58\u50a8"),(0,n.kt)("li",{parentName:"ul"},"\u8981\u6c42 cloud-controller \u63d0\u4f9b\u8282\u70b9\u4fe1\u606f"),(0,n.kt)("li",{parentName:"ul"},"\u8981\u6c42 \u5bb9\u5668\u8fd0\u884c\u65f6")),(0,n.kt)("p",null,"\u5728\u8fd9\u4e9b\u57fa\u7840\u4e4b\u4e0a\uff0cKubernetes \u63d0\u4f9b\u57fa\u4e8e\u72b6\u6001\u7684 \u63a5\u53e3 \u8fdb\u884c\u8d44\u6e90\u8c03\u5ea6\u3002"),(0,n.kt)("h2",s({},{id:"k8s-\u90e8\u7f72"}),"K8S \u90e8\u7f72"),(0,n.kt)("p",null,"\u9664\u4e86\u6ee1\u8db3 K8S \u7684\u8981\u6c42\uff0c\u5728\u5b9e\u9645\u4f7f\u7528\u65f6\u8fd8\u5e0c\u671b\u80fd\u65b9\u4fbf\u5feb\u6377\u7684\u7ba1\u7406\u90e8\u7f72\u3002\nK8S \u63d0\u4f9b\u4e86 kubeadm \u8fdb\u884c\u5b89\u88c5\uff0c\u4e0d\u540c\u7684\u53d1\u5e03\u7248\u4e5f\u9700\u8981\u63d0\u4f9b\u7c7b\u4f3c\u7684\u5de5\u5177\uff0c\u4f46\u5de5\u5177\u533a\u5206\u4e3a\u4e24\u90e8\u5206"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u8fdc\u7a0b\u5f00\u901a\u90e8\u7f72",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"SSH"),(0,n.kt)("li",{parentName:"ul"},"\u63a7\u5236\u8282\u70b9\u901a\u8fc7\u5de5\u5177\u90e8\u7f72\u5230\u591a\u4e2a\u8282\u70b9"))),(0,n.kt)("li",{parentName:"ol"},"\u5f00\u901a\u90e8\u7f72\u7684\u63d0\u524d\u51c6\u5907",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"CA \u8bc1\u4e66"),(0,n.kt)("li",{parentName:"ul"},"ETCD/\u5b58\u50a8\u521d\u59cb\u5316"),(0,n.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u8bbe\u7f6e"),(0,n.kt)("li",{parentName:"ul"},"Bootstrap")))),(0,n.kt)("p",null,"kubeadm \u548c k0s, k3s \u90fd\u5c5e\u4e8e\u7b2c\u4e8c\u79cd\u573a\u666f\uff0c\u7b2c\u4e00\u79cd\u573a\u666f\u7684\u5de5\u5177\u4f8b\u5982"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"autok3s"),(0,n.kt)("li",{parentName:"ul"},"rke"),(0,n.kt)("li",{parentName:"ul"},"ansible")))}h.isMDXComponent=!0}}]);