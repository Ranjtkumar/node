const express = require("express")

const app = express()
const staffs = require("./routes/staffs")

const mongoose = require("mongoose")

const cors = require("cors")

app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/Staffs")

mongoose.connection.on("connected",()=>{
    console.log("Mongodb was connected successfully")
})

app.get("/",(req,res)=>{
    res.send("Home page")
})

app.use('/staffs',staffs)

app.listen(3001,()=>{
    console.log("server is running on port 3001")
})

