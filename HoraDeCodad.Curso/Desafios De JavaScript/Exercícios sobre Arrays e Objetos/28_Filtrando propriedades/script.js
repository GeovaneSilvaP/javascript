const pessoa = {
    nome: "Geovane",
    idade: 23,
    profissao: "Programador",
    hobbies: ["Programar", "Ler", "Jogar Video Game"]
};

function objFilter(obj, propriedades){
    const newObj = {};

    for(const prop of propriedades){
        if (obj.hasOwnProperty(prop)) {
            newObj[prop] = obj[prop]
        }
    }

    return newObj;
}

const propriedadesPermitidas = ["nome", "profissao"];

const pessoaFiltrada = objFilter(pessoa, propriedadesPermitidas);

console.log("Objeto pessoa filtrado com propriedades permitidas:");

console.log(pessoaFiltrada);
