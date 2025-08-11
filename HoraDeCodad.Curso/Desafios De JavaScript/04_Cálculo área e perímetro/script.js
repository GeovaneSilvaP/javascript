const comprimento = 10;
const largura = 5;

function calcularArea(comprimento, largura) {
    return comprimento * largura;
};

function calcularPerimetro(comprimento, largura) {
    return 2 * (comprimento + largura);
};

const area = calcularArea(comprimento, largura);

const perimetro = calcularPerimetro(comprimento, largura);

console.log(`A area do retangulo é de ${area} e o perimetro é ${perimetro}`);

