"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[39311],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=m(n),k=r,c=s["".concat(o,".").concat(k)]||s[k]||d[k]||l;return n?a.createElement(c,i(i({ref:t},u),{},{components:n})):a.createElement(c,i({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},88028:function(e,t,n){n.r(t),n.d(t,{assets:function(){return N},contentTitle:function(){return k},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return _}});var a=n(49613),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&u(e,n,t[n]);if(p)for(var n of p(t))m.call(t,n)&&u(e,n,t[n]);return e};const s={title:"Nginx Modules"},k="Nginx Modules",c={unversionedId:"devops/web/nginx-modules",id:"devops/web/nginx-modules",title:"Nginx Modules",description:"ngxhttpcore_module - HTTP \u6838\u5fc3\u6a21\u5757",source:"@site/../notes/devops/web/nginx-modules.md",sourceDirName:"devops/web",slug:"/devops/web/nginx-modules",permalink:"/notes/devops/web/nginx-modules",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/web/nginx-modules.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1627904182,formattedLastUpdatedAt:"Aug 2, 2021",frontMatter:{title:"Nginx Modules"},sidebar:"docs",previous:{title:"Nginx FAQ",permalink:"/notes/devops/web/nginx-faq"},next:{title:"Nginx \u8c03\u4f18",permalink:"/notes/devops/web/nginx-tuning"}},N={},_=[{value:"ngx_http_core_module - HTTP \u6838\u5fc3\u6a21\u5757",id:"ngx_http_core_module---http-\u6838\u5fc3\u6a21\u5757",level:2},{value:"ngx_http_proxy_module - HTTP \u4ee3\u7406",id:"ngx_http_proxy_module---http-\u4ee3\u7406",level:2},{value:"ngx_http_rewrite_module - HTTP \u91cd\u5199",id:"ngx_http_rewrite_module---http-\u91cd\u5199",level:2},{value:"ngx_http_map_module",id:"ngx_http_map_module",level:2},{value:"ngx_http_addition_module - \u9644\u52a0\u5185\u5bb9",id:"ngx_http_addition_module---\u9644\u52a0\u5185\u5bb9",level:2},{value:"TODO",id:"todo",level:2}],h={toc:_};function g(e){var t,n=e,{components:r}=n,u=((e,t)=>{var n={};for(var a in e)o.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&m.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},h),u),l(t,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("h1",d({},{id:"nginx-modules"}),"Nginx Modules"),(0,a.kt)("h2",d({},{id:"ngx_http_core_module---http-\u6838\u5fc3\u6a21\u5757"}),"ngx_http_core_module - HTTP \u6838\u5fc3\u6a21\u5757"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"http://nginx.org/en/docs/http/ngx_http_core_module.html"}),"ngx_http_core_module")),(0,a.kt)("li",{parentName:"ul"},"\u4e0a\u4e0b\u6587",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"main",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"http",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"server",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"location")))))))))),(0,a.kt)("h2",d({},{id:"ngx_http_proxy_module---http-\u4ee3\u7406"}),"ngx_http_proxy_module - HTTP \u4ee3\u7406"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"http://nginx.org/en/docs/http/ngx_http_proxy_module.html"}),"ngx_http_proxy_module")),(0,a.kt)("li",{parentName:"ul"},"proxy_pass",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4e0d\u6821\u9a8c\u8bc1\u4e66 - ",(0,a.kt)("inlineCode",{parentName:"li"},"proxy_ssl_verify on")))),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://dev.to/danielkun/nginx-everything-about-proxypass-2ona"}),"Nginx: Everything about proxy_pass"))))),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-nginx"}),"# \u65e5\u5fd7\u8bb0\u5f55\u4e0a\u6e38 - \u65b9\u4fbf\u6392\u67e5\nlog_format upstream_logging '[$time_local] $remote_addr - $remote_user - $server_name to: $upstream: $request upstream_response_time $upstream_response_time msec $msec request_time $request_time';\naccess_log /dev/stdout upstream_logging;\n\n# \u53ef\u4ee5\u5728 upsteam \u4e0d\u53ef\u7528\u7684\u65f6\u5019\u4e5f\u80fd\u542f\u52a8\nset $upstream https://localhost:5000;\nproxy_pass $upstream/api/;\n\n# \u4f1a\u5305\u542b url \u53c2\u6570\nproxy_pass http://127.0.0.1:5000/api/webapp/;\n# \u7b49\u540c\u4e8e\nproxy_pass http://localhost:5000/api$request_uri;\n# \u53bb\u6389\u53c2\u6570\nproxy_pass http://localhost:5000/api$uri;\n")),(0,a.kt)("h2",d({},{id:"ngx_http_rewrite_module---http-\u91cd\u5199"}),"ngx_http_rewrite_module - HTTP \u91cd\u5199"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"http://nginx.org/en/docs/http/ngx_http_rewrite_module.html"}),"ngx_http_rewrite_module")),(0,a.kt)("li",{parentName:"ul"},"break - \u4e2d\u65ad\u5f53\u524d\u91cd\u5199\u6307\u4ee4"),(0,a.kt)("li",{parentName:"ul"},"if - \u6761\u4ef6\u63a7\u5236",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u903b\u8f91 ",(0,a.kt)("inlineCode",{parentName:"li"},"=")," ",(0,a.kt)("inlineCode",{parentName:"li"},"!="),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7a7a\u5b57\u7b26\u4e32\u6216 ",(0,a.kt)("inlineCode",{parentName:"li"},'"0"')," \u4e3a false"))),(0,a.kt)("li",{parentName:"ul"},"\u5339\u914d ",(0,a.kt)("inlineCode",{parentName:"li"},"~")," ",(0,a.kt)("inlineCode",{parentName:"li"},"~*")," ",(0,a.kt)("inlineCode",{parentName:"li"},"!~")," ",(0,a.kt)("inlineCode",{parentName:"li"},"!~*"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u5305\u542b ",(0,a.kt)("inlineCode",{parentName:"li"},"}")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"li"},";")," \u4f7f\u7528\u53cc\u5f15\u53f7\u62ec\u8d77\u6765"))),(0,a.kt)("li",{parentName:"ul"},"\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"li"},"-f")," ",(0,a.kt)("inlineCode",{parentName:"li"},"!-f")),(0,a.kt)("li",{parentName:"ul"},"\u76ee\u5f55 ",(0,a.kt)("inlineCode",{parentName:"li"},"-d")," ",(0,a.kt)("inlineCode",{parentName:"li"},"!-d")),(0,a.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u76ee\u5f55\u7b26\u53f7 ",(0,a.kt)("inlineCode",{parentName:"li"},"-e")," ",(0,a.kt)("inlineCode",{parentName:"li"},"!-e")),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"li"},"-x")," ",(0,a.kt)("inlineCode",{parentName:"li"},"!-x")))),(0,a.kt)("li",{parentName:"ul"},"return - \u505c\u6b62\u5904\u7406\u7acb\u5373\u8fd4\u56de",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u91cd\u5b9a\u5411 - 301, 302, 303, 307, 308"),(0,a.kt)("li",{parentName:"ul"},"\u5173\u95ed\u94fe\u63a5 - 444"),(0,a.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u5185\u5bb9"),(0,a.kt)("li",{parentName:"ul"},"302 \u5e94\u8be5\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"li"},"http://"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"https://"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"$scheme")," \u5f00\u5934"))),(0,a.kt)("li",{parentName:"ul"},"rewrite - \u5339\u914d\u5e76\u66ff\u6362 URL",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"flag \u53c2\u6570",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"last - \u505c\u6b62\u5904\u7406\u5f53\u524d\u91cd\u5b9a\u5411\u4ece\u65b0\u641c\u7d22\u5339\u914d"),(0,a.kt)("li",{parentName:"ul"},"break - \u505c\u6b62\u5904\u7406"),(0,a.kt)("li",{parentName:"ul"},"redirect - 302 \u91cd\u5b9a\u5411 - \u5982\u679c\u66ff\u6362\u4e0d\u662f\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"li"},"http://"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"https://"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"$scheme")," \u5f00\u5934"),(0,a.kt)("li",{parentName:"ul"},"permanent - 301 \u91cd\u5b9a\u5411"))))),(0,a.kt)("li",{parentName:"ul"},"rewrite_log"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"set $variable value")),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://www.nginx.com/resources/wiki/start/topics/depth/ifisevil/"}),"If is Evil... when used in location context")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"http://nginx.org/en/docs/http/converting_rewrite_rules.html"}),"Converting rewrite rules")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://www.nginx.com/resources/wiki/start/topics/tutorials/config_pitfalls/"}),"Pitfalls and Common Mistakes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://www.nginx.com/blog/creating-nginx-rewrite-rules/"}),"Creating NGINX Rewrite Rules"))))),(0,a.kt)("h2",d({},{id:"ngx_http_map_module"}),"ngx_http_map_module"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"http://nginx.org/en/docs/http/ngx_http_map_module.html"}),"ngx_http_map_module"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"http \u4e0a\u4e0b\u6587"),(0,a.kt)("li",{parentName:"ul"},"map",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u53c2\u6570",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"default value")," - \u9ed8\u8ba4\u503c"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hostnames")," - \u4e3b\u673a\u540d\u5339\u914d - \u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"li"},"*.example.net")," \u8fd9\u6837\u7684\u524d\u7f00\u540e\u7f00"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"include file")," - \u5f15\u5165\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"volatile")," - \u4e0d\u7f13\u5b58\u53d8\u91cf"))),(0,a.kt)("li",{parentName:"ul"},"\u5339\u914d",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"~")," \u5927\u5c0f\u5199\u654f\u611f\u6b63\u5219"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"~*")," \u5927\u5c0f\u5199 ",(0,a.kt)("em",{parentName:"li"},"\u4e0d")," \u654f\u611f\u6b63\u5219"))))))),(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e switch - \u521b\u5efa\u65b0\u7684\u53d8\u91cf"),(0,a.kt)("li",{parentName:"ul"},"\u53d8\u91cf\u5728\u7528\u5230\u7684\u65f6\u5019\u624d\u4f1a\u6c42\u503c\uff0c\u56e0\u6b64\u4e0d\u4f1a\u589e\u52a0\u5904\u7406\u8d1f\u62c5")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-nginx"}),"# \u6620\u5c04\u8def\u5f84\nmap $request_uri $redirect_uri {\n  ~/(?<lang>(en|de|fr))/oldname    /$lang/newname;\n}\n# \u6620\u5c04\u57df\u540d\nmap $http_host $served_host {\n    default $http_host;\n    ~(?<name>[^.]+).example.com $name.example.net;\n}\n")),(0,a.kt)("h2",d({},{id:"ngx_http_addition_module---\u9644\u52a0\u5185\u5bb9"}),"ngx_http_addition_module - \u9644\u52a0\u5185\u5bb9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"http://nginx.org/en/docs/http/ngx_http_addition_module.html"}),"ngx_http_addition_module")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"add_before_body uri"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5728\u6d88\u606f\u4f53\u4e4b\u524d"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"add_after_body uri"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5728\u6d88\u606f\u4f53\u4e4b\u540e"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"addition_types mime-type"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 ",(0,a.kt)("inlineCode",{parentName:"li"},"text/html"))))),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-nginx"}),"location / {\n    # \u8bf7\u6c42\u524d\u7f6e\u548c\u540e\u7f6e\u6dfb\u52a0\u5230\u5185\u5bb9\n    add_before_body /before_action;\n    add_after_body  /after_action;\n}\n")),(0,a.kt)("h2",d({},{id:"todo"}),"TODO"),(0,a.kt)("p",null,(0,a.kt)("a",d({parentName:"p"},{href:"http://nginx.org/en/docs/stream/ngx_stream_js_module.html"}),"http://nginx.org/en/docs/stream/ngx_stream_js_module.html"),"\n",(0,a.kt)("a",d({parentName:"p"},{href:"http://nginx.org/en/docs/njs/index.html"}),"http://nginx.org/en/docs/njs/index.html"),"\n",(0,a.kt)("a",d({parentName:"p"},{href:"http://nginx.org/en/docs/http/ngx_http_js_module.html"}),"http://nginx.org/en/docs/http/ngx_http_js_module.html"),"\n",(0,a.kt)("a",d({parentName:"p"},{href:"http://nginx.org/en/docs/njs/reference.html"}),"http://nginx.org/en/docs/njs/reference.html")))}g.isMDXComponent=!0}}]);