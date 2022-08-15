/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.fragment */

import SearchForm from 'components/SearchForm'
import Button from 'components/Button'
import Helmet from 'react-helmet'
import { css, jsx } from '@emotion/react'

const gifsErrors = ['UoeaPqYrimha6rdTFV', 'YyKPbc5OOTSQE', 'H7wajFPnZGdRWaQeu0', 'mPytjcsG3XS4o']

const pageErrorStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  text-align: center;
`

const codeErrorStyles = css`
  font-size: 5rem;
  font-weight: bold;
  font-style: italic;
`

const msgErrorStyles = css`
  font-size: 1.5rem;
  margin: 1rem 0;
`

const gifErrorStyles = css`
  margin: 1rem auto;
  width: 250px;
  heigth: 250px;
`

export default function ErrorPage () {
  const randomImage = () => {
    return `https://media.giphy.com/media/${gifsErrors[Math.floor(Math.random() * gifsErrors.length) + 1]}/giphy.gif`
  }

  return (
    <div>
      <Helmet>
        <title>Error 404 | Giffy</title>
      </Helmet>
      <header>
        <SearchForm />
      </header>
      <div>
        <div css={pageErrorStyles}>
          <span css={codeErrorStyles}>404</span>
          <span css={msgErrorStyles}>Sometimes getting lost isn't that bad</span>
          <img css={gifErrorStyles} src={randomImage()} alt='alt-page-404' />
          <Button href='/'>Go back home...</Button>
        </div>
      </div>
    </div>
  )
}
