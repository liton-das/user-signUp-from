// --------------- validator js ---------------
const {check,validationResult}=require('express-validator')
const router=require('express').Router();
const {signUpGetController, signUpPostController}=require('../controllers/auth')
// SignUp get route
router.get('/signUp',signUpGetController)
// SignUp post route
router.post('/signUp',[
    check('firstName')
    .not()
    .isEmpty().isLength({max:30,min:3}).withMessage('must not be empty'),
    check('lastName')
    .not()
    .isEmpty().isLength({max:30,min:3}).withMessage('must not be empty'),
    check('email')
    .isEmail().withMessage('must be a valid email'),
],signUpPostController)
module.exports=router;