Function.prototype.myApply = function(context, rest){
    context = context || window;
    context.fn = this;
    let ret = context.fn(...rest);
    Reflect.deleteProperty(context, 'fn');
    return ret;
}


function test(name, age){
    console.log(this.a, name, age);
}

test.myApply({a: 1111}, ['zkj', 23])