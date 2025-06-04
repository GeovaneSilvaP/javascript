//

class Produto {
  constructor(nome, preço) {
    this.nome = nome;
    this.preço = preço;
  }
  
  produtoComDesconto(desconto) {
    return this.preço * ((100 - desconto) / 100)
  }
}

const camisa = new Produto("Camisa gola V", 20)

console.log(camisa)
console.log(camisa.produtoComDesconto(10))
console.log(camisa.produtoComDesconto(15))



//Herança 
class ProdutoDeAtributos extends Produto{
  constructor(nome, preço, cores) {
    
    super(nome,preço)
    this.cores = cores
    }
    
    showCores(){
      console.log("As cores são:")
      this.cores.forEach((cor) =>{
        console.log(cor)
      })
    }
    
  }

const chapéu = new ProdutoDeAtributos("Chapéu", 29.99,
[
  "Preto",
  "Amarelo",
  "Verde"
])

console.log(chapéu)

console.log(chapéu.nome)

chapéu.showCores()