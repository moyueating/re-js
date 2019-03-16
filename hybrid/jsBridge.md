
js  <==> jsBridge  <==>  native

### js调用native

- 定义URL scheme：js加载定义好的scheme，客户端拦截然后进行对应的操作，如果回调则native通知js回调

- 客户端直接向webview注入API，通过webview提供的接口，向js的context中直接注入对象或者方法供js调用


### native调用js

其实就是执行拼接 JavaScript 字符串

[去哪儿jsBridge](https://blog.ymfe.org/%E6%B7%B7%E5%90%88%E5%BC%80%E5%8F%91%E4%B8%AD%E7%9A%84JSBridge/)
