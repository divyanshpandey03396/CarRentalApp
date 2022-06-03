const express=require('express');
const app=express();
const port=process.env.Port||5000;
const dbconnection=require("./db");
const bodyPareser = require("body-parser");
const cors = require("cors");

app.use(bodyPareser.json({ extended: true }));
app.use(bodyPareser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use('/api/cars',require('./routes/carsRoute'))
app.use('/api/users',require('./routes/usersRoute'))
// app.use('/api/bookings/' , require('./routes/bookingsRoute'))
app.get('/',(req,res)=>res.send('hello world'))
app.listen(port,()=>console.log(`Server started ${port}`));