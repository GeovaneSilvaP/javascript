//Tratamento de input por função

function checarNumero(num) {
  let number = Number(num)
  if (Number.isNaN(number)) {
    alert("Digite apenas números")
  } else {
    return number
  }
}

checarNumero(5)
checarNumero("hdshi")

let number = prompt("digite um número")
checarNumero(number)


