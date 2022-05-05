import { useLocation } from 'wouter'
import { useCallback } from 'react'
import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import TrendingSearches from 'components/TrendingSearches'
import useGifs from 'hooks/useGifs'
import SearchForm from 'components/SearchForm'
import { Helmet } from 'react-helmet'

export default function Home () {
  const [path, pushLocation] = useLocation()
  const { loading, gifs } = useGifs();
  

  const handleSubmit = useCallback(
    ({ keyword }) => {
      pushLocation(`/search/${keyword}`)
    },
    [pushLocation]
  )
  // This function needs useCallback because, otherwise, it causes th SearchForm component to render everytime Home renders

  return (
    <>
      <Helmet>
        <title>Home | Giffy</title>
      </Helmet>
      <SearchForm onSubmit={handleSubmit} />
      <div className="App-main">
        <div className="App-results">
          <h3 className="App-title">Última búsqueda</h3>
          <ListOfGifs gifs={gifs} />
        </div>
        <TrendingSearches />
      </div>
    </>
  )
}
