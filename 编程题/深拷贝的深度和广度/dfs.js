
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
function deepClone(source, map = new Map()){
    let result = getEmpty(source);
    if(map.get(source)){
        return map.get(source);
    }
    map.set(source, result);
    for(let key in source){
        console.log(key)
        result[key] = deepClone(source[key], map);
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
