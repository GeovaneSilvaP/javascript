function removerDuplicadas(arr) {
    return Array.from(new Set(arr))
}

const arrayOriginal = [1, 2, 3, 3, 4, 5, 5, 6, 7, 7];

const arraySemDuplicatas = removerDuplicadas(arrayOriginal)

console.log(`Array original: [${arrayOriginal.join(", ")}]`);

console.log(`Array sem duplicatas: [${arraySemDuplicatas.join(", ")}]`);
