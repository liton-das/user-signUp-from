const router= require('express').Router();
const {signUpGetController, signUpPostController}=require('../controllers/auth');
// const { signUpValidate } = require('../middleware/middleware');
const {body}=require('express-validator')
const User = require('../model/signUp')

const validationMiddleware=[
    body('firstName')
    .not()
    .isEmpty().withMessage('you can not leave this field empty')
    .isLength({min:3}).withMessage('first name must be at least 3 characters long')
    .isLength({max:20}).withMessage('first name must be at most 20 characters long')
    .trim(),
    body('lastName')
    .not()
    .isEmpty().withMessage('you can not leave this field empty')
    .isLength({min:3}).withMessage('last name must be at least 3 characters long')
    .isLength({max:20}).withMessage('last name must be at most 20 characters long')
    .trim(),
    body('email')
    .isEmail().withMessage('you must provide an email')
    .custom(async(email)=>{
        const user=await User.find({email})
        if(user){
           return Promise.reject('user email already exists')
        }
    })
    .normalizeEmail()
    ,
    body('password')
    .not()
    .isEmpty().withMessage('you can not leave this field empty')
    .isLength({min:6}).withMessage('password must be at least 6 characters long')
    .trim(),
    body('confirm_password')
    .custom((confirm_password,{req})=>{
        if(confirm_password!==req.body.password){
            throw new Error('password and confirm password does not match')
        }
    })
]

// SignUp get route
router.get('/signUp',signUpGetController)
// SignUp post route
router.post('/signUp',validationMiddleware, signUpPostController)
module.exports=router;