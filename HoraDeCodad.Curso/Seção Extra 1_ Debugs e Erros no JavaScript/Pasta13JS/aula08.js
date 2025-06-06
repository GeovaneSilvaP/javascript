//Assertion

let arr = [1,2,3,4,5]
let arr2 = []

function iterarArrey(arr){
  if (arr.length == 0) {
    throw new Error("O arrey precisa ter pelo menos um elemento")
  } else {
    for (let i = 0; i < arr.length; i++) {
      console.log(i)
    }
  }
}

function arreyVazio(arr){
  if (arr.length > 0) {
    throw new Error("O arrey não pode ter elementos")
  } else {
    console.log("agora deu certo")
  }
}


iterarArrey(arr)
arreyVazio(arr2)