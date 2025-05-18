//comentario em linha

/*
comentario em bloco
*/

//criar variaveis use let ou var
var produto = 'Arroz'
var quant = 2
let precoUnitario = 4.99
let precoTatal = quant * precoUnitario
document.write(` Preço total R$ ${precoTatal}<br>`)
console.log(new Intl.NumberFormat("pt-BR").format(precoTatal))

document.write(`Preço total ${precoTatal.toLocaleString('pt-BR', {style:"currency", currency: "BRL" } )} <hr>`)

//criar constantes
const nome = "Geovane"
const peso = 65.5
const altura = 1.75
const imc = peso / (altura * altura)
document.write(`IMC ${imc} <br>`)
document.write(`IMC ${imc.toFixed(2)} <br>`)

let nota1 = 5.5
let nota2 = 7.5
let nota3 = 4.0
let notaFinal = nota1 + nota2 + nota3
document.write("Nota final " + notaFinal +"<br>")

let compra = 1999.99
let desconto = 145.42
let compraComDesconto = compra - desconto
document.write(compraComDesconto.toLocaleString("pt-br", {style: "currency", currency: "BRL"})+ '<br>')