"use strict";(self.webpackChunkhijulien=self.webpackChunkhijulien||[]).push([[6398],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(t),f=a,d=s["".concat(l,".").concat(f)]||s[f]||m[f]||o;return t?r.createElement(d,c(c({ref:n},p),{},{components:t})):r.createElement(d,c({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[s]="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},22210:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=t(87462),a=(t(67294),t(3905));const o={},c="uniq",i={unversionedId:"Bash/archives/commands/uniq",id:"Bash/archives/commands/uniq",title:"uniq",description:"uniq\u7528\u4e8e\u8fc7\u6ee4\u6389\u91cd\u590d\u7684\u884c\uff0c\u8be5\u547d\u4ee4\u53ea\u5bf9\u6392\u5e8f\u540e\u7684\u6587\u4ef6\u6709\u6548\u3002",source:"@site/others/Bash/archives/commands/uniq.md",sourceDirName:"Bash/archives/commands",slug:"/Bash/archives/commands/uniq",permalink:"/hijulien/others/Bash/archives/commands/uniq",draft:!1,tags:[],version:"current",frontMatter:{}},l={},u=[{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2}],p={toc:u},s="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(s,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"uniq"},"uniq"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"uniq"),"\u7528\u4e8e\u8fc7\u6ee4\u6389\u91cd\u590d\u7684\u884c\uff0c\u8be5\u547d\u4ee4\u53ea\u5bf9\u6392\u5e8f\u540e\u7684\u6587\u4ef6\u6709\u6548\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"example.txt"),"\u6587\u4ef6\u7684\u5185\u5bb9\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"a\na\nb\na\nb\nc\nd\nc\n")),(0,a.kt)("p",null,"\u5bf9\u8be5\u6587\u4ef6\u8fdb\u884c\u6392\u5e8f\u540e\uff0c\u518d\u8fc7\u6ee4\u6389\u91cd\u590d\u7684\u884c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ sort example.txt | uniq\na\nb\nc\nd\n")),(0,a.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-c"),"\u53c2\u6570\u4f1a\u663e\u793a\u6bcf\u884c\u4e00\u5171\u51fa\u73b0\u4e86\u591a\u5c11\u6b21\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sort example.txt | uniq -c\n    3 a\n    2 b\n    2 c\n    1 d\n")))}m.isMDXComponent=!0}}]);