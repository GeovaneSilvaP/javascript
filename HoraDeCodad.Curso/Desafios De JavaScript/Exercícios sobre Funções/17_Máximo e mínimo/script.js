//maior
function maiorValor(a,b){
    return a > b ? a : b;
};

const num1 = 5;
const num2 = 10;

const maior = maiorValor(num1, num2);

console.log(`O maior valor entre ${num1} e ${num2} é : ${maior}`);


//menor
function menorValor(c,d){
    return c < d ? c : d;
};

const num3 = 7;
const num4 = 6;

const menor = menorValor(num3,num4);

console.log(`O menor valor entre ${num3} e ${num4} é : ${menor}`);
