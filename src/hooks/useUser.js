import { useContext, useCallback, useState } from 'react'
import Context from 'context/UserContext'
import loginService from 'services/login'
import addFavService from 'services/addFav'

export default function useUser () {
  const { favs, setFavs, jwt, setJWT } = useContext(Context)
  const [state, setState] = useState({ loading: false, error: false })

  const login = useCallback(({ username, password }) => {
    setState({ loading: true, error: false })
    loginService({ username, password })
      .then(jwt => {
        window.sessionStorage.setItem('jwt', jwt)
        setState({ loading: false, error: false })
        setJWT(jwt)
      })
      .catch(error => {
        window.sessionStorage.removeItem('jwt')
        setState({ loading: false, error: true })
        console.error(error)
      })
  },
  [setJWT])

  const logout = useCallback(() => {
    setJWT(null)
  }, [setJWT])

  const addFav = useCallback(({ id }) => {
    addFavService({ id, jwt })
      .then(favs => setFavs(favs))
      .catch(error => {
        console.error(error)
      })
  }, [jwt, setFavs])

  return {
    isLogged: Boolean(jwt),
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    login,
    logout,
    addFav,
    favs
  }
}
