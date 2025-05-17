/* CLASSES EM JAVASCRIPT 

Em 2015 foi introduzido no javascript as classes. As classes são um conceito antigo em programação e várias linguagens utilizam elas. Mas no Javascript isso é relativamente novo, por isso mesmo programadores experientes não sabem utilizar.

Basicamente as classes são como fábricas para criar objetos m.
Pode se dizer que são "funções especiais" para criação de objetos.

Assim como uma fábrica na vida real precisa das máquinas para construir os objetos, as classes no Javascript usam um método chamado constructor() para fabricar os objetos*/

class Carro {
  constructor(valor1,valor2,valor3) {
    this.marca = valor1
    this.modelo = valor2
    this.ano = valor3
  }
  buzina(){
    return this.modelo + " buzinou: Biiiiiiiiiiii"
  }
}

const uno = new Carro("Fiat", "Uno", 2001)
console.log(uno)
console.log(uno.buzina())

const gol = new Carro("Volkswagen", "Gol", 2002)
console.log(gol)

gol.ano = 2015
console.log(gol)