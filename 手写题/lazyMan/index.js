

class LazyManClass {
    constructor(name){
        this.name = name;
        this.events = [];
        console.log(`Hi I am ${name}`)
        setTimeout(() => {
            this.next()
        }, 0);
    }

    next() {
        let current = this.events.shift();
        current && current()
    }

    sleep(time){
        let _this = this;
        this.events.push(function(){
            setTimeout(() => {
                console.log(` 等待了${time}秒...`);
                _this.next();
            },time)
        })
        return this;
    }

    sleepFirst(time){
        let _this = this;
        this.events.unshift(function(){
            setTimeout(() => {
                console.log(` 等待了${time}秒...`);
                _this.next();
            },time)
        })
        return this;
    }

    eat(sth){
        this.events.push(() => {
            console.log(`I am eating ${sth}`);
            this.next();
        })
        return this;
    }
}

function LazyMan(name){
    return new LazyManClass(name)
}


// LazyMan('Tony');
// Hi I am Tony

// LazyMan('Tony').sleep(10).eat('lunch');
// Hi I am Tony
// 等待了10秒...
// I am eating lunch

LazyMan('Tony').eat('lunch').sleep(10).eat('dinner');
// Hi I am Tony
// I am eating lunch
// 等待了10秒...
// I am eating diner

// LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');
// Hi I am Tony
// 等待了5秒...
// I am eating lunch
// I am eating dinner
// 等待了10秒...
// I am eating junk food