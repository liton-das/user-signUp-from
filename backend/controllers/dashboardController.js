module.exports.getDashboardController=(req,res,next)=>{
  return res.status(200).render('pages/dashboard',{title:'Dashboard'})
}