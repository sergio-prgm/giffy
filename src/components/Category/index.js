import { Link } from 'wouter'

export default function Category({ categoryName, options }) {
  return (
    <>
      <h2>{categoryName}</h2>
      <ul>
        {options.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>{popularGif}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
