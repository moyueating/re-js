// 实现 Promise.retry，成功后 resolve 结果，失败后重试，尝试超过一定次数才真正的 reject 


// Promise.retry = function(fn, max){
//     let retryCount = 0;
//     function next(){
//         return fn().then(res => {
//             Promise.resolve(res);
//         }).catch(err => {
//             if(retryCount < max){
//                 retryCount++;
//                 console.log(`重试${retryCount}次`)
//                 return next()
//             }else{
//                 return Promise.reject(err);
//             }
//         })
//     }
//     return next();
// }

Promise.retry = function(fn, max){
    return new Promise(async (resolve, reject) => {
        while(max--){
            try {
                let ret = await fn();
                resolve(ret);
            } catch (error) {
                if(!max){
                    reject(error);
                }
            }
        }
    })
}

function mockGet(){
    return new Promise((resolve, reject) => {
        if(Math.random() >1){
            resolve('success')
        }else{
            reject('error')
        }
    })
}

Promise.retry(mockGet, 3).then(res => {
    console.log('finally', res)
}).catch(err => {
    console.log('重试3次全部失败', err);
})