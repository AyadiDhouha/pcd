// actions of Admin create delete update...
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLoginAdmin  = require('../middleware/requireLoginAdmin')
const Flight =  mongoose.model("Flight")
const Passenger =  mongoose.model("Passenger")
const nodemailer = require("nodemailer")

var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "FlyBook@gmail.com",
      pass: "pcd2022.",
    },
  })

router.post('/admin/createFlight',requireLoginAdmin,(req,res)=>{
    const {Destination,Date,DepatureTime,ArrivalTime,DepatureAirport,ArrivalAirport,Airline,PlaneModel,PlaneManufacturer,Price,Capacity} = req.body 
    if(!Destination||!Date||!DepatureTime||!ArrivalTime||!DepatureAirport||!ArrivalAirport||!Airline||!PlaneModel||!PlaneManufacturer||!Price||!Capacity){
      return  res.status(422).json({error:"Please add all the fields"})
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
        Capacity,
        postedBy:req.user
    })
    flight.save().then(result=>{
        res.json({post:result})
    })
    .catch(err=>{
        console.log(err)
    })
})

//dima inexistant flight malgre njib fel id shih
router.delete('/admin/delete/:flightId',requireLoginAdmin,(req,res)=>{
    Flight.findOne({_id:req.params.flightId})
    .populate("postedBy","_id")
    .exec((err,flight)=>{
        if(err || !flight){
            return res.status(422).json({error:"inexistant flight !"})
        }
        if(flight.postedBy._id.toString() === req.user._id.toString()){
              flight.remove()
              .then(result=>{
                  res.json(result)
              }).catch(err=>{
                  console.log(err)
              })
        }
    })
})
//kif kif fazet l id 

router.put("/admin/updateFlight/:flightId", requireLoginAdmin, (req, res) => {
    const {Destination,Date,DepatureTime,ArrivalTime,DepatureAirport,ArrivalAirport,Airline,PlaneModel,PlaneManufacturer,Price,Capacity} = req.body 
    if(!Destination||!Date||!DepatureTime||!ArrivalTime||!DepatureAirport||!ArrivalAirport||!Airline||!PlaneModel||!PlaneManufacturer||!Price||!Capacity){
      return  res.status(422).json({error:"Please add all the fields"})
    }
    //Flight.populate("bookedBy","_id booking")
    Flight.findOne({_id:req.params.flightId})
    .populate("postedBy","_id")
    .exec((err,flight)=>{
        if(err || !flight){
            return res.status(422).json({error:"inexistant flight !"})
        }
        if(flight.postedBy._id.toString() === req.user._id.toString()){
      
        flight.Destination = Destination
        flight.Date = Date
        flight.DepatureTime = DepatureTime
        flight.ArrivalTime = ArrivalTime
        flight.DepatureAirport = DepatureAirport
        flight.ArrivalAirport = ArrivalAirport
        flight.Airline = Airline
        flight.PlaneModel = PlaneModel
        flight.PlaneManufacturer = PlaneManufacturer
        flight.Price = Price
        flight.Capacity = Capacity
        flight.save()
        .then(result=>{
            res.json({message:"updated successfuly"})
        })
      
      .catch((err) => {
        console.log(err)
      })
    }

        //sending mail to all passengers who already booked the flight 
        // Passenger.find({_id booking:flight.bookedBy._id})
        // .then(passenger=>{
        //     if(!passenger){
        //         return res.status(422).json({error:" No one booked this flight"})
        //     }
            
        //     passenger.save().then((result)=>{
        //         transporter.sendMail({
        //             to:passenger.email,
        //             from:"FlyBook@gmail..com",
        //             subject:"pcd2022.",
        //             html:`
        //             <p>Your flight was modified </p>
        //             <h5>click in this <a href="http://localhost:5000/reset/${token}">link</a> to check the modifications</h5>
        //             `
        //         })
        //         res.json({message:"check your email"})
        //     })

        // })
    })

})


module.exports = router