//Mais sobre prototypes

const myObjet = {
    a: "b"
}

console.log(Object.getPrototypeOf(myObjet))

console.log(Object.getPrototypeOf(myObjet) === Object.prototype)



const mySecondObjet = Object.create(myObjet)

console.log(mySecondObjet)

console.log(mySecondObjet.a)

console.log(Object.getPrototypeOf(mySecondObjet) === myObjet)