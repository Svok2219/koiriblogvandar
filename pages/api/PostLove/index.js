import {MongoClient} from "mongodb"

async function LoveHandler(req,resp) {
if(req.method !=='POST') return

const{PostID,Clicked,Reactor,dateTime}=req.body
const done="false"

if(!Clicked || !Reactor) return

const client = await MongoClient.connect("mongodb+srv://ShuvoKoiri:wXZqMJIk8bAGOfu3@cluster0.fafcxig.mongodb.net/?retryWrites=true&") 

const db = client.db("BlogsCollection")
const collection = db.collection("Loves")
const result = await collection.insertOne({PostID,Clicked,Reactor,dateTime,done})
client.close();

resp.status(201).json({
    Comment: result,
    Message:"Love shown boss!"
})
}

export default LoveHandler;