"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[96926],{49613:function(t,e,a){a.d(e,{Zo:function(){return o},kt:function(){return s}});var n=a(59496);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),u=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=u(t.components);return n.createElement(m.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),d=u(a),s=r,N=d["".concat(m,".").concat(s)]||d[s]||k[s]||l;return a?n.createElement(N,i(i({ref:e},o),{},{components:a})):n.createElement(N,i({ref:e},o))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=d;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2946:function(t,e,a){a.r(e),a.d(e,{assets:function(){return g},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return d},metadata:function(){return N},toc:function(){return c}});var n=a(49613),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,o=(t,e,a)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,k=(t,e)=>{for(var a in e||(e={}))m.call(e,a)&&o(t,a,e[a]);if(p)for(var a of p(e))u.call(e,a)&&o(t,a,e[a]);return t};const d={title:"Asterisk AGI"},s="Asterisk AGI",N={unversionedId:"voip/asterisk/asterisk-agi",id:"voip/asterisk/asterisk-agi",title:"Asterisk AGI",description:"- AGI - Asterisk Gateway Interface - CGI",source:"@site/../notes/voip/asterisk/asterisk-agi.md",sourceDirName:"voip/asterisk",slug:"/voip/asterisk/agi",permalink:"/notes/voip/asterisk/agi",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/voip/asterisk/asterisk-agi.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1621311972,formattedLastUpdatedAt:"May 18, 2021",frontMatter:{title:"Asterisk AGI"},sidebar:"docs",previous:{title:"Asterisk",permalink:"/notes/voip/asterisk/"},next:{title:"Asterisk AMI",permalink:"/notes/voip/asterisk/ami"}},g={},c=[{value:"Notes",id:"notes",level:2},{value:"res_agi.c",id:"res_agic",level:2}],b={toc:c};function y(t){var e,a=t,{components:r}=a,o=((t,e)=>{var a={};for(var n in t)m.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&p)for(var n of p(t))e.indexOf(n)<0&&u.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=k(k({},b),o),l(e,i({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("h1",k({},{id:"asterisk-agi"}),"Asterisk AGI"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"AGI - Asterisk Gateway Interface - CGI"),(0,n.kt)("li",{parentName:"ul"},"Async AGI",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Asterisk 1.6+"),(0,n.kt)("li",{parentName:"ul"},"\u5f02\u6b65 CGI \u811a\u672c - \u76f8\u5bf9\u4f7f\u7528\u5c11 - \u53ef\u4ee5\u4f7f\u7528 AMI\u3001ARI\u3001WebSocket \u5b9e\u73b0"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"agi:async")))),(0,n.kt)("li",{parentName:"ul"},"FastAGI",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"tcp \u4ea4\u4e92"),(0,n.kt)("li",{parentName:"ul"},"\u8fdc\u7a0b\u811a\u672c"),(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7aef\u53e3 4573"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"agi://host.domain[:port][/script/name]")),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 HA - DNS Lookup - \u9ad8\u53ef\u7528",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u524d\u7f00 ",(0,n.kt)("inlineCode",{parentName:"li"},"_agi._tcp.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"hagi://agi.example.com/foo.agi")," -> ",(0,n.kt)("inlineCode",{parentName:"li"},"_agi._tcp.agi.example.com")))))),(0,n.kt)("li",{parentName:"ul"},"agi-bin",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"exec \u6267\u884c - \u57fa\u4e8e io \u4ea4\u4e92"),(0,n.kt)("li",{parentName:"ul"},"eagi \u652f\u6301\u97f3\u9891\u901a\u9053 - \u4e0d\u53ef\u4ee5\u8fd0\u884c\u5728\u6302\u65ad\u7684\u901a\u9053"),(0,n.kt)("li",{parentName:"ul"},"\u4f8b\u5982 ",(0,n.kt)("inlineCode",{parentName:"li"},"AGI(test.bash)")," -> /var/lib/asterisk/agi-bin/test.bash"))),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"1.8 ",(0,n.kt)("a",k({parentName:"li"},{href:"https://wiki.asterisk.org/wiki/display/AST/AGI+Commands"}),"AGI Commands")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"http://marcelog.github.io/articles/agi.html"}),"The Asterisk Gateway Protocol: A practical introduction and tutorial to agi applications"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"extensions.conf")),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-conf"}),"[default]\nexten => 1000,1,AGI(agi://localhost:3000)\n# \u8c03\u7528 PHP \u5904\u7406\nexten => 1,1,AGI(myApplication.php)\n")),(0,n.kt)("h2",k({},{id:"notes"}),"Notes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"AGI \u901a\u8fc7 stdin stdout \u4ea4\u4e92"),(0,n.kt)("li",{parentName:"ul"},"AMI AGI \u4e8b\u4ef6",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"AGIExecStart"),(0,n.kt)("li",{parentName:"ul"},"AGIExecEnd"),(0,n.kt)("li",{parentName:"ul"},"AsyncAGIStart"),(0,n.kt)("li",{parentName:"ul"},"AsyncAGIExec"),(0,n.kt)("li",{parentName:"ul"},"AsyncAGIEnd")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u73af\u5883\u53d8\u91cf\u4f20\u9012\u914d\u7f6e")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"env"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"desc"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"AST_CONFIG_DIR"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"astetcdir")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"AST_CONFIG_FILE"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"asterisk.conf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"AST_MODULE_DIR"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"astmoddir")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"AST_SPOOL_DIR"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"astspooldir")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"AST_MONITOR_DIR"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u9ed8\u8ba4 AST_SPOOL_DIR/monitor")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"AST_VAR_DIR"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"astvarlibdir")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"AST_DATA_DIR"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"astdbdir")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"AST_LOG_DIR"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"astlogdir")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"AST_AGI_DIR"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"astagidir")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"AST_KEY_DIR"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"astkeydir")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"AST_RUN_DIR"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"astrundir")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4f20\u9012 asterisk.conf \u914d\u7f6e\u7684\u76ee\u5f55\u53c2\u6570")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53d8\u91cf\u4f20\u9012\u4e0a\u4e0b\u6587\u4fe1\u606f")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"var"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"demo"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"desc"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"agi_request"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"test.bash"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"filename of script")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"agi_channel"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"SIP/6001-00000004"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"originating channel")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"agi_language"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"en"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"language code")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"agi_type"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"SIP"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"originating channel type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"agi_uniqueid"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"1621099875.4"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"unique ID for call")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"agi_version"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"18.2.1"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"version of Asterisk (since Asterisk 1.6)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"agi_callerid"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"unknown"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),'caller ID number (or "unknown").')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"agi_calleridname"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"unknown"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),'caller ID name (or "unknown").')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"agi_callingpres"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"1"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"presentation of callerid.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"agi_callingani2"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"0"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"PRI Channels ani2 variable.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"agi_callington"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"0"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The type of number used in PRI Channels.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"agi_callingtns"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"0"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"An optional 4 digit number (Transit Network Selector).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"agi_dnid"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"unknown"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),'The dialed number id (or "unknown").')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"agi_rdnis"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"unknown"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),'The referring DNIS number (or "unknown").')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"agi_context"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"test"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Origin context in extensions.conf.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"agi_extension"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"1"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The called number (dnis).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"agi_priority"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"1"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The priority it was executed as in the dial plan.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"agi_enhanced"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"0.0"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The flag value is 1.0 if started as an EAGI script, 0.0 otherwise.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"agi_accountcode"),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Account code of the origin channel.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"agi_threadid"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"140092630592288"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Thread ID of the AGI script.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53d8\u91cf\u683c\u5f0f")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"agi_arg_<N>")," \u4e3a AGI \u53c2\u6570",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f8b\u5982 ",(0,n.kt)("inlineCode",{parentName:"li"},"AGI(/tmp/agi.sh,arg1,arg2)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"agi_arg_1: arg1"),(0,n.kt)("li",{parentName:"ul"},"agi_arg_2: arg2")))))),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-ini"}),'# \u63a5\u6536\u53d8\u91cf\n<variable_name>:<space><variable_value>\nagi_context: default\nagi_arg_1: abc\n\n# FastAGI \u811a\u672c\u53c2\u6570\n# AGI(agi://192.168.0.2/CallerWantsCustomerService,${EXTEN},${UNIQUEID},${CALLERID(name)})\nagi_network: yes\nagi_network_script: CallerWantsCustomerService\n\n# \u53d1\u9001\u547d\u4ee4\nVERBOSE "message" 3\n# \u63a5\u6536\u54cd\u5e94\n<error_code><space>result=<result_data><space>[additional_data]\n200 result=1\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"resp"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"desc"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"error_code"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"result_data"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"additional_data"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"result_data \u4e4b\u5916\u7684\u989d\u5916\u6570\u636e")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"error_code"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"desc"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"200"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Operation was completed successfully.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"510"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Invalid or unknown command.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"511"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The command cant be executed on a dead (closed, terminated, hung up) channel.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"520"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"End of proper usage, when the command returns its syntax.")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"AGISTATUS",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"SUCCESS"),(0,n.kt)("li",{parentName:"ul"},"FAILURE"),(0,n.kt)("li",{parentName:"ul"},"NOTFOUND"),(0,n.kt)("li",{parentName:"ul"},"HANGUP")))),(0,n.kt)("h2",k({},{id:"res_agic"}),"res_agi.c"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://github.com/asterisk/asterisk/blob/master/res/res_agi.c"}),"res/res_agi.c")),(0,n.kt)("li",{parentName:"ul"},"run_agi - \u5b9e\u9645\u5904\u7406\u6d41\u7a0b",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"agi_handle_command - \u5904\u7406\u8bfb\u53d6\u547d\u4ee4\uff0c\u8fd4\u56de cmd_status",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"find_command \u5339\u914d\u547d\u4ee4"))))),(0,n.kt)("li",{parentName:"ul"},"setup_env - \u53d1\u9001\u53d8\u91cf\u4fe1\u606f"),(0,n.kt)("li",{parentName:"ul"},"agi_command - \u6ce8\u518c\u7684\u547d\u4ee4",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"cmda - \u547d\u4ee4 - \u4f8b\u5982 ",(0,n.kt)("inlineCode",{parentName:"li"},'{"get","data"}')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"int (* const handler)(struct ast_channel *chan, AGI *agi, int argc, const char * const argv[])")),(0,n.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u547d\u4ee4\u5185\u90e8\u81ea\u884c\u89e3\u6790\u53c2\u6570")))))}y.isMDXComponent=!0}}]);