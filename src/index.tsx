import { Hono } from 'hono'
import userRouter from '../routes/user'

const app = new Hono()

app.route('/user', userRouter)


app.get('/', (c) => {
    return c.text('Hello, Hono!')
})
app.post('/message', async (c) => {
    const body = await c.req.text()
    if (body === 'Hello!') {
    return c.text('Message received', 201)
    }
    return c.text('Bad Request', 400)
})


app.notFound((c) => {
    return c.text('404' , 404)
})

// 存在しないルート
app.get('/trigger-error', (c) => {
    throw new Error('Intentional Error')
})

app.onError((err, c) => {
    console.log(`${err}`)
    return c.text('あたし馬鹿じゃないもん！' , 500)
})
const View = () => {
        return (
        <html>
        <html lang="en"/>
        <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        </head>
        <body>
        <h1>hello</h1>
        </body>
        </html>
        )
}

// app.use(
//   '/auth/*',
//   basicAuth(
//     {
//       username: 'hono',
//       password: 'acoolproject',
//       // Define other params in the first object
//       realm: 'www.example.com',
//     },
//     {
//       username: 'hono-admin',
//       password: 'super-secure',
//       // Cannot redefine other params here
//     },
//     {
//       username: 'hono-user-1',
//       password: 'a-secret',
//       // Or here
//     }
//   )
// )

// app.get('/auth' , (c) => {
//   return c.text('your are authorized')
// })

// app.get('/', (c) => {
//   return c.text('hello.node.js')
// })

// app.get('/page', (c) => {
//   return c.html(<View/>)
// })

// // app.get('/', (c) => {
// //   return c.text('HOno!')
// // })

// app.get('posts/:id' , (c) => {
//   const page = c.req.query('page')
//   const id = c.req.param('id')
//   c.header('MEssage' , 'Hi')
//   return c.text(`you want to see page ${page} of post ${id}`)
// })

// app.get('/api/hello', (c) => {
//   return c.json({
//     ok: true,
//     message: 'hello hono!',
//   })
// })

export default app
