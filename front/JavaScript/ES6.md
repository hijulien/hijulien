# ES6

## 1. var  let  const

```
var:有变量提升，有初始化提升，值可变。

let:有变量提升，无初始化提升，值可变。

const:有变量提升，无初始化提升，值不可变，如果定义的是对象，属性值可变。
```

## 2.默认参数

如果有参数传不进来的情况，可使用默认参数

```
 function fn(name, age) {
      var name = name || '9527';
      var age = age || 18;
      console.log(name, age);
    }
 fn(); // 9527 18
```

```
function fn(name = '9527', age = 18) {
            console.log(name, age);
        }
fn(); // 9527 18
fn('至尊宝', 22); // 至尊宝  22
```

## 3.扩展运算符

合并数组

```
 const arr1 = [1, 2, 4];
 const arr2 = [4, 5, 7];
 console.log([...arr1, ...arr2]);//[1,2,4,4,5,7]
```

## 4.剩余参数

传入参数数量不确定，可以使用剩余参数

```
function fn(name, ...params) {
    console.log(name)
    console.log(params)
}
fn('9527', 1, 2) // 9527 [ 1, 2 ]
fn('9527', 1, 2, 3, 4, 5) // 9527 [ 1, 2, 3, 4, 5 ]
```

## 5.模板字符串

```
 let name = "9527";
 let gril = "qiuxiang";
 console.log(`${name} love ${gril}`); // 9527 love qiuxiang
```

## 6.箭头函数

箭头函数与普通函数的区别

```
1.箭头函数不可做构造函数，不能使用new
2.箭头函数没有自己的this
3.箭头函数没有arguments对象
4.箭头函数没有原型对象
```

## 7.Promise

### 7.1 Promise

```
Promise 必须为以下三种状态之一：等待态（Pending）、执行态（Fulfilled）和拒绝态（Rejected）。一旦Promise 被 resolve 或 reject，不能再迁移至其他任何状态（即状态 immutable）。

1. 初始化 Promise 状态（pending）
2. 立即执行 Promise 中传入的 fn 函数，将Promise 内部 resolve、reject 函数作为参数传递给 fn ，按事件机制时机处理
3. 执行 then(..) 注册回调处理数组（then 方法可被同一个 promise 调用多次）
4. Promise里的关键是要保证，then方法传入的参数 onFulfilled 和 onRejected，必须在then方法被调用的那一轮事件循环之后的新执行栈中执行。

成功状态
function requestData() {
            // 模拟请求
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve('9527')
            }, 1000)
            })
        }

   requestData().then(res => {
   console.log(res) // 一秒钟后输出 '9527'
        }, err => {
            console.log(err)
        })
        
 失败状态
 function requestData () {
  // 模拟请求
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('错误啦')
    }, 1000)
  })
}

requestData().then(res => {
  console.log(res)
}, err => {
  console.log(err) // 一秒钟后输出 '错误啦'
})
```

### 7.2 then()

```
then中传了两个参数，then方法可以接受两个参数，第一个对应resolve的回调，第二个对应reject的回调。所以我们能够分别拿到他们传过来的数据。
```

### 7.3 catch()

```
和then的第二个参数一样，用来指定reject的回调。用法是这样：

p.then((data) => {
    console.log('resolved',data);
}).catch((err) => {
    console.log('rejected',err);
});

效果和写在then的第二个参数里面一样。不过它还有另外一个作用：在执行resolve的回调（也就是上面then中的第一个参数）时，如果抛出异常了（代码出错了），那么并不会报错卡死js，而是会进到这个catch方法中。请看下面的代码：

p.then((data) => {
    console.log('resolved',data);
    console.log(somedata); //此处的somedata未定义
})
.catch((err) => {
    console.log('rejected',err);
});

在resolve的回调中，我们console.log(somedata);而somedata这个变量是没有被定义的。如果我们不用Promise，代码运行到这里就直接在控制台报错了，不往下运行了。但是在这里，会得到这样的结果：
```

