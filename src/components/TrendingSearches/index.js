import { useEffect, useState } from 'react'
import getTrending from 'services/getTrendingService'
import Category from 'components/Category/index'

export default function TrendingSearches() {
  const [trends, setTrends] = useState([])

  useEffect(function () {
    getTrending().then(setTrends)
  }, [])

  return <Category categoryName="trending" options={trends} />
}
