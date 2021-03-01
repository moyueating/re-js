class Event{
    constructor(){}

    handler = {}

    add(type, fn){
        if(!this.handler[type]){
            this.handler[type] = [];
        }
        this.handler[type].push(fn)
    }

    trigger(type, ...args){
        const all = this.handler[type];
        all.forEach(h => {
            h(...args)
        })
    }
}