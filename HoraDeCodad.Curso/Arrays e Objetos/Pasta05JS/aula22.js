//Rest Operator (operador rest)

const somaINfinita = (...num) => {

    let total = 0

    for (let i = 0; i < num.length; i++) {
        
        total += num[i]
        
    }

    return total
}

console.log(somaINfinita(1, 2, 3))

console.log(somaINfinita(42, 635, 3928, 3793, 730983))