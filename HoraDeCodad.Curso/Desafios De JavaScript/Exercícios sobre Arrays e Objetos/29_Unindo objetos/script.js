const objetoA = {a: 1, b: 2};
const objetoB = {nome: "Geovane", cidade: "Cajari", casado: true};

function unirObjeto(obj1, obj2) {
    return {...obj1, ...obj2};
}

const objetoUnidos = unirObjeto(objetoA, objetoB);

console.log("Objeto unido:");
console.log(objetoUnidos);
