import { useContext } from 'react'
import GifsContext from '../../context/GifsContext'
import Gif from '../../components/Gif'

export default function Detail({ params }) {
  // El contenido de params es el id que es lo que se pasa en la ruta (/:id)
  const { gifs } = useContext(GifsContext)

  const gif = gifs.find((singleGif) => singleGif.id === params.id)

  console.log(params)

  return <Gif {...gif} />
}
