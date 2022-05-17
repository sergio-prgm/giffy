import useUser from 'hooks/useUser'
import { useState } from 'react'
// import { useLocation } from 'wouter'
import Modal from 'components/Modal'
import Login from 'components/Login'
import './Fav.css'

export default function Fav ({ id }) {
  const { isLogged, favs, addFav } = useUser()
  // const [, navigate] = useLocation()
  const [showModal, setShowModal] = useState(false)

  const isFaved = favs.some(favId => favId === id)

  const handleClick = () => {
    if (!isLogged) return setShowModal(true)
    addFav({ id })
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const [label, emoji] = isFaved
    ? [
        'Remove Gif from favorites',
        '❌'
      ]
    : [
        'Add Gif to favorites',
        '❤'
      ]

  return (
    <>
      <button className='gf-Fav' onClick={handleClick}>
        <span role='img' aria-label={label}>{emoji}</span>
      </button>
      {showModal && <Modal onClose={handleClose}><Login /></Modal>}
    </>
  )
}
