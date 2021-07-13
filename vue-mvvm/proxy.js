class Dep {
    constructor(){
        this.tasks = [];
    }
    add(task){
        this.tasks.push(task)
    }
    notify(){
        this.tasks.forEach(task => {
            task.update();
        })
    }
}

class Watcher{
    constructor(){
        Dep.target = this;
    }

    update(){
        console.log('视图更新了11111');
        Dep.target = null;
    }
}

function observer(data){
    new Watcher();
    let dep = new Dep();
    return new Proxy(data, {
        get(target, key){
            dep.add(Dep.target);
            return Reflect.get(target, key)
        },
        set(target, key, val){
            dep.notify()
            return Reflect.set(target, key, val)
        }
    })
}


let data = {name: 111}
let proxy = observer(data)
proxy.name // 这层就是类似view上的取值
proxy.name = '222'