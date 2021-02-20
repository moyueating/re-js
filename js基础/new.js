// - 构造函数调用
// 使用new fn()的方式调用，那么this会绑定到那个创建的对象上。
// new的具体步骤：  
// - 新建一个空对象  
// - 将新对象的原型指向构造函数原型上  
// - 绑定this  
// - 如果构造函数执行返回的不是一个对象，那么返回这个新创建的对象，否则返回函数执行的结果对象  


function myNew(...rest){
  const obj = {}
  let Constructor = rest.shift();
  obj.__proto__ = Constructor.prototype
  const result = Constructor.apply(obj, rest)
  console.log(obj);
  return result instanceof Object ? result : obj
}

function ZZZ(){
  this.name = 'zzz';
}

console.log(myNew(ZZZ))