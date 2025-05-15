/* Switch
É usado para realizar diferentes ações com base em diferentes condições no mesmo bloco de verificação. Caso a condição não seja compatível não sera executada e o valor padrão será adicionado.*/

switch (expressão) {
  case a:
    // o que acontece 
    break ;
  case b:
    // o que acontece
    break;
  case c:
    //o que acontece
    break;
  default:
  //o que acontece
}


function verificarCor(){
  let cor = document.getElementById("cor").value
  cor = cor.toLowerCase()//Dica: Use toLowerCase() para padronizar a entrada e evitar erros com letras maiúsculas.
  
  switch (cor) {
  case "azul":
    // o que acontece
    document.body.style.background = "blue"
    break;
  case "vermelho":
    // o que acontece
    document.body.style.background = "red"
    break;
  case "amarelo":
    //o que acontece
    document.body.style.background = "yellow"
    break;
    case 'branco':
      document.body.style.background = "white"
      break;
  default:
    //o que acontece
    document.getElementById("texto").innerHTML = "Nenhuma cor disponível para: " + cor
}
}


function diaDaSemana(){
  let dia = new Date().getDay()
  
  console.log()
  
  switch (dia) {
    case 0:
      document.getElementById("texto").innerHTML = "Hoje é igual a Domingo "
      break;
    case 1:
       document.getElementById("texto").innerHTML = "Hoje é igual a Segunda-feira"
      break;
    case 2:
      document.getElementById("texto").innerHTML = "Hoje é igual a Terça-feira"
      break;
    case 3:
    document.getElementById("texto").innerHTML = "Hoje é igual a Quarta-feira"
      break;
    case 4:
      document.getElementById("texto").innerHTML = "Hoje é igual a Quinta-feira"
      break;
    case 5:
      document.getElementById("texto").innerHTML = "Hoje é igual a Sexta-feira"
      break;
    case 6:
      document.getElementById("texto").innerHTML = "Hoje é igual a Sabado"
      break;
    
    default:
  document.getElementById("texto").innerHTML = "Não sei que dia é hoje..."
  }
}