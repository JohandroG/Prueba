//* REQUIRES
const mongoose = require('mongoose');


//*----------------CONSTRUCTOR-------------------------------------------------------------------------------------
const VoteSchema = new mongoose.Schema({

    question :{
        type : String,
        required : true,
        unique : true,
        minlength : 10,
    },

    option1 : {
        type : String,
        required : true,
    },

    option2 : {
        type : String,
        required : true,
    },

    option3 : {
        type : String,
        default : null
    },

    option4 : {
        type : String,
        default : null
    },

    option1votes : {
        type : Number,
        default : 0
    },

    option2votes : {
        type : Number,
        default : 0
    },

    option3votes : {
        type : Number,
        default : 0
    },

    option4votes : {
        type : Number,
        default : 0
    },

})


//*CONNECT COLLECTION
const Vote = mongoose.model( 'votes', VoteSchema );


//*----------------QUERYS------------------------------------------------------------------------------------------

//?----------------(QUERYS FOR USERS)----------------------------
const voteModel = {

    getallVotes: function(){
        return Vote.find();
    },
    createVote : function(newVote) {
        return Vote.create(newVote);
    },
    getVoteById : function( _id ){
        return Vote.findOne({ _id });
    },
    getVoteByquestion : function( question ){
        return Vote.findOne({ question });
    },
    updateVote: function(_id, voteupdated){
        return Vote.findOneAndUpdate({_id}, {$set : voteupdated}, {new:true})
    },

}

//*----------------QUERYS END--------------------------------------------------------------------------------------

//* EXPORT MODEL (QUERY OBJECTS)
module.exports = {voteModel};