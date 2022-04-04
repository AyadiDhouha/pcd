const express=require('express')
const app=express()
const mongoose=require('mongoose')
const PORT=5000

const {MONGOURI}= require('./Keys')

mongoose.connect(MONGOURI,{
    useNewUrlParser: true, 
    useUnifiedTopology: true

})
mongoose.connection.on ('connected',()=>{
    console.log("connected to mongo")
})
mongoose.connection.on ('error',(err)=>{
    console.log("error connecting",err)
})

require('./models/passenger')
require('./models/admin')
require('./models/flight')
require('./models/booking')
app.use( express.json())
app.use(require('./routes/authP'))
app.use(require('./routes/authAdmin'))
app.use(require('./routes/Admin'))
app.use(require('./routes/Booking'))
app.listen(PORT,()=>{
    console.log("serveur is running on port ",PORT)
})