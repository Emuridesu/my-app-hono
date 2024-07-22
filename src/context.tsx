import { Hono } from 'hono'

const app = new Hono()

app.get('/hello', (c) => {
  const userAgent = c.req.header('User-Agent')
  return c.text(`User-Agent: ${userAgent}`)
})

app.fire()