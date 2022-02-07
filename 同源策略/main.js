const btn = document.querySelector("button");

btn.onclick = function (){
    const x = new XMLHttpRequest();
    //因为是满足同源策越的，所以url可以简写
    x.open("GET", "http://127.0.0.1:9000/data");
    x.send();
    x.onreadystatechange = function (){
        if(x.readyState === 4){
            if(x.status >= 200 && x.status < 300){
                console.log(x.response);
            }
        }
    }
}