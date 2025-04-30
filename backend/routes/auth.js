const router=require('express').Router();
const {signUpGetController, signUpPostController}=require('../controllers/auth')
// SignUp get route
router.get('/signUp',signUpGetController)
// SignUp post route
router.post('/signUp',signUpPostController)
module.exports=router;