const { response } = require('express');
const express = require('express')
const app = express()

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://practice-mongo:rWrChfTQDtH7rG8@cluster0.mx72a.mongodb.net/practice-mongo?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


app.get('/',(req,res)=>{
    res.send("Node Js And MongoDB Programme is Running...")
})




client.connect(err => {
  const collection = client.db("practice-mongo").collection("crud")
  
         collection.insertOne({name:"sania Akter", age:20, institute:"iubat"})
        .then(result => {
          console.log("Single User Inserted Successful")
        })

});

app.listen(3000)