![C:\Users\15488\Desktop\node\images\catch.png](C:\Users\15488\Desktop\node\images\catch.png)

```
也就是说进到catch方法里面去了，而且把错误原因传到了reason参数中。即便是有错误的代码也不会报错了，这与我们的try/catch语句有相同的功能
```



### 7.4 all()

```
接收一个Promise数组，数组中如有非Promise项，则此项当做成功
如果所有Promise都成功，则返回成功结果数组
如果有一个Promise失败，则返回这个失败结果

// 如果全都为成功
function fn(time) {
  return new Promise((resolve, reject) => {
    console.log(88)
    setTimeout(() => {
      resolve(`${time}毫秒后我成功啦！！！`)
    }, time)
  })
}

Promise.all([fn(2000), fn(3000), fn(1000)]).then(res => {
  // 3秒后输出 [ '2000毫秒后我成功啦！！！', '3000毫秒后我成功啦！！！', '1000毫秒后我成功啦！！！' ]
  console.log(res) 
}, err => {
  console.log(err)
})


// 如果有一个失败
function fn(time, isResolve) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      isResolve ? resolve(`${time}毫秒后我成功啦！！！`) : reject(`${time}毫秒后我失败啦！！！`)
    }, time)
  })
}

Promise.all([fn(2000, true), fn(3000), fn(1000, true)]).then(res => {
  console.log(res)
}, err => {
  console.log(err) // 3秒后输出 '3000毫秒后我失败啦！！！'
})
```

### 7.5 race()

```
接收一个Promise数组，数组中如有非Promise项，则此项当做成功
哪个Promise最快得到结果，就返回那个结果，无论成功失败

function fn(time, isResolve) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      isResolve ? resolve(`${time}毫秒后我成功啦！！！`) : reject(`${time}毫秒后我失败啦！！！`)
    }, time)
  })
}

Promise.race([fn(2000, true), fn(3000), fn(1000)]).then(res => {
  console.log(res)
}, err => {
  console.log(err) // 1秒后输出
})
```

### 7.6 finally()

```
无论失败或者成功状态，都会执行这个函数

new Promise((resolve, reject) => {
  resolve('成功喽')
}).then(
  res => { console.log(res) },
  err => { console.log(err) }
).finally(() => { console.log('我是finally') })

new Promise((resolve, reject) => {
  reject('失败喽')
}).then(
  res => { console.log(res) },
  err => { console.log(err) }
).finally(() => { console.log('我是finally') })
```

### 7.7 any()

```
接收一个Promise数组，数组中如有非Promise项，则此项当做成功
如果有一个Promise成功，则返回这个成功结果
如果所有Promise都失败，则报错

// 当有成功的时候，返回最快那个成功
function fn(time, isResolve) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      isResolve ? resolve(`${time}毫秒后我成功啦！！！`) : reject(`${time}毫秒后我失败啦！！！`)
    }, time)
  })
}

Promise.any([fn(2000, true), fn(3000), fn(1000, true)]).then(res => {
  console.log(res) // 1秒后 输出  1000毫秒后我成功啦
}, err => {
  console.log(err)
})

// 当全都失败时
function fn(time, isResolve) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      isResolve ? resolve(`${time}毫秒后我成功啦！！！`) : reject(`${time}毫秒后我失败啦！！！`)
    }, time)
  })
}

Promise.any([fn(2000), fn(3000), fn(1000)]).then(res => {
  console.log(res)
}, err => {
  console.log(err) // 3秒后 报错 all Error
})
```



### 7.8 async/await

