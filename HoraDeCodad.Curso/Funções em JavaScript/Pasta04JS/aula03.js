//escopo da funçao

let y = 100

function testeEscopo(){
    let y = 50
    console.log(`Y dentro da funçao é: ${y}`)
}

testeEscopo()

console.log(`Y fora da funçao é: ${y}`)

testeEscopo()


//teste

var nome = "geovane"

function testeNome() {
    var nome = "Geovane Silva"
    console.log(`Seu nome é: ${nome}`)
}

testeNome()

console.log(`Seu nome em minusculo é: ${nome}`)