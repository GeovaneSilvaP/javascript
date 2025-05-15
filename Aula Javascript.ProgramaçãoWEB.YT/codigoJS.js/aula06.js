/*Vamos entender variáveis
 variáveis são "recipientes" onde podemos armazenar informações que podem variar, ou seja, podem ter qualquer tipo de valor.
 
 No javascript temos 3 palavras chaves para declarar variáveis:
 
 -> var
 -> let
 -> const
 
 */
 
 //Declaração de variáveis 
 var nome, sobrenome, nomeCompleto;
 
 //Atribuição dos valores 
 nome = "Geovane";
 sobre = "Silva Prazeres";
 nomeCompleto = nome +" "+ sobre;
 
 document.getElementById("texto").innerHTML = nomeCompleto;
 
 let x = 10; //Aqui é 10
 {
  let x = 2; //Aqui é 2
 }
document.getElementById("texto").innerHTML = x; //Aqui também vai ser 10



const x = 10; //não pode ser reatribuído depois de definido.
{
 let x = 2;
}

document.getElementById("texto").innerHTML = x;

 
 