/*Funções 
Uma função Javascript é jm bloco de código projeto para executar uma tarefa específica.

 É como uma pequena "fábrica" onde você faz uma entrada e ele da uma saída.
 
  Por ser encarada por "mine-programas" projetos para fazer uma tarefa que vai contribuir para todo o código.
  
  Uma função Javascript é executada quando "algo" a invoca (chama-a).
  */
  
  
  //Função de soma
  function soma(valor1, valor2){
    return valor1 + valor2
  }
  document.getElementById("texto").innerHTML = soma(10,10);
  
  //Função Cotação de dolar
  function realparaDolar(real, cotacacaoDolar){
    return real + cotacacaoDolar
  }
  
  var valorReal = 7.89
  var cotacao = 5.08
  var total = realparaDolar(valorReal, cotacao)
  
  alert("o valor do real é R$: "+valorReal+"o valor do dolar U$ é: "+total)
  
//button função
function alertaHello(){
  alert("Olá, pessoal!!")
}


function paraCelsius(valorFahrenheit){
  return (5/9) * (valorFahrenheit - 32)
}

var x = paraCelsius(77)
alert("a temperatura é de "+x+" graus celsius")