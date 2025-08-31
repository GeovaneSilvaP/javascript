function mediaDosElementos(array) {
    
    const soma = array.reduce((acc, valorTotal)=> acc + valorTotal, 0)

    return soma / array.length
}

const numeros = [1, 2, 3, 4, 5, 6, 7]

const media = mediaDosElementos(numeros)

console.log(`A média dos elementos é: ${media}`);
