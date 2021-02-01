RPC：Remote Procedure Call (远程过程调用)

和 ajax 有什么相同点？
1. 都是两个计算机之间的通信
2. 都需要双方约定一个数据格式

和 ajax 有什么不相同点？
1. ajax 一定要使用DNS作寻址服务，RPC 不一定要使用DNS作寻址服务
2. RPC 应用层的协议一般不使用HTTP，ajax 应用层的协议使用HTTP
3. RPC 基于TCP或UDP协议

- 寻址/负载均衡
1. ajax 使用DNS进行寻址
2. RPC 使用特有服务进行寻址

- TCP 通信方式
  - ajax 单工通信
  - RPC 多种形式通信 
    1. 半双工通信 客户端向服务端发送数据包，服务端响应客户端，客户端再给服务端发送数据包...
      缺点：同一时间段并发请求的话，容易造成请求包和返回包错乱的情形 (不支持高并发，这就要求请求包与返回包带上序号)
    2. 全双工通信 自由发送
      全双工通信与半双工通信的区别是全双工通信在半双工通信的基础上加上包序号

- 二进制协议
  - ajax：HTTP (HTML 、json)
  - RPC：二进制协议 (更小的数据包体积，更快的编码速率) 


# RPC 调用：Buffer 编码解码二进制数据包

   00 00 00        0000        0000
  write(x, 0)  write(x, 3)  write(x, 5)

  protocol  buffer

# RPC 调用：net 建立多路复用的 RPC 通道