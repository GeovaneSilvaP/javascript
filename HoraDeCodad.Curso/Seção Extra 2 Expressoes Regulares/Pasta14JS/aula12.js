//Regex na prática: validando domínios

const validarDominios = /[?www]\w+\.com.br|com/;


console.log(validarDominios.test("www.google.com.br"))

console.log(validarDominios.test("google.com.br"))

console.log(validarDominios.test("www.google"))