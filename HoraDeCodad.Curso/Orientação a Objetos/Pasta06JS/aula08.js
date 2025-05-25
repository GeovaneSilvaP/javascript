//Metodos em funçoes construtores

function Carro(marca, ano) {
    this.marca = marca
    this.ano = ano
}

const chevrilet = new Carro("Chevrilet", 2019)

Carro.prototype.correr = function() {
    console.log("VRUMMMMMM")
}

console.log(Carro.prototype)

chevrilet.correr()