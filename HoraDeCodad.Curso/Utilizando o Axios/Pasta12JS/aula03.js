//Imprimindo dados da API

const getData = async () => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const usuarios = document.querySelector("#user-container")

const printData = async () => {
  const data = await getData()

  console.log(data)

  data.forEach((user) => {
    const div = document.createElement("div")
    const nameElement = document.createElement("h2")

    nameElement.textContent = user.name

    div.appendChild(nameElement)
    
    const emailElement = document.createElement("p")
    
    emailElement.textContent = user.email
    
    div.appendChild(emailElement)
    
    usuarios.appendChild(div)  // Aqui usamos a variável correta
  })
}

printData()
