//Exception

function saudacao(nome){
  if(typeof nome != "string") {
    throw new Error("O parâmetro nome precisa ser uma string")
  } else {
    console.log(`Ola ${nome}.`) 
  }
}

saudacao("Geovane")
saudacao(7)

console.log("teste")