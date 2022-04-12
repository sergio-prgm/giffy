import { memo } from 'react'
import { Link } from 'wouter'
import './Gif.css'

function Gif({ title, id, url }) {
  return (
    <div className="Gif">
      <Link to={`/gif/${id}`} className="Gif-link">
        <h4>{title}</h4>
        <img src={url} alt={title} />
      </Link>
    </div>
  )
}

export default memo(Gif, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id
})
//  memo() doesn't render the component if it returns true (default export would return false)
// on ListOfGifs if props are passed as an object {...gifProps} it prevents memo to work properly
