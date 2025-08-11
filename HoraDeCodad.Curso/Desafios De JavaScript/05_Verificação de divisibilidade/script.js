const num = 15;
const num2 = 2;

function varificarDivisibilidade(num,num2) {
    return num % num2 === 0;
};

const divisel = varificarDivisibilidade(num, num2);

console.log(`O número ${num} é divisivel por ${num2}? ${divisel ? "Sim" : "Não"}`);
