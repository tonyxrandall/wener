"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[47548],{49613:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return k}});var n=a(59496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(a),k=r,s=u["".concat(p,".").concat(k)]||u[k]||m[k]||l;return a?n.createElement(s,i(i({ref:t},c),{},{components:a})):n.createElement(s,i({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8440:function(e,t,a){a.r(t),a.d(t,{assets:function(){return f},contentTitle:function(){return k},default:function(){return h},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return N}});var n=a(49613),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&c(e,a,t[a]);if(o)for(var a of o(t))d.call(t,a)&&c(e,a,t[a]);return e};const u={title:"HW Accel"},k="HW Accel",s={unversionedId:"service/media/hardware-accel",id:"service/media/hardware-accel",title:"HW Accel",description:"| OS      | HW Acceleration         |",source:"@site/../notes/service/media/hardware-accel.md",sourceDirName:"service/media",slug:"/service/media/hardware-accel",permalink:"/notes/service/media/hardware-accel",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/media/hardware-accel.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1659031280,formattedLastUpdatedAt:"Jul 28, 2022",frontMatter:{title:"HW Accel"},sidebar:"docs",previous:{title:"\u5b57\u5e55",permalink:"/notes/service/media/format/subtitle"},next:{title:"HEVC",permalink:"/notes/service/media/hevc"}},f={},N=[{value:"FFmpeg",id:"ffmpeg",level:2},{value:"vaInitialize failed with error code 18",id:"vainitialize-failed-with-error-code-18",level:2},{value:"\u770b\u4e0d\u5230\u663e\u5361",id:"\u770b\u4e0d\u5230\u663e\u5361",level:2}],g={toc:N};function h(e){var t,a=e,{components:r}=a,c=((e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&d.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=m(m({},g),c),l(t,i({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("h1",m({},{id:"hw-accel"}),"HW Accel"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"OS"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"HW Acceleration"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Linux"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"QSV, NVENC, AMF, VA-API")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Windows"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"QSV, NVENC, AMF")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"MacOS"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"VideoToolbox")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"RPi"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"V4L2")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Vendor"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"HW Acceleration"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"NVIDIA"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"NVENC")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"AMD"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"AMF, VA-API")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Intel"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"QSV, VA-API")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Apple"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"VideoToolbox")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"RPi"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"V4L2")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Project"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Graphics Gen"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Repo"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"oneVPL"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"gen12+"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u200b",(0,n.kt)("a",m({parentName:"td"},{href:"https://github.com/oneapi-src/oneVPL"}),"https://github.com/oneapi-src/oneVPL"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"iHD driver"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"gen8+"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u200b",(0,n.kt)("a",m({parentName:"td"},{href:"https://github.com/intel/media-driver"}),"https://github.com/intel/media-driver"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Libva"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"gen5+"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u200b",(0,n.kt)("a",m({parentName:"td"},{href:"https://github.com/intel/libva"}),"https://github.com/intel/libva"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"MSDK"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"gen8 ~ gen12(Rocket Lake)"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u200b",(0,n.kt)("a",m({parentName:"td"},{href:"https://github.com/Intel-Media-SDK/MediaSDK"}),"https://github.com/Intel-Media-SDK/MediaSDK"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"i965 driver"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"gen5 ~ gen9.5"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u200b",(0,n.kt)("a",m({parentName:"td"},{href:"https://github.com/intel/intel-vaapi-driver"}),"https://github.com/intel/intel-vaapi-driver"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Intel QuickSync (QSV)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8e VAAPI"))),(0,n.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u786c\u89e3\u652f\u6301 H.264 / AVC 10-bit",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5347\u7ea7\u4e3a HEVC 10-bit"))),(0,n.kt)("li",{parentName:"ul"},"/usr/lib/dri/ - \u5b89\u88c5\u7684\u9a71\u52a8",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"iHD_drv_video.so"),(0,n.kt)("li",{parentName:"ul"},"i965_drv_video.so"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/dev/dri/render*")," DRM render node"),(0,n.kt)("li",{parentName:"ul"},"i915"),(0,n.kt)("li",{parentName:"ul"},"i965")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),'cat /proc/cpuinfo | grep "model name" | uniq\n\napk add pciutils\nlspci -nn | egrep -i "3d|display|vga"\n\napk add lshw\nlshw -C display\nlshw -c video\n\napk add inxi\ninxi -G\n\n# i915_cur_delayinfo\nsudo sh -c \'cat /sys/kernel/debug/dri/*/name\'\n\n\nls /dev/dri\n\n# VA-API\n# ==========\n# AlpineLinux edge/testing libva-utils\napk -X https://mirrors.sjtug.sjtu.edu.cn/alpine/edge/testing add libva-utils\nvainfo\n# https://github.com/intel/libva-utils\n# /dev/dri/renderXX\n\n# Intel QSV\n# =============\napk add intel-media-driver libva-intel-driver\nsudo LIBVA_TRACE=/tmp/libva_trace.log DRI_PRIME=1 LIBVA_DRIVER_NAME=iHD vainfo\n\nLIBVA_TRACE=/tmp/libva_trace.log DRI_PRIME=1 LIBVA_DRIVER_NAME=iHD ffmpeg -loglevel verbose -init_hw_device vaapi\n\n# options i915 enable_guc=3\n# options i915 enable_fbc=1\necho "options i915 force_probe=4692" | sudo tee /etc/modprobe.d/i915.conf\n\n# GPU freq\nsudo find /sys -type f -name gt_cur* -print0\n\n# X11\n# ==========\n# apk add vdpauinfo\n# vdpauinfo\ngrep -iE \'vdpau | dri driver\' /var/log/Xorg.0.log\n\n# FFMpeg\n# =======\nffmpeg -hide_banner -decoders | grep qsv # \u5224\u65ad\u662f\u5426\u6709\u52a0\u901f\nffmpeg -hwaccel vaapi -vaapi_device /dev/dri/renderD128 -i "video.MP4" -vf "select=eq(pict_type\\,I)" -vsync vfr -qscale:v 2 -f image2 "%08d.jpg"\n')),(0,n.kt)("h2",m({},{id:"ffmpeg"}),"FFmpeg"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"{h264,hevc}_{videotoolbox,amf,vaapi}"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"videotoolbox - macOS"),(0,n.kt)("li",{parentName:"ul"},"amf - Windows"),(0,n.kt)("li",{parentName:"ul"},"vaapi - Linux - vainfo"))),(0,n.kt)("li",{parentName:"ul"},"-hwaccel auto",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"dxva2,cuda,d3d11va,videotoolbox"),(0,n.kt)("li",{parentName:"ul"},"-hwaccel_device")))),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"ffmpeg -encoders | grep videotoolbox # \u652f\u6301\u7684 videotoolbox \u7f16\u7801\nffmpeg -h encoder=h264_videotoolbox  # \u67e5\u770b\u7f16\u7801\u5668\u9009\u9879\n\nffprobe in.mp4                           # \u5f04\u6e05\u695a\u539f\u59cb bitrate\nffmpeg -b:v 1900k -c:v h264_videotoolbox # -b:v \u5339\u914d\u539f\u59cb bitrate\n\n# \u4f7f\u7528 hwaccel \u65b9\u5f0f - \u5916\u7f6e GPU\nffmpeg \\\n  -hwaccel videotoolbox -i in.mp4 \\\n  -c:v libx265 -preset medium -crf 28 \\\n  -c:a copy \\\n  out.mp4\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"apple ",(0,n.kt)("a",m({parentName:"li"},{href:"https://developer.apple.com/documentation/videotoolbox"}),"VideoToolbox"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Decode H.263, H.264, HEVC, MPEG1, MPEG2, MPEG4, ProRes"),(0,n.kt)("li",{parentName:"ul"},"Encode H.264, HEVC, ProRes"),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 CRF/constant quality - \u5fc5\u987b\u6307\u5b9a -b:v"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://trac.ffmpeg.org/wiki/HWAccelIntro"}),"HWAccelIntro"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"macOS: VideoToolbox"),(0,n.kt)("li",{parentName:"ul"},"OpenCL \u5927\u591a\u5e73\u53f0\u652f\u6301\uff0c\u4f46\u662f\u4e0d\u53ef\u4ee5 encode/decode - \u7528\u4e8e Filtering"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://trac.ffmpeg.org/wiki/Hardware/QuickSync"}),"Hardware/QuickSync")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Intel_Quick_Sync_Video"}),"Intel Quick Sync Video"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u67e5\u770b Intel CPU \u652f\u6301\u7684\u7f16\u7801"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://en.wikipedia.org/wiki/List_of_Macintosh_models_grouped_by_CPU_type#Intel_x86"}),"List of Macintosh models grouped by CPU type"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u67e5\u770b Macbook \u5bf9\u5e94\u7684 Intel CPU \u7248\u672c"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/intel/media-driver"}),"intel/media-driver"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Intel(R) Media Driver for VAAPI"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/joshuaboniface/rffmpeg"}),"joshuaboniface/rffmpeg"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"remote SSH FFmpeg"))),(0,n.kt)("li",{parentName:"ul"},"archlinux ",(0,n.kt)("a",m({parentName:"li"},{href:"https://wiki.archlinux.org/title/Hardware_video_acceleration"}),"Hardware video acceleration")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://jellyfin.org/docs/general/administration/hardware-acceleration.html"}),"https://jellyfin.org/docs/general/administration/hardware-acceleration.html")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/intel/intel-device-plugins-for-kubernetes"}),"intel/intel-device-plugins-for-kubernetes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://www.techspot.com/article/1131-hevc-h256-enconding-playback/"}),"https://www.techspot.com/article/1131-hevc-h256-enconding-playback/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://www.elpamsoft.com/?p=Plex-Hardware-Transcoding"}),"https://www.elpamsoft.com/?p=Plex-Hardware-Transcoding")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/intel/vaapi-bypass"}),"intel/vaapi-bypass"))),(0,n.kt)("h2",m({},{id:"vainitialize-failed-with-error-code-18"}),"vaInitialize failed with error code 18"),(0,n.kt)("h2",m({},{id:"\u770b\u4e0d\u5230\u663e\u5361"}),"\u770b\u4e0d\u5230\u663e\u5361"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5c1d\u8bd5\u8c03\u6574 BIOS - \u4fee\u6539\u4e3a\u53ef\u5207\u6362\u663e\u5361")))}h.isMDXComponent=!0}}]);