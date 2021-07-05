let p1 = function(data){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('1秒后'+data)
        }, 1000)
    })
}

let p2 = function(data){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(data);
            resolve('2秒后'+data)
        }, 2000)
    })
}

let p3 = function(data){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(data);
            resolve('3秒后'+data)
        }, 3000)
    })
}

let all = [p1, p2, p3];
let [first, ...others] = all;
others.reduce((pre, next) => {
    return pre.then(res => {
        console.log(res);
        return next(res);
    })
}, first('init'))