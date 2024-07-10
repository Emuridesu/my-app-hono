import { Hono } from "hono";

const book = new Hono();

book.get('/', (c) => c.text('list books'))

.get('/:id', (c) => {
    const id = c.req.param('id');
    return c.text('get book' + id)
})
.post('/', (c) => c.text('Create book'))

const app = new Hono();

app.route('/book', book);

