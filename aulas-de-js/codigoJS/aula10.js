//Funções em Javascript 

let titulo = document.querySelector('h1')
titulo.innerHTML = 'Funções em Javascript'

let box = document.querySelectorAll('box')


/*Funções sem parâmetro e sem retorno (procedure)*/
function OlaMundo(){
  document.write("Olá Mundo sem retorno<br>")
}

/*Funções sem parâmetro e com retorno (function)*/
function OlaMundo2() {
  return ("Olá Mundo com Retorno<br>")
}

//Chamar a Função = executar ela
OlaMundo()
document.write(OlaMundo2())


let x = 2
let y = 1
let mensagem = "Jesus Cristo é o salvador"

/*Funções com parâmetro e sem retorno (procedure)*/
function somar(a,b) {
  document.write((a + b + "<br>"))
}

/*Funções com parâmetro e com retorno (procedure)*/
function somar2(c,d){
  return c + d
}

//Chamar a Função = executar ela
somar(x,y)
somar(10,5)

document.write(`<p>${somar2(x,y)}<p/>`)
document.write(`<p>${somar2(5,2)}<p/>`)


/*Funções anônima = não tem nome pode ou não ter parâmetros pode ou não ter retorno*/

titulo.addEventListener('click', function (){
  alert('Clicou no Título')
})

//Arrow functions ES6 2015 em diante
const olaMundoArrow = () => document.write("Olá Mundo S2!!!!");

olaMundoArrow()

const olaMundoArrow2 = () => "<p>Ola mundo com arrow function<p/>"

document.write(olaMundoArrow2())

//não precisa usar a palavra function
//não precisa usar a palavra return
//não se usa nome da função pq é anônima 
//não precisa colocar {} se for uma instrução 
