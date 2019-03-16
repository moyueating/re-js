将原生DOM通过用js对象的形式表示出来

v-dom产生的原因其实是因为在浏览器中频繁的修改dom的开销是比较大的，在中间映射一层v-dom，我们直接操作js对象比直接操作dom显然要快很多，当我们操作完v-dom后在一次性的渲染到DOM中。

<!-- <h1>hello world</h1> -->
```js
let vDom = {
  $$type: Symbol(react.element)
  type: 'h1',
  props: {
    children: 'hello world'
  },
  key: null,
  ref: null
  ...
}

```