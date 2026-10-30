// Petite couche d'accès à json-server (voir docs/using-json-server.docx)
const BASE_URL = 'http://localhost:3000/jobs'

async function check(response) {
  if (!response.ok) throw new Error(`Erreur HTTP ${response.status}`)
  return response
}

const headers = { 'Content-Type': 'application/json' }

export const api = {
  async getAll() {
    return (await check(await fetch(BASE_URL))).json()
  },
  async getOne(id) {
    return (await check(await fetch(`${BASE_URL}/${id}`))).json()
  },
  async create(job) {
    return (await check(await fetch(BASE_URL, { method: 'POST', headers, body: JSON.stringify(job) }))).json()
  },
  async update(id, job) {
    return (await check(await fetch(`${BASE_URL}/${id}`, { method: 'PATCH', headers, body: JSON.stringify(job) }))).json()
  },
  async remove(id) {
    await check(await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' }))
  }
}
