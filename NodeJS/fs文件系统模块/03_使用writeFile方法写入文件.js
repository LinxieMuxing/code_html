const fs = require('fs');

fs.writeFile("./data/11.txt", "Hello Node.js!", "utf-8", function (err){
    console.log(err);
});