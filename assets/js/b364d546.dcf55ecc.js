"use strict";(self.webpackChunkhijulien=self.webpackChunkhijulien||[]).push([[1130],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=a,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},86358:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={},o="\u7cfb\u7edf\u4fe1\u606f",l={unversionedId:"Bash/archives/system",id:"Bash/archives/system",title:"\u7cfb\u7edf\u4fe1\u606f",description:"uname",source:"@site/others/Bash/archives/system.md",sourceDirName:"Bash/archives",slug:"/Bash/archives/system",permalink:"/hijulien/others/Bash/archives/system",draft:!1,tags:[],version:"current",frontMatter:{}},c={},s=[{value:"uname",id:"uname",level:2},{value:"service",id:"service",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7cfb\u7edf\u4fe1\u606f"},"\u7cfb\u7edf\u4fe1\u606f"),(0,a.kt)("h2",{id:"uname"},"uname"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"uname"),"\u547d\u4ee4\u8fd4\u56de\u5f53\u524d\u673a\u5668\u7684\u4fe1\u606f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5185\u6838\u7684\u7248\u672c\n$ uname -r\n3.2.0-24-virtual\n\n# CPU \u67b6\u6784\n$ uname -m\nx86_64\n")),(0,a.kt)("p",null,"\u5982\u679c\u8981\u4e86\u89e3\u64cd\u4f5c\u7cfb\u7edf\u7684\u7248\u672c\uff0c\u53ef\u4ee5\u67e5\u770b",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/issue"),"\u6587\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat /etc/issue\nDebian GNU/Linux 9 \\n \\l\n")),(0,a.kt)("h2",{id:"service"},"service"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"service"),"\u547d\u4ee4\u53ef\u4ee5\u67e5\u770b\u5f53\u524d\u6b63\u5728\u8fd0\u884c\u7684\u670d\u52a1\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ service --status-all\n [ + ]  apache2\n [ ? ]  atd\n [ - ]  bootlogd\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"+"),"\u8868\u793a\u6b63\u5728\u8fd0\u884c\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"-"),"\u8868\u793a\u5df2\u7ecf\u505c\u6b62\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"?"),"\u8868\u793a",(0,a.kt)("inlineCode",{parentName:"p"},"service"),"\u547d\u4ee4\u4e0d\u4e86\u89e3\u76f8\u5173\u4fe1\u606f\u3002"))}m.isMDXComponent=!0}}]);