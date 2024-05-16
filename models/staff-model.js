const mongoose = require("mongoose")

const StaffSchema = new mongoose.Schema({
    name:String,
    age:Number,
    salary:Number,
    role:String,
    location:String

})

const staffModel = mongoose.model("staff",StaffSchema) 

module.exports = staffModel