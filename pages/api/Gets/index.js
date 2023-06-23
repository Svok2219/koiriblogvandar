import {MongoClient} from "mongodb"

async function LoveGetHandler(req,resp) {


const{user}=req.body
const done="false"

if(!email) return

const client = await MongoClient.connect("mongodb+srv://ShuvoKoiri:wXZqMJIk8bAGOfu3@cluster0.fafcxig.mongodb.net/?retryWrites=true&") 

const db = client.db("BlogsCollection")
const collection = db.collection("Loves")
const result = await collection.find({Reactor:user.email})
client.close();

resp.status(201).json({
    Comment: result,
    Message:"Found something boss"
})
}

export default LoveGetHandler;