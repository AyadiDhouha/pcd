const mongoose =require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const FlightSchema = new mongoose.Schema ({
    Destination:{
        type:String,
        required:true
    },
    Date:{
        type:String,
        required:true
    },
    DepatureTime:{
        type:String,
        required:true
    },
    ArrivalTime:{
        type:String,
        required:true
    },
    DepatureAirport:{
        type:String,
        required:true
    },
    ArrivalAirport:{
        type:String,
        required:true
    },
    Airline:{
        type:String,
        required:true
    },
    PlaneModel:{
        type:String,
        required:true
    },
    PlaneManufacturer:{
        type:String,
        required:true
    },

    Price:{
        type:String,
        required:true
    },
    postedBy:{
        type:ObjectId,
        ref:"Admin"
     }
    
   
})
    mongoose.model("Flight",FlightSchema)