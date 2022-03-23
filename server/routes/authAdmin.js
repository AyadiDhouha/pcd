const express=require("express")
const router = express.Router()
const mongoose = require('mongoose')
const Admin=mongoose.model('Admin')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const{JWT_SECRET}=require('../Keys')
const requireLogin =require('../middleware/requireLoginAdmin')
const crypto = require('crypto')
const nodemailer = require("nodemailer")


var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "FlyBook@gmail.com",
      pass: "pcd2022.",
    },
  })


 router.get('/admin/protected',requireLogin,(req,res)=>{
    res.send("hello Admin")
 })

router.post('/admin/signup',(req,res)=>{
   const{name,lastName,email,password,matricule,phone,age}=req.body
    if(!email|| !password||!name||!lastName||!matricule||!phone||!age){
         return res.status(422).json({error:"please add  all the fields!"})  
    }
    res.json({message:"saved successfuly"})
    Admin.findOne({email:email})
    .then((savedUser)=>{
        if (savedUser){
            return res.status(422).json({error:"user already exists with that email"})
        }
        bcrypt.hash(password,12)
        .then(hashedpassword=>{
            const user=new Admin({
                email,
                password:hashedpassword,
                name,
                lastName,
                matricule,
                phone,
                age
            })
            user.save()
            .then(user=>{
                res.json({message:"saved successfuly"})
            })
            .catch(err=>{
                console.log(err)
            })

        })
        

    })
    .catch(err=>{
        console.log(err)
    })

    
})
router.post('/admin/signin',(req,res)=>{
    const{email,password}=req.body
    if(!email||!password){
        res.status(422).json({error:"please add email or password"})

    }
    Admin.findOne({email:email})
    .then (savedUser=>{
        if(!savedUser){
            res.status(422).json({error:"invalid email or password"})
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                //res.json({message:"successfuly signed in"})
                const token=jwt.sign({_id:savedUser._id},JWT_SECRET)
                const{_id,name,email}=savedUser
                res.json({token , user:{_id,name,email}})


            }
            else{
                return res.status(422).json({error:"Invalid Email or password"})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
})
//need front to test 
router.post('/admin/reset-password',(req,res)=>{
    crypto.randomBytes(32,(err,buffer)=>{
        if(err){
            console.log(err)
        }
        const token = buffer.toString("hex")
        Admin.findOne({email:req.body.email})
        .then(user=>{
            if(!user){
                return res.status(422).json({error:"Admin dont exists with that email"})
            }
            user.resetToken = token
            user.expireToken = Date.now() + 3600000
            user.save().then((result)=>{
                transporter.sendMail({
                    to:user.email,
                    from:"FlyBook@gmail..com",
                    subject:"pcd2022.",
                    html:`
                    <p>You requested for password reset</p>
                    <h5>click in this <a href="http://localhost:5000/admin/reset/${token}">link</a> to reset password</h5>
                    `
                })
                res.json({message:"check your email"})
            })

        })
    })
})

 //need front to test 
  
router.post("/admin/newPassword", (req, res) => {
    const sentToken = req.body.token;
    Admin.findOne({ resetToken: sentToken, expireToken: { $gt: Date.now() } })
      .then((user) => {
        if(!user){
            res.status(422).json({error:"Session expired"})
        }
        bcrypt
          .hash(newPassword, 12)
          .then((hashedpassword) => {
            user.password = hashedpassword;
            user.resetToken = undefined;
            user.expireToken = undefined;
            user.save().then((saveduser) => {
              res.json({
                message: "Your Password is updated",
            })
            .catch(err=>{
                console.log(err)
            })

        })
        

    })
    .catch(err=>{
        console.log(err)
    })

    
})
})

module.exports=router