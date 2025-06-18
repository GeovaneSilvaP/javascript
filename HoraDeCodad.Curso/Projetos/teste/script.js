function validarEmail(){
    const email = document.querySelector("#email");
    const mensagem = document.querySelector("#mensagem")

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(email.value)) {
        mensagem.textContent = "E-mail válido ✅"
        mensagem.style.color = "green"
    } else {
        mensagem.textContent = "E-mail invalido ❌"
        mensagem.style.color = "red"
    }
}