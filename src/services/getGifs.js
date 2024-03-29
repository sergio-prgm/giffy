import { GIPHY_KEY, GIPHY_URL } from './settings'

const fromApiResponseToGifs = (apiResponse) => {
  const { data = [] } = apiResponse
  if (Array.isArray(data)) {
    const gifs = data.map((image) => {
      const { images, title, id } = image
      const { url } = images.downsized_medium
      return { title, id, url }
    })
    return gifs
  }
  return []
}

export default function getGifs ({
  keyword = 'lamp',
  limit = 5,
  page = 0,
  rating = 'g'
} = {}) {
  const apiUrl = `${GIPHY_URL}/gifs/search?api_key=${GIPHY_KEY}&q=${keyword}&limit=${limit}&offset=${
    page * limit + 1
  }&rating=${rating}&lang=en`

  return fetch(apiUrl)
    .then((res) => res.json())
    .then(fromApiResponseToGifs)
}
