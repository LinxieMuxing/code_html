const btn = document.querySelector("button");
const result = document.getElementById("result");

function btn_click(){
    const xhr = new XMLHttpRequest();
    //超时设置 2s 超过两秒没有response 即将请求取消
    xhr.timeout = 2000;
    //超时回调
    xhr.ontimeout = function (){
      //alert("网络异常，请稍后重试！");
        result.innerHTML = "网络异常，请稍后重试！";
    };
    //网络异常回调
    xhr.onerror = function (){
        alert("你的网络似乎出了一些问题！");
    };
    xhr.open("GET", "http://127.0.0.1:8000/delay");
    xhr.send();
    xhr.onreadystatechange = function (){
        if(xhr.readyState === 4){
            if(xhr.status >= 200 && xhr.status < 300){
                result.innerHTML = xhr.response;
            }
        }
    }
}

btn.addEventListener("click", btn_click);
