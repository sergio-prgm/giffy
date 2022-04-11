import { useEffect, useState, useRef } from 'react'
import getTrending from 'services/getTrendingService'
import Category from 'components/Category/index'

function TrendingSearches() {
  const [trends, setTrends] = useState([])

  useEffect(function () {
    getTrending().then(setTrends)
  }, [])

  return <Category categoryName="trending" options={trends} />
}

export default function LazyTrending() {
  const [show, setShow] = useState(false)
  const elementRef = useRef()
  //  Similar al state pero cuando cambia su contenido no vuelve a renderizar el componente

  useEffect(function () {
    let observer
    const onChange = (entries, observer) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setShow(true)
        observer.disconnect()
        //  Stops the observer so that it doesn't execute every time the user scrolls
      }
    }

    Promise.resolve(
      // Add polyfill in case the browser doesn't support intersectionObserver
      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new IntersectionObserver(onChange, {
        rootMargin: '100px'
      })
      observer.observe(elementRef.current)
    })

    return () => observer && observer.disconnect() //  cleans the event when the component is no longet in use
  })
  return <div ref={elementRef}>{show ? <TrendingSearches /> : null}</div>
}
