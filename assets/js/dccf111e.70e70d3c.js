"use strict";(self.webpackChunkhijulien=self.webpackChunkhijulien||[]).push([[8458],{65431:i=>{i.exports=JSON.parse('{"pluginId":"others","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"others":[{"type":"category","label":"Git","items":[{"type":"link","label":"Git","href":"/hijulien/others/Git/","docId":"Git/Git"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Http","items":[{"type":"link","label":"Http","href":"/hijulien/others/Http/","docId":"Http/Http"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Cookie","items":[{"type":"link","label":"Cookie","href":"/hijulien/others/Cookie/","docId":"Cookie/Cookie"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Regular","items":[{"type":"link","label":"Regular","href":"/hijulien/others/Regular/","docId":"Regular/Regular"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Nginx","items":[{"type":"link","label":"Nginx","href":"/hijulien/others/Nginx/","docId":"Nginx/Nginx"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Identification","items":[{"type":"link","label":"Identification","href":"/hijulien/others/Identification/","docId":"Identification/Identification"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Bash","items":[{"type":"link","label":"\u7b80\u4ecb","href":"/hijulien/others/Bash/intro","docId":"Bash/intro"},{"type":"link","label":"\u57fa\u672c\u8bed\u6cd5","href":"/hijulien/others/Bash/grammar","docId":"Bash/grammar"},{"type":"link","label":"\u6a21\u5f0f\u6269\u5c55","href":"/hijulien/others/Bash/expansion","docId":"Bash/expansion"},{"type":"link","label":"\u5f15\u53f7\u548c\u8f6c\u4e49","href":"/hijulien/others/Bash/quotation","docId":"Bash/quotation"},{"type":"link","label":"\u53d8\u91cf","href":"/hijulien/others/Bash/variable","docId":"Bash/variable"},{"type":"link","label":"\u5b57\u7b26\u4e32\u64cd\u4f5c","href":"/hijulien/others/Bash/string","docId":"Bash/string"},{"type":"link","label":"\u7b97\u672f\u8fd0\u7b97","href":"/hijulien/others/Bash/arithmetic","docId":"Bash/arithmetic"},{"type":"link","label":"\u884c\u64cd\u4f5c","href":"/hijulien/others/Bash/readline","docId":"Bash/readline"},{"type":"link","label":"\u76ee\u5f55\u5806\u6808","href":"/hijulien/others/Bash/stack","docId":"Bash/stack"},{"type":"link","label":"\u811a\u672c\u5165\u95e8","href":"/hijulien/others/Bash/script","docId":"Bash/script"},{"type":"link","label":"read \u547d\u4ee4","href":"/hijulien/others/Bash/read","docId":"Bash/read"},{"type":"link","label":"\u6761\u4ef6\u5224\u65ad","href":"/hijulien/others/Bash/condition","docId":"Bash/condition"},{"type":"link","label":"\u5faa\u73af","href":"/hijulien/others/Bash/loop","docId":"Bash/loop"},{"type":"link","label":"\u51fd\u6570","href":"/hijulien/others/Bash/function","docId":"Bash/function"},{"type":"link","label":"\u6570\u7ec4","href":"/hijulien/others/Bash/array","docId":"Bash/array"},{"type":"link","label":"set \u547d\u4ee4\uff0cshopt \u547d\u4ee4","href":"/hijulien/others/Bash/set","docId":"Bash/set"},{"type":"link","label":"\u811a\u672c\u9664\u9519","href":"/hijulien/others/Bash/debug","docId":"Bash/debug"},{"type":"link","label":"mktemp \u547d\u4ee4\uff0ctrap \u547d\u4ee4","href":"/hijulien/others/Bash/mktemp","docId":"Bash/mktemp"},{"type":"link","label":"\u542f\u52a8\u73af\u5883","href":"/hijulien/others/Bash/startup","docId":"Bash/startup"},{"type":"link","label":"\u547d\u4ee4\u63d0\u793a\u7b26","href":"/hijulien/others/Bash/prompt","docId":"Bash/prompt"}],"collapsed":true,"collapsible":true}]},"docs":{"Bash/archives/archiving":{"id":"Bash/archives/archiving","title":"\u5f52\u6863\u548c\u5907\u4efd","description":"gzip"},"Bash/archives/async":{"id":"Bash/archives/async","title":"\u5f02\u6b65\u4efb\u52a1","description":"Bash\u811a\u672c\u6709\u65f6\u5019\u9700\u8981\u540c\u65f6\u6267\u884c\u591a\u4e2a\u4efb\u52a1\u3002\u901a\u5e38\u8fd9\u6d89\u53ca\u5230\u542f\u52a8\u4e00\u4e2a\u811a\u672c\uff0c\u4f9d\u6b21\uff0c\u542f\u52a8\u4e00\u4e2a\u6216\u591a\u4e2a\u5b50\u811a\u672c\u6765\u6267\u884c\u989d\u5916\u7684\u4efb\u52a1\uff0c\u800c\u7236\u811a\u672c\u7ee7\u7eed\u8fd0\u884c\u3002\u7136\u800c\uff0c\u5f53\u4e00\u7cfb\u5217\u811a\u672c \u4ee5\u8fd9\u79cd\u65b9\u5f0f\u8fd0\u884c\u65f6\uff0c\u8981\u4fdd\u6301\u7236\u5b50\u811a\u672c\u4e4b\u95f4\u534f\u8c03\u5de5\u4f5c\uff0c\u4f1a\u6709\u4e00\u4e9b\u95ee\u9898\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u82e5\u7236\u811a\u672c\u6216\u5b50\u811a\u672c\u4f9d\u8d56\u4e8e\u53e6\u4e00\u65b9\uff0c\u5e76\u4e14 \u4e00\u4e2a\u811a\u672c\u5fc5\u987b\u7b49\u5f85\u53e6\u4e00\u4e2a\u811a\u672c\u7ed3\u675f\u4efb\u52a1\u4e4b\u540e\uff0c\u624d\u80fd\u5b8c\u6210\u5b83\u81ea\u5df1\u7684\u4efb\u52a1\uff0c\u8fd9\u5e94\u8be5\u600e\u4e48\u529e\uff1f"},"Bash/archives/command":{"id":"Bash/archives/command","title":"Shell \u7684\u547d\u4ee4","description":"\u547d\u4ee4\u7684\u7c7b\u522b"},"Bash/archives/commands/alias":{"id":"Bash/archives/commands/alias","title":"alias","description":"alias\u547d\u4ee4\u7528\u4e8e\u8bbe\u7f6e\u522b\u540d\u3002\u901a\u5e38\u7528\u4e8e\u5728 Bash \u8bbe\u7f6e\u6587\u4ef6\u4e2d\uff0c\u8bbe\u7f6e\u522b\u540d\u3002"},"Bash/archives/commands/awk":{"id":"Bash/archives/commands/awk","title":"awk","description":"awk\u662f\u5904\u7406\u6587\u672c\u6587\u4ef6\u7684\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\uff0c\u51e0\u4e4e\u6240\u6709 Linux \u7cfb\u7edf\u90fd\u81ea\u5e26\u8fd9\u4e2a\u7a0b\u5e8f\u3002"},"Bash/archives/commands/cal":{"id":"Bash/archives/commands/cal","title":"cal","description":"cal\u547d\u4ee4\u663e\u793a\u672c\u6708\u7684\u65e5\u5386\u3002"},"Bash/archives/commands/cat":{"id":"Bash/archives/commands/cat","title":"cat","description":"cat\u547d\u4ee4\u7528\u4e8e\u663e\u793a\u4e00\u4e2a\u6587\u672c\u6587\u4ef6\u7684\u5185\u5bb9\u3002"},"Bash/archives/commands/clear":{"id":"Bash/archives/commands/clear","title":"clear","description":"clear\u547d\u4ee4\u7528\u6765\u6e05\u9664\u5f53\u524d\u5c4f\u5e55\u7684\u663e\u793a\uff0c\u8fd0\u884c\u540e\u4f1a\u53ea\u7559\u4e0b\u4e00\u4e2a\u63d0\u793a\u7b26\u3002"},"Bash/archives/commands/cp":{"id":"Bash/archives/commands/cp","title":"cp \u547d\u4ee4","description":"cp\u547d\u4ee4\u7528\u4e8e\u590d\u5236\u6587\u4ef6\u3002"},"Bash/archives/commands/cut":{"id":"Bash/archives/commands/cut","title":"cut","description":"cut\u547d\u4ee4\u7528\u4e8e\u5728\u547d\u4ee4\u884c\u8f93\u51fa\u6587\u672c\u6587\u4ef6\u7684\u6307\u5b9a\u4f4d\u7f6e\u7684\u5185\u5bb9\u3002"},"Bash/archives/commands/date":{"id":"Bash/archives/commands/date","title":"date","description":"date\u547d\u4ee4\u663e\u793a\u5f53\u524d\u7684\u65e5\u671f\u548c\u65f6\u95f4\u3002"},"Bash/archives/commands/dd":{"id":"Bash/archives/commands/dd","title":"dd","description":"dd\u547d\u4ee4\u7528\u4e8e\u590d\u5236\u78c1\u76d8\u6216\u6587\u4ef6\u7cfb\u7edf\u3002"},"Bash/archives/commands/df":{"id":"Bash/archives/commands/df","title":"df","description":"df\u547d\u4ee4\u663e\u793a\u78c1\u76d8\u4fe1\u606f\u3002"},"Bash/archives/commands/du":{"id":"Bash/archives/commands/du","title":"du","description":"du\u547d\u4ee4\u663e\u793a\u67d0\u4e2a\u6587\u4ef6\u6216\u76ee\u5f55\u7684\u78c1\u76d8\u4f7f\u7528\u91cf\u3002"},"Bash/archives/commands/egrep":{"id":"Bash/archives/commands/egrep","title":"egrep","description":"egrep\u547d\u4ee4\u7528\u4e8e\u663e\u793a\u5339\u914d\u6b63\u5219\u6a21\u5f0f\u7684\u884c\uff0c\u4e0egrep -E\u547d\u4ee4\u7b49\u4ef7\u3002"},"Bash/archives/commands/export":{"id":"Bash/archives/commands/export","title":"export","description":"export\u547d\u4ee4\u7528\u4e8e\u5411\u5b50Shell\u8f93\u51fa\u53d8\u91cf\u3002"},"Bash/archives/commands/file":{"id":"Bash/archives/commands/file","title":"file","description":"file\u547d\u4ee4\u7528\u6765\u67e5\u770b\u67d0\u4e2a\u6587\u4ef6\u7684\u7c7b\u578b\u3002"},"Bash/archives/commands/find":{"id":"Bash/archives/commands/find","title":"find","description":"find\u547d\u4ee4\u7528\u4e8e\u5bfb\u627e\u6587\u4ef6\uff0c\u4f1a\u5305\u62ec\u5f53\u524d\u76ee\u5f55\u7684\u6240\u6709\u4e0b\u7ea7\u76ee\u5f55\u3002"},"Bash/archives/commands/fmt":{"id":"Bash/archives/commands/fmt","title":"fmt","description":"fmt\u547d\u4ee4\u7528\u4e8e\u5bf9\u6587\u672c\u6307\u5b9a\u6837\u5f0f\u3002"},"Bash/archives/commands/grep":{"id":"Bash/archives/commands/grep","title":"grep","description":"grep\u547d\u4ee4\u7528\u4e8e\u6587\u4ef6\u5185\u5bb9\u7684\u641c\u7d22\uff0c\u8fd4\u56de\u6240\u6709\u5339\u914d\u7684\u884c\u3002"},"Bash/archives/commands/gunzip":{"id":"Bash/archives/commands/gunzip","title":"gunzip","description":"gunzip\u547d\u4ee4\u7528\u4e8e\u89e3\u538bgzip\u547d\u4ee4\u538b\u7f29\u7684\u6587\u4ef6\u3002"},"Bash/archives/commands/gzcat":{"id":"Bash/archives/commands/gzcat","title":"gzcat","description":"gzcat\u547d\u4ee4\u7528\u4e8e\u67e5\u770b\u4e00\u4e2agz\u6587\u4ef6\uff0c\u4f46\u5e76\u4e0d\u5b9e\u9645\u89e3\u538b\u5b83\u3002"},"Bash/archives/commands/gzip":{"id":"Bash/archives/commands/gzip","title":"gzip","description":"gzip\u547d\u4ee4\u7528\u4e8e\u538b\u7f29\u6587\u4ef6\u3002"},"Bash/archives/commands/kill":{"id":"Bash/archives/commands/kill","title":"kill","description":"kill\u547d\u4ee4\u7528\u6237\u7ec8\u6b62\u6307\u5b9a\u8fdb\u7a0b\u3002"},"Bash/archives/commands/killall":{"id":"Bash/archives/commands/killall","title":"killall","description":"killall\u547d\u4ee4\u7ec8\u6b62\u7ed9\u5b9a\u540d\u5b57\u7684\u4e00\u7cfb\u5217\u76f8\u5173\u8fdb\u7a0b\u3002"},"Bash/archives/commands/last":{"id":"Bash/archives/commands/last","title":"last","description":"last\u547d\u4ee4\u663e\u793a\u7528\u6237\u767b\u5f55\u7cfb\u7edf\u7684\u8bb0\u5f55\u3002"},"Bash/archives/commands/lpq":{"id":"Bash/archives/commands/lpq","title":"lpq","description":"lpq\u547d\u4ee4\u663e\u793a\u6253\u5370\u673a\u961f\u5217\u3002"},"Bash/archives/commands/lpr":{"id":"Bash/archives/commands/lpr","title":"lpr","description":"lpr\u547d\u4ee4\u7528\u4e8e\u6253\u5370\u6587\u4ef6\u3002"},"Bash/archives/commands/ls":{"id":"Bash/archives/commands/ls","title":"ls","description":"ls\u547d\u4ee4\u7528\u4e8e\u5217\u51fa\u5f53\u524d\u76ee\u5f55\u91cc\u9762\u7684\u6587\u4ef6\u548c\u5b50\u76ee\u5f55\u3002"},"Bash/archives/commands/nl":{"id":"Bash/archives/commands/nl","title":"nl","description":"nl\u547d\u4ee4\u7528\u4e8e\u663e\u793a\u884c\u53f7\u3002"},"Bash/archives/commands/ps":{"id":"Bash/archives/commands/ps","title":"ps","description":"ps\u547d\u4ee4\u5217\u51fa\u5f53\u524d\u6b63\u5728\u6267\u884c\u7684\u8fdb\u7a0b\u4fe1\u606f\u3002"},"Bash/archives/commands/scp":{"id":"Bash/archives/commands/scp","title":"scp","description":"\u57fa\u672c\u7528\u6cd5"},"Bash/archives/commands/sed":{"id":"Bash/archives/commands/sed","title":"sed","description":"sed\u547d\u4ee4\u7528\u4e8e\u5bf9\u6587\u672c\u8fdb\u884c\u8fc7\u6ee4\u548c\u53d8\u5f62\u5904\u7406\u3002"},"Bash/archives/commands/sort":{"id":"Bash/archives/commands/sort","title":"sort","description":"sort\u547d\u4ee4\u7528\u4e8e\u6587\u672c\u6587\u4ef6\u7684\u6392\u5e8f\u3002"},"Bash/archives/commands/tr":{"id":"Bash/archives/commands/tr","title":"tr","description":"tr\u547d\u4ee4\u7528\u4e8e\u6309\u7167\u7ed9\u5b9a\u6a21\u5f0f\u8f6c\u6362\u6587\u672c\u3002"},"Bash/archives/commands/uname":{"id":"Bash/archives/commands/uname","title":"uname","description":"uname\u547d\u4ee4\u7528\u6765\u663e\u793a\u5185\u6838\u4fe1\u606f\u3002"},"Bash/archives/commands/uniq":{"id":"Bash/archives/commands/uniq","title":"uniq","description":"uniq\u7528\u4e8e\u8fc7\u6ee4\u6389\u91cd\u590d\u7684\u884c\uff0c\u8be5\u547d\u4ee4\u53ea\u5bf9\u6392\u5e8f\u540e\u7684\u6587\u4ef6\u6709\u6548\u3002"},"Bash/archives/commands/uptime":{"id":"Bash/archives/commands/uptime","title":"uptime","description":"uptime\u547d\u4ee4\u663e\u793a\u672c\u6b21\u5f00\u673a\u8fd0\u884c\u7684\u65f6\u95f4\u3002"},"Bash/archives/commands/w":{"id":"Bash/archives/commands/w","title":"w","description":"w\u547d\u4ee4\u663e\u793a\u5f53\u671f\u8c01\u5728\u7ebf\u3002"},"Bash/archives/commands/wc":{"id":"Bash/archives/commands/wc","title":"wc","description":"wc\u547d\u4ee4\u8fd4\u56de\u67d0\u4e2a\u6587\u4ef6\u7684\u884c\u6570\u3001\u8bcd\u6570\u548c\u5b57\u7b26\u6570\u3002"},"Bash/archives/commands/whereis":{"id":"Bash/archives/commands/whereis","title":"whereis","description":"whereis\u7528\u6765\u663e\u793a\u67d0\u4e2a\u547d\u4ee4\u7684\u4f4d\u7f6e\u3002\u5982\u679c\u6709\u591a\u4e2a\u7a0b\u5e8f\u7b26\u5408\u6761\u4ef6\uff0c\u4f1a\u5168\u90e8\u5217\u51fa\u3002"},"Bash/archives/commands/which":{"id":"Bash/archives/commands/which","title":"which","description":"which\u547d\u4ee4\u6839\u636ePATH\u73af\u5883\u53d8\u91cf\u6307\u5b9a\u7684\u987a\u5e8f\uff0c\u8fd4\u56de\u6700\u65e9\u53d1\u73b0\u67d0\u4e2a\u547d\u4ee4\u7684\u4f4d\u7f6e\u3002\u5373\u4e0d\u6307\u5b9a\u8def\u5f84\u65f6\uff0c\u5b9e\u9645\u6267\u884c\u7684\u547d\u4ee4\u7684\u5b8c\u6574\u8def\u5f84\u3002"},"Bash/archives/commands/who":{"id":"Bash/archives/commands/who","title":"who","description":"who\u547d\u4ee4\u663e\u793a\u5df2\u7ecf\u767b\u5f55\u7684\u7528\u6237\u3002"},"Bash/archives/file":{"id":"Bash/archives/file","title":"\u6587\u4ef6\u7cfb\u7edf","description":"pwd"},"Bash/archives/file-operation":{"id":"Bash/archives/file-operation","title":"\u6587\u4ef6\u64cd\u4f5c","description":"cp"},"Bash/archives/hardware":{"id":"Bash/archives/hardware","title":"\u786c\u4ef6\u64cd\u4f5c","description":"df"},"Bash/archives/host":{"id":"Bash/archives/host","title":"\u4e3b\u673a\u7ba1\u7406","description":"hostname\u547d\u4ee4"},"Bash/archives/named-pipe":{"id":"Bash/archives/named-pipe","title":"\u547d\u540d\u7ba1\u9053","description":"\u5728\u5927\u591a\u6570\u7c7b\u4f3c Unix \u7684\u64cd\u4f5c\u7cfb\u7edf\u4e2d\uff0c\u6709\u53ef\u80fd\u521b\u5efa\u4e00\u79cd\u7279\u6b8a\u7c7b\u578b\u7684\u6587\u4ef6\uff0c\u53eb\u505a\u547d\u540d\u7ba1\u9053\u3002\u547d\u540d\u7ba1\u9053\u7528\u6765\u5728 \u4e24\u4e2a\u8fdb\u7a0b\u4e4b\u95f4\u5efa\u7acb\u8fde\u63a5\uff0c\u4e5f\u53ef\u4ee5\u50cf\u5176\u5b83\u7c7b\u578b\u7684\u6587\u4ef6\u4e00\u6837\u4f7f\u7528\u3002"},"Bash/archives/process":{"id":"Bash/archives/process","title":"\u8fdb\u7a0b\u7ba1\u7406","description":"ps"},"Bash/archives/redirection":{"id":"Bash/archives/redirection","title":"\u91cd\u5b9a\u5411","description":"\u91cd\u5b9a\u5411\u6307\u7684\u662f\u5c06\u547d\u4ee4\u884c\u8f93\u51fa\u5199\u5165\u6307\u5b9a\u4f4d\u7f6e\u3002"},"Bash/archives/regex":{"id":"Bash/archives/regex","title":"\u6b63\u5219\u8868\u8fbe\u5f0f","description":"\u6b63\u5219\u8868\u8fbe\u5f0f\u662f\u8868\u8fbe\u6587\u672c\u6a21\u5f0f\u7684\u65b9\u6cd5\u3002"},"Bash/archives/system":{"id":"Bash/archives/system","title":"\u7cfb\u7edf\u4fe1\u606f","description":"uname"},"Bash/archives/text":{"id":"Bash/archives/text","title":"\u6587\u672c\u5904\u7406","description":"cat"},"Bash/archives/time":{"id":"Bash/archives/time","title":"\u65f6\u95f4\u7ba1\u7406","description":"date \u547d\u4ee4"},"Bash/archives/user":{"id":"Bash/archives/user","title":"\u7528\u6237\u7ba1\u7406","description":"id"},"Bash/arithmetic":{"id":"Bash/arithmetic","title":"\u7b97\u672f\u8fd0\u7b97","description":"\u7b97\u672f\u8868\u8fbe\u5f0f","sidebar":"others"},"Bash/array":{"id":"Bash/array","title":"\u6570\u7ec4","description":"\u6570\u7ec4\uff08array\uff09\u662f\u4e00\u4e2a\u5305\u542b\u591a\u4e2a\u503c\u7684\u53d8\u91cf\u3002\u6210\u5458\u7684\u7f16\u53f7\u4ece0\u5f00\u59cb\uff0c\u6570\u91cf\u6ca1\u6709\u4e0a\u9650\uff0c\u4e5f\u6ca1\u6709\u8981\u6c42\u6210\u5458\u88ab\u8fde\u7eed\u7d22\u5f15\u3002","sidebar":"others"},"Bash/condition":{"id":"Bash/condition","title":"\u6761\u4ef6\u5224\u65ad","description":"\u672c\u7ae0\u4ecb\u7ecd Bash \u811a\u672c\u7684\u6761\u4ef6\u5224\u65ad\u8bed\u6cd5\u3002","sidebar":"others"},"Bash/debug":{"id":"Bash/debug","title":"\u811a\u672c\u9664\u9519","description":"\u672c\u7ae0\u4ecb\u7ecd\u5982\u4f55\u5bf9 Shell \u811a\u672c\u9664\u9519\u3002","sidebar":"others"},"Bash/expansion":{"id":"Bash/expansion","title":"\u6a21\u5f0f\u6269\u5c55","description":"\u7b80\u4ecb","sidebar":"others"},"Bash/function":{"id":"Bash/function","title":"\u51fd\u6570","description":"\u672c\u7ae0\u4ecb\u7ecd Bash \u51fd\u6570\u7684\u7528\u6cd5\u3002","sidebar":"others"},"Bash/grammar":{"id":"Bash/grammar","title":"\u57fa\u672c\u8bed\u6cd5","description":"\u672c\u7ae0\u4ecb\u7ecd Bash \u7684\u6700\u57fa\u672c\u8bed\u6cd5\u3002","sidebar":"others"},"Bash/intro":{"id":"Bash/intro","title":"\u7b80\u4ecb","description":"Bash \u662f Unix \u7cfb\u7edf\u548c Linux \u7cfb\u7edf\u7684\u4e00\u79cd Shell\uff08\u547d\u4ee4\u884c\u73af\u5883\uff09\uff0c\u662f\u76ee\u524d\u7edd\u5927\u591a\u6570 Linux \u53d1\u884c\u7248\u7684\u9ed8\u8ba4 Shell\u3002","sidebar":"others"},"Bash/loop":{"id":"Bash/loop","title":"\u5faa\u73af","description":"Bash \u63d0\u4f9b\u4e09\u79cd\u5faa\u73af\u8bed\u6cd5for\u3001while\u548cuntil\u3002","sidebar":"others"},"Bash/mktemp":{"id":"Bash/mktemp","title":"mktemp \u547d\u4ee4\uff0ctrap \u547d\u4ee4","description":"Bash \u811a\u672c\u6709\u65f6\u9700\u8981\u521b\u5efa\u4e34\u65f6\u6587\u4ef6\u6216\u4e34\u65f6\u76ee\u5f55\u3002\u5e38\u89c1\u7684\u505a\u6cd5\u662f\uff0c\u5728/tmp\u76ee\u5f55\u91cc\u9762\u521b\u5efa\u6587\u4ef6\u6216\u76ee\u5f55\uff0c\u8fd9\u6837\u505a\u6709\u5f88\u591a\u5f0a\u7aef\uff0c\u4f7f\u7528mktemp\u547d\u4ee4\u662f\u6700\u5b89\u5168\u7684\u505a\u6cd5\u3002","sidebar":"others"},"Bash/prompt":{"id":"Bash/prompt","title":"\u547d\u4ee4\u63d0\u793a\u7b26","description":"\u7528\u6237\u8fdb\u5165 Bash \u4ee5\u540e\uff0cBash \u4f1a\u663e\u793a\u4e00\u4e2a\u547d\u4ee4\u63d0\u793a\u7b26\uff0c\u7528\u6765\u63d0\u793a\u7528\u6237\u5728\u8be5\u4f4d\u7f6e\u540e\u9762\u8f93\u5165\u547d\u4ee4\u3002","sidebar":"others"},"Bash/quotation":{"id":"Bash/quotation","title":"\u5f15\u53f7\u548c\u8f6c\u4e49","description":"Bash \u53ea\u6709\u4e00\u79cd\u6570\u636e\u7c7b\u578b\uff0c\u5c31\u662f\u5b57\u7b26\u4e32\u3002\u4e0d\u7ba1\u7528\u6237\u8f93\u5165\u4ec0\u4e48\u6570\u636e\uff0cBash \u90fd\u89c6\u4e3a\u5b57\u7b26\u4e32\u3002\u56e0\u6b64\uff0c\u5b57\u7b26\u4e32\u76f8\u5173\u7684\u5f15\u53f7\u548c\u8f6c\u4e49\uff0c\u5bf9 Bash \u6765\u8bf4\u5c31\u975e\u5e38\u91cd\u8981\u3002","sidebar":"others"},"Bash/read":{"id":"Bash/read","title":"read \u547d\u4ee4","description":"\u7528\u6cd5","sidebar":"others"},"Bash/readline":{"id":"Bash/readline","title":"\u884c\u64cd\u4f5c","description":"\u7b80\u4ecb","sidebar":"others"},"Bash/script":{"id":"Bash/script","title":"\u811a\u672c\u5165\u95e8","description":"\u811a\u672c\uff08script\uff09\u5c31\u662f\u5305\u542b\u4e00\u7cfb\u5217\u547d\u4ee4\u7684\u4e00\u4e2a\u6587\u672c\u6587\u4ef6\u3002Shell \u8bfb\u53d6\u8fd9\u4e2a\u6587\u4ef6\uff0c\u4f9d\u6b21\u6267\u884c\u91cc\u9762\u7684\u6240\u6709\u547d\u4ee4\uff0c\u5c31\u597d\u50cf\u8fd9\u4e9b\u547d\u4ee4\u76f4\u63a5\u8f93\u5165\u5230\u547d\u4ee4\u884c\u4e00\u6837\u3002\u6240\u6709\u80fd\u591f\u5728\u547d\u4ee4\u884c\u5b8c\u6210\u7684\u4efb\u52a1\uff0c\u90fd\u80fd\u591f\u7528\u811a\u672c\u5b8c\u6210\u3002","sidebar":"others"},"Bash/set":{"id":"Bash/set","title":"set \u547d\u4ee4\uff0cshopt \u547d\u4ee4","description":"set\u547d\u4ee4\u662f Bash \u811a\u672c\u7684\u91cd\u8981\u73af\u8282\uff0c\u5374\u5e38\u5e38\u88ab\u5ffd\u89c6\uff0c\u5bfc\u81f4\u811a\u672c\u7684\u5b89\u5168\u6027\u548c\u53ef\u7ef4\u62a4\u6027\u51fa\u95ee\u9898\u3002\u672c\u7ae0\u4ecb\u7ecdset\u7684\u57fa\u672c\u7528\u6cd5\uff0c\u5e2e\u52a9\u4f60\u5199\u51fa\u66f4\u5b89\u5168\u7684 Bash \u811a\u672c\u3002","sidebar":"others"},"Bash/stack":{"id":"Bash/stack","title":"\u76ee\u5f55\u5806\u6808","description":"\u4e3a\u4e86\u65b9\u4fbf\u7528\u6237\u5728\u4e0d\u540c\u76ee\u5f55\u4e4b\u95f4\u5207\u6362\uff0cBash \u63d0\u4f9b\u4e86\u76ee\u5f55\u5806\u6808\u529f\u80fd\u3002","sidebar":"others"},"Bash/startup":{"id":"Bash/startup","title":"\u542f\u52a8\u73af\u5883","description":"Session","sidebar":"others"},"Bash/string":{"id":"Bash/string","title":"\u5b57\u7b26\u4e32\u64cd\u4f5c","description":"\u672c\u7ae0\u4ecb\u7ecd Bash \u5b57\u7b26\u4e32\u64cd\u4f5c\u7684\u8bed\u6cd5\u3002","sidebar":"others"},"Bash/variable":{"id":"Bash/variable","title":"\u53d8\u91cf","description":"\u7b80\u4ecb","sidebar":"others"},"Cookie/Cookie":{"id":"Cookie/Cookie","title":"Cookie","description":"\u4e00\u3001Cookie \u662f\u4ec0\u4e48\uff1f","sidebar":"others"},"Git/Git":{"id":"Git/Git","title":"Git","description":"\u4e00\u3001\u65b0\u5efa\u4ee3\u7801\u5e93","sidebar":"others"},"Http/Http":{"id":"Http/Http","title":"Http","description":"1. \u865a\u62df\u4e3b\u673a","sidebar":"others"},"Http/some":{"id":"Http/some","title":"some","description":"\u5927\u5bb6\u597d\uff0c\u4e3a\u4e86\u65b9\u4fbf\u9605\u8bfb\uff0c\u672c\u6b21\u589e\u52a0\u4e86\u5927\u91cf\u7684\u914d\u56fe\uff0c\u8ba9\u7f51\u7edc\u5c0f\u767d\u4e5f\u80fd\u8f7b\u677e\u7406\u89e3\u3002\u8003\u8651\u5230 177 \u4e2a\u7f51\u7edc\u540d\u8bcd\u52a0\u4e0a 123 \u5f20\u56fe\uff0c\u6587\u7ae0\u7684\u7bc7\u5e45\u5c31\u5f88\u957f\u4e86\uff0c\u6709\u5fc5\u8981\u5206\u7c7b\u6574\u7406\u4e0b\uff0c\u4e8e\u662f\u6309\u7167\u7f51\u7edc\u5206\u5c42\u7ed3\u6784\uff0c\u52a0\u4e0a\u5206\u5c42\u7684\u6269\u5c55\u5185\u5bb9\uff0c\u628a\u6240\u6709\u540d\u8bcd\u5206\u6210\u4e86 15 \u4e2a\u5c0f\u7c7b\uff0c\u65b9\u4fbf\u67e5\u9605\u3002"},"Identification/Identification":{"id":"Identification/Identification","title":"Identification","description":"\u4ec0\u4e48\u662f\u8ba4\u8bc1\uff1f","sidebar":"others"},"Identification/ver":{"id":"Identification/ver","title":"ver","description":"\u8fd9\u4e2a\u5b9e\u73b0\u539f\u7406\u5e76\u4e0d\u590d\u6742\uff0c\u6211\u4eec\u53ea\u9700\u8981\u4e00\u5f20\u56fe\u4f5c\u4e3a\u6211\u4eec\u7684\u62fc\u63a5\u7d20\u6750\uff0c\u6211\u4eec\u518d\u5355\u72ec\u5f04\u4e00\u4e2a\u76d2\u5b50\uff0c\u7136\u540e\u79fb\u52a8\u5b83\uff0c\u5230\u6211\u4eec\u7684\u6307\u5b9a\u4f4d\u7f6e\uff0c\u5230\u8fbe\u6307\u5b9a\u8303\u56f4\u5185\u5373\u9a8c\u8bc1\u901a\u8fc7\uff0c\u53cd\u4e4b\u9a8c\u8bc1\u672a\u901a\u8fc7\u3002"},"Nginx/Nginx":{"id":"Nginx/Nginx","title":"Nginx","description":"- \u5f15\u8a00","sidebar":"others"},"Regular/Regular":{"id":"Regular/Regular","title":"Regular","description":"\u4e00\u3001\u57fa\u672c\u6982\u5ff5","sidebar":"others"}}}')}}]);