```
以同步方式执行异步操作,场景:接口一，请求到数据一，而数据一被当做请求二的参数去请求数据二
await只能在async函数里使用
await后面最好接Promise，如果后面接的是普通函数则会直接执行
async函数返回的是一个Promise

function fn() {
  // 模拟第一次请求
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(5)
    }, 1000)
  }).then(res => {
    // 模拟第二次请求
    new Promise((resolve, reject) => {
      setTimeout(() => {
        // 拿第一次请求的数据去乘10，当做第二次请求的数据
        resolve(res * 10)
      }, 2000)
    }).then(sres => {
      console.log(sres)
    })

  })
}
fn() // 1 + 2 = 3 3秒后输出 50function fn1 () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(5)
    }, 1000)
  })
}

function fn2 (data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data * 10)
    }, 2000)
  })
}

async function req () {
  // 同步方式执行异步，像排队一样
  const data1 = await fn1() // 等待1秒后返回数据再往下执行
  const data2 = await fn2(data1) // 拿data1去请求2秒后，往下走
  console.log(data2) // 总共3秒后 输出 50
}
req()
```



## 8.解构赋值

```
const obj = {
            name: '9527',
            age: 22,
            gender: '男',
            doing: {
                morning: '摸鱼',
                afternoon: '摸鱼',
                evening: 'sleep'
            }
        }
        
const { name, age, gender } = obj
console.log(name, age, gender) // 9527 22 男

// 解构重名
const { name: myname } = obj
console.log(myname) // 9527

// 嵌套解构
const { doing: { evening } } = obj
console.log(evening) // sleep
```



## 9.set 

set基本用法

`Set`对象允许你存储任何类型的值，无论是原始值或者是对象引用。它类似于数组，但是成员的值都是唯一的，没有重复的值。

`Set` 本身是一个构造函数，用来生成`Set` 数据结构。`Set`函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化。

```
//api
size()//返回长度
add(value)：添加某个值，返回 Set 结构本身(可以链式调用)。
delete(value)：删除某个值，删除成功返回true，否则返回false。
has(value)：返回一个布尔值，表示该值是否为Set的成员。
clear()：清除所有成员，没有返回值。

//遍历方法
keys()：返回键名的遍历器。
values()：返回键值的遍历器。
entries()：返回键值对的遍历器。
forEach()：使用回调函数遍历每个成员。

//作用
//数组去重(利益扩展运算符)
const mySet = new Set([1, 2, 3, 4, 4])
[...mySet] // [1, 2, 3, 4]

// 两个对象都是不同的指针，所以没法去重
const set1 = new Set([1, {name: '9527'}, 2, {name: '9527'}])
console.log(set1) // Set(4) { 1, { name: '9527' }, 2, { name: '9527' } }

// 如果是两个对象是同一指针，则能去重
const obj = {name: '9527'}
const set2 = new Set([1, obj, 2, obj])
console.log(set2) // Set(3) { 1, { name: '9527' }, 2 }

//合并set对象
let a = new Set([1, 2, 3])
let b = new Set([4, 3, 2])
let union = new Set([...a, ...b]) // {1, 2, 3, 4}

//交集
let a = new Set([1, 2, 3])
let b = new Set([4, 3, 2])
let intersect = new Set([...a].filter(x => b.has(x)))  // {2, 3} 利用数组的filter方法

//差集
let a = new Set([1, 2, 3])
let b = new Set([4, 3, 2])
let difference = new Set([...a].filter(x => !b.has(x))) //  {1} 
```



## 10.Map

`Map` 对比`object`最大的好处就是`key`值不受类型限制

```
//api
set(key, val): 向Map中添加新元素
get(key): 通过键值查找特定的数值并返回
has(key): 判断Map对象中是否有Key所对应的值，有返回true,否则返回false
delete(key): 通过键值从Map中移除对应的数据
clear(): 将这个Map中的所有元素删除

//遍历方法
keys()：返回键名的遍历器
values()：返回键值的遍历器
entries()：返回键值对的遍历器
forEach()：使用回调函数遍历每个成员

// 定义map
const map1 = new Map()
// 新增键值对 使用 set(key, value)
map1.set(true, 1)
map1.set(1, 2)
map1.set('哈哈', '嘻嘻嘻')
console.log(map1) // Map(3) { true => 1, 1 => 2, '哈哈' => '嘻嘻嘻' }
// 判断map是否含有某个key 使用 has(key)
console.log(map1.has('哈哈')) // true
// 获取map中某个key对应的value 使用 get(key)
console.log(map1.get(true)) // 2
// 删除map中某个键值对 使用 delete(key)
map1.delete('哈哈')
console.log(map1) // Map(2) { true => 1, 1 => 2 }

// 定义map，也可传入键值对数组集合
const map2 = new Map([[true, 1], [1, 2], ['哈哈', '嘻嘻嘻']])
console.log(map2) // Map(3) { true => 1, 1 => 2, '哈哈' => '嘻嘻嘻' }
```

