
require("dotenv").config();
const mongoose= require ("mongoose");
const MONGODB=process.env.MONGODB;

function connectDB(){
 mongoose.connect(MONGODB,{useUnifiedTopology:true,useNewUrlParser:true})
 const connection=mongoose.connection;
 connection.on('connected',()=>{
     console.log("mongo db connected");
 })
 connection.on('error',()=>{
     console.log('connection to db failed');
 })
}

connectDB();

module.exports = mongoose;
