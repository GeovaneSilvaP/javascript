//Tratamento de dado por Função

function checkNumber(n){
    const result = Number(n)

    if (Number.isNaN(result)) {
        console.log("Valor incorreto!")
        return
    }

    console.log("valor correto!")
    return result
}

checkNumber(5)
checkNumber("10")
checkNumber({})
checkNumber("teste")