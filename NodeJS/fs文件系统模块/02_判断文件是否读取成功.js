const fs = require('fs');

fs.readFile("./data/11.txt", "utf-8", function (err, dataStr){
    if(err){
        return console.log(`读取文件失败!!${err.message}`);
    }
    console.log(`读取文件成功！${dataStr}`);
});

// fs.readFile("./111.txt", "utf-8", function (err, dataStr){
//     if(err){
//         return console.log(`读取文件失败!!${err.message}`);
//     }
//     console.log(`读取文件成功！${dataStr}`);
// });