//Funções Como Classes

function criarCachorro(nome, raca) {
    
    const cachorro = Object.create({})

    cachorro.nome = nome
    cachorro.raca = raca

    return cachorro
}

const bob = criarCachorro("Bob", "Vira lata")

console.log(bob)

const jack = criarCachorro("jack", "Pit bull")

console.log(jack)

console.log(Object.getPrototypeOf(jack))