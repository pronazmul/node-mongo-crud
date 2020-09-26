const express = require('express')
const app = express()

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://practice-mongo:rWrChfTQDtH7rG8@cluster0.mx72a.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });


app.get('/',(req,res)=>{
    res.send("Hello Programmer Nazmul Hdua")
})




client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});




app.listen(3000)



