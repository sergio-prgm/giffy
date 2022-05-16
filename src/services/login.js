const ENDPOINT = 'http://localhost:4000/api'

export default function login ({ username, password }) {
  return fetch(`${ENDPOINT}/login`, {
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
