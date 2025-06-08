//Operador not !
const notAB = /[^ab]/;

console.log(notAB.test('a'));
console.log(notAB.test('aqui tem a'));

//
const notAaZ = /[^a-z]/;

console.log(notAaZ.test('123 asd'));
console.log(notAaZ.test('ashdagafgakhfkjahfkja'));

//
const az = /[^a-z]/;

console.log(az.test('dadad123dadada'));