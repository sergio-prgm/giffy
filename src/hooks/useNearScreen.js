import { useEffect, useState, useRef } from 'react'

export default function useNearScreen({ distance = '100px' } = {}) {
  const [isNearScreen, setShow] = useState(false)
  const fromRef = useRef()
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
        rootMargin: distance
      })
      observer.observe(fromRef.current)
    })

    return () => observer && observer.disconnect() //  cleans the event when the component is no longet in use
  })
  return { isNearScreen, fromRef }
}