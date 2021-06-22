class LocalStorage {
    constructor(){
        this.store = {};
    }

    setItem(k, v, expire){
        this.store[k] = JSON.stringify({
            timesamp: +new Date(),
            expire,
            data: v
        });
    }

    getItem(k){
        try {
            let value = JSON.parse(this.store[k]);
            if(+new Date() - value.timesamp > value.expire * 1000){
                return null
            }else{
                return value.data;
            }
        } catch (error) {
            return null
        }

    }

    clear(){
        this.store = {};
    }

    removeItem(k){
        Reflect.deleteProperty(this.store, k)
    }
}

let localStorage = new LocalStorage()
localStorage.setItem('info', {name: 'zkj',age: 17})
localStorage.setItem('zzz', 12, 2);
console.log(localStorage.store);
setTimeout(() => {
    console.log('应该为null', localStorage.getItem('zzz'));
}, 3000)
localStorage.removeItem('zzz')
console.log(localStorage.store);
localStorage.clear()
console.log(localStorage.store);