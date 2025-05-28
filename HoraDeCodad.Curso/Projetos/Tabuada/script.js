//Seleçao de elementos
const multplicationForm = document.querySelector("#multplication-form");
const numberInput = document.querySelector("#number");
const multplicadorInput = document.querySelector("#multplicador");

//Funçoes

//Eventos

multplicationForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;

        const multplicatorNumber = +multplicadorInput.value;

    if(!multiplicationNumber || !multplicatorNumber) return;

        console.log(multiplicationNumber, multplicatorNumber);
})