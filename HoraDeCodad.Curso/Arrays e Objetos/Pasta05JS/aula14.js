//Método forEach

const nums = [1, 2, 3, 4 , 5, 6, 7]

nums.forEach((numerus) => {
    console.log(`o numero é: ${numerus}`)
})

//

const posts = [
    {titulo: "Primeiro post", categoria: "PHP"},
    {titulo: "Segundo post", categoria: "JavaScript"},
    {titulo: "Terceiro post", categoria: "Python"}
]

posts.forEach((post) => {
    console.log(`Exibindo post: ${post.titulo}, da categoria: ${post.categoria}`)
})