//Classes Basicas

const cachorro = {
    raca: null,
    patas: 4
}

const pastorAlemao = Object.create(cachorro)

pastorAlemao.raca = "Pastor Alemão"

console.log(pastorAlemao)

console.log(pastorAlemao.patas)


//
const pitBull = Object.create(cachorro)

pitBull.raca = "Pit-Bull"

console.log(pitBull)

console.log(pitBull.patas)