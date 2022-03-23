const jwt=require('jsonwebtoken')
const {JWT_SECRET}=require('../Keys')
const mongoose=require('mongoose')
const Passenger =mongoose.model("Passenger")
module.exports=(req,res,next)=>{
    const{authorization}=req.headers
    //authorization===Bearer token
    if(!authorization){
        return res.status(401).json({error:"you must be logged"})

    }
    const token = authorization.replace("Bearer ","")


    jwt.verify(token,JWT_SECRET,(err,payload)=>{
        if(err){
            return res.status(401).json({error:"you must be logged"})

            
        }
        const{_id}=payload
        Passenger.findById(_id).then(userdata=>{
            req.user =userdata
            next()
        })
        
    })
}