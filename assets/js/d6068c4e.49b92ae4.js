"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[8429],{49613:function(e,t,l){l.d(t,{Zo:function(){return m},kt:function(){return c}});var a=l(59496);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var u=a.createContext({}),p=function(e){var t=a.useContext(u),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},m=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var l=e.components,n=e.mdxType,r=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),g=p(l),c=n,k=g["".concat(u,".").concat(c)]||g[c]||s[c]||r;return l?a.createElement(k,i(i({ref:t},m),{},{components:l})):a.createElement(k,i({ref:t},m))}));function c(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=l.length,i=new Array(r);i[0]=g;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<r;p++)i[p]=l[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,l)}g.displayName="MDXCreateElement"},84339:function(e,t,l){l.r(t),l.d(t,{assets:function(){return f},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return g},metadata:function(){return k},toc:function(){return b}});var a=l(49613),n=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,l)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,s=(e,t)=>{for(var l in t||(t={}))u.call(t,l)&&m(e,l,t[l]);if(o)for(var l of o(t))p.call(t,l)&&m(e,l,t[l]);return e};const g={title:"Logging Awesome",tags:["Awesome"]},c="Logging Awesome",k={unversionedId:"service/observability/logging/logging-awesome",id:"service/observability/logging/logging-awesome",title:"Logging Awesome",description:"- Logging Stack",source:"@site/../notes/service/observability/logging/logging-awesome.md",sourceDirName:"service/observability/logging",slug:"/service/observability/logging/awesome",permalink:"/notes/service/observability/logging/awesome",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/observability/logging/logging-awesome.md",tags:[{label:"Awesome",permalink:"/notes/tags/awesome"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1646204158,formattedLastUpdatedAt:"Mar 2, 2022",frontMatter:{title:"Logging Awesome",tags:["Awesome"]},sidebar:"docs",previous:{title:"Fluentbit",permalink:"/notes/service/observability/logging/fluentbit"},next:{title:"logging-operator",permalink:"/notes/service/observability/logging/operator"}},f={},b=[{value:"Collector",id:"collector",level:2},{value:"\u65e5\u5fd7\u5b58\u50a8",id:"\u65e5\u5fd7\u5b58\u50a8",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2},{value:"fluent-bit vs Fluentd",id:"fluent-bit-vs-fluentd",level:2},{value:"Fluentd vs Logstash",id:"fluentd-vs-logstash",level:2}],N={toc:b};function d(e){var t,l=e,{components:n}=l,m=((e,t)=>{var l={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(l[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&p.call(e,a)&&(l[a]=e[a]);return l})(l,["components"]);return(0,a.kt)("wrapper",(t=s(s({},N),m),r(t,i({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("h1",s({},{id:"logging-awesome"}),"Logging Awesome"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Logging Stack",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"ELK"),(0,a.kt)("li",{parentName:"ul"},"EFK - Elastic, Fluent, Kibana"),(0,a.kt)("li",{parentName:"ul"},"PLG - Promtail, Loki, Grafana"),(0,a.kt)("li",{parentName:"ul"},"FIG - Fluent, InfluxDB, Grafana"))),(0,a.kt)("li",{parentName:"ul"},"OS Log",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"linux",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"kmsg"),(0,a.kt)("li",{parentName:"ul"},"syslog"),(0,a.kt)("li",{parentName:"ul"},"/var/log"))),(0,a.kt)("li",{parentName:"ul"},"windows",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"event log"))),(0,a.kt)("li",{parentName:"ul"},"macos",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"/var/log",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"system.log"),(0,a.kt)("li",{parentName:"ul"},"wifi.log"),(0,a.kt)("li",{parentName:"ul"},"install.log"))),(0,a.kt)("li",{parentName:"ul"},"/Library/Logs"),(0,a.kt)("li",{parentName:"ul"},"~/Library/Logs")))))),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/banzaicloud/logging-operator"}),"banzaicloud/logging-operator"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Fluentd and Fluentbit")))),(0,a.kt)("h2",s({},{id:"collector"}),"Collector"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"vector"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/fluent/fluentd"}),"fluent/fluentd"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Apache-2.0, Ruby+C"),(0,a.kt)("li",{parentName:"ul"},"\u53bb\u4e2d\u5fc3\u5316\u63d2\u4ef6\u7cfb\u7edf"),(0,a.kt)("li",{parentName:"ul"},"\u57fa\u4e8e Tag \u8def\u7531"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/fluent/fluent-bit"}),"fluent/fluent-bit"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Apache-2.0, C"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 Go \u63d2\u4ef6 - musl \u4e0d\u652f\u6301"))),(0,a.kt)("li",{parentName:"ul"},"Logstash",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e2d\u5fc3\u5316\u63d2\u4ef6\u7cfb\u7edf"),(0,a.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u8bed\u53e5\u8def\u7531"))),(0,a.kt)("li",{parentName:"ul"},"beats",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"filebeat"),(0,a.kt)("li",{parentName:"ul"},"metricbeat"),(0,a.kt)("li",{parentName:"ul"},"packetbeat"),(0,a.kt)("li",{parentName:"ul"},"winlogbeat"),(0,a.kt)("li",{parentName:"ul"},"auditbeat"),(0,a.kt)("li",{parentName:"ul"},"heartbeat"),(0,a.kt)("li",{parentName:"ul"},"functionbeat"))),(0,a.kt)("li",{parentName:"ul"},"Splunk")),(0,a.kt)("h2",s({},{id:"\u65e5\u5fd7\u5b58\u50a8"}),"\u65e5\u5fd7\u5b58\u50a8"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/grafana/loki"}),"grafana/loki"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"AGPL-3.0, Go"),(0,a.kt)("li",{parentName:"ul"},"\u65e5\u5fd7\u754c\u7684 Prometheus"))),(0,a.kt)("li",{parentName:"ul"},"es"),(0,a.kt)("li",{parentName:"ul"},"influxdb")),(0,a.kt)("h2",s({},{id:"\u53c2\u8003"}),"\u53c2\u8003"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://eng.uber.com/logging"}),"Fast and Reliable Schema-Agnostic Log Analytics Platform"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"ELK -> Clickhouse")))),(0,a.kt)("h1",s({},{id:"faq"}),"FAQ"),(0,a.kt)("h2",s({},{id:"fluent-bit-vs-fluentd"}),"fluent-bit vs Fluentd"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"fluent-bit",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u66f4\u52a0\u8f7b\u91cf - \u8fd0\u884c\u5185\u5b58 450K"),(0,a.kt)("li",{parentName:"ul"},"\u63d2\u4ef6\u8f83\u5c11 - 35+"),(0,a.kt)("li",{parentName:"ul"},"\u5f3a\u8c03\u53f6\u5b50\u8282\u70b9\u65e5\u5fd7\u91c7\u96c6 - \u7c7b\u4f3c \u5404\u79cd beats \u96c6\u5408"))),(0,a.kt)("li",{parentName:"ul"},"Fluentd",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Ruby+C - \u8fd0\u884c\u5185\u5b58 40MB"),(0,a.kt)("li",{parentName:"ul"},"\u63d2\u4ef6\u591a - 650+"),(0,a.kt)("li",{parentName:"ul"},"\u5f3a\u8c03\u65e5\u5fd7\u805a\u5408\u5206\u6790\u5904\u7406")))),(0,a.kt)("h2",s({},{id:"fluentd-vs-logstash"}),"Fluentd vs Logstash"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://logz.io/blog/fluentd-logstash/"}),"Fluentd vs Logstash"))))))}d.isMDXComponent=!0}}]);