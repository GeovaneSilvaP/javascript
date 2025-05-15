/*Arrays
Os arrays Javascript são usados para armazenar vários valores em uma única variável. Diferente dos objetos, que funcionam com propriedades ou "nomes" que você da para os itens dentro dele, os arrays não possuem propriedades. O item dentro dele é encontrado pela posição.

Imagine um arrays como uma lista de itens, com controle por ordem de posição dentro dele.

Ex: const lista = ["arroz", "feijão", "macarrão", "leite" ]

A lista[0] (lista na posição 0) vai conter o valor "arroz"
A lista[1] (lista na posição 1) vai conter o valor "feijão"

E assim por diante...
*/

var item1 = "arroz"
var item2 = "feijão "
var item3 = "macarrão "
var item4 = "leite"

//Exemplo 1
//0 //1 //2 //3
const lista = ["arroz", "feijão", "macarrão", "leite"] 

alert(lista[0])

//Exemplo 2
const lista=[]
lista[0]= "arroz "
lista[1]= "feijão "
lista[2]= "macarrão "
lista[3]= "leite "

//Exemplo 3
const lista = new Array("arroz ", "feijão", "macarrão", "leite")

//conteúdo 
const lista = ["arroz", "feijão", "macarrão", "leite"]
let x = lista[3]
alert(x)

//diferença entre array e objeto
const pessoa= ["Geovane", "Silva", 23]//array[]
const pessoa= {nome:"Geovane", sobrenome:"Silva", idade: 23}//objeto{}
pessoa[0]//array
pessoa.nome//objetos

//Mostrar quando itens tem dentro do Array(matriz)
const pessoa= ["Geovane", "Silva", 23]
alert(pessoa.length)


//para ver o último item dentro do array
const pessoa= ["Geovane", "Silva", 23]
alert(pessoa[pessoa.length -1])

//para acrescentar mais um item no final 
const pessoa= ["Geovane", "Silva", 23]
pessoa.push("Brasileiro")

console.log(pessoa)