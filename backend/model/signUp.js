const { Schema, model } = require("mongoose");
// This is the schema for the signUp form
//  firstName,
//  lastName,
//  email,
//  phone,
//  password,
//  confirmPassword,
const SignUpSchema=new Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true,
    },
    phone:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
        trim:true,
    },
    confirm_password:{
        type:String,
        required:true,
        trim:true,
    }
})
const User=model('User',SignUpSchema);
module.exports=User;
