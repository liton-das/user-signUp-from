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
        maxlength:30,
        minlength:3,
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
        maslength:30,
        minlength:3
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
        unique:true,
        maxlength:19,
        minlength:6,
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minlength:6,
        maxlength:20,
    },
    confirmPassword:{
        type:String,
        required:true,
        trim:true,
        minlength:6,
        maxlength:20,
    }
})
const SignUp=model('SignUp',SignUpSchema);
module.exports=SignUp;
