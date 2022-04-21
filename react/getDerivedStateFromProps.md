## getDerivedStateFromProps为什么是静态方法

React 16+版本中为什么用更新生命周期函数？ - 方正的回答 - 知乎
https://www.zhihu.com/question/278328905/answer/399344422


- 理解 fiber 架构
- unsafe 原因
- 静态函数：getDerivedStateFromProps
- getSnapshotBeforeUpdate
- 减少声明周期，提高性能

### 理解 Fiber 架构
跟着 本文 走，你可以实现一个 Fiber 架构的简化 React 版本。其中你会发现，现在 React 的做法是将 reconciler ( diff + render + 创建 DOM ) + commit（ patch ），这两个操作是分开的。

React 16 在发布之前就已经提到过，某些生命周期可能会被调用多次，这是因为 Fiber 架构下 reconciler 阶段会调用多次，等一切结束以后，才调用 Commit ，然而 reconciler 就会执行那些所谓的 wilxxxx ，这明显是不符合「语意」的，既然 “will“ 了，然后又 “will“ 一次，这不是脱了裤子放屁？

因此，willxxx 基本都会被删除或者替换更明确的语意。

### Unsafe 的原因
如果你能联系上下文，你就明白为什么 React team 认为 willxxx 是 unsafe 了。在 react 诞生这几个生命周期函数以来，大家可谓是无所不用其极。轻量一点的，在 willxxx 里设置 state，重口味一点的在 willxxx 里操作真实 DOM ( 用ref )，变态一点的在 willxxx 里引入 jQ 一顿乱搞。

以前么， willxxx 只执行一次，看似问题不是很大，虽然官方并不愿意看到大家这么乱搞，但是是可以接受的。现在因为 willxxx 可能执行多次，这问题就非常严重了。

比如，某些个用户在 willxxx 中操作了真实 DOM ，那么调用这个函数的时候，页面会马上重绘，更奇妙的是，如果这个函数被调用了两次，那就是两次重绘，性能谁能受得了？多了怎么办？所以，这明显不是 React team 想看到的

再说，在 willxxx 中 setState ，其实并没有真正的运行更新逻辑，而是将 willxxx 中的所有 setState 进行合并，然后在 render 之前，一次打到 state 里，再进行 re-render（这就是为什么 setState 是一个看似异步的函数），所以 setState 没什么问题，但是操作 DOM 就难受了。

### 静态函数：getDerivedStateFromProps
为什么，为什么，为什么，我要在标题前面写上“静态函数”这几个字？

静态函数的特点就是，他不属于任何一个实例，因此，他的内部 this 指向并不是组件的本身。这样的结果直接导致了，用户不能做以下几个事情：

用this.refs....
用this.上的任何方法
这样的设计，能够使得 getDerivedStateFromProps 这个函数强迫变成一个纯函数，逻辑也相对简单，就没那么多错误了。

### getSnapshotBeforeUpdate
我们看一下下面的清晰图，你就能知道，getSnapshotBeforeUpdate 是让那些以前比较变态的用户完成真实 DOM 读取的一个代替品，因为 getSnapshotBeforeUpdate 已经到了 commit 阶段，因此这个函数只会运行一次，所以就和以前的 willxxx 一样，使用了。
[react生命周期](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)


### 减少声明周期，提高性能
用户级别的错误会发生在几个地方：

constructor
一切生命周期
render 函数
事件回调
componentDidcatch的实现是依赖try catch ，理论上来说，我们只要在这些函数上都 try catch 就能够捕获框架级别的大部分错误，但是 try catch 性能并不好，constructor、render 函数、事件回调 这三个玩意呢，是不能改的，也不能去掉的，这是根基。

生命周期函数才是额外实现的，那么优化肯定要从这些个周期进行，通过砍掉乱七八糟的 willxxx 函数，我们就不必 try catch 那么多了，因此性能得到了一点提升。