const nome = "Geovane";
const idade = 23;
const cidade = "Cajari";

function CriarMensagem(nome, idade, cidade) {
    return `Olá ${nome}, sua idade é ${idade}, e você mora em ${cidade}.`
};

const mensagem = CriarMensagem(nome, idade, cidade);

console.log(mensagem);
