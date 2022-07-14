function logar() {
    var email = document.getElementById("usuario");
    var senha = document.getElementById("senha");

    if(email.value == "admin" && senha.value == "admin"){
        localStorage.setItem("acesso", true);

        window.location.href = "index.html";
    }
    else{
        alert("Usuário ou senha inválidos")
    }
}