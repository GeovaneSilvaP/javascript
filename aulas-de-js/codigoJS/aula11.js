
//onload
function carregou(){
  console.log('pagina carregou')
}

//onscroll
function rolouPagina() {
  console.log('rolou Pagina')
}

//onmouseover
function focou() {
  console.log('focou no título')
}

//onfocus
function focoCampo(){
  console.log('focou no campo')
}

//onkeypress
function semFocoCampo(){
  console.log('sem focou no campo')
}


let letra = document.querySelector('input[type=text]')
function precionouTecla(){
  let numLetra = 1
  console.log('esta clicando' + (letra.value.lenght + numLetra))
}

//mouseover a seta do mouse esta no elemento
let botao1 = document.querySelector('#btn1')
let botao2 = document.querySelector('#btn2')
let botaoEnviar = document.querySelector('#btn3')

botao1.addEventListener('mouseover', function(){
  console.log('foco no botao1')
})

//focusout ou blur quando sai do foco
botao2.addEventListener('blur', function(){
  console.log('foco no botao2')
})

//1 click do mouse
botaoEnviar.addEventListener('click', function(event){
  event.preventDefault()
  console.log('clicou no botao')
})