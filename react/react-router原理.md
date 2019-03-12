[react-router原理](https://github.com/youngwind/blog/issues/109)


### hash路由

通过hashChange来监听hash的变化

缺点：对搜索引擎不友好，不方便追踪用户统计


### history路由

浏览器的前进和后退按钮可以触发popState事件，进行回调处理

history.pushState 和 history.replaceState 

触发路由跳转的有三个地方：一个是a标签，一个是js方法跳转，还有一个是浏览器的前进后退按钮。所以需要处理的就是拦截这三种情况

每个Route都是一个路由组件实例，把所有的路由存放在数组中，封装一个方法处理history.pushState 和 history.replaceState ，在这个方法内部遍历存放的数组，按照当前的window.location.pathname去匹配每个路由的path路径，匹配命中返回组件内容，否则就是null,视觉上实现了切换路由的效果。