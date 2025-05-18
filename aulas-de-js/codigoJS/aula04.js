//Arrays, vetor, matriz

let produto = ['arroz', 'feijao', "leite"]
var codigos = Array(10, 20, 30)
let mes = ['janeiro', 'fevereiro', 'março', 'abril']

//ADICIONAR NO FINAL push = empurrar
produto.push('açucar', 'trigo')
codigos.push(40, 50, 60, 70)
mes.push('maio', 'junlho',  'agosto', '07')

//REMOVER DO FINAL pop = estourar
produto.pop()
codigos.pop()
mes.pop()

//ADICIONAR NO INICIO unshift
produto.unshift('uva', 'maça')
codigos.unshift(1, 2, 3)
mes.unshift('novembro', 'dezembro')

//REMOVER DO INICIO shift
produto.shift()
codigos.shift()
mes.shift()

/*REMOVER UMA POSIÇAO ESPECIFICA splice
splice = emendar
posicao inical quantos remover*/
codigos.slice(1, 3)

//COPIAR ARRAYS SLICE = FATIAR PORCAO
//posicao inical quantos remover
let messes1 = mes.slice()
let messes2 = mes(0,3)

//VER OS QUANTOS ELEMENTOS TEM O ARRAY length
produto.length
codigos.length

//spreed operator ... copiar e tambem adiciar
let testeProdudo = [...produto, 'ovo', 'pera']

