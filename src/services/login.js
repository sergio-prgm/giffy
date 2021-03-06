import { API_URL } from './settings'

export default function login ({ username, password }) {
  return fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  }).then(res => {
    if (!res.ok) throw new Error('response is not ok')
    return res.json()
  }).then(res => {
    const { token: jwt } = res
    return jwt
  })
}
