//Removendo eventos

const temEvento = document.querySelector("#removebtn")

function imprimirMensagem() {
  console.log("Clicou no Tem evento")
}

temEvento.addEventListener("click", imprimirMensagem)



//removendo
const removenEvento = document.querySelector("#removebtn2")

removenEvento.addEventListener("click", () => {
  console.log("Evento removido!!")
  temEvento.removeEventListener("click", imprimirMensagem)
})