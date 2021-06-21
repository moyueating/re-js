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
    if(fn.length <= 1) return fn;

    function _curry(depth, ...args){
        return function(...newArgs){
            if(depth === 1){
                return fn(...args, ...newArgs);
            }else{
                return _curry(depth - 1, ...args, ...newArgs)
            }
        }
    }

    return _curry(fn.length)
}

let wrapAdd = curry(add);

console.log(wrapAdd(1)(2)(3));
console.log(wrapAdd(1, 2)(3));
console.log(wrapAdd(1, 2, 3));