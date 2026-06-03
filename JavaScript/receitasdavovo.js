function salvarSenha(){
    let novaSenha = document.getElementById("novaSenha").value
    let confirmarSenha = document.getElementById("confirmarSenha").value

    if (novaSenha === confirmarSenha){
       alert("SENHA VÁLIDA")
        window.location.href = "http://127.0.0.1:5500/receitasdavovo.html"
    } else{
        alert("SENHA INVÁLIDA")
        window.location.href = "http://127.0.0.1:5500/paginasenha.html?";
    }

}