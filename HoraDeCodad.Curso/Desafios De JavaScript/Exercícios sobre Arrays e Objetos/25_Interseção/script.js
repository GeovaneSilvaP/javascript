function intersecaoArrays(array1, array2) {
    return array1.filter((element)=> array2.includes(element))
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7, 8];

const arrayIntersecao = intersecaoArrays(arr1, arr2);

console.log(`A interseção entre os arrays é: ${arrayIntersecao.join(", ")}`);
