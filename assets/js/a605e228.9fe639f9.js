"use strict";(self.webpackChunkhijulien=self.webpackChunkhijulien||[]).push([[4200],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),c=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(o.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(t),m=i,d=u["".concat(o,".").concat(m)]||u[m]||f[m]||r;return t?a.createElement(d,l(l({ref:n},s),{},{components:t})):a.createElement(d,l({ref:n},s))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=m;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[u]="string"==typeof e?e:i,l[1]=p;for(var c=2;c<r;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},59943:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>f,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var a=t(87462),i=(t(67294),t(3905));const r={},l="Offline \u5e94\u7528",p={unversionedId:"WebAPI/offline",id:"WebAPI/offline",title:"Offline \u5e94\u7528",description:"Web \u5e94\u7528\u4e0d\u4ec5\u53ef\u4ee5\u5728\u6d4f\u89c8\u5668\u7f13\u5b58\u8d44\u6e90\u6587\u4ef6\uff08HTML\u3001CSS\u3001JS \u811a\u672c\u3001\u56fe\u7247\u7b49\uff09\uff0c\u8fd8\u53ef\u4ee5\u628a\u5e94\u7528\u672c\u8eab\u50a8\u5b58\u5230\u6d4f\u89c8\u5668\u3002",source:"@site/frontend/WebAPI/offline.md",sourceDirName:"WebAPI",slug:"/WebAPI/offline",permalink:"/hijulien/frontend/WebAPI/offline",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"front",previous:{title:"Web Share API",permalink:"/hijulien/frontend/WebAPI/web-share-api"},next:{title:"Point lock API",permalink:"/hijulien/frontend/WebAPI/pointer-lock"}},o={},c=[],s={toc:c},u="wrapper";function f(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"offline-\u5e94\u7528"},"Offline \u5e94\u7528"),(0,i.kt)("p",null,"Web \u5e94\u7528\u4e0d\u4ec5\u53ef\u4ee5\u5728\u6d4f\u89c8\u5668\u7f13\u5b58\u8d44\u6e90\u6587\u4ef6\uff08HTML\u3001CSS\u3001JS \u811a\u672c\u3001\u56fe\u7247\u7b49\uff09\uff0c\u8fd8\u53ef\u4ee5\u628a\u5e94\u7528\u672c\u8eab\u50a8\u5b58\u5230\u6d4f\u89c8\u5668\u3002"),(0,i.kt)("p",null,"\u7f13\u5b58\u7684\u8d44\u6e90\u6587\u4ef6\u5fc5\u987b\u5728\u7ebf\u4f7f\u7528\uff0c\u53ea\u6709\u5148\u4ece\u670d\u52a1\u5668\u52a0\u8f7d\u7f51\u9875\uff0c\u7136\u540e\u624d\u80fd\u4f7f\u7528\u672c\u5730\u7f13\u5b58\uff1b\u4f46\u662f\uff0c\u5e94\u7528\u4e00\u65e6\u50a8\u5b58\uff0c\u5c31\u53ef\u4ee5\u79bb\u7ebf\u4f7f\u7528\u3002\u53e6\u5916\uff0c\u7528\u6237\u5e38\u89c4\u6027\u5730\u6e05\u9664\u6d4f\u89c8\u5668\u7f13\u5b58\uff0c\u5e76\u4e0d\u4f1a\u6e05\u9664\u50a8\u5b58\u7684\u5e94\u7528\uff0c\u9664\u975e\u7528\u6237\u663e\u5f0f\u5730\u5378\u8f7d\u6216\u5220\u9664\u5b83\u4eec\u3002"),(0,i.kt)("p",null,"\u4e3a\u4e86\u5f00\u542f\u79bb\u7ebf\u50a8\u5b58\uff0c\u5fc5\u987b\u521b\u5efa\u4e00\u4e2a manifest \u6587\u4ef6\u3002\u8be5\u6587\u4ef6\u5217\u51fa\u4e86\u6240\u6709\u9700\u8981\u50a8\u5b58\u7684\u6587\u4ef6\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"CACHE MANIFEST\nmyapp.html\nmyapp.js\nmyapp.css\nimages/background.png\n")),(0,i.kt)("p",null,"Manifest \u6587\u4ef6\u7684\u7b2c\u4e00\u884c\u5fc5\u987b\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"CACHE MANIFEST"),"\u3002\u7136\u540e\uff0c\u6bcf\u4e00\u884c\u5217\u51fa\u4e00\u4e2a\u9700\u8981\u50a8\u5b58\u7684\u6587\u4ef6\uff0c\u5b83\u4eec\u7684\u4f4d\u7f6e\u90fd\u662f\u76f8\u5bf9\u4e8e Manifest \u6587\u4ef6\u7684\u4f4d\u7f6e\u3002\u7a7a\u884c\u4f1a\u88ab\u5ffd\u7565\uff0c\u4ee5",(0,i.kt)("inlineCode",{parentName:"p"},"#"),"\u5f00\u5934\u7684\u884c\u662f\u6ce8\u91ca\uff0c\u4e5f\u4f1a\u88ab\u5ffd\u7565\u3002"),(0,i.kt)("p",null,"\u8fd9\u4e2a\u6587\u4ef6\u7684\u540e\u7f00\u540d\u4e00\u822c\u662f",(0,i.kt)("inlineCode",{parentName:"p"},".appcache"),"\u3002\u5b83\u7684 MIME \u7c7b\u578b\u5fc5\u987b\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"text/cache-manifest"),"\uff0c\u5982\u679c\u670d\u52a1\u5668\u5c06\u5176\u8bbe\u4e3a\u5176\u4ed6\u7c7b\u578b\uff0c\u5c31\u4e0d\u4f1a\u88ab\u6d4f\u89c8\u5668\u7f13\u5b58\u3002"),(0,i.kt)("p",null,"\u7f16\u5199\u5b8c\u8fd9\u4e2a\u6587\u4ef6\u4ee5\u540e\uff0c\u8981\u5c06",(0,i.kt)("inlineCode",{parentName:"p"},"<html>"),"\u5143\u7d20\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"manifest"),"\u5c5e\u6027\u6307\u5411\u5b83\u3002\u6d4f\u89c8\u5668\u52a0\u8f7d\u8fd9\u4e2a\u7f51\u9875\u7684\u65f6\u5019\uff0c\u5c31\u4f1a\u8bfb\u53d6\u8fd9\u4e2a Manifest \u6587\u4ef6\uff0c\u79bb\u7ebf\u50a8\u5b58\u8fd9\u4e2a\u7f51\u9875\u548c\u76f8\u5173\u7684\u8d44\u6e90\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE HTML>\n<html manifest="myapp.appcache">\n<head>...</head>\n<body>...</body>\n</html>\n')),(0,i.kt)("p",null,"\u5982\u679c\u4e00\u4e2a Web \u5e94\u7528\u6709\u591a\u4e2a\u7f51\u9875\u9700\u8981\u79bb\u7ebf\u50a8\u5b58\uff0c\u90a3\u4e48\u6bcf\u4e2a\u7f51\u9875\u90fd\u5e94\u8be5\u5c06",(0,i.kt)("inlineCode",{parentName:"p"},"manifest"),"\u5c5e\u6027\u6307\u5411\u8fd9\u4e2a\u6587\u4ef6\u3002\u4e00\u65e6\u88ab\u50a8\u5b58\uff0c\u4ee5\u540e\u52a0\u8f7d\u8be5\u7f51\u9875\u7684\u65f6\u5019\uff0c\u5c31\u4f1a\u4ece\u7f13\u5b58\u91cc\u9762\u52a0\u8f7d\u3002\u8fd9\u65f6\uff0c\u53ea\u6709 Manifest \u6587\u4ef6\u91cc\u9762\u5217\u51fa\u7684\u6587\u4ef6\u4f1a\u88ab\u52a0\u8f7d\uff0c\u5176\u4ed6\u6587\u4ef6\u4e0d\u4f1a\u3002\u5982\u679c\u8fd9\u65f6\u6d4f\u89c8\u5668\u5728\u7ebf\uff0c\u6d4f\u89c8\u5668\u5c31\u4f1a\u53bb\u68c0\u67e5 Manifest \u6587\u4ef6\u662f\u5426\u6709\u65b0\u7248\u672c\uff0c\u5982\u679c\u6709\u65b0\u7248\u672c\uff0c\u5c31\u4f1a\u91cd\u65b0\u50a8\u5b58\u548c\u66f4\u65b0\u8be5\u6587\u4ef6\u5217\u51fa\u7684\u8d44\u6e90\u3002\u6700\u65b9\u4fbf\u7684\u529e\u6cd5\u662f\u5728 Manifest \u6587\u4ef6\u91cc\u9762\u7528\u6ce8\u91ca\u5217\u51fa\u7248\u672c\u53f7\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"CACHE MANIFEST\n# MyApp version 1\nMyApp.html\nMyApp.js\n")),(0,i.kt)("p",null,"\u5982\u679c\u9700\u8981\u5220\u9664\u79bb\u7ebf\u50a8\u5b58\uff0c\u53ea\u8981\u5220\u9664 Manifest \u6587\u4ef6\uff0c\u8ba9\u5176\u8fd4\u56de 404 \u72b6\u6001\u7801\u5373\u53ef\u3002"),(0,i.kt)("p",null,"\u79bb\u7ebf\u50a8\u5b58\u66f4\u65b0\u5b8c\u6210\uff0c\u4f1a\u89e6\u53d1\u6d4f\u89c8\u5668\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"updateready"),"\u4e8b\u4ef6\uff0c\u53ef\u4ee5\u5bf9\u8fd9\u4e2a\u4e8b\u4ef6\u6307\u5b9a\u76d1\u542c\u51fd\u6570\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"window.applicationCache.onupdateready = function() {\n  var reload = confirm('\u65b0\u7248\u672c\u4e0b\u8f7d\u5b8c\u6210\u3002\u662f\u5426\u9700\u8981\u91cd\u65b0\u52a0\u8f7d\uff1f');\n  if (reload) location.reload();\n}\n")),(0,i.kt)("p",null,"\u811a\u672c\u53ef\u4ee5\u6ce8\u518c",(0,i.kt)("inlineCode",{parentName:"p"},"online"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"offline"),"\u4e8b\u4ef6\u7684\u76d1\u542c\u51fd\u6570\uff0c\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"navigator.onLine"),"\u5c5e\u6027\uff0c\u5224\u65ad\u6d4f\u89c8\u5668\u662f\u5426\u5728\u7ebf\u4ece\u800c\u8fdb\u884c\u6570\u636e\u540c\u6b65\u3002"),(0,i.kt)("p",null,"\u6bcf\u6b21\u6d4f\u89c8\u5668\u52a0\u8f7d\u4e00\u4e2a\u5177\u6709",(0,i.kt)("inlineCode",{parentName:"p"},"manifest"),"\u5c5e\u6027\u7684\u7f51\u9875\uff0c\u6d4f\u89c8\u5668\u5c31\u4f1a\u89e6\u53d1\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"checking"),"\u4e8b\u4ef6\uff0c\u7136\u540e\u53bb\u52a0\u8f7d Manifest \u6587\u4ef6\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u5e94\u7528\u5df2\u7ecf\u50a8\u5b58\uff0c\u5e76\u4e14 Manifest \u6587\u4ef6\u6ca1\u6709\u53d8\u5316\uff0c\u90a3\u4e48\u89e6\u53d1",(0,i.kt)("inlineCode",{parentName:"li"},"noupdate"),"\u4e8b\u4ef6\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u5e94\u7528\u5df2\u7ecf\u50a8\u5b58\uff0c\u5e76\u4e14 Manifest \u6587\u4ef6\u6709\u53d8\u5316\uff0c\u90a3\u4e48\u89e6\u53d1",(0,i.kt)("inlineCode",{parentName:"li"},"downloading"),"\u4e8b\u4ef6\uff0c\u6d4f\u89c8\u5668\u91cd\u65b0\u4e0b\u8f7d\u6240\u6709\u79bb\u7ebf\u8d44\u6e90\u3002\u4e0b\u8f7d\u8fc7\u7a0b\u4e2d\uff0c\u89e6\u53d1",(0,i.kt)("inlineCode",{parentName:"li"},"progress"),"\u4e8b\u4ef6\uff0c\u4e0b\u8f7d\u7ed3\u675f\u89e6\u53d1",(0,i.kt)("inlineCode",{parentName:"li"},"updateready"),"\u4e8b\u4ef6\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u5e94\u7528\u6ca1\u6709\u50a8\u5b58\uff0c\u4e0b\u8f7d\u7ed3\u675f\u5c06\u89e6\u53d1",(0,i.kt)("inlineCode",{parentName:"li"},"cached"),"\u4e8b\u4ef6\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u79bb\u7ebf\uff0c\u65e0\u6cd5\u68c0\u67e5 Manifest \u6587\u4ef6\uff0c\u6d4f\u89c8\u5668\u4f1a\u89e6\u53d1\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"li"},"error"),"\u4e8b\u4ef6\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u6d4f\u89c8\u5668\u5728\u7ebf\uff0c\u800c\u4e14\u5e94\u7528\u5df2\u7ecf\u50a8\u5b58\uff0c\u4f46\u662f Manifest \u6587\u4ef6\u8fd4\u56de 404\uff0c\u6d4f\u89c8\u5668\u89e6\u53d1",(0,i.kt)("inlineCode",{parentName:"li"},"obsolete"),"\u4e8b\u4ef6\uff0c\u5c06\u50a8\u5b58\u7684\u5e94\u7528\u79fb\u9664\u3002")),(0,i.kt)("p",null,"\u6240\u6709\u8fd9\u4e9b\u4e8b\u4ef6\u90fd\u662f\u53ef\u4ee5\u53d6\u6d88\u7684\u3002\u76d1\u542c\u51fd\u6570\u53ef\u4ee5\u8fd4\u56de",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"\uff0c\u53d6\u6d88\u8fd9\u4e9b\u4e8b\u4ef6\u7684\u9ed8\u8ba4\u52a8\u4f5c\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"applicationCache. status"),"\u5c5e\u6027\u8fd4\u56de\u79bb\u7ebf\u50a8\u5b58\u7684\u72b6\u6001\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ApplicationCache.UNCACHED (0)\nThis application does not have a manifest attribute: it is not cached."),(0,i.kt)("li",{parentName:"ul"},"ApplicationCache.IDLE (1)\nThe manifest has been checked and this application is cached and up to date."),(0,i.kt)("li",{parentName:"ul"},"ApplicationCache.CHECKING (2)\nThe browser is checking the manifest file."),(0,i.kt)("li",{parentName:"ul"},"ApplicationCache.DOWNLOADING (3)\nThe browser is downloading and caching files listed in the manifest."),(0,i.kt)("li",{parentName:"ul"},"ApplicationCache.UPDATEREADY (4)\nA new version of the application has been downloaded and cached."),(0,i.kt)("li",{parentName:"ul"},"ApplicationCache.OBSOLETE (5)\nThe manifest no longer exists and the cache will be deleted.")))}f.isMDXComponent=!0}}]);