// Desafio 01
        let lutador = 'Vladimirovich Emelianenko';
        let nacionalidade = 'Russo';
        let idade = 44;
        let peso = 106;
        let altura = 1.83;

        document.write(`<div class="card">
            <h2>Lutador</h2>
            <img src="imagens/lutador.jpg" alt="Lutador">
            <p>${lutador}</p>
            <p>${nacionalidade}</p>
            <p>${idade} Anos</p>
            <p>${peso} Kg</p>
            <p>${altura} m</p>
        </div>`);

        // Desafio 02
        const dia = 18;
        const mes = 5;
        const ano = 2025;
        const fraseDoDia = 'Nem todos os dias são bons, mas há algo bom em cada dia.';
        const autoria = 'Aaron Swartz';

        document.write(`<div class="citacao">
            <h2>Frase do Dia</h2>
            <h3>${dia}/${mes}/${ano}</h3>
            <blockquote>&#10077; ${fraseDoDia}</blockquote>
            <p>${autoria}</p>
        </div>`);

        // Desafio 03
        let mesesDoAno = ['Janeiro', 'Fevereiro', 'Março'];
        document.write(`<div class="meses">
            <h2>Array de Meses do Ano</h2>
            <p>${mesesDoAno.join(', ')}, ...</p>
        </div>`);

        // Desafio 04
        let jogo = {
            titulo: 'League of Legends',
            desenvolvedores: 'Riot Games',
            dataDeLancamento: 2009
        };

        document.write(`<div class="jogo">
            <h2>Jogo</h2>
            <span>Título</span>
            <p>${jogo.titulo}</p>
            <span>Desenvolvedor</span>
            <p>${jogo.desenvolvedores}</p>
            <span>Ano De Lançamento</span>
            <p>${jogo.dataDeLancamento}</p>
        </div>`);