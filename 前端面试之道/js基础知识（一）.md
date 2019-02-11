### 类型转换
[常见的类型转换](https://user-gold-cdn.xitu.io/2018/11/15/16716dec14421e47?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

#### 对象转原始类型  
对象在转换类型的时候，会调用内置的 [[ToPrimitive]] 函数，对于该函数会尝试调用valueOf和toString来获取基本类型，如果两者都不存在或者都没有返回基本类型值就产生类型错误，算法逻辑一般来说如下：  
- 如果已经是原始类型了，那就不需要转换了  
- 调用 obj.valueOf()，如果转换为基础类型，就返回转换的值  
- 调用 obj.toString()，如果转换为基础类型，就返回转换的值  
- 如果都没有返回原始类型，就会报错  
```js
var obj = {
  valueOf: function() {
    console.log('valueOf')
    return {}
  },
  toString: function() {
    console.log('toString')
    return {}
  }
}
obj * 2
// 这里将obj转换成Number类型，先调用valueOf，然后toString，最后报错
// valueOf
// toString
// TypeError: Cannot convert object to primitive value
obj + 'string'
// 这里将obj转换成String类型，先调用valueOf，然后toString，最后报错
// valueOf
// toString
// TypeError: Cannot convert object to primitive value
```

ES6中你也可以显示重写 Symbol.toPrimitive ，该方法在转原始类型时调用优先级最高。  
Symbol.toPrimitive被调用时，会接受一个字符串参数，表示当前运算的模式，一共有三种模式。  
- Number：该场合需要转成数值  
- String：该场合需要转成字符串  
- Default：该场合可以转成数值，也可以转成字符串  

```js
let obj = {
  [Symbol.toPrimitive](hint) {
    switch (hint) {
      case 'number':
        return 123;
      case 'string':
        return 'str';
      case 'default':
        return 'default';
      default:
        throw new Error();
     }
   }
};

2 * obj // 246
3 + obj // '3default'
obj == 'default' // true
String(obj) // 'str'
```

#### this指向
我们先来看一下函数的几个调用模式：方法调用，函数调用，构造函数调用，apply、call、bind调用。  

- 方法调用模式
所谓方法调用就是一个函数是对象的一个属性时，也就是常见的 obj.say() 这种调用方式。这种模式下 this 就指向obj这个调用对象。  
```js
var obj = {
  username: 'zkj',
  say: function(){
    console.log(`hello ${this.username}`)
  }
}
obj.say() // 'hello zkj'
```

- 函数调用模式
当函数不作为一个对象的属性时，那么就是函数调用模式。这时候this指向全局对象（通常是window）还是上面的例子。  
```js
var username = 'window'
var obj = {
  username: 'zkj',
  say: function(){
    console.log(`hello ${this.username}`)
  }
}
var say = obj.say
say() // 'hello window'
```

- 构造函数调用
使用new fn()的方式调用，那么this会绑定到那个创建的对象上。
```js
const Quo  = function(status) {
  this.status = status
}
Quo.prototype.getStatus = function() {
  return this.status
}
const myQuo = new Quo('waiting')
console.log(myQuo.getStatus()) // 'waiting'
```

- apply、call、bind调用
这种调用模式this就是指向绑定的上下文对象。  
```js
var a = {
  username: 'a-username'
}
var b = {
  username: 'b-username',
}
var c = {
  username: 'c-username',
  say: function(){
    console.log(`hello ${this.username}`)
  }
}
console.log(c.say()) // 'hello c-username'
console.log(c.say.call(a)) // 'hello a-username'
console.log(c.say.apply(b)) // 'hello b-username'
console.log(c.say.bind(a)()) // 'hello a-username'
console.log(c.say.bind(a).bind(b)()) // 'hello a-username' 永远指向第一次bind的那个对象

```



#### 补充一下
补了一个未知的知识点：由var命令声明的全局变量是顶层对象的属性；由let、const命令声明的全局变量不是顶层对象window的属性。  
```js
var a = 111
console.log(window.a) // 111
console.log(this.a) // 111
let b = 222
console.log(window.b) // undefined
console.log(this.b) // undefined
let c = 333
console.log(window.c) // undefined
console.log(this.c) // undefined
```

### 参考链接
[阮一峰ES6symbol](http://es6.ruanyifeng.com/#docs/symbol)  
[前端面试之道](https://juejin.im/book/5bdc715fe51d454e755f75ef/section/5bdc715f6fb9a049c15ea4e0)  
[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive)  