let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(11111)
    }, 1000)
})


let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(22222)
    }, 1000)
})

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(33333)
    }, 0)
})


let all = [p1, p2, p3];

Promise._any = function(ps= []){
    let len = ps.length;
    return new Promise((resolve, reject) => {
        while(len--){
            let current = ps.pop(); 
            current.then(res => {
                resolve(res)
            }).catch(err => {
                if(len <= 0){
                    reject('all failed')
                }
            })
        }
    })
}

Promise._allSettled = function(ps =[]){
    let finished = 0;
    result = [];
    return new Promise((resolve, reject) => {
        ps.forEach((p, i) => {
            p.then(res => {
                result[i] = {type: 'fufilled', value: res};
            }).catch(reason => {
                result[i] = {type: 'rejected', value: reason};
            }).finally(() => {
                finished++;
                if(finished >= ps.length){
                    resolve(result);
                }
            })
        })
    })
}

// Promise._any(all).then(da => {
//     console.log('发现一个成功的', da);
// }).catch(reason => {
//     console.log('全部失败了', reason)
// })


Promise._allSettled(all).then(da => {
    console.log('所有数据', da);
})