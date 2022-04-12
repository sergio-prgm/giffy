import { useState } from 'react'
import { useLocation } from 'wouter'
import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import TrendingSearches from 'components/TrendingSearches'
import useGifs from 'hooks/useGifs'

export default function Home() {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()

  const { loading, gifs } = useGifs()

  const handleSubmit = (evt) => {
    evt.preventDefault()
    pushLocation(`/search/${keyword}`)
  }

  const handleChange = (evt) => {
    setKeyword(evt.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button>Search</button>
        <input
          onChange={handleChange}
          type="text"
          value={keyword}
          placeholder="search your gif..."
        />
      </form>
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
