### setState机制

setState通过一个队列机制实现state更新

setState有可能是异步执行

主要判断当前是否处于批量更新的状态，如果是批量更新的状态，那么会将组件保存到dirtyComponents中，以便后续统一操作

如果不处于批量更新状态，那么setState就会立即执行，同步操作


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