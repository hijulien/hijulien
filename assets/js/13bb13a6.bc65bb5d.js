"use strict";(self.webpackChunkhijulien=self.webpackChunkhijulien||[]).push([[1131],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>k});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,k=u["".concat(o,".").concat(m)]||u[m]||d[m]||p;return t?r.createElement(k,l(l({ref:n},s),{},{components:t})):r.createElement(k,l({ref:n},s))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,l=new Array(p);l[0]=m;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<p;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8849:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const p={},l="\u6ce8\u91ca\u6307\u4ee4",i={unversionedId:"TypeScript/comment",id:"TypeScript/comment",title:"\u6ce8\u91ca\u6307\u4ee4",description:"TypeScript \u63a5\u53d7\u4e00\u4e9b\u6ce8\u91ca\u6307\u4ee4\u3002",source:"@site/frontend/TypeScript/comment.md",sourceDirName:"TypeScript",slug:"/TypeScript/comment",permalink:"/hijulien/frontend/TypeScript/comment",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"front",previous:{title:"declare \u5173\u952e\u5b57",permalink:"/hijulien/frontend/TypeScript/declare"},next:{title:"ES6 \u7c7b\u578b",permalink:"/hijulien/frontend/TypeScript/es6"}},o={},c=[{value:"<code>// @ts-nocheck</code>",id:"-ts-nocheck",level:2},{value:"<code>// @ts-check</code>",id:"-ts-check",level:2},{value:"<code>// @ts-ignore</code>",id:"-ts-ignore",level:2},{value:"<code>// @ts-expect-error</code>",id:"-ts-expect-error",level:2},{value:"JSDoc",id:"jsdoc",level:2},{value:"@typedef",id:"typedef",level:3},{value:"@type",id:"type",level:3},{value:"@param",id:"param",level:3},{value:"@return\uff0c@returns",id:"returnreturns",level:3},{value:"@extends \u548c\u7c7b\u578b\u4fee\u9970\u7b26",id:"extends-\u548c\u7c7b\u578b\u4fee\u9970\u7b26",level:3}],s={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6ce8\u91ca\u6307\u4ee4"},"\u6ce8\u91ca\u6307\u4ee4"),(0,a.kt)("p",null,"TypeScript \u63a5\u53d7\u4e00\u4e9b\u6ce8\u91ca\u6307\u4ee4\u3002"),(0,a.kt)("p",null,"\u6240\u8c13\u201c\u6ce8\u91ca\u6307\u4ee4\u201d\uff0c\u6307\u7684\u662f\u91c7\u7528 JS \u53cc\u659c\u6760\u6ce8\u91ca\u7684\u5f62\u5f0f\uff0c\u5411\u7f16\u8bd1\u5668\u53d1\u51fa\u7684\u547d\u4ee4\u3002"),(0,a.kt)("h2",{id:"-ts-nocheck"},(0,a.kt)("inlineCode",{parentName:"h2"},"// @ts-nocheck")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"// @ts-nocheck"),"\u544a\u8bc9\u7f16\u8bd1\u5668\u4e0d\u5bf9\u5f53\u524d\u811a\u672c\u8fdb\u884c\u7c7b\u578b\u68c0\u67e5\uff0c\u53ef\u4ee5\u7528\u4e8e TypeScript \u811a\u672c\uff0c\u4e5f\u53ef\u4ee5\u7528\u4e8e JavaScript \u811a\u672c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// @ts-nocheck\n\nconst element = document.getElementById(123);\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"document.getElementById(123)"),"\u5b58\u5728\u7c7b\u578b\u9519\u8bef\uff0c\u4f46\u662f\u7f16\u8bd1\u5668\u4e0d\u5bf9\u8be5\u811a\u672c\u8fdb\u884c\u7c7b\u578b\u68c0\u67e5\uff0c\u6240\u4ee5\u4e0d\u4f1a\u62a5\u9519\u3002"),(0,a.kt)("h2",{id:"-ts-check"},(0,a.kt)("inlineCode",{parentName:"h2"},"// @ts-check")),(0,a.kt)("p",null,"\u5982\u679c\u4e00\u4e2a JavaScript \u811a\u672c\u9876\u90e8\u6dfb\u52a0\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"// @ts-check"),"\uff0c\u90a3\u4e48\u7f16\u8bd1\u5668\u5c06\u5bf9\u8be5\u811a\u672c\u8fdb\u884c\u7c7b\u578b\u68c0\u67e5\uff0c\u4e0d\u8bba\u662f\u5426\u542f\u7528\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"checkJs"),"\u7f16\u8bd1\u9009\u9879\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// @ts-check\nlet isChecked = true;\n\nconsole.log(isChceked); // \u62a5\u9519\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u662f\u4e00\u4e2a JavaScript \u811a\u672c\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"// @ts-check"),"\u544a\u8bc9 TypeScript \u7f16\u8bd1\u5668\u5bf9\u5176\u8fdb\u884c\u7c7b\u578b\u68c0\u67e5\uff0c\u6240\u4ee5\u6700\u540e\u4e00\u884c\u4f1a\u62a5\u9519\uff0c\u63d0\u793a\u62fc\u5199\u9519\u8bef\u3002"),(0,a.kt)("h2",{id:"-ts-ignore"},(0,a.kt)("inlineCode",{parentName:"h2"},"// @ts-ignore")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"// @ts-ignore"),"\u544a\u8bc9\u7f16\u8bd1\u5668\u4e0d\u5bf9\u4e0b\u4e00\u884c\u4ee3\u7801\u8fdb\u884c\u7c7b\u578b\u68c0\u67e5\uff0c\u53ef\u4ee5\u7528\u4e8e TypeScript \u811a\u672c\uff0c\u4e5f\u53ef\u4ee5\u7528\u4e8e JavaScript \u811a\u672c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let x:number;\n\nx = 0;\n\n// @ts-ignore\nx = false; // \u4e0d\u62a5\u9519\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c\u6700\u540e\u4e00\u884c\u662f\u7c7b\u578b\u9519\u8bef\uff0c\u53d8\u91cf",(0,a.kt)("inlineCode",{parentName:"p"},"x"),"\u7684\u7c7b\u578b\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"\uff0c\u4e0d\u80fd\u7b49\u4e8e\u5e03\u5c14\u503c\u3002\u4f46\u662f\u56e0\u4e3a\u524d\u9762\u52a0\u4e0a\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"// @ts-ignore"),"\uff0c\u7f16\u8bd1\u5668\u4f1a\u8df3\u8fc7\u8fd9\u4e00\u884c\u7684\u7c7b\u578b\u68c0\u67e5\uff0c\u6240\u4ee5\u4e0d\u4f1a\u62a5\u9519\u3002"),(0,a.kt)("h2",{id:"-ts-expect-error"},(0,a.kt)("inlineCode",{parentName:"h2"},"// @ts-expect-error")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"// @ts-expect-error"),"\u4e3b\u8981\u7528\u5728\u6d4b\u8bd5\u7528\u4f8b\uff0c\u5f53\u4e0b\u4e00\u884c\u6709\u7c7b\u578b\u9519\u8bef\u65f6\uff0c\u5b83\u4f1a\u538b\u5236 TypeScript \u7684\u62a5\u9519\u4fe1\u606f\uff08\u5373\u4e0d\u663e\u793a\u62a5\u9519\u4fe1\u606f\uff09\uff0c\u628a\u9519\u8bef\u7559\u7ed9\u4ee3\u7801\u81ea\u5df1\u5904\u7406\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'function doStuff(abc: string, xyz: string) {\n  assert(typeof abc === "string");\n  assert(typeof xyz === "string");\n  // do some stuff\n}\n\n// @ts-expect-error\nexpect(() => {\n  doStuff(123, 456);\n}).toThrow();\n')),(0,a.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u662f\u4e00\u4e2a\u6d4b\u8bd5\u7528\u4f8b\uff0c\u5012\u6570\u7b2c\u4e8c\u884c\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"doStuff(123, 456)"),"\u7684\u53c2\u6570\u7c7b\u578b\u4e0e\u5b9a\u4e49\u4e0d\u4e00\u81f4\uff0cTypeScript \u5f15\u64ce\u4f1a\u62a5\u9519\u3002\u4f46\u662f\uff0c\u6d4b\u8bd5\u7528\u4f8b\u672c\u8eab\u6d4b\u8bd5\u7684\u5c31\u662f\u8fd9\u4e2a\u9519\u8bef\uff0c\u5df2\u7ecf\u6709\u4e13\u95e8\u7684\u5904\u7406\u4ee3\u7801\uff0c\u6240\u4ee5\u8fd9\u91cc\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"// @ts-expect-error"),"\uff0c\u4e0d\u663e\u793a\u5f15\u64ce\u7684\u62a5\u9519\u4fe1\u606f\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4e0b\u4e00\u884c\u6ca1\u6709\u7c7b\u578b\u9519\u8bef\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"// @ts-expect-error"),"\u5219\u4f1a\u663e\u793a\u4e00\u884c\u63d0\u793a\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// @ts-expect-error\nconsole.log(1 + 1);\n// \u8f93\u51fa Unused '@ts-expect-error' directive.\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c\u7b2c\u4e8c\u884c\u662f\u6b63\u786e\u4ee3\u7801\uff0c\u8fd9\u65f6\u7cfb\u7edf\u4f1a\u7ed9\u51fa\u4e00\u4e2a\u63d0\u793a\uff0c\u8868\u793a",(0,a.kt)("inlineCode",{parentName:"p"},"@ts-expect-error"),"\u6ca1\u6709\u7528\u5230\u3002"),(0,a.kt)("h2",{id:"jsdoc"},"JSDoc"),(0,a.kt)("p",null,"TypeScript \u76f4\u63a5\u5904\u7406 JS \u6587\u4ef6\u65f6\uff0c\u5982\u679c\u65e0\u6cd5\u63a8\u65ad\u51fa\u7c7b\u578b\uff0c\u4f1a\u4f7f\u7528 JS \u811a\u672c\u91cc\u9762\u7684 JSDoc \u6ce8\u91ca\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528 JSDoc \u65f6\uff0c\u6709\u4e24\u4e2a\u57fa\u672c\u8981\u6c42\u3002"),(0,a.kt)("p",null,"\uff081\uff09JSDoc \u6ce8\u91ca\u5fc5\u987b\u4ee5",(0,a.kt)("inlineCode",{parentName:"p"},"/**"),"\u5f00\u59cb\uff0c\u5176\u4e2d\u661f\u53f7\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"*"),"\uff09\u7684\u6570\u91cf\u5fc5\u987b\u4e3a\u4e24\u4e2a\u3002\u82e5\u4f7f\u7528\u5176\u4ed6\u5f62\u5f0f\u7684\u591a\u884c\u6ce8\u91ca\uff0c\u5219 JSDoc \u4f1a\u5ffd\u7565\u8be5\u6761\u6ce8\u91ca\u3002"),(0,a.kt)("p",null,"\uff082\uff09JSDoc \u6ce8\u91ca\u5fc5\u987b\u4e0e\u5b83\u63cf\u8ff0\u7684\u4ee3\u7801\u5904\u4e8e\u76f8\u90bb\u7684\u4f4d\u7f6e\uff0c\u5e76\u4e14\u6ce8\u91ca\u5728\u4e0a\uff0c\u4ee3\u7801\u5728\u4e0b\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f JSDoc \u7684\u4e00\u4e2a\u7b80\u5355\u4f8b\u5b50\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * @param {string} somebody\n */\nfunction sayHello(somebody) {\n  console.log('Hello ' + somebody);\n}\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c\u6ce8\u91ca\u91cc\u9762\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"@param"),"\u662f\u4e00\u4e2a JSDoc \u58f0\u660e\uff0c\u8868\u793a\u4e0b\u9762\u7684\u51fd\u6570",(0,a.kt)("inlineCode",{parentName:"p"},"sayHello()"),"\u7684\u53c2\u6570",(0,a.kt)("inlineCode",{parentName:"p"},"somebody"),"\u7c7b\u578b\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"\u3002"),(0,a.kt)("p",null,"TypeScript \u7f16\u8bd1\u5668\u652f\u6301\u5927\u90e8\u5206\u7684 JSDoc \u58f0\u660e\uff0c\u4e0b\u9762\u4ecb\u7ecd\u5176\u4e2d\u7684\u4e00\u4e9b\u3002"),(0,a.kt)("h3",{id:"typedef"},"@typedef"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@typedef"),"\u547d\u4ee4\u521b\u5efa\u81ea\u5b9a\u4e49\u7c7b\u578b\uff0c\u7b49\u540c\u4e8e TypeScript \u91cc\u9762\u7684\u7c7b\u578b\u522b\u540d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * @typedef {(number | string)} NumberLike\n */\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c\u5b9a\u4e49\u4e86\u4e00\u4e2a\u540d\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"NumberLike"),"\u7684\u65b0\u7c7b\u578b\uff0c\u5b83\u662f\u7531",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"\u6784\u6210\u7684\u8054\u5408\u7c7b\u578b\uff0c\u7b49\u540c\u4e8e TypeScript \u7684\u5982\u4e0b\u8bed\u53e5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"type NumberLike = string | number;\n")),(0,a.kt)("h3",{id:"type"},"@type"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@type"),"\u547d\u4ee4\u5b9a\u4e49\u53d8\u91cf\u7684\u7c7b\u578b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * @type {string}\n */\nlet a;\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"@type"),"\u5b9a\u4e49\u4e86\u53d8\u91cf",(0,a.kt)("inlineCode",{parentName:"p"},"a"),"\u7684\u7c7b\u578b\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"\u3002"),(0,a.kt)("p",null,"\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"@type"),"\u547d\u4ee4\u4e2d\u53ef\u4ee5\u4f7f\u7528\u7531",(0,a.kt)("inlineCode",{parentName:"p"},"@typedef"),"\u547d\u4ee4\u521b\u5efa\u7684\u7c7b\u578b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * @typedef {(number | string)} NumberLike\n */\n\n/**\n * @type {NumberLike}\n */\nlet a = 0;\n")),(0,a.kt)("p",null,"\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"@type"),"\u547d\u4ee4\u4e2d\u5141\u8bb8\u4f7f\u7528 TypeScript \u7c7b\u578b\u53ca\u5176\u8bed\u6cd5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/**@type {true | false} */\nlet a;\n\n/** @type {number[]} */\nlet b;\n\n/** @type {Array<number>} */\nlet c;\n\n/** @type {{ readonly x: number, y?: string }} */\nlet d;\n\n/** @type {(s: string, b: boolean) => number} */\nlet e;\n")),(0,a.kt)("h3",{id:"param"},"@param"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@param"),"\u547d\u4ee4\u7528\u4e8e\u5b9a\u4e49\u51fd\u6570\u53c2\u6570\u7684\u7c7b\u578b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * @param {string}  x\n */\nfunction foo(x) {}\n")),(0,a.kt)("p",null,"\u5982\u679c\u662f\u53ef\u9009\u53c2\u6570\uff0c\u9700\u8981\u5c06\u53c2\u6570\u540d\u653e\u5728\u65b9\u62ec\u53f7",(0,a.kt)("inlineCode",{parentName:"p"},"[]"),"\u91cc\u9762\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * @param {string}  [x]\n */\nfunction foo(x) {}\n")),(0,a.kt)("p",null,"\u65b9\u62ec\u53f7\u91cc\u9762\uff0c\u8fd8\u53ef\u4ee5\u6307\u5b9a\u53c2\u6570\u9ed8\u8ba4\u503c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'/**\n * @param {string} [x="bar"]\n */\nfunction foo(x) {}\n')),(0,a.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c\u53c2\u6570",(0,a.kt)("inlineCode",{parentName:"p"},"x"),"\u7684\u9ed8\u8ba4\u503c\u662f\u5b57\u7b26\u4e32",(0,a.kt)("inlineCode",{parentName:"p"},"bar"),"\u3002"),(0,a.kt)("h3",{id:"returnreturns"},"@return\uff0c@returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@return"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"@returns"),"\u547d\u4ee4\u7684\u4f5c\u7528\u76f8\u540c\uff0c\u6307\u5b9a\u51fd\u6570\u8fd4\u56de\u503c\u7684\u7c7b\u578b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * @return {boolean}\n */\nfunction foo() {\n  return true;\n}\n\n/**\n * @returns {number}\n */\nfunction bar() {\n  return 0;\n}\n")),(0,a.kt)("h3",{id:"extends-\u548c\u7c7b\u578b\u4fee\u9970\u7b26"},"@extends \u548c\u7c7b\u578b\u4fee\u9970\u7b26"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@extends"),"\u547d\u4ee4\u7528\u4e8e\u5b9a\u4e49\u7ee7\u627f\u7684\u57fa\u7c7b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * @extends {Base}\n */\nclass Derived extends Base {\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@public"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"@protected"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"@private"),"\u5206\u522b\u6307\u5b9a\u7c7b\u7684\u516c\u5f00\u6210\u5458\u3001\u4fdd\u62a4\u6210\u5458\u548c\u79c1\u6709\u6210\u5458\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@readonly"),"\u6307\u5b9a\u53ea\u8bfb\u6210\u5458\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"class Base {\n  /**\n   * @public\n   * @readonly\n   */\n  x = 0;\n\n  /**\n   *  @protected\n   */\n  y = 0;\n}\n")))}d.isMDXComponent=!0}}]);