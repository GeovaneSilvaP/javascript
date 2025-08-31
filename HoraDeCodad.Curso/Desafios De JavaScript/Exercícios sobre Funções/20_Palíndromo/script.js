function ehPalindromo(str) {
    
    const strInvertida = str.split("").reverse().join("");

    return str.toLowerCase() === strInvertida.toLowerCase();

}

const textoParaTeste = "natan";

const resultadoDoPalindromo = ehPalindromo(textoParaTeste);

console.log(`A string "${textoParaTeste}" é um palíndromo? ${resultadoDoPalindromo ? "Sim"  : "Não"}`);
