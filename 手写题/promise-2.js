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

    _handle = (callback) => {
        const {
            onFullFilled,
            resolve,
        } = callback;
        if(this.state === PENDING){
            this.callbacks.push(callback)
        }else if(this.state === FULLFILLED){
            if(onFullFilled){
                resolve(onFullFilled(this.fullfilledValue))
            }else{
                resolve(this.fullfilledValue);
            }
        }
    }

    _resolve = (value) => {
        console.log('调用')
        this.state = FULLFILLED;
        this.fullfilledValue = value
        this.callbacks.forEach(cb => {
            this._handle(cb)
        })
    }

    then = (onFullFilled = null) => {
        return new MyPromise(resolve => {
            this._handle({
                onFullFilled,
                resolve,
            })
        })
    }
}


new MyPromise((resolve, reject) => {
    console.log('resolve 1')
    setTimeout(() => {
        resolve(1111)
    }, 1000)
}).then(data => {
    console.log('resolve '+`${data}-2222`)
    return `${data}-2222`;
}).then(data => {
    setTimeout(() => {
        console.log('resolve '+`${data}-3333`)
        return `${data}-3333`;
    }, 3000)
})