import { memo, useReducer } from 'react'
import { useLocation } from 'wouter'

const RATINGS = ['g', 'pg', 'pg-13', 'r']

const reducer = (state, action) => {
  if (action.type === 'update_keyword') {
    return {
      ...state,
      keyword: action.payload,
      times: state.times + 1
    }
  } else if (action.type === 'update_rating') {
    return {
      ...state,
      rating: action.payload
    }
  }
  return state
}

function SearchForm ({ initialKeyword = '', initialRating = 'g' }) {
  // const [rating, setRating] = useState(initialRating)

  const [state, dispatch] = useReducer(reducer, {
    keyword: decodeURIComponent(initialKeyword),
    rating: initialRating,
    times: 0
  })

  const { keyword, times, rating } = state

  const [, pushLocation] = useLocation()

  const handleChange = (evt) => {
    dispatch({ type: 'update_keyword', payload: evt.target.value })
  }

  const handleChangeRating = (evt) => {
    dispatch({ type: 'update_rating', payload: evt.target.value })
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
