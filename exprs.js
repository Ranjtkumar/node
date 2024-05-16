const express = require("express")
const app = express()

const students = require("./routes/students")
const user = require("./routes/user")


app.get('/',(req,res)=>{
    res.send("Homepage")
})

app.use('/students',students)

app.use('/user',user)



// const app = express()

// app.get("/",(req,res)=>{
//     res.send("Get product page")
// })

// app.get("/post-product",(req,res)=>{
//     res.send("Post product page")
// })

// app.get("/update-product",(req,res)=>{
//     res.send("Update product page")
// })
// app.get("/delete-product",(req,res)=>{
//     res.send("Delete product page")
// })

app.listen(3001,()=>{
    console.log("server is running on port 3001")
})