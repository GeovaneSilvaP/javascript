const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function verificarPalpite(){
    const palpite = parseInt(document.getElementById('palpite').value);
    const mensagem = document.getElementById('mensagem');
    tentativas++;
    if(isNaN(palpite)){
        mensagem.textContent = 'Por favor, digite um número válido.';
        return;
    }

    if(palpite < 1 || palpite > 100){
        mensagem.textContent = 'tent = "O número deve estar entre 1 e 100.';
        return;
    }

    if(palpite === numeroSecreto){
        mensagem.innerHTML = `<strong>Parabéns!</strong> Você acertou o número ${numeroSecreto} em ${tentativas} tentativa(s)! 🎉`;
    }else if (palpite < numeroSecreto){
        mensagem.textContent = "Tente um número maior.";
    }else{
        mensagem.textContent = "Tente um número menor.";
    }
}