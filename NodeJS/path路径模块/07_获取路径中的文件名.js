const path = require('path');

const fpath = "/a/b/c/index.html";
let fullName = path.basename(fpath);
console.log(fullName);

let nameWithoutExt = path.basename(fpath, '.html');
console.log(nameWithoutExt);
