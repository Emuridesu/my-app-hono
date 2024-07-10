import { Hono } from "hono"

const app = new Hono()

//reqはhttpリクエストの詳細情報を格納。reqを通してメソッドやurlにアクセス可能

app.get('/', (c) => c.text('GET /'))
app.post('/', (c) => c.text('POST /'))
app.put('/', (c) => c.text('PUT /'))
app.delete('/', (c) => c.text('DELETE /'))

app.get('wild/*/card', (c) => c.text('GET wild/*/card'))

app.all('hello', (c) => c.text('any method hello'))

//purgeリクエストが/cacheにアクセスしたらpurgeが実施される
app.on('purge', '/cache', (c) => c.text('purge method /cache'))

//putかdeleteリクエストがpostにアクセスしたらtextが返される
app.on(['PUT', 'DELETE'], '/post', (c) => c.text('PUT or DELETE /post'))

//GETリクエストが[]のいずれかに処理が渡るとhelloが返される
app.on('GET', ['/hello', '/ja/hello', '/en/hello'], (c) => c.text('hello'))

//パスパラメータurlの特定の部分に埋め込まれた変数のようなもの「:name」に入る
//例えばnameがfumiならuser/fumiというurlになる
app.get('user/:name', (c) => {
    const name = c.req.param('name');
    return c.text(`hello ${name}!`);
});

//オプションパラメータはurlの一部として特定のパラメータがなくても
//そのルートがマッチする機能
//'/api/animal/:type?' は '/api/animal' と '/api/animal/:type' の両方にマッチ
app.get('api/animal/:type?/:name?', (c) => {
    const type = c.req.param('type');
    const name = c.req.param('name');

    if (type && name){
        return c.text(`animal type: ${type}, name: ${name}`);
    } else if (type){
        return c.text(`animal type: ${type},`);
    } else {
        return c.text('animal');
    }
})

//正規表現
app.get('post/:date{[0-9]+}/:title{[a-z]+}', (c) => {
    const {date,title} = c.req.param();
    return c.text(`date: ${date}, title: ${title}`);
})

app.get('post/:filename{.+//.png$}', (c) => {
    const filename = c.req.param('param');
    return c.text(`Filename: ${filename}`);
});

app.get('/endpoint', (c) => {
    return c.text('GET /endpoint')
})

.post((c) => {
    return c.text('POST /endpoint')
})

.delete((c) => {
    return c.text('DELETE /endpoint')
})