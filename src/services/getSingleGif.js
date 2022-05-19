import { GIPHY_KEY, GIPHY_URL } from './settings'

const fromApiResponseToGifs = (apiResponse) => {
  const { data } = apiResponse
  const { images, title, id } = data
  const { url } = images.downsized_medium
  return { title, id, url }
}

export default function getSingleGif ({ id }) {
  return fetch(`${GIPHY_URL}/gifs/${id}?api_key=${GIPHY_KEY}`)
    .then((res) => res.json())
    .then(fromApiResponseToGifs)
}
