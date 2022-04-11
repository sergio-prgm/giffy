import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import useGifs from 'hooks/useGifs'
import Spinner from 'components/Spinner'

export default function SearchResults({ params }) {
  const { keyword } = params
  const { loading, gifs, setPage } = useGifs({ keyword })

  const handleNextPage = () => setPage((prevPage) => prevPage + 1)

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h3 className="search-title">{decodeURI(keyword)}</h3>
          <ListOfGifs gifs={gifs} />
        </>
      )}
      <button onClick={handleNextPage}>Next page</button>
    </>
  )
}
