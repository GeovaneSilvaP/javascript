//Evento padrão

const googleDefaut = document.querySelector("a")

googleDefaut.addEventListener("click", (e) =>{
  
  e.preventDefault()
  
  console.log("Não alterou a página")
})
