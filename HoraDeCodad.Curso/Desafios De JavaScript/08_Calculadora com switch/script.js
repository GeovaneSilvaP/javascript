const valor1 = 10;
const valor2 = 5;
const operador = "*";

function calcular(a, b, operador) {

    let resultado

    switch (operador) {
        case "+":
            resultado = a + b;
            break;
        case "-" :
            resultado = a - b;
        break;
        case "*":
            resultado = a * b;
        break;
        case "/":
            resultado = a / b;
            break;
        default:
            return "Operador invalido!"
            break;
    };

    return `O resultado da operação é: ${resultado}`;
};

const resultadoDoCalculo = calcular(valor1, valor2, operador);

console.log(resultadoDoCalculo);

console.log(calcular(10, 2, "*"));
console.log(calcular(20, 10, "-"));
console.log(calcular(30, 40, "/"));
console.log(calcular(40, 30, "28227"));
