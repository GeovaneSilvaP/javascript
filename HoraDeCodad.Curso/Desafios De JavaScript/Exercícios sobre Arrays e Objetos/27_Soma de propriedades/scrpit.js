const numsObj = {
    a: 10,
    b: 15,
    c: 20
}

function somarObj(obj) {
    let soma = 0;

    for (let chave in obj) {
        
        if (obj.hasOwnProperty(chave) && typeof obj[chave] === "number") {
            soma += obj[chave]
        }
    }

    return soma;
}

console.log(`Soma dos valores do objeto: ${somarObj(numsObj)}`);
