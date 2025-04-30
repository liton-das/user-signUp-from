// signUp get controller 
module.exports.signUpGetController=(req,res,next)=>{
    res.status(200).render('auth/signUp.ejs',{title:'Create an account'})
}
// signUp post controller
module.exports.signUpPostController=(req,res,next)=>{
    console.log(req.body);
    
}

// signIn get controller


// signIn post controller

