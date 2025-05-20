//Operadores Logicos

//1. && (E lógico – AND)
//Retorna true se ambos os operandos forem verdadeiros.

true && true     // true
true && false    // false

let idade = 20;
let temCarteira = true;

if (idade >= 18 && temCarteira) {
  console.log("Pode dirigir");
}


//2. || (OU lógico – OR)
//Retorna true se pelo menos um dos operandos for verdadeiro.

false || true    // true
false || false   // false

let temDinheiro = false;
let temCartao = true;

if (temDinheiro || temCartao) {
  console.log("Pode comprar");
}


//3. ! (NÃO lógico – NOT)
//Inverte o valor booleano: !true vira false, e !false vira true.

!true    // false
!false   // true

let estaLogado = false;

if (!estaLogado) {
  console.log("Usuário não está logado");
}




