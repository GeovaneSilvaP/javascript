//Parâmetros opcionais em funções 

const multplicar = function (m,n) {
 if (n === undefined) {
   return m * 2
 } else {
   return m * n
 }
}

console.log(multplicar(5))

console.log(multplicar(2,4))


const greeting = (nome) =>{
  if (!nome) {
    console.log("Olá")
    return
  }
  
  console.log(`Olá Mundo ${nome}!`)
}

greeting()
greeting("Geovane")