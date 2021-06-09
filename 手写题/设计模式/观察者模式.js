// class Observer {
//     constructor(name){
//         this.name = name;
//     }
//     update = data => {
//         console.log(this.name+ '接收到了信息：' + data)
//     }
// }

// class Subject{
//     constructor(){
//         this.observers = [];
//     }

//     subscribe = observer => {
//         this.observers.push(observer);
//     }

//     notify = info => {
//         this.observers.forEach(observer => {
//             observer.update(info)
//         })
//     }
// }

// let subject = new Subject();
// subject.subscribe(new Observer('A'))
// subject.subscribe(new Observer('B'))
// subject.subscribe(new Observer('C'))
// subject.notify('哈哈哈')


const fs = require('fs');
fs.readFile('./发布订阅模式.js',(err, data) => {
    console.log('hahah')
    setTimeout(() => {
        console.log('应该要先输出')
    }, 50)
    fs.readFile('./发布订阅模式.js',(err, data) => {
        console.log('hahah3444')
        setTimeout(() => {
            console.log('io中的settimeout')
        }, 80)
    })
})


console.log('start')
setTimeout(() => {
  console.log('timer1')
  Promise.resolve().then(function() {
    console.log('promise1')
  })
}, 0)
setTimeout(() => {
  console.log('timer2')
  Promise.resolve().then(function() {
    console.log('promise2')
  })
}, 0)
Promise.resolve().then(function() {
  console.log('promise3')
})
console.log('end')

setImmediate(() => {
    console.log('setImmediate')
}, 0)