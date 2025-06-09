//Regex na prática: validando e-mail

const email = /\w+@\w+\.\w+/;

console.log(email.test("geovane@gmail.com"))

console.log(email.test("geovane@gmail"))

console.log(email.test("gmail.com"))