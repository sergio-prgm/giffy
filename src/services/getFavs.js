import { API_URL } from './settings'

export default function getFavs ({ jwt }) {
  return fetch(`${API_URL}/favs`, {
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

// Fix:
// first 'get' when login (no favs available)
// cors error and failed to fetch (504)
