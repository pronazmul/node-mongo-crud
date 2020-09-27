const express = require('express')
const bodyParser= require('body-parser')
const app = express()

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://practice-mongo:rWrChfTQDtH7rG8@cluster0.mx72a.mongodb.net/practice-mongo?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


app.get('/',(req,res)=>{
    res.sendFile(__dirname +'/frontend.html')
})


  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())


  client.connect(err => {
    const collection = client.db("practice-mongo").collection("crud")
         
    app.post("/insertData",(req,res)=>{
      collection.insertOne(req.body)
        .then(result => {
          res.send("Data Successfully Submitted")
        })
    })

  });

app.listen(3000)



