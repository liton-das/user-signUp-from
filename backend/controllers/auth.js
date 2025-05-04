// -------------- bcrypt js  --------------
const bcrypt=require('bcryptjs')
// -------------- User model --------------
const User = require('../model/signUp')
const { validationResult } = require('express-validator')
// -------------- validation error formater --------------
const errorFormater=require('../utils/validationErrorFormater')
// signUp get controller 
module.exports.signUpGetController=(req,res,next)=>{
    res.status(200).render('auth/signUp.ejs',{title:'Create an account',error:{},values:{}})
}
// signUp post controller
module.exports.signUpPostController = async (req, res, next) => {
  const { firstName, lastName, email, phone, password, confirm_password } = req.body;
  // validation result get from the errors variable
  const errors = validationResult(req).formatWith(errorFormater);
  let value={
    firstName,
    lastName,
    email,
    phone,
    password
  }
  if(!errors.isEmpty()){
    return res.render('auth/signUp.ejs',{title:'Create an account',error:errors.mapped(),values:{value}})
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
 
  const data = new User({
    firstName,
    lastName,
    email,
    phone,
    password: hashedPassword,
    confirm_password: hashedPassword,
  });

  try {
    await data.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(400).json({ message: "somthing went wrong", err });
  }
};

// signIn get controller


// signIn post controller

