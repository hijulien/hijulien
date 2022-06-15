## 1.Array

| 方法                           | 作用                                            | 是否影响原数组 |
| :----------------------------- | :---------------------------------------------- | :------------: |
| push( v )                      | 在数组后添加元素，返回数组长度                  |       ✅        |
| pop( v )                       | 删除数组最后一项，返回被删除项                  |       ✅        |
| shift( v )                     | 删除数组第一项，并返回数组                      |       ✅        |
| unshift( v )                   | 数组开头添加元素，返回添加的元素                |       ✅        |
| reserve()                      | 反转一个数组，返回修改后的数组                  |       ✅        |
| sort( f )                      | 排序一个数组，返回修改后的数组                  |       ✅        |
| splice( i , num , v...)        | 截取数组并在此处添加元素，返回被截取的区间      |       ✅        |
| copyWithIn( i  ,s , e)         | 在当前数组将指定位置的成员复制到指定位置        |       ✅        |
| fill( v ,s ,e )                | 在当前数组指定位置替换指定值                    |       ✅        |
| join( str )                    | 将一个数组所有元素连接成字符串并返回这个字符串  |       ❌        |
| concat( arr )                  | arr1.concat(arr2, arr3) 连接数组                |       ❌        |
| join( str )                    | 将arr数组元素连接成字符串并返回这个字符串       |       ❌        |
| indexOf( v )                   | 返回数组中匹配参数值的下标，空返回 -1,不能找NaN |       ❌        |
| find( f( v , i ,arr) )         | 返回首个满足条件的元素                          |       ❌        |
| findIndex( f( v , i , arr) )   | 返回首个满足条件的元素的下标                    |       ❌        |
| map( f( v , i , arr) )         | 操作数组每一项并返回一个新数组                  |       ❌        |
| forEach( v , i )               | 遍历数组，没有返回值                            |       ❌        |
| filter( f( v , i , arr) )      | 对数组所有项进行判断，返回符合规则的新数组      |       ❌        |
| every( f( v , i , arr) )       | 数组每一项都符合规则才返回true                  |       ❌        |
| some( f( v , i , arr) )        | 数组有符合规则的一项就返回true                  |       ❌        |
| reduce( f( v ,cv, i, arr) ,iv) | 接收上一个return和数组的下一项                  |       ❌        |
| flat( num )                    | 指定层级数组扁平化,可 Infinity                  |       ❌        |
| slice( start , i)              | 截取数组，返回被截取的区间                      |       ❌        |
| isArray()                      | 判断是否是数组                                  |       ❌        |
| Array.from()                   | 转为数组                                        |       ❌        |
| includes( v )                  | 返回是否含有元素的布尔值，能判断NaN             |       ❌        |

## 2.Math

| 方法                 | 作用            |
| :------------------- | :-------------- |
| Math.max( arr )      | 取arr中的最大值 |
| Math.min( arr )      | 取arr中的最小值 |
| Math.ceil( double )  | 小数向上取整    |
| Math.floor( double ) | 小数向下取整    |
| Math.round( double ) | 小数四舍五入    |
| Math.sqrt( num )     | 对num进行开方   |
| Math.pow( num, m)    | 对num取m次幂    |
| Math.random() * num  | 取0-num的随机数 |

## 3.Object

| 方法                    | 作用                                                         |
| :---------------------- | ------------------------------------------------------------ |
| entries( obj )          | 对象转二维数组                                               |
| formEntries( obj )      | 二维数组转对象                                               |
| assign( obj1 , obj2...) | 将多个对象合并到目标的属性合并到目标对象中，相同属性的值以最后一个合并对象的为准，不改变被合并对象，可以实现浅克隆 (兼容性不好) |
| values( obj )           | 返回对象值的数组集合                                         |
| keys( obj )             | 返回对象键值的集合                                           |
| isExtensible( obj )     | 判断一个对象是否可以修改属性,是放回true，反之返回false       |

### defineProprety

