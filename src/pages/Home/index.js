import { Link } from 'wouter'

const POPULAR_GIFS = ['Panda', 'Valley', 'Window', 'Meatball']

export default function Home() {
  return (
    <>
      <h3 className="App-title">Los gifs más populares</h3>
      <ul>
        {POPULAR_GIFS.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
