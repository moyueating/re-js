[react-router原理](https://github.com/youngwind/blog/issues/109)


### hash路由

通过hashChange来监听hash的变化

缺点：对搜索引擎不友好，不方便追踪用户统计


### history路由

浏览器的前进和后退按钮可以触发popState事件，进行回调处理

history.pushState 和 history.replaceState