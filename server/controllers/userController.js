const {UserModel} = require( './../models/userModel' );
const bcrypt = require( 'bcrypt' );
const {validationResult } = require('express-validator');


const UserController = {


    register: async function (req,res) {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            res.status(400).json({errors: errors.array()});
        }
        else{
            //! My Code
            let encryptedpass = await bcrypt.hash(req.body.password,10)
            
            const newUser = {
                firstname : req.body.firstname,
                lastname : req.body.lastname,
                username : req.body.username,
                password : encryptedpass
            }

            UserModel.createUser(newUser)
            .then(newuserinfo=>{
                res.status(200).json({
                    _id : newuserinfo._id,
                    firstname : newuserinfo.firstname,
                    lastname : newuserinfo.lastname,
                    username : newuserinfo.username,
                })
            })
            .catch(error=>{
                res.status(400).json(error)
            })
        }
    },

    login: async function (req,res) {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            res.status(400).json({errors: errors.array()});
        }
        else{
            //! My Code
            const userrequested = await UserModel.getUserByUsername(req.body.username)

            if(userrequested === null){
                return res.status(400).json({noexits:"This user does not exits"})
            }

            bcrypt.compare( req.body.password, userrequested.password )
            .then(flag =>{
                if( !flag ){
                    res.status(400).json({passworderror: "🔐 This password is wrong"})
                }

                userInfo = {
                    _id: userrequested._id,
                    firstname : userrequested.firstname,
                    lastname : userrequested.lastname,
                    username : userrequested.username,
                }
                res.status(200).json(userInfo);
            })
        }
    }


}

module.exports = { UserController };