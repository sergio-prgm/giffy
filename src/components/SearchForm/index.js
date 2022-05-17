import { useLocation } from 'wouter'
import useForm from './hook'
import css from './SearchForm.module.css'

const RATINGS = ['g', 'pg', 'pg-13', 'r']

export default function SearchForm ({
  initialKeyword = '',
  initialRating = RATINGS[0]
}) {
  const { keyword, times, rating, updateKeyword, updateRating } = useForm({
    initialRating,
    initialKeyword
  })

  const [, pushLocation] = useLocation()

  const handleChange = (evt) => {
    updateKeyword(evt.target.value)
  }

  const handleChangeRating = (evt) => {
    updateRating(evt.target.value)
  }

  const onSubmit = ({ keyword }) => {
    if (keyword !== '') {
      pushLocation(`/search/${keyword}/${rating}`)
    }
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    onSubmit({ keyword })
  }

  return (
    <form onSubmit={handleSubmit} className={css['c-search']}>
      <button className={css['c-search-btn']}>Search</button>
      <input
        className={css['c-search-input']}
        onChange={handleChange}
        type='text'
        value={keyword}
        placeholder='search your gif...'
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
