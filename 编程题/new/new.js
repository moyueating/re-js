// 1、创建一个新的空对象
// 2、将新对象的原型指向构造函数原型上  
// 3、绑定this
// 4、如果函数执行返回的不是一个对象则返回上述的新对象，否则返回函数执行结果

function myNew(...args){
    let fn = args.shift();
    let obj = Object.create(fn.prototype);
    let ret = fn.call(obj, ...args);
    return Object.prototype.toString.call(ret) === "[object Object]" ? ret : obj;
}


function Dog(name){
    this.name = name;
    this.bark = function(){
        console.log(this.name, 'wang wang')
    }
}

var dog = myNew(Dog, 'haha')
dog.bark()