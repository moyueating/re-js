// async函数会返回一个Promise，当async函数有返回值的时候，Promise的resolve会负责传递这个值，async函数报错的话Promise的reject会reject这个错。
// [你可能用错async/await](https://juejin.im/entry/5af66e9df265da0b8336d1c8)
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function  MDN的例子很清晰
// https://github.com/Jocs/jocs.github.io/issues/11  (ES6 generator处理异步)

function resolveAfter2Seconds(){
  console.log('starting slow promsie')
  return new Promise(resolve => {
    setTimeout(function(){
      resolve('slow')
      console.log('2s promsie is done')
    }, 2000)
  })
}

function resolveAfter1Second(){
  console.log('starting fast promsie')
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve('fast')
      console.log('1s promsie is done')
    }, 1000)
  })
}

// 最常见的写法，
// 这个函数执行完一共花了3s，如果是两个依赖的请求这样也没有问题，但是如果是两个不依赖的，这样无疑是浪费了时间
async function start(){
  const slow = await resolveAfter2Seconds()
  console.log(slow)

  const fast = await resolveAfter1Second()
  console.log(fast)
}


// 同时请求，
// 执行完花了2s，这样的写法解决了两个请求同时请求的问题，但是请求后的异步操作还是两个await
// 这样导致我快的请求后续操作还在慢的请求的后面
// 输出结果如下
// starting slow promsie
// starting fast promsie
// 1s promsie is done ,其实这一步快的请求应该可以开始渲染数据了，但是由于被慢的请求拖累
// 2s promsie is done
// slow
// fast
async function start(){
  const slow = resolveAfter2Seconds()
  const fast = resolveAfter1Second()

  console.log(await slow)
  console.log(await fast)
}

// 并行请求，各自处理，互不依赖
var parallel = async function() {
  async function fast(){
    console.log(await resolveAfter2Seconds())
  }
  async function slow(){
    console.log(await resolveAfter1Second())
  }
  result = await Promise.all([
      fast(),
      slow(),
  ]);
}