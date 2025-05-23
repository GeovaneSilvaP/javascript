//Criando e deletando propriedades

const carro = {
  marca: "Ferrari",
  ano: 2025,
  modelo: "Ferrari ROMA",
  km: 3000
}

console.log(carro)

carro.motor = "5mil cavalos"
console.log(carro)

delete carro.ano
console.log(carro)