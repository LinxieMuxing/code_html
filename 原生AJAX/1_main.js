let btn = document.querySelector("button");
let result = document.getElementById("result");

function btn_click(){
    //1.创建对象
    const xhr = new XMLHttpRequest();
    //2.初始化，设置请求的方法和URL
    xhr.open("GET", "http://127.0.0.1:8000/server");
    //xhr.open("GET", "http://127.0.0.1:8000/server?a=100&b=200");//AJAX设置请求参数
    //3.发送
    xhr.send();
    //4.事件绑定
    //on when 当...时候
    //readystate 是xhr对象中的属性，表示状态 0 1 2 3 4
    //change 改变
    // 0：请求未初始化，还没有调用 open()。
    // 1：请求已经建立，但是还没有发送，还没有调用 send()。
    // 2：请求已发送，正在处理中（通常现在可以从响应中获取内容头）。
    // 3：请求在处理中；通常响应中已有部分数据可用了，没有全部完成。
    // 4：响应已完成；您可以获取并使用服务器的响应了。
    xhr.onreadystatechange = function (){
        //判断（服务端返回了所有的结果）
        if(xhr.readyState === 4){
          //判断响应状态码 200 404 403 401 500
          //2xx 都表示成功
            if(xhr.status >= 200 && xhr.status <300){
                //处理结果 行 头 空行 体
                //1.响应行
                // console.log(xhr.status);//状态码
                // console.log(xhr.statusText);//状态字符串
                // console.log(xhr.getAllResponseHeaders());//所有响应头
                // console.log(xhr.response)//响应体
                result.innerHTML = xhr.response;
            }
        }
    }
}
btn.addEventListener("click", btn_click);