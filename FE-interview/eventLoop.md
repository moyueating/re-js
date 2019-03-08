### 进程
狭义定义：进程就是一段程序的执行过程。  
广义定义：进程是一个具有一定独立功能的程序关于某个数据集合的一次运行活动。它是操作系统动态执行的基本单元，在传统的操作系统中，进程既是基本的分配单元，也是基本的执行单元。  

### 线程
通常在一个进程中可以包含若干个线程，当然一个进程中至少有一个线程，不然没有存在的意义。线程可以利用进程所拥有的资源，在引入线程的操作系统中，通常都是把进程作为分配资源的基本单位，而把线程作为独立运行和独立调度的基本单位，由于线程比进程更小，基本上不拥有系统资源，故对它的调度所付出的开销就会小得多，能更高效的提高系统多个程序间并发执行的程度。  

### 执行栈
可以把执行栈认为是一个存储函数调用的栈结构，遵循先进后出的原则。  
![执行栈动图](https://user-gold-cdn.xitu.io/2018/11/13/1670d2d20ead32ec?imageslim)


### async/await
async 函数必定返回 Promise，我们把所有返回Promise的函数都可以认为是异步函数。
```js
async function foo(){
  console.log('foo')
}
var test = foo() // 这里执行foo其实等价于下面

var test = new Promise((resolve, reject) => {
  resolve(undefined)
})
```
```js
function sleep(duration){
  return new Promise((resolve,reject) => {
    setTimeout(resolve,duration)
  })
}
async function foo(){
  console.log('a')
  await sleep(2000)
  console.log('b')
}
foo()
```

```js
// 经典面试
console.log('script start') 

async function async1() {
  await async2()
  console.log('async1 end')
}
async function async2() {
  console.log('async2 end')
  return new Promise((resolve) => {
    resolve(undefined)
  })
}
async1()

setTimeout(function() {
  console.log('setTimeout')
}, 0)

new Promise(resolve => {
  console.log('Promise')
  resolve()
})
  .then(function() {
    console.log('promise1')
  })
  .then(function() {
    console.log('promise2')
  })

console.log('script end')
// script start => async2 end => Promise => script end => async1 end => promise1 => promise2  => setTimeout
```


```js
async function async1(){
  console.log('async1 start')
  await async2()
  console.log('async1 end')
}

async function async2(){
  console.log('async2')
}

console.log('script start')

setTimeout(function(){
  console.log('setTimeout')
},0)

async1()

new Promise((resolve, reject) => {
  console.log('promise1')
  resolve()
}).then(res => {
  console.log('promise2')
})

console.log('script end')

// script start =>  async1 start =>  async2 => promise1 => script end => async1 end => promise2
```


### 参考资料

[event-loop 考拉](https://github.com/kaola-fed/blog/issues/234)  
[vue社区 event-loop](https://mp.weixin.qq.com/s/mT5XvdMnlw0Qt8EBvgDtYQ)