/* JSON

JSON significa Javascript Object Notation que traduzindo pro português fica algo como notação de objeto Javascript.

Explicando de um modo simples JSON é basicamente uma forma de converter um objeto em texto e o contrário também, um texto em um objeto.

Ele é usado principalmente para transmitir dados entre sistemas de forma simples, já que o formato de texto é lido por praticamente toda linguagem de programação.

para trabalhar com JSON no javascript usamos dois métodos.

JSON.parse() -> Converte texto no padrão JSON em objetos.
JSOM.stringify() -> Converte objetos em textos padrão JSON
*/

//Onjeto carro
const carro = {
  modelo: "Uno",
  marca: "Fiat",
  ano: 2001
}
//CONVERTEU PARA TEXTO JSON
let texto = JSON.stringify(carro);

//COLOCOU O TEXTO NO NOSSO HTML
document.getElementById("area").innerHTML = texto;

//CONVERTEMOS TEXTO EM OBJETO
let obj = JSON.parse(texto)

//PEGAMOS UM VALOR TEXTO EM OBJETO
console.log(obj.modelo)


const ajax = new XMLHttpRequest()
ajax.open('GET', 'https://viacep.com.br/ws/01001000/json/')
ajax.send()

ajax.onload = function(){
  document.getElementById('web').innerText = this.responseText
}


function buscarCEP(){
  let input = document.getElementById('cep').value
  
  const ajax = new XMLHttpRequest()
ajax.open('GET', 'https://viacep.com.br/ws/'+ input +'/json/')
ajax.send()

ajax.onload = function(){
  document.getElementById('texto').innerHTML = this.responseText
}
}