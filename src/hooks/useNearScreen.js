import { useEffect, useState, useRef } from 'react'

export default function useNearScreen({
  distance = '100px',
  externalRef,
  once = true
} = {}) {
  const [isNearScreen, setShow] = useState(false)
  const fromRef = useRef()
  //  Similar al state pero cuando cambia su contenido no vuelve a renderizar el componente

  useEffect(function () {
    let observer

    const element = externalRef ? externalRef.current : fromRef.current

    const onChange = (entries, observer) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setShow(true)
        once && observer.disconnect()
        //  Stops the observer so that it doesn't execute every time the user scrolls
      } else {
        !once && setShow(false)
      }
    }

    Promise.resolve(
      // Add polyfill in case the browser doesn't support intersectionObserver
      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance
      })
      if (element) observer.observe(element)
    })

    return () => observer && observer.disconnect() //  cleans the event when the component is no longet in use
  })
  return { isNearScreen, fromRef }
}
