### setState机制

setState通过一个队列机制实现state更新

setState有可能是异步执行

主要判断当前是否处于批量更新的状态（isBatchingUpdates），如果是批量更新的状态，那么会将组件保存到dirtyComponents中，以便后续统一操作

如果不处于批量更新状态，那么setState就会立即执行，同步操作

1、setState 只在合成事件和钩子函数（钩子函数一般就是指生命周期）中是“异步”的，在原生事件和 setTimeout 中都是同步的。

2、setState的“异步”并不是说内部由异步代码实现，其实本身执行的过程和代码都是同步的，只是合成事件和钩子函数的调用顺序在更新之前，导致在合成事件和钩子函数中没法立马拿到更新后的值，形成了所谓的“异步”，当然可以通过第二个参数 setState(partialState, callback) 中的callback拿到更新后的结果。

3、setState 的批量更新优化也是建立在“异步”（合成事件、钩子函数）之上的，在原生事件和setTimeout 中不会批量更新，在“异步”中如果对同一个值进行多次 setState ， setState 的批量更新策略会对其进行覆盖，取最后一次的执行，如果是同时 setState 多个不同的值，在更新时会对其进行合并批量更新。


```js
class Demo extends React.Component {
  constructor(props){
    super(props)
    state = {
      count: 0
    }
  }

  componentDidMount(){
    this.setState({
      count: this.state.count + 1
    })
    console.log(this.state.count) // 0

    this.setState({
      count: this.state.count + 1
    })
    console.log(this.state.count) // 0

    setTimeout(() => {
      this.setState({count: this.state.count + 1});  // 2
      console.log(this.state.count);

      this.setState({count: this.state.count + 1});  // 3
      console.log(this.state.count);
    }, 0)
  }
}
```

[setState真的是异步的么](https://juejin.im/post/5b45c57c51882519790c7441#comment)

[深入浅出setState上](https://segmentfault.com/a/1190000015615057)

[深入浅出setState下](https://segmentfault.com/a/1190000015821018)