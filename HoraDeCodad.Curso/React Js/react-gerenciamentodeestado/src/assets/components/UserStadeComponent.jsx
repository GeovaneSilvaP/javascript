import {useState} from 'react'
{/*useState = hooks */}


const UserStadeComponent = () => {
    //variavel de consulta, e uma de alteraçao, inicio o hook
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((preveCount) => preveCount + 1);
        //setCount(count + 1)
        console.log(count)
    }

    const [usuario, setUser] = useState({
        nome: "Geovane",
        idade: 23,
        hobbies: ["Programação", "Leitura", "Volei"]
    })

    const updateUserAge = () =>{
        setUser((prevUser) =>({
            ...prevUser,
            idade: prevUser.idade + 1
        }
    ))
    }

  return (
    <div>
        <h1>Contador</h1>
        <p>Você clicou {count} vezes</p>
        <button onClick={increment}>incrementar</button>

        <p>Seu nome: {usuario.nome}, sua idade: {usuario.idade}</p>
        <button onClick={updateUserAge}>Incrementar idade</button>
    </div>
    
  )
}

export default UserStadeComponent