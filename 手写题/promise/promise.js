// promise/A+规范 https://www.ituring.com.cn/article/66566

const PENDING = 'PENDING';
const FULLFILLED = 'FULLFILLED';
const REJECTED = 'REJECTED';

class Zpromise {
    constructor(fn){
        this.callbacks = [];
        this.state = PENDING;
        this.value = null;
        fn(this._resolve, this._reject)
    }

    _resolve = value => {
        if(this.state !== PENDING) return
        if(value && (typeof value === 'object' || typeof value === 'function')){
            let then = value.then;
            if(typeof then === 'function'){
                then.call(value, this._resolve, this._reject);
                return;
            }
        }
        this.state = FULLFILLED;
        this.value = value;
        this.callbacks.forEach(callback => this._handle(callback));
    }

    _reject = error => {
        // if(this.state !== PENDING) return
        this.state = REJECTED;
        this.value = error
        this.callbacks.forEach(callback => this._handle(callback))
    }

    _handle = (callback) => {
        if(this.state === PENDING){
            this.callbacks.push(callback);
            return;
        }
        let cb = this.state === FULLFILLED ? callback.onFullfill : callback.onReject;
        let rr = this.state === FULLFILLED ? callback.resolve : callback.reject;
        if(!cb){
            return rr(this.value);
        }
        let ret = cb(this.value);
        rr(ret);
    }


    then = (onFullfill, onReject) => {
        return new Zpromise((resolve, reject) => {
            this._handle({
                onFullfill,
                resolve,
                onReject,
                reject,
            })
        })
    }

    catch = onReject => {
        return this.then(null, onReject);
    }

    finally = done => {
        if(typeof done !== 'function') return this.then();
        return this.then(
            value => Zpromise.resolve(done()).then(() => value),
            reason => Zpromise.resolve(done()).then(() => { Zpromise.reject(reason) })
        )
    }

    static resolve = value => {
        // 参数本身是promise直接返回该promise
        if(value && value instanceof Zpromise){
            return value;
        }else if(value && (typeof value === 'object' || typeof value.then === 'function')){
            // 参数是一个 thenable 对象
            let then = value.then;
            return new Zpromise(resolve => then(resolve))
        }else if(value){
            return new Zpromise(resolve => resolve(value))
        }else{
            return new Zpromise(resolve => resolve())
        }
    }
    // Promise.reject 与 Promise.resolve 类似，区别在于 Promise.reject 始终返回一个状态的 rejected 的 Promise 实例，
    // 而 Promise.resolve 的参数如果是一个 Promise实例的话，返回的是参数对应的 Promise 实例，所以状态不一 定。
    static reject = value => {
        if(value && (typeof value === 'object' || typeof value.then === 'function')){
            let then = value.then;
            return new Zpromise((resolve, reject) => then(reject))
        }else{
            return new Zpromise((resolve, reject) => reject(value))
        }
    }

    static all = promises => {
        return new Zpromise((resolve, reject) => {
            let fullfilled = 0;
            let len = promises.length;
            let result = new Array(len);
            promises.forEach((promise, i) => {
                Zpromise.resolve(promise).then(ret => {
                    fullfilled++;
                    result[i] = ret;
                })
                if(fullfilled === len){
                    resolve(result);
                }
            }, reason => reject(reason))
        })
    }

    static allSettled = promises => {
        return new Zpromise((resolve, reject) => {
            let result = []
            let count = 0;
            promises.forEach((promise, i) => {
                promise.then(
                    ret => {
                        result[i] = {
                            status: FULLFILLED,
                            value: ret,
                        }
                }).catch(reason => {
                    result[i] = {
                        status: REJECTED,
                        value: reason,
                    }
                }).finally(() => {
                    count++;
                    if(count === promises.length){
                        resolve(result)
                    };
                })
            })
        })
    }

    static race = promises => {
        return new Zpromise((resolve, reject) => {
            promises.forEach((promise) => {
                Zpromise.resolve(promise).then(
                    ret => resolve(ret), 
                    reason => reject(reason)
                )
            })
        })
    }

}

// Zpromise.resolve(new Zpromise(resolve => resolve(123))).then(data => console.log(data));

let p1 = new Zpromise((resolve, reject) => {
    setTimeout(() => {
        reject('p1')
    }, 2000)
})

let p2 = new Zpromise(resolve => {
    setTimeout(() => {
        resolve('p2')
    }, 1000)
})

// Zpromise.race([p1, p2]).then(d => {
//     console.log(d)
// }).catch(err => console.log('err', err))

Zpromise.allSettled([p1, p2]).then(d => {
    console.log('=====', d)
})

