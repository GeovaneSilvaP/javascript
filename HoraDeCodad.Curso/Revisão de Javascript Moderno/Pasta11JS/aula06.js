//
const moto = {
marca: "Handa",
modelo: "Biz",
ano: 2019,
km: 0,
}

const motoDetalhe = {marca,modelo,ano,km: kmrodados} = moto

console.log(`A marca da sua moto é ${marca} do modelo ${modelo}, do ano ${ano} e ela rodou ${kmrodados}`)

//Destructuring

const pessoa = {
  nome: "Geovane",
  idade: 23,
  cidade: "Cajari",
  profissão: "Programador",
}

const pessoaDetalhe = {nome, idade, cidade, profissão: js} = pessoa

console.log(`Meu nome é ${nome} tenho ${idade} e moro em ${cidade} e minha profissão é ${js}`)

//Destructuring

const frutas = ["Maçã", "Pera", "Goiaba", "Acerola"]

const [f1, f2, f3, f4,] = frutas

console.log(f1, f4)