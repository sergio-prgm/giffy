import { useState } from 'react'
import { Link, useLocation } from 'wouter'
import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import TrendingSearches from 'components/TrendingSearches'
import useGifs from 'hooks/useGifs'

const POPULAR_GIFS = ['Panda', 'Valley', 'Window', 'Meatball']

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
        <input
          onChange={handleChange}
          type="text"
          value={keyword}
          placeholder="search your gif..."
        />
      </form>
      <ListOfGifs gifs={gifs} />
      <h3 className="App-title">Los gifs más populares</h3>
      <TrendingSearches />
    </>
  )
}
