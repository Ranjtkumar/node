const express = require("express")

const router = express.Router()

const bodyParser = require("body-parser")

const userModel = require("../models/user-model")

router.use(bodyParser.json())

router.use("/get",(req,res)=>{

    userModel.find().then(
        response =>  res.send(response)
    ).catch(
        err=>console.log(err)
    )
})

router.post("/post",(req,res)=>{
    // console.log(req.body)
    const newUser = new staffModel(req.body)
    newUser.save().then(
        response =>  console.log(response)
    ).catch(
        err=>console.log(err)
    )

    res.send("User post page")
   
})


module.exports = router