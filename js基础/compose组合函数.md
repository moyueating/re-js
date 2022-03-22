// https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/ch5.html

```js
[A,B,C].reduce(function(initial, current){
  return function(...args){return initial(current(...args))}
})
```


|   callback   |                  accumulator                          | currentValue |              return value                    |
| ------------ | ----------------------------------------------------- | ------------ | -------------------------------------------- |
| first call   |          A                                            |       B      |  function(...args){return A(B(...args))}     |
| second call  |      function(...args){return A(B(...args))}          |       C      |  function(...args){return A(B(C(...args)))}  |



```js
function compose(...fns){
  return fns.reduce(function(accumulator, current){
    return function(...args) {
      return accumulator(current(...args))
    }
  }) 
}

var f1 = x => x + 1
var f2 = x => x + 2
var f3 = x => x + 3
var f4 = x => x + 4

var Fn = compose(f1, f2, f3, f4)

console.log(Fn(0))

```