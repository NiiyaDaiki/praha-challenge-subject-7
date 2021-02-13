const express = require("express");
const app = express();

// port番号
const port = 8080;
// サーバー起動
app.listen(port);

// publicディレクトリ配下の静的ファイルの読み込み
app.use(express.static('public'));

// ルーティング
// キャッシュあり
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/html/index1.html');
});

// キャッシュなし
app.get("/no-store", (req, res) => {
    res.set({
        'Cache-Control': 'no-store',
        'max-age': 0
    });
    res.sendFile(__dirname + '/public/html/no-store.html');
});