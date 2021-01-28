### Secure
标记为 Secure 的 Cookie 只应通过被 HTTPS 协议加密过的请求发送给服务端，因此可以预防 [中间人攻击](https://developer.mozilla.org/zh-CN/docs/Glossary/MitM)攻击者的攻击。但即便设置了 Secure 标记，敏感信息也不应该通过 Cookie 传输，因为 Cookie 有其固有的不安全性，Secure 标记也无法提供确实的安全保障, 例如，可以访问客户端硬盘的人可以读取它。

### http-only
只允许请求获取，不允许脚本获取cookie


### SameSite
- Strict Cookies只会在第一方上下文中发送，不会与第三方网站发起的请求一起发送
- Lax Cookies允许与顶级导航一起发送，并将与第三方网站发起的GET请求一起发送。这是浏览器中的默认值
- None Cookie将在所有上下文中发送，即允许跨域发送。设置SameSite为None的同时必须设置Secure，当然需要浏览器的支持



[资料](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Set-Cookie/SameSite)

[Cookie 的 SameSite 属性](https://www.ruanyifeng.com/blog/2019/09/cookie-samesite.html)
