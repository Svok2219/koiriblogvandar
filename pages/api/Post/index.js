// import { MongoClient ,ServerApiVersion} from "mongodb";
import { MongoClient ,ServerApiVersion} from 'mongodb';


        async function Handler (req,res){
        const data=req.body
         console.log(data)
           const uri = "mongodb+srv://ShuvoKoiri:wXZqMJIk8bAGOfu3@cluster0.fafcxig.mongodb.net/?retryWrites=true&w=majority";
           const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
           client.connect(err => {
             const collection = client.db("BlogsCollection").collection("PostedBlogs");
         
           collection.insertOne(data)
           .then(result=>{
               res.send(result)})
           .catch(err=>console.log(err))
          //  client.close();
           });

            
        }
        export default Handler;
