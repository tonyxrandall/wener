"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[61583],{49613:function(t,e,r){r.d(e,{Zo:function(){return m},kt:function(){return k}});var n=r(59496);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var i=n.createContext({}),u=function(t){var e=n.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},m=function(t){var e=u(t.components);return n.createElement(i.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,i=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),s=u(r),k=a,d=s["".concat(i,".").concat(k)]||s[k]||c[k]||o;return r?n.createElement(d,l(l({ref:e},m),{},{components:r})):n.createElement(d,l({ref:e},m))}));function k(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,l=new Array(o);l[0]=s;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:a,l[1]=p;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},10359:function(t,e,r){r.r(e),r.d(e,{assets:function(){return g},contentTitle:function(){return k},default:function(){return b},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return N}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(t,e,r)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,c=(t,e)=>{for(var r in e||(e={}))i.call(e,r)&&m(t,r,e[r]);if(p)for(var r of p(e))u.call(e,r)&&m(t,r,e[r]);return t};const s={title:"protoc"},k="protoc",d={unversionedId:"service/api/protoc",id:"service/api/protoc",title:"protoc",description:"| flag                             | for                                           |",source:"@site/../notes/service/api/protoc.md",sourceDirName:"service/api",slug:"/service/api/protoc",permalink:"/notes/service/api/protoc",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/api/protoc.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1660664456,formattedLastUpdatedAt:"Aug 16, 2022",frontMatter:{title:"protoc"},sidebar:"docs",previous:{title:"protoc-gen-validate",permalink:"/notes/service/api/protoc-gen-validate"},next:{title:"RapiDoc",permalink:"/notes/service/api/rapidoc"}},g={},N=[{value:"Plugins",id:"plugins",level:2},{value:"Descriptor",id:"descriptor",level:2},{value:"Write Plugins",id:"write-plugins",level:2}],f={toc:N};function b(t){var e,r=t,{components:a}=r,m=((t,e)=>{var r={};for(var n in t)i.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&p)for(var n of p(t))e.indexOf(n)<0&&u.call(t,n)&&(r[n]=t[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(e=c(c({},f),m),o(e,l({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",c({},{id:"protoc"}),"protoc"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"flag"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"for"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"-I,--proto_path ",(0,n.kt)("inlineCode",{parentName:"td"},"<PATH>")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u5f53\u524d\u76ee\u5f55, --descriptor_set_in")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"--encode ",(0,n.kt)("inlineCode",{parentName:"td"},"<MESSAGE_TYPE>")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"text -> proto")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"--deterministic_output"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"\u5f53 ",(0,n.kt)("inlineCode",{parentName:"td"},"--encode")," \u786e\u4fdd map \u987a\u5e8f\u56fa\u5b9a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"--decode ",(0,n.kt)("inlineCode",{parentName:"td"},"<MESSAGE_TYPE>")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"proto -> text")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"--decode_raw"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"proto -> tag,value - \u4e0d\u9700\u8981 proto")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"--descriptor_set_in ",(0,n.kt)("inlineCode",{parentName:"td"},"<FILES>")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"FileDescriptorSet \u5217\u8868 descriptor.proto")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"-o,--descriptor_set_out ",(0,n.kt)("inlineCode",{parentName:"td"},"<FILE>")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"FileDescriptorSet")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"--include_imports"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"\u5f53 ",(0,n.kt)("inlineCode",{parentName:"td"},"--descriptor_set_out")," \u5305\u542b\u4f9d\u8d56")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"--include_source_info"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"\u5f53 ",(0,n.kt)("inlineCode",{parentName:"td"},"--descriptor_set_out")," \u4fdd\u7559 SourceCodeInfo")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"--dependency_out=FILE"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"\u8f93\u51fa make \u4f9d\u8d56")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"--error_format=FORMAT"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"gcc, msvs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"--fatal_warnings"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"warnings -> fatal")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"--print_free_field_numbers"),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"--plugin=EXECUTABLE"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"\u9ed8\u8ba4 PATH, \u53ef\u4ee5\u662f ",(0,n.kt)("inlineCode",{parentName:"td"},"NAME=PATH"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@<filename>")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"\u4ece\u6587\u4ef6\u8bfb\u53d6\u914d\u7f6e")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u63d2\u4ef6",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<plugin>_out")," - \u8f93\u51fa\u76ee\u5f55 - \u4f8b\u5982 ",(0,n.kt)("inlineCode",{parentName:"li"},".:."),", ",(0,n.kt)("inlineCode",{parentName:"li"},".:./gen/out")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<plugin>_opt")," - \u53c2\u6570"))),(0,n.kt)("li",{parentName:"ul"},"plugin",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"cpp"),(0,n.kt)("li",{parentName:"ul"},"csharp"),(0,n.kt)("li",{parentName:"ul"},"java"),(0,n.kt)("li",{parentName:"ul"},"js"),(0,n.kt)("li",{parentName:"ul"},"kotlin"),(0,n.kt)("li",{parentName:"ul"},"objc"),(0,n.kt)("li",{parentName:"ul"},"php"),(0,n.kt)("li",{parentName:"ul"},"python"),(0,n.kt)("li",{parentName:"ul"},"ruby"))),(0,n.kt)("li",{parentName:"ul"},"descriptor_set",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u9884\u751f\u6210 descriptor\uff0c\u4e4b\u540e\u5219\u4e0d\u9700\u8981 proto \u6e90\u6587\u4ef6")))),(0,n.kt)("h2",c({},{id:"plugins"}),"Plugins"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"protoc-gen-<plugin>")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"/notes/service/api/protoc-gen-validate"}),"protoc-gen-validate")," \u6821\u9a8c message",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"go,java,cc"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/protobuf-c/protobuf-c"}),"protoc-gen-c")),(0,n.kt)("li",{parentName:"ul"},"Golang",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/protocolbuffers/protobuf-go"}),"protoc-gen-go")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/mitchellh/protoc-gen-go-json"}),"protoc-gen-go-json")," Go JSON Marshal/Unmarshal"),(0,n.kt)("li",{parentName:"ul"},"protoc-gen-go-vtproto"),(0,n.kt)("li",{parentName:"ul"},"protoc-gen-gotag"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/gogo/protobuf"}),"gogo/protobuf"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"APIv2 \u53d1\u5e03\u540e\u4e0d\u518d\u7ef4\u62a4"),(0,n.kt)("li",{parentName:"ul"},"protoc-gen-{gofast,combo,gogo,gogofast,gogofaster,gogoslic,gogotypes,gostring}"))))),(0,n.kt)("li",{parentName:"ul"},"Document",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"protoc-gen-slate"),(0,n.kt)("li",{parentName:"ul"},"protoc-gen-swagger"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/pseudomuto/protoc-gen-doc"}),"protoc-gen-doc")))),(0,n.kt)("li",{parentName:"ul"},"Schema",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/chrusty/protoc-gen-jsonschema"}),"protoc-gen-jsonschema")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/GoogleCloudPlatform/protoc-gen-bq-schema"}),"protoc-gen-bq-schema"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"pb to BigQuery schema")))))),(0,n.kt)("h2",c({},{id:"descriptor"}),"Descriptor"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"proto \u89e3\u6790\u8fc7\u540e\u7684\u7ed3\u6784"),(0,n.kt)("li",{parentName:"ul"},"DescriptorProto - Message",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"field FieldDescriptorProto"),(0,n.kt)("li",{parentName:"ul"},"extension"),(0,n.kt)("li",{parentName:"ul"},"nested_type - DescriptorProto"),(0,n.kt)("li",{parentName:"ul"},"enum_type - EnumDescriptorProto"),(0,n.kt)("li",{parentName:"ul"},"oneof - OneofDescriptorProto"),(0,n.kt)("li",{parentName:"ul"},"options - MessageOptions")))),(0,n.kt)("h2",c({},{id:"write-plugins"}),"Write Plugins"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u63d2\u4ef6\u534f\u8bae ",(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/protocolbuffers/protobuf/blob/main/src/google/protobuf/compiler/plugin.proto"}),"https://github.com/protocolbuffers/protobuf/blob/main/src/google/protobuf/compiler/plugin.proto"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u901a\u8fc7 stdio \u4ea4\u4e92"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/lyft/protoc-gen-star"}),"lyft/protoc-gen-star"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u8f85\u52a9\u5b9e\u73b0\u63d2\u4ef6"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/lyft/protoc-gen-star/tree/master/protoc-gen-debug"}),"protoc-gen-debug"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u751f\u6210 bin\uff0c\u7528\u4e8e\u6d4b\u8bd5\u63d2\u4ef6"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/danielgtaylor/python-betterproto"}),"danielgtaylor/python-betterproto"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Python 3.6+ code generator & library for Protobuf 3 and async gRPC"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://json-to-proto.github.io/"}),"json-to-proto"))))}b.isMDXComponent=!0}}]);