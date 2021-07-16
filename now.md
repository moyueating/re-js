### 性能优化
- lighthouse的相关指标以及实践优化
    - 资源体积优化
        - 异步的拆分，splitchunks常规
        - webpack: resolve.alias (解决一些公共依赖因版本差异的重复打包问题)
        - tree-shaking 分两个阶段没有做es6/es5拆分前，通过细化引入的path来解决(npm包没有对应的module: 'es/index.js'的时候，node_module的代码都是经过打包后的commonjs，webpack本身没法再做tree-shaking的分析了，所以需要人工介入)，做了拆分后依赖webpack自行打包逻辑来处理（组件化后的npm包支持了module: es的类型，然后本身module的字段优先级高于main字段，所以支持了es模块后可以借助webpack本身的tree-shaking）
        - es5/es6的区分打包
        - ie的动态polyfill方案基于开源的polyfill-service
    - 服务端的流式下发，提升响应速度，提高ttfb
    - 服务端的soa的ip直连，减少服务请求时间
    - 组件化，减少js资源的请求
    - 利用ares静态资源的合并
    - webp图片，动态切图

### 工程化
- preact的切换，redux的引入改造
- eslint git-hooks git分支的合并流程，push限制，走merge request代码审核
- ci/cd，jest-webpack build-ares发布
- 单元测试jest + enzyme
- webpack的编译优化，dllplugin，happypack, webpackJSONP.push 的拦截处理(https://www.processon.com/diagraming/60da903f1efad461e4570c3d)
- webpack插件(资源合并插件，编译失败插件抛出101让pipeline中job失败)，styleInjectLoder自动注入同级目录的样式文件，loadableLoader补充异步代码逻辑块
- 客户端的补偿渲染， 记录initParams+url
- 模板创建，git远端分支的定期清理，npm包版本依赖检查(npm outdated)

### 组件化
- 全站的酒店搜索框，支持异步加载
- 国际化shark扫描, AST语法识别正则匹配全量翻译字段，子进程进行

### 