## 1.类型校验

### 1.1  mail

```
const emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/

const emailStrWY = '956666@163.com' // 163邮箱
console.log(emailReg.test(emailStrWY)) // true
```

### 1.2 tel number

```
mobile
const phoneReg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/

tel
export const isPhone = (e) =>{
return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(e)
}
```

### 1.3 url

```
const urlReg = /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
```

### 1.4 str

```
export const isWeiXin = () =>{
return ua.match(/microMessenger/i) == 'micromessenger'
}
```

### 1.5 浏览器

```
微信
export const isWeiXin = () =>{
return ua.match(/microMessenger/i) == 'micromessenger'
}

QQ
export const isQQBrowser = () =>{
return !!ua.match(/mqqbrowser|qzone|qqbrowser|qbwebviewtype/i)
}
```

### 1.6 device

```
mobile
export const isDeviceMobile =()=>{
return /android|webos|iphone|ipod|balckberry/i.test(ua)
}
 
 ios
 export const isIos =()=>{
var u = navigator.userAgent;
if(u.indexOf('Android')>-1||u.indexOf('Linux')>-1){//安卓手机
return false
}else if(u.indexOf('iPhone')>-1){//苹果手机
return true
}else if(u.indexOf('iPad')>-1){//iPad
return false
}else if(u.indexOf('windows Phone')>-1){//winphone手机
return false
}else{
return false
}
}

PC
export const isIos =()=>{
var u = navigator.userAgent;
if(u.indexOf('Android')>-1||u.indexOf('Linux')>-1){//安卓手机
return false
}else if(u.indexOf('iPhone')>-1){//苹果手机
return true
}else if(u.indexOf('iPad')>-1){//iPad
return false
}else if(u.indexOf('windows Phone')>-1){//winphone手机
return false
}else{
return false
}
}
```

1.7 爬虫

```
export const isSpider =()=>{
return /adsbot|googlebot|bingbot|msnbot|yandexbot|baidubot|robot|careerbot|seznambot|bot|baiduspider|jikespider|symantecspider|scannerlwebcrawler|crawler|360spider|sosospider|sogou web sprider|sougou orion spider/.test(ua)
}
```

### 1.8 集合

```
export const checkStr = (str, type) => { 
switch (type) { 
case 'phone':
//手机号码
return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str); 
case 'tel':
//座机
return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
case 'card':
//身份证 
return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str); 
case 'pwd':
//密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线 
return /^[a-zA-Z]\w{5,17}$/.test(str)
case 'postal':
//邮政编码
return /[1-9]\d{5}(?!\d)/.test(str);
case 'QQ':
//QQ号
return /^[1-9][0-9]{4,9}$/.test(str);
case 'email':
//邮箱 
return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str); 
case 'money':
//金额(小数点2位) 
return /^\d*(?:\.\d{0,2})?$/.test(str);
case 'URL':
//网址
return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(str) 
case 'IP': 
//IP
return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(str); 
case 'date':
//日期时间
return /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(str) || /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str) case 'number':
//数字
return /^[0-9]$/.test(str);
case 'english':
//英文
return /^[a-zA-Z]+$/.test(str);
case 'chinese': 
//中文
return /^[\\u4E00-\\u9FA5]+$/.test(str);
case 'lower':
//小写 
return /^[a-z]+$/.test(str);
case 'upper':
//大写
return /^[A-Z]+$/.test(str);
case 'HTML': 
//HTML标记
return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str); 
default: 
return true; 
} 
}
```

## 2.获取url参数

```
export const getQueryString =(name)=>{
const reg = new RegExp('(^|&)'+name+'=([^&]*)(&|$)','i');
const search = window.location.search.split('?')[1]||'';
const r = search.match(reg) || [];
return r[2];
}
```

## 3.获取滚动坐标

```
export const getScrollPosition = (el = window) => ({
x:el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
y:el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
})
```

## 4.滚动到顶部

```
export cosnt scrollToTop = ()=>{
const c = document.documentElement.scrollTop || document.body.scrollTop;
if(c>0){
window.requestAnimationFrame(scrollToTop);
window.scrollTo(0,c-c/8);
}
}
```

## 5.元素是否在视图范围

```
export const elementIsVisibleInViewport = (el,partiallyVisib = false)=>{
cosnt {top,left,right,bottom} = el.getBoundingClienRect();
const {innerHeight,innerWidth} = window;
return partiallyVisible
? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) && ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth)) : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
}
```

## 6.拦截粘贴板

```
export const copyTextToClipboard = (value) => { 
var textArea = document.createElement("textarea"); textArea.style.background = 'transparent'; 
textArea.value = value;
document.body.appendChild(textArea);
textArea.select(); 
try { 
var successful = document.execCommand('copy'); 
} catch (err) { 
console.log('Oops, unable to copy'); 
} 
document.body.removeChild(textArea); 
}
```

## 7.身份证校验

