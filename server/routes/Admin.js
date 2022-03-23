// actions of Admin create delete update...
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLoginAdmin  = require('../middleware/requireLoginAdmin')
const Flight =  mongoose.model("Flight")

router.post('/admin/createFlight',requireLoginAdmin,(req,res)=>{
    const {Destination,Date,DepatureTime,ArrivalTime,DepatureAirport,ArrivalAirport,Airline,PlaneModel,PlaneManufacturer,Price} = req.body 
    if(!Destination||!Date||!DepatureTime||!ArrivalTime||!DepatureAirport||!ArrivalAirport||!Airline||!PlaneModel||!PlaneManufacturer||!Price){
      return  res.status(422).json({error:"Plase add all the fields"})
    }
    
    const flight = new Flight({
        Destination,
        Date,
        DepatureTime,
        ArrivalTime,
        DepatureAirport,
        ArrivalAirport,
        Airline,
        PlaneModel,
        PlaneManufacturer,
        Price,
        postedBy:req.user
    })
    flight.save().then(result=>{
        res.json({post:result})
    })
    .catch(err=>{
        console.log(err)
    })
})

module.exports = router