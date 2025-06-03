//Explorando o método map

const produtos = [
  {nome: "Camisa", preço: 25.55, categoria: "roupas"},
  {nome: "Monitor", preço: 750, categoria: "eletronico"},
  {nome: "Guarda-roupa", preço: 500.50, categoria: "móveis"},
  {nome: "computador", preço: 2500, categoria: "eletronico"},
  {nome: "calça-jeans", preço: 75.55, categoria: "roupas"},
  {nome: "estante", preço: 200, categoria: "móveis"},
]

produtos.map((produto) =>{
  if (produto.categoria === "eletronico") {
    produto.promocao = true
  }
})

console.log(produtos)