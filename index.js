const express = require('express')
const bodyParser= require('body-parser')
const app = express()

const MongoClient = require('mongodb').MongoClient
const uri = "mongodb+srv://practice-mongo:rWrChfTQDtH7rG8@cluster0.mx72a.mongodb.net/practice-mongo?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const ObjectId = require('mongodb').ObjectId


app.get('/',(req,res)=>{
    res.sendFile(__dirname +'/frontend.html')
})


  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())


  client.connect(err => {
    const collection = client.db("practice-mongo").collection("crud")

    //Insert Data in MongoDB....    
    app.post("/insertData",(req,res)=>{
      collection.insertOne(req.body)
        .then(result => {
          res.sendFile(__dirname +'/frontend.html')
        })
    })

    
  //Read Data From MongoDB......
    app.get("/read",(req,res)=>{
        collection.find({})
        .toArray((err,document)=>{
          res.send(document)
        })
    })

  //Delete Data from MongoDB....
      app.delete("/delete/:id",(req,res)=>{
          collection.deleteOne({_id:ObjectId(req.params.id)})
          .then(result=>{
                res.sendFile(__dirname +'/frontend.html')
          })
      })

});

app.listen(3000)



