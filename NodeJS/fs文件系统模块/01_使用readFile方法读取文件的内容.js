const fs = require('fs');

fs.readFile("./data/11.txt", "utf-8", function (err, dataStr){
   console.log(err);
   console.log("-------------");
   console.log(dataStr);
});

// fs.readFile("./111.txt", "utf-8", function (err, dataStr){
//     console.log(err);
//     console.log("-------------");
//     console.log(dataStr);
// });


