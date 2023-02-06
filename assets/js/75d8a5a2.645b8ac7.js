"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[32539],{49613:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},42184:function(e,n,t){t.r(n),t.d(n,{assets:function(){return k},contentTitle:function(){return f},default:function(){return v},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return g}});var r=t(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,p=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&u(e,t,n[t]);if(l)for(var t of l(n))c.call(n,t)&&u(e,t,n[t]);return e};const d={title:"K3S \u914d\u7f6e",tags:["Configuration"]},f="K3S \u914d\u7f6e",m={unversionedId:"devops/kubernetes/distro/k3s-conf",id:"devops/kubernetes/distro/k3s-conf",title:"K3S \u914d\u7f6e",description:"- \u81ea v1.19 \u652f\u6301 yaml \u914d\u7f6e",source:"@site/../notes/devops/kubernetes/distro/k3s-conf.md",sourceDirName:"devops/kubernetes/distro",slug:"/devops/kubernetes/distro/k3s-conf",permalink:"/notes/devops/kubernetes/distro/k3s-conf",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/distro/k3s-conf.md",tags:[{label:"Configuration",permalink:"/notes/tags/configuration"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1645984624,formattedLastUpdatedAt:"Feb 27, 2022",frontMatter:{title:"K3S \u914d\u7f6e",tags:["Configuration"]},sidebar:"docs",previous:{title:"K3S in Docker",permalink:"/notes/devops/kubernetes/distro/k3d"},next:{title:"K3S Cookbook",permalink:"/notes/devops/kubernetes/distro/k3s-cookbook"}},k={},g=[{value:"registries.yaml",id:"registriesyaml",level:2},{value:"config.yaml",id:"configyaml",level:2},{value:"server",id:"server",level:3},{value:"agent",id:"agent",level:3}],b={toc:g};function v(e){var n,t=e,{components:a}=t,u=((e,n)=>{var t={};for(var r in e)s.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&l)for(var r of l(e))n.indexOf(r)<0&&c.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=p(p({},b),u),o(n,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",p({},{id:"k3s-\u914d\u7f6e"}),"K3S \u914d\u7f6e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u81ea v1.19 \u652f\u6301 yaml \u914d\u7f6e"),(0,r.kt)("li",{parentName:"ul"},"/etc/rancher/k3s/config.yaml - K3S_CONFIG_FILE, --config, -c",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"yaml \u914d\u7f6e"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u57fa\u672c\u4e0e\u547d\u4ee4\u884c\u53c2\u6570\u4e00\u81f4"))),(0,r.kt)("li",{parentName:"ul"},"/etc/rancher/k3s/k3s.yaml - KUBECONFIG"),(0,r.kt)("li",{parentName:"ul"},"/etc/rancher/k3s/registries.yaml - \u5bb9\u5668\u955c\u50cf\u4ed3\u5e93\u914d\u7f6e"),(0,r.kt)("li",{parentName:"ul"},"\u73af\u5883\u53d8\u91cf K3S_DATASTORE_ENDPOINT \u6620\u5c04\u4e3a datastore-endpoint"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://rancher.com/docs/k3s/latest/en/installation/install-options/server-config/"}),"K3s Server Configuration Reference")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://rancher.com/docs/k3s/latest/en/installation/install-options/agent-config/"}),"K3s Agent Configuration Reference"))))),(0,r.kt)("h2",p({},{id:"registriesyaml"}),"registries.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-yaml"}),'mirrors:\n  # \u9488\u5bf9 docker.io \u7684\u955c\u50cf\u4ed3\u5e93\n  docker.io:\n    endpoint:\n      - https://fogjl973.mirror.aliyuncs.com\n      - https://8x40wsit.mirror.aliyuncs.com\n      - https://docker.mirrors.ustc.edu.cn\n      - https://registry-1.docker.io\n# \u79c1\u6709\u4ed3\u5e93\u8fd8\u9700\u8981\u914d\u7f6e\u8ba4\u8bc1\u4fe1\u606f\n# configs:\n#   # \u6dfb\u52a0\u6388\u6743\u548c\u8bc1\u4e66\n#   "mycustomreg:5000":\n#     auth:\n#       username: xxxxxx\n#       password: xxxxxx\n#     tls:\n#       cert_file:\n#       key_file:\n#       ca_file:\n')),(0,r.kt)("h2",p({},{id:"configyaml"}),"config.yaml"),(0,r.kt)("h3",p({},{id:"server"}),"server"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-yaml"}),"# \u6570\u636e\u5e93\u914d\u7f6e\ndatastore-endpoint:\n# TLS \u8fde\u63a5 - \u6bd4\u5982 PG\ndatastore-cafile:\ndatastore-certfile:\ndatastore-keyfile:\n\n# \u52a0\u5165 server \u548c agent\ntoken:\ntoken-file:\n\n# \u5199\u5165 kubeconfig\nwrite-kubeconfig: /etc/rancher/k3s/k3s.yml\nwrite-kubeconfig-mode: '0644'\n\n# Agent \u914d\u7f6e - server \u4e5f\u4f1a\u8fd0\u884c agent\uff0c\u914d\u7f6e\u540c agent \u914d\u7f6e\n#\n\n# \u76d1\u542c\u914d\u7f6e\nbind-address: 0.0.0.0\nhttps-listen-port: 6443\nadvertise-address: #node-external-ip/node-ip\nadvertise-port:\n# \u5982\u679c\u5e0c\u671b\u8bc1\u4e66\u5728\u67d0\u4e2a\u57df\u540d\u4e0b\u53ef\u4f7f\u7528\u5219\u9700\u8981\u6dfb\u52a0 SAN\ntls-san:\n  - k3s.example.com\n\n# \u5982\u679c\u975e ROOT ${HOME}/.rancher/k3s\ndata-dir: /var/lib/rancher/k3s\n\n# \u7f51\u7edc\ncluster-cidr: 10.42.0.0/16\nservice-cidr: 10.43.0.0/16\n# CoreDNS\ncluster-dns: 10.43.0.10\ncluster-domain: cluster.local\n# none,vxlan,ipsec,host-gw,wireguard\nflannel-backend: vxlan\n\n# \u81ea\u5b9a\u4e49\nkube-apiserver-arg:\nkube-scheduler-arg:\nkube-controller-manager-arg:\nkube-cloud-controller-manager-arg:\n\nkubelet-arg:\nkube-proxy-arg:\n\n# \u9ed8\u8ba4\u672c\u5730\u57fa\u4e8e path \u7684 sc \u5b58\u50a8\u8def\u5f84\ndefault-local-storage-path:\n\n# \u7ec4\u4ef6\n# coredns, servicelb, traefik, local-storage, metrics-server\ndisable:\n  - servicelb\n  - traefik\ndisable-scheduler: false\ndisable-cloud-controller: false\ndisable-network-policy: false\n\n# \u5b9e\u9a8c\u9636\u6bb5\nrootless: false\nagent-token:\nagent-token-file:\nserver:\n\n# --cluster-init\n# --cluster-reset\n\n# Secret encryption at rest\nsecrets-encryption: false\n")),(0,r.kt)("h3",p({},{id:"agent"}),"agent"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-yaml"}),"token: value\ntoken-file: k3s-agent.token\nserver: value\n\ndata-dir: /var/lib/rancher/k3s\n\n# Note\nnode-name: hostname\n# with-node-id: true\n# node-label\n# node-taint\n\n# Runtime\ndocker: true\ncontainer-runtime-endpoint:\npause-image: docker.io/rancher/pause:3.1\nprivate-registry: /etc/rancher/k3s/registries.yaml\n\n# Networking\n# node-ip:\n# node-external-ip:\n# resolv-conf\nflannel-iface:\nflannel-conf:\n\nkubelet-arg:\nkube-proxy-arg:\n\nrootless: true\n")))}v.isMDXComponent=!0}}]);