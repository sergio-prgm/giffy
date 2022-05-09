import { memo } from 'react'
import { useLocation } from 'wouter'
import useForm from './hook'

const RATINGS = ['g', 'pg', 'pg-13', 'r']

function SearchForm ({ initialKeyword = '', initialRating = 'g' }) {
  const { keyword, times, rating, updateKeyword, updateRating } = useForm({ initialRating, initialKeyword })

  const [, pushLocation] = useLocation()

  const handleChange = (evt) => {
    updateKeyword(evt.target.value)
  }

  const handleChangeRating = (evt) => {
    updateRating(evt.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    pushLocation(`/search/${keyword}/${rating}`)
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
      <small>{times}</small>
    </form>
  )
}

//  Extract form to component to improve performace
//  useState renders the component where it is located

export default memo(SearchForm)
//  memo (React.memo) only renders component when dependencies change
