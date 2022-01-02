import express from "express";
import { MongoClient } from "mongodb";
import dotenv from 'dotenv';

dotenv.config();

const app=express();
app.use(express.json());//middleware converts the data to json

//const PORT =9000;
const PORT = process.env.PORT;
//const MONGO_URL = "mongodb://localhost";
const MONGO_URL = process.env.MONGO_URL;

  async function createMongoConnection(){
const client = new MongoClient(MONGO_URL);
await client.connect();
console.log("MongoDB connected successfully");
return client
  }

  const client = await createMongoConnection(); //new version - type:module

app.get("/",(req,resp)=>{
    resp.send("Hello!!!!***");
});

app.get("/movies", async(req,resp)=>{
 const filter = req.query;
 if(filter.rating)
 filter.rating = +filter.rating;

  const movies = await client.db("b251we")
  .collection("movies").find(filter)
  .toArray();

  resp.send(movies);
});

app.get("/movies/:id", async(req,resp)=>{
    const {id} =req.params;
   const result = await client.db("b251we").collection("movies").findOne({id:id});
   result? resp.send(result):resp.status(404).send({msg:"MOVIE NOT FOUND"});
});

app.post("/movies", async(req,resp)=>{
  const data = req.body;
 const result = await client.db("b251we").collection("movies").insertMany(data);
 resp.send(result);
});

//task

app.delete("/movies/:id", async(req,resp)=>{ 
  const {id} =req.params;
 const result = await client.db("b251we").collection("movies").deleteMany({id:id});
 resp.send(result);
});

app.put("/movies/:id", async(req,resp)=>{ 
  const {id} =req.params;
  const updatedData = req.query;
  const result = await client.db("b251we").collection("movies").updateMany({id:id}, {$set:updatedData});
 resp.send(result);
});


app.listen(PORT,()=>
console.log(" Server Started on PORT",PORT));

