"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[82626],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(59496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=i,v=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(v,o(o({ref:t},p),{},{components:n})):r.createElement(v,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83367:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return m},metadata:function(){return v},toc:function(){return g}});var r=n(49613),i=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(s)for(var n of s(t))l.call(t,n)&&p(e,n,t[n]);return e};const m={title:"vitest"},d="vitest",v={unversionedId:"web/dev/testing/vitest",id:"web/dev/testing/vitest",title:"vitest",description:"- vitest-dev/vitest",source:"@site/../notes/web/dev/testing/vitest.md",sourceDirName:"web/dev/testing",slug:"/web/dev/testing/vitest",permalink:"/notes/web/dev/testing/vitest",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/dev/testing/vitest.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1666510159,formattedLastUpdatedAt:"Oct 23, 2022",frontMatter:{title:"vitest"},sidebar:"docs",previous:{title:"jest",permalink:"/notes/web/dev/testing/jest"},next:{title:"turbopack",permalink:"/notes/web/dev/turbopack"}},f={},g=[{value:"In-source testing",id:"in-source-testing",level:2},{value:"\u6027\u80fd\u6d4b\u8bd5",id:"benchmarking",level:2}],b={toc:g};function k(e){var t,n=e,{components:i}=n,p=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},b),p),a(t,o({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("h1",u({},{id:"vitest"}),"vitest"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/vitest-dev/vitest"}),"vitest-dev/vitest"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"chai - assertion"),(0,r.kt)("li",{parentName:"ul"},"c8/istanbul - coverage"),(0,r.kt)("li",{parentName:"ul"},"tinyspy - mocking, stubbing, spies"),(0,r.kt)("li",{parentName:"ul"},"jsdom/happy-dom - DOM & browser API mocking"),(0,r.kt)("li",{parentName:"ul"},"tinypool - worker"),(0,r.kt)("li",{parentName:"ul"},"tinybench - benchmarking"))),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u5df2\u7ecf\u7528 Vite \u5f00\u53d1\uff0c\u5219\u975e\u5e38\u63a8\u8350"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"webstrom ",(0,r.kt)("a",u({parentName:"li"},{href:"https://plugins.jetbrains.com/plugin/19220-vitest-runner"}),"Vitest Runner"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/linux-china/vitest-jetbrains-plugin"}),"linux-china/vitest-jetbrains-plugin"))))))),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"npm i -D @vitest/ui\nvitest --ui\n\n# coverage\nnpm i -D @vitest/coverage-c8\nnpm i -D @vitest/coverage-istanbul\n# runtime\nnpm i -D happy-dom\nnpm i -D jsdom\n# https://www.npmjs.com/package/edge-runtime\n# https://github.com/vercel/edge-runtime\nnpm i -D @edge-runtime/vm\n")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-ts",metastring:'title="vite.config.ts"',title:'"vite.config.ts"'}),"// \u4f7f\u7528 reference \u5219\u4e0d\u9700\u8981\u4ece vitest/config import\n// import { defineConfig } from 'vitest/config';\n\n/// <reference types=\"vitest\" />\nimport { defineConfig } from 'vitest';\n\nexport default defineConfig({\n  test: {\n    coverage: {\n      provider: 'istanbul', // c8\n    },\n    environment: 'happy-dom', // jsdom, node, edge-runtime\n  },\n});\n")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-json",metastring:'title="package.json"',title:'"package.json"'}),'{\n  "scripts": {\n    "test": "vitest",\n    "coverage": "vitest run --coverage"\n  }\n}\n')),(0,r.kt)("h2",u({},{id:"in-source-testing"}),"In-source testing"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-ts",metastring:'title="src/index.ts"',title:'"src/index.ts"'}),"export function add(...args: number[]) {\n  return args.reduce((a, b) => a + b, 0);\n}\n\n// \u76f4\u63a5\u5c06\u6d4b\u8bd5\u5199\u5728\u4ee3\u7801\u91cc - bundle \u65f6 tree-shake \u6389\nif (import.meta.vitest) {\n  const { it, expect } = import.meta.vitest;\n  it('add', () => {\n    expect(add()).toBe(0);\n    expect(add(1)).toBe(1);\n    expect(add(1, 2, 3)).toBe(6);\n  });\n}\n")),(0,r.kt)("h2",u({},{id:"benchmarking"}),"\u6027\u80fd\u6d4b\u8bd5"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"import { bench, describe } from 'vitest'\n\ndescribe('sort', () => {\n  bench('normal', () => {\n    const x = [1, 5, 4, 2, 3]\n    x.sort((a, b) => {\n      return a - b\n    })\n  })\n\n  bench('reverse', () => {\n    const x = [1, 5, 4, 2, 3]\n    x.reverse().sort((a, b) => {\n      return a - b\n    })\n  })\n})\n")))}k.isMDXComponent=!0}}]);