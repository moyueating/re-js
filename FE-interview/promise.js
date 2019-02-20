

const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise(fn) {
    const _this = this
    this.state = PENDING
    this.value = null
    this.resolveCallbacks = []
    this.rejectCallbacks = []

    function resolve(value){
        if(_this.state === PENDING){
            _this.state = RESOLVED
            _this.value = value
            _this.resolveCallbacks.map(cb => cb(_this.value))
        }
    }

    function reject(value){
        if(_this.state === PENDING){
            _this.state = REJECTED
            _this.value = value
            _this.rejectCallbacks.map(cb => cb(_this.value))
        }
    }

    try {
        fn(resolve, reject)
    } catch (error) {
        reject(error)
    }
}

MyPromise.prototype.then = function(onFulfilled, onRejected) {
    const _this = this
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
    onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err }

    if(_this.state === PENDING){
        _this.resolveCallbacks.push(onFulfilled)
        _this.rejectCallbacks.push(onRejected)
    }

    if(_this.state === RESOLVED){
        onFulfilled(_this.value)
    }

    if(_this.state === REJECTED){
        onRejected(_this.value)
    }

}




new MyPromise((resolve, reject) => {
    setTimeout(function() {
        resolve(222)
    }, 1e3)
}).then(res => {
    console.log(res)
})