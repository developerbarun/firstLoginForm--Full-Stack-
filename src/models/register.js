const mongoose = require('mongoose');

//creating schema 
const registerData = mongoose.Schema({
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required  : true 
    }
});

//creating models
const Register = new mongoose.model("registerData",registerData);

//exporting this file
module.exports = Register;