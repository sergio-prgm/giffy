import { useState, memo } from 'react'
import { useLocation } from 'wouter'

const RATINGS = ['g', 'pg', 'pg-13', 'r']

function SearchForm ({ initialKeyword = '', initialRating = '' }) {
  const [keyword, setKeyword] = useState(decodeURIComponent(initialKeyword))
  const [rating, setRating] = useState(initialRating)
  const [, pushLocation] = useLocation()

  const handleSubmit = (evt) => {
    evt.preventDefault()
    pushLocation(`/search/${keyword}/${rating}`)
  }

  const handleChange = (evt) => {
    setKeyword(evt.target.value)
  }

  const handleChangeRating = (evt) => {
    setRating(evt.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <button>Search</button>
      <input
        onChange={handleChange}
        type="text"
        value={keyword}
        placeholder="search your gif..."
      />
      <select onChange={handleChangeRating} value={rating}>
        <option disabled>Rating type</option>
        {RATINGS.map((rating) => (
          <option key={rating}>{rating}</option>
        ))}
      </select>
    </form>
  )
}

//  Extract form to component to improve performace
//  useState renders the component where it is located

export default memo(SearchForm)
//  memo (React.memo) only renders component when dependencies change
