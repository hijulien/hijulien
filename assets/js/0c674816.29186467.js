"use strict";(self.webpackChunkhijulien=self.webpackChunkhijulien||[]).push([[3623],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=r.createContext({}),o=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,d=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=o(n),s=l,k=u["".concat(d,".").concat(s)]||u[s]||m[s]||a;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=s;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p[u]="string"==typeof e?e:l,i[1]=p;for(var o=2;o<a;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3625:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>o});var r=n(7462),l=(n(7294),n(3905));const a={},i=void 0,p={unversionedId:"Linux/Cmd",id:"Linux/Cmd",title:"Cmd",description:"\u4e00\u3001\u57fa\u7840\u77e5\u8bc6",source:"@site/backend/Linux/Cmd.md",sourceDirName:"Linux",slug:"/Linux/Cmd",permalink:"/hijulien/backend/Linux/Cmd",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"back",next:{title:"Linux",permalink:"/hijulien/backend/Linux/"}},d={},o=[{value:"1.1 Linux\u7cfb\u7edf\u7684\u6587\u4ef6\u7ed3\u6784",id:"11-linux\u7cfb\u7edf\u7684\u6587\u4ef6\u7ed3\u6784",level:2},{value:"1.2 Linux\u7cfb\u7edf\u547d\u4ee4\u884c\u7684\u542b\u4e49",id:"12-linux\u7cfb\u7edf\u547d\u4ee4\u884c\u7684\u542b\u4e49",level:2},{value:"1.3 \u547d\u4ee4\u7684\u7ec4\u6210",id:"13-\u547d\u4ee4\u7684\u7ec4\u6210",level:2},{value:"2.1 \u91cd\u542f\u7cfb\u7edf",id:"21-\u91cd\u542f\u7cfb\u7edf",level:2},{value:"2.2 \u5173\u95ed\u7cfb\u7edf",id:"22-\u5173\u95ed\u7cfb\u7edf",level:2},{value:"2.3 \u5e2e\u52a9\u547d\u4ee4\uff08help\uff09",id:"23-\u5e2e\u52a9\u547d\u4ee4help",level:2},{value:"2.4 \u547d\u4ee4\u8bf4\u660e\u4e66\uff08man\uff09",id:"24-\u547d\u4ee4\u8bf4\u660e\u4e66man",level:2},{value:"2.5 \u5207\u6362\u7528\u6237\uff08su\uff09",id:"25-\u5207\u6362\u7528\u6237su",level:2},{value:"3.1 \u5207\u6362\u76ee\u5f55\uff08cd\uff09",id:"31-\u5207\u6362\u76ee\u5f55cd",level:2},{value:"3.2 \u67e5\u770b\u76ee\u5f55\uff08ls\uff09",id:"32-\u67e5\u770b\u76ee\u5f55ls",level:2},{value:"3.3 \u521b\u5efa\u76ee\u5f55\uff08mkdir\uff09",id:"33-\u521b\u5efa\u76ee\u5f55mkdir",level:2},{value:"3.3 \u5220\u9664\u76ee\u5f55\u4e0e\u6587\u4ef6\uff08rm\uff09",id:"33-\u5220\u9664\u76ee\u5f55\u4e0e\u6587\u4ef6rm",level:2},{value:"3.4 \u4fee\u6539\u76ee\u5f55\uff08mv\uff09",id:"34-\u4fee\u6539\u76ee\u5f55mv",level:2},{value:"3.5 \u62f7\u8d1d\u76ee\u5f55\uff08cp\uff09",id:"35-\u62f7\u8d1d\u76ee\u5f55cp",level:2},{value:"3.6 \u641c\u7d22\u76ee\u5f55\uff08find\uff09",id:"36-\u641c\u7d22\u76ee\u5f55find",level:2},{value:"3.7 \u67e5\u770b\u5f53\u524d\u76ee\u5f55\uff08pwd\uff09",id:"37-\u67e5\u770b\u5f53\u524d\u76ee\u5f55pwd",level:2},{value:"4.1 \u65b0\u589e\u6587\u4ef6\uff08touch\uff09",id:"41-\u65b0\u589e\u6587\u4ef6touch",level:2},{value:"4.2 \u5220\u9664\u6587\u4ef6\uff08rm\uff09",id:"42-\u5220\u9664\u6587\u4ef6rm",level:2},{value:"4.3 \u7f16\u8f91\u6587\u4ef6\uff08vi\u3001vim\uff09",id:"43-\u7f16\u8f91\u6587\u4ef6vivim",level:2},{value:"4.4 \u67e5\u770b\u6587\u4ef6",id:"44-\u67e5\u770b\u6587\u4ef6",level:2},{value:"5.1 \u6743\u9650\u8bf4\u660e",id:"51-\u6743\u9650\u8bf4\u660e",level:2},{value:"5.2 \u6587\u4ef6\u6743\u9650",id:"52-\u6587\u4ef6\u6743\u9650",level:2},{value:"6.1 \u8bf4\u660e",id:"61-\u8bf4\u660e",level:2},{value:"6.2 \u6253\u5305\u6587\u4ef6",id:"62-\u6253\u5305\u6587\u4ef6",level:2},{value:"6.3 \u89e3\u538b\u6587\u4ef6",id:"63-\u89e3\u538b\u6587\u4ef6",level:2},{value:"7.1 find",id:"71-find",level:2},{value:"7.2 whereis",id:"72-whereis",level:2},{value:"7.3 which",id:"73-which",level:2},{value:"7.4 sudo",id:"74-sudo",level:2},{value:"7.5 grep",id:"75-grep",level:2},{value:"7.6 service",id:"76-service",level:2},{value:"7.7 free",id:"77-free",level:2},{value:"7.8 top",id:"78-top",level:2},{value:"7.9 df",id:"79-df",level:2},{value:"7.10 mount",id:"710-mount",level:2},{value:"7.11 uname",id:"711-uname",level:2},{value:"7.12 yum",id:"712-yum",level:2},{value:"7.13 rpm",id:"713-rpm",level:2},{value:"7.14 date",id:"714-date",level:2},{value:"7.15 wget",id:"715-wget",level:2},{value:"7.16 ftp",id:"716-ftp",level:2},{value:"7.17 scp",id:"717-scp",level:2},{value:"8.1 \u9632\u706b\u5899\u64cd\u4f5c",id:"81-\u9632\u706b\u5899\u64cd\u4f5c",level:2},{value:"8.2 \u4fee\u6539\u4e3b\u673a\u540d\uff08CentOS 7\uff09",id:"82-\u4fee\u6539\u4e3b\u673a\u540dcentos-7",level:2},{value:"8.3 \u67e5\u770b\u7f51\u7edc",id:"83-\u67e5\u770b\u7f51\u7edc",level:2},{value:"8.4 \u4fee\u6539IP",id:"84-\u4fee\u6539ip",level:2},{value:"8.5 \u914d\u7f6e\u6620\u5c04",id:"85-\u914d\u7f6e\u6620\u5c04",level:2},{value:"8.6 \u67e5\u770b\u8fdb\u7a0b",id:"86-\u67e5\u770b\u8fdb\u7a0b",level:2},{value:"8.7 \u7ed3\u675f\u8fdb\u7a0b",id:"87-\u7ed3\u675f\u8fdb\u7a0b",level:2},{value:"8.8 \u67e5\u770b\u94fe\u63a5",id:"88-\u67e5\u770b\u94fe\u63a5",level:2},{value:"8.9 \u5feb\u901f\u6e05\u5c4f",id:"89-\u5feb\u901f\u6e05\u5c4f",level:2},{value:"8.10 \u8fdc\u7a0b\u4e3b\u673a",id:"810-\u8fdc\u7a0b\u4e3b\u673a",level:2}],c={toc:o},u="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4e00**"),"\u3001\u57fa\u7840\u77e5\u8bc6**"),(0,l.kt)("h2",{id:"11-linux\u7cfb\u7edf\u7684\u6587\u4ef6\u7ed3\u6784"},"1.1 Linux\u7cfb\u7edf\u7684\u6587\u4ef6\u7ed3\u6784"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/bin        \u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u7cfb\u7edf\u5e38\u89c4\u547d\u4ee4\n/boot       \u7cfb\u7edf\u542f\u52a8\u5206\u533a\uff0c\u7cfb\u7edf\u542f\u52a8\u65f6\u8bfb\u53d6\u7684\u6587\u4ef6\n/dev        \u8bbe\u5907\u6587\u4ef6\n/etc        \u5927\u591a\u6570\u914d\u7f6e\u6587\u4ef6\n/home       \u666e\u901a\u7528\u6237\u7684\u5bb6\u76ee\u5f55\n/lib        32\u4f4d\u51fd\u6570\u5e93\n/lib64      64\u4f4d\u5e93\n/media      \u624b\u52a8\u4e34\u65f6\u6302\u8f7d\u70b9\n/mnt        \u624b\u52a8\u4e34\u65f6\u6302\u8f7d\u70b9\n/opt        \u7b2c\u4e09\u65b9\u8f6f\u4ef6\u5b89\u88c5\u4f4d\u7f6e\n/proc       \u8fdb\u7a0b\u4fe1\u606f\u53ca\u786c\u4ef6\u4fe1\u606f\n/root       \u4e34\u65f6\u8bbe\u5907\u7684\u9ed8\u8ba4\u6302\u8f7d\u70b9\n/sbin       \u7cfb\u7edf\u7ba1\u7406\u547d\u4ee4\n/srv        \u6570\u636e\n/var        \u6570\u636e\n/sys        \u5185\u6838\u76f8\u5173\u4fe1\u606f\n/tmp        \u4e34\u65f6\u6587\u4ef6\n/usr        \u7528\u6237\u76f8\u5173\u8bbe\u5b9a\n")),(0,l.kt)("h2",{id:"12-linux\u7cfb\u7edf\u547d\u4ee4\u884c\u7684\u542b\u4e49"},"1.2 Linux\u7cfb\u7edf\u547d\u4ee4\u884c\u7684\u542b\u4e49"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'\u793a\u4f8b\uff1aroot@app00:~# \nroot    //\u7528\u6237\u540d\uff0croot\u4e3a\u8d85\u7ea7\u7528\u6237\n@       //\u5206\u9694\u7b26\napp00   //\u4e3b\u673a\u540d\u79f0\n~       //\u5f53\u524d\u6240\u5728\u76ee\u5f55\uff0c\u9ed8\u8ba4\u7528\u6237\u76ee\u5f55\u4e3a~\uff0c\u4f1a\u968f\u7740\u76ee\u5f55\u5207\u6362\u800c\u53d8\u5316\uff0c\u4f8b\u5982\uff1a\uff08root@app00:/bin# \uff0c\u5f53\u524d\u4f4d\u7f6e\u5728bin\u76ee\u5f55\u4e0b\uff09\n#       //\u8868\u793a\u5f53\u524d\u7528\u6237\u662f\u8d85\u7ea7\u7528\u6237\uff0c\u666e\u901a\u7528\u6237\u4e3a$\uff0c\u4f8b\u5982\uff1a\uff08"yao@app00:/root$" \uff0c\u8868\u793a\u4f7f\u7528\u7528\u6237"yao"\u8bbf\u95ee/root\u6587\u4ef6\u5939\uff09\n')),(0,l.kt)("h2",{id:"13-\u547d\u4ee4\u7684\u7ec4\u6210"},"1.3 \u547d\u4ee4\u7684\u7ec4\u6210"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u793a\u4f8b\uff1a\u547d\u4ee4 \u53c2\u6570\u540d \u53c2\u6570\u503c\n")),(0,l.kt)("h1",{id:"\u4e8c\u57fa\u7840\u64cd\u4f5c"},"\u4e8c\u3001\u57fa\u7840\u64cd\u4f5c"),(0,l.kt)("h2",{id:"21-\u91cd\u542f\u7cfb\u7edf"},"2.1 \u91cd\u542f\u7cfb\u7edf"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"(1)\u7acb\u523b\u5173\u673a\n  shutdown -h now \u6216\u8005 poweroff\n(2)\u4e24\u5206\u949f\u540e\u5173\u673a\n  shutdown -h 2\n")),(0,l.kt)("h2",{id:"22-\u5173\u95ed\u7cfb\u7edf"},"2.2 \u5173\u95ed\u7cfb\u7edf"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"(1)\u7acb\u523b\u91cd\u542f\n  shutdown -r now \u6216\u8005 reboot\n(2)\u4e24\u5206\u949f\u540e\u91cd\u542f\n  shutdown -r 2 \n")),(0,l.kt)("h2",{id:"23-\u5e2e\u52a9\u547d\u4ee4help"},(0,l.kt)("a",{parentName:"h2",href:"http://mp.weixin.qq.com/s?__biz=MzIxMTA2ODE1OQ==&mid=2651147082&idx=1&sn=8184d7b883a33d5c1242916d89e6250a&chksm=8cab1edabbdc97cc64d6963d9dfdce06ca5533ab8b25879da4711c91a69cd297e8b8167181af&scene=21#wechat_redirect"},"2.3 \u5e2e\u52a9\u547d\u4ee4\uff08help\uff09")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  ifconfig  --help     //\u67e5\u770b ifconfig \u547d\u4ee4\u7684\u7528\u6cd5\n")),(0,l.kt)("h2",{id:"24-\u547d\u4ee4\u8bf4\u660e\u4e66man"},"2.4 \u547d\u4ee4\u8bf4\u660e\u4e66\uff08man\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'  man shutdown         //\u6253\u5f00\u547d\u4ee4\u8bf4\u660e\u540e\uff0c\u53ef\u6309"q"\u952e\u9000\u51fa\n')),(0,l.kt)("h2",{id:"25-\u5207\u6362\u7528\u6237su"},"2.5 \u5207\u6362\u7528\u6237\uff08su\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'  su yao               //\u5207\u6362\u4e3a\u7528\u6237"yao",\u8f93\u5165\u540e\u56de\u8f66\u9700\u8981\u8f93\u5165\u8be5\u7528\u6237\u7684\u5bc6\u7801\n  exit                 //\u9000\u51fa\u5f53\u524d\u7528\u6237\n')),(0,l.kt)("h1",{id:"\u4e09\u76ee\u5f55\u64cd\u4f5c"},"\u4e09\u3001\u76ee\u5f55\u64cd\u4f5c"),(0,l.kt)("h2",{id:"31-\u5207\u6362\u76ee\u5f55cd"},"3.1 \u5207\u6362\u76ee\u5f55\uff08cd\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  cd /                 //\u5207\u6362\u5230\u6839\u76ee\u5f55\n  cd /bin              //\u5207\u6362\u5230\u6839\u76ee\u5f55\u4e0b\u7684bin\u76ee\u5f55\n  cd ../               //\u5207\u6362\u5230\u4e0a\u4e00\u7ea7\u76ee\u5f55 \u6216\u8005\u4f7f\u7528\u547d\u4ee4\uff1acd ..\n  cd ~                 //\u5207\u6362\u5230home\u76ee\u5f55\n  cd -                 //\u5207\u6362\u5230\u4e0a\u6b21\u8bbf\u95ee\u7684\u76ee\u5f55\n  cd xx(\u6587\u4ef6\u5939\u540d)       //\u5207\u6362\u5230\u672c\u76ee\u5f55\u4e0b\u7684\u540d\u4e3axx\u7684\u6587\u4ef6\u76ee\u5f55\uff0c\u5982\u679c\u76ee\u5f55\u4e0d\u5b58\u5728\u62a5\u9519\n  cd /xxx/xx/x         //\u53ef\u4ee5\u8f93\u5165\u5b8c\u6574\u7684\u8def\u5f84\uff0c\u76f4\u63a5\u5207\u6362\u5230\u76ee\u6807\u76ee\u5f55\uff0c\u8f93\u5165\u8fc7\u7a0b\u4e2d\u53ef\u4ee5\u4f7f\u7528tab\u952e\u5feb\u901f\u8865\u5168\n")),(0,l.kt)("h2",{id:"32-\u67e5\u770b\u76ee\u5f55ls"},"3.2 \u67e5\u770b\u76ee\u5f55\uff08ls\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'  ls                   //\u67e5\u770b\u5f53\u524d\u76ee\u5f55\u4e0b\u7684\u6240\u6709\u76ee\u5f55\u548c\u6587\u4ef6\n  ls -a                //\u67e5\u770b\u5f53\u524d\u76ee\u5f55\u4e0b\u7684\u6240\u6709\u76ee\u5f55\u548c\u6587\u4ef6\uff08\u5305\u62ec\u9690\u85cf\u7684\u6587\u4ef6\uff09\n  ls -l                //\u5217\u8868\u67e5\u770b\u5f53\u524d\u76ee\u5f55\u4e0b\u7684\u6240\u6709\u76ee\u5f55\u548c\u6587\u4ef6\uff08\u5217\u8868\u67e5\u770b\uff0c\u663e\u793a\u66f4\u591a\u4fe1\u606f\uff09\uff0c\u4e0e\u547d\u4ee4"ll"\u6548\u679c\u4e00\u6837\n  ls /bin              //\u67e5\u770b\u6307\u5b9a\u76ee\u5f55\u4e0b\u7684\u6240\u6709\u76ee\u5f55\u548c\u6587\u4ef6 \n')),(0,l.kt)("h2",{id:"33-\u521b\u5efa\u76ee\u5f55mkdir"},"3.3 \u521b\u5efa\u76ee\u5f55\uff08mkdir\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  mkdir tools          //\u5728\u5f53\u524d\u76ee\u5f55\u4e0b\u521b\u5efa\u4e00\u4e2a\u540d\u4e3atools\u7684\u76ee\u5f55\n  mkdir /bin/tools     //\u5728\u6307\u5b9a\u76ee\u5f55\u4e0b\u521b\u5efa\u4e00\u4e2a\u540d\u4e3atools\u7684\u76ee\u5f55\n")),(0,l.kt)("h2",{id:"33-\u5220\u9664\u76ee\u5f55\u4e0e\u6587\u4ef6rm"},"3.3 \u5220\u9664\u76ee\u5f55\u4e0e\u6587\u4ef6\uff08rm\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  rm \u6587\u4ef6\u540d              //\u5220\u9664\u5f53\u524d\u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\n  rm -f \u6587\u4ef6\u540d           //\u5220\u9664\u5f53\u524d\u76ee\u5f55\u7684\u7684\u6587\u4ef6\uff08\u4e0d\u8be2\u95ee\uff09\n  rm -r \u6587\u4ef6\u5939\u540d         //\u9012\u5f52\u5220\u9664\u5f53\u524d\u76ee\u5f55\u4e0b\u6b64\u540d\u7684\u76ee\u5f55\n  rm -rf \u6587\u4ef6\u5939\u540d        //\u9012\u5f52\u5220\u9664\u5f53\u524d\u76ee\u5f55\u4e0b\u6b64\u540d\u7684\u76ee\u5f55\uff08\u4e0d\u8be2\u95ee\uff09\n  rm -rf *              //\u5c06\u5f53\u524d\u76ee\u5f55\u4e0b\u7684\u6240\u6709\u76ee\u5f55\u548c\u6587\u4ef6\u5168\u90e8\u5220\u9664\n  rm -rf /*             //\u5c06\u6839\u76ee\u5f55\u4e0b\u7684\u6240\u6709\u6587\u4ef6\u5168\u90e8\u5220\u9664\u3010\u614e\u7528\uff01\u76f8\u5f53\u4e8e\u683c\u5f0f\u5316\u7cfb\u7edf\u3011\n")),(0,l.kt)("h2",{id:"34-\u4fee\u6539\u76ee\u5f55mv"},"3.4 \u4fee\u6539\u76ee\u5f55\uff08mv\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  mv \u5f53\u524d\u76ee\u5f55\u540d \u65b0\u76ee\u5f55\u540d        //\u4fee\u6539\u76ee\u5f55\u540d\uff0c\u540c\u6837\u9002\u7528\u4e0e\u6587\u4ef6\u64cd\u4f5c\n  mv /usr/tmp/tool /opt       //\u5c06/usr/tmp\u76ee\u5f55\u4e0b\u7684tool\u76ee\u5f55\u526a\u5207\u5230 /opt\u76ee\u5f55\u4e0b\u9762\n  mv -r /usr/tmp/tool /opt    //\u9012\u5f52\u526a\u5207\u76ee\u5f55\u4e2d\u6240\u6709\u6587\u4ef6\u548c\u6587\u4ef6\u5939\n")),(0,l.kt)("h2",{id:"35-\u62f7\u8d1d\u76ee\u5f55cp"},"3.5 \u62f7\u8d1d\u76ee\u5f55\uff08cp\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  cp /usr/tmp/tool /opt       //\u5c06/usr/tmp\u76ee\u5f55\u4e0b\u7684tool\u76ee\u5f55\u590d\u5236\u5230 /opt\u76ee\u5f55\u4e0b\u9762\n  cp -r /usr/tmp/tool /opt    //\u9012\u5f52\u526a\u590d\u5236\u76ee\u5f55\u4e2d\u6240\u6709\u6587\u4ef6\u548c\u6587\u4ef6\u5939\n")),(0,l.kt)("h2",{id:"36-\u641c\u7d22\u76ee\u5f55find"},"3.6 \u641c\u7d22\u76ee\u5f55\uff08find\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  find /bin -name 'a*'        //\u67e5\u627e/bin\u76ee\u5f55\u4e0b\u7684\u6240\u6709\u4ee5a\u5f00\u5934\u7684\u6587\u4ef6\u6216\u8005\u76ee\u5f55\n")),(0,l.kt)("h2",{id:"37-\u67e5\u770b\u5f53\u524d\u76ee\u5f55pwd"},"3.7 \u67e5\u770b\u5f53\u524d\u76ee\u5f55\uff08pwd\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  pwd                         //\u663e\u793a\u5f53\u524d\u4f4d\u7f6e\u8def\u5f84\n")),(0,l.kt)("h1",{id:"\u56db\u6587\u4ef6\u64cd\u4f5c"},"\u56db\u3001\u6587\u4ef6\u64cd\u4f5c"),(0,l.kt)("h2",{id:"41-\u65b0\u589e\u6587\u4ef6touch"},"4.1 \u65b0\u589e\u6587\u4ef6\uff08touch\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"   touch  a.txt         //\u5728\u5f53\u524d\u76ee\u5f55\u4e0b\u521b\u5efa\u540d\u4e3aa\u7684txt\u6587\u4ef6\uff08\u6587\u4ef6\u4e0d\u5b58\u5728\uff09\uff0c\u5982\u679c\u6587\u4ef6\u5b58\u5728\uff0c\u5c06\u6587\u4ef6\u65f6\u95f4\u5c5e\u6027\u4fee\u6539\u4e3a\u5f53\u524d\u7cfb\u7edf\u65f6\u95f4\n")),(0,l.kt)("h2",{id:"42-\u5220\u9664\u6587\u4ef6rm"},(0,l.kt)("a",{parentName:"h2",href:"http://mp.weixin.qq.com/s?__biz=MzIxMTA2ODE1OQ==&mid=2651147116&idx=1&sn=1ca69d1ba2d645dcdc278b6aed63caf1&chksm=8cab1efcbbdc97ea21fbb696c83527fac5847ad4b7ecfbbad7b55e2a030aacb16c1ffa76c53c&scene=21#wechat_redirect"},"4.2 \u5220\u9664\u6587\u4ef6\uff08rm\uff09")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  rm \u6587\u4ef6\u540d              //\u5220\u9664\u5f53\u524d\u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\n  rm -f \u6587\u4ef6\u540d           //\u5220\u9664\u5f53\u524d\u76ee\u5f55\u7684\u7684\u6587\u4ef6\uff08\u4e0d\u8be2\u95ee\uff09\n")),(0,l.kt)("h2",{id:"43-\u7f16\u8f91\u6587\u4ef6vivim"},"4.3 \u7f16\u8f91\u6587\u4ef6\uff08vi\u3001vim\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'  vi \u6587\u4ef6\u540d              //\u6253\u5f00\u9700\u8981\u7f16\u8f91\u7684\u6587\u4ef6\n  --\u8fdb\u5165\u540e\uff0c\u64cd\u4f5c\u754c\u9762\u6709\u4e09\u79cd\u6a21\u5f0f\uff1a\u547d\u4ee4\u6a21\u5f0f\uff08command mode\uff09\u3001\u63d2\u5165\u6a21\u5f0f\uff08Insert mode\uff09\u548c\u5e95\u884c\u6a21\u5f0f\uff08last line mode\uff09\n  \u547d\u4ee4\u6a21\u5f0f\n  -\u521a\u8fdb\u5165\u6587\u4ef6\u5c31\u662f\u547d\u4ee4\u6a21\u5f0f\uff0c\u901a\u8fc7\u65b9\u5411\u952e\u63a7\u5236\u5149\u6807\u4f4d\u7f6e\uff0c\n  -\u4f7f\u7528\u547d\u4ee4"dd"\u5220\u9664\u5f53\u524d\u6574\u884c\n  -\u4f7f\u7528\u547d\u4ee4"/\u5b57\u6bb5"\u8fdb\u884c\u67e5\u627e\n  -\u6309"i"\u5728\u5149\u6807\u6240\u5728\u5b57\u7b26\u524d\u5f00\u59cb\u63d2\u5165\n  -\u6309"a"\u5728\u5149\u6807\u6240\u5728\u5b57\u7b26\u540e\u5f00\u59cb\u63d2\u5165\n  -\u6309"o"\u5728\u5149\u6807\u6240\u5728\u884c\u7684\u4e0b\u9762\u53e6\u8d77\u4e00\u65b0\u884c\u63d2\u5165\n  -\u6309"\uff1a"\u8fdb\u5165\u5e95\u884c\u6a21\u5f0f\n  \u63d2\u5165\u6a21\u5f0f\n  -\u6b64\u65f6\u53ef\u4ee5\u5bf9\u6587\u4ef6\u5185\u5bb9\u8fdb\u884c\u7f16\u8f91\uff0c\u5de6\u4e0b\u89d2\u4f1a\u663e\u793a "-- \u63d2\u5165 --""\n  -\u6309"ESC"\u8fdb\u5165\u5e95\u884c\u6a21\u5f0f\n  \u5e95\u884c\u6a21\u5f0f\n  -\u9000\u51fa\u7f16\u8f91\uff1a      :q\n  -\u5f3a\u5236\u9000\u51fa\uff1a      :q!\n  -\u4fdd\u5b58\u5e76\u9000\u51fa\uff1a    :wq\n  ## \u64cd\u4f5c\u6b65\u9aa4\u793a\u4f8b ##\n  1.\u4fdd\u5b58\u6587\u4ef6\uff1a\u6309"ESC" -> \u8f93\u5165":" -> \u8f93\u5165"wq",\u56de\u8f66     //\u4fdd\u5b58\u5e76\u9000\u51fa\u7f16\u8f91\n  2.\u53d6\u6d88\u64cd\u4f5c\uff1a\u6309"ESC" -> \u8f93\u5165":" -> \u8f93\u5165"q!",\u56de\u8f66     //\u64a4\u9500\u672c\u6b21\u4fee\u6539\u5e76\u9000\u51fa\u7f16\u8f91\n  ## \u8865\u5145 ##\n  vim +10 filename.txt                   //\u6253\u5f00\u6587\u4ef6\u5e76\u8df3\u5230\u7b2c10\u884c\n  vim -R /etc/passwd                     //\u4ee5\u53ea\u8bfb\u6a21\u5f0f\u6253\u5f00\u6587\u4ef6\n')),(0,l.kt)("h2",{id:"44-\u67e5\u770b\u6587\u4ef6"},"4.4 \u67e5\u770b\u6587\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'  cat a.txt          //\u67e5\u770b\u6587\u4ef6\u6700\u540e\u4e00\u5c4f\u5185\u5bb9\n  less a.txt         //PgUp\u5411\u4e0a\u7ffb\u9875\uff0cPgDn\u5411\u4e0b\u7ffb\u9875\uff0c"q"\u9000\u51fa\u67e5\u770b\n  more a.txt         //\u663e\u793a\u767e\u5206\u6bd4\uff0c\u56de\u8f66\u67e5\u770b\u4e0b\u4e00\u884c\uff0c\u7a7a\u683c\u67e5\u770b\u4e0b\u4e00\u9875\uff0c"q"\u9000\u51fa\u67e5\u770b\n  tail -100 a.txt    //\u67e5\u770b\u6587\u4ef6\u7684\u540e100\u884c\uff0c"Ctrl+C"\u9000\u51fa\u67e5\u770b\n')),(0,l.kt)("h1",{id:"\u4e94\u6587\u4ef6\u6743\u9650"},"\u4e94\u3001\u6587\u4ef6\u6743\u9650"),(0,l.kt)("h2",{id:"51-\u6743\u9650\u8bf4\u660e"},"5.1 \u6743\u9650\u8bf4\u660e"),(0,l.kt)("p",null,"10T \u6280\u672f\u8d44\u6e90\u5927\u653e\u9001\uff01\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\uff1aLinux\u3001\u865a\u62df\u5316\u3001\u5bb9\u5668\u3001\u4e91\u8ba1\u7b97\u3001\u7f51\u7edc\u3001Python\u3001Go \u7b49\u3002\u5728\u5f00\u6e90Linux\u516c\u4f17\u53f7\u5185\u56de\u590d\u300c10T\u300d\uff0c\u5373\u53ef\u514d\u8d39\u83b7\u53d6\uff01"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  \u6587\u4ef6\u6743\u9650\u7b80\u4ecb\uff1a'r' \u4ee3\u8868\u53ef\u8bfb\uff084\uff09\uff0c'w' \u4ee3\u8868\u53ef\u5199\uff082\uff09\uff0c'x' \u4ee3\u8868\u6267\u884c\u6743\u9650\uff081\uff09\uff0c\u62ec\u53f7\u5185\u4ee3\u8868\"8421\u6cd5\"\n  ##\u6587\u4ef6\u6743\u9650\u4fe1\u606f\u793a\u4f8b\uff1a-rwxrw-r--\n  -\u7b2c\u4e00\u4f4d\uff1a'-'\u5c31\u4ee3\u8868\u662f\u6587\u4ef6\uff0c'd'\u4ee3\u8868\u662f\u6587\u4ef6\u5939\n  -\u7b2c\u4e00\u7ec4\u4e09\u4f4d\uff1a\u62e5\u6709\u8005\u7684\u6743\u9650\n  -\u7b2c\u4e8c\u7ec4\u4e09\u4f4d\uff1a\u62e5\u6709\u8005\u6240\u5728\u7684\u7ec4\uff0c\u7ec4\u5458\u7684\u6743\u9650\n  -\u7b2c\u4e09\u7ec4\u4e09\u4f4d\uff1a\u4ee3\u8868\u7684\u662f\u5176\u4ed6\u7528\u6237\u7684\u6743\u9650\n")),(0,l.kt)("h2",{id:"52-\u6587\u4ef6\u6743\u9650"},"5.2 \u6587\u4ef6\u6743\u9650"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'  \u666e\u901a\u6388\u6743    chmod +x a.txt    \n  8421\u6cd5     chmod 777 a.txt     //1+2+4=7\uff0c"7"\u8bf4\u660e\u6388\u4e88\u6240\u6709\u6743\u9650\n')),(0,l.kt)("h1",{id:"\u516d\u6253\u5305\u4e0e\u89e3\u538b"},"\u516d\u3001\u6253\u5305\u4e0e\u89e3\u538b"),(0,l.kt)("h2",{id:"61-\u8bf4\u660e"},"6.1 \u8bf4\u660e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  .zip\u3001.rar        //windows\u7cfb\u7edf\u4e2d\u538b\u7f29\u6587\u4ef6\u7684\u6269\u5c55\u540d\n  .tar              //Linux\u4e2d\u6253\u5305\u6587\u4ef6\u7684\u6269\u5c55\u540d\n  .gz               //Linux\u4e2d\u538b\u7f29\u6587\u4ef6\u7684\u6269\u5c55\u540d\n  .tar.gz           //Linux\u4e2d\u6253\u5305\u5e76\u538b\u7f29\u6587\u4ef6\u7684\u6269\u5c55\u540d\n")),(0,l.kt)("h2",{id:"62-\u6253\u5305\u6587\u4ef6"},"6.2 \u6253\u5305\u6587\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  tar -zcvf \u6253\u5305\u538b\u7f29\u540e\u7684\u6587\u4ef6\u540d \u8981\u6253\u5305\u7684\u6587\u4ef6\n  \u53c2\u6570\u8bf4\u660e\uff1az\uff1a\u8c03\u7528gzip\u538b\u7f29\u547d\u4ee4\u8fdb\u884c\u538b\u7f29; c\uff1a\u6253\u5305\u6587\u4ef6; v\uff1a\u663e\u793a\u8fd0\u884c\u8fc7\u7a0b; f\uff1a\u6307\u5b9a\u6587\u4ef6\u540d;\n  \u793a\u4f8b\uff1a\n  tar -zcvf a.tar file1 file2,...      //\u591a\u4e2a\u6587\u4ef6\u538b\u7f29\u6253\u5305\n")),(0,l.kt)("h2",{id:"63-\u89e3\u538b\u6587\u4ef6"},"6.3 \u89e3\u538b\u6587\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  tar -zxvf a.tar                      //\u89e3\u5305\u81f3\u5f53\u524d\u76ee\u5f55\n  tar -zxvf a.tar -C /usr------        //\u6307\u5b9a\u89e3\u538b\u7684\u4f4d\u7f6e\n  unzip test.zip             //\u89e3\u538b*.zip\u6587\u4ef6 \n  unzip -l test.zip          //\u67e5\u770b*.zip\u6587\u4ef6\u7684\u5185\u5bb9 \n")),(0,l.kt)("h1",{id:"\u4e03\u5176\u4ed6\u5e38\u7528\u547d\u4ee4"},(0,l.kt)("a",{parentName:"h1",href:"http://mp.weixin.qq.com/s?__biz=MzIxMTA2ODE1OQ==&mid=2651147248&idx=1&sn=692e13eb72cdf1fbec5db04c7b50a9f5&chksm=8cab1e60bbdc9776c34e9ca435d5cb87d8f1eb0724e755074e112cf4a23168031456d6ce9a4b&scene=21#wechat_redirect"},"\u4e03\u3001\u5176\u4ed6\u5e38\u7528\u547d\u4ee4")),(0,l.kt)("h2",{id:"71-find"},"7.1 find"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'  find . -name "*.c"     //\u5c06\u76ee\u524d\u76ee\u5f55\u53ca\u5176\u5b50\u76ee\u5f55\u4e0b\u6240\u6709\u5ef6\u4f38\u6863\u540d\u662f c \u7684\u6587\u4ef6\u5217\u51fa\u6765\n  find . -type f         //\u5c06\u76ee\u524d\u76ee\u5f55\u5176\u5176\u4e0b\u5b50\u76ee\u5f55\u4e2d\u6240\u6709\u4e00\u822c\u6587\u4ef6\u5217\u51fa\n  find . -ctime -20      //\u5c06\u76ee\u524d\u76ee\u5f55\u53ca\u5176\u5b50\u76ee\u5f55\u4e0b\u6240\u6709\u6700\u8fd1 20 \u5929\u5185\u66f4\u65b0\u8fc7\u7684\u6587\u4ef6\u5217\u51fa\n  find /var/log -type f -mtime +7 -ok rm {} \\;     //\u67e5\u627e/var/log\u76ee\u5f55\u4e2d\u66f4\u6539\u65f6\u95f4\u57287\u65e5\u4ee5\u524d\u7684\u666e\u901a\u6587\u4ef6\uff0c\u5e76\u5728\u5220\u9664\u4e4b\u524d\u8be2\u95ee\u5b83\u4eec\n  find . -type f -perm 644 -exec ls -l {} \\;       //\u67e5\u627e\u524d\u76ee\u5f55\u4e2d\u6587\u4ef6\u5c5e\u4e3b\u5177\u6709\u8bfb\u3001\u5199\u6743\u9650\uff0c\u5e76\u4e14\u6587\u4ef6\u6240\u5c5e\u7ec4\u7684\u7528\u6237\u548c\u5176\u4ed6\u7528\u6237\u5177\u6709\u8bfb\u6743\u9650\u7684\u6587\u4ef6\n  find / -type f -size 0 -exec ls -l {} \\;         //\u4e3a\u4e86\u67e5\u627e\u7cfb\u7edf\u4e2d\u6240\u6709\u6587\u4ef6\u957f\u5ea6\u4e3a0\u7684\u666e\u901a\u6587\u4ef6\uff0c\u5e76\u5217\u51fa\u5b83\u4eec\u7684\u5b8c\u6574\u8def\u5f84\n')),(0,l.kt)("h2",{id:"72-whereis"},"7.2 whereis"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  whereis ls             //\u5c06\u548cls\u6587\u4ef6\u76f8\u5173\u7684\u6587\u4ef6\u90fd\u67e5\u627e\u51fa\u6765\n")),(0,l.kt)("h2",{id:"73-which"},"7.3 which"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'  \u8bf4\u660e\uff1awhich\u6307\u4ee4\u4f1a\u5728\u73af\u5883\u53d8\u91cf$PATH\u8bbe\u7f6e\u7684\u76ee\u5f55\u91cc\u67e5\u627e\u7b26\u5408\u6761\u4ef6\u7684\u6587\u4ef6\u3002\n  which bash             //\u67e5\u770b\u6307\u4ee4"bash"\u7684\u7edd\u5bf9\u8def\u5f84\n')),(0,l.kt)("h2",{id:"74-sudo"},"7.4 sudo"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  \u8bf4\u660e\uff1asudo\u547d\u4ee4\u4ee5\u7cfb\u7edf\u7ba1\u7406\u8005\u7684\u8eab\u4efd\u6267\u884c\u6307\u4ee4\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u7ecf\u7531 sudo \u6240\u6267\u884c\u7684\u6307\u4ee4\u5c31\u597d\u50cf\u662f root \u4eb2\u81ea\u6267\u884c\u3002\u9700\u8981\u8f93\u5165\u81ea\u5df1\u8d26\u6237\u5bc6\u7801\u3002\n  \u4f7f\u7528\u6743\u9650\uff1a\u5728 /etc/sudoers \u4e2d\u6709\u51fa\u73b0\u7684\u4f7f\u7528\u8005\n  sudo -l                              //\u5217\u51fa\u76ee\u524d\u7684\u6743\u9650\n  $ sudo -u yao vi ~www/index.html    //\u4ee5 yao \u7528\u6237\u8eab\u4efd\u7f16\u8f91  home \u76ee\u5f55\u4e0bwww\u76ee\u5f55\u4e2d\u7684 index.html \u6587\u4ef6\n")),(0,l.kt)("h2",{id:"75-grep"},"7.5 grep"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'  grep -i "the" demo_file              //\u5728\u6587\u4ef6\u4e2d\u67e5\u627e\u5b57\u7b26\u4e32(\u4e0d\u533a\u5206\u5927\u5c0f\u5199)\n  grep -A 3 -i "example" demo_text     //\u8f93\u51fa\u6210\u529f\u5339\u914d\u7684\u884c\uff0c\u4ee5\u53ca\u8be5\u884c\u4e4b\u540e\u7684\u4e09\u884c\n  grep -r "ramesh" *                   //\u5728\u4e00\u4e2a\u6587\u4ef6\u5939\u4e2d\u9012\u5f52\u67e5\u8be2\u5305\u542b\u6307\u5b9a\u5b57\u7b26\u4e32\u7684\u6587\u4ef6\n')),(0,l.kt)("h2",{id:"76-service"},"7.6 service"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  \u8bf4\u660e\uff1aservice\u547d\u4ee4\u7528\u4e8e\u8fd0\u884cSystem V init\u811a\u672c\uff0c\u8fd9\u4e9b\u811a\u672c\u4e00\u822c\u4f4d\u4e8e/etc/init.d\u6587\u4ef6\u4e0b\uff0c\u8fd9\u4e2a\u547d\u4ee4\u53ef\u4ee5\u76f4\u63a5\u8fd0\u884c\u8fd9\u4e2a\u6587\u4ef6\u5939\u91cc\u9762\u7684\u811a\u672c\uff0c\u800c\u4e0d\u7528\u52a0\u4e0a\u8def\u5f84\n  service ssh status      //\u67e5\u770b\u670d\u52a1\u72b6\u6001 \n  service --status-all    //\u67e5\u770b\u6240\u6709\u670d\u52a1\u72b6\u6001 \n  service ssh restart     //\u91cd\u542f\u670d\u52a1 \u8fd0\u7ef4\u6f2b\u8c08\n")),(0,l.kt)("h2",{id:"77-free"},"7.7 free"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  \u8bf4\u660e\uff1a\u8fd9\u4e2a\u547d\u4ee4\u7528\u4e8e\u663e\u793a\u7cfb\u7edf\u5f53\u524d\u5185\u5b58\u7684\u4f7f\u7528\u60c5\u51b5\uff0c\u5305\u62ec\u5df2\u7528\u5185\u5b58\u3001\u53ef\u7528\u5185\u5b58\u548c\u4ea4\u6362\u5185\u5b58\u7684\u60c5\u51b5 \n  free -g            //\u4ee5G\u4e3a\u5355\u4f4d\u8f93\u51fa\u5185\u5b58\u7684\u4f7f\u7528\u91cf\uff0c-g\u4e3aGB\uff0c-m\u4e3aMB\uff0c-k\u4e3aKB\uff0c-b\u4e3a\u5b57\u8282 \n  free -t            //\u67e5\u770b\u6240\u6709\u5185\u5b58\u7684\u6c47\u603b\n")),(0,l.kt)("h2",{id:"78-top"},"7.8 top"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  top               //\u663e\u793a\u5f53\u524d\u7cfb\u7edf\u4e2d\u5360\u7528\u8d44\u6e90\u6700\u591a\u7684\u4e00\u4e9b\u8fdb\u7a0b, shift+m \u6309\u7167\u5185\u5b58\u5927\u5c0f\u67e5\u770b\n")),(0,l.kt)("h2",{id:"79-df"},"7.9 df"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  \u8bf4\u660e\uff1a\u663e\u793a\u6587\u4ef6\u7cfb\u7edf\u7684\u78c1\u76d8\u4f7f\u7528\u60c5\u51b5\n  df -h            //\u4e00\u79cd\u6613\u770b\u7684\u663e\u793a\n")),(0,l.kt)("h2",{id:"710-mount"},"7.10 mount"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  mount /dev/sdb1 /u01              //\u6302\u8f7d\u4e00\u4e2a\u6587\u4ef6\u7cfb\u7edf\uff0c\u9700\u8981\u5148\u521b\u5efa\u4e00\u4e2a\u76ee\u5f55\uff0c\u7136\u540e\u5c06\u8fd9\u4e2a\u6587\u4ef6\u7cfb\u7edf\u6302\u8f7d\u5230\u8fd9\u4e2a\u76ee\u5f55\u4e0a\n  dev/sdb1 /u01 ext2 defaults 0 2   //\u6dfb\u52a0\u5230fstab\u4e2d\u8fdb\u884c\u81ea\u52a8\u6302\u8f7d\uff0c\u8fd9\u6837\u4efb\u4f55\u65f6\u5019\u7cfb\u7edf\u91cd\u542f\u7684\u65f6\u5019\uff0c\u6587\u4ef6\u7cfb\u7edf\u90fd\u4f1a\u88ab\u52a0\u8f7d \n")),(0,l.kt)("h2",{id:"711-uname"},"7.11 uname"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  \u8bf4\u660e\uff1auname\u53ef\u4ee5\u663e\u793a\u4e00\u4e9b\u91cd\u8981\u7684\u7cfb\u7edf\u4fe1\u606f\uff0c\u4f8b\u5982\u5185\u6838\u540d\u79f0\u3001\u4e3b\u673a\u540d\u3001\u5185\u6838\u7248\u672c\u53f7\u3001\u5904\u7406\u5668\u7c7b\u578b\u4e4b\u7c7b\u7684\u4fe1\u606f \n  uname -a\n")),(0,l.kt)("h2",{id:"712-yum"},"7.12 yum"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  \u8bf4\u660e\uff1a\u5b89\u88c5\u63d2\u4ef6\u547d\u4ee4\n  yum install httpd      //\u4f7f\u7528yum\u5b89\u88c5apache \n  yum update httpd       //\u66f4\u65b0apache \n  yum remove httpd       //\u5378\u8f7d/\u5220\u9664apache \n")),(0,l.kt)("h2",{id:"713-rpm"},"7.13 rpm"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  \u8bf4\u660e\uff1a\u63d2\u4ef6\u5b89\u88c5\u547d\u4ee4\n  rpm -ivh httpd-2.2.3-22.0.1.el5.i386.rpm      //\u4f7f\u7528rpm\u6587\u4ef6\u5b89\u88c5apache \n  rpm -uvh httpd-2.2.3-22.0.1.el5.i386.rpm      //\u4f7f\u7528rpm\u66f4\u65b0apache \n  rpm -ev httpd                                 //\u5378\u8f7d/\u5220\u9664apache \n")),(0,l.kt)("h2",{id:"714-date"},"7.14 date"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'  date -s "01/31/2010 23:59:53"   ///\u8bbe\u7f6e\u7cfb\u7edf\u65f6\u95f4\n')),(0,l.kt)("h2",{id:"715-wget"},"7.15 wget"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  \u8bf4\u660e\uff1a\u4f7f\u7528wget\u4ece\u7f51\u4e0a\u4e0b\u8f7d\u8f6f\u4ef6\u3001\u97f3\u4e50\u3001\u89c6\u9891 \n  \u793a\u4f8b\uff1awget http://www.wljslmz.cn/sourceforge/nagios/nagios-3.2.1.tar.gz\n  //\u4e0b\u8f7d\u6587\u4ef6\u5e76\u4ee5\u6307\u5b9a\u7684\u6587\u4ef6\u540d\u4fdd\u5b58\u6587\u4ef6\n  wget -O nagios.tar.gz http://www.wljslmz.cn/sourceforge/nagios/nagios-3.2.1.tar.gz\n")),(0,l.kt)("h2",{id:"716-ftp"},"7.16 ftp"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"   ftp IP/hostname    //\u8bbf\u95eeftp\u670d\u52a1\u5668\n   mls *.html -       //\u663e\u793a\u8fdc\u7a0b\u4e3b\u673a\u4e0a\u6587\u4ef6\u5217\u8868\n")),(0,l.kt)("h2",{id:"717-scp"},"7.17 scp"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"}," scp /opt/data.txt  192.168.1.101:/opt/    //\u5c06\u672c\u5730opt\u76ee\u5f55\u4e0b\u7684data\u6587\u4ef6\u53d1\u9001\u5230192.168.1.101\u670d\u52a1\u5668\u7684opt\u76ee\u5f55\u4e0b\n")),(0,l.kt)("h1",{id:"\u516b\u7cfb\u7edf\u7ba1\u7406"},"\u516b\u3001\u7cfb\u7edf\u7ba1\u7406"),(0,l.kt)("h2",{id:"81-\u9632\u706b\u5899\u64cd\u4f5c"},"8.1 \u9632\u706b\u5899\u64cd\u4f5c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  service iptables status      //\u67e5\u770biptables\u670d\u52a1\u7684\u72b6\u6001\n  service iptables start       //\u5f00\u542fiptables\u670d\u52a1\n  service iptables stop        //\u505c\u6b62iptables\u670d\u52a1\n  service iptables restart     //\u91cd\u542fiptables\u670d\u52a1\n  chkconfig iptables off       //\u5173\u95ediptables\u670d\u52a1\u7684\u5f00\u673a\u81ea\u542f\u52a8\n  chkconfig iptables on        //\u5f00\u542fiptables\u670d\u52a1\u7684\u5f00\u673a\u81ea\u542f\u52a8\n  ##centos7 \u9632\u706b\u5899\u64cd\u4f5c\n  systemctl status firewalld.service     //\u67e5\u770b\u9632\u706b\u5899\u72b6\u6001\n  systemctl stop firewalld.service       //\u5173\u95ed\u8fd0\u884c\u7684\u9632\u706b\u5899\n  systemctl disable firewalld.service    //\u6c38\u4e45\u7981\u6b62\u9632\u706b\u5899\u670d\u52a1\n")),(0,l.kt)("h2",{id:"82-\u4fee\u6539\u4e3b\u673a\u540dcentos-7"},"8.2 \u4fee\u6539\u4e3b\u673a\u540d\uff08CentOS 7\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  hostnamectl set-hostname \u4e3b\u673a\u540d\n")),(0,l.kt)("h2",{id:"83-\u67e5\u770b\u7f51\u7edc"},"8.3 \u67e5\u770b\u7f51\u7edc"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  ifconfig\n")),(0,l.kt)("h2",{id:"84-\u4fee\u6539ip"},"8.4 \u4fee\u6539IP"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  \u4fee\u6539\u7f51\u7edc\u914d\u7f6e\u6587\u4ef6\uff0c\u6587\u4ef6\u5730\u5740\uff1a/etc/sysconfig/network-scripts/ifcfg-eth0\n  ------------------------------------------------\n  \u4e3b\u8981\u4fee\u6539\u4ee5\u4e0b\u914d\u7f6e\uff1a  \n  TYPE=Ethernet               //\u7f51\u7edc\u7c7b\u578b\n  BOOTPROTO=static            //\u9759\u6001IP\n  DEVICE=ens00                //\u7f51\u5361\u540d\n  IPADDR=192.168.1.100        //\u8bbe\u7f6e\u7684IP\n  NETMASK=255.255.255.0       //\u5b50\u7f51\u63a9\u7801\n  GATEWAY=192.168.1.1         //\u7f51\u5173\n  DNS1=192.168.1.1            //DNS\n  DNS2=8.8.8.8                //\u5907\u7528DNS\n  ONBOOT=yes                  //\u7cfb\u7edf\u542f\u52a8\u65f6\u542f\u52a8\u6b64\u8bbe\u7f6e\n  -------------------------------------------------\n  \u4fee\u6539\u4fdd\u5b58\u4ee5\u540e\u4f7f\u7528\u547d\u4ee4\u91cd\u542f\u7f51\u5361\uff1aservice network restart\n")),(0,l.kt)("h2",{id:"85-\u914d\u7f6e\u6620\u5c04"},"8.5 \u914d\u7f6e\u6620\u5c04"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  \u4fee\u6539\u6587\u4ef6\uff1avi /etc/hosts\n  \u5728\u6587\u4ef6\u6700\u540e\u6dfb\u52a0\u6620\u5c04\u5730\u5740\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a\n   192.168.1.101  node1\n   192.168.1.102  node2\n   192.168.1.103  node3\n  \u914d\u7f6e\u597d\u4ee5\u540e\u4fdd\u5b58\u9000\u51fa\uff0c\u8f93\u5165\u547d\u4ee4\uff1aping node1 \uff0c\u53ef\u89c1\u5b9e\u9645 ping \u7684\u662f 192.168.1.101\u3002\n")),(0,l.kt)("h2",{id:"86-\u67e5\u770b\u8fdb\u7a0b"},"8.6 \u67e5\u770b\u8fdb\u7a0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  ps -ef         //\u67e5\u770b\u6240\u6709\u6b63\u5728\u8fd0\u884c\u7684\u8fdb\u7a0b\n")),(0,l.kt)("h2",{id:"87-\u7ed3\u675f\u8fdb\u7a0b"},"8.7 \u7ed3\u675f\u8fdb\u7a0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  kill pid       //\u6740\u6b7b\u8be5pid\u7684\u8fdb\u7a0b\n  kill -9 pid    //\u5f3a\u5236\u6740\u6b7b\u8be5\u8fdb\u7a0b   \n")),(0,l.kt)("h2",{id:"88-\u67e5\u770b\u94fe\u63a5"},"8.8 \u67e5\u770b\u94fe\u63a5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  ping IP        //\u67e5\u770b\u4e0e\u6b64IP\u5730\u5740\u7684\u8fde\u63a5\u60c5\u51b5\n  netstat -an    //\u67e5\u770b\u5f53\u524d\u7cfb\u7edf\u7aef\u53e3\n  netstat -an | grep 8080     //\u67e5\u770b\u6307\u5b9a\u7aef\u53e3\n")),(0,l.kt)("h2",{id:"89-\u5feb\u901f\u6e05\u5c4f"},"8.9 \u5feb\u901f\u6e05\u5c4f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  ctrl+l        //\u6e05\u5c4f\uff0c\u5f80\u4e0a\u7ffb\u53ef\u4ee5\u67e5\u770b\u5386\u53f2\u64cd\u4f5c\n")),(0,l.kt)("h2",{id:"810-\u8fdc\u7a0b\u4e3b\u673a"},"8.10 \u8fdc\u7a0b\u4e3b\u673a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  ssh IP       //\u8fdc\u7a0b\u4e3b\u673a\uff0c\u9700\u8981\u8f93\u5165\u7528\u6237\u540d\u548c\u5bc6\u7801\n")))}m.isMDXComponent=!0}}]);