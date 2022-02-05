let result = document.getElementById("result");

function key_down(){
    //1.创建对象
    const xhr = new XMLHttpRequest();
    //设置响应体数据的类型
    xhr.responseType = "json";
    //2.初始化，设置请求的方法和URL
    xhr.open("GET", "http://127.0.0.1:8000/json-server");
    //3.发送
    xhr.send();//POST设置请求参数
    //4.事件绑定

    xhr.onreadystatechange = function (){
        //判断（服务端返回了所有的结果）
        if(xhr.readyState === 4){
            //判断响应状态码 200 404 403 401 500
            //2xx 都表示成功
            if(xhr.status >= 200 && xhr.status <300){
                //result.innerHTML = xhr.response;
                //手动对数据转化
                //let data = JSON.parse(xhr.response);
                //console.log(data);
                //result.innerHTML = data.name;
                //对响应体类型进行修改后
                let data = xhr.response;
                result.innerHTML = data["name"];
            }
        }
    }
}
window.addEventListener("keydown", key_down);