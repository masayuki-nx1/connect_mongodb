require('dotenv').config();     //データベースのURLを公開しないため.envから環境変数を読み込む

//データベースにデータを登録する
const { MongoClient } = require("mongodb");
// 下のURIをご自分の値に変更してください
const uri = process.env.DATABASE_URL;
const client = new MongoClient(uri);
async function run() {
const database = client.db('notes');
const notes = database.collection('notes');
// データを登録
const query = [{
id: 2,
title: 'ノート2のタイトルです',
subTitle: 'ノート2のサブタイトルです',
bodyText: 'ノート2の本文です'
},
{
id: 3,
title: 'ノート3のタイトルです',
subTitle: 'ノート3のサブタイトルです',
bodyText: 'ノート3の本文です'
}];
const note = await notes.insertMany(query);
console.log(note);
// 最後にクロースする
await client.close();
}
run()