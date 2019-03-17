
// 柯里化（Currying）是把接受多个参数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数，并且返回接受余下的参数且返回结果的新函数的技术
function add(x, y){
    return x + y
}
// 经过柯里化后返回的函数应该是这个
// function curry(x){
//     return function(y){
//         return x+ y
//     }
// }
curry(add)


function curry(fn){
    if(fn.length === 0){
        return fn
    }

    function _curried(depth, ...args){
        return function(newArgument){
            if(depth === 1){
                return fn(...args, newArgument)
            }
            return _curried(depth-1,...args,newArgument)
        }
    }

    return _curried(fn.length)
}

test = curry(add)
test(3)(4)



function curry(fn){
    if(fn.length <= 1){
        return fn
    }

    function _curried(depth, ...args){
        return function(newArg){
            if(depth === 1){
                return fn(...args, newArg)
            }else{
                _curried(depth-1, ...args, newArg )
            }
        }
    }

    _curried(fn.length)
}