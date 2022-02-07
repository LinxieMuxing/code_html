//1.导入fs文件系统模块
const fs = require('fs');
//2.导入path路径处理模块
const path = require('path');

//1.3 匹配<style></style>标签的正则
//      其中\s表示空白字符； \S表示非空白字符; *表示匹配任意次
const regStyle = /<style>[\s\S]*<\/style>/;
//1.4 匹配<script></script>标签的正则
const regScript = /<script>[\s\S]*<\/script>/;

//2.1 读取需要被处理的HTML文件
fs.readFile(path.join(__dirname, "./index.html"),"utf-8",  (err, dataStr) => {
    //2.2 读取HTML文件失败
    if(err){
        return console.log(`读取HTML文件错误\n${err.message}`);
    }
    //2.2 读取HTML文件成功后，调用对应的方法，拆解出css、js和html文件
    resolveCSS(dataStr);
    resolveJS(dataStr);
    resolveHTML(dataStr);
});

//3.1 处理CSS样式
function resolveCSS(htmlStr){
    //3.2 使用正则提取页面中的<style></style>标签
    const  r1 = regStyle.exec(htmlStr);
    //3.3 将提取出来的样式字符串，做进一步的处理
    const newCSS = r1[0].replace("<style>", "").replace("</style>", "");
    //3.4 将提取出来的CSS样式，写入style.css文件中
    fs.writeFile(path.join(__dirname, "./style.css"), newCSS, err => {
        if(err){
            return console.log(`写入CSS样式失败！\n${err.message}`);
        }
        console.log("写入CSS样式成功！");
    });
}

//4.1 处理JS
function resolveJS(htmlStr){
    //4.2 使用正则提取页面中的<script></script>标签
    const r2 = regScript.exec(htmlStr);
    //4.3 将提取出来的脚本字符串，做进一步的处理
    const newJS = r2[0].replace("<script>", "").replace("</script>", "");
    //4.4 将提取出来的JS脚本，写入main.js文件中
    fs.writeFile(path.join(__dirname, "./main.js"), newJS, err => {
       if(err){
           return console.log(`写入JS脚本失败！\n${err.message}`);
       }
       console.log("写入JS脚本成功！");
    });
}

//5. 处理HTML文件
function resolveHTML(htmlStr){
    //5.1 使用字符串的replace方法，将内嵌的<style>和<script>标签，替换为外联的<link>和<script>标签
    const newHTML = htmlStr
        .replace(regStyle, "<link rel='stylesheet' href='style.css'>")
        .replace(regScript, "<script src='main.js' defer></script>");
    //5.2 将替换完成之后的html代码，写入到index.html文件中
    fs.writeFile(path.join(__dirname, "./index_new.html"), newHTML, err => {
        if(err){
            return console.log(`写入HTML文件失败！\n${err.message}`);
        }
        console.log("写入HTML文件成功！");
    })
}