const app=require('express')
const server=app()

//connecting mongodb
const mongoose=require('mongoose')
require('dotenv').config();
const MongoUri=process.env.Mongo_uri;

mongoose.connect(MongoUri)
.then(()=>console.log('connected to mongo db atlass'))
.catch((error)=>console.error('mondb connection error',error))




server.get('/',(req,res)=>{
    res.end('hello from express');
})

server.get('/user',(req,res)=>{
    res.end('hello from user');
})

server.get('/products',(req,res)=>{
    res.end('hello from product');
})

server.listen(3006,()=>{
    console.log(`http://localhost:3006/`)
});