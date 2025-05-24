//Destructuring em objetos(desestruturaçao)

const userDetalhes = {
    firstName: "Geovane",
    lastName: "Silva",
    idade: 23

}

const {firstName, lastName, idade} = userDetalhes

console.log(firstName, lastName, idade)

//renomear variaveis

const {firstName: primeiroNome} = userDetalhes

console.log(firstName) 