//Debounce

const Debounce = (f, delay) =>{
    let timeout

    return (...arguments) => {
        if (timeout) {
            clearTimeout(timeout)
        }

        timeout = setTimeout(() =>{
            f.apply(arguments)
        }, delay)
    }
}

window.addEventListener("mousemove", Debounce(()=>{
    console.log("Executando a cada 400ms")
}, 400)
)