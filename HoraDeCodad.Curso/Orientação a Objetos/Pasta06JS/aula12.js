//Symbol com Classes

class Aviao {
    constructor(marca, turbinas){
        this.marca = marca
        this.turbinas = turbinas
    }
}

const asas = Symbol()
const pilotos = Symbol()


Aviao.prototype[asas] = 2
Aviao.prototype[pilotos] = 3


const boing = new Aviao("Boing", 10)


console.log(boing)


console.log(boing[asas])
console.log(boing[pilotos])
