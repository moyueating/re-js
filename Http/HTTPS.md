### https
HTTPS 还是通过了 HTTP 来传输信息，但是信息通过 TLS 协议进行了加密。  
TLS 协议位于传输层之上，应用层之下。


### SSL和TLS
SSL和TLS是不同时期的产物，但是是同一个概念，只是TLS是标准化后的SSL。  

### 加密方式
对称加密 + 非对称加密 + CA数字证书 + 数字签名  [资料](https://zhuanlan.zhihu.com/p/43789231)  


### 三次握手，四次挥手
客户端发送带有syn（synchronize）标志发送给接收端  
接收端返回 syn/ack 给客户端， 确认收到数据包  
客户端发送 ack(acknowledgement) 标志的数据包，表示握手结束  

接下来开始传输数据

客户端发送 FIN（finish）标志给接收端，表示想结束链接  
接受端数据可能没处理完成，所以先返回 ack 给客户端让客户端继续等待后续消息，此时客户端进入 FIN_WAIT状态  
当接收端处理完后，给客户端发送 FIN/ACK 给客户端表示可以关闭链接了  
但是客户端不相信网络，最后又发了一次 ACK 给接受端，并进入TIME_WAIT状态，server端接受到ACK后就知道可以关闭了，client端等待2MSL（最大报文段生存时间）后没有收到回复，证明server已经关闭，client关闭，TCP链接结束。

为什么不是两次或者四次握手？两次不够，可能出现问题，四次多余


### HTTP2.0
HTTP2.0有几个改进点：
- 一个是支持服务端推送  
- 二是支持TCP连接复用，通过Request Headers中Connection：keep-alive  
- 使用二进制代理文本进行传输



