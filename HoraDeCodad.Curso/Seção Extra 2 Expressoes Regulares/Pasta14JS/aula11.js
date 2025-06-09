//Choice pattern
const pessoa = /\w+: (Geovane|Iury|Fabio)/

console.log(pessoa.test("Nome: Geovane"))
console.log(pessoa.test("Nome: João"))