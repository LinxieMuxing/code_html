const fs = require('fs');
//代码在运行的时候，会以执行node命令时所处的目录，动态拼接出被操作文件的完整目录
//即./data/11.txt  ===  (执行node时所处目录)/data/11.txt
//可使用绝对路径进行解决 或者 __dirname进行解决
fs.readFile(`${__dirname}/data/11.txt`, "utf-8", function (err, dataStr){
    if(err){
        return console.log(`读取文件失败!!${err.message}`);
    }
    console.log(`读 取文件成功！${dataStr}`);
});
//当前文件所在的目录
console.log(__dirname);