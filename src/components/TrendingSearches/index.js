import React, { Suspense } from 'react'
import useNearScreen from 'hooks/useNearScreen'
import Spinner from 'components/Spinner'

const TrendingSearches = React.lazy(() => import('./TrendingSearches'))

export default function LazyTrending () {
  const { isNearScreen, fromRef } = useNearScreen({ distance: '200px' })

  return (
    <div ref={fromRef}>
      <Suspense fallback={<Spinner />}>
        {isNearScreen ? <TrendingSearches /> : <Spinner />}
      </Suspense>
    </div>
  )
}

//  Suspense is necessary for .lazy() to work.
//  It is a wrapper and it can be used wherever the component is going lo be rendered
//  Best practice is to have intentional wrappers, not general ones
//  The fallback is rendered when the component is not yet accessible
//  SVG's and other elements can be used as fallback