```
Object.defineProperty(obj,prop,descriptor):对obj对象上对prop属性进行定义或修改，其中descriptor为被定义或修改的属性符。其中对于descriptor属性符可以设置的值如下显示
value:表示属性的值，默认为undefined
writable:该属性是否为可写，如果直接在对象上定义属性，则默认为true。如果设置为false，则属性仅为可读。
configurable: 如果为false的话，则不能修改（writabel,configurable,enumerable），如果直接在对象上定义属性，则默认为true
enumerable:是否能够被枚举，如果直接在对象上定义属性，则默认为true
get:当对象访问prop属性的时候，会调用这个方法，并返回结果。默认为undefined
set:当对象设置该属性的时候，会调用这个方法，默认为undefined
注意：兼容性不错，移动端几乎全兼容，PC端兼容IE9以上，IE8也能运行，但是只能传dom对象

 var obj = {}, value = null;
 Object.defineProperty(obj, "num", {
     get: function () {
              console.log('执行了 get 操作')
              return value;
           },
     set: function (newValue) {
              console.log('执行了 set 操作')
              value = newValue;
            }
        })
  obj.num = 1 // 执行了 set 操作
  console.log(obj.num) // 1 执行了 get 操作

```

### getOwnPropertyDescriptor

```
Object.getOwnPropertyDescriptor(obj):返回一个对象的所有属性的属性描述符，没有属性返回{}
```

### getOwnPropertyNames

```
Object.getOwnPropertyNames(obj): 查找目标对象的所有key值，并返回一个包含所有key值的数组，和Object.keys()效果一致
let obj = { name: 'derek', age: 22, sex: 'M' }
let a = Object.getOwnPropertyNames(obj)
console.log(a) // ['name','age','sex']
```



## 4.String

| 方法                      | 作用                                                    | 是否改变原串 |
| :------------------------ | ------------------------------------------------------- | :----------: |
| chatAt( i )               | 返回指定位置的字符串                                    |              |
| chatCodeAt( i )           | 返回指定位置的字符的Unicode编码                         |              |
| concat( str )             | 连接字符串                                              |              |
| indexOf( Str )            | 检索字符串，返回检索字符串的下标  (大小写敏感)          |              |
| match( reg )              | 检索字符串，返回匹配的所有字符串                        |              |
| matchAll( reg )           | 返回所有匹配                                            |              |
| replace( reg , str)       | 用字符串替换字符子串或替换与正则匹配的子串              |              |
| search( reg )             | 检索字符串中匹配的子串并返回第一个的下标，不匹配返回 -1 |              |
| slice( start , end )      | 提取字符串的子串，为负表从尾部开始                      |              |
| split( str ，i )          | 以指定字符为界分割出指定长度的数组                      |              |
| toLowerCase()             | 转小写                                                  |              |
| toUpperCase()             | 转大写                                                  |              |
| substr( start , num )     | 从指定位置提取指定数量的字符                            |              |
| substring( start&!+, i )  | 提取指定区间的字符串                                    |              |
| includes( str , index&~)  | 是否包含参数字符串                                      |              |
| startWith( str , index&~) | 是否以参数字符串开头                                    |              |
| endWith( str , index&~)   | 是否以参数字符串结尾                                    |              |
| repeat( num )             | 重复指定次数                                            |              |
| padStart( index , str&~ ) | 头部开始补全字符串，默认用空格补全                      |              |
| padEnd( index , str&~ )   | 尾部开始补全字符串，默认用空格补全                      |              |

## 5.browser api



| api                | 作用                 | 代表方法或属性                                               |
| :----------------- | :------------------- | :----------------------------------------------------------- |
| window.history     | 操纵浏览器的记录     | history.back() history.go(-1)                                |
| window.innerHeight | 获取浏览器窗口的高度 |                                                              |
| window.innerWidth  | 获取浏览器窗口的宽度 |                                                              |
| window.location    | 操作刷新按钮和地址栏 | location.host：获取域名和端口 location.hostname：获取主机名 location.port：获取端口号 location.pathname：获取url的路径 location.search：获取?开始的部分 location.href：获取整个url location.hash：获取#开始的部分 location.origin：获取当前域名 location.navigator：获取当前浏览器信息 |

### 5.1 MutationObserver

