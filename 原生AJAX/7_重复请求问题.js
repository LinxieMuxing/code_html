const  Send = document.querySelector("button");

let xhr = null;
let isSending = false;//是否正在发送AJAX请求
function btn_send(){
    //判断标识变量
    if(isSending){
        xhr.abort();
    }
    xhr = new XMLHttpRequest();
    //修改 标识变量的值
    isSending = true;
    xhr.open("GET", "http://127.0.0.1:8000/delay");
    xhr.send();
    xhr.onreadystatechange = function (){
        if(xhr.readyState === 4){
            isSending = false;
        }
    }
}

Send.addEventListener("click", btn_send);