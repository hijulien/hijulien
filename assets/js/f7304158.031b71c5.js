"use strict";(self.webpackChunkhijulien=self.webpackChunkhijulien||[]).push([[9498],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>N});var p=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);n&&(p=p.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,p)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,p,a=function(e,n){if(null==e)return{};var t,p,a={},r=Object.keys(e);for(p=0;p<r.length;p++)t=r[p],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(p=0;p<r.length;p++)t=r[p],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=p.createContext({}),k=function(e){var n=p.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=k(e.components);return p.createElement(o.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return p.createElement(p.Fragment,{},n)}},c=p.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=k(t),c=a,N=u["".concat(o,".").concat(c)]||u[c]||d[c]||r;return t?p.createElement(N,l(l({ref:n},m),{},{components:t})):p.createElement(N,l({ref:n},m))}));function N(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=c;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var k=2;k<r;k++)l[k]=t[k];return p.createElement.apply(null,l)}return p.createElement.apply(null,t)}c.displayName="MDXCreateElement"},163:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>k});var p=t(87462),a=(t(67294),t(3905));const r={},l="\u7279\u6b8a\u7c7b\u578b",i={unversionedId:"TypeScript/any",id:"TypeScript/any",title:"\u7279\u6b8a\u7c7b\u578b",description:"\u672c\u7ae0\u4ecb\u7ecd TypeScript \u7684\u4e09\u79cd\u7279\u6b8a\u7c7b\u578b an\u3001unknown\u3001never \uff0c\u5b83\u4eec\u53ef\u4ee5\u4f5c\u4e3a\u5b66\u4e60 TypeScript \u7c7b\u578b\u7cfb\u7edf\u7684\u8d77\u70b9\u3002",source:"@site/frontend/TypeScript/any.md",sourceDirName:"TypeScript",slug:"/TypeScript/any",permalink:"/hijulien/frontend/TypeScript/any",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"front",previous:{title:"\u57fa\u672c\u7528\u6cd5",permalink:"/hijulien/frontend/TypeScript/basic"},next:{title:"\u7c7b\u578b\u7cfb\u7edf",permalink:"/hijulien/frontend/TypeScript/types"}},o={},k=[{value:"any \u7c7b\u578b",id:"any-\u7c7b\u578b",level:2},{value:"\u57fa\u672c\u542b\u4e49",id:"\u57fa\u672c\u542b\u4e49",level:3},{value:"\u7c7b\u578b\u63a8\u65ad\u95ee\u9898",id:"\u7c7b\u578b\u63a8\u65ad\u95ee\u9898",level:3},{value:"\u6c61\u67d3\u95ee\u9898",id:"\u6c61\u67d3\u95ee\u9898",level:3},{value:"unknown \u7c7b\u578b",id:"unknown-\u7c7b\u578b",level:2},{value:"never \u7c7b\u578b",id:"never-\u7c7b\u578b",level:2}],m={toc:k},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,p.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7279\u6b8a\u7c7b\u578b"},"\u7279\u6b8a\u7c7b\u578b"),(0,a.kt)("p",null,"\u672c\u7ae0\u4ecb\u7ecd TypeScript \u7684\u4e09\u79cd\u7279\u6b8a\u7c7b\u578b an\u3001unknown\u3001never \uff0c\u5b83\u4eec\u53ef\u4ee5\u4f5c\u4e3a\u5b66\u4e60 TypeScript \u7c7b\u578b\u7cfb\u7edf\u7684\u8d77\u70b9\u3002"),(0,a.kt)("h2",{id:"any-\u7c7b\u578b"},"any \u7c7b\u578b"),(0,a.kt)("h3",{id:"\u57fa\u672c\u542b\u4e49"},"\u57fa\u672c\u542b\u4e49"),(0,a.kt)("p",null,"any \u7c7b\u578b\u8868\u793a\u6ca1\u6709\u4efb\u4f55\u9650\u5236\uff0c\u8be5\u7c7b\u578b\u7684\u53d8\u91cf\u53ef\u4ee5\u8d4b\u4e88\u4efb\u610f\u7c7b\u578b\u7684\u503c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let x:any;\n\nx = 1; // \u6b63\u786e\nx = 'foo'; // \u6b63\u786e\nx = true; // \u6b63\u786e\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c\u53d8\u91cf",(0,a.kt)("inlineCode",{parentName:"p"},"x"),"\u7684\u7c7b\u578b\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"\uff0c\u5c31\u53ef\u4ee5\u88ab\u8d4b\u503c\u4e3a\u4efb\u610f\u7c7b\u578b\u7684\u503c\u3002"),(0,a.kt)("p",null,"\u53d8\u91cf\u7c7b\u578b\u4e00\u65e6\u8bbe\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"\uff0cTypeScript \u5b9e\u9645\u4e0a\u4f1a\u5173\u95ed\u8fd9\u4e2a\u53d8\u91cf\u7684\u7c7b\u578b\u68c0\u67e5\u3002\u5373\u4f7f\u6709\u660e\u663e\u7684\u7c7b\u578b\u9519\u8bef\uff0c\u53ea\u8981\u53e5\u6cd5\u6b63\u786e\uff0c\u90fd\u4e0d\u4f1a\u62a5\u9519\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let x:any = 'hello';\n\nx(1) // \u4e0d\u62a5\u9519\nx.foo = 100; // \u4e0d\u62a5\u9519\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c\u53d8\u91cf",(0,a.kt)("inlineCode",{parentName:"p"},"x"),"\u7684\u503c\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u4f46\u662f\u628a\u5b83\u5f53\u4f5c\u51fd\u6570\u8c03\u7528\uff0c\u6216\u8005\u5f53\u4f5c\u5bf9\u8c61\u8bfb\u53d6\u4efb\u610f\u5c5e\u6027\uff0cTypeScript \u7f16\u8bd1\u65f6\u90fd\u4e0d\u62a5\u9519\u3002\u539f\u56e0\u5c31\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"x"),"\u7684\u7c7b\u578b\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"\uff0cTypeScript \u4e0d\u5bf9\u5176\u8fdb\u884c\u7c7b\u578b\u68c0\u67e5\u3002"),(0,a.kt)("p",null,"\u7531\u4e8e\u8fd9\u4e2a\u539f\u56e0\uff0c\u5e94\u8be5\u5c3d\u91cf\u907f\u514d\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"\u7c7b\u578b\uff0c\u5426\u5219\u5c31\u5931\u53bb\u4e86\u4f7f\u7528 TypeScript \u7684\u610f\u4e49\u3002"),(0,a.kt)("p",null,"\u5b9e\u9645\u5f00\u53d1\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"\u7c7b\u578b\u4e3b\u8981\u9002\u7528\u4ee5\u4e0b\u4e24\u4e2a\u573a\u5408\u3002"),(0,a.kt)("p",null,"\uff081\uff09\u51fa\u4e8e\u7279\u6b8a\u539f\u56e0\uff0c\u9700\u8981\u5173\u95ed\u67d0\u4e9b\u53d8\u91cf\u7684\u7c7b\u578b\u68c0\u67e5\uff0c\u5c31\u53ef\u4ee5\u628a\u8be5\u53d8\u91cf\u7684\u7c7b\u578b\u8bbe\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"\u3002"),(0,a.kt)("p",null,"\uff082\uff09\u4e3a\u4e86\u9002\u914d\u4ee5\u524d\u8001\u7684 JavaScript \u9879\u76ee\uff0c\u8ba9\u4ee3\u7801\u5feb\u901f\u8fc1\u79fb\u5230 TypeScript\uff0c\u53ef\u4ee5\u628a\u53d8\u91cf\u7c7b\u578b\u8bbe\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"\u3002\u6709\u4e9b\u5e74\u4ee3\u5f88\u4e45\u7684\u5927\u578b JavaScript \u9879\u76ee\uff0c\u5c24\u5176\u662f\u522b\u4eba\u7684\u4ee3\u7801\uff0c\u5f88\u96be\u4e3a\u6bcf\u4e00\u884c\u9002\u914d\u6b63\u786e\u7684\u7c7b\u578b\uff0c\u8fd9\u65f6\u4f60\u4e3a\u90a3\u4e9b\u7c7b\u578b\u590d\u6742\u7684\u53d8\u91cf\u52a0\u4e0a",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"\uff0cTypeScript \u7f16\u8bd1\u65f6\u5c31\u4e0d\u4f1a\u62a5\u9519\u3002"),(0,a.kt)("p",null,"\u603b\u4e4b\uff0cTypeScript \u8ba4\u4e3a\uff0c\u53ea\u8981\u5f00\u53d1\u8005\u4f7f\u7528\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"\u7c7b\u578b\uff0c\u5c31\u8868\u793a\u5f00\u53d1\u8005\u60f3\u8981\u81ea\u5df1\u6765\u5904\u7406\u8fd9\u4e9b\u4ee3\u7801\uff0c\u6240\u4ee5\u5c31\u4e0d\u5bf9",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"\u7c7b\u578b\u8fdb\u884c\u4efb\u4f55\u9650\u5236\uff0c\u600e\u4e48\u4f7f\u7528\u90fd\u53ef\u4ee5\u3002"),(0,a.kt)("p",null,"\u4ece\u96c6\u5408\u8bba\u7684\u89d2\u5ea6\u770b\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"\u7c7b\u578b\u53ef\u4ee5\u770b\u6210\u662f\u6240\u6709\u5176\u4ed6\u7c7b\u578b\u7684\u5168\u96c6\uff0c\u5305\u542b\u4e86\u4e00\u5207\u53ef\u80fd\u7684\u7c7b\u578b\u3002TypeScript \u5c06\u8fd9\u79cd\u7c7b\u578b\u79f0\u4e3a\u201c\u9876\u5c42\u7c7b\u578b\u201d\uff08top type\uff09\uff0c\u610f\u4e3a\u6db5\u76d6\u4e86\u6240\u6709\u4e0b\u5c42\u3002"),(0,a.kt)("h3",{id:"\u7c7b\u578b\u63a8\u65ad\u95ee\u9898"},"\u7c7b\u578b\u63a8\u65ad\u95ee\u9898"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u5f00\u53d1\u8005\u6ca1\u6709\u6307\u5b9a\u7c7b\u578b\u3001TypeScript \u5fc5\u987b\u81ea\u5df1\u63a8\u65ad\u7c7b\u578b\u7684\u90a3\u4e9b\u53d8\u91cf\uff0c\u5982\u679c\u65e0\u6cd5\u63a8\u65ad\u51fa\u7c7b\u578b\uff0cTypeScript \u5c31\u4f1a\u8ba4\u4e3a\u8be5\u53d8\u91cf\u7684\u7c7b\u578b\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function add(x, y) {\n  return x + y;\n}\n\nadd(1, [1, 2, 3]) // \u4e0d\u62a5\u9519\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c\u51fd\u6570",(0,a.kt)("inlineCode",{parentName:"p"},"add()"),"\u7684\u53c2\u6570\u53d8\u91cf",(0,a.kt)("inlineCode",{parentName:"p"},"x"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"y"),"\uff0c\u90fd\u6ca1\u6709\u8db3\u591f\u7684\u4fe1\u606f\uff0cTypeScript \u65e0\u6cd5\u63a8\u65ad\u51fa\u5b83\u4eec\u7684\u7c7b\u578b\uff0c\u5c31\u4f1a\u8ba4\u4e3a\u8fd9\u4e24\u4e2a\u53d8\u91cf\u548c\u51fd\u6570\u8fd4\u56de\u503c\u7684\u7c7b\u578b\u90fd\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"\u3002\u4ee5\u81f3\u4e8e\u540e\u9762\u5c31\u4e0d\u518d\u5bf9\u51fd\u6570",(0,a.kt)("inlineCode",{parentName:"p"},"add()"),"\u8fdb\u884c\u7c7b\u578b\u68c0\u67e5\u4e86\uff0c\u600e\u4e48\u7528\u90fd\u53ef\u4ee5\u3002"),(0,a.kt)("p",null,"\u8fd9\u663e\u7136\u662f\u5f88\u7cdf\u7cd5\u7684\u60c5\u51b5\uff0c\u6240\u4ee5\u5bf9\u4e8e\u90a3\u4e9b\u7c7b\u578b\u4e0d\u660e\u663e\u7684\u53d8\u91cf\uff0c\u4e00\u5b9a\u8981\u663e\u5f0f\u58f0\u660e\u7c7b\u578b\uff0c\u9632\u6b62\u88ab\u63a8\u65ad\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"\u3002"),(0,a.kt)("p",null,"TypeScript \u63d0\u4f9b\u4e86\u4e00\u4e2a\u7f16\u8bd1\u9009\u9879",(0,a.kt)("inlineCode",{parentName:"p"},"noImplicitAny"),"\uff0c\u6253\u5f00\u8be5\u9009\u9879\uff0c\u53ea\u8981\u63a8\u65ad\u51fa",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"\u7c7b\u578b\u5c31\u4f1a\u62a5\u9519\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ tsc --noImplicitAny app.ts\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u547d\u4ee4\u4f7f\u7528\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"noImplicitAny"),"\u7f16\u8bd1\u9009\u9879\u8fdb\u884c\u7f16\u8bd1\uff0c\u8fd9\u65f6\u4e0a\u9762\u7684\u51fd\u6570",(0,a.kt)("inlineCode",{parentName:"p"},"add()"),"\u5c31\u4f1a\u62a5\u9519\u3002"),(0,a.kt)("p",null,"\u8fd9\u91cc\u6709\u4e00\u4e2a\u7279\u6b8a\u60c5\u51b5\uff0c\u5373\u4f7f\u6253\u5f00\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"noImplicitAny"),"\uff0c\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"let"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"var"),"\u547d\u4ee4\u58f0\u660e\u53d8\u91cf\uff0c\u4f46\u4e0d\u8d4b\u503c\u4e5f\u4e0d\u6307\u5b9a\u7c7b\u578b\uff0c\u662f\u4e0d\u4f1a\u62a5\u9519\u7684\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"var x; // \u4e0d\u62a5\u9519\nlet y; // \u4e0d\u62a5\u9519\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c\u53d8\u91cf",(0,a.kt)("inlineCode",{parentName:"p"},"x"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"y"),"\u58f0\u660e\u65f6\u6ca1\u6709\u8d4b\u503c\uff0c\u4e5f\u6ca1\u6709\u6307\u5b9a\u7c7b\u578b\uff0cTypeScript \u4f1a\u63a8\u65ad\u5b83\u4eec\u7684\u7c7b\u578b\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"\u3002\u8fd9\u65f6\u5373\u4f7f\u6253\u5f00\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"noImplicitAny"),"\uff0c\u4e5f\u4e0d\u4f1a\u62a5\u9519\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let x;\n\nx = 123;\nx = { foo: 'hello' };\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c\u53d8\u91cf",(0,a.kt)("inlineCode",{parentName:"p"},"x"),"\u7684\u7c7b\u578b\u63a8\u65ad\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"\uff0c\u4f46\u662f\u4e0d\u62a5\u9519\uff0c\u53ef\u4ee5\u987a\u5229\u901a\u8fc7\u7f16\u8bd1\u3002"),(0,a.kt)("p",null,"\u7531\u4e8e\u8fd9\u4e2a\u539f\u56e0\uff0c\u5efa\u8bae\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"let"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"var"),"\u58f0\u660e\u53d8\u91cf\u65f6\uff0c\u5982\u679c\u4e0d\u8d4b\u503c\uff0c\u5c31\u4e00\u5b9a\u8981\u663e\u5f0f\u58f0\u660e\u7c7b\u578b\uff0c\u5426\u5219\u53ef\u80fd\u5b58\u5728\u5b89\u5168\u9690\u60a3\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"const"),"\u547d\u4ee4\u6ca1\u6709\u8fd9\u4e2a\u95ee\u9898\uff0c\u56e0\u4e3a JavaScript \u8bed\u8a00\u89c4\u5b9a",(0,a.kt)("inlineCode",{parentName:"p"},"const"),"\u58f0\u660e\u53d8\u91cf\u65f6\uff0c\u5fc5\u987b\u540c\u65f6\u8fdb\u884c\u521d\u59cb\u5316\uff08\u8d4b\u503c\uff09\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const x; // \u62a5\u9519\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"const"),"\u547d\u4ee4\u58f0\u660e\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"x"),"\u662f\u4e0d\u80fd\u6539\u53d8\u503c\u7684\uff0c\u58f0\u660e\u65f6\u5fc5\u987b\u540c\u65f6\u8d4b\u503c\uff0c\u5426\u5219\u62a5\u9519\uff0c\u6240\u4ee5\u5b83\u4e0d\u5b58\u5728\u7c7b\u578b\u63a8\u65ad\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"\u7684\u95ee\u9898\u3002"),(0,a.kt)("h3",{id:"\u6c61\u67d3\u95ee\u9898"},"\u6c61\u67d3\u95ee\u9898"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"any"),"\u7c7b\u578b\u9664\u4e86\u5173\u95ed\u7c7b\u578b\u68c0\u67e5\uff0c\u8fd8\u6709\u4e00\u4e2a\u5f88\u5927\u7684\u95ee\u9898\uff0c\u5c31\u662f\u5b83\u4f1a\u201c\u6c61\u67d3\u201d\u5176\u4ed6\u53d8\u91cf\u3002\u5b83\u53ef\u4ee5\u8d4b\u503c\u7ed9\u5176\u4ed6\u4efb\u4f55\u7c7b\u578b\u7684\u53d8\u91cf\uff08\u56e0\u4e3a\u6ca1\u6709\u7c7b\u578b\u68c0\u67e5\uff09\uff0c\u5bfc\u81f4\u5176\u4ed6\u53d8\u91cf\u51fa\u9519\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let x:any = 'hello';\nlet y:number;\n\ny = x; // \u4e0d\u62a5\u9519\n\ny * 123 // \u4e0d\u62a5\u9519\ny.toFixed() // \u4e0d\u62a5\u9519\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c\u53d8\u91cf",(0,a.kt)("inlineCode",{parentName:"p"},"x"),"\u7684\u7c7b\u578b\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"\uff0c\u5b9e\u9645\u7684\u503c\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\u3002\u53d8\u91cf",(0,a.kt)("inlineCode",{parentName:"p"},"y"),"\u7684\u7c7b\u578b\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"\uff0c\u8868\u793a\u8fd9\u662f\u4e00\u4e2a\u6570\u503c\u53d8\u91cf\uff0c\u4f46\u662f\u5b83\u88ab\u8d4b\u503c\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"x"),"\uff0c\u8fd9\u65f6\u5e76\u4e0d\u4f1a\u62a5\u9519\u3002\u7136\u540e\uff0c\u53d8\u91cf",(0,a.kt)("inlineCode",{parentName:"p"},"y"),"\u7ee7\u7eed\u8fdb\u884c\u5404\u79cd\u6570\u503c\u8fd0\u7b97\uff0cTypeScript \u4e5f\u68c0\u67e5\u4e0d\u51fa\u9519\u8bef\uff0c\u95ee\u9898\u5c31\u8fd9\u6837\u7559\u5230\u8fd0\u884c\u65f6\u624d\u4f1a\u66b4\u9732\u3002"),(0,a.kt)("p",null,"\u6c61\u67d3\u5176\u4ed6\u5177\u6709\u6b63\u786e\u7c7b\u578b\u7684\u53d8\u91cf\uff0c\u628a\u9519\u8bef\u7559\u5230\u8fd0\u884c\u65f6\uff0c\u8fd9\u5c31\u662f\u4e0d\u5b9c\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"\u7c7b\u578b\u7684\u53e6\u4e00\u4e2a\u4e3b\u8981\u539f\u56e0\u3002"),(0,a.kt)("h2",{id:"unknown-\u7c7b\u578b"},"unknown \u7c7b\u578b"),(0,a.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"\u7c7b\u578b\u201c\u6c61\u67d3\u201d\u5176\u4ed6\u53d8\u91cf\u7684\u95ee\u9898\uff0cTypeScript 3.0 \u5f15\u5165\u4e86",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#new-unknown-top-type"},(0,a.kt)("inlineCode",{parentName:"a"},"unknown"),"\u7c7b\u578b"),"\u3002\u5b83\u4e0e",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"\u542b\u4e49\u76f8\u540c\uff0c\u8868\u793a\u7c7b\u578b\u4e0d\u786e\u5b9a\uff0c\u53ef\u80fd\u662f\u4efb\u610f\u7c7b\u578b\uff0c\u4f46\u662f\u5b83\u7684\u4f7f\u7528\u6709\u4e00\u4e9b\u9650\u5236\uff0c\u4e0d\u50cf",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"\u90a3\u6837\u81ea\u7531\uff0c\u53ef\u4ee5\u89c6\u4e3a\u4e25\u683c\u7248\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"unknown"),"\u8ddf",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"\u7684\u76f8\u4f3c\u4e4b\u5904\uff0c\u5728\u4e8e\u6240\u6709\u7c7b\u578b\u7684\u503c\u90fd\u53ef\u4ee5\u5206\u914d\u7ed9",(0,a.kt)("inlineCode",{parentName:"p"},"unknown"),"\u7c7b\u578b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let x:unknown;\n\nx = true; // \u6b63\u786e\nx = 42; // \u6b63\u786e\nx = 'Hello World'; // \u6b63\u786e\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c\u53d8\u91cf",(0,a.kt)("inlineCode",{parentName:"p"},"x"),"\u7684\u7c7b\u578b\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"unknown"),"\uff0c\u53ef\u4ee5\u8d4b\u503c\u4e3a\u5404\u79cd\u7c7b\u578b\u7684\u503c\u3002\u8fd9\u4e0e",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"\u7684\u884c\u4e3a\u4e00\u81f4\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"unknown"),"\u7c7b\u578b\u8ddf",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"\u7c7b\u578b\u7684\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e\uff0c\u5b83\u4e0d\u80fd\u76f4\u63a5\u4f7f\u7528\u3002\u4e3b\u8981\u6709\u4ee5\u4e0b\u51e0\u4e2a\u9650\u5236\u3002"),(0,a.kt)("p",null,"\u9996\u5148\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"unknown"),"\u7c7b\u578b\u7684\u53d8\u91cf\uff0c\u4e0d\u80fd\u76f4\u63a5\u8d4b\u503c\u7ed9\u5176\u4ed6\u7c7b\u578b\u7684\u53d8\u91cf\uff08\u9664\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"\u7c7b\u578b\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"unknown"),"\u7c7b\u578b\uff09\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let v:unknown = 123;\n\nlet v1:boolean = v; // \u62a5\u9519\nlet v2:number = v; // \u62a5\u9519\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c\u53d8\u91cf",(0,a.kt)("inlineCode",{parentName:"p"},"v"),"\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"unknown"),"\u7c7b\u578b\uff0c\u8d4b\u503c\u7ed9",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"unknown"),"\u4ee5\u5916\u7c7b\u578b\u7684\u53d8\u91cf\u90fd\u4f1a\u62a5\u9519\uff0c\u8fd9\u5c31\u907f\u514d\u4e86\u6c61\u67d3\u95ee\u9898\uff0c\u4ece\u800c\u514b\u670d\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"\u7c7b\u578b\u7684\u4e00\u5927\u7f3a\u70b9\u3002"),(0,a.kt)("p",null,"\u5176\u6b21\uff0c\u4e0d\u80fd\u76f4\u63a5\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"unknown"),"\u7c7b\u578b\u53d8\u91cf\u7684\u65b9\u6cd5\u548c\u5c5e\u6027\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let v1:unknown = { foo: 123 };\nv1.foo  // \u62a5\u9519\n\nlet v2:unknown = 'hello';\nv2.trim() // \u62a5\u9519\n\nlet v3:unknown = (n = 0) => n + 1;\nv3() // \u62a5\u9519\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c\u76f4\u63a5\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"unknown"),"\u7c7b\u578b\u53d8\u91cf\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\uff0c\u6216\u8005\u76f4\u63a5\u5f53\u4f5c\u51fd\u6570\u6267\u884c\uff0c\u90fd\u4f1a\u62a5\u9519\u3002"),(0,a.kt)("p",null,"\u518d\u6b21\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"unknown"),"\u7c7b\u578b\u53d8\u91cf\u80fd\u591f\u8fdb\u884c\u7684\u8fd0\u7b97\u662f\u6709\u9650\u7684\uff0c\u53ea\u80fd\u8fdb\u884c\u6bd4\u8f83\u8fd0\u7b97\uff08\u8fd0\u7b97\u7b26",(0,a.kt)("inlineCode",{parentName:"p"},"=="),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"==="),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"!="),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"!=="),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"||"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"&&"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"?"),"\uff09\u3001\u53d6\u53cd\u8fd0\u7b97\uff08\u8fd0\u7b97\u7b26",(0,a.kt)("inlineCode",{parentName:"p"},"!"),"\uff09\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"typeof"),"\u8fd0\u7b97\u7b26\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"instanceof"),"\u8fd0\u7b97\u7b26\u8fd9\u51e0\u79cd\uff0c\u5176\u4ed6\u8fd0\u7b97\u90fd\u4f1a\u62a5\u9519\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let a:unknown = 1;\n\na + 1 // \u62a5\u9519\na === 1 // \u6b63\u786e\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"unknown"),"\u7c7b\u578b\u7684\u53d8\u91cf",(0,a.kt)("inlineCode",{parentName:"p"},"a"),"\u8fdb\u884c\u52a0\u6cd5\u8fd0\u7b97\u4f1a\u62a5\u9519\uff0c\u56e0\u4e3a\u8fd9\u662f\u4e0d\u5141\u8bb8\u7684\u8fd0\u7b97\u3002\u4f46\u662f\uff0c\u8fdb\u884c\u6bd4\u8f83\u8fd0\u7b97\u5c31\u662f\u53ef\u4ee5\u7684\u3002"),(0,a.kt)("p",null,"\u90a3\u4e48\uff0c\u600e\u4e48\u624d\u80fd\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"unknown"),"\u7c7b\u578b\u53d8\u91cf\u5462\uff1f"),(0,a.kt)("p",null,"\u7b54\u6848\u662f\u53ea\u6709\u7ecf\u8fc7\u201c\u7c7b\u578b\u7f29\u5c0f\u201d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"unknown"),"\u7c7b\u578b\u53d8\u91cf\u624d\u53ef\u4ee5\u4f7f\u7528\u3002\u6240\u8c13\u201c\u7c7b\u578b\u7f29\u5c0f\u201d\uff0c\u5c31\u662f\u7f29\u5c0f",(0,a.kt)("inlineCode",{parentName:"p"},"unknown"),"\u53d8\u91cf\u7684\u7c7b\u578b\u8303\u56f4\uff0c\u786e\u4fdd\u4e0d\u4f1a\u51fa\u9519\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let a:unknown = 1;\n\nif (typeof a === 'number') {\n  let r = a + 10; // \u6b63\u786e\n}\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"unknown"),"\u7c7b\u578b\u7684\u53d8\u91cf",(0,a.kt)("inlineCode",{parentName:"p"},"a"),"\u7ecf\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"typeof"),"\u8fd0\u7b97\u4ee5\u540e\uff0c\u80fd\u591f\u786e\u5b9a\u5b9e\u9645\u7c7b\u578b\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"\uff0c\u5c31\u80fd\u7528\u4e8e\u52a0\u6cd5\u8fd0\u7b97\u4e86\u3002\u8fd9\u5c31\u662f\u201c\u7c7b\u578b\u7f29\u5c0f\u201d\uff0c\u5373\u5c06\u4e00\u4e2a\u4e0d\u786e\u5b9a\u7684\u7c7b\u578b\u7f29\u5c0f\u4e3a\u66f4\u660e\u786e\u7684\u7c7b\u578b\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u53e6\u4e00\u4e2a\u4f8b\u5b50\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let s:unknown = 'hello';\n\nif (typeof s === 'string') {\n  s.length; // \u6b63\u786e\n}\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c\u786e\u5b9a\u53d8\u91cf",(0,a.kt)("inlineCode",{parentName:"p"},"s"),"\u7684\u7c7b\u578b\u4e3a\u5b57\u7b26\u4e32\u4ee5\u540e\uff0c\u624d\u80fd\u8c03\u7528\u5b83\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"length"),"\u5c5e\u6027\u3002"),(0,a.kt)("p",null,"\u8fd9\u6837\u8bbe\u8ba1\u7684\u76ee\u7684\u662f\uff0c\u53ea\u6709\u660e\u786e",(0,a.kt)("inlineCode",{parentName:"p"},"unknown"),"\u53d8\u91cf\u7684\u5b9e\u9645\u7c7b\u578b\uff0c\u624d\u5141\u8bb8\u4f7f\u7528\u5b83\uff0c\u9632\u6b62\u50cf",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"\u90a3\u6837\u53ef\u4ee5\u968f\u610f\u4e71\u7528\uff0c\u201c\u6c61\u67d3\u201d\u5176\u4ed6\u53d8\u91cf\u3002\u7c7b\u578b\u7f29\u5c0f\u4ee5\u540e\u518d\u4f7f\u7528\uff0c\u5c31\u4e0d\u4f1a\u62a5\u9519\u3002"),(0,a.kt)("p",null,"\u603b\u4e4b\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"unknown"),"\u53ef\u4ee5\u770b\u4f5c\u662f\u66f4\u5b89\u5168\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"\u3002\u4e00\u822c\u6765\u8bf4\uff0c\u51e1\u662f\u9700\u8981\u8bbe\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"\u7c7b\u578b\u7684\u5730\u65b9\uff0c\u901a\u5e38\u90fd\u5e94\u8be5\u4f18\u5148\u8003\u8651\u8bbe\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"unknown"),"\u7c7b\u578b\u3002"),(0,a.kt)("p",null,"\u5728\u96c6\u5408\u8bba\u4e0a\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"unknown"),"\u4e5f\u53ef\u4ee5\u89c6\u4e3a\u6240\u6709\u5176\u4ed6\u7c7b\u578b\uff08\u9664\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"\uff09\u7684\u5168\u96c6\uff0c\u6240\u4ee5\u5b83\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"\u4e00\u6837\uff0c\u4e5f\u5c5e\u4e8e TypeScript \u7684\u9876\u5c42\u7c7b\u578b\u3002"),(0,a.kt)("h2",{id:"never-\u7c7b\u578b"},"never \u7c7b\u578b"),(0,a.kt)("p",null,"\u4e3a\u4e86\u4fdd\u6301\u4e0e\u96c6\u5408\u8bba\u7684\u5bf9\u5e94\u5173\u7cfb\uff0c\u4ee5\u53ca\u7c7b\u578b\u8fd0\u7b97\u7684\u5b8c\u6574\u6027\uff0cTypeScript \u8fd8\u5f15\u5165\u4e86\u201c\u7a7a\u7c7b\u578b\u201d\u7684\u6982\u5ff5\uff0c\u5373\u8be5\u7c7b\u578b\u4e3a\u7a7a\uff0c\u4e0d\u5305\u542b\u4efb\u4f55\u503c\u3002"),(0,a.kt)("p",null,"\u7531\u4e8e\u4e0d\u5b58\u5728\u4efb\u4f55\u5c5e\u4e8e\u201c\u7a7a\u7c7b\u578b\u201d\u7684\u503c\uff0c\u6240\u4ee5\u8be5\u7c7b\u578b\u88ab\u79f0\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"never"),"\uff0c\u5373\u4e0d\u53ef\u80fd\u6709\u8fd9\u6837\u7684\u503c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let x:never;\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c\u53d8\u91cf",(0,a.kt)("inlineCode",{parentName:"p"},"x"),"\u7684\u7c7b\u578b\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"never"),"\uff0c\u5c31\u4e0d\u53ef\u80fd\u8d4b\u7ed9\u5b83\u4efb\u4f55\u503c\uff0c\u5426\u5219\u90fd\u4f1a\u62a5\u9519\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"never"),"\u7c7b\u578b\u7684\u4f7f\u7528\u573a\u666f\uff0c\u4e3b\u8981\u662f\u5728\u4e00\u4e9b\u7c7b\u578b\u8fd0\u7b97\u4e4b\u4e2d\uff0c\u4fdd\u8bc1\u7c7b\u578b\u8fd0\u7b97\u7684\u5b8c\u6574\u6027\uff0c\u8be6\u89c1\u540e\u9762\u7ae0\u8282\u3002\u53e6\u5916\uff0c\u4e0d\u53ef\u80fd\u8fd4\u56de\u503c\u7684\u51fd\u6570\uff0c\u8fd4\u56de\u503c\u7684\u7c7b\u578b\u5c31\u53ef\u4ee5\u5199\u6210",(0,a.kt)("inlineCode",{parentName:"p"},"never"),"\uff0c\u8be6\u89c1\u300a\u51fd\u6570\u300b\u4e00\u7ae0\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4e00\u4e2a\u53d8\u91cf\u53ef\u80fd\u6709\u591a\u79cd\u7c7b\u578b\uff08\u5373\u8054\u5408\u7c7b\u578b\uff09\uff0c\u901a\u5e38\u9700\u8981\u4f7f\u7528\u5206\u652f\u5904\u7406\u6bcf\u4e00\u79cd\u7c7b\u578b\u3002\u8fd9\u65f6\uff0c\u5904\u7406\u6240\u6709\u53ef\u80fd\u7684\u7c7b\u578b\u4e4b\u540e\uff0c\u5269\u4f59\u7684\u60c5\u51b5\u5c31\u5c5e\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"never"),"\u7c7b\u578b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function fn(x:string|number) {\n  if (typeof x === 'string') {\n    // ...\n  } else if (typeof x === 'number') {\n    // ...\n  } else {\n    x; // never \u7c7b\u578b\n  }\n}\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c\u53c2\u6570\u53d8\u91cf",(0,a.kt)("inlineCode",{parentName:"p"},"x"),"\u53ef\u80fd\u662f\u5b57\u7b26\u4e32\uff0c\u4e5f\u53ef\u80fd\u662f\u6570\u503c\uff0c\u5224\u65ad\u4e86\u8fd9\u4e24\u79cd\u60c5\u51b5\u540e\uff0c\u5269\u4e0b\u7684\u6700\u540e\u90a3\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"else"),"\u5206\u652f\u91cc\u9762\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"x"),"\u5c31\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"never"),"\u7c7b\u578b\u4e86\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"never"),"\u7c7b\u578b\u7684\u4e00\u4e2a\u91cd\u8981\u7279\u70b9\u662f\uff0c\u53ef\u4ee5\u8d4b\u503c\u7ed9\u4efb\u610f\u5176\u4ed6\u7c7b\u578b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function f():never {\n  throw new Error('Error');\n}\n\nlet v1:number = f(); // \u4e0d\u62a5\u9519\nlet v2:string = f(); // \u4e0d\u62a5\u9519\nlet v3:boolean = f(); // \u4e0d\u62a5\u9519\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c\u51fd\u6570",(0,a.kt)("inlineCode",{parentName:"p"},"f()"),"\u4f1a\u629b\u9519\uff0c\u6240\u4ee5\u8fd4\u56de\u503c\u7c7b\u578b\u53ef\u4ee5\u5199\u6210",(0,a.kt)("inlineCode",{parentName:"p"},"never"),"\uff0c\u5373\u4e0d\u53ef\u80fd\u8fd4\u56de\u4efb\u4f55\u503c\u3002\u5404\u79cd\u5176\u4ed6\u7c7b\u578b\u7684\u53d8\u91cf\u90fd\u53ef\u4ee5\u8d4b\u503c\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"f()"),"\u7684\u8fd0\u884c\u7ed3\u679c\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"never"),"\u7c7b\u578b\uff09\u3002"),(0,a.kt)("p",null,"\u4e3a\u4ec0\u4e48",(0,a.kt)("inlineCode",{parentName:"p"},"never"),"\u7c7b\u578b\u53ef\u4ee5\u8d4b\u503c\u7ed9\u4efb\u610f\u5176\u4ed6\u7c7b\u578b\u5462\uff1f\u8fd9\u4e5f\u8ddf\u96c6\u5408\u8bba\u6709\u5173\uff0c\u7a7a\u96c6\u662f\u4efb\u4f55\u96c6\u5408\u7684\u5b50\u96c6\u3002TypeScript \u5c31\u76f8\u5e94\u89c4\u5b9a\uff0c\u4efb\u4f55\u7c7b\u578b\u90fd\u5305\u542b\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"never"),"\u7c7b\u578b\u3002\u56e0\u6b64\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"never"),"\u7c7b\u578b\u662f\u4efb\u4f55\u5176\u4ed6\u7c7b\u578b\u6240\u5171\u6709\u7684\uff0cTypeScript \u628a\u8fd9\u79cd\u60c5\u51b5\u79f0\u4e3a\u201c\u5e95\u5c42\u7c7b\u578b\u201d\uff08bottom type\uff09\u3002"),(0,a.kt)("p",null,"\u603b\u4e4b\uff0cTypeScript \u6709\u4e24\u4e2a\u201c\u9876\u5c42\u7c7b\u578b\u201d\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"unknown"),"\uff09\uff0c\u4f46\u662f\u201c\u5e95\u5c42\u7c7b\u578b\u201d\u53ea\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"never"),"\u552f\u4e00\u4e00\u4e2a\u3002"))}d.isMDXComponent=!0}}]);