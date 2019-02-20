// Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程。
var obj = new Proxy({}, {
  get: function (target, key, receiver) {
    console.log(`getting ${key}!`);
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, value, receiver) {
    console.log(`setting ${key}!`);
    return Reflect.set(target, key, value, receiver);
  }
});

// 使用Proxy来实现数据响应式
//我们通过自定义 set 和 get 函数的方式，在原本的逻辑中插入了我们的函数逻辑，实现了在对对象任何属性进行读写时发出通知。
// 当然这是简单版的响应式实现，如果需要实现一个 Vue 中的响应式，需要我们在 get 中收集依赖，在 set 派发更新，
// 之所以 Vue3.0 要使用 Proxy 替换原本的 API 原因在于 Proxy 无需一层层递归为每个属性添加代理，一次即可完成以上操作，性能上更好，
// 并且原本的实现有一些数据更新不能监听到，但是 Proxy 可以完美监听到任何方式的数据改变，唯一缺陷可能就是浏览器的兼容性不好了。
var testObj = {
  name: 'zkj',
  age: 18,
  friends: [1,2,3,4]
}

var watch = (obj) => {
  const handler = {
    get: function(target, key, receiver){
      console.log(`正在获取 ${key} 属性`)
      return Reflect.get(target, key, receiver)
    },
    set: function(target, key, value, receiver){
      console.log(`正在设置 ${key} 属性为 ${value}`)
      return Reflect.set(target, key, value, receiver)
    }
  }
  return new Proxy(obj, handler)
}

var testProxy = watch(testObj)
testProxy.name // 正在获取 name 属性
testProxy.name = 'test' // 正在设置 name 属性为 test