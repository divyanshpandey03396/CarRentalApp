const express =require ("express");
const router =express.Router();
const Car=require("../modals/carModel");

router.get("/getallcars",async(req,res)=>{
    try{
        const cars=await Car.find();
        res.send(cars);
    }catch(err){
     return res.status(400).json(error);
    }
})

module.exports= router;