const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types
const AdminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    matricule: {
        type: String,
        required: true
    },
    
    

})


mongoose.model("Admin",AdminSchema)