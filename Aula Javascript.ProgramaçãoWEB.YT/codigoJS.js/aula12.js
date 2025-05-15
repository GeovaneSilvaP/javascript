//Método Join
const pessoa= ["Geovane", "Silva", 23, "aluno"]
document.getElementById("texto").innerHTML =pessoa.join(" - ")

//Método Pop - remover último item
const pessoa= ["Geovane", "Silva", 23, "aluno"]
pessoa.pop()

document.getElementById("texto").innerHTML =pessoa

//Método Push - adicionar um item no fim
const pessoa= ["Geovane", "Silva", 23, "aluno"]
pessoa.push("Qualquer coisa")

document.getElementById("texto").innerHTML =pessoa

//Método Shift - Remover l primeiro item
const pessoa= ["Geovane", "Silva", 23, "aluno"]
pessoa.shift()

document.getElementById("texto").innerHTML =pessoa

//Método Concat - juntar duas listas 
const lista1 = ["arroz", "feijão ", "macarrão", "leite"]

const lista2 = ["carne", "suco", "refrigerante"]

const superLista = lista1.concat(lista2)
document.getElementById("texto").innerHTML = superLista

//Metodo Slice
const jogadores = ["biro biro", "ribamar", "Pelé", "Maradona", "neymar", "messi", "cr7", "geovane", "gabigol"]

const craques = jogadores.slice(2,6)

document.getElementById("texto").innerHTML = craques

//Método Sort - ordem alfabética 
const jogadores = ["Biro Biro", "Ribamar", "Pelé", "Maradona", "Neymar", "Messi", "Cr7", "Geovane", "Gabigol"]

const jogOrdem = jogadores.sort()

document.getElementById("texto").innerHTML = jogOrdem

//Merodo reverse - de trás pra frente
const jogadores = ["Biro Biro", "Ribamar", "Pelé", "Maradona", "Neymar", "Messi", "Cr7", "Geovane", "Gabigol"]

jogadores.sort()
jogadores.reverse()

document.getElementById("texto").innerHTML = jogadores

//Método ordenação numérica
const numeros = [40, 100, 1, 5, 25, 10]

numeros.sort(function(a,b){
  return a - b
})

document.getElementById("texto").innerHTML = numeros

//Método maior número 
const numeros = [40, 100, 1, 5, 25, 10]

document.getElementById("texto").innerHTML = maiorNumero(numeros)

function maiorNumero(array){
return Math.max.apply(null, array)
}

//Método menor número 
const numeros = [40, 100, 1, 5, 25, 10]

document.getElementById("texto").innerHTML = menorNumero(numeros)

function menorNumero(array){
return Math.min.apply(null, array)
}

//Método filtragem 
const numeros = [40, 100, 1, 5, 25, 10]
const maior20 = numeros.filter(filtragem)

document.getElementById("texto").innerHTML = maior20

function filtragem(value, index, array){
  return value > 20
}