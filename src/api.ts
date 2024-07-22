import { Hono } from "hono";

//規定パス アプリケーション内のすべてのルートにおいて共通の
//プレフィックスを設定できる。
//例　下記の「/book」ならapi/bookに変わる

//※ プレフィックスは文字列の前に付加される部分のこと「/api」

const api = new Hono().basePath('/api');

api.get('/book', (c) => c.text('list book'))


//req.headers.get('host')でリクエストホストヘッダーの値を取得
const app = new Hono({
    getPath: (req) =>
        '/' + req.headers.get('post') + req.url.replace(/^https?:\/\/[^/]+(\/[^?]*)/, '$1')
})

app.get('www1.example.com/hello', (c) => c.text('hello www1'))
//httpまたはhttpsが一致すれば

// 各ホスト名に対応するルートを定義
app.get('/www1.example.com/hello', (c) => c.text('hello www1'));
app.get('/www2.example.com/hello', (c) => c.text('hello www2'));

