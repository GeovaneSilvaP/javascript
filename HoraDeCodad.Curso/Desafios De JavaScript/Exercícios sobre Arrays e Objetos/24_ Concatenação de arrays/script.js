function arrayConcat(array1, array2) {

    return array1.concat(array2)
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const doisArrays = arrayConcat(arr1, arr2);

console.log(`Array concatenado: ${doisArrays.join(", ")}`);

