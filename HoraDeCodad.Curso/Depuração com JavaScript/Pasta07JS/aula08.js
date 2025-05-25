//Assertions

function checkArrey(arr){
    if (arr.length === 0){
        throw new Error("O arrey pracisa ter elementos")
    } else {
        console.log(`O array tem ${arr.length} elementos!`)
    }
}

//checkArrey([])

checkArrey([1 , 2, 3])