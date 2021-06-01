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
            this.callbacks.push(callback);
            return;
        }
        let cb = this.state === FULLFILLED ? callback.onFullFilled : callback.onRejected;

        if(!cb){
            cb = this.state === FULLFILLED ? callback.resolve : callback.reject;
            cb(this.value);
            return
        }

        let ret = null;
        try {
            ret = cb(this.value)
            cb = this.state === FULLFILLED ? callback.resolve : callback.reject; 
        } catch (error) {
            ret = error;
            cb = callback.reject;
        }finally{
            cb(ret)
        }
    }

    _resolve = (value) => {
        if(this.state !== PENDING) return
        if (value && (typeof value === 'object' || typeof value === 'function')) {
          var then = value.then;
          if (typeof then === 'function') {
            then.call(value, this._resolve, this._reject);
            return;
          }
        }


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

    finally(onDone) {
        if (typeof onDone !== 'function') return this.then();
    
        // return this.then(
        //   value => MyPromise.resolve(onDone()).then(() => value),
        //   reason => MyPromise.resolve(onDone()).then(() => { throw reason })
        // );
      }

    static resolve(value) {
        if (value && value instanceof MyPromise) {
          return value;
        } else if (value && typeof value === 'object' && typeof value.then === 'function') {
          let then = value.then;
          return new MyPromise(resolve => {
            then(resolve);
          });
    
        } else if (value) {
          return new MyPromise(resolve => resolve(value));
        } else {
          return new MyPromise(resolve => resolve());
        }
      }
}


new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('success')
    }, 1000)
}).finally(() => {
    console.log(11)
}).then(data => console.log('===',data))