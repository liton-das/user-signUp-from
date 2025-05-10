const User = require("../model/signUp")

module.exports.bindMiddleware=()=>{
    return async(req,res,next)=>{
        if(!req.session.isLoggedIn){
            return next()
        }
        try {
            const user=await User.findById(req.session.user._id)
            req.user=user
            next()
        } catch (e) {
            console.log(e);
            next(e)
        }
    }
}