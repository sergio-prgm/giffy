const ENDPOINT = 'http://localhost:4000/api'

export default function addFav ({ id, jwt }) {
  return fetch(`${ENDPOINT}/favs/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`
    },
    body: JSON.stringify({})
  }).then(res => {
    if (!res.ok) throw new Error('response is not ok')
    return res.json()
  }).then(res => {
    const favs = res
    return favs
  })
}
