Function.prototype.myBind = function(bindThis, ...args){
    let target = this;
    return function(...inArgs){
        console.log('=-====', this.test);
        return target.apply(bindThis, args.concat(inArgs));
    };
}

function Food(name, price){
    console.log(this.test, name, price);
}

let a = Food.myBind({
    test: true,
}, 'zkj', 344).myBind({
    test: false,
})

a()