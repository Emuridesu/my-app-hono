import { Hono, MiddlewareHandler} from "hono";

const app = new Hono()

const echoMiddleware: MiddlewareHandler<{
    Variables: {
        echo: (str: string) => string
    }
}> = async (c, next) => {
    c.set('echo', (str) => str)
    await next()
}

app.get('/echo',echoMiddleware, (c) => {
    return c.text(c.var.echo('hello'))
})

app.fire()