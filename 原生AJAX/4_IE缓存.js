const btn = document.querySelector("button");
const result = document.getElementById("result");

function btn_click(){
    const xhr = new XMLHttpRequest();
    //针对IE浏览器的缓存问题
    xhr.open("GET", "http://127.0.0.1:8000/ie?t="+Date.now())
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