## 11.Proxy

```
Proxy用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程
可以这样理解，Proxy就是在目标对象之前设置的一层拦截,外界想要访问都要经过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。
Proxy 在这里可以理解为代理器
声明： const proxy = new Proxy(target, handler)

target: 拦截的对象
handler: 定义拦截的方法

方法：

get(): 拦截对象属性的读取
set(): 拦截对象设置属性,返回一个布尔值
has(): 拦截 propKey in proxy 的操作，返回一个布尔值
ownKeys(): 拦截对象属性遍历，返回一个数组
deleteProperty()：拦截 delete proxy[propKey] 的操作，返回一个布尔值()
apply()：拦截函数的调用，call 和 apply 操作
construct()：拦截 new 命令，返回一个对象: 拦截 new 命令，返回一个对象

 let obj = {
  name: 'domesy',
  time: '2022-01-27',
  value: 1
 }
 
 let data = new Proxy(obj, {
     //get()
     get(target, key){
         return target[key].replace("2022", '2015')
     },
     
     //set()
     set(target, key, value) {
        if (key === "name") {
           return (target[key] = value);
        } else {
           return target[key];
         }
     },
     
     // has()
    has(target, key) {
        if (key === "name") {
            return target[key];
        } else {
            return false;
        }
    },
    // deleteProperty()
    deleteProperty(target, key) {
        if (key.indexOf("_") > -1) {
            delete target[key];
            return true;
        } else {
            return target[key];
        }
    },
    // ownKeys()
    ownKeys(target) {
        return Object.keys(target).filter((item) => item != "time");
    },
 })
 
 console.log(data.time) // 2015-01-27
 
 data.time = '2020'
 data.name = 'React'
 console.log(data) //Proxy {name: 'React', time: '2022-01-27', value: 1}
 
 // 拦截has()
 console.log("name" in data) // true
 console.log("time" in data) // false
 
 // 删除deleteProperty()
 delete monitor.time; // true
 
 // 遍历 ownKeys()
 console.log(Object.keys(data)); //['name', 'value']

 //apply()
 let sum = (...args) => {
    let num = 0;
    args.forEach((item) => {
        num += item;
    });
    return num;
 };

 sum = new Proxy(sum, {
    apply(target, ctx, args) {
        return target(...args) * 2;
    },
 });
 
 console.log(sum(1, 2)); // 6
 console.log(sum.call(null, 1, 2, 3)); // 12
 console.log(sum.apply(null, [1, 2, 3])); // 12
 
 //constructor()
 let User = class {
    constructor(name) {
        this.name = name;
    }
 }
 User = new Proxy(User, {
    construct(target, args, newTarget) {
        return new target(...args);
    },
  });
 console.log(new User("domesy")); // User {name: 'domesy'}
```

## 12.Reflect

Reflect 与 Proxy 类似，只是保持`Object`的默认行为

- 将 Object 对象的一些明显属于语言内部的方法（比如 Object.defineProperty），放到 Reflect 对象上。
- 现阶段，某些方法同时在 Object 和 Reflect 对象上部署，未来的新方法将只部署在 Reflect 对象上
- 修改某些 Object 方法的返回结果，让其变得更合理。比如，Object.defineProperty(obj, name, desc)在无法定义属性时，会抛出一个错误，而 Reflect.defineProperty(obj, name, desc)则会返回 false
- 让Object 操作变成函数行为

Reflect 的方法与 Proxy 的方法一一对应，这里就不进行介绍了