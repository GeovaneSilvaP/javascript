//Assertions

function resolverComDeley() {
  return new Promise((resolve) =>{
    setTimeout(() =>{
      resolve("Resolveu a Promise")
    }, 3000)
  })
}


async function chamadaAsync(){
  console.log("Chamando a promise, e esperando o resultado!")
  const resultado = await resolverComDeley()
  console.log(`o resultado chegou: ${resultado}`)
}

chamadaAsync()