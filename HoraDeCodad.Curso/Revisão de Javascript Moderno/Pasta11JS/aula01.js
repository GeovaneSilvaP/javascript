//Var, Let e Const

//var
var x = 10
var y = 15

if (y > 5) {
  var x = 5
  console.log(x)
}

console.log(x)

//let
let a = 20
let b = 10

if(a > 15){
  let a = 15
  console.log(a)
}

console.log(a)

//const
function doisNomes(){
  const nome = "Geovane"
  console.log(nome)
}

doisNomes()

const nome = "Pedro"
console.log(nome)

//outros exemplos 
//var
var playstation = 5
var xbox = 3

if (xbox < 5) {
  var playstation = 5
  console.log(playstation)
}
console.log(playstation)


//let
let fusca = "1998"
let mobi = "2018"

if (mobi != fusca) {
  let mobi = "2020"
  console.log(mobi)
}

console.log(mobi)

//const
const pescador = "peixes"

function motoTaxi() {
  const moto = "moto taxista"
  console.log(moto)
}

console.log(pescador)
motoTaxi()