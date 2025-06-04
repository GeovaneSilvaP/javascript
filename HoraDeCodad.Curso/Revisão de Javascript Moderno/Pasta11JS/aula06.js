//Destructuring
const fruits = ["Maça", "Uva", "Laranja"]

const [f1,f2,f3] = fruits

console.log(f2,f3)

//

const produtoDetalhes = {
    nome: "Mouse",
    preco: 60.00,
    categoria: "Eletronicos",
    cor: "Preto"
};

const { nome: produtoNome, preco, categoria, cor } = produtoDetalhes;

console.log(`O nome do produto é ${produtoNome}, ele custa R$${preco} e é da cor ${cor}`);
