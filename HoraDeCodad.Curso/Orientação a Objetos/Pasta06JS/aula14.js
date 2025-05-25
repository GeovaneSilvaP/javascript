//Herança

class Manifero {
    constructor(patas){
        this.patas = patas
    }
}

class Lobo extends Manifero{
    constructor(patas,nome){
        super(patas, patas)
        this.nome = nome
    }
}

const Alfa = new Lobo(4, "Alfa")

console.log(Alfa)