```
提供了监视对DOM树所做更改的能力 
构造实例
参数为回调 , 即指定的节点或子节点发生dom变动时别调用.
回调第一个参数为变动的MutationRecord 对象数组.
实例对象observer

// 实例化observer对象
const observer = new MutationObserver(handlerChange)

// 配置监听的dom,以及监听哪些属性的变动配置
const options = {
  childList:true, // 观察子节点的变化,添加或删除
  attributes:true, // 观察属性变动
  subtree:true, // 观察子孙节点
}

// 监听
observe.observe(document.querySelector("#app"),options)

// 回调事件
const handlerChange = function(mutationList,observer){
  // 触发变动的节点、属性
}


实例方法
observe(dom,options) - 配置监听的DOM给定选项更改时,调用回调函数

const options = {
  attributeFiter:[], // 设置监听指定属性,比如width、height等.不设置则监听所有属性.
  attributeOldValue:true, // 观察节点属性变更时,记录旧值
  attributes:true, // 观察节点属性的变更
  characterData:true, // 监听文本节点文本的变化
  characterDataOldValue:true, // 监听文本节点,记录文本节点旧值
  childList:true, // 观察子孙节点的添加、删除更改
  subtree:true, // 观察子孙节点、属性等所有的变化
}

多次调用监听方法,会移除现有的观察目标的监听; 如果没有指定DOM,则保留现有的观察目标,并添加新的观察者.
disconnect() - 停止监听DOM,回调不会在调用
takeRecords() - 删除所有待处理的变更通知.
```

### 5.2 MutationRecord

```
监听DOM 变更后回调第一个参数.

type - 变更的类型, 属性-attributes;节点文本变化 - characterData; 子节点变化 - childList
target - 变更的目标节点
addedNodes - 被添加的节点NodeList
removedNodes - 被移除的节点NodeList
oladValue - 变更前的旧值记录,需要配置属性才会有;
```

### 5.3 getBoundingClientRect

```
Element.getBoundingClientRect() 方法返回元素的大小及其相对于视口的位置。返回的是一个对象，对象里有这8个属性：left，right，top，bottom，width，height，x，y。常用来判断元素是否在可视区域
<div id="box"></div>

body {
       height: 3000px;
       width: 3000px;
      }

#box {
       width: 300px;
       height: 300px;
       background-color: red;
       margin-top: 300px;
       margin-left: 300px;
    }
    
// js

const box = document.getElementById('box')
        window.onscroll = function () {
            // box完整出现在视口里才会输出true，否则为false
            console.log(checkInView(box))
        }

function checkInView(dom) {
        const { top, left, bottom, right } = dom.getBoundingClientRect()
        console.log(top, left, bottom, right)
        console.log(window.innerHeight, window.innerWidth)
        return top >= 0 &&
                left >= 0 &&
                bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                right <= (window.innerWidth || document.documentElement.clientWidth)
        }
 
根据这个用处，咱们可以实现：懒加载和无限滚动

缺点？
1、每次scroll都得重新计算，性能耗费大
2、引起重绘回流
```

### 5.4 IntersectionObserver

```
IntersectionObserver接口 提供了一种异步观察目标元素与其祖先元素或顶级文档视窗(viewport)交叉状态的方法。祖先元素与视窗(viewport)被称为根(root)

通俗点说就是：IntersectionObserver是用来监听某个元素与视口的交叉状态的。交叉状态是什么呢？请看下图，一开始整个元素都在视口内，那么元素与视口的交叉状态就是100%，而我往下滚动，元素只有一半显示在视口里，那么元素与视口的交叉状态为50%：

用法
// 接收两个参数 callback  option
var io = new IntersectionObserver(callback, option);

// 开始观察(可观察多个元素)
io.observe(document.getElementById('example1'));
io.observe(document.getElementById('example2'));

// 停止观察某个元素
io.unobserve(element);

// 关闭观察器
io.disconnect();
```

用法

```
// 接收两个参数 callback  option
var io = new IntersectionObserver(callback, option);

// 开始观察(可观察多个元素)
io.observe(document.getElementById('example1'));
io.observe(document.getElementById('example2'));

// 停止观察某个元素
io.unobserve(element);

// 关闭观察器
io.disconnect();

callback一般有两种触发情况。一种是目标元素刚刚进入视口（可见），另一种是完全离开视口（不可见）。

var io = new IntersectionObserver(
  entries => {
    console.log(entries);
  }
);

```

callback

```
callback函数的参数（entries）是一个数组，每个成员都是一个IntersectionObserverEntry对象。举例来说，如果同时有两个被观察的对象的可见性发生变化，entries数组就会有两个成员。

IntersectionObserverEntry对象

{
  time: 3893.92,
  rootBounds: ClientRect {
    bottom: 920,
    height: 1024,
    left: 0,
    right: 1024,
    top: 0,
    width: 920
  },
  boundingClientRect: ClientRect {
     // ...
  },
  intersectionRect: ClientRect {
    // ...
  },
  intersectionRatio: 0.54,
  target: element
}
属性解析：

time：可见性发生变化的时间，是一个高精度时间戳，单位为毫秒
target：被观察的目标元素，是一个 DOM 节点对象
rootBounds：根元素的矩形区域的信息，getBoundingClientRect()方法的返回值，如果没有根元素（即直接相对于视口滚动），则返回null
boundingClientRect：目标元素的矩形区域的信息
intersectionRect：目标元素与视口（或根元素）的交叉区域的信息
intersectionRatio：目标元素的可见比例，即intersectionRect占boundingClientRect的比例，完全可见时为1，完全不可见时小于等于0

```

