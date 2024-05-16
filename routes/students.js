const express = require("express")

const router = express.Router()

const bodyParser = require("body-parser")

router.use(bodyParser.json())

router.get('/:id',(req,res)=>{
    res.send(`student read page ${req.params?.id}`)
})

router.put('/update',(req,res)=>{
    console.log(req.body)
    res.send("student update page")
})

router.post('/post',(req,res)=>{
    console.log(req.body)
    res.send("student create page")
})

router.delete('/delete/:id',(req,res)=>{
    // console.log(req.params.id)
    res.send(`deleted student ${req.params?.id}`)
})



module.exports = router

