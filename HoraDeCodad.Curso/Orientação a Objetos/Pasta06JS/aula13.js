//Getter e setter

class Post {
    constructor(titulo, descricao, tags){
        this.titulo = titulo
        this.descricao = descricao
        this.tags = tags
    }

    get exibirTitulo(){
        return (`Voce esta lendo: ${this.titulo}`)
    }

    set adicionarTags(tags){
        const tagsArrays = tags.split(", ")
        this.tags = tagsArrays
    }
}

const myPost = new Post("Algum post", "É um post sobre programação")

console.log(myPost)

console.log(myPost.exibirTitulo)

myPost.adicionarTags =  "programação, javascript, python"

console.log(myPost)