//Promises

const promessa = Promise.resolve(5 + 5)

console.log("Algum código")

promessa.then((value) => {
  console.log(`A soma é ${value}`)
  return value
})

.then((value) => value -1)
.then((value) => console.log(`Agora é ${value}`))

console.log("Outro código")



//Exemplo 2

const mult = Promise.resolve(10 * 10)

console.log("Multiplicando")

mult.then((value) => {
  console.log(`A mutilação é ${value}`)
  return value
})
.then((value) => value +1)
.then((value) => console.log(`Agora é ${value}`))

console.log("Multiplicando de novo")