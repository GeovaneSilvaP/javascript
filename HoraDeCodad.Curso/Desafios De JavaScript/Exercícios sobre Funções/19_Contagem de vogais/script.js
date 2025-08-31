function contarVogais(str){
   
    const vogais = "aeiouAEIOU";

    let contador = 0;

   for (let i = 0; i < str.length; i++) {
    if (vogais.includes(str[i])) {
        contador++;
    };
   };

   return contador;
};

const texto = "Geovane";

const contagemDeVogais = contarVogais(texto);

console.log(`A quantidade de vogais na string ${texto} é ${contagemDeVogais}`);
