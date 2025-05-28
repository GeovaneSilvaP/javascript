//Estilizando vários itens

const listItens = document.getElementsByTagName("li")

for(const li of listItens){
    li.style.fontSize = "20px"
    li.style.color = "yellow"
    li.style.backgroundColor = "red"
}