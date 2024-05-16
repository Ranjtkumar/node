const express = require("express")

const app = express()

const mongoose = require("mongoose")

const users = require("./routes/user")



const cors = require("cors")

app.use(cors())


mongoose.connect("mongodb://127.0.0.1:27017/Users")

mongoose.connection.on("connected",()=>{
    console.log("Mongodb connected successfully")
})

app.use("/user",users)


app.listen("3001",()=>{
    console.log("Server is running on port 3001")
})



