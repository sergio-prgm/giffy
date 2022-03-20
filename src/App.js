import {Route, Link} from 'wouter'
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
  return (
    <div className="App">
      <section className="App-content" >
        <Link href="/">
          <h1>App</h1>
        </Link>
        <Link href='/gif/panda'>Panda</Link>
        <Link href='/gif/valley'>Valley</Link>
        <Link href='/gif/window'>Window</Link>
        <Link href='/gif/meatball'>Meatball</Link>
        <Route component={ListOfGifs} path='/gif/:keyword'/> 
        {/* <ListOfGifs keyword='office' /> */}
      </section>
    </div>
  );
}
/*
  Usar <Link> en las rutas para que sea SPA ==> que use el historyPush API
*/
export default App

//  API_KEY = 'VFEJhtLSFk9qZdOXMUqoWYvAzsv8ZMVM'
