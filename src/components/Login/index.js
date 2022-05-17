import { useEffect, useState } from 'react'
import { useLocation } from 'wouter'
import useUser from 'hooks/useUser'
import './Login.css'

export default function Login () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [, pushLocation] = useLocation()
  const { isLoginLoading, hasLoginError, login, isLogged } = useUser()

  useEffect(() => {
    if (isLogged) pushLocation('/')
  }, [isLogged, pushLocation])

  const handleSubmit = (e) => {
    e.preventDefault()
    login({ username, password })
  }

  return (
    <>
      {isLoginLoading && <strong>Checking credentials</strong>}
      {!isLoginLoading &&
        <form className='form' onSubmit={handleSubmit}>
          <label>
            username
            <input
              placeholder='username'
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </label>
          <label>
            password
            <input
              type='password'
              placeholder='password'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>
          <button className='btn'>Login</button>
        </form>}
      {
        hasLoginError && <strong>Credentials are invalid</strong>
      }
    </>
  )
}
