//Mutação

const a ={
  nome: "Geovane"
}

const b = a

console.log(a)
console.log(b)

console.log( a === b)

//
a.idade = 23

console.log(a)
console.log(b)

//
delete b.idade

console.log(a)
console.log(b)


