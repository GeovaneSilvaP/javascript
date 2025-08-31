function imparOuPar(numero){
    if (numero %2 === 0) {
        return "É par";
    }else{
        return "É impar";
    }
}


const numero = 2;

const resultado = imparOuPar(numero);

console.log(`O numero ${numero} é ${resultado}...`);

