//在一个自定义模块中，默认情况中，module.exports是空对象

//向module.exports对象上挂载属性和方法
module.exports.usernames = "zs";

module.exports.sayHello = function (){
    console.log("Hello!");
}
//让module.exports指向一个全新的对象
module.exports = {
    nickname: "nm",
    sayHi: function (){
        console.log("HI!");
    }
}

//module.exports === exports //true