/*EVENTOS DE TEMPO COM JAVASCRIPT 

os eventos de tempo permitem a execução do código em intervalos de tempo especificados. Esses intervalos de tempo são chamados de eventos de cronometragem.

os dois métodos-chave para usar com Javascript.

setTimeout(function, tempo em milissegundos )
-> executa uma função, depois de esperar um número especificado de milissegundos.

setInterval(function, miliseconds)
É o mesmo que setTimeout(),mas repete a execução de função continuamente.
*/

//setTimeout
function ativarContagem(){
  document.getElementById("tempo").innerHTML = "Começou a contagem!"
  
  //Executa apenas uma vez após o tempo determinado 
tempo = setTimeout(function(){
    document.getElementById("tempo").innerHTML = "Terminou o setTimeout"
  }, 5000)
}

function pararContagem(){
  clearTimeout(tempo)
  document.getElementById("tempo").innerHTML = "Parou a contagem!"
}


//setInterval
function ativarInterval(){
  tempoInterval = setInterval(function(){
    var cronometro = document.getElementById("tempoInterval").innerHTML
    var soma = parseInt(cronometro) + 1
    document.getElementById("tempoInterval").innerHTML = soma
  },1000)
}

function pararInterval(){
  clearInterval(tempoInterval)
}

