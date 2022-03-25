const {voteModel} = require( '../models/voteModel' );
const bcrypt = require( 'bcrypt' );
const {validationResult } = require('express-validator');


const VoteController = {


    findallVotes : function(req,res){
        voteModel.getallVotes()
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            console.log(err);
        })
    },

    publishvote: async function(req,res){

        let errors = {}

        let question = req.body.question;
        let option1 = req.body.option1;
        let option2 = req.body.option2;
        let option3 = req.body.option3;
        let option4 = req.body.option4;
        let isValid = true;

        let verifyquestion = await voteModel.getVoteByquestion(question);

        if(!question || !option1 || !option2){
            errors.error1 = "Seems that you leaved empty a required space";
            isValid = false
        }
        if(question.length < 10){
            errors.error2 = "The question must be at least 10 caracters long";
            isValid = false
        }
        if(!option1 || !option2){
            errors.error3 = "You need to provide at least 2 options";
            isValid = false
        }
        if(verifyquestion !== null){
            errors.error4 = "Seems that this question already exist";
            isValid = false
        }

        if(isValid){
            let newVote = {
                question,
                option1,
                option2,
                option3,
                option4
            }

            voteModel.createVote(newVote)
            .then(data=>{
                res.status(200).json(data)
            })
            .catch(err=>{
                res.status(400).json(err)
            })
        }
        else{
            res.status(200).json(errors)
        }

    },

    vote1Option : async function(req,res){

        voteid = req.params._id

        let requestedvote = await voteModel.getVoteById(voteid)

        let currentvalue = requestedvote.option1votes

        let numberupdated = {
            option1votes : currentvalue + 1
        }

        voteModel.updateVote({_id: voteid}, numberupdated)
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            console.log(err);
            res.status(404).end()
        })

    },

    vote2Option : async function(req,res){

        voteid = req.params._id

        let requestedvote = await voteModel.getVoteById(voteid)

        let currentvalue = requestedvote.option2votes

        let numberupdated = {
            option2votes : currentvalue + 1
        }

        voteModel.updateVote({_id: voteid}, numberupdated)
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            console.log(err);
            res.status(404).end()
        })

    },

    vote3Option : async function(req,res){

        voteid = req.params._id

        let requestedvote = await voteModel.getVoteById(voteid)

        let currentvalue = requestedvote.option3votes

        let numberupdated = {
            option3votes : currentvalue + 1
        }

        voteModel.updateVote({_id: voteid}, numberupdated)
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            console.log(err);
            res.status(404).end()
        })

    },

    vote4Option : async function(req,res){

        voteid = req.params._id

        let requestedvote = await voteModel.getVoteById(voteid)

        let currentvalue = requestedvote.option4votes

        let numberupdated = {
            option4votes : currentvalue + 1
        }

        voteModel.updateVote({_id: voteid}, numberupdated)
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            console.log(err);
            res.status(404).end()
        })

    },

    getVoteInfo : function(req,res){
        let _id = req.params._id

        voteModel.getVoteById(_id)
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            res.status(400).end()
        })
    }   

}

module.exports = { VoteController };