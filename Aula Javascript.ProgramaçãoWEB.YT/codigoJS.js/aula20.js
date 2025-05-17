let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');
let contador = 0;

function addTarefa() {
    let valorInput = input.value;

    if (valorInput !== "") {
        contador++;

        let novoItem = `
            <div class="item" id="${contador}">
                <div onclick="marcarTarefa(${contador})" class="item-icone">
                    <i id="icon_${contador}" class="bi bi-circle"></i>
                </div>
                <div onclick="marcarTarefa(${contador})" class="item-nome">
                    ${valorInput}
                </div>
                <div class="item-butao">
                    <button class="delete" onclick="deletar(${contador})">
                        <i class="bi bi-trash"></i> Excluir
                    </button>
                </div>
            </div>`;

        main.innerHTML += novoItem;
        input.value = '';
        input.focus();
    }
}

function deletar(id) {
    let tarefa = document.getElementById(id);
    if (tarefa) {
        tarefa.remove();
    }
}

function marcarTarefa(id) {
    let item = document.getElementById(id);
    let icone = document.getElementById('icon_' + id);

    if (!item.classList.contains('clicado')) {
        item.classList.add('clicado');
        icone.classList.remove('bi-circle');
        icone.classList.add('bi-check-circle-fill');
    } else {
        item.classList.remove('clicado');
        icone.classList.remove('bi-check-circle-fill');
        icone.classList.add('bi-circle');
    }
}

input.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        btnAdd.click();
    }
});
