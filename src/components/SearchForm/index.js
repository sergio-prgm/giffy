import { useState, memo } from 'react'

function SearchForm ({ onSubmit }) {
  const [keyword, setKeyword] = useState('')

  const handleSubmit = (evt) => {
    evt.preventDefault()
    onSubmit({ keyword })
  }

  const handleChange = (evt) => {
    setKeyword(evt.target.value)
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
    </form>
  )
}

//  Extract form to component to improve performace
//  useState renders the component where it is located

export default memo(SearchForm)
//  memo (React.memo) only renders component when dependencies change
