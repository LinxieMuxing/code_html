const fs = require('fs');

fs.readFile("./data/成绩.txt","utf-8", function (err, dataStr){
    if(err){
       console.log("读取失败！");
    }else{
        let Str = dataStr;
        Str = Str.replaceAll("=", ":");
        Str = Str.replaceAll(" ", "\n");
        fs.writeFile("./data/成绩_ok.txt", Str,"utf-8",function (err){
            if(err){
                console.log("写入失败!");
            }
        });
    }
});