option

```
二个参数option里比较重要的两个属性：threshold和root

首先讲讲threshold：

threshold属性决定了什么时候触发回调函数。它是一个数组，每个成员都是一个门槛值，默认为[0]，即交叉比例（intersectionRatio）达到0时触发回调函数。

new IntersectionObserver(
  entries => {/* ... */}, 
  {
    threshold: [0, 0.25, 0.5, 0.75, 1]
  }
);
用户可以自定义这个数组。比如，[0, 0.25, 0.5, 0.75, 1]就表示当目标元素 0%、25%、50%、75%、100% 可见时，会触发回调函数。

再说说root：

IntersectionObserver API 支持容器内滚动。root属性指定目标元素所在的容器节点（即根元素）。注意，容器元素必须是目标元素的祖先节点。

new IntersectionObserver(
  entries => {/* ... */}, 
  {
    threshold: [0, 0.25, 0.5, 0.75, 1],
    root: document.getElementById('#container')
  }
);
```

example

```
完整例子
body {
            height: 3000px;
            width: 3000px;
        }

#box1 {
            width: 300px;
            height: 300px;
            background-color: red;
            margin-top: 100px;
            margin-left: 300px;
        }
#box2 {
            width: 300px;
            height: 300px;
            background-color: red;
            margin-top: 100px;
            margin-left: 300px;
        }
<div id="box1"></div>
<div id="box2"></div>

const io = new IntersectionObserver(entries => {
            console.log(entries)
        }, {
            threshold: [0, 0.25, 0.5, 0.75, 1]
            // root: xxxxxxxxx
        })
io.observe(document.getElementById('box1'))
io.observe(document.getElementById('box2'))
```

- 1、可以像`getBoundingClientRect`那样判断元素是否在视口里，并且好处是，不会引起重绘回流
- 2、同理，有了第一点功能，就可以做`懒加载和无限滚动`功能了
- 3、ie兼容性不好

### 5.5 createNodeIterator

```
使用createNodeIterator对页面中所有元素进行遍历输出

const body = document.getElementsByTagName('body')[0]
    const it = document.createNodeIterator(body)
    let root = it.nextNode()
    while(root) {
        console.log(root)
        root = it.nextNode()
    }
```

### 5.6 getComputedStyle

```
Window.getComputedStyle()方法返回一个对象，该对象在应用活动样式表并解析这些值可能包含的任何基本计算后报告元素的所有CSS属性的值。私有的CSS属性值可以通过对象提供的API或通过简单地使用CSS属性名称进行索引来访问。

window.getComputedStyle(element, pseudoElement)
element: 必需，要获取样式的元素。
pseudoElement: 可选，伪类元素，当不查询伪类元素的时候可以忽略或者传入 null。

搭配getPropertyValue可以获取到具体样式

// html
#box {
            width: 300px;
            height: 300px;
            background-color: yellow;
    }
    
<div id="box"></div>

const box = document.getElementById('box')
const styles = window.getComputedStyle(box)
// 搭配getPropertyValue可以获取到具体样式
const height = styles.getPropertyValue("height")
const width = styles.getPropertyValue("width")
console.log(height, width) // ’300px‘ '300px'
```

### 5.7 FormData

```
提供处理form表单数据的功能，form表单处理在日常开发中处处可见。现在的前端框架帮我很好的处理了这一问题，必要的学习了解还是必须的。
构造实例 参数为 form标签dom对象，非必选。

const form = new FormData()

当我们传入form 参数时，每个form元素都需要name属性，这是必须的。会自动将表单值序列化

// 指定form元素，同步获取到表单里的表单属性、值。
const form = new FormData(document.querySelector('#form'))

实例方法

append() key/value 新增键值对，如果存在key，则新增一个值
delete() 删除指定键
entries() 所有键值对的迭代对象
get() 获取到指定键的第一个值
getAll() 返回指定键的包含所有值的数组
has() 是否包含某个键
keys() 所有属性键的迭代对象
set() 设置属性值，覆盖原有的值
valuse() 返回包含所有属性值得迭代对象

定义的form表单，创建FormData实例后，操作表单元素，并可增加新的属性。

// 所有属性 ，按照表单元素的name属性序列化
form.keys()         // [...keys] - result:["name", "age", "gender"]
// 查找某个值 
form.has('id')          // false
// 添加一个值,重复的name属性
form.append('name','test')         
form.get('name')               // 返回第一个符合的值， 为 admin
form.getAll('name')               // 返回所有的值得数组， ['admin','test']
```

