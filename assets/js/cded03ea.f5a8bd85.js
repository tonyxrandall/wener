"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[19469],{49613:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var a=r(59496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,f=u["".concat(s,".").concat(d)]||u[d]||p[d]||l;return r?a.createElement(f,i(i({ref:t},m),{},{components:r})):a.createElement(f,i({ref:t},m))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},67480:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return u},metadata:function(){return f},toc:function(){return g}});var a=r(49613),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&m(e,r,t[r]);if(o)for(var r of o(t))c.call(t,r)&&m(e,r,t[r]);return e};const u={title:"TimeScale"},d="TimeScale",f={unversionedId:"db/relational/postgresql/timescale",id:"db/relational/postgresql/timescale",title:"TimeScale",description:"- TimeScale",source:"@site/../notes/db/relational/postgresql/timescale.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/timescale",permalink:"/notes/db/relational/postgresql/timescale",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/relational/postgresql/timescale.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1669459050,formattedLastUpdatedAt:"Nov 26, 2022",frontMatter:{title:"TimeScale"},sidebar:"docs",previous:{title:"Spilo",permalink:"/notes/db/relational/postgresql/spilo"},next:{title:"WAL-G",permalink:"/notes/db/relational/postgresql/wal-g"}},b={},g=[{value:"Notes",id:"notes",level:2}],h={toc:g};function k(e){var t,r=e,{components:n}=r,m=((e,t)=>{var r={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&c.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=p(p({},h),m),l(t,i({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("h1",p({},{id:"timescale"}),"TimeScale"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"http://www.timescale.com/"}),"TimeScale")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"https://github.com/timescale/timescaledb"}),"timescale/timescaledb"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"An open-source time-series database optimized for fast ingest and complex queries. Engineered up from PostgreSQL, packaged as an extension."))),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"https://blog.timescale.com/time-series-data-postgresql-10-vs-timescaledb-816ee808bac5"}),"Problems with PostgreSQL 10 for time-series data")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"https://blog.timescale.com/blog/building-a-distributed-time-series-database-on-postgresql/"}),"Building a distributed time-series database on PostgreSQL")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"https://github.com/timescale/pg_prometheus"}),"timescale/pg_prometheus")," - ",(0,a.kt)("a",p({parentName:"li"},{href:"https://github.com/timescale/prometheus-postgresql-adapter"}),"timescale/prometheus-postgresql-adapter"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"PostgreSQL extension for Prometheus data"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u518d\u4f7f\u7528\u8be5\u7ed3\u6784"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"https://github.com/timescale/timescale-prometheus"}),"timescale/timescale-prometheus"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"prometheus \u4ea4\u4e92\u65b0\u7684\u67b6\u6784"),(0,a.kt)("li",{parentName:"ul"},"\u4f5c\u4e3a RemoteStorage"),(0,a.kt)("li",{parentName:"ul"},"prometheus ",(0,a.kt)("a",p({parentName:"li"},{href:"https://prometheus.io/docs/prometheus/latest/configuration/configuration/#remote_write"}),"remote_write")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"https://docs.timescaledb.com/using-timescaledb/telemetry"}),"https://docs.timescaledb.com/using-timescaledb/telemetry"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"timescaledb.telemetry_level=off")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ALTER [SYSTEM | DATABASE | USER] { *db_name* | *role_specification* } SET timescaledb.telemetry_level=off")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"https://github.com/timescale/timescaledb/issues/638"}),"timescale/timescaledb#638")," - List of recommended ZFS/Zpool settings")))),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"# \u57fa\u4e8e postgres \u4e0a\u6e38\u6784\u5efa\u7684\u955c\u50cf\n# https://github.com/timescale/timescaledb-docker\n# timescale/timescaledb-postgis \u5305\u542b postgis \u6269\u5c55\ndocker run --rm -it \\\n  -p 5432:5432 \\\n  -v $PWD/data:/var/lib/postgresql/data \\\n  -e POSTGRES_DB=timescale \\\n  -e POSTGRES_USER=timescale \\\n  -e POSTGRES_PASSWORD=timescale \\\n  --name timescaledb timescale/timescaledb:latest-pg12\n\n# http://localhost:9201/metrics\n# -log-level \u9ed8\u8ba4 debug\n# -async-acks \u5728\u5199\u5165\u5230\u6570\u636e\u5e93\u4e4b\u524d\u54cd\u5e94 - \u53ef\u80fd\u4e22\u4f46 metric \u573a\u666f\u4e0b\u4e00\u822c\u4e0d\u5f71\u54cd\ndocker run --rm -it --link timescaledb:db \\\n  -p 9201:9201 \\\n  --name ts-prometheus timescale/timescale-prometheus \\\n  -async-acks \\\n  -db-host=db -db-name=timescale -db-port=5432 -db-user=timescale -db-password=timescale\n\nprometheus --config.file=prometheus.yml\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"prometheus.yml")),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-yaml"}),"global:\n  scrape_interval: 15s\n\nscrape_configs:\n  - job_name: 'prometheus'\n    static_configs:\n      - targets: ['localhost:9090']\n\n  - job_name: 'node'\n    static_configs:\n      - targets: ['localhost:9100']\n\n  - job_name: 'tsdb-prom'\n    static_configs:\n      - targets: ['localhost:9201']\n\nremote_write:\n  - url: 'http://localhost:9201/write'\nremote_read:\n  - url: 'http://localhost:9201/read'\n")),(0,a.kt)("h2",p({},{id:"notes"}),"Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"https://docs.timescale.com/introduction/architecture"}),"Architecture & Concepts"))))}k.isMDXComponent=!0}}]);