//Operador de precisão

let telefone = /\d{4,5}-\d{4,5}/
let cep = /\d{5}-\d{3}/

console.log(telefone.test("4004-5050"))
console.log(cep.test("65210-000"))

//
let numaTelefone = /\(\d{2}\)\d{4,5}-\d{4,5}/;

console.log(numaTelefone.test("(98)8478-9090"))
console.log(numaTelefone.test("(98)98478-9090"))