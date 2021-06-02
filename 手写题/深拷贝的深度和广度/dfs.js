

function deepClone(source){
    if(source && typeof source === 'object'){
        let result = Array.isArray(source) ? [] : {};
        for(let key in source){
            if(typeof source[key] === 'object'){
                result[key] = deepClone(source[key])
            }else{
                result[key] = source[key];
            }
        }
        return result;
    }else{
        return source
    }
}

let obj = {
    a: 1,
    b: {
        c: 2,
        d: [3, {e: 4}]
    }
}
console.log(deepClone(obj))