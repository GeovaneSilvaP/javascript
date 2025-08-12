const num1 = 15;
const num2 = 18;

function compararNums(num1, num2) {
    
    if (num1 > num2) {
        return "O primeiro número é maior que o segundo";
    }else if(num1 < num2){
        return "O primeiro é menor que o segundo";
    }else{
        return "Os números são iguais";
    };
};

const comparacao = compararNums(num1,num2);

console.log(`Os números são: ${comparacao}`);
