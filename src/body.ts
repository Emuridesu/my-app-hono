import { Hono } from 'hono'

const app = new Hono()

// app.get('/welcome', (c) => {
// c.header('X-Message','Hello')
// c.header('Context-Type', 'text/plain')

// c.status(201)

// return c.body('Thank you for coming')
// })

// app.get('/welcome', (c) => {
//     return c.body('Thank you for coming', 201, {
//         'X-Message': 'Hello',
//         'Context-Type': 'text-plain',
//     })
// })

new Response('Thank you for coming',{
    status: 201,
    headers: {
        'X-Message': 'Hello',
        'Context-type': 'text/plain',
    },
})