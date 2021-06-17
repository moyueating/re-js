
function getEmpty(data){
    if(Object.prototype.toString.call(data) === '[object Object]'){
        return {};
    }else if(Object.prototype.toString.call(data) === '[object Array]'){
        return [];
    }else{
        return data;
    }
}

// 递归深度遍历
// function deepClone(source, map = new Map()){
//     let result = getEmpty(source);
//     if(map.get(source)){
//         return map.get(source);
//     }
//     map.set(source, result);
//     for(let key in source){
//         console.log(key)
//         result[key] = deepClone(source[key], map);
//     }
//     return result;
// }

// 非递归深度遍历，利用栈的先进后出
function deepClone(origin){
    let result = getEmpty(origin);
    let visited = new Map();
    let stack = [{
        v: origin,
        t: result
    }];
    while(stack.length){
        let last = stack.pop();
        let target = last.t;
        for(let [key ,value] of Object.entries(last.v)){
            if(visited.get(value)){
                target[key] = visited.get(value);
                continue;
            }
            let temp = getEmpty(value);
            target[key] = temp;
            stack.push({
                v: value,
                t: temp
            })
            visited.set(value, temp);
        }
    }
    return result;
}


let origin = {
    b: {
        c: {
            d: 33,
        },
    },
    a: {
        f: {
            g: 44
        },
        z: 22
    }
}

origin.c = origin;
let target = deepClone(origin);
target.b = null;
console.log(target, origin)
