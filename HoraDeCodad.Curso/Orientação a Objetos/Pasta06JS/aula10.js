//Mais sobre classes

class Caminhao {
    constructor(eixos, cor) {
        this.eixos = eixos
        this.cor = cor
    }

    descreverCaminhao(){
        console.log(`Este caminhao tem ${this.eixos} e é da cor ${this.cor}`)
    }
}

const scania = new Caminhao(6, "Vermelha")

console.log(scania)

scania.descreverCaminhao()

//

class Celular {
    constructor(marca, modelo){
        this.marca = marca
        this.modelo = modelo
    }

    descreverCelular(){
        console.log(`Este celular e da marca ${this.marca} e do modelo ${this.modelo}!`)
    }
}

const celular = new Celular("Motorola", "Moto Edge 50neo")

console.log(celular)




