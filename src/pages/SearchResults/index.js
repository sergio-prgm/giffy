import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import useGifs from 'hooks/useGifs'

export default function SearchResults({ params }) {
  const { keyword } = params
  const { loading, gifs } = useGifs({ keyword })
  if (loading) return <i>🌽</i> //

  return (
    <>
      {loading ? (
        <i>��</i>
      ) : (
        <>
          <h3 className="search-title">{decodeURI(keyword)}</h3>
          <ListOfGifs gifs={gifs} />
        </>
      )}
    </>
  )
}
