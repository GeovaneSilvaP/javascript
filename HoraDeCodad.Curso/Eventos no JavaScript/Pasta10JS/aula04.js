//Propagando eventos

const btnContainer = document.querySelector("#btnContainer")

btnContainer.addEventListener("click", () =>{
  console.log("Evento 1")
})


//Evento2

const propagacao = document.getElementById("btn-propagacao")

propagacao.addEventListener("click", (e)=>{
  e.stopPropagation()
  console.log("Evento 2")
})