### 5.8 XMLHttpRequest

```
创建一个ajax实例，发送请求。

// 直接发送数据
const xhr = new XMLHttpRequest()

xhr.open('post','/addUserInfo')
xhr.send(form)

使用File 创建文件，上传文件。

// 创建文件对象
const file = new File(['hello world'],'test.txt')
// 定义文件读取的实例对象
const fileReader = new FileReader()
// 定义请求实例
const xhr = new XMLHttpRequest()
// 通过onload事件回调获取到文件内容
fileReader.onload = function(event){
    // 读取到文件blob数据
    form.append('file',event.target.result)
    xhr.open('post','/addUserInfo')
    xhr.send(form)
}
// 读取文件为字符串
fileReader.readAsDataURL(file)

```

### MutationObserver

```
MutationObserver 是一个内建对象，它观察 DOM 元素，并在检测到更改时触发回调。

// 选择需要观察变动的节点
const targetNode = document.getElementById('some-id');

// 观察器的配置（需要观察什么变动）
const config = { attributes: true, childList: true, subtree: true };

// 当观察到变动时执行的回调函数
const callback = function(mutationsList, observer) {
    // Use traditional 'for loops' for IE 11
    for(let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            console.log('A child node has been added or removed.');
        }
        else if (mutation.type === 'attributes') {
            console.log('The ' + mutation.attributeName + ' attribute was modified.');
        }
    }
};

// 创建一个观察器实例并传入回调函数
const observer = new MutationObserver(callback);

// 以上述配置开始观察目标节点
observer.observe(targetNode, config);

// 之后，可停止观察
observer.disconnect();
config
config 是一个具有布尔选项的对象，该布尔选项表示“将对哪些更改做出反应”：

childList —— node 的直接子节点的更改，

subtree —— node 的所有后代的更改，

attributes —— node 的特性（attribute），

attributeFilter —— 特性名称数组，只观察选定的特性。

characterData —— 是否观察 node.data（文本内容） 其他几个选项：

attributeOldValue —— 如果为 true，则将特性的旧值和新值都传递给回调（参见下文），否则只传新值（需要 attributes 选项），

characterDataOldValue —— 如果为 true，则将 node.data 的旧值和新值都传递给回调（参见下文），否则只传新值（需要 characterData 选项）。
```



## 6.dom

### 1.createElement()

```
通过传入指定的一个标签名来创建一个元素，如果传入的标签名是一个未知的，则会创建一个自定义的标签，注意：IE8以下浏览器不支持自定义标签。
  let element = document.createElement(tagName);
```

### 2.cloneNode()

```
cloneNode返回调用该方法的节点的一个副本
var dupNode = node.cloneNode(deep);


node 将要被克隆的节点
dupNode 克隆生成的副本节点
deep（可选）是否采用深度克隆,如果为true,则该节点的所有后代节点也都会被克隆,如果为false,则只克隆该节点本身.
这里有几点要注意：
（1）和createElement一样，cloneNode创建的节点只是游离有HTML文档外的节点，要调用appendChild方法才能添加到文档树中
（2）如果复制的元素有id，则其副本同样会包含该id，由于id具有唯一性，所以在复制节点后必须要修改其id
（3）调用接收的deep参数最好传入，如果不传入该参数，不同浏览器对其默认值的处理可能不同
注意
如果被复制的节点绑定了事件，则副本也会跟着绑定该事件吗？这里要分情况讨论：
（1）如果是通过addEventListener或者比如onclick进行绑定事件，则副本节点不会绑定该事件
（2）如果是内联方式绑定比如：<div onclick="showParent()"></div>，这样的话，副本节点同样会触发事件。

```

### 3.createDocumentFragment()

```
DocumentFragments 是DOM节点。它们不是主DOM树的一部分。通常的用例是创建文档片段，将元素附加到文档片段，然后将文档片段附加到DOM树。在DOM树中，文档片段被其所有的子元素所代替。
因为文档片段存在于内存中，并不在DOM树中，所以将子元素插入到文档片段时不会引起页面回流(reflow)(对元素位置和几何上的计算)。因此，使用文档片段document fragments 通常会起到优化性能的作用。

let fragment = document.createDocumentFragment();

```

