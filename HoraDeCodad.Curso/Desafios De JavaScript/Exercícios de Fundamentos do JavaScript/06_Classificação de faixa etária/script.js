const idadeDoUsuario = 23;



function classificarFaixaEtaria(idade) {

    if (idade < 0) {
        console.log("Idade inválida!");
        return;
    }

    if (idade >= 0 && idade <= 12) {
        return "Criança";
    }else if(idade >= 13 && idade <= 17){
        return "Adolescente";
    }else if(idade >= 18 && idade <= 59){
        return "Adulto";
    }else{
        return "Idoso";
    }
}

const classificao = classificarFaixaEtaria(idadeDoUsuario);

console.log(`A faixa etária é: ${classificao}`);
