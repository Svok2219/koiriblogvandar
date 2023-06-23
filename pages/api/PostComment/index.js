import {MongoClient} from "mongodb"

async function CommentHandler(req,resp) {
if(req.method!=='POST') return

const{PostID,Body,Commentor,dateTime}=req.body
const done="false"

if(!Body || !Commentor) return

const client = await MongoClient.connect("mongodb+srv://ShuvoKoiri:wXZqMJIk8bAGOfu3@cluster0.fafcxig.mongodb.net/?retryWrites=true&") 

const db = client.db("BlogsCollection")
const collection = db.collection("Comments")
const result = await collection.insertOne({Body,Commentor,dateTime,PostID})
client.close();
console.log(process.env.DB_USER)
resp.status(201).json({
    Comment: result,
    Message:"Comment Posted boss!"
})
}

export default CommentHandler;