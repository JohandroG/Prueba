const express = require( 'express' );
const UserRouter = express.Router();
const {UserController} = require( './../controllers/userController' );
const {UserValidator} = require( './../validators/userValidator' );

//!-----------Routes----------------------------------------------------------------

UserRouter.route('/register').post(UserValidator.registerVal,UserController.register)

UserRouter.route('/login').post(UserValidator.loginVal,UserController.login)

//!-----------Routes----------------------------------------------------------------

module.exports = { UserRouter };