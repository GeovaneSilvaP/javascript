//Caracteres especiais

// . qualquer caractere, menos nova linha
const pontoRegex = /./;

console.log(".")
console.log(pontoRegex.test("asd"));
console.log(pontoRegex.test("123"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("asd123"));

// \d qualquer digito de caractere
const dRegex = /\d/;

console.log("d")
console.log(dRegex.test("asd"));
console.log(dRegex.test("123"));
console.log(dRegex.test(" "));
console.log(dRegex.test("asd123"));

// \D caractere que nao sao digitos
const dRegex2 = /\D/;

console.log("D")
console.log(dRegex2.test("asd"));
console.log(dRegex2.test("123"));
console.log(dRegex2.test(" "));
console.log(dRegex2.test("asd123"));

// \s qualquer caractere de espaço em branco
const sRegex = /\s/;

console.log("s")
console.log(sRegex.test("asd"));
console.log(sRegex.test("123"));
console.log(sRegex.test(" "));
console.log(sRegex.test("asd123"));

// \w um caractere alfanumerico ("teste")
const wRegex = /\w/;

console.log("w")
console.log(wRegex.test("asd"));
console.log(wRegex.test("123"));
console.log(wRegex.test(" "));
console.log(wRegex.test("asd123"));