var a = 5;
var b = 1;
var c = a + b;
console.log(c);

//A sintaxe do JavaScript (JS) define as regras que usamos para escrever corretamente o código. Aqui estão os principais elementos da sintaxe JS:

//1.Variáveis
let nome = "Maria";
const idade = 25;
var cidade = "São Paulo";

//2. Tipos de dados
let texto = "Olá";
let numero = 10;
let decimal = 3.14;
let booleano = true;
let nulo = null;
let indefinido;

//3. Operadores
// Aritméticos
let soma = 5 + 2;
let mult = 3 * 4;

// Comparação
5 == "5";     // true (igualdade solta)
5 === "5";    // false (igualdade estrita)

// Lógicos
true && false; // false
true || false; // true

//4. Condicionais
let idade = 18;

if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

//5. Laços (loops)
for (let i = 0; i < 5; i++) {
  console.log("Número: " + i);
}

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

//6. Funções
function saudacao(nome) {
  return "Olá, " + nome;
}

let msg = saudacao("Ana");
console.log(msg);

//7. Objetos e Arrays
let pessoa = {
  nome: "Lucas",
  idade: 30
};

let frutas = ["maçã", "banana", "uva"];
console.log(frutas[1]); // banana


