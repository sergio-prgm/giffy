import { useEffect, useState } from 'react'
import getTrending from 'services/getTrendingService'
import Category from 'components/Category/index'
import useNearScreen from 'hooks/useNearScreen'

function TrendingSearches() {
  const [trends, setTrends] = useState([])

  useEffect(function () {
    getTrending().then(setTrends)
  }, [])

  return <Category categoryName="trending" options={trends} />
}

export default function LazyTrending() {
  const { isNearScreen, fromRef } = useNearScreen({ distance: '200px' })

  return <div ref={fromRef}>{isNearScreen ? <TrendingSearches /> : null}</div>
}
