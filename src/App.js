import { useState } from 'react';
import './App.css'
import ListOfGifs from './components/ListOfGifs'


function App() {
  /*
  useEffect(function () {
     console.log('EFecto ejecutado')
      setGifs(DIFF_GIFS)
  }, [])
//  Sin el [] (que sirve para asignarle dependencias, es decir, qué variables
//  debe observar para ejecutar la función) se produciría un loop infinito.
//  De esta manera no tiene dependencias y solo se ejecuta una vez se renderiza el componente
*/
const [keyword, setKeyword] = useState('meatball')
  return (
    <div className="App">
      <section className="App-content" >
        <button onClick={() => setKeyword('valley') }>Change Keyword</button>
        <ListOfGifs keyword={keyword} />
      </section>
    </div>
  );
}

export default App

//  API_KEY = 'VFEJhtLSFk9qZdOXMUqoWYvAzsv8ZMVM'
