function inverterString(str){
    return str.split("").reverse().join("");
};

const textoParaInverter = "JavaScript";

const textoInvertido = inverterString(textoParaInverter);

console.log(`A String ${textoParaInverter} é ${textoInvertido}`);
