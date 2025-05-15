/*Eventos
Eventos são disparadas pela interação do usuário na página.
É o correto menejo desses eventos que tornam as páginas interativas e dinâmicas.

Existem muitos eventos, veja os mais utilizados:

onclick  -> dispara quando recebe um clique.
ondblclick -> dispara quando clique duplo.
onmouseover -> dispara quando o mouse está sobre.
onmouseout -> dispara quando o mouse é movido para fora do elemento.
onmousemove -> dispara quando o mouse é movido no elemento.
onmousedown -> dispara quando o clique do botão foi pressionado.
onmouseup ->dispara quando o clique do botão é liberado.
onfocus -> dispara quando o elemento recebe um foco. válido para input.
onchange -> dispara quando existe uma mudança no conteúdo. "ao mudar"
onblur -> dispara quando o elemento perde o foco.
onkeydown -> dispara quando um tecla é pressionada.
onkeypress -> dispara quando uma tecla é pressionada e solta.
onkeyup -> dispara quando uma tecla é solta sobre um elemento.
onload -> dispara quando a página terminou de ser carregada. body
onresize -> quando a um redimensionamento da janela.
*/

//onclick
function umClique(){
  //alert("Você clicou no botão UMA vez...")
  document.body.style.backgroundColor = "yellow"
}

//ondblclick
function doisCliques(){
  alert("Você clicou DUAS vezes no botão...")
}

//onmouseover
function virarAzul(){
  let div = document.getElementById("mouseMove")
  div.style.backgroundColor = "blue"
}

//onmouseout
function viraVermelho(){
  let div = document.getElementById("mouseMove")
  div.style.backgroundColor = "red"
}

//onmousemove
function adicionaTexto(){
  let p = document.getElementById("texto")
  p.append("O mouse moveu!!")
}

//onmousedown
function clicouNatela(){
  alert("Você clicou na Tela")
  //onmousedown="clicouNatela()" - colocar no body{}html
}

//onmouseup
function clicouSoltou(){
  alert("Você clicou e soltou na tela")
    //onmouseup="clicouSoltou()" - colocar no body{}html
}

//onfocus
function limparTexto(){
  document.getElementById("compoTexto").value = ""
}

//onchange
function mudou(){
  console.log("Mudou")
}

//onblur
function umClique() {
  document.body.style.backgroundColor = "yellow"
}

//onkeypress
//onkeydown
//onkeyup
function teclaPress(){
  let input = document.getElementById("compoTexto").value
  console.log(input)
}

//onload
//deve ser colocado no body{}html
function carregou(){
  alert("Terminou de Carregar!!!")
}

//onresize
//deve ser colocado no body{}html
function redimensao(){
  console.log("houver um redimensionamento")
}