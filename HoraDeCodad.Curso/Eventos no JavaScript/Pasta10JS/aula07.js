//Outros eventos de mouse

const eventMouse = document.querySelector("#event-mouse")

eventMouse.addEventListener("mousedown", ()=> {
  console.log("Pressionou o botão")
})

//
eventMouse.addEventListener("mouseup", ()=> {
  console.log("Soltou o botão")
})

//

eventMouse.addEventListener("dbclick", () => {
  console.log("Deu Doblo clique no botão")
})