//valor default

const customGreeting = (nome, greet = "Olá") => {
  return `${greet}, ${nome}!`
}

console.log(customGreeting("Geovane"))

console.log(customGreeting("João, Bom dia!"))


const repetirText = (text, repetir = 2) => {
  for (let i = 0; i < repetir; i++) {
    console.log(text)
  }
}

repetirText("Testando")

repetirText("Agora repetir 5 vezes ", 5)