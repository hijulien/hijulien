# Grammar

## 1.数据类型

```
number：数字类型
string：字符串类型
boolean：布尔值类型
undefined：未定义类型
null：空值类型
object：对象类型
symbol：symbol类型
bigint：大数字类型
```

## 2.最大、小安全数字

```
console.log(Number.MAX_SAFE_INTEGER)
// 9007199254740991

console.log(Number.MIN_SAFE_INTEGER)
// -9007199254740991
```

## 3.、深、浅拷贝

```
深拷贝层层拷贝，浅拷贝只拷贝第一层，深层只是引用

在深拷贝中，新对象中的更改不会影响原始对象，而在浅拷贝中，新对象中的更改，原始对象中也会跟着改。

在深拷贝中，原始对象不与新对象共享相同的属性，而在浅拷贝中，它们具有相同的属性。
```

## 4.闭包

```
闭包是一个能读取其他函数内部变量的函数

优点：使外部能访问到局部的东西
缺点：使用不当容易造成内存泄漏的问题 例子：

function a () {
  let num = 0
  // 这是个闭包
  return function () {
     return ++num
  }
}
const b = a()
console.log(b()) // 1
console.log(b()) // 2
```

## 5.valueOf 与 toString

```
1、valueOf偏向于运算，toString偏向于显示
2、对象转换时，优先调用toString
3、强转字符串优先调用toString，强转数字优先调用valueOf
4、正常情况下，优先调用toString
5、运算操作符情况下优先调用valueOf
```

调用valueOf

| 调用者   | 返回值   | 返回值类型 |
| :------- | :------- | :--------- |
| Array    | 数组本身 | Array      |
| Boolean  | 布尔值   | Boolean    |
| Date     | 毫秒数   | Number     |
| Function | 函数本身 | Function   |
| Number   | 数字值   | Number     |
| Object   | 对象本身 | Object     |
| String   | 字符串   | String     |



调用toString

| 调用者  | 返回值                                                       | 返回值类型 |
| :------ | :----------------------------------------------------------- | :--------- |
| Array   | 数组转字符串，相当于Array.join()                             | String     |
| Boolean | 转字符串'true'、'false'                                      | String     |
| Date    | 字符串日期，如'Fri Dec 23 2016 11:24:47 GMT+0800 (中国标准时间)' | String     |
| Number  | 数字字符串                                                   | String     |
| Object  | '[object Object]'                                            | String     |
| String  | 字符串                                                       | String     |

## 6.变量在内存中存储形式

```
基本数据类型：存在栈内存里
引用数据类型：指针存栈内存，指向堆内存中一块地址，内容存在堆内存中
也有说法说其实JavaScript所有数据都存堆内存中，我也比较赞同这种说法
```

## 7.null和undefined

```
相同点

都是空变量
都是假值，转布尔值都是false
null == undefined 为 true 不同点
typeof判断null为object，判断undefined为undefined
null转数字为0，undefined转数字为NaN
null是一个对象未初始化，undefined是初始化了，但未定义赋值
null === undefined 为 false
```

## 8.判断数据类型

```
typeof xxx：能判断出number，string，undefined，boolean，object，function（null是object）
Object.prototype.toString.call(xxx)：能判断出大部分类型
Array.isArray(xxx)：判断是否为数组
```

## 9.typeof null 是object

```
不同的数据类型在底层都是通过二进制表示的，二进制前三位为000则会被判断为object类型，而null底层的二进制全都是0，那前三位肯定也是000，所以被判断为object
```

## 10.== 与 ===

```
==：在比较过程中会存在隐式转换
===：需要类型相同，值相同，才能为true
```

## 11.隐式转换

```
1、转成string类型：+（字符串连接符）

2、转成number类型：++/--(自增自减运算符) + - * / %(算术运算符) > < >= <= == != === !=== (关系运算符)

3、转成boolean类型：!（逻辑非运算符)
```

## 12.双等号左右两边的转换规则

```
1、null == undefined 为 true

1、如果有一个操作数是布尔值，则在比较相等性之前先将其转换为数值——false转换为0，而true转换为1；

2、如果一个操作数是字符串，另一个操作数是数值，在比较相等性之前先将字符串转换为数值

3、如果一个操作数是对象，另一个操作数不是，则调用对象的toString()方法，用得到的基本类型值按照前面的规则进行比较
```

## 13.undefined >= undefined 是 false

```
按照隐式转换规则，可转换成NaN >= NaN，NaN 不等于 NaN，也不大于，所以是falsek
```

## 14.null >= null 是 true

```
按照隐式转换规则，可转换成0 >= 0，0 等于 0，所以是true
```

## 15.[] == ![] 是 true

```
按照双等号左右两边的转换规则

1、! 优先级高于 ==，[]不是假值，所以先转换成 [] == false
2、右边为布尔值，false先转数字0，所以可转换为[] == 0
3、左边为对象，[]调用toString转为 ''，转换为'' == 0
4、左边为字符串，''转换为0，最终为 0 == 0
```

