// throttle
// 在一段时间内，只会触发一次事件
// 有头没尾
function throttle1(fn, wait, context) {
  let last
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
    setTimeout(function(){
      fn.apply(context, args)
    }, wait)
  }
}

// 有头有尾
function throttle(fn, wait, context){
  let last
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



// 防抖，尽管触发事件，我一定在事件触发n秒后执行

function debounce(fn, wait, context){
  let timer
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