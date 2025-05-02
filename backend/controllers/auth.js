// -------------- bcrypt js  --------------
const bcrypt=require('bcryptjs')
// -------------- User model --------------
const User = require('../model/signUp')
const { validationResult } = require('express-validator')
// signUp get controller 
module.exports.signUpGetController=(req,res,next)=>{
    res.status(200).render('auth/signUp.ejs',{title:'Create an account'})
}
// signUp post controller
module.exports.signUpPostController=async(req,res,next)=>{
    const {firstName,lastName,email,phone,password,confirm_password}=req.body
    // validation
    const erros=validationResult(req)
    const format=(erros)=>erros.msg
    
    const user=await User.findOne({email})
    const salt=await bcrypt.genSalt(10)
    const hashedPassword=await bcrypt.hash(password,salt)
    if(user){
        return res.json({message:'User already exists'})
    }
        const data=new User({
            firstName,
            lastName,
            email,
            phone,
            password:hashedPassword,
            confirm_password:hashedPassword
        })
        console.log(erros.formatWith(format));
        
        try{
            await data.save()
            res.status(201).json({message:'User created successfully'})
        }catch(err){
            res.status(400).json({message:'somthing went wrong',err})
        }


}

// signIn get controller


// signIn post controller

