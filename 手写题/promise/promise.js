const PENDING = 'PENDING';
const FULLFILLED = 'FULLFILLED';
const REJECTED = 'REJECTED';

class ZzPromise {
    constructor(fn){
        this.callbacks = [];
        this.state = PENDING;
        this.value = null;
        fn(this._resolve, this._reject)
    }

    // _handle = (callback) => {
    //     if(this.state === PENDING){
    //         this.callbacks.push(onFullFilled);
    //     }else if(this.state === FULLFILLED){
    //         onFullFilled(this.value)
    //     }
    // }

    _reject = err => {
        this.state = REJECTED;
        this.value = err;
        this.callbacks.forEach(cb => {
            this._handle(cb)
        })
    }

    _resolve = value => {
        this.state = FULLFILLED;
        this.value = value;
        this.callbacks.forEach(cb => {
            this._handle(cb)
        })
    }

    _handle = (callback) => {
        const {onFullFilled, onRejected, resolve, reject} = callback
        if(this.state === PENDING){
            this.callbacks.push(callback)
        }else if(this.state === FULLFILLED){
            resolve(onFullFilled ? onFullFilled(this.value): this.value)
        }else if(this.state === REJECTED){
            reject(onRejected ? onRejected(this.value): this.value)
        }
    }

    then = (onFullFilled = null, onRejected = null) => {
        console.log('then')
        return new ZzPromise((resolve, reject) => {
            this._handle({
                onFullFilled,
                onRejected,
                resolve,
                reject
            })
        })
    }

    catch = (onRejected) => {
        return this.then(null, onRejected)
    }

    finally = (final) => {
        
    }

}

new ZzPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('success')
    }, 1000)
}).then(data => {
    console.log('resolve',data); 
    return 'sdfsdfsf'
}).then(data => console.log(data))