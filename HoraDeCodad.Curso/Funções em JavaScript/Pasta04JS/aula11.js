//recursion
 
const ateDez = (n,m) => {
    if (n < 10){
        console.log("A funçao parou de funcionar")
    }else {
        const x = n - m

        console.log(x)

        ateDez(x,m)
    }
}

ateDez(100,7)


//

function factorial(x){
    if (x ===0 ) {
        return 1
    }else {
        return x * factorial(x -1)
    }
}

const num = 6

const result = factorial(num)

console.log(`O fatorial do numero ${num} é ${result}`)