//Caracteres especiais na prática
const dia = /\d\d/;

console.log(dia.test("2025") && "2025".length == 2);

console.log(dia.test("asd"));

console.log(dia.test("06") && "06".length == 2);

//
const palavraPeloMenosTresLetras = /\w\w\w/;

console.log(palavraPeloMenosTresLetras.test("asd"));

console.log(palavraPeloMenosTresLetras.test("asdd"));

console.log(palavraPeloMenosTresLetras.test("as"));
