import Gif from 'components/Gif/Gif'
import './ListOfGifs.css'

export default function ListOfGifs ({ gifs }) {
  return (
    <div className='ListOfGifs'>
      {gifs.map(({ title, url, id }) => (
        <Gif key={id} title={title} url={url} id={id} />
      ))}
    </div>
  )
}
