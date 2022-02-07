//1.引入express
const express = require("express");
const {request, response} = require("express");

//2.创建应用对象
const app = express();

//3.创建路由规则
app.get('/server',(request, response)=>{
    //设置响应头 设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");
    //响应头
    response.setHeader("Access-Control-Allow-Headers", "*");
    //设置响应体
    response.send("Hello AJAX -3");
});
//可接受任意类型的请求
app.all('/server',(request, response)=>{
    //设置响应头 设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");
    //响应头
    response.setHeader("Access-Control-Allow-Headers", "*");
    //设置响应体
    response.send("Hello AJAX POST");
});
//JSON响应
app.get('/json-server',(request, response)=>{
    //设置响应头 设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");
    //响应头
    response.setHeader("Access-Control-Allow-Headers", "*");
    //响应一个数据
    const data = {
        name: "atguigu"
    };
    //对对象进行字符串转换
    let str = JSON.stringify(data);
    //设置响应体
    response.send(str);
});
//针对IE缓存
app.get('/ie',(request, response)=>{
    //设置响应头 设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");
    //设置响应体
    response.send("Hello IE");
});
//延时响应
app.get('/delay',(request, response)=>{
    //设置响应头 设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");

    //设置响应体
    setTimeout(() => {
        response.send("Hello Dalay");
    }, 3000);

});
//jQuery服务
app.all('/jquery-server',(request, response)=>{
    //设置响应头 设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");
    //设置响应体
    //response.send("Hello jQuery AJAX");
    const data = {name: "sbsbsbs"};
    response.send(JSON.stringify(data));
});

//fetch服务
app.all('/fetch-server',(request, response)=>{
    //设置响应头 设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");
    //设置响应体
    //response.send("Hello fetch AJAX");
    const data = {name: "sbsbsbs"};
    response.send(JSON.stringify(data));
});
//4.监听端口启动服务
app.listen(8000, ()=>{
    console.log("服务已经启动，8000端口监听中...");
})