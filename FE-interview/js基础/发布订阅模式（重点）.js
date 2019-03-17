function My(){
    this.list = []
    this.listen = function (fn){
        this.list.push(fn)
    }
    this.trigger = function (...args){
        this.list.forEach(fn => {
            fn.call(null, ...args)
        })
    }
}

me = new My()
me.listen(function(){
    console.log(1111)
})