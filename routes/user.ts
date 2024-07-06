import { Hono } from 'hono'

const userRouter = new Hono()

userRouter.get('/', (c) => {
  return c.text('User Index')
})

userRouter.get('/:id', (c) => {
  const userId = c.req.param('id')
  return c.text(`User ID: ${userId}`)
})

export default userRouter