```
export const isCardID =(sId)=>{
if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(sId)) {
console.log('你输入的身份证长度或格式错误')
return false 
}
//身份证城市 
var aCity = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外" };
if (!aCity[parseInt(sId.substr(0, 2))]) { 
console.log('你的身份证地区非法')
return false
}
// 出生日期验证
var sBirthday = (sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2))).replace(/-/g, "/"), d = new Date(sBirthday) 
if (sBirthday != (d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate())) { 
console.log('身份证上的出生日期非法') 
return false 
}
// 身份证号码校验
var sum = 0, weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
codes = "10X98765432" 
for (var i = 0; i < sId.length - 1; i++) { 
sum += sId[i] * weights[i]; 
} 
var last = codes[sum % 11];
//计算出来的最后一位身份证号码 
if (sId[sId.length - 1] != last) { 
console.log('你输入的身份证号非法') 
return false 
}
return true
}

简单的
const sfzReg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/

const sfzStr1 = '415106199801012130'
console.log(sfzReg.test(sfzStr1)) // true

const sfzStr2 = '718381298381212183'
console.log(sfzReg.test(sfzStr2)) // false

```

## 8.随机数范围

```
export const random = (min, max) => { 
if (arguments.length === 2) { 
return Math.floor(min + Math.random() * ((max + 1) - min)) 
} else { 
return null; 
} 
}
```

## 9.将阿拉伯数字翻译成中文的大写数字

```
export const numberToChinese = (num) => {
var AA = new Array("零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十");
var BB = new Array("", "十", "百", "仟", "萬", "億", "点", ""); 
var a = ("" + num).replace(/(^0*)/g, "").split("."), k = 0, re = "";
for (var i = a[0].length - 1; i >= 0; i--) { 
switch (k) { 
case 0: re = BB[7] + re;
break; 
case 4:
if (!new RegExp("0{4}//d{" + (a[0].length - i - 1) + "}$") .test(a[0])) re = BB[4] + re;
break;
case 8:
re = BB[5] + re; BB[7] = BB[5]; k = 0;
break;
}
if (k % 4 == 2 && a[0].charAt(i + 2) != 0 && a[0].charAt(i + 1) == 0) re = AA[0] + re;
if (a[0].charAt(i) != 0) re = AA[a[0].charAt(i)] + BB[k % 4] + re; k++; }
if (a.length > 1) { re += BB[6]; 
for (var i = 0; i < a[1].length; i++) re += AA[a[1].charAt(i)];
} 
if (re == '一十') re = "十";
if (re.match(/^一/) && re.length == 3) re = re.replace("一", ""); return re;
}
```

## 10.检测密码强度

```
export const checkPwd = (str) => {
var Lv = 0; 
if (str.length < 6) { 
return Lv 
} 
if (/[0-9]/.test(str)) { Lv++ } 
if (/[a-z]/.test(str)) { Lv++ }
if (/[A-Z]/.test(str)) { Lv++ } 
if (/[\.|-|_]/.test(str)) { Lv++ }
return Lv; 
}
```

## 11.原生Ajax请求

```
const ajax = {
    get(url, fn) {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url, true)// 第三个参数异步与否
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                fn(xhr.responeText)
            }
        }
        xhr.send()
    },
    post(url, data, fn) {
        const xhr = new XMLHttpRequest()
        xhr.open('POST', url, true)
        xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded')
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                fn(xhr.responeText)
            }
        }
        xhr.send(data)
    }
}
```

## 12.防抖

```
function debounce(fn, delay = 200) {
  let timer
  return function(...args) {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
      clearTimeout(timer)
      timer = null
    }, delay)
  }
}


function debounce(fn, delay = 500) {
    let timer;
    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        const args = arguments        
        timer = setTimeout(() => {
            fn.apply(this, args) // 改变this指向为调用debounce所指的对象
        }, delay)
    }
}
```

## 13.节流

```
function throttle(fn, delay = 200) {
  let flag = true
  return function(...args) {
    if(!flag) {
      return
    }
    flag = false
    let timer = setTimeout(() => {
      fn.apply(this, args)
      flag = true
      clearTimeout(timer)
    }, delay)
  }
}


function throttle(fn, delay = 200) {
    let flag = true
    return function () {
        if (!flag) return
        flag = false
        const args = arguments
        setTimeout(() => {
            fn.apply(this, args)
            flag = true
        }, delay)
    }
}
```

## 14.compose函数

```
j
function fn1(x) {
    return x + 1;
}
function fn2(x) {
    return x + 2;
}
function fn3(x) {
    return x + 3;
}
function fn4(x) {
    return x + 4;
}
const a = compose(fn1, fn2, fn3, fn4);
console.log(a)
console.log(a(1)); // 1+2+3+4=11
```

## 15.发布订阅模式

```
class EventEmitter {
    constructor() {
        this.cache = {}
    }

    on(name, fn) {
        const tasks = this.cache[name]
        if (tasks) {
            this.cache[name].push(fn)
        } else {
            this.cache[name] = [fn]
        }
    }

    off(name, fn) {
        const tasks = this.cache[name]
        if (task) {
            const index = tasks.findIndex(item => item === fn)
            if (index >= 0) {
                this.cache[name].splice(index, 1)
            }
        }
    }

    emit(name, ...args) {
        // 复制一份。防止回调里继续on，导致死循环
        const tasks = this.cache[name].slice()
        if (tasks) {
            for (let fn of tasks) {
                fn(...args)
            }
        }
    }

    once(name, cb) {
        function fn(...args) {
            cb(args)
            this.off(name, fn)
        }
        this.on(name, fn)
    }
}
```

## 16.深拷贝

```
function deepClone(obj) {
            if (typeof obj !== 'object') {
                return;
            }
            var temp = Array.isArray(obj) ? [] : {};

            for (let key in obj) {
                temp[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key];
            }

            return temp;
        }
```

