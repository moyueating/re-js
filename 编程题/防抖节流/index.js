// throttle
// 节流，固定时间的触发回调
// 有头没尾
function throttle1(fn, wait, context) {
    let last=0
    return function(...args){
      const now = +new Date()
      if(now - last > wait){
        fn.apply(context, args)
        last = now
      }
    }
  }
  // 没头有尾
  function throttle2(fn, wait, context) {
    let last
    return function(...args){
      const now = +new Date()
      let timer = null;
      if(!timer){
        timer = setTimeout(function(){
            timer = null;
            fn.apply(context, args)
          }, wait)
      }
    }
  }
  
  // 有头有尾
  function throttle(fn, wait, context){
    let last=0
    let timer
    return function(...args){
      const now = +new Date()
      if(now - last > wait){
        if(timer){
          clearTimeout(timer)
          timer = null
        }
        fn.apply(context, args)
        last = now
      }else{
        timer = setTimeout(function(){
          fn.apply(context, args)
        }, wait)
      }
    }
  }
  
  
  
  // 防抖，触发事件后的固定时间内才会执行回调，如果在时间内重新触发则重置计时
  function debounce(fn, wait, context){
    let timer = null;
    return function(...args){
      if(timer){
        clearTimeout(timer)
      }
      timer = setTimeout(function(){
        fn.apply(context, args)
      }, wait)
    }
  }
  
  function debounce(func) {
    var timer;
    return function () {
      cancelAnimationFrame(timer)
      timer = requestAnimationFrame(func);
    }
  }

