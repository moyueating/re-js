Function.prototype.myCall = function(context, ...rest){
    context = context || window;
    context.fn = this;
    let ret = context.fn(...rest);
    Reflect.deleteProperty(context, 'fn');
    return ret;
}


function test(name){
    console.log(this.a, name);
}

test.myCall({a: 1111}, 3333)