const btn = document.querySelector("button");

function btn_click(){
    const url = "http://127.0.0.1:8000/fetch-server";
    fetch(url, {
        //请求方法
        method: "POST",
        //请求头
        headers: {
            name: "atguigu"
        },
        //请求体
        body: "username=admin&password=admin"
    }).then(response => {
        //return response.text();
        return response.json();
    }).then(response => {
        console.log(response);
    });
}

btn.addEventListener("click", btn_click);