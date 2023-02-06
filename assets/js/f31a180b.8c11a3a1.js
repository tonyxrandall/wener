"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[4809],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65700:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return m},metadata:function(){return k},toc:function(){return N}});var r=n(49613),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&c(e,n,t[n]);return e};const m={title:"rsync"},d="rsync",k={unversionedId:"ops/storage/tool/rsync",id:"ops/storage/tool/rsync",title:"rsync",description:"- \u53c2\u8003",source:"@site/../notes/ops/storage/tool/rsync.md",sourceDirName:"ops/storage/tool",slug:"/ops/storage/tool/rsync",permalink:"/notes/ops/storage/tool/rsync",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/ops/storage/tool/rsync.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1675652392,formattedLastUpdatedAt:"Feb 6, 2023",frontMatter:{title:"rsync"},sidebar:"docs",previous:{title:"restic",permalink:"/notes/ops/storage/tool/restic"},next:{title:"\u64cd\u4f5c\u7cfb\u7edf",permalink:"/notes/os/"}},y={},N=[{value:"\u5e76\u884c",id:"\u5e76\u884c",level:2},{value:"filter by extension",id:"filter-by-extension",level:2},{value:"ssh port",id:"ssh-port",level:2}],g={toc:N};function f(e){var t,n=e,{components:a}=n,c=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},g),c),l(t,o({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",u({},{id:"rsync"}),"rsync"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://man7.org/linux/man-pages/man1/rsync.1.html"}),"rsync.1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://www.cheatography.com/richardjh/cheat-sheets/rsync/"}),"https://www.cheatography.com/richardjh/cheat-sheets/rsync/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://wiki.archlinux.org/index.php/rsync"}),"https://wiki.archlinux.org/index.php/rsync")),(0,r.kt)("li",{parentName:"ul"},"unison",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://www.cis.upenn.edu/~bcpierce/unison/"}),"https://www.cis.upenn.edu/~bcpierce/unison/")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--info=progress2")," \u663e\u793a\u901f\u5ea6"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--exclude='/.git' --filter=\"dir-merge,- .gitignore\""),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u540c\u6b65 git \u5185\u5bb9")))),(0,r.kt)("admonition",u({},{type:"tip"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"rsync \u4e0d\u652f\u6301\u68c0\u6d4b rename, --fuzzy \u80fd\u5bf9\u540d\u5b57\u505a\u6a21\u7cca\u5339\u914d",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"rclone \u652f\u6301\u57fa\u4e8e hash, modtime, leaf \u68c0\u6d4b rename"))),(0,r.kt)("li",{parentName:"ul"},"rsync \u4e0d\u652f\u6301\u5e76\u884c - rclone \u652f\u6301\u5e76\u884c"),(0,r.kt)("li",{parentName:"ul"},"\u66f4\u590d\u6742\u7684",(0,r.kt)("strong",{parentName:"li"},"\u540c\u6b65"),"\u573a\u666f\u63a8\u8350 ",(0,r.kt)("a",u({parentName:"li"},{href:"/notes/ops/storage/tool/rclone"}),"rclone")),(0,r.kt)("li",{parentName:"ul"},"\u66f4\u590d\u6742\u7684",(0,r.kt)("strong",{parentName:"li"},"\u5907\u4efd"),"\u573a\u666f\u63a8\u8350 ",(0,r.kt)("a",u({parentName:"li"},{href:"/notes/ops/storage/tool/restic"}),"restic")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"flags"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"for"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"--archive, -a"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"-rlptgoD"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"--recursive, -r"),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"--links, -l"),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"--perms, -p"),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"--times, -t"),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"--owner, -o"),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"--group, -g"),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"-D"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"--devices --specials"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"--verbose, -v"),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"--progress"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u663e\u793a\u4f20\u8f93\u8fdb\u5ea6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"--partial"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u4fdd\u7559\u90e8\u5206\u4f20\u8f93\u6587\u4ef6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"-P"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"--partial --progress"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"--stats"),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"--remove-source-files"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u540c\u6b65\u540e\u5220\u9664\u6e90\u6587\u4ef6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"--human-readable, -h"),(0,r.kt)("td",u({parentName:"tr"},{align:null}))))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rsync src dst")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"rsync src/ dst/src")," - src \u542b ",(0,r.kt)("inlineCode",{parentName:"li"},"/")," \u8868\u793a\u4e0d\u521b\u5efa\u76ee\u5f55"),(0,r.kt)("li",{parentName:"ul"},"dst \u5982\u679c\u5305\u542b ",(0,r.kt)("inlineCode",{parentName:"li"},"/")," \u5219\u4e0d\u5b58\u5728\u65f6\u4f1a\u521b\u5efa\u76ee\u5f55\uff0c\u5426\u5219\u4f1a\u88ab\u590d\u5236\u4e3a\u6307\u5b9a\u6587\u4ef6"))),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'# \u4f7f\u7528 SSH \u540c\u6b65\nrsync -avz -e ssh remoteuser@remotehost:/remote/dir /this/dir/\n\n# \u8fdc\u7a0b\u4f7f\u7528 sudo\nrsync --rsync-path="sudo rsync" -avz dnsmasq/ admin@10.1.1.1:/etc/dnsmasq/\n\n# \u5907\u4efd\u6574\u4e2a\u7cfb\u7edf\nrsync -aAXv --exclude={"/dev/*","/proc/*","/sys/*","/tmp/*","/run/*","/mnt/*","/media/*","/lost+found"} / /path/to/backup/folder\n# \u4f7f\u7528 --info=progress2 \u663e\u793a\u603b\u4f53\u7684\u8fdb\u5ea6, \u800c\u4e0d\u662f\u6bcf\u4e2a\u6587\u4ef6\nrsync -aAX --info=progress2 --exclude={"/dev/*","/proc/*","/sys/*","/tmp/*","/run/*","/mnt/*","/media/*","/lost+found"} / /path/to/backup/folder\n\n# \u4e0d\u540c\u6b65\u6743\u9650\u7528\u6237\u5206\u7ec4\u4fe1\u606f\nrsync -avz --no-perms --no-owner --no-group mnt/wener abuild/\n\n# \u914d\u5408 fswatch \u4f7f\u7528\n# \u62f7\u8d1d\nfswatch ./ | xargs -I{} cp {} ~/Dropbox/backup/latest/\n# rsync\nalias run_rsync=\'rsync -azP --exclude ".*/" --exclude ".*" --exclude "tmp/" ~/Documents/repos/my_repository username@host:~\'\nrun_rsync\nfswatch -o . | while read f; do run_rsync; done\n')),(0,r.kt)("h2",u({},{id:"\u5e76\u884c"}),"\u5e76\u884c"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"rsync -avzm --stats --safe-links --ignore-existing --dry-run \\\n  --human-readable /data/projects REMOTE-HOST:/data/ > /tmp/transfer.log\n\n# --relative \u8981\u6c42\u5728 /data/projects \u6267\u884c\ncat /tmp/transfer.log \\\n  | parallel --will-cite -j 5 rsync -avzm --relative \\\n    --stats --safe-links --ignore-existing \\\n    --human-readable {} REMOTE-HOST:/data/ > result.log\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://wiki.ncsa.illinois.edu/display/~wglick/2013/11/01/Parallel+Rsync"}),"https://wiki.ncsa.illinois.edu/display/~wglick/2013/11/01/Parallel+Rsync")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://unix.stackexchange.com/questions/189878"}),"https://unix.stackexchange.com/questions/189878"))),(0,r.kt)("h2",u({},{id:"filter-by-extension"}),"filter by extension"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"--prune-empty-dirs",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"3.1.2 ",(0,r.kt)("inlineCode",{parentName:"li"},"-m"))))),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'# 3.0.6+\nrsync -zarv --include="*/" --include="*.sh" --exclude="*" "$from" "$to"\n# < 3.0.6\nrsync -zarv --include="*/" --exclude="*" --include="*.sh" "$from" "$to"\n')),(0,r.kt)("h2",u({},{id:"ssh-port"}),"ssh port"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"rsync -e 'ssh -p 2222'\n")))}f.isMDXComponent=!0}}]);