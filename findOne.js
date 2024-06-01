require('dotenv').config();     //データベースのURLを公開しないため.envから環境変数を読み込む

//データベースからデータを取り出す
const { MongoClient } = require("mongodb");
// 下のURIをご自分の値に変更してください
const uri = process.env.DATABASE_URL;
const client = new MongoClient(uri);
async function run() {
const database = client.db('notes');
const notes = database.collection('notes');
// idが１のドキュメントを取得
const query = { id: 1 };
const note = await notes.findOne(query);
console.log(note);
// 最後にクロースする
await client.close();
}
run();