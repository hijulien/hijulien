"use strict";(self.webpackChunkhijulien=self.webpackChunkhijulien||[]).push([[8403],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>s});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function p(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},d=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=u(i),k=a,s=m["".concat(o,".").concat(k)]||m[k]||c[k]||l;return i?n.createElement(s,r(r({ref:t},d),{},{components:i})):n.createElement(s,r({ref:t},d))}));function s(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=i.length,r=new Array(l);r[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:a,r[1]=p;for(var u=2;u<l;u++)r[u]=i[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}k.displayName="MDXCreateElement"},18645:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=i(87462),a=(i(67294),i(3905));const l={},r="Page Visibility API",p={unversionedId:"WebAPI/page-visibility",id:"WebAPI/page-visibility",title:"Page Visibility API",description:"\u7b80\u4ecb",source:"@site/frontend/WebAPI/page-visibility.md",sourceDirName:"WebAPI",slug:"/WebAPI/page-visibility",permalink:"/hijulien/frontend/WebAPI/page-visibility",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"front",previous:{title:"Page Lifecycle API",permalink:"/hijulien/frontend/WebAPI/page-lifecycle"},next:{title:"Server-Sent Events",permalink:"/hijulien/frontend/WebAPI/server-sent-events"}},o={},u=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"document.visibilityState",id:"documentvisibilitystate",level:2},{value:"document.hidden",id:"documenthidden",level:2},{value:"visibilitychange \u4e8b\u4ef6",id:"visibilitychange-\u4e8b\u4ef6",level:2},{value:"\u9875\u9762\u5378\u8f7d",id:"\u9875\u9762\u5378\u8f7d",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],d={toc:u},m="wrapper";function c(e){let{components:t,...i}=e;return(0,a.kt)(m,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"page-visibility-api"},"Page Visibility API"),(0,a.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,a.kt)("p",null,"\u6709\u65f6\u5019\uff0c\u5f00\u53d1\u8005\u9700\u8981\u77e5\u9053\uff0c\u7528\u6237\u6b63\u5728\u79bb\u5f00\u9875\u9762\u3002\u5e38\u7528\u7684\u65b9\u6cd5\u662f\u76d1\u542c\u4e0b\u9762\u4e09\u4e2a\u4e8b\u4ef6\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pagehide")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"beforeunload")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"unload")))),(0,a.kt)("p",null,"\u4f46\u662f\uff0c\u8fd9\u4e9b\u4e8b\u4ef6\u5728\u624b\u673a\u4e0a\u53ef\u80fd\u4e0d\u4f1a\u89e6\u53d1\uff0c\u9875\u9762\u5c31\u76f4\u63a5\u5173\u95ed\u4e86\u3002\u56e0\u4e3a\u624b\u673a\u7cfb\u7edf\u53ef\u4ee5\u5c06\u4e00\u4e2a\u8fdb\u7a0b\u76f4\u63a5\u8f6c\u5165\u540e\u53f0\uff0c\u7136\u540e\u6740\u6b7b\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"\u7528\u6237\u70b9\u51fb\u4e86\u4e00\u6761\u7cfb\u7edf\u901a\u77e5\uff0c\u5207\u6362\u5230\u53e6\u4e00\u4e2a App\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7528\u6237\u8fdb\u5165\u4efb\u52a1\u5207\u6362\u7a97\u53e3\uff0c\u5207\u6362\u5230\u53e6\u4e00\u4e2a App\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7528\u6237\u70b9\u51fb\u4e86 Home \u6309\u94ae\uff0c\u5207\u6362\u56de\u4e3b\u5c4f\u5e55\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u64cd\u4f5c\u7cfb\u7edf\u81ea\u52a8\u5207\u6362\u5230\u53e6\u4e00\u4e2a App\uff08\u6bd4\u5982\uff0c\u6536\u5230\u4e00\u4e2a\u7535\u8bdd\uff09\u3002"))),(0,a.kt)("p",null,"\u4e0a\u9762\u8fd9\u4e9b\u60c5\u51b5\uff0c\u90fd\u4f1a\u5bfc\u81f4\u624b\u673a\u5c06\u6d4f\u89c8\u5668\u8fdb\u7a0b\u5207\u6362\u5230\u540e\u53f0\uff0c\u7136\u540e\u4e3a\u4e86\u8282\u7701\u8d44\u6e90\uff0c\u53ef\u80fd\u5c31\u4f1a\u6740\u6b7b\u6d4f\u89c8\u5668\u8fdb\u7a0b\u3002"),(0,a.kt)("p",null,"\u4ee5\u524d\uff0c\u9875\u9762\u88ab\u7cfb\u7edf\u5207\u6362\uff0c\u4ee5\u53ca\u7cfb\u7edf\u6e05\u9664\u6d4f\u89c8\u5668\u8fdb\u7a0b\uff0c\u662f\u65e0\u6cd5\u76d1\u542c\u5230\u7684\u3002\u5f00\u53d1\u8005\u60f3\u8981\u6307\u5b9a\uff0c\u4efb\u4f55\u4e00\u79cd\u9875\u9762\u5378\u8f7d\u60c5\u51b5\u4e0b\u90fd\u4f1a\u6267\u884c\u7684\u4ee3\u7801\uff0c\u4e5f\u662f\u65e0\u6cd5\u505a\u5230\u7684\u3002\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u5c31\u8bde\u751f\u4e86 Page Visibility API\u3002\u4e0d\u7ba1\u624b\u673a\u6216\u684c\u9762\u7535\u8111\uff0c\u6240\u6709\u60c5\u51b5\u4e0b\uff0c\u8fd9\u4e2a API \u90fd\u4f1a\u76d1\u542c\u5230\u9875\u9762\u7684\u53ef\u89c1\u6027\u53d1\u751f\u53d8\u5316\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u65b0\u7684 API \u7684\u610f\u4e49\u5728\u4e8e\uff0c\u901a\u8fc7\u76d1\u542c\u7f51\u9875\u7684\u53ef\u89c1\u6027\uff0c\u53ef\u4ee5\u9884\u5224\u7f51\u9875\u7684\u5378\u8f7d\uff0c\u8fd8\u53ef\u4ee5\u7528\u6765\u8282\u7701\u8d44\u6e90\uff0c\u51cf\u7f13\u7535\u80fd\u7684\u6d88\u8017\u3002\u6bd4\u5982\uff0c\u4e00\u65e6\u7528\u6237\u4e0d\u770b\u7f51\u9875\uff0c\u4e0b\u9762\u8fd9\u4e9b\u7f51\u9875\u884c\u4e3a\u90fd\u662f\u53ef\u4ee5\u6682\u505c\u7684\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u670d\u52a1\u5668\u7684\u8f6e\u8be2"),(0,a.kt)("li",{parentName:"ul"},"\u7f51\u9875\u52a8\u753b"),(0,a.kt)("li",{parentName:"ul"},"\u6b63\u5728\u64ad\u653e\u7684\u97f3\u9891\u6216\u89c6\u9891"))),(0,a.kt)("h2",{id:"documentvisibilitystate"},"document.visibilityState"),(0,a.kt)("p",null,"\u8fd9\u4e2a API \u4e3b\u8981\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"document"),"\u5bf9\u8c61\u4e0a\uff0c\u65b0\u589e\u4e86\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"document.visibilityState"),"\u5c5e\u6027\u3002\u8be5\u5c5e\u6027\u8fd4\u56de\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u8868\u793a\u9875\u9762\u5f53\u524d\u7684\u53ef\u89c1\u6027\u72b6\u6001\uff0c\u5171\u6709\u4e09\u4e2a\u53ef\u80fd\u7684\u503c\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hidden"),"\uff1a\u9875\u9762\u5f7b\u5e95\u4e0d\u53ef\u89c1\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"visible"),"\uff1a\u9875\u9762\u81f3\u5c11\u4e00\u90e8\u5206\u53ef\u89c1\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"prerender"),"\uff1a\u9875\u9762\u5373\u5c06\u6216\u6b63\u5728\u6e32\u67d3\uff0c\u5904\u4e8e\u4e0d\u53ef\u89c1\u72b6\u6001\u3002"))),(0,a.kt)("p",null,"\u5176\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"hidden"),"\u72b6\u6001\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"visible"),"\u72b6\u6001\u662f\u6240\u6709\u6d4f\u89c8\u5668\u90fd\u5fc5\u987b\u652f\u6301\u7684\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"prerender"),"\u72b6\u6001\u53ea\u5728\u652f\u6301\u201c\u9884\u6e32\u67d3\u201d\u7684\u6d4f\u89c8\u5668\u4e0a\u624d\u4f1a\u51fa\u73b0\uff0c\u6bd4\u5982 Chrome \u6d4f\u89c8\u5668\u5c31\u6709\u9884\u6e32\u67d3\u529f\u80fd\uff0c\u53ef\u4ee5\u5728\u7528\u6237\u4e0d\u53ef\u89c1\u7684\u72b6\u6001\u4e0b\uff0c\u9884\u5148\u628a\u9875\u9762\u6e32\u67d3\u51fa\u6765\uff0c\u7b49\u5230\u7528\u6237\u8981\u6d4f\u89c8\u7684\u65f6\u5019\uff0c\u76f4\u63a5\u5c55\u793a\u6e32\u67d3\u597d\u7684\u7f51\u9875\u3002"),(0,a.kt)("p",null,"\u53ea\u8981\u9875\u9762\u53ef\u89c1\uff0c\u54ea\u6015\u53ea\u9732\u51fa\u4e00\u4e2a\u89d2\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"document.visibilityState"),"\u5c5e\u6027\u5c31\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"p"},"visible"),"\u3002\u53ea\u6709\u4ee5\u4e0b\u56db\u79cd\u60c5\u51b5\uff0c\u624d\u4f1a\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"p"},"hidden"),"\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668\u6700\u5c0f\u5316\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668\u6ca1\u6709\u6700\u5c0f\u5316\uff0c\u4f46\u662f\u5f53\u524d\u9875\u9762\u5207\u6362\u6210\u4e86\u80cc\u666f\u9875\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668\u5c06\u8981\u5378\u8f7d\uff08unload\uff09\u9875\u9762\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u64cd\u4f5c\u7cfb\u7edf\u89e6\u53d1\u9501\u5c4f\u5c4f\u5e55\u3002"))),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u4e0a\u9762\u56db\u79cd\u573a\u666f\u6db5\u76d6\u4e86\u9875\u9762\u53ef\u80fd\u88ab\u5378\u8f7d\u7684\u6240\u6709\u60c5\u51b5\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u9875\u9762\u5378\u8f7d\u4e4b\u524d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"document.visibilityState"),"\u5c5e\u6027\u4e00\u5b9a\u4f1a\u53d8\u6210",(0,a.kt)("inlineCode",{parentName:"p"},"hidden"),"\u3002\u4e8b\u5b9e\u4e0a\uff0c\u8fd9\u4e5f\u662f\u8bbe\u8ba1\u8fd9\u4e2a API \u7684\u4e3b\u8981\u76ee\u7684\u3002"),(0,a.kt)("p",null,"\u53e6\u5916\uff0c\u65e9\u671f\u7248\u672c\u7684 API\uff0c\u8fd9\u4e2a\u5c5e\u6027\u8fd8\u6709\u7b2c\u56db\u4e2a\u503c",(0,a.kt)("inlineCode",{parentName:"p"},"unloaded"),"\uff0c\u8868\u793a\u9875\u9762\u5373\u5c06\u5378\u8f7d\uff0c\u73b0\u5728\u5df2\u7ecf\u88ab\u5e9f\u5f03\u4e86\u3002"),(0,a.kt)("p",null,"\u6ce8\u610f\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"document.visibilityState"),"\u5c5e\u6027\u53ea\u9488\u5bf9\u9876\u5c42\u7a97\u53e3\uff0c\u5185\u5d4c\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"<iframe>"),"\u9875\u9762\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"document.visibilityState"),"\u5c5e\u6027\u7531\u9876\u5c42\u7a97\u53e3\u51b3\u5b9a\u3002\u4f7f\u7528 CSS \u5c5e\u6027\u9690\u85cf",(0,a.kt)("inlineCode",{parentName:"p"},"<iframe>"),"\u9875\u9762\uff08\u6bd4\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"display: none;"),"\uff09\uff0c\u5e76\u4e0d\u4f1a\u5f71\u54cd\u5185\u5d4c\u9875\u9762\u7684\u53ef\u89c1\u6027\u3002"),(0,a.kt)("h2",{id:"documenthidden"},"document.hidden"),(0,a.kt)("p",null,"\u7531\u4e8e\u5386\u53f2\u539f\u56e0\uff0c\u8fd9\u4e2a API \u8fd8\u5b9a\u4e49\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"document.hidden"),"\u5c5e\u6027\u3002\u8be5\u5c5e\u6027\u53ea\u8bfb\uff0c\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5f53\u524d\u9875\u9762\u662f\u5426\u53ef\u89c1\u3002"),(0,a.kt)("p",null,"\u5f53",(0,a.kt)("inlineCode",{parentName:"p"},"document.visibilityState"),"\u5c5e\u6027\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"p"},"visible"),"\u65f6\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"document.hidden"),"\u5c5e\u6027\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"\uff1b\u5176\u4ed6\u60c5\u51b5\u4e0b\uff0c\u90fd\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\u3002"),(0,a.kt)("p",null,"\u8be5\u5c5e\u6027\u53ea\u662f\u51fa\u4e8e\u5386\u53f2\u539f\u56e0\u800c\u4fdd\u7559\u7684\uff0c\u53ea\u8981\u6709\u53ef\u80fd\uff0c\u90fd\u5e94\u8be5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"document.visibilityState"),"\u5c5e\u6027\uff0c\u800c\u4e0d\u662f\u4f7f\u7528\u8fd9\u4e2a\u5c5e\u6027\u3002"),(0,a.kt)("h2",{id:"visibilitychange-\u4e8b\u4ef6"},"visibilitychange \u4e8b\u4ef6"),(0,a.kt)("p",null,"\u53ea\u8981",(0,a.kt)("inlineCode",{parentName:"p"},"document.visibilityState"),"\u5c5e\u6027\u53d1\u751f\u53d8\u5316\uff0c\u5c31\u4f1a\u89e6\u53d1",(0,a.kt)("inlineCode",{parentName:"p"},"visibilitychange"),"\u4e8b\u4ef6\u3002\u56e0\u6b64\uff0c\u53ef\u4ee5\u901a\u8fc7\u76d1\u542c\u8fd9\u4e2a\u4e8b\u4ef6\uff08\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"document.addEventListener()"),"\u65b9\u6cd5\u6216",(0,a.kt)("inlineCode",{parentName:"p"},"document.onvisibilitychange"),"\u5c5e\u6027\uff09\uff0c\u8ddf\u8e2a\u9875\u9762\u53ef\u89c1\u6027\u7684\u53d8\u5316\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"document.addEventListener('visibilitychange', function () {\n  // \u7528\u6237\u79bb\u5f00\u4e86\u5f53\u524d\u9875\u9762\n  if (document.visibilityState === 'hidden') {\n    document.title = '\u9875\u9762\u4e0d\u53ef\u89c1';\n  }\n\n  // \u7528\u6237\u6253\u5f00\u6216\u56de\u5230\u9875\u9762\n  if (document.visibilityState === 'visible') {\n    document.title = '\u9875\u9762\u53ef\u89c1';\n  }\n});\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u662f Page Visibility API \u7684\u6700\u57fa\u672c\u7528\u6cd5\uff0c\u53ef\u4ee5\u76d1\u542c\u53ef\u89c1\u6027\u53d8\u5316\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u53e6\u4e00\u4e2a\u4f8b\u5b50\uff0c\u4e00\u65e6\u9875\u9762\u4e0d\u53ef\u89c1\uff0c\u5c31\u6682\u505c\u89c6\u9891\u64ad\u653e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var vidElem = document.getElementById('video-demo');\ndocument.addEventListener('visibilitychange', startStopVideo);\n\nfunction startStopVideo() {\n  if (document.visibilityState === 'hidden') {\n    vidElem.pause();\n  } else if (document.visibilityState === 'visible') {\n    vidElem.play();\n  }\n}\n")),(0,a.kt)("h2",{id:"\u9875\u9762\u5378\u8f7d"},"\u9875\u9762\u5378\u8f7d"),(0,a.kt)("p",null,"\u4e0b\u9762\u4e13\u95e8\u8ba8\u8bba\u4e00\u4e0b\uff0c\u5982\u4f55\u6b63\u786e\u76d1\u542c\u9875\u9762\u5378\u8f7d\u3002"),(0,a.kt)("p",null,"\u9875\u9762\u5378\u8f7d\u53ef\u4ee5\u5206\u6210\u4e09\u79cd\u60c5\u51b5\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"\u9875\u9762\u53ef\u89c1\u65f6\uff0c\u7528\u6237\u5173\u95ed Tab \u9875\u6216\u6d4f\u89c8\u5668\u7a97\u53e3\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u9875\u9762\u53ef\u89c1\u65f6\uff0c\u7528\u6237\u5728\u5f53\u524d\u7a97\u53e3\u524d\u5f80\u53e6\u4e00\u4e2a\u9875\u9762\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u9875\u9762\u4e0d\u53ef\u89c1\u65f6\uff0c\u7528\u6237\u6216\u7cfb\u7edf\u5173\u95ed\u6d4f\u89c8\u5668\u7a97\u53e3\u3002"))),(0,a.kt)("p",null,"\u8fd9\u4e09\u79cd\u60c5\u51b5\uff0c\u90fd\u4f1a\u89e6\u53d1",(0,a.kt)("inlineCode",{parentName:"p"},"visibilitychange"),"\u4e8b\u4ef6\u3002\u524d\u4e24\u79cd\u60c5\u51b5\uff0c\u8be5\u4e8b\u4ef6\u5728\u7528\u6237\u79bb\u5f00\u9875\u9762\u65f6\u89e6\u53d1\uff1b\u6700\u540e\u4e00\u79cd\u60c5\u51b5\uff0c\u8be5\u4e8b\u4ef6\u5728\u9875\u9762\u4ece\u53ef\u89c1\u72b6\u6001\u53d8\u4e3a\u4e0d\u53ef\u89c1\u72b6\u6001\u65f6\u89e6\u53d1\u3002"),(0,a.kt)("p",null,"\u7531\u6b64\u53ef\u89c1\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"visibilitychange"),"\u4e8b\u4ef6\u6bd4",(0,a.kt)("inlineCode",{parentName:"p"},"pagehide"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"beforeunload"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"unload"),"\u4e8b\u4ef6\u66f4\u53ef\u9760\uff0c\u6240\u6709\u60c5\u51b5\u4e0b\u90fd\u4f1a\u89e6\u53d1\uff08\u4ece",(0,a.kt)("inlineCode",{parentName:"p"},"visible"),"\u53d8\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"hidden"),"\uff09\u3002\u56e0\u6b64\uff0c\u53ef\u4ee5\u53ea\u76d1\u542c\u8fd9\u4e2a\u4e8b\u4ef6\uff0c\u8fd0\u884c\u9875\u9762\u5378\u8f7d\u65f6\u9700\u8981\u8fd0\u884c\u7684\u4ee3\u7801\uff0c\u4e0d\u7528\u76d1\u542c\u540e\u9762\u90a3\u4e09\u4e2a\u4e8b\u4ef6\u3002"),(0,a.kt)("p",null,"\u751a\u81f3\u53ef\u4ee5\u8fd9\u6837\u8bf4\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"unload"),"\u4e8b\u4ef6\u5728\u4efb\u4f55\u60c5\u51b5\u4e0b\u90fd\u4e0d\u5fc5\u76d1\u542c\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"beforeunload"),"\u4e8b\u4ef6\u53ea\u6709\u4e00\u79cd\u9002\u7528\u573a\u666f\uff0c\u5c31\u662f\u7528\u6237\u4fee\u6539\u4e86\u8868\u5355\uff0c\u6ca1\u6709\u63d0\u4ea4\u5c31\u79bb\u5f00\u5f53\u524d\u9875\u9762\u3002\u53e6\u4e00\u65b9\u9762\uff0c\u6307\u5b9a\u4e86\u8fd9\u4e24\u4e2a\u4e8b\u4ef6\u7684\u76d1\u542c\u51fd\u6570\uff0c\u6d4f\u89c8\u5668\u5c31\u4e0d\u4f1a\u7f13\u5b58\u5f53\u524d\u9875\u9762\u3002"),(0,a.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://w3c.github.io/page-visibility/"},"Page Visibility Level 2"),", W3C"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://davidwalsh.name/page-visibility"},"Page Visibility API"),", David Walsh"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.html5rocks.com/en/tutorials/pagevisibility/intro/"},"Using the pageVisbility API"),", Joe Marini"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://blogs.msdn.com/b/ie/archive/2011/07/08/using-pc-hardware-more-efficiently-in-html5-new-web-performance-apis-part-2.aspx"},"Using PC Hardware more efficiently in HTML5: New Web Performance APIs, Part 2"),", Jatinder Mann"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/"},"Don't lose user and app state, use Page Visibility"),", Ilya Grigorik")))}c.isMDXComponent=!0}}]);