## 16. 0.1 + 0.2 === 0.3

```
JavaScript的计算存在精度丢失问题
console.log(0.1 + 0.2 === 0.3) // false

原因：JavaScript中小数是浮点数，需转二进制进行运算，有些小数无法用二进制表示，所以只能取近似值，所以造成误差
解决方法：
先变成整数运算，然后再变回小数
toFixed() 性能不好，不推荐
```

## 17.绑定点击事件方式

```
xxx.onclick = function (){}

<xxx onclick=""></xxx>

xxx.addEventListence('click', function(){}, false)
```

## 18.addEventListence第三个参数

```
第三个变量传一个布尔值，需不需要阻止冒泡，默认是false，不阻止冒泡
```

## 19.函数声明和函数表达式

```
函数声明：享受函数提升
函数表达式：归类于变量声明，享受变量提升
函数提升优先级 > 变量提升优先级
console.log(fun) // fun () {}
// 函数表达式
var fun = function(name) {}
// 函数声明
function fun () {}
console.log(fun) // fun (name) {}
```

## 20.事件流模型

```
事件冒泡：由最具体的元素接收，并往上传播
事件捕获：由最不具体的元素接收，并往下传播
DOM事件流：事件捕获 -> 目标阶段 -> 事件冒泡
```

## 21.load、$(document).ready、DOMContentLoaded

```
DOM文档加载的步骤为：

1、解析HTML结构。
2、加载外部脚本和样式表文件。
3、解析并执行脚本代码。
4、DOM树构建完成。// DOMContentLoaded触发、$(document).ready触发
5、加载图片等外部文件。
6、页面加载完毕。// load触发
```

## 22.阻止事件冒泡

```
function stopBubble(e) {
  if (e.stopPropagation) {
    e.stopPropagation()
  } else {
    window.event.cancelBubble = true;
  }
}
```

## 23.阻止事件默认行为

```
function stopDefault(e) {
  if (e.preventDefault) {
    e.preventDefault();
  } else {
    window.event.returnValue = false;
  }
}
```

## 24.事件委托

```
当所有子元素都需要绑定相同的事件的时候，可以把事件绑定在父元素上，这就是事件委托，优点有：

绑定在父元素上只需要绑定一次，节省性能
子元素不需要每个都去绑定同一事件
如果后续又有新的子元素添加，会由于事件委托的原因，自动接收到父元素的事件监听
```

## 25.同类型的弹出框

```
在JS中有三种类型的弹出框可用，分别是：

Alert

Confirm

Prompt
```

## 26.延迟加载的方法

```
1、<script async src="script.js"></script>：给script标签加async属性，则加载和渲染后续文档元素的过程将和 script.js 的加载与执行并行进行（异步）
2、<script defer src="script.js"></script>：给script标签加defer属性，加载后续文档元素的过程将和 script.js 的加载并行进行（异步），但是 script.js 的执行要在所有元素解析完成之后，DOMContentLoaded 事件触发之前完成
3、动态创建script标签：等到DOMContentLoaded 事件触发时，生成一个script标签，渲染到页面上上
4、setTimeout定时器延迟代码执行
```

## 27.new操作符创建实例对象

```
分析一下new的整个过程：

1、创建一个空对象
2、继承构造函数的原型
3、this指向obj，并调用构造函数
4、返回对象
简单实现一下new：

function myNew (fn, ...args) {
    // 第一步：创建一个空对象
    const obj = {}

    // 第二步：继承构造函数的原型
    obj.__proto__ =  fn.prototype

    // 第三步：this指向obj，并调用构造函数
    fn.apply(obj, args)

    // 第四步：返回对象
    return obj
}
```

## 28.文档碎片

```
是什么：一个容器，用于暂时存放创建的dom元素，使用document.createDocumentFragment()创建
有什么用：将需要添加的大量元素 先添加到文档碎片 中，再将文档碎片添加到需要插入的位置，大大减少dom操作，提高性能 例子
var oFragmeng = document.createDocumentFragment(); 

for(var i=0;i<10000;i++)
{ 
    var op = document.createElement("span"); 
    var oText = document.createTextNode(i); 
    op.appendChild(oText); 
    //先附加在文档碎片中
    oFragmeng.appendChild(op);  
} 

//最后一次性添加到document中
document.body.appendChild(oFragmeng); 
```

## 29.宏任务与微任务

宏任务

| #                         | 浏览器 | Node |
| :------------------------ | :----- | :--- |
| **I/O**                   | ✅      | ✅    |
| **setTimeout**            | ✅      | ✅    |
| **setInterval**           | ✅      | ✅    |
| **setImmediate**          | ❌      | ✅    |
| **requestAnimationFrame** | ✅      | ❌    |



微任务

