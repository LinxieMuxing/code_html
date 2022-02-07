const path = require('path');
const fs = require('fs');
const pathStr = path.join('/a', '/b/c', '../', './d', 'e');
console.log(pathStr);

fs.readFile(path.join(__dirname, "../fs文件系统模块/data/11.txt"), "utf-8", function (err, dataStr){
    if(err){
        return console.log(`发生了错误${err.message}`);
    }else {
        console.log(dataStr);
    }
});