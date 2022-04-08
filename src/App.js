import { Route, Link } from 'wouter'
import './App.css'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'

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
      <section className="App-content">
        <Link href="/">
          <h1>App</h1>
        </Link>
        <Route component={Home} path="/" />
        <Route component={SearchResults} path="/search/:keyword" />
        {/* <ListOfGifs keyword='office' /> */}
      </section>
    </div>
  )
}
/*
  Usar <Link> en las rutas para que sea SPA ==> que use el historyPush API
  Si usas <a> cada vez que viaja al enlace vuelve a cargar... => MAL
*/
export default App

//  API_KEY = 'VFEJhtLSFk9qZdOXMUqoWYvAzsv8ZMVM'
