document.querySelector("form").addEventListener("submit", signin);
let rus = JSON.parse(localStorage.getItem("userItms"));
function signin(event) {
    event.preventDefault();

    let userem = document.querySelector("#email").value;
    let userpasswd = document.querySelector("#password").value;
    let flag = false;
    for (var i = 0; i < rus.length; i++) {
        if (rus[i].usermail == userem && rus[i].userpass == userpasswd) {
            flag = true;
        }
    }
    if (flag == true) {
        window.location.href = "sign.html";
    }
    else {
        alert("Invalid Credentials")
    }

}