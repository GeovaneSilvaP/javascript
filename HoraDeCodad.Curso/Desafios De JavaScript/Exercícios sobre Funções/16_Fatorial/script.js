function fatorial(num){
    if(num === 0 || num === 1){
        return 1;
    }else{
        return num * fatorial(num - 1);
    }
}

const n = 12;

const resultado = fatorial(n);

console.log(`O fatorial de ${n} é ${resultado}`);
