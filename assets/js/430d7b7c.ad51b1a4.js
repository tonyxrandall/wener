"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[21934],{49613:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(59496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(a),d=r,k=c["".concat(o,".").concat(d)]||c[d]||m[d]||l;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},82635:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return c},metadata:function(){return k},toc:function(){return f}});var n=a(49613),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&u(e,a,t[a]);if(p)for(var a of p(t))s.call(t,a)&&u(e,a,t[a]);return e};const c={title:"macOS"},d="macOs",k={unversionedId:"os/darwin/macOS",id:"os/darwin/macOS",title:"macOS",description:"- Identify your Mac mini",source:"@site/../notes/os/darwin/macOS.md",sourceDirName:"os/darwin",slug:"/os/darwin/macOS",permalink:"/notes/os/darwin/macOS",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/darwin/macOS.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1669789233,formattedLastUpdatedAt:"Nov 30, 2022",frontMatter:{title:"macOS"},sidebar:"docs",previous:{title:"Brew",permalink:"/notes/os/darwin/brew"},next:{title:"macOS ACL",permalink:"/notes/os/darwin/macos-acl"}},h={},f=[{value:"Brew",id:"brew",level:2},{value:"\u79fb\u52a8\u78c1\u76d8\u683c\u5f0f\u9009\u62e9",id:"\u79fb\u52a8\u78c1\u76d8\u683c\u5f0f\u9009\u62e9",level:2},{value:"\u542f\u52a8\u9009\u9879",id:"\u542f\u52a8\u9009\u9879",level:2},{value:"\u8bc1\u4e66",id:"\u8bc1\u4e66",level:2},{value:"Finder",id:"finder",level:2},{value:"Install Xcode",id:"install-xcode",level:2},{value:"license",id:"license",level:2},{value:"\u8d44\u6e90\u4e0b\u8f7d",id:"\u8d44\u6e90\u4e0b\u8f7d",level:2},{value:"\u7ec8\u7aef\u542f\u7528\u6362\u884c",id:"\u7ec8\u7aef\u542f\u7528\u6362\u884c",level:2},{value:"csrutil",id:"csrutil",level:3},{value:"FAQ",id:"faq",level:2},{value:"Diskutil",id:"diskutil",level:3},{value:"BasicIPv6ValidationError",id:"basicipv6validationerror",level:3},{value:"NTFS \u4e0d\u80fd\u5199",id:"ntfs-\u4e0d\u80fd\u5199",level:3},{value:"\u4f7f\u7528 USB \u4ee5\u592a\u7f51",id:"\u4f7f\u7528-usb-\u4ee5\u592a\u7f51",level:3},{value:"\u5728 x86 \u4e0a\u5b89\u88c5",id:"\u5728-x86-\u4e0a\u5b89\u88c5",level:4},{value:"\u66f4\u65b0\u672a\u80fd\u88ab\u9a8c\u8bc1",id:"\u66f4\u65b0\u672a\u80fd\u88ab\u9a8c\u8bc1",level:4},{value:"\u5e38\u89c1\u95ee\u9898\u8bca\u65ad",id:"\u5e38\u89c1\u95ee\u9898\u8bca\u65ad",level:4},{value:"\u6e05\u9664 DNS \u7f13\u5b58",id:"\u6e05\u9664-dns-\u7f13\u5b58",level:3},{value:"\u7f51\u7edc",id:"\u7f51\u7edc",level:3},{value:"\u6865\u63a5",id:"\u6865\u63a5",level:3},{value:"tuntap",id:"tuntap",level:3},{value:"\u8f6c\u53d1",id:"\u8f6c\u53d1",level:3},{value:"\u8def\u7531",id:"\u8def\u7531",level:3},{value:"\u9632\u706b\u5899",id:"\u9632\u706b\u5899",level:3},{value:"DocumentRevisions-V100",id:"documentrevisions-v100",level:3},{value:"\u5e38\u89c1\u7f51\u7edc\u540d\u79f0",id:"\u5e38\u89c1\u7f51\u7edc\u540d\u79f0",level:3},{value:"Develope",id:"develope",level:3},{value:"\u547d\u4ee4\u884c\u5f00\u542f\u5c4f\u5e55\u5171\u4eab",id:"\u547d\u4ee4\u884c\u5f00\u542f\u5c4f\u5e55\u5171\u4eab",level:3},{value:"syslog",id:"syslog",level:3},{value:"\u5386\u53f2",id:"\u5386\u53f2",level:2}],N={toc:f};function g(e){var t,a=e,{components:r}=a,u=((e,t)=>{var a={};for(var n in e)o.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&s.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=m(m({},N),u),l(t,i({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("h1",m({},{id:"macos"}),"macOs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://support.apple.com/en-us/HT201894"}),"Identify your Mac mini")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://support.apple.com/en-us/HT201300"}),"Identify your MacBook Pro")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://support.apple.com/en-us/HT201471"}),"Identify your iPad model")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://unix.stackexchange.com/q/695/47774"}),"Where does Mac OS X come from?")),(0,n.kt)("li",{parentName:"ul"},"\u597d\u770b\u7684\u5c4f\u4fdd ",(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/JohnCoates/Aerial"}),"https://github.com/JohnCoates/Aerial"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"brew cask install aerial")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/thefloweringash/iousbhiddriver-descriptor-override"}),"iousbhiddriver"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 Noppoo Choc \u7684\u9a71\u52a8"))),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"http://apple.stackexchange.com/questions/400"}),"OS X \u6280\u5de7")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"http://superuser.com/a/264943/242730"}),"Assign a shortcut to running a script in OS X")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/Kevin-De-Koninck/Clean-Me"}),"Clean-Me"))),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# \u67e5\u770b\u53ef\u7528\u7684\u5206\u8fa8\u7387\nsystem_profiler SPDisplaysDataType |grep Resolution\nxrandr\n\n# \u7edf\u8ba1 Chrome \u7528\u7684\u5185\u5b58\nps aux | grep -i chrome | awk '{sum += $4} END {print 4*1024 * (sum/100)}'\n\n# \u7c7b\u4f3c\u4e8e lsusb\nioreg -p IOUSB -l -w 0\n# lsusb\nbrew update && brew tap jlhonora/lsusb && brew install lsusb\n\n# \u66f4\u65b0\u8f6f\u4ef6\nsoftwareupdate -i -w\n\n# \u67e5\u770b OS X \u7cfb\u7edf\u7248\u672c\u4fe1\u606f\nsw_vers\n\n# \u6253\u5f00\u5c4f\u4fdd\nopen -a ScreenSaverEngine\n\n# \u9501\u5c4f\n/System/Library/CoreServices/\"Menu Extras\"/User.menu/Contents/Resources/CGSession -suspend\n\n# \u9605\u8bfb\u90ae\u4ef6\nmail\n# \u5220\u9664\u6240\u6709\u90ae\u4ef6\n# delete *\n# q\n\n# \u67e5\u770b\u786c\u4ef6\u7f51\u7edc\u7aef\u53e3\nnetworksetup -listallhardwareports\n\n# \u67e5\u770b\u9690\u85cf\u6587\u4ef6\uff0c\u9700\u8981\u91cd\u542f finder\ndefaults write com.apple.finder AppleShowAllFiles YES\n# \u5173\u95ed finder\nkillall Finder /System/Library/CoreServices/Finder.app\n# \u5173\u95ed\ndefaults write com.apple.finder AppleShowAllFiles NO\n")),(0,n.kt)("p",null,"\u6253\u5f00\u53d6\u8272\u5668"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-applescript"}),"on run {input, parameters}\n  choose color\n  return input\nend run\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6587\u4ef6\u76ee\u5f55\u7ed3\u6784")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),"/Library\n  /Screen Savers # \u5c4f\u4fdd\u7a0b\u5e8f\n")),(0,n.kt)("h2",m({},{id:"brew"}),"Brew"),(0,n.kt)("p",null,"Brew \u662f OS X \u4e0a\u5fc5\u4e0d\u53ef\u5c11\u7684\u8f6f\u4ef6\u5305\u7ba1\u7406\u5668, \u5177\u4f53\u4f7f\u7528\u53ef\u53c2\u8003",(0,n.kt)("a",m({parentName:"p"},{href:"https://github.com/wenerme/wener/blob/master/tricks/manual/brew.md"}),"\u8fd9\u91cc")),(0,n.kt)("h2",m({},{id:"\u79fb\u52a8\u78c1\u76d8\u683c\u5f0f\u9009\u62e9"}),"\u79fb\u52a8\u78c1\u76d8\u683c\u5f0f\u9009\u62e9"),(0,n.kt)("p",null,"\u5982\u679c\u60f3\u8981\u5c06\u79fb\u52a8\u78c1\u76d8\u4e0e PC \u548c Mac \u5171\u7528,\u6700\u597d\u9009\u62e9 ExtFAT,\u652f\u6301\u5927\u6587\u4ef6(>4G), \u90fd\u80fd\u88ab\u8bc6\u522b\u548c\u8bfb\u5199,\u5728 Mac \u4e0a\u683c\u5f0f\u5316\u7684\u65f6\u5019,\u9700\u8981\u9009\u62e9\u4f7f\u7528\u4e3b\u5f15\u5bfc\u8bb0\u5f55\u800c\u4e0d\u662f GUID, \u5426\u5219 Windows \u8bc6\u522b\u4e0d\u4e86."),(0,n.kt)("h2",m({},{id:"\u542f\u52a8\u9009\u9879"}),"\u542f\u52a8\u9009\u9879"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"\u542f\u52a8\u952e"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Command-R"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u6062\u590d\u6a21\u5f0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Command-Option-R"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u7f51\u7edc\u6062\u590d\u6a21\u5f0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Alt/Option"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u8bbf\u95ee\u542f\u52a8\u7ba1\u7406\u5668")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"C"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u4ece CD, DVD, \u6216 USB \u542f\u52a8")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"N"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"NetBoot")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Shift"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u5b89\u5168\u542f\u52a8")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Command-V"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u8be6\u7ec6\u6a21\u5f0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Command-S"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u5355\u7528\u6237\u6a21\u5f0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Command-Option-P-R"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u91cd\u7f6e ",(0,n.kt)("a",m({parentName:"td"},{href:"https://support.apple.com/zh-cn/HT204063"}),"NVRAM"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"T"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u542f\u52a8\u76ee\u6807\u78c1\u76d8\u6a21\u5f0f")))),(0,n.kt)("p",null,"\u5e38\u7528\u952e\u76d8\u6620\u5c04"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Windows"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"macOS"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Windows Key"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Command")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Alt"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Option")))),(0,n.kt)("h2",m({},{id:"\u8bc1\u4e66"}),"\u8bc1\u4e66"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),'sudo security add-trusted-cert -d -r trustRoot -k "/Library/Keychains/System.keychain" cert.cer\nsudo security remove-trusted-cert -d cert.cer\n')),(0,n.kt)("h2",m({},{id:"finder"}),"Finder"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Finder \u7684\u4e3b\u8981\u95ee\u9898",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u590d\u5236\u5f53\u524d\u5730\u5740"),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u65b0\u5efa\u6587\u4ef6"),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u526a\u5207"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"http://www.trankynam.com/xtrafinder/"}),"xtrafinder"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"XtraFinder add Tabs and features to Mac Finder."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"http://bahoom.com/finderpath/"}),"FinderPath"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5730\u5740\u680f")))),(0,n.kt)("h2",m({},{id:"install-xcode"}),"Install Xcode"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"xcode-select --install\n\nxcodebuild -runFirstLaunch\nclang -v\n")),(0,n.kt)("h2",m({},{id:"license"}),"license"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"sudo xcodebuild -license\n")),(0,n.kt)("h2",m({},{id:"\u8d44\u6e90\u4e0b\u8f7d"}),"\u8d44\u6e90\u4e0b\u8f7d"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"http://mac-torrent-download.net/"}),"mac-torrent-download")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"http://www.macbed.com/"}),"http://www.macbed.com/"))),(0,n.kt)("h2",m({},{id:"\u7ec8\u7aef\u542f\u7528\u6362\u884c"}),"\u7ec8\u7aef\u542f\u7528\u6362\u884c"),(0,n.kt)("p",null,"\u4e0d\u6362\u884c\u4f1a\u88ab\u622a\u65ad"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"tput rmam # \u7981\u7528\u6362\u884c\ntput smam # \u542f\u7528\u6362\u884c\n")),(0,n.kt)("h3",m({},{id:"csrutil"}),"csrutil"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),"Modify the System Integrity Protection configuration. All configuration changes apply to the entire machine.\nAvailable commands:\n\n    clear\n        Clear the existing configuration.\n    disable\n        Disable the protection on the machine. Only available in Recovery OS.\n    enable\n        Enable the protection on the machine. Only available in Recovery OS.\n    status\n        Display the current configuration.\n\n    netboot\n        add <address>\n            Insert a new IPv4 address in the list of allowed NetBoot sources.\n        list\n            Print the list of allowed NetBoot sources.\n        remove <address>\n            Remove an IPv4 address from the list of allowed NetBoot sources.\n")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),"/System\n/sbin\n/bin\n/usr *\n/Applications **\n\n* /usr is protected with the exception of /usr/local subdirectory, which is often used by tools like Homebrew\n\n** /Applications is protected for apps that are pre-installed with Mac OS (Calendar, Photos, Safari, Terminal, Console, App Store, Notes, etc)\n\nlog show --predicate 'eventMessage contains \"Previous shutdown cause\"' --last 24h\n")),(0,n.kt)("h2",m({},{id:"faq"}),"FAQ"),(0,n.kt)("h3",m({},{id:"diskutil"}),"Diskutil"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# \u683c\u5f0f\u5316\u4e3a FAT32\ndiskutil eraseDisk FAT32 NAME MBRFormat /dev/disk2\n")),(0,n.kt)("h3",m({},{id:"basicipv6validationerror"}),"BasicIPv6ValidationError"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# \u5148\u7981\u7528\u6389\u5bf9\u5e94\u7f51\u5361\u7684 IPv6\n# networksetup -setv6off Wi-Fi\nnetworksetup -setv6off Ethernet\n# \u7136\u540e\u901a\u8fc7\u547d\u4ee4\u884c\u4fee\u6539\u914d\u7f6e\nnetworksetup -setmanual Ethernet 192.168.31.2 255.255.255.0 192.168.1.1\n# \u8bbe\u7f6e\u5b8c\u6210\u540e\u4e5f\u53ef\u4ee5\u5c06 IPv6 \u8bbe\u7f6e\u4e3a\u81ea\u52a8\n")),(0,n.kt)("h3",m({},{id:"ntfs-\u4e0d\u80fd\u5199"}),"NTFS \u4e0d\u80fd\u5199"),(0,n.kt)("p",null,"OS X \u56e0\u4e3a\u7248\u6743\u539f\u56e0\u4e0d\u652f\u6301 NTFS \u7684\u5199\u64cd\u4f5c,\u9700\u8981\u5b89\u88c5\u7b2c\u4e09\u65b9\u8f6f\u4ef6\u624d\u80fd\u8fdb\u884c\u5199\u64cd\u4f5c."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Tuxera NTFS")),(0,n.kt)("h3",m({},{id:"\u4f7f\u7528-usb-\u4ee5\u592a\u7f51"}),"\u4f7f\u7528 USB \u4ee5\u592a\u7f51"),(0,n.kt)("p",null,"\u9700\u8981\u5b89\u88c5 ",(0,n.kt)("a",m({parentName:"p"},{href:"https://github.com/jwise/HoRNDIS"}),"HoRNDIS")," \u6765\u652f\u6301"),(0,n.kt)("h4",m({},{id:"\u5728-x86-\u4e0a\u5b89\u88c5"}),"\u5728 x86 \u4e0a\u5b89\u88c5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://www.tonymacx86.com/threads/unibeast-install-macos-sierra-on-any-supported-intel-based-pc.200564/"}),"UniBeast: Install macOS Sierra on Any Supported Intel-based PC")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://www.tonymacx86.com/resources/unibeast-7-1-1.333/"}),"unibeast 7"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 macOS Sierra")))),(0,n.kt)("h4",m({},{id:"\u66f4\u65b0\u672a\u80fd\u88ab\u9a8c\u8bc1"}),"\u66f4\u65b0\u672a\u80fd\u88ab\u9a8c\u8bc1"),(0,n.kt)("p",null,"\u53ef\u53c2\u8003",(0,n.kt)("a",m({parentName:"p"},{href:"http://matrix.sspai.com/p/dd9c2d80"}),"\u8be5\u6587\u7ae0"),"."),(0,n.kt)("p",null,"\u89e3\u51b3\u529e\u6cd5,\u524d\u5f80 ",(0,n.kt)("a",m({parentName:"p"},{href:"https://support.apple.com/downloads/combo"}),"\u82f9\u679c\u7ec4\u5408\u66f4\u65b0\u4e0b\u8f7d\u9875\u9762"),", \u4e0b\u8f7d\u9700\u8981\u7684\u7248\u672c, \u624b\u52a8\u8fdb\u884c\u5b89\u88c5\u66f4\u65b0."),(0,n.kt)("h4",m({},{id:"\u5e38\u89c1\u95ee\u9898\u8bca\u65ad"}),"\u5e38\u89c1\u95ee\u9898\u8bca\u65ad"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u91cd\u7f6e NVRAM"),(0,n.kt)("li",{parentName:"ul"},"\u91cd\u7f6e ",(0,n.kt)("a",m({parentName:"li"},{href:"https://support.apple.com/zh-cn/HT201295"}),"SMC")),(0,n.kt)("li",{parentName:"ul"},"\u78c1\u76d8\u68c0\u6d4b fsck -fy",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man8/fsck.8.html"}),"fsck")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man8/fsck_hfs.8.html"}),"fsck_hfs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"http://www.thegeekstuff.com/2012/08/fsck-command-examples"}),"http://www.thegeekstuff.com/2012/08/fsck-command-examples")))),(0,n.kt)("li",{parentName:"ul"},"\u5b89\u5168\u542f\u52a8"),(0,n.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u6302\u8f7d\u78c1\u76d8",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"http://apple.stackexchange.com/a/59166/103557"}),"http://apple.stackexchange.com/a/59166/103557")),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5c1d\u8bd5 ",(0,n.kt)("a",m({parentName:"li"},{href:"https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man8/asr.8.html"}),"asr")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Apple_Software_Restore"}),"https://en.wikipedia.org/wiki/Apple_Software_Restore")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"http://apple.stackexchange.com/questions/57597/how-to-fix-broken-efi-partition"}),"http://apple.stackexchange.com/questions/57597/how-to-fix-broken-efi-partition")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"http://www.insanelymac.com/forum/topic/312038-how-to-fix-a-bad-or-broken-efi-partition-to-be-working-with-uefi-booters/"}),"http://www.insanelymac.com/forum/topic/312038-how-to-fix-a-bad-or-broken-efi-partition-to-be-working-with-uefi-booters/"))),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# Ubuntu\napt-get install hfsprogs\nfdisk -l\n# \u68c0\u6d4b\u78c1\u76d8\u662f\u5426\u6709\u95ee\u9898\nfsck.hfsplus /dev/sda2\n# \u8003\u8651\u5c06\u5176\u6302\u8f7d\u4e0a\u7136\u540e\u628a\u9700\u8981\u7684\u6570\u636e\u62f7\u8d1d\u51fa\u6765\nmount -t hfsplus -o force,rw /dev/sdb2 /media/mntpoint\n")),(0,n.kt)("h3",m({},{id:"\u6e05\u9664-dns-\u7f13\u5b58"}),"\u6e05\u9664 DNS \u7f13\u5b58"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# OS X 12 (Sierra) and later\nsudo killall -HUP mDNSResponder\nsudo killall mDNSResponderHelper\nsudo dscacheutil -flushcache\n# OS X 11 (El Capitan) and OS X 12 (Sierra)\nsudo killall -HUP mDNSResponder\n")),(0,n.kt)("h3",m({},{id:"\u7f51\u7edc"}),"\u7f51\u7edc"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# \u67e5\u770b\u8def\u7531\u8868\n# -n \u4e0d\u505a resolve\nnetstat -nr\n")),(0,n.kt)("h3",m({},{id:"\u6865\u63a5"}),"\u6865\u63a5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5bf9 wifi \u652f\u6301\u4e0d\u592a\u597d")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"sudo ifconfig bridge0 create\nsudo ifconfig bridge0 addm en0 addm en1\nsudo ifconfig bridge0 up\n\nifconfig tap0 192.168.0.20 netmask 255.255.255.0\n\nifconfig bridge0 addm tap0\n\nman ifconfig\n")),(0,n.kt)("h3",m({},{id:"tuntap"}),"tuntap"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"http://tuntaposx.sourceforge.net/"}),"http://tuntaposx.sourceforge.net/"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u76ee\u524d\u6700\u65b0\u7248\u5df2\u7ecf\u4e0d\u4f1a\u52a0\u8f7d\u8be5\u6269\u5c55"))),(0,n.kt)("li",{parentName:"ul"},"macOS \u652f\u6301 utun"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://tunnelblick.net/cTunTapConnections.html"}),"The Future of Tun and Tap VPNs on macOS"))),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"brew cask install tuntap\n# \u907f\u514d root \u8bbf\u95ee\nsudo chown $USER:staff /dev/tap0\n\nll /dev/tun*\nll /dev/tap*\n\n# \u4f1a\u521b\u5efa\u5931\u8d25\nifconfig tap0 create\n# \u5728 root shell \u4e2d\u6267\u884c\u8be5\u547d\u4ee4\u4f1a\u521b\u5efa\n# https://sourceforge.net/p/tuntaposx/mailman/message/30457237/\n# The idea is that interfaces only get created when a program opens the corresponding /dev/tapX or /dev/tunX device.\n# To try, do exec 3<>/dev/tap0 on a root shell.\nexec 3<>/dev/tap0\n\nifconfig tap0 10.10.10.1 10.10.10.255\nifconfig tap0 up\nping -c1 10.10.10.1\n\nifconfig tap0 0.0.0.0\nsudo ifconfig bridge0 addm tap0\n")),(0,n.kt)("h3",m({},{id:"\u8f6c\u53d1"}),"\u8f6c\u53d1"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",m({parentName:"p"},{href:"https://superuser.com/questions/596095"}),"How do I bridge a connection from Wi-Fi to TAP on Mac OS X? (for the emulator QEMU)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",m({parentName:"p"},{href:"https://superuser.com/questions/670545"}),"How do I create a wifi network bridge with qemu on OS X?"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",m({parentName:"p"},{href:"https://github.com/ckujau/scripts/blob/master/qemu-tap.sh"}),"qemu-tap.sh"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u65b0\u7248\u6ca1\u6709 natd \u548c ipfw \u4e86 \u7edf\u4e00\u4f7f\u7528 pfctl")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"PF - ",(0,n.kt)("a",m({parentName:"p"},{href:"https://www.openbsd.org/faq/pf/nat.html"}),"Network Address Translation")))),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"INTERFACE=en0\n\n# ifup\nsysctl -w net.inet.ip.forwarding=1\nsysctl -w net.link.ether.inet.proxyall=1\nsysctl -w net.inet.ip.fw.enable=1\nifconfig bridge0 create\nifconfig bridge0 addm $INTERFACE addm tap0\nifconfig bridge0 up\nnatd -interface $INTERFACE\nipfw add divert natd ip from any to any via $INTERFACE\n\n# ifdown\nsysctl -w net.inet.ip.forwarding=0\nsysctl -w net.link.ether.inet.proxyall=0\nsysctl -w net.inet.ip.fw.enable=1\n")),(0,n.kt)("h3",m({},{id:"\u8def\u7531"}),"\u8def\u7531"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# -r show routes, -n not resolve\nnetstat -nr\nroute delete -host 10.3.2.1\nroute add -net 10.3 tun0\nroute add -host 9.8.7.6 tun0\n")),(0,n.kt)("h3",m({},{id:"\u9632\u706b\u5899"}),"\u9632\u706b\u5899"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://murusfirewall.com/Documentation/OS%20X%20PF%20Manual.pdf"}),"OS X PF Manual")),(0,n.kt)("li",{parentName:"ul"},"A Cheat Sheet For Using pf in OS X Lion and Up ",(0,n.kt)("a",m({parentName:"li"},{href:"http://krypted.com/mac-os-x/a-cheat-sheet-for-using-pf-in-os-x-lion-and-up/"}),"http://krypted.com/mac-os-x/a-cheat-sheet-for-using-pf-in-os-x-lion-and-up/"))),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"cat /etc/pf.conf\n# \u542f\u7528, \u53ef\u80fd\u9ed8\u8ba4\u672a\u542f\u7528\npfctl -ef /etc/pf.conf\n# \u8bed\u6cd5\u68c0\u6d4b\npfctl -v -n -f /etc/pf.conf\n# \u5e94\u7528\u548c\u91cd\u8f7d\npfctl -f /etc/pf.conf\n")),(0,n.kt)("h3",m({},{id:"documentrevisions-v100"}),"DocumentRevisions-V100"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/.DocumentRevisions-V100")," \u53ef\u80fd\u4f1a\u5360\u7528\u975e\u5e38\u591a\u7684\u7a7a\u95f4"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://apple.stackexchange.com/a/313112/103557"}),"What will occur if the .DocumentRevisions-V100 folder is deleted?"))),(0,n.kt)("h3",m({},{id:"\u5e38\u89c1\u7f51\u7edc\u540d\u79f0"}),"\u5e38\u89c1\u7f51\u7edc\u540d\u79f0"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"lo0 = loopback"),(0,n.kt)("li",{parentName:"ul"},"gif0 = Software Network Interface"),(0,n.kt)("li",{parentName:"ul"},"stf0 = 6to4 tunnel interface"),(0,n.kt)("li",{parentName:"ul"},"en0 = Ethernet 0"),(0,n.kt)("li",{parentName:"ul"},"fw0 = Firewire"),(0,n.kt)("li",{parentName:"ul"},"en1 = Ethernet 1"),(0,n.kt)("li",{parentName:"ul"},"vmnet1 = Virtual Interface")),(0,n.kt)("h3",m({},{id:"develope"}),"Develope"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),"security find-identity -v -p codesigning\n")),(0,n.kt)("h3",m({},{id:"\u547d\u4ee4\u884c\u5f00\u542f\u5c4f\u5e55\u5171\u4eab"}),"\u547d\u4ee4\u884c\u5f00\u542f\u5c4f\u5e55\u5171\u4eab"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# \u5f00\u542f\u6240\u6709\u670d\u52a1\uff0c\u5141\u8bb8\u6240\u6709\u7528\u6237\nsudo /System/Library/CoreServices/RemoteManagement/ARDAgent.app/Contents/Resources/kickstart -activate -configure -access -off -restart -agent -privs -all -allowAccessFor -allUsers\n\n# \u53ea\u5f00\u542f\u5c4f\u5e55\u5171\u4eab\nsudo defaults write /var/db/launchd.db/com.apple.launchd/overrides.plist com.apple.screensharing -dict Disabled -bool false\n\nsudo launchctl load -w /System/Library/LaunchDaemons/com.apple.screensharing.plist\n")),(0,n.kt)("h3",m({},{id:"syslog"}),"syslog"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://apple.stackexchange.com/questions/256769"}),"How to use logger command on Sierra?"))),(0,n.kt)("h2",m({},{id:"\u5386\u53f2"}),"\u5386\u53f2"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e54\u5e03\u65af\u79bb\u5f00\u82f9\u679c\u521b\u5efa NeXT"),(0,n.kt)("li",{parentName:"ul"},"NeXT \u4e13\u6ce8\u4e8e\u4e2a\u4eba\u5de5\u4f5c\u7ad9 - NeXT Computer, NeXTstation, NeXTcube"),(0,n.kt)("li",{parentName:"ul"},"NeXT \u7814\u53d1\u7684\u64cd\u4f5c\u7cfb\u7edf NeXTStep - \u57fa\u4e8e BSD, Mach \u5fae\u5185\u6838",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 OO \u7cfb\u7edf\u5e93\uff0cFrameworks\uff0c Toolkits - kits"),(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8e OO \u7684\u684c\u9762"),(0,n.kt)("li",{parentName:"ul"},"ObjectC"),(0,n.kt)("li",{parentName:"ul"},"Xcode Interface Builder"),(0,n.kt)("li",{parentName:"ul"},"App Store"))),(0,n.kt)("li",{parentName:"ul"},"NeXT \u5206\u79bb\u9ad8\u5c42\u6846\u67b6\u4e3a OpenStep for Mach - \u9762\u5411 Windows NT, Sun Solaris"),(0,n.kt)("li",{parentName:"ul"},"Apple \u591a\u6b21\u5c1d\u8bd5\u5b8c\u5584 MacOS \u4ee5\u5931\u8d25\u544a\u7ec8"),(0,n.kt)("li",{parentName:"ul"},"Apple \u5e76\u8d2d NeXT - \u4e54\u5e03\u65af\u56de\u5230 Apple"),(0,n.kt)("li",{parentName:"ul"},"MacOS \u57fa\u4e8e OpenStep \u5b8c\u5584",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8e xnu \u5185\u6838"),(0,n.kt)("li",{parentName:"ul"},"\u6784\u5efa Cocoa API"))),(0,n.kt)("li",{parentName:"ul"},"\u672a\u5b8c\u6210 Rhapsody \uff0c\u5b8c\u6210\u90e8\u5206\u53d1\u5e03\u4e3a MacOS X Server 1.0"),(0,n.kt)("li",{parentName:"ul"},"Rhapsody -> MacOS X, OS X, macOS"),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://apple.stackexchange.com/a/401881/103557"}),"https://apple.stackexchange.com/a/401881/103557"))))))}g.isMDXComponent=!0}}]);