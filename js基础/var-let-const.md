
#### 补充
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