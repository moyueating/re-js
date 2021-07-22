//add(1); 	// 1
//add(1)(2);  	// 3
//add(1)(2)(3)；  // 6
//add(1)(2, 3);   // 6
//add(1, 2)(3);   // 6
//add(1, 2, 3);   // 6


function add(a, b, c){
    return a + b + c;
}

function curry(fn){
    function _curry(...args){
        if(args.length >= fn.length){
            return fn(...args)
        }else{
            return function(...arg){
                return _curry(...args, ...arg);
            }
        }
    }
    return _curry
}

let wrapAdd = curry(add);

console.log(wrapAdd(1)(2)(3));
console.log(wrapAdd(1, 2)(3));
console.log(wrapAdd(1, 2, 3));