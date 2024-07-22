import { Hono } from "hono";

const app = new Hono()

// app.get('/api', (c) => {
//     return c.json({message: 'hello'})
// })

// app.get('/', (c) => {
//     return c.html('<h1>hello!hono</h1>')
// })
// app.get('/notfound', (c) => {
//     return c.notFound()
// })
// Response object
app.use('/', async (c, next) => {
    await next()
    c.res.headers.append('X-Debug', 'Debug message')
  })
  app.fire()