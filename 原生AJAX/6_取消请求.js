const  Send = document.querySelectorAll("button")[0];
const  Cancel = document.querySelectorAll("button")[1];
let xhr = null;
function btn_send(){
    xhr = new XMLHttpRequest();
    xhr.open("GET", "http://127.0.0.1:8000/delay");
    xhr.send();
}

function btn_cancel(){
    xhr.abort();

}
Send.addEventListener("click", btn_send);
Cancel.addEventListener("click", btn_cancel)