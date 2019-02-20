### 追求纯函数的理由

#### 可缓存性
```js

function memorize(fn) {
  const cache = {}
  return function(...args) {
    const key = JSON.stringify(args)
    cache[key] = cache[key] || fn.apply(fn, args)
    return cache[key]
  }
}

function add(x, y) {
  console.log(x, y)
  return x + y
}

var zkj = memorize(add)

zkj(1,2) // 1, 2
zkj(1,2) // 
```

#### 可移植性／自文档化（Portable / Self-Documenting）


#### 可测试性（Testable）



#### 合理性（Reasonable
















参考资料  
[js函数式编程指南](https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/)
