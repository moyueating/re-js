// 由于 Generator 函数返回的遍历器对象，只有调用next方法才会遍历下一个内部状态，所以其实提供了一种可以暂停执行的函数。yield表达式就是暂停标志
// yield表达式没有返回值，恒返回undefined

function* gen(){
    var x = yield 3
    var y = yield 9
    return 12
}
var g = gen()
console.log(g)

// console.log(g.next()) //{ done: false, value: 3 }
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())

// 自动执行generator函数，限于同步情况
function run(gen){
    const g = gen()

    function next(){
        const result = g.next()
        console.log(result)
        if(result.done) return;
        next()
    }

    next()
}

run(gen)


// generator函数处理异步的问题
// 首先需要将一般的异步操作封装成thunk函数
// js中的thunk函数就是将多参数的函数转化为单一参数的函数

readFile(path, function(err, data){
    console.log(data)
})

function thunk(fn){
    return function(...args){
        return function(callback){
            return fn.call(null, ...args, callback)
        }
    }
}

var newRead = thunk(readFile)
newRead(path)(function(err, data){
    console.log(data)
})


function* readMore(){
    var result1 = yield newRead(path1)
    var result2 = yield newRead(path2)
}

// 手动执行readMore这个generator函数
var g = readMore()

var r1 = g.next()
r1.value(function(err,data){
    if(err) throw err
    var r2 = g.next(data)
    r2.value(function(err, data){
        if(err) throw err
        g.next(data)
    })
})

// 实现异步操作自动执行的run

function run(gen){
    var g = gen()
    function next(err, data){
        var result = g.next(data)
        if(result.done) return
        result.value(next)
    }
    next()
}


// 基于promise版本
var readFile = function(filename) {
    return new Promise(function(resolve, reject){
        fs.readFile(filename,function(err, data){
            if(err) return reject(err)
            resolve(data)
        })
    })
}

var gen = function* (){
    var result1 = yield readFile(filename1)
    var result2 = yield readFile(filename2)
}

// 手动
var g = gen()
g.next().value.then(function(data){
    g.next(data).value.then(function(data2){
        g.next(data2)
    })
})

// 自动promise版本
function run(gen) {
    var g = gen()

    function next(data){
        var result = g.next(data)
        if(result.done) return result.value
        result.value.then(function(data){
            next(data)
        })
    }

    next()
}

