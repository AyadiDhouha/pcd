const mongoose =require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const PassengerSchema = new mongoose.Schema ({
    name:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    resetToken:String,
    expireToken:Date,
    // nationality:{
    //     type:String,
    //     required:true

    // },
    // PasseportNumber:{
    //     type:String,
    //     required:true

    // },
    // Proffesion:{
    //     type:String,
    //     required:true

    // },
    // phone:{
    //     type:String,
    //     required:true
    // }

})
mongoose.model("Passenger",PassengerSchema)