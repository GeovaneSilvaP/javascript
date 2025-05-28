//Objeto do evento

const titulo = document.querySelector("#myTitulo")

titulo.addEventListener("click", (event) =>{
  console.log(event)
  console.log(event.offsetX)
  console.log(event.target)
  console.log(event.pointerType)
})



//exemplo dois

const titulo2 = document.querySelector("#myTitulo2")

titulo2.addEventListener("click", (event) =>{
  console.log(event)
  console.log(event.offsetX)
  console.log(event.target)
  console.log(event.pointerType)
})