require('dotenv').config();     //データベースのURLを公開しないため.envから環境変数を読み込む

//idを指定してデータを削除する
const { MongoClient } = require("mongodb");
// 下のURIをご自分の値に変更してください
const uri = process.env.DATABASE_URL;
const client = new MongoClient(uri);
async function run() {
const database = client.db('notes');
const notes = database.collection('notes');
// idが2のドキュメントを削除
const note = await notes.deleteOne({ id: 2});
console.log(note);
// 最後にクロースする
await client.close();
}
run();