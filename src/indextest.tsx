import app from './index'

test('GET /hello is ok', async () => {
  const res = await app.request('/hello')
  expect(res.status).toBe(200)
  const text = await res.text()
  expect(text).toBe('Hello, World!')
})
