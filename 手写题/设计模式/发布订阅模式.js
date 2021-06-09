// 发布订阅模式，将
class Pub {
    constructor(){
        this.event = {};
    }

    subscribe = (type, callback) => {
        if(this.event[type]){
            this.event[type].push(callback);
        }else{
            this.event[type] = [callback];
        }
    }

    publish = (type, data) => {
        const subscribedEvents = this.event[type]
        subscribedEvents.forEach(event => {
            event(data);
        })
    }
}

const pub = new Pub();
pub.subscribe('click', data => {
    console.log('点击事件呀, ' + data)
})
pub.subscribe('mousemove', data => {
    console.log('鼠标移动事件呀, ' + data)
})

pub.publish('click', '哈哈哈');
pub.publish('mousemove', '看鼠标动了');