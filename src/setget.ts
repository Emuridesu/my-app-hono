import { Hono } from "hono/quick";

//typeで型指定しないとset関数内にあるmessage中に第二引数が入らない
type Variables = {
    message: string
}

const app = new Hono<{ Variables: Variables }>()

app.use(async (c, next) => {
    c.set('message', 'Hono is cool!!')
    await next()
})

app.get('/', (c) => {
    const message = c.get('message')
    return c.text(`the message is ${message}`)
})

app.fire()

