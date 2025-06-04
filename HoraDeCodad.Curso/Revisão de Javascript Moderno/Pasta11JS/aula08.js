//Classes

class Produto {
  constructor(nome, preço) {
    this.nome = nome;
    this.preço = preço;
  }
  
  produtoComDesconto(desconto){
    return this.preço * ((100 - desconto)/100)
  }
}

const camisa = new Produto("Camisa gola V", 20)

console.log(camisa)
console.log(camisa.produtoComDesconto(10))
console.log(camisa.produtoComDesconto(15))

//teste

// Definindo a classe Pessoa
class Pessoa {
  constructor(nome, idade, cidade, profissao) {
    this.nome = nome
    this.idade = idade
    this.cidade = cidade
    this.profissao = profissao
  }
  
  // Método opcional para apresentar a pessoa
  apresentar() {
    return (`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos, moro em ${this.cidade} e sou ${this.profissao}.`)
  }
}

// Criando instâncias da classe Pessoa
const pessoa1 = new Pessoa("Geovane", 23, "Cajari", "Programador");
const pessoa2 = new Pessoa("Iara", 21, "Santa Catarina", "Vendedora");
const pessoa3 = new Pessoa("Fabio", 33, "Cajari", "Professor");
const pessoa4 = new Pessoa("Letícia", 23, "São Luís", "Radiologista");

// Armazenando em um array
const usuarios = [pessoa1,pessoa2,pessoa3,pessoa4]

// Exemplo de uso do método
usuarios.forEach(usuarios =>{
  console.log(usuarios.apresentar())
})