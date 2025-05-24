//Conversão de JSON


//transforma um jason em objeto

const myJson = '{"nome": "Geovane", "idade": "23", "lista": ["PHP", "JavaScript", "Python"]}'
console.log(myJson)

const myObject = JSON.parse(myJson)

console.log(myObject)

console.log(myObject.nome)

console.log(typeof myObject)


//JSON invalido

const badJson = '{"nome": Geovane, "idade": "23"}'

//const myBadObjetc = JSON.parse(badJson)


//adicionar mais uma propriedade

myObject.isOpenToWork = true


//JSON.stringify() trasforma um objeto em json

const newJson = JSON.stringify(myObject)

console.log(newJson)

console.log(typeof newJson)