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
// 这里将obj转换成String类型，先调用toString，然后valueOf，最后报错
// toString
// valueOf
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

### 参考链接
[阮一峰ES6symbol](http://es6.ruanyifeng.com/#docs/symbol)  
[前端面试之道](https://juejin.im/book/5bdc715fe51d454e755f75ef/section/5bdc715f6fb9a049c15ea4e0)  
[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive)  