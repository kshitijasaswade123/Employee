const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    joingDate:{
        type:Date,
        default:Date.now()
    },
    salary:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('EmployeeData',employeeSchema)