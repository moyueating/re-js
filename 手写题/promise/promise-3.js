const PENDING = 'PENDING';
const FULLFILLED = 'FULLFILLED';
const REJECTED = 'REJECTED';

class MyPromise {
    constructor(fn){
        this.callbacks = [];
        this.state = PENDING;
        this.value = null;
        fn(this._resolve, this._reject)
    }

    _handle = (callback) => {
        if(this.state === PENDING){
            this.callbacks.push(callback)
        }else if(this.state === FULLFILLED){
            if(callback.onFullFilled){
                callback.resolve(callback.onFullFilled(this.value))
            }else{
                callback.resolve(this.value);
            }
        }else if(this.state === REJECTED){
            if(callback.onRejected){
                callback.reject(callback.onRejected(this.value))
            }else{
                callback.reject(this.value);
            }
        }
    }

    _resolve = (value) => {
        this.state = FULLFILLED;
        this.value = value
        this.callbacks.forEach(cb => {
            this._handle(cb)
        })
    }

    then = (onFullFilled = null, onRejected = null) => {
        return new MyPromise((resolve, reject) => {
            this._handle({
                onFullFilled,
                onRejected,
                resolve,
                reject,
            })
        })
    }

    _reject = (error) => {
        this.state = REJECTED;
        this.value = error;
        this.callbacks.forEach(cb => {
            this._handle(cb)
        })
    }

    catch = onRejected => {
        return this.then(null, onRejected)
    }

    finally = (finalDone) => {
        if(typeof finalDone !== 'function') return this.then();
        let MyPromise = this.constructor;
        return this.then(value => {
            MyPromise.resolve(finalDone()).then(() => value)
        }, reason => {
            MyPromise.resolve(finalDone()).then(() => { throw reason })
        })
    }
}


new MyPromise((resolve, reject) => {
    setTimeout(() => {
        reject('error')
    }, 1000)
}).catch(err => {
    console.log(err);
})