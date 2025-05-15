/*Laços de repetição for
 laços oferem um jeito fácil e rápido de executar uma ação repetidas vezes*/
 
 for (var i = 0; i < 101; i++) {
   document.getElementById("textoRepeticao").innerHTML += i + ", "
 }
 
 
 
for (var i = 1900; i <= 2025 ; i++) {
  document.getElementById("ano").innerHTML += "<option value='"+i+"'>"+i+"</option>"
}


var ano = new Date().getFullYear()

for (var i = ano; i >= 1900 ; i--) {
  document.getElementById("anoAtual").innerHTML += "<option value='"+i+"'>"+i+"</option>"
}


const carros = ["Gol", "Fusca", "Brasília", "Chevette"]
var tamanho = carros.length

for (var i = 0; i < tamanho; i++) {
  document.getElementById("texto").innerHTML += carros[i] + " - "
}