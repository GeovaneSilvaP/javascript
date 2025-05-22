//mais sobre closures em js
const multiplicaçaoClosure = (n) => {
    return (m) => {
        return n * m
    }
}

const c1 = multiplicaçaoClosure(5)

const c2 = multiplicaçaoClosure(10)

console.log(c1)

console.log(c2)

console.log(c1(5))

console.log(c2(10))