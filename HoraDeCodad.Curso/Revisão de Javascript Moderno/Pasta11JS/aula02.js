//Revisando as arrow functions

const soma = function (a,b){
  return a + b
}
console.log(soma(10,10))

//
const arrowSoma = (c,d) => c + d

console.log(arrowSoma(100,700))

//
const greeting = (nome) =>{
  if(nome){
    return `Ola ${nome}`
  } else {
    return "Ola!"
  }
}

console.log(greeting("Geovane"))
console.log(greeting())

const carros = (carro) =>{
  if(carro){
    return `A marca do seu carro é ${carro}`
  } else {
    return "Qual a marca do seu carro ?"
  }
}

console.log(carros("Ferrari"))
console.log(carros())

//this
const user = {
  nome: "Geovane",
  sayUserName(){
    setTimeout(function(){
      console.log(this)
      console.log(`UserName: ${this.nome}`)
    }, 1000)
  },
  sayUserNameArrow(){
    setTimeout(() => {
      console.log(this)
      console.log(`UserName: ${this.nome}`)
    }, 2000)
  }
}

user.sayUserName()
user.sayUserNameArrow()
