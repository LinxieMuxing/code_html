//导入http模块
const http = require('http');
const {request, response} = require("express");
//创建web服务器实例
const server = http.createServer();
//使用服务器实例的.on()方法，为服务器绑定一个request事件
server.on('request', (request, response) => {
   console.log("Someone visits our web server.");
   //request是请求对象，它包含了与客户端相关的数据和属性，例如
   //request.url是客户端请求的URL地址
   //request.method是客户端的method请求类型
   //为了防止中文显示乱码的问题，需要设置响应头
   response.setHeader('Content-Type', 'text/html; charset=utf-8');
   const str = `Your request url is ${request.url}, and request method is ${request.method}`;
   console.log(str);
   response.end("你是sb");
});
//调用server.listen(端口号， cb回调)方法，即可启动web服务器
server.listen(80, () => {
   console.log("http server running at http://127.0.0.1:80");
});