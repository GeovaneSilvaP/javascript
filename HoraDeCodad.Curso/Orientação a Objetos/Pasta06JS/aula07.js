//Funções construtoras

function Cachorro(nome, raca) {
    this.nome = nome
    this.raca = raca
}

const husky = new Cachorro("Ozzy", "Husky")

console.log(husky)

const pitBull = new Cachorro("Jack", "Pit bull")

console.log(pitBull)


//

function Carro(marca, ano) {
    this.marca = marca
    this.ano = ano
}

const chevrilet = new Carro("Chevrilet", 2019)

console.log(chevrilet)