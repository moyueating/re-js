// call apply bind函数实现方式

// 让你写个bind函数啊 compose函数啊 flatten函数啊 比较简单的那种。

Function.prototype.myCall = function(context, ...rest)  {
  context = context || window
  context.fn = this
  const result = context.fn(...rest)
  Reflect.deleteProperty(context, 'fn')
  return result
}


Function.prototype.myApply = function(context, rest)  {

  context = context || window
  context.fn = this
  const result = rest ? context.fn(...rest) : context.fn()
  Reflect.deleteProperty(context, 'fn')
  return result
}

Function.prototype.myBind = function(context, ...rest) {
  
  context = context || window
  const _this = this
  // 返回一个函数
  return function Fn() {
    // 因为返回一个函数，我们可以 new F(), 所以需要判断
    if(this instanceof Fn){
      return new _this(...rest, arguments)
    }else{
      return _this.apply(context, rest.concat(...arguments))
    }
  }
}

function Food(name, price){
  this.name = name
  this.price = price
}

function Cake(name, price){
  // Food.call(this, name, price)
  // Food.myCall(this, name, price)
  Food.myBind(this)(name, price)
  this.taste = 'sweet'
}

var cake = new Cake('黑森林', 20)
