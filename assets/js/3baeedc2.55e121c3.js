"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[83112],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),f=r,d=m["".concat(o,".").concat(f)]||m[f]||c[f]||s;return n?a.createElement(d,l(l({ref:t},u),{},{components:n})):a.createElement(d,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<s;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25933:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return f},default:function(){return k},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return b}});var a=n(49613),r=Object.defineProperty,s=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&u(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&u(e,n,t[n]);return e};const m={title:"Ava"},f="Ava",d={unversionedId:"web/dev/testing/ava",id:"web/dev/testing/ava",title:"Ava",description:"- avajs/ava",source:"@site/../notes/web/dev/testing/ava.md",sourceDirName:"web/dev/testing",slug:"/web/dev/testing/ava",permalink:"/notes/web/dev/testing/ava",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/dev/testing/ava.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1667482099,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{title:"Ava"},sidebar:"docs",previous:{title:"prettier",permalink:"/notes/web/dev/prettier"},next:{title:"jest",permalink:"/notes/web/dev/testing/jest"}},v={},b=[{value:"\u6d4b\u8bd5\u6587\u4ef6\u5339\u914d\u903b\u8f91",id:"test-files",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2}],h={toc:b};function k(e){var t,n=e,{components:r}=n,u=((e,t)=>{var n={};for(var a in e)o.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=c(c({},h),u),s(t,l({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("h1",c({},{id:"ava"}),"Ava"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://github.com/avajs/ava"}),"avajs/ava"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5c0f\u3001\u5feb\u3001\u7b80\u5355"))),(0,a.kt)("li",{parentName:"ul"},"process.env.NODE_ENV=test"),(0,a.kt)("li",{parentName:"ul"},"node_modules/.cache/ava"),(0,a.kt)("li",{parentName:"ul"},"React ",(0,a.kt)("a",c({parentName:"li"},{href:"https://github.com/avajs/ava/blob/main/docs/recipes/react.md"}),"https://github.com/avajs/ava/blob/main/docs/recipes/react.md"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u914d\u5408 enzyme \u6d4b\u8bd5 react")))),(0,a.kt)("admonition",c({},{type:"tip"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"pnpm \u4e0b ava \u4e3a shell, \u5b9e\u9645\u811a\u672c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"node_modules/ava/entrypoints/cli.mjs"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f7f\u7528\u4e86 WebStorm \u63d2\u4ef6\u53ef\u4ee5\u4fee\u6539 ava \u8def\u5f84"),(0,a.kt)("li",{parentName:"ul"},"\u5c06 ava \u5b89\u88c5\u5230 root \u53ef\u907f\u514d"))))),(0,a.kt)("admonition",c({},{type:"note"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u65e0 Suite/Group \u6982\u5ff5 ",(0,a.kt)("a",c({parentName:"li"},{href:"https://github.com/avajs/ava/issues/222"}),"#222"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u7eac\u5ea6\u5212\u5206"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://thoughtbot.com/blog/mystery-guest"}),"https://thoughtbot.com/blog/mystery-guest")))))),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-json",metastring:'title="packages.json"',title:'"packages.json"'}),'{\n  "devDependencies": {\n    "ava": "*",\n    "tsx": "*"\n  },\n  "ava": {\n    "extensions": {\n      "ts": "module"\n    },\n    "nodeArguments": ["--loader=tsx"]\n  }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-ts"}),"import test from 'ava';\n\ntest('foo', (t) => {\n  t.pass();\n});\n\ntest('bar', async (t) => {\n  const bar = Promise.resolve('bar');\n  t.is(await bar, 'bar');\n});\n\n// \u4e32\u884c\u6267\u884c\ntest.serial('passes serially', (t) => {\n  t.pass();\n});\n\ntest.only('will be run', (t) => {\n  t.pass();\n});\ntest.skip('will not be run', (t) => {\n  t.fail();\n});\n\ntest.todo('later');\ntest.serial.todo('later');\n\n// \u6807\u8bb0\u5931\u8d25\u6d4b\u8bd5\ntest.failing('demonstrate some bug', (t) => {\n  t.fail(); // Test will count as passed\n});\n\n// \u589e\u52a0\u8f93\u51fa\u5185\u5bb9\nimport util from 'util';\nutil.inspect.defaultOptions.depth = 5;\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"test.{before,after,beforeEach,afterEach}"),(0,a.kt)("li",{parentName:"ul"},"test.after.always"),(0,a.kt)("li",{parentName:"ul"},"test.afterEach.always"),(0,a.kt)("li",{parentName:"ul"},"t.context - \u6d4b\u8bd5\u4e0a\u4e0b\u6587"),(0,a.kt)("li",{parentName:"ul"},"test.meta.file - \u5143\u4fe1\u606f")),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),'npx @ava/init\n\nnpx ava\nnpx ava src/hello.test.ts\n# match by title\nnpx ava src/hello.test.ts -m "db"\n\nnpx ava --watch\nDEBUG=ava:watcher npx ava --watch\n\n# tap report\nnpx ava --tap | npx tap-nyan\n')),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://github.com/avajs/ava/blob/main/docs/06-configuration.md"}),"https://github.com/avajs/ava/blob/main/docs/06-configuration.md")),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,a.kt)("a",c({parentName:"li"},{href:"https://github.com/watson/is-ci"}),"watson/is-ci")," \u68c0\u6d4b CI",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://github.com/watson/ci-info/blob/master/index.js"}),"https://github.com/watson/ci-info/blob/master/index.js"))))),(0,a.kt)("h2",c({},{id:"test-files"}),"\u6d4b\u8bd5\u6587\u4ef6\u5339\u914d\u903b\u8f91"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"li"},"_")," \u5f00\u5934\u7684\u76ee\u5f55\u548c\u6587\u4ef6\u4f1a\u5ffd\u7565")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u9ed8\u8ba4\u6d4b\u8bd5\u6587\u4ef6\u5339\u914d\u903b\u8f91")),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{}),"test.js\nsrc/test.js\nsource/test.js\n**/test-*.js\n**/*.spec.js\n**/*.test.js\n**/test/**/*.js\n**/tests/**/*.js\n**/__tests__/**/*.js\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6392\u9664\u903b\u8f91")),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{}),"**/__tests__/**/__helper__/**/*\n**/__tests__/**/__helpers__/**/*\n**/__tests__/**/__fixture__/**/*\n**/__tests__/**/__fixtures__/**/*\n**/test/**/helper/**/*\n**/test/**/helpers/**/*\n**/test/**/fixture/**/*\n**/test/**/fixtures/**/*\n**/tests/**/helper/**/*\n**/tests/**/helpers/**/*\n**/tests/**/fixture/**/*\n**/tests/**/fixtures/**/*\n")),(0,a.kt)("h2",c({},{id:"\u914d\u7f6e"}),"\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "ava": {\n    "files": ["test/**/*", "!test/exclude-files-in-this-directory", "!**/exclude-files-with-this-name.*"],\n    "ignoredByWatcher": "",\n    // --match\n    // "match": ["*oo", "!foo"],\n    // node_modules/.cache/ava\n    "cache": true,\n    // nproc\n    "concurrency": 5,\n    "workerThreads": true,\n    "failFast": true,\n    // \u6ca1\u6709 assert \u662f\u5426\u8ba4\u4e3a\u5931\u8d25\n    "failWithoutAssertions": false,\n    "environmentVariables": {\n      "MY_ENVIRONMENT_VARIABLE": "some value"\n    },\n    "tap": false,\n    "verbose": true,\n    // "snapshotDir":"",\n    "extensions": ["cjs", "mjs", "js"],\n    "require": ["./my-helper-module.js"],\n    "timeout": 0,\n    "nodeArguments": ["--trace-deprecation", "--napi-modules"],\n    // ava.config.*  \u4f7f\u7528\uff0c\u5b9a\u4e49\u51fd\u6570\n    // sortTestFiles:"",\n    "utilizeParallelBuilds": true\n  }\n}\n')))}k.isMDXComponent=!0}}]);