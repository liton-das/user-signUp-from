module.exports=()=>{
    return (req,res,nex)=>{
        res.locals.user=req.user
        res.locals.isLoggedIn=req.isLoggedIn
        next()
    }
}