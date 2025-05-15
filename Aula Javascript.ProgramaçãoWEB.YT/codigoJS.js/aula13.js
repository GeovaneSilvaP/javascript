/*if e else

if->
Verifica uma condição principal.

Se for verdadeira, executa o bloco de código e ignora os demais.

else->
É usado no final, como um "plano B".

É executado se nenhuma das condições anteriores for verdadeira.
*/

var interruptor = "off"

if (interruptor == "on"){
  alert("a lâmpada está ligada!")
} else {
  alert("a lâmpada está desligada!")
}



var hora = new Date().getHours()

if (hora<12){
  alert("Bom dia!!")
} else if (hora <18) {
  alert("Boa tarde!!")
} else{
  alert("Boa noite!!!")
}



function verificar(){
  let nome = document.getElementById("nome").value
  let p = document.getElementById("texto")// elemento onde a mensagem será exibida
  
  if (nome === "" || nome === null){
    p.innerHTML = "o campo está vazio."
    p.style.color = "red"
  } else {
    p.innerHTML = "Parabéns o tudinho certinho."
    p.style.color = "green"
  }
}