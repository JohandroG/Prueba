const { body, validationResult } = require('express-validator');

UserValidator = {

    //*---VALIDATORS FOR REGISTER----------------------------------------------
        registerVal : [
            body('firstname').isLength({min:2}).withMessage('The firstname must be al least 2 caracters long'),
            body('firstname').isLength({max:20}).withMessage('The firstname must be 20 caracters max'),
            body('lastname').isLength({min:2}).withMessage('The lastname must be al least 2 caracters long'),
            body('lastname').isLength({max:20}).withMessage('The lastname must be 20 caracters max'),
            body('username').isLength({min:5}).withMessage('The password must be al least 5 caracters long'),
            body('password').isLength({min:8}).withMessage('The password must be al least 8 caracters long'),

            body('firstname').exists({checkFalsy: true}).withMessage('This space can not be empty'),
            body('lastname').exists({checkFalsy: true}).withMessage('This space can not be empty'),
            body('username').exists({checkFalsy: true}).withMessage('This space can not be empty'),
            body('password').exists({checkFalsy: true}).withMessage('This space can not be empty')
        ],
    
    //*---VALIDATORS FOR LOGIN----------------------------------------------

        loginVal : [
            body('username').isLength({min:5}).withMessage('The password must be al least 5 caracters long'),
            body('password').isLength({min:8}).withMessage('The password must be al least 8 caracters long'),

            body('username').exists({checkFalsy: true}).withMessage('This space can not be empty'),
            body('password').exists({checkFalsy: true}).withMessage('This space can not be empty'),
        ],

    //*---VALIDATORS FOR...----------------------------------------------
    
    }
    
    module.exports = { UserValidator };
    