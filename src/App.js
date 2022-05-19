import { Route, Link } from 'wouter'
import 'App.css'

import { UserContextProvider } from 'context/UserContext'
import { GifsContextProvider } from 'context/GifsContext'

import Header from 'components/Header'

import Detail from 'pages/Detail'
import SearchResults from 'pages/SearchResults'
import Home from 'pages/Home'
import Login from 'pages/Login'
import Register from 'pages/Register'

function App () {
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
    <UserContextProvider>
      <div className='App'>
        <section className='App-content'>
          <Header />
          <Link to='/'>
            <h1>App</h1>
          </Link>
          <GifsContextProvider>
            <Route component={Home} path='/' />
            <Route component={SearchResults} path='/search/:keyword/:rating?' />
            <Route component={Detail} path='/gif/:id' />
            <Route component={Login} path='/login' />
            <Route component={Register} path='/register' />
            <Route component={() => <h1>404 Error</h1>} path='/404' />
          </GifsContextProvider>
        </section>
      </div>
    </UserContextProvider>
  )
}
/*
  Usar <Link> en las rutas para que sea SPA ==> que use el historyPush API
  Si usas <a> cada vez que viaja al enlace vuelve a cargar... => MAL
*/
export default App

//  API_KEY = 'VFEJhtLSFk9qZdOXMUqoWYvAzsv8ZMVM'
