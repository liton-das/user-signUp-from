const router= require('express').Router();
const {signUpGetController, signUpPostController, signInGetController, signInPostController}=require('../controllers/auth');
const signIn_validator = require('../middleware/signIn_validator');
// -------------- Import SignUp_validator Middleware  --------------
const signUp_validator=require('../middleware/signUp_validator')

// ---------------------------- SignUp get route ----------------------------
router.get('/signUp',signUpGetController)
// ---------------------------- SignUp post route ----------------------------
router.post('/signUp',signUp_validator, signUpPostController)
// ---------------------------- SignIn get route ----------------------------
router.get('/signIn',signInGetController)
// ---------------------------- SignIn post route ----------------------------
router.post('/signIn',signIn_validator,signInPostController)
module.exports=router;