//Substituindo propridades pelo prototypes

//Override nos propriedades via Prototype

class Pessoa {
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
}

const geovane = new Pessoa("Geovane", 23)

console.log(geovane)

console.log(Pessoa.prototype.idade)

Pessoa.prototype.idade = "Não difinida"

console.log(geovane.idade)

console.log(Pessoa.prototype.idade)