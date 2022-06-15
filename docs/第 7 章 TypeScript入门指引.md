## 前言

TypeScript ，后面简称 ts。

ts 在前端开发中，占据越来越重要的作用。因此，如何学习 ts，并将其运用于实践项目中，也变得非常重要。

ts 的语法学习并不困难，学习资源也并不难获取，[官方文档](https://www.tslang.cn/docs/release-notes/typescript-3.1.html)提供了完整全面的语法解析。

本附录章节主要是为读者学习 ts 官方文档，提供一些思路，快速将其掌握。

掌握 ts，对于初学者来说，有几大疑问，这些疑问在官方文档中并未体现

**一、为什么我们要学习 ts？**

许多人学习 ts 的目的并非为了优化项目，而是为了学习，为了面试，大家都在说要学这个东西，因此在学习 ts 时，有一种割裂感。一方面是 ts 带来的好处不明显，一方面又觉得 ts 的使用给自己带来了大量的不方便。

许多同学在解决 ts 的红线提示时，伤透了脑筋，总感觉 ts 不太听话，用起来很难受。

**二、实践中 ts 到底应该怎么用**

基本语法的学习并不难，即使是高阶语法，多琢磨琢磨，也能够掌握，但是运用到项目中去，运用到 React 中去，到底应该是一个什么样子的，很多人没底，也不太清楚

**三、理解不了泛型**

很多人被泛型吓到了。这个就是单纯的理解不了，属于语法中的难点。但是泛型是 ts 的核心，如果掌握不了泛型，基本上也没有掌握 ts。

**四、不懂合理利用类型推导**

类型推导是核心。合理的利用类型推导，能够加强我们对 ts 的内在理解。最关键的是，能简化不少不必要的写法。因此，理解类型推导，能够让我们对 ts 运用得更加合理。

**五、类型兼容性**

大家在学习 ts 时，往往会忽略类型兼容性的重要性。

不理解类型兼容性，就容易在使用时出现很多无法理解的错误。实际使用时，往往需要对各种类型声明进行融合，而要合理的融合，那么类型兼容性就是关键。

**六、语法难点：一些高级类型**

这个需要我们根据官方文档，一点一点的学习与理解，没有什么捷径。

基于官方文档，攻克了以上六个难点，我们对 ts 的使用一定能够游刃有余。

## 1 为什么必须学？

因为大家都在说要掌握？当然不是！

或者换一个问题，为什么在项目中，我们要选择使用 typescript？也许你还不知道，一起跟着我的思路捋一捋。

### 1.1 基础动因

对 JS 执行原理有过了解的同学应该知道，JS 代码边解析边执行，也就意味着，**JS 的语法规则检测，是在执行过程中才会进行的一个步骤**。

带来的后果就是，在开发过程中的所有语法错误，我们都没办法通过某种方式去完全预知到，而必须在浏览器里执行一次看到报错之后才知道自己某个地方写错了。

当项目稍微复杂一点，无法预知语法错误可以说是一场灾难。一个单词拼错，就足以让你陷入困境。

JS 同时也是一门弱类型语言。我们声明一个变量之后，它可以是任意类型，可以在任何时候修改为别的类型。这极大的提高 JS 代码灵活性的同时，带来的副作用也同样明显，**一个变量在我们的应用中无法预知它扮演的角色，维护成本远超想象。**

在复杂项目中，我们无法承受 JS 弱类型的副作用，这是 typescript 出现的基础动因，它让 JavaScript 具备了强类型语言的特征。当然，除了解决这些基础问题，ts 还有许多别的特性。



### 1.2 什么是typescirpt「后面简称ts」

官方文档解释说，**ts 是 JavaScript 的超集，它可以编译成纯 JavaScript**。

估计一看这个解释有的同学不太能理解。可以做一个简单的类比，我们在实践开发中，通常使用 ES6 开发，并且编译成 ES5 的代码给浏览器执行。所以 ES6 和 ts 扮演的角色比较类似。之所以说是 JavaScript 的超集，就是在 JavaScript 的语法基础上，新增了更多的语法规则，让 JavaScript 具备我们期望的特性。**所以我们学习 ts，其实就是学习这些新的特性，和新特性的应用场景。**

总的来说，ts 是一套语法规则，也是一套语法规范，它能帮助我们约束自己的代码，以具备更强的可维护性和健壮性。



### 1.3 作用1：直接在开发过程中暴露错误

如图所示。

试图修改const声明的常量

![试图修改const声明的常量](https://images.xiaozhuanlan.com/photo/2021/0133940d45e2d6c75af1f0fa4f9c77a7.image)

试图修改const声明的常量



执行未定义的函数，通常是拼错了已经定义的方法名
![执行未定义的函数，通常是拼错了已经定义的方法名](https://images.xiaozhuanlan.com/photo/2021/d0e87c264b47ac9bb0d5daa23a5ef777.image)

执行未定义的函数，通常是拼错了已经定义的方法名



与 eslint 类似，具体的报错语法我们可以通过 `tslint` 来配置规则。



### 1.4 作用2：约束变量类型

当我们给变量 foo 设定为 number 之后，如果我们试图将其他类型的值赋值给变量 foo，那么编辑器就会抛出异常，因为这违反了类型约束的规定。

![基础变量约束](https://images.xiaozhuanlan.com/photo/2021/bf6d1c586d6ebcfd496dd22e73ef319d.image)

基础变量约束



### 1.5 作用3：描述函数规则，即明确的告诉使用者该函数的参数类型与返回值类型

当我们定义了 add 函数，要求传入该函数的参数分别为 2 个 number 类型，并且返回值也为 number 类型。那么在使用时，不符合这个规则的用法都会报错。

- error: 传入非 number 类型的参数
- error: 传入了 3 个参数

![描述函数规则](https://images.xiaozhuanlan.com/photo/2021/9777d5a9b9d353c3bb07457988c2b9fc.image)

描述函数规则



在这个点上，ts 还有一个隐性的好处就是简化代码判断边界逻辑。

如果我们用 js 声明一个函数，为了确保函数总能正常执行，往往需要对传入的参数类型进行判断

```js
function add(a, b) {
  if (typeof a != 'number') {
      // ...
  }

  if (typeof b != 'number') {
      // ...
  }
}
```

使用 ts 对参数进行限制之后，我们就可以不需要做这些判断，在使用时，就能够提示我们，传入的参数类型不对而确保函数总能正确执行

```ts
function add(a: number, b: number): number {
  return a + b
}
```

**代码习惯不好的人，就不会觉得应该做这样的判断，所以他们无法感知 ts 的好处，他们写出来的代码，往往也禁不住考验。**

### 1.6 ts作用4：使用 interface 描述复杂数据

```js
interface IParamA {
  id: number,
  name: string
}

function fetchList(params: IParamA): Promise<void> {
  return axios.get('/api/demo', params);
}

fetchList({ id: 1, name: 'alex' });
```

如上所示的例子，当我们定义 `fetchList` 时，会传入一个 JSON 对象作为参数，此时我们需要描述该参数的数据类型，借助 `interface` 即可做到，当传入的参数不符合描述的规则时，会抛出对应的错误。

![注意关注报错信息](https://images.xiaozhuanlan.com/photo/2021/1eccb2dbb92f9f004f99527494796d02.image)

注意关注报错信息



在实践中，数据的复杂程度远不止于此，因此我们还需要借助更多的知识点来描述不同的参数类型，这也是我们学习ts的重点与难点。

例如枚举类型。

```js
/** 枚举 */
enum Direction {
  up = 1,
  down,
  left,
  right
}

/** 三种运动方式 */
type MoveType = 'linear' | 'ease' | 'bounce';

function moveToDemo(ease: string, direction: Direction): void {
  // .. todo
  console.log(ease, direction);
}

function moveTo(ease: MoveType, direction: Direction): void {
  console.log(ease, direction);
}

moveTo('bounce', Direction.down);
```

上面这个例子中，我们自定义了一个函数 moveTo，该函数接收两个参数

- **运动的动画曲线类型**，我们期望在使用该函数时只能传入 `linear, ease, bounce`中的一个
- 运动方向， 我们期望只能传入上下左右四个方向值

这里我们借助了 `type` 语法与 `枚举enum` 语法实现了类似的效果。

![重点关注coding过程中的代码提示](https://images.xiaozhuanlan.com/photo/2021/42c0e981431ffd289fcb1e3bf3754ee7.image)

重点关注coding过程中的代码提示



### 1.7 描述class对象。

与ES6语法几乎一样。

```js
class Person {
  private name: string;
  private age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public getName(): string {
    return this.name;
  }

  public getAge(): number {
    return this.age;
  }
}
const p1 = new Person('alex', 20);
p1.getAge();
p1.getName();
```

![注意观察coding过程中的智能提示](https://images.xiaozhuanlan.com/photo/2021/fe95e25021cf31d7272c70aced61a6be.image)

注意观察coding过程中的智能提示





### 1.8 总结：ts 的主要作用在于约束

通过上面的几个简单的例子，我们可以知道，ts 的主要作用在于通过各种方式约束我们的代码。也可以这样理解：**ts是一套约束规则**。而我们只要掌握了这套约束规则，必然的，我们的代码习惯就会变得更好，除此之外，另一个好处就是，我们可以更加容易的读懂别人的代码。

也正因为约束规则的存在，IDE「例如 vscode」就可以很容易的做到智能提示，这也是我们要在实践中使用 ts 的另一个重要原因。

因此，我们学习ts的过程，其实就是学习一套约束规则的过程。

### 1.9快速读懂别人的代码

完善的类型约束与友好的声明文件，能够非常完整的表达一个函数一个组件的作用，因此我们能够非常轻松的读懂别人的代码想要做的事情。更高的可读性，必然也带来的维护成本的降低。bug 修改速度加快。

![友好的声明文件](https://images.xiaozhuanlan.com/photo/2021/d87c18ccaccafa8149bd73ac745e5da2.image)

友好的声明文件



### 1.10 typescript 的重要性

在团队协作中，衡量一个人代码水平最重要的因素是**代码可读性**。在我看来，它是比性能和技巧更为重要的一个标准。

而 typescript 在复杂项目中，对于代码可读性带来的增强是非常具有吸引力的。因此越来越多的团队在项目中深度使用 ts。甚至在 angular 团队中，整个`angular`都是直接使用ts开发。vue3 也是。

typescript 已经成为了前端开发者的必备技能之一。

而由于 WebAssembly 的原因，typescript 可以轻松编译成 WebAssembly 字节码格式，ts 甚至将会是 JavaScript 的未来。

### 1.11 代价

是约束，就会有代价。

正如写文档一样，所有人都知道文档有无穷的好处，可是，写文档无疑带来了额外的工作量。ts 也一样，带来更高可读性的同时，必然会带来更多的代码量。

总体来说，我们需要手写的额外的代码量并不少。

但是根据我的工作经验，这些额外的工作量，并不会影响我们的开发进度，反而因为减少了错误，大大增加了开发效率。所以建议大家，接受这样的代码。

除此之外，对于大多数人而言，更多的时间代价，是在如何解决 ts 的语法报错上。因此，很多人将 ts 使用成了 anyScript，不过这基本上都是由于无法明白 ts 真实含义以及掌握不够熟练导致。

## 2  React 的拖拽实践

![UI 鉴赏](https://images.xiaozhuanlan.com/photo/2021/70cb48cdc8cf935304744e3e9bde52e3.image)

UI 鉴赏



### 2.1 方法

通过上一篇文章的学习，我们知道，TypeScript 其实是一套约束规则。

理解了这一点，就可以大概确定我们的学习方向。

- 是规则，那么知识点之间，就不会有太强的关联性。我们可以一条一条的逐步学习。也就意味着我们并不用急于把官方文档里所有的规则一次性学完。甚至可以把文档当成一个手册，在具体使用时再去查询。
- 是约束，也就意味着开发方式的改变与限制。ts 的开发会与通常情况下松散灵活的开发不太一样，这就必然会带来初期的不适应。约束带来的痛苦无法避免，我们要有这样一个心理预期。

最后抛开规则的学习，最重要的应该是什么？**毫无疑问，是实践**。这也是无法从官方文档获取到的重要讯息。

许多人只看官方文档，一脸懵逼！规则的学习好像不难，可运用到实践到底是什么样子？不知道。

所以，第一件事情，我们要抛开规则，来看一看，把 ts 用在实践里到底是什么样。这里以 react 中实现拖拽为例。

> 拖拽的原理与实现过程之前已经学习过，所以这里就把之前的代码直接拿过来调整一下

### 2.2 环境

一个简单的方式，是直接使用 `create-react-app` 创建一个已经支持typescript开发的项目。

```bash
npx create-react-app tsDemo --template typescript
```

当然，在不同的脚手架项目中支持 typescirpt 可能不太一样，因此这里就不做统一讲解，大家根据自己的需求在网上搜索方案即可。

除此之外，也可以clone我们的 [练习项目](https://github.com/daraluv/practice)。

> https://github.com/daraluv/practice



### 2.3 .d.ts

在ts的开发中，`.d.ts` 文件扮演着至关重要的作用。通常情况下，这样的文件，我们称之为声明文件。

那么声明文件是一个什么样的东西呢？

前一篇文章我们讲过，ts 的规则能够描述一个简单的变量，能够描述一个复杂的JSON 数据，能够描述函数，也能够描述对象 class。可是大量的描述规则代码如果和实际功能代码糅合在一起，势必会导致整个代码冗余杂乱。因此在实践中，当声明内容很多时，通常会统一在一个文件中编写ts的描述规则，这个文件，就是以 `.d.ts`为后缀名的声明文件。

如果声明文件过多，那么就非常可能重名，为了避免相互干扰，typescript又引入了作用域 `namespace` 概念。

因此，如果我们要利用ts实现拖拽组件，那么文件结构会如下展示：

```
+ Drag
   - index.tsx
   - style.scss
   - interface.d.ts
```

其中 `interface.d.ts` 中会声明在开发过程中遇到的所有复杂数据结构。大概内容如下：

```ts
declare namespace drag {
  ...
}
```

我们可以使用 `interface` 语法来约束一个JSON数据。

![JSONdemo](https://images.xiaozhuanlan.com/photo/2021/870481cda279f02f87136e3a0bef7c57.image)

JSONdemo



在创建一个需要符合这个约束规则的数据时，只需要直接使用命名空间 `drag` 即可。ts 会自动帮助我们识别而无需引入，或者 ts 会自动帮助我们引入(必要时)。

![使用](https://images.xiaozhuanlan.com/photo/2021/7fa518eeea1e4fccb491e1f4a887189b.image)

使用



整个拖拽功能完整声明文件如下

```ts
/** declare 为声明关键字，让外部组件能访问该命名空间*/
declare namespace drag {
  interface JSONDemo {
    name: string,
    age: number
  }
  interface DragProps {
    width?: number,
    height?: number,
    left?: number,
    top?: number,
    zIndex?: number,
    maxWidth?: number,
    maxHeight?: number,
    className?: string,
    onDragEnd?: (target: DragEndParam) => any,
    children?: any
  }

  interface DragState {
    left: number,
    top: number
  }

  interface DragEndParam {
    X: number,
    Y: number
  }

  type TouchEvent = React.TouchEvent & React.MouseEvent;

  interface LiteralO {
    width: number,
    height: number,
    [key: string]: any
  }
}
```

> 本文的主要目的在于帮助大家了解实践中ts的运用，所以如果初学ts，对一些语法不是很熟悉不用太过在意，具体的语法可以通过官方文档，或者后续文章中学习

通常情况下，每个「复杂」组件都会对应创建一个 `.d.ts` 的声明文件。

> 如果声明比较简单，我们可以不需要 .d.ts

### 2.4 React with TypeScript

我们可以使用 ES6 语法的 class 来创建 React 组件，所以如果熟悉 ES6 class 语法，则可以比较轻松的进一步学习 TypeScript 的 class 语法。在React 中使用结合 TypeScript 是非常便利的。

首先，应该使用明确的访问控制符表明变量的有效范围

借鉴于其他编程语言的特性，一个类中的角色可能会包含

- `private` 声明的私有变量/方法
- `public` 声明的共有变量/方法
- `static`声明的静态变量/方法

也就是说，每声明一个变量或者方法，我们都应该明确指定它的角色。而不是直接使用`this.xxxx` 随意的给 class 新增变量。

然后，我们可以通过 TypeScript 的特性阅读 React 的声明(`.d.ts`)文件。以进一步了解React组件的使用。

React 的声明文件，详细的描述了 React 的每一个变量/方法的实现。通过阅读它的声明文件，我们可以进一步加深对React的理解。

最后，理解泛型

```js
class Component<P, S> {

    static contextType?: Context<any>;


    context: any;

    constructor(props: Readonly<P>);
    /**
     * @deprecated
     * @see https://reactjs.org/docs/legacy-context.html
     */
    constructor(props: P, context?: any);


    setState<K extends keyof S>(
        state: ((prevState: Readonly<S>, props: Readonly<P>) => (Pick<S, K> | S | null)) | (Pick<S, K> | S | null),
        callback?: () => void
    ): void;

    forceUpdate(callBack?: () => void): void;
    render(): ReactNode;


    readonly props: Readonly<{ children?: ReactNode }> & Readonly<P>;
    state: Readonly<S>;
    /**
     * @deprecated
     * https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs
     */
    refs: {
        [key: string]: ReactInstance
    };
}
```

这是在React的声明文件中，对于 `React.Component` 的描述。我们可以看到一些常用的 `state, setState, render` 等都有对应的描述。关键的地方是声明文件中有许多用到泛型的地方可能大家理解起来会比较困难。

```
class Component<P, S>
```

这里的`<P, S>`就是传入的泛型约束变量。

从构造函数 `constructor(props: P, context?: any);` 的约束中，我们可以得知，P其实就是 react 组件中 props 的约束条件。

其中对于 state 的约束 `state: Readonly<S>;` 也可以看到，S 是对 State 的约束。

> 暂时对泛型不理解也没关系，后续我们再进一步学习

基于上面几点理解，我们就可以实现 Drag 组件了。如下。代码仅仅只是阅读可能难以理解，一定要动手试试看！

```js
// index.tsx

import * as React from 'react';
import classnames from 'classnames';
import './style.css';

const isMoblie: boolean = 'ontouchstart' in window; // 是否为移动端

class Drag extends React.Component<drag.DragProps, drag.DragState> {
  private elementWid: number;
  private elementHeight: number;
  private left: number;
  private top: number;
  private zIndex: number;
  private clientWidth: number;
  private clientHeight: number;

  private clientX: number;
  private clientY: number;

  private startX: number;
  private startY: number;

  private disX: number;
  private disY: number;

  private _dragStart: () => any;
  private _dragMove: () => any;
  private _dragEnd: () => any;

  constructor(props: drag.DragProps) {
    super(props);
    this.elementWid = props.width || 100;
    this.elementHeight = props.height || 100;
    this.left = props.left || 0;
    this.top = props.top || 0;
    this.zIndex = props.zIndex || 0;
    this.clientWidth = props.maxWidth || 600;
    this.clientHeight = props.maxHeight || 600;
    this._dragStart = this.dragStart.bind(this);

    this.state = {
      left: this.left,
      top: this.top
    };
  }

  public dragStart(ev: React.TouchEvent & React.MouseEvent): void {
    const target = ev.target;
    if (isMoblie && ev.changedTouches) {
      this.startX = ev.changedTouches[0].pageX;
      this.startY = ev.changedTouches[0].pageY;
    } else {
      this.startX = ev.clientX;
      this.startY = ev.clientY;
    }
    // @ts-ignore 偏移位置 = 鼠标的初始值 - 元素的offset
    this.disX = this.startX - target.offsetLeft;

    // @ts-ignore
    this.disY = this.startY - target.offsetTop;

    this.zIndex += 1;

    this._dragMove = this.dragMove.bind(this);
    this._dragEnd = this.dragEnd.bind(this);

    if (!isMoblie) {
      document.addEventListener('mousemove', this._dragMove, false);
      document.addEventListener('mouseup', this._dragEnd, false);
    }
  }

  public dragMove(ev: drag.TouchEvent): void {
    if (isMoblie && ev.changedTouches) {
      this.clientX = ev.changedTouches[0].pageX;
      this.clientY = ev.changedTouches[0].pageY;
    } else {
      this.clientX = ev.clientX;
      this.clientY = ev.clientY;
    }

    // 元素位置 = 现在鼠标位置 - 元素的偏移值
    let left = this.clientX - this.disX;
    let top = this.clientY - this.disY;

    if (left < 0) {
      left = 0;
    }

    if (top < 0) {
      top = 0;
    }

    if (left > this.clientWidth - this.elementWid) {
      left = this.clientWidth - this.elementWid;
    }

    if (top > this.clientHeight - this.elementHeight) {
      top = this.clientHeight - this.elementHeight;
    }

    this.setState({ left, top });
  }

  public dragEnd(ev: drag.TouchEvent): void {
    const { onDragEnd } = this.props;
    document.removeEventListener('mousemove', this._dragMove);
    document.removeEventListener('mouseup', this._dragEnd);

    if (onDragEnd) {
      onDragEnd({
        X: this.startX - this.clientX,
        Y: this.startY - this.clientY
      })
    };
  }

  public render() {
    const { className, width = 100, height = 100, zIndex } = this.props;
    const { left = 0, top = 0 } = this.state;

    const styles: drag.LiteralO = {
      width,
      height,
      left,
      top
    }

    if (zIndex) {
      styles['zIndex'] = this.zIndex;
    }

    /**
     * dragbox 为拖拽默认样式
     * className 表示可以从外部传入class修改样式
     */
    const cls = classnames('dragbox', className);

    return (
      <div
        className={cls}
        onTouchStart={this._dragStart}
        onTouchMove={this._dragMove}
        onTouchEnd={this._dragEnd}
        onMouseDown={this._dragStart}
        onMouseUp={this._dragEnd}
        style={styles}
      >
        {this.props.children}
      </div>
    )
  }
}


export default Drag;

// /**
//  * 索引类型
//  * 表示key值不确定，但是可以约束key的类型，与value的类型
//  */
// interface LiteralO {
//   [key: number]: string
// }

// const enx: LiteralO = {
//   1: 'number',
//   2: 'axios',
//   3: 'http',
//   4: 'zindex'
// }

// /**
//  * 映射类型用另外一种方式约束JSON的key值
//  */
// type keys = 1 | 2 | 3 | 4 | 5;
// type Mapx = {
//   [key in keys]: string
// }

// const enx2: Mapx = {
//   1: 'number',
//   2: 'axios',
//   3: 'http',
//   4: 'zindex',
//   5: 'other'
// }

// interface Person {
//   name: string,
//   age: number
// }
// type Mapo = {
//   [P in keyof Person]: string
// }

// const enx3: Mapo = {
//   name: 'alex',
//   age: '20'
// }
```

你会发现，React与ts的结合使用，并没有特别。我们只需要把React组件，看成一个class，他和其他的calss，并没有什么特别的不同了。

函数式组件同理。



### 2.5 JSX

普通的ts文件，以 `.ts` 作为后缀名。

而包含 JSX 的文件，则以 `.tsx` 作为后缀名。这些文件通常也被认为是 React 组件。

若要支持 jsx，我们需要在 tsconfig.js 中，配置 jsx 的模式。一般都会默认支持。

ts支持三种jsx模式，`preserve, react, react-native`。这些模式只在代码生成阶段起作用 - 类型检查并不受影响。

这句话怎么理解呢？也就意味着，typescript 在代码生成阶段，会根据我们配置的模式，对代码进行一次编译。例如，我们配置 `jsx: preserve`，根据下面的图，.tsx 文件会 被编译成 .jsx 文件。而这个阶段是在代码生成阶段，因此，生成的 .jsx 还可以被后续的代码转换操作。例如再使用 babel 进行编译。

![配图来自官方文档](https://images.xiaozhuanlan.com/photo/2021/307b837bab47b1b67444b60c3e9e8713.image)

配图来自官方文档



**类型检查**

> 这部分内容可能会难理解一点，大家不必强求现在就掌握，以后再说也OK

我们在实际使用过程中，经常会遇到组件类型兼容性的错误，甚至也看不太明白报错信息在说什么。这大概率是对JSX的属性类型理解不到位导致。

理解JSX的类型检测之前，我们需要理清楚两个概念。

「**固有元素**」

通常情况下，固有元素是指 html 中的已经存在元素。例如 div。

![固有元素div](https://images.xiaozhuanlan.com/photo/2021/c0b9d83a581440433efc487ca3f33128.image)

固有元素div



固有元素使用特殊的接口 JSX.IntrinsicElements 来查找。我们也可以利用这个接口，来定义自己的固有元素「但是没必要」。

```js
// 官网demo
declare namespace JSX {
  interface IntrinsicElements {
    foo: any
  }
}

<foo />; // 正确
<bar />; // 错误
```

> 固有元素都以小写开头。

我们可以通过以下方式，给固有元素定义属性。

```js
declare namespace JSX {
  interface IntrinsicElements {
    foo: { bar?: boolean }
  }
}

// `foo`的元素属性类型为`{bar?: boolean}`
<foo bar />;
```

「**基于值的元素**」

也就是 React 中常常提到的自定义元素。规定必须以大写字母开头。基于值的元素会简单的在它所在的作用域里按标识符查找。

```jsx
// demo来自官方
import MyComponent from "./myComponent";

<MyComponent />; // 当前作用域找得到，正确
<SomeOtherComponent />; // 找不到，错误
```

React自定义组件有两种方式

- class 类组件
- function 函数组件

由于这两种基于值的元素在 JSX 表达式里无法区分，因此 TypeScript 首先会尝试将表达式做为函数组件进行解析。如果解析成功，那么 TypeScript 就完成了表达式到其声明的解析操作。如果按照函数组件解析失败，那么 TypeScript 会继续尝试以类组件的形式进行解析。如果依旧失败，那么将输出一个错误。

「**函数组件**」

正如其名，组件被定义成 JavaScript 函数，它的第一个参数是 props 对象。 TypeScript 会强制它的「函数执行的」返回值可以赋值给 JSX.Element。

```js
// demo来自官方文档
interface FooProp {
    name: string;
    X: number;
    Y: number;
}

declare function AnotherComponent(prop: {name: string});
function ComponentFoo(prop: FooProp) {
    return <AnotherComponent name={prop.name} />;
}

const Button = (prop: {value: string}, context: { color: string }) => <button>
```

「**类组件**」

当一个组件由 class 创建而成「例如我们刚才实践的Drag组件」，那么当我们在使用该组件「即生成实例对象」时，则该实例类型必须赋值给 JSX.ElementClass 或抛出一个错误。

```js
// demo来自官方文档
declare namespace JSX {
    interface ElementClass {
    render: any;
    }
}

class MyComponent {
    render() {}
}

function MyFactoryFunction() {
    return { render: () => {} }
}

<MyComponent />; // 正确
<MyFactoryFunction />; // 正确
```

函数组件的 props 直接作为参数传入，而类组件的 props，则取决于 JSX.ElementAttributesProperty。

```js
// 案例来自官方文档
declare namespace JSX {
    interface ElementAttributesProperty {
      props; // 指定用来使用的属性名
    }
}

class MyComponent {
    // 在元素实例类型上指定属性
    props: {
     foo?: string;
    }
}

// `MyComponent`的元素属性类型为`{foo?: string}`
<MyComponent foo="bar" />
```

> 如果未指定 JSX.ElementAttributesProperty，那么将使用类元素构造函数或 SFC 调用的第一个参数的类型。因此，如果我们在定义类组件时，应该将props对应的泛型类型传入，以确保JSX的正确解析。

「**子孙类型检查**」

从 TypeScript 2.3 开始，ts 引入了 children 类型检查。children 是元素属性「attribute」类型的一个特殊属性「property」，子 JSXExpression 将会被插入到属性里。 与使用 JSX.ElementAttributesProperty 来决定 props 名类似，我们可以利用 JSX.ElementChildrenAttribute 来决定 children 名。 JSX.ElementChildrenAttribute 应该被声明在单一的属性里。

简单来说，我们可以在 `this.props` 的智能提示中，得到 children 的索引。

```js
declare namespace JSX {
  interface ElementChildrenAttribute {
    children: {};  // specify children name to use
  }
}
```

「**JSX表达式结果类型**」

默认地 JSX 表达式结果的类型为 any。 我们可以自定义这个类型，通过指定JSX.Element 接口。 然而，不能够从接口里检索元素、属性或 JSX 的子元素的类型信息。 它是一个黑盒。

![自动推导结果为JSX.Element](https://images.xiaozhuanlan.com/photo/2021/0659649290995c389ba913d706c31909.image)

自动推导结果为JSX.Element

## 3 得泛型者得天下

![UI 鉴赏](https://images.xiaozhuanlan.com/photo/2021/6aef394447accd9b1153aad6e4348834.image)

UI 鉴赏



这篇文章跟大家分享学习ts的又一个重难点「**泛型**」。

在 ts 中，得泛型者，得天下！丢泛型者，失天下！



### 3.1 什么是泛型

整个ts的学习，其实就是各种数据类型的类型约束的学习。当我们规定一个变量只能是 `number` 时，它就不能是其他数据类型。

```ts
let a: number = 20;
a = 'string' // 类型错误
```

在函数中也是一样，传入的参数类型，与返回的参数类型，都会被不同的约束规则约束。

```js
function foo(a: number, b: string): string {
  // todo
}
```

当然我们也知道，还可以使用 `interface，type` 定义更为复杂的类型约束。可是这个时候我们就会面临一个问题。

以我们用的非常多的数组方法 `map` 为例。

```js
[1, 2, 3].map(item => {
  return item + 1;
})
```

我们都知道 map 方法接收的第一个参数为一个回调函数 `callback`，`callback`的第一个参数为数组的每一项。那么问题就来了，不同的数组调用 map，数组的每一项数据类型必然不一样

```js
[1, 2, 3].map()
['a', 'b', 'c'].map()
```

应该怎么办？我们应该使用什么样的方式来约束 callback 的参数呢？

简单的使用某一种数据类型来准确的约束数组的每一项肯定是不行的。

这种情况，必须借助「泛型」来帮助我们。

单一的，明确的类型约束理解起来相对简单，可是实践中我们需要对约束稍微放宽一点限制，那么单一的约束就无法满足需求。**泛型，即为更广泛的约束类型**。

仔细观察下面的三组案例，思考一下如果我们要自己描述 Array 类型与数组中的 map 方法应该怎么做？

```ts
interface Person {
  name: string,
  age: number
}

const demo1: number[] = [1, 2, 3];
const demo2: string[] = ['a', 'b', 'c'];
const demo3: Person[] = [{ name: 'alex', age: 20 }, { name: 'john', age: 10 }, { name: 'hx', age: 21 }];

demo1.map((item) => item);
demo2.map((item) => item);
demo3.map((item) => item);
```

![注意观察不同数组item的不同类型](https://images.xiaozhuanlan.com/photo/2021/1feff5f0eac5a00734b667740d931fea.image)

注意观察不同数组item的不同类型



从图中可以看出，当不同的数组调用 map 时，回调函数的参数 item，会自动推导为对应的数据类型。也就是说，这里的item，必然是使用了泛型进行了更为宽松的约束。

**也就是说，泛型，其实就是变量**

是数据类型的变量。

具体如下：

```js
interface Array<T> {
  map<U>(callbackfn: (value: T, index: number, array: T[]) => U): U[]
}
```

我们在声明数组类型时，定义了一个泛型变量 `T`。`T` 作为泛型变量的含义为：我们在定义约束条件时，暂时还不知道数组的每一项数据类型到底是什么，因此我们只能放一个占位标识在这里，待具体使用时再来明确每一项的具体类型。

因此针对数据的描述，我们通常可以这样做：

```js
const arr1: Array<number> = [1, 2, 3];
const arr2: Array<string> = ['a', 'b', 'c'];
const arr3: Array<Person> = [{ name: 'alex', age: 20 }, { name: 'john', age: 10 }, { name: 'hx', age: 21 }];
```

这里分别定义了三个数组，在约束这些数组时，我们明确了泛型变量`T`的具体数据类型，分别对应为 `number, string, Person`。

那么在描述 map 时的写法就很好理解了。

回调函数 `callbackfn` 的第一个参数就是数组的每一项，正好就是定义数组时传入的泛型变量 `T`，不过回调函数会返回一个新的数组项，因此我们需要重新定义一个新的泛型变量来表达这个新数组，即为 `U`。

```ts
map<U>(callbackfn: (value: T, index: number, array: T[]) => U): U[]
```

于是我们就使用泛型，准确的描述了 map 方法的含义。



### 3.2 基础语法

如果完整的理解了泛型的概念，那么泛型的基础知识就比较简单了，过一遍就 OK。

「**函数中使用泛型**」

```js
// 声明一个泛型变量
function identity<T> {}

// 在参数中使用泛型变量
function identity<T>(arg: T) {}

// 在返回值中使用泛型变量
function identity<T>(arg: T): T {}

// 变量声明函数的写法
let myIdentity: <T>(arg: T) => T = identity;
```

「**接口中使用泛型**」

```js
// 使用接口约束一部分数据类型，使用泛型变量让剩余部分变得灵活
interface Parseer<T> {
  success: boolean,
  result: T,
  code: number,
  desc: string
}

// 接口泛型与函数泛型结合
interface Array<T> {
  map<U>(callbackfn: (value: T, index: number, array: T[]) => U): U[]
}
```

「**class中使用泛型**」

```ts
// 注意总结相似性
declare namespace demo02 {
  class GenericNumber<T> {
    private value: T;

    public add: (x: T, y: T) => T
  }
}

// 多个泛型变量传入
declare namespace demo02 {
  class Component<P, S> {
    private constructor(props: P);
    public state: S;
  }
}
```



### 3.3 泛型实践场景

「**描述数组**」

```ts
interface Array<T> {
  length: number,
  toString(): string,
  pop(): T | undefined,
  // 注意此处的含义
  push(...items: T[]): number,
  concat(...items: T[]): T[],
  join(separator?: string): string,
  reverse(): T[],
  shift(): T | undefined;
  slice(start?: number, end?: number): T[],
  sort(compareFn?: (a: T, b: T) => number): this,
  splice(start: number, deleteCount?: number): T[],
  // 注意此处的重载写法
  splice(start: number, deleteCount: number, ...items: T[]): T[],
  unshift(...items: T[]): number,
  indexOf(searchElement: T, fromIndex?: number): number,
  lastIndexOf(searchElement: T, fromIndex?: number): number,
  every(callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any): boolean,
  some(callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any): boolean,
  forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void,
  map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[],
  filter<S extends T>(callbackfn: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[],
  filter(callbackfn: (value: T, index: number, array: T[]) => any, thisArg?: any): T[],
  reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T,
  reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T,
  reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U,
  // reduceRight 略
  // 索引调用
  [n: number]: T,
}
```

> 列举了几乎所有的数组方法与特性，如果能够从上诉描述文件中掌握如何使用数组方法，那么就表示对于函数，接口，泛型的理解已经比较到位了。如果还不能读懂，则多读几遍

「**描述数据返回结果**」

约定所有的接口返回满足统一的数据格式。但是具体的可用的数据结果则因为情况不同，会有不同的场景。因此使用泛型先定义一个基本的结构约束。

```ts
interface Result<T> {
  success: true,
  code: number,
  descript: string,
  result: T
}
```

结合Promise，当数据返回结果为 number 时

> Promise本身就需要接受一个泛型变量，因此这里要注意泛型的嵌套使用

```js
function fetchData(): Promise<Result<number>> {
  return http.get('/api/demo/number');
}
```

当数据返回结果为普通JSON数据时

```js
interface Person {
  name: string,
  age: number
}

function fetchData(): Promise<Result<Person>> {
  return http.get('/api/demo/person');
}
```

当数据返回为数组时

```js
interface Person {
  name: string,
  age: number
}

function fetchData(): Promise<Result<Person[]>> {
  return http.get('/api/demo/persons');
}
```

当属返回结果为分页对象时

```js
interface Person {
  name: string,
  age: number
}

interface Page<T> {
  current: number,
  pageSize: number,
  total: number,
  data: T[]
}

function fetchData(): Promise<Result<Page<Person>>> {
  return http.get('/api/demo/page/person');
}
```

分页对象的返回结果比较复杂，因此描述清楚需要多层嵌套，如果你理解了分页对象，那么基本上泛型就没有什么问题啦！

## 4 类型推导是核心

学会了规则，表示你能使用 TypeScript。理解了**类型推导**，你才能成为 TypeScript 高手。

当我想要声明一个变量为 number 类型时，常规的语法是这样的

```ts
let a: number = 20
```

我会明确指定变量 `a` 的类型。

但是如果我们理解了类型推导，就知道，这样的做法看上去就不太专业。

数字 `20` 在类型推导的机制下，会被判定为一个 `number` 类型，因此当我们将 `20` 赋值给变量 a 时，a 的类型也就确定下来了，就是 `number`

因此，在 ts 中，一个更专业的写法，就是

```ts
let a = 20
```

当我们试图将别的类型赋值给 a 时，同样会抛出错误提示

![img](https://images.xiaozhuanlan.com/photo/2021/dc4478fd3fbba7db4414ae1c4920bc00.image)

我们可以继续观察几个被推导出来之后的结果

```ts
let arr = [1, 2, 3, null]
```

![img](https://images.xiaozhuanlan.com/photo/2021/c6e7836da781f72edb54931530ff9da3.image)

函数也可以被推导

```ts
function add(a = 0, b = 0) {
  return a + b
}
```

![img](https://images.xiaozhuanlan.com/photo/2021/21e8fd707ff3bb3fd0c0114fd6f2a66a.image)

复杂数据类型也可以

```ts
const person = {
  name: 'TOM',
  age: 20,
  gender: 1,
  run: () => {}
}
```

![img](https://images.xiaozhuanlan.com/photo/2021/e39c7280a73f12e8e90221f85dcb62dc.image)

再看看我们熟悉的 map 方法。

```ts
const arr = [1, 2, 3, 4, 5]
const arr2 = arr.map((item) => {
  return item + 1
})
```

当我们如此使用之后，会发现毫无 ts 痕迹。可是，该有的类型全都推导出来了。

![img](https://images.xiaozhuanlan.com/photo/2021/f0a3a9385aa6f6df1ecf869d4dc2f946.image)

数组的 map 方法能够做到这样的推导，得益于底层的 ts 声明。

```ts
interface Array<T> {
  map<U>(callbackfn: (value: T, index: number, array: T[]) => U): U[]
}
```

从声明中我们看出，callback 的第一个参数为泛型 T，即原数组的每一项的类型。而最后的返回结果 arr2 ，也是得益于泛型 U 的声明。

体会一下。

我们自己也可以做一些底层封装，让上层应用时变得更加简洁。

例如一个请求结果的封装

```ts
// 底层声明
interface Result<T> {
  code: number,
  data: T,
  success: boolean
}

// 底层封装
function get<T>(url: string) {
  return new Promise<Result<T>>((resolve, reject) => {

  })
}
```

一个返回 Promise 对象的 get 方法，此处唯一不能推导的就是 T，因此我们只需要在应用层，明确泛型变量 T 的类型即可，其他的全都通过推导搞定。

```ts
interface User {
  name: string,
  id: string
}

// 应用层使用
function userListApi() {
  return get<User[]>('xxxxx/api/user/list')
}
```

此时我们观察 `useListApi` 的类型结果，已经被完整的推导出来了。

![img](https://images.xiaozhuanlan.com/photo/2021/ccf3a4b2d656eeb1855b2c0250e65c44.image)

类型推导还需要在实践中慢慢体会，运用了好，你们的 ts 会变得更加简洁。

## 5 常用高级类型

![img](https://images.xiaozhuanlan.com/photo/2021/7d329d67aab6d0bbbb66e819ba390771.image)

实践中场景往往比较复杂，因此许多时候我们需要一些复杂的高级类型来确保变量的类型与实际情况相符合。

这一章我们把一些常见的复杂类型单独拿出来与大家一起来学习一下。



### 5.1 枚举

使用关键字enum可定义一个枚举类型。

```ts
enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}

Direction.Up // 1
Direction.Down // 2
Direction.Left // 3
Direction.Right // 4
```

> 需要注意，与interface等类型约束关键字不同，枚举类型是真实运行的代码，因此枚举类型是真实存在的对象，而并非仅仅只是简单的类型约束。

如果不赋值，则从0开始递增。

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right
}

Direction.Up // 0
Direction.Down // 1
Direction.Left // 2
Direction.Right // 3
```

也可以赋值为字符串

```ts
enum Direction {
  Up = 'up',
  Down = 'down',
  Left = 'left',
  Right = 'right'
}

Direction.Up // up
Direction.Down // down
Direction.Left // left
Direction.Right // right
```

可以反向映射访问

```ts
enum Direction {
  Up = 'up',
  Down = 'down',
  Left = 'left',
  Right = 'right'
}

Direction.up // Up
Direction.down // Down
Direction.left // Lfet
Direction.right // Right
```

前端的一个特殊性在于，我们通常会将枚举类型的值描述展示在页面上，因此此时如果使用枚举来表达会存在一些问题。

```ts
// 实践中更多使用这样方式表达枚举的含义
const sources = {
  1: '微信',
  2: 'QQ',
  3: '今日头条',
}
```



### 5.2 `&` 交叉类型

当我们在封装 Drag 组件时，需要兼容移动端的 touch 与 pc 端的 mouse 事件。可问题在于 touch 的事件对象与 mouse 的事件对象是不一样的。那么我们在兼容了这两种事件的回调中，如何去描述该回调的事件对象呢？

通常使用 & 符号来解决这样的场景，将两种类型合并为一种类型。这样就能够在智能提示中同时访问到两个事件对象的所有属性了。

```js
type TouchEvent = React.TouchEvent & React.MouseEvent;
```

![demo.gif](https://images.xiaozhuanlan.com/photo/2021/972eb19372d0c412985c196aa4dc77f2.image)

demo.gif





### 5.3 `|` 联合类型

当我们想要设定一个变量的类型为 number 时，

```js
let a: number = 10;
```

但是当我们想要设定他的数据只能是`10, 20, 30`时，就需要用到 `|`

```js
type Source = 10 | 20 | 30;
let a: Source = 10;
```

通常这种场景与枚举数据有关。

当然，我们也可以扩展一个数据的类型。

```js
const attr: number | string = 20;
```

> 注意体会 & 与 | 的区别



### 5.4 类型保护

一个变量，被定义为可能是字符串，也可能是数组。

```ts
per: string | string[]
```

我们在代码编写时，希望能够自动提示对应的 api，typescript 则不知道应该如何处理这种情况。

![试图调用数组的map方法，结果无法找到](https://images.xiaozhuanlan.com/photo/2021/7e2967f95916a89e4bbbb30426910423.image)

试图调用数组的map方法，结果无法找到



为此，我们应该使用一些判断，帮助编辑器做出正确推断。

![自动提示所有字符串api](https://images.xiaozhuanlan.com/photo/2021/5d9fead490d91852c97c56b7703e4b9d.image)

自动提示所有字符串api



![自动提示所有数组api](https://images.xiaozhuanlan.com/photo/2021/179ce66cbb95c6806567aaae5267dbb8.image)

自动提示所有数组api



这种处理，就叫做类型保护。



### 5.5 索引类型

我们可以使用 `keyof` 来获取一个对象中的 key 对应的具体值。

```ts
interface Person {
  name: string,
  age: number
}

const key: keyof Person = 'name';
```

![结果](https://images.xiaozhuanlan.com/photo/2021/69fa8df78c3c97ec9d0038b8000fe56a.image)

结果



他有点类似于

```js
type Key = 'name' | 'age';
```

但 keyof 具备更强的灵活性，它会动态的去识别对象中的所有 key 值。

结合泛型，用一个复杂的例子来体验一下：

我们来封装这样一个方法：对于一个对象，当我们指定对应的 key 值数组时，希望能够得到所有 key 值对应的 value 值数组。

需要思考几个问题。目标对象的类型，我们不确定，因此，只能使用一个泛型变量做一个简单约束。key 值的类型呢？我们可以使用 keyof 从泛型对象中获取。于是又定义另外一个泛型变量 K 来接收获取的结果。

函数定义如下：

```ts
// 声明
function values<T, K extends keyof T>(o: T, names: K[]): T[K][] {
  return names.map(n => o[n]);
}
// 使用
let defUser = {
  id: 'xxx1234sd',
  name: '张三',
  phone: '12312312313',
  pwd: '123123',
  age: 20
}

values(defUser, ['id', 'name'])
```

### 5.6 总结

这是最常用的高级类型，学会之后，能够应对实践中的大部分场景了。当然，更多的高级类型，大家还要结合官方文档继续学习。

## 6 类型兼容是关键

在 ts 的开发中，类型兼容性无处不在。

可是大家在学习 ts 时，往往会忽略类型兼容性的重要性。

不理解类型兼容性，就容易在使用时出现很多无法理解的错误。实际使用时，往往需要对各种类型声明进行融合，而要合理的融合，那么类型兼容性就是关键。

### 6.1 子类型

非常简单的案例，

```ts
let a = 20
let b = 30

b = a // ✅ ok
```

在实践中，将一个变量，赋值给另外一个变量的场景非常多，因此这里就会涉及到，这两个变量的类型比较问题

如果 a 的类型，无法兼容 b 的类型，那么，这样的赋值就存在风险。

上面的例子中，a 与 b 的类型相同，因此可以相互兼容。

如果稍微调整一下，就会出现错误

```ts
let a = 20
let b = '500'

b = a // ❌ error
```

错误提示：不能讲 number 类型分配给 string 类型

![img](https://images.xiaozhuanlan.com/photo/2021/ec880cafe48b85cf87d78c163c3fb4cc.image)

如果此时，我们将 b 的类型，进行一个扩展，让 b 的类型从 number 变成 `number | string`，就会发现错误消失了

```ts
let a = 20
let b: number | string = '500'

b = a // ✅ ok
```

因为我们可以将 `number` 类型分配给 `number | string` 类型。

但是反过来就不行，

```ts
let a = 20
let b: number | string = '500'

a = b // ❌ error
```

![img](https://images.xiaozhuanlan.com/photo/2021/3f38168fda6d315a46906a805b3fad90.image)

原因就是因为 b 的类型可能是一个 string 类型，当其为 string 类型时，就无法分配给 a 的 number 类型。

因此，在这种情况下。**被赋值的类型范围，要大于等于赋值的类型范围。**

此时我们基于这个例子，来探讨一下子类型的概念。

从语义上，我们可以很容易知道，Person 类，是父类，而 Student 类，是子类。因为 Person 类，概念更宽泛。而 Student 类，概念更具体。

因此，更具体的我们称之为子类。也可以称之为我们这里的**子类型。**

那么有如下两个类型

```ts
type A = number
type B = number | string
```

他们谁是子类型，谁是父类型呢？

概念更宽泛的为父类型，也就是 B
概念更具体的为子类型，也就是 A

从概念范围上来说，我们用 `A <= B` 来表示 A 是 B 的子类型。

在设计模式的章节中，我们学习过里氏替换原则，也可以扩展到我们的类型兼容性里，任何使用父类型的地方，都能够用子类型替换。

因此，我们再来看一下这个例子，`b = a` ，其实就是子类型，替换父类型。也就是说，子类型能够赋值给父类型。反之则不行。

```ts
let a = 20
let b: number | string = '500'

// 子类型、替换 父类型
b = a
```

再来看一个对象的例子。

首先定义一个数据类型如下

```ts
interface User {
  id: string,
  name: string,
  phone: string,
  pwd: string
}
```

声明一个变量，该变量的类型为 User，具体赋值的字段对象，要比 User 中的多一个

```ts
interface User {
  id: string,
  name: string,
  phone: string,
  pwd: string
}

let defUser1 = {
  id: 'xxx1234sd',
  name: '张三',
  phone: '12312312313',
  pwd: '123123',
  age: 20
}

let defUser2 = {
  id: 'xxx1234sd',
  name: '张三',
  phone: '12312312313',
}

const user: User = defUser1  // ✅ ok
const user2: User = defUser2 // ❌ error
```

在这里我们要根据概念区分谁是父类型，谁是子类型。

从概念上来说，

字段更少的对象，概念更宽泛，为父类型

字段更多的对象，概念更具体，为子类型

因此，`defUser1 <= User <= DefUser2`，defUser1 能够赋值给 User，defUser2 不能赋值给 User。

这里对于子类型与父类型的理解，我们要多思考一下，如果没从概念范围的角度思考清楚，你会觉得好像我们列举的这两个例子明明是反着的，但是结论却又一样，就会很困扰。所以如果没能马上理解，建议回过头多阅读几遍。

### 6.2 函数类型

函数类型兼容性的理解，是一个难点。

首先我们要明确场景。如下场景，并非是把函数当类型进行比较，本质上仍然是比较的基础类型或对象类型。

```ts
type Param = { a: number, b: number }

function foo(p: Param){}

// 试图将父类型赋值给子类型，❌ error
foo({a: 20}) //

// 将子类型赋值给父类型， ✅ ok
foo({a: 20, b: 20, c: 20})
```

比较函数类型，我们来看一个简单的例子

```ts
let x = (a: number) => {
  return a + 1
}

let y = (a?: number) => {
  return a ? a + 1: 0
}

x = y // ✅ ok
y = x // ❌ error
```

函数类型的比较，比的是参数类型与返回值类型。这里返回值类型相同，我们暂时不考虑。参数类型上来看，

```
xP <= yP
```

x 的参数类型是 y 参数类型的子类型。按道理来说，函数 x 应该能够赋值给 y。但是事实上恰好相反。

y 才是 x 的子类型。

```
y <= x
```

这种情况，我们称之为**逆变**。

为什么会出现这种情况呢，我们思考一下。

我们把函数 x 赋值给 y 之后，

那么对于 y 的函数类型来说，是可以接收 `undefined` 作为参数的。

但是，此时 y 的真实函数已经变成了 x。

而 x 的内部实现并没有处理 `undefined`.

因此，把 x 赋值给 y，是一个危险操作。

### 6.3 泛型

泛型的兼容性问题，最后落点通常情况下在于泛型变量的类型。

```ts
let p: Array<string> = ['1', '2']
let q: Array<number> = [1, 2]

p = q // ❌ error
```

![img](https://images.xiaozhuanlan.com/photo/2021/bd4acf28016ee27a94f968de87bea0f8.image)

而当我们调整一下，就可以搞定，让情况符合第一种基础类型，赋值就能成立

```ts
let p: Array<string | number> = ['1', '2']
let q: Array<number> = [1, 2]

p = q // ✅ ok

// number <= number | string
// 最后是将 number 赋值给 string | number，这是合理的
```

这种 `Comp<T>` 的类型兼容性，和 `T` 的类型兼容保持一致时，我们称之为 **协变**。

泛型还可以有更复杂的区别，我们看看下一个例子

```ts
interface SuperType {
  base: string;
}
interface SubType extends SuperType {
  addition: string;
};

let p: SuperType = { base: 'base' }
let c: SubType = { base: 'base', addition: 'hex' }

p = c // ✅ ok
c = p // ❌ error

type Contravariant<T> = (p: T) => void;
let pf: Contravariant<SuperType> = function (p) { }
let cf: Contravariant<SubType> = function (p) { }

pf = cf; // ❌ error 
cf = pf; // ✅ ok 逆变
```

这种 `Comp<T>` 的类型兼容性与 `T` 相反的场景，我们称之为**逆变。**

出现这种情况的原因，在于函数的特殊性。这个在上面我们已经分析过，就不在继续分析。

> **双向协变** 指的 `Comp<T>` 类型双向兼容。关于双向协变的理解，我个人认为不用过度解读，在实践中可以通过强制类型的方式来实现双向协变，但是这并非完美的解决方案，因此此处只是做个术语解释，不做强制理解。

在 `tsconfig.json` 中，我们可以通过配置属性 `strictFunctionTypes` 来选择是否启用逆变。如果该属性值为 false，规则判断时会使用双向协变，当该属性为 true 时，规则判断会使用逆变。

TypeScript 2.6 之后，`strictFunctionTypes` 都是默认启用，默认为逆变。