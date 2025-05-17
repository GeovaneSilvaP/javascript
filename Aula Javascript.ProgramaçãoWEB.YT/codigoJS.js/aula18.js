/*MANIPULAÇÃO DE DATAS EM JAVASCRIPT*/

//Comando base para pegar a data
let data = new Date()
//console.log(data)

//pegar o ano atual com 4 dígitos 
let ano = data.getFullYear()
console.log(ano)

//pegar o mês atual - de 0 até 11 sendo 0 janeiro e 11 dezembro 
let mes = data.getMonth()
//console.log(mes)

//Mostar o mês no formato escrito 
const mesesDoAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro","Outubro","Novembro", "Dezembro"]
let mesEscrito = mesesDoAno[data.getMonth()]
console.log(mesEscrito)

//pegar dia do mês - 1 ate 31
let diaMes = data.getDate()
console.log(diaMes)

//pegar o dia da semana - 0 ate 6
let diaSemana = data.getDay()
console.log(diaSemana)

//mostrar dia da semana escrito 
const diasDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta"]
let diaSemanaEscrito = diasDaSemana[data.getDay()]
console.log(diaSemanaEscrito)

//pegar a hora de 0 ate 23
let hora = data.getHours()
console.log(hora)

//pegar o minutos - de 0 ate 59
let minutos = data.getMinutes()
console.log(minutos)

//pegar segundos - de 0 ate 59
let segundos = data.getSeconds()
console.log(segundos)

//pegar milissegundos - de 0 ate 999
let milissegundos = data.getMilliseconds()
console.log(milissegundos)

//Pegar a data no padrão brasileiro - Dia/Mês/Ano
let dataBr = data.toLocaleString("pt-BR",{dateStyle:'short'})
console.log(dataBr)

//Pegar a hora no padrão brasileiro 
let horaBR = data.toLocaleString("pt-BR",{timeStyle:'short'})
console.log(horaBR)

//pegar os valores separados
const d = new Date();
const diaMes = d.getDate();
const mes = d.getMonth() + 1;
const ano = d.getFullYear();

function addZero(x) {
  return x < 10 ? '0' + x : '' + x;
}

const dataPadraoBR = addZero(diaMes) + "/" + addZero(mes) + "/" + ano;
console.log(dataPadraoBR);

//comparar datas - maior ou menor. ex: vencimentos
const hoje = new Date()
const vencimento = new Date(2024,0,15)

if( hoje > vencimento){
  console.log("sua conta está vencida!")
} else {
  console.log("ainda não venceu, tudo certo!")
}

//diferença entre duas datas em dias

const dataInicial = new Date()
const dataFinal = new Date(2025,11,31)

let diferencaTempo = dataFinal.getTime() - dataInicial.getTime()

let diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000))
console.log(diferencaDias + " dias")