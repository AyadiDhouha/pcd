const mongoose =require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const PlaneSchema = new mongoose.Schema ({
    Model:{
        type:String,
        required:true
    },
    Manufacturer:{
        type:String,
        required:true
    },

    Capacity:{
        type:Number,
        required:true
    },
    ServiceYears:{
        type:Number,
        required:true
    },
    Rating:{
        type:String,
        required:true
    }
})
    mongoose.model("Plane",PlaneSchema)