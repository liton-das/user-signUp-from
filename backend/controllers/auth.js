// -------------- bcrypt js  --------------
const bcrypt=require('bcryptjs')
// -------------- User model --------------
const User = require('../model/signUp')
const { validationResult } = require('express-validator')
// -------------- validation error formater --------------
const errorFormater=require('../utils/validationErrorFormater')
const router = require('../routes/auth')
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
    return res.status(201).render('auth/signIn.ejs',{title:'Sign In',error:{}})
  } catch (err) {
    return res.status(400).json({ message: "somthing went wrong", err });
  }
};

// --------------------------signIn get controller--------------------------
module.exports.signInGetController=(req,res,next)=>{
  res.render('auth/signIn.ejs',{title:'Sign In',error:{}})
}
// --------------------------signIn post controller--------------------------
module.exports.signInPostController=async(req,res,next)=>{
  const {email,password}=req.body
  const errors=validationResult(req).formatWith(errorFormater)
  if(!errors.isEmpty()){
    return res.render('auth/signIn.ejs',{title:'Sign In',error:errors.mapped()})
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "invalid credentials" });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: "invalid credentials" });
    }
    req.session.isLoggedIn=true
    req.session.user=user
    req.session.save(err=>{
      if(err){
        console.log('session data not saved')
        return next(err)
      }
      return res.redirect('/dashboard')
    })
  } catch (e) {
    console.log(e);
    next(e)
  }
  
}

// ---------------------- Logout controller -----------------------------
module.exports.logOutController=(req,res,next)=>{
  req.session.destroy(err=>{
    if(err){
      return next(err)
    }
    res.redirect('/auth/signIn')
  })
}