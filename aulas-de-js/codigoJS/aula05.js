//AULA OBJETOS

//CRIAR OBJETO
let pessoa = {
    nome: "Geovane",
    idade: 23,
    peso: 65.6,
    altura: 1.75,
    doador: false
}

let produto = {
    preco : [],
    descricao: []
}

const carros = {
    marca: ["Fiat", "Ford", "GM"],
    modelo: ["Ka", "Uno", "Corsa"],
    ano: [1999, 2005,2010]
}

//como ascesar uma propriedade usando .
pessoa.nome
pessoa.idade
carros.ano

//como ascesar uma propriedade usando ['']
pessoa['idade']
pessoa['peso']
carros['marca']
carros['modelo']

//OPERAÇOES IMC = peso / (altura * altura)
let imc = pessoa.peso / (pessoa.altura * pessoa.altura)

//.toFixed(x)
//limita os numeros de casas decimais
console.log("IMC" + imc.toFixed(2))

//ALTERAR OU ATUALIZAR VALORES de propriedade
pessoa.nome = "Geovane Silva"
produto.preco = [5.80]
produto.descricao = ['arroz']
pessoa.doador = true

//usando spreed operador 
produto.descricao = [...produto.descricao, 'feijao', 'trigo']
produto.preco = [...produto.preco,9.99, 4.79]

//usando spreed operador em objetos const
carros.ano = [...carros.ano, 1979]
carros.marca = [...carros.marca, 'WV']
carros.modelo = [...carros.modelo, 'Fusca']
