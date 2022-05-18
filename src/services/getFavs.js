const ENDPOINT = 'https://giffy-api.onrender.com/api'

export default function getFavs ({ jwt }) {
  return fetch(`${ENDPOINT}/favs`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`
    }
  }).then(res => {
    if (!res.ok) throw new Error('response is not ok')
    return res.json()
  }).then(res => {
    const favs = res
    return favs
  })
}
