//Async function

async function somarComDeley(a, b){
  return a + b
}

somarComDeley(10, 50).then((value) => {
  console.log(`O valor da soma é: ${value}`)
})

console.log("teste1 async")



//Teste 2

async function multComDeley(c, d){
  return c * d
}

multComDeley(200, 200).then((value)=>{
  console.log(`O valor da multiplicação é: ${value}`)
})