//else if

if (1 >2) {
  console.log("É maior que 2")
} else if (2 > 3) {
    console.log("É maior que 3")
} else if (5 > 9) {
  console.log("É maior que 9")
}else if(10 > 5){
  console.log("Agora sim!!")
}


const nome = "Geovane"
const idade = 23

if (nome === "João") {
  console.log("Olá João")
} else if (nome === "Geovane" && idade === 29) {
  console.log("Olá Geovane")
} else if (nome === "Geovane" && idade === 23) {
  console.log("Olá Geovane seja bem vindo, Você tem 23 anos!!!")
} else {
  console.log("Nenhuma condição aceita")
}
