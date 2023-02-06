"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[51982],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return k}});var a=r(59496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),m=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=m(r),k=n,g=c["".concat(o,".").concat(k)]||c[k]||u[k]||l;return r?a.createElement(g,i(i({ref:t},s),{},{components:r})):a.createElement(g,i({ref:t},s))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var m=2;m<l;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},74200:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return k},default:function(){return d},frontMatter:function(){return c},metadata:function(){return g},toc:function(){return N}});var a=r(49613),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&s(e,r,t[r]);if(p)for(var r of p(t))m.call(t,r)&&s(e,r,t[r]);return e};const c={title:"\u6b63\u5219\u8868\u8fbe\u5f0f"},k="RegExp",g={unversionedId:"languages/regexp",id:"languages/regexp",title:"\u6b63\u5219\u8868\u8fbe\u5f0f",description:"- flavor",source:"@site/../notes/languages/regexp.md",sourceDirName:"languages",slug:"/languages/regexp",permalink:"/notes/languages/regexp",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/languages/regexp.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1661507210,formattedLastUpdatedAt:"Aug 26, 2022",frontMatter:{title:"\u6b63\u5219\u8868\u8fbe\u5f0f"},sidebar:"docs",previous:{title:"Python",permalink:"/notes/languages/python/"},next:{title:"Ruby",permalink:"/notes/languages/ruby"}},f={},N=[{value:"JavaScript",id:"javascript",level:2}],h={toc:N};function d(e){var t,r=e,{components:n}=r,s=((e,t)=>{var r={};for(var a in e)o.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&m.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=u(u({},h),s),l(t,i({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("h1",u({},{id:"regexp"}),"RegExp"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"flavor",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"PCRE - Perl Compatible Regular Expressions",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"PostgreSQL"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://github.com/PhilipHazel/pcre2"}),"PCRE2")," - 2017",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"PHP >= 7.3"),(0,a.kt)("li",{parentName:"ul"},"jit, stack memory -> heap memory mgmt"))),(0,a.kt)("li",{parentName:"ul"},"re2",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://github.com/google/re2/wiki/Syntax"}),"google/re2/wiki/Syntax")))),(0,a.kt)("li",{parentName:"ul"},"js",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"mdn ",(0,a.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions"}),"Regular expressions")))),(0,a.kt)("li",{parentName:"ul"},"java"),(0,a.kt)("li",{parentName:"ul"},".net"),(0,a.kt)("li",{parentName:"ul"},"python"))),(0,a.kt)("li",{parentName:"ul"},"tools",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://regex101.com/"}),"https://regex101.com/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://www.regexpal.com/"}),"https://www.regexpal.com/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://regexr.com/"}),"https://regexr.com/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://www.debuggex.com/"}),"https://www.debuggex.com/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://regexbuddy.com/"}),"https://regexbuddy.com/"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Windows \u5e94\u7528"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://extendsclass.com/regex-tester.html"}),"https://extendsclass.com/regex-tester.html"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Visualizer"))))),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://wener.me/story/regex-note"}),"RegexNote")),(0,a.kt)("li",{parentName:"ul"},"wikipedia ",(0,a.kt)("a",u({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Regular_expression"}),"Regular expression")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://www.regular-expressions.info/"}),"https://www.regular-expressions.info/")),(0,a.kt)("li",{parentName:"ul"},"Tempered Greedy Token\n",(0,a.kt)("a",u({parentName:"li"},{href:"https://stackoverflow.com/a/37343088/1870054"}),"https://stackoverflow.com/a/37343088/1870054")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://benhoyt.com/writings/rob-pike-regex/"}),"https://benhoyt.com/writings/rob-pike-regex/"),"\nRob Pike\u2019s simple C regex matcher in Go",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://news.ycombinator.com/item?id=32434412"}),"HN"))))))),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js"}),"// https://www.noulakaz.net/2007/03/18/a-regular-expression-to-check-for-prime-numbers/\n// https://news.ycombinator.com/item?id=30564287\nconst isPrime = (n) => !/^1?$|^(11+?)\\1+$/.test('1'.repeat(n));\n")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js"}),"// https://stackoverflow.com/a/201378/1870054\nconst emailFull =\n  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])/;\nconst emailSimple = /^[^\\s@]+@([^\\s@.,]+\\.)+[^\\s@.,]{2,}$/;\n// http://www.w3.org/TR/html5/forms.html#valid-e-mail-address\nconst emailW3c =\n  /^[a-zA-Z0-9.!#$%&'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js"}),"// \u53cd\u5339\u914d - \u9664\u4e86\u7ed9\u7684\u4e0d\u5339\u914d\u5176\u4ed6\u90fd\u5339\u914d\nconst notThis = /^(?:(?!this).)*$/;\n// py, java ^(.(?!(some text)))*$\n// pcre ^(?:(?!abc|xyz).)*$\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"regex"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"e.g."))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"phone-number"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]*$")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"+(123) - 456-78-90"))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"escaped string - \u5339\u914d ",(0,a.kt)("inlineCode",{parentName:"li"},"'I\\'am'"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"([\"'])((?:(?=(?:\\\\)*)\\\\.|.)*?)\\1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://regex101.com/r/mS1zJ8"}),"https://regex101.com/r/mS1zJ8"))))),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://github.com/XHXIAIEIN/split-string-address"}),"https://github.com/XHXIAIEIN/split-string-address")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://github.com/GrapecityXian/PhoneCommand"}),"https://github.com/GrapecityXian/PhoneCommand"))),(0,a.kt)("h2",u({},{id:"javascript"}),"JavaScript"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"replacement - \u66ff\u6362",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$$")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"$")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$&")),(0,a.kt)("li",{parentName:"ul"},"`$","`","`"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$'")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$<n>")),(0,a.kt)("li",{parentName:"ul"},"replacer(match,p1,p2,offset,wholeString,namedGroups)")))))}d.isMDXComponent=!0}}]);