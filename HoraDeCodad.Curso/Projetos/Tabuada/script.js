
// Seleção de elementos
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicadorInput = document.querySelector("#multiplicador");

const multiplicationTableT = document.querySelector("#multiplication-title span");
const multiplicationTable = document.querySelector("#multiplication-operations");

// Funções
const createTable = (number, multiplicationNumber) => {
    multiplicationTable.innerHTML = "";

    for (let i = 1; i <= multiplicationNumber; i++) {
        const result = number * i;

        const template = `
            <div class="row">
                <div class="operations">${number} x ${i} = </div>
                <div class="result">${result}</div>
            </div>
        `;

        const parser = new DOMParser();
        const htmlTemplate = parser.parseFromString(template, "text/html");
        const row = htmlTemplate.querySelector('.row');

        multiplicationTable.appendChild(row);
    }

    multiplicationTableT.innerHTML = number;
};

// Eventos
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const number = +numberInput.value;
    const multiplicadorNumber = +multiplicadorInput.value;

    if (!number || !multiplicadorNumber) return;

    createTable(number, multiplicadorNumber);
});
