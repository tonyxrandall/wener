"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[35207],{49613:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return k}});var r=a(59496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),m=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=m(a),k=n,d=s["".concat(p,".").concat(k)]||s[k]||c[k]||l;return a?r.createElement(d,i(i({ref:t},u),{},{components:a})):r.createElement(d,i({ref:t},u))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},71979:function(e,t,a){a.r(t),a.d(t,{assets:function(){return b},contentTitle:function(){return k},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return N}});var r=a(49613),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&u(e,a,t[a]);if(o)for(var a of o(t))m.call(t,a)&&u(e,a,t[a]);return e};const s={title:"airbyte"},k="airbyte",d={unversionedId:"service/data/airbyte",id:"service/data/airbyte",title:"airbyte",description:"- airbytehq/airbyte",source:"@site/../notes/service/data/airbyte.md",sourceDirName:"service/data",slug:"/service/data/airbyte",permalink:"/notes/service/data/airbyte",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/data/airbyte.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1645033829,formattedLastUpdatedAt:"Feb 16, 2022",frontMatter:{title:"airbyte"},sidebar:"docs",previous:{title:"\u6570\u636e",permalink:"/notes/service/data/"},next:{title:"archivebox",permalink:"/notes/service/data/crawler/archivebox"}},b={},N=[{value:"Docker",id:"docker",level:2},{value:"Kubernetes",id:"kubernetes",level:2},{value:"Notes",id:"notes",level:2},{value:"Integrations",id:"integrations",level:2},{value:"When to use CDC",id:"when-to-use-cdc",level:2}],y={toc:N};function h(e){var t,a=e,{components:n}=a,u=((e,t)=>{var a={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&m.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=c(c({},y),u),l(t,i({components:n,mdxType:"MDXLayout"}))),(0,r.kt)("h1",c({},{id:"airbyte"}),"airbyte"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/airbytehq/airbyte"}),"airbytehq/airbyte"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"MIT+ELv2, Java+Python+TypeScript"),(0,r.kt)("li",{parentName:"ul"},"ETL"),(0,r.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u7528\u5230 temporal \u8fdb\u884c\u8c03\u5ea6"),(0,r.kt)("li",{parentName:"ul"},"Source",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"APIs - Github, Gitlab, Notion"),(0,r.kt)("li",{parentName:"ul"},"Database - PostgreSQL, MySQL, ClickHouse, CockroachDB, MongoDB"),(0,r.kt)("li",{parentName:"ul"},"Files",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Format - CSV, JSON, jsonl, excel, parquet, feather"),(0,r.kt)("li",{parentName:"ul"},"Provider - HTTP, S3, SFTP, SSH SCP"))),(0,r.kt)("li",{parentName:"ul"},"Queue - Kafka"),(0,r.kt)("li",{parentName:"ul"},"RESTful"))),(0,r.kt)("li",{parentName:"ul"},"Destination",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Kafka, MQTT, RabbitMQ, Pulsar, Redis"),(0,r.kt)("li",{parentName:"ul"},"S3, CSV, JSON, SFTP"),(0,r.kt)("li",{parentName:"ul"},"MySQL, PostgreSQL, Cassandra, ElasticSearch, MongoDB, MeiliSearch"))))),(0,r.kt)("li",{parentName:"ul"},"CDC",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"PostgreSQL - wal2json, pgoutput"),(0,r.kt)("li",{parentName:"ul"},"MySQL"),(0,r.kt)("li",{parentName:"ul"},"MSSQL"))),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://demo.airbyte.io/"}),"demo.airbyte.io")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://docs.airbyte.com/project-overview/licenses/examples"}),"ELv2 \u4e0d\u80fd\u505a\u7684\u4e8b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://airbyte-public-api-docs.s3.us-east-2.amazonaws.com/rapidoc-api-docs.html#auth"}),"API"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-api/src/main/openapi/config.yaml"}),"airbyte-api/src/main/openapi/config.yaml")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/mrin9/RapiDoc"}),"mrin9/RapiDoc"))))))),(0,r.kt)("admonition",c({},{type:"caution"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u5f00\u6e90\u7248\u672c API \u76ee\u524d\u65e0\u8ba4\u8bc1"))),(0,r.kt)("h2",c({},{id:"docker"}),"Docker"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/airbytehq/airbyte/blob/master/docker-compose.yaml"}),"docker-compose.yaml"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"airbyte/scheduler"),(0,r.kt)("li",{parentName:"ul"},"airbyte/webapp"),(0,r.kt)("li",{parentName:"ul"},"airbyte/server"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/airbytehq/airbyte/tree/master/airbyte-temporal"}),"airbyte/temporal"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u57fa\u4e8e temporal \u5b98\u65b9\u811a\u672c"),(0,r.kt)("li",{parentName:"ul"},"\u91cd\u65b0\u6784\u5efa\u6dfb\u52a0 M1 \u652f\u6301"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/airbytehq/airbyte/blob/master/temporal/dynamicconfig/development.yaml"}),"temporal/dynamicconfig/development.yaml"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"limit.blobSize.warn=10MB - \u9ed8\u8ba4 512KB"),(0,r.kt)("li",{parentName:"ul"},"limit.blobSize.error=15MB - \u9ed8\u8ba4 2MB"))))),(0,r.kt)("li",{parentName:"ul"},"airbyte/worker"),(0,r.kt)("li",{parentName:"ul"},"airbyte/db - PostgreSQL"),(0,r.kt)("li",{parentName:"ul"},"airbyte/bootloader"),(0,r.kt)("li",{parentName:"ul"},"airbyte/init"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/airbytehq/airbyte/blob/master/docker-compose.debug.yaml"}),"docker-compose.debug.yaml"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"temporalio/web")))),(0,r.kt)("h2",c({},{id:"kubernetes"}),"Kubernetes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://docs.airbyte.com/deploying-airbyte/on-kubernetes#known-issues"}),"Known Issues")),(0,r.kt)("li",{parentName:"ul"},"Helm ",(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/airbytehq/airbyte/tree/master/charts/airbyte"}),"charts/airbyte"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"charts",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"bitnami-common"),(0,r.kt)("li",{parentName:"ul"},"postgresql"),(0,r.kt)("li",{parentName:"ul"},"minio"))),(0,r.kt)("li",{parentName:"ul"},"temporal - \u5185\u7f6e"))),(0,r.kt)("li",{parentName:"ul"},"Kustomization ",(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/airbytehq/airbyte/tree/master/kube"}),"resources"))),(0,r.kt)("h2",c({},{id:"notes"}),"Notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Scheduler",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"API -> Temporal"))),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://docs.airbyte.com/understanding-airbyte/airbyte-specification"}),"Specification")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://docs.airbyte.com/understanding-airbyte/high-level-view"}),"High-level View")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://docs.airbyte.com/project-overview/changelog"}),"changelog"))))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"field"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"desc"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"_airbyte_ab_id")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"uuid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"_airbyte_emitted_at")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"timestamp-millis")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"_airbyte_additional_properties")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"map of string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"_airbyte_data")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u5b9e\u9645\u6570\u636e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"_airbyte_normalized_at")),(0,r.kt)("td",c({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"_ab_cdc_updated_at")),(0,r.kt)("td",c({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"_ab_cdc_deleted_at")),(0,r.kt)("td",c({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"_ab_cdc_lsn")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"PostgreSQL, MSSQL CDC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"_ab_cdc_log_file")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"MySQL CDC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"_ab_cdc_log_pos")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"MySQL CDC")))),(0,r.kt)("h2",c({},{id:"integrations"}),"Integrations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://docs.airbyte.com/integrations/sources"}),"Source"))),(0,r.kt)("h1",c({},{id:"faq"}),"FAQ"),(0,r.kt)("h2",c({},{id:"when-to-use-cdc"}),"When to use CDC"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5e0c\u671b\u83b7\u53d6\u5230\u5220\u9664\u4fe1\u606f"),(0,r.kt)("li",{parentName:"ul"},"\u6570\u636e\u91cf\u5927"),(0,r.kt)("li",{parentName:"ul"},"\u8868\u91cc\u6ca1\u6709\u589e\u91cf\u540c\u6b65\u4fe1\u606f - \u4f8b\u5982: updated_at")))}h.isMDXComponent=!0}}]);