//ARQUIVOS JS AULA 03 Operadores e Operações
let n1 = 10;
let n2 = 2;
let n3 = "2";

document.write(`N1 ${n1} <br>`); //number interio
document.write(`N2 ${n2} <br>`); //number interio
document.write(`N3 ${n3} <br>`); //string texto

console.log(n1 + n2); //adiçao
console.log(n1 - n2);//subtraçao
console.log(n1 * n2); //multiplicaçao
console.log(n1 / n2); //divisao
console.log(n1 % n2); //resto modulo

console.log(n2 == n3); //igual
console.log(n2 === n3); //identico a
console.log(n2 != n3); //diferente de nao
console.log(n2 !== n3); //nao e identico

console.log(n1 > n2);//maior que
console.log(n1 < n2);//menor que
console.log(n1 >= n2);// maior ou igual que
console.log(n1 <= n2);//menor ou igual que

let a = true;
let b = false;

console.log(a && b);//E AND
console.log(a || b);//OU OR
console.log(!a);//NAO NOT NEGAÇAO
console.log(!b);