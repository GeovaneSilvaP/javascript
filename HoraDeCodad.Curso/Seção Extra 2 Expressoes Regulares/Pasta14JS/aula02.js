//Conjuntos
const reg1 = /[123456]/;

console.log(reg1.test("temos o numero 7?"));
console.log(reg1.test("temos o numero 3?"));
console.log(reg1.test("temos o numero 23?"));
console.log(reg1.test("temos o numero 70?"));

//verifica se tem numero na string
const reg2 = /[0-9]/;

console.log(reg2.test("tem numeros 8929498274927"));
console.log(reg1.test("nao tem numeros"));