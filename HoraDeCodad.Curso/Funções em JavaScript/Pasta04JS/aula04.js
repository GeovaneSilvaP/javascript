//Escopo aninhado 

let g = 20

function escopoAninhado(){
  let g = 40
  
  if (true) {
    let g = 50
    
    if (true) {
      let g = 60
      
      console.log(g)
    }
    
    console.log(g)
  }
  console.log(g)
}

escopoAninhado()

console.log(g)


//Teste 2

const nome = "Geovane"

function NomeDePessoa() {
  const nome = "João"
  
  if (true) {
    const nome = "Maria"
    
    if (true) {
      const nome = "Junior"
      
      console.log(nome)
    }
    console.log(nome)
  }
  console.log(nome)
}

NomeDePessoa()

console.log(nome)