let x = document.getElementById("Indiviualreg");
let y = document.getElementById("Companyreg");


function Company() {
    x.style.left = "-97%";
    y.style.left = "0%";

}
function Individual() {
    x.style.left = "0%";
    y.style.left = "97%";
}


let userData = JSON.parse(localStorage.getItem("userItms")) || [];

function Register() {
    console.log("hii")
    let Name = document.getElementById("name").value;
    let Email = document.getElementById("email").value;
    let Password = document.getElementById("password").value;

    function Userobj(name, number, email, pass) {
        this.username = name;
        this.usernumber = number;
        this.usermail = email;
        this.userpass = pass;
    }

    let userObj = new Userobj(Name, Number, Email, Password);
    userData.push(userObj);
    console.log(userData)

    localStorage.setItem("userItms", JSON.stringify(userData));
    let flag = false;
    for (let i = 0; i < userData.length; i++) {
        console.log(userData[i].username)

        if (
            userData[i].username != " " &&
            userData[i].usernumber != " " &&
            userData[i].usermail != " " &&
            userData[i].userpass != " "
        ) {
            flag = true;
            console.log("hii");
        }
    }
    if (flag == true) {
        window.location.href = "login.html"
    } else {
        alert("Invalid Credintials");
    }
}
