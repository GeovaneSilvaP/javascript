const altura = 1.75;
const peso = 70;

function calcularIMC(altura, peso) {
    return peso / (altura * altura);
};

console.log(`Seu IMC é ${calcularIMC(altura,peso).toFixed(2)}`);
