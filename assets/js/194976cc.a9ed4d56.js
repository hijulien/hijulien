"use strict";(self.webpackChunkhijulien=self.webpackChunkhijulien||[]).push([[6456],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var a=t(7294);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,p=function(e,n){if(null==e)return{};var t,a,p={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var i=a.createContext({}),d=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=d(e.components);return a.createElement(i.Provider,{value:n},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,p=e.mdxType,r=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=d(t),c=p,k=m["".concat(i,".").concat(c)]||m[c]||s[c]||r;return t?a.createElement(k,l(l({ref:n},u),{},{components:t})):a.createElement(k,l({ref:n},u))}));function k(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var r=t.length,l=new Array(r);l[0]=c;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[m]="string"==typeof e?e:p,l[1]=o;for(var d=2;d<r;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1755:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=t(7462),p=(t(7294),t(3905));const r={},l="\u76ee\u5f55\u5806\u6808",o={unversionedId:"Bash/stack",id:"Bash/stack",title:"\u76ee\u5f55\u5806\u6808",description:"\u4e3a\u4e86\u65b9\u4fbf\u7528\u6237\u5728\u4e0d\u540c\u76ee\u5f55\u4e4b\u95f4\u5207\u6362\uff0cBash \u63d0\u4f9b\u4e86\u76ee\u5f55\u5806\u6808\u529f\u80fd\u3002",source:"@site/others/Bash/stack.md",sourceDirName:"Bash",slug:"/Bash/stack",permalink:"/hijulien/others/Bash/stack",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"others",previous:{title:"\u884c\u64cd\u4f5c",permalink:"/hijulien/others/Bash/readline"},next:{title:"\u811a\u672c\u5165\u95e8",permalink:"/hijulien/others/Bash/script"}},i={},d=[{value:"cd -",id:"cd--",level:2},{value:"pushd\uff0cpopd",id:"pushdpopd",level:2},{value:"dirs \u547d\u4ee4",id:"dirs-\u547d\u4ee4",level:2}],u={toc:d},m="wrapper";function s(e){let{components:n,...t}=e;return(0,p.kt)(m,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"\u76ee\u5f55\u5806\u6808"},"\u76ee\u5f55\u5806\u6808"),(0,p.kt)("p",null,"\u4e3a\u4e86\u65b9\u4fbf\u7528\u6237\u5728\u4e0d\u540c\u76ee\u5f55\u4e4b\u95f4\u5207\u6362\uff0cBash \u63d0\u4f9b\u4e86\u76ee\u5f55\u5806\u6808\u529f\u80fd\u3002"),(0,p.kt)("h2",{id:"cd--"},"cd -"),(0,p.kt)("p",null,"Bash \u53ef\u4ee5\u8bb0\u5fc6\u7528\u6237\u8fdb\u5165\u8fc7\u7684\u76ee\u5f55\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u53ea\u8bb0\u5fc6\u524d\u4e00\u6b21\u6240\u5728\u7684\u76ee\u5f55\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"cd -"),"\u547d\u4ee4\u53ef\u4ee5\u8fd4\u56de\u524d\u4e00\u6b21\u7684\u76ee\u5f55\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5f53\u524d\u76ee\u5f55\u662f /path/to/foo\n$ cd bar\n\n# \u91cd\u65b0\u56de\u5230 /path/to/foo\n$ cd -\n")),(0,p.kt)("p",null,"\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c\u7528\u6237\u539f\u6765\u6240\u5728\u7684\u76ee\u5f55\u662f",(0,p.kt)("inlineCode",{parentName:"p"},"/path/to/foo"),"\uff0c\u8fdb\u5165\u5b50\u76ee\u5f55",(0,p.kt)("inlineCode",{parentName:"p"},"bar"),"\u4ee5\u540e\uff0c\u4f7f\u7528",(0,p.kt)("inlineCode",{parentName:"p"},"cd -"),"\u53ef\u4ee5\u56de\u5230\u539f\u6765\u7684\u76ee\u5f55\u3002"),(0,p.kt)("h2",{id:"pushdpopd"},"pushd\uff0cpopd"),(0,p.kt)("p",null,"\u5982\u679c\u5e0c\u671b\u8bb0\u5fc6\u591a\u91cd\u76ee\u5f55\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,p.kt)("inlineCode",{parentName:"p"},"pushd"),"\u547d\u4ee4\u548c",(0,p.kt)("inlineCode",{parentName:"p"},"popd"),"\u547d\u4ee4\u3002\u5b83\u4eec\u7528\u6765\u64cd\u4f5c\u76ee\u5f55\u5806\u6808\u3002"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"pushd"),"\u547d\u4ee4\u7684\u7528\u6cd5\u7c7b\u4f3c",(0,p.kt)("inlineCode",{parentName:"p"},"cd"),"\u547d\u4ee4\uff0c\u53ef\u4ee5\u8fdb\u5165\u6307\u5b9a\u7684\u76ee\u5f55\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"$ pushd dirname\n")),(0,p.kt)("p",null,"\u4e0a\u9762\u547d\u4ee4\u4f1a\u8fdb\u5165\u76ee\u5f55",(0,p.kt)("inlineCode",{parentName:"p"},"dirname"),"\uff0c\u5e76\u5c06\u8be5\u76ee\u5f55\u653e\u5165\u5806\u6808\u3002"),(0,p.kt)("p",null,"\u7b2c\u4e00\u6b21\u4f7f\u7528",(0,p.kt)("inlineCode",{parentName:"p"},"pushd"),"\u547d\u4ee4\u65f6\uff0c\u4f1a\u5c06\u5f53\u524d\u76ee\u5f55\u5148\u653e\u5165\u5806\u6808\uff0c\u7136\u540e\u5c06\u6240\u8981\u8fdb\u5165\u7684\u76ee\u5f55\u4e5f\u653e\u5165\u5806\u6808\uff0c\u4f4d\u7f6e\u5728\u524d\u4e00\u4e2a\u8bb0\u5f55\u7684\u4e0a\u65b9\u3002\u4ee5\u540e\u6bcf\u6b21\u4f7f\u7528",(0,p.kt)("inlineCode",{parentName:"p"},"pushd"),"\u547d\u4ee4\uff0c\u90fd\u4f1a\u5c06\u6240\u8981\u8fdb\u5165\u7684\u76ee\u5f55\uff0c\u653e\u5728\u5806\u6808\u7684\u9876\u90e8\u3002"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"popd"),"\u547d\u4ee4\u4e0d\u5e26\u6709\u53c2\u6570\u65f6\uff0c\u4f1a\u79fb\u9664\u5806\u6808\u7684\u9876\u90e8\u8bb0\u5f55\uff0c\u5e76\u8fdb\u5165\u65b0\u7684\u6808\u9876\u76ee\u5f55\uff08\u5373\u539f\u6765\u7684\u7b2c\u4e8c\u6761\u76ee\u5f55\uff09\u3002"),(0,p.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u4f8b\u5b50\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5f53\u524d\u5904\u5728\u4e3b\u76ee\u5f55\uff0c\u5806\u6808\u4e3a\u7a7a\n$ pwd\n/home/me\n\n# \u8fdb\u5165 /home/me/foo\n# \u5f53\u524d\u5806\u6808\u4e3a /home/me/foo /home/me\n$ pushd ~/foo\n\n# \u8fdb\u5165 /etc\n# \u5f53\u524d\u5806\u6808\u4e3a /etc /home/me/foo /home/me\n$ pushd /etc\n\n# \u8fdb\u5165 /home/me/foo\n# \u5f53\u524d\u5806\u6808\u4e3a /home/me/foo /home/me\n$ popd\n\n# \u8fdb\u5165 /home/me\n# \u5f53\u524d\u5806\u6808\u4e3a /home/me\n$ popd\n\n# \u76ee\u5f55\u4e0d\u53d8\uff0c\u5f53\u524d\u5806\u6808\u4e3a\u7a7a\n$ popd\n")),(0,p.kt)("p",null,"\u8fd9\u4e24\u4e2a\u547d\u4ee4\u7684\u53c2\u6570\u5982\u4e0b\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\uff081\uff09-n \u53c2\u6570")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"-n"),"\u7684\u53c2\u6570\u8868\u793a\u4ec5\u64cd\u4f5c\u5806\u6808\uff0c\u4e0d\u6539\u53d8\u76ee\u5f55\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"$ popd -n\n")),(0,p.kt)("p",null,"\u4e0a\u9762\u7684\u547d\u4ee4\u4ec5\u5220\u9664\u5806\u6808\u9876\u90e8\u7684\u8bb0\u5f55\uff0c\u4e0d\u6539\u53d8\u76ee\u5f55\uff0c\u6267\u884c\u5b8c\u6210\u540e\u8fd8\u505c\u7559\u5728\u5f53\u524d\u76ee\u5f55\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\uff082\uff09\u6574\u6570\u53c2\u6570")),(0,p.kt)("p",null,"\u8fd9\u4e24\u4e2a\u547d\u4ee4\u8fd8\u53ef\u4ee5\u63a5\u53d7\u4e00\u4e2a\u6574\u6570\u4f5c\u4e3a\u53c2\u6570\uff0c\u8be5\u6574\u6570\u8868\u793a\u5806\u6808\u4e2d\u6307\u5b9a\u4f4d\u7f6e\u7684\u8bb0\u5f55\uff08\u4ece0\u5f00\u59cb\uff09\u3002",(0,p.kt)("inlineCode",{parentName:"p"},"pushd"),"\u547d\u4ee4\u4f1a\u628a\u8fd9\u6761\u8bb0\u5f55\u79fb\u52a8\u5230\u6808\u9876\uff0c\u540c\u65f6\u5207\u6362\u5230\u8be5\u76ee\u5f55\uff1b",(0,p.kt)("inlineCode",{parentName:"p"},"popd"),"\u5219\u4ece\u5806\u6808\u4e2d\u5220\u9664\u8fd9\u6761\u8bb0\u5f55\uff0c\u4e0d\u4f1a\u5207\u6362\u76ee\u5f55\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5c06\u4ece\u6808\u9876\u7b97\u8d77\u76843\u53f7\u76ee\u5f55\uff08\u4ece0\u5f00\u59cb\uff09\u79fb\u52a8\u5230\u6808\u9876\uff0c\u540c\u65f6\u5207\u6362\u5230\u8be5\u76ee\u5f55\n$ pushd +3\n\n# \u5c06\u4ece\u6808\u5e95\u7b97\u8d77\u76843\u53f7\u76ee\u5f55\uff08\u4ece0\u5f00\u59cb\uff09\u79fb\u52a8\u5230\u6808\u9876\uff0c\u540c\u65f6\u5207\u6362\u5230\u8be5\u76ee\u5f55\n$ pushd -3\n\n# \u5220\u9664\u4ece\u6808\u9876\u7b97\u8d77\u76843\u53f7\u76ee\u5f55\uff08\u4ece0\u5f00\u59cb\uff09\uff0c\u4e0d\u6539\u53d8\u5f53\u524d\u76ee\u5f55\n$ popd +3\n\n# \u5220\u9664\u4ece\u6808\u5e95\u7b97\u8d77\u76843\u53f7\u76ee\u5f55\uff08\u4ece0\u5f00\u59cb\uff09\uff0c\u4e0d\u6539\u53d8\u5f53\u524d\u76ee\u5f55\n$ popd -3\n")),(0,p.kt)("p",null,"\u4e0a\u9762\u4f8b\u5b50\u7684\u6574\u6570\u7f16\u53f7\u90fd\u662f\u4ece0\u5f00\u59cb\u8ba1\u7b97\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"popd +0"),"\u662f\u5220\u9664\u7b2c\u4e00\u4e2a\u76ee\u5f55\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"popd +1"),"\u662f\u5220\u9664\u7b2c\u4e8c\u4e2a\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"popd -0"),"\u662f\u5220\u9664\u6700\u540e\u4e00\u4e2a\u76ee\u5f55\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"popd -1"),"\u662f\u5220\u9664\u5012\u6570\u7b2c\u4e8c\u4e2a\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\uff083\uff09\u76ee\u5f55\u53c2\u6570")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"pushd"),"\u53ef\u4ee5\u63a5\u53d7\u4e00\u4e2a\u76ee\u5f55\u4f5c\u4e3a\u53c2\u6570\uff0c\u8868\u793a\u5c06\u8be5\u76ee\u5f55\u653e\u5230\u5806\u6808\u9876\u90e8\uff0c\u5e76\u8fdb\u5165\u8be5\u76ee\u5f55\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"$ pushd dir\n")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"popd"),"\u6ca1\u6709\u8fd9\u4e2a\u53c2\u6570\u3002"),(0,p.kt)("h2",{id:"dirs-\u547d\u4ee4"},"dirs \u547d\u4ee4"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"dirs"),"\u547d\u4ee4\u53ef\u4ee5\u663e\u793a\u76ee\u5f55\u5806\u6808\u7684\u5185\u5bb9\uff0c\u4e00\u822c\u7528\u6765\u67e5\u770b",(0,p.kt)("inlineCode",{parentName:"p"},"pushd"),"\u548c",(0,p.kt)("inlineCode",{parentName:"p"},"popd"),"\u64cd\u4f5c\u540e\u7684\u7ed3\u679c\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"$ dirs\n~/foo/bar ~/foo ~\n")),(0,p.kt)("p",null,"\u8be5\u547d\u4ee4\u4f1a\u8f93\u51fa\u4e00\u884c\u6587\u672c\uff0c\u5217\u51fa\u76ee\u5f55\u5806\u6808\uff0c\u76ee\u5f55\u4e4b\u95f4\u4f7f\u7528\u7a7a\u683c\u5206\u9694\u3002\u6808\u9876\uff08\u6700\u665a\u5165\u6808\u7684\u76ee\u5f55\uff09\u5728\u6700\u5de6\u8fb9\uff0c\u6808\u5e95\uff08\u6700\u65e9\u5165\u6808\u7684\u76ee\u5f55\uff09\u5728\u6700\u53f3\u8fb9\u3002"),(0,p.kt)("p",null,"\u5b83\u6709\u4ee5\u4e0b\u53c2\u6570\u3002"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"-c"),"\uff1a\u6e05\u7a7a\u76ee\u5f55\u6808\u3002"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"-l"),"\uff1a\u7528\u6237\u4e3b\u76ee\u5f55\u4e0d\u663e\u793a\u6ce2\u6d6a\u53f7\u524d\u7f00\uff0c\u800c\u6253\u5370\u5b8c\u6574\u7684\u76ee\u5f55\u3002"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"-p"),"\uff1a\u6bcf\u884c\u4e00\u4e2a\u6761\u76ee\u6253\u5370\u76ee\u5f55\u6808\uff0c\u9ed8\u8ba4\u662f\u6253\u5370\u5728\u4e00\u884c\u3002"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"-v"),"\uff1a\u6bcf\u884c\u4e00\u4e2a\u6761\u76ee\uff0c\u6bcf\u4e2a\u6761\u76ee\u4e4b\u524d\u663e\u793a\u4f4d\u7f6e\u7f16\u53f7\uff08\u4ece0\u5f00\u59cb\uff09\u3002"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"+N"),"\uff1a",(0,p.kt)("inlineCode",{parentName:"li"},"N"),"\u4e3a\u6574\u6570\uff0c\u8868\u793a\u663e\u793a\u5806\u9876\u7b97\u8d77\u7684\u7b2c N \u4e2a\u76ee\u5f55\uff0c\u4ece\u96f6\u5f00\u59cb\u3002"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"-N"),"\uff1a",(0,p.kt)("inlineCode",{parentName:"li"},"N"),"\u4e3a\u6574\u6570\uff0c\u8868\u793a\u663e\u793a\u5806\u5e95\u7b97\u8d77\u7684\u7b2c N \u4e2a\u76ee\u5f55\uff0c\u4ece\u96f6\u5f00\u59cb\u3002")))}s.isMDXComponent=!0}}]);