const router= require('express').Router();
const {signUpGetController, signUpPostController, signInGetController, signInPostController, logOutController}=require('../controllers/auth');
const { isUnAuthenticated } = require('../middleware/authMiddleware');
const signIn_validator = require('../middleware/signIn_validator');
// -------------- Import SignUp_validator Middleware  --------------
const signUp_validator=require('../middleware/signUp_validator')

// ---------------------------- SignUp get route ----------------------------
router.get('/signUp',isUnAuthenticated,signUpGetController)
// ---------------------------- SignUp post route ----------------------------
router.post('/signUp',isUnAuthenticated,signUp_validator, signUpPostController)
// ---------------------------- SignIn get route ----------------------------
router.get('/signIn',isUnAuthenticated,signInGetController)
// ---------------------------- SignIn post route ----------------------------
router.post('/signIn',isUnAuthenticated,signIn_validator,signInPostController)
// ---------------------------- Logout Get Route ----------------------------
router.get('/logout',logOutController)
module.exports=router;