//Utilizando o For of

const somaInfinita = (...num) =>{

    let total = 0

    for(args of num){
        total += args
    }

    return total
}

console.log(somaInfinita(5, 5, 5))

console.log(somaInfinita(73, 90, 100))