| #                                        | 浏览器 | Node |
| :--------------------------------------- | :----- | :--- |
| **Promise.prototype.then catch finally** | ✅      | ✅    |
| **process.nextTick**                     | ❌      | ✅    |
| **MutationObserver**                     | ✅      | ❌    |

## 30.Object.defineProperty(target, key, options)，options可传参数

```
value：给target[key]设置初始值
get：调用target[key]时触发
set：设置target[key]时触发
writable：规定target[key]是否可被重写，默认false
enumerable：规定了key是否会出现在target的枚举属性中，默认为false
configurable：规定了能否改变options，以及删除key属性，默认false，具体详细请看Object.defineProperty函数的configurable配置
```

## 31.Commonjs 和 ES6 Module的区别

```
1、Commonjs是拷贝输出，ES6模块化是引用输出
2、Commonjs是运行时加载，ES6模块化是编译时输出接口
3、Commonjs是单个值导出，ES6模块化可以多个值导出
4、Commonjs是动态语法可写在函数体中，ES6模块化静态语法只能写在顶层
5、Commonjs的this是当前模块化，ES6模块化的this是undefined 推荐文章CommonJS模块与ES6模块的区别
```

## 32.鼠标事件的各个坐标

| 属性    | 说明                                                         | 兼容性            |
| :------ | :----------------------------------------------------------- | :---------------- |
| offsetX | 以当前的目标元素左上角为原点，定位x轴坐标                    | 除Mozilla外都兼容 |
| offsetY | 以当前的目标元素左上角为原点，定位y轴坐标                    | 除Mozilla外都兼容 |
| clientX | 以浏览器可视窗口左上角为原点，定位x轴坐标                    | 都兼容            |
| clientY | 以浏览器可视窗口左上角为原点，定位y轴坐标                    | 都兼容            |
| pageX   | 以doument对象左上角为原点，定位x轴坐标                       | 除IE外都兼容      |
| pageY   | 以doument对象左上角为原点，定位y轴坐标                       | 除IE外都兼容      |
| screenX | 以计算机屏幕左上顶角为原点，定位x轴坐标(多屏幕会影响)        | 全兼容            |
| screenY | 以计算机屏幕左上顶角为原点，定位y轴坐标                      | 全兼容            |
| layerX  | 最近的绝对定位的父元素（如果没有，则为 document 对象）左上顶角为元素，定位 x 轴坐标 | Mozilla 和 Safari |
| layerY  | 最近的绝对定位的父元素（如果没有，则为 document 对象）左上顶角为元素，定位 y 轴坐标 | Mozilla 和 Safari |

## 33.元素视图的各个尺寸

| 属性         | 说明                                                         |
| :----------- | :----------------------------------------------------------- |
| offsetLeft   | 获取当前元素到定位父节点的left方向的距离                     |
| offsetTop    | 获取当前元素到定位父节点的top方向的距离                      |
| offsetWidth  | 获取当前元素 width + 左右padding + 左右border-width          |
| offsetHeight | 获取当前元素 height + 上下padding + 上下border-width         |
| clientWidth  | 获取当前元素 width + 左右padding                             |
| clientHeight | 获取当前元素 height + 上下padding                            |
| scrollWidth  | 当前元素内容真实的宽度，内容不超出盒子宽度时为盒子的clientWidth |
| scrollHeight | 当前元素内容真实的高度，内容不超出盒子高度时为盒子的clientHeight |

## 34.Window视图的各个尺寸

| 属性        | 说明                                                         |
| :---------- | :----------------------------------------------------------- |
| innerWidth  | innerWidth 浏览器窗口可视区宽度（不包括浏览器控制台、菜单栏、工具栏） |
| innerHeight | innerWidth 浏览器窗口可视区高度（不包括浏览器控制台、菜单栏、工具栏） |

## 35.Document文档视图的各个尺寸

| 属性                                  | 说明                                                         |
| :------------------------------------ | :----------------------------------------------------------- |
| document.documentElement.clientWidth  | 浏览器窗口可视区宽度（不包括浏览器控制台、菜单栏、工具栏、滚动条） |
| document.documentElement.clientHeight | 浏览器窗口可视区高度（不包括浏览器控制台、菜单栏、工具栏、滚动条） |
| document.documentElement.offsetHeight | 获取整个文档的高度（包含body的margin）                       |
| document.body.offsetHeight            | 获取整个文档的高度（不包含body的margin）                     |
| document.documentElement.scrollTop    | 返回文档的滚动top方向的距离（当窗口发生滚动时值改变）        |
| document.documentElement.scrollLeft   | 返回文档的滚动left方向的距离（当窗口发生滚动时值改变）       |

## 36.getBoundingClientRect

```
Element.getBoundingClientRect() 方法返回元素的大小及其相对于视口的位置。返回的是一个对象，对象里有这8个属性：left，right，top，bottom，width，height，x，y，常用来判断元素是否在可视区域
```



