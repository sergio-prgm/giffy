import { useCallback, useEffect, useRef } from 'react'
import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import useGifs from 'hooks/useGifs'
import Spinner from 'components/Spinner'
import useNearScreen from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'

export default function SearchResults({ params }) {
  const { keyword } = params
  const { loading, gifs, setPage } = useGifs({ keyword })
  const externalRef = useRef()
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
    distance: '70px'
  })

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 100),
    []
  )
  // useCallback sirve para no volver a crear funciones (similar a un useRef, pero con funciones)
  // asimismo necesita una referencia -como useEffect-, de lo contrario no funciona como debe
  useEffect(
    function () {
      // console.log(isNearScreen)
      if (isNearScreen) debounceHandleNextPage()
    },
    [debounceHandleNextPage, isNearScreen]
  )

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h3 className="search-title">{decodeURI(keyword)}</h3>
          <ListOfGifs gifs={gifs} />
          <div id="visor" ref={externalRef}></div>
        </>
      )}
    </>
  )
}
