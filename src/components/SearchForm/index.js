import { memo, useReducer } from 'react'
import { useLocation } from 'wouter'

const RATINGS = ['g', 'pg', 'pg-13', 'r']

const ACTIONS = {
  UPDATE_KEYWORD: 'update_keyword',
  UPDATE_RATING: 'update_rating'
}

// Add language filter
// Add button to clear all filters

const ACTION_REDUCERS = {
  [ACTIONS.UPDATE_KEYWORD]: (state, action) => ({
    ...state,
    keyword: action.payload,
    times: state.times + 1
  }),
  [ACTIONS.UPDATE_RATING]: (state, action) => ({
    ...state,
    rating: action.payload
  })
}

const reducer = (state, action) => {
  const actionReducer = ACTION_REDUCERS[action.type]
  return actionReducer ? actionReducer(state, action) : state
}

// Common way of writing the reducer function
// const reducer = (state, action) => {
//   switch (action.type) {
//     case ACTIONS.UPDATE_KEYWORD:
//       return {
//         ...state,
//         keyword: action.payload,
//         times: state.times + 1
//       }
//
//     case ACTIONS.UPDATE_RATING:
//       return {
//         ...state,
//         rating: action.payload
//       }
//     default:
//       return state
//       // throw new Error('Action not supported') // Otra opción para controlar edgecases
//   }
// }

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
    dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: evt.target.value })
  }

  const handleChangeRating = (evt) => {
    dispatch({ type: ACTIONS.UPDATE_RATING, payload: evt.target.value })
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
