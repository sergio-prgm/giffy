import { GIPHY_KEY, GIPHY_URL } from './settings'

const fromApiResponseToGifs = (apiResponse) => {
  const { data = [] } = apiResponse
  return data
}

export default function getTredingTerms () {
  const apiUrl = `${GIPHY_URL}/trending/searches?api_key=${GIPHY_KEY}`

  return fetch(apiUrl)
    .then((res) => res.json())
    .then(fromApiResponseToGifs)
}
