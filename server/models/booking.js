const mongoose =require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const BookingSchema = new mongoose.Schema ({
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
    nbrPlace:{
        type:String,
        required:true
    },
    Class:{
        type:String,
        required:true
    },
    RIB:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    numPasseport:{
        type:String,
        required:true
    },
    Bagage:{
        type:String,
        required:true
    },

    cin:{
        type:String,
        required:true
    },
    bookedBy:{
        type:ObjectId,
        ref:"Passenger"
     },
    book:{
        type:ObjectId,
        ref:"Flight"
     }
   
})
    mongoose.model("Booking",BookingSchema)