const jwt=require('jsonwebtoken')
const {JWT_SECRET}=require('../Keys')
const mongoose=require('mongoose')
const Admin =mongoose.model("Admin")
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
        Admin.findById(_id).then(userdata=>{
            req.user =userdata
            next()
        })
        
    })
}