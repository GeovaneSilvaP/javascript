/*Vamos entender Operadores 
-> Os operadores javascript são usados para atribuir valores, comprar valores, executar operações aritméticas e muito mais.

 São os sinais que usamos: + - * / = ++ -- += -= && || etc...
 
 São separados em 6 "categorias":
 
 1) Operadores aritméticos (matemática)
 2) Operadores de atribuição 
 3) Operadores de sequência 
 4) Operadores de comparação
 5) Operadores de condicional (ternário)
 6) Operadores lógica
 
 */
 
 //1) Operadores aritméticos
 //sinal matemáticos "+ - * /"
//incremento "++" decremento "--"
 var valor1, valor2, total;
 valor1 = 5;
 valor2 = 5;
 total = ++valor1;
 
 alert(total);
 alert("o valor1 ficou:" + valor1)
 
 //2) Operadores de atribuição 
 //sinal " += -= *= /="
  var valor1, valor2, total;
 valor1 = 5;
 valor2 = 5;
 
 valor1 += valor2; //forma simplificada 
 valor1 = valor1 + valor1;

//3) Operadores de sequência 
var valor1, valor2, total;
valor1 = "Geovane ";
valor2 = "Silva";
total = valor1 + valor2;
alert(total);

// 4) Operadores de comparação 
// operador de comparação:"==", para tipos diferentes "===" para diferentes "!=, !==, <, >, <=, >="
//true(verdadeiro) ou false(falso)
var valor1, valor2, total;
valor1 = 8;
valor2 = 12;
total = (valor1 != valor2);
alert(total);

//5) Operadores de condicional (ternário)
var idade, eleitor;
idade = 45;
eleitor = (idade < 18) ? "Não, eleitor":"Sim, eleitor";
alert("A resposta é: " +eleitor+ "a idade dela é de: "+idade);

//6) Operadores lógica
// "&&" é igual "É" "||" é igual "OU" negação "!"
var idade, eleitor, resultado;
idade = 65;
eleitor = (idade < 18) ? "Não, eleitor":"Sim, eleitor";

resultado = !(idade === 65); //true - false
alert(resultado)