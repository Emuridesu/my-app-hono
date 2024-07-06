import app from '../src/index'

test('POST /message is ok', async () => {
  const req = new Request('http://127.0.0.1:8787/message', {
    method: 'POST',
    body: 'Hello!',
  })
  const res = await app.request(req)
  expect(res.status).toBe(201)
  const text = await res.text()
  expect(text).toBe('Message received')
})

test('GET / is ok', async () => {
  const res = await app.request('http://localhost/')
  expect(res.status).toBe(200)
  const text = await res.text()
  expect(text).toBe('Hello, Hono!')
})

test('GET /user is ok', async () => {
  const res = await app.request('http://localhost/user')
  expect(res.status).toBe(200)
  const text = await res.text()
  expect(text).toBe('User Index')
})

test('GET /user/123 is ok', async () => {
  const res = await app.request('http://localhost/user/123')
  expect(res.status).toBe(200)
  const text = await res.text()
  expect(text).toBe('User ID: 123')
})