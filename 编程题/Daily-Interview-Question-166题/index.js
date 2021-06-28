// var foo = function(...args) { // 要求实现函数体}
// var f1 = foo(1,2,3); f1.getValue(); // 6 输出是参数的和
// var f2 = foo(1)(2,3); f2.getValue(); // 6
// var f3 = foo(1)(2)(3)(4); f3.getValue(); // 10


function foo(...args){
    function target(...arg1s){
        return foo(...[...args, ...arg1s]);
    }
    target.getValue = function(){
        return args.reduce((p, c) => p+c, 0)
    }
    return target;
}



var f1 = foo(1,2,3)
console.log(f1.getValue());
var f2 = foo(1)(2,3); 
console.log(f2.getValue());
var f3 = foo(1)(2)(3)(4); 
console.log(f3.getValue());