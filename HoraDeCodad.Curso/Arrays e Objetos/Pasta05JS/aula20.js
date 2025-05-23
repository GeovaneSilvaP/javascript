//Metodo join

const frase = "O rato roeu a roupa do rei de Roma";

// Corrigido: Usar split para transformar a frase em um array de palavras
const arrayDaFrase = frase.split(" ");

console.log(arrayDaFrase);  // ["O", "rato", "roeu", "a", "roupa", "do", "rei", "de", "Roma"]

// Juntar novamente as palavras em uma frase
const fraseDenovo = arrayDaFrase.join(" ");

console.log(fraseDenovo);  // "O rato roeu a roupa do rei de Roma"

const listaDeItems = ["Mouse", "Teclado", "Monitor"];

// Criar frase com os itens separados por vírgula
const fraseCompar = `Precisamos comprar: ${listaDeItems.join(", ")}.`;

console.log(fraseCompar);  // "Precisamos comprar: Mouse, Teclado, Monitor."
