//Utilizando o slice

const TesteSlice = ['a', 'b' , 'c', 'd', 'e', 'f']

const subArray = TesteSlice.slice(2,4)

console.log(subArray)

console.log(TesteSlice)

//
const subArray2 = TesteSlice.slice(2, 4 + 1)

console.log(subArray2)

//
const subArray3 = TesteSlice.slice(10, 20)

console.log(subArray3)

//

const subArray4 = TesteSlice.slice(2)

console.log(subArray4)