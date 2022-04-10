import Gif from 'components/Gif/Gif'
import useGlobalGifs from 'hooks/useGlobalGifs'

export default function Detail({ params }) {
  // El contenido de params es el id que es lo que se pasa en la ruta (/:id)
  const gifs = useGlobalGifs()
  // Aquí se podría usar directamente el Hook 'GetGifs' sin nececisdad del context

  const gif = gifs.find((singleGif) => singleGif.id === params.id)

  console.log(params)

  return <Gif {...gif} />
}
