import { useContext } from 'react'
import GifsContext from 'context/GifsContext'

export default function useGlobalGifs () {
  const { gifs } = useContext(GifsContext)
  return gifs
}

// Best practice to have Hooks whose function is to read context and others to update it
