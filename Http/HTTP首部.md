### 通用首部

- Cache-Control  缓存控制  
- Connection  连接方式，keep-alive  
- Date 创建HTTP报文的日期时间  
- Transfer-Encoding  传输报文主体的编码方式  
- Via  代理服务器相关信息  
- Waring 问题警告

### Request Header

- Accept 能处理的媒体类型  
- Accept-Charset 能接收的  
- Accept-Language 能接收的自然语言  
- Accept-Encoding 能接收的内容编码  

- From 请求方的邮箱  
- Except 期待服务器的制定行为  
- Host 服务器的域名  
- Referer 浏览器访问的前一个页面  
- User-Agent 客户端信息  

- If-Match 两端资源标记比较, E-Tag,两者标记一致才处理请求  
- If-None-Match  两端资源比较，两者不一致才处理请求，和If-Match相反  
- If-Modified-Since 表示一个时间节点，在这个时间节点之后又更新的正常处理请求，状态码200，没有更新的则返回304

- Range 资源的范围请求

### Response Headers

- Accept-Range 告知客户端是否可以处理范围请求  
- Age 资源在代理缓存中存在的时间  
- ETag 资源标识有强弱之分  
- Location 重定向到某个url  
- Server 服务器名字  
- WWW-Authenticate 获取资源需要的验证信息  

### 实体首部字段

- Allow 允许的请求方式  
- Content-Encoding 告知客户端实体的编码方式  
- Content-Language 实体的语言  
- Content-Length 实体的长度  
- Content-Location 主体资源的URI  
- Content-Range 实体内容的范围位置  
- Content-Type 实体的媒体类型  
- Content-MD5 实体的MD5算法  
- Expires 资源的过期时间  
- Last-Modified 资源最终修改时间  