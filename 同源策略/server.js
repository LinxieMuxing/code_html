const express = require("express");
const {request, response} = require("express");

const  app = express();

app.get("/home", (request, response)=>{
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.sendFile(__dirname + '/index.html');
})
app.get("/data", (request, response)=>{
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.send("用户数据");
})
app.listen(9000, ()=>{
    console.log("服务已经启动... port:9000");
})
