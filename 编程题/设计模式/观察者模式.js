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

