//Evento do foco... focus/blur

const eventFocus = document.querySelector("#my-input")

eventFocus.addEventListener("focus", (e) =>
  {
    console.log("Entrou no input")
  }
)

//blur

const eventBlur = document.querySelector("#my-input")

eventBlur.addEventListener("blur", (e) =>{
  console.log("Saiu do input")
})