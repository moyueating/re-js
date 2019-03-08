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