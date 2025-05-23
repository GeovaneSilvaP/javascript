//Método push e pop

//push - adicionar 
const lista = ["a", "b", "c"]

lista.push("d")
console.log(lista)
console.log(lista.length)


//pop - remover 
lista.pop()
console.log(lista)

//outra função do pop

const itemRemovido = lista.pop()

console.log(itemRemovido)

console.log(lista)


//outra forma do push
lista.push("x", "y", "z")
console.log(lista)