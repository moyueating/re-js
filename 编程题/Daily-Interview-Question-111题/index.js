var entry = {
    a: {
        b: {
            c: {
                dd: 'abcdd'
            }
        },
        d: {
            xx: 'adxx'
        },
        e: 'ae'
    }
}

// 要求转换成如下对象
// var output = {
//     'a.b.c.dd': 'abcdd',
//     'a.d.xx': 'adxx',
//     'a.e': 'ae'
// }

function convertDFS(entry){
    let result = {};
    function convert(target, parent){
        Object.entries(target).forEach(([key, value]) => {
            if(Object.prototype.toString.call(value) === '[object Object]'){
                convert(value, `${parent}${parent ? '.': ''}${key}`)
            }else{
                result[`${parent}.${key}`] = value;
            }
        })
    }
    convert(entry, '')
    return result;
}

console.log(convertDFS(entry))


function convertBFS(entry){
    let result = {};
    let queue = [];
    let k_queue = [];
    Object.entries(entry).forEach(([key, value]) => {
        queue.push(value);
        k_queue.push(key);
    })

    while(queue.length){
        let first = queue.shift();
        let k_first = k_queue.shift();
        if(Object.prototype.toString.call(first) === '[object Object]'){
            Object.entries(first).forEach(([key, value]) => {
                queue.push(value);
                k_queue.push(`${k_first}.${key}`);
            })
        }else{
            result[k_first] = first;
        }
    }

    return result;
}

console.log(convertBFS(entry))