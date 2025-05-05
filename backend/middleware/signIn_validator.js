const {body}=require('express-validator')
module.exports=[
    body('email')
    .not()
    .isEmpty().withMessage('invalid creadentials')
    .isEmail().withMessage('invalid creadentials'),
    body('password')
    .not()
    .isEmpty().withMessage('invalid credentials')
]