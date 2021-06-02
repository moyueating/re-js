// 防抖，触发事件后的固定时间内才会执行回调，如果在时间内重新触发则重置计时
function debounce(fn, delay){
    let timerId = null;
    return function(){
        if(timerId) clearTimeout(timerId)
        timerId = setTimeout(fn, delay);
    }
}

// 节流，固定时间的触发回调
function throttle(fn, delay, context){
    let last = +new Date();
    return function(...args){
        let now = +new Date();
        if(now - last > delay){
            fn.call(context, ...args)
            last = now;
        }
    }
}


