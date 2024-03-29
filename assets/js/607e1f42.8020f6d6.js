"use strict";(self.webpackChunkhijulien=self.webpackChunkhijulien||[]).push([[5884],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(t),s=i,k=m["".concat(p,".").concat(s)]||m[s]||d[s]||l;return t?r.createElement(k,a(a({ref:n},u),{},{components:t})):r.createElement(k,a({ref:n},u))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,a=new Array(l);a[0]=s;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[m]="string"==typeof e?e:i,a[1]=o;for(var c=2;c<l;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},13420:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=t(87462),i=(t(67294),t(3905));const l={},a="\u6587\u4ef6\u64cd\u4f5c",o={unversionedId:"Bash/archives/file-operation",id:"Bash/archives/file-operation",title:"\u6587\u4ef6\u64cd\u4f5c",description:"cp",source:"@site/others/Bash/archives/file-operation.md",sourceDirName:"Bash/archives",slug:"/Bash/archives/file-operation",permalink:"/hijulien/others/Bash/archives/file-operation",draft:!1,tags:[],version:"current",frontMatter:{}},p={},c=[{value:"cp",id:"cp",level:2},{value:"mkdir",id:"mkdir",level:2},{value:"mv",id:"mv",level:2},{value:"rm",id:"rm",level:2},{value:"ln",id:"ln",level:2}],u={toc:c},m="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(m,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u6587\u4ef6\u64cd\u4f5c"},"\u6587\u4ef6\u64cd\u4f5c"),(0,i.kt)("h2",{id:"cp"},"cp"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"cp"),"\u547d\u4ee4\u7528\u4e8e\u5c06\u6587\u4ef6\uff08\u6216\u76ee\u5f55\uff09\u62f7\u8d1d\u5230\u76ee\u7684\u5730\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u62f7\u8d1d\u5355\u4e2a\u6587\u4ef6\n$ cp source dest\n\n# \u62f7\u8d1d\u591a\u4e2a\u6587\u4ef6\n$ cp source1 source2 source3 dest\n\n# -i \u76ee\u7684\u5730\u6709\u540c\u540d\u6587\u4ef6\u65f6\u4f1a\u63d0\u793a\u786e\u8ba4\n$ cp -i file1 file2\n\n# -r \u9012\u5f52\u62f7\u8d1d\uff0c\u5c06dir1\u62f7\u8d1d\u5230dir2\uff0c\u5b8c\u6210\u540edir2\u751f\u6210\u4e00\u4e2a\u5b50\u76ee\u5f55dir1\n# dir2\u5982\u679c\u4e0d\u5b58\u5728\uff0c\u5c06\u88ab\u521b\u5efa\n# \u62f7\u8d1d\u76ee\u5f55\u65f6\uff0c\u8be5\u53c2\u6570\u662f\u5fc5\u9700\u7684\n$ cp -r dir1 dir2\n\n# -u --update \u53ea\u62f7\u8d1d\u76ee\u7684\u5730\u6ca1\u6709\u7684\u6587\u4ef6\uff0c\u6216\u8005\u6bd4\u76ee\u7684\u5730\u540c\u540d\u6587\u4ef6\u66f4\u65b0\u7684\u6587\u4ef6\n$ cp -u *.html destination\n")),(0,i.kt)("p",null,"\u5176\u4ed6\u53c2\u6570"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-a")," \u62f7\u8d1d\u65f6\u4fdd\u7559\u6240\u6709\u5c5e\u6027\uff0c\u5305\u62ec\u6240\u6709\u8005\u4e0e\u6743\u9650"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-v")," \u663e\u793a\u62f7\u8d1d\u7684\u8be6\u7ec6\u4fe1\u606f")),(0,i.kt)("h2",{id:"mkdir"},"mkdir"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"mkdir"),"\u547d\u4ee4\u7528\u4e8e\u65b0\u5efa\u76ee\u5f55\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u65b0\u5efa\u591a\u4e2a\u76ee\u5f55\n$ mkdir dir1 dir2 dir3\n")),(0,i.kt)("h2",{id:"mv"},"mv"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"mv"),"\u547d\u4ee4\u7528\u4e8e\u5c06\u6e90\u6587\u4ef6\u79fb\u52a8\u5230\u76ee\u7684\u5730\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u79fb\u52a8\u5355\u4e2a\u6587\u4ef6\n$ mv item1 item2\n\n# \u79fb\u52a8\u591a\u4e2a\u6587\u4ef6\n$ mv file1 file2 dir1\n\n# \u5c06dir1\u62f7\u8d1d\u8fdb\u5165dir2\uff0c\u5b8c\u6210\u540edir2\u5c06\u591a\u51fa\u4e00\u4e2a\u5b50\u76ee\u5f55dir1\n# \u5982\u679cdir2\u4e0d\u5b58\u5728\uff0c\u5c06\u4f1a\u88ab\u521b\u5efa\n$ mv dir1 dir2\n")),(0,i.kt)("p",null,"\u53c2\u6570"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-i")," \u8986\u76d6\u5df2\u7ecf\u5b58\u5728\u7684\u6587\u4ef6\u65f6\uff0c\u4f1a\u63d0\u793a\u786e\u8ba4"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-u")," \u53ea\u79fb\u52a8\u76ee\u7684\u5730\u4e0d\u5b58\u5728\u7684\u6587\u4ef6\uff0c\u6216\u6bd4\u76ee\u7684\u5730\u66f4\u65b0\u7684\u6587\u4ef6")),(0,i.kt)("h2",{id:"rm"},"rm"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"rm"),"\u547d\u4ee4\u7528\u4e8e\u5220\u9664\u6587\u4ef6\u3002"),(0,i.kt)("p",null,"\u53c2\u6570\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-i")," \u6587\u4ef6\u5b58\u5728\u65f6\uff0c\u4f1a\u63d0\u793a\u786e\u8ba4\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-r")," \u9012\u5f52\u5220\u9664\u4e00\u4e2a\u5b50\u76ee\u5f55"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-f")," \u5982\u679c\u5220\u9664\u4e0d\u5b58\u5728\u7684\u6587\u4ef6\uff0c\u4e0d\u62a5\u9519"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-v")," \u5220\u9664\u65f6\u5c55\u793a\u8be6\u7ec6\u4fe1\u606f")),(0,i.kt)("h2",{id:"ln"},"ln"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ln"),"\u547d\u4ee4\u7528\u4e8e\u5efa\u7acb\u94fe\u63a5\u6587\u4ef6\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u65b0\u5efa\u786c\u94fe\u63a5\n$ ln file link\n\n# \u65b0\u5efa\u8f6f\u94fe\u63a5\n$ ln -s item link\n")))}d.isMDXComponent=!0}}]);