let elForm = document.querySelector(".form");
let elInputLogin = document.querySelector(".input__login");
let elInputPassword = document.querySelector(".input__password");


let logIn = "Islom__2oo2";
let passWord = "Islomjon200220022002"


elForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let inputLogin = elInputLogin.value.trim();
    let inputPassword = elInputPassword.value.trim();

    if(checkLogin(inputLogin, inputPassword)){
        localStorage.setItem('tooken', "ok")
        window.location.href = "/index.html"
    }else{
        alert("Enter correct Login and Password")
    }
    elInputLogin.value = null;
    elInputPassword.value = null;
})

function checkLogin(loginV, passwordV) {
    if(loginV == logIn && passwordV == passWord){
        return true
    }else{
        return false
    }
}
