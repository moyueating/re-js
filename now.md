- 性能优化，减少ttfb的时间(renderNodetoStream)，减少服务端请求的响应时间通过IP直连，资源优化，preload，图片webp, servicework
- webpack打包优化：资源的拆分，dll，按需引入加载，tree shaking，ES6，ES5的分开打包，loader plugin的开发，webpack5的升级(踩坑：webpackJSON的名字改变)
- 工程化，基于lerna的前端工具库的搭建开发，基于gitlab的CI/CD完成代码检查校验，单测检查以及最终的覆盖率展示。
- 主要是react技术栈
    - hooks
    - fiber
    - redux


- node 
    - nginx负载均衡
    - 业务上根据UA判断online跳转h5通过nginx前置，优化性能