/*Objetos
 objetos são basicamentes variáveis com muitos valores dentro.
 
 Ex: const carro = {marca:"ford", modelo:"ka", ano: 2015}
 
 os valores dentro de um objeto são chamados propriedades.
 
 objetos também podem ter métodos. um método é uma função colocadas dentro de uma propriedade.*/
 
 const carro ={
   marca: "ford",
   modelo: "ka",
   ano: 2015,
   placa: "ABC-1234",
   buzina: function (){
     alert("Biiiiii")},
   completo: function (){
     return "a marca é "+this.marca+"e o modelo é "+this.modelo}
 }
 console.log(carro.completo())