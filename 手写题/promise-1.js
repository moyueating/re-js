// https://zhuanlan.zhihu.com/p/58428287

const PENDING = 'PENDING';
const FULLFILLED = 'FULLFILLED';
const REJECTED = 'REJECTED';

class MyPromise {
    constructor(fn){
        this.callbacks = [];
        this.state = PENDING;
        this.fullfilledValue = null;
        fn(this._resolve)
    }

    _resolve = (value) => {
        this.state = FULLFILLED;
        this.fullfilledValue = value
        this.callbacks.forEach(cb => {
            cb(value)
        })
    }

    then = (onFullFilled) => {
        if(this.state === PENDING){
            this.callbacks.push(onFullFilled)
        }else if(this.state === FULLFILLED){
            onFullFilled(this.fullfilledValue)
        }
        return this; // 初步的链式调用
    }
}


new MyPromise((resolve, reject) => {
    console.log('resolve jahjahahah')
    setTimeout(() => {
        resolve(2222)
    }, 500)
}).then(data => {
    console.log('then1', data)
}).then(data => {
    console.log('then2', data)
})