/*DOM + alterar CSS*/

let titulo = document.querySelector('h1')//Selecionar o título 

//alterar o conteúdo do título, as duas opções abaixo fazendo a mesma coisa 
titulo.textContent = 'Aula 09 Manipular CSS'
//titulo.innerHTML = 'Aula 09 Manipular CSS'


//Como alterar a propriedade de uma tag HTML
let imagem = document.querySelector('#foto')
imagem.setAttribute('src', 'codigos css/Aula09.css')
imagem.setAttribute('width', '350px')


//Manipular CSS
//let titulo = document.querySelector('h1')

//formas
//document.querySelector('h1').style.color = "red"
titulo.style.color = "red"
titulo.style.backgroundColor = "black"
titulo.style.padding ="40px"
titulo.style.borderBottom = "2px solid red"
titulo.style.borderRadius = "15px"

//alterar class em css 
let box = document.querySelectorAll('.box')
box[0].setAttribute('class', 'escura')
//box[0].removeAttribute('class')


//MODOS DE COR//
let tela = document.querySelector('main')

let btnDark = document.querySelector('#btdark')
let btnLight = document.querySelector('#btlight')

btnDark.addEventListener('click', modoDark)
btnLight.addEventListener('click', modoLight)

function modoDark(){
  
  console.log('Modo dark')
  tela.classList.add('dark')
  tela.classList.remove('light')
}

function modoLight(){
  console.log('Modo Light')
  tela.classList.remove('dark')
  tela.classList.add('light')
}