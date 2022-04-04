const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLoginPassenger  = require('../middleware/requireLoginPassenger')
const Booking =  mongoose.model("Booking")
const Flight =  mongoose.model("Flight")

//lezemm ndakhel id l flight fel hkeyya
router.post('/booking/:flightId',requireLoginPassenger,(req,res)=>{
    const {name,lastName,email,nbrPlace,Class,RIB,phone,numPasseport,Bagage,cin} = req.body 
    if(!name||!lastName||!email||!nbrPlace||!Class||!RIB||!phone||!numPasseport||!Bagage||!cin){
      return  res.status(422).json({error:"Please add all the fields"})
    }
    //pour verifier si on peut encore reserver
    var s= s + req.nbrPlace
    Flight.findOne({_id:req.params.flightId})
    .exec((err,flight)=>{
        if(err || !flight){
            return res.status(422).json({error:"inexistant flight !"})
        }
        if( s > flight.Capacity){
            return res.status(422).json({error:"No nore seats available !"})
        }
        if (s<= flight.Capacity){
    
    const booking = new Booking({
        name,
        lastName,
        email,
        nbrPlace,
        Class,
        RIB,
        phone,
        numPasseport,
        Bagage,
        cin ,
        bookedBy:req.user ,
        book:req.flight

    })
    booking.save().then(result=>{
        res.json({post:result})
    })
    .catch(err=>{
        console.log(err)
    })
}
})
})
router.put("/updateBooking/:bookingId", requireLoginPassenger, (req, res) => {
    const {name,lastName,email,nbrPlace,Class,RIB,phone,numPasseport,Bagage,cin} = req.body 
    if(!name||!lastName||!email||!nbrPlace||!Class||!RIB||!phone||!numPasseport||!Bagage||!cin){
      return  res.status(422).json({error:"Please add all the fields"})
    }
    Booking.findById({_id:req.params.bookingId})
    .then(result => {
        result.name = name
        result.lastName = lastName
        result.email = email
        result.nbrPlace = nbrPlace
        result.Class = Class
        result.RIB = RIB
        result.phone= phone
        result.numPasseport = numPasseport
        result.Bagage = Bagage
        result.cin = cin
        result.save()
        .then(result=>{
            res.json({message:"updated successfuly"})
        })
        })
    .catch(err => {
        res.status(400).send(err)
    })
})


module.exports = router