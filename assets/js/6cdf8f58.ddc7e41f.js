"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[82370],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(59496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=l,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78058:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return b}});var r=n(49613),l=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&p(e,n,t[n]);return e};const d={title:"Rollup FAQ",tags:["FAQ"]},m="Rollup FAQ",f={unversionedId:"web/dev/bundle/rollup-faq",id:"web/dev/bundle/rollup-faq",title:"Rollup FAQ",description:"this has been rewritten to undefined",source:"@site/../notes/web/dev/bundle/rollup-faq.md",sourceDirName:"web/dev/bundle",slug:"/web/dev/bundle/rollup-faq",permalink:"/notes/web/dev/bundle/rollup-faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/dev/bundle/rollup-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663122612,formattedLastUpdatedAt:"Sep 14, 2022",frontMatter:{title:"Rollup FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"Rollup Awesome",permalink:"/notes/web/dev/bundle/rollup-awesome"},next:{title:"Rollup",permalink:"/notes/web/dev/bundle/rollup"}},g={},b=[{value:"<code>this</code> has been rewritten to <code>undefined</code>",id:"this-has-been-rewritten-to-undefined",level:2},{value:"Rollup requires that your Babel configuration keeps ES6 module syntax intact.",id:"rollup-requires-that-your-babel-configuration-keeps-es6-module-syntax-intact",level:2},{value:"SyntaxError: Unexpected token: punc (.)",id:"syntaxerror-unexpected-token-punc-",level:2},{value:"Missing class properties transform.",id:"missing-class-properties-transform",level:2},{value:"&#39;default&#39; is not exported by",id:"default-is-not-exported-by",level:2},{value:"xxx.default is not a function",id:"xxxdefault-is-not-a-function",level:2},{value:"lodash \u6ca1\u80fd \u5254\u9664/tree shake",id:"lodash-\u6ca1\u80fd-\u5254\u9664tree-shake",level:2},{value:"angularCompilerOptions",id:"angularcompileroptions",level:2},{value:"rollup.config.ts",id:"rollupconfigts",level:2}],k={toc:b};function h(e){var t,n=e,{components:l}=n,p=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=c(c({},k),p),a(t,o({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("h1",c({},{id:"rollup-faq"}),"Rollup FAQ"),(0,r.kt)("h2",c({},{id:"this-has-been-rewritten-to-undefined"}),(0,r.kt)("inlineCode",{parentName:"h2"},"this")," has been rewritten to ",(0,r.kt)("inlineCode",{parentName:"h2"},"undefined")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u914d\u5408 typescript \u4f1a\u51fa\u73b0\uff0c\u4e0d\u5f71\u54cd\u4f7f\u7528\uff0c\u4f46\u5f88\u70e6")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5ffd\u7565\u8be5\u9519\u8bef")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-js"}),"{\n  onwarn(warning) {\n      if (warning.code === 'THIS_IS_UNDEFINED') {\n        return;\n      }\n      console.warn('THIS_IS_UNDEFINED', warning.message);\n    },\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://rollupjs.org/guide/en/#error-this-is-undefined"}),"this-is-undefined"))),(0,r.kt)("h2",c({},{id:"rollup-requires-that-your-babel-configuration-keeps-es6-module-syntax-intact"}),"Rollup requires that your Babel configuration keeps ES6 module syntax intact."),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-js"}),"{\n  plugins: [\n    babel({\n      babelHelpers: 'bundled',\n      babelrc: false,\n    }),\n    terser({ ecma: 6, module: true }),\n  ],\n}\n")),(0,r.kt)("h2",c({},{id:"syntaxerror-unexpected-token-punc-"}),"SyntaxError: Unexpected token: punc (.)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining"}),"Optional chaining")),(0,r.kt)("li",{parentName:"ul"},"\u8c03\u6574 transpile \u6216\u8005 ts \u7684 target")),(0,r.kt)("h2",c({},{id:"missing-class-properties-transform"}),"Missing class properties transform."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@babel/plugin-proposal-class-properties"))),(0,r.kt)("h2",c({},{id:"default-is-not-exported-by"}),"'default' is not exported by"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5bfc\u5165\u65b9\u5f0f\u7684\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"commonjs \u95ee\u9898",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u52a0\u63d2\u4ef6 @rollup/plugin-commonjs"))),(0,r.kt)("li",{parentName:"ul"},"\u51fa\u73b0\u95ee\u9898\u7684\u5305",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"classnames")))),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-ts"}),"// \u8fd9\u6837\u4e0d\u4f1a\u4f7f\u7528 default\n// TS \u4e2d\u7684 allowSyntheticDefaultImports \u53c2\u6570\nimport * as Abc from './abc';\n")),(0,r.kt)("h2",c({},{id:"xxxdefault-is-not-a-function"}),"xxx.default is not a function"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e00\u822c\u662f commonjs \u7684\u95ee\u9898")),(0,r.kt)("p",null,"\u53ef\u4ee5\u624b\u52a8\u6dfb\u52a0\u547d\u540d\u5bfc\u51fa"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-js"}),"commonjs({\n  include: 'node_modules/**',\n  // \u65b0\u7248\u672c\u63d2\u4ef6\u4f1a\u81ea\u5e26\u5904\u7406\uff0c\u6ca1\u6709\u4e86\u8be5\u53c2\u6570\n  namedExports: {\n    'node_modules/@emotion/memoize/dist/memoize.cjs.js': ['memoize'],\n  },\n});\n")),(0,r.kt)("h2",c({},{id:"lodash-\u6ca1\u80fd-\u5254\u9664tree-shake"}),"lodash \u6ca1\u80fd \u5254\u9664/tree shake"),(0,r.kt)("p",null,"\u4f7f\u7528 lodash-es\uff0c\u4e0d\u8981\u4f7f\u7528 lodash"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"lodash \u662f cjs"),(0,r.kt)("li",{parentName:"ul"},"lodash-es \u662f esm")),(0,r.kt)("h2",c({},{id:"angularcompileroptions"}),"angularCompilerOptions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://angular.io/guide/angular-compiler-options"}),"https://angular.io/guide/angular-compiler-options"))),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "fullTemplateTypeCheck": true,\n  "preserveWhitespaces": true\n}\n')),(0,r.kt)("h2",c({},{id:"rollupconfigts"}),"rollup.config.ts"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u63d2\u4ef6")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-json",metastring:'title="tsconfig.json"',title:'"tsconfig.json"'}),'{\n  "include": ["src", "rollup.config.ts"]\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"rollup --config rollup.config.ts --configPlugin @rollup/plugin-typescript\n# \u7b49\u540c\u4e8e\nrollup --config rollup.config.ts --configPlugin typescript\n")),(0,r.kt)("ol",c({},{start:2}),(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528 cjs \u8f6c")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-js",metastring:'title="rollup.config.js"',title:'"rollup.config.js"'}),"require('ts-node').register({\n  compilerOptions: {\n    esModuleInterop: true,\n  },\n});\n\nmodule.exports = require('./rollup.config.ts');\n")))}h.isMDXComponent=!0}}]);