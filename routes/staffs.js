const express = require("express")

const router = express.Router()

const bodyParser = require("body-parser")

router.use(bodyParser.json())

const staffModel = require("../models/staff-model")

router.get("/get",(req,res)=>{
    staffModel.find().then(
        response=>res.send(response)
    ).catch(
        err=>console.log(err)
    )
})

router.get("/get/:id",(req,res)=>{
    staffModel.findById(req.params.id).then(
        response=>res.send(response)
    ).catch(
        err=>console.log(err)
    )
})

router.post("/post",(req,res)=>{
    console.log(req.body)
    const newStaff = new staffModel(req.body)
    newStaff.save().then(
        response =>  res.send(response)
    ).catch(
        err=>console.log(err)
    )
   
})

router.put("/update/:id",(req,res)=>{
    console.log(req.body)
    staffModel.findByIdAndUpdate(req.params.id,req.body).then(
        response => res.send(response)
    ).catch(
        err=>console.log(err)
    )

    

})

router.delete("/delete/:id",(req,res)=>{
    console.log(req.params.id)
    staffModel.findByIdAndDelete(req.params.id).then(
        response =>  res.send(response)
    ).catch(
        err=>console.log(err)
    )

   
})


module.exports = router