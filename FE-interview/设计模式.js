// factory工厂模式
class Man {
  constructor(name) {
    this.name = name
  }
  say() {
    alert(this.name)
  }
}

class Factory {
  static creata(name){
    return new Man(name)
  }
}

Factory.creata('zkj').say()


// 单例模式
let instance

class Singleton {
  constructor(){

  }
  static getInstance(){
    if(!instance){
      instance = new Singleton()
    }
    return instance
  }
}

let s1 = Singleton.getInstance()
let s2 = Singleton.getInstance()
console.log(s1 === s2)

// 适配器模式
class Plugin {
  getName() {
    return '港版插头'
  }
}

class NewPlugin {
  constructor(){
    this.plugin = new Plugin()
  }

  say() {
    alert(`${this.plugin.getName()} 适配器转二脚插头`)
  }
}

new NewPlugin().say()

// 装饰模式


// 代理模式，事件委托
{/* <ul id="ul">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
</ul> */}
let ul = document.querySelector('#ul')
ul.addEventListener('click', (event) => {
    console.log(event.target);
})


// 发布-订阅模式


//外观模式
// 外观模式提供了一个接口，隐藏了内部的逻辑，更加方便外部调用。
// 举个例子来说，我们现在需要实现一个兼容多种浏览器的添加事件方法

// 对于不同的浏览器，添加事件的方式可能会存在兼容问题。如果每次都需要去这样写一遍的话肯定是不能接受的，所以我们将这些判断逻辑统一封装在一个接口中，外部需要添加事件只需要调用 addEvent 即可。

function addEvent(elm, evType, fn, useCapture) {
  if (elm.addEventListener) {
    elm.addEventListener(evType, fn, useCapture)
    return true
  } else if (elm.attachEvent) {
    var r = elm.attachEvent("on" + evType, fn)
    return r
  } else {
    elm["on" + evType] = fn
  }
}


