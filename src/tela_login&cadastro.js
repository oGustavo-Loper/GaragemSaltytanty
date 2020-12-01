var x = document.getElementById("login");
var y = document.getElementById("cadastro");
var z = document.getElementById("btn");
const register = document.getElementById("register");

function cadastro() {
    x.style.left = "-400px"
    y.style.left = "50px"
    z.style.left = "110px"
}

function login() {
    x.style.left = "50px"
    y.style.left = "450px"
    z.style.left = "0px"
}

function validar(){
    var nome = formuser.nome.value;
    var email = formuser.email.value;
    var password = formuser.password.value;
    
    if(nome == " "){
        alert("Esqueceu do nome");
        return false;
    } else if(email == " "){
        return false;
    } else if(password == " "){
        return false;
    }
}