//Implementando o filter
const arr = [1,2,3,4,5,6]

const numberFilter = arr.filter((n) =>{
  if (n < 3) {
    return n
  }
})

console.log(numberFilter)


//exemplo 2
const lista = [50,60,70,80,90,100]

const listaNumero = lista.filter((li) =>{
  if (li > 60) {
    return li
  }
})

console.log(listaNumero)


//
const usuarios = [
  {nome: "Geovane", disponivel: true},
  {nome: "Iury", disponivel: false},
  {nome: "Livia", disponivel: false},
  {nome: "Ester", disponivel: true},
  {nome: "Fabio", disponivel: false},
  {nome: "Josiele", disponivel: true},
]

const disponiveis = usuarios.filter((user) => user.disponivel)

console.log(disponiveis)