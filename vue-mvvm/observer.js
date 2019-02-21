
class Dep {
  constructor () {
    this.subs = [];
  }
  addSub (sub) {
    this.subs.push(sub);
  }
  notify () {
    this.subs.forEach((sub) => {
      sub.update();
    })
  }
}


function defineReactive(obj, key, val) {
  const dep = new Dep();
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      console.log(val)
      dep.addSub(Dep.target)
      console.log(dep)
      return val
    },
    set: function(newVal) {
      if(newVal === val) return;
      val = newVal
      dep.notify()
    } 
  })
}

function observer(value) {

  Object.keys(value).forEach((key) => {
    defineReactive(value, key, value[key])
  })
}

class Watcher {
  constructor () {
    Dep.target = this;
  }
  update () {
    console.log("视图更新啦～");
  }
}


class Vue {
  constructor(opts){
    this._data = opts.data
    observer(this._data)
    new Watcher()
    console.log('render~', this._data.test);
  }
}

var vue = new Vue({
  data: {
    test: 'this is test',
    name: 'zkj'
  }
})  
// vue._data.test = 'sssss'

Dep.target = null



