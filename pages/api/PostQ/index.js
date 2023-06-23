import { MongoClient ,ServerApiVersion} from 'mongodb';

async function handlerQuotes(req, resp){
 
    if(req.method !== 'POST') return
 
    const {Writer, Body} = req.body
    const done = "false"
 
    if(!Writer || !Body) return
     
    const client = await MongoClient.connect("mongodb+srv://ShuvoKoiri:wXZqMJIk8bAGOfu3@cluster0.fafcxig.mongodb.net/?retryWrites=true&w=majority")
    const db = client.db("BlogsCollection")
    const collection = db.collection("Qoutes")
    const result = await collection.insertOne({Writer, Body, done})
    client.close()
 
    resp.status(201).json({
        todo: result,
        message: "Quote has been sent"
    })
}
 
export default handlerQuotes