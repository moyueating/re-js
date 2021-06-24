// 用 setTimeout 实现 setInterval，阐述实现的效果与setInterval的差异



function mySetInterval(fn, time){
    mySetInterval.timer = setTimeout(() => {
        fn();
        mySetInterval(fn,time);
    }, time)
}

mySetInterval.clear = function(){
    clearTimeout(mySetInterval.timer)
}

let id = mySetInterval(function(){
    console.log('sssss')
}, 1000)


setTimeout(() => {
    mySetInterval.clear()
}, 3000)