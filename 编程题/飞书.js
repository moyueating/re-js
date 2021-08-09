function trim(str){
    return str.replace(/^\s*|\s*$/, '')
}
console.log(trim('  sdf  s'))

function deepClone(obj, map = new Map()){
    if(map.has(obj)){
        return map.get(obj);
    }
    let result = Array.isArray(obj) ? [] : {};
    map.set(obj, result);
    Object.keys(obj).forEach(key => {
        if(typeof obj[key] == 'object'){
            result[key] = deepClone(obj[key], map)
        }else{
            result[key] = obj[key]
        }
    })
    return result;
}

var target = {
    a: {
        b: [2],
        c: {d: 'name'}
    },
    fn: function(){},
}

target.c = target;

console.log(deepClone(target))


function curry(fn){
    function _curry(...args){
        if(args.length === fn.length){
            return fn(...args)
        }else{
            return function(...arg){
                return _curry(...args,...arg);
            }
        }
    }

    return _curry;
}

function add(a, b, c){
    return a+b+c
}

var _add = curry(add)
console.log(_add(2)(3)(4))