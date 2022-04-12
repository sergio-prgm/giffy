import Gif from 'components/Gif/Gif'
import Spinner from 'components/Spinner'
import useSingleGif from 'hooks/useSingleGif'
import { Redirect } from 'wouter'

export default function Detail({ params }) {
  // El contenido de params es el id que es lo que se pasa en la ruta (/:id)
  const { gif, isLoading, isError } = useSingleGif({ id: params.id })
  // Aquí se podría usar directamente el Hook 'GetGifs' sin nececisdad del context

  if (isLoading) return <Spinner />
  if (isError) return <Redirect to="/404" />
  if (!gif) return null

  return <Gif {...gif} />
}
