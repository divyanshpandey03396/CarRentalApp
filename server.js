const express=require('express');
const app=express();
const port=process.env.Port||5000;
const dbconnection=require("./db");

app.use('/api/cars',require('./routes/carsRoute'))

app.get('/',(req,res)=>res.send('hello world'))
app.listen(port,()=>console.log(`Server started ${port}`));