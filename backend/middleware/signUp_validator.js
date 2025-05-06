const {body}=require('express-validator')
const User = require('../model/signUp')
module.exports=[
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
        const user=await User.findOne({email})
        if(user){
           return Promise.reject('user email already exists')
        }
    }),
    body('phone')
    .not()
    .isEmpty().withMessage('you can not leave this field empty')
    .isLength({min:6}).withMessage('phone number must be at least 6 characters long')
    .isLength({max:21}).withMessage('phone number must be at most 21 characters long')
    .trim()
    .normalizeEmail(),
    body('password')
    .not()
    .isEmpty().withMessage('you can not leave this field empty')
    .isLength({min:6}).withMessage('password must be at least 6 characters long')
    .trim(),
    body('confirm_password')
    .not()
    .isEmpty().withMessage('you can not leave this field empty')
    .isLength({min:6}).withMessage('password must be at least 6 characters long')
    .trim()
    .custom((confirm_password,{req})=>{
        if(confirm_password!==req.body.password){
            throw new Error('password and confirm password does not match')
        }
        return true
    })
]