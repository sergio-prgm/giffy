import { useEffect, useState } from 'react'
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

  useEffect(function () {
    const onChange = (entries) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setShow(true)
      }
    }
    const observer = new IntersectionObserver(onChange, {
      rootMargin: '100px'
    })
    observer.observe(document.getElementById('LazyTrending'))
  })
  return <div id="LazyTrending">{show ? <TrendingSearches /> : null}</div>
}
