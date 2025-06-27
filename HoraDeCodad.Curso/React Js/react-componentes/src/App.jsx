//componente pai
import './App.css'

//importar o componente filho
import FunctionalComponent from './assets/compoenents/FunctionalComponent';
import ClassComponents from './assets/compoenents/ClassComponents';
import PropsExemple from './assets/compoenents/PropsExemple';

function App() {

  return (
    <>
      <h1>Ola mundo em React</h1>
      {/* utilizando o componente importado no JSX */}
      <FunctionalComponent/>
      <ClassComponents/>
      <PropsExemple nome="Geovane" idade={23}/>
    </>
  )
}

export default App
