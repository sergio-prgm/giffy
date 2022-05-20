import SearchForm from 'components/SearchForm'
import Helmet from 'react-helmet'

const gifsErrors = ['UoeaPqYrimha6rdTFV', 'YyKPbc5OOTSQE', 'H7wajFPnZGdRWaQeu0', 'mPytjcsG3XS4o']

export default function ErrorPage () {
  const randomImage = () => {
    return `https://media.giphy.com/media/${gifsErrors[Math.floor(Math.random() * gifsErrors.length) + 1]}/giphy.gif`
  }

  return (
    <>
      <Helmet>
        <title>Error 404 | Giffy</title>
      </Helmet>
      <header>
        <SearchForm />
      </header>
      <div>
        <div>
          <span>404</span>
          <span>Sometimes getting lost isn't that bad</span>
          <img src={randomImage()} alt='alt-page-404' />
        </div>
      </div>
    </>
  )
}
