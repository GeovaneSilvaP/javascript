//Evento de tecla - kayup

document.addEventListener("keyup", (e)=>{
  
  console.log(`Soltou a tecla ${e.key}`)
})


//keydown

document.addEventListener("keydown", (e) => {
  console.log(`Apertou a tecla ${e.key}`)
})