//ESTRUTURAS IF ELSE E SWITCH

let sit1 = document.querySelector('#sit1')
let sit2 = document.querySelector('#sit2')
let sit3 = document.querySelector('#sit3')
let escolha = document.querySelector('#escolha')


let notaFinal1 = 3
let notaFinal2 = 8
let notaFinal3 = 5

//CONDICIONAIS

//IF
if (notaFinal1 >= 7) {
    sit1.textContent = 'Aprovado'
}

//IF E ELSE
if (notaFinal1 >= 7) {
     sit1.textContent = 'Aprovado'
} else {
    sit1.textContent = 'Reprovado'
}

//IF TERNARIO
notaFinal3 >= 7 ? sit1.textContent = 'Passou' : 
sit1.textContent = "Ficou"

//IF ENCADEADO OU ANINHADO
if (sit3 >= 7) {
    sit3.textContent = 'Aprovado'
} else if (notaFinal3 <= 3){
    sit3.textContent = 'Reprovado'
} else {
    sit3.textContent = 'Recuperaçao'
}

//ESCOLHA

//let situacao = ''
//let situacao = 'Aprovado'
//let situacao = 'Reprovado'
let situacao = 'Recuperação//'

switch (situacao) {
    case 'Aprovado':
        escolha.textContent = 'Passou de ano'
        break;
    case 'Reprovado':
        escolha.textContent = 'Reprovou de ano'
    break;
    case 'Recuperação':
        escolha.textContent = 'Ainda tem uma chance'
    break;
    default:
        escolha.textContent = 'estude mais'
        break;
}