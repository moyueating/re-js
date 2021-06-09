
function getEmpty(data){
    if(Object.prototype.toString.call(data) === '[object Object]'){
        return {};
    }else if(Object.prototype.toString.call(data) === '[object Array]'){
        return [];
    }else{
        return data;
    }
}

function deepClone(source){
    let result = getEmpty(source)
    let visited = new Map(); // 处理循环引用问题
    let queue = [{
        v: source,
        t: result,
    }];
    while(queue.length){
        let current = queue.shift();
        let target = current.t;
        // 获取当前这个节点的值
        for(let [key, value] of Object.entries(current.v)){
            console.log(key)
            if(visited.get(value)){
                target[key] = visited.get(value);
                continue;
            }
            let temp = getEmpty(value);
            target[key] = temp;
            visited.set(value, temp);
            queue.push({
                v: value,
                t: temp,
            })
        }
    }
    return result;
}

let origin = {
    b: {
        c: {
            d: {
                f: {
                    g: 44
                },
                z: 22
            },
        },
    },
    a: 2,
}
// origin.e = origin;
let target = deepClone(origin);
// target.b.c = null;
console.log(target, origin)