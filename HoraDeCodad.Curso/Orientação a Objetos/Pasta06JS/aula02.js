//Aprofundando em Metodos

const pessoa = {
    nome: "Geovane",

    getNome: function(){
        return this.nome
    },

    setNome: function(novoNome){
        this.nome = novoNome
    }
}

console.log(pessoa.nome)

console.log(pessoa.getNome())


pessoa.setNome("Joaquim")

console.log(pessoa.getNome())