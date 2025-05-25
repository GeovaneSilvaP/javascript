//Classes ES6 em JavaScript

class CachorroClasse {
    constructor(nome, raca){
        this.nome = nome
        this.raca = raca
    }
}

const jeff = new CachorroClasse("Jeff", "Labrador")

console.log(jeff)

console.log(Object.getPrototypeOf(jeff))


//

class carroClasse {
    constructor(modelo, ano){
        this.modelo = modelo
        this.ano = ano
    }
}

const bnw = new carroClasse("BMW iX xDrive40", "2025")

console.log(bnw)

console.log(Object.getPrototypeOf(bnw))