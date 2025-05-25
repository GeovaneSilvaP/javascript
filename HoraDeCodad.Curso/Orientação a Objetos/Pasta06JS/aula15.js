//Operador instanceof

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


//instanceof

console.log(Alfa instanceof Lobo)

console.log(Alfa instanceof Manifero)

console.log(Lobo instanceof Manifero)

console.log(new Lobo(4, "teste")instanceof Manifero)