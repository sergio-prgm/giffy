/* eslint-disable react/jsx-closing-tag-location */
import { Link, useRoute } from 'wouter'
import './Header.css'

import useUser from 'hooks/useUser'

export default function Header () {
  // const isLogged = false;
  const { isLogged, logout } = useUser()
  const [match] = useRoute('/login')

  const handleClick = (e) => {
    e.preventDefault()
    logout()
  }

  const renderLoginButtons = ({ isLogged }) => {
    return isLogged
      ? <Link href='#' onClick={handleClick}>
        Logout
      </Link>
      : <Link to='/login'>
        Login
      </Link>
  }

  const content = match
    ? null
    : renderLoginButtons({ isLogged })

  return (
    <header className='gf-header'>
      {content}
    </header>
  )
}
