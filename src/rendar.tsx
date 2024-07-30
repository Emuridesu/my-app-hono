import { Context, Hono } from 'hono'
import { html } from 'hono/html'
import { jsx } from 'hono/jsx'

const app = new Hono()
declare module 'hono' {
  interface ContextRenderer {
    (content: string | Promise<string>, head: { title: string }): Response | Promise<Response>
  }
}

app.use(async (c, next) => {
    c.setRenderer((content, head) => {
      return c.html(
        <html>
          <head>
            <title>{head.title}</title>
          </head>
          <body>
          <header>{head.title}</header>
            <p>{content}</p>
          </body>
        </html>
      )
    })
    await next()
})

app.get('/', (c) => {
  return c.render(<p>ramen and sushi</p>, {
    title: 'my favorite',
  })
})

app.fire()