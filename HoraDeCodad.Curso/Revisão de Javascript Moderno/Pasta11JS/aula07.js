//Spread operator

const a1 = [1,2,3]
const a2 = [4,5,6]

const a3 = [...a1,...a2]

console.log(a3)

//
const a4 = [0,...a3,7,8]

console.log(a4)

//
const motoModelo = {modelo: "biz"};
const motoMarca = {marca: "Honda"};
const motoAnoKm = {ano: 2027, km: 7.000}

const moto = {...motoModelo,...motoMarca,...motoAnoKm}

console.log(moto)

//
