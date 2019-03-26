### hash
如果都使用hash的话，因为这是工程级别的，即每次修改任何一个文件，所有文件名的hash至都将改变。所以一旦修改了任何一个文件，整个项目的文件缓存都将失效。


### chunkhash
chunkhash是根据不同的入口文件来进行依赖分析的，如果这个入口文件依赖模块没有改变那么chunkhash不会改变。如果有改变则改变，但是我们平时项目里面按需打包的时候一个chunk里面会有js和css,如果我们只改变了css就会导致chunkhash改变,那么同一个chunk下关联的js的chunkhash也改变了，其实内容没变，导致缓存失效了。



### contenthash
contenthash是针对文件内容级别的，只有你自己模块的内容变了，那么hash值才改变，所以我们可以通过contenthash解决上诉问题