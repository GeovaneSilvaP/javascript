const z = 546;

function fibonacciAteN(n) {
    let a = 0;
    let b = 1;

    let sequencia = [];

    while(a <= n){
        sequencia.push(a)
        const temp = a;
        a = b;
        b = temp + a;
    }

    return sequencia;
}

const sequenciaFibonacci = fibonacciAteN(z);

console.log(`A sequencia de fibonacci ate ${z} é:`, sequenciaFibonacci);
