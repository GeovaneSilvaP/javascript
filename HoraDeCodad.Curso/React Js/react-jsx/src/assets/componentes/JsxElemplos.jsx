import React from 'react'

const JsxElemplos = () => {

const userName = "Geovane";

function saudacao(nome){
    return `Olá ${nome}`
}

const dados = {
    nome: "Geovane",
    idade: 23,
    profissao: "Programdor"
}

const userLogado = false;

const userAdmim = true;

const arrayUsers = [
    {id: 1, nome: "Geovane"},
    {id: 2, nome: "Iury"},
    {id: 3, nome: "Fabio"},
]

  return (
    <div>

        {/*Basico*/}

        <h2>Conteudo que o usuario vai ver</h2>
        {/*Listando dados de usuarios */}
        <p>O nome do usuario é: {userName}.</p>

        <p>Sobre o usuario: {dados.nome} {dados.idade} {dados.profissao}</p>

        <p>{3 * 3}</p>

        <p>{saudacao(userName)}</p>
        <p>{"João"}</p>

        {/* Diferenças do HTML */}
        <div className="alguma-coisa">Este cara</div>

        <div className="teste">ok</div>

        <button onClick={() => alert("Teste")}>clique em mim</button>

        <input type="text" placeholder='Digite aqui...'/>

        {/* Renderizaçao condicional */}

    {userLogado ? (
        <div>
        <p>Caso: Online</p>
    </div>
    ) : (
        <div>
        <p>Caso: Ofiline</p>
    </div>)
    }

    <p>{userAdmim === "Admim" && "Você é um Admim"}</p>

    {/* Renderizaçao de listas */}

    <div>
        <ul>
            {arrayUsers.map((user) => {
                <li key={user.id}>
                    {user.id} - {user.nome}
                </li>
            })}
        </ul>
    </div>
    </div>
  )
}

export default JsxElemplos