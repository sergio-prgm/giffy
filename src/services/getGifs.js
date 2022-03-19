const api_key = 'VFEJhtLSFk9qZdOXMUqoWYvAzsv8ZMVM'

export default function getGifs ({keyword = 'lamp'} = {}) {
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${keyword}&limit=5&offset=0&rating=g&lang=en`

  return fetch(apiUrl)
    .then(res => res.json())
    .then(response => {
      const {data} = response
      const gifs = data.map(image => {
        const { images, title, id } = image
        const { url } = images.downsized_medium
        return { title, id, url } 
      })
      return gifs
  })
}