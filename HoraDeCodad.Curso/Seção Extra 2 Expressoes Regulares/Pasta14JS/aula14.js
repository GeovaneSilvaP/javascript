//Regex na prática: validando data de nascimento

const validarData = /[0-31]{2}[{/}][0-12]{2}[{/}][1920-2025]{4}/

console.log(validarData.test("11/04/2002"))