### 4.getBoundingClientRect()

```
getBoundingClientRect用来返回元素的大小以及相对于浏览器可视窗口的位置

var clientRect = element.getBoundingClientRect();

clientRect是一个DOMRect对象，包含left，top，right，bottom，它是相对于可视窗口的距离，滚动位置发生改变时，它们的值是会发生变化的。除了IE9以下浏览器，还包含元素的height和width等数据
```

### 5.appendChild()

```
将指定的节点添加到调用该方法的节点的子元素的末尾。

parent.appendChild(child);

child节点将会作为parent节点的最后一个子节点。
appendChild这个方法很简单，但是还有有一点需要注意：如果被添加的节点是一个页面中存在的节点，则执行后这个节点将会添加到指定位置，其原本所在的位置将移除该节点，也就是说不会同时存在两个该节点在页面上，相当于把这个节点移动到另一个地方。
如果child绑定了事件，被移动时，它依然绑定着该事件。
```

### 6.insertBefore()

```
用来添加一个节点到一个参照节点之前

parentNode.insertBefore(newNode,refNode);

parentNode表示新节点被添加后的父节点 newNode表示要添加的节点 refNode表示参照节点，新节点会添加到这个节点之前
关于第二个参数参照节点还有几个注意的地方：
（1）refNode是必传的，如果不传该参数会报错
（2）如果refNode是undefined或null，则insertBefore会将节点添加到子元素的末尾

```

### 7.removeChild()

```
删除指定的子节点并返回

var deletedChild = parent.removeChild(node);

deletedChild指向被删除节点的引用，它等于node，被删除的节点仍然存在于内存中，可以对其进行下一步操作。
注意：如果被删除的节点不是其子节点，则程序将会报错。我们可以通过下面的方式来确保可以删除：

if(node.parentNode){
    node.parentNode.removeChild(node);
}
```

### 8.replaceChild()

```
replaceChild用于使用一个节点替换另一个节点

parent.replaceChild(newChild,oldChild);

newChild是替换的节点，可以是新的节点，也可以是页面上的节点，如果是页面上的节点，则其将被转移到新的位置 oldChild是被替换的节点
```

### 9.节点关系

```
1.parentNode
2.parentElement
3.childre
4.firstChild
5.lastChild
6.hasChildNode
7.previousSibling()
返回当前节点的前一个兄弟节点,没有则返回null
Gecko内核的浏览器会在源代码中标签内部有空白符的地方插入一个文本结点到文档中.因此,使用诸如Node.firstChild和Node.previousSibling之类的方法可能会引用到一个空白符文本节点, 而不是使用者所预期得到的节点

8.previousElementSiling()
previousElementSibling返回当前元素在其父元素的子元素节点中的前一个元素节点,如果该元素已经是第一个元素节点,则返回null,该属性是只读的。注意IE9以下浏览器不支持
9.nextSlibing()
Node.nextSibling是一个只读属性，返回其父节点的childNodes列表中紧跟在其后面的节点，如果指定的节点为最后一个节点，则返回null
Gecko内核的浏览器会在源代码中标签内部有空白符的地方插入一个文本结点到文档中.因此,使用诸如Node.firstChild和Node.previousSibling之类的方法可能会引用到一个空白符文本节点, 而不是使用者所预期得到的节点

10.nextElementsilbing()
nextElementSibling返回当前元素在其父元素的子元素节点中的后一个元素节点,如果该元素已经是最后一个元素节点,则返回null,该属性是只读的。注意IE9以下浏览器不支持
```

### 10.元素属性

```
1.setAttribute()
设置指定元素上的一个属性值。如果属性已经存在，则更新该值; 否则将添加一个新的属性用指定的名称和值

element.setAttribute(name, value);

2.getAttribute()
返回元素上一个指定的属性值。如果指定的属性不存在，则返回null或""（空字符串）

let attribute = element.getAttribute(attributeName);  

3.removeAttribute()
从指定的元素中删除一个属性

element.removeAttribute(attrName)

```

### 总结

```
页面修改型API主要是这四个接口，要注意几个特点：
（1）不管是新增还是替换节点，如果新增或替换的节点是原本存在页面上的，则其原来位置的节点将被移除，也就是说同一个节点不能存在于页面的多个位置
（2）节点本身绑定的事件会不会消失，会一直保留着。
```

