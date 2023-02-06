"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[36361],{49613:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return u}});var r=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=d(t),u=a,g=c["".concat(l,".").concat(u)]||c[u]||p[u]||i;return t?r.createElement(g,o(o({ref:n},m),{},{components:t})):r.createElement(g,o({ref:n},m))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3854:function(e,n,t){t.r(n),t.d(n,{assets:function(){return f},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return c},metadata:function(){return g},toc:function(){return E}});var r=t(49613),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,p=(e,n)=>{for(var t in n||(n={}))l.call(n,t)&&m(e,t,n[t]);if(s)for(var t of s(n))d.call(n,t)&&m(e,t,n[t]);return e};const c={tags:["Insight"]},u="Tiptap Inside",g={unversionedId:"web/editor/tiptap-inside",id:"web/editor/tiptap-inside",title:"Tiptap Inside",description:"- \u4f20\u53c2\u4f7f\u7528\u5bf9\u8c61\uff0c prosemirror \u4f7f\u7528\u72ec\u7acb\u53c2\u6570",source:"@site/../notes/web/editor/tiptap-inside.md",sourceDirName:"web/editor",slug:"/web/editor/tiptap-inside",permalink:"/notes/web/editor/tiptap-inside",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/editor/tiptap-inside.md",tags:[{label:"Insight",permalink:"/notes/tags/insight"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1666756281,formattedLastUpdatedAt:"Oct 26, 2022",frontMatter:{tags:["Insight"]},sidebar:"docs",previous:{title:"Tiptap Extension",permalink:"/notes/web/editor/tiptap-extension"},next:{title:"tiptap",permalink:"/notes/web/editor/tiptap"}},f={},E=[],b={toc:E};function y(e){var n,t=e,{components:a}=t,m=((e,n)=>{var t={};for(var r in e)l.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&s)for(var r of s(e))n.indexOf(r)<0&&d.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=p(p({},b),m),i(n,o({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",p({},{id:"tiptap-inside"}),"Tiptap Inside"),(0,r.kt)("mermaid",p({},{value:"classDiagram\nEventEmitter <|-- Editor\nEditor *-- CommandManager\nEditor *-- ExtensionManager\nEditor -- EditorState\nEditor *-- EditorView\nclass Editor {\n    +commandManager CommandManager\n    +extensionManager ExtensionManager\n    +schema Schema\n    +view EditorView\n    +state EditorState\n\n    +setOptions()\n    +setEditable()\n}\n\nclass ExtensionManager {\n    +editor Editor\n    +schema Schema\n    +extensions Extensions\n    commands() RawCommands\n    plugins() Plugin[]\n    attributes()\n    nodeViews()\n}\nCommandManager -- EditorState\nclass CommandManager {\n    +editor Editor\n    +rawCommands AnyCommands\n    +state EditorState\n\n    +commands() SingleCommands\n    +can() CanCpmmands\n    +chain() CanCpmmands\n}\nEditorView *-- EditorState\nclass EditorView{\n    <<prosemirror-view>>\n    +state EditorState\n    +setProps()\n    +updateState(state EditorState)\n    +dispatch(tr Transaction)\n}\n\nclass EditorState{\n    <<prosemirror-state>>\n    +doc Node\n    +selection Selection\n    +storedMarks Mark[]\n    +schema() Schema\n    +plugins() Plugin[]\n    +apply(tr Transaction) EditorState\n    +tr() Transaction\n    +reconfigure(config)\n}\n\nclass EventEmitter{\n    +on()\n    +off()\n    +emit()\n}"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f20\u53c2\u4f7f\u7528\u5bf9\u8c61\uff0c prosemirror \u4f7f\u7528\u72ec\u7acb\u53c2\u6570"),(0,r.kt)("li",{parentName:"ul"},"Editor",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5c01\u88c5\u6240\u6709\u76f8\u5173\u5bf9\u8c61"),(0,r.kt)("li",{parentName:"ul"},"EditorView, Extension, Command"))),(0,r.kt)("li",{parentName:"ul"},"ExtensionManager",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63d2\u4ef6\u7cfb\u7edf"),(0,r.kt)("li",{parentName:"ul"},"\u5305\u542b\u4e86 prosemirror \u7684 Plugin \u903b\u8f91"),(0,r.kt)("li",{parentName:"ul"},"Extension \u5305\u542b\u4e86\u975e prosemirror Plugin \u7684\u529f\u80fd",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 command"),(0,r.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"\u4e00\u4e9b\u989d\u5916 hook"))),(0,r.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"beforeCreate, create, update, selectionUpdate, transaction"),(0,r.kt)("li",{parentName:"ul"},"focus, blur"),(0,r.kt)("li",{parentName:"ul"},"destroy"))))),(0,r.kt)("li",{parentName:"ul"},"CommandManager",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5c06\u79bb\u6563\u7684 commands \u5c01\u88c5\u5728\u4e00\u8d77"),(0,r.kt)("li",{parentName:"ul"},"\u63d0\u4f9b can \u548c chain \u8f85\u52a9\u64cd\u4f5c")))),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-ts"}),"import { EditorView } from 'prosemirror-view';\n\nclass Editor extends EventEmitter<EditorEvents> {\n  commandManager!: CommandManager;\n  extensionManager!: ExtensionManager;\n  css!: HTMLStyleElement;\n  schema!: Schema;\n  view!: EditorView;\n  isFocused = false;\n  extensionStorage: Record<string, any> = {};\n\n  options: EditorOptions;\n\n  get storage(): Record<string, any>;\n  get commands(): SingleCommands;\n  chain(): ChainedCommands;\n  can(): CanCommands;\n  setOptions(options: Partial<EditorOptions> = {}): void;\n  setEditable(editable: boolean): void;\n  get isEditable(): boolean;\n  get state(): EditorState;\n\n  registerPlugin(plugin: Plugin, handlePlugins?: (newPlugin: Plugin, plugins: Plugin[]) => Plugin[]): void;\n  unregisterPlugin(nameOrPluginKey: string | PluginKey): void;\n\n  getJSON(): JSONContent {\n    return this.state.doc.toJSON();\n  }\n  getHTML(): string;\n  getText(options?: { blockSeparator?: string; textSerializers?: Record<string, TextSerializer> }): string;\n  get isEmpty(): boolean;\n  destroy(): void;\n  get isDestroyed(): boolean;\n}\n\nclass ExtensionManager {\n  editor: Editor;\n  schema: Schema;\n  extensions: Extensions;\n  constructor(extensions: Extensions, editor: Editor);\n  get commands(): RawCommands;\n  get plugins(): Plugin[]; // inputRules, pasteRules, others\n  get attributes();\n  get nodeViews();\n\n  static resolve(extensions: Extensions): Extensions;\n  static flatten(extensions: Extensions): Extensions;\n  static sort(extensions: Extensions): Extensions;\n}\nclass CommandManager {\n  editor: Editor;\n  rawCommands: AnyCommands;\n  customState?: EditorState;\n  constructor(props: { editor: Editor; state?: EditorState });\n  get state(): EditorState;\n  get commands(): SingleCommands;\n  get chain(): () => ChainedCommands;\n  get can(): () => CanCommands;\n}\n\ntype CommandProps = {\n  tr: Transaction;\n  editor: Editor;\n  view;\n  state: ChainableState;\n  dispatch?;\n  chain: () => ChainCommands;\n  can: () => CanCommands;\n  get commands();\n};\n")))}y.isMDXComponent=!0}}]);