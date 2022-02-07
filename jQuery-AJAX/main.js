$('button').eq(0).click(function (){
    $.get("http://127.0.0.1:8000/jquery-server", {a:100, b:200}, function (data){
        console.log(data);
    }, "JSON");
})

$('button').eq(1).click(function (){
    $.post("http://127.0.0.1:8000/jquery-server", {a:100, b:200}, function (data){
        console.log(data);
    })
})
//使用jQuery 使用下列方法更加耦合
$('button').eq(2).click(function (){
    $.ajax({
        //url
        url: "http://127.0.0.1:8000/jquery-server",
        //参数
        data: {a:100, b:200},
        //请求类型
        type: "GET",
        //响应体结果
        dataType: "JSON",
        //成功的回调
        success:function (data){
            console.log(data);
        },
        //超时时间
        timeout: 2000,
        //失败的回调
        error: function (){
            console.log("出错了！！");
        },
        //头信息
        header: {
            c: 300,
            d: 200
        }
    })
})
