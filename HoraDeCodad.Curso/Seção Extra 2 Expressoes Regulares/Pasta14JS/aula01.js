//Testando uma expressão regular
const reg1 = new RegExp("bola");

console.log(reg1.test("tem bola?"));
console.log(reg1.test("nao tem!"));


//com sinal de barras /.../
const reg2 = /carro/;

let text = "tem carro estacionado?"

console.log(reg2.test("o carro tem 4 rodas?"));
console.log(reg2.test("sim, ele tem"));
console.log(reg2.test(text));

//
console.log(/quadrado/.test("onde tem um quadrado"));
console.log(/quadrado/.test("1231414quadrado0250275"));