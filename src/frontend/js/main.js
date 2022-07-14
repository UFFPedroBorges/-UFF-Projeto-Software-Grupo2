$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

var logado = false;

if(localStorage.getItem("acesso") == "true") {
    logado = true;
}
if(logado != true){
    alert("Você não está autenticado!");
    window.location.href = "login.html";
}

function logout() {
    localStorage.clear();
    window.location.href = "login.html";
}