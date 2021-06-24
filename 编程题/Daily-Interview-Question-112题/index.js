var entry = {
    'a.b.c.dd': 'abcdd',
    'a.d.xx': 'adxx',
    'a.e': 'ae'
}

// 要求转换成如下对象
// var output = {
//     a: {
//         b: {
//             c: {
//                 dd: 'abcdd'
//             }
//         },
//         d: {
//             xx: 'adxx'
//         },
//         e: 'ae'
//     }
// }

function convert(entry){
    let result = {}

    function test(target, key){
        if(!target[key]){
            target[key] = {};
        }
        return target
    }

    for(let [key, value] of Object.entries(entry)){
        key.split('.').reduce((pre, current, index, arr) => {
            if(index === arr.length - 1){
                pre[current] = value
            }else{
                pre[current] = pre[current] ? pre[current] : {}
            }
            return pre[current]
        }, result)
    }
    console.log(JSON.stringify(result));
}
convert(entry)
