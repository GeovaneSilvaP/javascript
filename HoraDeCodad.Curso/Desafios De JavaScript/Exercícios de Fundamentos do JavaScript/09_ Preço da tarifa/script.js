const idadeUsuario = 23;
const tipoPasse = "estudante";

function calcularTarifa(idade, tipoPasse) {
    
    const tarifaNormal = 2.5;

    if (idade < 6) {
        return 0;
    };

    let desconto = 0;

    if (tipoPasse === "estudante") {
        desconto = 0.5;
    }else if(tipoPasse === "idoso" && idade >= 60){
        desconto = 0.3;
    };

    return tarifaNormal * (1 - desconto);
};

const tarifa = calcularTarifa(idadeUsuario, tipoPasse);

console.log(`A tarifa para uma pessoa com ${idadeUsuario} anos e passe do tipo "${tipoPasse}" é de ${tarifa.toFixed(2)}`);
